"use client";
import { Button } from "@/components/ui/button";
import { Star, Wallet } from "lucide-react";
import Image from "next/image";
import { Hotel } from "./ChatBox";
import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  hotel: Hotel;
};

function HotelCardItem({ hotel }: Props) {

  const [photoUrl,setPhotoUrl]=useState<string>();
  useEffect(() => {
    hotel && GetGoogelPlaceDetail();
  }, [hotel]);

  const GetGoogelPlaceDetail = async () => {
    const result = await axios.post("/api/google-place-detail", {
      placeName: hotel?.hotel_name,
    });
    if(result?.data?.e){
      return;
    }
    setPhotoUrl(result?.data);
  };

  return (
    <div className="flex flex-col gap-1 shadow-md p-1 rounded-md">
      <div className="relative w-full h-48">
        <Image
        src={photoUrl?photoUrl:"/placeholder.png"}
        alt={hotel?.hotel_name || "hotel-image"}
        fill
        className="object-cover "
      />
      </div>
      <h2 className="font-semibold text-l">{hotel?.hotel_name}</h2>
      <h2 className="text-gray-500"> {hotel?.hotel_address}</h2>
      <div className="flex justify-between items-center">
        <p className="flex gap-2 text-green-600">
          <Wallet /> {hotel?.price_per_night}
        </p>
        <p className="text-yellow-500 flex gap-2">
          <Star /> {hotel?.rating}
        </p>
      </div>
      <p className="line-clamp-2 text-gray-400">{hotel?.description}</p>
      <a
        href={
          "https://www.google.com/maps/search/?api=1&query=" + hotel?.hotel_name
        }
        target="_blank"
      >
        <Button variant={"outline"} className="w-full mt-1">
          View{" "}
        </Button>
      </a>
    </div>
  );
}

export default HotelCardItem;
