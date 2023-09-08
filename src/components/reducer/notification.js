export const initialState = {

    data: "",


}
export const notifyReducer = (state, action) => {
    if (action.type === "NOTIFICATION_DATA") {
        return {
            ...state,
            notifyData: action.payload
        }
    }
}