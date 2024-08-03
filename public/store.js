import {reactive, useEnv, useState} from "@odoo/owl";
import {MOVIES} from "./data.js";

class MovieList {
    nextId = 10;
    movies =MOVIES;

    addMovie(newMovie) {
        const task = {
            id: this.nextId++,
            ...newMovie,
        };
        this.movies.push(newMovie);
    }

    deleteDelete(task) {
        const index = this.movies.findIndex((t) => t.id === task.id);
        this.movies.splice(index, 1);
    }
}


export function useStore() {
    const env = useEnv();
    return useState(env.store);
}


export function createMovieStore() {
    return reactive(new MovieList());
}
