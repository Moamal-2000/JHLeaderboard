"use client";

import { PAGINATION_ITEMS_PER_PAGE } from "@/Data/constants";
import { updateGlobalState } from "@/Redux/slices/globalSlice";
import { updateLeaderboardState } from "@/Redux/slices/leaderboardSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "./LeaderboardHeaderBtns.module.scss";

const LeaderboardHeaderBtns = ({ setPaginationNumber }) => {
  const {
    leaderboardData,
    leaderboardScroll,
    firstChunkLeaderboard,
    allDataDisplayed,
    loading,
    error,
  } = useSelector((s) => s.leaderboard);
  const { isLeaderboardExpanded, isLeaderboardReversed } = useSelector(
    (s) => s.global
  );
  const dispatch = useDispatch();
  const isLeaderboardUnavailable =
    loading || error || leaderboardData.length === 0;
  const showAllBtnNoun =
    leaderboardData.length === 0
      ? "Show All"
      : allDataDisplayed
      ? "Show Less"
      : "Show All";

  function handleExpandBtn() {
    dispatch(
      updateGlobalState({
        key: "isLeaderboardExpanded",
        value: !isLeaderboardExpanded,
      })
    );
  }

  function handleShowAllBtn() {
    if (allDataDisplayed) {
      handleShowLess();
      return;
    }

    handleShowAll();
  }

  function handleShowAll() {
    if (leaderboardData?.length <= 0) return;

    const lastLeaderboardPagination = Math.ceil(
      leaderboardData?.length / PAGINATION_ITEMS_PER_PAGE
    );

    dispatch(
      updateLeaderboardState({
        key: "leaderboardScroll",
        value: leaderboardData,
      })
    );

    setPaginationNumber(lastLeaderboardPagination);
  }

  function handleShowLess() {
    if (leaderboardData?.length <= 0) return;

    dispatch(
      updateLeaderboardState({
        key: "leaderboardScroll",
        value: firstChunkLeaderboard,
      })
    );

    setPaginationNumber(1);
  }

  useEffect(() => {
    const isSameArrayReference = leaderboardScroll === leaderboardData;
    if (!isSameArrayReference) handleShowAll();
  }, [isLeaderboardReversed]);

  return (
    <div className={s.buttons}>
      <button
        type="button"
        className={s.expandBtn}
        onClick={handleExpandBtn}
        disabled={isLeaderboardUnavailable}
      >
        {isLeaderboardExpanded ? "Minimize" : "Maximize"}
      </button>

      <button
        type="button"
        className={s.showAllBtn}
        onClick={handleShowAllBtn}
        disabled={isLeaderboardUnavailable}
      >
        {showAllBtnNoun}
      </button>
    </div>
  );
};

export default LeaderboardHeaderBtns;
