import React from "react";
import {Table} from "react-bootstrap";

let PostTable = props =>{
    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Right Eye</th>
                <th></th>
                <th>Left Eye</th>

            </tr>
            </thead>
            <tbody>
            <tr>
                <td><input name="reMedia" /></td>
                <td>Media</td>
                <td><input name="leMedia" /></td>

            </tr>
            <tr>
                <td><input name="reDisc" /></td>
                <td>Disc</td>
                <td><input name="leDisc" /></td>
            </tr>
            <tr>
                <td><input name="reCD" /></td>
                <td>CD</td>
                <td><input name="leCD" /></td>
            </tr>
            <tr>
                <td><input name="reVessels" /></td>
                <td>Vessels</td>
                <td><input name="leVessels" /></td>
            </tr>
            <tr>
                <td><input name="reBackground" /></td>
                <td>Background</td>
                <td><input name="leBackground" /></td>
            </tr>
            <tr>
                <td><input name="reMacula" /></td>
                <td>macula</td>
                <td><input name="leMacula" /></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default PostTable