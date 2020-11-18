import React, { Component } from 'react'

export default class GifSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.updateValue = this.updateValue.bind(this)
    }
    updateValue(e){
        console.log(e.target.value)
        this.setState({
            value: e.target.value
        })

    }
    
    render() {
        return (
            <div>Search Goes Here
                <form onSubmit={this.props.submitSearch}>
                    <input type="text" placeholder="Search fo gifs!" onChange={this.updateValue} value={this.state.value}/>
                    <input type="submit"/>
                </form>

            </div>
        )
    }

}