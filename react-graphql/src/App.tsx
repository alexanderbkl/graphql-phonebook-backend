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

export const FIND_PERSON = gpl`
  query findPersonByName($nameToSearch: String!) {
    findPerson(name: $nameToSearch) {
      name
      phone
      id
      address {
        street
        city
      }
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
