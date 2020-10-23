import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e =>{
        e.preventDefault();

        db.collection('posts').add({
            displayName : 'VITALII PYRLYK',
            username : 'vitalii',
            verified: true,
            text : tweetMessage,
            avatar : ''
        });
            setTweetImage("");
            setTweetMessage("");
    };
    return (
        <div className = "tweetBox">
            <form>
                <div className = "tweetBox_input">
                    <Avatar src = ""/>
                    <input 
                    onChange = {(e) => setTweetMessage(e.target.value)}
                    value = {tweetMessage}
                    placeholder="What's happening?" 
                    type = "text"
                    />
                </div>
                <input 
                onChange = {(e) => setTweetImage(e.target.value)}
                value = {tweetImage}
                className = "tweetBox_imageInput"
                placeholder = "Enter image URL" 
                type = "text"/>
                <Button onClick = {sendTweet} type = "button" className = "tweetBox_tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox
