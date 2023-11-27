

const Table = ({ columns, data }) => {
    return (
        <table>
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
                                    columns.map(({ key }) => (
                                        <td key={dataRow[key]}>{dataRow[key]}</td>
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
