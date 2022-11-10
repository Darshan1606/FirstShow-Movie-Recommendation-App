import { Modal,show} from 'react-bootstrap';
import React, {useState} from 'react';
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

const MovieBox =({titel, poster_path, vote_average, release_date, overview})=>{
    
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(

        <div className="card text-center">
            
              <img className="card-img-top" src={API_IMG+poster_path} onClick={handleShow}/>
              
              {/* <h3>{titel}</h3> */}
                  {/* <button type="button" className="btn btn-danger" onClick={handleShow} >View More</button> */}
                  <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <img className="card-img-top" style={{width:'14rem'}}src={API_IMG+poster_path} />
                      <h3>{titel}</h3>
                      <h4>IMDb: {vote_average}</h4>
                      <h5>Release Date: {release_date}</h5>
                      <br></br>
                      <h6>Overview</h6>
                      <p>{overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="danger" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                  </Modal>
             
            
        </div>
    )
}

export default MovieBox;