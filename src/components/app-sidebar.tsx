import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { SidebarOptInForm } from "@/components/sidebar-opt-in-form"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Home",
      url: "/",
      // items: [
      //   {
      //     title: "Installation",
      //     url: "#",
      //   },
      //   {
      //     title: "Project Structure",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Books",
      url: "#",
      // items: [
      //   {
      //     title: "Routing",
      //     url: "#",
      //   },
      //   {
      //     title: "Data Fetching",
      //     url: "#",
      //     isActive: true,
      //   },
      //   {
      //     title: "Rendering",
      //     url: "#",
      //   },
      //   {
      //     title: "Caching",
      //     url: "#",
      //   },
      //   {
      //     title: "Styling",
      //     url: "#",
      //   },
      //   {
      //     title: "Optimizing",
      //     url: "#",
      //   },
      //   {
      //     title: "Configuring",
      //     url: "#",
      //   },
      //   {
      //     title: "Testing",
      //     url: "#",
      //   },
      //   {
      //     title: "Authentication",
      //     url: "#",
      //   },
      //   {
      //     title: "Deploying",
      //     url: "#",
      //   },
      //   {
      //     title: "Upgrading",
      //     url: "#",
      //   },
      //   {
      //     title: "Examples",
      //     url: "#",
      //   },
      // ],
    },
    
   
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">E-Books</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-1">
          <SidebarOptInForm />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
