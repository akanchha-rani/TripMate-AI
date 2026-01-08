"use client";
import Image from "next/image";
import React, { use } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const menuOptions = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact Us", path: "/contact" },
];

function Header() {
  const { user } = useUser();
  const path = usePathname();
  console.log(path);

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="TripMate Logo" width={120} height={40} />
      </div>
      <div className="flex gap-8 items-center">
        {menuOptions.map((menu, index) => (
          <Link href={menu.path}>
            <h2 className="text-lg hover:scale-105 transition-all hover:text-primary">
              {menu.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="flex gap-5 items-center">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="/">
                <Button>Travel Memory</Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Save all your trip memories here</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        {!user ? (
          <SignInButton mode="modal">
            <Button>Get Started</Button>
          </SignInButton>
        ) : path == "/create-new-trip" ? (
          <Link href={"/my-trips"}>
            <Button>My Trips</Button>
          </Link>
        ) : (
          <Link href={"/create-new-trip"}>
            <Button>Create New Trip</Button>
          </Link>
        )}
        <UserButton />
      </div>
    </div>
  );
}

export default Header;
