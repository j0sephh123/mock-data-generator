import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { PropsWithChildren } from "react";
import { fieldsActions } from "../store/fields/actions";

export default function DndProvider({ children }: PropsWithChildren) {
  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    fieldsActions.handleDrag(destination.index, source.index);
  };

  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
}
