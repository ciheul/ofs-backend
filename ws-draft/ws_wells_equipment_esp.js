/*
 *  REST API for well ESP equipment page.
 *
 *  GET /api/wells/<well_id>/esp/<esp_id>
 *  GET /api/wells/<well_id>/esp/<esp_id>/alarms/active
 *  GET /api/wells/<well_id>/esp/<esp_id>/alarms/historical
 */


/* 
 *  Get information about ESP equipment
 *
 *
 *  OPERATION
 *
 *  GET /api/wells/<well_id>/esp/<esp_id>
 *
 *
 *  RESPONSE
 *
 *  Property       Type                   Description
 *  ----------------------------------------------------------------------------
 *  name           string                 Name of the ESP well
 *  general        {general object}       General information around the rod pump
 *                                        picture
 *  monitoring     {monitoring object}    SRP Monitoring Report
 */


var esp = {
  'name': 'T.175',
  'general': {
    // 'timestamp': '2015/02/10 23:58:00',  // OFS UI DESIGN.pdf
    'wellhead': {
      'casingPress': 2000.1,
      'tubingPress': 30000.1
    },
    'inferredProd': {
      'rate': 30000.1,
      'total': 30000.1
    },
    'voltage': {
      'avg': 220.1,
      'r': 220.1,
      's': 220.1,
      't': 220.1,
      'ub': 10.1
    },,
    'current': {
      'avg': 220.1
      'r': 220.1,
      's': 220.1,
      't': 220.1,
      'ub': 10.1
    },
    'motor': {
      'frequency': 56.00,
      'power': 0.00,
    },
    'pumpIntake': {
      'pressure': 30000.1,
      'estLevel': 30000.1
    },
    'status': {
      'vfd': 0, // 0: running, 1: pause
      'message': ''
    }
  },
  'monitoring': {
    'timestamp': '2015/02/10 23:58:00',
    'contactorStatus': 1, // 0: open, 1: closed
    'vsdStatus': 0, // 0: normal, 1: abnormal
    'vsdFrequency': 55.6,
    'outputPower': 22.3,
    'voltage': {
      'avg': 384.5,
      'r': 121.0,
      's': 115.0, 
      't': 130.0,
      'ub': 10.0
    },
    'current': {
      'avg': 161.0,
      'r': 90.0,
      's': 80.0,
      't':80.0,
      'ub': 5.0
    },
    'pumpInPress': 0.00,
    'estFluidLevel': 0.00,
    'casingHeadPress': 0.00,
    'tubingHeadPress': 0.00,
    'inferredProd': 0.00,
  }
}

exports.esp = esp;


/* 
 *  Get a list of active alarms in SRP equipment sorted by datetime in
 *  ascending/descending.
 *
 *
 *  OPERATION
 *
 *  GET /api/wells/<well_id>/esp/<esp_id>/alarms/active
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
 *  GET /api/wells/<well_id>/esp/<esp_id>/alarms/historical
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
