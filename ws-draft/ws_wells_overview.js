/*
 *  REST API for well overview page.
 *
 *  GET /api/wells/<well_id> 
 *  GET /api/wells/<well_id>/alarms/active
 *  GET /api/wells/<well_id>/alarms/historical
 */


/* 
 *  Get a list of wells.
 *
 *  OPERATION
 *
 *  GET /api/wells/<well_id> 
 *
 *
 *  RESPONSE
 *
 *  Property       Type                 Description
 *  ----------------------------------------------------------------------------
 *  name           string               Name of the plant
 *  bopd           integer              BOPD of the plant
 *  brl            integer              BRL of the plant
 *  equipments     [equipment object]   A list of wells object
 *
 *
 *  [equipments object]
 *
 *  This object defines a well object.
 *
 *  Property       Type              Description
 *  ----------------------------------------------------------------------------
 *  name           string            Name of the well
 *  type           string            Type of the well
 *                                   srp, esp
 *  size           integer           Size of well.
 *                                   1: small, 2: medium, 3: large 
 *  status         integer           Status of well.
 *                                   0: green, sensor is online and running well
 *                                   1: yellow, sensor is online and problem
 *                                      occurs
 *                                   2: black, sensor is offline
 *                                   3: gray, sensor is not installed
 *  alarm          integer           Status of alarm.
 *                                   0: nothing happens
 *                                   1: alarm is ringing
 */

var wells = [
  {
    'name': 'ST. P. PLANT 1',
    'bopd': 10,
    'brl': 1100,
    'equipments': [
      {
        'name': 'T.17R',
        'type': 'srp',
        'size': 2,
        'status': 0,
        'alarm': 0,
      },
      {
        'name': 'T.27R',
        'type': 'esp',
        'size': 3,
        'status': 3,
        'alarm': 0,
      },
      {
        'name': 'T.37R',
        'type': 'esp',
        'size': 1,
        'status': 0,
        'alarm': 0,
      },
      {
        'name': 'T.47R',
        'type': 'esp',
        'size': 3,
        'status': 0,
        'alarm': 0,
      },
      {
        'name': 'T.57R',
        'type': 'esp',
        'size': 2,
        'status': 2,
        'alarm': 0,
      },
      {
        'name': 'T.67R',
        'type': 'esp',
        'size': 2,
        'status': 0,
        'alarm': 1,
      },
      {
        'name': 'T.77R',
        'type': 'esp',
        'size': 1,
        'status': 0,
        'alarm': 0,
      },
      {
        'name': 'T.87R',
        'type': 'esp',
        'size': 3,
        'status': 1,
        'alarm': 0,
      }
    ] 
  },
  {
    'name': 'ST. P. PLANT 2',
    'bopd': 10,
    'brl': 1100,
    'equipments': [
      {
        'name': 'T.17R',
        'type': 'esp',
        'size': 2,
        'status': 0,
        'alarm': 0,
      },
      {
        'name': 'T.27R',
        'type': 'esp',
        'size': 3,
        'status': 3,
        'alarm': 0,
      },
      {
        'name': 'T.37R',
        'type': 'esp',
        'size': 1,
        'status': 0,
        'alarm': 0,
      },
      {
        'name': 'T.47R',
        'type': 'esp',
        'size': 3,
        'status': 0,
        'alarm': 0,
      },
      {
        'name': 'T.57R',
        'type': 'esp',
        'size': 2,
        'status': 2,
        'alarm': 0,
      },
      {
        'name': 'T.67R',
        'type': 'esp',
        'size': 2,
        'status': 0,
        'alarm': 0,
      },
      {
        'name': 'T.77R',
        'type': 'srp',
        'size': 1,
        'status': 0,
        'alarm': 0,
      },
      {
        'name': 'T.87R',
        'type': 'srp',
        'size': 3,
        'status': 1,
        'alarm': 0,
      }
    ] 
  },
];

exports.wells = wells;


/* 
 *  Get a list of active alarms in wells overview sorted by datetime in
 *  ascending/descending.
 *
 *
 *  OPERATION
 *
 *  GET /api/wells/<well_id>/alarms/active
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
 *  GET /api/wells/<well_id>/alarms/historical
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
