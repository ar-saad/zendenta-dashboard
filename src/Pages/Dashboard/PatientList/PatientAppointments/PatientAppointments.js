import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./PatientAppointments.css";
import UpcomingAppointments from "./UpcomingAppointments";

const PatientAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [upcomingAppointments, setUpcomingAppointments] = useState({});
    const [togglePage, setTogglePage] = useState("upcoming appointments");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/appointment_details")
            .then((res) => res.json())
            .then((data) => {
                const appoint = data[0];
                setAppointments(appoint);
                setUpcomingAppointments(appoint["Upcoming Appointments"]);
                setLoading(false);
            });
    }, []);

    const toggleTab = (data) => {
        setTogglePage(data);
    };

    return (
        <div>
            {/* Routes */}
            <div className="flex text-xs font-medium gap-10">
                <p
                    className={
                        togglePage === "upcoming appointments"
                            ? "active-tab"
                            : "tabs"
                    }
                    onClick={() => toggleTab("upcoming appointments")}
                >
                    Upcoming Appointments
                </p>
                <p
                    className={
                        togglePage === "past appointments"
                            ? "active-tab"
                            : "tabs"
                    }
                    onClick={() => toggleTab("past appointments")}
                >
                    Past Appointments
                </p>
                <p
                    className={
                        togglePage === "medical records" ? "active-tab" : "tabs"
                    }
                    onClick={() => toggleTab("medical records")}
                >
                    Medical Records
                </p>
            </div>
            {/* Content Tabs */}
            <div className="mt-5">
                <div
                    className={
                        togglePage === "upcoming appointments"
                            ? "active-content"
                            : "content"
                    }
                >
                    <div className="flex justify-between text-xs font-medium">
                        <p>Root Canal Treatment</p>{" "}
                        <p className="text-gray-600 cursor-pointer">
                            <FontAwesomeIcon
                                icon={faAngleUp}
                                className="mr-2"
                            />{" "}
                            Show previous appointments
                        </p>
                    </div>
                    <div className="mt-3">
                        <UpcomingAppointments
                            app={upcomingAppointments}
                            loading={loading}
                        />
                    </div>
                </div>
                <div
                    className={
                        togglePage === "past appointments"
                            ? "active-content"
                            : "content"
                    }
                >
                    <h1 className="text-lg text-gray-600">Past Appointments</h1>
                    <p className="text-sm text-gray-400">
                        Nothing to show here
                    </p>
                </div>
                <div
                    className={
                        togglePage === "medical records"
                            ? "active-content"
                            : "content"
                    }
                >
                    <h1 className="text-lg text-gray-600">Medical Records</h1>
                    <p className="text-sm text-gray-400">
                        Nothing to show here
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PatientAppointments;
