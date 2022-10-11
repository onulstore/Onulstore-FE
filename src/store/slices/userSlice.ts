import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  buildingName: '',
  detailAddress: '',
  email: '',
  firstKana: '',
  firstName: '',
  lastKana: '',
  lastName: '',
  phoneNum: '',
  postalCode: '',
  roadAddress: '',
  username: '',
};
const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserInfo(state, action) {
      const {
        buildingName,
        detailAddress,
        email,
        firstKana,
        firstName,
        lastKana,
        lastName,
        phoneNum,
        postalCode,
        roadAddress,
        username,
      } = action.payload;

      state.buildingName = buildingName;
      state.detailAddress = detailAddress;
      state.email = email;
      state.firstKana = firstKana;
      state.firstName = firstName;
      state.lastKana = lastKana;
      state.lastName = lastName;
      state.phoneNum = phoneNum;
      state.postalCode = postalCode;
      state.roadAddress = roadAddress;
      state.username = username;
    },
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
