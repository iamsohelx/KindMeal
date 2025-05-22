"use client";
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AddItem } from "@/Actions/AddItem";
import { io } from "socket.io-client";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";



const FoodFormSchema = z.object({
    foodname: z.string().min(2,{message:"Please enter food name"}),
    expiry: z.enum(['1','2','3','6','12','24','48']),
    description:z.string().min(20,{message:"Enter minimum 20 characters"}),
    address: z.string().min(2),
})

const FoodAddForm = () => {
  const [ImageFile, setImage] = useState(null)
  // Zod 
  const form = useForm({
    resolver:zodResolver(FoodFormSchema),
    defaultValues:{
      foodname: "",
      expiry: "",
      description: "",
      address: "",
    }
  })

  // Web Socket
  const [socket, setSocket] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [Id, setId] = useState("");
  const [Restroname, setRestroName] = useState("")
 

  useEffect(() => {
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

        // socketInstance.on("message", (message) => {
        //   setMessages((prevMessages) => [...prevMessages, message]);
        // });

        setSocket(socketInstance);

        return () => {
          socketInstance.disconnect();
        };
      })
      .catch((err) => {
        console.error("Failed to initialize Socket.IO server:", err);
      });
  }, []);

  const sendNotification = () => {
    if (socket && Id) {
      const newNotification = {
        id: Id,
        restroname: Restroname,
        date: new Date(),
      };
        
      socket.emit("Notification", newNotification);
      console.log("Notificaton");

      console.log(newNotification);

    }
  };
  // For Dialog Open/Close
  // Form Data Handle
  const [FormData, setFormData] = useState({
    foodname: "",
    expiry: "",
    description: "",
    address: "",
    img: "",
  });

  const openSubmit = () => {
    setOpenDialog(true);
  };
  const handelSubmit = async (data) => {
    console.log("Daatata");
    
    console.log(data);
    
    let res = await AddItem(data, ImageFile);
    const { id, restroname, success } = res;
    console.log(success + id + restroname);
    
    if (success) {
      setId(id);
      setRestroName(restroname)
      console.log(Id + "Id wala");
      
      if (Id && 1){
        console.log("Response");


      sendNotification();
    }
    openDialog ? setOpenDialog(false) : setOpenDialog(true);
  };
}

  return (
    <div>
      <Form {...form}>
      
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogTitle>Post Food Item</DialogTitle>
         <form onSubmit={form.handleSubmit(handelSubmit)}> 
          <FormField
           control={form.control}
           name="foodname"
           render={({ field })=>(
             <FormItem>
               <Label htmlFor="message">Food Name</Label>
               <Input
               placeholder="Food Name"
               {...field}
             />
             <FormMessage/>
             </FormItem>
           )}
          >
          </FormField>

          <FormField
           name="expiry"
           control={form.control}
           render={({field})=>(
            <FormItem>
             <Label htmlFor="message">Select Expiry</Label>
           <Select
            onValueChange={field.onChange}
            defaultValues={field.value}
          >
            <FormControl>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Expiry Time" />
            </SelectTrigger>
            </FormControl>
            <SelectContent>
                <SelectItem value="1">1 Hour</SelectItem>
                <SelectItem value="2">2 Hours</SelectItem>
                <SelectItem value="3">3 Hours</SelectItem>
                <SelectItem value="6">6 Hours</SelectItem>
                <SelectItem value="12">12 Hours</SelectItem>
                <SelectItem value="24">24 Hours</SelectItem>
                <SelectItem value="48">48 Hours</SelectItem>
            </SelectContent>
          </Select>
          <FormMessage/>
          </FormItem>
                
           )}
          >
</FormField>

<FormField
 name="description"
 control={form.control}
 render={({ field })=>(
  <FormItem>
   <Label htmlFor="message">Description</Label>
  <Textarea
  {...field}
  className="resize-none"
  placeholder="Type your message here."
  id="message"
/>
<FormMessage/>
   </FormItem>

 )}
>
          </FormField>

          <FormField
           control={form.control}
           name="address"
           render={({ field })=>(
            <FormItem>
              <Label htmlFor="message">Address</Label>
              <Input
                placeholder="Address"
                {...field}
              />
            <FormMessage/>
            </FormItem>
           )}
          >
          </FormField>
           <Label htmlFor="picture">Picture</Label>
          <Input
            id="picture"
            type="file"
            onChange={(e) =>
              setImage(
            
              e.target.files?.[0],
              )
            }
          />
          <Button type={'submit'}>Add Food</Button>
          </form>
        </DialogContent>
      </Dialog>
      <Button onClick={openSubmit}>Add Food</Button>
      </Form>
    </div>
  );
};

export default FoodAddForm;
