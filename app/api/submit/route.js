import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/config/db";
import TalankModel from "@/lib/models/talankmodel";

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    console.log("Attempting DB connection...");
    const db = await ConnectDB();
    console.log("DB connection state:", db.connection.readyState);

    const body = await req.json();
    console.log("Request body:", JSON.stringify(body, null, 2));

    // Validation
    if (!body.name?.trim()) throw new Error("Name is required");
    if (!body.mobile?.trim()) throw new Error("Mobile is required");
    if (!body.email?.trim()) throw new Error("Email is required");

    const doc = await TalankModel.create({
      name: body.name.trim(),
      mobile: body.mobile.trim(),
      email: body.email.trim().toLowerCase(),
      description: body.description?.trim()
    });

    return NextResponse.json(
      { success: true, id: doc._id.toString() },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { 
        success: false,
        message: error.message || "Database operation failed",
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}