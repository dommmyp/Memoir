import React from 'react';
import { useState, useEffect } from 'react';
import PrimaryPost from './PrimaryPost';
import PostPreview from './PostPreview';
import ExploreHeader from './ExploreHeader';
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md';
import './css/animations.css';
import './css/explore.css';

function MainPage() {
    const posts = [
        {
            title: "Post 1",
            content: "Lorem ipsum dolor sit a af astg srtyn bsry ndr ynd tryn srgtbsrt bsortjb sortb sirout bsiput bsioprt gbsirtg bihsrgt bishgf bjhisdf bjsdgf bkjsd gfbkjs gkbjsd fgkljbs dgkljb slkdgb skdhjg",
            author: "John Doe",
            dateCreated: "2021-01-01",
            topics: ["topic1", "topic2", "topic3"],
        },
        {
            title: "Post 2",
            content: "Lorem ipsum dolor sit a",
            author: "John Doe",
            dateCreated: "2021-01-01",
            topics: ["topic1", "topic2", "topic3"],
        },
        {
            title: "Post 3",
            content: "Lorem ipsum dolor sit a",
            author: "John Doe",
            dateCreated: "2021-01-01",
            topics: ["topic1", "topic2", "topic3"],

        }
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    function handleArrow(val) {
        if (val === 1 && activeIndex < posts.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
        if (val === -1 && activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    }

    return (
        <>
            <div className="mainPage">
                <div className="primaryPost-wrapper">
                    <MdOutlineKeyboardArrowLeft onClick={() => handleArrow(-1)} />
                    <div className="post-wrapper">
                        {posts && posts.map((post, index) => {
                            return <PrimaryPost post={post} key={index} index={index} active={activeIndex} />
                        })}
                    </div>
                    <MdOutlineKeyboardArrowRight onClick={() => handleArrow(1)} />
                </div >
                <div className="explore-wrapper">
                    <ExploreHeader />
                    <div className="explore-body">
                        {posts && posts.map((post, index) => {
                            return <PostPreview post={post} key={index} index={index} active={activeIndex} />
                        }
                        )}
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainPage;
