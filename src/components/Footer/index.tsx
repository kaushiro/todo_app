import React from "react";
import Clock from "react-live-clock";

import messages from "./messages";
import {
  FooterWrapperStyled,
  FooterRowContainerStyled,
  FooterLinksStyled,
} from "./styles";

export const links = [
  {
    href: "https://www.linkedin.com/in/kaushiro",
    text: messages.linkedIn.defaultMessage,
    target: "_blank",
    rel: "external",
  },
  {
    href: "https://github.com/kaushiro",
    text: messages.gitHub.defaultMessage,
    target: "_blank",
    rel: "external",
  },
  {
    href: "https://codesandbox.io/u/kaushiro",
    text: messages.codeSandBox.defaultMessage,
    target: "_blank",
    rel: "external",
  },
  {
    href: "https://codepen.io/kaushiro",
    text: messages.codePen.defaultMessage,
    target: "_blank",
    rel: "external",
  },
];

const Footer = () => {
  return (
    <FooterWrapperStyled className="main-footer">
      <FooterRowContainerStyled>
        <Clock format={"HH:mm:ss"} ticking={true} timezone={"	Europe/London"} />
        <p>{messages.appDescription.defaultMessage}</p>
      </FooterRowContainerStyled>
      <FooterRowContainerStyled>
        <nav>
          <FooterLinksStyled>
            {links.map((link) => {
              const props = {
                target: link.target,
                rel: link.rel,
                to: link.href,
                "data-qaid": `link-footer-${link.text}`,
              };
              return (
                <a key={link.href} href={link.href} {...props}>
                  <p>{link.text}</p>
                </a>
              );
            })}
          </FooterLinksStyled>
        </nav>
      </FooterRowContainerStyled>
    </FooterWrapperStyled>
  );
};

export { FooterWrapperStyled };
export default Footer;
