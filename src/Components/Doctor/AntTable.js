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
                <td><input onChange={event => props.handleChange(event)} name="reLids" /></td>
                <td>Lids/Lashes</td>
                <td><input  onChange={event => props.handleChange(event)} name="leLids" /></td>

            </tr>
            <tr>
                <td><input  onChange={event => props.handleChange(event)} name="reCornea" /></td>
                <td>Cornea</td>
                <td><input  onChange={event => props.handleChange(event)} name="leCornea" /></td>
            </tr>
            <tr>
                <td><input onChange={event => props.handleChange(event)} name="reCon" /></td>
                <td>Conjunctiva</td>
                <td><input onChange={event => props.handleChange(event)} name="leCon" /></td>
            </tr>
            <tr>
                <td><input onChange={event => props.handleChange(event)} name="reTears" /></td>
                <td>tears</td>
                <td><input onChange={event => props.handleChange(event)} name="leTears" /></td>
            </tr>
            <tr>
                <td><input onChange={event => props.handleChange(event)} name="reTon" /></td>
                <td>IOP(Tonopen/GAT)@</td>
                <td><input onChange={event => props.handleChange(event)} name="leTon" /></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default AntTable