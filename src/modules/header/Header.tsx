import React, {useEffect} from 'react';
import styles from "./header.module.scss";
import {NavLink} from "react-router-dom";
import {useKeycloak} from "@react-keycloak/web";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../utils/store";
import {updateUser} from "../../utils/slices/userSlice";

const Header = () => {
    const {keycloak} = useKeycloak();
    const user = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (keycloak.authenticated) {

            keycloak.loadUserProfile().then(profile => {
                if (profile.id && profile.firstName && profile.lastName && profile.email) {
                    const newUser: typeof user = {
                        id: parseInt(profile.id),
                        name: profile.firstName,
                        lastName: profile.lastName,
                        email: profile.email,
                        role: "user"
                    };
                    dispatch(updateUser(newUser));
                }
            });
        } else {
            const newUser: typeof user = {
                id: 0,
                name: "",
                lastName: "",
                email: "",
                role: "user"
            };
            dispatch(updateUser(newUser));
        }
    }, [keycloak.authenticated])

    return (
        <div className={styles.container}>
            <div className={styles.container__item}>
                <NavLink to={"/"}>FitCycle</NavLink>
            </div>
            <div className={styles.container__item}>
                <NavLink to={"/exercise"}>Exercise</NavLink>
            </div>
            <div className={styles.container__item}>
                <a href="">SOME TEXT</a>
            </div>
            <div className={styles.container__item}>
                {user.id != 0 ? <button onClick={() => keycloak.logout()}>{user.name}</button> :
                    <button onClick={() => keycloak.login()}>LOGIN</button>}

            </div>
        </div>
    );
};

export default Header;