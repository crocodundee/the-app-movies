import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import {connect} from 'react-redux';
import Playlist from '../playlist';
import {moviePlay, moviePause, movieEnd} from "../../actions";
import './player.css';


class Player extends Component{

    render(){
        const {id, videoUrl, play, moviePlay, moviePause, movieEnd} = this.props;
        return(
            <div className="row no-gutters">
                <div className='col-lg-4 col-md-12 col-sm-12 order-lg-1 order-md-2 order-sm-2 order-2' style={{paddingRight: 0}}>
                    <Playlist/>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 order-lg-2 order-md-1 order-sm-1 order-1" style={{paddingLeft: 0}}>
                    <div className="player">
                        <ReactPlayer url={videoUrl}
                                     width='100%'
                                     height='100%'
                                     onPlay={() => {moviePlay(id)}}
                                     onPause={() => {moviePause()}}
                                     onEnded={() => { movieEnd()}}
                                     playing={play}
                                     controls/>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({player:{playlist, video: {id, play}}}) => {
    const videoUrl = playlist.length === 0 ? '' : playlist[id].trailer;
    return { videoUrl, id, play }
}

const mapDispatchToProps =  {
    moviePlay, moviePause, movieEnd
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);