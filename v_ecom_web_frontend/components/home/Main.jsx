import React from 'react'
import Hero from './Hero'
import Products from './Products'
import Categories from './Categories'
import PopularProjects from './PopularProjects'
import PopularSeller from './PopularSeller'

const Main = () => {
  return (
    <div>
        <Hero/>
        <Products/>
        <Categories/>
        <PopularProjects/>
        <PopularSeller/>
    </div>
  )
}

export default Main