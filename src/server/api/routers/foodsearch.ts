import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { env } from "../../../env.js";

const usda = env.USDA_KEY;

export const foodSearchRouter = createTRPCRouter({
  searchByName: publicProcedure
    .input(z.object({ searchString: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const res = await fetch(
          `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${usda}&query=${input.searchString}`,
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        // TODO: check about the any here v because this is supposed to be anything
        const data = await res.json();
        const { foods } = data;
        const results = foods.map((food) => ({
          fdcId: food.fdcId,
          foodName: food.description,
          brandName: food.brandName,
        }));
        return results;
      } catch (err) {
        console.error(err);
      }
    }),

  searchById: publicProcedure
    .input(z.object({ fdcId: z.string() }))
    .query(async ({ ctx, input }) => {
      // TODO: same here with the any
      const res = await fetch(
        `https://api.nal.usda.gov/fdc/v1/food/${input.fdcId}?api_key=${usda}`,
      );
      const data = await res.json();
      return data;
    }),
});
