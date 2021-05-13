import React from "react";

import {Table} from "react-bootstrap";

let LensFittingTable = props =>{
    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th></th>
                <th>CL type & design</th>
                <th>Base Curve</th>
                <th>power</th>
                <th>diameter</th>
                <th>BCVA(LogMAR)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>RE</td>
                <td><input name="reDesign" /></td>
                <td><input name="reBase" /></td>
                <td><input name="rePower" /></td>
                <td><input name="reDiameter" /></td>
                <td><input name="reBCVA" /></td>
            </tr>
            <tr>
                <td>LE</td>
                <td><input name="leDesign" /></td>
                <td><input name="leBase" /></td>
                <td><input name="lePower" /></td>
                <td><input name="leDiameter" /></td>
                <td><input name="leBCVA" /></td>
            </tr>

            </tbody>
        </Table>
    )
}
export default LensFittingTable