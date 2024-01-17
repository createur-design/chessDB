"use client";
import { createProbleme } from "@/lib/action";
import dynamic from "next/dynamic";
import React, { useState } from "react";

const QuillComponent = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css";
export default function Page() {
  const [stipulation, setStipulation] = useState("");
  const [solution, setSolution] = useState("");

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="cell small-8">
          <form action={createProbleme}>
            <div className="grid-x grid-padding-x">
              <div className="cell small-6">
                <label htmlFor="autheur">
                  Autheur<span>*</span>
                </label>
                <input
                  type="text"
                  name="autheur"
                  value="Bernard Delobel"
                  required
                />
              </div>
              <div className="cell small-6">
                <label htmlFor="anee">Année de composition</label>
                <input type="number" name="annee" placeholder="année" />
              </div>
            </div>

            <label htmlFor="ref">
              Référence <small>(facultatif)</small>
            </label>
            <input
              type="text"
              name="ref"
              placeholder="ref : Inedit, consours..."
            />
            <label htmlFor="stipulation">
              Stipulation<span>*</span>
            </label>
            <QuillComponent
              theme="snow"
              value={stipulation}
              onChange={setStipulation}
              placeholder="Mat en x coups, les blancs jouent et gagnent..."
            />
            <input
              type="hidden"
              name="stipulation"
              value={stipulation}
              placeholder="stipulation : Mat en x coups, les blancs jouent et gagnent..."
              required
            />
            <label htmlFor="infos">
              Infos supplémentaires <small>(facultatif)</small>
            </label>
            <input
              type="text"
              name="infos"
              placeholder="infos supplémentaires..."
            />
            <label htmlFor="fenPosition">
              <b>FEN</b> position<span>*</span>
            </label>
            <input
              type="text"
              name="fenPosition"
              required
              placeholder="position type FEN {8/8/8/8/8/8/8/8}"
            />
            <label htmlFor="coups">Nombre de coups</label>
            <input type="number" name="coups" placeholder="nombre de coups" />
            <label htmlFor="categorie">
              Catégorie<span>*</span>
            </label>
            <select name="categorie">
              <option value="problème orthodoxe">problème orthodoxe</option>
              <option value="mat aidé">mat aidé</option>
            </select>
            <label htmlFor="solution">
              Solution<span>*</span>
            </label>
            <QuillComponent
              theme="snow"
              value={solution}
              onChange={setSolution}
              placeholder="Solution..."
            />
            <input
              type="hidden"
              name="solution"
              placeholder="solution"
              required
              value={solution}
            />
            <button className="btn" type="submit">
              Créer
            </button>
          </form>
        </div>
        <div className="cell small-4"></div>
      </div>
    </div>
  );
}
