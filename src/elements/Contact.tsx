import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

// ✅ One variant, reused everywhere
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

export default function ContactSection() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative pb-30 flex flex-col items-center justify-center px-6 py-16 overflow-hidden"
      style={{ backgroundColor: "var(--accent)" }}
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* Heading — delay 0.2 */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl leading-tight mb-8"
          style={{
            fontFamily: "'Georgia', 'Times New Roman', serif",
            color: "var(--primary)",
            fontWeight: 400,
            letterSpacing: "-0.01em",
          }}
        >
          {t("contact.titleLine1")}
          <br />
          {t("contact.titleLine2")}{" "}
          <em style={{ fontStyle: "italic", fontFamily: "'Georgia', 'Times New Roman', serif", fontWeight: 300 }}>
            {t("contact.titleAccent")}
          </em>{" "}
          <span style={{ color: "#f5ede8" }}>.</span>
        </motion.h1>

        {/* Subtitle — delay 0.35 */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          className="text-base sm:text-lg max-w-xl leading-relaxed mb-14"
          style={{ color: "var(--ring)", fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
        >
          {t("contact.subtitle")}
        </motion.p>

        {/* Buttons — delay 0.5 */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <a href="mailto:hello@studio.com">
            <Button
              className="group flex items-center gap-3 bg-secondary hover:bg-muted text-accent px-10 py-7 transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{ fontFamily: "'Georgia', serif", fontSize: "1rem", letterSpacing: "0.02em", fontWeight: 500, minWidth: "220px", justifyContent: "center" }}
            >
              <Mail size={18} strokeWidth={1.5} />
              {t("contact.ctaPrimary")}
            </Button>
          </a>

          <a href="tel:+212670952218">
            <Button
              variant="outline"
              className="group flex items-center gap-3 px-10 py-7 transition-all duration-300 hover:bg-white/10 active:scale-95"
              style={{ border: "1.5px solid #f5ede8", color: "#f5ede8", backgroundColor: "transparent", fontFamily: "'Georgia', serif", fontSize: "1rem", letterSpacing: "0.02em", fontWeight: 500, minWidth: "180px", justifyContent: "center" }}
            >
              <Phone size={18} strokeWidth={1.5} />
              {t("contact.ctaSecondary")}
            </Button>
          </a>
        </motion.div>

        {/* Contact info — delay 0.65 */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12"
        >
          <div className="flex items-center gap-2" style={{ color: "#c9a8b2", fontFamily: "'Georgia', serif", fontSize: "0.9rem" }}>
            <MapPin size={15} strokeWidth={1.5} style={{ color: "#c9a8b2" }} />
            {t("contact.location")}
          </div>
          <div className="flex items-center gap-2" style={{ color: "#c9a8b2", fontFamily: "'Georgia', serif", fontSize: "0.9rem" }}>
            <Phone size={15} strokeWidth={1.5} style={{ color: "#c9a8b2" }} />
            06-70-95-22-18
          </div>
        </motion.div>

      </div>
    </section>
  );
}