import { useTranslation } from "react-i18next";
import { Button } from "../components/ui/button";
import img from "../assets/images/pexels-789284270-19074480.webp";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Counter=({ value } : {value:string})=>{
  const ref =useRef(null);
  const isInView = useInView(ref , {once:true});
  const [display , setDisplay]=useState("0");

  const numeric =parseInt(value);
  const suffix = value.replace(String(numeric) ,"");
  const isNumeric=!isNaN(numeric);

  useEffect(()=>{
    if(!isInView || !isNumeric)return ;
    let start =0 ;
    const duration = 1500 ; //ms
    const stepTime = Math.max(20 , Math.floor(duration/numeric));
    const timer = setInterval(() => {
      start += 1;
      setDisplay(String(start) + suffix);
      if (start >= numeric) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  // Non-numeric (VIP, 24/7) → just fade in
  if (!isNumeric) {
    return (
      <motion.span
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {value}
      </motion.span>
    );
  }

  return <span ref={ref}>{display}</span>;
};

const Hero = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "24/7", labelKey: "hero.stats.availability" },
    { value: "16+",  labelKey: "hero.stats.experience" },
    { value: "VIP",  labelKey: "hero.stats.client" },
    { value: "12",   labelKey: "hero.stats.concierges" },
  ];

  return (
    <section className="min-h-screen pt-20 lg:pt-36 pb-16 lg:pb-32 px-3 lg:px-20">
      {/* container */}
      <div className="lg:max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left — texts */}
        <motion.div
        initial={{opacity:0 , x:-15}}
        animate={{opacity:1 ,x:0}}
        transition={{duration:0.7}}
         className="py-5 mx-auto px-8">
          <motion.p
          initial={{opacity:0 ,x:-15}}
          animate={{opacity:1 , x:0}}
          transition={{delay:0.2}}
            className="uppercase text-accent tracking-widest text-xs pb-5 lg:pb-10 font-medium lg:text-sm"
            style={{ fontFamily: '"Montserrat", sans-serif' }}
          >
            {t("hero.tagline")}
          </motion.p>

          <motion.h1
          initial={{opacity:0 ,x:-15}}
          animate={{opacity:1, x:1}}
          transition={{delay:0.4}}
            className="text-5xl lg:text-7xl pb-5 lg:pb-10"
            style={{ fontFamily: '"Cormorant Garamond", sans-serif' }}
          >
            {t("hero.headline")}
            <span
              className="block text-accent italic"
              style={{ fontFamily: '"Cormorant Garamond", sans-serif' }}
            >
              {t("hero.headline_accent")}
            </span>
          </motion.h1>

          <motion.p
          initial={{opacity:0 ,x:-15}}
          animate={{opacity:1 , x:0}}
          transition={{delay:0.6}}            
          className="pb-5 lg:pb-10"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
          initial={{opacity:0 ,x:-15}}
          animate={{opacity:1, x:0}}
          transition={{delay:0.8}}
          >
            <Button
              className="px-3 py-5 mx-5 my-3"
              style={{ fontFamily: "'Georgia', sans-serif" }}
            >
              {t("hero.cta_primary")}
            </Button>

            <Button
              className="bg-secondary text-accent hover:bg-muted px-3 py-5"
              style={{ fontFamily: "'Georgia', sans-serif" }}
            >
              {t("hero.cta_secondary")}
            </Button>
          </motion.div>
        </motion.div>

        {/* Right — image */}
        <motion.div 
        initial={{opacity:0 , x:20}}
        animate={{opacity:1 , x:0}}
        transition={{duration:0.4 ,delay:0.5}}
        className="relative p-3">
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-accent rounded-br-sm z-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent rounded-br-sm z-20 pointer-events-none" />
          <div className="absolute -bottom-3 -right-3 w-full h-full bg-accent-opacity rounded-xl" />
          <img
            src={img}
            alt=""
            className="relative z-10 w-full h-[450px] lg:h-[600px] object-cover rounded-xl"
          />
        </motion.div>

        {/* Stats strip */}
        <div className="lg:col-span-2 border-t border-t-muted border-b border-b-muted pb-20 mb-4 pt-10 mt-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, labelKey } ,index) => (
            <motion.div key={labelKey}
            initial={{opacity:0 , y:20}}
            whileInView={{opacity:1 ,y:0}}
            viewport={{once:true}}
            transition={{duration:0.5 , delay :index * 0.15}}
            >
              <p
                className="text-4xl lg:text-5xl text-accent uppercase"
                style={{ fontFamily: '"Cormorant Garamond", sans-serif' }}
              >
                <Counter value={value} />
                
              </p>
              <p
                className="text-xs uppercase tracking-widest mt-2 text-muted-foreground"
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                {t(labelKey)}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;