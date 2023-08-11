import "./App.css";
import ContactHeader from "./component/ContactHeader/ContactHeader";
import Navigation from "./component/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation title1="Home" title2="About" title3="Content"/>
      <ContactHeader/>
    </div>
  );
}

export default App;