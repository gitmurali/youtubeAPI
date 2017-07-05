/**
 * Created by muralinutalapati on 04/07/2017.
 */
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
            return (
                <VideoListItem
                    onVideoSelected={props.onVideoSelected}
                    key={video.etag} video={video} />
            );
    });

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;