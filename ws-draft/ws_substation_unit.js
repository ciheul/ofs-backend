/*
 *  REST API for substation overview page.
 *
 *  GET /api/substations/<substation_id>/units/<unit_id> 
 *  GET /api/substations/<substation_id>/units/<unit_id>/alarms/active
 *  GET /api/substations/<substation_id>/units/<unit_id>/alarms/historical
 */


/* 
 *  Get a list of substations.
 *
 *  OPERATION
 *
 *  GET /api/substations/<substation_id>/units/<unit_id> 
 *
 *
 *  RESPONSE
 *
 *  Property       Type                 Description
 *  ----------------------------------------------------------------------------
 *  name           string               Name of the unit
 *  equipment      [equipment object]   A list of equipments
 *  graph          {graph object}       Graph abstraction using key-value
 *
 *
 *  [equipment object]
 *
 *  Property       Type                 Description
 *  ----------------------------------------------------------------------------
 *  name           string               Name of the equipment 
 *  type           string               Type of the equipment
 *  status         integer              Status of equipment.
 *                                      0: green, sensor is online and running well
 *                                      1: yellow, sensor is online and problem
 *                                         occurs
 *                                      2: black, sensor is offline
 *                                      3: gray, sensor is not installed
 *
 *  {graph object}
 *
 *  Graph for substation. It satisfies Directed Acyclic Graph (DAG).
 *  If one needs to get the node's detail, check the substation variable.
 *
 *  Key: prevNode
 *  Value: nextNode
 *
 *  Special node:
 *  - start: dangling node, start of the path
 *  - end: dangling node, end of the path
 */

var substation = {
  'name': 'ST-V', 
  'equipment': [
    {
      'name': 'CB-I.01',
      'type': 'cb',
      'status': 0,
    },
    {
      'name': 'CB-O.01',
      'type': 'cb',
      'status': 0,
    },
    {
      'name': 'PM-INC',
      'type': 'pm',
      'status': 0,
    },
    {
      'name': 'PM-T150',
      'type': 'pm',
      'status': 0,
    },
    {
      'name': 'TRF.STV',
      'type': 'trf',
      'status': 0,
    },
  ],
  'graph': {
    'start': 'TRF.STV',
    'TRF.STV': 'CB-I.01',
    'CB-I.01': 'PM-INC',
    'PM-INC': 'CB-0.01', 
    'CB-0.01': 'PM-T150', 
    'PM-T150': 'end', 
  }
}

exports.substation = substation;


/* 
 *  Get a list of active alarms in wells overview sorted by datetime in
 *  ascending/descending.
 *
 *
 *  OPERATION
 *
 *  GET /api/substations/<substation_id>/units/<unit_id>/alarms/active
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
 *  GET /api/substations/<substation_id>/units/<unit_id>/alarms/historical
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
