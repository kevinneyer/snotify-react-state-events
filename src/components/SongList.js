import React from 'react';
import Filter from './Filter';
import SongItem from './SongItem'

const SongList = props => {
    console.log(props)
    let songArray = props.SongList

    
    const makeSongs = () => songArray.map(song => {
       return <SongItem title={song.title} artist={song.artist} id={song.id}/>
    })

    return (
        <div className="half songlist">
            <h2>Song List</h2>
            <Filter />
            <table>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Artists</td>
                            <td>Play?</td>
                            <td>Queue?</td>
                            <td>Favorite</td>
                            <td>Likes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {makeSongs()}
                    </tbody>
            </table>
        </div>
    )
}

export default SongList;