import React, { Fragment} from 'react';
import PlaylistItem from '../playlist-item';
import {connect} from 'react-redux';
import './playlist.css';


const Playlist = ({playlist, active}) => {
    return (
        <Fragment>
            {playlist.length ?
                <div className="list-group playlist">
                    {
                        playlist.map((movie, idx) => {
                            const isActive = active === idx;
                            return (
                                <PlaylistItem key={idx}
                                              idx={idx}
                                              movie={movie}
                                              active={isActive}/>
                            );
                        })
                    }
                </div> : <p>Nothing to watch</p>
            }
        </Fragment>
    );
}

const mapStateToProps = ({player: {playlist, video: {id}}}) => {
    return {
        playlist,
        active: id
    }
}

export default connect(mapStateToProps)(Playlist);