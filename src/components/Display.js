import styles from './Display.module.css';

function Display(props) {
    return (
        <div className={styles['display-container']} data-theme="one">
            <div className={styles['display-text']} data-theme="one">
                {props.displayValue}
            </div>
        </div>
    );
}

export default Display;