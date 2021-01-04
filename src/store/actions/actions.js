import { TOGGLE_LESSON } from '../constants/constants';
import { connect } from 'react-redux';

const Toggle_lesson: Function = (module: any, lesson: any):any => {
  return {
    type: TOGGLE_LESSON,
    module,
    lesson,
  }
}

export default connect(state => ({ module: state }))(Toggle_lesson)