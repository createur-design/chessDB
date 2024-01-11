"use client";
import { useState } from "react";
import { Chessboard } from "react-chessboard";

function ChessboardComponent({ pos }) {
  const [position, setPosition] = useState(pos.fenPosition);
  const resetPosition = () => {
    setPosition(pos.fenPosition);
  };

  const view = (currentPosition) => {
    setPosition(currentPosition);
  };

  return (
    <>
      <Chessboard
        id="Configurable Board"
        position={position}
        getPositionObject={view}
        dropOffBoardAction="trash"
        customBoardStyle={{
          borderRadius: "4px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
        }}
        // customArrows={[["d3", "d6", "green"]]}
        // customDarkSquareStyle={{ backgroundColor: "#779952" }}
        // customLightSquareStyle={{ backgroundColor: "#edeed1" }}
      />
      <button className="btn" onClick={resetPosition}>
        Init position
      </button>
    </>
  );
}

export default ChessboardComponent;
