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
                <td><input  onChange={props.post ? event => props.handleChange(event):()=>""} name="reMedia" value={ props.data ? props.data.reMedia:props.post.reMedia} /></td>
                <td>Media</td>
                <td><input  onChange={props.post ? event => props.handleChange(event):()=>""} name="leMedia" value={ props.data ? props.data.leMedia:props.post.leMedia} /></td>

            </tr>
            <tr>
                <td><input  onChange={props.post ? event => props.handleChange(event):()=>""} name="reDisc" value={ props.data ? props.data.reDisc:props.post.reDisc} /></td>
                <td>Disc</td>
                <td><input onChange={props.post ? event => props.handleChange(event):()=>""} name="leDisc" value={ props.data ? props.data.leDisc:props.post.leDisc} /></td>
            </tr>
            <tr>
                <td><input  onChange={props.post ? event => props.handleChange(event):()=>""} name="reCD" value={ props.data ? props.data.reCD:props.post.reCD} /></td>
                <td>CD</td>
                <td><input onChange={props.post ? event => props.handleChange(event):()=>""} name="leCD" value={ props.data ? props.data.leCD:props.post.leCD} /></td>
            </tr>
            <tr>
                <td><input onChange={props.post ? event => props.handleChange(event):()=>""} name="reVessels" value={ props.data ? props.data.reVessels:props.post.reVessels} /></td>
                <td>Vessels</td>
                <td><input onChange={props.post ? event => props.handleChange(event):()=>""} name="leVessels" value={ props.data ? props.data.leVessels:props.post.leVessels} /></td>
            </tr>
            <tr>
                <td><input onChange={props.post ? event => props.handleChange(event):()=>""} name="reBackground" value={ props.data ? props.data.reBackground:props.post.reBackground} /></td>
                <td>Background</td>
                <td><input onChange={props.post ? event => props.handleChange(event):()=>""} name="leBackground" value={ props.data ? props.data.leBackground:props.post.leBackground} /></td>
            </tr>
            <tr>
                <td><input onChange={props.post ? event => props.handleChange(event):()=>""} name="reMacula" value={ props.data ? props.data.reMacula:props.post.reMacula} /></td>
                <td>macula</td>
                <td><input onChange={props.post ? event => props.handleChange(event):()=>""} name="leMacula" value={ props.data ? props.data.leMacula:props.post.leMacula} /></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default PostTable
