import React from 'react';
import './css/postPreview.css';
import { useState, useEffect } from 'react';

function PrimaryPost({ post, index, active }) {

    return (
        <>
            <div className="postPreview">
                <h1>{post.title}</h1>
                <div className="postPreview-body">
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
