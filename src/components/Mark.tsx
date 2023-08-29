import { garmeMap } from "@/share/Garme";
import React, { useEffect, useState } from "react";

const Mark: React.FC = () => {
  const [mark, setMark] = useState(0);
  useEffect(() => {
    if (garmeMap) {
      garmeMap.onMark((mark: number) => {
        setMark(mark);
      });
    }
  }, []);
  return (
    <div className="mark">
      <div className="title">得分：</div>
      <div className="content">{mark}</div>
    </div>
  );
};
export default Mark;
