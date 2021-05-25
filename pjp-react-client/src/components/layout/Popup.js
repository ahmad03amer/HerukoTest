import { Modal, Button, Col, Form, Row } from 'react-bootstrap'

import React, { Component } from 'react'



class Popup extends Component {

  constructor(props) {
    super(props);

  }




  render() {

    return (
      <div style={{ backgroundColor: 'blue', }}>
        <Modal
          {...this.props}

          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
        <Button  variant= 'danger' onClick={this.props.onHide}>Close</Button>
      </Modal.Footer> */}
        </Modal>



      </div>
    )
  }
}

export default Popup;

