import {Component, useState, useSubEnv} from "@odoo/owl";
import Navbar from "./Components/Navbar/Navbar.js";

export class Root extends Component {
    static template = "Root";
    static components = {Navbar};

    setup() {
        this.state = useState({
            currentScreen: this.env.routes[0],
        });

        useSubEnv({"switchScreen": this.switchScreen.bind(this)});
    }

    switchScreen(screenName) {
        var newScreen = this.env.routes.find((route) => route.name === screenName);
        if (newScreen) {
            this.state.currentScreen = newScreen;
        }
    }
}
