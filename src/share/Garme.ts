import { CLASS_CELL, CLASS_BLOCK, ROW, COL } from "@/utils/config";
import GarmeMap from "@/share/map";
import Block from "@/share/Block";
export default class Garme {
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

let block: Block;
function keydownEvnet(event: any, garmeMap: GarmeMap) {
  switch (event.keyCode) {
    //left
    case 37:
      block.left(garmeMap);
      break;
    //top
    case 38:
      block.top(garmeMap);
      break;
    //right
    case 39:
      block.right(garmeMap);
      break;
    //bottom
    case 40:
      block.bottom(garmeMap);
      break;
    default:
      break;
  }
}

function bindEvent(garmeMap: GarmeMap) {
  document.addEventListener("keydown", (event) => {
    keydownEvnet(event, garmeMap);
  });
}

let timer: NodeJS.Timeout;
export function garameRun() {
  const garme = new Garme();
  block = new Block();
  const gameMap = new GarmeMap();
  //绑定事件
  bindEvent(gameMap);
  timer = setInterval(() => {
    garme.clear();
    block.render(garme);
    gameMap.render(garme);
    const stop = block.next(gameMap);
    //触碰到底部则重新渲染block & 存入到地图
    if (stop) {
      gameMap.renderMap(block);
      block = new Block();
      gameMap.remove();
      const gameOver = gameMap.checkOver();
      if (gameOver) {
        clearInterval(timer);
        setTimeout(() => {
          alert("GAME OVER");
        });
      }
    }
  }, 500);
}
