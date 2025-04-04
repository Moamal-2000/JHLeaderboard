import { jhApis } from "@/Api/jumpersHeaven";
import { getColoredName } from "@/Functions/components";

const PlayerId = async ({ params }) => {
  const { playerId } = await params;

  const playersReq = await fetch(
    jhApis({ fps: 125 }).leaderboard.getSpeedRunLeaderboard
  );

  const playersData = await playersReq.json();
  const playerData = playersData.find(
    ({ player_id }) => +player_id === +playerId
  );
  const { player_name, score, top_list } = playerData;

  return (
    <main>
      <h2>Testing</h2>

      <br />

      <ul style={{ listStyleType: "none" }}>
        <li>Player: {getColoredName(player_name)}</li>
        <li>
          Player ID: <span style={{ color: "yellow" }}>{playerId}</span>
        </li>
        <li>
          Score: <span style={{ color: "orange" }}>{score}</span>
        </li>
        <li>
          Tops: [
          <span style={{ color: "cyan" }}>
            {Object.values(top_list).join(", ")}
          </span>
          ]
        </li>
      </ul>
    </main>
  );
};

export default PlayerId;
