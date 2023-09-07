import React from 'react'

export const ResultTable = () => {
  return (
    <div>
        <table>
            <thead className="table-header">
                <tr className="table-row">
                    <td>
                        Name
                    </td>
                    <td>
                        Questions Attempted
                    </td>
                    <td>
                        Total Points
                    </td>

                </tr>
            </thead>
            <tbody >
                <tr className="table-body">
                    <td>Anwesha</td>
                    <td>03</td>
                    <td>20</td>

                </tr>
            </tbody>
        </table>
    </div>
  )
}
