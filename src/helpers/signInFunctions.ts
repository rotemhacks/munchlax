"use server";

import { signIn } from "~/server/auth";

export const signInWithServer = async (provider: string) => {
  await signIn(provider);
};
