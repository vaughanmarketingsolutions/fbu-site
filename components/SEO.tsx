import React, { useEffect } from 'react';

interface SEOProps {
  path: string;
}

const SEO: React.FC<SEOProps> = ({ path }) => {
  useEffect(() => {
    let title = "Fit Bodies Unlimited | 24/7 Gym & Personal Training Newport News";
    let description = "Fit Bodies Unlimited offers 24/7 gym access, elite personal training, and HIIT classes in Newport News & Yorktown, VA. Achieve your goals with Coach Red.";

    // Logic to map the virtual state path to SEO data
    if (path.includes('classes')) {
      title = "HIIT Classes & Fitness Challenges | Yorktown Gym | Fit Bodies";
      description = "Join our high-intensity interval training classes and Biggest Loser challenges in Yorktown, VA. Adaptive for all fitness levels.";
    } else if (path.includes('training') || path.includes('trainers')) {
      title = "Personal Trainers in Newport News & Yorktown | Expert Coaching";
      description = "Meet our elite team of personal trainers specializing in rehab, performance, and weight loss. Expert coaching at Fit Bodies Unlimited.";
    } else if (path.includes('membership')) {
      title = "Gym Membership Plans & Pricing | 24/7 Access Newport News";
      description = "Affordable gym membership plans in Hampton Roads. Weekly billing, PIF, and no-contract options. Join the elite fitness community.";
    } else if (path.includes('contact')) {
      title = "Contact Fit Bodies Unlimited | Find a Gym Near Me in VA";
      description = "Visit our locations in Newport News and Yorktown. Open 24/7 for members. Get directions and contact information here.";
    }

    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Refresh Schema.org JSON-LD
    const schemaId = 'seo-schema';
    const existingScript = document.getElementById(schemaId);
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.id = schemaId;
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HealthClub",
      "name": "Fit Bodies Unlimited",
      "url": "https://fitbodiesunlimited.com",
      "logo": "https://imgur.com/Hz1tXb2.png",
      "description": description,
      "telephone": "757-344-9844",
      "priceRange": "$",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "135 Harpersville Rd",
          "addressLocality": "Newport News",
          "addressRegion": "VA",
          "postalCode": "23601"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "2900 Hampton Hwy I",
          "addressLocality": "Yorktown",
          "addressRegion": "VA",
          "postalCode": "23693"
        }
      ],
      "openingHours": "Mo-Su 00:00-23:59"
    });
    document.head.appendChild(script);
  }, [path]);

  return null;
};

export default SEO;