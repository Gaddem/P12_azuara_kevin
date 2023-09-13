import './App.css';
import LayoutContainer from "./container/LayoutContainer"
import { ProviderContext } from './provider/Provider';

function App() {

  return (
    <div className="App">
      <ProviderContext>
        <LayoutContainer />
      </ProviderContext>
    </div>
  );
}

export default App;
