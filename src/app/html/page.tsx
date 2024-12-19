'use client'
import dynamic from 'next/dynamic';

// Dynamically import the HtmlRenderer component with SSR disabled
const HtmlRenderer = dynamic(() => import('@/components/HtmlRenderer'), {
});

const Page: React.FC = () => {
  return (
    <div>
      <HtmlRenderer />
    </div>
  );
};

export default Page;
