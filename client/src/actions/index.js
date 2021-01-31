export const openModal = ()=>{
    return{
        type:"MODAL_OPEN"
    };
};
export const closeModal = (p)=>{
    return{
        type:"MODAL_CLOSE",
        payload: p
    };
};