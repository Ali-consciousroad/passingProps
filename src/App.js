import Heading from "./Heading";

function App() {
    return (
        <div className="App">
            {/* Pass data down from the parent component (App.js) to the child component (Heading.js) */}
            {/* Exemple of passing firstName and lastName as props to the Heading component */}
            <Heading firstName="Jean" lastName="Moule"/>
        </div>
    );
};

export default App;
