import useGets from "../../../hooks/useGets";

const ItemsData = () => {
  const { datas, loading, refetch } = useGets("items");

  return <div>ItemsData</div>;
};

export default ItemsData;
