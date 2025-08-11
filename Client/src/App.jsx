import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import HeaderPage from './Header/HeaderPage'
import Section_Benefits from './Main/Section_Benefits'
import SliderComponent from './Main/SliderComponent'

function App() {
  return (
    <>
      <div className='section_home-header'>
        <HeaderPage/>
        <SliderComponent/>
        <Section_Benefits/>
      </div>
    </>
  )
}

export default App