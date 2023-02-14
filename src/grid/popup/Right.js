import  React,{useState, useContext, useEffect} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Rightaccordion from './Rightaccordion';
import { Context } from '../../context/context';

const options = [
  'select', 
  'HOLD',
  'RESOLVED',
  'SUBMMITED',
];

export default function Right() {
  const context = useContext(Context);
  const {typeChange,data} = context;
  const [index,setIndex] = useState([0,1,2])
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1); 
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget);
  };
  // useEffect(()=>{
  //     setIndex(data[index].type)
  //     console.log(data[index].type)
  // },[data,index])

  const changetype =()=>{
    console.log(index)
    setIndex(data[index].type)
  }
 console.log(data)

  function handleMenuItemClick(event,index) {
    event.preventDefault();
    setSelectedIndex(index);    
    // typeChange(changetype); 
    typeChange("BLAZ-1341",changetype);    
    setAnchorEl(null);
    // console.log(index)
  } 
  
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <div>
      <List
        component="nav"
        sx={{ bgcolor: 'background.paper' }}>
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}>
          <ListItemText          
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu style={{display:"flex",flexDirection:"colomn"}}
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          role: 'listbox',
        }}>
        {options.map((option, index) => (
          <MenuItem style={{display:"block"}}
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <Rightaccordion/>
    </div>
  );
}