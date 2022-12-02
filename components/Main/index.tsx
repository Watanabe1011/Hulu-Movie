import type { NextPage } from "next";
import { Result } from "../../utils/interface/movieInterface";
import Thumbnail from "../Thumbnail";
import FlipMove from "react-flip-move";

type Props = {
  results: Result[];
};

const Main: NextPage<Props> = ({ results }) => {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3  3xl:grid-cols-5 3xl:gap-4">
      {results.map((result: Result) => (
        <Thumbnail key={result?.id} result={result} />
      ))}
    </FlipMove>
  );
};

export default Main;
