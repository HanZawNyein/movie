import {Component} from "@odoo/owl";
import MovieCard from "../MovieCard/MovieCard.js";

export default class MovieList extends Component {
    static template = "MovieList";
    static components = {MovieCard};
}