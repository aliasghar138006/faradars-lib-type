'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import styles from './MainPage.module.css'
import { useEffect, useState } from 'react';
import getBooks from "@/utils/getBooks"

import Card from '../modules/Card';

type booksType = {
  _id:string,
  title : string,
  author : string,
  description : string,
  image : {data : {data : Buffer}}
}

function MainPage() {
  const [books , setBooks] =  useState<booksType[]>([])
  useEffect(() => {
    const getData = async () => {
      const data = await getBooks();
      const filteredData = data.data.slice(0,5)
      console.log(filteredData);
      setBooks(filteredData)
    }
    getData();
  } , [])
  return (
    <div className={styles.container}>
        <Swiper
        
        effect={'coverflow'}
    
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper"
      >
        <SwiperSlide className={styles.swiperslide}>
          <img src="https://img.ketabrah.ir/img/s/3043519274553633.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="https://img.taaghche.com/frontCover/312.jpg?w=150" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="https://static0.bartarinha.ir/servev2/DM0OWIzNTIxN/5Uwvb7W7Zm0,/file.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="https://bookland.ir/Images/Products/Book_201568_lg_25.webp" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="https://bookland.ir/Images/Products/Book_76763_lg_0.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="https://pardiseketab.com/wp-content/uploads/2024/04/9786223012495.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="https://tirpublishing.com/wp-content/uploads/2023/01/eskandar_jeld_01-400x600.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="https://ketabnak.com/images/thumb/299x436/covers/Shahin-anavarzajpg-page1.webp" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}>
          <img src="https://www.digikala.com/mag/wp-content/uploads/2020/11/SEPEED-DANDAN.jpg" />
        </SwiperSlide>
      </Swiper>
      <div>
        <h1>جدیدترین کتاب ها</h1>
      </div>
      <div className={styles.books}>
        {books.map(item => (
          <div key={item._id} className={styles.book}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainPage