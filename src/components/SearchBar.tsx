import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, LocateFixed, MapPin } from "lucide-react"; 
import React from "react";

export default function SearchBar() {
  return (
    <div className="w-full p-4 flex justify-center">
      <div className="flex items-center w-full max-w-xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl rounded-lg border border-gray-300 shadow-md bg-white overflow-hidden">
        <div className="relative flex items-center flex-grow px-2 sm:px-3 md:px-4">
          <Search className="absolute left-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by: Job title, Position, Keyword, City, State or Country..."
            className="h-10 sm:h-12 border-none pl-8 sm:pl-10 pr-8 sm:pr-10 text-xs sm:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <LocateFixed className="absolute right-3 h-5 w-5 text-gray-400 cursor-pointer sm:hidden" />
        </div>
        <div className="h-8 w-px bg-gray-300 mx-1 sm:mx-2 hidden sm:block" />
        <div className="relative items-center flex-grow px-2 sm:px-4 hidden sm:flex">
          <MapPin className="absolute left-3 h-5 w-5 text-gray-400" />
          <Input
            type="text"
            placeholder="City, state or country"
            className="h-10 sm:h-12 border-none pl-8 sm:pl-10 pr-8 sm:pr-10 text-xs sm:text-sm focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <LocateFixed className="absolute right-3 h-5 w-5 text-gray-400 cursor-pointer hidden sm:block" />
        </div>
        <Button
          className="h-10 sm:h-12 px-4 sm:px-6 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-none sm:rounded-r-lg sm:ml-2"
        >
          Find Job
        </Button>
      </div>
    </div>
  );
}
