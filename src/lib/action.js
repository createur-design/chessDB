"use server";

import { revalidatePath } from "next/cache";
import Probleme from "./models/probleme";
import User from "./models/user";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcrypt";

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
    revalidatePath("/dashboard/create-probleme");
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

export const editProbleme = async (formData) => {};

export const register = async (previousState, formData) => {
  const { name, email, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (!email) {
    return { error: "email required!" };
  }

  if (password !== passwordRepeat) {
    return { error: "le mot de passe ne correspond pas !" };
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    connectToDb();

    const user = await User.findOne({ email });
    if (user) {
      return { error: "Username already exists" };
    }

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();
    console.log("new user in db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error };
  }
};

export const login = async (prevState, formData) => {
  const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { email, password });
  } catch (err) {
    console.log(err);
    // if (err.message.includes("CredentialsSignin")) {
    //   return { error: "Invalid email or password" };
    // }
    throw err;
    // return { error: "email ou mot de passe incorrect !" };
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};
export const handleLogout = async () => {
  await signOut();
};
