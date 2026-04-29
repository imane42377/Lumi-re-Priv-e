import { FaInstagram, FaFacebook, FaTiktok, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const socialIcons = [
  { id: 1, icon: <FaInstagram />, label: "Instagram" },
  { id: 2, icon: <FaFacebook />, label: "Facebook" },
  { id: 3, icon: <FaTiktok />, label: "TikTok" },
  { id: 4, icon: <FaLinkedin />, label: "LinkedIn" },
  { id: 5, icon: <FaXTwitter />, label: "X" },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary-foreground text-primary">
      {/* ── Main content ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 px-10 lg:px-8 py-16 gap-12 lg:gap-0">
        {/* Col 1 – Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col leading-none">
            <span
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
              className="text-2xl tracking-[0.12em] font-semibold"
            >
              Lumière
            </span>
            <span
              className="text-[9px] font-bold tracking-[0.45em] uppercase text-accent mt-[-2px]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Privée
            </span>
          </div>

          <div
            className="text-sm text-primary leading-relaxed"
            style={{ fontFamily: "'Montserrat',serif" }}
          >
            <p className="pb-1 italic text-ring">
              {t("footer.tagline")}
            </p>

            <p className="max-w-fit">{t("footer.description")}</p>
          </div>
        </div>

        {/* Col 2 – Contact */}
        <div className="flex flex-col gap-5 lg:pl-10">
          <h2
            className="text-[10px] tracking-[0.4em] uppercase text-primary/40"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t("footer.contact")}
          </h2>

          <div
            className="flex flex-col gap-2 text-sm text-primary/50"
            style={{ fontFamily: "'Montserrat', serif" }}
          >
            <p>{t("footer.location")}</p>

            <a
              href="tel:+212670952218"
              className="hover:text-primary transition-colors duration-200"
            >
              06-70-95-22-18
            </a>

            <a
              href="mailto:imanemeliane18@gmail.com"
              className="hover:text-primary transition-colors duration-200"
            >
              imanemeliane18@gmail.com
            </a>

            <p>{t("footer.hours")}</p>
          </div>
        </div>

        {/* Col 3 – Social */}
        <div className="flex flex-col gap-5">
          <h2
            className="text-[10px] tracking-[0.4em] uppercase text-primary/40"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t("footer.social")}
          </h2>

          <div className="flex gap-3">
            {socialIcons.map((item) => (
              <a
                key={item.id}
                href="#"
                aria-label={item.label}
                className="w-9 h-9 border border-primary hover:text-accent flex items-center justify-center text-primary hover:border-accent transition-all duration-200"
              >
                <span className="text-base">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-10 lg:mx-20 border-t border-muted" />

      {/* Bottom bar */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-3 px-10 lg:px-20 py-6">
        <p
          className="text-[11px] text-muted"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          © {new Date().getFullYear()} Lumière Privée.{" "}
          {t("footer.rights")}
        </p>

        <div className="flex gap-8">
          {["imprint", "privacy"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[11px] text-primary/30 hover:text-primary/60 transition-colors duration-200"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {t(`footer.${item}`)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;