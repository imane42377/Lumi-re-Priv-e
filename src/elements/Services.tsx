import { ChevronRight, Compass, Ticket, Wine } from "lucide-react"
import { Button } from "../components/ui/button"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
const Services = () => {
  const {t} = useTranslation()

  const cards = [
    {
      id: 1,
      icon: <Wine width={27} height={27} />,
      title: t("services.cards.0.title"),
      description: t("services.cards.0.description"),
    },
    {
      id: 2,
      icon: <Compass width={27} height={27} />,
      title: t("services.cards.1.title"),
      description: t("services.cards.1.description"),
    },
    {
      id: 3,
      icon: <Ticket width={27} height={27} />,
      title: t("services.cards.2.title"),
      description: t("services.cards.2.description"),
    },
  ]

  return (
    <section id="services" className="bg-background">
      <div className="flex flex-col items-center justify-center bg-background pt-10">
        <motion.p
        initial={{opacity:0 , y:20}}
        whileInView={{opacity:1 , y:0}}
        viewport={{once:true}}
        transition={{duration:0.4 , delay:0.3}}
          className="flex tracking-[0.3em] font-medium uppercase lg:text-sm text-xs text-accent pb-6"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {t("services.tagline")}
        </motion.p>

        <motion.h1
         initial={{opacity:0 , y:20}}
        whileInView={{opacity:1 , y:0}}
        viewport={{once:true}}
        transition={{duration:0.5 , delay:0.5}}
          className="flex flex-wrap justify-center text-center text-foreground lg:text-5xl text-2xl font-normal"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, sans-serif" }}
        >
          <span>{t("services.headline")}</span>

          <span
            className="px-2 italic text-accent"
            style={{ fontFamily: "'Georgia', sans-serif" }}
          >
            {t("services.headlineAccent")}
          </span>

          <span>{t("services.headlineEnd")}</span>
        </motion.h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card ,index) => (
          <motion.div
          initial={{opacity:0, y:45}}
          whileInView={{opacity:1 , y:0}}
        viewport={{once:true}}
          whileHover={{y:-10 , transition:{duration:0.4 }}}
          transition={{duration:0.5 , delay:index * 0.2, ease:"easeOut"}}
            key={card.id}
            className="bg-muted border border-accent p-8 flex flex-col gap-4 rounded-lg"
          >
            <div className="w-fit p-3 bg-accent text-primary">
              {card.icon}
            </div>

            <h2 className="text-xl text-foreground font-medium">
              {card.title}
            </h2>

            <p className="text-normal text-muted-foreground leading-relaxed">
              {card.description}
            </p>
            <motion.div 
            initial="rest"
            animate="rest"
            whileHover="hover"
            >
            <Button
              variant="link"
              className="p-0 mt-2 flex items-center gap-1 tracking-wider"
            >
              {t("services.button")}
              <motion.div
              variants={{
                rest:{x:0},
                hover:{x:10},               
              }}
              transition={{duration:0.3}}
              >
                <ChevronRight size={16} />
              </motion.div>
              
            </Button>
            </motion.div>
          
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services