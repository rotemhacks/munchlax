import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { env } from "../../../env.js";

const usda = env.USDA_KEY;

const FoodsByNameSchema = z.object({
  fdcId: z.number(),
  description: z.string(),
  brandName: z.string().optional(),
});

const FoodsByIdSchema = z.object({
  fdcId: z.number(),
  description: z.string(),
  foodNutrients: z
    .object({
      amount: z.number(),
      nutrient: z.object({
        number: z.string(),
        name: z.string(),
        unitName: z.string(),
      }),
    })
    .array(),
});

// If the API returns a larger structure but you're only interested in the `foods` array:
const FoodsResponseSchema = z.object({
  foods: z.array(FoodsByNameSchema),
});

export const foodSearchRouter = createTRPCRouter({
  searchByName: publicProcedure
    .input(z.object({ searchString: z.string() }))
    .query(async ({ ctx, input }) => {
      try {
        const res = await fetch(
          `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${usda}&query=${input.searchString}`,
        );
        if (!res.ok) throw new Error("Failed to fetch data");
        const data: unknown = await res.json();
        const parsed = FoodsResponseSchema.parse(data);
        const results = parsed.foods.map((food) => ({
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
      // change the nutrients query param for more nutrients (or remove for all)
      const res = await fetch(
        `https://api.nal.usda.gov/fdc/v1/food/${input.fdcId}?nutrients=268,205,203,204&api_key=${usda}`,
      );
      const data: unknown = await res.json();
      const parsed = FoodsByIdSchema.parse(data);
      const result = {
        fdcId: parsed.fdcId,
        description: parsed.description,
        foodNutrients: parsed.foodNutrients.map((nutrient) => ({
          amount: nutrient.amount,
          number: nutrient.nutrient.number,
          name: nutrient.nutrient.name,
          unit: nutrient.nutrient.unitName,
        })),
      };
      return result;
    }),
});
