import React from 'react';
import FriendsList from './FriendsList';
import axios from 'axios';

class Friends extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            friends: [],
            error: ''
        };
    }

     componentDidMount(){
         console.log('cdm running');

        axios
            .get('http://localhost:5000/friends')
            .then(res => {
                console.log(res);
                this.setState({ friends: res.data });
              })
              .catch(err => {
                console.log(err);
                this.setState({ error: err });
              });
     }

     addFriend = (e, item) => {
         axios
            .post('http://localhost:5000/friends', item)
            .then( res => {
                console.log(res);
                this.setState({
                    friends: res.data
                });
                this.props.history.push()
            })
            .catch( err => {
                console.log(err)
            })
     }


    render() { 
        return ( 
            <div>
                <FriendsList name={this.state.friends} key={this.state.friends.id} addFriend={this.addFriend}/>
            </div>
         );
    }
}
 

export default Friends;
