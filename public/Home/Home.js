import {Component, onWillStart, useState} from "@odoo/owl";
import Layout from "../Components/Layout/Layout.js";
import MovieList from "../Components/MovieList/MovieList.js";
import MovieCard from "../Components/MovieCard/MovieCard.js";

export default class Home extends Component {
    static template = "Home";
    static components = {Layout, MovieList, MovieCard};

    setup() {
        this.state =useState({
            movies:[]
        })
        this.store = this.env.store;
        onWillStart(()=>{
            this.getMovies()
        });
    }

    getMovies(){
        console.log(this.props)
        if(!this.props.movie_type || this.props.movie_type === "all"){
            return this.store.movies;
        }else{
            return this.store.movies.filter(movie => movie.type === this.props.movie_type);
        }
    }
}