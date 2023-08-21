import { FC, memo } from "react";
import { Switch,Route } from 'react-router-dom';
import { Login } from "../pages/Login";
import { BookingMenu } from "../pages/BookingMenu";
import { BookingDetail } from "../pages/BookingDetail";
import { BookingEdit } from "../pages/BookingEdit";
import { DriverMenu } from "../pages/DriverMenu";
import { DriverDetail } from "../pages/DriverDetail";
import { DriverEdit } from "../pages/DriverEdit";
import { CarDetail } from "../pages/CarDetail";
import { CarEdit } from "../pages/CarEdit";
import { CarMenu } from "../pages/CarMenu";
export const Router:FC = memo(() =>{
    return(
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/booking_menu">
                <BookingMenu />
            </Route>
            <Route path="/booking_detail">
                <BookingDetail />
            </Route>
            <Route path="/booking_edit">
                <BookingEdit />
            </Route>
            <Route path="/driver_menu">
                <DriverMenu />
            </Route>
            <Route path="/driver_detail">
                <DriverDetail />
            </Route>
            <Route path="/driver_edit">
                <DriverEdit />
            </Route>
            <Route path="/car_menu">
                <CarMenu />
            </Route>
            <Route path="/car_detail">
                <CarDetail />
            </Route>
            <Route path="/car_edit">
                <CarEdit />
            </Route>
        </Switch>
    )

});