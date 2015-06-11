/*
 *  REST API for substation overview page.
 *
 *  GET /api/substations/<substation_id>/units/<unit_id>/powermeter/<powermeter_id>
 *  GET /api/substations/<substation_id>/units/<unit_id>/powermeter/<powermeter_id>/alarms/active
 *  GET /api/substations/<substation_id>/units/<unit_id>/powermeter/<powermeter_id>/alarms/historical
 */


/* 
 *  Get a detail of power meter.
 *
 *  OPERATION
 *
 *  GET /api/substations/<substation_id>/units/<unit_id>/powermeter/<powermeter_id>
 *
 *
 *  RESPONSE
 *
 *  Property       Type              Description
 *  ----------------------------------------------------------------------------
 */

var powerMeter = {
  'name': 'T150',
  'timestamp': '2015/02/10 23:58:00',
  'voltage': {
    'avg': 220.1,
    'r': 220.1,
    's': 220.1,
    't': 220.1,
    'ub': 10.1
  },
  'current': {
    'avg': 220.1,
    'r': 220.1,
    's': 220.1,
    't': 220.1,
    'ub': 10.1
  },
  'power': {
    'apparent': ?,
    'reactive': ?,
    'real': ?
  },
  'thd': {
    'avg': 6.26,
    'r': 5.93,
    's': 5.83,
    't': 7.03 
  },
  'energyTotalizer': 212121221,
}


exports.powerMeter = powerMeter;


/* 
 *  Get a list of active alarms in wells overview sorted by datetime in
 *  ascending/descending.
 *
 *
 *  OPERATION
 *
 *  GET /api/substations/<substation_id>/units/<unit_id>/powermeter/<powermeter_id>/alarms/active
 *
 *
 *  RESPONSE
 *
 *  Property       Type              Description
 *  ----------------------------------------------------------------------------
 *  date           string            Date of active alarm (yyyy/MM/dd)
 *  time           string            Time of active alarm (HH:mm:ss)
 *  equipment      string            Equipment which has a problem 
 *  message        string            Message of problem
 */

var activeAlarms = [
  {
    'date': '2015/05/03',
    'time': '18:36:50',
    'equipment': 'INC',
    'message': 'Incoming ST-S Undervoltage'
  },
  {
    'date': '2015/05/03',
    'time': '17:22:11',
    'equipment': 'INC',
    'message': 'Incoming ST-S Undervoltage'
  },
];

exports.activeAlarms = activeAlarms;


/* 
 *  Get a list of historical alarms in wells overview sorted by datetime in
 *  ascending/descending.
 *
 *
 *  OPERATION
 *
 *  GET /api/substations/<substation_id>/units/<unit_id>/powermeter/<powermeter_id>/alarms/historical
 *
 *
 *  REQUEST
 *
 *  Property       Type              Description
 *  ----------------------------------------------------------------------------
 *  start_date     string            Start date of historical alarm
 *  end_date       string            End date of historical alarm
 *
 *
 *  RESPONSE
 *
 *  Property       Type              Description
 *  ----------------------------------------------------------------------------
 *  date           string            Date of active alarm (yyyy/MM/dd)
 *  time           string            Time of active alarm (HH:mm:ss)
 *  equipment      string            Equipment which has a problem 
 *  message        string            Message of problem
 */

var historicalAlarms = [
  {
    'date': '2015/05/03',
    'time': '18:36:50',
    'equipment': 'INC',
    'message': 'Incoming ST-S Undervoltage'
  },
  {
    'date': '2015/05/03',
    'time': '17:22:11',
    'equipment': 'INC',
    'message': 'Incoming ST-S Undervoltage'
  },
];

exports.historicalAlarms = historicalAlarms;
