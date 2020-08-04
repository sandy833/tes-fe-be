import * as actionsTypes from './actionsTypes';
import axios from "axios";
import { ENDPOINT, token } from "../../../utils/globals";

export const getListbuku = () => {
  const request = axios.get(`${ENDPOINT}/${token}/buku`);

  return (dispatch) => {
    request.then((response) => {
      console.log(response, "Respon getBuku");
      return dispatch({
        type: actionsTypes.GET_BUKU,
        payload: response.data,
      });
    });
  };
};

export const getBukuById = (id) => {
  const request = axios.get(`${ENDPOINT}/${token}/buku/${id}`);

  return (dispatch) => {
    request.then((response) => {
      return dispatch({
        type: actionsTypes.GET_BUKU_BY_ID,
        payload: response.data,
      });
    });
  };
};

export const updateBuku = (id, data) => {
  const request = axios.post(`${token}/${ENDPOINT}/buku/${id}`, data);

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.UPDATE_BUKU,
        payload: response.data,
      });
      return dispatch(getListbuku());
    });
  };
};

export const deleteBuku = (id) => {
  const request = axios.delete(`${ENDPOINT}/${token}/buku/${id}`);

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.GET_BUKU_BY_ID,
        payload: response.data,
      });
      return dispatch(getListbuku());
    });
  };
};

export const addBuku = (data) => {
  const request = axios.post(`${ENDPOINT}/${token}/buku`, data);

  return (dispatch) => {
    request.then((response) => {
      dispatch({
        type: actionsTypes.ADD_BUKU,
        payload: response.data,
      });
    });
  };
};