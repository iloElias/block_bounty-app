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
          <img className="image-above" src={topAbove ?? grassTop} />
          <img className="image-under" src={topUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-front">
          <img className="image-above" src={sidesAbove ?? grassSides} />
          <img className="image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-back">
          <img className="image-above" src={sidesAbove ?? grassSides} />
          <img className="image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-right">
          <img className="image-above" src={sidesAbove ?? grassSides} />
          <img className="image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-left">
          <img className="image-above" src={sidesAbove ?? grassSides} />
          <img className="image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-bottom">
          <img className="image-above" src={bottomAbove} />
          <img className="image-under" src={bottomUnder ?? textureHolder} />
        </div>
      </div>
    </div>
  );
}
