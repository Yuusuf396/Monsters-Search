import React,  { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
 
class  App extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      monsters: [],
      searchField:''
   }
   this.fresh2=this.fresh.bind(this)
  //  this.handleChange = this.handleChange.bind(this); for only normal functions..arrow functions dont need to bind
 }
 componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>res.json())
  .then(users => this.setState({monsters:users}))
 }
 handleChange = (e) => {
  this.setState({searchField:e.target.value})
 }
 
  
  render(){
    const {monsters,searchField}=this.state;
    const filteredMOnsters =monsters.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase( ))
      )
      // const onclick=e=> this.setState({searchField :e.target.value})
    


    return ( 
      <div className="App">
        {/* <input 
        type='search' 
        placeholder='SEARCH MONSTERS'
        onChange={e=> this.setState({searchField :e.target.value})}
      /> */}
      {/* <button onClick={this.fresh()}>1</button>
      <button onClick={this.fresh2}>2 </button> */}

      <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMOnsters}/> 
      </div>
    );
  }
}

export default App;
