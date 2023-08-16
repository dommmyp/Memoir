import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Image, Popover } from "antd";
import { useState } from "react";
import './css/index.css'
import { AiOutlineSearch } from 'react-icons/ai';
import { LuEdit } from 'react-icons/lu';



function Index(user) {
    const [searchVal, setsearchVal] = useState("");
    const [visible, setvisible] = useState(false);




    const Title = () => {
        return (
            <div className="pop-title">
                <div className="pop-title-container">
                    <Avatar
                        size={40}
                        round={true}
                        src="https://lh3.googleusercontent.com/a/AATXAJzmT2D2pRjMyngzLDLGwBDSS0TrcjmcT7VRhJF3=s96-c"
                    />
                    <Avatar
                        size={50}
                        src={<Image src={user?.providerData?.photoURL} />}
                    />
                    <div className="pop-info-name">
                        <span>{user?.providerData?.displayName}</span>
                        <span>@{String(user?.providerData?.email).split("@")[0]}</span>
                    </div>
                </div>
            </div>
        );
    };
    const Content = () => {
        return (
            <div className="pop-content">
                <div className="pop-content-container">
                    <span>
                        <Link to="/create-post">Write a story</Link>
                    </span>
                    <span>
                        <Link to={"/me/stories"}>Stories</Link>
                    </span>
                    <span>
                        <Link to={"/me/lists"}>Lists</Link>
                    </span>
                    <span
                        onClick={() => {
                            auth.signOut().then(() => {
                                dispatch(logout());
                                navigate("/getting-started", {
                                    replace: true,
                                });
                            });
                        }}
                    >
                        Sign out
                    </span>
                </div>
            </div>
        );
    };





    return (
        <nav className="navbar">
            <div className="container-fluid">
                <Link className="navbar-title" to="/">Memoir</Link>
                <div className="navbar-search">
                    <Link to={'/search/' + searchVal} className="navbar-search-link" ><AiOutlineSearch /></Link>
                    <input type="search" className="navbar-search-input" placeholder="Search" value={searchVal} onChange={(e) => setsearchVal(e.target.value)} />
                </div>
                <div className="navbar-right">
                    <div className="navbar-item">
                        <Link className="create-post-link" to="/create-post">
                            <LuEdit />
                            <div>Create Post</div>
                        </Link>

                    </div>
                    <div className="header-right-avatar">
                        <span>
                            <div className="header-right-avatar-icon">
                                <span>
                                    <Popover
                                        content={<Content />}
                                        title={<Title />}
                                        trigger="click"
                                        visible={visible}
                                        placement="bottom"
                                        onVisibleChange={() => setvisible(!visible)}
                                    >
                                        <Avatar
                                            size={40}
                                            style={{
                                                cursor: "pointer",
                                            }}
                                            src={
                                                <Image
                                                    preview={false}
                                                    src={user?.providerData?.photoURL ?? 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3'}
                                                />
                                            }
                                        />
                                    </Popover>
                                </span>
                            </div>
                        </span>
                    </div>
                </div>


            </div>
        </nav >

    )
}

export default Index;
