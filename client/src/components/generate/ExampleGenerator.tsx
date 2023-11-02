import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'
import { getPageTitle } from 'reducers/util'
import { info, setSchema } from 'actions/util'
import JADNSchemaLoader from 'components/common/JADNSchemaLoader'
import ExampleCreator from './ExampleCreator'
import { dismissAllToast, sbToastError, sbToastSuccess } from 'components/common/SBToast'
import { JSONSchemaFaker } from 'json-schema-faker';
import { convertSchema } from 'actions/convert'
import { Option } from 'components/common/SBSelect'

const ExampleGenerator = () => {
    const dispatch = useDispatch();

    const [selectedFile, setSelectedFile] = useState<Option | null>();
    const [loadedSchema, setLoadedSchema] = useState<String>('');
    const [generatedMessages, setGeneratedMessages] = useState<any[]>([]);
    const [numOfMsg, setNumOfMsg] = useState<number | String>('');

    const [isLoading, setIsLoading] = useState(false);

    const meta_title = useSelector(getPageTitle) + ' | Message Generation'
    const meta_canonical = `${window.location.origin}${window.location.pathname}`;
    useEffect(() => {
        dispatch(info());
        dismissAllToast();
    }, [dispatch])

    useEffect(() => {
        setGeneratedMessages([]);
    }, [loadedSchema])

    const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLoading(false);
        setSelectedFile(null);
        setLoadedSchema('');
        setNumOfMsg('');
        setGeneratedMessages([]);
        dispatch(setSchema(''));
    }

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        let schemaObj = loadedSchema;
        let schemaProps: any[] = [];
        if (typeof schemaObj == 'string') {
            try {
                schemaObj = JSON.parse(loadedSchema);
            } catch (err) {
                if (err instanceof Error) {
                    setIsLoading(false);
                    sbToastError(err.message);
                }
            }
        }

        if (!numOfMsg || numOfMsg < 0) {
            sbToastError("Error: Must select a number more than zero");
            return;
        }

        if (numOfMsg && numOfMsg > 10) {
            sbToastError("Error: Must select a number less than ten");
            return;
        }

        dispatch(convertSchema(schemaObj, ['json']))
            .then((convertSchemaVal) => {
                if (convertSchemaVal.error) {
                    console.error(convertSchemaVal.payload.response);
                    setIsLoading(false);
                    sbToastError('Failed to generate examples: Invalid JSON data');
                    return;
                }

                //CONVERTED JADN TO JSON SUCCESSFULLY : GENERATE FAKE DATA HERE
                const schema = JSON.parse(convertSchemaVal.payload.schema.convert[0].schema);
                schemaProps = schema.properties ? Object.keys(schema.properties) : [];
                var generated: any[] = [] // LIST OF GENERATED EXAMPLES
                let i = 0;

                while (i < numOfMsg) {
                    let ex = JSONSchemaFaker.generate(schema);
                    if (Object.keys(ex).length > 1) { // CHECK IF GENERATED DATA HAS MULITPLE OBJ
                        for (const [k, v] of Object.entries(ex)) {
                            if (Object.keys(v).length != 0 && i < numOfMsg) { // CHECK IF EACH OBJ HAS DATA 
                                if (schemaProps && schemaProps.includes(k)) {
                                    generated.push(JSON.stringify(v, null, 2));
                                    i += 1
                                } else {
                                    generated.push(JSON.stringify({ [k]: v }, null, 2));
                                    i += 1
                                }
                            }
                        }
                    } else {
                        if (Object.values(ex).length != 0) { // CHECK IF GENERATED DATA OBJ HAS DATA
                            if (schemaProps && schemaProps.includes(Object.keys(ex)[0])) {
                                generated.push(JSON.stringify(Object.values(ex)[0], null, 2));
                                i += 1
                            } else {
                                generated.push(JSON.stringify(ex, null, 2));
                                i += 1
                            }
                        }
                    }

                    if (i == 0) {
                        break;
                    }
                }

                if (generated.length != 0) {
                    setIsLoading(false);
                    sbToastSuccess('Examples generated successfully');
                    setGeneratedMessages(generated);
                } else {
                    setIsLoading(false);
                    sbToastError('Failed to generate examples');
                }



            })
            .catch((convertSchemaErr) => {
                sbToastError('Failed to generate examples: JADN TO JSON conversion failed');
                console.error(convertSchemaErr);
            });
    }

    return (
        <div>
            <Helmet>
                <title>{meta_title}</title>
                <link rel="canonical" href={meta_canonical} />
            </Helmet>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header bg-primary p-2'>
                            <h5 className='m-0 text-light' style={{ display: 'inline' }}><span className='align-middle'>Message Generation</span></h5>
                            <button type='reset' className='btn btn-sm btn-danger float-end' onClick={onReset}>Reset</button>
                        </div>
                        <div className='card-body p-2'>
                            <form onSubmit={submitForm}>
                                <div className='row'>
                                    <div className='col-md-6 pr-1'>
                                        <JADNSchemaLoader
                                            selectedFile={selectedFile} setSelectedFile={setSelectedFile}
                                            loadedSchema={loadedSchema} setLoadedSchema={setLoadedSchema} />
                                    </div>
                                    <div className='col-md-6 pl-1'>
                                        <ExampleCreator
                                            generatedMessages={generatedMessages} isLoading={isLoading}
                                            numOfMsg={numOfMsg} setNumOfMsg={setNumOfMsg}
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ExampleGenerator 