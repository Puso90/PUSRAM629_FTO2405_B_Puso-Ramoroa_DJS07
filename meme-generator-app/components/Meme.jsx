import React from "react"

export default function Meme() {
    return (
        <main>
            <form className="form">
                <div>
                    <label htmlFor="top-text">Top Text</label>
                        <input
                            id="top-text"
                            type="text"
                            placeholder="Top text"
                            className="form--input"
                        />
                    /* above htmlFor to show difference in usage 
                    but always do it same way for consistency */
                </div>
                <div>
                    <label>Bottom Text
                        <input
                            type="text"
                            placeholder="Bottom text"
                            className="form--input"
                        />
                    </label>
                </div>
                
                <button
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
        </main>
    )
}