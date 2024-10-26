/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { GripVertical } from "lucide-react";

interface Item {
  id: string;
  content: string;
}

const SortableList = () => {
  const [items, setItems] = useState<Item[]>([
    { id: "1", content: "Review pull request #123" },
    { id: "2", content: "Update documentation" },
    { id: "3", content: "Fix login page bug" },
    { id: "4", content: "Add new feature test" },
    { id: "5", content: "Deploy to production" },
  ]);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const newItems = Array.from(items);
    const [reorderedItem] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, reorderedItem);

    setItems(newItems);
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-xl font-semibold mb-4">Task List</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-2"
            >
              {items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      className={`
                        group flex items-center gap-3 p-4 bg-white rounded-lg border 
                        ${snapshot.isDragging ? "shadow-lg" : "shadow-sm"}
                        ${
                          snapshot.isDragging
                            ? "bg-gray-50"
                            : "hover:bg-gray-50"
                        }
                        transition-all duration-200
                      `}
                    >
                      {/* Drag Handle */}
                      <div
                        {...provided.dragHandleProps}
                        className="flex items-center touch-none"
                      >
                        <GripVertical
                          size={20}
                          className="text-gray-400 group-hover:text-gray-600"
                        />
                      </div>

                      {/* Content */}
                      <span className="flex-1">{item.content}</span>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default SortableList;
