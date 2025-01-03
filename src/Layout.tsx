import React from 'react';
import Header from "./modules/header/Header";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};