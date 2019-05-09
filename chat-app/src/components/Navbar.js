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
             <Menu.Item style={{borderRight: '1px solid #3f3f3f'}}>
              <h2>Developer Chat : Final Project</h2> 
             </Menu.Item>
           </Menu.Menu>

           <Menu.Menu position="right">
     
               <Menu.Item  style={{borderLeft: '1px solid #3f3f3f'}}   >
                    {/* <Link to ="/">
                        <Button color='white'> Log Out</Button>
                    </Link> */}
                    <Button color='white'> Log Out</Button>
               </Menu.Item>
            </Menu.Menu>
         </Menu>
       );
    }
}

export default NavBar;