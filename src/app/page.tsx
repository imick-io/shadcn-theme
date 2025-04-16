import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { DataTableDemo } from "../components/demos/data-table-demo";
import { DatePickerDemo } from "../components/demos/data-picker-demo";
import { ContextMenuDemo } from "../components/demos/context-menu-demo";
import { CommandDemo } from "../components/demos/command-demo";
import { CollapsibleDemo } from "../components/demos/collapsible-demo";
import { DialogDemo } from "../components/demos/dialog-demo";
import { DrawerDemo } from "../components/demos/drawer-demo";
import { DropdownMenuDemo } from "../components/demos/dropdown-menu-demo";
import { HoverCardDemo } from "../components/demos/hovercard-demo";
import { MenubarDemo } from "../components/demos/menubar-demo";
import { NavigationMenuDemo } from "@/components/demos/navigation-menu";
import { PopoverDemo } from "@/components/demos/popover-demo";
import { ProgressDemo } from "@/components/demos/progress-demo";
import { ResizableDemo } from "@/components/demos/resizable-demo";
import { AccordionDemo } from "@/components/demos/accordion-demo";
import { AlertDemo } from "@/components/demos/alert-demo";
import { AlertDialogDemo } from "@/components/demos/alert-dialog-demo";
import { AvatarDemo } from "@/components/demos/avatar-demo";
import { BadgeDemo } from "@/components/demos/badge-demo";
import { BreadcrumbDemo } from "@/components/demos/breadcrump-demo";
import { ButtonDemo } from "@/components/demos/button-demo";
import { CalendarDemo } from "@/components/demos/calendar-demo";
import { CardDemo } from "@/components/demos/card-demo";
import { CarouselDemo } from "@/components/demos/carousel-demo";
import { FormDemo } from "@/components/demos/form-demo";
import { PaginationDemo } from "@/components/demos/pagination-demo";
import { SeparatorDemo } from "@/components/demos/separator-demo";
import { SkeletonDemo } from "@/components/demos/skeleton-demo";
import { SonnerDemo } from "@/components/demos/sonner-demo";
import { TableDemo } from "@/components/demos/table-demo";
import { TabsDemo } from "@/components/demos/tabs-demo";
import { TooltipDemo } from "@/components/demos/tooltip-demo";

