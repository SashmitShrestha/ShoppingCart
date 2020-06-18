import React, { Component } from 'react';

class Counter extends Component {   
    render() { 
        return(
            <div>
            <h4>CounterNo:{this.props.counters.id}</h4>
            <span className={this.formatColor()}>{this.formatCount()}</span>
            <button onClick={()=> this.props.onIncrement(this.props.counters)}className="btn btn-success btn-sm m-2">+</button>
            <button onClick={()=>this.props.onDelete(this.props.counters.id)}className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
        }

    formatColor() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counters.value === 0) ? "warning" : "primary";
        return classes;
    }

        formatCount(){
            const {value: count}= this.props.counters;
            return count===0 ? 'Zero':count;
        }
    }
export default Counter;