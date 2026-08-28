const ZAP_STATISTICS = {
    "automation.spider.urls.added": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of URLs added by the standard spider running in the automation framework"
    },
    "domxss.attack.<vector>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the given DOM XSS attack vector was used"
    },
    "domxss.gets.count": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of GET requests made by the DOM XSS scan rule"
    },
    "domxss.scan.count": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the DOM XSS rule was run against a target URL"
    },
    "domxss.vulns.div1": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of DOM XSS vulnerabilities found when retrieving div elements"
    },
    "domxss.vulns.div2": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of DOM XSS vulnerabilities found when accessing div elements"
    },
    "domxss.vulns.get1": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of DOM XSS vulnerabilities found using the first GET request"
    },
    "domxss.vulns.get2": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of DOM XSS vulnerabilities found using the first second GET request"
    },
    "domxss.vulns.input1": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of DOM XSS vulnerabilities found when retrieving input elements"
    },
    "domxss.vulns.possibleDomXSSTriggers2": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of DOM XSS vulnerabilities found using possibleDomXSSTriggers2"
    },
    "domxss.vulns.possibleDomXSSTriggers3": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of DOM XSS vulnerabilities found using possibleDomXSSTriggers3"
    },
    "openapi.urls.added": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of URLs added by importing an OpenAPI definition"
    },
    "soap.urls.added": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of URLs added by importing a SOAP definition"
    },
    "spiderAjax.urls.added": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of URLs found by the ajax spider"
    },
    "sqldb.<key>.calls": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the SQL statement with the given key has been called"
    },
    "sqldb.<key>.pool": {
        "important": false,
        "scope": "global",
        "type": "highwatermark",
        "description": "The highest number of prepared statements in the pool for the given key"
    },
    "sqldb.<key>.time": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The cumulative number of milliseconds taken by the corresponding SQL statements"
    },
    "sqldb.conn.closed": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the ZAP db has been closed"
    },
    "sqldb.conn.openned": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the ZAP db has been opened"
    },
    "stats.acsrf.<token-name>": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of times the given token is present in an HTTP response"
    },
    "stats.alertFilter.<rule-id>.risk.<risk>": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of times the given rule has been changed to the given risk by an alert filter"
    },
    "stats.api.call.<format>.<component>.<request-type>.<name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the given API endpoint has been called - from 2.11.0"
    },
    "stats.api.error.<format>.<component>.<request-type>.<name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the given API endpoint has returned an error - from 2.11.0"
    },
    "stats.ascan.<rule-id>.alerts": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of alerts the given active scan rule has raised - from 2.11.0"
    },
    "stats.ascan.<rule-id>.skipped": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of alerts the given active scan rule has been skipped - from 2.11.0"
    },
    "stats.ascan.<rule-id>.started": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of alerts the given active scan rule has been started - from 2.11.0"
    },
    "stats.ascan.<rule-id>.time": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The cumulative number of milliseconds that the given active scan rule has run for - from 2.11.0"
    },
    "stats.ascan.<rule-id>.urls": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of URLs that the given active scan rule has requested - from 2.11.0"
    },
    "stats.ascan.started": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the active scanner has been started - from 2.11.0"
    },
    "stats.ascan.stopped": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the active scanner has been stopped (as opposed to finishing) - from 2.11.0"
    },
    "stats.ascan.time": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The cumulative number of milliseconds that active scanner has run for - from 2.11.0"
    },
    "stats.ascan.urls": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of URLs the active scanner has requested - from 2.11.0"
    },
    "stats.auth.browser.nopasswordfield": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times Browser Based Authentication failed to find a password field"
    },
    "stats.auth.browser.nouserfield": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times Browser Based Authentication failed to find a username field"
    },
    "stats.auth.configure.auth.error": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of errors when automatically configuring context authentication"
    },
    "stats.auth.configure.auth.form": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of contexts automatically configured for form-based authentication"
    },
    "stats.auth.configure.auth.json": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of contexts automatically configured for JSON-based authentication"
    },
    "stats.auth.configure.session.header": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of contexts automatically configured header based session management"
    },
    "stats.auth.configure.verification": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of contexts automatically configured for verification"
    },
    "stats.auth.detect.auth.form": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of form-based authentication requests identified"
    },
    "stats.auth.detect.auth.json": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of JSON-based authentication requests identified"
    },
    "stats.auth.detect.register": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of registration requests identified"
    },
    "stats.auth.detect.session.<token-key>": {
        "important": true,
        "scope": "global",
        "type": "counter",
        "description": "The number of times a session has been detected with the token-key"
    },
    "stats.auth.failure": {
        "important": true,
        "scope": "site",
        "type": "counter",
        "description": "The number of authentication failures"
    },
    "stats.auth.session.set.header": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times a message has been processed to add an authentication header"
    },
    "stats.auth.sessiontoken.<session-token>": {
        "important": true,
        "scope": "site",
        "type": "counter",
        "description": "The number of times the specified session token has been identified"
    },
    "stats.auth.state.assumedin": {
        "important": true,
        "scope": "site",
        "type": "counter",
        "description": "The number of messages between successful polls that are assumed to be logged in"
    },
    "stats.auth.state.loggedin": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of messages that include the logged-in indicator"
    },
    "stats.auth.state.loggedout": {
        "important": true,
        "scope": "site",
        "type": "counter",
        "description": "The number of messages that include the logged-out indicator"
    },
    "stats.auth.state.noindicator": {
        "important": true,
        "scope": "site",
        "type": "counter",
        "description": "The number of messages where no logged in or out indicators have been set in the context"
    },
    "stats.auth.state.unknown": {
        "important": true,
        "scope": "site",
        "type": "counter",
        "description": "The number of messages which don't contain either logged in or out indicators"
    },
    "stats.auth.success": {
        "important": true,
        "scope": "site",
        "type": "counter",
        "description": "The number of authentication successes"
    },
    "stats.auto.errors": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of automation errors reported"
    },
    "stats.auto.job.<job-type>.run": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the given automation job type has been run"
    },
    "stats.auto.jobs.run": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of automation jobs run"
    },
    "stats.auto.plans.run": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of automation plans run"
    },
    "stats.auto.warnings": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of automation warnings reported"
    },
    "stats.break.drop": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times a request or response has been dropped via a break point - from 2.11.0"
    },
    "stats.break.hit": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times a break point has been hit - from 2.11.0"
    },
    "stats.break.step": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times a break point has been stepped through - from 2.11.0"
    },
    "stats.code.<response-code>": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of messages which include the given response code"
    },
    "stats.contentType.<content-type>": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of messages which include the given content type"
    },
    "stats.error.core.uncaught": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of uncaught exceptions"
    },
    "stats.exim.copy.url": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of URLs copied"
    },
    "stats.exim.import.har.file": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of HAR files imported"
    },
    "stats.exim.import.har.file.errors": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of errors when importing a HAR file"
    },
    "stats.exim.import.har.file.message": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of HAR messages imported via a file"
    },
    "stats.exim.import.har.file.message.errors": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of errors when importing a message via a HAR file"
    },
    "stats.exim.import.modsec2.file": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of ModSecurity v2 files imported"
    },
    "stats.exim.import.modsec2.file.errors": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of errors when importing a ModSecurity v2 file"
    },
    "stats.exim.import.modsec2.file.message": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of ModSecurity v2 messages imported via a file"
    },
    "stats.exim.import.url.file": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of URL files imported"
    },
    "stats.exim.import.url.file.errors": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of errors when importing a URL file"
    },
    "stats.exim.import.url.file.message": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of URLs imported via a file"
    },
    "stats.exim.import.zap.file": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of ZAP files imported"
    },
    "stats.exim.import.zap.file.errors": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of errors when importing a ZAP file"
    },
    "stats.exim.import.zap.file.message": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of ModSecurity v2 messages imported via a file"
    },
    "stats.exim.save.har.file": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of HAR Files saved"
    },
    "stats.exim.save.har.file.errors": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of errors when saving a HAR file"
    },
    "stats.exim.save.har.file.message": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of HAR messages saves to a files"
    },
    "stats.exim.save.raw.file.msg": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of messages saved as raw files"
    },
    "stats.exim.save.raw.file.msg.errors": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of errors when saving messages as raw files"
    },
    "stats.exim.save.xml.file.msg": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of messages saved as XML files"
    },
    "stats.exim.save.xml.file.msg.errors": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of errors when saving messages as XML files"
    },
    "stats.formhandler.add": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of Value Generator field configurations added"
    },
    "stats.formhandler.add.<name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of Value Generator field configurations added (by name)"
    },
    "stats.formhandler.modify": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of Value Generator field configurations modified"
    },
    "stats.formhandler.modify.<name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of Value Generator field configurations modified (by name)"
    },
    "stats.formhandler.remove": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of Value Generator field configurations removed"
    },
    "stats.formhandler.remove.<name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of Value Generator field configurations removed (by name)"
    },
    "stats.fuzz.<message-type>.started": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of fuzzers started by message type"
    },
    "stats.fuzz.HTTP.message.processors.error": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of fuzzer HTTP message processor errors"
    },
    "stats.fuzz.HTTP.message.processors.run": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of fuzzer HTTP message processors run"
    },
    "stats.fuzz.messages.edited": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of fuzz messages edited"
    },
    "stats.fuzz.messages.sent": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of fuzz messages sent"
    },
    "stats.fuzz.payload.processors.error": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of fuzzer payload processor errors"
    },
    "stats.fuzz.payload.processors.run": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of fuzzer payload processors run"
    },
    "stats.log.error": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of logged errors"
    },
    "stats.log.error.<logger-name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of logged errors for the specific logger"
    },
    "stats.log.fatal": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of logged fatals"
    },
    "stats.log.fatal.<logger-name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of logged fatals for the specific logger"
    },
    "stats.log.warn": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of logged warns"
    },
    "stats.log.warn.<logger-name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of logged warns for the specific logger"
    },
    "stats.network.send.failure": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times ZAP has failed to send an HTTP request"
    },
    "stats.network.send.success": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times ZAP has sucessfully sent an HTTP request"
    },
    "stats.oast.boast.interactions": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of BOAST interactions"
    },
    "stats.oast.boast.payloadsGenerated": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of BOAST payloads generated"
    },
    "stats.oast.callback.interactions": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of callback interactions"
    },
    "stats.oast.callback.payloadsGenerated": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of callback payloads generated"
    },
    "stats.oast.interactsh.interactions": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of Interactsh interactions"
    },
    "stats.oast.interactsh.payloadsGenerated": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of Interactsh payloads generated"
    },
    "stats.pscan.<rule-id>.alerts": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of alerts raised by the given scan rule - from 2.11.0"
    },
    "stats.pscan.<rule-id>.time": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The cumulative number of milliseconds taken to run the given scan rule - from 2.11.0"
    },
    "stats.pscan.<rule-name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The cumulative number of milliseconds taken to run the given passive scanner, for scan rules use stats.pscan.<rule-id>.time"
    },
    "stats.pscan.recordsToScan": {
        "important": false,
        "scope": "global",
        "type": "highwatermark",
        "description": "The highest message count queued to passive scan"
    },
    "stats.pscan.reqBodyTooBig": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of requests that have not been passively scanned as they exceed the configured max body size to scan"
    },
    "stats.pscan.respBodyTooBig": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of responses that have not been passively scanned as they exceed the configured max body size to scan"
    },
    "stats.quickstart.news.<news-id>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the given news item has been clicked on"
    },
    "stats.reports.error.<template-name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of errors by template name"
    },
    "stats.reports.generated.<template-name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of reports generated by template name"
    },
    "stats.reports.nofile.<template-name>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of File Not Found errors by template name"
    },
    "stats.responseTime.<time-slice>": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of messages with response times in milliseconds the given (logarithmic) time slice (1, 2, 4, 8 etc)"
    },
    "stats.script.call.<engine-name>.<type>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the given type of script has been called - from 2.11.0"
    },
    "stats.script.error.<engine-name>.<type>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the given type of script has been returned an error - from 2.11.0"
    },
    "stats.selenium.launch.<browser-id>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of time the given browser has been launched"
    },
    "stats.selenium.launch.<requester-id>.<browser-id>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the given browser has been successfully launched for the requester"
    },
    "stats.selenium.launch.<requester-id>.<browser-id>.failure": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the given browser has failed to launch for the requester"
    },
    "stats.spider.started": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the spider has been started - from 2.11.0"
    },
    "stats.spider.stopped": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the spider has been stopped (as opposed to completing) - from 2.11.0"
    },
    "stats.spider.time": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The total number of milliseconds the spider has run for across all scans - from 2.11.0"
    },
    "stats.spider.url.error": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of URLs the spider has found but failed to access - from 2.11.0"
    },
    "stats.spider.url.found": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of URLs the spider has found and accessed - from 2.11.0"
    },
    "stats.tag.<tag-name>": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of messages containing the given tag"
    },
    "stats.tech.reqcount.id": {
        "important": false,
        "scope": "site",
        "type": "highwatermark",
        "description": "The highest request count the successfully identified a new technology for the site"
    },
    "stats.tech.reqcount.total": {
        "important": false,
        "scope": "site",
        "type": "highwatermark",
        "description": "The total number of requests analysed to detect technology for the site"
    },
    "stats.websockets.bytes.incoming": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The cumulative number of incoming websocket bytes received"
    },
    "stats.websockets.bytes.outgoing": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The cumulative number of outgoing websocket bytes sent"
    },
    "stats.websockets.close": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of times a websocket connection was closed"
    },
    "stats.websockets.count.incoming": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of incoming websocket messages"
    },
    "stats.websockets.count.outgoing": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of outgoing websocket messages"
    },
    "stats.websockets.opcode.<opcode>": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of websocket messages by opcode"
    },
    "stats.websockets.open": {
        "important": false,
        "scope": "site",
        "type": "counter",
        "description": "The number of times a websocket connection was opened"
    },
    "stats.websockets.pscan.<pscanname>": {
        "important": false,
        "scope": "global",
        "type": "counter",
        "description": "The number of times the given rule was run against a message"
    }
};

