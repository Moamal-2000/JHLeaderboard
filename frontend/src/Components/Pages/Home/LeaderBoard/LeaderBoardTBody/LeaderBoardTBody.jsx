"use client";

import { navigateToPlayerPage } from "@/Functions/navigate";
import { getColoredName, getModifiedRank } from "@/Functions/utils";
import { useRouter } from "next/navigation";
import s from "./LeaderBoardTBody.module.scss";
import TopsVisualization from "./TopsVisualization/TopsVisualization";

const LeaderBoardTBody = ({ leaderboardData, mapsCount, isReverseTable }) => {
  const reverseClass = isReverseTable ? s.reverse : "";
  const router = useRouter();

  return (
    <tbody className={`${s.tbody} ${reverseClass}`}>
      {leaderboardData?.map(
        ({ player_name, score, top_list, player_id }, index) => {
          const modifiedRank = getModifiedRank(index + 1);
          const modifiedPlayerName = getColoredName(player_name);

          function handleRowClick(e) {
            const isButtonElement = e.target.tagName === "BUTTON";
            if (isButtonElement) return;

            navigateToPlayerPage(router, player_id);
          }

          return (
            <tr
              key={player_id}
              onClick={handleRowClick}
              data-type="player-stats-row"
            >
              <td className={s.rank} data-type="player-stats-rank">
                {modifiedRank}
              </td>
              <td className={s.player} data-type="player-stats-name">
                {modifiedPlayerName}
              </td>
              <td className={s.score} data-type="player-stats-score">
                {score}
              </td>
              <td className={s.tops} data-type="player-stats-tops">
                <TopsVisualization
                  topsList={top_list}
                  mapsCount={mapsCount}
                  leaderboardData={leaderboardData}
                />
              </td>
            </tr>
          );
        }
      )}
    </tbody>
  );
};

export default LeaderBoardTBody;
