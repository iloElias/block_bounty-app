import { ReactImageTint } from "react-image-tint";
import dirt from "../assets/images/minecraft-simplified/dirt.png";

function instanceOfFaces(object: any): object is Faces {
  if (!object) {
    return false;
  }

  return (
    "top" in object
    || "front" in object
    || "left" in object
    || "back" in object
    || "right" in object
    || "bottom" in object
  );
}

interface FaceLayers {
  above?: string;
  middle?: string;
  under?: string;
}

export interface Faces {
  top?: FaceLayers | string;
  front?: FaceLayers | string;
  left?: FaceLayers | string;
  back?: FaceLayers | string;
  right?: FaceLayers | string;
  bottom?: FaceLayers | string;
}

interface CubeProps {
  cubeAnimation?: string;
  texture?: Faces | string;
  className?: string;
  colorTint?: string;
  customFilter?: string;
}

export default function Cube({
  // cubeAnimation,
  texture,
  className,
  colorTint,
}: CubeProps) {
  if (typeof texture === "string") {
    return (
      <div className="scene">
        <div className={`cube${className ? " " + className : ""}`}>
          <div className="cube-face cube-face-top">
            <Face texture={texture} color={colorTint} />
          </div>
          <div className="cube-face cube-face-front">
            <Face texture={texture} color={colorTint} />
          </div>
          <div className="cube-face cube-face-left">
            <Face texture={texture} color={colorTint} />
          </div>
          <div className="cube-face cube-face-back">
            <Face texture={texture} color={colorTint} />
          </div>
          <div className="cube-face cube-face-right">
            <Face texture={texture} color={colorTint} />
          </div>
          <div className="cube-face cube-face-bottom">
            <Face texture={texture} color={colorTint} />
          </div>
        </div>
      </div>
    );
  } else if (instanceOfFaces(texture)) {
    const {
      top,
      front,
      left,
      back,
      right,
      bottom
    } = texture;

    return (
      <div className="scene">
        <div className={`cube${className ? " " + className : ""}`}>
          <div className="cube-face cube-face-top">
            <Face texture={top} color={colorTint} />
          </div>
          <div className="cube-face cube-face-front">
            <Face texture={front} color={colorTint} />
          </div>
          <div className="cube-face cube-face-left">
            <Face texture={left} color={colorTint} />
          </div>
          <div className="cube-face cube-face-back">
            <Face texture={back} color={colorTint} />
          </div>
          <div className="cube-face cube-face-right">
            <Face texture={right} color={colorTint} />
          </div>
          <div className="cube-face cube-face-bottom">
            <Face texture={bottom} color={colorTint} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="scene">
        <div className={`cube${className ? " " + className : ""}`}>
          <div className="cube-face cube-face-top">
            <Face texture={dirt} color={colorTint} />
          </div>
          <div className="cube-face cube-face-front">
            <Face texture={dirt} color={colorTint} />
          </div>
          <div className="cube-face cube-face-left">
            <Face texture={dirt} color={colorTint} />
          </div>
          <div className="cube-face cube-face-back">
            <Face texture={dirt} color={colorTint} />
          </div>
          <div className="cube-face cube-face-right">
            <Face texture={dirt} color={colorTint} />
          </div>
          <div className="cube-face cube-face-bottom">
            <Face texture={dirt} color={colorTint} />
          </div>
        </div>
      </div>
    );
  }

}

interface FaceProps {
  texture?: FaceLayers | string;
  color?: string;
}

export function Face({
  texture,
  color,
}: FaceProps) {
  const colorTint = color ?? "white";

  return (
    <div className="face-wrapper">
      {
        typeof texture === "string" ? (
          <div className="face-layer-above">
            <img className="face-overlay image-above" src={texture} />
          </div>
        ) : (
          <>
            {texture?.above && (
              <div className="face-layer-above" >
                <ReactImageTint src={texture?.above} color={colorTint} />
              </div>
            )}
            {texture?.middle && (<div className="face-layer-middle">
              <img className="face-overlay image-middle" src={texture?.middle} />
            </div>)}
            {texture?.under && (<div className="face-layer-under">
              <img className="face-overlay image-under" src={texture?.under} />
            </div>)}
          </>
        )
      }
    </div>
  );
}
