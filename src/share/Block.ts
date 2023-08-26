import { blockMapTypes, blockType } from "@/types";
import Garme from "@/share/Garme";
import { BLOCK_MAP_TRYPES, COL } from "@/utils/config";
import { BLOCK_MAPS } from "./blockMap";
export default class Block {
  block: blockType;
  garmeInstance: Garme;
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
    this.garmeInstance = new Garme();
  }
  //基于4 * 4 方块设计去渲染
  render() {
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        //找到不为0 则渲染颜色
        if (this.block[x][y] !== 0) {
          this.garmeInstance.setColor(x + this.blockRow, y + this.blocCol);
        }
      }
    }
  }

  next() {
    this.blockRow++;
  }
}
