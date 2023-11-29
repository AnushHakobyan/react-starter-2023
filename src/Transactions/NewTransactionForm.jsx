import { useState } from 'react';
import Button from '../Button/Button';

// Controlled & Uncontrolled Components
const NewTransactionForm = () => {
    const [ name, setName ] = useState('');
    const [ type, setType ] = useState('');
    const [ price, setPrice ] = useState(0);

    return (
        <form className="">
            <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />
            <input
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <Button variant="secondary" label="Show" onClickHandler={() => {
                alert(JSON.stringify({name, type, price}));
            }} />
        </form>
    );
}

export default NewTransactionForm;
