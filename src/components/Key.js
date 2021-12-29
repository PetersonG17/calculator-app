
import styles from './Key.module.css';

function Key(props) {

    // Use this function for changing style
    // function keyPress {
    //     // Change the style here

    //     // Call the parent function here.
    //     // props.onKeyPress
    // }
    
    return (
        <div className={`${styles['key-container']} ${styles['key-color-' + props.color]}`} onClick={props.onKeyPress}>
            <div className={styles['key-text']}>
                {props.text}
            </div>
        </div>
    );
}

export default Key;