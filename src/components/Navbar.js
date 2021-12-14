import React, { Component } from 'react';
import Identicon from 'identicon.js';
import dvideo from '../dvideo.png'

class Navbar extends Component {

  render() {
    return (
      <nav className=" navbar navbar-dark bg-success #e3f2fd flex-md-nowrap p-0 shadow text-monospace">
        <a
          className="navbar-brand col-sm-3 col-md-2 mr-0"
          href="http://www.dappuniversity.com/bootcamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={dvideo} width="30" height="30" className=" text-warning d-inline-block align-top " alt="" />
          &nbsp;Decentralized Youtube 
        </a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-dark">
              <small id="account"  className="text-warning font-weight-bold ">{this.props.account}</small>
            </small>
             { this.props.account
              ? <img
               className='ml-2'
              width='34'
              height='34'
              src={`data:image/png;base64,${new Identicon(this.props.account,  50).toString()}`}
               alt=""
            
               />
               : <span></span>

             }
              
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;