import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, LocateFixed, MapPin } from "lucide-react"; 
import React, { useState } from "react";
import { useQueryState } from "nuqs";

export default function SearchBar() {
  const [locationError, setLocationError] = useState<string | null>(null);
  const [city, setCity] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(false); 
  const [search, setSearch] = useQueryState("search", {defaultValue: ""})
  const [cityQuery, setCityQuery] = useQueryState("city", {defaultValue: ""});

  // Check location permission status before calling geolocation
  const checkLocationPermission = async () => {
    try {
      const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });
      if (permissionStatus.state === 'granted') {
        // Proceed with getting the location if granted
        handleGetLocation();
      } else if (permissionStatus.state === 'denied') {
        setLocationError("Location access is denied. Please enable location access in your browser settings.");
      }
    } catch (err) {
      console.error(err);
      setLocationError("Failed to check location permissions.");
    }
  };

  const handleGetLocation = () => {
    if (isActive) {
      setCity("");
      setCityQuery("");
      setIsActive(false);
      return;
    }

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        console.log(`User location: Latitude ${latitude}, Longitude ${longitude}`);
        setLocationError(null);

        try {
          const cityName = await getCityFromCoordinates(latitude, longitude);
          setCity(cityName);
          setCityQuery(cityName);
          setIsActive(true); 
        } catch (err) {
          console.error(err);
          setLocationError("Failed to fetch city name. Please try again.");
        }
      },
      (err) => {
        setLocationError(`Error: ${err.message}`);
      }
    );
  };

  const getCityFromCoordinates = async (lat: number, lon: number): Promise<string> => {
    const apiKey = process.env.NEXT_PUBLIC_OPENCAGE_API_KEY; 
    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch geocoding data.");
    }

    const data = await response.json();
    const city = data.results[0]?.components?.city || data.results[0]?.components?.town || "Unknown location";
    console.log(`City: ${city}`);
    return city;
  };

  return (
    <div className={`w-full pt-10 p-4 flex justify-center transition-all duration-300`}>
      <div className="flex items-center w-full max-w-xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-lg border border-gray-300 shadow-md bg-white overflow-hidden">
        <div className="relative flex items-center flex-grow px-2 sm:px-3 md:px-4">
          <Search className="absolute left-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by: Job title, Position, Keyword, City, State or Country..."
            className="h-10 sm:h-12 border-none pl-8 sm:pl-10 pr-8 sm:pr-10 text-xs sm:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <LocateFixed
            className={`absolute right-3 h-5 w-5 cursor-pointer sm:hidden ${
              isActive ? "text-blue-500" : "text-gray-400"
            }`} 
            onClick={checkLocationPermission} // Check permission before calling handleGetLocation
          />
        </div>
        <div className="h-8 w-px bg-gray-300 mx-1 sm:mx-2 hidden sm:block" />
        <div className="relative items-center flex-grow px-2 sm:px-4 hidden sm:flex">
          <MapPin className="absolute left-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            value={cityQuery || city}
            onChange={(e) => setCityQuery(e.target.value)}
            placeholder="City, state or country"
            className="h-10 sm:h-12 border-none pl-8 sm:pl-10 pr-8 sm:pr-10 text-xs sm:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <LocateFixed
            className={`absolute right-3 h-5 w-5 cursor-pointer hidden sm:block ${
              isActive ? "text-blue-500" : "text-gray-400"
            }`} 
            onClick={checkLocationPermission} // Check permission before calling handleGetLocation
          />
        </div>
        <Button
          className="h-10 sm:h-12 px-4 sm:px-6 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-none sm:rounded-r-lg sm:ml-2"
        >
          Find Job
        </Button>
      </div>
      {locationError && <p className="text-red-500 mt-2">{locationError}</p>}
    </div>
  );
}
