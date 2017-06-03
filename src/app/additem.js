var React = require('react');

//add required css
require('./css/additem.css');

//create component
var AddItem = React.createClass({
   render: function () {
       return(
            <form id="add-todo" onSubmit={this.addTask}>
                <input type="text" ref="newTask" id="addTask" required/>
                <input type="submit" value="Add me!"/>
            </form>
       );
   },

    //custom function
    addTask: function (e) {
        e.preventDefault();
        //console.log(this.refs.newTask.value);
        this.props.addMe(this.refs.newTask.value);
        this.refs.newTask.value = "";
    }

});

module.exports = AddItem;