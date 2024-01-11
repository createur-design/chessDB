// import problemes from "@/data/problemes";

import ItemProbleme from "@/components/probleme/Item";
import Link from "next/link";

export const metadata = {
  title: "L'art des échecs par les problèmes - Bernard Delobel",
  description:
    "Retrouver une partie de mes compositions lié à ma passion pour les échecs",
};

const getData = async () => {
  const res = await fetch(`${process.env.NEXT_API_URI}/api/problemes`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export default async function ProblemesPage() {
  const problemes = await getData();

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="cell">
          <h1 className="titrePage">
            problèmes <small>({problemes.length})</small>
          </h1>
        </div>
        <div className="cell small-12 medium-8">
          {problemes.map((probleme, index) => (
            <div key={index}>
              <ItemProbleme probleme={probleme} />
              <hr />
            </div>
          ))}
        </div>
        <div className="cell small-12 medium-4">
          <div className="stikyTop">
            <h3 className="titreWidget text-center h4">A propos</h3>
            <p>
              👋 je suis <b>Bernard</b>
            </p>
            <p>
              Depuis plus de 40 ans, ma passion pour les échecs m'a conduit à
              explorer <b>l'aspect artistique</b> de ce jeu, devenant ainsi
              compositeur.
            </p>
            <p>
              J'ai pris part à de multiples tournois au cours desquels j'ai eu
              l'opportunité de remporter divers titres & reconnaissances.
            </p>
            <p className="fontSignature h3">Bernard Delobel</p>
            <Link className="btn btnBlack" href="/contact">
              me contacter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
