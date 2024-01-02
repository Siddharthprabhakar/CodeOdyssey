import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import {
  InputGroup,
  DropdownButton,
  Dropdown,
  Button,
  Form,
} from "react-bootstrap"; // Import Form component from react-bootstrap
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import "./profile.css"; // Make sure to import your CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import axios from "axios";
import { Link } from 'react-router-dom';
import backgroundImage from '../images/banner.jpg';
import { useHistoryState } from "@uidotdev/usehooks";
import APIComponent from './MobileWelcomeSlide'
import ClearAllProgressButton from './ClearAllProgressButton'

const genders = ["Male", "Female", "Transgender", "Custom"];
const tenYearsAgo = new Date();
tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

const Profile = () => {
  const [pageTitle, setPageTitle] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const [customGender, setCustomGender] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [messageArray, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [interests, setInterests] = useState("");
  const [gender, setGender] = useState("");
  const [contributions, setContributions] = useState([]);
  const [headerClicked, setHeaderClicked] = useState(false);
  const history = useHistoryState();

  const handleLogout = () => {
    // Clear user's session data (for example, in localStorage or sessionStorage)
    localStorage.removeItem("name");
    // Redirect the user to the login page
    history.push("/login");
  };

  const handleHeaderClick = () => {
    setHeaderClicked(!headerClicked);
  };

  const handleSaveChanges = () => {
    setEditMode(true);
  };

  const handleRequest = async (url) => {
    await axios.get(url);
  };


  

  useEffect(() => {
    const storedName = localStorage.getItem("name"); // Retrieve the user's name from local storage
    const storedEmail = localStorage.getItem("email");
    if (storedName) {
      setName(storedName); // Set the user's name
      setEmail(storedEmail);
      console.log("User name is stored in local storage:", storedName);
      setPageTitle(`${storedName}`);
      // Fetch the message based on the user's name
      axios
        .get(`http://localhost:4000/user-data/${storedName}`)
        .then((response) => {
          const userData = response.data; //  response.data contains name, email, dob, etc. 
          console.log("Response from server:", response.data);
          setMessage(response.data.message);
        })
        .catch((error) => {
          console.error("Error fetching message:", error);
        });
    } else {
      setPageTitle("User");
    }
  }, []);

  
  
  

  return (
    <>
<div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
  <Link to='/home'><button className="back-button">
      &larr; {/* Unicode character for left arrow */}
    </button>
    </Link>
    </div>
    <div className="profilecontainer"style={{
          position: 'absolute', // Set position to absolute for the overlapping container
          top: '50%', // Adjust top position as needed
          left: '50%', // Adjust left position as needed
          transform: 'translate(-50%, -50%)', // Center the container horizontally and vertically
          padding: '20px', // Optional: Add padding for content inside the container
          borderRadius: '10px', // Optional: Add border-radius for rounded corners
        }}
      >
      <div className="pro-card">
        <div className="pro-header">
          <h1 className="namechange">Hi {pageTitle}!!</h1>{" "}
          {/* Display dynamic title */}
          <div className="main-pro">
            <div className="pro-image"></div>
          </div>
        </div>

        <div className="pro-body"></div>

        <div className="account-info" style={{ padding: "30px" }}>
          <div className="fields">
          <InputGroup className="dark mb-3">
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control type="text" value={messageArray[0]?.name} readOnly />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control type="text" value={messageArray[0]?.email} readOnly />
          </InputGroup>
        </div>
          <div className="pro-body">
              <div className="querybox">
                <h2 style={{ padding: "5px" }}> Queries</h2>
                <table className="message-box">
                  <thead>
                    <tr>
                      <th className={headerClicked ? "header-clicked" : ""}>
                        Message
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {Array.isArray(messageArray) ? 
                    messageArray.map( ({ message }) => (
                      <tr>
                        <td>{message}</td>
                      </tr>
                    ))
                  : null 
                  }
                  
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-body">
        <div className="querybox">
          <h2 style={{ padding: "5px", color: "white" }}> Progress of {pageTitle}</h2>
          <ul className="p-box">
              <li>
                <APIComponent/>
              </li>
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <div style={{ textAlign: "center", marginRight: '10px', height: '0px'}}>
      <Button variant="danger" href="/home" onClick={handleLogout}>
          Logout
      </Button>
      </div>
      <div style={{ textAlign: "center" }}>
          <ClearAllProgressButton/> 
      </div>
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
