import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import {MdMessage} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {HiMail} from 'react-icons/hi';

function ContactForm() {
  return (
    <section className={`${styles.container}`}>

        <div className={styles.Contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
                <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
            </div> 
            <Button
                isOutline ={true}
                text="VIA MAIL FORM" 
                icon={<HiMail fontSize="24px"/>}
            />
        </div>

        <div className={styles.Contact_image}>

        </div>
        
    </section>
  )
}

export default ContactForm