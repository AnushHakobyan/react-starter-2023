
const createOnClickHandler = (name) => {
    return function f (e) {
        console.log(name);
    }
}

const Table = ({ columns, data }) => {

    return (
        <table className="customTable">
            <thead>
                <tr>
                    {
                        columns.map(({ name }) => (
                            <th key={name}>{name}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((dataRow) => {
                        return (
                            <tr key={dataRow.id}>
                                {
                                    columns.map(({ key, name }) => (
                                        <td onClick={createOnClickHandler(name)} key={dataRow[key]}>{dataRow[key]}</td>
                                    ))
                                }
                            </tr>
                        )

                    })
                }
            </tbody>
        </table>
    )
}

export default Table;
