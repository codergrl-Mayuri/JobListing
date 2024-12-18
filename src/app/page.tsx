'use client'
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "@/components/SearchBar";
import JobCard from "@/components/Card";
import SkeletonCard from "@/components/SkeletonCard";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => setLoading(false), 1000);
    };
    fetchData();
  }, []);

  const jobData = [
    {
      id: 1,
      title: "Senior UX Designer",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      logoUrl: "https://github.com/shadcn.png",
    },
    {
      id: 2,
      title: "Marketing Officer",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      logoUrl: "https://github.com/shadcn.png",
    },
    {
      id: 3,
      title: "Marketing Officer",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      logoUrl: "https://github.com/shadcn.png",
    },
    {
      id: 4,
      title: "Marketing Officer",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      logoUrl: "https://github.com/shadcn.png",
    },
    {
      id: 5,
      title: "Marketing Officer",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      logoUrl: "https://github.com/shadcn.png",
    },
    {
      id: 6,
      title: "Marketing Officer",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      logoUrl: "https://github.com/shadcn.png",
    },
    {
      id: 7,
      title: "Marketing Officer",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      logoUrl: "https://github.com/shadcn.png",
    },
    {
      id: 8,
      title: "Marketing Officer",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      logoUrl: "https://github.com/shadcn.png",
    },
    {
      id: 9,
      title: "Marketing Officer",
      salary: "$20,000 - $25,000",
      company: "Google Inc.",
      location: "Dhaka, Bangladesh",
      logoUrl: "https://github.com/shadcn.png",
    },

  ];

  return (
    <>
      <Header/>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-9 pb-6">
          <SearchBar />
          <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
              : jobData.map((job) => (
                  <div
                    key={job.id}
                    onMouseEnter={() => setHoveredCard(job.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <JobCard
                      title={job.title}
                      salary={job.salary}
                      company={job.company}
                      location={job.location}
                      logoUrl={job.logoUrl}
                      isHovered={hoveredCard === job.id} 
                    />
                  </div>
                ))}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

