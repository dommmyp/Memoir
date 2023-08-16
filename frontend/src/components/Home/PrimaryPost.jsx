import './css/PrimaryPost.css'
import { useState, useEffect } from 'react';

function PrimaryPost({ post, index, active }) {
    const [myClass, setMyClass] = useState("primaryPost");
    const [offScreen, setOffScreen] = useState(false);
    const [upNext, setUpNext] = useState(false);

    useEffect(() => {
        if (index === active) {
            if (!upNext) {
                setMyClass("primaryPost slide-in-blurred-left");
            } else {
                setMyClass("primaryPost");
                setUpNext(false);
            }
        } else if (index < active) {
            setMyClass("primaryPost slide-out-blurred-left");
        } else if (index === active + 1) {
            setMyClass("primaryPost primaryPost-2");
            setUpNext(true);
        } else if (index === active + 2) {
            setMyClass("primaryPost primaryPost-3");
        } else {
            setMyClass("primaryPost hidden");
        }
        if (offScreen && index <= active || index < active) {
            setOffScreen(true);
        } else {
            setOffScreen(false);
        }
    }, [active, index]);

    return (
        <>
            <div className={myClass}>
                <h1>{post.title}</h1>
                <div className="primaryPost-body">
                    <p>{post.content}</p>
                </div>
                <div className="primaryPost-footer">
                    <div className="primaryPost-footer-tags">
                        {post.topics && post.topics.map((topic, index) => {
                            return < div key={index} className="post-tag" > {topic}</div>
                        })}

                    </div>
                    <div className="primaryPost-footer-date">
                        <div>
                            <div>{post.author}</div>
                            <div>{post.dateCreated}</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PrimaryPost;
