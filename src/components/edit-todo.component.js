import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
export default class EditTodo extends Component {
  constructor(props) {
    super(props);

    this.onChangetodoDescription = this.onChangetodoDescription.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onSubmit = this.onUpdate.bind(this);

    this.state = {
      todo_description: "",
      todo_responsible: "",
      todo_priority: "",
      todo_completed: false,
    };
  }

  onChangetodoDescription(e) {
    this.setState({
      todo_description: e.target.value,
    });
  }
  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value,
    });
  }

  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value,
    });
  }

  onUpdate(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`Todo Description: ${this.state.todo_description}`);
    console.log(`Todo Responsible: ${this.state.todo_responsible}`);
    console.log(`Todo Priority: ${this.state.todo_priority}`);

    const newTodo = {
      todo_description: this.state.todo_description,
      todo_responsible: this.state.todo_responsible,
      todo_priority: this.state.todo_priority,
      todo_completed: this.state.todo_completed,
    };
  }

  render() {
    return (
      <div>
        <h3> Update Todo</h3>

        <Form onSubmit={this.onUpdate}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" onChange={this.onChangetodoDescription} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Responsible</Form.Label>
            <Form.Control type="text" onChange={this.onChangeTodoResponsible} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              inline
              type="radio"
              label="Low"
              value="low"
              checked={this.state.todo_priority === "low"}
              onChange={this.onChangeTodoPriority}
            />
            <Form.Check
              inline
              type="radio"
              label="Medium"
              value="medium"
              checked={this.state.todo_priority === "medium"}
              onChange={this.onChangeTodoPriority}
            />
            <Form.Check
              inline
              type="radio"
              label="High"
              value="high"
              checked={this.state.todo_priority === "high"}
              onChange={this.onChangeTodoPriority}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update Todo
          </Button>
        </Form>
      </div>
    );
  }
}
