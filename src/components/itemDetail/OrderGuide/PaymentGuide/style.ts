import styled from 'styled-components';
export const PaymentGuideContainer = styled.div`
  padding: 0rem 1.4rem 3.5rem 1.4rem;
  box-sizing: border-box;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: #2f2f33;
  line-height: 1.5rem;

  .credit-card-payment-guide {
    padding: 2.5rem 0;
    box-sizing: border-box;
    .credit-card-payment-type {
      li {
        text-indent: 0.5rem;
      }
    }
  }

  .credit-precautions-text {
    padding-bottom: 2.5rem;
    box-sizing: border-box;
  }

  .precautions-text {
    padding: 2.5rem 0 1.25rem;
    box-sizing: border-box;
  }
  .another-precautions-text {
    padding: 2.5rem 0;
    box-sizing: border-box;
  }
  .another-payment-guide {
    ul {
      text-indent: 0.5rem;
    }
  }
`;
