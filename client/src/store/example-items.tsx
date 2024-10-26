import { useSnapshot } from "valtio";
import { Item, storeProxy } from "./store";

export default function ExampleItems() {
  const store = useSnapshot(storeProxy);

  const handleSelect = (itemArg: Item) => {
    const id = itemArg.id;
    storeProxy.items = storeProxy.items.filter((item) => item.id !== id);
  };

  const reorderItems = (startIndex: number, endIndex: number) => {
    const result = Array.from(storeProxy.items);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    storeProxy.items = result;
  };

  return (
    <div>
      {store.items.map((item) => (
        <div onClick={() => handleSelect(item)} key={item.id}>
          {item.content}
        </div>
      ))}
      <button onClick={() => reorderItems(0, store.items.length - 1)}>
        Move first item to last
      </button>
    </div>
  );
}
