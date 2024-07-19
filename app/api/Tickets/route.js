import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

// ارسال تیکت ها به دیتابیس
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

// دریافت تیکت ها از دیتابیس
export async function GET(){
  try {
    // دریافت تیکت ها 
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "خطا", error }, { status: 500 });
  }
}
