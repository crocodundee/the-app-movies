import React, {Component} from 'react';
import {Portal} from '../hoc';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './modal-info.css';


class ModalInfo extends Component {
    state = {
        isOpen: false,
        movieAdded: {}
    }

    componentDidUpdate(prevProps){
        if(this.props.playlist.length > prevProps.playlist.length){
            const movieAdded = this.props.playlist.slice().pop()
            this.setState({
                isOpen: true,
                movieAdded
            });
            setTimeout(() => {
                this.setState({
                    isOpen: false
                })
            }, 4000);
        }
    }

    render() {
        const {isOpen, movieAdded} = this.state;
        const modalView = isOpen ? 'modal-info open': 'modal-info hide';
        return (
            <Portal>
                <div className={modalView}>
                    <p><span>{movieAdded.title}</span> added to Playlist</p>
                    <div className="modal-button">
                        <Link to="/playlist">
                            Watch movie
                        </Link>
                    </div>
                </div>
            </Portal>
        );
    }
}

const mapStateToProps = ({player: {playlist}}) => {
    return {playlist}
}

export default connect(mapStateToProps)(ModalInfo);