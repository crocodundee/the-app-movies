import React from 'react';
import {Portal} from '../hoc';
import {connect} from 'react-redux';
import Youtube from 'react-youtube';
import {movieWatchingStopped} from "../../actions";
import './modal.css';


const Modal = ({isOpen, movie, modalClose}) => {
    const { trailer } = movie;
    const opts = { playerVars: { autoplay: 1, origin:'http://localhost:3000'}}
    return(
         <Portal>
            <div className={isOpen ? 'my-modal open':'my-modal hide'}>
                <div className="modal-overlay"
                     onClick={()=>modalClose()}>
                    <div className="modal-window">
                        <div className="modal-body">
                            <Youtube videoId={trailer}
                                     opts={opts}
                                     onReady={(event) => event.target.pauseVideo()}/>
                        </div>
                    </div>
                </div>
            </div>
        </Portal>
    )
}

const mapStateToProps = ({playlist: {watchMovie, isMovieWatching}}) => {
    return{
        movie: watchMovie,
        isOpen: isMovieWatching
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        modalClose:() => {
            dispatch(movieWatchingStopped())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);