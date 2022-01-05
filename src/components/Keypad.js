
import Key from './Key';
import styles from './Keypad.module.css';

function Keypad(props) {

    return (
        <div className={styles['keypad-container']} data-theme="one">
            <div className="row">
                <div className="col-3">
                    <Key text="7" type="generic" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="8" type="generic" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="9" type="generic" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="DEL" type="special" onKeyPress={props.onDelete()}></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <Key text="4" type="generic" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="5" type="generic" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="6" type="generic" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="+" type="generic" onKeyPress={props.onOperation()}></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <Key text="1" type="generic" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="2" type="generic" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="3" type="generic" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="-" type="generic" onKeyPress={props.onOperation()}></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <Key text="." type="generic" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="0" type="generic" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="/" type="generic" onKeyPress={props.onOperation()}></Key>
                </div>
                <div className="col-3">
                    <Key text="x" type="generic" onKeyPress={props.onOperation()}></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <Key text="RESET" type="special" onKeyPress={props.onReset()}></Key>
                </div>
                <div className="col-6">
                    <Key text="=" type="result" onKeyPress={props.onEquals()}></Key>
                </div>
            </div>
        </div>
    );
}

export default Keypad;