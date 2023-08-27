import { ROW, COL } from "@/utils/config";
import Garme from "@/share/Garme";
import Block from "@/share/Block";

export default class GameMap {
  mapData: number[][];
  row: number;
  col: number;
  constructor() {
    this.row = ROW;
    this.col = COL;
    //地图数据
    this.mapData = this.getMapData();
  }

  getRow(num: number): number[] {
    return new Array(this.col).fill(num);
  }

  getMapData() {
    const data = [];
    for (let x = 0; x < this.row; x++) {
      data.push(this.getRow(0));
    }
    //添加一层数据 类型于蒙层
    data.push(this.getRow(9));
    return data;
  }

  renderMap(Block: Block) {
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        if (Block.block[x][y] !== 0) {
          this.mapData[x + Block.blockRow][y + Block.blockCol] =
            Block.block[x][y];
        }
      }
    }
  }

  updateMapData(x: number, y: number, value: number) {
    this.mapData[x][y] = value;
  }

  render(Garme: Garme) {
    for (let x = 0; x < this.row; x++) {
      for (let y = 0; y < this.col; y++) {
        if (y === 6 && x > 15) {
          this.updateMapData(x, y, 1);
        }
        if (this.mapData[x][y] !== 0) {
          Garme.setColor(x, y);
        }
      }
    }
  }

  remove() {
    for (let x = 0; x < this.row; x++) {
      //未找到0则消除
      if (!this.mapData[x].includes(0)) {
        this.mapData.splice(x, 1);
        this.mapData.unshift(this.getRow(0));
      }
    }
  }

  //GAME OVER
  checkOver() {
    return this.mapData[0].some((d) => d !== 0);
  }
}
