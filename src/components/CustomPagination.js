import { Pagination } from '@material-ui/lab'
import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import Stack from '@mui/material/Stack';
import {createMuiTheme,ThemeProvider} from '@material-ui/core';

const darkTheme= createMuiTheme({
   palette: {
     type:"dark",
   },
})
const useStyles= makeStyles({
   root : {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        // backgroundColor: 'white',
        // color: 'white'
     }
});

function CustomPagination({page, setPage,numOfPages}) {
  const classes=useStyles();
  function handleChange(event,value) {
        setPage(value);
        window.scroll(0,0);
  }
  return (
    <div className={classes.root}>
    <ThemeProvider theme={darkTheme}>
    <Stack spacing={2}> 
     <Pagination 
       count={numOfPages}
       page={page}
       color="secondary"
       variant="outlined"
       onChange={handleChange}
     />
     </Stack>
     </ThemeProvider>
    </div>
  )
}

export default CustomPagination
