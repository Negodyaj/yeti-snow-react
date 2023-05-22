import './ProductPage.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CustomSelect } from '../../shared/CustomSelect/CustomSelect';
import { ProductCard } from '../../shared/ProductCard/ProductCard';
import { RootState } from '../../store/store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import helmet from './assets/helmet.png';

export const ProductPage = () => {
  const options = [
    { value: 1, label: 'S' },
    { value: 2, label: 'M' },
    { value: 3, label: 'L' },
  ];

  SwiperCore.use([Navigation, Pagination]);

  const params = useParams();
  const products = useSelector((state: RootState) => state.catalog.products);

  const product = products.find((product) => product.id === parseInt(params.productId ?? ''));

  const productForCarousel = products.filter((product) => product.id !== parseInt(params.productId ?? ''));

  return (
    <div className="container product-page">
      <h1>{product?.title}</h1>
      <img src={helmet} alt="" />
      <div>Color: black</div>
      <div>Please select the size:</div>
      <div className="select-wrapper">
        <CustomSelect options={options} placeholder="Choose a size" />
      </div>
      <div>{product?.price}</div>
      <h2>Also you may like this:</h2>
      <div className="first-slider-wrapper">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
        >
          {productForCarousel.map((product) => (
            <SwiperSlide key={`recommendation-${product.id}`}>
              <ProductCard
                id={product.id}
                title={product.title}
                imageColor={product.imageColor}
                colors={product.colors}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="second-slider-wrapper">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
        >
          {productForCarousel.map((product) => (
            <SwiperSlide key={`recommendation-${product.id}`}>
              <ProductCard
                id={product.id}
                title={product.title}
                imageColor={product.imageColor}
                colors={product.colors}
                price={product.price}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
