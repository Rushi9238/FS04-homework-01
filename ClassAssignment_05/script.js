function Navbar(){
    return <div className='maindiv'>
            <nav className='navbar'>
                <h1>LOGO</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <main className='mainDiv'>
               <h1>Home</h1>
               <p>Made with 💖 by <span>Rushikesh Patil</span></p>
            </main>
    </div>
}

ReactDOM.render(<Navbar />,document.getElementById('root'))