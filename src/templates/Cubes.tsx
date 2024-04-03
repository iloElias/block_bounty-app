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

import Cube, { Faces } from "../components/Cube";

interface CubeTemplateProps {
  texture: Faces;
  colorTint?: string;
  className?: string;
  customFilter?: string;
}

function CubeTemplate(props: CubeTemplateProps) {
  return (<Cube {...props} />);
}

function Dirt() {
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

function GrassBlock() {
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

function CraftingTable() {
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

function OakPlank() {
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

function Cobblestone() {
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

function CommandBlock() {
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

function Furnace() {
  return CubeTemplate({
    className: "furnace",
    texture: {
      top: { under: furnaceTop },
      front: { under: furnaceFront },
      left: { under: furnaceSide },
      back: { under: furnaceSide },
      right: { under: furnaceSide },
      bottom: { under: furnaceTop }
    }
  });
}

function Glass() {
  return CubeTemplate({
    className: "glass",
    texture: {
      top: { under: glass },
      front: { under: glass },
      left: { under: glass },
      back: { under: glass },
      right: { under: glass },
      bottom: { under: glass }
    }
  });
}

function Glowstone() {
  return CubeTemplate({
    className: "glowstone",
    texture: {
      top: { under: glowstone },
      front: { under: glowstone },
      left: { under: glowstone },
      back: { under: glowstone },
      right: { under: glowstone },
      bottom: { under: glowstone }
    }
  });
}

function CopperBlock() {
  return CubeTemplate({
    className: "copper-block",
    texture: {
      top: { under: copperBlock },
      front: { under: copperBlock },
      left: { under: copperBlock },
      back: { under: copperBlock },
      right: { under: copperBlock },
      bottom: { under: copperBlock }
    }
  });
}

function IromBlock() {
  return CubeTemplate({
    className: "irom-block",
    texture: {
      top: { under: ironBlock },
      front: { under: ironBlock },
      left: { under: ironBlock },
      back: { under: ironBlock },
      right: { under: ironBlock },
      bottom: { under: ironBlock }
    }
  });
}

function GoldBlock() {
  return CubeTemplate({
    className: "gold-block",
    texture: {
      top: { under: goldBlock },
      front: { under: goldBlock },
      left: { under: goldBlock },
      back: { under: goldBlock },
      right: { under: goldBlock },
      bottom: { under: goldBlock }
    }
  });
}

function DiamondBlock() {
  return CubeTemplate({
    className: "diamond-block",
    texture: {
      top: { under: diamondBlock },
      front: { under: diamondBlock },
      left: { under: diamondBlock },
      back: { under: diamondBlock },
      right: { under: diamondBlock },
      bottom: { under: diamondBlock }
    }
  });
}

function NetheriteBlock() {
  return CubeTemplate({
    className: "netherite-block",
    texture: {
      top: { under: netheriteBlock },
      front: { under: netheriteBlock },
      left: { under: netheriteBlock },
      back: { under: netheriteBlock },
      right: { under: netheriteBlock },
      bottom: { under: netheriteBlock }
    }
  });
}

function Sand() {
  return CubeTemplate({
    className: "sand",
    texture: {
      top: { under: sand },
      front: { under: sand },
      left: { under: sand },
      back: { under: sand },
      right: { under: sand },
      bottom: { under: sand }
    }
  });
}

function Noteblock() {
  return CubeTemplate({
    className: "noteblock",
    texture: {
      top: { under: noteBlock },
      front: { under: noteBlock },
      left: { under: noteBlock },
      back: { under: noteBlock },
      right: { under: noteBlock },
      bottom: { under: noteBlock }
    }
  });
}

function Observer() {
  return CubeTemplate({
    className: "observer",
    texture: {
      top: { under: observerTop },
      front: { under: observerFront },
      left: { under: observerSide },
      back: { under: observerBack },
      right: { under: observerSide },
      bottom: { under: observerTop }
    }
  });
}

const Block = {
  Dirt: Dirt,
  GrassBlock: GrassBlock,
  CraftingTable: CraftingTable,
  OakPlank: OakPlank,
  Cobblestone: Cobblestone,
  CommandBlock: CommandBlock,
  Furnace: Furnace,
  Glass: Glass,
  Glowstone: Glowstone,
  CopperBlock: CopperBlock,
  IromBlock: IromBlock,
  GoldBlock: GoldBlock,
  DiamondBlock: DiamondBlock,
  NetheriteBlock: NetheriteBlock,
  Sand: Sand,
  Noteblock: Noteblock,
  Observer: Observer
}
export default Block;

export const BlockList = [
  Dirt,
  GrassBlock,
  CraftingTable,
  OakPlank,
  Cobblestone,
  CommandBlock,
  Furnace,
  Glass,
  Glowstone,
  CopperBlock,
  IromBlock,
  GoldBlock,
  DiamondBlock,
  NetheriteBlock,
  Sand,
  Noteblock,
  Observer
];