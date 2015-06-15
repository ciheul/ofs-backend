var async = require('async');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ofs');

var oilWellOverView = require('./OilWellOverView.json');
var oilWellActiveAlarms = require('./OilWellActiveAlarms.json');
var oilWellHistoricalAlarms = require('./OilWellHistoricalAlarms.json');

var substationOverview = require('./SubstationOverView.json');
var substationActiveAlarm = require('./SubstationActiveAlarm.json');
var substationHistoricalAlarm = require('./SubstationHistoricalAlarm.json');

var substationEqu = require('./SubstationEqu.json');
var substationEquActiveAlarm = require('./SubstationEquActiveAlarm.json');
var substationUnit = require('./SubstationUnitActiveAlarm.json');
var substationUnitActiveAlarm = require('./SubstationUnitActiveAlarm.json');

var srp = require('./Srp.json');
var srpActiveAlarm = require('./SrpActiveAlarm.json');
var esp = require('./Esp.json');
var espActiveAlarm = require('./EspActiveAlarm.json');



var OilWell = require('../models/well').OilWell;
var Well = require('../models/well').Well;
var Substation = require('../models/substation').Substation
var Srp = require('../models/srp').Srp
var Esp = require('../models/esp').Esp

var OilWellActiveAlarm = require('../models/well-active-alarm');
var OilWellHistoricalAlarm = require('../models/well-historical-alarm');
var SubstationActiveAlarm = require('../models/substation-active-alarm');
var SubstationHistoricalAlarm = require('../models/substation-historical-alarm');
var SubstationUnitActiveAlarm = require('../models/substation-unit-active-alarm');
var SubstationUnitHistoricalAlarm = require('../models/substation-unit-historical-alarm');
var SubstationEquActiveAlarm = require('../models/substation-equ-active-alarm');
var SubstationEquHistoricalAlarm = require('../models/substation-equ-historical-alarm');
var Srp = require('../models/srp');
var Esp = require('../models/esp');
var SrpActiveAlarm = require('../models/srp-active-alarm');
var EspActiveAlarm = require('../models/esp-active-alarm');


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

async.each(substationOverview, function(){
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

  

async.each(substationUnit, function(){
  var substation = [];
  async.each(u.substation, function(substation){
    var su = new substation({
      Name: substation.Name,
      GroupName: substation.GroupName,
      Size: substation.Size,
      Status: substation.Status,
      DetailUrl: substation.DetailUrl,
      UnitId: substation.UnitId,
      AlarmStatus: substation.AlarmStatus,
      AlarmCount: substation.AlarmCount
    });
    substation.push(su)
  });

  var u = new SubstationUnit({
    Name = Substation.Name,
    substation = Substation
  });

  u.save(function (err, u) {
    if (err) return console.error(err);
    console.log("SUCCESS => " + u.Name);
  });
});

async.each(srp, function(){
  var srp = new srp({
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
});

async.each(esp, function(){
  var esp = new esp({
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
});

async.each(oilWellActiveAlarms, function(activeAlarm){
  var dateSplit = activeAlarm.Date.split('-');
  var timeSplit = activeAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                           timeSplit[0], timeSplit[1], timeSplit[2], 0);

  var owaa = new OilWellActiveAlarm({
    Timestamp: timestamp,
    Equipment: activeAlarm.Equipment,
    Message: activeAlarm.Message
  });

  owaa.save(function (err, owaa){
    if (err) return console.error(err);
    console.log("SUCCESS => " + owaa.Message);
  });
});


async.each(oilWellHistoricalAlarms, function(historicalAlarm){
  var dateSplit = historicalAlarm.Date.split('-');
  var timeSplit = historicalAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                           timeSplit[0], timeSplit[1], timeSplit[2], 0);

  var owha = new OilWellHistoricalAlarm({
    Timestamp: timestamp,
    Equipment: historicalAlarm.Equipment,
    Message: historicalAlarm.Message
  });

  owha.save(function (err, owha){
    if (err) return console.error(err);
    console.log("SUCCESS => " + owha.Message);
  });
});

async.each(substationActiveAlarm, function(activeAlarm){
  var dateSplit = activeAlarm.Date.split('-');
  var timeSplit = activeAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                           timeSplit[0], timeSplit[1], timeSplit[2], 0);

  var saa = new substationActiveAlarm({
    Timestamp: timestamp,
    Equipment: activeAlarm.Equipment,
    Message: activeAlarm.Message
  });

  saa.save(function (err, saa){
    if (err) return console.error(err);
    console.log("SUCCESS => " + saa.Message);
  });
});

async.each(substationHistoricalAlarm, function(historicalAlarm){
  var dateSplit = activeAlarm.Date.split('-');
  var timeSplit = activeAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                            timeSplit[0], timeSplit[1], timeSplit[2],0);

  var sha = new SubstationHistoricalAlarm({
    Timestamp: timestamp,
    Equipment: historicalAlarm.Equipment,
    Message: historicalAlarm.Message
  });

  sha.save(function (err, sha){
    if (err) return console.error(err);
    console.log("SUCCESS => " + sha.Message);
  });
});

async.each(substationUnitActiveAlarm, function(activeAlarm){
  var dateSplit = activeAlarm.Date.split('-');
  var timeSplit = activeAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                           timeSplit[0], timeSplit[1], timeSplit[2], 0);

  var suaa = new substationUnitActiveAlarm({
    Timestamp: timestamp,
    Equipment: activeAlarm.Equipment,
    Message: activeAlarm.Message
  });

  suaa.save(function (err, suaa){
    if (err) return console.error(err);
    console.log("SUCCESS => " + suaa.Message);
  });
});

async.each(substationUnitHistoricalAlarm, function(historicalAlarm){
  var dateSplit = activeAlarm.Date.split('-');
  var timeSplit = activeAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                            timeSplit[0], timeSplit[1], timeSplit[2],0);

  var suha = new SubstationHistoricalAlarm({
    Timestamp: timestamp,
    Equipment: historicalAlarm.Equipment,
    Message: historicalAlarm.Message
  });

  suha.save(function (err, suha){
    if (err) return console.error(err);
    console.log("SUCCESS => " + suha.Message);
  });
});

