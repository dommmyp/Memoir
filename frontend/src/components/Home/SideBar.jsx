import './css/sidebar.css';
function SideBar() {

    const recommendedUsers = ["John dow", "John don", "John do", "John da", "John dp"]
    const topics = ["Math", "Art", "misc", "Sports", "Programming", "Politics", "Science"]

    return (
        <>
            <aside className="sidebar">
                <div className="sidebar-item">
                    <div className="sidebar-item-header">
                        Recommended People
                    </div>
                    <div className="sidebar-item-body">
                        {recommendedUsers && recommendedUsers.map((user, index) => {
                            return <div className="recommended-user" key={index}>
                                <div className="recommended-user-img">
                                    <img src="https://picsum.photos/200" alt="" />
                                </div>
                                <div className="recommended-user-name">
                                    {user}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className="sidebar-item">
                    <div className="sidebar-item-header">
                        Recommended Topics
                    </div>
                    <div className="sidebar-item-body">
                        {topics && topics.map((topic, index) => {
                            return <div className="recommended-topic" key={index}>
                                {topic}
                            </div>
                        })}
                    </div>
                </div>

            </aside >

        </>
    )
}

export default SideBar;

