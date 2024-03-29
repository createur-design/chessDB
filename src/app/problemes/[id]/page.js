import Chessboard from "@/components/chessboard/Chessboard";
import { BASE_API_URL } from "@/utils/constants";
import { Parser } from "html-to-react";

const getData = async (slug) => {
  const res = await fetch(`${BASE_API_URL}/api/problemes/${slug}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export default async function SingleProblemePage({ params }) {
  if (!BASE_API_URL) {
    return null;
  }
  const probleme = await getData(params.id);
  const htmlParser = new Parser();
  return (
    <main>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="cell">
            <h1 className="titrePage">
              Problème <small>id : {probleme._id}</small>
            </h1>
          </div>
          <div className="cell small-10 medium-5">
            <Chessboard pos={probleme}></Chessboard>
          </div>
          <div className="cell small-12 medium-7">
            <h2>{htmlParser.parse(probleme.stipulation)}</h2>
            <p>
              <small>
                Compositeur : {probleme.autheur}, {probleme.annee}
              </small>
            </p>
            <details>
              <summary>Solution</summary>
              {htmlParser.parse(probleme.solution)}
            </details>
          </div>
        </div>
      </div>
    </main>
  );
}
