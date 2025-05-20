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
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngUrl = canvas.toDataURL();
      const link = document.createElement("a");
      link.href = pngUrl;
      link.download = "qr-code.png";
      link.click();
      URL.revokeObjectURL(url);
    };

    img.src = url;
    handelSubmit()
  };

  const handelSubmit = async () => {
    openDialog ? setOpenDialog(false) : setOpenDialog(true);
  };

  return (
    <div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogTitle>Download QR</DialogTitle>
          <div className="flex justify-center m-5 flex-col items-center gap-5">
            <QRCodeSVG value={qrValue} size={200} ref={svgRef} />
            <br />
                <Button className={'w-full'} onClick={downloadQR}>Download QR</Button>

          </div>
        </DialogContent>
      </Dialog>
      <Button onClick={handelSubmit}>Grab Now</Button>
    </div>
  );
};

export default QrCodeDownload;
