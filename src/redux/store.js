import { configureStore } from '@reduxjs/toolkit';
import plansReducer from './PlanSelection/plansSlice';
import devicesReducer from './DeviceManagement/devicesSlice';

const store = configureStore({
  reducer: {
    plans: plansReducer,
    devices: devicesReducer,
  },
});

export default store;
