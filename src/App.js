import React from 'react';
import Searcher from './Searcher'
import Header from './Header'

class App extends React.Component {

  render() {
    return (
      <main className='App'>
        <Header />
        <Searcher />
      </main>
    );
  }
}

export default App;