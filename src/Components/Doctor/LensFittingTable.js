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
                <td><input onChange={props.lensFitting ? event => props.handleChange(event):()=>""} name="reDesign" value={ props.data ? props.data.reDesign:props.lensFitting.reDesign} /></td>
                <td><input onChange={props.lensFitting ? event => props.handleChange(event):()=>""} name="reBase" value={ props.data ? props.data.reBase:props.lensFitting.reBase} /></td>
                <td><input onChange={props.lensFitting ? event => props.handleChange(event):()=>""} name="rePower" value={ props.data ? props.data.rePower:props.lensFitting.rePower} /></td>
                <td><input onChange={props.lensFitting ? event => props.handleChange(event):()=>""} name="reDiameter" value={ props.data ? props.data.reDiameter:props.lensFitting.reDiameter} /></td>
                <td><input onChange={props.lensFitting ? event => props.handleChange(event):()=>""} name="reBCVA" value={ props.data ? props.data.reBCVA:props.lensFitting.reBCVA} /></td>
            </tr>
            <tr>
                <td>LE</td>
                <td><input onChange={props.lensFitting ? event => props.handleChange(event):()=>""} name="leDesign" value={ props.data ? props.data.leDesign:props.lensFitting.leDesign} /></td>
                <td><input onChange={props.lensFitting ? event => props.handleChange(event):()=>""} name="leBase" value={ props.data ? props.data.leBase:props.lensFitting.leBase} /></td>
                <td><input onChange={props.lensFitting ? event => props.handleChange(event):()=>""} name="lePower" value={ props.data ? props.data.lePower:props.lensFitting.lePower} /></td>
                <td><input onChange={props.lensFitting ? event => props.handleChange(event):()=>""} name="leDiameter" value={ props.data ? props.data.leDiameter:props.lensFitting.leDiameter} /></td>
                <td><input onChange={props.lensFitting ? event => props.handleChange(event):()=>""} name="leBCVA" value={ props.data ? props.data.leBCVA:props.lensFitting.leBCVA} /></td>
            </tr>

            </tbody>
        </Table>
    )
}
export default LensFittingTable
