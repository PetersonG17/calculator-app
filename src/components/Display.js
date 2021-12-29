
import styles from './Display.module.css';

function Display() {
    return (
        <div className={styles['display-container']}>
            <div className={styles['display-text']}>
                123,456.00
            </div>
        </div>
    );
}

export default Display;