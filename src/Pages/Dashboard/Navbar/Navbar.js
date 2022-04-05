import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
    const [patient, setPatient] = useState({});

    useEffect(() => {
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
            .then((res) => res.json())
            .then((data) => setPatient(data[0]));
    }, []);

    return (
        <div className="flex justify-between items-center mt-5 mr-6">
            <div className="text-2xl font-medium">
                <FontAwesomeIcon icon={faUser} className="text-blue-700 mr-3" />
                {patient.name}
            </div>
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="border border-gray-400 inline-block rounded-3xl py-1 px-4"
                />
                <FontAwesomeIcon
                    icon={faCirclePlus}
                    className="h-9 w-9 mx-2 text-blue-700 "
                />
                <FontAwesomeIcon
                    icon={faBell}
                    className="h-5 w-5 mx-1 text-gray-500"
                />
            </div>
        </div>
    );
};

export default Navbar;
