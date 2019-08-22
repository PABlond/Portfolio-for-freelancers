"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const graphQLSchema_1 = __importDefault(require("./graphQLSchema"));
const express_graphql_1 = __importDefault(require("express-graphql"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
require("@babel/polyfill");
const app = express_1.default();
const { PORT, DB_USER, DB_PASSWORD } = process.env;
app.use(cors_1.default());
mongoose_1.default.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@ds119090.mlab.com:19090/pablond-portfolio`, { useNewUrlParser: true }, () => console.log("Database is connected"));
app.use("/graphql", express_graphql_1.default({
    schema: graphQLSchema_1.default,
    customFormatErrorFn: (err) => ({ message: err, status: parseInt(err.message) }),
    graphiql: true
}));
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
//# sourceMappingURL=index.js.map