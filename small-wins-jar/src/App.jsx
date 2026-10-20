import {useState,useEffect} from 'react'
import './App.css'

function App(){
  const[wins,setWins]=useState(()=>{
    const savedWins = localStorage.getItem('small-wins')
    if(!savedWins) return[]

    return JSON.parse(savedWins).map((item, index)=>typeof item==="string"?{id:Date.now()+index,text:item}:item)
  })


  const[win,setWin]=useState('')

  useEffect(()=>{
    localStorage.setItem('small-wins',JSON.stringify(wins))
  },[wins])

  function addWin(event){
    event.preventDefault()
    if (win.trim()==='') return

    setWins(currentWins=>[
      ...currentWins,
      {
        id:Date.now(),
        text:win.trim()
      }
    ])
    setWin('')
  }
  return(
    <main className = "app">
      <p className = "eyebrow">Every bit of progress counts</p>
      <h1>Small Wins Jar</h1>
      <p className = "subtitle">Every little win needs to be celebrated</p>

      <section className = "jar-card">
        <div className = "jar" aria-label={`${wins.length} wins collected`}>
          {wins.map((item,index)=>(
            <span className="star" key="{item.id}" style={{ '--index': index }} title={item.text}>⭐</span>
          ))}
        </div>

        <p className="star-count">{wins.length}{wins.length===1 ?'little win':'little wins'} collected</p>
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