import { CLASS_CELL, CLASS_BLOCK } from "@/utils/config";
export default class Garme {
  private static _garme: Garme;
  static instance(): Garme {
    if (this._garme === undefined) {
      this._garme = new Garme();
    }
    return this._garme;
  }
  constructor() {}
  getCell(x: string | number): HTMLElement {
    return document.querySelector(`.${CLASS_CELL}-${x}`) as HTMLElement;
  }

  getBlock(x: string | number, y: string | number): HTMLElement {
    const cell = this.getCell(x);
    return cell.querySelector(`.${CLASS_BLOCK}-${y}`) as HTMLElement;
  }

  //给盒子设置颜色
  setColor(x: string | number, y: string | number) {
    const block = this.getBlock(x, y);
    block.classList.add("show");
  }
}
