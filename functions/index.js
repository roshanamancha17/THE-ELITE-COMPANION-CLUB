const functions = require("firebase-functions");
const axios = require("axios");

exports.notifyDiscord =
functions.https.onCall(async (data) => {

    const WEBHOOK_URL =
    "https://discord.com/api/webhooks/1511923265248038973/QXjtNeaDlfhYj7bD8Zanw2OAmP7PT9OsMrFRoZ73Y68iHSzq-HklsYFN4hFgRJsrEN0i";

    await axios.post(
        WEBHOOK_URL,
        {
            content:
`🚨 NEW ECC APPLICATION

ID: ${data.applicationId}

Name: ${data.fullName}

Phone: ${data.phone}

Instagram: ${data.instagram}

Plan: ${data.plan}`
        }
    );

    return {
        success: true
    };
});