import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from "./Components/ui/Header"
import CharacterGrid from './Components/characters/CharacterGrid'
import Search from './Components/ui/Search'
import './App.css'

function App() {
  const [items, setItems] = useState([]) //state containing character info
  const [isLoading, setIsLoading] = useState(true) //has data been fetched from api
  const [query, setQuery] = useState('') //tied to search component and used to search for specific characters

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query] /*array of dependencies, when changed effect runs again*/) 

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q) /*Update query using props in Search component */}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App
