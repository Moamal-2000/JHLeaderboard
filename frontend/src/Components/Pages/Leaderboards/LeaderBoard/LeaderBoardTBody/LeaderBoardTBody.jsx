"use client";

import { Suspense } from "react";
import { useSelector } from "react-redux";
import SpinnerLoader from "../../../../Shared/Loaders/SpinnerLoader/SpinnerLoader";
import LeaderBoardError from "./LeaderBoardError/LeaderBoardError";
import s from "./LeaderBoardTBody.module.scss";
import PlayerRow from "./PlayerRow/PlayerRow";

const LeaderBoardTBody = ({ leaderboardData, lastPlayerRef }) => {
  const { isLeaderboardReversed } = useSelector((s) => s.global);
  const { loading, error } = useSelector((s) => s.leaderboard);
  const reverseClass = isLeaderboardReversed ? s.reverse : "";

  return (
    <tbody className={`${s.tbody} ${reverseClass}`}>
      {loading && !error && (
        <SpinnerLoader
          title="Loading leaderboard..."
          description="Fetching the latest leaderboard"
          type="table"
        />
      )}
      {error && <LeaderBoardError />}

      {!loading &&
        !error &&
        leaderboardData?.map((playerData, index) => {
          return (
            <Suspense key={playerData.PlayerID}>
              <PlayerRow
                playerData={playerData}
                leaderboardData={leaderboardData}
                lastPlayerRef={lastPlayerRef}
                index={index}
              />
            </Suspense>
          );
        })}
    </tbody>
  );
};

export default LeaderBoardTBody;
