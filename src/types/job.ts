export interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  tags: string[];
  postedTime: string;
  description: string;
  applyLink: string;
  logoUrl: string;
}

export interface JobDetailsFromHtml {
  "@context": string;
  "@type": string;
  datePosted: string;
  description: string;
  baseSalary: {
    "@type": string;
    currency: string;
    value: {
      "@type": string;
      minValue: number;
      maxValue: number;
      unitText: string;
    };
  };
  employmentType: string;
  directApply: string;
  industry: string;
  jobLocationType: string;
  applicantLocationRequirements: {
    "@type": string;
    name: string;
  };
  jobLocation: {
    address: {
      "@type": string;
      addressCountry: string;
      addressRegion: string;
      streetAddress: string;
      postalCode: string;
      addressLocality: string;
    };
  }[];

  title: string;
  image: string;
  occupationalCategory: string;
  workHours: string;
  validThrough: string;
  hiringOrganization: {
    "@type": string;
    name: string;
    url: string;
    sameAs: string;
    logo: {
      "@type": string;
      url: string;
    };
  };
}
