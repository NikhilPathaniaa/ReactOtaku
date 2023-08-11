import {MdMessage} from 'react-icons/md';
import styles from './Button.module.css';

function Button() {
  return (
    <button className={styles.primary_btn}>
        <MdMessage fontSize="24px"/>
    </button>
  )
}

export default Button