// components/FlipCard.tsx

"use client";

import { useState } from "react";

export default function FlipCard({
  front,
  back,
  height = "h-120",
  width = "w-90"
}: {
  front: React.ReactNode;
  back: React.ReactNode;
  height?: string;
  width?: string;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="[perspective:1000px] cursor-pointer"
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={`relative ${height} ${width} transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        <div className="absolute inset-0 backface-hidden">
          {front}
        </div>

        <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden">
          {back}
        </div>
      </div>
    </div>
  );
}