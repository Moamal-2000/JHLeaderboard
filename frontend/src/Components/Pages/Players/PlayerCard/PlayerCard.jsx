import SvgIcon from "@/Components/Shared/SvgIcon";
import Image from "next/image";
import s from "./Player.module.scss";

const PlayerCard = ({
  name,
  rank,
  avatar,
  totalPoints,
  mapsCompleted,
  bestTime,
}) => {
  return (
    <div className={s.playerCard}>
      <div className={s.mainInfo}>
        <div className={s.avatar}>
          {avatar && <Image width={64} height={64} alt={`${name} avatar`} />}
          {!avatar && <SvgIcon name="users" />}
        </div>

        <div className={s.wrapper}>
          <h2>{name}</h2>
          <span className={s.rank}>Rank #{rank}</span>
        </div>
      </div>

      <div className={s.stats}>
        <div className={s.stat}>
          <p>Total Points:</p>
          <span className={s.totalPoints}>{totalPoints}</span>
        </div>

        <div className={s.stat}>
          <p>Maps Completed:</p>
          <span className={s.completedMaps}>{mapsCompleted}</span>
        </div>

        <div className={s.stat}>
          <p>Best Time:</p>
          <span className={s.bestTime}>{bestTime}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
