import StoreItem from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = ({}) => {
  return (
    <div className="flex flex-wrap mt-[50px]">
      {storeItems.map((item) => (
        <div key={item.id}>
          <StoreItem {...item} />
        </div>
      ))}
    </div>
  );
};

export default Store;
