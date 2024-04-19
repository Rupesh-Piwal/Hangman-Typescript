type StoreItemsProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

products = 0;

const StoreItem = ({ id, name, price, imgUrl }: StoreItemsProps) => {
  return (
    <div
      key={id}
      className="w-[350px] h-[100%] text-lg m-3  shadow-xl shadow-gray-300"
    >
      <img style={{ width: "100%", height: "260px" }} src={imgUrl} alt="" />
      <div className="flex justify-between mt-5 mb-5 p-5">
        <p className="font-semibold text-lg">{name}</p>
        <p className="font-semibold text-lg">{price}</p>
      </div>

      {products === 0 ? (
        <div>
          <div className="flex justify-evenly mt-2">
            <button className="bg-violet-600 text-white px-3 py-1.5 font-bold text-xl rounded-md">
              +
            </button>
            <div className="text-xl">20</div>
            <button className="bg-violet-600 text-white px-3 py-1.5 font-bold text-xl rounded-md">
              -
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-red-500 text-white px-3 py-1.5 rounded-lg mt-2">
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <button className="bg-violet-600 text-white px-12 py-2 rounded-md  ">
            Add to cart
          </button>
        </div>
      )}
    </div>
  );
};

export default StoreItem;
