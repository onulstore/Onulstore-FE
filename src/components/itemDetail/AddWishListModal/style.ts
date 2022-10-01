import styled from 'styled-components';

export const AddWishListModalContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 5rem;
  z-index: 9999;

  .content-container {
    height: 32.5rem;
    width: 30.2rem;
    background-color: #fff;

    box-sizing: border-box;
    position: sticky;
    top: 18rem;
    margin: auto;

    border-radius: 1rem;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      padding: 4.1rem 3rem 4.3rem 3rem;
      box-sizing: border-box;
      color: #505050;
      line-height: 1.7;
      .modal-state {
        font-weight: 700;
        font-size: 22px;
      }
      .modal-msg {
        font-weight: 500;
        font-size: 1.4rem;
        padding-bottom: 4rem;
        box-sizing: border-box;
      }
    }
  }
  .btn-container {
    display: flex;

    .btn {
      width: 15.1rem;
      padding: 2rem 2.8rem;
      box-sizing: border-box;

      background-color: #d86145;

      outline: none;
      border: none;
      color: #fff;

      font-weight: 600;
      font-size: 15px;
      line-height: 19px;

      border-radius: 0 0 1rem 0;

      &:first-child {
        background-color: #505050;
        border-radius: 0 0 0 1rem;
      }
    }
  }
`;
