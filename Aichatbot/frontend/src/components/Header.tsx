import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import Logo from './shared/Logo'
import { userAuth } from '../context/AuthContext'
import NavigationLink from './shared/NavigationLink'

const Header = () => {
  const auth = userAuth();
  return (
    <AppBar sx={{
        bgcolor:"transparent",
        position:"static",
        boxShadow:"none"
        }}>
        <Toolbar sx={{display:"flex"}}>
    <Logo/>
    <div>
{auth?.isLoggedIn?(
  <>
  <NavigationLink 
  bg='#00fffc' 
  to='/chat' 
  text='Go To Chat' 
  textColor='black'
  />
  <NavigationLink
   bg='#51538f'
   textColor='white'
   to='/'
   text='logout'
   onClick={auth.logout}
   />
</>
):(
<>
<NavigationLink 
  bg='#00fffc' 
  to='/login' 
  text='Login' 
  textColor='black'
  />
  <NavigationLink
   bg='#51538f'
   textColor='white'
   to='/signup'
   text='Signup'
   
   />
   
</>
)}
    </div>
        </Toolbar>
    </AppBar>
  )
}

export default Header

function useAuth() {
  throw new Error('Function not implemented.')
}