async.each(substationEquActiveAlarm, function(activeAlarm){
  var dateSplit = activeAlarm.Date.split('-');
  var timeSplit = activeAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                           timeSplit[0], timeSplit[1], timeSplit[2], 0);

  var seaa = new substationEquActiveAlarm({
    Timestamp: timestamp,
    Equipment: activeAlarm.Equipment,
    Message: activeAlarm.Message
  });

  seaa.save(function (err, seaa){
    if (err) return console.error(err);
    console.log("SUCCESS => " + seaa.Message);
  });
});

async.each(substationEquHistoricalAlarm, function(historicalAlarm){
  var dateSplit = activeAlarm.Date.split('-');
  var timeSplit = activeAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                            timeSplit[0], timeSplit[1], timeSplit[2],0);

  var seha = new SubstationEquHistoricalAlarm({
    Timestamp: timestamp,
    Equipment: historicalAlarm.Equipment,
    Message: historicalAlarm.Message
  });

  seha.save(function (err, seha){
    if (err) return console.error(err);
    console.log("SUCCESS => " + seha.Message);
  });
});

async.each(srpActiveAlarm, function(activeAlarm){
  var dateSplit = activeAlarm.Date.split('-');
  var timeSplit = activeAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                           timeSplit[0], timeSplit[1], timeSplit[2], 0);

  var srpaa = new srpActiveAlarm({
    Timestamp: timestamp,
    Equipment: activeAlarm.Equipment,
    Message: activeAlarm.Message
  });

  srpaa.save(function (err, srpaa){
    if (err) return console.error(err);
    console.log("SUCCESS => " + srpaa.Message);
  });
});

async.each(espActiveAlarm, function(activeAlarm){
  var dateSplit = activeAlarm.Date.split('-');
  var timeSplit = activeAlarm.Time.split(':');
  var timestamp = new Date(dateSplit[0], dateSplit[1], dateSplit[2],
                           timeSplit[0], timeSplit[1], timeSplit[2], 0);

  var espaa = new espActiveAlarm({
    Timestamp: timestamp,
    Equipment: activeAlarm.Equipment,
    Message: activeAlarm.Message
  });

  espaa.save(function (err, espaa){
    if (err) return console.error(err);
    console.log("SUCCESS => " + espaa.Message);
  });
});



