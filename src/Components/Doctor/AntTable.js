import React from "react";
import {Table} from "react-bootstrap";

let AntTable = props =>{
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
                <td><input name="reLids" /></td>
                <td>Lids/Lashes</td>
                <td><input name="leLids" /></td>

            </tr>
            <tr>
                <td><input name="reCornea" /></td>
                <td>Cornea</td>
                <td><input name="leCornea" /></td>
            </tr>
            <tr>
                <td><input name="reCon" /></td>
                <td>Conjunctiva</td>
                <td><input name="leCon" /></td>
            </tr>
            <tr>
                <td><input name="reTears" /></td>
                <td>tears</td>
                <td><input name="leTears" /></td>
            </tr>
            <tr>
                <td><input name="reTon" /></td>
                <td>IOP(Tonopen/GAT)@</td>
                <td><input name="leTon" /></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default AntTable