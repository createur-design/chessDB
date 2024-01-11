import Probleme from "@/lib/models/probleme";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, res) => {
  try {
    connectToDb();

    const problemes = await Probleme.find();
    return NextResponse.json(problemes);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
