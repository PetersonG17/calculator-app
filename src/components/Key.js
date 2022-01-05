import styles from './Key.module.css';

function Key(props) {
    
    return (
        <div className={`${styles['key-container']} ${styles['key-type-' + props.type]}`} onClick={props.onKeyPress} data-theme="one">
            <div className={styles['key-text']} data-theme="one">
                {props.text}
            </div>
        </div>
    );
}

export default Key;