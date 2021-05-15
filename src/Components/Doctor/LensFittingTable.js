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
                <td><input onChange={event => props.handleChange(event)} name="reDesign" /></td>
                <td><input onChange={event => props.handleChange(event)} name="reBase" /></td>
                <td><input onChange={event => props.handleChange(event)} name="rePower" /></td>
                <td><input onChange={event => props.handleChange(event)} name="reDiameter" /></td>
                <td><input onChange={event => props.handleChange(event)} name="reBCVA" /></td>
            </tr>
            <tr>
                <td>LE</td>
                <td><input onChange={event => props.handleChange(event)} name="leDesign" /></td>
                <td><input onChange={event => props.handleChange(event)} name="leBase" /></td>
                <td><input onChange={event => props.handleChange(event)} name="lePower" /></td>
                <td><input onChange={event => props.handleChange(event)} name="leDiameter" /></td>
                <td><input onChange={event => props.handleChange(event)} name="leBCVA" /></td>
            </tr>

            </tbody>
        </Table>
    )
}
export default LensFittingTable