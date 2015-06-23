var async = require('async');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ofs');

var oilWellOverView = require('./OilWellOverView.json');
var srp = require('./Srp.json');
var esp = require('./Esp.json');

var substationOverview = require('./SubstationOverView.json');
var substationEqu = require('./SubstationEqu.json');
var substationUnitOverview = require('./SubstationUnit.json');

var activeAlarms = require('./ActiveAlarm.json');
var historicalAlarms = require('./HistoricalAlarm.json');

var OilWell = require('../models/well').OilWell;
var Well = require('../models/well').Well;
var Srp = require('../models/srp');
var Esp = require('../models/esp');

var Substation = require('../models/substation');
var SubstationUnit = require('../models/substation-unit').SubstationUnit;
var Unit = require('../models/substation-unit').Unit;
var SubstationEqu = require('../models/substation-equ');

var ActiveAlarm = require('../models/active-alarm');
var HistoricalAlarm = require('../models/historical-alarm');


async.each(oilWellOverView, function(well) {
  var oilWells = [];
  async.each(well.OilWells, function(oilWell) {  	
    var ow = new OilWell({
      Name: oilWell.Name,
      GroupName: oilWell.GroupName,
      Size: oilWell.Size,
      Status: oilWell.Status,
      DetailUrl: oilWell.DetailUrl,
      UnitId: oilWell.UnitId,
      AlarmStatus: oilWell.AlarmStatus,
      AlarmCount: oilWell.AlarmCount
    });
    oilWells.push(ow);
  });

  var w = new Well({
    Name: well.Name,
    OilWells: oilWells
  });

  w.save(function (err, w) {
    if (err) return console.error(err);
    console.log("SUCCESS => " + w.Name);
  });
});


async.each(srp, function(srp){
  var s = new Srp({
    FR601_TimeStamp: srp.FR601_TimeStamp,
    EquipmentID: srp.EquipmentID,
    FR601_ContactorStatus: srp.FR601_ContactorStatus,
    SPM: srp.SPM,
    PPRL: srp.PPRL,
    MPRL: srp.MPRL,
    PumpFillage: srp.PumpFillage,
    CycleCounter: srp.CycleCounter,
    FR601_EstProdRateBPH: srp.FR601_EstProdRateBPH,
    FR601_Validity: srp.FR601_Validity,
    FR602_TimeStamp: srp.Timestamp,
    FR602_ContactorStatus: srp.FR602_ContactorStatus,
    PMStatus: srp.PMStatus,
    VoltageAverage: srp.VoltageAverage,
    VoltageMax: srp.VoltageMax,
    VoltageMin: srp.VoltageMin,
    VoltageUnbalance: srp.VoltageUnbalance,
    CurrentAverage: srp.CurrentAverage,
    CurrentMax: srp.CurrentMax,
    CurrentMin: srp.CurrentMin,
    CurrentUnbalance: srp.CurrentUnbalance,
    PowerAverage: srp.PowerAverage,
    PowerMax: srp.PowerMax,
    PowerMin: srp.PowerMin,
    StrokeEnergyWH: srp.StrokeEnergyWH,
    FR602_EstProdRateBPH: srp.FR602_EstProdRateBPH,
    FR602_Validity: srp.FR602_Validity
  });

  s.save(function (err, s){
    if (err) return console.error(err);
    console.log("SUCCESS => " + s.FR602_Validity);
  });
});


async.each(esp, function(esp){
  var e = new Esp({
    TimeStamp: esp.Timestamp,
    EquipmentID: esp.EquipmentID,
    ContactorStatus: esp.ContactorStatus,
    VSDStatus: esp.VSDStatus,
    VSDStatusMessage: esp.VSDStatusMessage,
    VSDFrequency: esp.VSDFrequency,
    OutputPower: esp.OutputPower,
    VoltageAverage: esp.VoltageAverage,
    VoltageR: esp.VoltageR,
    VoltageS: esp.VoltageS,
    VoltageT: esp.VoltageT,
    VoltageUnbalance: esp.VoltageT,
    CurrentAverage: esp.CurrentAverage,
    CurrentR: esp.CurrentR,
    CurrentS: esp.CurrentS,
    CurrentT: esp.CurrentT,
    CurrentUnbalance: esp.CurrentUnbalance,
    PumpIntakePressureBar: esp.PumpIntakePressureBar,
    CasingHeadPressureBar: esp.CasingHeadPressureBar,
    TubingHeadPressureBar: esp.TubingHeadPressureBar,
    EstProdRateBPH: esp.EstProdRateBPH,
    Validity: esp.Validity
  });

  e.save(function (err, e){
    if (err) return console.error(err);
    console.log("SUCCESS => " + e.Validity);
  });
});


