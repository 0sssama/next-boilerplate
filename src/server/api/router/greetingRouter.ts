import { z } from "zod";
import { createTRPCRouter, privateProcedure } from "@/server/api/trpc";

export const greetingRouter = createTRPCRouter({
  getGreeting: privateProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `Hello there, ${input.name}!`,
      };
    }),
});
