import { LOADER } from '../constants/constants.js';

export const displayLoader = (show) => {
    return {
        type: LOADER.HANDLE_LOADER,
        data : show ? true : false // For Readbility
    };
}