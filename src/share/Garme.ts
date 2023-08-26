import { CLASS_CELL, CLASS_BLOCK, ROW, COL } from "@/utils/config";
import GameMap from "@/share/map";
import Block from "@/share/Block";
export default class Garme {
  private static _garme: Garme;
  static instance(): Garme {
    if (this._garme === undefined) {
      this._garme = new Garme();
    }
    return this._garme;
  }
  row: number;
  col: number;
  constructor() {
    this.row = ROW;
    this.col = COL;
  }
  getCell(x: string | number): HTMLElement {
    return document.querySelector(`.${CLASS_CELL}-${x}`) as HTMLElement;
  }

  getBlock(x: string | number, y: string | number): HTMLElement {
    const cell = this.getCell(x);
    return cell.querySelector(`.${CLASS_BLOCK}-${y}`) as HTMLElement;
  }

  //给盒子设置颜色
  setColor(x: string | number, y: string | number) {
    this.updateColor(x, y, "add");
  }
  delColor(x: string | number, y: string | number) {
    this.updateColor(x, y, "del");
  }
  //给盒子设置颜色
  updateColor(x: string | number, y: string | number, type: "add" | "del") {
    const block = this.getBlock(x, y);
    if (type === "add") {
      block.classList.add("show");
      return;
    }
    block.classList.remove("show");
  }

  clear() {
    for (let x = 0; x < this.row; x++) {
      for (let y = 0; y < this.col; y++) {
        this.delColor(x, y);
      }
    }
  }
}
let timer;
export function garameRun() {
  const garme = new Garme();
  const block = new Block();
  const gameMap = new GameMap();
  timer = setInterval(() => {
    garme.clear();
    block.render();
    gameMap.render();
    block.next();
    console.log(666);
  }, 500);
}
