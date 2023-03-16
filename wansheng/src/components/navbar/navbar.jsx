import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
//BEN -> Block Element Modifier

const Menu = ()=>(
  <>
    <p><a href='#home'>主页/Home</a></p>
    <p><a href='#intro'>关于我们/About Us</a></p>
    <p><a href='#team'>专业团队/Team</a></p>
    <p><a href='#cases'>案列/Cases</a></p>
    <p><a href='#contact'>联系我们/Contanct</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='ws__navbar'>
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
        <button type='button'>Sign up</button>
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
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;