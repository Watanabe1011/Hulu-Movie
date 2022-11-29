import type { NextPage } from "next";
import Image from "next/image";
import { Result } from "../../utils/interface/movieInterface";

type Props = {
  result: Result;
};

const Thumbnail: NextPage<Props> = ({ result }) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  console.log(result);

  return (
    <div className="">
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        height={1080}
        width={1920}
        alt=""
      />
    </div>
  );
};

export default Thumbnail;
