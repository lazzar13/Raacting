import React from 'react';

const Card =({name,email,id})=>{
    return(
        
        <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>

        <img alt='nista' src={'https://robohash.org/'+id+'?100x100'}></img>
        <div><h1>{name}</h1>
        <p>{email}</p></div>
        <p></p>
        </div>
    );
} 

export default Card;