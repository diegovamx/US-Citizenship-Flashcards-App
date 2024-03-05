import { useState } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import ReactCardFlip from 'react-card-flip'

const App = () => {

  return (
    <div className="App"> 
      <h1 className='title'> U.S. Citizenship Flaschards 🇺🇸</h1>
      <h2 className='description'>These flashcards are sourced from <a href="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://www.uscis.gov/sites/default/files/document/flash-cards/M-623_red_slides.pdf">uscis.gov</a> for education purposes.</h2>
      <div className='cards-main'>
        <Cards/>
      </div>
      
      <h2 className='credits'>Made with <i class="fa-brands fa-react" id="react-icon"></i> by Diego Valencia</h2>
    </div>
  )
}

export default App