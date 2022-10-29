import React from 'react';
import Card from './Card'

const CardList=({robots})=>{
    return(
        <div className='tc ma0-m'> 
            {
            robots.map((user,i)=>{
            return(<Card 
            key={i} 
            id={robots[i].id}
            name={robots[i].name}
            team={robots[i].team} />)
                }) }
        </div>
    );
}

export default CardList;