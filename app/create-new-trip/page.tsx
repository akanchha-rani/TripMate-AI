"use client";
import React, { useEffect, useState } from "react";
import ChatBox from "./_components/ChatBox";
import Itinerary from "./_components/Itinerary";
import { useTripDetailContext } from "../provider";
import GlobalMap from "./_components/GlobalMap";
import { Button } from "@/components/ui/button";
import { Globe2, Plane } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function CreateNewTrip() {
  //@ts-ignore
  const { tripDetailInfo, setTripDetailInfo } = useTripDetailContext();
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    setTripDetailInfo(null);
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
      <div>
        <ChatBox />
      </div>
      <div className="col-span-2 ">
        {activeIndex == 0 ? <Itinerary /> : <GlobalMap />}
        <Tooltip>
          <TooltipTrigger className="absolute bg-primary bottom-10 left-[65%] rounded-2xl">
            <Button
          size={"lg"} className="bg-black "
          onClick={() => setActiveIndex(activeIndex == 0 ? 1 : 0)}
          
        >
          {" "}
          {activeIndex == 0 ? <Plane /> : <Globe2 />}
        </Button>
          </TooltipTrigger>
          <TooltipContent>
            Switch Between Map and Trip
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
}

export default CreateNewTrip;
