"use client";
import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  Command,
} from "lucide-react";

import {
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./NavUser";
import { GetUserDetails } from "@/Actions/GetUserDetails";
import { Separator } from "@/components/ui/separator";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
}
// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  }
];

const SidebarCopm = () => {
 
  const [open, setOpen] = useState(true);
  const [NotificationHandel, setNotificationHandle] = useState(false);
  const [Message, setMsg] = useState([])
  const [UserDetails, setUserDetails] = useState(null)

  const callGetUserFunc = async ()=> {
    const res = await GetUserDetails();
    if(res?.success){
       setUserDetails(res?.data)
       console.log(UserDetails);
       
    }
  }
  
  useEffect(() => {
    callGetUserFunc()
    fetch("/api/socket")
      .then(() => {
        const socketInstance = io({
          path: "/api/socket",
          addTrailingSlash: false,
        });

        socketInstance.on("connect", () => {
          console.log("Connected to Socket.IO server");
        });

        socketInstance.on("disconnect", () => {
          console.log("Disconnected from Socket.IO server");
        });

        socketInstance.on("getNotification", (notification) => { 
          
          setMsg(notification); 
          console.log(notification);
          console.log("notifi")       
          console.log(Message);
        });

        return () => {
          socketInstance.disconnect();
        };
      })
      .catch((err) => {
        console.error("Failed to initialize Socket.IO server:", err);
      });
  }, []);



  const inboxHandel = ()=> {
    NotificationHandel? setNotificationHandle(false):setNotificationHandle(true)
  }

  return (
    <div>
      <SidebarProvider open={open} onOpenChange={setOpen}>
        <Sidebar collapsible="icon">
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel className={'my-10'}>
                {/* <SidebarMenuButton size="lg" asChild> */}
              <a className="flex items-center gap-5" href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="text-black font-bold"><span className="text-primary">K</span>indmeal. Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            {/* </SidebarMenuButton> */}
              </SidebarGroupLabel>
              <Separator/>
              <SidebarGroupContent>
                <SidebarMenu className={'mt-2'}>
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                  <SidebarMenuItem>
                      <SidebarMenuButton asChild>
                        <a onClick={inboxHandel} href={'#'}>
                          <Inbox />
                          <span>Inbox</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                      <span className={`${NotificationHandel?'':'hidden'} ease-in p-2 text-gray-600 max-h-fit w-full bg-gray-100 rounded-sm`}>
                         { Message &&
                           <p>New dish alert! by {Message} Click here to see</p>
                         }  
                      </span>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            { UserDetails &&
        <NavUser user={UserDetails} />
            }
      </SidebarFooter>
        </Sidebar>
        <main>
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    </div>
  );
};

export default SidebarCopm;
