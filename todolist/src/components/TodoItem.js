import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  // return false 면 컴포넌트 렌더링 안함
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.checked != nextProps.checked;
  }

  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;
    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(id);
          }}
        >
          삭제하기
        </div>
        <div className={`todo-text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
        {checked && <div className="check-mark">✓</div>}
      </div>
    );
  }
}

export default TodoItem;
