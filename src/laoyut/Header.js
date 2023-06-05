import { useState } from "react"

export default function Header() {
    const [color, setColor] = useState(true)
    function LightMode(){
        const body = document.querySelector('body')
        const nav = document.querySelector('.nav')
        body.style.backgroundColor = '#fff'
        nav.style.backgroundColor = '#fff'
    }
    function DarkMode(){
        const body = document.querySelector('body')
        const nav = document.querySelector('.nav')
        body.style.backgroundColor = 'black'
        nav.style.backgroundColor = 'black'
        setColor(false)
    }
    return (
        <>
            <nav>
                <div class="nav-wrapper nav">
                    <a href="#" class="brand-logo blue-text">Movies</a>
                    <div className="btn-group">
                    <button className="light" onClick={LightMode}>Light Mode</button>
                    <button className="dark" onClick={DarkMode}>Dark Mode</button>
                    </div>
                </div>
            </nav>
        </>
    )
}