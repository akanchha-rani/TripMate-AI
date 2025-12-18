'use client'
import { Button } from "@/components/ui/button";
import  { useEffect, useState } from "react";
import { useUserDetailContext } from "../provider";
import { useConvex } from "convex/react";
import { api } from "@/convex/_generated/api";
import { TripInfo } from "../create-new-trip/_components/ChatBox";
import { ArrowBigRightDash } from "lucide-react";
import Image from "next/image";
import MyTripCard from "./_components/MyTripCard";


export type Trip = {
    tripId : any,
    tripDetail : TripInfo,
    _id : string,
}

function MyTrips() { 
  const [myTrips, setMyTrips] = useState<Trip[]>([]); 
  const {userDetail,setUserDetail} = useUserDetailContext();
  const convex = useConvex();

    useEffect(()=>{
        userDetail && GetUserTripDetails();
    },[userDetail]);

  const GetUserTripDetails = async() =>{
    const result = await convex.query(api.tripDetail.GetUserTripDetails,{
        uid:userDetail?._id 
    });
    setMyTrips(result);
    console.log(result);
    
  }

  return (
    <div className="px-10 p-10 md:px-24 lg:px-48">
      <h2 className="font-bold text-3xl">My Trips</h2>

      {myTrips.length == 0 && (
        <div className="p-7 border rounded-2xl flex flex-col items-center justify-center gap-5 mt-6">
          <h2>You don't have any trips created</h2>
          <a href={"/create-new-trip"}>
           <Button>Create New Trip</Button>
          </a>
        </div>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {myTrips?.map((trip,index)=>(
            <MyTripCard trip={trip} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default MyTrips;
