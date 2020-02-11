import React, { Component } from "react";
import axios from 'axios';


export default class ViewComponent extends Component {
    constructor(){
        super();
        this.state = {
            personList: []
        }
    }

    componentDidMount = () => {
        console.log("Mounting app");
        axios.get("http://localhost:8080/rest/api/fetchAll")
        .then(res => {
            const persons = res.data.person;
            this.setState({ personList: persons });
        })
        .catch(error => {
            console.log(error)
        });
    }

    deletePerson = (id, index) => {
        console.log(index + "Delete request for "+id);
        
        axios.delete("http://localhost:8080/rest/api/deleteById/"+id)
        .then(response => {
            console.log("deleted");
            let person = this.state.personList.splice(index, 1);
            this.setState({personList: person});
        }).catch(error => {
            console.log(error)
        });
    }
    updatePerson = (id) => {
        console.log(id + " to Update");
        alert("Sorry, Update is not implemented");
    }

    render = () => {
        let personArr = this.state.personList;
        return (
            <div className="container">
                <table className="table">  
                    <thead>  
                        <tr className="test">
                            <th>ID</th>  
                            <th>First Name</th>  
                            <th>Last Name</th>  
                            <th>Age</th>
                            <th>Fav Color</th>  
                            <th>Hobbies</th>
                            <th>Action </th> 
                        </tr>  
                    </thead>  
                        {
                            personArr.map(
                                (person, index) => 
                                <tr key={index}>
                                    <td>{person.id}</td>
                                    <td>{person.first_name}</td>
                                    <td>{person.last_name}</td>
                                    <td>{person.age}</td>
                                    <td>{person.favourite_color}</td>
                                    <td>{person.hobby != null ? person.hobby.toString() : null}</td>
                                    <td>
                                        <button className="action" onClick={() => this.deletePerson(person.id, index)}> Delete</button> 
                                        <button className="action blocked" onClick={() => this.updatePerson(person.id)}> Update </button>
                                    </td>
                                </tr>
                            )
                        }
                    <tbody>  
                        
                    </tbody>
                </table>
            </div>
        );
    }
}