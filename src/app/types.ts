export type Food = {
  name: string;
  manufacturer: string;
  serving: number;
  servingUnit: string;
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
};

export type User = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};