const ZAP_INITIATORS = {
    0: "DEFAULT_INITIATOR",
    1: "PROXY_INITIATOR",
    2: "ACTIVE_SCANNER_INITIATOR",
    3: "SPIDER_INITIATOR",
    4: "FUZZER_INITIATOR",
    5: "AUTHENTICATION_INITIATOR",
    6: "MANUAL_REQUEST_INITIATOR",
    7: "CHECK_FOR_UPDATES_INITIATOR",
    8: "BEAN_SHELL_INITIATOR",
    9: "ACCESS_CONTROL_SCANNER_INITIATOR",
    10: "AJAX_SPIDER_INITIATOR",
    11: "FORCED_BROWSE_INITIATOR",
    12: "TOKEN_GENERATOR_INITIATOR",
    13: "WEB_SOCKET_INITIATOR",
    14: "AUTHENTICATION_HELPER_INITIATOR",
    15: "AUTHENTICATION_POLL_INITIATOR",
    16: "OAST_INITIATOR",
    17: "PARAM_DIGGER_INITIATOR",
    18: "CLIENT_SPIDER_INITIATOR"
};

const KNOWN_HEADERS = [
    "accept",
    "accept-ch",
    "accept-encoding",
    "accept-language",
    "accept-patch",
    "accept-post",
    "accept-ranges",
    "access-control-allow-credentials",
    "access-control-allow-headers",
    "access-control-allow-methods",
    "access-control-allow-origin",
    "access-control-expose-headers",
    "access-control-max-age",
    "access-control-request-headers",
    "access-control-request-method",
    "activate-storage-access",
    "age",
    "allow",
    "alt-svc",
    "alt-used",
    "attribution-reporting-eligible",
    "attribution-reporting-register-source",
    "attribution-reporting-register-trigger",
    "authorization",
    "available-dictionary",
    "cache-control",
    "clear-site-data",
    "connection",
    "content-digest",
    "content-disposition",
    "content-dpr",
    "content-encoding",
    "content-language",
    "content-length",
    "content-location",
    "content-range",
    "content-security-policy",
    "content-security-policy-report-only",
    "content-type",
    "cookie",
    "critical-ch",
    "cross-origin-embedder-policy",
    "cross-origin-embedder-policy-report-only",
    "cross-origin-opener-policy",
    "cross-origin-resource-policy",
    "date",
    "device-memory",
    "dictionary-id",
    "dnt",
    "downlink",
    "dpr",
    "early-data",
    "ect",
    "etag",
    "expect",
    "expect-ct",
    "expires",
    "forwarded",
    "from",
    "host",
    "idempotency-key",
    "if-match",
    "if-modified-since",
    "if-none-match",
    "if-range",
    "if-unmodified-since",
    "integrity-policy",
    "integrity-policy-report-only",
    "keep-alive",
    "last-modified",
    "link",
    "location",
    "max-forwards",
    "nel",
    "no-vary-search",
    "observe-browsing-topics",
    "origin",
    "origin-agent-cluster",
    "permissions-policy",
    "permissions-policy-report-only",
    "pragma",
    "prefer",
    "preference-applied",
    "priority",
    "proxy-authenticate",
    "proxy-authorization",
    "range",
    "referer",
    "referrer-policy",
    "refresh",
    "report-to",
    "reporting-endpoints",
    "repr-digest",
    "retry-after",
    "rtt",
    "save-data",
    "sec-browsing-topics",
    "sec-ch-device-memory",
    "sec-ch-dpr",
    "sec-ch-prefers-color-scheme",
    "sec-ch-prefers-reduced-motion",
    "sec-ch-prefers-reduced-transparency",
    "sec-ch-ua",
    "sec-ch-ua-arch",
    "sec-ch-ua-bitness",
    "sec-ch-ua-form-factors",
    "sec-ch-ua-full-version",
    "sec-ch-ua-full-version-list",
    "sec-ch-ua-mobile",
    "sec-ch-ua-model",
    "sec-ch-ua-platform",
    "sec-ch-ua-platform-version",
    "sec-ch-ua-wow64",
    "sec-ch-viewport-height",
    "sec-ch-viewport-width",
    "sec-ch-width",
    "sec-fetch-dest",
    "sec-fetch-mode",
    "sec-fetch-site",
    "sec-fetch-storage-access",
    "sec-fetch-user",
    "sec-gpc",
    "sec-private-state-token",
    "sec-private-state-token-crypto-version",
    "sec-private-state-token-lifetime",
    "sec-purpose",
    "sec-redemption-record",
    "sec-speculation-tags",
    "sec-websocket-accept",
    "sec-websocket-extensions",
    "sec-websocket-key",
    "sec-websocket-protocol",
    "sec-websocket-version",
    "server",
    "server-timing",
    "service-worker",
    "service-worker-allowed",
    "service-worker-navigation-preload",
    "set-cookie",
    "set-login",
    "sourcemap",
    "speculation-rules",
    "strict-transport-security",
    "supports-loading-mode",
    "te",
    "timing-allow-origin",
    "tk",
    "trailer",
    "transfer-encoding",
    "upgrade",
    "upgrade-insecure-requests",
    "use-as-dictionary",
    "user-agent",
    "vary",
    "via",
    "viewport-width",
    "want-content-digest",
    "want-repr-digest",
    "warning",
    "width",
    "www-authenticate",
    "x-content-type-options",
    "x-dns-prefetch-control",
    "x-forwarded-for",
    "x-forwarded-host",
    "x-forwarded-proto",
    "x-frame-options",
    "x-permitted-cross-domain-policies",
    "x-powered-by",
    "x-robots-tag",
    "x-xss-protection"
];

