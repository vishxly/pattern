import { ComponentGroup } from "@/lib/docs/types";
import TagSelectorDemo from "../components/tag-selector";

export const tagSelectorRegistry: ComponentGroup = {
  name: "tag-selectorRegistry",
  title: "Tag Selector",
  description: "A React component that provides tag-selector functionality.",
  category: "components",
  components: ["Tag-selectorDemo"],
  installation: {
    cliCommand:
      'npx shadcn@latest add "https://zeroui.vercel.app/r/tag-selector"',
    dependencies: ["react", "lucide-react", "motion/react"],
    componentPath: "components/ui/tag-selector.tsx",
    utilsCode:
      'import { ClassValue, clsx } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}',
  },
  props: [],
  variants: {
    basic: {
      title: "Basic Tag-selector",
      description: "A basic implementation of the Tag-selector component.",
      component: TagSelectorDemo,
      image: "/images/components/tag-selector-basic.png",
      fallbackImage:
        "/placeholder.svg?height=300&width=400&text=Basic%20Tag-selector",
      code: '"use client";\n\nimport React, { useState } from "react";\n\nimport TagSelector from "@/lib/docs/ui/tag-selector";\nconst initialTags = [\n  "innovation",\n  "productivity",\n  "collaboration",\n  "learning",\n  "automation",\n];\n\nconst TagSelectorDemo = () => {\n  const [selected, setSelected] = useState<string[]>([]);\n  return (\n    <div>\n      <TagSelector\n        initialTags={initialTags}\n        selectedTags={selected}\n        onChange={setSelected}\n      />\n    </div>\n  );\n};\n\nexport default TagSelectorDemo;',
      manualCode:
        '"use client"\r\n\r\nimport { useState } from "react"\r\nimport { CircleX, Plus } from "lucide-react"\r\nimport { AnimatePresence, motion } from "motion/react"\r\n\r\nexport interface TagSelectorProps {\r\n  initialTags?: string[]\r\n  selectedTags?: string[]\r\n  onChange?: (selected: string[]) => void\r\n  className?: string\r\n}\r\n\r\nexport default function TagSelector({\r\n  initialTags = ["react", "tailwindcss", "javascript"],\r\n  selectedTags: controlledSelectedTags,\r\n  onChange,\r\n  className = "",\r\n}: TagSelectorProps) {\r\n  const [internalSelected, setInternalSelected] = useState<string[]>([])\r\n  const [internalTags, setInternalTags] = useState<string[]>(initialTags)\r\n\r\n  const selectedTag = controlledSelectedTags ?? internalSelected\r\n  const tags = initialTags.filter((tag) => !selectedTag.includes(tag))\r\n\r\n  const handleTagClick = (tag: string) => {\r\n    const newSelected = [...selectedTag, tag]\r\n    if (onChange) {\r\n      onChange(newSelected)\r\n    } else {\r\n      setInternalSelected(newSelected)\r\n    }\r\n  }\r\n  const handleDeleteTag = (tag: string) => {\r\n    const newSelectedTag = selectedTag.filter((selected) => selected !== tag)\r\n    if (onChange) {\r\n      onChange(newSelectedTag)\r\n    } else {\r\n      setInternalSelected(newSelectedTag)\r\n    }\r\n  }\r\n  return (\r\n    <div className={`flex w-[300px] flex-col gap-4 p-4 ${className}`}>\r\n      <div className="flex flex-col items-start justify-center gap-1">\r\n        <p>Selected Tags</p>\r\n        <AnimatePresence>\r\n          <div className="bg-background flex min-h-12 w-full flex-wrap items-center gap-1 rounded-xl border p-2">\r\n            {selectedTag?.map((tag) => (\r\n              <motion.div\r\n                key={tag}\r\n                layout\r\n                className="group bg-primary text-primary-foreground group-hover:bg-primary group-hover:text-foreground flex cursor-pointer flex-row items-center justify-center gap-2 rounded-md border px-2 py-1"\r\n                onClick={() => handleDeleteTag(tag)}\r\n                initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}\r\n                animate={{\r\n                  y: 0,\r\n                  opacity: 1,\r\n                  filter: "blur(0px)",\r\n                }}\r\n                exit={{ y: 20, opacity: 0, filter: "blur(4px)" }}\r\n                transition={{ duration: 0.3, bounce: 0, type: "spring" }}\r\n              >\r\n                {tag}{" "}\r\n                <CircleX\r\n                  size={16}\r\n                  className="flex items-center justify-center rounded-full transition-all duration-300 ease-in-out"\r\n                />\r\n              </motion.div>\r\n            ))}\r\n          </div>\r\n        </AnimatePresence>\r\n      </div>\r\n      <AnimatePresence>\r\n        <div className="flex flex-wrap items-center gap-1">\r\n          {tags.map((tag, index) => (\r\n            <motion.div\r\n              layout\r\n              key={index}\r\n              className="group bg-background text-primary-foreground flex cursor-pointer flex-row items-center justify-center gap-2 rounded-md border px-2 py-1"\r\n              onClick={() => handleTagClick(tag)}\r\n              initial={{ y: -20, opacity: 0, filter: "blur(4px)" }}\r\n              animate={{\r\n                y: 0,\r\n                opacity: 1,\r\n                filter: "blur(0px)",\r\n              }}\r\n              exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}\r\n              transition={{ duration: 0.3, bounce: 0, type: "spring" }}\r\n            >\r\n              {tag}{" "}\r\n              <Plus\r\n                size={16}\r\n                className="hover:bg-primary group-hover:text-foreground flex items-center justify-center rounded-full transition-all duration-300 ease-in-out"\r\n              />\r\n            </motion.div>\r\n          ))}\r\n        </div>\r\n      </AnimatePresence>\r\n    </div>\r\n  )\r\n}\r\n',
    },
  },
};
