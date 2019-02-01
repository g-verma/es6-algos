import React, {Component} from 'react';
import PropTypes from 'prop-types';
import NavigationProvider from './../containers/navigation-provider';
import {Modal} from '@stores/reactCommon';
import {ModalConfirmation} from '@stores/reactCommon';
import {DIVISION_MAPPING} from './../../config/constants';

class Disclaimer extends Component {
  static propTypes = {
    locationInformation: PropTypes.object.isRequired,
    confirm: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.modalConfirmationRef = React.createRef();
    this.onConfirm = this.onConfirm.bind(this);
  }

  onConfirm() {
    this.props.confirm();
  }

  componentDidMount() {
    this.modalConfirmationRef.current.open();
  }

  render() {
    let divisionName = 'not set';
    const division =
      DIVISION_MAPPING[
        this.props.locationInformation.getIn(['divInfo', 'num'])
      ];

    if (division) {
      divisionName = division.NAME;
    }

    return (
      <div className="disclaimer qe-disclaimer">
        <div className="disclaimer-title qe-disclaimer-title">
          <span className="disclaimer-title__highlight qe-disclaimer-title-highlight">
            Customer:
          </span>
          Please confirm the statement below.
        </div>
        <div className="disclaimer__content qe-disclaimer-content">
          {`You will be considered for both the ${divisionName} American Express Card and the ${divisionName} Credit Card. 
          If approved for both, you will be asked to select which card you would like.`}
        </div>
        <div className="disclaimer__notice qe-disclaimer-notice">
          If you have not received a new account brochure from the Sales
          Associate, please ask for one.
        </div>

        <Modal
          ref={this.modalConfirmationRef}
          closeButton={false}
          closeOnEsc={false}>
          <ModalConfirmation
            title="Associate:"
            description="Please verify you have provided the customer with a copy of the new account brochure by pressing OK below. Then hand the device to the customer."
            confirmCaption="OK"
          />
        </Modal>
        <NavigationProvider
          onYes={this.onConfirm}
          yesCaption="Confirm"
          yesEnabled={true}
          backEnabled={false}
        />
      </div>
    );
  }
}

export default Disclaimer;
