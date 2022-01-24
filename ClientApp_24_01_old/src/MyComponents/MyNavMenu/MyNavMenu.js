import React, { Component } from 'react';
import { Route } from 'react-router';

import { 
    Collapse, 
    Navbar, 
    NavbarBrand, 
    NavbarToggler, 
    NavItem, 
    UncontrolledDropdown, 
    DropdownToggle, 
    Nav, 
    DropdownMenu, 
    DropdownItem, 
    NavLink, 
    Container} from 'reactstrap';


export class MyNavMenu extends Component{
    static displayName = MyNavMenu.name;

  constructor(props){
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return(
        <header>
            <div>
              <Navbar
                color='light'
                light
                expand='md'
                container='fluid'>
                    <Container>
                    <NavbarBrand href='/'>
                        HowMuch
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav
                        className='me-auto'
                        navbar>
                            <UncontrolledDropdown
                            inNavbar
                            nav
                            >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Orders
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem>
                                <NavLink href='/NewOrder'>
                                    New Order
                                </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                <NavLink href='/MyOrders'>
                                    My Orders
                                </NavLink>
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown
                            inNavbar
                            nav>
                                <DropdownToggle
                                caret
                                nav>
                                Consumption
                                </DropdownToggle>
                                <DropdownMenu>
                                <DropdownItem>
                                    <NavLink href='/NewConsumption'>
                                    New Consumption
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href='/MyConsumption'>
                                    My Consumption
                                    </NavLink>
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href='/Statistics'>
                                    Statistics
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href='/Settings'>
                                    Settings
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                    </Container>
              </Navbar>
            </div>
        </header>
    );
  }
}