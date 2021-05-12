import React from "react";
import {Table} from "react-bootstrap";

let AutoRefractionTable = props =>{
    return(
        <Table striped bordered hover>
            <thead>
            <tr>
                <th></th>
                <th>sphere</th>
                <th>cyl</th>
                <th>axis</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>RE</td>
                <td><input name ="reSphere"  onChange={event => props.handleChange(event)} /></td>
                <td><input name="reCyl"   onChange={event => props.handleChange(event)} /></td>
                <td><input name = "reAxis"  onChange={event => props.handleChange(event)} /></td>
            </tr>
            <tr>
                <td>LE</td>
                <td><input name ="leSphere"  onChange={event => props.handleChange(event)} /></td>
                <td><input name="leCyl"  onChange={event => props.handleChange(event)} /></td>
                <td><input name = "leAxis"  onChange={event => props.handleChange(event)} /></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default AutoRefractionTable