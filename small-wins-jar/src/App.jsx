import {useState} from 'react'
import './App.css'

function App(){
  const[stars, setStars]=useState(0)
  const[win,setWin]=useState('')

  function addWin(event){
    event.preventDefault()
    if (win.trim()==='') return

    setStars(currentStars=>currentStars+1)
    setWin('')
  }
  return(
    <main className = "app">
      <p className = "eyebrow">Every bit of progress counts</p>
      <h1>Small Wins Jar</h1>
      <p className = "subtitle">Every little win needs to be celebrated</p>

      <section className = "jar-card">
        <div className = "jar" aria-label={`${stars} wins collected`}>
          {Array.from({length:stars},(_,index)=>(
            <span className= "star" key = {index} style = {{'--index':index}}>⭐</span>
          ))}
        </div>

        <p className="star-count">{stars}{stars===1 ?'little win':'little wins'} collected</p>
      </section>

      <form onSubmit = {addWin} className = "win-form">

        <label htmlFor = "win">What did you accomplish?</label>

        <input id = "win" type = "text" value = {win} onChange = {event=>setWin(event.target.value)} placeholder = "I finished my home-work..." maxLength = {350}/>

        <button type="submit">Add your small win⭐</button>
      </form>

      <p className = "footer-note">Way to go!</p>
    </main>
  )
}

export default App