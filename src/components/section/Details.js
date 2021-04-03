  
import React, { Component } from 'react'
import {DataContext} from '../Context'
import '../css/Usercard.css'


export class Details extends Component {
    static contextType = DataContext;
    state = {
        users: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.userdata;
            const data = res.filter(user =>{
                return user._id === this.props.match.params.id
            })
            this.setState({users: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }



    render() {
        const {users} = this.state;
        return (
            <>
            <h1>Hello My Self!</h1>
            <div className="flex">
              {
                  users.map(user =>(
                   
                   <div key={user._id}>
                   <p>
                     <strong>{user.first_name}</strong>
                   </p>
                   <p>
                     <strong>{user.last_name}</strong>
                   </p>
                   <p>{user.email}</p>
                   <img src={user.avatar}  alt="" />
                 </div>
                  ))
              }
           </div>
           </>
            
        )
    }
}

export default Details