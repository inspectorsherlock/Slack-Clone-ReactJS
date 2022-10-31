import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { auth, provider } from "../firebase"

function login() {
    const signin = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) =>
        alert(error.message));
    }
  return (
    <LoginContainer>
        <LoginInnerContainer>
            <img src="https://cdn.mos.cms.futurecdn.net/
            SDDw7CnuoUGax6x9mTo7ddjpg" 
            alt="" 
            />
            <h1>Sign in to the Slack Chat</h1>
            <p>Chat.Slack.com</p>
            <Button type="Submit" onClick={signin}>
                Sign in with Google
            </Button>
        </LoginInnerContainer>
    </LoginContainer>
  )
}

export default login

const LoginInnerContainer = styled.div`
    background-color: #f8f8f8;
    height: 100vh;
    display: grid;
    place-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px
    2px rgba(0, 0, 0, 0.24);
`

const LoginContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;

    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }
    
    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        background-color: #0a8d48;
        color: white;
    }
`;