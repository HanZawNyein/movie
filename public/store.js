import {reactive, useEnv, useState} from "@odoo/owl";

class MovieList {
    nextId = 3;
    movies = [
        {
            "id": 1,
            "title": "JJ",
            "release": "2024",
            "cover": "https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-minan1398-675920.jpg&fm=jpg"
        },
        {
            "id": 2,
            "title": "Deadpool",
            "release": "2023",
            "cover": "https://images.pexels.com/photos/675920/pexels-photo-675920.jpeg?cs=srgb&dl=pexels-minan1398-675920.jpg&fm=jpg"
        },
    ];

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
