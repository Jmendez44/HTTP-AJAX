import React from 'react';


class FriendsList extends React.Component {
    constructor (props){
        super(props)
        this.state = {  }
    }
    
    render() { 
        return (
            <div>
                
                    {this.props.name.map(n => {
                        return <div key={n.id}>
                         <h1> {n.name} </h1>
                         <h3>Age: {n.age} </h3>
                         <h3>Email: {n.email}</h3> 
                        
                        </div>
                    })}
                
            </div>
        )

    }
}
 
export default FriendsList;