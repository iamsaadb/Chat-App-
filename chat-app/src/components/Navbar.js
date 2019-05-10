import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class NavBar extends Component {

   state = {

   }

   render () {
       return (
        <Menu style={{marginBottom: 0, border: '1px solid #3f3f3f'}}>
           <Menu.Menu >
               <Menu.Item >
                  <h2>Developer Chat : Final Project</h2> 
               </Menu.Item>
           </Menu.Menu>

           <Menu.Menu position="right">
               <Menu.Item>
                    <Link to ="/login">
                        <Button color='white'> Log Out</Button>
                    </Link> 
               </Menu.Item>
            </Menu.Menu>
         </Menu>
       );
    }
}

export default NavBar;