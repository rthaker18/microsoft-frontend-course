import React from 'react';

export const TodoFooter = (props: any) => {
  const itemCount = Object.keys(props.todos).filter((id) => !props.todos[id].completed).length;
  return (
    <footer>
      <span>
        {itemCount} {itemCount === 1 ? 'item' : 'items'} left
      </span>
      <button className="submit">Clear Completed</button>
    </footer>
  );
};
