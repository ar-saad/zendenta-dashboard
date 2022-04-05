import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

const UpcomingAppointments = (data) => {
    const appointments = data.app;
    const loading = data.loading;
    console.log(appointments);
    if (loading) {
        return <p>Loading</p>;
    }
    return (
        <div>
            <div className="">
                <ol class="relative border-l-2 border-blue-500 flex flex-col justify-around">
                    <li class="mt-5 mb-10 ml-4 py-3 border border-t-0 border-gray-300 ">
                        <div class="absolute w-5 h-5 bg-indigo-700 rounded-full mt-1.5 -left-2.5"></div>
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-3">
                                <time class="mb-1 leading-none">
                                    <h3 className="text-xl mb-2">
                                        {appointments.Date}
                                    </h3>
                                    <p className="text-xs text-gray-500">
                                        {appointments.Time}
                                    </p>
                                </time>
                            </div>
                            <div className="col-span-3 text-left my-auto">
                                <p className="text-xs text-gray-500">
                                    Treatment
                                </p>
                                <h4 className="font-medium">
                                    {appointments.Treatment}
                                </h4>
                            </div>
                            <div className="col-span-2 text-left my-auto">
                                <p className="text-xs text-gray-500">Dentist</p>
                                <h4 className="text-sm font-medium">
                                    {appointments.Dentist}
                                </h4>
                            </div>
                            <div className="col-span-2 text-left my-auto">
                                <p className="text-xs text-gray-500">Nurse</p>
                                <h4 className="text-sm font-medium">
                                    {appointments.Nurse}
                                </h4>
                            </div>
                            <div className="col-span-2 text-left my-auto">
                                <h4 className="text-sm font-medium text-blue-700">
                                    <FontAwesomeIcon
                                        icon={faFileLines}
                                        className="mr-2"
                                    />
                                    <a href={appointments.Doc} download="notes">
                                        Notes
                                    </a>
                                </h4>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default UpcomingAppointments;
