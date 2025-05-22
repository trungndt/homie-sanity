import blockContent from "./blockContent";
export default {
    name: "team",
    title: "Team Members",
    type: "document",
    fields: [
      { name: "photo", title: "Photo", type: "image" },
      { name: "name", title: "Name", type: "string" },
      { name: "role", title: "Role", type: "string" },
      { name: "description", title: "Description", type: "blockContent" },
    ],
  };
  