import React, { Component } from 'react'

export default class GifList extends Component {
    renderGifs() {
        if (this.props.data){ 
        return this.props.data.map(gif => {
            return (<li key={gif.id}><img type={gif.type} src={gif.images.original.url} alt="Nothing here but us chickens"/></li>)
        })} else {
            return (<div>Nobody here but us chickens</div>)
        }


    }
    render() {
        return(
            <ul>
                {this.renderGifs()}
            </ul>

        )

    }
}