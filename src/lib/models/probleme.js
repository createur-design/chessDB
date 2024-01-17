import mongoose from "mongoose";

const ProblemeSchema = new mongoose.Schema(
  {
    autheur: {
      type: String,
      default: "Bernard Delobel",
      required: true,
    },
    annee: {
      type: Number,
      maxlength: 4,
    },
    ref: {
      type: String,
    },
    stipulation: {
      type: String,
      required: true,
    },
    infosSup: {
      type: String,
    },
    fenPosition: {
      type: String,
      required: true,
    },
    coups: {
      type: Number,
      required: [true, "uniquement des chiffres !"],
      maxlength: 2,
    },
    solution: {
      type: String,
      required: true,
    },
    categorie: {
      type: String,
      enum: ["problème orthodoxe", "mat aidé"],
      required: true,
      default: "problème orthodoxe",
    },
  },
  { timestamps: true }
);
const Probleme =
  mongoose.models?.Probleme || mongoose.model("Probleme", ProblemeSchema);
export default Probleme;
