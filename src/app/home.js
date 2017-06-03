var React = require('react');

import {Link} from 'react-router';

//create component
var HomePage = React.createClass({
   render: function () {
       return(
           <div>
               <h2>My Todo App</h2>
               <button className="btn btn-success" ><Link to={"/todoApp"}>My Tasks</Link></button>

           </div>
       );
   }
});

module.exports = HomePage;