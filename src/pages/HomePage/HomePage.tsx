import "./HomePage.scss";
import { CategoriesGridItem, CategoriesGridItemProps } from "./components/CategoriesGridItem/CategoriesGridItem";
import { HeroPart } from "./components/HeroPart/HeroPart";
import GridItem1 from './assets/grid-item1.png';
import GridItem2 from './assets/grid-item2.png';
import GridItem3 from './assets/grid-item3.png';
import GridItem4 from './assets/grid-item4.png';
import GridItem5 from './assets/grid-item5.png';
import GridItem6 from './assets/grid-item6.png';
import GridItem7 from './assets/grid-item7.png';
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [categories, setCategories] = useState<CategoriesGridItemProps[]>([]);

  useEffect(() => {
    // send request to backend to get data
    // waiting for the response with the data
    const backendResponse = [
      {
        imageSrc: GridItem1,
        linkTitle: 'СНОУБОРДЫ',
        isWide: true,
        isAlignedToBottom: false,
      }, {
        imageSrc: GridItem2,
        linkTitle: 'СНОУБОРДЫ',
        isWide: false,
        isAlignedToBottom: true,
      }, {
        imageSrc: GridItem3,
        linkTitle: 'СНОУБОРДЫ',
        isWide: false,
        isAlignedToBottom: true,
      }, {
        imageSrc: GridItem4,
        linkTitle: 'СНОУБОРДЫ',
        isWide: true,
        isAlignedToBottom: false,
      }, {
        imageSrc: GridItem5,
        linkTitle: 'СНОУБОРДЫ',
        isWide: false,
        isAlignedToBottom: false,
      }, {
        imageSrc: GridItem6,
        linkTitle: 'СНОУБОРДЫ',
        isWide: false,
        isAlignedToBottom: false,
      }, {
        imageSrc: GridItem7,
        linkTitle: 'СНОУБОРДЫ',
        isWide: false,
        isAlignedToBottom: false,
      },
    ];
    setCategories(backendResponse);
    console.log('data received');
  }, []);

  const slideWidth = 365;
  const marginLeft = -slideWidth * currentSlide + 'px';

  function doLeftSlide(event: React.MouseEvent) {
    event.stopPropagation();
    if (currentSlide >= 1) {    
      setCurrentSlide(currentSlide - 1);
    }
  }

  const doRightSlide = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (currentSlide <= 4) {    
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <>
      <HeroPart />
      <section className="about-section">
        <div className="container">
          <h2 className="common-section-header">О НАС</h2>
        </div>
      </section>
      <section className="catalog-section">
        <div className="container">
          <h2 className="common-section-header">КАТАЛОГ</h2>
        </div>
          {
            categories.map(category =>
              <CategoriesGridItem
                key={`category-${category.imageSrc}`}
                imageSrc={category.imageSrc}
                linkTitle={category.linkTitle}
                isWide={category.isWide}
                isAlignedToBottom={category.isAlignedToBottom} />
            )
          }
      </section>
      <section className="carousel-container">
        <div className="carousel-controls">
          <button onClick={(event) => doLeftSlide(event)}>left</button>
          <button onClick={doRightSlide}>right</button>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel-item" style={{ marginLeft: marginLeft }}>1</div>
          <div className="carousel-item">2</div>
          <div className="carousel-item">3</div>
          <div className="carousel-item">4</div>
          <div className="carousel-item">5</div>
          <div className="carousel-item">6</div>
          <div className="carousel-item">7</div>
          <div className="carousel-item">8</div>
        </div>
      </section>
    </>
  );
};
