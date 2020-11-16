import React, { Component } from 'react'
import styled from 'styled-components'

// import Logo from './Logo'
import Links from './links'

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`

class NavBarr extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBarr;