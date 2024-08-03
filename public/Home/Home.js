import {Component} from "@odoo/owl";
import Layout from "../Components/Layout/Layout.js";
import MovieList from "../Components/MovieList/MovieList.js";
import MovieCard from "../Components/MovieCard/MovieCard.js";

export default class Home extends Component {
    static template = "Home";
    static components = {Layout, MovieList, MovieCard};

    setup() {
        this.store = this.env.store;
    }
}