const AUTH_HEADERS = [
    "authorization",
    "proxy-authenticate",
    "proxy-authorization",
    "set-cookie",
    "set-login",
    "www-authenticate"
];

const AUTH_COOKIES = [
    "asp.net_sessionid",
    "aspsessionid",
    "siteserver",
    "cfid",
    "cftoken",
    "phpsessid",
    "sessid",
    "sid",
    "viewstate",
    "zenid"
];

var reportFile = "";
var detectedPlan = {};
var detectedScript = {};
var includedPaths = [];
var copyFade = null;
var statTotals = {};
var runInfo = null;

function resetInfo() {
    return {
        "inScopeRequests": 0,
        "totalRequests": 0,
        "goodRequests": 0,
        "badRequests": 0,
        "pollRequests": []
    };
}

var runTotals = {};
var totalInfo = resetInfo();

function parseContents(contents) {
    inScopeRequests = 0;
    totalRequests = 0;
    goodRequests = 0;
    badRequests = 0;
    pollRequests = [];
    statTotals = {};

    console.debug("parseContents", contents);
    try {
        var json = JSON.parse(contents);
    } catch (e) {
        alert(e.toString());
        return false;
    }

    if (typeof json["@programName"] == "undefined") {
        alert("Error: Invalid auth report format provided");
        return false;
    }

    $("#file_upload").removeClass("no-upload");

    let display = $("#display");
    display.empty();
    display.append($("<h1></h1>").text("Auth Report"));

    /* Meta */
    display.append($(`<h2 id="meta"></h2>`).text("Meta"));
    let meta_keys = Object.keys(json).filter((key) => { return key.match(/^@|^site$/) });
    meta_keys.forEach((key) => {
        display.append($("<div></div>").append($("<strong></strong>").text(`${key}:`)).append(` ${json[key]}`));
    });

    display.append($("<h3></h3>").text("Discovered Sites"));
    display.append($(`<ul id="discovered_sites"></ul>`));
    json.domains.forEach((item, key) => {
        $("#discovered_sites").append($("<li></li>").text(`${item}`));
    });

    /* Environment Plan */
    display.append($(`<h2 id="env_plan"></h2>`).text("Environment Plan"));
    let planDetails = $("<details></details>");
    planDetails.append($("<summary></summary>").text("ZAP Authentication Environment"));
    planDetails.append($(`<textarea class="code-block" readonly></textarea>`).text(json.afEnv));
    display.append(planDetails);

    // Grab the includepaths from the plan
    let includedPathsSegment = json.afEnv.match(/^\s+includePaths:\s+(?:^\s+\- (\S+)\n)+/img);
    console.debug("included paths segment", includedPathsSegment);
    if (includedPathsSegment.length) {
        let includedPathsSearch = [...includedPathsSegment[0].matchAll(/\-\s+([^\n]+)/img)];
        console.debug("included paths", includedPaths);
        includedPathsSearch.forEach((value) => {
            includedPaths.push(value[1]);
        });
    }
    console.log("Included Paths:", includedPaths);
    
    display.append($("<h3></h3>").text("Plan Failures"));
    if (!json.afPlanErrors.length) {
        display.append($("<div></div>").html("&#x2705; No plan failures"));
    } else {
        
    }

    /* Auth Summary */
    display.append($("<h2></h2>").text("Auth Summary"));
    display.append($(`<ul id="auth_summary"></ul>`));
    // Make sure auth.summary.auth is at the top
    json.summaryItems.sort(function(a, b) {
        return a.key == "auth.summary.auth" ? -1 : 1;
    });
    json.summaryItems.forEach((item, key) => {
        if (item.key == "auth.summary.auth") {
            $("#auth_summary").append(`<li><a href="#statistics">${checkCross(item.passed)} [${item.key}] ${item.description}</a></li>`);
            $("#auth_summary").append("<ul></ul>");
        } else {
            $("#auth_summary ul").append(`<li>${checkCross(item.passed)} [${item.key}] ${item.description}</li>`)
        }
    });

    /* Auth Failures */
    display.append($("<h3></h3>").text("Auth Failures"));
    if (typeof json.failureReasons != "undefined") {
        display.append($(`<ul id="auth_failures"></ul>`));
        json.failureReasons.forEach((item, key) => {
            $("#auth_failures").append(`<li>[${item.key}] ${item.description}</li>`)
        });
    } else {
        display.append(`<em>No failure data</em>`);
    }

    /* Statistics */
    display.append($("<h2></h2>").text("Statistics"));
    display.append($(`<ul id="statistics"></ul>`));
    json.statistics.sort(function(a, b) {
        if (a.scope == b.scope) {
            return a.key > b.key;
        }
        return a.scope == "global" ? -1 : 1;
    });
    json.statistics.forEach((item, key) => {
        let stat_scope = (item.scope == "site" ? item.site : item.scope);

        // Add to totals. This is used for result analysis
        if (typeof statTotals[item.key] == "undefined") {
            statTotals[item.key] = 0;
        }
        if (item.value.toString().match(/^[0-9]+$/)) {
            statTotals[item.key] += item.value;
        }

        // Add a scope item
        if (!$(`#statistics li[scope="${stat_scope}"]`).length) {
            $("#statistics").append($("<li></li>").attr("scope", stat_scope).html(`${stat_scope}`));
            $(`#statistics li[scope="${stat_scope}"]`).append(`<ul></ul>`);
        }

        // Add the stat to the correct scope
        let stat_display = showStat(item.key);
            
        $(`#statistics li[scope="${stat_scope}"] ul`).append($(`<li id="stat_${item.key}"></li>`).append(stat_display).append(` = ${item.value}`));
    });
    console.debug("statistic_totals", statTotals);

    display.append($("<h2></h2>").text("Login Runs"));
    display.append($(`<div id="login_runs"></div>`));

    if (json.diagnostics.length == 0) {
        display.append(`<em>No login runs found</em>`);
    }

    let login_runs = $("#login_runs");
    $("#controls_display").html(`<form></form>`);

    json.diagnostics.forEach((run, run_key) => {
        let run_id = `runs_run_${run_key}`;
        let this_run = $(`<div id="${run_id}" class="run-container"></div>`);
        var run_timer = 0;

        runTotals[run_key] = resetInfo();

        // Show only the first run
        if (run_key > 0) {
            this_run.prop("hidden", true);
        }

        if (json.diagnostics.length > 1) {
            this_run.append($(`<h3></h3>`).text(`Run #${run_key + 1}/${json.diagnostics.length}`));
        }

        let run_toggle = $(`<div><label><input type="radio" name="toggle_run" value="${run_key}"> Run #${run_key + 1} (${run.steps.length} steps)</label></div>`);
        if (run_key == 0) {
            run_toggle.find("input").prop("checked", true);
        }
        run_toggle.find("input").change(function() {
            console.log("Toggling");
            $(".run-container").prop("hidden", true);
            $(`#${run_id}`).prop("hidden", false);
            displaySummary($(this).val());
            updateStepDisplay();
        });
        $("#controls_display form").append(run_toggle);

        for (let [run_item_key, run_item] of Object.entries(run)) {
            if (typeof run_item == "string") {
                switch (run_item_key) {
                    case "script":
                        detectedScript = JSON.parse(run_item);
                        this_run.append($("<details></details>").append(`<summary><strong>${run_item_key}:</strong></summary`).append($(`<textarea class="code-block" readonly></textarea>`).text(run_item)));
                        break;
                    case "afPlan":
                        detectedPlan = run_item;
                        this_run.append($("<details></details>").append(`<summary><strong>${run_item_key}:</strong></summary`).append($(`<textarea class="code-block" readonly></textarea>`).text(run_item)));
                        break;
                    default:
                        this_run.append($("<div></div>").append($("<strong></strong>").text(`${run_item_key}:`)).append(` ${run_item}`));
                        break;
                }
            }
        };

        this_run.append($("<h3></h3>").text(`Steps (${run.steps.length} steps)`));
        var login_steps = $(`<div id="login_steps_${run_key}"></div>`);
        run.steps.forEach((step, step_key) => {
            login_steps.append(parseStep(run_key, step, step_key));
        });

        this_run.append(login_steps);
        login_runs.append(this_run);
    });


    $(`[name="toggle_run"]:first`).prop("checked", true);
    displaySummary(0);
    updateStepDisplay();

    $(".screenshot-button").click(function() {
        $("#large-screenshot").html(`<img src="` + $(this).find(".screenshot").attr("src") + `">`);
    });
}

