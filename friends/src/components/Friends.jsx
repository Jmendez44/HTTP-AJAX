import React from 'react';
import axios from 'axios';

class Friends extends React.Component {
    constructor(){
        super();
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


    render() { 
        return ( 
            <div>
                Test
            </div>
         );
    }
}
 

export default Friends;
