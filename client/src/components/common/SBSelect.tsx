import { deleteFile } from 'actions/save';
import React, { CSSProperties, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import Select, { components } from 'react-select';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { sbToastError, sbToastSuccess } from './SBToast';

const groupStyles: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
};
const groupBadgeStyles: CSSProperties = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
};

const customMenuOptionStyle: CSSProperties = {
    border: 'none',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'inherit',
}

export interface Option {
    readonly value: string;
    readonly label: string;
}

interface GroupedOption {
    readonly label: string;
    readonly options: readonly Option[];
}

const SBSelect = (props: any) => {

    const { id, data, onChange, placeholder, isGrouped, isMultiSelect, loc } = props;
    const [toggleModal, setToggleModal] = useState(false);

    const dispatch = useDispatch();

    const formatGroupLabel = (data: GroupedOption) => (
        <div style={groupStyles}>
            <span>{data.label}</span>
            <span style={groupBadgeStyles}>{data.options.length}</span>
        </div>
    );

    const Menu = (props: any) => {
        return (
            <Fragment>
                <components.Menu {...props}>
                    <div>
                        <div>{props.children}</div>
                        <hr />
                        <button type="button" className="list-group-item list-group-item-action"
                            onClick={() => onChange({ value: 'file' })}
                            style={customMenuOptionStyle}
                        >
                            Upload New File ...
                        </button>
                        <hr />
                        <button type="button" className="list-group-item list-group-item-action"
                            onClick={() => setToggleModal(true)}
                            style={customMenuOptionStyle}
                        >
                            Remove Custom Files
                        </button>
                    </div>
                </components.Menu>
            </Fragment >
        );
    };

    let opts, customOpts, customOptList;
    if (isGrouped) {
        opts = Object.keys(data).map((groupLabel) => ({
            label: groupLabel,
            options: Object.values(data[groupLabel]).map((opt) => ({
                value: `${groupLabel == 'custom' ? `custom/${opt}` : opt}`,
                label: opt
            }))
        }));

        customOpts = [];
        for (let i = 0; i < opts.length; i++) {
            if (opts[i].label == 'custom') {
                if (opts[i].hasOwnProperty('options') && opts[i].options.length != 0) {
                    for (let j = 0; j < opts[i].options.length; j++) {
                        customOpts.push({
                            value: opts[i].options[j].value,
                            label: opts[i].options[j].label
                        });
                    }
                }
            }
        }

        customOptList = customOpts.map((opt, index) => (
            <label className="list-group-item" style={{ textAlign: 'center' }} key={index}>
                <input className="form-check-input me-1" type="checkbox" name={'custom-file'} value={opt.label} />
                {opt.label}
            </label>
        ));

    } else {
        opts = data.map((opt: string) => ({
            value: opt, label: opt
        }));
    }

    const deleteFiles = () => {
        var checkboxes = document.getElementsByName('custom-file');
        var deletionList = [];
        for (var i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                deletionList.push(checkboxes[i].value);
            }
        }
        if (deletionList.length == 0) {
            setToggleModal(false);
            return;
        } else {
            try {
                dispatch(deleteFile(deletionList, loc))
                    .then((val) => {
                        if (val.error) {
                            sbToastError(`Error: ${val.payload.response}`);
                            setToggleModal(false);
                            return;
                        }
                        sbToastSuccess(val.payload);
                        setToggleModal(false);
                    })
                    .catch((err) => {
                        sbToastError(`Error: ${err.payload.response}`);
                        setToggleModal(false);
                    });
            } catch (err) {
                sbToastError(`Error: ${err.payload.response}`);
                setToggleModal(false);
            }
        }
    }

    return (
        <>
            <div>
                <Select<Option, false, GroupedOption>
                    id={id}
                    placeholder={placeholder}
                    options={opts}
                    formatGroupLabel={formatGroupLabel}
                    isClearable
                    onChange={onChange}
                    menuPortalTarget={document.body}
                    styles={{ menuPortal: base => ({ ...base, zIndex: 9999, color: '#172B4D' }) }}
                    isMulti={isMultiSelect}
                    components={{ Menu }}
                />
            </div>

            <Modal isOpen={toggleModal}>
                <ModalHeader>
                    Delete Custom Files
                </ModalHeader>
                <ModalBody>
                    <div className="list-group">
                        {customOptList && customOptList.length != 0 ? customOptList : 'No custom files exist'}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={deleteFiles} disabled={customOptList && customOptList.length != 0 ? false : true} >Delete</Button>
                    <Button color="secondary" onClick={() => setToggleModal(false)}>Cancel</Button>
                </ModalFooter>
            </Modal >
        </>
    );
}

export default SBSelect;