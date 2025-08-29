import useGets from "../../../hooks/useGets";

const ItemsData = () => {
  const { data, loading, refetch } = useGets({ name: "items" });
  console.log(data);

  return <div>ItemsData</div>;
};

export default ItemsData;
