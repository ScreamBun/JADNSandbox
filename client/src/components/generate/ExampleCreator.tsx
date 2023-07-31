import React, { useState } from 'react'
import { Button } from 'reactstrap'
import SBCopyToClipboard from 'components/common/SBCopyToClipboard'
import SBEditor from 'components/common/SBEditor'
import SBDownloadFile from 'components/common/SBDownloadFile'
import Spinner from 'components/common/Spinner'
import SBSaveFile from 'components/common/SBSaveFile'
//TODO: create messages in other languages ?
//TODO: create messages with specific requirements - filter ?
const ExampleCreator = (props: any) => {
    const { generatedMessages, loadedSchema, isLoading } = props;
    const [toggle, setToggle] = useState('');

    const onToggle = (index: number) => {
        if (toggle == index.toString()) {
            setToggle('');

        } else {
            setToggle(`${index}`);
        }
    }

    const msgList = generatedMessages.map((message: string, i: number) => (
        <div className="card" key={i}>
            <div className="card-header">
                <h5 className="mb-0">
                    <button className="btn btn-link" id={`toggleMsg#${i}`} type="button" onClick={() => onToggle(i)} >
                        Message Example #{i + 1}
                    </button>
                    <SBCopyToClipboard buttonId={`copyMsgExample${i}`} data={message} customClass='float-right' />
                    <SBSaveFile data={message} loc={'messages'} customClass={"float-right mr-1"} filename={`MessageExample${i + 1}`} ext={'json'} />
                    <SBDownloadFile buttonId={`downloadMsgExample${i}`} customClass='mr-1 float-right' filename={`MessageExample${i + 1}`} data={message} ext={'json'} />
                </h5>
            </div>

            {toggle == `${i}` ?
                <div className="card-body" key={i}>
                    <SBEditor data={message} isReadOnly={true} height={'20em'}></SBEditor>
                </div> : ''}
        </div>
    ));

    return (
        <div className="card">
            <div className="card-header p-2">
                {isLoading ? <Spinner action={'Generating'} /> : <Button color="success" type="submit" id="translateSchema" className="btn-sm mr-1 float-right"
                    disabled={loadedSchema ? false : true}
                    title={"Generate example messages based on selected schema"}>
                    Generate
                </Button>}
            </div>
            <div className='card-body p-0' style={{ height: '40em', overflowY: 'auto' }}>
                {msgList}
            </div>
        </div >
    )
}
export default ExampleCreator 