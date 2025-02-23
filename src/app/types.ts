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

export type Profile = {
  id: string;
  userId: string;
  dateOfBirth?: Date | null;
  height?: number | null; // in cm
  friends: string[]; // friend user ids
};

export type BasicFoodInfo = {
  fdcId: string;
  foodName: string;
  brandName: string | undefined;
};