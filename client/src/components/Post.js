import React, { useState } from 'react';
import axios from 'axios'

function Post(){
    // const [title, setTitle] = useState('')
    // const [year, setYear] = useState('')
    // const [description, setDescription] = useState('')

    const [movies, setMovies] = useState({
        name:'',
        amount:'',
        image:''
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setMovies({...movies, [name]:value})
    }

    const handleClick = () => {
        //if(!title || !year || !description){
        if(!movies){
            alert('enter information')
        }
        axios.post('http://localhost:4000/new', {movies})
        .then((res) => setMovies(prev => [res.data, ...prev]))
        setMovies('')
        
        .catch((err) => console.log(err))
    }

    return(
        <>
            <div>
                <input 
                    type='text'
                    name='name'
                    value={movies.name}
                    onChange={handleChange}
                    placeholder='title of the mvie'
                />
                <input
                    type='text'
                    name='amount'
                    value={movies.amount}
                    onChange={handleChange}
                    placeholder='year of the mvie'
                />
                <input
                    type='text'
                    name='image'
                    value={movies.image}
                    onChange={handleChange}
                    placeholder='description of the mvie'
                />

                <button onClick={handleClick}>Post</button>
            </div>
        
        </>
    )
}

export default Post