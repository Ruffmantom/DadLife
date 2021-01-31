const isModalOpen = (state = false, action) => {
    switch (action.type) {
        case "MODAL_OPEN":
            return !state
        case "MODAL_CLOSE":
            return action.payload
        default:
            return state;
    }
}
export default isModalOpen;