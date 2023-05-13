import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, FormControl, InputLabel ,Grid ,TextareaAutosize} from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
function App() {
  const [textInputValue, setTextInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const [priceInputValue, setPriceInputValue] = useState("");
  const [message, setMessage] = useState("");

  const [showTabs, setShowTabs] = useState(false);
 const [activeTab, setActiveTab] = useState(0);
 const [isOnSale, setIsOnSale] = useState(false);

const handleOnSaleChange = () => {
  setIsOnSale(!isOnSale);
};
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
    Images!
      </div>
      <div style={div2Style}>
        This is div 2!
      </div>
    <h2>Products Page</h2>
    <br></br>
    <form onSubmit={handleSubmit}>
      
      <FormControl>
        <InputLabel style={selectStyle} >Choose Category</InputLabel>
        <Select style={selectStyle} value={dropdownValue} onChange={handleDropdownChange}>
          <MenuItem value="option1">Men Footwear</MenuItem>
          <MenuItem value="option2">Women Footwear</MenuItem>
          <MenuItem value="option3">Kids Footwear</MenuItem>
        </Select>
        <div>
      <Button style={buttonStyle} onClick={handleButtonClick}>Create Category</Button>
      {showTabs && (
        <div>
          <div className="tab-buttons">
            <Button style={tabStyle} onClick={() => handleTabClick(1)}>Men</Button>
            <Button style={tabStyle}onClick={() => handleTabClick(2)}>Women</Button>
            <Button style={tabStyle}onClick={() => handleTabClick(3)}>Create your Own</Button>
          </div>
          <div className="tab-content">
            {activeTab === 1 && <Button style={tabStyle} >Kurta</Button>}
            {activeTab === 2 && <Button style={tabStyle} >Lehanga</Button>}
            {activeTab === 3 && <Button>  {textInputValue}</Button>}
           {activeTab === 3 && <TextField
            label="Enter New Category"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />} 
             {activeTab === 3 &&<Button type="submit" variant="contained" color="primary">
            Submit
          </Button>}
          </div>
        </div>
      )}
    </div>
    <h4 style={titleStyle}>Product Name</h4>
    <h5>Basic Info</h5>
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
      <h2>Pricing</h2>
      <TextField
            label=" ₹ Price"
            value={priceInputValue}
            onChange={(event) => setPriceInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
          />
           <FormControlLabel
      control={
        <Switch checked={isOnSale} onChange={handleOnSaleChange} />
      }
      label="On Sale"
    />
    {isOnSale && (
      <div>
     <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField
            label="₹ Sale Price"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="% Discount"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        </Grid>
      </div>
    )}
               <FormControlLabel
      control={
        <Switch checked={isOnSale} onChange={handleOnSaleChange} />
      }
      label="Show price per unit"
    />
    {isOnSale && (
      <div>
     <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField
            label="Total products quantity in units"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Base Units"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        </Grid>
       
      </div>
    )}
     <Grid item xs={8}>
      <h5>Base price per units</h5>
          <TextField
        style={inputStyle}
            label="Base Units"
            placeholder='₹'
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField
            label="₹ Cost of Goods"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="₹ Profit"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Margin"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        </Grid>
        <h2>Edit Product option</h2>
        <Grid container spacing={2} alignItems="center">
        <Grid item xs={4}>
          <TextField
            label="₹ Cost of Goods"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="₹ Profit"
            value={textInputValue}
            onChange={(event) => setTextInputValue(event.target.value)}
            variant="outlined"
            margin="normal"
            fullWidth
          />
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
const inputStyle = {
width:'250px',
fontSize: '18px',
borderWidth:'1px',
marginBottom:'30px'


};
const buttonStyle = {
  width: '33%',
  display: 'inline-block',
  marginTop: '-82px',
  marginLeft: '347px',
  height:'50px',
    color: 'white',
    backgroundColor: '#7d5ffe',
};
const tabStyle = {
  width: '25%',
  marginLeft:'20px',
   marginTop:"30px",
    color: 'white',
    backgroundColor: '#7d5ffe',
};
const selectStyle = {
  display: 'inline-block',
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