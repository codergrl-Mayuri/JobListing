import { useQuery } from "@tanstack/react-query";
import parse from "html-react-parser";
import DOMPurify from "dompurify";

const fetchHtmlData = async (): Promise<string> => {
  const response = await fetch(
    "https://remote-jobs.remote-jobs-legacy.workers.dev/jobs?offset=1"
  );
  console.log(response)
  if (!response.ok) {
    throw new Error(`Failed to fetch HTML data: ${response.status} ${response.statusText}`);
  }
  return response.text(); 
};

const HtmlRenderer: React.FC = () => {
  const { data, isLoading, isError, error } = useQuery<string, Error>(
    { queryKey: ["htmlData"],
      queryFn: fetchHtmlData,  
     }, 
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  if (!data) return <p>No content available.</p>;

  const sanitizedHtml = DOMPurify.sanitize(data as string);
  console.log(data)
  return <div>{parse(sanitizedHtml)}</div>;
};

export default HtmlRenderer;

