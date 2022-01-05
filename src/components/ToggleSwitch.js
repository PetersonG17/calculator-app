import styles from './ToggleSwitch.module.css';

function ToggleSwitch(props) {

    const THEME_ONE = "one";
    const THEME_TWO = "two"
    const THEME_THREE = "three";

    return (
        <div className={styles.toggle} data-theme={props.theme}>
            <div className={styles['toggle-btn-container']} data-theme={props.theme}>
                <label className={styles["toggle-label"]} htmlFor="theme-1" data-theme={props.theme}><span>1</span></label>
                <input 
                    checked={props.theme === THEME_ONE ? true : false}
                    onChange={props.onThemeSwitch()}
                    className={styles["toggle-btn"]} 
                    type="radio" id="theme-1" name="theme" value={THEME_ONE}/>
                </div>
                <div className={styles["toggle-btn-container"]} data-theme={props.theme}>
                <label className={styles["toggle-label"]} htmlFor="theme-2" data-theme={props.theme}><span>2</span></label>
                <input 
                    checked={props.theme === THEME_TWO ? true : false}
                    onChange={props.onThemeSwitch()}
                    className={styles["toggle-btn"]} 
                    type="radio" id="theme-2" name="theme" value={THEME_TWO}/>
                </div>
                <div className={styles["toggle-btn-container"]} data-theme={props.theme}>
                <label className={styles["toggle-label"]} htmlFor="theme-3" data-theme={props.theme}><span>3</span></label>
                <input 
                    checked={props.theme === THEME_THREE ? true : false}
                    onChange={props.onThemeSwitch()}
                    className={styles["toggle-btn"]} 
                    type="radio" id="theme-3" name="theme" value={THEME_THREE}/>
            </div>
        </div>
    );
}

export default ToggleSwitch;