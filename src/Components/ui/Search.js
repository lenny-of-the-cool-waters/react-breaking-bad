import React, {useState} from 'react'

//Arrow function search component 
const Search = ( {getQuery} ) => {
    //state declaration. 
    const [text, setText] = useState('')

    //event handler in case of changes to input value
    const handleChange = (q) => {
        setText(q)
        getQuery(q)
    }

    return (
        <section className="search">
            <form>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search characters"
                    value={text}
                    onChange={(event) => handleChange(event.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
