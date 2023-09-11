import React, { useEffect } from "react";
import axios from "axios";

export default function Home() {
    const getData = async() => {
        try{
            const response = await axios.post('/api/users/check-token', {},
            {
                headers : {
                    Authorization : 'Bearer ' + localStorage.getItem('token'),
                },
            });
            console.log(response.data)
        }catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        getData();
    },[]);

    return (
        <div> Home Page</div>
    )
}