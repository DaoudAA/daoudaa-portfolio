import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const mailer = process.env.RESEND_Mailer;
export async function POST(req, rep) {
  const {body} =req;
  const {email, subject, data} = body;
  try {
    const { data, error } = await resend.emails.send({
      from: mailer,
      to: [mailer],
      subject: 'Hello world',
      react: <>
      <h1>{subject}</h1>
      <p>Thank you for contacting us !</p>
      <p>New message submitted</p>
      <p>{data}</p>
      </>,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
