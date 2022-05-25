// import classes from "./Footer.module.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo4 from "../../assets/logo4.PNG";
import { FiTruck, FiMail, FiPhone } from "react-icons/fi";
import { BsGift, BsInstagram, BsGithub, BsFacebook } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
// import {VscLocation} from "react-icons/vsc";
const Footer = () => {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="4" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              <img src={logo4} alt="Book Store App" height="50px" />
              <strong>Bibliostore</strong>
            </h6>
            <p>
              Bibliostore is an online Book store built with React web
              application where the customer can purchase books online. Through
              this book store the users can search for a book by its title and
              later can add to the shopping cart.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              <strong>CONTACT</strong>
            </h6>
            <p>
              <a href="#">Bibliostore</a>
            </p>
            <p>
              <b>
                &nbsp;
                <FiMail />
              </b>{" "}
              biblio@gmail.com
            </p>
            <p>
              <b>
                &nbsp;
                <FiPhone />
                &nbsp;
              </b>{" "}
              +91 9834652183
            </p>
            <p>
              <b>
                &nbsp;
                <GrLocation />
              </b>{" "}
              Tirupati, AP
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              <strong>Services</strong>
            </h6>
            <p>
              <b>
                &nbsp;
                <FiTruck />
                &nbsp;
              </b>
              Track your Order
            </p>
            <p>
              <b>
                &nbsp;
                <BsGift />
                &nbsp;
              </b>
              E-Gift Cards
            </p>
            <p>
              <b>
                &nbsp;
                <GrLocation />
                &nbsp;
              </b>
              Retail Stores
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Created by Sabitha Pillai
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <b>
                    &nbsp;
                    <BsFacebook />
                    &nbsp;
                  </b>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating" href="https://github.com/Sabitha-Pillai/BiblioStore-React">
                  <b>
                    &nbsp;
                    <BsGithub />
                    &nbsp;
                  </b>
                  </a>
                </li>
                <li className="list-inline-item">
                  <b>
                    &nbsp;
                    <BsInstagram />
                    &nbsp;
                  </b>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};
export default Footer;
