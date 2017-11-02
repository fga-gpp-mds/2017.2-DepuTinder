import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class AdminQuestionPage extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div
          id="titleAdminQuestion"
        ><br />
        Criar Questão
        </div>
        <br />
        <div className="row">
          <div className="col s6 m6 l6">
            <center>
              <div className="card" id="cardQuestionAdmin">
                <div className="card-content white accent-3">
                  <i className="material-icons activator right" id="cardHelpIcon">help</i>
                  <form>
                    <div className="container">
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="questionTitle" type="text" data-length="50" />
                          <label htmlFor="questionTitle">Titulo</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="questionSubTitle" type="text" data-length="50" />
                          <label htmlFor="questionSubTitle">SubTitulo</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea id="adminQuestionButtonsRow" className="materialize-textarea" data-length="120" />
                          <label htmlFor="adminQuestionButtonsRow">Descrição</label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-reveal" id="cardReveal">
                  <span id="cardRevealPropositionTitle" className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
                  <p id="cardRevealPropositionParagraph">DÚVIDAS</p>
                  <div className="propositionAuthor">
                    <br /> 1)O que deve ser escrito nos campos?<br />
                    <br /> 2)Como selecionar uma proposicao?<br />
                    <br /> 2)Como salvar uma questao?<br />
                  </div>
                </div>
              </div>
            </center>
          </div>
        </div>
        <div className="row" id="adminQuestionButtonsRow">
          <div className="col s6 m6 l6" id="backButtonCollumn">
            <center>
              <a
                className="waves-effect waves-light btn black yellow-text text-accent-3"
                id="backButton"
                onClick={() => browserHistory.push('/admin')}
              >
                <i className="material-icons left" id="backButtonIcon">arrow_back</i>Voltar
              </a>
            </center>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminQuestionPage;