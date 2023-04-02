

const Persons = ( {persons}: {persons:Array<{name: string, phone: string, id: string}>} ) => {
    return (
        <div>
            <h2>Persons</h2>
            {
                persons.map((p: any) =>
                    <div key={p.id}>{p.name} {p.phone}</div>)
            }
        </div>
    );
}
//typed persons object would look like this:

export default Persons;