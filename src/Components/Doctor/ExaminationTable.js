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
                    <td><input name="reSphere" /></td>
                    <td><input name="reCyl"/></td>
                    <td><input name="reAxis"/></td>
                    <td><input name="reCdVa"/></td>
                </tr>
                <tr>
                    <td>LE</td>
                    <td><input name="leSphere" /></td>
                    <td><input name="leCyl"/></td>
                    <td><input name="leAxis"/></td>
                    <td><input name="leCdVa"/></td>
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
                    <td><input name="DCoverTest" /></td>
                </tr>
                <tr>
                    <td>Near Cover Test</td>
                    <td><input name="NCoverTest" /></td>
                </tr>
                <tr>
                    <td>Near point of convergence</td>
                    <td><input name="NPOC" /></td>
                </tr>
                <tr>
                    <td>Motility</td>
                    <td><input name="Motility" /></td>
                </tr>
                <tr>
                    <td>Color Vision Test</td>
                    <td><input name="CVT" /></td>
                </tr>
                <tr>
                    <td>Stereo test</td>
                    <td><input name="stereoTest" /></td>
                </tr>
                </tbody>
            </Table>
        </div>


    )
}
export default ExaminationTable