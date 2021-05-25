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
                <td><input name="reCld"  onChange={props.currentContactLens ? event => props.handleChange(event):()=>""}  value={ props.data ? props.data.reCld:props.currentContactLens.reCld} /></td>
                <td><input  name="reVA"  onChange={props.currentContactLens ? event => props.handleChange(event):()=>""}  value={ props.data ? props.data.reVA:props.currentContactLens.reVA} /></td>
            </tr>
            <tr>
                <td>LE</td>
                <td><input name="leCld"  onChange={props.currentContactLens ? event => props.handleChange(event):()=>""}  value={ props.data ? props.data.leCld:props.currentContactLens.leCld} /></td>
                <td><input name="leVA"  onChange={props.currentContactLens ? event => props.handleChange(event):()=>""}  value={ props.data ? props.data.leVA:props.currentContactLens.leVA} /></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default ContactLensTable
