import SBSelect, { Option } from 'components/common/SBSelect';
import React, { memo } from 'react';

interface AddToIndexDropDownProps {
    indexOpts: Option[];
    onSelectChange: (e: Option) => void;
    insertAt: Option;
}

export const AddToIndexDropDown = memo(function AddToIndexDropDown(props: AddToIndexDropDownProps) {

    const { indexOpts, onSelectChange, insertAt } = props;

    return (
        <div className='col'>
            <ul className="nav nav-pills">
                <li className="nav-item pb-0 mb-2">
                    <a className="active nav-link" title='Enter numeric index to specify where to insert Type'>
                        Insert Type at index
                    </a>
                </li>
            </ul>
            <SBSelect id="addAtIndex" name="addAtIndex" value={insertAt}
                placeholder="Select index to insert Types"
                isClearable={false}
                onChange={onSelectChange} data={indexOpts}
            />
            <small className='text-muted'>
                (Default: end)
            </small>
        </div>


    );
});