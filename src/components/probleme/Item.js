"use client";
import { deleteProbleme } from "@/lib/action";
import Styles from "./item.module.css";
import Link from "next/link";
import { Chessboard } from "react-chessboard";
import { CiTrash } from "react-icons/ci";

const Item = ({ probleme }) => {
  return (
    <>
      <div className="grid-x grid-padding-x">
        <div className="cell small-12 medium-5 large-4">
          <Chessboard
            position={probleme.fenPosition}
            arePiecesDraggable={false}
            customBoardStyle={{
              borderRadius: "4px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
            }}
          />
        </div>
        <div className="cell small-12 medium-7 large-8">
          {/* <div className={Styles.admin}>
            <form action={deleteProbleme}>
              <input type="hidden" name="id" value={probleme._id} />
              <button className={`btn btnRed ${Styles.btn}`} type="submit">
                <CiTrash />
              </button>
            </form>
          </div> */}
          <div className={Styles.infos}>
            <p>
              <span className={Styles.date}>
                publié le{" "}
                {new Date(probleme.createdAt).toLocaleDateString("fr-FR", {
                  // weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className={Styles.cat}>{probleme.categorie}</span>
              <span className={Styles.nbCoups}>#{probleme.coups}</span>
            </p>
          </div>
          <div>
            <Link className="btn" href={`/problemes/${probleme._id}`}>
              résoudre ce problème
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
