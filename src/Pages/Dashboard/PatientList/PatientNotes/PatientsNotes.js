import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const PatientsNotes = () => {
    return (
        <div>
            <div className="flex justify-between">
                <p className="text-sm font-medium">Notes</p>
                <p className="text-sm font-medium text-blue-600">See All</p>
            </div>
            <div className="mt-2">
                <textarea className="w-full border border-gray-300 rounded h-28"></textarea>
                <div className="text-right">
                    <button className="text-white text-sm bg-blue-600 p-1 px-2 rounded">
                        save note
                    </button>
                </div>
            </div>
            <div className="mt-2 text-xs text-left">
                <p className="font-medium">Lorem ipsum dolor sit amet</p>
                <div className="mt-1 flex justify-between">
                    <p>
                        <FontAwesomeIcon
                            icon={faUser}
                            className="text-blue-500 mr-2"
                        />
                        <span className="text-gray-500">Drg. Mega Nanade</span>
                    </p>
                    <p className="text-gray-500">20 Nov '19</p>
                </div>
            </div>
        </div>
    );
};

export default PatientsNotes;
