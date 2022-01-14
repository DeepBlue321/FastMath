


import ClearIcon from '@mui/icons-material/Clear';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button, Collapse, List, ListItemButton, ListItemIcon, ListItemText, Stack } from "@mui/material";
import React,{ useState } from 'react';
import { CollectionsOutlined, ExpandLess, ExpandMore, StarBorder } from '@mui/icons-material';

function Menu() {
  
  const menuObject =[
    {
      name: "Sčítání",
      elements:["2by2","_ _ _ + _ _ _"],
      icon:  <AddIcon />,
      open :false
    } ,
    {
      name: "Násobení",
      elements:["_ + _","_ _ _ + _ _ _"],
      icon: <ClearIcon />,
      open:false
    }       
    
  ];
  
  const [list, setList] = useState(menuObject);

  const handleClick = (name) => {
     const newList = list.map((item) => {
      if (item.name === name) {
        const updatedItem = {
          ...item,
          open: !item.open,
        };

        return updatedItem;
      }

      return item;
    }); 
    setList(newList);
  };
  return (
  
    <Stack direction="column" spacing={2}>
{/*       <Button startIcon={<ClearIcon />}  href="/multiply">Násobení</Button>
      <Button  startIcon={<RemoveIcon />}href="/sub">Odečítánní</Button>
      <Button startIcon={<AddIcon />} href="/add">Sčítání</Button> */}
       { list.map((t,k) => (
         <div key={t.name} >
           {console.log(t)}
              <ListItemButton  onClick={()  => handleClick(t.name)} >  
      <ListItemIcon>
         {t.icon}
        </ListItemIcon>
        <ListItemText primary={t.name} />
        {t.open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={t.open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
     {   t.elements.map((elem) =>(
            <ListItemButton key={elem} sx={{ pl: 4 }}>
           
            <ListItemText primary={elem} />
          </ListItemButton>
     ))}
        

        </List>
      </Collapse>
         </div>
         
       )) }    

   
    </Stack>
   
  );
}

export default Menu;
