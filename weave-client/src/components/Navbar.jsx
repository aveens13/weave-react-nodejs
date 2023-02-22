import icon from '../assets/user-solid.svg'
export default function Navbar(){
    return(
        <header className="navBar">
            <div className="nav-elements">
                <h1>Weave</h1>
                {/* <div className='searchTop'><input type="text" placeholder='Search'/></div> */}
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>My Projects</li>
                    <li><i className="fa fa-user"></i></li>
                </ul>
            </div>
        </header>
    )
}