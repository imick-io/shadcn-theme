import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../ui/input-otp";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Slider } from "../ui/slider";
import { Textarea } from "../ui/textarea";
import { ComboboxDemo } from "./combobox-demo";
import { SelectDemo } from "./select-demo";
import { Switch } from "../ui/switch";
import { Toggle } from "../ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

export function FormDemo() {
  return (
    <div className="flex flex-col gap-10">
      <div>
        <Label htmlFor="input" className="mb-2">
          Input
        </Label>
        <Input id="input" />
      </div>

      <div>
        <Label htmlFor="textarea" className="mb-2">
          Textarea
        </Label>
        <Textarea id="textarea" />
      </div>

      <div>
        <ComboboxDemo />
      </div>

      <div>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div>
        <RadioGroup defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
      </div>

      <div>
        <SelectDemo />
      </div>

      <div>
        <Slider
          defaultValue={[50]}
          max={100}
          step={1}
          className={cn("w-[60%]")}
        />
      </div>

      <div>
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </div>

      <div>
        <Label>Toggle</Label>
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
      </div>

      <div>
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="checkbox" />
        <label
          htmlFor="checkbox"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
}
