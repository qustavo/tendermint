(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{691:function(t,e,v){"use strict";v.r(e);var _=v(1),o=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"consensus"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#consensus"}},[t._v("#")]),t._v(" Consensus")]),t._v(" "),v("h2",{attrs:{id:"channel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#channel"}},[t._v("#")]),t._v(" Channel")]),t._v(" "),v("p",[t._v("Consensus has four separate channels. The channel identifiers are listed below.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Number")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("StateChannel")]),t._v(" "),v("td",[t._v("32")])]),t._v(" "),v("tr",[v("td",[t._v("DataChannel")]),t._v(" "),v("td",[t._v("33")])]),t._v(" "),v("tr",[v("td",[t._v("VoteChannel")]),t._v(" "),v("td",[t._v("34")])]),t._v(" "),v("tr",[v("td",[t._v("VoteSetBitsChannel")]),t._v(" "),v("td",[t._v("35")])])])]),t._v(" "),v("h2",{attrs:{id:"message-types"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#message-types"}},[t._v("#")]),t._v(" Message Types")]),t._v(" "),v("h3",{attrs:{id:"proposal"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#proposal"}},[t._v("#")]),t._v(" Proposal")]),t._v(" "),v("p",[t._v("Proposal is sent when a new block is proposed. It is a suggestion of what the\nnext block in the blockchain should be.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Field Number")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("proposal")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/spec/core/data_structures.html#proposal"}},[t._v("Proposal")])],1),t._v(" "),v("td",[t._v("Proposed Block to come to consensus on")]),t._v(" "),v("td",[t._v("1")])])])]),t._v(" "),v("h3",{attrs:{id:"vote"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vote"}},[t._v("#")]),t._v(" Vote")]),t._v(" "),v("p",[t._v("Vote is sent to vote for some block (or to inform others that a process does not vote in the\ncurrent round). Vote is defined in the\n"),v("a",{attrs:{href:"https://github.com/tendermint/spec/blob/master/spec/core/data_structures.md#blockidd",target:"_blank",rel:"noopener noreferrer"}},[t._v("Blockchain"),v("OutboundLink")],1),t._v("\nsection and contains validator's\ninformation (validator address and index), height and round for which the vote is sent, vote type,\nblockID if process vote for some block ("),v("code",[t._v("nil")]),t._v(" otherwise) and a timestamp when the vote is sent. The\nmessage is signed by the validator private key.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Field Number")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("vote")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/spec/core/data_structures.html#vote"}},[t._v("Vote")])],1),t._v(" "),v("td",[t._v("Vote for a proposed Block")]),t._v(" "),v("td",[t._v("1")])])])]),t._v(" "),v("h3",{attrs:{id:"blockpart"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#blockpart"}},[t._v("#")]),t._v(" BlockPart")]),t._v(" "),v("p",[t._v("BlockPart is sent when gossiping a piece of the proposed block. It contains height, round\nand the block part.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Field Number")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("int64")]),t._v(" "),v("td",[t._v("Height of corresponding block.")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("round")]),t._v(" "),v("td",[t._v("int32")]),t._v(" "),v("td",[t._v("Round of voting to finalize the block.")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("part")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/spec/core/data_structures.html#part"}},[t._v("Part")])],1),t._v(" "),v("td",[t._v("A part of the block.")]),t._v(" "),v("td",[t._v("3")])])])]),t._v(" "),v("h3",{attrs:{id:"newroundstep"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#newroundstep"}},[t._v("#")]),t._v(" NewRoundStep")]),t._v(" "),v("p",[t._v("NewRoundStep is sent for every step transition during the core consensus algorithm execution.\nIt is used in the gossip part of the Tendermint protocol to inform peers about a current\nheight/round/step a process is in.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Field Number")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("int64")]),t._v(" "),v("td",[t._v("Height of corresponding block")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("round")]),t._v(" "),v("td",[t._v("int32")]),t._v(" "),v("td",[t._v("Round of voting to finalize the block.")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("step")]),t._v(" "),v("td",[t._v("uint32")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("3")])]),t._v(" "),v("tr",[v("td",[t._v("seconds_since_start_time")]),t._v(" "),v("td",[t._v("int64")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("4")])]),t._v(" "),v("tr",[v("td",[t._v("last_commit_round")]),t._v(" "),v("td",[t._v("int32")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("5")])])])]),t._v(" "),v("h3",{attrs:{id:"newvalidblock"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#newvalidblock"}},[t._v("#")]),t._v(" NewValidBlock")]),t._v(" "),v("p",[t._v("NewValidBlock is sent when a validator observes a valid block B in some round r,\ni.e., there is a Proposal for block B and 2/3+ prevotes for the block B in the round r.\nIt contains height and round in which valid block is observed, block parts header that describes\nthe valid block and is used to obtain all\nblock parts, and a bit array of the block parts a process currently has, so its peers can know what\nparts it is missing so they can send them.\nIn case the block is also committed, then IsCommit flag is set to true.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Field Number")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("int64")]),t._v(" "),v("td",[t._v("Height of corresponding block")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("round")]),t._v(" "),v("td",[t._v("int32")]),t._v(" "),v("td",[t._v("Round of voting to finalize the block.")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("block_part_set_header")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/spec/core/data_structures.html#partsetheader"}},[t._v("PartSetHeader")])],1),t._v(" "),v("td"),t._v(" "),v("td",[t._v("3")])]),t._v(" "),v("tr",[v("td",[t._v("block_parts")]),t._v(" "),v("td",[t._v("int32")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("4")])]),t._v(" "),v("tr",[v("td",[t._v("is_commit")]),t._v(" "),v("td",[t._v("bool")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("5")])])])]),t._v(" "),v("h3",{attrs:{id:"proposalpol"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#proposalpol"}},[t._v("#")]),t._v(" ProposalPOL")]),t._v(" "),v("p",[t._v("ProposalPOL is sent when a previous block is re-proposed.\nIt is used to inform peers in what round the process learned for this block (ProposalPOLRound),\nand what prevotes for the re-proposed block the process has.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Field Number")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("int64")]),t._v(" "),v("td",[t._v("Height of corresponding block")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("proposal_pol_round")]),t._v(" "),v("td",[t._v("int32")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("proposal_pol")]),t._v(" "),v("td",[t._v("bitarray")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("3")])])])]),t._v(" "),v("h3",{attrs:{id:"hasvote"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#hasvote"}},[t._v("#")]),t._v(" HasVote")]),t._v(" "),v("p",[t._v("HasVote is sent to indicate that a particular vote has been received. It contains height,\nround, vote type and the index of the validator that is the originator of the corresponding vote.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Field Number")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("int64")]),t._v(" "),v("td",[t._v("Height of corresponding block")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("round")]),t._v(" "),v("td",[t._v("int32")]),t._v(" "),v("td",[t._v("Round of voting to finalize the block.")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/spec/core/data_structures.html#signedmsgtype"}},[t._v("SignedMessageType")])],1),t._v(" "),v("td"),t._v(" "),v("td",[t._v("3")])]),t._v(" "),v("tr",[v("td",[t._v("index")]),t._v(" "),v("td",[t._v("int32")]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("4")])])])]),t._v(" "),v("h3",{attrs:{id:"votesetmaj23"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#votesetmaj23"}},[t._v("#")]),t._v(" VoteSetMaj23")]),t._v(" "),v("p",[t._v("VoteSetMaj23 is sent to indicate that a process has seen +2/3 votes for some BlockID.\nIt contains height, round, vote type and the BlockID.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Field Number")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("int64")]),t._v(" "),v("td",[t._v("Height of corresponding block")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("round")]),t._v(" "),v("td",[t._v("int32")]),t._v(" "),v("td",[t._v("Round of voting to finalize the block.")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/spec/core/data_structures.html#signedmsgtype"}},[t._v("SignedMessageType")])],1),t._v(" "),v("td"),t._v(" "),v("td",[t._v("3")])])])]),t._v(" "),v("h3",{attrs:{id:"votesetbits"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#votesetbits"}},[t._v("#")]),t._v(" VoteSetBits")]),t._v(" "),v("p",[t._v("VoteSetBits is sent to communicate the bit-array of votes a process has seen for a given\nBlockID. It contains height, round, vote type, BlockID and a bit array of\nthe votes a process has.")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Field Number")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("height")]),t._v(" "),v("td",[t._v("int64")]),t._v(" "),v("td",[t._v("Height of corresponding block")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("round")]),t._v(" "),v("td",[t._v("int32")]),t._v(" "),v("td",[t._v("Round of voting to finalize the block.")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/spec/core/data_structures.html#signedmsgtype"}},[t._v("SignedMessageType")])],1),t._v(" "),v("td"),t._v(" "),v("td",[t._v("3")])]),t._v(" "),v("tr",[v("td",[t._v("block_id")]),t._v(" "),v("td",[v("RouterLink",{attrs:{to:"/spec/core/data_structures.html#blockid"}},[t._v("BlockID")])],1),t._v(" "),v("td"),t._v(" "),v("td",[t._v("4")])]),t._v(" "),v("tr",[v("td",[t._v("votes")]),t._v(" "),v("td",[t._v("BitArray")]),t._v(" "),v("td",[t._v("Round of voting to finalize the block.")]),t._v(" "),v("td",[t._v("5")])])])]),t._v(" "),v("h3",{attrs:{id:"message"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[t._v("#")]),t._v(" Message")]),t._v(" "),v("p",[t._v("Message is a "),v("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto#oneof",target:"_blank",rel:"noopener noreferrer"}},[v("code",[t._v("oneof")]),t._v(" protobuf type"),v("OutboundLink")],1),t._v(".")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Name")]),t._v(" "),v("th",[t._v("Type")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Field Number")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("new_round_step")]),t._v(" "),v("td",[v("a",{attrs:{href:"#newroundstep"}},[t._v("NewRoundStep")])]),t._v(" "),v("td",[t._v("Height of corresponding block")]),t._v(" "),v("td",[t._v("1")])]),t._v(" "),v("tr",[v("td",[t._v("new_valid_block")]),t._v(" "),v("td",[v("a",{attrs:{href:"#newvalidblock"}},[t._v("NewValidBlock")])]),t._v(" "),v("td",[t._v("Round of voting to finalize the block.")]),t._v(" "),v("td",[t._v("2")])]),t._v(" "),v("tr",[v("td",[t._v("proposal")]),t._v(" "),v("td",[v("a",{attrs:{href:"#proposal"}},[t._v("Proposal")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("3")])]),t._v(" "),v("tr",[v("td",[t._v("proposal_pol")]),t._v(" "),v("td",[v("a",{attrs:{href:"#proposalpol"}},[t._v("ProposalPOL")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("4")])]),t._v(" "),v("tr",[v("td",[t._v("block_part")]),t._v(" "),v("td",[v("a",{attrs:{href:"#blockpart"}},[t._v("BlockPart")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("5")])]),t._v(" "),v("tr",[v("td",[t._v("vote")]),t._v(" "),v("td",[v("a",{attrs:{href:"#vote"}},[t._v("Vote")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("6")])]),t._v(" "),v("tr",[v("td",[t._v("has_vote")]),t._v(" "),v("td",[v("a",{attrs:{href:"#hasvote"}},[t._v("HasVote")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("7")])]),t._v(" "),v("tr",[v("td",[t._v("vote_set_maj23")]),t._v(" "),v("td",[v("a",{attrs:{href:"#votesetmaj23"}},[t._v("VoteSetMaj23")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("8")])]),t._v(" "),v("tr",[v("td",[t._v("vote_set_bits")]),t._v(" "),v("td",[v("a",{attrs:{href:"#votesetbits"}},[t._v("VoteSetBits")])]),t._v(" "),v("td"),t._v(" "),v("td",[t._v("9")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);