import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/ProfilPic.jpg"
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const about = () => {
  return (
    <>
        <Head>
            <title>
                Amandine Gorsse | CV Page
            </title>
            <meta name='description' content='Mon CV en détails' />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Mon CV" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Quelques informations sur moi</h2>
                        <p className='font-medium'>
                            Bonjour, je me présente en quelques lignes. Je m'appelle Amandine Gorsse je suis née le 2 avril 2000, j'ai donc 23 ans. <br /> Je suis actuellement en formation de prothésiste ongulaire. 
                           
                        </p>
                        <p className='my-4 font-medium'>
                        Passionnée par la mode depuis toujours j'ai decidé de faire des études dans la domaine de la vente car j'aime le contact avec la clientèle et acquerir de nouvelles competénces.
                         <br />    Aujourd'hui je me dirige dans le domaine de l'onglerie pour être tendance jusqu'au bout des ongles.  
                        </p>
                        <p className='font-medium'>
                        N'hésitez pas a me contacter via mes réseaux sociaux ou au 0670540736.
                        </p>
                    </div>

                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                    <div className='absolute top-1 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <Image alt='Karl Muller' src={profilePic} className='w-full h-auto rounded-2xl' 
                        priority
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                        />
                    </div>
                </div>

                <Skills />
                
                <Education />
                <Experience />
                
            </Layout>
        </main>
    </>
  )
}

export default about