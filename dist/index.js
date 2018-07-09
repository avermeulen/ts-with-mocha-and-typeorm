"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = __importDefault(require("./user-routes"));
const app = express_1.default();
const PORT = process.env.PORT || 3007;
const userRoutes = user_routes_1.default();
app.get('/users', userRoutes.list);
app.listen(PORT, function () {
    console.log("app starting on port", PORT);
});
