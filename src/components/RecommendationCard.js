import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalFooter from "react-bootstrap/ModalFooter";

class RecommendationCard extends Component {
  state = {
    openModal: false,
  };

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    const { name, designation, company, message } = this.props.recommendation;
    let z = "";
    if (message.length > 20) {
      z = message.slice(0, 20) + "...";
    } else {
      z = message;
    }
    return (
      <div className="col-12 col-md-4">
        <div className="card shadow streched-link h-100">
          <div className="card-body">
            <h4 className="card-text">{z}</h4>
            <p className="card-text text-secondary m-0">{name}</p>
            <p className="card-text text-secondary">
              {designation} at {company}
            </p>
            <Link
              onClick={this.onClickButton}
              to="#mymodal"
              //   data-toggle='modal'
              //   data-target="#mymodal"
              className="stretched-link"
            ></Link>
            <div className="modal-dialog">
              <Modal
                open={this.state.openModal}
                onClose={this.onCloseModal}
                dialogClassName="modal"
              >
                <ModalHeader className="mod">
                  <h2>{message}</h2>
                </ModalHeader>
                <ModalBody className="mod text-center">{name}</ModalBody>
                <ModalFooter className="mod justify-content-center">
                  {designation} at {company}
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RecommendationCard;
