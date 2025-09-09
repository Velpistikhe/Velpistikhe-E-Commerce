import { useEffect, useRef, useState } from "react";
import { Image, Col, Carousel, theme, Flex } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const ProductCardImage = ({ data }) => {
  const {
    token: { colorBgContainer, colorBorder },
  } = theme.useToken();
  const [selectedImage, setSelectedImage] = useState(null);
  const carouselRef = useRef();

  const handlePrev = () => carouselRef.current?.prev();
  const handleNext = () => carouselRef.current?.next();

  useEffect(() => {
    if (!data) return;
    if (selectedImage) return;

    setSelectedImage(data?.produk.image[0]);
  }, [data, selectedImage, setSelectedImage]);

  return (
    <Flex vertical align="center" style={{ flex: 1, height: 500 }}>
      <Image
        crossOrigin="anonymous"
        src={selectedImage}
        width={300}
        height={300}
        style={{ objectFit: "cover", borderRadius: 8 }}
      />
      <div
        style={{
          position: "relative",
          marginTop: 12,
          width: 300,
        }}
      >
        <LeftOutlined
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "35%",
            left: -20,
            zIndex: 1,
            fontSize: 18,
            background: colorBgContainer,
            border: `solid 2px ${colorBorder}`,
            borderRadius: "50%",
            padding: 4,
            cursor: "pointer",
          }}
        />

        <Carousel
          ref={carouselRef}
          dots={false}
          slidesToShow={3}
          slidesToScroll={1}
          arrows={false}
        >
          {data?.produk.image.slice(0, 3).map((img, idx) => (
            <Col span={8} key={idx}>
              <Image
                crossOrigin="anonymous"
                src={img}
                width={90}
                height={90}
                style={{
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: 6,
                  border:
                    selectedImage === img
                      ? "2px solid #1890ff"
                      : "1px solid #ccc",
                }}
                preview={false}
                onClick={() => setSelectedImage(img)}
              />
            </Col>
          ))}
        </Carousel>
        <RightOutlined
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "35%",
            right: -10,
            zIndex: 1,
            fontSize: 18,
            background: colorBgContainer,
            border: `solid 2px ${colorBorder}`,
            borderRadius: "50%",
            padding: 4,
            cursor: "pointer",
          }}
        />
      </div>
    </Flex>
  );
};

export default ProductCardImage;
