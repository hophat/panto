"use client";

import { useState } from "react";

// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   ChartPieIcon,
//   CursorArrowRaysIcon,
//   FingerPrintIcon,
//   SquaresPlusIcon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";
import ButtonMain from "./ui/buttonMain";
import BoxMain from "./ui/boxMain";
import { blob } from "stream/consumers";
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

export default function Section() {
  return (
    <section className="  w-full   justify-start">
      <div className="flex flex-col mt-12 ">
        <div
          style={{ height: "auto", lineHeight: "100%" }}
          className="lg:text-8xl text-4xl  font-black"
        >
          Hey There,
        </div>
        <div
          style={{ height: "auto", lineHeight: "100%" }}
          className="font-black  lg:text-8xl text-4xl"
        >
          {" "}
          I'm <label className="text-blue-600">Phat Ho</label>
        </div>
      </div>
      <div className="flex lg:flex-row mt-20 flex-col gap-4 mt-4 w-full">
        <div className="lg:w-1/2 w-full">
          <div className=" bg-white border-black border-2 p-3">thông tin</div>
        </div>

        <div className="lg:w-1/2 w-full">
          {" "}
          <div className=" bg-white border-black border-2 p-3">Hình ảnh</div>
        </div>
        {/*  */}
      </div>
    </section>
  );
}
