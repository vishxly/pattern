/* eslint-disable @typescript-eslint/no-unused-vars */
import { Token } from "./syntax";

const tokenPatterns: { [key: string]: RegExp | { [subKey: string]: RegExp } } = {
  // Keywords
  keyword: /\b(const|let|var|function|return|if|else|for|while|do|class|interface|extends|implements|import|export|from|as|async|await|try|catch|throw|break|continue|default|case|switch|yield|typeof|instanceof|new|this|super|delete|in|of|void|null|undefined)\b/,
  
  // HTML opening tags (captures tag name only)
  htmlOpenTag: /<(div|a|p|span|h[1-6]|ul|ol|li|img|input|button|form|table|tr|td|th|thead|tbody|section|article|header|footer|nav|main|aside|figure|figcaption|blockquote|pre|code|strong|em|b|i|u|small|mark|del|ins|sub|sup|br|hr|meta|link|script|style|title|head|body|html)(?=\s|>|\/)/gi,
  
  // HTML closing tags (captures tag name only)
  htmlCloseTag: /<\/(div|a|p|span|h[1-6]|ul|ol|li|img|input|button|form|table|tr|td|th|thead|tbody|section|article|header|footer|nav|main|aside|figure|figcaption|blockquote|pre|code|strong|em|b|i|u|small|mark|del|ins|sub|sup|br|hr|meta|link|script|style|title|head|body|html)>/gi,
  
  // Built-in types and values
  builtin: /\b(Array|Object|String|Number|Boolean|Function|Symbol|Map|Set|Promise|Date|RegExp|Error|Math|JSON|console|window|document)\b/,
  
  // String literals (including template literals)
  string: /(["'`])(?:(?=(\\?))\2.)*?\1|`(?:\\[\s\S]|\${(?:[^{}]|{[^}]*})*}|[^\\`])*`/,
  
  // Numbers (including hex, binary, octal)
  number: /\b(?:0[xX][0-9a-fA-F]+|0[bB][01]+|0[oO][0-7]+|\d*\.?\d+(?:[eE][+-]?\d+)?)\b/,
  
  // Comments (single-line and multi-line)
  comment: /\/\/.*$|\/\*[\s\S]*?\*\//m,
  
  // JSX/TSX elements and attributes (keeping original for other XML-like tags)
  jsx: {
    tag: /<\/?[A-Za-z][A-Za-z0-9-]*(?![a-z])|>/,
    attribute: /\b[A-Za-z][A-Za-z0-9]*=/,
  },
  
  // TypeScript types and interfaces
  type: /\b([A-Z][A-Za-z0-9]*|type|interface)\b/,
  
  // Function and method names
  function: /\b[a-zA-Z_]\w*(?=\s*\()/,
  
  // Class names and constructors
  class: /\b[A-Z][A-Za-z0-9_]*\b/,
  
  // Variables and properties
  variable: /\b[a-zA-Z_]\w*\b/,
  
  // Operators (arithmetic, comparison, logical, etc.)
  operator: /[+\-*/%=<>!&|^~?:]+|=>|\+\+|--|&&|\|\||\?\?/,
  
  // Punctuation and delimiters
  punctuation: /[{}[\]();,.<>\/]/,
  
  // Regular expressions
  regex: /\/(?:[^/\\]|\\.)*\/[gimuy]*/,
};

export function tokenize(code: string, language: string): Token[] {
  const tokens: Token[] = [];
  let remaining = code;
  
  while (remaining) {
    let match: RegExpExecArray | null = null;
    let type: string | null = null;
    let matchStart = Infinity;
    let matchLength = 0;
    let content = '';
    
    // Find the earliest matching pattern
    for (const [tokenType, pattern] of Object.entries(tokenPatterns)) {
      if (typeof pattern === 'object' && !pattern.exec) {
        // Handle nested patterns (like JSX)
        for (const [subType, subPattern] of Object.entries(pattern)) {
          const subMatch = subPattern.exec(remaining);
          if (subMatch && subMatch.index < matchStart) {
            match = subMatch;
            type = `${tokenType}-${subType}`;
            matchStart = subMatch.index;
            matchLength = subMatch[0].length;
            content = subMatch[0];
          }
        }
      } else {
        const currentMatch = (pattern as RegExp).exec(remaining);
        if (currentMatch && currentMatch.index < matchStart) {
          match = currentMatch;
          type = tokenType;
          matchStart = currentMatch.index;
          matchLength = currentMatch[0].length;
          
          // For HTML tags, extract only the tag name from capture group
          if (tokenType === 'htmlOpenTag' || tokenType === 'htmlCloseTag') {
            content = currentMatch[1]; // Get the captured tag name
            type = 'htmlTag'; // Use consistent type for coloring
          } else {
            content = currentMatch[0];
          }
        }
      }
    }
    
    if (match && type) {
      // Add any plain text before the match
      if (matchStart > 0) {
        tokens.push({
          type: "plain",
          content: remaining.slice(0, matchStart),
        });
      }
      
      // For HTML tags, we need to handle the brackets separately
      if (type === 'htmlTag') {
        const fullMatch = match[0];
        const tagName = content;
        
        if (fullMatch.startsWith('</')) {
          // Closing tag: </div>
          tokens.push({ type: 'punctuation', content: '</' });
          tokens.push({ type: 'htmlTag', content: tagName });
          tokens.push({ type: 'punctuation', content: '>' });
        } else {
          // Opening tag: <div (attributes might follow)
          tokens.push({ type: 'punctuation', content: '<' });
          tokens.push({ type: 'htmlTag', content: tagName });
          // Don't add closing bracket here as there might be attributes
        }
      } else {
        tokens.push({ type, content });
      }
      
      remaining = remaining.slice(matchStart + matchLength);
    } else {
      // Handle any remaining characters
      tokens.push({ type: "plain", content: remaining[0] });
      remaining = remaining.slice(1);
    }
  }
  
  return tokens;
}
