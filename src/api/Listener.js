import * as Broadcasts from '../../events/broadcasts'
import * as Actions from '../store/Actions'

export const BroadcastListener = (dispatch) => {
  return (broadcast) => {
    broadcast = JSON.parse(broadcast)

    let {time, sensor, data} = broadcast

    switch (sensor) {
      case Broadcasts.GYRO:
        return dispatch({type: Actions.UPDATE_GYRO, data: [time, data]})
      case Broadcasts.ACCELERATION:
        return dispatch({type: Actions.UPDATE_ACCELERATION, data: [time, data]})
      case Broadcasts.MAGNETOMETER:
        return dispatch({type: Actions.UPDATE_MAGNETOMETER, data: [time, data]})
      case Broadcasts.AIR_TANK_LEVEL:
        return dispatch({type: Actions.UPDATE_AIR_TANK_LEVEL, data: [time, data]})
      case Broadcasts.BATTERY_LEVEL:
        return dispatch({type: Actions.UPDATE_BATTERY, data: [time, data]})
      case Broadcasts.BRAKE:
        return dispatch({type: Actions.UPDATE_BRAKE, data: data[0]})
      case Broadcasts.DISTANCE:
        return dispatch({type: Actions.UPDATE_DISTANCE, data: [time, data]})
      case Broadcasts.BATTERY:
        return dispatch({type: Actions.UPDATE_BATTERY, data: [time, data]})
      case Broadcasts.EMERGENCY_STOP:
        return dispatch({type: Actions.UPDATE_EMERGENCY_STOP, data: data[0]})
      case Broadcasts.LEVITATION:
        return dispatch({type: Actions.UPDATE_LEVITATION, data: data[0]})
      case Broadcasts.IMU:
        return dispatch({type: Actions.UPDATE_IMU, data: [time, data]})
      case Broadcasts.SPEED:
        return dispatch({type: Actions.UPDATE_SPEED, data: [time, data]})
      case Broadcasts.START:
        return dispatch({type: Actions.UPDATE_POD_START, data: data[0]})
      case Broadcasts.TEMPERATURE:
        return dispatch({type: Actions.UPDATE_TEMP, data: [time, data]})
      default: console.error(`Unrecognized name: ${sensor}, data: ${data}`)
    }
  }
}