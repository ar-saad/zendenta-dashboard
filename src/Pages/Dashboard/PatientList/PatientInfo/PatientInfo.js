import React from "react";
import profilePic from "../../../../img/profile-pic.jpg";

const PatientInfo = (patientInfo) => {
    const patient = patientInfo.patientInfo;

    return (
        <div className="grid grid-cols-5 gap-12">
            <div className="col-span-2 text-center">
                <div>
                    <img
                        src={profilePic}
                        className="w-20 rounded-full mx-auto"
                        alt=""
                    />
                </div>
                <div className="my-3">
                    <h3 className="text-lg font-bold text-gray-700">
                        {patient.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                        {patient["e-email"]}
                    </p>
                    <div className="flex justify-around my-3">
                        <p>
                            <span className="font-bold text-gray-700">
                                {patient.Past}
                            </span>
                            <span className="block text-xs text-gray-500">
                                Post
                            </span>
                        </p>
                        <p>
                            <span className="font-bold text-gray-700">
                                {patient.Upcoming}
                            </span>
                            <span className="block text-xs text-gray-500">
                                Upcoming
                            </span>
                        </p>
                    </div>
                    <div>
                        <p className="text-sm font-medium cursor-pointer">
                            Send Message
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between mb-2 text-left">
                <p className="text-xs">
                    <span className="text-gray-500">Gender</span>
                    <span className="block mt-2">{patient.Gender}</span>
                </p>
                <p className="text-xs">
                    <span className="text-gray-500">Street Address</span>
                    <span className="block mt-2">
                        {patient["Street Address"]}
                    </span>
                </p>
                <p className="text-xs">
                    <span className="text-gray-500">Member Status</span>
                    <span className="block mt-2">
                        {patient["Member Status"]}
                    </span>
                </p>
            </div>
            <div className="flex flex-col justify-between mb-2 text-left">
                <p className="text-xs">
                    <span className="text-gray-500">Birthday</span>
                    <span className="block mt-2">{patient.Birthday}</span>
                </p>
                <p className="text-xs">
                    <span className="text-gray-500">City</span>
                    <span className="block mt-2">
                        {patient?.City || "Cilacap"}
                    </span>
                </p>
                <p className="text-xs">
                    <span className="text-gray-500">Registered Date</span>
                    <span className="block mt-2">
                        {patient["Register Date"]}
                    </span>
                </p>
            </div>
            <div className="flex flex-col justify-between mb-2 text-left">
                <p className="text-xs">
                    <span className="text-gray-500">Phone Number</span>
                    <span className="block mt-2">
                        {patient["Phone Number"]}
                    </span>
                </p>
                <p className="text-xs">
                    <span className="text-gray-500">Zip Code</span>
                    <span className="block mt-2">{patient["ZIP Code"]}</span>
                </p>
                <p className="text-xs">
                    <div className="invisible text-gray-500">.</div>
                    <div className="invisible mt-2">.</div>
                </p>
            </div>
        </div>
    );
};

export default PatientInfo;
