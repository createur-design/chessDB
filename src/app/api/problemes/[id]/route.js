import Probleme from "@/lib/models/probleme";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    connectToDb();

    const probleme = await Probleme.findOne({ _id: id });
    return NextResponse.json(probleme);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};
