import './App.css';

import { useQuery } from '@apollo/client/react';
import gpl from 'graphql-tag';
import Persons from './components/Persons';

const ALL_PERSONS = gpl`
  query {
    allPersons {
      name
      phone
      id
    }
  }
`


function App() {
  const result = useQuery(ALL_PERSONS)

  if (result.loading) {
    return <div>loading...</div>
  }

  return (
    <div className="App">
      <Persons persons={result.data.allPersons} />
    </div>
  );
}

export default App;
