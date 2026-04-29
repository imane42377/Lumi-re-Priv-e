import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Star = ({ filled }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill={filled ? "var(--accent)" : "none"}
    stroke="var(--accent)"
    strokeWidth="1.5"
    style={{ display: "inline-block" }}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = t("testimonials.items", {
    returnObjects: true,
  });

  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(true);

  const goTo = (index) => {
    if (index === active || animating) return;

    setAnimating(true);
    setVisible(false);

    setTimeout(() => {
      setActive(index);
      setVisible(true);
      setAnimating(false);
    }, 380);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (active + 1) % testimonials.length;
      goTo(next);
    }, 5000);

    return () => clearInterval(timer);
  }, [active, animating]);

  const current = testimonials[active];

  return (
    <section id="testimonials" style={styles.page}>
      <div style={styles.noiseBg} />

      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <p
            className="text-accent uppercase tracking-[0.3em] text-xs lg:text-sm font-medium mb-4"
            style={{ fontFamily: "'Montserrat',serif" }}
          >
            {t("testimonials.tagline")}
          </p>

          <h1 style={styles.title}>
            <em style={styles.titleItalic}>
              {t("testimonials.titleStart")}
            </em>{" "}
            <span style={styles.titleNormal}>
              {t("testimonials.titleEnd")}
            </span>
          </h1>
        </div>

        {/* Card */}
        <div style={styles.card}>
          <div style={styles.cardAccent} />

          <div
            style={{
              ...styles.cardInner,
              opacity: visible ? 1 : 0,
              transform: visible
                ? "translateY(0px)"
                : "translateY(12px)",
              transition:
                "opacity 0.38s ease, transform 0.38s ease",
            }}
          >
            <div style={styles.cardBody}>
              {/* Avatar + info */}
              <div style={styles.avatarSection}>
                <div style={styles.avatarRing}>
                  <img
                    src={current.avatar}
                    alt={current.name}
                    style={styles.avatar}
                  />
                </div>

                <div style={styles.authorInfo}>
                  <p style={styles.authorName}>
                    {current.name}
                  </p>
                  <p style={styles.authorRole}>
                    {current.role}
                  </p>
                </div>
              </div>

              <div style={styles.quoteChar}>"</div>

              {/* Quote text */}
              <blockquote style={styles.quoteText}>
                {current.quote}
              </blockquote>

              {/* Stars */}
              <div style={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    filled={i < current.rating}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dots */}
          <div style={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  ...styles.dot,
                  ...(i === active
                    ? styles.dotActive
                    : {}),
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div style={styles.floatEl1} />
        <div style={styles.floatEl2} />
      </div>
    </section>
  );
}
const styles = {
  page: {
    minHeight: "100vh",
    background: "var(--secondary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    position: "relative",
    overflow: "hidden",
    padding: "48px 24px",
  },
  noiseBg: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.035'/%3E%3C/svg%3E")`,
    opacity: 0.6,
    pointerEvents: "none",
  },
  wrapper: {
    maxWidth: 760,
    width: "100%",
    position: "relative",
    zIndex: 1,
  },
  header: {
    textAlign: "center",
    fontFamily: "'Cormorant Garamond', serif",
    marginBottom: 48,
  },
  eyebrow: {
    letterSpacing: "0.18em",
    fontSize: 11,
    color: "var(--muted)",
    fontFamily: "'Cormorant Garamond', serif",
    textTransform: "uppercase",
    margin: "0 0 16px",
  },
  title: {
    fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
    fontWeight: 400,
    lineHeight: 1.18,
    color: "var(--foreground)",
    margin: 0,
  },
  titleItalic: {
    fontStyle: "italic",
    color: "var(--accent)",
    fontFamily: "'Cormorant Garamond', serif",
  },
  titleNormal: {
    fontStyle: "",
    fontFamily: "'Cormorant Garamond', serif",
  },
  card: {
    background: "var(--muted)",
    borderRadius: 4,
    boxShadow: "0 2px 40px rgba(28,22,18,0.08), 0 1px 3px rgba(28,22,18,0.04)",
    position: "relative",
    overflow: "hidden",
    padding: "0 0 36px",
  },
  cardAccent: {
    height: 3,
    background: "linear-gradient(90deg, #8B1A2F 0%, #C9736F 50%, #e6a26a 100%)",
    width: "100%",
  },
  cardInner: {
    padding: "40px 52px 0",
  },
  quoteChar: {
    fontFamily: "'Georgia', serif",
    fontSize: 72,
    lineHeight: 1,
    color: "#ffd5a1",
    marginBottom: 8,
    display: "block",
    userSelect: "none",
    letterSpacing: "-0.02em",
  },
  cardBody: {
    display: "flex",
    flexDirection: "column",
    gap: 28,
  },
  avatarSection: {
    display: "flex",
    alignItems: "center",
    gap: 18,
  },
  avatarRing: {
    width: 68,
    height: 68,
    borderRadius: "50%",
    padding: 3,
    background: "linear-gradient(135deg, #8B1A2F, #C9736F)",
    flexShrink: 0,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    background: "#F0EBE3",
  },
  authorInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  authorName: {
    fontSize: 15,
    fontWeight: 700,
    color: "var(--foreground)",
    margin: 0,
    fontFamily: "'Georgia', serif",
    letterSpacing: "0.01em",
  },
  authorRole: {
    fontSize: 13,
    color: "var(--muted-foreground)",
    margin: 0,
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
  },
  quoteText: {
    fontSize: "clamp(1rem, 2vw, 1.2rem)",
    lineHeight: 1.78,
    color: "var(--foreground)",
    margin: 0,
    fontFamily: "'Montserrat', serif",
    fontWeight: 400,
  },
  stars: {
    display: "flex",
    gap: 4,
    alignItems: "center",
  },
  dots: {
    display: "flex",
    gap: 10,
    justifyContent: "flex-start",
    padding: "32px 52px 0",
  },
  dot: {
    width: 28,
    height: 3,
    border: "none",
    borderRadius: 2,
    background: "var(--secondary)",
    cursor: "pointer",
    padding: 0,
    transition: "background 0.3s ease, width 0.3s ease",
  },
  dotActive: {
    background: "var(--accent)",
    width: 44,
  },
  floatEl1: {
    position: "absolute",
    width: 180,
    height: 180,
    borderRadius: "50%",
    top: -60,
    right: -40,
    pointerEvents: "none",
  },
  floatEl2: {
    position: "absolute",
    width: 120,
    height: 120,
    borderRadius: "50%",
    bottom: 20,
    left: -30,
    pointerEvents: "none",
  },
};