function updateStepDisplay() {

    let first_login_step = $(".login-step:visible:first");
    let scroll_y = window.scrollY;
    let found_current_step = false;
    let below_meta = $("#meta").length && scroll_y > $("#meta").offset().top;

    $("#step_tab").prop("hidden", !below_meta);
    if (!below_meta) {
        return;
    }
    
    let in_login_steps = first_login_step.offset().top > scroll_y;
    if (in_login_steps) {
        $("#step_tab").html("Meta &amp; Stats");
        return;
    }
    $("#step_tab").html(`Step <span class="step-current">0</span>/<span class="step-total">0</span>`);

    $("#step_tab .step-total").html($(".login-step:visible").length);

    $.each($(".login-step:visible"), function(key, el) {
        let step_pos = $(el).offset().top;
        let step_above_top = scroll_y >= step_pos;
        console.log(`step_${key}`, step_pos, scroll_y, step_above_top);

        if (found_current_step)
            return;

        if (!step_above_top) {
            found_current_step = true;
            $("#step_tab .step-current").html(key);
        }
    });

    if (!found_current_step) {
        $("#step_tab .step-current").html($(".login-step:visible").length);
    }
}

function displaySummary(run_key) {
    runInfo = runTotals[run_key];
    if (runInfo == undefined) {
        // Fill the runInfo with blank info
        runInfo = resetInfo();
        console.error("No log in runs were found");
        analyzeConclusion();
        return;
    }

    // At-a-glance
    $("#summary .content").html("");
    $("#summary .content").append(`<div>Total Requests: ${runInfo.totalRequests}</div>`);
    $("#summary .content").append(`<div>&#x1F441;&#xFE0F; In Scope: ${runInfo.inScopeRequests} (${Math.round(runInfo.inScopeRequests / runInfo.totalRequests * 100)}%)</div>`);
    $("#summary .content").append(`<div>&#x2705; Good responses: ${runInfo.goodRequests} (${Math.round(runInfo.goodRequests / runInfo.totalRequests * 100)}%)</div>`);
    $("#summary .content").append(`<div>&#x274C; Bad responses: ${runInfo.badRequests} (${Math.round(runInfo.badRequests / runInfo.totalRequests * 100)}%)</div>`);
    $("#summary .content").append(`<div>Poll Requests: ${runInfo.pollRequests.length}</div>`);
    let poll_summary = $(`<ol></ol>`);
    runInfo.pollRequests.forEach((poll) => {
        let new_poll_item = $(`<li><a href="#${poll.displayId}"><code></code></a></li>`);
        
        if (poll.responseHeader.match(/HTTP\/.+ [45]/)) {
            new_poll_item.find("code").addClass("bad");
        } else if (poll.responseHeader.match(/HTTP\/.+ 2/)) {
            new_poll_item.find("code").addClass("good");
        } else if (poll.responseHeader.match(/HTTP\/.+ 3/)) {
            new_poll_item.find("code").addClass("redirect");
        }
        new_poll_item.find("code").append(`${poll.responseHeader.split("\n")[0].replace(/ (\d{3})\s+.*/, ' $1').trim()}`);

        new_poll_item.click(function(e) {
            e.preventDefault();
            $(`[name="toggle_run_runs_run_${poll.displayRunId}"]:not(:checked)`).click();
            window.location = `#${poll.displayId}`;
        });

        poll_summary.append(new_poll_item);
    });
    $("#summary .content").append(poll_summary);

    analyzeConclusion();
}

