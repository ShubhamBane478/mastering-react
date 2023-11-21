import { useState, useEffect } from "react";

function CounterApp() {
	const [counter, setCounter] = useState(50);

	// Removed the commented out line as it's not needed

	const addValue = () => {
		setCounter(prevCounter => prevCounter + 1);
	};

	const removeValue = () => {
		setCounter(prevCounter => prevCounter - 1);
	};

	useEffect(() => {
		console.log(`Value of Counter is ${counter}`);
	}, [counter]); // This effect runs whenever 'counter' changes

	return (
		<>
			<h1>Chai aur react</h1>
			<h2>Counter value: {counter}</h2>
			<button onClick={addValue}>Add Value</button>
			<button onClick={removeValue}>Decrease Value</button>
        </>
    );
}

export default CounterApp;  