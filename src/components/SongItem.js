import React from 'react';

class SongItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0,
            favorite: false
        }
    }
    
    

    handleClick = () => {
        this.setState(previousState => {
           return{
            likes: previousState.likes + 1
           } 
        })
    }

    heartFill = (event) => {
        let newEvent = event.target.id
        this.setState(previousState => {
            return {
                favorite: !previousState.favorite
            }
        })
        console.log(newEvent)
        fetch(`http://localhost:6001/songs/${newEvent}`, {
            Method: 'PATCH',
            HEADERS: {
                'Content-type':'application/json',
                'Accept':'application/json'
            },
            Body: JSON.stringify({favorite: !this.state.favorite})
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
    return (
        <tr>
            <td>{this.props.title}</td>
            <td>{this.props.artist}</td>
            <td><button onClick={null /* Put your click handler here */}>Play Now</button></td>
            <td><button onClick={null /* Put your click handler here */}>Add to Queue</button></td>
            <td id={this.props.id} onClick={this.heartFill}>{this.state.favorite ? "💚" : "♡"}</td>
            <td onClick={this.handleClick}>Likes: {this.state.likes}</td>
        </tr>
    )
}
}

export default SongItem;