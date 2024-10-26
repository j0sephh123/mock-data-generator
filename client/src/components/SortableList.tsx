import { Droppable, Draggable } from "@hello-pangea/dnd";
import { GripVertical } from "lucide-react";
import { storeProxy } from "../store/store";
import { useSnapshot } from "valtio";

const SortableList = () => {
  const store = useSnapshot(storeProxy);

  return (
    <Droppable droppableId="droppable">
      {({
        droppableProps,
        innerRef: droppableInnerRef,
        placeholder: droppablePlaceholder,
      }) => (
        <div {...droppableProps} ref={droppableInnerRef}>
          {store.items.map((item, index) => (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {({
                dragHandleProps,
                innerRef: draggableInnerRef,
                draggableProps,
              }) => (
                <div ref={draggableInnerRef} {...draggableProps}>
                  <div {...dragHandleProps}>
                    <GripVertical size={20} />
                  </div>

                  {item.content}
                </div>
              )}
            </Draggable>
          ))}
          {droppablePlaceholder}
        </div>
      )}
    </Droppable>
  );
};

export default SortableList;
