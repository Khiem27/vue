import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { filterValueBrand } from '../ProductsBrandFilter/ProductsBrandFilterSlice'
import { useSelector, useDispatch } from 'react-redux';

function ProductsBrandFilter(props) {
    const dispatch = useDispatch()

    const clickIkea = () => {
        dispatch(filterValueBrand("Ikea"))
    }

    const clickSteelcase = () => {
        dispatch(filterValueBrand("Steelcase"))
    }

    const clickStickley = () => {
        dispatch(filterValueBrand("Stickley"))
    }

    const clickNike = () => {
        dispatch(filterValueBrand("Nike"))
    }

    const clickEverlane = () => {
        dispatch(filterValueBrand("Everlane"))
    }

    const clickAsos = () => {
        dispatch(filterValueBrand("Asos"))
    }

    const clickGucci = () => {
        dispatch(filterValueBrand("Gucci"))
    }

    const clickDior = () => {
        dispatch(filterValueBrand("Dior"))
    }

    const clickChanel = () => {
        dispatch(filterValueBrand("Chanel"))
    }

    return (
        <form action="">
            <ul class="shop-link">
            <li>
                <a class="checkBox">
                    <input onClick={clickIkea} type="radio" id="ikea" name="filter"/>
                    <label for="ikea">ikea</label>
                </a>
            </li>
            <li>
                <a class="checkBox">
                    <input  onClick={clickSteelcase} type="radio" id="steelcase" name="filter"/>
                    <label for="steelcase">steelcase</label>
                </a>
            </li>
            <li>
                <a class="checkBox">
                    <input  onClick={clickStickley} type="radio" id="stickley" name="filter"/>
                    <label for="stickley">stickley</label>
                </a>
            </li>
            <li>
                <a class="checkBox">
                    <input  onClick={clickNike} type="radio" id="nike" name="filter"/>
                    <label for="nike">nike</label>
                </a>
            </li>
            <li>
                <a class="checkBox">
                    <input  onClick={clickEverlane} type="radio" id="everlane" name="filter"/>
                    <label for="everlane">everlane</label>
                </a>
            </li>
            <li>
                <a class="checkBox">
                    <input  onClick={clickAsos} type="radio" id="asos" name="filter"/> 
                    <label for="asos">asos</label>
                </a>
            </li>
            <li>
                <a class="checkBox">
                    <input  onClick={clickGucci} type="radio" id="gucci" name="filter"/> 
                    <label for="gucci">gucci</label>
                </a>
            </li>
            <li>
                <a class="checkBox">
                    <input  onClick={clickDior} type="radio" id="dior" name="filter"/> 
                    <label for="dior">dior</label>
                </a>
            </li>
            <li>
                <a class="checkBox">
                    <input  onClick={clickChanel} type="radio" id="chanel" name="filter"/> 
                    <label for="chanel">chanel</label>
                </a>
            </li>
        </ul>
        </form>
    );
}

export default ProductsBrandFilter;