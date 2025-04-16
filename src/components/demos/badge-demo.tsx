import { Badge } from "../ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Badge variant="default">Default</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="secondary">Secondary</Badge>
      </div>
    </div>
  );
}
