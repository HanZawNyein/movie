// In this example, we show how Components can be defined and created.
import {mount} from "@odoo/owl";
import {Root} from "./root";
import {ENV} from "./env.js";

const templates = await FETCH_TEMPLATES();
mount(Root, document.body, {
    templates,
    ENV,
    dev: DEV, // injected by server
});
