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
          {/* <img className="face-default image-above" src={topAbove ?? grassTop} /> */}
          <div className="image-under-overlay" />
          <img className="face-default image-under" src={topUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-front">
          <div className="image-above-overlay" />
          {/* <img className="face-default image-above" src={sidesAbove ?? grassSides} /> */}
          <div className="image-under-overlay" />
          <img className="face-default image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-back">
          <div className="image-above-overlay" />
          {/* <img className="face-default image-above" src={sidesAbove ?? grassSides} /> */}
          <div className="image-under-overlay" />
          <img className="face-default image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-right">
          <div className="image-above-overlay" />
          {/* <img className="face-default image-above" src={sidesAbove ?? grassSides} /> */}
          <div className="image-under-overlay" />
          <img className="face-default image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-left">
          <div className="image-above-overlay" />
          {/* <img className="face-default image-above" src={sidesAbove ?? grassSides} /> */}
          <div className="image-under-overlay" />
          <img className="face-default image-under" src={sidesUnder ?? textureHolder} />
        </div>
        <div className="cube-face cube-face-bottom">
          <div className="image-above-overlay" />
          <img className="face-default image-above" src={bottomAbove} />
          <div className="image-under-overlay" />
          <img className="face-default image-under" style={{ rotate: "270deg" }} src={bottomUnder ?? textureHolder} />
        </div>
      </div>
    </div>
  );
}

interface FaceProps {
  face?: string,
  faceOverlay?: string,
  middle?: string,
  middleOverlay?: string,
  under?: string,
  underOverlay?: string,
  overlay?: string,
  overlayColor?: string
}

export function Face({
  face,
  faceOverlay,
  middle,
  middleOverlay,
  under,
  underOverlay,
  overlay,
  overlayColor
}: FaceProps) {

  return (
    <div className="face-wrapper">
      <div className="face-layer-above">
        {faceOverlay && (<img className="face-overlay image-above-overlay" style={overlayColor ? { filter: `drop-shadow(0 0 0 ${overlayColor})` } : {}} src={faceOverlay} />)}
        <img className="face-default image-above" src={face} />
      </div>
      {middle && (
        <div className="face-layer-above">
          {middleOverlay && (<img className="face-overlay image-middle-overlay" style={overlayColor ? { filter: `drop-shadow(0 0 0 ${overlayColor})` } : {}} src={middleOverlay} />)}
          <img className="face-default image-middle" src={middle} />
        </div>
      )}
      {overlay && (
        <div className="face-layer-above">
          {underOverlay && (<img className="face-overlay image-under-overlay" style={overlayColor ? { filter: `drop-shadow(0 0 0 ${overlayColor})` } : {}} src={underOverlay} />)}
          <img className="face-default image-under" src={under} />
        </div>
      )}
    </div>
  );
}