import styles from './Display.module.css';

function Display(props) {
    return (
        <div className={styles['display-container']}>
            <div className={styles['display-text']}>
                {props.displayValue}
            </div>
        </div>
    );
}

export default Display;