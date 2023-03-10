import { CONFIGS } from '../constants/constants.js';

export const storeConfig = (configdata) => {
    return {
        type: CONFIGS.STORE_CONFIG,
        data : configdata
    };
}

export const saveConfig = ( config ) => {
    return (dispatch) => {
        dispatch(savingConfig(true));
        dispatch(errorConfig(false));
        try {
            dispatch(savingConfig(false));
            dispatch(storeConfig(config));
            return config;
        } catch (error) {
            console.error(error);
            dispatch(savingConfig(false));
            dispatch(errorConfig(true));
        }
    }
}


export const errorConfig = (isError) => {
    return {
        type: CONFIGS.ERRORED_CONFIG,
        isError
    };
}

export const savingConfig = (showLoader) => {
    return {
        type: CONFIGS.SAVING_CONFIG,
        showLoader
    };
}
