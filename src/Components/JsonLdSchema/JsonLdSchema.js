
"use client";

export default function JsonLdSchema({ schema }) {
  return (
    <>
    {Array.isArray(schema) ? (
  schema.map((s, idx) => (
    <script
      key={idx}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  ))
) : (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
)}</>
  );
}
