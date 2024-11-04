import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, type: 'Primary GPS' },
  { id: 2, type: 'Secondary GPS' },
  { id: 3, type: 'Drive mate Go' },
  { id: 4, type: 'Lockbox' }
];

const devicesSlice = createSlice({
  name: 'devices',
  initialState,
  reducers: {
    updateDevice: (state, action) => {
      const { id, serialNumber, bringingOwnDevice, image } = action.payload;
      const device = state.find((device) => device.id === id);
      if (device) {
        device.serialNumber = serialNumber;
        device.bringingOwnDevice = bringingOwnDevice;
        device.image = image;
      }
    },
  },
});

export const { updateDevice } = devicesSlice.actions;
export const selectDevices = (state) => state.devices;
export default devicesSlice.reducer;
