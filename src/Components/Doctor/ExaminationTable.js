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
                    <td><input  onChange={event => props.handleChange(event)} name="reSphere"  value={ props.data ? props.data.reSphere:props.examination.reSphere} /></td>
                    <td><input  onChange={event => props.handleChange(event)} name="reCyl"  value={ props.data ? props.data.reCyl:props.examination.reCyl} /></td>
                    <td><  input onChange={event => props.handleChange(event)}   name="reAxis"  value={ props.data ? props.data.reAxis:props.examination.reAxis} /></td>
                    <td><input  onChange={event => props.handleChange(event)} name="reCdVa" value={ props.data ? props.data.reCdVa:props.examination.reCdVa} /></td>
                </tr>
                <tr>
                    <td>LE</td>
                    <td><input   onChange={event => props.handleChange(event)} name="leSphere"  value={ props.data ? props.data.leSphere:props.examination.leSphere} /></td>
                    <td><input  onChange={event => props.handleChange(event)} name="leCyl" value={ props.data ? props.data.leCyl:props.examination.leCyl} /></td>
                    <td><input  onChange={event => props.handleChange(event)} name="leAxis" value={ props.data ? props.data.leAxis:props.examination.leAxis} /></td>
                    <td><input onChange={event => props.handleChange(event)} name="leCdVa" value={ props.data ? props.data.leCdVa:props.examination.leCdVa} /></td>
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
                    <td><input  onChange={event => props.handleChange(event)} name="DCoverTest"  value={ props.data ? props.data.DCoverTest:props.examination.DCoverTest} /></td>
                </tr>
                <tr>
                    <td>Near Cover Test</td>
                    <td><input  onChange={event => props.handleChange(event)} name="NCoverTest"  value={ props.data ? props.data.NCoverTest:props.examination.NCoverTest} /></td>
                </tr>
                <tr>
                    <td>Near point of convergence</td>
                    <td><input  onChange={event => props.handleChange(event)} name="NPOC"  value={ props.data ? props.data.NPOC:props.examination.NPOC} /></td>
                </tr>
                <tr>
                    <td>Motility</td>
                    <td><input  onChange={event => props.handleChange(event)} name="Motility" value={ props.data ? props.data.Motility:props.examination.Motility} /></td>
                </tr>
                <tr>
                    <td>Color Vision Test</td>
                    <td><input  onChange={event => props.handleChange(event)} name="CVT"  value={ props.data ? props.data.CVT:props.examination.CVT} /></td>
                </tr>
                <tr>
                    <td>Stereo test</td>
                    <td><input  onChange={event => props.handleChange(event)} name="stereoTest" value={ props.data ? props.data.stereoTest:props.examination.stereoTest} /></td>
                </tr>
                </tbody>
            </Table>
        </div>


    )
}
export default ExaminationTable
