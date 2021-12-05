
import React, { useState } from 'react';

import styles from './ToggleSwitch.module.css';

function ToggleSwitch() {

    // TODO: Maybe break each input into its own component?
    // TODO: Make this more elegant...
    const [themeOne, setThemeOne] = useState(true);
    const [themeTwo, setThemeTwo] = useState(false);
    const [themeThree, setThemeThree] = useState(false);

    function handleThemeClick(themeNumber) {
        switch(themeNumber) {
            case 1:
                setThemeOne(true);
                setThemeTwo(false);
                setThemeThree(false);
                break;
            case 2:
                setThemeOne(false);
                setThemeTwo(true);
                setThemeThree(false);
                break;
            case 3:
                setThemeOne(false);
                setThemeTwo(false);
                setThemeThree(true);
                break;
            default:
                console.log("Error no theme: " + themeNumber);
                break;
        }
    }

    return (
        <div className={styles.toggle}>
            <div className={styles['toggle-btn-container']}>
                <label className={styles["toggle-label"]} htmlFor="theme-1"><span>1</span></label>
                <input 
                    checked={themeOne}
                    onChange={() => handleThemeClick(1)}
                    className={styles["toggle-btn"]} 
                    type="radio" id="theme-1" name="theme"/>
                </div>
                <div className={styles["toggle-btn-container"]}>
                <label className={styles["toggle-label"]} htmlFor="theme-2"><span>2</span></label>
                <input 
                    checked={themeTwo}
                    onChange={() => handleThemeClick(2)}
                    className={styles["toggle-btn"]} 
                    type="radio" id="theme-2" name="theme"/>
                </div>
                <div className={styles["toggle-btn-container"]}>
                <label className={styles["toggle-label"]} htmlFor="theme-3"><span>3</span></label>
                <input 
                    checked={themeThree}
                    onChange={() => handleThemeClick(3)}
                    className={styles["toggle-btn"]} 
                    type="radio" id="theme-3" name="theme"/>
            </div>
        </div>
    );
}

export default ToggleSwitch;