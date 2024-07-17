import Ticket from "../(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData); // mongoose function
    return NextResponse.json({ message: "تیکت ساخته شد." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "خطا", error }, { status: 500 });
  }
}
