import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";
import Hero from "@/models/Hero";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const hero = await Hero.findById(params.id);

    if (!hero) return error("Hero not found", 404);

    return success(hero);
  } catch (err) {
    return error(err.message);
  }
}

export async function PATCH(req, { params }) {
  try {
    await connectDB();

    const body = await req.json();

    const hero = await Hero.findByIdAndUpdate(params.id, body, { new: true });

    if (!hero) return error("Hero not found", 404);

    return success(hero, "Hero updated");
  } catch (err) {
    return error(err.message);
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const hero = await Hero.findByIdAndDelete(params.id);

    if (!hero) return error("Hero not found", 404);

    return success({}, "Hero deleted");
  } catch (err) {
    return error(err.message);
  }
}
