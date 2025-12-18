"use client";
import { Button } from "@/components/ui/button";
import { Clock, ExternalLink, Ticket } from "lucide-react";
import Image from "next/image";
import { Activity } from "./ChatBox";
import { useEffect, useState } from "react";
import axios from "axios";
import { div } from "motion/react-client";

type Props = {
  activity: Activity;
};

function PlaceCardItem({ activity }: Props) {
  const [photoUrl, setPhotoUrl] = useState<string>();
  useEffect(() => {
    activity && GetGoogelPlaceDetail();
  }, [activity]);

  const GetGoogelPlaceDetail = async () => {
    const result = await axios.post("/api/google-place-detail", {
      placeName: activity?.place_name + ":" + activity?.place_address,
    });
    if (result?.data?.e) {
      return;
    }
    setPhotoUrl(result?.data);
  };

  return (
    <div className="flex flex-col gap-1 shadow-md p-1 rounded-md">
      <div className="relative w-full h-48">
        <Image
          src={photoUrl ? photoUrl : "/placeholder.png"}
          alt={activity.place_name}
          fill
          className="object-cover"
        />
      </div>
      <h2 className="font-semibold text-lg">{activity?.place_name}</h2>
      <p className="text-gray-500 line-clamp-2">{activity?.place_details}</p>
      <h2 className="flex gap-2 text-blue-500 line-clamp-1">
        <Ticket /> {activity?.ticket_pricing}
      </h2>
      <p className="flex text-orange-400 gap-2">
        <Clock /> {activity?.best_time_to_visit}
      </p>
      <a
        href={
          "https://www.google.com/maps/search/?api=1&query=" +
          activity?.place_name
        }
        target="_blank"
      >
        <Button size="sm" variant="outline" className="w-full mt-2">
          View <ExternalLink />
        </Button>
      </a>
    </div>
  );
}

export default PlaceCardItem;
