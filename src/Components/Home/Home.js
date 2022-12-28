import React, { useState } from 'react';

const Home = () => {

    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    function handleClick(event) {
        const value = event.target.value;
        setInput(input + value);
    }

    function handleEqual() {
        try {
            setResult(eval(input));
        } catch (error) {
            setResult('Error');
        }
    }

    function handleClear() {
        setInput('');
        setResult('');
    }


    return (
        <div className="home-calculator container">
            <div class="row mt-5">
                <div class="col">

                </div>
                <div className="calculator-container col-sm-4 card mt-5" style={{padding: "0"}}>
                    <div className="card-header text-center py-5">
                        <h3>React Calculator By ChatGPT</h3>
                    </div>
                    <div className="card-body">
                        <input type="text" className='form-control form-control-lg mb-2 border text-right' value={result || input} readOnly />
                        <button value="1" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>1</button>
                        <button value="2" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>2</button>
                        <button value="3" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>3</button>
                        <button value="+" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>+</button>
                        <br />
                        <button value="4" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>4</button>
                        <button value="5" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>5</button>
                        <button value="6" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>6</button>
                        <button value="-" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>-</button>
                        <br />
                        <button value="7" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>7</button>
                        <button value="8" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>8</button>
                        <button value="9" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>9</button>
                        <button value="*" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>x</button>
                        <br />
                        <button value="0" className="btn btn-outline-dark px-4 w-50" onClick={handleClick}>0</button>
                        <button value="." className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>.</button>
                        <button value="/" className="btn btn-outline-dark px-4 w-25" onClick={handleClick}>÷</button>
                        <br />
                        <button onClick={handleClear} className="btn btn-outline-dark px-4 w-50" >Clear</button>
                        <button onClick={handleEqual} className="btn btn-outline-dark px-4 w-50" >=</button>
                    </div>
                </div>
                <div class="col">

                </div>
            </div>
            <div className="text-center mt-5">
                <span className="mt-5"> Created By <a href="https://mxasraful.com" className='text-danger'>Mx Asraful</a> </span>
            </div>
        </div>
    );
};

export default Home;