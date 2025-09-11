import { Descriptions } from "antd";

const ProductDescription = ({ data }) => {
  const items = [
    {
      key: "kondisi",
      label: "Kondisi",
      labelStyle: { width: 100 },
      children: data?.produk.kondisi,
    },
    {
      key: "harga",
      label: "Harga",
      labelStyle: { width: 100 },
      children: `Rp ${data?.produk?.harga.toLocaleString()}.00` || "-",
    },
    {
      key: "spesifikasi",
      label: "Spesifikasi",
      labelStyle: { width: 100 },
      contentStyle: { whiteSpace: "pre-line" },
      children: data?.produk.spesifikasi,
    },
    {
      key: "deskripsi",
      label: "Deskripsi",
      labelStyle: { width: 100 },
      contentStyle: { whiteSpace: "pre-line" },
      children: data?.produk.deskripsi,
    },
  ];

  return (
    <Descriptions
      bordered
      column={1}
      items={items}
      title={
        <div style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
          {data?.produk?.nama}
        </div>
      }
      style={{ flex: 2, width: "100%" }}
    />
  );
};

export default ProductDescription;
