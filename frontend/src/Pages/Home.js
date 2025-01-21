import React from 'react'

import Banner from '../Components/Banner/Banner'
import FeaturedCollections from '../Components/FeaturedCollections/FeaturedCollections'


import Features from '../Components/Features/Features'
import SubmitForm from '../Components/SubmitForm/SubmitForm'

function Home() {
  return (
    <>
   
   <Banner/>
   
    <FeaturedCollections title1="LATEST" title2="COLLECTIONS" />
    <FeaturedCollections title1="BEST" title2="SELLER" />
    
    <Features/>
   <SubmitForm/>
   
    
    
    </>

  )
}

export default Home