import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";
import "bootstrap/dist/css/bootstrap.min.css";
import "./movies.css";
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import axios from "axios";
import Search from "../Search";
import MovieBox from "../moviebox/MovieBox";
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap";

//967780d831a3680144c23bf9c5fa53af

const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=c7f08171b9f91195a6b1770200ac95c7";
const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=c7f08171b9f91195a6b1770200ac95c7&query";

export default function Movies() {
  // const [data, setdata] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.dir(data.results);
        setMovies(data.results);
      });
  }, []);


  useEffect(() => {
    fetch(`http://127.0.0.1:3003/movie/${query}`).then((response) =>
      console.log(response) 
    );
   
  }, [query]);

  return (
    <>
      <Container fluid>  
        <Search search={(q) => setQuery(q)}></Search>  
      </Container>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
    </>
  );

  // useEffect(() => {

  //   // const fetch = async () => {
  //   //   if (query === "") {
  //   //     // checking if favorites array is empty or does not exist
  //   //     if (
  //   //       localStorage.getItem("favorites") === "[]" ||
  //   //       !localStorage.getItem("favorites")
  //   //     ) {
  //   //       localStorage.setItem("favorites", "[]");
  //   //       const result = await axios(
  //   //         `https://api.themoviedb.org/3/movie/550?api_key=c7f08171b9f91195a6b1770200ac95c7`
  //   //       );
  //   //       console.log(result.data.json);
  //   //       // setItems(result.data.data.results);
  //   //       setLoading(false);
  //   //     } else {
  //   //       let favorite = JSON.parse(localStorage.getItem("favorites"));
  //   //       setItems(favorite);
  //   //       setLoading(false);
  //   //     }
  //   //   } else {
  //   //     const result = await axios(
  //   //       `https://api.themoviedb.org/3/movie/550?api_key=c7f08171b9f91195a6b1770200ac95c7`
  //   //     );
  //   //     console.log(result.data.data.results);
  //   //     setItems(result.data.data.results);
  //   //     setLoading(false);
  //   //   }
  //   // };

  //   // fetch(`https://api.themoviedb.org/3/movie/550?api_key=c7f08171b9f91195a6b1770200ac95c7`).then(data => data.json()).then(data => {
  //   //   console.log(data);
  //   // });

  // }, []);

  // return isLoading ? (
  //   <h1>Loading...</h1>
  // ) : (
  //   <>
  //     <Search search={(q) => setQuery(q)}></Search>
  //     <MDBCardTitle>
  //       <h1 style={{ margin: "2rem" }}>Movies For You</h1>
  //     </MDBCardTitle>
  //     <div className="container">

  //       {/* {data.map((movie) => (
  //         <div className="item">
  //           <img src={getImage(movie.poster_path)} />
  //           <p>{movie.original_title}</p>
  //         </div>
  //       ))} */}

  //       {items.map((item) => (
  //         <div className="row">
  //           <div className="cards">
  //             <Card sx={{ maxWidth: 300 }}>
  //               {/* <CardMedia
  //                 component="img"
  //                 height="200"
  //                 // image={item.poster_path}
  //                 alt="green iguana"
  //               /> */}
  //               <CardContent>
  //                 <Typography gutterBottom variant="h5" component="div">
  //                   { console.log(item.id)}
  //                   <span>{item.id}</span>
  //                 </Typography>
  //                 <hr />
  //                 <Typography variant="body2" color="text.secondary">
  //                 { console.log(item.geners)}
  //                   {item.geners}
  //                 </Typography>
  //               </CardContent>
  //               {/* <CardActions>
  //                 <Button
  //                   size="small"
  //                   variant="outlined"
  //                   color="error"
  //                   style={{ align: "center" }}
  //                 >
  //                   Read More
  //                 </Button>
  //               </CardActions> */}
  //             </Card>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </>
  // );
}
