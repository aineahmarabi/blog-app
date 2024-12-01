import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      }
    });

    const mailOptions = {
      from: `"Jewl In The Mines" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECIPIENTS,
      subject: `New Website Message From ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333;">New Contact Us Message</h2>
          <p style="font-size: 16px; color: #555;">You have received a new message from your website contact form.</p>

          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f9f9f9;">
              <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Name</th>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Email</th>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr style="background-color: #f9f9f9;">
              <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Subject</th>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${subject}</td>
            </tr>
            <tr>
              <th style="padding: 8px; text-align: left; border-bottom: 1px solid #ddd;">Message</th>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${message}</td>
            </tr>
          </table>

          <p style="font-size: 14px; color: #999; text-align: center;">This email was generated automatically from the website.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}