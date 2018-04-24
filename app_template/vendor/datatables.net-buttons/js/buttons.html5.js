!function(t){"function"==typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(e){return t(e,window,document)}):"object"==typeof exports?module.exports=function(e,o,l,n){return e||(e=window),o&&o.fn.dataTable||(o=require("datatables.net")(e,o).$),o.fn.dataTable.Buttons||require("datatables.net-buttons")(e,o),t(o,e,e.document,l,n)}:t(jQuery,window,document)}(function(t,e,o,l,n,r){"use strict";var a=t.fn.dataTable;function p(){return l||e.JSZip}function d(){return n||e.pdfMake}var i=function(t){if(!(void 0===t||"undefined"!=typeof navigator&&/MSIE [1-9]\./.test(navigator.userAgent))){var e=t.document,o=function(){return t.URL||t.webkitURL||t},l=e.createElementNS("http://www.w3.org/1999/xhtml","a"),n="download"in l,a=/constructor/i.test(t.HTMLElement)||t.safari,p=/CriOS\/[\d]+/.test(navigator.userAgent),d=function(e){(t.setImmediate||t.setTimeout)(function(){throw e},0)},i=function(t){setTimeout(function(){"string"==typeof t?o().revokeObjectURL(t):t.remove()},4e4)},s=function(t){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t},f=function(e,f,m){m||(e=s(e));var y,c=this,u="application/octet-stream"===e.type,I=function(){!function(t,e,o){for(var l=(e=[].concat(e)).length;l--;){var n=t["on"+e[l]];if("function"==typeof n)try{n.call(t,o||t)}catch(t){d(t)}}}(c,"writestart progress write writeend".split(" "))};if(c.readyState=c.INIT,n)return y=o().createObjectURL(e),void setTimeout(function(){var t,e;l.href=y,l.download=f,t=l,e=new MouseEvent("click"),t.dispatchEvent(e),I(),i(y),c.readyState=c.DONE});!function(){if((p||u&&a)&&t.FileReader){var l=new FileReader;return l.onloadend=function(){var e=p?l.result:l.result.replace(/^data:[^;]*;/,"data:attachment/file;");t.open(e,"_blank")||(t.location.href=e),e=r,c.readyState=c.DONE,I()},l.readAsDataURL(e),void(c.readyState=c.INIT)}y||(y=o().createObjectURL(e)),u?t.location.href=y:t.open(y,"_blank")||(t.location.href=y);c.readyState=c.DONE,I(),i(y)}()},m=f.prototype;return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(t,e,o){return e=e||t.name||"download",o||(t=s(t)),navigator.msSaveOrOpenBlob(t,e)}:(m.abort=function(){},m.readyState=m.INIT=0,m.WRITING=1,m.DONE=2,m.error=m.onwritestart=m.onprogress=m.onwrite=m.onabort=m.onerror=m.onwriteend=null,function(t,e,o){return new f(t,e||t.name||"download",o)})}}("undefined"!=typeof self&&self||void 0!==e&&e||this.content);a.fileSave=i;var s=function(t){return t.newline?t.newline:navigator.userAgent.match(/Windows/)?"\r\n":"\n"},f=function(t,e){for(var o=s(e),l=t.buttons.exportData(e.exportOptions),n=e.fieldBoundary,a=e.fieldSeparator,p=new RegExp(n,"g"),d=e.escapeChar!==r?e.escapeChar:"\\",i=function(t){for(var e="",o=0,l=t.length;o<l;o++)o>0&&(e+=a),e+=n?n+(""+t[o]).replace(p,d+n)+n:t[o];return e},f=e.header?i(l.header)+o:"",m=e.footer&&l.footer?o+i(l.footer):"",y=[],c=0,u=l.body.length;c<u;c++)y.push(i(l.body[c]));return{str:f+y.join(o)+m,rows:y.length}},m=function(){if(!(-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")&&-1===navigator.userAgent.indexOf("Opera")))return!1;var t=navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);return!!(t&&t.length>1&&1*t[1]<603.1)};function y(t){for(var e="A".charCodeAt(0),o="Z".charCodeAt(0)-e+1,l="";t>=0;)l=String.fromCharCode(t%o+e)+l,t=Math.floor(t/o)-1;return l}try{var c,u=new XMLSerializer}catch(t){}function I(e,o,l){var n=e.createElement(o);return l&&(l.attr&&t(n).attr(l.attr),l.children&&t.each(l.children,function(t,e){n.appendChild(e)}),null!==l.text&&l.text!==r&&n.appendChild(e.createTextNode(l.text))),n}function F(t,e){var o,l,n,a=t.header[e].length;t.footer&&t.footer[e].length>a&&(a=t.footer[e].length);for(var p=0,d=t.body.length;p<d;p++){var i=t.body[p][e];if(-1!==(n=null!==i&&i!==r?i.toString():"").indexOf("\n")?((l=n.split("\n")).sort(function(t,e){return e.length-t.length}),o=l[0].length):o=n.length,o>a&&(a=o),a>40)return 52}return(a*=1.3)>6?a:6}var x={"_rels/.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',"xl/_rels/workbook.xml.rels":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',"[Content_Types].xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',"xl/workbook.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="" sheetId="1" r:id="rId1"/></sheets></workbook>',"xl/worksheets/sheet1.xml":'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',"xl/styles.xml":'<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'},h=[{match:/^\-?\d+\.\d%$/,style:60,fmt:function(t){return t/100}},{match:/^\-?\d+\.?\d*%$/,style:56,fmt:function(t){return t/100}},{match:/^\-?\$[\d,]+.?\d*$/,style:57},{match:/^\-?£[\d,]+.?\d*$/,style:58},{match:/^\-?€[\d,]+.?\d*$/,style:59},{match:/^\-?\d+$/,style:65},{match:/^\-?\d+\.\d{2}$/,style:66},{match:/^\([\d,]+\)$/,style:61,fmt:function(t){return-1*t.replace(/[\(\)]/g,"")}},{match:/^\([\d,]+\.\d{2}\)$/,style:62,fmt:function(t){return-1*t.replace(/[\(\)]/g,"")}},{match:/^\-?[\d,]+$/,style:63},{match:/^\-?[\d,]+\.\d{2}$/,style:64}];return a.ext.buttons.copyHtml5={className:"buttons-copy buttons-html5",text:function(t){return t.i18n("buttons.copy","Copy")},action:function(e,l,n,r){this.processing(!0);var a=this,p=f(l,r),d=l.buttons.exportInfo(r),i=s(r),m=p.str,y=t("<div/>").css({height:1,width:1,overflow:"hidden",position:"fixed",top:0,left:0});d.title&&(m=d.title+i+i+m),d.messageTop&&(m=d.messageTop+i+i+m),d.messageBottom&&(m=m+i+i+d.messageBottom),r.customize&&(m=r.customize(m,r));var c=t("<textarea readonly/>").val(m).appendTo(y);if(o.queryCommandSupported("copy")){y.appendTo(l.table().container()),c[0].focus(),c[0].select();try{var u=o.execCommand("copy");if(y.remove(),u)return l.buttons.info(l.i18n("buttons.copyTitle","Copy to clipboard"),l.i18n("buttons.copySuccess",{1:"Copied one row to clipboard",_:"Copied %d rows to clipboard"},p.rows),2e3),void this.processing(!1)}catch(t){}}var I=t("<span>"+l.i18n("buttons.copyKeys","Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.")+"</span>").append(y);l.buttons.info(l.i18n("buttons.copyTitle","Copy to clipboard"),I,0),c[0].focus(),c[0].select();var F=t(I).closest(".dt-button-info"),x=function(){F.off("click.buttons-copy"),t(o).off(".buttons-copy"),l.buttons.info(!1)};F.on("click.buttons-copy",x),t(o).on("keydown.buttons-copy",function(t){27===t.keyCode&&(x(),a.processing(!1))}).on("copy.buttons-copy cut.buttons-copy",function(){x(),a.processing(!1)})},exportOptions:{},fieldSeparator:"\t",fieldBoundary:"",header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*"},a.ext.buttons.csvHtml5={bom:!1,className:"buttons-csv buttons-html5",available:function(){return e.FileReader!==r&&e.Blob},text:function(t){return t.i18n("buttons.csv","CSV")},action:function(t,e,l,n){this.processing(!0);var r=f(e,n).str,a=e.buttons.exportInfo(n),p=n.charset;n.customize&&(r=n.customize(r,n)),!1!==p?(p||(p=o.characterSet||o.charset),p&&(p=";charset="+p)):p="",n.bom&&(r="\ufeff"+r),i(new Blob([r],{type:"text/csv"+p}),a.filename,!0),this.processing(!1)},filename:"*",extension:".csv",exportOptions:{},fieldSeparator:",",fieldBoundary:'"',escapeChar:'"',charset:null,header:!0,footer:!1},a.ext.buttons.excelHtml5={className:"buttons-excel buttons-html5",available:function(){return e.FileReader!==r&&p()!==r&&!m()&&u},text:function(t){return t.i18n("buttons.excel","Excel")},action:function(e,o,l,n){this.processing(!0);var a,d,s,f,m=this,b=0,g=function(e){var o=x[e];return t.parseXML(o)},v=g("xl/worksheets/sheet1.xml"),B=v.getElementsByTagName("sheetData")[0],w={_rels:{".rels":g("_rels/.rels")},xl:{_rels:{"workbook.xml.rels":g("xl/_rels/workbook.xml.rels")},"workbook.xml":g("xl/workbook.xml"),"styles.xml":g("xl/styles.xml"),worksheets:{"sheet1.xml":v}},"[Content_Types].xml":g("[Content_Types].xml")},C=o.buttons.exportData(n.exportOptions),T=function(e){d=I(v,"row",{attr:{r:a=b+1}});for(var o=0,l=e.length;o<l;o++){var p=y(o)+""+a,i=null;if(null===e[o]||e[o]===r||""===e[o]){if(!0!==n.createEmptyCells)continue;e[o]=""}e[o]=t.trim(e[o]);for(var s=0,f=h.length;s<f;s++){var m=h[s];if(e[o].match&&!e[o].match(/^0\d+/)&&e[o].match(m.match)){var c=e[o].replace(/[^\d\.\-]/g,"");m.fmt&&(c=m.fmt(c)),i=I(v,"c",{attr:{r:p,s:m.style},children:[I(v,"v",{text:c})]});break}}if(!i)if("number"==typeof e[o]||e[o].match&&e[o].match(/^-?\d+(\.\d+)?$/)&&!e[o].match(/^0\d+/))i=I(v,"c",{attr:{t:"n",r:p},children:[I(v,"v",{text:e[o]})]});else{var u=e[o].replace?e[o].replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g,""):e[o];i=I(v,"c",{attr:{t:"inlineStr",r:p},children:{row:I(v,"is",{children:{row:I(v,"t",{text:u})}})}})}d.appendChild(i)}B.appendChild(d),b++};t("sheets sheet",w.xl["workbook.xml"]).attr("name",(f="Sheet1",(s=n).sheetName&&(f=s.sheetName.replace(/[\[\]\*\/\\\?\:]/g,"")),f)),n.customizeData&&n.customizeData(C);var k=function(e,o){var l=t("mergeCells",v);l[0].appendChild(I(v,"mergeCell",{attr:{ref:"A"+e+":"+y(o)+e}})),l.attr("count",parseFloat(l.attr("count"))+1),t("row:eq("+(e-1)+") c",v).attr("s","51")},S=o.buttons.exportInfo(n);S.title&&(T([S.title]),k(b,C.header.length-1)),S.messageTop&&(T([S.messageTop]),k(b,C.header.length-1)),n.header&&(T(C.header),t("row:last c",v).attr("s","2"));for(var N=0,O=C.body.length;N<O;N++)T(C.body[N]);n.footer&&C.footer&&(T(C.footer),t("row:last c",v).attr("s","2")),S.messageBottom&&(T([S.messageBottom]),k(b,C.header.length-1));var z=I(v,"cols");t("worksheet",v).prepend(z);for(var D=0,A=C.header.length;D<A;D++)z.appendChild(I(v,"col",{attr:{min:D+1,max:D+1,width:F(C,D),customWidth:1}}));n.customize&&n.customize(w),0===t("mergeCells",v).children().length&&t("mergeCells",v).remove();var E=new(p()),R={type:"blob",mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"};!function e(o,l){c===r&&(c=-1===u.serializeToString(t.parseXML(x["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r")),t.each(l,function(l,n){if(t.isPlainObject(n))e(o.folder(l),n);else{if(c){var r,a,p=n.childNodes[0],d=[];for(r=p.attributes.length-1;r>=0;r--){var i=p.attributes[r].nodeName,s=p.attributes[r].nodeValue;-1!==i.indexOf(":")&&(d.push({name:i,value:s}),p.removeAttribute(i))}for(r=0,a=d.length;r<a;r++){var f=n.createAttribute(d[r].name.replace(":","_dt_b_namespace_token_"));f.value=d[r].value,p.setAttributeNode(f)}}var m=u.serializeToString(n);c&&(-1===m.indexOf("<?xml")&&(m='<?xml version="1.0" encoding="UTF-8" standalone="yes"?>'+m),m=m.replace(/_dt_b_namespace_token_/g,":")),m=m.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g,"<$1 $2>"),o.file(l,m)}})}(E,w),E.generateAsync?E.generateAsync(R).then(function(t){i(t,S.filename),m.processing(!1)}):(i(E.generate(R),S.filename),this.processing(!1))},filename:"*",extension:".xlsx",exportOptions:{},header:!0,footer:!1,title:"*",messageTop:"*",messageBottom:"*",createEmptyCells:!1},a.ext.buttons.pdfHtml5={className:"buttons-pdf buttons-html5",available:function(){return e.FileReader!==r&&d()},text:function(t){return t.i18n("buttons.pdf","PDF")},action:function(e,o,l,n){this.processing(!0);var r=o.buttons.exportData(n.exportOptions),a=o.buttons.exportInfo(n),p=[];n.header&&p.push(t.map(r.header,function(t){return{text:"string"==typeof t?t:t+"",style:"tableHeader"}}));for(var i=0,s=r.body.length;i<s;i++)p.push(t.map(r.body[i],function(t){return{text:"string"==typeof t?t:t+"",style:i%2?"tableBodyEven":"tableBodyOdd"}}));n.footer&&r.footer&&p.push(t.map(r.footer,function(t){return{text:"string"==typeof t?t:t+"",style:"tableFooter"}}));var f={pageSize:n.pageSize,pageOrientation:n.orientation,content:[{table:{headerRows:1,body:p},layout:"noBorders"}],styles:{tableHeader:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154",alignment:"center"},tableBodyEven:{},tableBodyOdd:{fillColor:"#f3f3f3"},tableFooter:{bold:!0,fontSize:11,color:"white",fillColor:"#2d4154"},title:{alignment:"center",fontSize:15},message:{}},defaultStyle:{fontSize:10}};a.messageTop&&f.content.unshift({text:a.messageTop,style:"message",margin:[0,0,0,12]}),a.messageBottom&&f.content.push({text:a.messageBottom,style:"message",margin:[0,0,0,12]}),a.title&&f.content.unshift({text:a.title,style:"title",margin:[0,0,0,12]}),n.customize&&n.customize(f,n);var y=d().createPdf(f);"open"!==n.download||m()?y.download(a.filename):y.open(),this.processing(!1)},title:"*",filename:"*",extension:".pdf",exportOptions:{},orientation:"portrait",pageSize:"A4",header:!0,footer:!1,messageTop:"*",messageBottom:"*",customize:null,download:"download"},a.Buttons});