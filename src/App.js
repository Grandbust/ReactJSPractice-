import './App.css';
import Content from './webParts/content.js';
import Navbar from './webParts/navbar.js';
import Sidebar from './webParts/sideBar.js';

function App() {
    return (
      <>
        <Navbar />
        <Sidebar />
        <Content />
      </>
    )
}

export default App;
