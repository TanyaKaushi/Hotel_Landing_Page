"use client";
import Image from "next/image";
import Nav from "./Nav";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, Menu } from "lucide-react";
import Social from "./Social";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} className="text-white" />
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col justify-between h-full p-12">
          {/* Image */}
          <Image
            src="/footer/logo.svg"
            width={90}
            height={46}
            alt=""
            priority
          />
          {/* Nav */}
          <Nav
            containerStyles="text-black"
            listStyles="flex flex-col gap-y-6 text-xl"
          />

          {/* Social */}
          <Social containerStyles="flex gap-x-4 text-black" />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
