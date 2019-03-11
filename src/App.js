import Main from './component/Main';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './redux/actions';

const mapStateToProps = (state) => {
  return {
    datas: state.datas,
    money: state.resultConvert
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;