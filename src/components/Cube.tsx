import dirt from "../assets/images/minecraft-simplified/dirt.png";
import grassSides from "../assets/images/minecraft-simplified/grass_block_side_overlay.png";
import grassTop from "../assets/images/minecraft-simplified/grass_block_top.png";
import craftingTableTop from "../assets/images/minecraft-simplified/crafting_table_top.png";
import craftingTableFront from "../assets/images/minecraft-simplified/crafting_table_front.png";
import craftingTableSide from "../assets/images/minecraft-simplified/crafting_table_side.png";
import oakPlank from "../assets/images/minecraft-simplified/oak_planks.png";
import cobblestone from "../assets/images/minecraft-simplified/cobblestone.png";
import commandBlockFront from "../assets/images/minecraft-simplified/command_block_front.png";
import commandBlockBack from "../assets/images/minecraft-simplified/command_block_back.png";
import commandBlockSide from "../assets/images/minecraft-simplified/command_block_side.png";
import furnaceFront from "../assets/images/minecraft-simplified/furnace_front.png";
import furnaceSide from "../assets/images/minecraft-simplified/furnace_side.png";
import furnaceTop from "../assets/images/minecraft-simplified/furnace_top.png";
import glass from "../assets/images/minecraft-simplified/glass.png";
import glowstone from "../assets/images/minecraft-simplified/glowstone.png";
import copperBlock from "../assets/images/minecraft-simplified/copper_block.png";
import ironBlock from "../assets/images/minecraft-simplified/iron_block.png";
import goldBlock from "../assets/images/minecraft-simplified/gold_block.png";
import diamondBlock from "../assets/images/minecraft-simplified/diamond_block.png";
import netheriteBlock from "../assets/images/minecraft-simplified/netherite_block.png";
import sand from "../assets/images/minecraft-simplified/sand.png";
import noteBlock from "../assets/images/minecraft-simplified/note_block.png";
import observerFront from "../assets/images/minecraft-simplified/observer_front.png";
import observerBack from "../assets/images/minecraft-simplified/observer_back.png";
import observerSide from "../assets/images/minecraft-simplified/observer_side.png";
import observerTop from "../assets/images/minecraft-simplified/observer_top.png";
import observerBottom from "../assets/images/minecraft-simplified/stonecutter_bottom.png";

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

interface Faces {
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

function Cube({
  // cubeAnimation,
  texture,
  className,
  colorTint,
  customFilter,
}: CubeProps) {
  if (typeof texture === "string") {
    return (
      <div className="scene">
        <div className={`cube${className ? " " + className : ""}`}>
          <div className="cube-face cube-face-top">
            <Face texture={texture} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-front">
            <Face texture={texture} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-left">
            <Face texture={texture} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-back">
            <Face texture={texture} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-right">
            <Face texture={texture} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-bottom">
            <Face texture={texture} color={colorTint} customFilter={customFilter} />
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
            <Face texture={top} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-front">
            <Face texture={front} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-left">
            <Face texture={left} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-back">
            <Face texture={back} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-right">
            <Face texture={right} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-bottom">
            <Face texture={bottom} color={colorTint} customFilter={customFilter} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="scene">
        <div className={`cube${className ? " " + className : ""}`}>
          <div className="cube-face cube-face-top">
            <Face texture={dirt} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-front">
            <Face texture={dirt} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-left">
            <Face texture={dirt} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-back">
            <Face texture={dirt} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-right">
            <Face texture={dirt} color={colorTint} customFilter={customFilter} />
          </div>
          <div className="cube-face cube-face-bottom">
            <Face texture={dirt} color={colorTint} customFilter={customFilter} />
          </div>
        </div>
      </div>
    );
  }

}

interface FaceProps {
  texture?: FaceLayers | string;
  color?: string;
  customFilter?: string;
}

export function Face({
  texture,
  color,
  customFilter,
}: FaceProps) {
  const colorTint = { filter: `drop-shadow(calc(var(--loading-cube-size) * -1) 0 0px ${color}) ${customFilter ? customFilter : ""}` };

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
              <>
                <div className="face-layer-above" style={colorTint}>
                  <img className="face-overlay image-above" src={texture?.above} />
                </div>
                {color && (<img className="texture-image image-above" src={texture?.above} />)}
              </>
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

interface CubeTemplateProps {
  texture: Faces;
  colorTint?: string;
  className?: string;
  customFilter?: string;
}

function CubeTemplate(props: CubeTemplateProps) {
  return (<Cube {...props} />);
}

export function Dirt() {
  return CubeTemplate({
    className: "dirt",
    texture: {
      top: { under: dirt },
      front: { under: dirt },
      left: { under: dirt },
      back: { under: dirt },
      right: { under: dirt },
      bottom: { under: dirt }
    }
  });
}

export function GrassBlock() {
  return CubeTemplate({
    className: "grass-block",
    texture: {
      top: { above: grassTop, under: dirt },
      front: { above: grassSides, under: dirt },
      left: { above: grassSides, under: dirt },
      back: { above: grassSides, under: dirt },
      right: { above: grassSides, under: dirt },
      bottom: { under: dirt }
    },
    colorTint: "#4CBA31"
  });
}

export function CraftingTable() {
  return CubeTemplate({
    className: "crafting-table",
    texture: {
      top: { under: craftingTableTop },
      front: { under: craftingTableFront },
      left: { under: craftingTableSide },
      back: { under: craftingTableFront },
      right: { under: craftingTableSide },
      bottom: { under: oakPlank }
    }
  });
}

export function OakPlank() {
  return CubeTemplate({
    className: "oak-plank",
    texture: {
      top: { under: oakPlank },
      front: { under: oakPlank },
      left: { under: oakPlank },
      back: { under: oakPlank },
      right: { under: oakPlank },
      bottom: { under: oakPlank }
    }
  });
}

export function Cobblestone() {
  return CubeTemplate({
    className: "cobblestone",
    texture: {
      top: { under: cobblestone },
      front: { under: cobblestone },
      left: { under: cobblestone },
      back: { under: cobblestone },
      right: { under: cobblestone },
      bottom: { under: cobblestone }
    }
  });
}

export function CommandBlock() {
  return CubeTemplate({
    className: "command-block",
    texture: {
      top: { under: commandBlockSide },
      front: { under: commandBlockFront },
      left: { under: commandBlockSide },
      back: { under: commandBlockBack },
      right: { under: commandBlockSide },
      bottom: { under: commandBlockSide }
    }
  });
}