function analyzeConclusion() {
    $("#summary .conclusion, #summary .advice").html("");

    // Check for auth state
    let state_loggedin = (statTotals["stats.auth.state.loggedin"] ?? false) ? true : false;
    let state_loggedout = (statTotals["stats.auth.state.loggedout"] ?? false) ? true : false;
    let state_assumedin = (statTotals["stats.auth.state.assumedin"] ?? false) ? true : false;

    // loggedin should be found
    $("#summary .conclusion").append(`
    <details>
        <summary>Logged in indicator statistic should exist: ${state_loggedin ? "&#x2705;" : "&#x274C"}</summary>
        <div>&#149; ${state_loggedin ? `Statistic stats.auth.state.loggedin was found, value: ${statTotals["stats.auth.state.loggedin"]}` : "Statistic stats.auth.state.loggedin was not found"}</div>
    </details>`);

    // loggedout should not be found
    $("#summary .conclusion").append(`
    <details>
        <summary>Log out indicator statistic should not exist: ${state_loggedout ? "&#x274C" : "&#x2705;"}</summary>
        <div>&#149; ${state_loggedout ? `Statistic stats.auth.state.loggedout was found, value: ${statTotals["stats.auth.state.loggedout"]}` : "Statistic stats.auth.state.loggedout was not found"}</div>
    </details>`);

    // assumedin should not be found
    $("#summary .conclusion").append(`
    <details>
        <summary>Assumed in indicator statistic should not exist: ${state_assumedin ? "&#x274C" : "&#x2705;"}</summary>
        <div>&#149; ${state_assumedin ? `Statistic stats.auth.state.assumedin was found, value: ${statTotals["stats.auth.state.assumedin"]}` : "Statistic stats.auth.state.assumedin was not found"}</div>
    </details>`);

    // Check for tokens
    let search_for_tokens = $.grep(Object.keys(statTotals), function(item, index) {
        return item.toString().match(/stats\.auth\.(detect\.session|sessiontoken)/);
    });
    console.debug("_analyzeConclusion_tokens", search_for_tokens);
    $("#summary .conclusion").append(`
    <details>
        <summary>Session info statistics should exist: ${search_for_tokens.length ? "&#x2705;" : "&#x26A0;&#xFE0F;"}</summary>
        <div style="overflow: scroll; max-height: 80px">${search_for_tokens.length ? search_for_tokens.join("<br>") : "<em>No tokens found</em>"}</div>
    </details>`);

    // ADVICE: Check for tokens
    if (!search_for_tokens) {
        $("#summary .advice").append(`<p>No session tokens were found. The current configuration may not match the website.</p>`);
        return;
    }

    if (state_loggedin) {
        // ADVICE: Both logged in and logged out indicators
        if (state_assumedin || state_loggedout) {
            $("#summary .advice").append(`<p>Despite logging in, log out indicators are also being found. The logged out indicator may be too lose or the authentication system may be unreliable.</p>`);
        }

        // ADVICE: Logged in but no session information
        if (!search_for_tokens.length) {
            $("#summary .advice").append(`<p>While the application was seemingly able to log in, the application may not have persistent session information. This can cause scans to not complete as intended as the session may reset upon new scan threads being initiated.</p>`);
        }
    } else {        

        // ADVICE: No login indicators; logged out indicators found
        if (state_loggedout) {
            if (runInfo.pollRequests.length) {
                $("#summary .advice").append(`<p>No logged in indicators were found. Logged out indicators <em>were</em> found. This is an indicator of the authentication process failing. Check the poll requests to verify the reason(s) for failure.</p>`);
            } else {
                $("#summary .advice").append(`<p>No logged in indicators were found. Logged out indicators <em>were</em> found. This is an indicator of the authentication process failing. Check the login steps to ensure they are running fully.</p>`);
            }
        }
        // ADVICE: No login indicators; assumed in indicators found
        else if (state_assumedin) {
            $("#summary .advice").append(`<p>No logged in indicators were found. Assumed in indicators <em>were</em> found. The login may have succeeded, but the verification URL and regex may be too loose and will need to be configured manually.</p>`);
        }
        // ADVICE: No login indicators; no other indicators
        else {
            // ADVICE: No login indicators; got poll requests
            if (runInfo.pollRequests.length) {
                $("#summary .advice").append(`<p>No logged in indicators were found. The configured authentication flow may be incorrect and a different authentication method or recording file may need to be used.</p>`);
            // ADVICE: No login indicators; no poll requests
            } else {
                $("#summary .advice").append(`<p>No logged in indicators were found and there are no poll requests. This is an indicator that the login flow has failed. Check the authentication flow (i.e. recording, credentials) and try again.</p>`);
            }
        }
    }

    // ADVICE FALLBACK: No advice
    if ($("#summary .advice").html().trim() == "") {
        $("#summary .advice").html(`<p>There is no advice to provide at this time</p>`);
    }
}

