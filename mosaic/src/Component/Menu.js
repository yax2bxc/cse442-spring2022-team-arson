import '../App.css';
import menu from "./menu.module.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={menu.Menu}>
          <div className={menu.Line1}></div>
          <div className={menu.Line2}></div>
          <div className={menu.Line3}></div>
        </div>
        <div className={menu.Rectangle1}>
          <text className={menu.Home}>HOME</text>
        </div>
        <div className={menu.Rectangle2}>
          <text className={menu.Profile}>PROFILE</text>
        </div>
        <div className={menu.Rectangle3}>
          <text className={menu.Settings}>SETTINGS</text>
        </div>
        <div className={menu.Rectangle4}>
          <text className={menu.Logout}>LOG OUT</text>
        </div>
      </header>
    </div>
  );
}

export default App;