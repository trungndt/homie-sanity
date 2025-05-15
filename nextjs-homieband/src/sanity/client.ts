import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "ipjfioh1",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});

const builder = imageUrlBuilder(client);
// export const urlFor = (source) => builder.image(source);
export function urlFor(source: any) {
    return builder.image(source);
}