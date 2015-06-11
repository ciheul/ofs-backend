/*
 *  REST API for well SRP equipment page.
 *
 *  GET /api/wells/<well_id>/srp/<srp_id>
 *  GET /api/wells/<well_id>/srp/<srp_id>/alarms/active
 *  GET /api/wells/<well_id>/srp/<srp_id>/alarms/historical
 */


/* 
 *  Get information about SRP equipment
 *
 *
 *  OPERATION
 *
 *  GET /api/wells/<well_id>/srp/<srp_id>
 *
 *
 *  RESPONSE
 *
 *  Property       Type                   Description
 *  ----------------------------------------------------------------------------
 *  name           string                 Name of the SRP well
 *  general        {general object}       General information around the rod pump
 *                                        picture
 *  monitoring     {monitoring object}    SRP Monitoring Report
 *  powerMotor     {powerMotor object}    SRP Power Motor Report
 *
 *
 *  {general object}
 *
 *  Property       Type                   Description
 *  ----------------------------------------------------------------------------
 *  spm            integer                This information is only in first
 *                                        mockup (OFS UI DESIGN.pdf)
 *  rpm            integer                This information is only in first
 *                                        mockup (OFS UI DESIGN.pdf)
 *  motor          {motor object}
 *  inferredProd   {inferredProd object}
 *  pumpStroke     {pumpStroke object}
 *
 *
 *  {motor object}
 *
 *  Property       Type                   Description
 *  ----------------------------------------------------------------------------
 *  status         integer                Status of motor
 *                                        0: running, 1: pause
 *  voltage        {voltage object}       Voltage in avg, min, max
 *  current        {current object}       Current in avg, min, max
 *  power          {power object}         Power in avg, min, max
 *
 *
 *  {inferredProd object}
 *
 *  Property       Type                   Description
 *  ----------------------------------------------------------------------------
 *  rate           float
 *  total          float
 *
 *
 *  {pumpStroke object}
 *
 *  Property       Type                   Description
 *  ----------------------------------------------------------------------------
 *  speed          float
 *  fillage        float
 *  cycle          float
 *
 *
 *  {monitoring object}
 *
 *  Property       Type                   Description
 *  ----------------------------------------------------------------------------
 *
 *
 *  {powerMotor object}
 *
 *  Property       Type                   Description
 *  ----------------------------------------------------------------------------
 *
*
 *  {voltage object}, {current object}, {power object}
 *
 *  Property       Type                   Description
 *  ----------------------------------------------------------------------------
 *  avg            float
 *  min            float
 *  max            float
 */

var srp = {
  'name': 'T.150',
  'general': {
    //'spm': 10,
    //'rpm': 3000,
    'motor': {
      'status': 0, // 0: running, 1: pause
      'voltage': {
        'avg': 220.1,
        'min': 220.1,
        'max': 220.1
      },
      'current': {
        'avg': 220.1,
        'min': 220.1,
        'max': 220.1
      },
      'power': {
        'avg': 220.1,
        'min': 220.1,
        'max': 220.1
      },
    },
    'inferredProd': {
      'rate': 30000.1,
      'total': 30000.1
    },
    'pumpStroke': {
      'speed': 7.1,
      'fillage':85.3,
      'cycle': 1212123
    },
  },
  'monitoring': {
    //'timestamp': '2015/02/10 23:58:00', // OFS UI DESIGN.pdf
    'status': 0, // 0: running, 1: pause
    'spm': 7.2,
    'pprl': 1000,
    'mprl': 2000,
    'pumpFillage': 50,
    'cycleCounter': 12222111,
    'inferredProd': 100
  },
  'powerMotor': {
    'timestamp': '2015/02/10 23:58:00',
    'status': 0, // 0: running, 1: pause
    'voltage': {
      'avg': 384.5,
      'max': 390.0,
      'min': 370,
      'unbalance': 10.0
    },
    'current': {
      'avg': 110.0,
      'max': 161.0,
      'min': 90,
      'unbalance': 5.5
    },
    'power': {
      'avg': 2000,
      'max': 2000,
      'min': 2000
    },
    'strokeEnergy': 2000,
    'inferredProd': 10.99, 
  }
}

exports.srp = srp;


/* 
 *  Get a list of active alarms in SRP equipment sorted by datetime in
 *  ascending/descending.
 *
 *
 *  OPERATION
 *
 *  GET /api/wells/<well_id>/srp/<srp_id>/alarms/active
 *
 *
 *  RESPONSE
 *
 *  Property       Type              Description
 *  ----------------------------------------------------------------------------
 *  date           string            Date of active alarm (yyyy/MM/dd)
 *  time           string            Time of active alarm (HH:mm:ss)
 *  message        string            Message of problem
 */

var activeAlarms = [
  {
    'date': '2015/05/03',
    'time': '18:36:50',
    'message': 'Incoming ST-S Undervoltage'
  },
  {
    'date': '2015/05/03',
    'time': '17:22:11',
    'message': 'Incoming ST-S Undervoltage'
  },
];

exports.activeAlarms = activeAlarms;


/* 
 *  Get a list of historical alarms in SRP equipment sorted by datetime in
 *  ascending/descending.
 *
 *
 *  OPERATION
 *
 *  GET /api/wells/<well_id>/srp/<srp_id>/alarms/historical
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
 *  message        string            Message of problem
 */

var historicalAlarms = [
  {
    'date': '2015/05/03',
    'time': '18:36:50',
    'message': 'Incoming ST-S Undervoltage'
  },
  {
    'date': '2015/05/03',
    'time': '17:22:11',
    'message': 'Incoming ST-S Undervoltage'
  },
];

exports.historicalAlarms = historicalAlarms;
