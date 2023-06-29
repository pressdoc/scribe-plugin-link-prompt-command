define([], function () {

  'use strict';

  var urlProtocolRegExp = /^https?\:\/\//;
  var anchorLinkProtocolRegExp = /^(#[A-Za-z0-9-._~:\/?#[\]@!$&'()*+,;=%]*)?/;
  var mailtoProtocolRegExp = /^mailto\:/;
  var telProtocolRegExp = /^tel\:/;

  var knownProtocols = [urlProtocolRegExp, mailtoProtocolRegExp, telProtocolRegExp, anchorLinkProtocolRegExp];

  function emptyLink(string) {
    return /\w/.test(string);
  }

  function hasKnownProtocol(urlValue) {
    // If a http/s or mailto link is provided, then we will trust that an link is valid
    return knownProtocols.some(function(protocol) { return protocol.test(urlValue)});
  }

  return {
    emptyLink: emptyLink,
    hasKnownProtocol: hasKnownProtocol
  };
});
