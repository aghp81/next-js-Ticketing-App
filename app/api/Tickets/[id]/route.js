import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
  } catch (error) {
    return NextResponse.json({ message: "خطا", error }, { satatus: 500 });
  }
}
