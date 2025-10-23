import { useState } from 'react'
import PromptCompanionCard from './components/PromptCompanionCard'
import CreateSchedule from './components/CreateSchedule'
import SocialMedia from './components/SocialMedia'
import MultipleAccounts from './components/MultipleAccounts'
import MaintainPosting from './components/MaintainPosting'
import { Fade, Slide } from "react-awesome-reveal";
import WriteWithAi from './components/WriteWithAi'
import Growth from './components/Growth'
import Follwers from './components/Follwers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FeaturesSection from './components/FeaturesSection'
import PricingTable from './components/PricingTable'
import Testimonials from './components/Testimonials'
import SimpleFAQs from './components/SimpleFAQs'
import './App.css'

function App() {

  return (
    <>

      <div className='custombg'>


        <Navbar></Navbar>
        <div className="flex items-center justify-center w-full  p-5  mt-25">  {/* h-full min-h-screen */}
          <div className="w-full max-w-7xl flex items-center justify-center">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-7 gap-7  rounded-2xl  w-full "> {/* lg:h-[80vh]*/}

              {/* Salmon */}
              <div
                className="bg-pink-200 rounded-2xl shadow-lg flex items-center justify-center row-span-4 col-span-full md:col-span-1 bg-linear-to-br from-yellow-200 via-amber-500 to-orange-600 p-12 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50 "
              >
                <Slide direction="left" cascade >
                  <CreateSchedule></CreateSchedule>
                </Slide>

              </div>

              {/* Broccoli */}
              <div
                className="rounded-2xl shadow-lg flex items-center justify-center  row-span-3 col-span-full md:col-span-1 lg:col-span-2 bg-linear-to-br from-pink-600 via-purple-500 to-indigo-600 p-4 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50"
              >
                <Slide direction="up" cascade >
                  <PromptCompanionCard></PromptCompanionCard>
                </Slide>
              </div>

              {/* Tamago */}
              <div
                className="bg-yellow-100 rounded-2xl shadow-lg pt-7 pb-7 flex items-center justify-center  row-span-5 col-span-full md:col-span-1 bg-linear-to-br from-blue-300 via-purple-200 to-indigo-100  transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50"
              >
                <Slide direction="right" cascade >
                  <SocialMedia></SocialMedia>
                </Slide>
              </div>

              {/* Pork */}
              <div
                className="bg-tan-200 rounded-2xl shadow-lg flex items-center justify-center  row-span-2  col-span-full md:col-span-1 p-8 bg-linear-to-br from-blue-200 via-pink-100 to-orange-100 transition-all duration-500 hover:scale-105 hover:shadow-yellow-500/50"
              >
                <Fade>
                  <MultipleAccounts></MultipleAccounts>
                </Fade>
              </div>

              {/* Edamame */}
              <div
                className="bg-lightgreen-200 rounded-2xl shadow-lg flex items-center justify-center pt-5 row-span-2 col-span-full md:col-span-1 bg-linear-to-br from-yellow-200 via-amber-200 to-orange-100 transition-all duration-500 hover:scale-105 hover:shadow-yellow-500/50"
              >
                <Fade>
                  <MaintainPosting></MaintainPosting>
                </Fade>
              </div>

              {/* Tomato */}
              <div
                className="bg-lightcoral rounded-2xl shadow-lg flex items-center justify-center row-span-3 col-span-full md:col-span-1  bg-linear-to-br from-indigo-500 via-purple-300 to-pink-500  transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50"
              >
                <Fade>
                  <WriteWithAi></WriteWithAi>
                </Fade>
              </div>

              {/* Tofu */}
              <div
                className="bg-lightgray rounded-2xl shadow-lg flex items-center justify-center p-4  row-span-2  col-span-full md:col-span-1 md:row-span-3 lg:row-span-2 bg-linear-to-br from-blue-300 via-purple-200 to-indigo-100  transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50"
              >
                <Fade>
                  <Growth></Growth>
                </Fade>
              </div>

              {/* Tempura */}
              <div
                className="bg-cornsilk rounded-2xl shadow-lg flex items-center justify-center  row-span-2  col-span-full md:col-span-2 bg-linear-to-br from-pink-600 via-purple-500 to-indigo-600 p-2 transition-all duration-500 hover:scale-105 hover:shadow-purple-500/50"
              >
                <Fade>
                  <Follwers></Follwers>
                </Fade>

              </div>

            </div>

          </div>
        </div>

      </div>

      <Fade>
        <FeaturesSection></FeaturesSection>
      </Fade>

      <Fade>
        <PricingTable></PricingTable>
      </Fade>

      <Fade>
        <Testimonials></Testimonials>
      </Fade>


      <SimpleFAQs></SimpleFAQs>

      <Footer></Footer>

    </>
  )
}

export default App
