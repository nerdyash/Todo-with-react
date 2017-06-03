var React = require("react");
var ReactD0M = require("react-dom");

//require css file as we need
require('./css/index.css');

//require other js files
var TodoList = require("./todo_list");
var AddItem = require("./additem");
var HomePage = require("./home");
//routers
import {Router, Route, browserHistory, Link} from 'react-router';

//create main component with route
var App = React.createClass({
   render: function () {
       return(
           <Router history={browserHistory}>
               <Route path={'/'} component={HomePage}></Route>
               <Route path={'/todoApp'} component={TodoApp}></Route>
           </Router>
       );
   }
});

//Create Component

var TodoApp = React.createClass({

    getInitialState: function () {
        return {
            tasks: ["Reading", "Coding", "Movie", "Playing"]
        }
    },//Initial state method

   render: function () {

       var tasks = this.state.tasks;// local copy to tasks array

       tasks = tasks.map(function (item, index) {
            return(
                <TodoList item={item} key={index} updateTasks={this.updateTasks} />
            );
       }.bind(this));// manipulating array and display tasks

       return(
            <div id="todo-list">
                <ul>
                    {tasks}
                </ul>
                <AddItem addMe = {this.addItem}/>
            </div>
       );//HTML return
   },//render method

    //custom functions
    updateTasks: function (item) {
        var updatedTasks = this.state.tasks.filter(function (val, index) {
            return item != val;
        });

        this.setState({
           tasks: updatedTasks
        });
    },

    addItem: function (item) {
        var addTask = this.state.tasks;
        addTask.push(item);
        this.setState({
           tasks: addTask
        });
    }

});

//Render the component
ReactD0M.render(<App />, document.getElementById("todo-wrapper"));