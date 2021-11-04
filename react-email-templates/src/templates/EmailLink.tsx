import React, { PropsWithChildren } from "react";
// @ts-ignore
import { A } from "react-html-email";

type EmailLinkProps = {
    href: string;
    style?: React.CSSProperties;
};

const linkStyle = {
    color: "rgb(117, 128, 140)",
    fontSize: 15,
};

const EmailLink = ({
   children,
   href,
   style,
}: PropsWithChildren<EmailLinkProps>) => (
    <A href={href} style={{ ...linkStyle, ...style }}>
        {children}
    </A>
);

export { EmailLink };
