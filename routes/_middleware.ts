import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 307,
  site: "test1",
  domains: ["test1-deco.deno.dev"],
});
