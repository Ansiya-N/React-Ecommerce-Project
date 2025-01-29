import React from 'react'

import Banner from '../Components/Banner/Banner'
import FeaturedCollections from '../Components/FeaturedCollections/FeaturedCollections'


import Features from '../Components/Features/Features'
import SubmitForm from '../Components/SubmitForm/SubmitForm'

function Home() {
  return (
    <>
   
   <Banner/>
   
    <FeaturedCollections title1="LATEST" title2="COLLECTIONS" productCount={10} showIntro={true} />
    <FeaturedCollections title1="BEST" title2="SELLER" productCount={5} showIntro={true} />
    
    <Features/>
   <SubmitForm/>
   
    
    
    </>

  )
}

export default Home