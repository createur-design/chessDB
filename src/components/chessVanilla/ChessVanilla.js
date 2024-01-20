"use client";
import React, { useEffect, useRef, useState } from "react";
//@ts-ignore
import Chessboard from "chessboardjs";
import "chessboardjs/www/css/chessboard.css";

/** IMAGES ARE ADDED IN PUBLIC FOLDER */

const ChessboardCompo = ({ onUpdateState }) => {
  const boardRef = useRef(null);

  const _onSnapEnd = () => {
    // console.log(boardRef?.current.fen());
    // console.log(boardRef?.current.position());
    const fenPos = boardRef?.current.fen();
    onUpdateState(fenPos);
  };

  useEffect(() => {
    window.$ = window.jQuery = require("jquery");
    const _board = Chessboard("test", {
      draggable: true,
      dropOffBoard: "trash",
      sparePieces: true,
      onSnapEnd: _onSnapEnd,
    });
    boardRef.current = _board;
    return () => {
      if (_board) _board.destroy();
    };
  }, []);

  return (
    <>
      <div id="test" style={{ width: "400px" }} />
    </>
  );
};
export default ChessboardCompo;
