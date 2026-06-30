import { connectDB } from "@/lib/mongodb";
import { success, error } from "@/lib/apiResponse";
import Hero from "@/models/Hero";

export async function GET() {
  try {
    await connectDB();

    const heroes = await Hero.find().sort({ createdAt: -1 });

    return success(heroes);
  } catch (err) {
    return error(err.message);
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const hero = await Hero.create(body);

    return success(hero, "Hero created", 201);
  } catch (err) {
    return error(err.message);
  }
}
