export const APP_SET_LOCALE = "APP_SET_LOCALE"

export default function(locale) {
    return (dispatch) => {
        dispatch({
            type: APP_SET_LOCALE,
            data: locale
        })
    }
}