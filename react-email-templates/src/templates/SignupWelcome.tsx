import React from "react";
import ReactEmail, { A, Box, Email, Item, Image, Span } from "react-html-email";
import { EmailFooter } from "./EmailFooter";

ReactEmail.configStyleValidator({
    platforms: [
        'gmail',
        'gmail-android',
        'apple-mail',
        'apple-ios',
        'yahoo-mail',
        'outlook',
        'outlook-legacy',
        'outlook-web',
    ],
});

type Props = {
    subject: string;
    confirmationUrl: string;
    userName: string;
};

const emailHeadCSS = `
  body {
    background-color: #F5F8FA;
  }
`.trim();

const backgroundStyle = {
    WebkitBoxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    backgroundColor: "#FFF",
    borderRadius: 7,
    boxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    margin: "0 auto",
    width: "100%",
    padding: "0 32px",
};

const containerStyle = {
    backgroundColor: "#F5F8FA",
    width: "100%",
};

const linkStyle = {
    color: "white",
    display: "block",
    paddingBottom: "13px",
    paddingTop: "13px",
    textDecoration: "none",
    width: "100%",
};

const fluidItemStyle = {
    backgroundColor: "rgb(59, 139, 128)",
    borderRadius: 4,
    cursor: "pointer",
    height: 48,
    textAlign: "center",
    textDecoration: "none",
};

const SignupWelcome = ({
    userName,
    subject,
    confirmationUrl,
}: Props) => (
    <Box align="center" style={containerStyle}>
        <Email align="center" headCSS={emailHeadCSS} title={subject}>
            <Item style={{ height: 45 }} />
            <Item>
                <Image
                    height="auto"
                    src="https://s3.eu-central-1.amazonaws.com/images.ovrsea.com/Ovrsea-Logo-noir%2Bpicto.png"
                    style={{ margin: "0 auto "}}
                    width={160}
                />
            </Item>
            <Item style={{ height: 30 }} />
            <Item align="center">
                <Box style={backgroundStyle}>
                    <Item style={{ height: 40 }} />
                    <Item>
                        <Span fontSize={22} fontWeight="bold">Welcome to OVRSEA&nbsp;</Span>
                    </Item>
                    <Item style={{ height: 25 }} />
                    <Item>
                        Hello {userName}, we are happy to have you on board!
                    </Item>
                    <Item style={{ height: 25 }} />
                    <Item>
                        To access the optimal experience for shipment management,
                        you only need to activate your account below.
                    </Item>
                    <Item style={{ height: 50 }} />
                    <Item className="button" style={fluidItemStyle}>
                        <A href={confirmationUrl} style={linkStyle}>Activate my account</A>
                    </Item>
                    <Item style={{ height: 35 }} />
                </Box>
                <EmailFooter />
            </Item>
        </Email>
    </Box>
);

export { SignupWelcome };
