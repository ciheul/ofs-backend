/*
 *  REST API for substation overview page.
 *
 *  GET /api/substations/<substation_id> 
 *  GET /api/substations/<substation_id>/alarms/active
 *  GET /api/substations/<substation_id>/alarms/historical
 */


/* 
 *  Get a list of substations.
 *
 *  OPERATION
 *
 *  GET /api/substations/<substation_id> 
 *
 *
 *  RESPONSE
 *
 *  Property       Type              Description
 *  ----------------------------------------------------------------------------
 *  name           string            Name of the plant
 *  status         integer           Status of well.
 *                                   0: green, sensor is online and running well
 *                                   1: yellow, sensor is online and problem
 *                                      occurs
 *                                   2: black, sensor is offline
 *                                   3: gray, sensor is not installed
 *  alarms         integer           the number of alarms
 */

var substations = [
  {
    'name': ST-P. PLANT,
    'status': 0,
    'alarms': 1,
  },
  {
    'name': ST.-V,
    'status': 0,
    'alarms': 0,
  },
]

exports.substations = substations;


/* 
 *  Get a list of active alarms in wells overview sorted by datetime in
 *  ascending/descending.
 *
 *
 *  OPERATION
 *
 *  GET /api/substations/<substation_id>/alarms/active
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
 *  GET /api/substations/<substation_id>/alarms/historical
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
