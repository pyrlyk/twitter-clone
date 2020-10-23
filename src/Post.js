import { Avatar } from '@material-ui/core'
import React from 'react'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublishIcon from '@material-ui/icons/Publish';
import RepeatIcon from '@material-ui/icons/Repeat';
import './Post.css';

function Post({ displayName, username, verified, text, image, avatar }){
    return (
        <div className = "post">
            <div className = "post_avatart">
                <Avatar src = {avatar}/>
            </div>
            <div className  = "post_body">
                <div className = "post_header">
                    <div className = "post_headerText">
                        <h3>
                            {displayName}{" "}
                            <span className = "post_headerSpecial">
    {verified && <VerifiedUserIcon className = "post_badge" />} @{username}
                            </span>
                        </h3>
                    </div>
                    <div className = "post_headerDescription">
                    <p>{text}</p>
                    </div>
                </div>
                <img src = {image} alt = ""/>

                <div className = "post_footer">
                    <ChatBubbleOutlineIcon  fontSize = "small"/>
                    <FavoriteIcon fontSize = "small"/>
                    <RepeatIcon fontSize = "small"/>
                    <PublishIcon fontSize = "small"/>
                    
                </div>
            </div>
        </div>
    );
}

export default Post
