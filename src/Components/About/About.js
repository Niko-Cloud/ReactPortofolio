import React from 'react'
import "./About.css";
import ProfilePicture from "../Image/jalter.jpg";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const About = () => {
  return (
    <div className="about-section" id="about">
        <div className="row">
            <Zoom clear>
                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-10">
                    <div className="about-image">
                        <img src={ProfilePicture} alt="Profile"/>
                    </div>
                </div>
            </Zoom>
            <Bounce right>
                <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12">
                    <div className="about-text">
                        <div className="about-header">
                            <h5>About Me</h5>
                            <span className="line"></span>
                        </div>
                        <div className="about-detail">
                            <p>
                            Hey guys, did you know that in terms of male human and female Pokémon breeding,
                            Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group,
                            which is mostly comprised of mammals, Vaporeon are an average of 3"03' tall and 63.9 pounds.
                            This means they're large enough to be able to handle human dicks,
                            and with their impressive Base stats for HP and access to Acid Armor,
                            you can be rough with one. Due to their mostly water based biology,
                            there's no doubt in my mind that an aroused Vaporeon would be incredibly wet,
                            so wet that you could easily have sex with one for hours without getting sore.
                            They can also learn the moves Attract, Baby-Doll eyes, Captivate,
                            Charm and Tail Whip along with not having fur to hide nipples,
                            so it'd be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration,
                            they can easily recover from fatigue with enough water. No other Pokémon comes close with this level of compatibility.
                            Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human dick.
                            Ungodly defense stat + high HP pool + Acid Armor means it can take cock all day, all shapes and sizes and still come for more.
                            </p>
                        </div>
                    </div>
                </div>
            </Bounce>
        </div>
    </div>
  )
}

export default About