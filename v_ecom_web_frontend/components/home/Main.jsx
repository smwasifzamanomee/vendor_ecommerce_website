import React from 'react'
import Hero from './Hero'
import Products from './Products'
import Categories from './Categories'
import PopularProjects from './PopularProjects'
import PopularSeller from './PopularSeller'
import ReviewAndRatings from './ReviewAndRatings'

const Main = () => {
  return (
    <div>
        <Hero/>
        <Products/>
        <Categories/>
        <PopularProjects/>
        <PopularSeller/>
        <ReviewAndRatings/>
    </div>
  )
}

export default Main