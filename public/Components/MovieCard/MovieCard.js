import {Component} from "@odoo/owl";

export default class MovieCard extends Component {
    static template = "MovieCard";

    switchScreen() {
        this.env.switchScreen('detail', this.props);
    }
}