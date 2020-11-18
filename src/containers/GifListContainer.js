import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

export default class GifListContainer extends Component {
    constructor(){
        super()
        this.state = {
            gifs: []
        }
    }
    fetchGifs = (e) => {
        e.preventDefault()
        let searchQuery = e.target.children[0].value
        let URL = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`
        fetch(URL)
        .then(resp => resp.json())
        .then(json => {
            this.setState({
                gifs: json.data
            })
            console.log(this.state.gifs)
        })
        
    }

    render() {
        return(
            <div>
                <div>
                    <GifSearch submitSearch={this.fetchGifs}/>
                </div>
                <div>
                    <GifList data={this.state.gifs}/>
                </div>


            </div>
        )
    }


}