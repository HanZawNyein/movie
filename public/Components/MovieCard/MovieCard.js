import {Component} from "@odoo/owl";

export default class MovieCard extends Component{
    static template = "MovieCard";

    // setup(){
    //     console.log(this.env)
    // }

    switchScreen(){
        this.env.switchScreen('detail');
    }
}