import type { NextPage } from "next";
import { Result } from "../../utils/interface/movieInterface";

type Props = {
  results: Result[];
};

const Thumbnail: NextPage<Props> = ({ results }) => {
  return <div></div>;
};

export default Thumbnail;
