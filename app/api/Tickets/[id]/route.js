import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

// for edit ticket
export async function GET(req, { params }) {
  const { id } = params;

  const foundTicket = await Ticket.findOne({ _id: id });

  return NextResponse.json({foundTicket}, {status: 200});
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "تیکت حذف شد." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "خطا", error }, { status: 500 });
  }
}