async.each(substationUnitOverview, function(unit) {
  var substationUnits = [];
  async.each(unit.SubstationUnits, function(substationUnit) {
    var su = new SubstationUnit({
      Name: substationUnit.Name,
      GroupName: substationUnit.GroupName,
      Size: substationUnit.Size,
      Status: substationUnit.Status,
      DetailUrl: substationUnit.DetailUrl,
      UnitId: substationUnit.UnitId,
      AlarmStatus: substationUnit.AlarmStatus,
      AlarmCount: substationUnit.AlarmCount
    });
    substationUnits.push(su);
  });

  var u = new Unit({
    Name: unit.Name,
    SubstationUnits: substationUnits
  });

  u.save(function (err, u) {
    if (err) return console.error(err);
    console.log("SUCCESS => " + u.Name);
  });
});


async.each(substationOverview, function(substation){
  var so = new Substation({
    Name: substation.Name,
    Status: substation.Status,
    DetailUrl: substation.DetailUrl,
    AlarmCount: substation.AlarmCount
  });

  so.save(function (err, so) {
    if (err) return console.error(err);
    console.log("SUCCESS => " + so.Name);
  });
});


async.each(substationEqu, function(substationEqu) {
  var se =  new SubstationEqu({
    TimeStamp: substationEqu.Timestamp,
    VoltageAverage: substationEqu.VoltageAverage,
    VoltageR: substationEqu.VoltageR,
    VoltageS: substationEqu.VoltageS,
    VoltageT: substationEqu.VoltageT,
    VoltageUnbalance: substationEqu.VoltageUnbalance,
    CurrentAverage: substationEqu.CurrentAverage,
    CurrentR: substationEqu.CurrentR,
    CurrentS: substationEqu.CurrentS,
    CurrentT: substationEqu.CurrentT,
    CurrentUnbalance: substationEqu.CurrentUnbalance,
    PowerApparent: substationEqu.PowerApparent,
    PowerReactive: substationEqu.PowerReactive,
    PowerReal: substationEqu.PowerReal,
    THDAverage: substationEqu.THDAverage,
    THDR: substationEqu.THDR,
    THDS: substationEqu.THDS,
    THDT: substationEqu.THDT,
    EnergyTotalizer: substationEqu.EnergyTotalizer
  });

  se.save(function (err, se){
    if (err) return console.error(error);
    console.log("SUCCESS => " + se.Timestamp);
  });
});


async.each(activeAlarms, function(activeAlarm){
  var dateSplit = activeAlarm.Date.split('-');
  var timeSplit = activeAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                           timeSplit[0], timeSplit[1], timeSplit[2], 0);

  var aa = new ActiveAlarm({
    Timestamp: timestamp,
    Equipment: activeAlarm.Equipment,
    Message: activeAlarm.Message
  });

  aa.save(function (err, aa){
    if (err) return console.error(err);
    console.log("SUCCESS => " + aa.Message);
  });
});


async.each(historicalAlarms, function(historicalAlarm){
  var dateSplit = historicalAlarm.Date.split('-');
  var timeSplit = historicalAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                           timeSplit[0], timeSplit[1], timeSplit[2], 0);

  var ha = new HistoricalAlarm({
    Timestamp: timestamp,
    Equipment: historicalAlarm.Equipment,
    Message: historicalAlarm.Message
  });

  ha.save(function (err, ha){
    if (err) return console.error(err);
    console.log("SUCCESS => " + ha.Message);
  });
});


