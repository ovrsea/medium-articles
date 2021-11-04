import { renderSignupWelcomeEmail } from './renderEmail'

(() => {
    const htmlContent = renderSignupWelcomeEmail({
        subject: "Welcome to OVRSEA",
        userName: "Eric Cabrel",
        confirmationUrl: "https://ovrsea.com"
    });

    console.log(htmlContent);
})();