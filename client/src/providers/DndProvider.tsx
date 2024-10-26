import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { PropsWithChildren } from "react";
import { useSnapshot } from "valtio";
import { storeProxy } from "../store/store";

export default function DndProvider({ children }: PropsWithChildren) {
  const store = useSnapshot(storeProxy);

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) return;

    const newItems = Array.from(store.items);
    const [reorderedItem] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, reorderedItem);

    storeProxy.items = newItems;
  };

  return <DragDropContext onDragEnd={onDragEnd}>{children}</DragDropContext>;
}
