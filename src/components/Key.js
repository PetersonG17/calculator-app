
import styles from './Key.module.css';

function Key(props) {
    
    return (
        <div className={`${styles['key-container']} ${styles['key-color-' + props.color]}`} onClick={props.onKeyPress}>
            <div className={styles['key-text']}>
                {props.text}
            </div>
        </div>
    );
}

export default Key;