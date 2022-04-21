import React from 'react'
import './ResultTable.css';
import { Table } from 'react-bootstrap';

const ResultTable = (props) => {
    // console.log(props);
    const {semMarks} = props;
    // console.table(semMarks);
  return (
    <div className='flex absolute-center m-3'>
        <Table striped bordered hover size="md" variant="dark">
            <thead>
                <tr>
                <th>Subject Name</th>
                <th>Internal (50)</th>
                <th>Extenal (100)</th>
                <th>Total </th>
                </tr>
            </thead>
            <tbody>
                {
                    semMarks.map((item, i) =>{
                        return(
                            <tr>
                                <td>{item.subject}</td>
                                <td>{item.internal}</td>
                                <td>{item.external}</td>
                                <td>{item.external + item.internal}</td>
                            </tr>
                        )
                    })
                }
                <tr>
            </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default ResultTable

