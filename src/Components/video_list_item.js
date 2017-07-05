/**
 * Created by muralinutalapati on 04/07/2017.
 */
import React from 'react';

const VideoListItem = ({video, onVideoSelected}) => {

    const imageURL = video.snippet.thumbnails.default.url;

    return(
       <li className="list-group-item" onClick={() => onVideoSelected(video)}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageURL}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
       </li>
    );
}

export default VideoListItem;