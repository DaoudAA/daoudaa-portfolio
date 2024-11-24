import { Resend } from 'resend';
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const mailer = process.env.RESEND_Mailer;
export async function POST(req, rep) {
  const {email, subject, data} =await req.json;
  try {
    const { data, error } = await resend.emails.send({
      from: mailer,
      to: [mailer],
      subject: subject,
      react: (
      <>
        <h1>{subject}</h1>
        <p>Thank you for contacting us !</p>
        <p>New message submitted</p>
        <p>{data}</p>
      </>),
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
