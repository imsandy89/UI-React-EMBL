import React, { Component } from 'react';
import axios from 'axios';

export default class CreateComponent extends Component{
    constructor(){
        super();
        this.state = {
            first_name: "",
            last_name: "",
            age: 0,
            favourite_color: "",
            hobbies: ""
        }
    }

    updateValue = (e) => {
        console.log(e);
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitFormData = () => {
        //event.preventDefault();
        let hobbiesArr = new Array();
        let hobbies = this.state.hobbies.trim();
        if(hobbies.indexOf(',') > 0){
            hobbiesArr.push(hobbies.split(","));
        }
        const person = {
            "first_name": this.state.first_name,
            "last_name": this.state.last_name,
            "age": this.state.age,
            "favourite_color": this.state.favourite_color,
            "hobby": hobbiesArr.toString
        };

        axios.post("http://localhost:8080/rest/api/createPerson", person)
        .then(response => {
            console.log(response);            
        }).catch(error => {
            console.log(error)
        });

    }

    render = () => {
        return (
            <div className="formContainer">
                <h2 className="heading">Create Person</h2>
                <form>
                    <table className="formContainer">
                        <tbody>
                        <tr className="form-group">
                            <td className="lable"><label>First Name: </label></td>
                            <td className="data"><input type="text" className="form-control" value={this.state.first_name} name="first_name" onChange={this.updateValue}></input></td>
                        </tr>

                        <tr className="form-group">
                            <td className="lable"><label>Last Name: </label></td>
                            <td className="data"><input type="text" className="form-control" value={this.state.last_name} name="last_name" onChange={this.updateValue}></input></td>
                        </tr>

                        <tr className="form-group">
                            <td className="lable"><label>Age: </label></td>
                            <td className="data">
                                <input type="number" className="form-control" value={this.state.age} name="age" onChange={this.updateValue}></input>
                            </td>
                        </tr>

                        <tr className="form-group">
                            <td className="lable"><label>Favourite Color: </label></td>
                            <td className="data">
                                <input type="text" className="form-control" value={this.state.favourite_color} name="favourite_color" onChange={this.updateValue}></input>
                            </td>
                        </tr>

                        <tr className="form-group">
                            <td className="lable"><label>Hobbies: </label></td>
                            <td className="data">
                                <input type="text" className="form-control" value={this.state.hobbies} name="hobbies" onChange={this.updateValue}></input>
                            </td>
                        </tr>
                        <tr className="form-group">
                            <button className="success" onClick={() => this.submitFormData()}> Submit </button>
                        </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        );
    }
}