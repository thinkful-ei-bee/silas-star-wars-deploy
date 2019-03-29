import React from 'react'
import DisplayResults from './DisplayResults'

export default class Searcher extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      result: [],
      error: null,
    }
  }

  handleSubmit = (event) => {
    // When the form is submitted, prevent the defualt behavior
    // If the name entered is not blank, conduct a search
    // If the name is blank, do not search, and clear the page
    event.preventDefault()

    if(this.state.name !== '') {
      this.nameFetcher()
    } else {
      this.setState({result: []})
    }
    
  }

  nameFetcher() {
    // Use the search API to look for the name entered in the state
    // 
    fetch(`https://swapi.co/api/people/?search=${this.state.name}`, {
      method: 'GET'
    }).then(res => {
      if(!res.ok) {
        throw new Error('Somethings went wrong with the response')
      } return res.json()
    }).then(data => {
      this.setState({
        result: data.results,
        error: null
      })
    })
    .catch(err => {
      this.setState({error: err.message})  
    })
  }

  handleName(name) {
    this.setState({name})
  }

  render() {

    return (
        <div>
            <form onSubmit={e => this.handleSubmit(e)}>
                <label for='char-search'></label>
                <input type='text' name='char-search' onChange={e => this.handleName(e.target.value)}></input>
                <button type='submit'>Search</button>
            </form>

            <section id='display-section'>
                <DisplayResults results={this.state.result}  />
            </section>

        </div>

    )
  }
}