import { useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import { useTripDetailContext } from "@/app/provider";
import { Activity, Itinerary } from "./ChatBox";

function GlobalMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  //@ts-ignore
  const { tripDetailInfo } = useTripDetailContext();

  useEffect(() => {
    mapboxgl.accessToken = "no-token-needed";

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
      center: [-74.5, 40],
      zoom: 1.7,
      projection: "globe",
    });

    mapRef.current = map;

    const markers: mapboxgl.Marker[] = [];

    if (tripDetailInfo?.itinerary) {
      tripDetailInfo.itinerary.forEach((itinerary: Itinerary) => {
        itinerary.activities.forEach((activity: Activity) => {
          if (
            activity?.geo_coordinates?.longitude &&
            activity?.geo_coordinates?.latitude
          ) {
            const marker = new mapboxgl.Marker({ color: "red" })
              .setLngLat([
                activity.geo_coordinates.longitude,
                activity.geo_coordinates.latitude,
              ])
              .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setText(activity.place_name)
              )
              .addTo(mapRef.current!); 
            markers.push(marker);
            const coordinates = [activity?.geo_coordinates?.longitude, activity?.geo_coordinates?.latitude] as [number, number];
            mapRef.current!.flyTo({
              center: coordinates,
              zoom: 10,
              essential: true,
            });
          }
        });
      });
    }

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [tripDetailInfo]);

  return (
    <div className="rounded-2xl" >
      <div
        ref={mapContainerRef}
        style={{
          width: "95%",
          height: "85vh",
          borderRadius: 20,
        }}
      ></div>
    </div>
  );
}

export default GlobalMap;
