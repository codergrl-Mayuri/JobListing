import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark, BookmarkCheck, MapPin } from "lucide-react"; // Import the filled bookmark icon
import Image from "next/image";
import { useState, useEffect } from "react";

interface JobCardProps {
  id: string | number;
  title: string;
  salary: string;
  company: string;
  location: string;
  logoUrl: string;
  isHovered?: boolean;
}

const JobCard: React.FC<JobCardProps> = ({
  id,
  title,
  salary,
  company,
  location,
  logoUrl,
  isHovered = false,
}) => {
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

  useEffect(() => {
    const bookmarkedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs") || "[]");
    setIsBookmarked(bookmarkedJobs.includes(id));
  }, [id]);

  const toggleBookmark = () => {
    const bookmarkedJobs = JSON.parse(localStorage.getItem("bookmarkedJobs") || "[]");

    if (isBookmarked) {
      const updatedBookmarks = bookmarkedJobs.filter((jobId: string | number) => jobId !== id);
      localStorage.setItem("bookmarkedJobs", JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    } else {
      const updatedBookmarks = [...bookmarkedJobs, id];
      localStorage.setItem("bookmarkedJobs", JSON.stringify(updatedBookmarks));
      setIsBookmarked(true);
    }
  };

  return (
    <Card
      className={`w-full h-40 border border-gray-200 shadow-md rounded-sm overflow-hidden transition-transform ease-in-out duration-300 transform
        ${isHovered ? "scale-105 border-gray-300 shadow-lg bg-gradient-to-r from-orange-100 to-white" : "bg-gradient-to-r from-gray-50 via-white to-gray-50"}`}
    >
      <CardHeader className="p-3 text-left mr-8 ml-2">
        <CardTitle className="text-base font-semibold mb-1">{title}</CardTitle>
        <div className="flex items-left gap-3">
          <Badge variant="secondary" className="w-fit text-green-500 bg-green-100">
            REMOTE
          </Badge>
          <p className="text-sm text-gray-500">Salary: {salary}</p>
        </div>
      </CardHeader>

      <CardContent className="flex justify-start items-center p-3 gap-3 ml-2">
        <Image
          src={logoUrl}
          alt="Company Logo"
          width={40}
          height={40}
          className="rounded"
        />
        <div className="text-sm text-left">
          <p className="font-medium">{company}</p>
          <div className="flex items-center text-gray-500 text-xs">
            <MapPin className="h-4 w-4 mr-3" />
            {location}
          </div>
        </div>
        {/* Conditionally render the bookmark icon */}
        {isBookmarked ? (
          <BookmarkCheck
            className="h-5 w-5 text-black hover:text-black ml-auto mr-2"
            onClick={toggleBookmark}
          />
        ) : (
          <Bookmark
            className="h-5 w-5 text-gray-400 hover:text-black ml-auto mr-2"
            onClick={toggleBookmark}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default JobCard;
