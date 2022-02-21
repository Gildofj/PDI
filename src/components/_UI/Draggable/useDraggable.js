import { useDrag, useDrop } from "react-dnd";

const ItemTypes = {
  CARD: "card",
};

export default function useDraggable({ idItem, ref, index, moveItem }) {
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect: (monitor) => ({ handlerId: monitor.getHandlerId() }),
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Não substituir itens por eles mesmo
      if (dragIndex === hoverIndex) {
        return;
      }

      // Para entender de forma mais detalhada essa lógica basta entrar
      // em https://codesandbox.io/s/github/react-dnd/react-dnd/tree/gh-pages/examples_js/04-sortable/simple?from-embed=&file=/src/Card.jsx
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (
        (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) |
        (dragIndex > hoverIndex && hoverClientY > hoverMiddleY)
      ) {
        return;
      }

      moveItem(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => ({ idItem, index }),
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
  });

  const opacity = isDragging ? 0 : 1;

  return [drag, drop, handlerId, opacity];
}
