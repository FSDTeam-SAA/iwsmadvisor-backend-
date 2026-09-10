import sendEmail from '../src/lib/sendEmail.js';

const targetEmail = process.argv[2] || 'webmaster@iwmsadvisors.com';

console.log(`\n========================================`);
console.log(`Testing Email Dispatch with Masking`);
console.log(`Target: ${targetEmail}`);
console.log(`========================================\n`);

async function test() {
  try {
    const result = await sendEmail({
      to: targetEmail,
      subject: 'Test Email - IWMS Advisors Email Masking Verification',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #0b5cff;">IWMS Advisors Email Test</h2>
          <p>Hello,</p>
          <p>This is a test email sent from the backend to verify <strong>Microsoft Graph API</strong> integration and <strong>Email Masking</strong>.</p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Sender:</strong> IWMS Advisors &lt;webmaster@iwmsadvisors.com&gt;</p>
            <p style="margin: 5px 0 0 0;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
          </div>
          <p>If you see this, email sending and masking are configured successfully!</p>
        </div>
      `
    });

    console.log('✅ Email sent successfully!');
    console.log('Provider used:', result.provider);
    if (result.fallbackFrom) {
      console.log('Fallback from:', result.fallbackFrom);
    }
  } catch (error) {
    console.error('❌ Email send failed:');
    console.error(error.message || error);
  }
}

test();
