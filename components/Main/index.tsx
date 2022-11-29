import type { NextPage } from "next";
import { Result } from "../../utils/interface/movieInterface";
import Thumbnail from "../Thumbnail";

type Props = {
  results: Result[];
};

const Main: NextPage<Props> = ({ results }) => {
  return (
    <main>
      {results.map((result) => (
        <Thumbnail key={result?.id} result={result} />
      ))}
    </main>
  );
};

export default Main;
