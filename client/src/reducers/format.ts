import * as format from '../actions/format';

export interface FormatState {
    schema: string;
    format_options: Array<any>;
}

const initialState: FormatState = {
    schema: '',
    format_options: []
};

export default (state = initialState, action: format.FormatActions) => {
    switch (action.type) {
        case format.FORMAT_SUCCESS:
            return {
                ...state,
                schema: action.payload.schema,
            };

        case format.VALID_FORMAT_OPTIONS_SUCCESS:
            return {
                ...state,
                format_options: action.payload.format_options,
            };

        case format.FORMAT_FAILURE:
        case format.VALID_FORMAT_OPTIONS_FAILURE:
            return {
                ...state,
                error: action.payload.error || 'ERROR'
            };
        default:
            return state;
    }
};

//selectors
export const getValidFormats = (state: { Format: { format_options: any; }; }) => state.Format.format_options;