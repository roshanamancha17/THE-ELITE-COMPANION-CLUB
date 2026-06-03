const functions = require("firebase-functions");
const { Resend } = require("resend");

const resend = new Resend(
  functions.config().resend.key
);

exports.sendApplicationEmail =
functions.https.onCall(async (data) => {

  const {
    email,
    fullName,
    applicationId
  } = data;

  await resend.emails.send({
    from: "ECC <onboarding@yourdomain.com>",
    to: email,
    subject: "Application Received",
    html: `
      <h2>Application Received</h2>

      <p>Hello ${fullName},</p>

      <p>
      Thank you for applying to
      The Elite Companion Club.
      </p>

      <p>
      Application ID:
      <strong>${applicationId}</strong>
      </p>

      <p>
      Status:
      Pending Review
      </p>

      <p>
      Expected Review Time:
      12-24 Hours
      </p>
    `
  });

  return {
    success: true
  };
});