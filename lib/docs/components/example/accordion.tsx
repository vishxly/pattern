import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/lib/docs/ui/accordion";

export const AccordionBasicExample = () => {
  return (
    <div className="w-full max-w-md">
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is this component?</AccordionTrigger>
          <AccordionContent>
            This is a basic accordion implementation using Radix UI primitives
            with custom styling.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I use it?</AccordionTrigger>
          <AccordionContent>
            Simply import the components and use them with your content. The
            accordion supports single or multiple open items.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

  export  const AccordionMultipleExample = () => {
  return (
    <div className="w-full max-w-md">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>🎨 Customization</AccordionTrigger>
          <AccordionContent>
            You can customize the appearance using Tailwind CSS classes and CSS
            variables.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>⚡ Performance</AccordionTrigger>
          <AccordionContent>
            Built with performance in mind using Radix UI primitives and
            optimized animations.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>♿ Accessibility</AccordionTrigger>
          <AccordionContent>
            Fully accessible with keyboard navigation, screen reader support,
            and ARIA attributes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export const AccordionVariantsExample = () => {
  return (
    <div className="w-full max-w-lg space-y-6">
      {/* Default Variant */}
      <div>
        <h4 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
          Default Variant
        </h4>
        <Accordion type="single" collapsible>
          <AccordionItem value="default" variant="default">
            <AccordionTrigger variant="default">Default Style</AccordionTrigger>
            <AccordionContent>
              The default variant with borders and background styling.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Ghost Variant */}
      <div>
        <h4 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
          Ghost Variant
        </h4>
        <Accordion type="single" collapsible>
          <AccordionItem value="ghost" variant="ghost">
            <AccordionTrigger variant="ghost">Ghost Style</AccordionTrigger>
            <AccordionContent>
              Clean ghost variant with no borders or background.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Minimal Variant */}
      <div>
        <h4 className="text-sm font-medium mb-3 text-gray-700 dark:text-gray-300">
          Minimal Variant
        </h4>
        <Accordion type="single" collapsible>
          <AccordionItem value="minimal" variant="minimal">
            <AccordionTrigger variant="minimal">Minimal Style</AccordionTrigger>
            <AccordionContent>
              Minimal variant with bottom borders only.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
