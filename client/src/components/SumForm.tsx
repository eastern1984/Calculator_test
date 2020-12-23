
import React, {useState} from 'react';
import './app.css';

interface SumFormProps {

}

const SumForm: React.FC<SumFormProps> = props => {
    const [sum, setSum] = useState(0);
    const [numberOne, setNumberOne] = useState('0');
    const [numberTwo, setNumberTwo] = useState('0');

    const handleChange = (type: number, value: string) => {
        setSum(0);
        if (type === 0) {
            setNumberOne(value);
        } else {
            setNumberTwo(value);
        }
    };

    const sendRequest = () => {
          fetch(`/sum?numberOne=${numberOne}&numberTwo=${numberTwo}` , {
              headers: {
                  'Content-Type': 'application/json'
              }
          })
              .then(response => response.json())
              .then((res) => {
                  setSum(res.sum);
              });
    };

    return (<div className='form-wrapper'>
            <p className='form-text'>Enter the numbers</p>
            <input placeholder='number 1' type="number" onChange={(e) => handleChange(0, e.target.value)}/>
            <input placeholder='number 2' type="number" onChange={(e) => handleChange(1, e.target.value)}/>
            <button onClick={sendRequest}>Sum</button>

            <hr color='#C10708'/>
            <p className='form-text'>Result</p>
            <input className='sum' type="text" value={sum} disabled />
        </div>
    );
};

export default SumForm;