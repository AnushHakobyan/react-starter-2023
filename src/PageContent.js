import Button from './Button/Button';
import Table from "./Table/Table";

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

const PageContent = () => {
    return (
        <div id="mainContent">
            <h1>PageContent</h1>
            <Button
                label="Primary"
                variant="primary"
                className="buttonExample"
            />
            <Button
                label="Secondary"
                variant="secondary"
            />
            <Table columns={columns} data={transactions} />
        </div>
    );
}

export default PageContent;
