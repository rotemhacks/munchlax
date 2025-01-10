import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const profileRouter = createTRPCRouter({
  fetch: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx }) => {
      const profile = await ctx.db.profile.findUnique({
        where: { userId: ctx.session.user.id },
      });
      return profile;
    }),

  create: protectedProcedure
    .input(z.object({ userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.profile.create({
        data: {
          userId: input.userId,
        },
      });
    }),
});
