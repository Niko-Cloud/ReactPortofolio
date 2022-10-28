import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css"

const Testimonial = () => {

    const data = [
        {
            name: "Niko",
            position: "CEO",
            desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            img: "https://picsum.photos/200"
        },
        {
            name: "UwU",
            position: "Master",
            desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            img: "https://picsum.photos/200"
        },
        {
            name: "Yuki",
            position: "Slave",
            desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            img: "https://picsum.photos/200"
        },
        {
            name: "Hime",
            position: "Slave 2",
            desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            img: "https://picsum.photos/200"
        },
        {
            name: "Shira",
            position: "Legoo",
            desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            img: "https://picsum.photos/200"
        },
        {
            name: "Kuro",
            position: "Marketing Manager",
            desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            img: "https://picsum.photos/200"
        },
        {
            name: "Lily",
            position: "Flower",
            desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            img: "https://picsum.photos/200"
        },
        {
            name: "Centaur",
            position: "Dota 2 Uber Driver",
            desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            img: "https://picsum.photos/200"
        }
    ]
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 4000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const colors =[
        // "#a65288",
        // "#cb4d54",
        // "#cc5c42",
        // "#1df4e8",
        "#a30113",
        "#2edead",
        "#ef4064",
        "#3895b1",
        "#e04def",
        "#d2831b",
        // "#a30113",
        // "#eaae80",
        // "#426bc4",
        "#d313fc",
        "#bce06b",
        "#8f15f0",
        "#39e1b6",
        "#6e58e6",
        "#14facd",
        "#917e9d",
    ]

    return (
        <div className="Container" id="testimonial">
            <div className="section-title">
                <h5>Testimonial</h5>
                <span className="line"></span>
            </div>

            <div className="testimonial-slider">
                <Slider {...settings}>
                        {data.map((item,index)=>(
                            <div className="content-slider-main">
                                <div className="content-slider" key={index} style={{backgroundColor:colors[index]}}>
                                    <img src={item.img}  alt=""/>
                                    <p>{item.name}</p>
                                    <p>{item.position}</p>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;