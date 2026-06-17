import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

import { colors } from "../styles/theme";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f4f4f4",
        borderTop: "1px solid #e5c9a3",
        padding: "60px 24px",
        fontFamily: "inherit",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* Logo */}
        <div
          style={{
            minWidth: "120px",
          }}
        >
          <img
            src="/images/DoRightLogo.svg"
            alt="DoRight"
            style={{
              width: "70px",
              height: "auto",
              display: "block",
            }}
          />
        </div>

        {/* About */}
        <div
          style={{
            maxWidth: "260px",
          }}
        >
          <h3
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#4d4d4d",
              marginBottom: "8px",
            }}
          >
            About DoRight
          </h3>

          <p
            style={{
              fontSize: "12px",
              lineHeight: "1.5",
              color: "#666",
              margin: 0,
            }}
          >
            DoRight is a unified technology platform for all things in
            philanthropy. Whether it's individuals, NGOs, or corporations,
            we ensure that actions matter and create an impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#4d4d4d",
              marginBottom: "8px",
            }}
          >
            Quick Links
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Link
              to="/about"
              style={{
                fontSize: "12px",
                color: "#666",
                textDecoration: "none",
              }}
            >
              About Us
            </Link>

            <Link
              to="/faq"
              style={{
                fontSize: "12px",
                color: "#666",
                textDecoration: "none",
              }}
            >
              FAQ
            </Link>

            <Link
              to="/privacy"
              style={{
                fontSize: "12px",
                color: "#666",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </Link>

            <Link
              to="/contact"
              style={{
                fontSize: "12px",
                color: "#666",
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#4d4d4d",
              marginBottom: "8px",
            }}
          >
            Follow Us
          </h3>

          <div
            style={{
              display: "flex",
              gap: "14px",
              alignItems: "center",
            }}
          >
           
          </div>
        </div>
      </div>
    </footer>
  );
}