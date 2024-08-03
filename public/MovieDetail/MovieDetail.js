import {Component} from "@odoo/owl";
import Layout from "../Components/Layout/Layout.js";
import MovieCard from "../Components/MovieCard/MovieCard.js";

export default class MovieDetail extends Component {
    static template = "MovieDetail";
    static components = {Layout, MovieCard};
}