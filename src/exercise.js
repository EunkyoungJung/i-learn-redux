import { createStore } from "redux";
// createStore는 스토어를 만들어주는 함수
// 리액트 앱당 딱 하나의 스토어만을 만들기를 추천!

/*1. 초기 state 정의*/
const initialState = {
  counter: 0,
  text: "",
  list: [],
};

/*2. 액션 타입 정의*/
// 액션 타입은 주로 대문자로 작성!
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

/*3. 액션 함수 정의*/
// 액션 생성 함수는 camelCase로 작성
const increase = () => {
  return { type: INCREASE };
};

const decrease = () => {
  return { type: DECREASE };
};

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text, // 액션 안에는 type 이외의 추가적인 필드를 마음대로 넣을 수 있음!
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

/*4. 리듀서 정의*/
// 리듀서는 "새로운 상태"를 만드는 함수!
// 주의! 리듀서는 꼭 '불변성' 지켜줘야 함!!
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, counter: state.counter + 1 };
    case DECREASE:
      return { ...state, counter: state.counter - 1 };
    case CHANGE_TEXT:
      return { ...state, text: action.text };
    case ADD_TO_LIST:
      return { ...state, list: state.list.concat(action.item) };
    default:
      return state;
  }
}

/*5. 스토어 만들기*/
const store = createStore(reducer);

/*6. listener 함수 정의 */
// 스토어 안에 들어가는 상태가 바뀔 때 마다 호출되는 listener함수
const listener = () => {
  const state = store.getState();
  console.log("listener state", state);
};

/*7. 구독해제 함수 정의 */
const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe()를 호출하면 됨!

/*8. 액션 디스패치 */
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "와우" }));

console.log("Hello! exercise.js", store.getState());
