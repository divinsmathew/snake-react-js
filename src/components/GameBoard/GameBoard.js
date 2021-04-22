import "../../App.css";
import "../../utils.css";
import BoardCell from "../BoardCell/BoardCell";
import { React } from "react";

const GameBoard = (props) => {
    let board = [];
    let boardWidth = props.boardWidth;
    let boardHeight = props.boardHeight;

    let snake = props.snake;
    let foodCoordinate = props.foodCoordinate;

    for (let i = 0; i < boardHeight; i++) {
        let row = [];

        for (let j = 0; j < boardWidth; j++) {
            if (snake.isHead([i, j])) row.push(<BoardCell cellType="head" />);
            else if (snake.isOn([i, j]))
                row.push(<BoardCell cellType="body" />);
            else if (foodCoordinate[0] === i && foodCoordinate[1] === j)
                row.push(
                    <BoardCell foodClass={props.foodClass} cellType="food" />
                );
            else row.push(<BoardCell cellType="none" />);
        }

        board.push(row);
    }
    return (
        <div className="flex">
            <div className="game-board">{board}</div>
        </div>
    );
};

export default GameBoard;
