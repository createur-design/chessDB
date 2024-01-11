import mongoose from "mongoose";

const ProblemeSchema = new mongoose.Schema(
  {
    intro: {
      type: String,
      required: true,
    },
    stipulation: {
      type: String,
    },
    coups: {
      type: Number,
      required: [true, "uniquement des chiffres !"],
      maxlength: 2,
    },
    infosEtude: {
      type: String,
    },
    categorie: {
      type: String,
      enum: ["problème", "étude", "hétérodoxe & féérique", "divers"],
      required: true,
      default: "problème",
    },
    fenPosition: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
    autheur: {
      type: String,
      default: "Bernard Delobel",
    },
    annee: {
      type: Number,
      maxlength: 4,
    },
    ref: {
      type: String,
    },
  },
  { timestamps: true }
);
const Probleme =
  mongoose.models.Probleme || mongoose.model("Probleme", ProblemeSchema);
export default Probleme;
