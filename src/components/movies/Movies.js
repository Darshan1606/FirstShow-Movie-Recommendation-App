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
  // const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(true);
  // const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.results);
        console.dir(data.results);
        
        for (let i = 0; i < 10; i++) {
          console.log(data.results[i].id);;
        }

        console.log(data.results[0].id);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=c7f08171b9f91195a6b1770200ac95c7&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Container fluid>
        <Form  onSubmit={searchMovie} autoComplete="off">
          <Search type="search"
            placeholder="Movie Search"
            className="me-2"
            aria-label="search"
            name="query"
            value={query}
            onChange={changeHandler}></Search>
        </Form>
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
