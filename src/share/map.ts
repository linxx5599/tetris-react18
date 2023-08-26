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
  getMapData() {
    const data = [];
    for (let x = 0; x < this.row; x++) {
      data.push(new Array(this.col).fill(0));
    }
    return data;
  }

  renderMap(Block: Block) {
    for (let x = 0; x < 4; x++) {
      for (let y = 0; y < 4; y++) {
        if (Block.block[x][y] !== 0) {
          this.mapData[x + Block.blockRow][y + Block.blocCol] =
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
        if (x === 19) {
          this.updateMapData(x, y, 1);
        }
        if (this.mapData[x][y] !== 0) {
          Garme.setColor(x, y);
        }
      }
    }
  }
}
