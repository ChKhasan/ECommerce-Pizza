import React from 'react'
import Box from "@mui/material/Box";


const useDrawer = (value,width) => {
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : width }}
          lg={{ width: anchor === "top" || anchor === "bottom" ? "auto" : (width + 200) }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
         {value}
        </Box>
      );
  return [toggleDrawer,list,state]
}

export default useDrawer