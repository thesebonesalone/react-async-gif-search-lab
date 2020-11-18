import React, { Component } from 'react'

export default class GifList extends Component {
    renderGifs() {
        return this.props.data.map(gif => {
            console.log(gif.images.original)
            return (<li key={gif.id}><img type={gif.type} src={gif.images.original.url}/></li>)
        })


    }
    render() {
        return(
            <ul>
                {this.renderGifs()}
            </ul>

        )

    }
}