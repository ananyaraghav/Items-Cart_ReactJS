import React, { Component } from 'react'
import Counter from './Counter'

class Counterss extends Component {
    state={
        counters:[
            {id:1, value: 0},
            {id:2, value: 0},
            {id:3, value: 0},
            {id:4, value: 0}
        ],
        
    }


    
    handleDelete = counterId => {
        console.log("Event called", counterId)
        const counters = this.state.counters.filter(c=>c.id!==counterId)
        this.setState({counters:counters})
    }

    render() {
        return (
            <div>
                <span className="m-2">ITEMS IN CART</span>
                {this.state.counters.map(counter=> <Counter 
                key={counter.id} 
                onDelete = {this.handleDelete} 
                counter={counter}>Item {counter.id}</Counter>)}
            </div>
        )
    }
}

export default Counterss
{/*Instead of these we used counter = {counter}
value={counter.value} 
id={counter.id}*/}
