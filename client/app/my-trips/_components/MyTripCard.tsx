import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Trip } from "../page";
import { ArrowBigRightDash } from "lucide-react";
import axios from "axios";

type Props = {
  trip: Trip;
};

function MyTripCard({ trip }: Props) {
  const [photoUrl, setPhotoUrl] = useState<string>();
  useEffect(() => {
    trip && GetGoogelPlaceDetail();
  }, [trip]);

  const GetGoogelPlaceDetail = async () => {
    const result = await axios.post("/api/google-place-detail", {
      placeName: trip?.tripDetail?.destination,
    });
    if (result?.data?.e) {
      return;
    }
    setPhotoUrl(result?.data);
  };

  return (
    <a href={'/view-trip/'+trip?.tripId} className="p-5 shadow-xl rounded-2xl">
      <Image
        src={photoUrl ? photoUrl : "/placeholder.png"}
        alt={trip.tripId}
        width={400}
        height={400}
        className="rounded-xl object-cover w-full h-[270px]"
      />
      <h2 className="flex gap-2 font-semibold text-xl mt-2">
        {trip?.tripDetail?.destination}
        <ArrowBigRightDash />
        {trip?.tripDetail?.origin}
      </h2>
      <h2 className="mt-2 text-gray-500">
        {trip?.tripDetail?.duration} Trip with {trip?.tripDetail?.budget} Budget
      </h2>
    </a>
  );
}

export default MyTripCard;
