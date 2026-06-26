import { Link } from "react-router-dom";
import React from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { colors, fonts, fontWeights } from "../styles/theme";

const footerGroups = [
  {
    title: "ABOUT DORIGHT",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "How We Verify", href: "/#how-it-works" },
      { label: "Impact Reports", href: "/blog" },
      { label: "Careers", href: "/about" },
      { label: "Press Kit", href: "/blog" },
    ],
  },
  {
    title: "QUICK LINKS",
    links: [
      { label: "Browse NGOs", href: "/ngos" },
      { label: "Live Campaigns", href: "/campaigns" },
      { label: "Volunteer", href: "/ngos" },
      { label: "Give In Kind", href: "/campaigns" },
      { label: "Download App", href: "/" },
    ],
  },
  {
    title: "CONTACT",
    links: [
      { label: "hello@doright.in", href: "mailto:hello@doright.in" },
      { label: "Partner with Us", href: "/about" },
      { label: "NGO Registration", href: "/ngos" },
      { label: "Support", href: "/about" },
      { label: "FAQ", href: "/blog" },
    ],
  },
];

const socials = [
  { label: "Instagram", icon: FaInstagram },
  { label: "YouTube", icon: FaYoutube },
  { label: "X", icon: FaXTwitter },
  { label: "LinkedIn", icon: FaLinkedinIn },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0f0f0f",
        color: colors.white,
        padding: "64px 0 48px",
        fontFamily: fonts.body,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 28px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            paddingBottom: "40px",
            borderBottom: "1px solid rgba(255,255,255,.07)",
            marginBottom: "32px",
          }}
          className="footer-grid"
        >
          <div className="footer-left" style={{ flex: "0 0 280px" }}>
            <img
              src="/images/DoRightLogo.svg"
              alt="DoRight"
              style={{
                height: "200px",
                width: "auto",
                display: "block",
                maxHeight: "200px",
                marginBottom: "20px",
              }}
            />
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              {socials.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="/"
                  aria-label={label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "9px",
                    background: "rgba(255,255,255,.07)",
                    color: "rgba(255,255,255,.5)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                >
                  {React.createElement(Icon as React.ComponentType<{ size: number }>, { size: 16 })}
                </a>
              ))}
            </div>
          </div>

          <div
            className="footer-right"
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              paddingLeft: "80px",
            }}
          >
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3
                  style={{
                    fontSize: "12px",
                    lineHeight: 1,
                    fontWeight: fontWeights.textBold,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    margin: "0 0 14px",
                    color: colors.white,
                  }}
                >
                  {group.title}
                </h3>
                <nav style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      to={link.href}
                      style={{
                        color: "rgba(255,255,255,.45)",
                        fontSize: "13px",
                        lineHeight: 1.5,
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
            flexWrap: "wrap",
            color: "rgba(255,255,255,.25)",
            fontSize: "13px",
          }}
        >
          <span>© 2026 DoRight. All rights reserved.</span>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link to="/about" style={{ color:"rgba(255,255,255,.25)", textDecoration:"none" }}>Privacy Policy</Link>
            <span>·</span>
            <Link to="/about" style={{ color:"rgba(255,255,255,.25)", textDecoration:"none" }}>Terms of Use</Link>
            <span>·</span>
            <Link to="/about" style={{ color:"rgba(255,255,255,.25)", textDecoration:"none" }}>Cookie Policy</Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 40px !important;
          }
          .footer-left {
            flex: 0 0 auto !important;
          }
          .footer-right {
            width: 100% !important;
            padding-left: 0 !important;
            flex-wrap: wrap !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 560px) {
          .footer-right {
            flex-direction: column !important;
          }
          footer > div > div:last-child {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
