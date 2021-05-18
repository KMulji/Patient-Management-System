import React from "react";
import {Table} from "react-bootstrap";

let AutoRefractionTable = props =>{
    console.log(props.data)
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
                <td><input name ="reSphere"  onChange={event => props.handleChange(event)} value={ props.data ? props.data.reSphere:props.autoRefraction.reSphere} /></td>
                <td><input name="reCyl"   onChange={event => props.handleChange(event)} value={ props.data ? props.data.reCyl:props.autoRefraction.reCyl} /></td>
                <td><input name = "reAxis"  onChange={event => props.handleChange(event)} value={ props.data ? props.data.reAxis:props.autoRefraction.reAxis} /></td>
            </tr>
            <tr>
                <td>LE</td>
                <td><input name ="leSphere"  onChange={event => props.handleChange(event)} value={ props.data ? props.data.leSphere:props.leSphere}  /></td>
                <td><input name="leCyl"  onChange={event => props.handleChange(event)} value={ props.data ? props.data.leCyl:props.autoRefraction.leCyl} /></td>
                <td><input name = "leAxis"  onChange={event => props.handleChange(event)} value={ props.data ? props.data.leAxis:props.autoRefraction.leAxis} /></td>
            </tr>
            </tbody>
        </Table>
    )
}
export default AutoRefractionTable