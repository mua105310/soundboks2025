export function WebsiteStructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Soundboks Udlejning Guide",
          "url": "https://yourdomain.dk",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://yourdomain.dk/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })
      }}
    />
  )
}

export function BlogPostStructuredData({ 
  title, 
  description, 
  datePublished, 
  imageUrl 
}: {
  title: string
  description: string
  datePublished: string
  imageUrl: string
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": description,
          "image": imageUrl,
          "datePublished": datePublished,
          "author": {
            "@type": "Organization",
            "name": "Soundboks Guide"
          }
        })
      }}
    />
  )
}

