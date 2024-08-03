import {Component, useState} from "@odoo/owl";
import Navbar from "./Components/Navbar/Navbar.js";

export class Root extends Component {
    static template = "Root";
    static components = {Navbar};

    setup() {

        this.state = useState({
            currentScreen: this.env.routes[0],
        });
    }
}
