import React, { Component } from 'react'
import Counters from './Counterss'

class Counter extends Component {
    state={
        count:this.props.counter.value,
        imageUrl:'https://picsum.photos/100'
    };

    handleIncrement=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        
        return (
            <div>
                {this.props.children}
                <img src={this.state.imageUrl}></img>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={this.handleIncrement}>INCREMENT</button>
                <button className = "btn btn-danger btn-sm m-2" onClick = {() => this.props.onDelete(this.props.counter.id)}>DELETE</button>
            </div>
        )
    }

    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes += this.state.count===0?"warning":"primary";
        return classes;

    }
    formatCount(){
        const {count} = this.state;
        return count===0 ? "Zero" : count;
    }
}

export default Counter
