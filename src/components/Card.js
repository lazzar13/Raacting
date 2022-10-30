import React,{useState, useEffect}from 'react';
import axios from "axios";

const Card =({name,team,id,teamId})=>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://data.nba.net/data/10s/prod/v1/2022/players/'+id+'_profile.json')
        .then(res=>{
            setPosts(res.data.league.standard.stats.careerSummary)
            
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    
    
    
    return(
        
        <div id='kartice' className='tc dib br3 pa3 ma2 grow bw2 shadow-5' style={{backgroundImage:'url("https://wallpaperaccess.com/full/862202.png")'}}>
        <img alt='nista' src={'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/'+id+'.png'}></img>
        <div><h1>{name}</h1>
        <img alt='slika tima' src={'https://cdn.nba.com/logos/nba/'+teamId+'/global/L/logo.svg'} style={{height:'100px',width:'100px'}}></img></div>
        <p>Career stat average</p>
        <p>Points: {posts.ppg}</p>
        <p>Rebounds: {posts.rpg}</p>
        <p>Asists: {posts.apg}</p>
        </div>
    );
} 

export default Card;