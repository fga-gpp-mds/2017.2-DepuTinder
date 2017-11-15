import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchQuestionData } from '../../actions/fetchQuestionData';

class AdminListQuestions extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.getResults();
  }

  renderQuestions() {
    // console.log(this.props.question);
    return this.props.question.map((data) => {
      return (
        <div className="row" key={data.id}>
          <div className="col s12 m12">
            <div className="card-content yellow-text card black darken-1">
              <div>Título: {data.questionTitle}</div>
              <div>Subtítulo: {data.questionSubtitle}</div>
              <div>Descrição: {data.questionDescription}</div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>{this.renderQuestions()}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    question: state.questionData,
  };
}

AdminListQuestions.propTypes = {
  getResults: PropTypes.func,
  question: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
};

AdminListQuestions.defaultProps = {
  getResults() {},
  question: ([]),
};

const mapDispatchToProps = (dispatch) => {
  return {
    getResults() {
      dispatch(FetchQuestionData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminListQuestions);
