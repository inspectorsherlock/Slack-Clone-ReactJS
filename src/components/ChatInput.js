import { Button } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import { db } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth"

function ChatInput({channelName, ChannelId, chatRef}) {
    const [input, setInput] = useState("");
    const [user] = useAuthState(auth);

    const sendMessage = e => {
        e.preventDefault();

        if (!channelId) {
            return false;
        }

        db.collection("rooms").doc(channelId).collection("messages").add({
            message: inputRef.current.value,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user.displayName,
            UserImage: PhotoURL
        })
    }

        chatRef.current.scrollIntoView({
            behaviour: "smooth",
        })

  return (
    <ChatInputContainer>
        <form>
            <input value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName}`} />
            <Button hidden type='submit' onClick={sendMessage}>
                SEND    
            </Button>
        </form>

    </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 20px;
    display: flex;
    justify-content: center;

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`