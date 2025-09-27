import React, { useState } from 'react'
import Hero from './assets/Components/Hero'
import Generator from './assets/Components/Generator'
import Workout from './assets/Components/Workout'
import { generateWorkout } from './assets/utils/function'

const App = () => {
  const [workout , setWorkout] = useState(null)
      const [poison , setPoison] = useState('individual')
    const [muscles , setMuscles] = useState([])
    const [goals , setGoals] = useState('strength_power')
        function updateWorkout(){
          if(muscles.length < 1){
            return
          }
      let newWorkout = generateWorkout({poison , muscles , goals})
      console.log(newWorkout)
      setWorkout(newWorkout)
      window.location.href = '#workout'
    }
  return (
<main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
<Hero />
<Generator 
poison = {poison}
setPoison = {setPoison}
muscles = {muscles}
setMuscles = {setMuscles}
goals = {goals}
setGoals = {setGoals}
updateWorkout = {updateWorkout}

/>
{workout && (<Workout workout = {workout}/>)}
</main>
  )
}

export default App