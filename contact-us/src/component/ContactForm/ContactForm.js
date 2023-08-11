import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import {MdMessage} from 'react-icons/md';

function ContactForm() {
  return (
    <section className={`${styles.container}`}>

        <div className={styles.Contact_form}>
            <Button text="VIA SUPPORT CHAT" icon={MdMessage}/>
        </div>

        <div className={styles.Contact_image}>

        </div>
        
    </section>
  )
}

export default ContactForm