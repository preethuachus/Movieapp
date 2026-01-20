// import React, { useState } from 'react'
// import axios from 'axios'

// const Movies = () => {
//   const [data, setData] = useState([])
//   const [search, setSearchData] = useState("")

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(
//         `https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`
//       )
//       setData(response.data.Search || [])
//     } catch (error) {
//       console.error("Failed to fetch data:", error)
//     }
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter movie name"
//         onChange={(e) => setSearchData(e.target.value)}
//       />

//       <button onClick={fetchData}>Search</button>

//       {data.map((item) => (
//         <div
//           key={item.imdbID}
//           className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs"
//         >
//           <img
//             src={item.Poster}
//             alt={item.Title}
//             style={{ width: "100%", marginBottom: "10px" }}
//           />

//           <h5 className="mb-3 text-2xl font-semibold">
//             {item.Title}
//           </h5>

//           <p className="text-body mb-6">
//             Release Year: {item.Year}
//           </p>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Movies

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img from '../images/zgeTuV.jpg'
import '../Movie.css'


const Movies = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    if (!search) return;

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=a5ef1268`
      );
      setData(res.data.Search || []);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);
  

  return (
    <div style={{ padding: "20px" }} className="bg-black b">
      
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input className="text-blue-100 font-semibold mt-75 mm"
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            marginRight: "10px",
            textAlign:"center",
          }}
        />
        <button className="text-blue-50 font-semibold "
          onClick={fetchData}
          style={{
            padding: "10px 20px",
            cursor: "pointer",
            
          }}
        >
          Search
        </button>
      </div>

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {data.map((item) => (
          <div
            key={item.imdbID}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor:"gray",
            }}
          >
          <Link to={`/detail/${item.imdbID}`}>
          <img
              src={
                item.Poster !== "N/A"
                  ? item.Poster
                  : "https://via.placeholder.com/300"
              }
              alt={item.Title}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
               
              }}
            />
          </Link>  

            <h3 style={{ margin: "10px 0 5px" }}>{item.Title}</h3>
            <p style={{ color: "gray" }}>Year: {item.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;