function parseStep(parent_index, step, step_index) {    
    let this_step = $(`<div id="login_steps_${parent_index}_${step_index + 1}" class="login-step"></div>`);
    let step_info = $(`<div class="step-info"></div>`);

    this_step.append(`<h4>[step:${step_index + 1}][id:${step.id}] ${step.description}</h4>`);

    if (step.screenshot) {
        step_info.append(`<button class="screenshot-button" popovertarget="large-screenshot"><img class="screenshot" src="data:image/png;base64,${step.screenshot}"></button>`);
    } else {
        step_info.append(`<img class="screenshot no-screenshot" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGHaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj48dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPjwvcmRmOkRlc2NyaXB0aW9uPjwvcmRmOlJERj48L3g6eG1wbWV0YT4NCjw/eHBhY2tldCBlbmQ9J3cnPz4slJgLAAAJx0lEQVR4Xu3bYU/b5h6G8Xt2PBwrCcRkzTKCAKWrUKV+v70837ESqmgnaIFViSChmDmB2OG8OLGVOIERCjv7n3P9pKrINk7qKFceP3n6w+Xl5Z0AwACnuAEA/qkIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgW/i8dHBzo4OCguBn/cD9cXl7eFTdiNd1uV71eT5IUhqG2traKh0jTN4kkvX37trjrWSRJotPTU41GI43HY0lSpVLRxsaG6vV68fD/a+/fv5ckvXv3rrgL/2CMsJ5BkiT5z/1+X8PhcG5/Jk1TpWla3PwskiTR4eGhoijSZDJREATyfV/X19c6PT1VFEXFX8ELi6JI79+/19HRUXEXnohgPSPXdSVJf/zxR3HXi/v69avSNFWlUtHbt2/V6XT066+/6vXr1wqCYC6q+Htk13wymRR34YkI1jOqVqvyPE9xHGswGBR3v6jb21tJ0sbGxtz2crmsTqfDLSH+JzCH9QzOzs7U7/cVhqFKpZJ6vZ48z9P+/v7ccQ/NmwwGA11eXur6+lqajtbK5fKj559+//13xXH84BxaUbfb1dXVlUajkSTJ933VajU1m838mIODA62trWlnZ0efP39WHMfyPE87Ozsql8vS9Nbn/Pxcw+FQaZrKdV0FQaB2u61SqZSfK7PK8bOP3+129e3bN6VpKs/ztL6+rlarNXe8pq9HFEX5PJ7v+6rX62o0Gvkxs6/F7PEPnVdLrpnnefJ9X81mM78emjl/URAE6nQ6xc14JEZYz6zZbMr3fY3HY3W73eLupU5OTnR6eqrr62v5vq8gCOQ4Tj7/9JjzVCoVaTqH9vXr1+LuBcfHx+r1ehqNRgqCQEEQaDQaqdfrzY0O0zTVZDLR0dGR4jhWEASaTCb5G/b8/FzHx8caDocKgkBhGKpcLiuKIh0eHi7ciq56/Ozj9/v9PBDj8Vjn5+cL/9aTk5P8uDAMFYahHMfRzc3N3HGZjx8/qt/vy3XdB8+bHVu8ZpPJRFEU6ejoaG6eMAxDVatVaRq17LlkrxOexv3tt9/+VdyI1URRpOFwqHK5rFqtJsdx8k/her0ux/nP50L2TeLsCGYwGKjX68l1XW1tbWlra0thGKrRaGgymSiO44XzLFOpVDQcDnV7e5vfko7HY5XL5YXfOz8/18XFhVzX1c7Ojn7++WeFYajNzU0lSaIgCLS2tiZNn3OSJLq7u8uP/emnn1Qul5Ukib58+SLHcbS9va1ms6laraZ6va7JZKI///xTNzc3+W3qqscXHz+7Ppubm/m1GY/HcyOnL1++yPM8vXnzRrVaTbVaTWEYqlar5cdk55X06PNmozDf97W7u6tXr14pDEPV63Xd3NxoNBrp9vZWYRhKkmq1mu7u7nR1dSXf97Wzs6NarUawvtP97wA8Wb1eVxAEStP0L0dH3759kyStr68v3Pq1Wi35vq80TXVxcTG3b5nd3V21Wi15npePFA4PDxeeQzYS2NzczEcBklQqlbS9vT23LdNqtRa2X1xcKE1TVavVhX3ZLVUcx/m2VY+ftb29PXd9Wq2WXNfNb/tmTSaThZHafR573uyaNRqNuVu/UqmkdrstTZ/7fd8Q43kQrBfyyy+/SH+xzEFSfmtVHAFkgiCQCksnHtJoNLS/v692u51Hs9frzUUruz3Kzv0YxZhqZqL/9vZWZ2dnC380vaV76vGzioGTlI8CZ6/vxsaG0jTV4eGhzs7OHrz2euR5h8OhxuOxXNddeh1KpVJ+LbPXEy+DYL2QbMJc04na+2Sf5MveON+jXq+r0+nk550doT3XY2YBiuNY/X5/4Y9mlno85fjHmo3E9va2Go2GHMdRv9/Xp0+fdHx8/Ojgz8rOm/2dhQz/PQTrBWW3F9kc1zLZG/SlFnbu7u5K05FL9hjZY973nB7rxx9/lKYTzO/evVv6Z3ZV/6rHP1Wr1dL+/r5arZaCIMgnxZ8q++byvol7/H0I1gsqlUpaX1+XHlhMms2H3Dd3k21/6qf77Mgie6zsXFdXV/m+p8jeyI9dGLnq8d+r0Wio0+nI8zyNRqMnfyhUq1W5rqs0TZdGPkmS/HX63lErHkawXtjW1la+mHSZbO7j4uJi4Q11cnKi0Wgkz/PmvrEqiqJIHz58WLj1TKb/t1DTx8mCkX1TNRgM5t6ASZLk34Y9RnbLG0XR0t8ZDodzSyRWPf65zU6Wryp7nU5PT+c+BJIk0efPn6VprGbXkWU/Fyfw8XQsHH0GswtHly3aLK7rKS4cPT4+zt/Avu/n64ayRZX3fXOXGQ6H+vTpkzS93ctGUA+d4+PHj/ncTPZmzKLabrfzyeWHFruq8B+/q9OV/pqeazQaLVyTVY9/6PGzxbLZ8x0MBup2u1pbW8tvP6PpgtBqtZrfHmvF82oapqOjo3uvme/72tvbW1j4+uHDh3xBavZvZeHo0zHCegbZOqfieqdMo9HIY+H7fnF3vq7H932NRiPFcSzHcVStVrW3t/dgrDQdObx+/VrValWO4yiO4/wcGxsbevPmzcI59vb2FIZhPvqLp4tCX716NfdNmOu6D06EN5tNtdttVSqVucl0x3HUaDQWAr7q8X/1+JoZyfi+L8/zNBwO8/O6rqswDOdipRXPm/287Jr5vq8wDJfGStMRdrYg9ebmZunrj8djhAXAjOVDAgD4ByJYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADMIFgAzCBYAMwgWADM+De1FW9kGWgOnAAAAABJRU5ErkJggg==">`);
    }
    step_info.append(`
    <div>
        <div><strong>Timestamp:</strong> ${step.created}</div>
        <div><strong>URL:</strong> ${step.url}</div>
    </div>`);

    this_step.append(step_info);

    // Show estimated portion of a zst snippet when loading a recording
    if (Object.keys(detectedScript).length) {
        this_step.append(`<details><summary>zst snippet (estimated)</summary><textarea class="code-block">${JSON.stringify(detectedScript.statements[step_index + 1], null, " ")}</textarea></details>`)
    }

    if (step.webElement) {
        this_step.append(`<div><strong>&#x1F3AF; Target Element</strong></div>`);
        this_step.append(webElementBox(step.webElement, "Interaction Element Details"));
    }

    let all_inputs = $(`<details class="all-inputs"></details>`);
    all_inputs.append($(`<summary><strong>&#x2328;&#xFE0F; Detected Inputs (${step.webElements.length})</strong></summary>`));
    step.webElements.forEach((el) => {
        all_inputs.append(webElementBox(el));
    });
    this_step.append(all_inputs);

    let all_messages = $(`<div class="messages"></div>`);
    step.messages.forEach((msg, index) => {
        all_messages.append(messageBox(msg, index, parent_index, step_index));
    });
    this_step.append(all_messages);

    return this_step;
}


function webElementBox(obj, name = "Element Details") {
    var base = $(`
    <table class="dom-details">
        <thead>
            <tr>
                <th colspan="2">${obj.selector.type}:${obj.selector.value}</th>
            </tr>
            <tr>
                <th>Attribute</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>`);

    for (let [key, value] of Object.entries(obj)) {
        if (typeof value == "object")
            continue;

        let value_row = $(`<tr></tr>`);

        value_row.append($(`<td>${key}</td>`));

        // If outputting the value, give the attributeId and attributeName to check to see if they may be a password/token/secret
        switch (key) {
            case "attributeValue":
                value_row.append(`<td>${displayValueAsString((value), [obj.attributeType, obj.attributeId, obj.attributeName].join("|"))}</td>`);
                break;
            case "attributeType":
            case "attributeId":
            case "attributeName":
                if (isSecretField(value)) {
                    value_row.append(`<td>${displayValueAsString(value)} &#x1F511;</td>`);
                } else if (isIdentityField(value)) {
                    value_row.append(`<td>${displayValueAsString(value)} &#x1F64B;</td>`);
                }else {
                    value_row.append(`<td>${displayValueAsString(value)}</td>`);
                }
                break;
            default:
                value_row.append(`<td>${displayValueAsString(value)}</td>`);
                break;
        }
        
        base.append(value_row);
    }

    return base;
}

function isIdentityField(name) {
    return name.match(/client.?id|username/i);
}

function isSecretField(name) {
    return name.match(/secret|token|password|pwd/i);
}

function checkHideSecret(value, name) {

    return value;
}

