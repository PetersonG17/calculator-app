
import styles from './Display.module.css';

function Display() {
    return (
        <div className={styles['display-container']}>
            <div className={styles['display-text']}>
                Testing
            </div>
        </div>
    );
}

export default Display;