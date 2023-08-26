import React from "react";
import { CLASS_CELL, CLASS_BLOCK, ROW, COL } from "@/utils/config";
import Block from "@/share/Block";
import { useEffect } from "react";

const Container: React.FC = () => {
  const block = new Block();
  useEffect(() => {
    block.render();
  }, [])
  return (
    <div className="tetris-box" style={{ width: `${40 * COL}px` }}>
      {new Array(ROW).fill(1).map((_, i) => {
        return (
          <div
            className={`cell cell-${i} ${CLASS_CELL}-${i}`}
            data-x={i}
            key={i}
          >
            {new Array(COL).fill(1).map((__, y) => {
              return (
                <div
                  key={i + "" + y}
                  data-x={i}
                  data-y={y}
                  className={`block block-${y} ${CLASS_BLOCK}-${y}`}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default Container;
