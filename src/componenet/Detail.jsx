import axios from 'axios'
import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import img from '../images/ph.jpg'
import '../Details.css'

const Detail = () => {
    const [data, setdata] = useState("")
    const { id } = useParams()
    console.log(id);


    useEffect(() => {
        const fetchdata = async () => {
            const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a5ef1268`)
            setdata(response.data)
            console.log(response.data);

        }
        fetchdata()
    }, [id])
    console.log(data);
return (
  <div className="s min-h-screen flex items-center justify-center px-4">

  <div className="relative max-w-4xl w-full border rounded-xl shadow-2xl 
                  bg-white z-10 flex flex-col md:flex-row overflow-hidden">

    
    <div className="md:w-1/3 flex items-center justify-center bg-black">
      <img
        className="w-full h-full object-cover "
        src={data.Poster !== "N/A" ? data.Poster : img}
        alt={data.Title}
      />
    </div>

    
    <div className="md:w-2/3 p-6 text-left">

      <h1 className="text-3xl font-bold text-emerald-950 mb-2">
        {data.Title}
      </h1>

      <p className="text-green-700 font-semibold mb-3">
        {data.Actors}
      </p>

      <div className="grid grid-cols-2 gap-2 text-sm mb-4">
        <p><span className="font-semibold">Language:</span> {data.Language}</p>
        <p><span className="font-semibold">Director:</span> {data.Director}</p>
        <p><span className="font-semibold">Released:</span> {data.Released}</p>
        <p><span className="font-semibold">Country:</span> {data.Country}</p>
        <p><span className="font-semibold">Runtime:</span> {data.Runtime}</p>
        <p><span className="font-semibold">Rated:</span> {data.Rated}</p>
      </div>

      <p className="text-sm text-gray-700 mb-3">
        <span className="font-semibold">Genre:</span> {data.Genre}
      </p>

      <p className="text-sm text-gray-600 leading-relaxed">
        {data.Plot}
      </p>

    </div>

  </div>

</div>
)
}
export default Detail

