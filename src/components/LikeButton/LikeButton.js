import React, { useState } from 'react';
import './Likebutton.css';

const LikeButton = () => {
    const [isLiked, setIsLiked] = useState(false);
    console.log(isLiked);
    return (
        <div>
            <div className="">
                <button onClick={() => setIsLiked(!isLiked)}>{isLiked ? "Liked" : "Like"}</button>
            </div>
        </div>
    )
};

export default LikeButton;