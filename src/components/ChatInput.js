import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const ChatInput = ({ channelName, channelId }) => {
 
    const sendMessage = (e) => {
        e.preventDefault();
    }
 
    return (
    <ChatInputContainer>
        <form action="">
            <input placeholder={`Message #ROOM`} type="text" />
            <Button hidden type='submit' onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
  )
}

export default ChatInput;

const ChatInputContainer = styled.div`

`