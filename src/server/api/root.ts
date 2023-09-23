import { createTRPCRouter } from "@/server/api/trpc";
import { greetingRouter } from "./router/greetingRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  greeting: greetingRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
