import { JobDetailsFromHtml, JobListing } from "@/types/job";
import * as cheerio from "cheerio";

export function parseJobHTML(html: string): JobListing[] {
  try {
    console.log("Starting to parse job HTML");
    const $ = cheerio.load(html);

    const job = {
      title: $('h2[itemprop="title"]').text().trim(),
      company: $('h3[itemprop="name"]').text().trim(),
      location: $("div.location").first().text().trim(),
      salary: $("div.location").eq(1).text().trim(),
      description: $("div.markdown").text().trim(),
      companyUrl: $('a[itemprop="url"]').attr("href"),
      companyLogo: $('img[itemprop="image"]').attr("data-src"),
    };
    console.log("job", job);

    const jobJsonParsed: JobDetailsFromHtml[] = [];

    const jsonDatafromHtml = $('script[type="application/ld+json"]');
    console.log("jsonDatafromHtml", jsonDatafromHtml);

    jsonDatafromHtml.each((_, element) => {
      try {
        const jsonData = JSON.parse(element.children[0].data);
        jobJsonParsed.push(jsonData);
      } catch (error) {
        console.error("Error parsing JSON data from HTML element:", error);
      }
    });

    console.log("jobJson", jobJsonParsed);

    if (jobJsonParsed.length === 0) {
      throw new Error("No job data found in HTML");
    }

    let i = 0;
    const jobListings: JobListing[] = jobJsonParsed.map(
      (jobJson: JobDetailsFromHtml) => {
        return {
          id: i++,
          title: jobJson.title ?? "",
          company: jobJson.hiringOrganization.name ?? "",
          // location: jobJson.jobLocation[0].address.addressLocality ?? "",
          location: "",

          salary:
            "$" +
            jobJson.baseSalary.value.minValue +
            " - " +
            "$" +
            jobJson.baseSalary.value.maxValue,
          tags: [jobJson.industry],
          postedTime: jobJson.datePosted ?? "",
          description: jobJson.description ?? "",
          applyLink: jobJson.hiringOrganization.url ?? "",
          // logoUrl:
          //   jobJson.hiringOrganization.logo?.url ??
          //   "https://github.com/shadcn.png",
          logoUrl: "https://github.com/shadcn.png",
        };
      }
    );

    console.log("Finished parsing job HTML");
    return jobListings;
  } catch (error) {
    console.error("Error parsing job HTML:", error);
    return [];
  }
}
