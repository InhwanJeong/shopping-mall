import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import StyledCarousel from "@styled/carousel";

const carousel = () => {
    return (
        <StyledCarousel>
            <div id="slider">
                <div class="slider__item"><img src="dogs.jpg"></div>
                <div class="slider__item"><img src="guitar.jpg"></div>
                <div class="slider__item"><img src="pair.jpg"></div>
                <div class="slider__item"><img src="architect.jpg"></div>
                <div class="slider__item"><img src="landscape.jpg"></div>
            </div>

            <div class="circle_slider">
                <div class="circle_slider_item"><img src="architect.jpg"></div>
                <div class="circle_slider_item"><img src="pair.jpg"></div>
                <div class="circle_slider_item"><img src="guitar.jpg"></div>
                <div class="circle_slider_item"><img src="dogs.jpg"></div>
                <div class="circle_slider_item"><img src="landscape.jpg"></div>
                <div class="circle_slider_item"><img src="architect.jpg"></div>
                <div class="circle_slider_item"><img src="architect.jpg"></div>
            </div>    
        </StyledCarousel>
    );
};