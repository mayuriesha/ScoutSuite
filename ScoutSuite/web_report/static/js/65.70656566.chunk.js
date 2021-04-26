(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[65],{636:function(e,t,a){"use strict";a.r(t);var n=a(1),r=(a(0),a(13)),c=a.n(r),l=a(697),i=a(66),o=a(114),s=a(700);t.default=function(e){var t,a=e.data,r=c()(a,["item"],{});return a?Object(n.jsxs)(l.a,{data:a,children:[Object(n.jsxs)(s.a,{children:[Object(n.jsx)(l.c,{label:"Project ID",valuePath:"project_id"}),Object(n.jsx)(l.c,{label:"Automatic Backups",valuePath:"automatic_backup_enabled",renderValue:i.c}),Object(n.jsx)(l.c,{label:"Last Backup",valuePath:"last_backup_timestamp",renderValue:i.h}),Object(n.jsx)(l.c,{label:"Logs",valuePath:"log_enabled",renderValue:i.c}),Object(n.jsx)(l.c,{label:"SSL Required",valuePath:"ssl_required",renderValue:i.c}),Object(n.jsx)(l.c,{label:"Public IP Address",valuePath:"public_ip",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Private IP Address",valuePath:"private_ip",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Local Infile Flag is Off",valuePath:"local_infile_off",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Cross db Ownership Chaining Flag is Off",valuePath:"cross_db_ownership_chaining_off",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Contained Database Authentication Flag is Off",valuePath:"contained_database_authentication_off",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Log Checkpoints Flag is On",valuePath:"log_checkpoints_on",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Log Connections Flag is On",valuePath:"log_connections_on",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Log Disconnections Flag is On",valuePath:"log_disconnections_on",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Log Lock Waits Flag is On",valuePath:"log_lock_waits_on",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Log Min Messages Flag set Appropriately",valuePath:"log_min_messages",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Log Temp Files Flag set to 0",valuePath:"log_temp_files_0",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Log Min Duration Statement Flag set to -1",valuePath:"log_min_duration_statement_-1",renderValue:i.q}),Object(n.jsx)(l.c,{label:"Authorized Networks",valuePath:"authorized_networks",renderValue:i.q})]}),Object(n.jsx)(o.b,{children:Object(n.jsx)(o.a,{title:"Authorized Networks",children:(t=r.authorized_networks,t&&0!==t.length?Object(n.jsx)("ul",{children:t.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(l.c,{errorPath:"authorized_networks.".concat(t,".open_to_the_world"),value:e})},t)}))}):Object(n.jsx)("span",{children:"None"}))})})]}):null}},694:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return o}));var n=a(0),r=a.n(n),c={path_to_issue:[],item:{}},l=r.a.createContext(c),i=r.a.createContext(""),o=r.a.createContext((function(){}))},695:function(e,t,a){"use strict";var n=a(1),r=a(0),c=a(694),l=a(66);t.a=function(e){var t=e.path,a=e.children,i=Object(r.useContext)(c.b);return Object(n.jsx)(c.b.Provider,{value:Object(l.a)(i,t),children:a})}},696:function(e,t,a){"use strict";var n=a(11),r=a(1),c=a(0),l=a(690),i=a(7),o=a.n(i),s=a(13),u=a.n(s),b=a(10),d=a.n(b),j=a(694),h=a(66),v=a(67),f=(a(698),a(686)),p=a(204),O=a.n(p),x=a(699),_=a.n(x),g=a(205),m=a(140),P=function(e){var t=e.service,a=e.finding,n=e.path,i=Object(c.useContext)(m.a),o=i.exceptions,s=i.addException,b=i.removeException,d=Object(g.b)().enqueueSnackbar,j=u()(o,[t,a],[]).includes(n);return Object(r.jsx)(l.a,{title:j?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(f.a,{size:"small",className:"exception-btn",onClick:j?function(){b(t,a,n),d("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){s(t,a,n),d("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:j?Object(r.jsx)(_.a,{}):Object(r.jsx)(O.a,{})})})},V=a(30),k=function(e){var t,a=e.label,i=e.separator,s=e.valuePath,b=e.errorPath,f=e.className,p=e.inline,O=e.tooltip,x=e.tooltipProps,_=e.renderValue,g=e.basePathOverwrite,m=Object(V.g)(),k=Object(c.useContext)(j.a),q=Object(c.useContext)(j.b),w=Object(c.useContext)(j.c),C=Object(h.a)(g||q,s),L=_(e.value||u()(k.item,C,e.value));("boolean"===typeof L&&(L=String(L)),b)?t=(d()(b)?b:[b]).map((function(e){return Object(h.a)(g||q,e)})):t=[C];var A=t.some((function(e){return k.path_to_issues.includes(e)})),F=k.level;if(Object(c.useEffect)((function(){A&&w(F)}),[F]),void 0===L||null===L)return null;var z=Object(r.jsx)(P,{service:m.service,finding:m.finding,path:"".concat(k.path,".").concat(t[0])}),N=Object(r.jsxs)("span",{className:o()(A&&o()("issue",F)),children:[L,A&&z]});return Object(r.jsx)(v.a,{className:o()(f,"partial-value",{inline:p}),label:a,separator:i,value:O?Object(r.jsx)(l.a,Object(n.a)(Object(n.a)({title:L},x),{},{children:N})):N})};k.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=k},697:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return l.a})),a.d(t,"c",(function(){return i.a}));var n=a(1),r=(a(0),a(694)),c=(a(66),function(e){var t=e.data,a=e.children;return console.info("PARTIAL DATA",t),Object(n.jsx)(r.a.Provider,{value:t,children:a})}),l=a(695),i=a(696)},698:function(e,t,a){},699:function(e,t,a){"use strict";var n=a(35),r=a(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),l=(0,n(a(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=l},700:function(e,t,a){"use strict";var n=a(1);a(0),a(701);t.a=function(e){var t=e.children;return Object(n.jsxs)("div",{className:"informations-wrapper",children:[Object(n.jsx)("h4",{className:"title",children:"Informations"}),t]})}},701:function(e,t,a){}}]);
//# sourceMappingURL=65.70656566.chunk.js.map