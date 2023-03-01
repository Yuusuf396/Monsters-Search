import React from 'react'
// import Caard from '../card'
import { Card } from '../card/card.component'
import './card-list.style.css'
export const  CardList=(props)=> {
    // console.log(props)
  return (
    <div className='card-list'>{ props.monsters.map(monster => 
        // <h1 key={monster.id}>{monster.name}</h1>
        <Card key={monster.id} monster={monster}/>
        )}
        {/* <Caard/> */} 
        </div>
  )
}

 