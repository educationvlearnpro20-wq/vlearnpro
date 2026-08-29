import React, { useEffect } from 'react';

interface FAQSchemaItem {
  question: string;
  answer: string;
}

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  primaryKeyword?: string;
  faqs?: FAQSchemaItem[];
  courseSchema?: {
    name: string;
    description: string;
    provider: string;
  };
  breadcrumbName?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl = 'https://vlearnproeducation.com',
  primaryKeyword,
  faqs,
  courseSchema,
  breadcrumbName
}) => {
  useEffect(() => {
    document.title = title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Update OpenGraph Title & Description
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Inject Dynamic JSON-LD Schemas (Breadcrumbs, FAQs & Courses)
    const existingDynamicScript = document.getElementById('dynamic-page-schema');
    if (existingDynamicScript) {
      existingDynamicScript.remove();
    }

    const schemas: object[] = [];

    // Breadcrumb Schema
    if (breadcrumbName && canonicalUrl !== 'https://vlearnproeducation.com') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Home',
            'item': 'https://vlearnproeducation.com'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': breadcrumbName,
            'item': canonicalUrl
          }
        ]
      });
    }

    // FAQ Schema
    if (faqs && faqs.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      });
    }

    // Course Schema
    if (courseSchema) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Course',
        'name': courseSchema.name,
        'description': courseSchema.description,
        'provider': {
          '@type': 'EducationalOrganization',
          'name': 'VLearnPro Education',
          'sameAs': 'https://vlearnproeducation.com'
        }
      });
    }

    if (schemas.length > 0) {
      const script = document.createElement('script');
      script.id = 'dynamic-page-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schemas);
      document.head.appendChild(script);
    }

    return () => {
      const el = document.getElementById('dynamic-page-schema');
      if (el) el.remove();
    };
  }, [title, description, canonicalUrl, primaryKeyword, faqs, courseSchema, breadcrumbName]);

  return null;
};
