import "./Navigation.css";

function Navigation(props){
    return (
        <nav className="navbar">
            <div>
                <img src="./images/logo.png" alt="logo"/>
            </div>
            <div className="menu">
                <li>{props.title1}</li>
                <li>{props.title2}</li>
                <li>{props.title3}</li>  
            </div>
        </nav>
    );
}

export default Navigation