import React, { useState } from "react";
import { saveFile } from "actions/save";
import { sbToastError, sbToastSuccess, sbToastWarning } from "./SBToast";
import { useDispatch } from "react-redux";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const SBSaveFile = (props: any) => {

    const dispatch = useDispatch();

    const { buttonId, data, customClass, filename, ext, loc } = props;
    const [fileNameInput, setFileNameInput] = useState('');
    const [toggleSaveDialog, setToggleSaveDialog] = useState(false);
    const [toggleOverwriteDialog, setToggleOverwriteDialog] = useState(false); //nestedModal


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFileNameInput(e.target.value);
    }

    const onSaveFile = (dataStr: string, fmt: string = 'jadn', overwrite: boolean = false) => {
        if (dataStr == '{}') {
            sbToastError('Error: No data to save.');
            return;
        }

        if (fileNameInput == '') {
            sbToastWarning('Please enter a file name.');
            return;
        } else if (fileNameInput.match(/^(?!.{256,})(?!(aux|clock\$|con|nul|prn|com[1-9]|lpt[1-9])(?:$|\.))[^ ][ \.\w-$()+=[\];#@~,&amp;']+[^\. ]$/i)) {
            sbToastWarning("Please do not use special characters in file name.");
        }

        const filename = `${fileNameInput}.${fmt}`;

        try {
            dispatch(saveFile(filename, dataStr, loc, overwrite))
                .then((val) => {
                    if (val.error) {
                        if (val.payload.status == 409) {
                            setToggleOverwriteDialog(true);
                            return;
                        }
                        sbToastError(`Error: ${val.payload.response}`);
                        setToggleSaveDialog(false);
                        return;
                    }
                    sbToastSuccess(val.payload);
                    setToggleSaveDialog(false);
                })
                .catch((err) => {
                    sbToastError(`Error: ${err.payload.response}`);
                    setToggleSaveDialog(false);
                });
        } catch (err) {
            sbToastError(`Error: ${err.payload.response}`);
            setToggleSaveDialog(false);
        }
    }

    return (
        <>
            <Button id={buttonId || 'saveFile'} title="Save File" color="info" className={'btn-sm ' + customClass} onClick={() => { setToggleSaveDialog(true); setFileNameInput(filename); }}>
                <FontAwesomeIcon icon={faSave} />
            </Button>

            <Modal isOpen={toggleSaveDialog} autoFocus={false} >
                <ModalHeader>
                    Save File As...
                    <div>
                        <small className="text-muted"> {`Save file in pre-populated list of ${loc}`}</small>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-row">
                        <label htmlFor="filename" className="col-sm-4 col-form-label">File name:</label>
                        <div className="col-sm-8">
                            <input id='filename' className="form-control" type="text" autoFocus={true} value={fileNameInput} onChange={onChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <label htmlFor="filename" className="col-sm-4 col-form-label">Save as type:</label>
                        <div className="col-sm-8 my-auto">
                            {ext ? ext : 'jadn'}
                        </div>
                    </div>

                    <Modal
                        isOpen={toggleOverwriteDialog}
                    >
                        <ModalHeader>Confirm Overwrite</ModalHeader>
                        <ModalBody>File {filename} already exists. Please confirm that you would like to overwrite this file? </ModalBody>
                        <ModalFooter>
                            <Button color="success" onClick={() => onSaveFile(data, ext, true)}>Confirm</Button>
                            <Button color="secondary" onClick={() => setToggleOverwriteDialog(false)}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSaveFile(data, ext)}>Save</Button>
                    <Button color="secondary" onClick={() => setToggleSaveDialog(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}

export default SBSaveFile;