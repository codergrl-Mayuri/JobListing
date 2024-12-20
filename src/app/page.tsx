"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchJobs } from "../services/jobService";
import Header from "../app/Header";
import SearchBar from "@/components/SearchBar";
import JobCard from "@/components/Card";
import Footer from "../app/Footer";
import SkeletonCard from "@/components/SkeletonCard";
import { useState } from "react";

export default function JobsPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["jobs", 1],
    queryFn: () => fetchJobs(1),
  });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching jobs</div>;
  if (data) console.log("Data", data);

  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow px-9 pb-6">
          <SearchBar />
          <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {isLoading
              ? Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : data?.map((job) => (
                  <div
                    key={job.id}
                    onMouseEnter={() => setHoveredCard(job.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <JobCard
                      id={job.id}
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
