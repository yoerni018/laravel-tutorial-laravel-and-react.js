import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Listing extends Component {

    constructor() {
        super();
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        console.log("componentDidMount");
        axios.get('http://127.0.0.1:8000/category').then((response) => {
            console.log(response);
            //this.state.categories = response.data;
            this.setState({ categories: response.data });
        });
    }

    render() {
        return (
            <div>

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Category name</th>
                            <th scope="col">Status</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Update At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.categories.map( category => {
                                return (
                                    <tr>
                                        <th scope="row">{category.id}</th>
                                        <td>{category.name}</td>
                                        <td>{category.active}</td>
                                        <td>{category.created_at}</td>
                                        <td>{category.updated_at}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        );

    }

}



