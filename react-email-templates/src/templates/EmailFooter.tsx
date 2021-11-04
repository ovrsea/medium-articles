import React from "react";
// @ts-ignore
import { Item, Span } from "react-html-email";
import { EmailLink } from "./EmailLink";

const TextDivider = () => <>&nbsp;·&nbsp;</>;

const EmailFooter = () => {
    return (
        <>
            <Item style={{ height: 20 }} />
            <Item align="center">
                <Span
                    color="rgb(117, 128, 140)"
                    fontSize={14}
                    style={{ lineHeight: 1.4}}
                >
                    Designed by OVRSEA
                    <TextDivider />
                    21 rue Pierre Picard,&nbsp;75018&nbsp;Paris,&nbsp;France&nbsp;
                </Span>
            </Item>
            <Item style={{ height: 5 }} />
            <Item align="center">
                <Span
                    color="rgb(117, 128, 140)"
                    fontSize={14}
                    style={{ lineHeight: 1.4}}
                >
                    <EmailLink href="https://www.ovrsea.com/cgv">
                        Privacy and General Terms & Conditions
                    </EmailLink>
                    <TextDivider />
                    <EmailLink href="https://support.ovrsea.com/hc/fr">
                        Help center
                    </EmailLink>
                </Span>
            </Item>
            <Item style={{ height: 45 }} />
        </>
    );
};

export { EmailFooter };
