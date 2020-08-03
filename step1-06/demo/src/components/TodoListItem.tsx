import React from 'react';
import { render } from 'enzyme';

export class TodoListItem extends React.Component<any, any> {
  render() {
    const { label, completed } = this.props;

    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} onChange={() => undefined} /> {label}
        </label>
      </li>
    );
  }
}
