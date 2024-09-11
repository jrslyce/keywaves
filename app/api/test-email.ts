import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const msg = {
      to: 'your_email@example.com', // Change to your email
      from: 'noreply@yourdomain.com', // Your verified sender email
      subject: 'Test Email from Your App',
      text: 'This is a test email sent from the homepage button.',
      html: '<strong>This is a test email sent from the homepage button.</strong>',
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ message: 'Test email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending test email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
