import './App.css';
import {useState} from "react";


function App() {
    const [result, setResult] = useState("")

    const handleClick = (event) => {
        if (result === "Error") {
            setResult(event.target.value);
        } else {
            setResult(result.concat(event.target.value));
        }
    };

    const clear = () => {
        setResult("");
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        } catch (error) {
            setResult("Error");
            console.error("An error occurred during calculation:", error);
        }
    };



    return (
        <>
            <div className="calc">
                <input type="text" placeholder={"0"} id={"field"} value={result}/>

                <input type="button" value={"9"} onClick={handleClick} className="button"/>
                <input type="button" value={"8"} onClick={handleClick} className="button"/>
                <input type="button" value={"7"} onClick={handleClick} className="button"/>
                <input type="button" value={"+"} onClick={handleClick} className="button"/>
                <input type="button" value={"6"} onClick={handleClick} className="button"/>
                <input type="button" value={"5"} onClick={handleClick} className="button"/>
                <input type="button" value={"4"} onClick={handleClick} className="button"/>
                <input type="button" value={"-"} onClick={handleClick} className="button"/>
                <input type="button" value={"3"} onClick={handleClick} className="button"/>
                <input type="button" value={"2"} onClick={handleClick} className="button"/>
                <input type="button" value={"1"} onClick={handleClick} className="button"/>
                <input type="button" value={"*"} onClick={handleClick} className="button"/>
                <input type="button" value={"0"} onClick={handleClick} className="button"/>
                <input type="button" value={"."} onClick={handleClick} className="button"/>
                <input type="button" value={"%"} onClick={handleClick} className="button"/>
                <input type="button" value={"/"} onClick={handleClick} className="button"/>
                <input type="button" value={"C"} onClick={clear} className="button bottom-button"/>
                <input type="button" value={"="} onClick={calculate} className="button bottom-button"/>


            </div>

        </>
    );
}

export default App;
