import { useState } from "react"
import { Button } from "../components/ui/button"
import { useTranslation } from "react-i18next"

import dining1 from "../assets/images/pexels1_dinning.jpg"
import dining2 from "../assets/images/pexels2_dininig.webp"
import dining3 from "../assets/images/pexels3_dining3.webp"

import travel1 from "../assets/images/travel1_pexels.webp"
import travel2 from "../assets/images/travel2_pexels.webp"
import travel3 from "../assets/images/travel3_pexels.webp"

import enent1 from "../assets/images/events1_pexels.webp"
import event2 from "../assets/images/event2_pexels.jpg"
import event3 from "../assets/images/event3_pexels.jpg"

import wellness1 from "../assets/images/welness1_pexels.jpg"
import wellness2 from "../assets/images/wellness2_pexels.jpg"
import wellness3 from "../assets/images/wellness3_pexels.jpg"

const Experiences = () => {
  const { t } = useTranslation()
  const [selected, setSelected] = useState("dining")

  const btns = [
    { id: 1, content: t("experiences.filters.all"), value: "all" },
    { id: 2, content: t("experiences.filters.dining"), value: "dining" },
    { id: 3, content: t("experiences.filters.travel"), value: "travel" },
    { id: 4, content: t("experiences.filters.events"), value: "events" },
    { id: 5, content: t("experiences.filters.wellness"), value: "wellness" },
  ]

  const experiences = {
    dining: [
      {
        id: 1,
        img: dining1,
        title: t("experiences.cards.dining.0.title"),
        description: t("experiences.cards.dining.0.description"),
      },
      {
        id: 2,
        img: dining2,
        title: t("experiences.cards.dining.1.title"),
        description: t("experiences.cards.dining.1.description"),
      },
      {
        id: 3,
        img: dining3,
        title: t("experiences.cards.dining.2.title"),
        description: t("experiences.cards.dining.2.description"),
      },
    ],

    travel: [
      {
        id: 4,
        img: travel1,
        title: t("experiences.cards.travel.0.title"),
        description: t("experiences.cards.travel.0.description"),
      },
      {
        id: 5,
        img: travel2,
        title: t("experiences.cards.travel.1.title"),
        description: t("experiences.cards.travel.1.description"),
      },
      {
        id: 6,
        img: travel3,
        title: t("experiences.cards.travel.2.title"),
        description: t("experiences.cards.travel.2.description"),
      },
    ],

    events: [
      {
        id: 7,
        img: enent1,
        title: t("experiences.cards.events.0.title"),
        description: t("experiences.cards.events.0.description"),
      },
      {
        id: 8,
        img: event2,
        title: t("experiences.cards.events.1.title"),
        description: t("experiences.cards.events.1.description"),
      },
      {
        id: 9,
        img: event3,
        title: t("experiences.cards.events.2.title"),
        description: t("experiences.cards.events.2.description"),
      },
    ],

    wellness: [
      {
        id: 10,
        img: wellness1,
        title: t("experiences.cards.wellness.0.title"),
        description: t("experiences.cards.wellness.0.description"),
      },
      {
        id: 11,
        img: wellness2,
        title: t("experiences.cards.wellness.1.title"),
        description: t("experiences.cards.wellness.1.description"),
      },
      {
        id: 12,
        img: wellness3,
        title: t("experiences.cards.wellness.2.title"),
        description: t("experiences.cards.wellness.2.description"),
      },
    ],
  }

  const allExperiences = Object.values(experiences).flat()

  const filtered =
    selected === "all"
      ? allExperiences
      : experiences[selected] || []

  return (
    <section id="experiences" className="py-16 lg:py-24">
      {/* TITLE */}
      <div className="text-center px-6">
        <p
          className="text-accent uppercase tracking-[0.3em] text-xs lg:text-sm font-medium mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {t("experiences.tagline")}
        </p>

        <h1
          className="text-3xl lg:text-5xl"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          <span className="text-accent italic pr-2">
            {t("experiences.titleStart")}
          </span>

          {t("experiences.titleMiddle")}

          <span className="text-accent italic pl-2">
            {t("experiences.titleEnd")}
          </span>
        </h1>
      </div>

      {/* BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mt-10 px-6">
        {btns.map((btn) => (
          <Button
            key={btn.id}
            onClick={() => setSelected(btn.value)}
            className={`uppercase rounded-md px-6 py-2 tracking-widest text-xs ${
              selected === btn.value
                ? "bg-accent text-primary"
                : "bg-primary text-accent hover:bg-accent hover:text-primary"
            }`}
          >
            {btn.content}
          </Button>
        ))}
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 lg:px-12 mt-14">
        {filtered.map((exp) => (
          <div key={exp.id} className="group">
            <div className="relative overflow-hidden rounded-xl w-full h-[350px]">
              <img
                src={exp.img}
                alt={exp.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-accent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

              <div className="absolute bottom-5 left-5 right-5 text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
                <p className="uppercase tracking-[0.25em] text-xs mb-2">
                  {t("experiences.overlay")}
                </p>

                <h3 className="text-2xl">{exp.title}</h3>
              </div>
            </div>

            <div className="pt-5 transition duration-300 group-hover:opacity-40">
              <p className="text-accent uppercase tracking-[0.25em] text-xs mb-2">
                {t("experiences.signature")}
              </p>

              <h2 className="text-xl mb-2">{exp.title}</h2>

              <p className="text-sm text-gray-600 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experiences