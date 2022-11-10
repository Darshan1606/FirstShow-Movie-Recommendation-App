import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import './footer.css'

export default function Footer() {
  return (
    
    <MDBFooter  color="blue" className="footer pt-4 ">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title">FirstShow</h5>
            <span>
             Here you get the details about movies which is recommanded by your search. Enjoy! :)
            </span>
          </MDBCol>
         
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
         
           &copy; TMDB API &nbsp;&nbsp; {new Date().getFullYear()}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

