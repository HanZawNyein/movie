import {Component} from "@odoo/owl";
import Layout from "../Components/Layout/Layout.js";
import MovieCard from "../Components/MovieCard/MovieCard.js";

export default class MovieDetail extends Component {
    static template = "MovieDetail";
    static components = {Layout, MovieCard};

    setup(){
        // console.log("Details")
        // console.log(this.props);
        this.store = this.env.store;
    }

    getRelatedMovies(){
        return this.store.movies.slice(0,6);
    }
}