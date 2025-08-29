import useGets from "../../../hooks/useGets";

const ItemsData = () => {
  const { datas, loading, refetch } = useGets({ name: "items" });
  console.log(datas);

  return <div>ItemsData</div>;
};

export default ItemsData;
