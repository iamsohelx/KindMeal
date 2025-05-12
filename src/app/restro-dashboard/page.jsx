"use client";
import React, { useState } from "react";
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

const Page = () => {
  // For Dialog Open/Close
  const [openDialog, setOpenDialog] = useState(false);
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
  }
  const handelSubmit = async () => {
    
    let res = await AddItem(FormData)
    openDialog ? setOpenDialog(false) : setOpenDialog(true);
  };
  return (
    <div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogTitle>Post Food Item</DialogTitle>
          <Label htmlFor="message">Food Name</Label>
          <Input
            placeholder="Food Name"
            value={FormData.foodname}
            onChange={(e) => {
              setFormData({
                ...FormData,
                foodname: e.target.value,
              });
            }}
          />
          <Label htmlFor="message">Select Expiry</Label>
          <Select
            onValueChange={(value) =>
              setFormData({
                ...FormData,
                expiry: value,
              })
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Expiry Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Expiry</SelectLabel>
                <SelectItem value="1">1 Hour</SelectItem>
                <SelectItem value="2">2 Hours</SelectItem>
                <SelectItem value="3">3 Hours</SelectItem>
                <SelectItem value="6">6 Hours</SelectItem>
                <SelectItem value="12">12 Hours</SelectItem>
                <SelectItem value="24">24 Hours</SelectItem>
                <SelectItem value="48">48 Hours</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Label htmlFor="message">Description</Label>
          <Textarea
            className="resize-none"
            placeholder="Type your message here."
            id="message"
            value={FormData.description}
            onChange={(e) =>
              setFormData({
                ...FormData,
                description: e.target.value,
              })
            }
          />
          <Label htmlFor="message">Address</Label>
          <Input
            placeholder="Address"
            value={FormData.address}
            onChange={(e) =>
              setFormData({
                ...FormData,
                address: e.target.value,
              })
            }
          />
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture"
                 type="file"
                 onChange={(e)=>setFormData({
                  ...FormData,
                  img:e.target.files?.[0]
                 })}

          />
          <Button onClick={handelSubmit}>Add Food</Button>
        </DialogContent>
      </Dialog>
      <Button onClick={openSubmit}>Add Food</Button>
    </div>
  );
};

export default Page;
