import React, { Component } from "react";
import { connect } from "react-redux";
import { loadTasks } from "../store/tasks/taskSlice";

class TaskClass extends Component {
  // this.props.tasks
  componentDidMount() {
    this.props.loadTasks();
  }
  render() {
    return (
      <div>
        {this.props.tasks.map((x) => (
          <p key={x.id}>{x.tasks}</p>
        ))}
      </div>
    );
  }
}

// tasks: state.tasks.tasks
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks.tasks,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadTasks: () => dispatch(loadTasks),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskClass);
// export default TaskClass;
