import { ArrowLeftIcon, ThumbUpIcon } from "@heroicons/react/outline";
import type { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Result } from "../../utils/interface/movieInterface";
import { API_KEY } from "../../utils/requests";

type Props = {
  movieData: Result;
  backdropPath: string | null | undefined;
};

const MovieDetails: NextPage<Props> = ({ movieData, backdropPath }) => {
  const router = useRouter();

  console.log(movieData);

  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  if (movieData?.success === false) {
    return (
      <>
        <div className="pb-10">
          <div className="relative w-full h-96 sm:h-[480px]">
            <ArrowLeftIcon
              className="h-10 w-10 absolute left-3 top-2 z-[100] cursor-pointer transition duration-500 ease-in-out hover:scale-125 rounded"
              onClick={() => router.push("/")}
            />
            <Image
              className="h-full w-full aspect-square"
              src={`${BASE_URL}${backdropPath}`}
              alt={movieData.original_title || movieData.name || ""}
              fill
            />
          </div>
          <div className="w-4/5 m-auto mt-10">
            <h2 className="mb-4 text-lg sm:text-2xl md:text-4xl text-white font-bold">
              The API data has no return
            </h2>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {movieData && (
        <div className="pb-10">
          <div className="relative w-full h-96 sm:h-[480px] group">
            <ArrowLeftIcon
              className="h-14 w-14 absolute left-3 top-2 z-[100] cursor-pointer transition duration-500 ease-in-out hover:scale-125 rounded"
              onClick={() => router.push("/")}
            />

            <Image
              className="h-full w-full aspect-square"
              src={`${BASE_URL}${backdropPath}`}
              alt={movieData.original_title || movieData.name || ""}
              fill
            />

            <div
              className="absolute opacity-0 group-hover:opacity-100 top-0 w-full h-96 sm:h-[480px] transition duration-1000 ease-in-out cursor-pointer"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <a href={movieData.homepage} target="blank">
                <div className="flex items-center justify-center h-full">
                  <h2 className="sm:text-4xl text-white font-semibold">
                    See more details
                  </h2>
                </div>
              </a>
            </div>
          </div>

          <div className="w-4/5 m-auto mt-10">
            <h2 className="mb-4 text-lg sm:text-2xl md:text-4xl text-white font-bold">
              {movieData.title || movieData.original_name}
            </h2>
            <p className="leading-6 md:leading-7 mb-2 lg:text-lg">
              {movieData.overview}
            </p>
            <div className="flex items-center gap-2">
              <p className="text-white">Release Date</p>{" "}
              <p className="flex items-center capitalize text-sm sm:text-base text-blue-300">
                {movieData.media_type && `${movieData.media_type}`}{" "}
                {movieData.release_date || movieData.first_air_date}
                <ThumbUpIcon className="h-5 mx-2" /> {movieData.vote_count}
              </p>
            </div>
            <p className="mt-1">
              Status:{" "}
              <span
                className={`${
                  movieData.status === "Released"
                    ? `text-green-400`
                    : "text-white"
                }`}
              >
                {movieData.status}
              </span>
            </p>

            {/* GENRES */}
            {movieData.genres && (
              <h3 className="text-white text-2xl lg:text-3xl font-semibold my-2">
                Genre
              </h3>
            )}
            <div className="flex items-center flex-wrap gap-3 mb-3">
              {movieData.genres &&
                movieData.genres.map((genre) => (
                  <p className="bg-gray-700 text-white mt-1 rounded p-3">
                    {genre.name}
                  </p>
                ))}
            </div>

            {/* Spoken languanges */}
            {movieData.spoken_languages && (
              <h3 className="text-white text-2xl lg:text-3xl font-semibold my-2">
                Spoken languanges
              </h3>
            )}
            <div className="flex flex-wrap gap-3 mb-3">
              {movieData.spoken_languages &&
                movieData.spoken_languages.map((spoke) => (
                  <div className="flex h-full">
                    <p className="bg-gray-700 text-white mt-1 rounded p-3 flex items-center">
                      {spoke.english_name}
                    </p>
                    {/* {prod.logo_path !== null && (
                      <img
                        src={`${BASE_URL}${prod.logo_path}`}
                        alt={prod.name}
                        className="object-cover rounded max-2xl h-20"
                      />
                    )} */}
                  </div>
                ))}
            </div>

            {/* Production Companies */}
            {movieData.production_companies && (
              <h3 className="text-white text-2xl lg:text-3xl font-semibold my-2">
                Production Companies
              </h3>
            )}
            <div className="flex flex-wrap gap-3 mb-3">
              {movieData.production_companies &&
                movieData.production_companies.map((prod) => (
                  <div className="flex h-full">
                    <p className="bg-gray-700 text-white mt-1 rounded p-3 flex items-center">
                      {prod.name}
                    </p>
                    {/* {prod.logo_path !== null && (
                      <img
                        src={`${BASE_URL}${prod.logo_path}`}
                        alt={prod.name}
                        className="object-cover rounded max-2xl h-20"
                      />
                    )} */}
                  </div>
                ))}
            </div>
            {/* Production Countries */}
            {movieData.production_countries && (
              <h3 className="text-white text-2xl lg:text-3xl font-semibold my-2">
                Production Countries
              </h3>
            )}
            <div className="flex flex-wrap gap-3 mb-3">
              {movieData.production_countries &&
                movieData.production_countries.map((prod) => (
                  <div className="flex h-full">
                    <p className="bg-gray-700 text-white mt-1 rounded p-3 flex items-center">
                      {prod.name}
                    </p>
                    {/* {prod.logo_path !== null && (
                      <img
                        src={`${BASE_URL}${prod.logo_path}`}
                        alt={prod.name}
                        className="object-cover rounded max-2xl h-20"
                      />
                    )} */}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const movieId = context.params?.id;
  const backdropPath = context.query?.backdrop_path;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );
  const data = await response.json();

  return {
    props: {
      movieData: data,
      backdropPath,
    },
  };
};
