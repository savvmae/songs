import React, { Component } from 'react';

export default class PlayListForm extends Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addSong = this.addSong.bind(this);

        this.state = {
            userName: '',
            songArtist: '',
            songTitle: '',
            songNotes: ''
        }
    }

    handleInputChange(key) {
        return function (event) {
            var state = {};
            state[key] = event.target.value;
            this.setState(state);
        }.bind(this);
    }

    addSong = (event) => {
        event.preventDefault();
        let listItem = JSON.stringify(this.state);

        fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
            method: "POST",
            body: listItem,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        ).then(response => {
            console.log(response, "yay");

        }).catch(err => {
            console.log(err, "boo!");
        });
        this.setState({ userName: '', songNotes: '', songArtist: '', songTitle: '' });
    }

    render() {
        return (
            <form className="card top-margin opacity border" onSubmit={this.addSong}>
                <div className="card-block text-center margin-auto">
                    <h1> Add a New Song! </h1>
                    <div className="card some-padding border">
                        <div className="form-inline top-margin border">
                            <div className="input-group-addon some-padding">User Name: </div>
                            <input onChange={this.handleInputChange('userName')} className="input" type="text" placeholder="Name or Username" value={this.state.userName} />
                            <div className="input-group-addon some-padding" >Artist/Band: </div>
                            <input onChange={this.handleInputChange('songArtist')} className="input" type="text" placeholder="Artist or Band Name" value={this.state.songArtist} />
                        </div>
                        <div className="form-inline bottom-margin border">
                            <div className="input-group-addon some-padding">Song Title: </div>
                            <input onChange={this.handleInputChange('songTitle')} className="input" type="text" placeholder="Song Title" value={this.state.songTitle} />
                            <div className="input-group-addon some-padding">Song Notes: </div>
                            <input onChange={this.handleInputChange('songNotes')} className="input" type="text" placeholder="Notes" value={this.state.songNotes} />
                        </div>
                        <button type="submit" className="btn btn-primary submit bottom-margin border">Submit</button>
                    </div>
                </div>
            </form>
        )
    }
}