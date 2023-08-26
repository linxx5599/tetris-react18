import { ROW, COL } from "@/utils/config";
import Garme from "@/share/Garme";

export default class GameMap {
  mapData: number[][];
  row: number;
  col: number;
  garmeInstance: Garme;
  constructor() {
    this.garmeInstance = new Garme();
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

  updateMapData(x: number, y: number, value: number) {
    this.mapData[x][y] = value;
  }
  render() {
    for (let x = 0; x < this.row; x++) {
      for (let y = 0; y < this.col; y++) {
        if (x === 19) {
          this.updateMapData(x, y, 1);
        }
        if (this.mapData[x][y] !== 0) {
          this.garmeInstance.setColor(x, y);
        }
      }
    }
  }
}
