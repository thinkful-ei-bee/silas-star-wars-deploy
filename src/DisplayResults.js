import React from 'react'

export default function DisplayResults(props) {
  return (
    <div className='results'>
      {props.results !== '' && props.results.map(result => {
        return (
          <div className='name'>
              <h2>{result.name}</h2>
          </div>
        )
      })}
    </div>
  )
}