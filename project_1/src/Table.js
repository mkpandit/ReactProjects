import React, {Component} from 'react'

class Table extends Component {
    render() {
        const {characterData, removeCharacter} = this.props
        return (
            <table>
                <TableHeader />
                <TableBody 
                    characterData={characterData} 
                    removeCharacter={removeCharacter} 
                />
            </table>
        )
    }
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <td>Title</td>
                <td>Body</td>
                <td></td>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.title}</td>
                <td>{row.body}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Remove</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>{rows}</tbody>
    )
}

export default Table