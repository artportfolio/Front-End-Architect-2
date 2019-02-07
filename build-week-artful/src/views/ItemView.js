import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import axios from 'axios';

import { getPhotos, getUsers} from '../store/actions';

import Item from '../components/Items/Item';

class ItemView extends React.Component {

    state = {
        user: null,
        photo: null
    }

    componentDidMount(){
        if(this.props.users.length < 1){
            this.props.getUsers();
            this.props.getPhotos();
        }
        axios
            .get(`https://backend-art.herokuapp.com/api/posts/${this.props.match.params.id}`)
            .then(res => this.setState({
                photo: res.data
            })).then(() => this.setState({
                user: this.props.users.find(user => user.id === this.state.photo.userId)
            }))
            .catch(err => console.log(err));
    }

    render(){
        return (
            <div className="ItemView">                
                 {this.state.photo && this.state.user && <Item 
                        key={this.state.photo.id + this.state.photo.postName} photo={this.state.photo} 
                        user={this.state.user}
                        />}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    toggled: state.toggled,
    currentUser: state.currentUser,
    isLoggedIn: state.isLoggedIn,
    photos: state.photos,
    users: state.users
})

export default withRouter(connect(mapStateToProps, { getPhotos, getUsers })(ItemView));