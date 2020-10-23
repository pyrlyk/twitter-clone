import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';



function Widgets() {
    return (
        <div className = "widgets">
             <div className = "widgets_input">
            <SearchIcon/>
                <input placeholder = "Search Twitter" type = "text"/>
            </div>
                <div className = "widgets_widgetContainer">
          </div>
        </div>
    )
}

export default Widgets
