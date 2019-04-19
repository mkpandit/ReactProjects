import React, { Component } from 'react'
import './user.css'

class User extends Component {

    constructor() {
        super()
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
        .then(results => {
            return results.json()
        })
        .then(data => {
            console.log(data.results)
            let users = data.results.map( (user) => {
                return (
                    <div className="user" key={user.id.value}>
                        <div className="left">
                            <p>{this.capitalize(user.name.first)} {this.capitalize(user.name.last)}</p>
                            <p>E: {user.email}</p>
                            <p>C: {user.cell}</p>
                        </div>
                        <div className="right">
                            <img src={user.picture.medium} />
                        </div>
                    </div>
                )
            })
            this.setState({user: users})
        })
    }

    render() {
        // console.log(this.state.user)
        return (
            <div className="container">
                <h2>User profile</h2>
                {this.state.user}
            </div>
        )
    }

    capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

export default User