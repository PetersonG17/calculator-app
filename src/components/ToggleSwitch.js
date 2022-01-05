import React, { useState } from 'react';

import styles from './ToggleSwitch.module.css';

function ToggleSwitch() {

    // TODO: Maybe break each input into its own component?
    // TODO: Make this more elegant...
    const [theme, setTheme] = useState("one");

    const THEME_ONE = "one";
    const THEME_TWO = "two"
    const THEME_THREE = "three";

    function handleThemeClick(selection) {
        setTheme(selection);
    }

    return (
        <div className={styles.toggle} data-theme="one">
            <div className={styles['toggle-btn-container']} data-theme="one">
                <label className={styles["toggle-label"]} htmlFor="theme-1" data-theme="one"><span>1</span></label>
                <input 
                    checked={theme === THEME_ONE ? true : false}
                    onChange={() => handleThemeClick(THEME_ONE)}
                    className={styles["toggle-btn"]} 
                    type="radio" id="theme-1" name="theme"/>
                </div>
                <div className={styles["toggle-btn-container"]} data-theme="one">
                <label className={styles["toggle-label"]} htmlFor="theme-2" data-theme="one"><span>2</span></label>
                <input 
                    checked={theme === THEME_TWO ? true : false}
                    onChange={() => handleThemeClick(THEME_TWO)}
                    className={styles["toggle-btn"]} 
                    type="radio" id="theme-2" name="theme"/>
                </div>
                <div className={styles["toggle-btn-container"]} data-theme="one">
                <label className={styles["toggle-label"]} htmlFor="theme-3" data-theme="one"><span>3</span></label>
                <input 
                    checked={theme === THEME_THREE ? true : false}
                    onChange={() => handleThemeClick(THEME_THREE)}
                    className={styles["toggle-btn"]} 
                    type="radio" id="theme-3" name="theme"/>
            </div>
        </div>
    );
}

export default ToggleSwitch;