///<reference types="Cypress" />

const moment = require('moment-timezone');


export default class PSTTime
{


     PSTTime(date, format, timezone)

      {
   
    
      if (!date) {
        date = new Date();
      }
      if (!timezone) {
        timezone = moment.tz.name();
      }
      return moment.tz(date, timezone).add(1,'minutes').format(format);
    }
      }




