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
                <td><input onChange={props.real ? event => props.handleChange(event):()=>""} name="reLids"  value={props.data ? props.data.reLids:props.real.reLids} /></td>
                <td>Lids/Lashes</td>
                <td><input  onChange={props.real ? event => props.handleChange(event):()=>""} name="leLids" value={props.data ? props.data.leLids:props.real.leLids} /></td>

            </tr>
            <tr>
                <td><input  onChange={props.real ? event => props.handleChange(event):()=>""} name="reCornea"  value={props.data ? props.data.reCornea:props.real.reCornea} /></td>
                <td>Cornea</td>
                <td><input  onChange={props.real ? event => props.handleChange(event):()=>""} name="leCornea"  value={props.data ? props.data.leCornea:props.real.leCornea} /></td>
            </tr>
            <tr>
                <td><input onChange={props.real ? event => props.handleChange(event):()=>""} name="reCon"  value={props.data ? props.data.reCon:props.real.reCon} /></td>
                <td>Conjunctiva</td>
                <td><input onChange={props.real ? event => props.handleChange(event):()=>""} name="leCon"  value={props.data ? props.data.leCon:props.real.leCon} /></td>
            </tr>
            <tr>
                <td><input onChange={props.real ? event => props.handleChange(event):()=>""} name="reTears" value={props.data ? props.data.reTears:props.real.reTears} /></td>
                <td>tears</td>
                <td><input onChange={props.real ? event => props.handleChange(event):()=>""} name="leTears" value={props.data ? props.data.leTears:props.real.leTears} /></td>
            </tr>
            <tr>
                <td><input onChange={props.real ? event => props.handleChange(event):()=>""} name="reTon" value={props.data ? props.data.reTon:props.real.reTon} /></td>
                <td>IOP(Tonopen/GAT)@</td>
                <td><input onChange={props.real ? event => props.handleChange(event):()=>""} name="leTon" value={props.data ? props.data.leTon:props.real.leTon} /></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default AntTable
