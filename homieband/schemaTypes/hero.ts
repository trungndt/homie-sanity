export default {
  name: "hero",
  title: "Hero Banner",
  type: "document",
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: "backgrounds",
      title: "Background Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    { name: "title", title: "Title", type: "string" },
  ],
};
