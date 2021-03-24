(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{832:function(e,t,a){"use strict";a.r(t);var n=a(1),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-012-abci-proposetx-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-012-abci-proposetx-method"}},[e._v("#")]),e._v(" ADR 012: ABCI "),a("code",[e._v("ProposeTx")]),e._v(" Method")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("p",[e._v("25-06-2018: Initial draft based on "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1776",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1776"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1776",target:"_blank",rel:"noopener noreferrer"}},[e._v("#1776"),a("OutboundLink")],1),e._v(" was\nopened in relation to implementation of a Plasma child chain using Tendermint\nCore as consensus/replication engine.")]),e._v(" "),a("p",[e._v("Due to the requirements of "),a("a",{attrs:{href:"https://ethresear.ch/t/minimal-viable-plasma/426",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minimal Viable Plasma (MVP)"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://ethresear.ch/t/plasma-cash-plasma-with-much-less-per-user-data-checking/1298",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plasma Cash"),a("OutboundLink")],1),e._v(", it is necessary for ABCI apps to have a mechanism to handle the following cases (more may emerge in the near future):")]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("deposit")]),e._v(" transactions on the Root Chain, which must consist of a block\nwith a single transaction, where there are no inputs and only one output\nmade in favour of the depositor. In this case, a "),a("code",[e._v("block")]),e._v(" consists of\na transaction with the following shape:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"WzAsIDAsIDAsIDAsICNpbnB1dDEgLSB6ZXJvZWQgb3V0CiAwLCAwLCAwLCAwLCAjaW5wdXQyIC0gemVyb2VkIG91dAogJmx0O2RlcG9zaXRvcl9hZGRyZXNzJmd0OywgJmx0O2Ftb3VudCZndDssICNvdXRwdXQxIC0gaW4gZmF2b3VyIG9mIGRlcG9zaXRvcgogMCwgMCwgI291dHB1dDIgLSB6ZXJvZWQgb3V0CiAmbHQ7ZmVlJmd0OywKXQo="}}),e._v(" "),a("p",[a("code",[e._v("exit")]),e._v(' transactions may also be treated in a similar manner, wherein the\ninput is the UTXO being exited on the Root Chain, and the output belongs to\na reserved "burn" address, e.g., '),a("code",[e._v("0x0")]),e._v(". In such cases, it is favourable for\nthe containing block to only hold a single transaction that may receive\nspecial treatment.")])],1),e._v(" "),a("li",[a("p",[e._v('Other "internal" transactions on the child chain, which may be initiated\nunilaterally. The most basic example of is a coinbase transaction\nimplementing validator node incentives, but may also be app-specific. In\nthese cases, it may be favourable for such transactions to\nbe ordered in a specific manner, e.g., coinbase transactions will always be\nat index 0. In general, such strategies increase the determinism and\npredictability of blockchain applications.')])])]),e._v(" "),a("p",[e._v("While it is possible to deal with the cases enumerated above using the\nexisting ABCI, currently available result in suboptimal workarounds. Two are\nexplained in greater detail below.")]),e._v(" "),a("h3",{attrs:{id:"solution-1-app-state-based-plasma-chain"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-1-app-state-based-plasma-chain"}},[e._v("#")]),e._v(" Solution 1: App state-based Plasma chain")]),e._v(" "),a("p",[e._v("In this work around, the app maintains a "),a("code",[e._v("PlasmaStore")]),e._v(" with a corresponding\n"),a("code",[e._v("Keeper")]),e._v(". The PlasmaStore is responsible for maintaing a second, separate\nblockchain that complies with the MVP specification, including "),a("code",[e._v("deposit")]),e._v('\nblocks and other "internal" transactions. These "virtual" blocks are then broadcasted\nto the Root Chain.')]),e._v(" "),a("p",[e._v("This naive approach is, however, fundamentally flawed, as it by definition\ndiverges from the canonical chain maintained by Tendermint. This is further\nexacerbated if the business logic for generating such transactions is\npotentially non-deterministic, as this should not even be done in\n"),a("code",[e._v("Begin/EndBlock")]),e._v(", which may, as a result, break consensus guarantees.")]),e._v(" "),a("p",[e._v('Additinoally, this has serious implications for "watchers" - independent third parties,\nor even an auxilliary blockchain, responsible for ensuring that blocks recorded\non the Root Chain are consistent with the Plasma chain\'s. Since, in this case,\nthe Plasma chain is inconsistent with the canonical one maintained by Tendermint\nCore, it seems that there exists no compact means of verifying the legitimacy of\nthe Plasma chain without replaying every state transition from genesis (!).')]),e._v(" "),a("h3",{attrs:{id:"solution-2-broadcast-to-tendermint-core-from-abci-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solution-2-broadcast-to-tendermint-core-from-abci-app"}},[e._v("#")]),e._v(" Solution 2: Broadcast to Tendermint Core from ABCI app")]),e._v(" "),a("p",[e._v("This approach is inspired by "),a("code",[e._v("tendermint")]),e._v(", in which Ethereum transactions are\nrelayed to Tendermint Core. It requires the app to maintain a client connection\nto the consensus engine.")]),e._v(" "),a("p",[e._v('Whenever an "internal" transaction needs to be created, the proposer of the\ncurrent block broadcasts the transaction or transactions to Tendermint as\nneeded in order to ensure that the Tendermint chain and Plasma chain are\ncompletely consistent.')]),e._v(" "),a("p",[e._v('This allows "internal" transactions to pass through the full consensus\nprocess, and can be validated in methods like '),a("code",[e._v("CheckTx")]),e._v(", i.e., signed by the\nproposer, is the semantically correct, etc. Note that this involves informing\nthe ABCI app of the block proposer, which was temporarily hacked in as a means\nof conducting this experiment, although this should not be necessary when the\ncurrent proposer is passed to "),a("code",[e._v("BeginBlock")]),e._v(".")]),e._v(" "),a("p",[e._v('It is much easier to relay these transactions directly to the Root\nChain smart contract and/or maintain a "compressed" auxiliary chain comprised\nof Plasma-friendly blocks that 100% reflect the canonical (Tendermint)\nblockchain. Unfortunately, this approach not idiomatic (i.e., utilises the\nTendermint consensus engine in unintended ways). Additionally, it does not\nallow the application developer to:')]),e._v(" "),a("ul",[a("li",[e._v("Control the "),a("em",[e._v("ordering")]),e._v(" of transactions in the proposed block (e.g., index 0,\nor 0 to "),a("code",[e._v("n")]),e._v(" for coinbase transactions)")]),e._v(" "),a("li",[e._v("Control the "),a("em",[e._v("number")]),e._v(" of transactions in the block (e.g., when a "),a("code",[e._v("deposit")]),e._v("\nblock is required)")])]),e._v(" "),a("p",[e._v("Since determinism is of utmost importance in blockchain engineering, this approach,\nwhile more viable, should also not be considered as fit for production.")]),e._v(" "),a("h2",{attrs:{id:"decision"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),a("h3",{attrs:{id:"proposetx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proposetx"}},[e._v("#")]),e._v(" "),a("code",[e._v("ProposeTx")])]),e._v(" "),a("p",[e._v("In order to address the difficulties described above, the ABCI interface must\nexpose an additional method, tentatively named "),a("code",[e._v("ProposeTx")]),e._v(".")]),e._v(" "),a("p",[e._v("It should have the following signature:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"UHJvcG9zZVR4KFJlcXVlc3RQcm9wb3NlVHgpIFJlc3BvbnNlUHJvcG9zZVR4Cg=="}}),e._v(" "),a("p",[e._v("Where "),a("code",[e._v("RequestProposeTx")]),e._v(" and "),a("code",[e._v("ResponseProposeTx")]),e._v(" are "),a("code",[e._v("message")]),e._v("s with the\nfollowing shapes:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBSZXF1ZXN0UHJvcG9zZVR4IHsKICBpbnQ2NCBuZXh0X2Jsb2NrX2hlaWdodCA9IDE7IC8vIGhlaWdodCBvZiB0aGUgYmxvY2sgdGhlIHByb3Bvc2VkIHR4IHdvdWxkIGJlIHBhcnQgb2YKICBWYWxpZGF0b3IgcHJvcG9zZXIgPSAyOyAvLyB0aGUgcHJvcG9zZXIgZGV0YWlscwp9CgptZXNzYWdlIFJlc3BvbnNlUHJvcG9zZVR4IHsKICBpbnQ2NCBudW1fdHggPSAxOyAvLyB0aGUgbnVtYmVyIG9mIHR4IHRvIGluY2x1ZGUgaW4gcHJvcG9zZWQgYmxvY2sKICByZXBlYXRlZCBieXRlcyB0eHMgPSAyOyAvLyBvcmRlcmVkIHRyYW5zYWN0aW9uIGRhdGEgdG8gaW5jbHVkZSBpbiBibG9jawogIGJvb2wgZXhjbHVzaXZlID0gMzsgLy8gd2hldGhlciB0aGUgYmxvY2sgc2hvdWxkIGluY2x1ZGUgb3RoZXIgdHJhbnNhY3Rpb25zIChmcm9tIGBtZW1wb29sYCkKfQo="}}),e._v(" "),a("p",[a("code",[e._v("ProposeTx")]),e._v(" would be called by before "),a("code",[e._v("mempool.Reap")]),e._v(" at this\n"),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/9cd9f3338bc80a12590631632c23c8dbe3ff5c34/consensus/state.go#L935",target:"_blank",rel:"noopener noreferrer"}},[e._v("line"),a("OutboundLink")],1),e._v(".\nDepending on whether "),a("code",[e._v("exclusive")]),e._v(" is "),a("code",[e._v("true")]),e._v(" or "),a("code",[e._v("false")]),e._v(", the proposed\ntransactions are then pushed on top of the transactions received from\n"),a("code",[e._v("mempool.Reap")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"delivertx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delivertx"}},[e._v("#")]),e._v(" "),a("code",[e._v("DeliverTx")])]),e._v(" "),a("p",[e._v("Since the list of "),a("code",[e._v("tx")]),e._v(" received from "),a("code",[e._v("ProposeTx")]),e._v(" are "),a("em",[e._v("not")]),e._v(" passed through "),a("code",[e._v("CheckTx")]),e._v(',\nit is probably a good idea to provide a means of differentiatiating "internal" transactions\nfrom user-generated ones, in case the app developer needs/wants to take extra measures to\nensure validity of the proposed transactions.')]),e._v(" "),a("p",[e._v("Therefore, the "),a("code",[e._v("RequestDeliverTx")]),e._v(" message should be changed to provide an additional flag, like so:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"bWVzc2FnZSBSZXF1ZXN0RGVsaXZlclR4IHsKCWJ5dGVzIHR4ID0gMTsKCWJvb2wgaW50ZXJuYWwgPSAyOwp9Cg=="}}),e._v(" "),a("p",[e._v("Alternatively, an additional method "),a("code",[e._v("DeliverProposeTx")]),e._v(" may be added as an accompanient to\n"),a("code",[e._v("ProposeTx")]),e._v(". However, it is not clear at this stage if this additional overhead is necessary\nto preserve consensus guarantees given that a simple flag may suffice for now.")]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Pending")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("Tendermint ABCI apps will be able to function as minimally viable Plasma chains.")]),e._v(" "),a("li",[e._v("It will thereby become possible to add an extension to "),a("code",[e._v("cosmos-sdk")]),e._v(" to enable\nABCI apps to support both IBC and Plasma, maximising interop.")]),e._v(" "),a("li",[e._v("ABCI apps will have great control and flexibility in managing blockchain state,\nwithout having to resort to non-deterministic hacks and/or unsafe workarounds")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Maintenance overhead of exposing additional ABCI method")]),e._v(" "),a("li",[e._v("Potential security issues that may have been overlooked and must now be tested extensively")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("ul",[a("li",[e._v("ABCI developers must deal with increased (albeit nominal) API surface area.")])]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1776",target:"_blank",rel:"noopener noreferrer"}},[e._v('#1776 Plasma and "Internal" Transactions in ABCI Apps'),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://ethresear.ch/t/minimal-viable-plasma/426",target:"_blank",rel:"noopener noreferrer"}},[e._v("Minimal Viable Plasma"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://ethresear.ch/t/plasma-cash-plasma-with-much-less-per-user-data-checking/1298",target:"_blank",rel:"noopener noreferrer"}},[e._v("Plasma Cash: Plasma with much less per-user data checking"),a("OutboundLink")],1)])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);