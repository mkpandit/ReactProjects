import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
        this.initialState = {
            title: '',
            body: '',
        }
        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    render() {
        const {title, body} = this.state
        return (
            <form>
                <h2>Add new entry</h2>
                <label>Title</label>
                <input
                    type="text"
                    name = "title"
                    value={title}
                    onChange={this.handleChange}
                />
                <label>body</label>
                <input
                    type="text"
                    name="body"
                    value={body}
                    onChange= {this.handleChange}
                />
                <input
                    type="button"
                    value="submit"
                    onClick={this.submitForm}
                />
            </form>
        )
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
}

export default Form