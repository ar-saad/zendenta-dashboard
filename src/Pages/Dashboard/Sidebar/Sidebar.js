import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faGaugeHigh,
    faCalendarDay,
    faUser,
    faCommentDots,
    faSackDollar,
    faSliders,
    faAngleDown,
    faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FiLogOut } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import "./Sidebar.css";
import SidebarMenu from "./SidebarMenu";
import logo from "../../../img/logo.png";
import doctorImg from "../../../img/doctor.jpg";

const routes = [
    {
        path: "/overview",
        name: "Overview",
        icon: <FontAwesomeIcon icon={faGaugeHigh} />,
    },
    {
        path: "/calendar",
        name: "Calendar",
        icon: <FontAwesomeIcon icon={faCalendarDay} />,
    },
    {
        path: "/patientList",
        name: "Patient List",
        icon: <FontAwesomeIcon icon={faUser} />,
    },
    {
        path: "/message",
        name: "Message",
        icon: <FontAwesomeIcon icon={faCommentDots} />,
    },
    {
        path: "/paymentInformation",
        name: " Payment Information",
        icon: <FontAwesomeIcon icon={faSackDollar} />,
    },
    {
        path: "/settings",
        name: "Settings",
        icon: <FontAwesomeIcon icon={faSliders} />,
    },
];

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const [doctor, setDoctor] = useState({});

    useEffect(() => {
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
            .then((res) => res.json())
            .then((data) => setDoctor(data[0]));
    }, []);

    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            width: "140px",
            padding: "5px 15px",
            transition: {
                duration: 0.2,
            },
        },
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5,
            },
        },
        show: {
            opacity: 1,
            width: "auto",
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <div className="h-full flex flex-col">
            <div className="st-main-container">
                <motion.div
                    animate={{
                        width: isOpen ? "400px" : "45px",

                        transition: {
                            duration: 0.5,
                            type: "spring",
                            damping: 10,
                        },
                    }}
                    className="st-sidebar"
                >
                    <div className="st-top_section">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial="hidden"
                                    animate="show"
                                    exit="hidden"
                                    className="st-logo"
                                >
                                    <img src={logo} alt="" />
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className="st-bars">
                            <FontAwesomeIcon icon={faBars} onClick={toggle} />
                        </div>
                    </div>
                    <section className="st-routes">
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SidebarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }

                            return (
                                <>
                                    <NavLink
                                        to={route.path}
                                        key={index}
                                        className="st-link"
                                        activeClassName="st-active"
                                    >
                                        <div className="st-link_icon">
                                            {route.icon}
                                        </div>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    variants={showAnimation}
                                                    initial="hidden"
                                                    animate="show"
                                                    exit="hidden"
                                                    className="st-link_text"
                                                >
                                                    {route.name}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </NavLink>
                                </>
                            );
                        })}
                    </section>
                </motion.div>

                <main className="st-main">{children}</main>
            </div>
            <div className="flex flex-col basis-full justify-end mb-5">
                <div className="text-gray-400 text-sm text-left font-medium ml-8 mb-6">
                    <FontAwesomeIcon icon={faCircleInfo} className="mr-3" />{" "}
                    <span>Help?</span>
                </div>
                <div className="flex justify-center items-center">
                    <div className="mr-1">
                        <img
                            src={doctorImg}
                            className="h-10 w-10 rounded-full"
                            alt=""
                        />
                    </div>
                    <div className="text-left">
                        <p className="text-sm font-medium">{doctor.name}</p>
                        <p className="text-xs text-gray-500">
                            {doctor.specification}
                        </p>
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faAngleDown}
                            className="text-sm text-gray-500 ml-5"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
