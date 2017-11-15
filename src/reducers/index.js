import { combineReducers } from 'redux';
import answeredQuestionReducer from './answeredQuestionReducer';
import propositionDataReducer from './propositionDataReducer';
import actualQuestionIDReducer from './actualQuestionIDReducer';
import rankingDataReducer from './rankingDataReducer';
import parlamentariansDataReducer from './parlamentariansDataReducer';
import parlamentariansSearchDataReducer from './parlamentariansSearchDataReducer';
import selectedParlamentary from './selectedParlamentary';
import actualUser from './actualUserReducer';
import questionDataReducer from './questionDataReducer';

const rootReducer = combineReducers({
  answeredQuestions: answeredQuestionReducer,
  propositions: propositionDataReducer,
  actualQuestionID: actualQuestionIDReducer,
  rankingData: rankingDataReducer,
  parlamentariansData: parlamentariansDataReducer,
  parlamentariansSearch: parlamentariansSearchDataReducer,
  selectedParlamentary,
  actualUser,
  questionData: questionDataReducer,
});

export default rootReducer;
