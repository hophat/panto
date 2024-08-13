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
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <nav className=" flex-row flex bg-white justify-between w-full  flex-1 p-4 border-2 border-black">
        <div className="justify-start">
          <div className="flex flex-row gap-3 items-center">
            <BoxMain>
              <img
                src="https://cdn.prod.website-files.com/65c3a67cde56d79febb2fb8c/66ba2cca9ddd7759c7907fd7_eg-headshot.png"
                width={"50px"}
              />
            </BoxMain>

            <div className="font-bold text-xl"><label className="text-blue-600 text-2xl">Panto</label> by Ho Phat</div>
          </div>
        </div>
        <div className="justify-end max-[550px]:hidden ">
          <ButtonMain className="px-2 font-bold">Call for me</ButtonMain>
        </div>
      </nav>
    </header>
  );
}
