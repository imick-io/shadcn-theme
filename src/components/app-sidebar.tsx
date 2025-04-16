import { SectionIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  "accordion",
  "alert",
  "alert-dialog",
  "avatar",
  "badges",
  "breadcrumb",
  "buttons",
  "calendar",
  "card",
  "carousel",
  "collapsible",
  "command",
  "context-menu",
  "data-table",
  "date-picker",
  "dialog",
  "drawer",
  "dropdown-menu",
  "hover-card",
  "menubar",
  "navigation-menu",
  "popover",
  "progress",
  "resizable",
  "separator",
  "skeleton",
  "sonner",
  "table",
  "tabs",
  "tooltip",
  "forms",
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item}>
                  <SidebarMenuButton asChild>
                    <a href={`#${item}`}>
                      <SectionIcon />
                      <span>{item}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
