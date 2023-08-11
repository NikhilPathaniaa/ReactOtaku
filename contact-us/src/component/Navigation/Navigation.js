import styles from "./Navigation.module.css";

function Navigation(props){
    return (
        <nav className={`${styles.navigation} container`}>
            <div>
                <img src="./images/logo.png" alt="logo"/>
            </div>
            <ul>
                <li>{props.title1}</li>
                <li>{props.title2}</li>
                <li>{props.title3}</li>  
            </ul>
        </nav>
    );
}

export default Navigation