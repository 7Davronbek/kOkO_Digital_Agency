import { UPDATESTATE } from "../types/emailTypes";
import emailjs from 'emailjs-com'
import {toast} from 'react-toastify'

export const updateState = (state) => {
  return {
    type: UPDATESTATE,
    payload: state,
  };
};


export const sendEmail = (e) => (dispatch) => {
  dispatch(updateState({load: true}))
    e.preventDefault()

    emailjs.sendForm(
        'service_ivag8pl',
        'template_lvaik5b',
        e.target,
        'user_JzbFquvGQOfWi32hHD37D'
    )
    .then((res) => {
      dispatch(updateState({isOpen: false}))
      dispatch(updateState({toast: true}))
      setTimeout(() => {
        dispatch(updateState({toast: false}))
      }, 5000)
    })
    .catch((err) => {
      toast.error('Ошибка! Проверьте подключение к интернету')
    })
    .finally(() => {
      dispatch(updateState({load: false}))
    })
}