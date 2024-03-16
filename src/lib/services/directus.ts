import { createDirectus, rest, staticToken } from "@directus/sdk";

const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL!)
  .with(staticToken(process.env.NEXT_PUBLIC_DIRECTUS_ACCESS_TOKEN!))
  .with(
    rest({
      onRequest: (options) => ({ ...options, cache: "no-store" }),
    }),
  );

export default directus;
