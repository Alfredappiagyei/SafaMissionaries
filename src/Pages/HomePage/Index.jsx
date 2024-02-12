import React from 'react'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Hero from "../../assets/images/train26.jpeg"
import TransferNews from './TransferNews'
import PremierLeague from './Premier_League_News'
import ClubNews from './Club_News'
 

export default function Index() {
    return (
        <>
            <Nav />

            <section className="bg-white dark:bg-gray-900 mt-28">
                <div className=" mx-auto max-w-screen-xl flex justify-center items-cente">
                    <img src={Hero} className="object-cover md:h-[533px] md:w-[1150px] h-[269.79px] w-full " alt='SAFA MISSIONARIES' />

                </div>


                <div className='mx-auto max-w-screen-xl block justify-center bg-[#141414] sm:w-full md:w-[1150px]'>
                    <h3 className='justify-center text-white md:text-4xl font-bold p-5 md:text-center'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dicta,
                        nisi ullam alias asperiores commodi ipsa impedit error facilis fugiat
                    </h3>

                    <p className='justify-center md:text-2xl px-5 text-gray-400 md:text-center pb-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae dicta,
                        nisi ullam alias asperiores commodi ipsa impedit error facilis fugiat
                    </p>
                </div>
            </section>

            <section className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 bg-white dark:bg-gray-900 flex flex-col md:flex-row">
                <div className="flex-1   p-0 md:p-3">

                    <div class="w-full bg-white  border-0  dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://safa.com/">
                            <img   src={Hero} alt="SAFA MISSIONARIES" />
                        </a>
                        <div class="p-5">
                            <a href="https://safa.com/">
                                <h5 class="mb-2 text-[16px] font-semibold  tracking-tight text-[#141414] dark:text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</h5>
                            </a>        
                        </div>
                    </div>

                </div>
                <div className="flex-1   p-0 md:p-3">
                <div class="w-full bg-white  border-0    dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://safa.com/">
                            <img  src={Hero} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="https://safa.com/">
                                <h5 class="mb-2 text-[16px] font-semibold  tracking-tight text-[#141414] dark:text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</h5>
                            </a>        
                        </div>
                    </div>
                </div>
                <div className="flex-1  p-0 md:p-3">
                <div class="w-full bg-white  border-0   dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://safa.com/">
                            <img   src={Hero} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="https://safa.com/">
                                <h5 class="mb-2 text-[16px] font-semibold  tracking-tight text-[#141414] dark:text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</h5>
                            </a>        
                        </div>
                    </div>
                </div>
                <div className="md:flex-1 p-0 md:p-3">
                <div class="w-full bg-white border-0  dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://safa.com/">
                            <img  src={Hero} alt="SAFA MISSIONARIES" />
                        </a>
                        <div class="p-5">
                            <a href="https://safa.com/">
                                <h5 class="mb-2 text-[16px] font-semibold  tracking-tight text-[#141414] dark:text-white">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</h5>
                            </a>        
                        </div>
                    </div>
                </div>
            </section>


            <section >
                <div  className="mx-auto w-full max-w-screen-xl  bg-white dark:bg-gray-900 flex flex-col  md:flex-row">
                    <h2 className='md:text-2xl font-semibold'>TRANSFER NEWS</h2>
                </div>
                <TransferNews />
            </section>

            <section >
                <div className="mx-auto w-full max-w-screen-xl  bg-white dark:bg-gray-900 flex flex-col  md:flex-row">
                    <h2 className='md:text-2xl font-semibold '>PREMIER LEAGUE</h2>
                </div>
                <PremierLeague />
            </section>

            <section >
                <div className="mx-auto w-full max-w-screen-xl  bg-white dark:bg-gray-900 flex flex-col  md:flex-row">
                    <h2 className='md:text-2xl font-semibold'>SAFA MISSIONARIES NEWS</h2>
                </div>
                <ClubNews />
            </section>




            <Footer />
        </>
    )
}
