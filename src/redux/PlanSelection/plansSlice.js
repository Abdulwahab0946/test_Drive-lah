import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    title: 'Just mates',
    id: 'justMates',
    features: ['Bring your own GPS', 'Mileage reporting to be done by you', 'In-person key handover to guests'],
    price: 'Free',
  },
  {
    title: 'Good mates',
    id: 'goodMates',
    features: ['Primary GPS included', 'Automated mileage calculations', 'In-person key handover to guests'],
    price: '$10/month',
  },
  {
    title: 'Best mates',
    id: 'bestMates',
    features: ['Keyless access technology', 'Automated mileage calculations', 'Remote handover to guests'],
    price: '$30/month',
  },
];

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {},
});

export const selectPlans = (state) => state.plans;
export default plansSlice.reducer;
