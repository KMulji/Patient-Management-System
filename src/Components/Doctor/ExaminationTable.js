import React from "react";
import {Table} from "react-bootstrap";

let ExaminationTable = (props) =>{
    return(
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th></th>
                    <th>Sphere</th>
                    <th>cyl</th>
                    <th>axis</th>
                    <th>Corrected Distance VA</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>RE</td>
                    <td><input  onChange={event => props.handleChange(event)} name="reSphere" /></td>
                    <td><input  onChange={event => props.handleChange(event)} name="reCyl"/></td>
                    <td><  input onChange={event => props.handleChange(event)}   name="reAxis"/></td>
                    <td><input  onChange={event => props.handleChange(event)} name="reCdVa"/></td>
                </tr>
                <tr>
                    <td>LE</td>
                    <td><input   onChange={event => props.handleChange(event)} name="leSphere" /></td>
                    <td><input  onChange={event => props.handleChange(event)} name="leCyl"/></td>
                    <td><input  onChange={event => props.handleChange(event)} name="leAxis"/></td>
                    <td><input onChange={event => props.handleChange(event)} name="leCdVa"/></td>
                </tr>
                </tbody>
            </Table>
            <br/>
            <br/>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Distance Cover Test</td>
                    <td><input  onChange={event => props.handleChange(event)} name="DCoverTest" /></td>
                </tr>
                <tr>
                    <td>Near Cover Test</td>
                    <td><input  onChange={event => props.handleChange(event)} name="NCoverTest" /></td>
                </tr>
                <tr>
                    <td>Near point of convergence</td>
                    <td><input  onChange={event => props.handleChange(event)} name="NPOC" /></td>
                </tr>
                <tr>
                    <td>Motility</td>
                    <td><input  onChange={event => props.handleChange(event)} name="Motility" /></td>
                </tr>
                <tr>
                    <td>Color Vision Test</td>
                    <td><input  onChange={event => props.handleChange(event)} name="CVT" /></td>
                </tr>
                <tr>
                    <td>Stereo test</td>
                    <td><input  onChange={event => props.handleChange(event)} name="stereoTest" /></td>
                </tr>
                </tbody>
            </Table>
        </div>


    )
}
export default ExaminationTable