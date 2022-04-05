import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import PatientInfo from "./../PatientInfo/PatientInfo";
import PatientsNotes from "./../PatientNotes/PatientsNotes";
import PatientAppointments from "./../PatientAppointments/PatientAppointments";
import PatientFiles from "./../PatientFiles/PatientFiles";

const PatientList = () => {
    const [patient, setPatient] = useState({});
    useEffect(() => {
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
            .then((res) => res.json())
            .then((data) => setPatient(data[0]));
    }, []);
    return (
        <div className="pr-8 mt-6">
            <div className="flex justify-between my-4">
                <div className="text-md flex items-center">
                    <div className="text-blue-700">Patient List</div>
                    <div className="text-xl mx-2 font-light text-gray-500">
                        {">"}
                    </div>
                    <div className="text-gray-500">{patient.name}</div>
                </div>
                <div className="flex justify-between text-xs text-gray-500">
                    <div className="mx-10">
                        <FontAwesomeIcon
                            icon={faPrint}
                            className="text-gray-500"
                        />
                    </div>
                    <div>
                        <FontAwesomeIcon
                            icon={faPenToSquare}
                            className="mr-1"
                        />{" "}
                        Edit Patient
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-20">
                <div className="col-span-2">
                    <PatientInfo patientInfo={patient} />
                </div>
                <div>
                    <PatientsNotes />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-20 mt-5">
                <div className="col-span-2">
                    <PatientAppointments />
                </div>
                <div>
                    <PatientFiles />
                </div>
            </div>
        </div>
    );
};

export default PatientList;
