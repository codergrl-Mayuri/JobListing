import axios from "axios";
import { parseJobHTML } from "../utils/jobParser";
import { JobListing } from "../types/job";

const BASE_URL = "https://remote-jobs.remote-jobs-legacy.workers.dev/jobs";

export async function fetchJobs(offset = 1): Promise<JobListing[]> {
  try {
    const response = await axios.get(BASE_URL, {
      params: { offset },
      headers: {
        Accept: "*/*",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      },
    });

    try {
      const parsedJobs: JobListing[] = parseJobHTML(response.data);
      console.log("Parsed Jobs:", parsedJobs);
      return parsedJobs;
    } catch (error) {
      console.error("Error parsing job HTML:", error);
      throw error;
    }
  } catch (error) {
    console.error("Error fetching jobs:", error);
    if (axios.isAxiosError(error)) {
      console.error("Axios Error Data:", error.response?.data);
    } else {
      console.error("General Error:", (error as Error).message);
    }
    throw error;
  }
}
