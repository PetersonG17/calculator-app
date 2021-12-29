//import Attribution from './components/Attribution';
import Display from './components/Display';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  return (    
    <div className="container p-5">
      <div className="row">
        <div className="col-2">
          calc
        </div>
        <div className="col-10 d-flex justify-content-end">
          <div className="d-flex flex-row align-items-center"> {/* Toggle Theme */}
            <div className="pe-3">
              THEME
            </div>
            <ToggleSwitch></ToggleSwitch>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <Display></Display>
      </div>
      <div className="row">

      </div>
    </div>
  );
}

export default App;