// var OilWellActiveAlarm = require('../models/well-active-alarm');
// var OilWellHistoricalAlarm = require('../models/well-historical-alarm');
// var SrpActiveAlarm = require('../models/srp-active-alarm');
// var SrpHistoricalAlarm = require('../models/srp-historical-alarm');
// var EspActiveAlarm = require('../models/esp-active-alarm');
// var EspHistoricalAlarm = require('../models/esp-historical-alarm');
// var SubstationActiveAlarm = require('../models/substation-active-alarm');
// var SubstationHistoricalAlarm = require('../models/substation-historical-alarm');
// var SubstationUnitActiveAlarm = require('../models/substation-unit-active-alarm');
// var SubstationUnitHistoricalAlarm = require('../models/substation-unit-historical-alarm');
// var SubstationEquActiveAlarm = require('../models/substation-equ-active-alarm');
// var SubstationEquHistoricalAlarm = require('../models/substation-equ-historical-alarm');
//
// var oilWellActiveAlarms = require('./OilWellActiveAlarms.json');
// var oilWellHistoricalAlarms = require('./OilWellHistoricalAlarms.json');
// var srpActiveAlarms = require('./SrpActiveAlarms.json');
// var srpHistoricalAlarms = require('./SrpHistoricalAlarms.json');
// var espActiveAlarms = require('./EspActiveAlarms.json');
// var espHistoricalAlarms = require('./EspHistoricalAlarms.json');
// var substationActiveAlarm = require('./SubstationActiveAlarm.json');
// var substationHistoricalAlarm = require('./SubstationHistoricalAlarm.json');
// var substationEquActiveAlarm = require('./SubstationEquActiveAlarm.json');
// var substationEquHistoricalAlarm = require('./SubstationEquHistoricalAlarm.json');
// var substationUnitActiveAlarm = require('./SubstationUnitActiveAlarm.json');
// var substationUnitHistoricalAlarm = require('./SubstationUnitHistoricalAlarm.json');
//
// async.each(oilWellActiveAlarms, function(activeAlarm){
//   var dateSplit = activeAlarm.Date.split('-');
//   var timeSplit = activeAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                            timeSplit[0], timeSplit[1], timeSplit[2], 0);
//
//   var owaa = new OilWellActiveAlarm({
//     Timestamp: timestamp,
//     Equipment: activeAlarm.Equipment,
//     Message: activeAlarm.Message
//   });
//
//   owaa.save(function (err, owaa){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + owaa.Message);
//   });
// });
//
//
// async.each(oilWellHistoricalAlarms, function(historicalAlarm){
//   var dateSplit = historicalAlarm.Date.split('-');
//   var timeSplit = historicalAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                            timeSplit[0], timeSplit[1], timeSplit[2], 0);
//
//   var owha = new OilWellHistoricalAlarm({
//     Timestamp: timestamp,
//     Equipment: historicalAlarm.Equipment,
//     Message: historicalAlarm.Message
//   });
//
//   owha.save(function (err, owha){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + owha.Message);
//   });
// });
//
//
// async.each(srpActiveAlarms, function(activeAlarm){
//   var dateSplit = activeAlarm.Date.split('-');
//   var timeSplit = activeAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                            timeSplit[0], timeSplit[1], timeSplit[2], 0);
//
//   var srpaa = new SrpActiveAlarm({
//     Timestamp: timestamp,
//     Equipment: activeAlarm.Equipment,
//     Message: activeAlarm.Message
//   });
//
//   srpaa.save(function (err, srpaa){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + srpaa.Message);
//   });
// });
//
//
// async.each(srpHistoricalAlarms, function(historicalAlarm){
//   var dateSplit = historicalAlarm.Date.split('-');
//   var timeSplit = historicalAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                            timeSplit[0], timeSplit[1], timeSplit[2], 0);
//
//   var owha = new SrpHistoricalAlarm({
//     Timestamp: timestamp,
//     Equipment: historicalAlarm.Equipment,
//     Message: historicalAlarm.Message
//   });
//
//   owha.save(function (err, owha){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + owha.Message);
//   });
// });
//
//
// async.each(espActiveAlarms, function(activeAlarm){
//   var dateSplit = activeAlarm.Date.split('-');
//   var timeSplit = activeAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                            timeSplit[0], timeSplit[1], timeSplit[2], 0);
//
//   var espaa = new EspActiveAlarm({
//     Timestamp: timestamp,
//     Equipment: activeAlarm.Equipment,
//     Message: activeAlarm.Message
//   });
//
//   espaa.save(function (err, espaa){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + espaa.Message);
//   });
// });
//
//
// async.each(espHistoricalAlarms, function(historicalAlarm){
//   var dateSplit = historicalAlarm.Date.split('-');
//   var timeSplit = historicalAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                            timeSplit[0], timeSplit[1], timeSplit[2], 0);
//
//   var owha = new EspHistoricalAlarm({
//     Timestamp: timestamp,
//     Equipment: historicalAlarm.Equipment,
//     Message: historicalAlarm.Message
//   });
//
//   owha.save(function (err, owha){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + owha.Message);
//   });
// });
//
//
// async.each(substationActiveAlarm, function(activeAlarm){
//   var dateSplit = activeAlarm.Date.split('-');
//   var timeSplit = activeAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                            timeSplit[0], timeSplit[1], timeSplit[2], 0);
//
//   var saa = new SubstationActiveAlarm({
//     Timestamp: timestamp,
//     Equipment: activeAlarm.Equipment,
//     Message: activeAlarm.Message
//   });
//
//   saa.save(function (err, saa){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + saa.Message);
//   });
// });
//
//
// async.each(substationHistoricalAlarm, function(historicalAlarm){
//   var dateSplit = historicalAlarm.Date.split('-');
//   var timeSplit = historicalAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                             timeSplit[0], timeSplit[1], timeSplit[2],0);
//
//   var sha = new SubstationHistoricalAlarm({
//     Timestamp: timestamp,
//     Equipment: historicalAlarm.Equipment,
//     Message: historicalAlarm.Message
//   });
//
//   sha.save(function (err, sha){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + sha.Message);
//   });
// });
//
//
// async.each(substationUnitActiveAlarm, function(activeAlarm){
//   var dateSplit = activeAlarm.Date.split('-');
//   var timeSplit = activeAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                            timeSplit[0], timeSplit[1], timeSplit[2], 0);
//
//   var suaa = new SubstationUnitActiveAlarm({
//     Timestamp: timestamp,
//     Equipment: activeAlarm.Equipment,
//     Message: activeAlarm.Message
//   });
//
//   suaa.save(function (err, suaa){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + suaa.Message);
//   });
// });
//
//
// async.each(substationUnitHistoricalAlarm, function(historicalAlarm){
//   var dateSplit = historicalAlarm.Date.split('-');
//   var timeSplit = historicalAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                             timeSplit[0], timeSplit[1], timeSplit[2],0);
//
//   var suha = new SubstationUnitHistoricalAlarm({
//     Timestamp: timestamp,
//     Equipment: historicalAlarm.Equipment,
//     Message: historicalAlarm.Message
//   });
//
//   suha.save(function (err, suha){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + suha.Message);
//   });
// });
//
//
// async.each(substationEquActiveAlarm, function(activeAlarm){
//   var dateSplit = activeAlarm.Date.split('-');
//   var timeSplit = activeAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                            timeSplit[0], timeSplit[1], timeSplit[2], 0);
//
//   var seaa = new SubstationEquActiveAlarm({
//     Timestamp: timestamp,
//     Equipment: activeAlarm.Equipment,
//     Message: activeAlarm.Message
//   });
//
//   seaa.save(function (err, seaa){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + seaa.Message);
//   });
// });
//
// async.each(substationEquHistoricalAlarm, function(historicalAlarm){
//   var dateSplit = historicalAlarm.Date.split('-');
//   var timeSplit = historicalAlarm.Time.split(':');
//   var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
//                             timeSplit[0], timeSplit[1], timeSplit[2],0);
//
//   var seha = new SubstationEquHistoricalAlarm({
//     Timestamp: timestamp,
//     Equipment: historicalAlarm.Equipment,
//     Message: historicalAlarm.Message
//   });
//
//   seha.save(function (err, seha){
//     if (err) return console.error(err);
//     console.log("SUCCESS => " + seha.Message);
//   });
// });
//
