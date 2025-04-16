import { Button } from "../ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button variant="default">Default</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div className="flex gap-4">
        <Button size="lg">Sizes</Button>
        <Button size="default">Sizes</Button>
        <Button size="sm">Sizes</Button>
        <Button size="icon">I</Button>
      </div>
    </div>
  );
}
