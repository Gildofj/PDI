import { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import update from "immutability-helper";

import useDraggable from "./useDraggable";

Draggable.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  items: PropTypes.array.isRequired,
  callback: PropTypes.func.isRequired,
  component: PropTypes.node.isRequired,
};

export default function Draggable({
  id,
  index,
  children,
  items,
  callback,
  component: Component,
  ...props
}) {
  const ref = useRef(null);

  const moveItem = useCallback(
    (dragIndex, hoverIndex) => {
      const itemsUpdated = update(items, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, items[dragIndex]],
        ],
      });

      callback(itemsUpdated);
    },
    [items, callback],
  );

  const [drag, drop, handlerId, opacity] = useDraggable({
    idItem: id,
    ref,
    index,
    moveItem,
  });

  drag(drop(ref));
  return (
    <Component
      ref={ref}
      data-handler-id={handlerId}
      className={{ opacity }}
      {...props}
    >
      {children}
    </Component>
  );
}
