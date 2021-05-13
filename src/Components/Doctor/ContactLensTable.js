import React from "react";
import {Table} from "react-bootstrap";
let ContactLensTable  = props =>{
    return(


        <Table striped bordered hover>
            <thead>
            <tr>
                <th></th>
                <th>Contact Lens Design</th>
                <th>Corrected Distance VA</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>RE</td>
                <td><input name="reCld"  onChange={event => props.handleChange(event)} /></td>
                <td><input  name="reVA"  onChange={event => props.handleChange(event)} /></td>
            </tr>
            <tr>
                <td>LE</td>
                <td><input name="leCld"  onChange={event => props.handleChange(event)} /></td>
                <td><input name="leVA"  onChange={event => props.handleChange(event)} /></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default ContactLensTable