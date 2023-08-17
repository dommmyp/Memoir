import './css/index.css'
import "medium-editor/dist/css/medium-editor.css";
import "medium-editor/dist/css/themes/default.css";
import Editor from "react-medium-editor";
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Index() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [data, setData] = useState({ title: "", desc: "" })
    const navigate = useNavigate()
    function submitPost() {
        if (title === "" || desc === "") {
            alert("Please fill out all fields")
            return
        }
        navigate('/submit-post', { state: { title: title, desc: desc } })
    }

    return (
        <>
            <div className="createPost-header">
                <h1>Tell us your story</h1>
                <button onClick={() => submitPost()} className="createPost-btn">Post</button>

            </div>
            <div className="createPost-body">
                <Editor
                    placeholder="Title"
                    className="titleContainer"
                    tag="pre"
                    text={title}
                    onChange={(text) => {
                        setTitle(text);
                    }}
                    options={{
                        disableReturn: true,
                        spellcheck: false,
                        toolbar: {
                            buttons: [
                                "bold",
                                "italic",
                                "underline",
                                "anchor",
                                "h1",
                                "h2",
                                "h3",
                                "h4",
                                "h5",
                                "h6",
                                "quote",
                                // "unorderedlist",
                                // "orderedlist",
                                // "subscript",
                                // "superscript",
                                "outdent",
                                "indent",
                                "code",
                                "image",
                            ],
                        },
                        placeholder: {
                            text: "Title",
                        },

                        autoLink: true,
                        anchor: {
                            placeholderText: "Enter reference link",
                            // customClassOption: "btn",
                            // customClassOptionText: "Refernce link",
                        },
                        paste: {
                            cleanPastedHTML: true,
                            cleanAttrs: ["style", "dir"],
                            cleanTags: ["label", "meta"],
                        },
                        anchorPreview: {
                            hideDelay: 300,
                        },
                    }}
                />
                <Editor
                    className="bodyContainer"
                    tag="div"
                    text={desc}
                    onChange={(text) => setDesc(text)}
                    options={{
                        toolbar: {
                            buttons: [
                                "bold",
                                "italic",
                                "underline",
                                "anchor",
                                "h1",
                                "h2",
                                "h3",
                                "h4",
                                "h5",
                                "h6",
                                "quote",
                                "justified",
                                "unorderedlist",
                                "orderedlist",
                                "subscript",
                                "superscript",
                                "outdent",
                                "indent",
                                "code",
                                "horizontal",
                            ],
                        },
                        placeholder: {
                            text: "tell us your story",
                        },

                        autoLink: true,
                        anchor: {
                            placeholderText: "Enter reference link",
                        },
                        paste: {
                            cleanPastedHTML: true,
                            cleanAttrs: ["style", "dir"],
                            cleanTags: ["label", "meta"],
                        },
                        anchorPreview: {
                            hideDelay: 300,
                        },
                    }}
                />
            </div >

        </>
    )
}

export default Index;
