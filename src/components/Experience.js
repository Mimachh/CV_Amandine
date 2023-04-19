import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Lilcon from './Lilcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
        <Lilcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5, type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink}
            target='_blank'
            className='text-primary dark:text-primaryDark capitalize'
            >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}


const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experiences professionnelles</h2>

        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>


        <motion.div 
        style={{scaleY: scrollYProgress}}
        className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
        md:w-[2px] md:left-[30px] xs:left-[20px]'  />


            <ul className='w-full flex flex-col justify-between items-start xs:ml-2'>
                <Details 
                    position="Stagiaire" company="Tally Weijl"
                    companyLink=""
                    time="2015" address="Tours | L'Heure Tranquille"
                    work="Enseigne de prêt à porter. Je rangeais les affaires, accueil et conseil client, je m'occupais des cabines et de la mise en rayon."            
                />
                <Details 
                    position="Stagiaire" company="La maison du Sablé"
                    companyLink=""
                    time="2016" address="Sablé sur Sarthe"
                    work="Accueil et Service client. Rangement. Mise en rayon."            
                />
                <Details 
                    position="Stagiaire" company="Antonelle"
                    companyLink=""
                    time="2017" address="Angers"
                    work="Magasin de prêt à porter. Je m'occupais du rangement, de l'accueil client. Mise en rayon."
                />
                <Details 
                    position="Apprentissage | Alternance" company="Carrefour Express"
                    companyLink=""
                    time="2018" address="Sablé sur Sarthe"
                    work="Mise en rayon, rangement, encaissement, nettoyage."
                />
                <Details 
                    position="Intérimaire" company="Marie"
                    companyLink=""
                    time="2020/2021" address="Sablé sur Sarthe"
                    work="Mise en barquette, délotage."
                />

                <Details 
                    position="Intérimaire" company="LDC"
                    companyLink=""
                    time="2021/2022" address="Sablé sur Sarthe"
                    work="Usine de poulet. Mise en barquette, machine à filmer, mise en carton."
                />
                <Details 
                    position="CDI" company="Claire's"
                    companyLink=""
                    time="2022/2023" address="Centre Jacobins | Le Mans"
                    work="Accueil et conseil client, caisse, mise en rayon, ouverture/fermeture magasin, merchandising."
                />
            </ul>
        </div>

    </div>
  )
}

export default Experience