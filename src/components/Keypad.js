
import Key from './Key';
import styles from './Keypad.module.css';

function Keypad() {

    function handleKeyPress(key) {
        console.log(key);
    }

    return (
        <div className={styles['keypad-container']}>
            <div className="row">
                <div className="col-3">
                    <Key text="7" color="white" onKeyPress={() => handleKeyPress(7)}></Key>
                </div>
                <div className="col-3">
                    <Key text="8" color="white"></Key>
                </div>
                <div className="col-3">
                    <Key text="9" color="white"></Key>
                </div>
                <div className="col-3">
                    <Key text="DEL" color="blue"></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <Key text="4" color="white"></Key>
                </div>
                <div className="col-3">
                    <Key text="5" color="white"></Key>
                </div>
                <div className="col-3">
                    <Key text="6" color="white"></Key>
                </div>
                <div className="col-3">
                    <Key text="+" color="white"></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <Key text="1" color="white"></Key>
                </div>
                <div className="col-3">
                    <Key text="2" color="white"></Key>
                </div>
                <div className="col-3">
                    <Key text="3" color="white"></Key>
                </div>
                <div className="col-3">
                    <Key text="-" color="white"></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <Key text="." color="white"></Key>
                </div>
                <div className="col-3">
                    <Key text="0" color="white"></Key>
                </div>
                <div className="col-3">
                    <Key text="/" color="white"></Key>
                </div>
                <div className="col-3">
                    <Key text="x" color="white"></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <Key text="RESET" color="blue"></Key>
                </div>
                <div className="col-6">
                    <Key text="=" color="red"></Key>
                </div>
            </div>
        </div>
    );
}

export default Keypad;