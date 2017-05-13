"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const contact_component_1 = require("./contact.component");
exports.contactRouting = router_1.RouterModule.forChild([
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '', redirectTo: '/learnings', pathMatch: 'full' }
]);
//# sourceMappingURL=contacts.routing.js.map