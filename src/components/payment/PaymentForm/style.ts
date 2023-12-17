import styled from 'styled-components';

interface Props {
  errorObserver: (target: string) => string;
}

export const PaymentFormContainer = styled.div<Props>`
  position: relative;
  .delivery-info-form {
    display: flex;
    flex-direction: column;
    padding: 0 3.2rem;
    box-sizing: border-box;
    //COMMON
    .error-msg {
      color: red;
    }
    label {
      margin-bottom: 0.4rem;
      display: inline-block;
    }
    input {
      border: 0.1rem solid #cfcfcf;
    }
    //name-section
    .origin-name-section {
      display: flex;
      margin-bottom: 0.7rem;

      .first-name {
        border: ${(props) => {
          return props.errorObserver('originFirstName');
        }};
        width: 14.95rem;
        height: 4rem;
        margin-right: 1.4rem;
      }
      .last-name {
        border: ${(props) => {
          return props.errorObserver('originLastName');
        }};
        width: 14.95rem;
        height: 4rem;
      }
    }

    .kana-name-section {
      display: flex;

      .first-name {
        border: ${(props) => {
          return props.errorObserver('kanaFirstName');
        }};
        width: 14.95rem;
        height: 4rem;
        margin-right: 1.4rem;
      }
      .last-name {
        border: ${(props) => {
          return props.errorObserver('kanaLastName');
        }};
        width: 14.95rem;
        height: 4rem;
      }
    }
    //delivery-info
    .delivery-info-section {
      margin-top: 1.8rem;
      .get-zip-code-container {
        display: flex;
        .get-zip-code-input {
          width: 22.5rem;
          height: 4rem;
          margin-right: 0.6rem;
          border: ${(props) => {
            return props.errorObserver('zipCodeNumber');
          }};
        }
        .get-zip-code-btn {
          background: #f5f5f5;
          border: none;
          border-radius: 0.5rem;
          width: 12rem;
          padding: 1.2rem 1.6rem;
          box-sizing: border-box;
          outline: none;
          gap: 10px;

          font-size: 1.2rem;
          font-weight: 600;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .get-address-input,
      .get-detail-address-input {
        width: 31.2rem;
        height: 4rem;
        padding: 1rem;
        gap: 1rem;
        margin-top: 14px;
      }
      .get-detail-address-input {
        border: ${(props) => {
          return props.errorObserver('detailAddress');
        }};
      }
    }
    //orders-input
    .orders-section {
      display: flex;
      flex-direction: column;
      .user-phone-number-container,
      .user-email-container,
      .delivery-message-container {
        padding-top: 4.3rem;
        box-sizing: border-box;
        input {
          width: 100%;
          height: 4rem;
          margin-top: 0.4rem;
          box-sizing: border-box;
        }
        .user-phone-number-input {
          border: ${(props) => {
            return props.errorObserver('userPhoneNumber');
          }};
        }
        .user-email-input {
          border: ${(props) => {
            return props.errorObserver('userEmail');
          }};
        }
      }
    }
    .payment-btn {
      position: absolute;
      bottom: -13rem;
    }
  }
`;
