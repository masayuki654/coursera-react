import './App.css';
import ErrorBoundry from './ErrorBoundry';
import BuggyCounter from './BuggyCounter';

function App() {
  return (
    <div style={{marginLeft: "50px"}}>
      <p><b>Example of Error Boundary</b></p>
      <ErrorBoundry><BuggyCounter /></ErrorBoundry>
      <ErrorBoundry><BuggyCounter /></ErrorBoundry>
    </div>
  );
}

export default App;
