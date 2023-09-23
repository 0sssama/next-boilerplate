import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  getHello: publicProcedure.query(async () => {
    return {
      text: "Hey there",
    };
  }),
});

export type AppRouter = typeof appRouter;
