"use server";

import { revalidatePath } from "next/cache";
import Probleme from "./models/probleme";
import { connectToDb } from "./utils";

export const createProbleme = async (formData) => {
  const {
    autheur,
    annee,
    ref,
    stipulation,
    infos,
    fenPosition,
    coups,
    categorie,
    solution,
  } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newProbleme = new Probleme({
      autheur,
      annee,
      ref,
      stipulation,
      infos,
      fenPosition,
      coups,
      categorie,
      solution,
    });
    await newProbleme.save();
    console.log("save !");
    revalidatePath("/problemes");
  } catch (error) {
    console.log(error);
    throw new Error("Impossible de créer le nouveau problème !");
  }
};

export const deleteProbleme = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();
    await Probleme.findByIdAndDelete(id);
    console.log("delete !");
    revalidatePath("/problemes");
  } catch (error) {
    console.log(error);
    throw new Error("Impossible de supprimer le problème !");
  }
};
