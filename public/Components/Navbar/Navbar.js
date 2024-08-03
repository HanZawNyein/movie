import {Component} from "@odoo/owl";

export default class Navbar extends Component {
    static template = "Navbar";

    setup(){
        console.log(this.props)
    }
}