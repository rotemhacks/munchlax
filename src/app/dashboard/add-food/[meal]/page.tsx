import AddFood from "~/app/_components/AddFood";
import { bebas } from "~/app/fonts";
import backicon from "../../../../../public/images/backicon.svg";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{ meal: string }>;
};

const AddFoodPage = async ({ params }: Props) => {
  const meal = (await params).meal;

  return (
    <div className="mx-auto w-4/5 lg:w-full">
      <div className="flex flex-row items-baseline gap-5">
        <Link href="/dashboard">
          <Image
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            src={backicon}
            alt="Cancel and go back"
            width={50}
            height={50}
          />
        </Link>
        <h2 className={`${bebas.className} mt-5 text-5xl lg:text-7xl`}>
          <span className="text-primary">Add food to: </span>
          <span>{meal.toLocaleUpperCase()}</span>
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row">
        <AddFood meal={meal} />
      </div>
    </div>
  );
};

export default AddFoodPage;
