

import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';

const options = {

    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
            dots: false,
            margin: 30,
        },
        600: {
            items: 2,
            dots: false,
        },
        700: {
            items: 3,
            dots: false,
        },
        1000: {
            items: 4,
            dots: true,

        }
    },
};

export class OwlDemo extends Component {

    render() {
        return (


            <div>

                <div id="circulareconomy35544545" className="owl-carousel454545">

                    <OwlCarousel items={4} margin={20} autoplay={true} {...options}>
                        <div className="item">
                            <div className="border-0 mb-3 demo233"


                            ><img src="/Digi2limage/s2.png" className="card-img-top" />

                            </div>
                        </div>
                        <div className="item">
                            <div className=" border-0 mb-3 demo233"

                            >
                                <img src="/Digi2limage/s3.png" className="card-img-top" />

                            </div>
                        </div>
                        <div className="item">
                            <div className=" border-0 mb-3 demo233"

                            >
                                <img src="/Digi2limage/s4.png" className="card-img-top" />

                            </div>
                        </div>
                        <div className="item">
                            <div className=" border-0 mb-3 demo233"
                            >
                                <img src="/Digi2limage/s2.png" className="card-img-top" />

                            </div>
                        </div>
                        <div className="item">
                            <div className=" border-0 mb-3 demo233"
                            >
                                <img src="/Digi2limage//s5.png" className="card-img-top" />

                            </div>
                        </div>
                    </OwlCarousel>
                </div>





            </div>



        )
    }
}


export default OwlDemo





