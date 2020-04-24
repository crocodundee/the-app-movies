import React, {Component} from 'react';
import {connect} from 'react-redux';
import {moviePlay, moviePause, movieRemovedFromPlaylist} from "../../actions";
import './playlist-item.css';


class PlaylistItem extends Component{
    constructor(props){
        super(props)
        const {active} = this.props;
        this.state = {
            play: active,
            active
        }
    }

    componentDidMount() {
        const {idx, active, moviePlay} = this.props;
        if(active){
            moviePlay(idx)
        }
    }

    componentDidUpdate(prevProps){
        const {active, play} = this.props;
        if(active !== prevProps.active){
            this.setState({
                play: active,
                active
            })
            if(active) {this.scrollUp()}
        }

        if(play !== prevProps.play){
            if(this.state.active) {
                this.setState({play})
                this.playMovie(play)
            }
        }
    }

    scrollUp = () => {
        const activeItem = document.body.getElementsByClassName('list-group-item').item(this.props.idx);
        activeItem.scrollIntoView({behavior: 'smooth'});
    }

    setPlay = () => {
        const play = !this.state.play;
        this.setState({play})
        this.playMovie(play)
    }

    deleteMovie = () => {
        const {idx , movieDelete} = this.props;
        movieDelete(idx)
    }

    playMovie = (play) => {
        const {idx, moviePlay, moviePause} = this.props;
        if(play){moviePlay(idx)}
        else{moviePause()}
    }

    render() {
        const {idx, movie: {title, runtime}} = this.props;
        const {play, active} = this.state;
        return (
            <div className={`list-group-item ${active ? 'scroll-up': ''}`}>
                <div className={`item-number ${active ? 'play' : ''}`}>{idx + 1}.</div>
                <div className="playlist-item">
                    <div className="item-title">
                        <p className="movie-title">{title}</p>
                        <p className="text-small text-muted movie-runtime">({runtime})</p>
                    </div>
                    <div className={`item-config ${active ? 'play' : ''}`}>
                        <i className={`fa fa-${play ? 'pause' : 'play'}-circle item-play`}
                           onClick={() => this.setPlay()}></i>
                        <i className="fa fa-times-circle item-delete"
                           onClick={() => this.deleteMovie()}></i>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({player: {video : { play}}}) => {
    return { play }
}

const mapDispatchToProps = (dispatch) => {
    return {
        moviePlay: (id) => dispatch(moviePlay(id)),
        moviePause: () => dispatch(moviePause()),
        movieDelete:(id) => dispatch(movieRemovedFromPlaylist(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistItem);