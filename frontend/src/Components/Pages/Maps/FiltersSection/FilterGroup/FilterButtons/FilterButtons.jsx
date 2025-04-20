"use client";

import {
  createQueryString,
  getStarsText,
  removeQueryString,
} from "@/Functions/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import s from "./FilterButtons.module.scss";

const FilterButtons = ({ filtersData, queryName, defaultUrlQuery }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const urlQuery = searchParams.get(queryName);

  function handleClick(queryValue) {
    const isDefaultQuery = queryValue === defaultUrlQuery;

    if (isDefaultQuery) {
      removeQueryString(queryName, searchParams, router, pathname);
      return;
    }

    createQueryString(queryName, queryValue, searchParams, router, pathname);
  }

  return (
    <div className={s.filterButtons}>
      {filtersData?.map(({ text, queryValue, id }) => {
        const isNumber = !Number.isNaN(+text);
        const modifiedText = isNumber ? getStarsText(text) : text;
        const currentValue = urlQuery || defaultUrlQuery;
        const starsClass = isNumber ? s.stars : "";
        const title = getFilterBtnTitle(queryName, queryValue);

        const isActive = isNumber
          ? +currentValue === +text
          : currentValue === queryValue;

        return (
          <button
            type="button"
            key={id}
            onClick={() => handleClick(queryValue)}
            className={`${isActive ? s.active : ""} ${starsClass}`}
            title={title}
          >
            {modifiedText}
          </button>
        );
      })}
    </div>
  );
};

export default FilterButtons;

function getFilterBtnTitle(queryName, queryValue) {
  const value = String(queryValue)?.toLowerCase();

  switch (queryName) {
    case "map-difficulty":
      return `Filter maps by ${value} fps difficulty`;

    case "map-type":
      return value === "all"
        ? "Display all types of maps"
        : `Filter maps by ${value} type`;

    case "map-rating":
      return value === "all"
        ? "Display all ratings"
        : `Filter maps by ${value} rating`;

    default:
      return `Filter maps by ${value}`;
  }
}
