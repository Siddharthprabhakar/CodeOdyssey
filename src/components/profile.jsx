import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { InputGroup, DropdownButton, Dropdown, Button, Form } from 'react-bootstrap'; // Import Form component from react-bootstrap
import 'react-datepicker/dist/react-datepicker.css'; // Import DatePicker styles
import './profile.css'; // Make sure to import your CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import axios from 'axios'
const genders = ['Male', 'Female', 'Transgender', 'Custom'];

const tenYearsAgo = new Date();
tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);

const Profile = () => {
    const [pageTitle, setPageTitle] = useState(''); 
    const [editMode, setEditMode] = useState(false);
    const [selectedGender, setSelectedGender] = useState('');
    const [customGender, setCustomGender] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [name , setName] =useState('');
    const[message , setMessage] =useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    const [interests, setInterests] = useState('');
    const [gender, setGender] = useState('');
    const [contributions, setContributions] = useState([]); 

    const handleSaveChanges = () => {
        // Logic to save changes (can be implemented as per your requirements)
        // For example, you can send a request to update user data to a server here
        // For now, let's just set editMode to false
        setEditMode(true);
      };
    
     
    
      useEffect(() => {
       

        const storedName = localStorage.getItem('name'); // Retrieve the user's name from local storage
        if (storedName) {
          setName(storedName); // Set the user's name
          console.log('User name is stored in local storage:', storedName);
          setPageTitle(`Hi ${storedName}`);
           // Fetch the message based on the user's name
          axios.get(`http://localhost:4000/user-data/${storedName}`)
            .then((response) => {
              console.log('Response from server:', response.data);
              setMessage(response.data.message);
            })
            .catch((error) => {
              console.error('Error fetching message:', error);
      });
        } else {
          setPageTitle('Hi User');
        }
        
        
      }, []);
      
    
    
    
     
  return (
    <div className="container">
      <div className="profile-card">
      <div className="profile-header">
        <h1 className="namechange">{pageTitle}!!</h1> {/* Display dynamic title */}
          <div className="main-profile">
            <div className="profile-image"></div>
            {/* <div className="profile-names">
              <h1 className="username">Mohammad.S</h1>
              <small className="page-title">Front-End developer</small>
            </div> */}
          </div>
        </div>

        <div className="profile-body">
          
          </div>

          <div className="account-info" style={{ padding: "30px"}}>
            <div className="fields">
              <InputGroup className="dark mb-3">
                <InputGroup.Text>First Name</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Last Name</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text>Email</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputGroup>

              {/* <InputGroup className="mb-3">
                <InputGroup.Text>Password</InputGroup.Text>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup> */}

            <div className="account-info" style={{ display: 'flex', gap: '20px', marginBottom: '20px', alignContent: "center"}}>
                <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        maxDate={tenYearsAgo} // User must be at least 10 years old
                        showYearDropdown
                        dateFormat="MMMM d, yyyy"
                        placeholderText="Date of Birth"
                        className="form-control"
                        style={{ marginLeft: '10px', width: '200px' }}
                />

                <InputGroup className="mb-3">
                    <DropdownButton
                        variant="outline-secondary"
                        title={selectedGender || 'Gender'}
                        id="input-group-dropdown-2"
                        onSelect={(eventKey) => {
                            setSelectedGender(eventKey);
                            if (eventKey !== 'Custom') {
                                setEditMode(false); // Disable edit mode when a predefined gender is selected
                            } else {
                                setEditMode(true); // Enable edit mode for custom gender input
                            }
                        }}
                    >
                        {genders.map((genderOption) => (
                            <Dropdown.Item key={genderOption} eventKey={genderOption}>
                                {genderOption}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>

                    {!editMode && selectedGender !== 'Custom' && (
                        <Form.Control
                            aria-label="Selected gender"
                            value={selectedGender}
                            readOnly // Prevents user input
                            style={{ backgroundColor: '#f8f9fa', border: 'none' }} // Light background color
                        />
                    )}

                    {selectedGender === 'Custom' && editMode && (
                        <Form.Control
                            aria-label="Custom gender"
                            placeholder="Enter custom gender"
                            value={customGender}
                            onChange={(e) => setCustomGender(e.target.value)}
                        />
                    )}
                </InputGroup>
            </div>

          </div>
              <div  style={{ textAlign: 'center' }}>
            {editMode ? (
              <>
                <Button
                  variant="success"
                  className="save-button"
                  style={{ margin: '0 10px' }}
                  onClick={handleSaveChanges}
                >
                  Save
                </Button>
                <Button
                  variant="danger"
                  className="back-button"
                  style={{ margin: '0 10px' }}
                  onClick={() => setEditMode(false)}
                >
                  Back
                </Button>
              </>
            ) : (
              <Button variant="primary" className="make-changes-button" onClick={() => setEditMode(true)}>
                Make Changes
              </Button>
            )}
           
           <div className="profile-body">
           <div className="Contribox">
  <h2 style={{ padding: "5px" }}>Contributions</h2>
  <div className="message-box">
    <p>{message}</p>
  </div>
</div>

 
               {/* Display the message in the Contribution section */}
           
                {/* <h2 style={{padding: "5px",}}>Contributions</h2>
                        
                        <ul>
                            {message.map((message, index) => (
                                <li key={index}>{message}</li>
                            ))}
                        </ul> */}
               
            </div>
            
            </div>
            </div>
          </div>
          </div>
  );
};

export default Profile;
