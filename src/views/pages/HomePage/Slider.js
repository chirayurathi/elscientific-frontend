import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./Slider.css";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      overflow:'visible'
    }
}));  

const Slider = () => {
    const classes = useStyles();
  return (
    <Grid item sm={12} lg={12} className={classes.root}>
      <Swiper
        modules={[Pagination, EffectFade]}
        spaceBetween={30}
        pagination={{ clickable: true }}
        mousewheel={{ invert: false }}
        loop={true}
        effect="fade"
      >
        <SwiperSlide>
          <div className="swiper__img">
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp"
              alt=""
            />
          </div>
          <div className="swiper__content">
            <span className="swiper__code">26 December 2019</span>
            <div className="swiper__title">Lorem Ipsum Dolor</div>
            <div className="swiper__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi?{" "}
            </div>
            <a href="#" className="swiper__button">
              READ MORE
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__img">
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp"
              alt=""
            />
          </div>
          <div className="swiper__content">
            <span className="swiper__code">26 December 2019</span>
            <div className="swiper__title">Lorem Ipsum Dolor2</div>
            <div className="swiper__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi?
            </div>
            <a href="#" className="swiper__button">
              READ MORE
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__img">
            <img
              src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/alessandro-capuzzi-799180-unsplash.webp"
              alt=""
            />
          </div>
          <div className="swiper__content">
            <span className="swiper__code">26 December 2019</span>
            <div className="swiper__title">Lorem Ipsum Dolor</div>
            <div className="swiper__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae voluptate repellendus magni illo ea animi?
            </div>
            <a href="#" className="swiper__button">
              READ MORE
            </a>
          </div>
        </SwiperSlide>
        <div className="swiper__pagination"></div>
      </Swiper>
    </Grid>
  );
};

export default Slider;
