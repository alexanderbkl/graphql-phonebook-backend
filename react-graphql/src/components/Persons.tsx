import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FIND_PERSON } from "../App";
import Person from "./Person";


const Persons = ( {persons}: {persons:Array<{name: string, phone: string, id: string}>} ) => {
    const [nameToSearch, setNameToSearch] = useState('')
    const result = useQuery(FIND_PERSON, {
        variables: { nameToSearch },
        skip: !nameToSearch
    })

    if (nameToSearch && result.data) {
        return (
            <Person
                person={result.data.findPerson}
                onClose={() => setNameToSearch('')} />
        )
    }
    return (
        <div>
            <h2>Persons</h2>
            {
                persons.map((p: any) => (
                    <div key={p.id}>
                        {p.name} {p.phone}
                        <button onClick={() => setNameToSearch(p.name)}>
                            show address
                        </button>
                    </div>
                    
                    ))
            }
        </div>
    );
}
//typed persons object would look like this:

export default Persons;