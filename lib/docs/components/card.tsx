import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export const BasicCard = () => (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Basic Card</CardTitle>
      <CardDescription>A simple card example</CardDescription>
    </CardHeader>
    <CardContent>
      <p>This is a basic card content.</p>
    </CardContent>
  </Card>
);
