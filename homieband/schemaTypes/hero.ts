export default {
    name: "hero",
    title: "Hero Banner",
    type: "document",
    __experimental_actions: ['update', 'publish'], // disable 'create' and 'delete'
    fields: [
      { name: "background", title: "Background Image", type: "image", options: { hotspot: true } },
      { name: "title", title: "Title", type: "string" },
      { name: "headline", title: "Headline", type: "string" },
    ],
  };
  