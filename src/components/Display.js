import styles from './Display.module.css';

function Display(props) {
    return (
        <div className={styles['display-container']} data-theme={props.theme}>
            <div className={styles['display-text']} data-theme={props.theme}>
                {props.displayValue}
            </div>
        </div>
    );
}

export default Display;