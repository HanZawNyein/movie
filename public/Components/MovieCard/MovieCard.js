import {Component} from "@odoo/owl";

export default class MovieCard extends Component{
    static template = "MovieCard";

    // setup(){
    //     console.log(this.env)
    // }

    switchScreen(){
        console.log("MOvie Card")
        console.log(this.env);
        this.env.switchScreen('detail');
        console.log(this.props)

    }
}