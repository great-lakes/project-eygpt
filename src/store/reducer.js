import { combineReducers } from 'redux'
import { reducer as hubs } from '../modules/hubs'
import { reducer as hubCreationForm } from '../modules/hubCreationForm'
import { reducer as generators } from '../modules/generators'
import { reducer as device } from '../modules/devices'
import { reducer as deviceCreationForm } from '../modules/deviceCreationForm'

export default combineReducers({
  hubs,
  hubCreationForm,
  generators,
  device,
  deviceCreationForm
})
