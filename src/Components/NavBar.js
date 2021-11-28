import logo from '../images/logo/logo.png';


const NavBar=()=>{
    return (
        <div className="navbar">
            <div className="img-container">
                <img class="pokemon-logo" src={logo} alt="Pokemon Logo" />
            </div>
            <div className="bar">
                <div className="circle">
                    <div className="circle inner"></div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;