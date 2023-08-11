import styles from './Button.module.css';

function Button(props) {
    const {isOutline,text,icon} = props; // distructuring
  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
        {icon}
        {text}
    </button>
  )
}

export default Button