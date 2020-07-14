import React from 'react';
import SongList from './SongList';
import Queue from './Queue';


const MainContainer = props => {
// class MainContainer extends React.Component {
    
    // constructor(props){
    //     console.log(props)
    //     super();

    //     this.state = {
    //         SongList: props.SongList
    //     }
    // }


    // render(){
    // console.log(this.state.SongList)
    console.log(props)
    return (
        <div className="simple-flex-row top">
            <SongList SongList={props.SongList}/> {/** TODO: What props do I need? */}
            <Queue /> {/** TODO: What props do I need? */}
        </div>
    )
// }
}

export default MainContainer;