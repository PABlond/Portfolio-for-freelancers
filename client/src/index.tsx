import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/style.scss'

export default ({ element }: any) => <Provider store={store}>{element}</Provider>