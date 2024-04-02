// import { minecraftSimplified } from "../templates/Cubes";

import dirt from "../assets/images/minecraft-simplified/dirt.png";
import grassSides from "../assets/images/minecraft-simplified/grass_block_side_overlay.png";
import grassTop from "../assets/images/minecraft-simplified/grass_block_top.png";

interface CubeProps {
  cubeAnimation?: string;
  texture?: string;
  topAbove?: string;
  topUnder?: string;
  sidesAbove?: string;
  sidesUnder?: string;
  bottomAbove?: string;
  bottomUnder?: string;
}

export default function Cube({
  texture,
  topAbove,
  topUnder,
  sidesAbove,
  sidesUnder,
  bottomAbove,
  bottomUnder
}: CubeProps) {
  const textureHolder = texture ?? dirt;

  return (
    <div className="scene">
      <div className="cube">
        <div className="cube-face cube-face-top">
          <div className="image-above-overlay" />
          <img className="image-above" src={topAbove ?? grassTop} />
          <div className="image-under-overlay" />
          <img className="image-under" src={topUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-front">
          <div className="image-above-overlay" />
          <img className="image-above" src={sidesAbove ?? grassSides} />
          <div className="image-under-overlay" />
          <img className="image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-back">
          <div className="image-above-overlay" />
          <img className="image-above" src={sidesAbove ?? grassSides} />
          <div className="image-under-overlay" />
          <img className="image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-right">
          <div className="image-above-overlay" />
          <img className="image-above" src={sidesAbove ?? grassSides} />
          <div className="image-under-overlay" />
          <img className="image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-left">
          <div className="image-above-overlay" />
          <img className="image-above" src={sidesAbove ?? grassSides} />
          <div className="image-under-overlay" />
          <img className="image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-bottom">
          <div className="image-above-overlay" />
          <img className="image-above" src={bottomAbove} />
          <div className="image-under-overlay" />
          <img className="image-under" src={bottomUnder ?? textureHolder} />
        </div>
      </div>
    </div>
  );
}
