import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Add extends Component {

    constructor(){
        super();
        this.state={
           category_name:'',     
        };
    }

    

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label>Category name</label>
                        <input type="text" className="form-control" id="txtName" name="name" placeholder="Enter category name" />
                        <small id="txtNameHelp" className="form-text text-muted"></small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }

}



