import React from "react"
import memesData from "../components/memesData.jsx"

export default function Meme() {
    return ( 
        <main>
            <form className="form">
                <div>
                    <label>Top Text
                        <input
                            type="text"
                            placeholder="Shut up"
                            className="form--input"
                        />
                    </label>
                    /* above htmlFor to show difference in usage 
                    but always do it same way for consistency */
                </div>
                <div>
                    <label>Bottom Text
                        <input
                            type="text"
                            placeholder="and take my money"
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