import React, { ComponentType } from "react";

import { renderEmail } from "react-html-email";
import { SignupWelcome } from "./src/templates/SignupWelcome";

type Props = {
    subject: string;
    confirmationUrl: string;
    userName: string;
};

export const renderReactEmail = (Component: ComponentType<Props>, data: Props) => {
    return renderEmail(<Component {...data} />);
}

export const renderSignupWelcomeEmail = (props: Props) => {
    return renderReactEmail(SignupWelcome, props);
};