
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../imeges/img/banner-bg2.jpg"
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p><br></br>You can see My Skills here</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <CircularProgressbarWithChildren value={90}>
                                        <div style={{ fontSize: 15, marginTop: -5 }}>
                                            <h5>90%</h5>
                                        </div>
                                    </CircularProgressbarWithChildren>;
                                    <h5>FrontEnd Development</h5>
                                </div>
                                <div className="item">
                                <CircularProgressbarWithChildren value={90}>
                                        <div style={{ fontSize: 15, marginTop: -5 }}>
                                            <h5>75%</h5>
                                        </div>
                                    </CircularProgressbarWithChildren>;
                                    <h5>BackEnd Development</h5>
                                </div>
                                <div className="item">
                                <CircularProgressbarWithChildren value={90}>
                                        <div style={{ fontSize: 15, marginTop: -5 }}>
                                            <h5>80%</h5>
                                        </div>
                                    </CircularProgressbarWithChildren>;
                                    <h5>Machine learning</h5>
                                </div>
                                <div className="item">
                                <CircularProgressbarWithChildren value={90}>
                                        <div style={{ fontSize: 15, marginTop: -5 }}>
                                            <h5>85%</h5>
                                        </div>
                                    </CircularProgressbarWithChildren>;
                                    <h5>Databases</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}