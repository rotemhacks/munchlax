declare module "*.png" {
  import type { StaticImageData } from "next/image";
  const value: StaticImageData;
  export default value;
}

declare module "*.jpg" {
  import type { StaticImageData } from "next/image";
  const value: StaticImageData;
  export default value;
}

declare module "*.jpeg" {
  import type { StaticImageData } from "next/image";
  const value: StaticImageData;
  export default value;
}

declare module "*.gif" {
  import type { StaticImageData } from "next/image";
  const value: StaticImageData;
  export default value;
}

declare module "*.svg" {
  const content: string;
  export default content;
}
