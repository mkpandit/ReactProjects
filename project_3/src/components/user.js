import React, { Component } from 'react'

class User extends Component {

    constructor() {
        super()
        this.state = {
            user: []
        }
    }

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=2')
        .then(results => {
            return results.json()
        })
        .then(data => {
            let users = data.results.map( (user) => {
                return (
                    <div key={user.id.value}>
                        <img src={user.picture.medium} />
                    </div>
                )
            })
            this.setState({user: users})
        })
    }

    render() {
        return (
            <div className="container">
                <div className="user">
                    {this.state.user}
                </div>
            </div>
        )
    }
}

export default User