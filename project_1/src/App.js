import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        // const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*'
        const url = 'https://jsonplaceholder.typicode.com/posts'
        fetch(url)
            .then(result => result.json())
            .then(result => {
                console.log(result)
                this.setState({
                    data: result,
                })
            })
    }

    render() {
        const { data } = this.state

        return(
            <div className="Container">
                <Table 
                    characterData={data}
                    removeCharacter={this.removeCharacter}
                />
                <Form 
                    handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }

    removeCharacter = (index) => {
        const {data} = this.state
        this.setState({
            data: data.filter((character, i) => {
                return i !== index
            })
        })
    }

    handleSubmit = d => {
        this.setState({data: [...this.state.data, d]})
    }
}

export default App