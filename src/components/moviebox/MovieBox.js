import { Modal,show} from 'react-bootstrap';
import React, {useState, useEffect} from 'react';
import "../moviebox/moviebox.css";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBIcon,
  } from "mdb-react-ui-kit";
  import {
    Button,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
  } from "@mui/material";

const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox =({id})=>{
  const [movie, setMovie] = useState({})
  useEffect(() => {
    async function getData(){
      let res = await fetch(`https://api.themoviedb.org/3//movie/${id}?api_key=c7f08171b9f91195a6b1770200ac95c7`)
      let resJson = await res.json()
      console.log(resJson);
      setMovie(resJson)
    }
    getData()
  }, [])
  const [items, setItems] = useState([]);
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(

        <div className="card text-center">
            
              <img className="card-img-top" src={API_IMG+movie?.poster_path} onClick={handleShow}/>
              
              {/* <h3>{titel}</h3> */}
                  {/* <button type="button" className="btn btn-danger" onClick={handleShow} >View More</button> */}
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+movie?.poster_path} />
                      <h3>{movie?.titel}</h3>
                      <h4>IMDb: {movie?.vote_average}</h4>
                      <h5>Release Date: {movie?.release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{movie?.overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="danger" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
             
            
        </div>
    )
}

export default MovieBox;