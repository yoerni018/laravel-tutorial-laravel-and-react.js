import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Add from "./Add";
import Listing from "./Listing";

function Index() {
    return (
       <div>
          <Router>
               <div className="mt-2 mb-2">

                   <Link to="/category" className="btn btn-primary mr-2">Listing</Link>
                   <Link to="/category/add" className="btn btn-primary">Add</Link>

                   <Route exact path="/category" component={Listing}></Route>
                   <Route exact path="/category/add" component={Add  }></Route>
               </div>
          </Router>
       </div>
    );
}

export default Index;


