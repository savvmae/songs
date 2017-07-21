import React, { Component } from 'react';

export default class PlayListItem extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { song } = this.props;
        return (
           
                <div className="col-sm-6">
                    <div className="card all-margin border">
                        <div className="card-block">
                            <h4 className="card-title">{song.songTitle} by: {song.songArtist}</h4>
                            <h5 className="card-subtitle mb-2 text-muted">Posted by: {song.userName}</h5>
                            <h5 className="card-title">Notes: {song.songNotes}</h5>
                        </div>
                    </div>
                </div>
        )
    }

}