import { bebas } from "../fonts";

const CalorieDash = () => {
  return (
    <div className="mt-5 flex w-3/4 flex-col items-center justify-center rounded-3xl border border-primary p-3 text-center lg:mt-0 lg:w-1/4">
      <p>Total calories eaten today:</p>
      <p className={`${bebas.className} text-7xl text-primary`}>1541</p>
    </div>
  );
};

export default CalorieDash;
