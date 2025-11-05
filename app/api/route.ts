import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
    }

    // Configure Mercantile SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.mercantile.com.np', // Replace with your actual SMTP host
      port: 587, // Usually 587 for TLS, 465 for SSL
      secure: false, // true if port 465
      auth: {
        user: 'info@fintec.com.np', // your Mercantile email
        pass: 't7=ZBSdL44', // email password
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'info@fintec.com.np',
      subject: `New Contact Form Submission from ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
