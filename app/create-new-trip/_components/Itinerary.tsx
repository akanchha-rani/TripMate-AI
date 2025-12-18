'use client'
import { Timeline } from "@/components/ui/timeline";
import HotelCardItem from "./HotelCardItem";
import PlaceCardItem from "./PlaceCardItem";
import { useTripDetailContext } from "@/app/provider";
import { TripInfo } from "./ChatBox";
import { useEffect, useState } from "react";
import Image from "next/image";
import { div } from "framer-motion/client";
import { ArrowLeft } from "lucide-react";

// const TRIP_DATA = {
//   "destination": "Patna, India",
//   "duration": "3 days",
//   "origin": "Ranchi, India",
//   "budget": "Moderate",
//   "group_size": "2",
//   "hotels": [
//     {
//       "hotel_name": "Hotel Patliputra Continental",
//       "hotel_address": "Frazer Road, Patna, Bihar 800001",
//       "price_per_night": "$50",
//       "hotel_image_url": "https://example.com/hotel1.jpg",
//       "geo_coordinates": {
//         "latitude": 25.603,
//         "longitude": 85.1025,
//       },
//       "rating": 4.2,
//       "description":
//         "A comfortable and well-located hotel with modern amenities.",
//     },
//     {
//       "hotel_name": "Hotel Chanakya International",
//       "hotel_address": "Boring Road, Patna, Bihar 800001",
//       "price_per_night": "$60",
//       "hotel_image_url": "https://example.com/hotel2.jpg",
//       "geo_coordinates": {
//         "latitude": 25.601,
//         "longitude": 85.1015,
//       },
//       "rating": 4.3,
//       "description": "A luxurious hotel with excellent dining options and a spa.",
//     },
//     {
//       "hotel_name": "Hotel Windsor",
//       "hotel_address": "Ashok Rajpath, Patna, Bihar 800008",
//       "price_per_night": "$45",
//       "hotel_image_url": "https://example.com/hotel3.jpg",
//       "geo_coordinates": {
//         "latitude": 25.594,
//         "longitude": 85.107,
//       },
//       "rating": 4,
//       "description":
//         "A budget-friendly hotel with good service and a central location.",
//     },
//   ],
//   "itinerary": [
//     {
//       "day": 1,
//       "day_plan": "Explore historical sites and enjoy local cuisine",
//       "best_time_to_visit_day": "Morning to Evening",
//       "activities": [
//         {
//           "place_name": "Golghar",
//           "place_details":
//             "A historic granary built by the British, offering panoramic views of Patna.",
//           "place_image_url": "https://example.com/golghar.jpg",
//           "geo_coordinates": {
//             "latitude": 25.605,
//             "longitude": 85.103,
//           },
//           "place_address": "Golghar, Patna, Bihar 800001",
//           'ticket_pricing': "$2",
//           "time_travel_each_location": "1 hour",
//           "best_time_to_visit": "Morning",
//         },
//         {
//           "place_name": "Patna Museum",
//           "place_details":
//             "A museum showcasing the history and culture of Bihar.",
//           "place_image_url": "https://example.com/patnamuseum.jpg",
//           "geo_coordinates": {
//             "latitude": 25.602,
//             "longitude": 85.102,
//           },
//           "place_address": "Patna Museum, Patna, Bihar 800001",
//           "ticket_pricing": "$3",
//           "time_travel_each_location": "1.5 hours",
//           "best_time_to_visit": "Afternoon",
//         },
//         {
//           'place_name': "Gandhi Maidan",
//           "place_details":
//             "A large park with historical significance, often hosting cultural events.",
//           'place_image_url': "https://example.com/gandhimaidan.jpg",
//           "geo_coordinates": {
//             "latitude": 25.6,
//             "longitude": 85.101,
//           },
//           "place_address": "Gandhi Maidan, Patna, Bihar 800001",
//           "ticket_pricing": "Free",
//           "time_travel_each_location": "1 hour",
//           "best_time_to_visit": "Evening",
//         },
//       ],
//     },
//     {
//       day: 2,
//       "day_plan": "Visit religious sites and enjoy local food",
//       "best_time_to_visit_day": "Morning to Evening",
//       "activities": [
//         {
//           "place_name": "Mahavir Mandir",
//           "place_details": "A famous Hindu temple dedicated to Lord Hanuman.",
//           "place_image_url": "https://example.com/mahavirmandir.jpg",
//           "geo_coordinates": {
//             "latitude": 25.604,
//             "longitude": 85.1035,
//           },
//           "place_address": "Mahavir Mandir, Patna, Bihar 800001",
//           "ticket_pricing": "Free",
//           "time_travel_each_location": "1 hour",
//           "best_time_to_visit": "Morning",
//         },
//         {
//           "place_name": "Kumhrar Park",
//           "place_details":
//             "An archaeological site with ancient ruins and a museum.",
//           "place_image_url": "https://example.com/kumhrarpark.jpg",
//           "geo_coordinates": {
//             "latitude": 25.58,
//             "longitude": 85.1,
//           },
//           "place_address": "Kumhrar Park, Patna, Bihar 800023",
//           "ticket_pricing": "$2",
//           "time_travel_each_location": "2 hours",
//           "best_time_to_visit": "Afternoon",
//         },
//         {
//           "place_name": "Fraser Road",
//           "place_details":
//             "A bustling street with numerous restaurants and shops.",
//           "place_image_url": "https://example.com/fraserroad.jpg",
//           "geo_coordinates": {
//             "latitude": 25.603,
//             "longitude": 85.1025,
//           },
//           "place_address": "Fraser Road, Patna, Bihar 800001",
//           "ticket_pricing": "Free",
//           "time_travel_each_location": "1.5 hours",
//           "best_time_to_visit": "Evening",
//         },
//       ],
//     },
//     {
//       day: 3,
//       "day_plan": "Explore nature and relax",
//       "best_time_to_visit_day": "Morning to Afternoon",
//       "activities": [
//         {
//           "place_name": "Santhal Pargana",
//           "place_details": "A beautiful park with lush greenery and a lake.",
//           "place_image_url": "https://example.com/santhalpargana.jpg",
//           "geo_coordinates": {
//             "latitude": 25.59,
//             "longitude": 85.11,
//           },
//           "place_address": "Santhal Pargana, Patna, Bihar 800020",
//           "ticket_pricing": "Free",
//           "time_travel_each_location": "1.5 hours",
//           "best_time_to_visit": "Morning",
//         },
//         {
//           "place_name": "Buddha Smriti Park",
//           "place_details":
//             "A serene park dedicated to Lord Buddha, featuring a meditation hall and a museum.",
//           "place_image_url": "https://example.com/buddhasmritipark.jpg",
//           "geo_coordinates": {
//             "latitude": 25.595,
//             "longitude": 85.105,
//           },
//           "place_address": "Buddha Smriti Park, Patna, Bihar 800001",
//           "ticket_pricing": "$2",
//           "time_travel_each_location": "2 hours",
//           "best_time_to_visit": "Afternoon",
//         },
//       ],
//     },
//   ],
// };

