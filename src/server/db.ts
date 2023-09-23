import { PrismaClient } from "@prisma/client";
import { env } from "@/env.mjs";

export const prisma = new PrismaClient({
  log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
});
