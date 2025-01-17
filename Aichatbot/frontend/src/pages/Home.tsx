import { Box ,useMediaQuery, useTheme} from '@mui/material'
import React from 'react'
import TypingAnimation from '../components/typer/TypingAnimation'

const Home = () => {
  const theme = useTheme();
  const isBelow = useMediaQuery(theme.breakpoints.down("md"));
  return (
  <Box width={"100%"} height={"100%"} >
<Box 
sx={{
  display:"flex",
  width:"100%",
  flexDirection:"column",
  justifyContent:"centre",
  alignItems:"centre",
  mx:"auto",
  mt:3,
  }}
  >
    <Box>
      <TypingAnimation/>
      </Box>
      <Box sx={{
        width:"100%"
      ,display:"flex",
      flexDirection:{md:"row",xs:"column",sm:"column"},
    gap:5,
    my:10,
    }}>
      <img
       src="robot.png "
        alt="robot" 
        style ={{width:"200px",margin:"auto"}}
        /> 
         <img
         className='image-inverted rotate'
       src="openai.png "
        alt="openai" 
        style ={{width:"200px",margin:"auto"}}
        /> 
        </Box>
        <Box sx={{display:"flex",width:"100%", mx:"auto"}}>
          <img src = "chat.png" alt= "chatbot" style={{
            display:"flex",
            margin:"auto",
            width:"60%",
            borderRadius:20,
            boxShadow:"-5px -5px 105px #64f3d5",
            marginTop:20,
          }}/>

        </Box>
  </Box>
  </Box>
  );
}

export default Home