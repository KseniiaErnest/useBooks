import { useState } from "react"

export default function SearchBar( {searchQuery, setSearchQuery} ) {


  return (
    <input className="search" type="text" placeholder="Search books..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
  )
}