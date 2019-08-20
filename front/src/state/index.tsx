import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import 'bootstrap/dist/css/bootstrap.css';
export default ({ element }: any) => <Provider store={store}>{element}</Provider>
