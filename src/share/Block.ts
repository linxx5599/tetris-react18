import { blockMapTypes, blockType } from "@/types";
import Garme from "@/share/Garme";
import GarmeMap from "@/share/map";
import { BLOCK_MAP_TRYPES, COL } from "@/utils/config";
import { BLOCK_MAPS } from "./blockMap";
export default class Block {
  block: blockType;
  blockRow: number;
  blocCol: number;
  constructor() {
    //随机获取方块类型
    const blockType: blockMapTypes =
      BLOCK_MAP_TRYPES[
        parseInt(String(Math.random() * BLOCK_MAP_TRYPES.length))
      ];
    //方块 包含不同类型
    const blockDir = BLOCK_MAPS[blockType];
    //随机获取方块
    this.block = blockDir[parseInt(String(Math.random() * blockDir.length))];
    //初始化位置
    this.blockRow = 0;
    this.blocCol = Math.ceil(COL / 2) - 2;
  }
  //基于4 * 4 方块设计去渲染
  render(Garme: Garme) {
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        //找到不为0 则渲染颜色
        if (this.block[x][y] !== 0) {
          Garme.setColor(x + this.blockRow, y + this.blocCol);
        }
      }
    }
  }

  //校验方块与地图碰撞
  check(GarmeMap: GarmeMap, blockRow: number, blocCol: number): Boolean {
    //基于4 * 4 方块设计判断碰撞
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        if (
          this.block[x][y] !== 0 &&
          GarmeMap.mapData[x + blockRow][y + blocCol] !== 0
        ) {
          return false;
        }
      }
    }
    return true;
  }

  next(GarmeMap: GarmeMap): Boolean {
    if (this.check(GarmeMap, this.blockRow + 1, this.blocCol)) {
      this.blockRow++;
      return false;
    }
    //渲染新模块 
    return true
  }
}
