import initialState from "../store/initialState";

export default function reducer(state=initialState,action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
