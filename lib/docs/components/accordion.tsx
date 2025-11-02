import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/lib/docs/ui/accordion";

export function AccordionDemo() {
  return (
    <div className="max-w-2xl mx-auto py-12 space-y-10">
      {/* Ghost Variant Only */}
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1" variant="ghost">
          <AccordionTrigger variant="ghost">📦 Product Info</AccordionTrigger>
          <AccordionContent>
            <p>Details about the product go here.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" variant="ghost">
          <AccordionTrigger variant="ghost">🚚 Shipping Info</AccordionTrigger>
          <AccordionContent>
            <p>Ghost variant is clean with no background or borders.</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" variant="ghost">
          <AccordionTrigger variant="ghost">🔁 Return Policy</AccordionTrigger>
          <AccordionContent>
            <p>Minimal variant with bottom borders only.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
