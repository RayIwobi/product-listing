import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Search(){
    const [search, setSearch] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    const api_url = 'http://localhost:4000/getme'

    const searchmovies = (title) => {
        axios.get(`${api_url}&s=${title}`)
        .then((res) => {
            setSearch(res.data)
            console.log(res.data)
        })
   
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        searchmovies('')
    },[setSearch])

    const handleSearch = () => {
        searchmovies(searchTerm)
    }
    return(
        <>
        <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='search for movies'
        />
        <button onClick={handleSearch}>search</button>

        <div>
            {
                search.length > 0 ? (
                    search.map((sea) => {
                    return <div key={sea._id}>
                            <div>title:{sea.title}</div>
                            <div>year:{sea.year}</div>
                            <div>description:{sea.description}</div>
                            </div>
                    })
                ):(
                    <div>no data found</div>
                )
            }
        </div>
        </>
    )
}


export default Search