function Itinerary() {
  //@ts-ignore
  const {tripDetailInfo, setTripDetailInfo} = useTripDetailContext();
  const [tripData,setTripData] = useState<TripInfo | null>(null);
  useEffect(()=>{
    tripDetailInfo && setTripData(tripDetailInfo)
  },[tripDetailInfo]);

  const data = tripData?[
    {
      title: "Hotels",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tripData?.hotels.map((hotel, index) => (
            <HotelCardItem hotel={hotel} />
          ))}
        </div> 
      ),
    },
    ...tripData?.itinerary.map((dayData) => ({
      title: `Day ${dayData?.day}`,
      content: (
        <div>
          <p className="text-l font-bold text-primary">Best Time: {dayData?.best_time_to_visit_day}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {dayData?.activities.map((activity, index) => (
              <PlaceCardItem activity={activity} />
            ))}
          </div>
        </div>
      ),
    })),
  ]:[];
  return (
    <div className="relative w-full h-[83vh] overflow-auto">
      {tripData ? <Timeline data={data} tripData={tripData} /> : 
      <div>
        <h2 className="flex gap-2 items-center absolute text-3xl text-primary bottom-30 left-40 font-bold"> <ArrowLeft /> Let tell you the perfect plan for your trip..</h2>
        <Image src={'/travel.png'} alt="travel" width={800} height={800} className="w-full h-full object-cover rounded-3xl"/>
        
      </div>
      }
    </div>
  );
}

export default Itinerary;
