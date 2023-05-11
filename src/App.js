import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel ,Grid ,TextareaAutosize} from "@mui/material";

function App() {
  const [textInputValue, setTextInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [message, setMessage] = useState("");

  const [showTabs, setShowTabs] = useState(false);
 const [activeTab, setActiveTab] = useState(0);
  const handleButtonClick = () => {
    setShowTabs(true);
  };
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  };
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Text input values: ${textInputValue}`);
    console.log(`Dropdown value: ${dropdownValue}`);
    
  };



  return (
    <>
    <h2>Images & Videos</h2>
    <div style={div1Style}>
    This is div 1!
      </div>
      <div style={div2Style}>
        This is div 2!
      </div>
    <h2>Products Page</h2>
    <br></br>
    <form onSubmit={handleSubmit}>
      
      <FormControl>
        <InputLabel >Select an option</InputLabel>
        <Select style={selectStyle} value={dropdownValue} onChange={handleDropdownChange}>
          <MenuItem value="option1">Sneaker</MenuItem>
          <MenuItem value="option2">Option 2</MenuItem>
          <MenuItem value="option3">Option 3</MenuItem>
          <MenuItem value="option4">Option 4</MenuItem>
        </Select>
        <div>
      <Button style={buttonStyle} onClick={handleButtonClick}>Create Category</Button>
      {showTabs && (
        <div>
          <div className="tab-buttons">
            <Button  onClick={() => handleTabClick(1)}>Men</Button>
            <Button onClick={() => handleTabClick(2)}>Women</Button>
            <Button onClick={() => handleTabClick(3)}>Kids</Button>
          </div>
          <div className="tab-content">
            {activeTab === 1 && <p>Kurta</p>}
            {activeTab === 2 && <p>Plazoo</p>}
            {activeTab === 3 && <p>Payjama</p>}
          </div>
        </div>
      )}
    </div>
    <h4 style={titleStyle}>Product Name</h4>
    <br></br>
    <p>Basic Info</p>
    <br></br>
    <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField
            label="Product Name"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Ribbon"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
    
        <Grid item xs={12}>
        <Grid item xs={4}>
        <TextareaAutosize
      style={messageStyle}
      placeholder="Descriptions"
       value={message} onChange={handleMessageChange} />
  
        </Grid>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
      </FormControl> 
    </form>

    

    </>
  );
}

export default App;
const div1Style = {
  display: 'inline-block',
  backgroundColor: '#f0f0f0',
  padding: '10px',
  fontSize: '18px',
  height:'150px',
  width: '200px'
};

const div2Style = {
  display: 'inline-block',
  backgroundColor: '#d0d0d0',
  padding: '10px',
  marginLeft:'20px',
  fontSize: '18px',
  width: '200px',
  height:'150px'
};
const buttonStyle = {
  width: '33%',
  //  marginLeft:'20px',
   marginTop:"30px",
    color: 'white',
    backgroundColor: '#7d5ffe',
};
const selectStyle = {
  width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
   
   
};

const titleStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px"
};

const messageStyle= {
  width: "450px",
  minHeight: "220px", 
  borderRadius: "5px",
  border: "3px solid #ccc",
  resize: "none",
  fontSize: "16px",
  fontFamily: "inherit"
};