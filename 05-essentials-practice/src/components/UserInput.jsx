import { useState } from "react"

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        initialInvestement: 1000,
        annualInvestement: 1200,
        expectedReturn: 6,
        duration: 10
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        });
    }

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Inital investment</label>
                <input
                    type="number"
                    value={userInput.initialInvestement}
                    onChange={(event) => handleChange('initialInvestement', event.target.value)}
                    required
                />
            </p>
            <p>
                <label htmlFor="">Annual investment</label>
                <input
                    type="number"
                    value={userInput.annualInvestement}
                    onChange={(event) => handleChange('annualInvestement', event.target.value)}
                    required
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Expected return</label>
                <input
                    type="number"
                    value={userInput.expectedReturn}
                    onChange={(event) => handleChange('expectedReturn', event.target.value)}
                    required
                />
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input
                    type="number"
                    value={userInput.duration}
                    onChange={(event) => handleChange('duration', event.target.value)}
                    required
                />
            </p>
        </div>
    </section>
}