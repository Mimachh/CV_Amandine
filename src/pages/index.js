import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/woman2.png'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import atWork from "../../public/images/svgs/AtWork2.svg"
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Amandine Gorsse | Accueil</title>
        <meta name="description" content="Bienvenue sur mon CV en ligne." />

      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light 2xl'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='Karl' className='w-full h-auto lg:hidden md:inline-block md:w-full' 
              priority
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center' >
              <AnimatedText text="Je suis Amandine Gorsse !"
              className='!text-6xl text-center xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                Bienvenue sur mon CV en ligne.
              </p>
              <div className='flex items-center selft-start mt-2 lg:self-center'>
                <Link href="/about"
                className='flex items-center bg-dark text-light 
                p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base'
                
                >
                  Voir mon CV
                  <LinkArrow className={"w-5 ml-1"} />
                </Link>
                <Link  href="/Amandine CV.pdf" target={"_blank"} download={true}
                className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light'
                >Télécharger</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-48 md:hidden'>
          <Image src={atWork} alt='Amandine Gorsse' className='w-full h-auto' />
        </div>
      </main>
      
    </>
  )
}
