import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Post from './Post';
// import Search from './Search';


function Home(){
    const [info, setInfo] = useState([])



    useEffect(() => {
        axios.get('http://localhost:4000/getme')
        .then((response) => setInfo(response.data))
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
    },[])
    

    return(
        <><br/>
            <Post/>
            <br/>
            <div>
                {
                    info.map((detail) => {
                        return<div key={detail._id}>
                            <div>Title: {detail.name}</div>
                            <div>Year: {detail.amount}</div>
                            <div>Description: {detail.image}</div> <br/>
                        </div>
                    })
                   
                }
            </div>
            {/* <Search/> */}
        </>
    )
}

export default Home