import React from 'react';
import ReactDOM from 'react-dom';

function Add() {
    return (
        <div>
            <form>

                <div class="form-group">
                    <label for="txtName">Category name</label>
                    <input type="text" class="form-control" id="txtName" name="name" placeholder="Enter category name" />
                    <small id="txtNameHelp" class="form-text text-muted"></small>
                </div>
               
               
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Add;


