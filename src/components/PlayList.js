import React, { Component } from 'react';

import PlayListItem from './PlayListItem';

export default class PlayList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            songs: []
        }
    }

    componentDidMount() {
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ songs: data });
        })
    }
    fetchData = (event) => {
        event.preventDefault();
        fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
            return results.json();
        }).then(data => {
            this.setState({ songs: data });
        })
    }

    render() {
        return (
            <div className="card some-padding opacity bottom-margin border">
                <div className="text-center">
                    <button onClick={this.fetchData} type="submit" className="btn btn-primary submit border">Update</button>
                </div>
                <div className="row">
                    {this.state.songs && this.state.songs.map(song => {
                        return <PlayListItem song={song} key={song._id} />
                    })}
                </div>

            </div>
        )
    }

}