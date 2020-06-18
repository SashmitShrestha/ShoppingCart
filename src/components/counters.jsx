import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {
    
    render() { 
        const {onReset,onDelete,onIncrement,counters}= this.props;
        return (  
            <React.Fragment>
                <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counters => <Counter key={counters.id} onIncrement={onIncrement} onDelete={onDelete} counters={counters}/>)}
            </React.Fragment>
        );
    }
}
 
export default Counters;