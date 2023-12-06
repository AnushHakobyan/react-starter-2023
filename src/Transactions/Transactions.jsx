import React, { useState, useContext } from 'react';
import UserContext from '../UserContext/UserContext';
import Table from "../Table/Table";
import NewTransactionPanel from "./NewTransactionPanel";
import NewTransactionForm from "./NewTransactionForm";


const transactions = [
    {
        date: '2021-01-01',
        id: 1,
        invoiceId: '1234567890',
        name: 'iPhone',
        type: 'Electronics',
        price: '$999.99',
    }
];

const columns = [
    {
        name: 'Name',
        key: 'name',
    },
    {
        name: 'Type',
        key: 'type',
    },
    {
        name: 'Price',
        key: 'price',
    },
    {
        name: 'Date',
        key: 'date',
    },
    {
        name: 'Invoice ID',
        key: 'invoiceId',
    },
];

const Transactions = () => {
    const [isClicked, setIsClicked] = useState(false);
    const user = useContext(UserContext);

    console.log(user);

    return (
        <React.Fragment >
            <NewTransactionPanel isClicked={isClicked} onClickHandler={setIsClicked} />
            {isClicked && <NewTransactionForm />}
            <Table columns={columns} data={transactions} />
        </React.Fragment>
    );
};

export default Transactions;
