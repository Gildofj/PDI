import { useRef } from "react";
import PropTypes from "prop-types";
import useDraggable from "./useDraggable";

Draggable.propTypes = {
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
  component: PropTypes.node.isRequired,
};

export default function Draggable({
  index,
  children,
  items,
  callback,
  component: Component,
  ...props
}) {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [dragStart, dragEnter, drop] = useDraggable({
    dragItem,
    dragOverItem,
    items,
    callback,
  });

  return (
    <Component
      draggable
      key={index}
      onDragStart={(e) => dragStart(e, index)}
      onDragEnter={(e) => dragEnter(e, index)}
      onDragEnd={drop}
      {...props}
    >
      {children}
    </Component>
  );
}
