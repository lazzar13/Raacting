import React, {Component} from 'react';
import CardList from '../components/CardList';
import {players} from '../players';
import 'tachyons';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
class App extends Component{
    constructor(){
        super()
        this.state={
            players:players,
            searchfield:''
        }
    };
    /*componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(users=>{this.setState({players:users})})
    }*/    
    
    onSearchChange =(event)=>{
        this.setState({searchfield:event.target.value})
    }
    
    render(){
        const {players,searchfield}=this.state;
        const filterPlayers=players.filter(player=>{
            return player.name.toLowerCase().includes(searchfield.toLowerCase())
        })
    return(
        <div className='tc br3 pa3 ma2'>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
        <ErrorBoundry>
        <CardList players={filterPlayers}/>
        </ErrorBoundry>
        </Scroll>
        </div>
    )}
}
export default App;