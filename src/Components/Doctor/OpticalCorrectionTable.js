import React, {useState} from "react";
import {Table} from "react-bootstrap";

let OpticalCorrectionTable = props =>{
    console.log(props.hasSpecs)
    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th> Does Patient have glasses ?YES<input type="radio" name="hasSpecs" value={false} onChange={(event => props.handleSpecs(event))} />  NO <input type="radio" name="hasSpecs" value={true} onChange={(event => props.handleSpecs(event))} /> </th>
                <th>Unaided VA</th>
                <th>sphere</th>
                <th>cyl</th>
                <th>axis</th>
                <th>VA</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>RE</td>
                <td><input name ="reUnaidedVa" onChange={event => props.handleChange(event)} disabled={props.hasSpecs} /></td>
                <td><input name ="reSphere" onChange={event => props.handleChange(event)}  disabled={props.hasSpecs} /></td>
                <td><input name ="reCyl" onChange={event => props.handleChange(event)}  disabled={props.hasSpecs} /></td>
                <td><input name ="reAxis" onChange={event => props.handleChange(event)}  disabled={props.hasSpecs} /></td>
                <td><input name ="reVa" onChange={event => props.handleChange(event)} disabled={props.hasSpecs} /></td>
            </tr>
            <tr>
                <td>LE</td>
                <td><input name ="leUnaidedVA" onChange={event => props.handleChange(event)} disabled={props.hasSpecs} /></td>
                <td><input name ="leSphere"  onChange={event => props.handleChange(event)}  disabled={props.hasSpecs} /></td>
                <td><input name ="leCyl"  onChange={event => props.handleChange(event)} disabled={props.hasSpecs} /></td>
                <td><input name ="leAxis"  onChange={event => props.handleChange(event)} disabled={props.hasSpecs} /></td>
                <td><input name ="leVa"  onChange={event => props.handleChange(event)} disabled={props.hasSpecs} /></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default OpticalCorrectionTable