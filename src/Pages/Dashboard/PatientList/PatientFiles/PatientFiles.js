import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileCirclePlus,
    faCircleArrowDown,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const PatientFiles = () => {
    const [files, setFiles] = useState([]);
    useEffect(() => {
        fetch("https://619f39821ac52a0017ba467e.mockapi.io/Files/")
            .then((res) => res.json())
            .then((data) => {
                setFiles(data.slice(0, 4));
            });
    }, []);

    return (
        <div>
            <div className="flex justify-between">
                <p className="text-sm font-medium">Files/Documents</p>
                <p className="text-sm text-blue-600 font-medium">
                    <FontAwesomeIcon icon={faFileCirclePlus} className="mr-2" />
                    Add files
                </p>
            </div>
            <div className="p-5 text-left">
                {files.map((file) => (
                    <div className="flex justify-between">
                        <p className="text-sm my-3 text-gray-600">
                            <FontAwesomeIcon
                                icon={faFileCirclePlus}
                                className="mr-4"
                            />
                            {file?.name || "Prescription"}
                        </p>
                        <p className="text-sm my-3 text-gray-600">
                            <FontAwesomeIcon
                                icon={faCircleArrowDown}
                                className="mr-4"
                            />
                            <FontAwesomeIcon
                                icon={faTrashCan}
                                className="mr-4"
                            />
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PatientFiles;
