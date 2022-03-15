interface modalContent {
  modalOpenState: boolean,
  modalAction?: string,
  modalActionDetail?: string,
  modalPerson?: string,
  modalData?: number
}

export const modalReducer = (
  state:modalContent = {modalOpenState: false},
  action: {
    type: string;
    payload: modalContent;
  }
) => {
  switch (action.type) {
    case "setModal":
      return {...state, ...action.payload};
    case "closeModal":
      return {...state, ...action.payload};
    default:
      return state;
  }
};

export const setModalAction = (payload: modalContent) => ({
  type: "setModal",
  payload,
});
export const closeModalAction = () => ({
  type: "closeModal",
  payload: {modalOpenState: false}
});
