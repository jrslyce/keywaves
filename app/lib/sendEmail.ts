import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export const sendApplicationEmail = async (applicationData: any) => {
  const msg = {
    to: 'applicant@keywaves.club', // Applicant's email
    from: 'noreply@keywaves.club', // Your verified sender email
    subject: 'New Game Marketer Application Received',
    text: `A new application has been submitted.\n\nDetails:\nCompany Name: ${applicationData.companyName}\nWebsite: ${applicationData.website}\nReason: ${applicationData.reason}\n\nYou can review the application here: https://keywaves.club/admin/applications`,
    html: `<p>A new application has been submitted.</p>
           <p><strong>Details:</strong></p>
           <p>Company Name: ${applicationData.companyName}</p>
           <p>Website: ${applicationData.website}</p>
           <p>Reason: ${applicationData.reason}</p>
           <p>You can review the application <a href="https://keywaves.club/admin/applications">here</a>.</p>`,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
