import './App.css';
import Header from './Header'
import Logo from './Logo'
import Footer from './Footer'
import Buttons from './Buttons'
import Articles from './Aricles'
import Tutorials from './Tutorials';

function App() {
  return (
    <div>
    <nav>
    <Header />
    </nav>
    <br/>

    <Logo />
    <br/>

    <h1>Featured Articles</h1>

    <Articles />

    <br/>
    <div class="App"><Buttons 
    Buttons = "See all Articles"
    /></div>

    <h1>Featured Tutorials</h1>

    <Tutorials />

    <br/>
    <Buttons 
    Buttons = "See all Tutorials"
    />

    <Footer />
    </div>
  );
}
export default App;
