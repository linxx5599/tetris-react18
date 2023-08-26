import { blockType } from "@/types";
import Garme from "@/share/Garme";
export default class Block {
  block: blockType;
  garmeInstance: Garme;
  constructor() {
    this.block = [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [1, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    this.garmeInstance = new Garme();
  }
  //基于4 * 4 方块设计去渲染
  render() {
    for (let i = 0; i < 4; i++) {
      for (let y = 0; y < 4; y++) {
        //找到不为0 则渲染颜色
        if (this.block[i][y] !== 0) {
          this.garmeInstance.setColor(i, y);
        }
      }
    }
  }
}