export default function Home() {
  return (
    <div className="px-10 py-10">
      <main>
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Components</h1>
          <Separator />
        </div>

        <div className="space-y-10">
          <section id="accordion">
            <Card>
              <CardHeader>
                <CardTitle>Accordion</CardTitle>
              </CardHeader>
              <CardContent>
                <AccordionDemo />
              </CardContent>
            </Card>
          </section>

          <section id="alert">
            <Card>
              <CardHeader>
                <CardTitle>Alert</CardTitle>
              </CardHeader>
              <CardContent>
                <AlertDemo />
              </CardContent>
            </Card>
          </section>

          <section id="alert-dialog">
            <Card>
              <CardHeader>
                <CardTitle>Alert Dialog</CardTitle>
              </CardHeader>
              <CardContent>
                <AlertDialogDemo />
              </CardContent>
            </Card>
          </section>

          <section id="avatar">
            <Card>
              <CardHeader>
                <CardTitle>Avatar</CardTitle>
              </CardHeader>
              <CardContent>
                <AvatarDemo />
              </CardContent>
            </Card>
          </section>

          <section id="badges">
            <Card>
              <CardHeader>
                <CardTitle>Badges</CardTitle>
              </CardHeader>
              <CardContent>
                <BadgeDemo />
              </CardContent>
            </Card>
          </section>

          <section id="breadcrumb">
            <Card>
              <CardHeader>
                <CardTitle>Breadcrumb</CardTitle>
              </CardHeader>
              <CardContent>
                <BreadcrumbDemo />
              </CardContent>
            </Card>
          </section>

          <section id="buttons">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent>
                <ButtonDemo />
              </CardContent>
            </Card>
          </section>

          <section id="calendar">
            <Card>
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <CalendarDemo />
              </CardContent>
            </Card>
          </section>

          <section id="card">
            <Card>
              <CardHeader>
                <CardTitle>Card</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDemo />
              </CardContent>
            </Card>
          </section>

          <section id="carousel">
            <Card>
              <CardHeader>
                <CardTitle>Carousel</CardTitle>
              </CardHeader>
              <CardContent>
                <CarouselDemo />
              </CardContent>
            </Card>
          </section>

          <section id="collapsible">
            <Card>
              <CardHeader>
                <CardTitle>Collapsible</CardTitle>
              </CardHeader>
              <CardContent>
                <CollapsibleDemo />
              </CardContent>
            </Card>
          </section>

          <section id="command">
            <Card>
              <CardHeader>
                <CardTitle>Command</CardTitle>
              </CardHeader>
              <CardContent>
                <CommandDemo />
              </CardContent>
            </Card>
          </section>

          <section id="context-menu">
            <Card>
              <CardHeader>
                <CardTitle>Context Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <ContextMenuDemo />
              </CardContent>
            </Card>
          </section>

          <section id="data-table">
            <Card>
              <CardHeader>
                <CardTitle>Data Table</CardTitle>
              </CardHeader>
              <CardContent>
                <DataTableDemo />
              </CardContent>
            </Card>
          </section>

          <section id="date-picker">
            <Card>
              <CardHeader>
                <CardTitle>Date Picker</CardTitle>
              </CardHeader>
              <CardContent>
                <DatePickerDemo />
              </CardContent>
            </Card>
          </section>

          <section id="dialog">
            <Card>
              <CardHeader>
                <CardTitle>Dialog</CardTitle>
              </CardHeader>
              <CardContent>
                <DialogDemo />
              </CardContent>
            </Card>
          </section>

          <section id="drawer">
            <Card>
              <CardHeader>
                <CardTitle>Drawer</CardTitle>
              </CardHeader>
              <CardContent>
                <DrawerDemo />
              </CardContent>
            </Card>
          </section>

          <section id="dropdown-menu">
            <Card>
              <CardHeader>
                <CardTitle>Dropdown Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <DropdownMenuDemo />
              </CardContent>
            </Card>
          </section>

          <section id="hover-card">
            <Card>
              <CardHeader>
                <CardTitle>Hover Card</CardTitle>
              </CardHeader>
              <CardContent>
                <HoverCardDemo />
              </CardContent>
            </Card>
          </section>

          <section id="menubar">
            <Card>
              <CardHeader>
                <CardTitle>Menubar</CardTitle>
              </CardHeader>
              <CardContent className="inline-flex mx-auto">
                <MenubarDemo />
              </CardContent>
            </Card>
          </section>

          <section id="navigation-menu">
            <Card>
              <CardHeader>
                <CardTitle>Navigation Menu</CardTitle>
              </CardHeader>
              <CardContent className="inline-flex mx-auto">
                <NavigationMenuDemo />
              </CardContent>
            </Card>
          </section>

          <section id="navigation-menu">
            <Card>
              <CardHeader>
                <CardTitle>Pagination</CardTitle>
              </CardHeader>
              <CardContent>
                <PaginationDemo />
              </CardContent>
            </Card>
          </section>

          <section id="popover">
            <Card>
              <CardHeader>
                <CardTitle>Popover</CardTitle>
              </CardHeader>
              <CardContent className="inline-flex mx-auto">
                <PopoverDemo />
              </CardContent>
            </Card>
          </section>

          <section id="progress">
            <Card>
              <CardHeader>
                <CardTitle>Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <ProgressDemo />
              </CardContent>
            </Card>
          </section>

          <section id="resizable">
            <Card>
              <CardHeader>
                <CardTitle>Resizable</CardTitle>
              </CardHeader>
              <CardContent>
                <ResizableDemo />
              </CardContent>
            </Card>
          </section>

          <section id="separator">
            <Card>
              <CardHeader>
                <CardTitle>Separator</CardTitle>
              </CardHeader>
              <CardContent>
                <SeparatorDemo />
              </CardContent>
            </Card>
          </section>

          <section id="skeleton">
            <Card>
              <CardHeader>
                <CardTitle>Skeleton</CardTitle>
              </CardHeader>
              <CardContent>
                <SkeletonDemo />
              </CardContent>
            </Card>
          </section>

          <section id="sonner">
            <Card>
              <CardHeader>
                <CardTitle>Sonner</CardTitle>
              </CardHeader>
              <CardContent>
                <SonnerDemo />
              </CardContent>
            </Card>
          </section>

          <section id="table">
            <Card>
              <CardHeader>
                <CardTitle>Table</CardTitle>
              </CardHeader>
              <CardContent>
                <TableDemo />
              </CardContent>
            </Card>
          </section>

          <section id="tabs">
            <Card>
              <CardHeader>
                <CardTitle>Tabs</CardTitle>
              </CardHeader>
              <CardContent>
                <TabsDemo />
              </CardContent>
            </Card>
          </section>

          <section id="tooltip">
            <Card>
              <CardHeader>
                <CardTitle>Tooltip</CardTitle>
              </CardHeader>
              <CardContent>
                <TooltipDemo />
              </CardContent>
            </Card>
          </section>

          <section id="forms">
            <Card>
              <CardHeader>
                <CardTitle>Forms</CardTitle>
              </CardHeader>
              <CardContent>
                <FormDemo />
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
