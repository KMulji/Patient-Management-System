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
                <td><input  onChange={event => props.handleChange(event)} name="reMedia" /></td>
                <td>Media</td>
                <td><input  onChange={event => props.handleChange(event)} name="leMedia" /></td>

            </tr>
            <tr>
                <td><input  onChange={event => props.handleChange(event)} name="reDisc" /></td>
                <td>Disc</td>
                <td><input onChange={event => props.handleChange(event)} name="leDisc" /></td>
            </tr>
            <tr>
                <td><input  onChange={event => props.handleChange(event)} name="reCD" /></td>
                <td>CD</td>
                <td><input onChange={event => props.handleChange(event)} name="leCD" /></td>
            </tr>
            <tr>
                <td><input onChange={event => props.handleChange(event)} name="reVessels" /></td>
                <td>Vessels</td>
                <td><input onChange={event => props.handleChange(event)} name="leVessels" /></td>
            </tr>
            <tr>
                <td><input onChange={event => props.handleChange(event)} name="reBackground" /></td>
                <td>Background</td>
                <td><input onChange={event => props.handleChange(event)} name="leBackground" /></td>
            </tr>
            <tr>
                <td><input onChange={event => props.handleChange(event)} name="reMacula" /></td>
                <td>macula</td>
                <td><input onChange={event => props.handleChange(event)} name="leMacula" /></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default PostTable