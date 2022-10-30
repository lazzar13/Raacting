import React from 'react';
import Card from './Card'


const CardList=({players})=>{
    return(
        <div className='tc ma0-m'> 
            {
            players.map((user,i)=>{
            return(<Card 
            key={i} 
            id={players[i].id}
            name={players[i].name}
            team={players[i].team}
            teamId={players[i].teamId}/>)
                }) }
        </div>
    );
}

export default CardList;