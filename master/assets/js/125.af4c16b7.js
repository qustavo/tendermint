(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{786:function(e,t,r){"use strict";r.r(t);var a=r(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"adr-063-privval-grpc"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#adr-063-privval-grpc"}},[e._v("#")]),e._v(" ADR 063: Privval gRPC")]),e._v(" "),r("h2",{attrs:{id:"changelog"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),r("ul",[r("li",[e._v("23/11/2020: Initial Version (@marbar3778)")])]),e._v(" "),r("h2",{attrs:{id:"context"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),r("p",[e._v("Validators use remote signers to help secure their keys. This system is Tendermint's recommended way to secure validators, but the path to integration with Tendermint's private validator client is plagued with custom protocols.")]),e._v(" "),r("p",[e._v("Tendermint uses its own custom secure connection protocol ("),r("code",[e._v("SecretConnection")]),e._v(") and a raw tcp/unix socket connection protocol. The secure connection protocol until recently was exposed to man in the middle attacks and can take longer to integrate if not using Golang. The raw tcp connection protocol is less custom, but has been causing minute issues with users.")]),e._v(" "),r("p",[e._v("Migrating Tendermint's private validator client to a widely adopted protocol, gRPC, will ease the current maintenance and integration burden experienced with the current protocol.")]),e._v(" "),r("h2",{attrs:{id:"decision"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),r("p",[e._v("After discussing with multiple stake holders, "),r("a",{attrs:{href:"https://grpc.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gRPC"),r("OutboundLink")],1),e._v(" was decided on to replace the current private validator protocol. gRPC is a widely adopted protocol in the micro-service and cloud infrastructure world. gRPC uses "),r("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("protocol-buffers"),r("OutboundLink")],1),e._v(" to describe its services, providing a language agnostic implementation. Tendermint uses protobuf for on disk and over the wire encoding already making the integration with gRPC simpler.")]),e._v(" "),r("h2",{attrs:{id:"alternative-approaches"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alternative-approaches"}},[e._v("#")]),e._v(" Alternative Approaches")]),e._v(" "),r("ul",[r("li",[e._v("JSON-RPC: We did not consider JSON-RPC because Tendermint uses protobuf extensively making gRPC a natural choice.")])]),e._v(" "),r("h2",{attrs:{id:"detailed-design"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed Design")]),e._v(" "),r("p",[e._v("With the recent integration of "),r("a",{attrs:{href:"https://developers.google.com/protocol-buffers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Protobuf"),r("OutboundLink")],1),e._v(" into Tendermint the needed changes to migrate from the current private validator protocol to gRPC is not large.")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://grpc.io/docs/what-is-grpc/core-concepts/#service-definition",target:"_blank",rel:"noopener noreferrer"}},[e._v("service definition"),r("OutboundLink")],1),e._v(" for gRPC will be defined as:")]),e._v(" "),r("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"ICBzZXJ2aWNlIFByaXZWYWxpZGF0b3JBUEkgewogICAgcnBjIEdldFB1YktleSh0ZW5kZXJtaW50LnByb3RvLnByaXZ2YWwuUHViS2V5UmVxdWVzdCkgcmV0dXJucyAodGVuZGVybWludC5wcm90by5wcml2dmFsLlB1YktleVJlc3BvbnNlKTsKICAgIHJwYyBTaWduVm90ZSh0ZW5kZXJtaW50LnByb3RvLnByaXZ2YWwuU2lnblZvdGVSZXF1ZXN0KSByZXR1cm5zICh0ZW5kZXJtaW50LnByb3RvLnByaXZ2YWwuU2lnbmVkVm90ZVJlc3BvbnNlKTsKICAgIHJwYyBTaWduUHJvcG9zYWwodGVuZGVybWludC5wcm90by5wcml2dmFsLlNpZ25Qcm9wb3NhbFJlcXVlc3QpIHJldHVybnMgKHRlbmRlcm1pbnQucHJvdG8ucHJpdnZhbC5TaWduZWRQcm9wb3NhbFJlc3BvbnNlKTsKCiAgICBtZXNzYWdlIFB1YktleVJlcXVlc3QgewogICAgc3RyaW5nIGNoYWluX2lkID0gMTsKICB9CgogIC8vIFB1YktleVJlc3BvbnNlIGlzIGEgcmVzcG9uc2UgbWVzc2FnZSBjb250YWluaW5nIHRoZSBwdWJsaWMga2V5LgogIG1lc3NhZ2UgUHViS2V5UmVzcG9uc2UgewogICAgdGVuZGVybWludC5jcnlwdG8uUHVibGljS2V5IHB1Yl9rZXkgPSAxIFsoZ29nb3Byb3RvLm51bGxhYmxlKSA9IGZhbHNlXTsKICB9CgogIC8vIFNpZ25Wb3RlUmVxdWVzdCBpcyBhIHJlcXVlc3QgdG8gc2lnbiBhIHZvdGUKICBtZXNzYWdlIFNpZ25Wb3RlUmVxdWVzdCB7CiAgICB0ZW5kZXJtaW50LnR5cGVzLlZvdGUgdm90ZSAgICAgPSAxOwogICAgc3RyaW5nICAgICAgICAgICAgICAgIGNoYWluX2lkID0gMjsKICB9CgogIC8vIFNpZ25lZFZvdGVSZXNwb25zZSBpcyBhIHJlc3BvbnNlIGNvbnRhaW5pbmcgYSBzaWduZWQgdm90ZSBvciBhbiBlcnJvcgogIG1lc3NhZ2UgU2lnbmVkVm90ZVJlc3BvbnNlIHsKICAgIHRlbmRlcm1pbnQudHlwZXMuVm90ZSB2b3RlICA9IDEgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwogIH0KCiAgLy8gU2lnblByb3Bvc2FsUmVxdWVzdCBpcyBhIHJlcXVlc3QgdG8gc2lnbiBhIHByb3Bvc2FsCiAgbWVzc2FnZSBTaWduUHJvcG9zYWxSZXF1ZXN0IHsKICAgIHRlbmRlcm1pbnQudHlwZXMuUHJvcG9zYWwgcHJvcG9zYWwgPSAxOwogICAgc3RyaW5nICAgICAgICAgICAgICAgICAgICBjaGFpbl9pZCA9IDI7CiAgfQoKICAvLyBTaWduZWRQcm9wb3NhbFJlc3BvbnNlIGlzIHJlc3BvbnNlIGNvbnRhaW5pbmcgYSBzaWduZWQgcHJvcG9zYWwgb3IgYW4gZXJyb3IKICBtZXNzYWdlIFNpZ25lZFByb3Bvc2FsUmVzcG9uc2UgewogICAgdGVuZGVybWludC50eXBlcy5Qcm9wb3NhbCBwcm9wb3NhbCA9IDEgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwogIH0KfQo="}}),e._v(" "),r("blockquote",[r("p",[e._v("Note: Remote Singer errors are removed in favor of "),r("a",{attrs:{href:"https://grpc.io/docs/guides/error/",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpc status error codes"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("In previous versions of the remote signer, Tendermint acted as the server and the remote signer as the client. In this process the client established a long lived connection providing a way for the server to make requests to the client. In the new version it has been simplified. Tendermint is the client and the remote signer is the server. This follows client and server architecture and simplifies the previous protocol.")]),e._v(" "),r("h4",{attrs:{id:"keep-alive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive"}},[e._v("#")]),e._v(" Keep Alive")]),e._v(" "),r("p",[e._v("If you have worked on the private validator system you will see that we are removing the "),r("code",[e._v("PingRequest")]),e._v(" and "),r("code",[e._v("PingResponse")]),e._v(" messages. These messages were used to create functionality which kept the connection alive. With gRPC there is a "),r("a",{attrs:{href:"https://github.com/grpc/grpc/blob/master/doc/keepalive.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("keep alive feature"),r("OutboundLink")],1),e._v(" that will be added along side the integration to provide the same functionality.")]),e._v(" "),r("h4",{attrs:{id:"metrics"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#metrics"}},[e._v("#")]),e._v(" Metrics")]),e._v(" "),r("p",[e._v("Remote signers are crucial to operating secure and consistently up Validators. In the past there were no metrics to tell the operator if something is wrong other than the node not signing. Integrating metrics into the client and provided server will be done with "),r("a",{attrs:{href:"https://github.com/grpc-ecosystem/go-grpc-prometheus",target:"_blank",rel:"noopener noreferrer"}},[e._v("prometheus"),r("OutboundLink")],1),e._v(". This will be integrated into node's prometheus export for node operators.")]),e._v(" "),r("h4",{attrs:{id:"security"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#security"}},[e._v("#")]),e._v(" Security")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security",target:"_blank",rel:"noopener noreferrer"}},[e._v("TLS"),r("OutboundLink")],1),e._v(" is widely adopted with the use of gRPC. There are various forms of TLS (one-way & two-way). One way is the client identifying who the server is, while two way is both parties identifying the other. For Tendermint's use case having both parties identifying each other provides adds an extra layer of security. This requires users to generate both client and server certificates for a TLS connection.")]),e._v(" "),r("p",[e._v("An insecure option will be provided for users who do not wish to secure the connection.")]),e._v(" "),r("h4",{attrs:{id:"upgrade-path"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-path"}},[e._v("#")]),e._v(" Upgrade Path")]),e._v(" "),r("p",[e._v("This is a largely breaking change for validator operators. The optimal upgrade path would be to release gRPC in a minor release, allow key management systems to migrate to the new protocol. In the next major release the current system (raw tcp/unix) is removed. This allows users to migrate to the new system and not have to coordinate upgrading the key management system alongside a network upgrade.")]),e._v(" "),r("p",[e._v("The upgrade of "),r("a",{attrs:{href:"https://github.com/iqlusioninc/tmkms",target:"_blank",rel:"noopener noreferrer"}},[e._v("tmkms"),r("OutboundLink")],1),e._v(" will be coordinated with Iqlusion. They will be able to make the necessary upgrades to allow users to migrate to gRPC from the current protocol.")]),e._v(" "),r("h2",{attrs:{id:"status"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),r("p",[e._v("Proposed")]),e._v(" "),r("h3",{attrs:{id:"positive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),r("ul",[r("li",[e._v("Use an adopted standard for secure communication. (TLS)")]),e._v(" "),r("li",[e._v("Use an adopted communication protocol. (gRPC)")]),e._v(" "),r("li",[e._v("Requests are multiplexed onto the tcp connection. (http/2)")]),e._v(" "),r("li",[e._v("Language agnostic service definition.")])]),e._v(" "),r("h3",{attrs:{id:"negative"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),r("ul",[r("li",[e._v("Users will need to generate certificates to use TLS. (Added step)")]),e._v(" "),r("li",[e._v("Users will need to find a supported gRPC supported key management system")])]),e._v(" "),r("h3",{attrs:{id:"neutral"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);