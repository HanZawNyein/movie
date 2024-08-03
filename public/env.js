// Import the routes from the routes module
import {ROUTES} from "./routes";
import {createMovieStore} from "./store.js";

// Create an object named ENV and assign routes to it
export const ENV = {
    routes:ROUTES,
    store: createMovieStore(),
};
