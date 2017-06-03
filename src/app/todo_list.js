var React = require("react");

//require needed css
require('./css/todoitem.css');

//create component
var TodoList = React.createClass({

    render: function () {
        return(
            <li>
                <div className="todo-item">
                    <span className="item-name">{this.props.item}</span>
                    <span ><a className="item-delete" onClick={this.deleteItem}><button>x</button></a></span>
                </div>
            </li>
        );
    },
    
    //create custom function
    deleteItem: function () {
        this.props.updateTasks(this.props.item)
    }

});

module.exports = TodoList;