import './App.css';
import { Component } from 'react';
import {CardList} from './Components/Card-list/Card-list-comp';
import { SearchBox } from './Components/Search-Box/Search-box-comp';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [],
      searchField : ''
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
       .then(response => response.json())
       .then(users => this.setState({monsters : users}));
  }
   
  eventHandle = e => {
    this.setState({searchField : e.target.value});
  }


  render(){
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())); 
    return (
      <div className="App">
        <h1 className='header'>Monsters Hub</h1>
        <SearchBox 
          placeholder='search monsters'
          handler={this.eventHandle}/>
        <CardList monsters = {filterMonsters}/>
      </div>
    );
  }
}

export default App;
