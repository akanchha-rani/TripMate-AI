"use client";

import { Button } from "@/components/ui/button";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowDown,
  Landmark,
  Mountain,
  PlusCircle,
  Send,
  Umbrella,
  Users,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";
import React, { use } from "react";
import { useRouter } from "next/navigation";
import Footer from "./Footer";

export const suggestions = [
  {
    title: "Plan Journey",
    icon: <PlusCircle className="text-purple-500 h-5 w-5" />,
  },
  {
    title: "Wild Trails",
    icon: <Mountain className="text-green-500 h-5 w-5" />,
  },
  {
    title: "Together Travel",
    icon: <Users className="text-yellow-600 h-5 w-5" />,
  },
  {
    title: "Coastal Retreats",
    icon: <Umbrella className="text-blue-400 h-5 w-5" />,
  },
  {
    title: "Timeless Heritage",
    icon: <Landmark className="text-orange-700 h-5 w-5" />,
  },
];

function Hero() {
  const { user } = useUser();
  const router = useRouter();

  const onSend = () => {
    if (!user) {
      router.push("/sign-in");
      return;
    }
    router.push("/create-new-trip");
  };

  return (
    <div className="mt-24 w-full flex justify-center">
      <div className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-xl md:text-5xl font-bold">
          Your AI-powered <span className="text-primary">trip planner</span>
        </h1>
        <p className="text-lg">
          Intelligent itineraries, personalized for the way you travel.
        </p>
        <div>
          <div className="border rounded-2xl p-4 shadow-xl relative">
            <Textarea
              placeholder="Plan your trip here"
              className="w-full h-28 bg-transparent border-none focus-visible:ring-0 shadow-none resize-none"
            ></Textarea>
            <Button
              size={"icon"}
              className="absolute bottom-6 right-6"
              onClick={() => onSend()}
            >
              {" "}
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex gap-4">
          {suggestions.map((suggestions, index) => (
            <div
              key={index}
              className="flex items-center gap-1 border rounded-full p-1 cursor-pointer hover:bg-primary hover:text-white"
            >
              {suggestions.icon}
              <h2 className="text-md">{suggestions.title}</h2>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center flex-col">
          <h2 className="my-7 mt-14 flex gap-2 text-center">
            Not sure where to start from? <strong>See how it works</strong>
            <ArrowDown />
          </h2>
          <HeroVideoDialog
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc="https://www.example.com/dummy-video"
            thumbnailSrc="https://mma.prnewswire.com/media/2401528/1_MindtripProduot./og70-faocbook"
            thumbnailAlt="Dummy Video Thumbnail"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
