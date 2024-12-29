import { Bebas_Neue, Roboto_Flex, Roboto } from "next/font/google";

export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const roboflex = Roboto_Flex({
  subsets: ["latin-ext"],
  weight: "400",
  display: "swap",
});

export const roboflexlight = Roboto_Flex({
  subsets: ["latin-ext"],
  weight: "200",
  display: "swap",
});

export const roboto = Roboto({
  subsets: ["latin-ext"],
  weight: "400",
  display: "swap",
});
