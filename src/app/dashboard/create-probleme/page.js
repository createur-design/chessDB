import { revalidatePath } from "next/cache";
import { connectToDb } from "@/lib/utils";
import Probleme from "@/lib/models/probleme";
export default function Page() {
  async function createInvoice(formData) {
    "use server";

    const {
      intro,
      stipulation,
      coups,
      infosEtude,
      categorie,
      fenPosition,
      solution,
      autheur,
      annee,
      ref,
    } = Object.fromEntries(formData);

    // mutate data
    // revalidate cache
    try {
      connectToDb();

      const newProbleme = new Probleme({
        intro,
        stipulation,
        coups,
        infosEtude,
        categorie,
        fenPosition,
        solution,
        autheur,
        annee,
        ref,
      });
      await newProbleme.save();
      revalidatePath("/problemes");
    } catch (error) {
      console.log(error);
      throw new Error(error, "something went wrong!");
    }
  }

  return (
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="cell">
          <form action={createInvoice}>
            <input type="text" name="intro" placeholder="intro" required />
            <input type="text" name="stipulation" placeholder="stipulation" />
            <input type="number" name="coups" placeholder="coups" required />
            <input type="text" name="infosEtude" placeholder="infos étude" />
            <select name="categorie">
              <option value="problème">problème</option>
              <option value="étude">étude</option>
              <option value="hétérodoxe & féérique">
                hétérodoxe & féérique
              </option>
              <option value="divers">divers</option>
            </select>
            <input
              type="text"
              name="fenPosition"
              placeholder="position type FEN {8/8/8/8/8/8/8/8}"
            />
            <input
              type="text"
              name="solution"
              placeholder="solution"
              required
            />
            <input type="text" name="autheur" value="Bernard Delobel" />
            <input type="number" name="annee" placeholder="année" />
            <input type="text" name="ref" placeholder="ref" />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
