import Counter from "../components/Counter";
import * as actions from "../actions";
import { connect } from "react-redux";
import { getRandomColor } from "../utils";

// store 안의 state 값을 props 로 연결
const mapStateToProps = (state) => ({
  color: state.colorData.color,
  number: state.numberData.number,
});

// 액션을 생성하고 dispatch 하는 함수를 만들어 props로 연결
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(actions.increment()),
  onDecrement: () => dispatch(actions.decrement()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  },
});

// counter 컴포넌트를 애플리케이션의 데이터 레이어와 묶는 역할을 한다.
const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;
