import aboutUsImg from "../assets/images/aboutUs_image_pexels.jpg";
import {
  BadgeCheck,
  ChessQueen,
  Headset,
  UsersRound,
} from "lucide-react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <Headset width={30} height={30} />,
      text: t("about.stats.availability"),
    },
    {
      id: 2,
      icon: <BadgeCheck width={30} height={30} />,
      text: t("about.stats.experience"),
    },
    {
      id: 3,
      icon: <ChessQueen width={30} height={30} />,
      text: t("about.stats.client"),
    },
    {
      id: 4,
      icon: <UsersRound width={30} height={30} />,
      text: t("about.stats.concierges"),
    },
  ];

  return (
    <section id="about-us" className="pb-10">
      <div>
        {/* Header */}
        <div className="text-center py-10">
          <p
            className="text-accent uppercase tracking-[0.3em] text-xs lg:text-sm font-medium mb-4"
            style={{ fontFamily: "'Montserrat',sans-serif" }}
          >
            {t("about.tagline")}
          </p>

          <h1
            className="text-3xl lg:text-5xl"
            style={{
              fontFamily:
                "'Cormorant Garamond',sans-serif",
            }}
          >
            <span className="pr-2 italic text-accent">
              {t("about.titleStart")}
            </span>

            {t("about.titleMiddle")}

            <span className="pl-2 italic text-accent">
              {t("about.titleEnd")}
            </span>
          </h1>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 px-5 lg:px-3 lg:grid-cols-2">
          <div>
            <img
              src={aboutUsImg}
              alt="About Us"
              width={700}
              className="p-5 rounded-3xl h-full"
            />
          </div>

          <div
            className="pt-10 lg:pt-16 pr-15 lg:pl-10 text-muted-foreground lg:text-base lg:max-w-xl lg:leading-loose"
            style={{
              fontFamily:
                "'Montserrat',sans-serif",
            }}
          >
            <p className="pb-5 leading-relaxed">
              {t("about.description1")}
            </p>

            <p className="pb-5 leading-relaxed">
              {t("about.description2")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2">
              {services.map((ser) => (
                <div key={ser.id}>
                  <div className="flex items-center justify-center flex-col pb-6">
                    <span className="flex text-accent pr-16 pb-3">
                      {ser.icon}
                    </span>

                    <p className="flex pr-10">
                      {ser.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;