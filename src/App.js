import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from "./components/counters";
import Counter from './components/counter';

class App extends Component {
    state = { 
        counters:[
            {id:1, value:0},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:4},
            {id:5, value:0},

        ]
     };

     constructor(){
         super();
         console.log("App constructor");
     }
     componentDidMount(){
         //ajax call
        console.log("App-Mounted");
     }
     handleIncrement=(counter)=>{
         const counters = [...this.state.counters];
         const index = counters.indexOf(counter);
         counters[index] = {...counter};
         counters[index].value++;
         this.setState({counters});
     }
     handleDelete=(counterId)=>{
         const counters = this.state.counters.filter(c=>c.id !==counterId);
         this.setState({counters});
     };
     handleReset=()=>{
        const counters =this.state.counters.map(c=> {c.value=0; return c;});
        this.setState({counters}); 
     }
    render() { 
        return (
            <React.Fragment>
            <NavBar totalCounter={this.state.counters.filter(c=> c.value>0).length}/>
            <main className="container">
            
            <Counters counters={this.state.counters} onReset={this.handleReset} onDelete={this.handleDelete} onIncrement={this.handleIncrement}/>
            </main>
            </React.Fragment>
         );
    }
}
 
export default App;