function messageBox(obj, id = 0, run_key = 0, step_id = 0) {
    var base = $(`
    <fieldset class="message">
        <div class="message-req"></div>
        <div class="req-timestamp"><strong>Request Timestamp:</strong> </div>
        <div class="res-time"><strong>Response Time:</strong> </div>
        <div class="initiator"><strong>Initiator:</strong> </div>
        <div class="req-container">
            <div>&#x27A1;&#xFE0F; Request</div>
            <div class="indicators-req"></div>
            <details>
                <summary>Headers &amp; Body</summary>
                <fieldset>
                    <legend>Request Header</legend>
                    <div class="res-req-container">
                        <textarea class="message-block req-head" readonly></textarea>
                        <div>
                            <button class="copy-parent">&#x1F4CB; Copy</button>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Request Body</legend>
                    <div class="res-req-container">
                        <textarea class="message-block req-body" readonly></textarea>
                        <div>
                            <button class="copy-parent">&#x1F4CB; Copy</button>
                        </div>
                    </div>
                </fieldset>
            </details>
        </div>
        <div class="res-container">
            <div>&#x2B05;&#xFE0F; Response</div>
            <div class="res-status"><code></code></div>
            <div class="indicators-res"></div>
            <details>
                <summary>Headers &amp; Body</summary>
                <fieldset>
                    <legend>Response Header</legend>
                    <div class="res-req-container">
                        <textarea class="message-block res-head" readonly></textarea>
                        <div>
                            <button class="copy-parent">&#x1F4CB; Copy</button>
                        </div>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Response Body</legend>
                    <div class="res-req-container">
                        <textarea class="message-block res-req res-body" readonly></textarea>
                        <div>
                            <button class="copy-parent">&#x1F4CB; Copy</button>
                        </div>
                    </div>
                </fieldset>
            </details>
        </div>
        <div class="align-right">
            <button class="copy-curl" copy-format="cmd">&#x1F916; Copy as cURL (Win CMD)</button>
            <button class="copy-curl" copy-format="pwsh">&#x1F916; Copy as cURL (Powershell)</button>
            <button class="copy-curl" copy-format="bash">&#x1F916; Copy as cURL (Linux)</button>
        </div>
    </fieldset>`);

    let message_id = `run_${run_key}_step_${step_id}_message_${id}`;
    base.attr("id", message_id);

    let requestTitle = obj.requestHeader.match(/^[A-Z]+ http[^\n]+/);

    totalInfo.totalRequests++;
    runTotals[run_key].totalRequests++;
    let req_url = requestTitle[0].replace(/ HTTP\/[0-9\.]+/, "").replace(/^\w+ /, "");
    base.find(".message-req").html(`[req.${id}] `).append($(`<span>${requestTitle[0].replace(/ HTTP\/[0-9\.]+/, "")}</span>`).attr("tooltip", req_url));
    let in_scope_regex = new RegExp(includedPaths.join("|"));
    let in_scope = req_url.match(in_scope_regex);
    if (in_scope) {
        totalInfo.inScopeRequests++;
        runTotals[run_key].inScopeRequests++;
        base.find(".message-req").prepend(`<span class="scope-result in-scope" tooltip="In scope">&#x1F441;&#xFE0F;</span> `);
    } else {
        base.addClass("not-in-scope");
        base.find(".message-req").prepend(`<span class="scope-result out-scope" tooltip="Out of scope">&#x1F6AB;</span> `);
    }

    if (obj.initiator == 15) {
        base.find(".message-req").prepend(` <span tooltip="Poll request">&#x1F7E3;</span>`);
    }
    base.find(".req-timestamp").append(`${obj.created}`);
    base.find(".res-time").append(`${obj.rtt}`);
    base.find(".initiator").append(`${obj.initiator} <span class="initiator-name">(${ZAP_INITIATORS[obj.initiator] ?? "Uknown Initiator"})</span>`);
    base.find(".req-head").text(obj.requestHeader);
    base.find(".req-body").text(obj.requestBody);
    base.find(".res-head").text(obj.responseHeader);
    base.find(".res-body").text(obj.responseBody);
    base.addClass(`zap-initiator-${obj.initiator}`);
    base.find(".res-status code").text(`${obj.responseHeader.split("\n")[0].trim()}`);
    if (obj.responseHeader.match(/HTTP\/.+ [45]/)) {
        totalInfo.badRequests++;
        runTotals[run_key].badRequests++;
        base.find(".res-container").addClass("bad-response");
        base.find(".res-status code").addClass("bad");
    } else if (obj.responseHeader.match(/HTTP\/.+ 2/)) {
        totalInfo.goodRequests++;
        runTotals[run_key].goodRequests++;
        base.find(".res-status code").addClass("good");
    } else if (obj.responseHeader.match(/HTTP\/.+ 3/)) {
        base.find(".res-status code").addClass("redirect");
    }

    base.find(".req-container details summary").html(`Headers (Length: ${obj.requestHeader.length}) &amp; Body (Length: ${obj.requestBody.length})`)
    base.find(".res-container details summary").html(`Headers (Length: ${obj.responseHeader.length}) &amp; Body (Length: ${obj.responseBody.length})`)

    if (obj.initiator == 15) {
        obj.displayRunId = run_key;
        obj.displayId = message_id;
        runTotals[run_key].pollRequests.push(obj);
        totalInfo.pollRequests.push(obj);
    }

    let known_request_headers = {};
    let duplicate_request_headers = [];
    let found_nonstandard_headers = { "res": [], "req": [] };
    let found_authorization_headers = { "req": [], "res": [] };
    let found_authorization_cookies = { "req": [], "res": [] };
    let header_names = {
        "req": [...obj.requestHeader.matchAll(/^([^:\s]+):/img)],
        "res": [...obj.responseHeader.matchAll(/^([^:\s]+):/img)]
    };
    let cookie_names = {
        "req": [...obj.requestHeader.matchAll(/^cookie:\s+([^=\s]+)=/img)],
        "res": [...obj.responseHeader.matchAll(/^set\-cookie:\s+([^=\s]+)=/img)]
    };
    // let search_tokens = {
    //     "req": [],
    //     "res": [...obj.responseBody.matchAll(/"(?:access_)?token":/img)]
    // };

    // Find duplicate headers
    header_names.req.forEach((val) => {
        let header_name = val[1].toLowerCase();
        if (typeof known_request_headers[header_name] == "undefined")
            known_request_headers[header_name] = 0;

        known_request_headers[header_name]++;

        if (known_request_headers[header_name] > 1) {
            duplicate_request_headers.push(header_name);
        }
    });

    if (duplicate_request_headers.length) {
        base.find(`.indicators-req`).append(`<div><strong>&#x1F6A8; Duplicate request headers found:</a></strong> ${[...new Set(duplicate_request_headers)].join(", ")}</div>`);
    }

    [ "req", "res" ].forEach((req_type) => {
        header_names[req_type].forEach((val) => {
            if (!KNOWN_HEADERS.includes(val[1].toLowerCase())) {
                found_nonstandard_headers[req_type].push(val[1]);
            }
        
            if (AUTH_HEADERS.includes(val[1].toLowerCase())) {
                found_authorization_headers[req_type].push(val[1]);
            }
        });

        cookie_names[req_type].forEach((val) => {
            if (AUTH_COOKIES.includes(val[1].toLowerCase())) {
                found_authorization_cookies[req_type].push(val[1]);
            }
        });

        if (found_nonstandard_headers[req_type].length) {
            base.find(`.indicators-${req_type}`).append(`<div><strong>&#x26A0;&#xFE0F; Non-standard headers found:</strong> ${[...new Set(found_nonstandard_headers[req_type])].join(", ")}</div>`);
        }

        if (found_authorization_headers[req_type].length) {
            base.find(`.indicators-${req_type}`).append(`<div><strong>&#x1F511; Authorization headers found:</strong> ${[...new Set(found_authorization_headers[req_type])].join(", ")}</div>`);
        }

        if (found_authorization_cookies[req_type].length) {
            base.find(`.indicators-${req_type}`).append(`<div><strong>&#x1F36A; Authorization cookies found:</strong> ${[...new Set(found_authorization_cookies[req_type])].join(", ")}</div>`);
        }

        // if (search_tokens[req_type].length) {
        //     base.find(`.indicators-${req_type}-tokens`).append(`<div><strong>&#x1F36A; Tokens found:</strong> ${[...new Set(search_tokens[req_type])].join(", ")}</div>`);
        // }
    })

    base.find(".copy-parent").click(function() {
        navigator.clipboard.writeText($(this).closest(".res-req-container").find("textarea").val());
        copyMessage();
    });

    base.find(".copy-curl").click(function() {
        let return_text = null;
        let curl_args = [ "curl -L" ];
        let req_head = $(this).closest(".message").find(".req-head").val();
        let req_body = $(this).closest(".message").find(".req-body").val();
        let req_headers = req_head.split("\n");
        let initial_url = `${req_headers[0].replace(/^\w+ /, "").replace(/HTTP\/.+$/, "")}`.trim();

        req_headers.splice(0, 1);
        console.debug("_REQ", req_headers, initial_url);

        curl_args.push(`--url "${initial_url}"`);
        req_headers.forEach((header, key) => {
            if (header != "") {
                curl_args.push(`-H "${header}"`);
            }
        });

        if (req_body.trim() != "") {
            curl_args.push(`--data '${req_body}'`);
        }

        switch ($(this).attr("copy-format")) {
            case "cmd":
                return_text = curl_args.join(` \`\n  `).replace(/ +$/m, "");
                break;
            case "pwsh":
                return_text = curl_args.join(` ^\n  `).replace(/ +$/m, "");
                break;
            case "bash":
            default:
                return_text = curl_args.join(` \\\n  `).replace(/ +$/m, "");
                break;
        }

        if (return_text !== null) {
            navigator.clipboard.writeText(return_text);
            copyMessage();
        }
    });

    return base;
}

