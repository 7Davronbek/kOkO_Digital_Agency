import logo from './logo.svg';
import './App.css';
import './sass/main.scss'

function App() {
    return (
        <>

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                    <div className="container">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatibus eum fuga eligendi. Ratione totam dignissimos reprehenderit quidem quisquam iusto voluptatum enim qui? Eligendi nobis, non corrupti molestiae suscipit provident.
                    </div>
                </header>
            </div>

            <div className="container">
                <div className="row">
                    <h1>lorem</h1>
                </div>
            </div>
        </>
    );
}

export default App;
