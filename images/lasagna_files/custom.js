CJSAPPS_ARR=["163","34","509","309","139","372","140","610","173","189","319","417","530","670","492"],CJSAPPS_PARENT={},CJSAPPS_PARENT[163]={},CJSAPPS_PARENT[34]={},CJSAPPS_PARENT[509]={},CJSAPPS_PARENT[509].AfterDocReady=function(e,t,r,o,a){DIGIOH_CUSTOM_JS.log;try{function n(e,t){t||(t="=");const r=e.indexOf(t);if(-1===r)return[e];return[e.substring(0,r),e.substring(r+1)]}e.useCookies=function(){const t="utm_cookies";return e.getAccountMetadata(t)||e.getWidgetMetadata(t)},e.storeQueryString=function(){let r=t.parent.localStorage&&!e.useCookies()?function(e,r){t.parent.localStorage.getItem(e+"_first")||t.parent.localStorage.setItem(e+"_first",r),t.parent.localStorage.setItem(e+"_last",r),t.parent.sessionStorage.setItem(e+"_session",r)}:function(t,r){e.getCookie(t+"_first")||e.setCookie(t+"_first",r,{expirationDays:1e3}),e.setCookie(t+"_last",r,{expirationDays:1e3}),e.setCookie(t+"_session",r,{expirationDays:1/24/2})},o=e.getQueryString();if(o)for(var a of(o=o.substring(1),o=o.split("&"),o))2==(a=n(a)).length&&r(a[0],a[1])},e.getStoredQueryStringVal=function(r,o){if("first"!=o&&"last"!=o&&"session"!=o)throw new Error("api.getStoredQueryStringVal expects first, last, session param");r=r+"_"+o;let a="";return a=t.parent.localStorage&&!e.useCookies()?"session"==o?t.parent.sessionStorage.getItem(r):t.parent.localStorage.getItem(r):e.getCookie(r),decodeURIComponent(a)},e.getGAClientId=function(){return e.GoogleAnalytics&&e.GoogleAnalytics.tracker&&e.GoogleAnalytics.tracker.get?e.GoogleAnalytics.tracker.get("clientId"):""},e.storeQueryString(),e.replaceMergeTagsInString=function(r){const o=function(e){return"null"==e||"undefined"==e?"":e||""},n="undefined"!=typeof boxapi;if("string"!=typeof r)throw new Error("UMT expects string, got "+typeof r+" with value "+r.toString());if(!r)return"";if(r.indexOf("[")<0)return r;const s=e.isPreview()?"[N/A in Preview]":"",g="";let l=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/\[COUNTRY\]/gi,o(e.getClientCountryName())||s)).replace(/\[COUNTRY_CODE\]/gi,o(e.getClientCountryCode())||s)).replace(/\[REGION\]/gi,o(e.getClientRegionOrStateName())||s)).replace(/\[REGION_CODE\]/gi,o(e.getClientRegionOrStateCode())||s)).replace(/\[CITY\]/gi,o(e.getClientCity())||s)).replace(/\[POSTAL_CODE\]/gi,o(e.getClientPostalCode())||s)).replace(/\[REFERRING_URL\]/gi,o(e.getReferrer())||s)).replace(/\[LANDING_URL\]/gi,o(e.getLandingPageUrl())||s)).replace(/\[BROWSER_TYPE\]/gi,o(e.getBrowserType())||s)).replace(/\[WEB_SOURCE\]/gi,o(e.getTrafficSource())||s)).replace(/\[SEARCH_ENGINE\]/gi,o(e.getSearchEngineSource())||s)).replace(/\[PAGE_VISITS\]/gi,o(e.getTotalPageViews())||s)).replace(/\[PAST_VISITS\]/gi,o(e.getTotalSessions())||s)).replace(/\[HOST_NAME\]/gi,o(e.getHostname())||s)).replace(/\[PAGE_PATH\]/gi,o(e.getPagePath())||s)).match(/\[PAGE_PATH\|(\d)\]/);if(l){let t=parseInt(l[1]),o=e.getPagePath().split("/");!isNaN(t)&&t<o.length&&(r=r.replace(l[0],o[t]))}r=(r=r.replace(/\[QUERY_STRING\]/gi,o(e.getQueryString())||s)).replace(/\[IP_ADDRESS\]/gi,o(e.getClientIpAddress())||s),n&&(r=r.replace(/\[(LIGHT)?BOX_NAME\]/gi,o(boxapi.getName())||s)),n&&(r=r.replace(/\[(LIGHT)?BOX_ID\]/gi,o(boxapi.getId())||s)),n&&(r=r.replace(/\[BOX_TYPE\]/gi,o(boxapi.getBoxType())||s)),n&&(r=r.replace(/\[BOX_PAGE(_?NAME)?\]/gi,o(boxapi.getPageNameOrTitle())||s)),r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=(r=r.replace(/\[VARIATION_ID\]/gi,o(a.variation_short_id)||s)).replace(/\[VENDOR_ID\]/gi,o(e.getAccountId())||s)).replace(/\[VENDOR_GUID\]/gi,o(e.getAccountGuid())||s)).replace(/\[DEVICE\]/gi,o(e.getDeviceType())||s)).replace(/\[OPERATING_SYSTEM\]/gi,o(e.getOperatingSystem())||s)).replace(/\[BROWSER_TYPE\]/gi,o(e.getBrowserType())||s)).replace(/\[BROWSER_VERSION\]/gi,o(e.getBrowserVersion())||s)).replace(/\[SUBMIT_URL\]/gi,o(e.getCurrentUrl())||s)).replace(/\[SUBMIT_DATE\]/gi,o((new Date).toUTCString())||s)).replace(/\[EMAIL\]/gi,o(e.getDataLayerValue("email"))||g)).replace(/\[PHONE\]/gi,o(e.getDataLayerValue("phone"))||g)).replace(/\[NAME\]/gi,o(e.getDataLayerValue("name"))||g)).replace(/\[FIRST_NAME\]/gi,o(e.getDataLayerValue("first_name"))||g)).replace(/\[LAST_NAME\]/gi,o(e.getDataLayerValue("last_name"))||g)).replace(/\[OPT_IN\]/gi,o(e.getDataLayerValue("opt_in"))||g)).replace(/\[URIENC\|FIRST_NAME\]/gi,o(encodeURIComponent(e.getDataLayerValue("first_name")))||g)).replace(/\[URIENC\|LAST_NAME\]/gi,o(encodeURIComponent(e.getDataLayerValue("last_name")))||g)).replace(/\[URIENC\|EMAIL\]/gi,o(encodeURIComponent(e.getDataLayerValue("email")))||g);const i=t.parent.mParticle&&t.parent.mParticle.Identity&&t.parent.mParticle.Identity.getCurrentUser()?t.parent.mParticle.Identity.getCurrentUser().getMPID():null;if(r=r.replace(/\[MPID\]/gi,i||s),/\[DL\|/.test(r)){e.debug();const o=r.match(/\[DL\|(\w+)\|(\w+)\]/);if(o&&3==o.length){const e=o[0],a=o[1],n=o[2];let s="";if(t.parent.dataLayer&&a&&n)for(const e of t.parent.dataLayer)if(e.event==a){s=e[n]||"";break}r=r.replace(e,s)}}if("function"==typeof e.getGAClientId&&(r=r.replace(/\[GA_CLIENT_ID\]/gi,o(e.getGAClientId())||g)),"function"==typeof r.matchAll){const a=r.matchAll(/\[TEXT_?(\d\d?)\]/gi);if(n)for(const e of a){const t=e[1],a="main"==boxapi.getPageName()?"text"+t:boxapi.getPageName()+"text"+t,n=settings[a]||{};r=r.replace(e[0],o(n.text)||g)}const s=r.matchAll(/\[BUTTON_?(\d\d?)\]/gi);if(n)for(const e of s){const t=e[1],a="main"==boxapi.getPageName()?"button"+t:boxapi.getPageName()+"button"+t,n=settings[a]||{};r=r.replace(e[0],o(n.text)||g)}if([...r.matchAll(/\[URIENC\|CUSTOM_?(\d\d?)\]/gi)].length){let t=(r=r.replace(/\URIENC\|/gi,"")).matchAll(/\[CUSTOM_?(\d\d?)\]/gi);for(let a of t)r=r.replace(a[0],o(encodeURIComponent(e.getDataLayerValue("custom_"+a[1])))||g)}let l=r.matchAll(/\[CUSTOM_?(\d\d?)\]/gi);for(let t of l)r=r.replace(t[0],o(e.getDataLayerValue("custom_"+t[1]))||g);if([...r.matchAll(/\[URIENC\|EP?(\d\d?)_CUSTOM_?(\d\d?)\]/gi)].length){let t=(r=r.replace(/\URIENC\|/gi,"")).matchAll(/\[EP?(\d\d?)\_CUSTOM_?(\d\d?)\]/gi);for(let a of t)r=r.replace(a[0],o(encodeURIComponent(e.getDataLayerValue("ep"+a[1]+"_custom_"+a[2])))||g)}let i=r.matchAll(/\[EP?(\d\d?)\_CUSTOM_?(\d\d?)\]/gi);for(let t of i)r=r.replace(t[0],o(e.getDataLayerValue("ep"+t[1]+"_custom_"+t[2]))||g);let c=r.matchAll(/\[COOKIE\|([^\|\]]+)(\|(\S+))?\]/g);for(let t of c){let a=t[3]||"";r=r.replace(t[0],o(e.getCookie(t[1]))||a)}let m=r.matchAll(/\[LS\|([^\|\]]+)(\|(\S+))?\]/g);for(let e of m){let a=e[3]||"";r=t.parent.localStorage?r.replace(e[0],o(t.parent.localStorage.getItem(e[1]))||a):a}let S=r.matchAll(/\[QS\|([^\|\]]+)(\|(\S+))?\]/g);for(let t of S){let a=t[3]||"";r=r.replace(t[0],o(e.getStoredQueryStringVal(t[1],"last"))||a)}S=r.matchAll(/\[QS(FC|LC|SN)\|([^\|\]]+)(\|(\S+))?\]/g);for(let t of S){let a=t[4]||"",n="";switch(t[1]){case"FC":n="first";break;case"LC":default:n="last";break;case"SN":n="session"}r=r.replace(t[0],o(e.getStoredQueryStringVal(t[2],n))||a)}if(n){const t=r.matchAll(/\[i18n\|([a-zA-z0-9_]+)\]/gi);for(const o of t){const t=o[1];if(!0===boxapi.i18nReady){const a=boxapi.geti18nMatrix(boxapi.getId());if(!a||!a.length){e.warnNotifyApp("Found i18n merge tags but i18n app not yet initialized");break}const n=boxapi.geti18nMatrix(boxapi.getId()),s=boxapi.getElemIndex(n,t),g=boxapi.getLangIndex(n,e.language||"en");translation=n[s][g],r=r.replace(o[0],translation)}}}if(e.getStoredSegTraits){let t=r.matchAll(/\[SEG_TRAIT\|([^\|\]]+)(\|(\S+))?\]/g);for(let a of t){let t=a[4]||"",n=a[1],s=o(e.getStoredSegTraits()[n])||t;r=r.replace(a[0],s)}}if("function"==typeof e.getMergeTagName){const o=e.getMergeTagName(),a=new RegExp("\\["+o+"\\|([a-zA-Z_\\- ]+)(?:\\|(.+?))?\\]","g"),n=r.matchAll(a);for(const o of n){const a=o[0],n=o[1],s=o[2],g=e.getTargetableObjectName();if(t.parent[g]||e[g]){const o=t.parent[g][n];o?(r=r.replace(a,o),e.infoNotifyApp("Universal Merge Tags: replaced from "+e.getTrackingAppName()+" "+n+"="+o)):s?(r=r.replace(a,s),e.infoNotifyApp("Universal Merge Tags: replaced from "+e.getTrackingAppName()+" "+n+"="+s+" (default)")):(e.warnNotifyApp("Universal Merge Tags: no value for "+e.getTrackingAppName()+" field "+n+" with no default"),r="")}else e.warnNotifyApp("Universal Merge Tags: used "+r+" but TPAU App is not initialized "+g+" object not found)")}}else{const t=r.matchAll(/\[ITERABLE_FIELD\|([a-zA-Z_\- ]+)(?:\|(.+?))?\]/g);for(const o of t){const t=o[0],a=o[1],n=o[2];if(e.itrbl){const o=e.itrbl[a];o?(r=r.replace(t,o),e.infoNotifyApp("Universal Merge Tags: replaced from Iterable "+a+"="+o)):n?(r=r.replace(t,n),e.infoNotifyApp("Universal Merge Tags: replaced from Iterable "+a+"="+n+" (default)")):(e.warnNotifyApp("Universal Merge Tags: no value for Iterable field "+a+" with no default"),r="")}else e.warnNotifyApp("Universal Merge Tags: used "+r+" but Iterable App is not active ([https://help.digioh.com/knowledgebase/targeting-box-display-to-iterable-user-attributes-or-lists/|help doc])")}}}if(/\[UTC\]/gi.test(r)){const e=new Date;r=r.replace(/\[UTC\]/gi,e.getTime().toString())}if(/\[UTCDAY\]/.test(r)){const e=(new Date).setUTCHours(0,0,0,0);r=r.replace(/\[UTCDAY\]/gi,e)}if(n){const t=boxapi.getWidgetMetadata()||[];for(const o of t)if(RX_CUSTOM_MERGE_TAG_MD.test(o.k)){const t=o.k.match(RX_CUSTOM_MERGE_TAG_MD)[1],a=o.v,n=e.getDataLayerValue(a,boxapi.getId())||e.getDataLayerValue(a);r=r.replace("["+t+"]",n)}}return r}}catch(s){return DIGIOH_CUSTOM_JS.logError(s,"custom_js_parent_apps"),s.message="DIGIOH: Custom JS Apps #509 (Parent: AfterDocReady) -- "+s.message,t.console.error(s),!0}},CJSAPPS_PARENT[309]={},CJSAPPS_PARENT[139]={},CJSAPPS_PARENT[372]={},CJSAPPS_PARENT[140]={},CJSAPPS_PARENT[610]={},CJSAPPS_PARENT[173]={},CJSAPPS_PARENT[189]={},CJSAPPS_PARENT[319]={},CJSAPPS_PARENT[319].AfterDocReady=function(e,t,r,o,a){DIGIOH_CUSTOM_JS.log;try{!function(){function t(e){var t=new Date,r=new Date(t.toLocaleString("en-US",{timeZone:e})),o=t.getTime()-r.getTime();return new Date(t.getTime()-o)}function r(e){return e<10?"0"+e.toString():e.toString()}function o(e){switch(e.getDay()){case 0:return"sun";case 1:return"mon";case 2:return"tue";case 3:return"wed";case 4:return"thu";case 5:return"fri";case 6:return"sat"}}const a=new Date;e.dd=r(a.getDate()),e.mm=r(a.getMonth()+1),e.yyyy=r(a.getFullYear()),e.dow=o(a),e.hh24=r(a.getHours()),e.yyyymmdd=e.yyyy+e.mm+e.dd,e.yyyymmddhh24=e.yyyy+e.mm+e.dd+e.hh24;const n=t("America/New_York");e.ddET=r(n.getDate()),e.mmET=r(n.getMonth()+1),e.yyyyET=r(n.getFullYear()),e.dowET=o(n),e.hh24ET=r(n.getHours()),e.hh24et=e.hh24ET,e.yyyymmddET=e.yyyyET+e.mmET+e.ddET,e.yyyymmddhh24ET=e.yyyyET+e.mmET+e.ddET+e.hh24ET;const s=t("America/Chicago");e.ddCT=r(s.getDate()),e.mmCT=r(s.getMonth()+1),e.yyyyCT=r(s.getFullYear()),e.dowCT=o(s),e.hh24CT=r(s.getHours()),e.hh24ct=e.hh24CT,e.yyyymmddCT=e.yyyyCT+e.mmCT+e.ddCT,e.yyyymmddhh24CT=e.yyyyCT+e.mmCT+e.ddCT+e.hh24CT;const g=t("America/Denver");e.ddMT=r(g.getDate()),e.mmMT=r(g.getMonth()+1),e.yyyyMT=r(g.getFullYear()),e.dowMT=o(g),e.hh24MT=r(g.getHours()),e.hh24mt=e.hh24MT,e.yyyymmddMT=e.yyyyMT+e.mmMT+e.ddMT,e.yyyymmddhh24MT=e.yyyyMT+e.mmMT+e.ddMT+e.hh24MT;const l=t("America/Los_Angeles");e.ddPT=r(l.getDate()),e.mmPT=r(l.getMonth()+1),e.yyyyPT=r(l.getFullYear()),e.dowPT=o(l),e.hh24PT=r(l.getHours()),e.hh24pt=e.hh24PT,e.yyyymmddPT=e.yyyyPT+e.mmPT+e.ddPT,e.yyyymmddhh24PT=e.yyyyPT+e.mmPT+e.ddPT+e.hh24PT;const i=t("UTC");e.ddUTC=r(i.getDate()),e.mmUTC=r(i.getMonth()+1),e.yyyyUTC=r(i.getFullYear()),e.dowUTC=o(i),e.hh24UTC=r(i.getHours()),e.hh24utc=e.hh24UTC,e.yyyymmddUTC=e.yyyyUTC+e.mmUTC+e.ddUTC,e.yyyymmddhh24UTC=e.yyyyUTC+e.mmUTC+e.ddUTC+e.hh24UTC,e.yyyymmddhhmm24UTC=e.yyyymmddhh24UTC+r(i.getMinutes());let c=t("America/New_York").getHours();e.hh24et=c<10?"0"+c.toString():c.toString()}()}catch(e){return DIGIOH_CUSTOM_JS.logError(e,"custom_js_parent_apps"),e.message="DIGIOH: Custom JS Apps #319 (Parent: AfterDocReady) -- "+e.message,t.console.error(e),!0}},CJSAPPS_PARENT[417]={},CJSAPPS_PARENT[530]={},CJSAPPS_PARENT[530].AfterDocReady=function(e,t,r,o,a){DIGIOH_CUSTOM_JS.log;try{e.ddmArticleSection=o("meta[name=parsely-section]").attr("content");let t=o("meta[name=parsely-tags]").attr("content");e.ddmArticleTags=t?t.split(","):[]}catch(e){return DIGIOH_CUSTOM_JS.logError(e,"custom_js_parent_apps"),e.message="DIGIOH: Custom JS Apps #530 (Parent: AfterDocReady) -- "+e.message,t.console.error(e),!0}},CJSAPPS_PARENT[670]={},CJSAPPS_PARENT[492]={},DIGIOH_CUSTOM_JS={runCustomJsOnDocumentReady:function(e,t,r,o,a){try{DIGIOH_CUSTOM_JS.log;const t=r.querySelectorAll('meta[property^="og"]'),o={};if(t.length>0)for(let e=0;e<t.length;e++)t[e].hasAttribute("property")&&(o[t[e].getAttribute("property")]=t[e].getAttribute("content"));e.ogTagsObj=o}catch(e){DIGIOH_CUSTOM_JS.logError(e,"runCustomJsOnDocumentReady"),e.message="DIGIOH: Custom JS Parent -- "+e.message,t.console.error(e)}return!0},runCustomJsBeforeLightboxDisplay:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS.log}catch(e){DIGIOH_CUSTOM_JS.logError(e,"runCustomJsBeforeLightboxDisplay"),e.message="DIGIOH: Custom JS Parent -- "+e.message,t.console.error(e)}return!0},runCustomJsOnLightboxDisplay:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS.log}catch(e){DIGIOH_CUSTOM_JS.logError(e,"runCustomJsOnLightboxDisplay"),e.message="DIGIOH: Custom JS Parent -- "+e.message,t.console.error(e)}},runCustomJsOnChangePages:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS.log}catch(e){DIGIOH_CUSTOM_JS.logError(e,"runCustomJsOnChangePages"),e.message="DIGIOH: Custom JS Parent -- "+e.message,t.console.error(e)}},runCustomJsOnLightboxSubmit:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS.log}catch(e){DIGIOH_CUSTOM_JS.logError(e,"runCustomJsOnLightboxSubmit"),e.message="DIGIOH: Custom JS Parent -- "+e.message,t.console.error(e)}},runCustomJsOnLightboxRedirect:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS.log}catch(e){DIGIOH_CUSTOM_JS.logError(e,"runCustomJsOnLightboxRedirect"),e.message="DIGIOH: Custom JS Parent -- "+e.message,t.console.error(e)}},runCustomJsOnLightboxDownload:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS.log}catch(e){DIGIOH_CUSTOM_JS.logError(e,"runCustomJsOnLightboxDownload"),e.message="DIGIOH: Custom JS Parent -- "+e.message,t.console.error(e)}},runCustomJsOnLightboxClose:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS.log}catch(e){DIGIOH_CUSTOM_JS.logError(e,"runCustomJsOnLightboxClose"),e.message="DIGIOH: Custom JS Parent -- "+e.message,t.console.error(e)}},log:function(e){DLOG.log(e,"CUSTOM_JS_PARENT")},logError:function(e,t){try{DLOG.log(e.message,"CUSTOM_JS_PARENT."+t+"()"),DLOG.logErrorFromCustomJsParent(e,"CUSTOM_JS_PARENT."+t)}catch(e){e.message="DIGIOH: Custom JS Parent -- "+e.message,window.console.error(e)}}},DIGIOH_CUSTOM_JS_SUPER={runCustomJsOnDocumentReady:function(e,t,r,o,a){try{DIGIOH_CUSTOM_JS_SUPER.log}catch(e){DIGIOH_CUSTOM_JS_SUPER.logError(e,"runCustomJsOnDocumentReady"),e.message="DIGIOH: Custom JS Global -- "+e.message,t.console.error(e)}return!0},runCustomJsBeforeLightboxDisplay:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS_SUPER.log}catch(e){DIGIOH_CUSTOM_JS_SUPER.logError(e,"runCustomJsBeforeLightboxDisplay"),e.message="DIGIOH: Custom JS Global -- "+e.message,t.console.error(e)}return!0},runCustomJsOnLightboxDisplay:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS_SUPER.log}catch(e){DIGIOH_CUSTOM_JS_SUPER.logError(e,"runCustomJsOnLightboxDisplay"),e.message="DIGIOH: Custom JS Global -- "+e.message,t.console.error(e)}},runCustomJsOnChangePages:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS_SUPER.log}catch(e){DIGIOH_CUSTOM_JS_SUPER.logError(e,"runCustomJsOnChangePages"),e.message="DIGIOH: Custom JS Global -- "+e.message,t.console.error(e)}},runCustomJsOnLightboxSubmit:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS_SUPER.log}catch(e){DIGIOH_CUSTOM_JS_SUPER.logError(e,"runCustomJsOnLightboxSubmit"),e.message="DIGIOH: Custom JS Global -- "+e.message,t.console.error(e)}},runCustomJsOnLightboxRedirect:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS_SUPER.log}catch(e){DIGIOH_CUSTOM_JS_SUPER.logError(e,"runCustomJsOnLightboxRedirect"),e.message="DIGIOH: Custom JS Global -- "+e.message,t.console.error(e)}},runCustomJsOnLightboxDownload:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS_SUPER.log}catch(e){DIGIOH_CUSTOM_JS_SUPER.logError(e,"runCustomJsOnLightboxDownload"),e.message="DIGIOH: Custom JS Global -- "+e.message,t.console.error(e)}},runCustomJsOnLightboxClose:function(e,t,r,o,a,n,s){try{DIGIOH_CUSTOM_JS_SUPER.log}catch(e){DIGIOH_CUSTOM_JS_SUPER.logError(e,"runCustomJsOnLightboxClose"),e.message="DIGIOH: Custom JS Global -- "+e.message,t.console.error(e)}},log:function(e){try{DLOG.log(e,"CUSTOM_JS_GLOBAL")}catch(e){e.message="DIGIOH: Custom JS Global -- "+e.message,window.console.error(e)}},logError:function(e,t){try{DLOG.log(e.message,"CUSTOM_JS_GLOBAL."+t+"()"),DLOG.logErrorFromCustomJsParent(e,"CUSTOM_JS_GLOBAL."+t)}catch(e){e.message="DIGIOH: Custom JS Global -- "+e.message,window.console.error(e)}}};