import React, { PropTypes } from 'react'


const TopicPicture  = ({ topic, className = '' }) => {
    let picture
    if (topic.picture) {
        picture = <img src={topic.picture} />
    } else {
        picture = <span className="topic-picture__default">{topic.name.slice(0, 1)}</span>
    }

    return (
        <span className={`topic-picture ${className}`}>
            {picture}
        </span>
    )
}

TopicPicture.propTypes = {
    topic: PropTypes.object.isRequired,
}


export default TopicPicture
