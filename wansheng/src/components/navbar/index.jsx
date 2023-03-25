import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import { Flex} from '@chakra-ui/react'
import Button from '../field/Button';
//BEN -> Block Element Modifier

const Menu = ()=>(
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#intro'>About Us</a></p>
    <p><a href='#team'>Team</a></p>
    <p><a href='#cases'>Cases</a></p>
    <p><a href='#contact'>Contanct</a></p>
  </>
)

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  
  return (
    <Flex className='ws__navbar'>
      <div className = 'ws__navbar-links'>
        <div className='ws__navbar-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='ws__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='ws__navbar-sign'>
        <p>Sign in</p>
        <Button title={"Sign Up"} ></Button>
      </div>
      <div className='ws__navbar-menu'>
        {toggleMenu ? 
          <RiCloseLine color="#fff" size = {27} onClick={()=>setToggleMenu(false)} />:
          <RiMenu3Line color="#fff" size = {27} onClick={()=>setToggleMenu(true)} />
        }
        {toggleMenu &&(
          <div className='ws__navbar-menu_container scale-up-center'>
            <div className='ws__navbar-menu_container-links'>
              <Menu/>
            </div>
            <div className='ws__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <Button title={"Sign Up"} ></Button>
            </div>
          </div>
        )}
      </div>
    </Flex>
  )
}

export default Navbar;