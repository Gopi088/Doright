import { Link } from "react-router-dom";
import { colors } from "../styles/theme";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#f4f4f4",
        borderTop: "2px solid #e9d2bc",
        padding: "55px 0",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* Logo */}
        <div
          style={{
            width: "120px",
            flexShrink: 0,
          }}
        >
          <img
            src="/images/DoRightLogo.svg"
            alt="DoRight"
            style={{
              width: "72px",
              display: "block",
              marginBottom: "10px",
            }}
          />
        </div>

        {/* About */}
        <div
          style={{
            maxWidth: "300px",
          }}
        >
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#4d4d4d",
              marginBottom: "6px",
            }}
          >
            About DoRight
          </h3>

          <p
            style={{
              fontSize: "12px",
              lineHeight: 1.6,
              color: "#666",
              margin: 0,
            }}
          >
            DoRight is a unified technology platform for all
            things in philanthropy. Whether it's individuals,
            NGOs, or corporations, we ensure that actions
            matter and create an impact.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#4d4d4d",
              marginBottom: "6px",
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
              fontSize: "15px",
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
              gap: "12px",
              alignItems: "center",
              fontSize: "18px",
              color: "#4d4d4d",
            }}
          >
            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#4d4d4d",
              }}
            >
              f
            </a>

            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#4d4d4d",
              }}
            >
              X
            </a>

            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#4d4d4d",
              }}
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="#"
              style={{
                textDecoration: "none",
                color: "#4d4d4d",
                fontWeight: 700,
              }}
            >
              in
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}