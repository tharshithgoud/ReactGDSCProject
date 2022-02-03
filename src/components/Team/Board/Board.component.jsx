import React, { useEffect, useState } from "react";
import BoardMember from "./BoardMember.component";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Row } from "react-bootstrap";
import Flickity from "react-flickity-component";

function Board() {
  const [board, setBoard] = useState([]);
  const boardCollectionRef = collection(db, "team-21-22");
  useEffect(() => {
    const getBoard = async () => {
      const data = await getDocs(boardCollectionRef);
      setBoard(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBoard();
  }, []);

  return (
    <div>
      <div className="d-none d-lg-block d-xl-block">
        <Row className = "d-flex justify-content-center">
          {board.map((member) => {
            return <BoardMember data={member} />;
          })}
        </Row>
      </div>

      <Flickity
        className={"carousel d-lg-none d-xl-none"} // default ''
        elementType={"div"} // default 'div'
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static
      >
        {board.map((member) => {
          return <BoardMember data={member} />;
        })}
      </Flickity>
    </div>
  );
}

export default Board;
