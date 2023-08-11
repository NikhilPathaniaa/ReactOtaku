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

            <form>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="name" />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea name="text" rows="8"/>
                </div>
                <div style={{display: "flex", justifyContent: 'end',}}>
                    <Button text="SUBMIT" />
                </div>
                
            </form>
        </div>
            <img src="./images/contact.svg" alt="contact image"/>
        <div className={styles.Contact_image}>

        </div>
        
    </section>
  )
}

export default ContactForm