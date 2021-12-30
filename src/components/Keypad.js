
import Key from './Key';
import styles from './Keypad.module.css';

function Keypad(props) {

    return (
        <div className={styles['keypad-container']}>
            <div className="row">
                <div className="col-3">
                    <Key text="7" color="white" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="8" color="white" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="9" color="white" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="DEL" color="blue" onKeyPress={props.onDelete()}></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <Key text="4" color="white" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="5" color="white" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="6" color="white" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="+" color="white" onKeyPress={props.onOperation()}></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <Key text="1" color="white" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="2" color="white" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="3" color="white" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="-" color="white" onKeyPress={props.onOperation()}></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-3">
                    <Key text="." color="white" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="0" color="white" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-3">
                    <Key text="/" color="white" onKeyPress={props.onOperation()}></Key>
                </div>
                <div className="col-3">
                    <Key text="x" color="white" onKeyPress={props.onOperation()}></Key>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6">
                    <Key text="RESET" color="blue" onKeyPress={props.onGeneric()}></Key>
                </div>
                <div className="col-6">
                    <Key text="=" color="red" onKeyPress={props.onEquals()}></Key>
                </div>
            </div>
        </div>
    );
}

export default Keypad;