function copyMessage() {
    // Clear existing fade
    if (copyFade !== null) {
        $("#copy_message").stop();
        clearInterval(copyFade);
        copyFade = null;
    }

    // Display fully
    $("#copy_message").css({
        "display": "block",
        "opacity": 1
    });

    // Set fade timeout
    if (copyFade === null) {
        copyFade = setTimeout(function() {
            $("#copy_message").animate({ "opacity": 0 }, 500, function() {
                copyFade = null;
                $("#copy_message").css("display", "initial");
            });
        }, 500);
    }
}

function displayValueAsString(value, check_secret_input_name = "") {
    let special_value = false;

    if (value === null) {
        return `<em class="special-value">null</em>`;
    }

    if (value === true) {
        return `<span class="special-value">true</span>`;
    }

    if (value === false) {
        return `<span class="special-value">false</span>`;
    }

    if (value === "") {
        return `<em class="special-value">empty</em>`;
    }

    let return_el = $(`<input type="text" class="value" readonly>`);
    return_el.attr("value", value);
    if (check_secret_input_name !== "" && isSecretField(check_secret_input_name)) {
        return_el.addClass("hide-secret");
    }

    return return_el.prop('outerHTML');
}

function checkCross(state) {
    return state ? "&#x2705;" : "&#x274C;";
}

function showStat(key) {
    var stat_name = getStatName(key);
    if (!stat_name) {
        return `<span class="tooltip">${key}<span class="tooltiptext zap-stat undocumented">This is an undocumented statistic</span></span>`;
    }

    let stat_info = ZAP_STATISTICS[stat_name];
    let stat_block = $(`<a href="https://www.zaproxy.org/docs/internal-statistics/?key+%2F+link=${encodeURI(stat_name)}" target="zap_stats" class="tooltip">
        ${key}
        <span class="tooltiptext zap-stat">
            <div><strong>Name:</strong> <span class="stat-name"></span></div>
            <div><strong>Scope:</strong> <span class="stat-scope"></span></div>
            <div><strong>Type:</strong> <span class="stat-type"></span></div>
            <div><strong>Description:</strong> <span class="stat-desc"></span></div>
        </span>
    </a>`);
    stat_block.find(".stat-name").text(stat_name);
    stat_block.find(".stat-scope").text(stat_info.scope);
    stat_block.find(".stat-type").text(stat_info.type);
    stat_block.find(".stat-desc").text(stat_info.description);

    if (stat_info.important) {
        stat_block.insertAfter(`<span>&#x203C;&#xFE0F;</span>`)
    }

    return stat_block;
}

function getStatName(key) {
    if (Object.keys(ZAP_STATISTICS).includes(key))
        return key;

    let matched_stat_name = null;
    Object.keys(ZAP_STATISTICS).forEach((stat_name) => {
        let regex_match = new RegExp("(^" + stat_name.replaceAll(".", "\\.").replace(/<[^>]+>/g, "[^\\.]+") + "$)|(^" + stat_name.replaceAll(".", "\\.").replace(/<[^>]+>/g, ".+") + ")");
        // console.log(key + " " + stat_name, regex_match, key.match(regex_match));
        let check_stat_name_match = key.match(regex_match);
        if (check_stat_name_match && (check_stat_name_match[1] || check_stat_name_match[2])) {
            matched_stat_name = stat_name;
        }
    });

    return matched_stat_name ? matched_stat_name : false;
}

var hover_target = null;
var stick_tooltip = null;
var hide_tooltip_timer = null;

$(document).ready(function() {
    $('#auth_report_file').change(function(e) {
        reportFile = "";
        console.debug(e);
        const reader = new FileReader();
        reader.onload = (e) => {
            // console.log('file contents:', e.target.result);
            parseContents(e.target.result);
            $("#auth_report_json").val(e.target.result);
        }

        for (let file of this.files) {
            reader.readAsText(file)
        }
    });

    $('#auth_report_json_submit').click(function(e) {
        e.preventDefault();
        let reportFile = $("#auth_report_json").val();
        parseContents(reportFile);
    });

    $("#expand_details").click(function(e) {
        e.preventDefault();
        $("details").prop("open", true);
    });

    $("#collapse_details").click(function(e) {
        e.preventDefault();
        $("details").prop("open", false);
    });

    // Handle tooltips
    // Tooltips stay displayed for 1 second
    $(document).mouseover(function(e) {
        if ($(e.target).attr("tooltip") != undefined) {
            if (hide_tooltip_timer !== null) {
                clearInterval(hide_tooltip_timer);
                hide_tooltip_timer = null;
            }

            hover_target = e.target;
            $("#tooltip_display")
                .text($(e.target).attr("tooltip"))
                .prop("hidden", false)
                .css({
                    "left": $(e.target).position().left,
                    "top": $(e.target).position().top - parseInt($(e.target).outerHeight()) - 5
                });
        }
    });

    $(document).mouseout(function(e) {
        if (e.target == hover_target) {
            if (hide_tooltip_timer === null) {
                hide_tooltip_timer = setTimeout(function() {
                    hover_target = null;
                    $("#tooltip_display").prop("hidden", true);
                    hide_tooltip_timer = null;
                }, 1000);
            }
        }
    });

    $("#tooltip_display").mouseover(function(e) {
        if (hide_tooltip_timer !== null) {
            clearInterval(hide_tooltip_timer);
            hide_tooltip_timer = null;
        }
    });

    $("#tooltip_display").mouseout(function(e) {
        if (hide_tooltip_timer === null) {
            hide_tooltip_timer = setTimeout(function() {
                hover_target = null;
                $("#tooltip_display").prop("hidden", true);
                hide_tooltip_timer = null;
            }, 1000);
        }
    });

    $(window).on("scroll", function(e) {
        updateStepDisplay();
    });
});
