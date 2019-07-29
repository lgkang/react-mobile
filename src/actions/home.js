import actionTypes from "../constants/actionTypes";

export const photoRecord = () => {
    return diapatch => {
        setTimeout(() => {
            diapatch({
                type: actionTypes.HOME_PHOTO_RECORD,
                record: {
                    a: 11,
                    b: 22
                }
            });
        }, 1000);
    };
};
