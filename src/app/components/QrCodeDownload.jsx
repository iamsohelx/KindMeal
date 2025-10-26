"use client";
import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const QrCodeDownload = ({ id }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const svgRef = useRef(null);
  const qrValue = `https://kind-meal.vercel.app/claimedfood?id=${id}`;

  const downloadQR = () => {
    const svg = svgRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const img = new Image();
    const blob = new Blob([svgData], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const ctx = canvas.getContext("2d");

    img.onload = () => {
      const padding = 30;

      // Set canvas size larger than image to include padding
      canvas.width = img.width + padding * 2;
      canvas.height = img.height + padding * 2;

      // Fill background with white
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw image with padding offset
      ctx.drawImage(img, padding, padding);

      // Generate and download PNG
      const pngUrl = canvas.toDataURL();
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "qr-code.png";
      link.click();

      URL.revokeObjectURL(url); // Revoke blob if applicable
    };

    img.src = url;
    handelSubmit();
  };

  const handelSubmit = async () => {
    openDialog ? setOpenDialog(false) : setOpenDialog(true);
  };

  return (
    <div>
      <Dialog>
         <DialogTrigger asChild>
          <Button className={"px-5 font-bold font-poppins"}>Grab Now</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className={"font-poppins"}>Download QR</DialogTitle>
          <div className="flex justify-center m-5 flex-col items-center gap-5">
            <QRCodeSVG value={qrValue} size={200} ref={svgRef} />
            <br />
            <Button className={"w-full font-poppins font-bold"} onClick={downloadQR}>
              Download QR
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QrCodeDownload;
