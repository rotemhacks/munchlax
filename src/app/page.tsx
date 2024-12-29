import Link from "next/link";
import Image from "next/image";

import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

import munchlaximg from "../../public/images/446Munchlax_Dream_3.png";
import { bebas } from "./fonts";
import LoginButton from "./_components/LoginButton";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }
  return (
    <HydrateClient>
      <main className="hero flex min-h-screen w-screen flex-col items-center justify-center bg-white">
        <div className="hero-content flex-col text-center align-middle lg:flex-row">
          <Image src={munchlaximg} alt="Munchlax! He's so cute" priority />
          <div
            className={`${bebas.className} flex-col justify-center align-middle`}
          >
            <h1
              className={`text-7xl font-bold tracking-widest text-primary lg:text-9xl lg:tracking-wider`}
            >
              MUNCHLAX
            </h1>
            <h2 className="text-4xl text-black lg:text-6xl">
              A FRIENDLY FOOD TRACKER
            </h2>
            <LoginButton />
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
