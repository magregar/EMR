!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("fullcalendar"),require("jquery")):"function"==typeof define&&define.amd?define(["fullcalendar","jquery"],t):"object"==typeof exports?t(require("fullcalendar"),require("jquery")):t(e.FullCalendar,e.jQuery)}("undefined"!=typeof self?self:this,function(e,t){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=265)}({1:function(t,r){t.exports=e},2:function(e,t){var r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])};t.__extends=function(e,t){function o(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}},265:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(1),n=r(266);o.EventSourceParser.registerClass(n.default),o.GcalEventSource=n.default},266:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),n=r(3),a=r(1),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o.__extends(t,e),t.parse=function(e,t){var r;return"object"==typeof e?r=e:"string"==typeof e&&(r={url:e}),!!r&&a.EventSource.parse.call(this,r,t)},t.prototype.fetch=function(e,t,r){var o=this,l=this.buildUrl(),i=this.buildRequestParams(e,t,r),u=this.ajaxSettings||{},c=u.success;return i?(this.calendar.pushLoading(),a.Promise.construct(function(e,t){n.ajax(n.extend({},a.JsonFeedEventSource.AJAX_DEFAULTS,u,{url:l,data:i,success:function(r,l,u){var s,p;o.calendar.popLoading(),r.error?(o.reportError("Google Calendar API: "+r.error.message,r.error.errors),t()):r.items&&(s=o.gcalItemsToRawEventDefs(r.items,i.timeZone),p=a.applyAll(c,o,[r,l,u]),n.isArray(p)&&(s=p),e(o.parseEventDefs(s)))},error:function(e,r,n){o.reportError("Google Calendar network failure: "+r,[e,n]),o.calendar.popLoading(),t()}}))})):a.Promise.reject()},t.prototype.gcalItemsToRawEventDefs=function(e,t){var r=this;return e.map(function(e){return r.gcalItemToRawEventDef(e,t)})},t.prototype.gcalItemToRawEventDef=function(e,t){var r,o=e.htmlLink||null;return o&&t&&(r="ctz="+t,o=o.replace(/(\?.*?)?(#|$)/,function(e,t,o){return(t?t+"&":"?")+r+o})),{id:e.id,title:e.summary,start:e.start.dateTime||e.start.date,end:e.end.dateTime||e.end.date,url:o,location:e.location,description:e.description}},t.prototype.buildUrl=function(){return t.API_BASE+"/"+encodeURIComponent(this.googleCalendarId)+"/events?callback=?"},t.prototype.buildRequestParams=function(e,t,r){var o,a=this.googleCalendarApiKey||this.calendar.opt("googleCalendarApiKey");return a?(e.hasZone()||(e=e.clone().utc().add(-1,"day")),t.hasZone()||(t=t.clone().utc().add(1,"day")),o=n.extend(this.ajaxSettings.data||{},{key:a,timeMin:e.format(),timeMax:t.format(),singleEvents:!0,maxResults:9999}),r&&"local"!==r&&(o.timeZone=r.replace(" ","_")),o):(this.reportError("Specify a googleCalendarApiKey. See http://fullcalendar.io/docs/google_calendar/"),null)},t.prototype.reportError=function(e,t){var r=this.calendar,o=r.opt("googleCalendarError"),n=t||[{message:e}];this.googleCalendarError&&this.googleCalendarError.apply(r,n),o&&o.apply(r,n),a.warn.apply(null,[e].concat(t||[]))},t.prototype.getPrimitive=function(){return this.googleCalendarId},t.prototype.applyManualStandardProps=function(e){var t=a.EventSource.prototype.applyManualStandardProps.apply(this,arguments),r=e.googleCalendarId;return null==r&&e.url&&(r=function(e){var t;{if(/^[^\/]+@([^\/\.]+\.)*(google|googlemail|gmail)\.com$/.test(e))return e;if((t=/^https:\/\/www.googleapis.com\/calendar\/v3\/calendars\/([^\/]*)/.exec(e))||(t=/^https?:\/\/www.google.com\/calendar\/feeds\/([^\/]*)/.exec(e)))return decodeURIComponent(t[1])}}(e.url)),null!=r&&(this.googleCalendarId=r,t)},t.prototype.applyMiscProps=function(e){this.ajaxSettings||(this.ajaxSettings={}),n.extend(this.ajaxSettings,e)},t.API_BASE="https://www.googleapis.com/calendar/v3/calendars",t}(a.EventSource);t.default=l,l.defineStandardProps({url:!1,googleCalendarId:!1,googleCalendarApiKey:!0,googleCalendarError:!0})},3:function(e,r){e.exports=t}})});