import { Color } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API__URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getColors;
