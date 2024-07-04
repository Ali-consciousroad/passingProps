import Heading from "./Heading";

function App() {
    return (
        <div className="App">
            {/* Exemple of passing firstName and lastName as props to the Heading component */}
            <Heading firstName="Jean" lastName="Moule"/>
        </div>
    );
};

export default App;
