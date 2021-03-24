(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{709:function(e,t,a){"use strict";a.r(t);var s=a(1),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-053-state-sync-prototype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-053-state-sync-prototype"}},[e._v("#")]),e._v(" ADR 053: State Sync Prototype")]),e._v(" "),a("p",[e._v("State sync is now "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/pull/4705",target:"_blank",rel:"noopener noreferrer"}},[e._v("merged"),a("OutboundLink")],1),e._v(". Up-to-date ABCI documentation is "),a("a",{attrs:{href:"https://github.com/tendermint/spec/pull/90",target:"_blank",rel:"noopener noreferrer"}},[e._v("available"),a("OutboundLink")],1),e._v(", refer to it rather than this ADR for details.")]),e._v(" "),a("p",[e._v("This ADR outlines the plan for an initial state sync prototype, and is subject to change as we gain feedback and experience. It builds on discussions and findings in "),a("RouterLink",{attrs:{to:"/architecture/adr-042-state-sync.html"}},[e._v("ADR-042")]),e._v(", see that for background information.")],1),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("2020-01-28: Initial draft (Erik Grinaker)")])]),e._v(" "),a("li",[a("p",[e._v("2020-02-18: Updates after initial prototype (Erik Grinaker)")]),e._v(" "),a("ul",[a("li",[e._v("ABCI: added missing "),a("code",[e._v("reason")]),e._v(" fields.")]),e._v(" "),a("li",[e._v("ABCI: used 32-bit 1-based chunk indexes (was 64-bit 0-based).")]),e._v(" "),a("li",[e._v("ABCI: moved "),a("code",[e._v("RequestApplySnapshotChunk.chain_hash")]),e._v(" to "),a("code",[e._v("RequestOfferSnapshot.app_hash")]),e._v(".")]),e._v(" "),a("li",[e._v("Gaia: snapshots must include node versions as well, both for inner and leaf nodes.")]),e._v(" "),a("li",[e._v("Added experimental prototype info.")]),e._v(" "),a("li",[e._v("Added open questions and implementation plan.")])])]),e._v(" "),a("li",[a("p",[e._v("2020-03-29: Strengthened and simplified ABCI interface (Erik Grinaker)")]),e._v(" "),a("ul",[a("li",[e._v("ABCI: replaced "),a("code",[e._v("chunks")]),e._v(" with "),a("code",[e._v("chunk_hashes")]),e._v(" in "),a("code",[e._v("Snapshot")]),e._v(".")]),e._v(" "),a("li",[e._v("ABCI: removed "),a("code",[e._v("SnapshotChunk")]),e._v(" message.")]),e._v(" "),a("li",[e._v("ABCI: renamed "),a("code",[e._v("GetSnapshotChunk")]),e._v(" to "),a("code",[e._v("LoadSnapshotChunk")]),e._v(".")]),e._v(" "),a("li",[e._v("ABCI: chunks are now exchanged simply as "),a("code",[e._v("bytes")]),e._v(".")]),e._v(" "),a("li",[e._v("ABCI: chunks are now 0-indexed, for parity with "),a("code",[e._v("chunk_hashes")]),e._v(" array.")]),e._v(" "),a("li",[e._v("Reduced maximum chunk size to 16 MB, and increased snapshot message size to 4 MB.")])])]),e._v(" "),a("li",[a("p",[e._v("2020-04-29: Update with final released ABCI interface (Erik Grinaker)")])])]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("State sync will allow a new node to receive a snapshot of the application state without downloading blocks or going through consensus. This bootstraps the node significantly faster than the current fast sync system, which replays all historical blocks.")]),e._v(" "),a("p",[e._v("Background discussions and justifications are detailed in "),a("RouterLink",{attrs:{to:"/architecture/adr-042-state-sync.html"}},[e._v("ADR-042")]),e._v(". Its recommendations can be summarized as:")],1),e._v(" "),a("ul",[a("li",[a("p",[e._v("The application periodically takes full state snapshots (i.e. eager snapshots).")])]),e._v(" "),a("li",[a("p",[e._v("The application splits snapshots into smaller chunks that can be individually verified against a chain app hash.")])]),e._v(" "),a("li",[a("p",[e._v("Tendermint uses the light client to obtain a trusted chain app hash for verification.")])]),e._v(" "),a("li",[a("p",[e._v("Tendermint discovers and downloads snapshot chunks in parallel from multiple peers, and passes them to the application via ABCI to be applied and verified against the chain app hash.")])]),e._v(" "),a("li",[a("p",[e._v("Historical blocks are not backfilled, so state synced nodes will have a truncated block history.")])])]),e._v(" "),a("h2",{attrs:{id:"tendermint-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-proposal"}},[e._v("#")]),e._v(" Tendermint Proposal")]),e._v(" "),a("p",[e._v("This describes the snapshot/restore process seen from Tendermint. The interface is kept as small and general as possible to give applications maximum flexibility.")]),e._v(" "),a("h3",{attrs:{id:"snapshot-data-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapshot-data-structure"}},[e._v("#")]),e._v(" Snapshot Data Structure")]),e._v(" "),a("p",[e._v("A node can have multiple snapshots taken at various heights. Snapshots can be taken in different application-specified formats (e.g. MessagePack as format "),a("code",[e._v("1")]),e._v(" and Protobuf as format "),a("code",[e._v("2")]),e._v(", or similarly for schema versioning). Each snapshot consists of multiple chunks containing the actual state data, for parallel downloads and reduced memory usage.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"bWVzc2FnZSBTbmFwc2hvdCB7CiAgdWludDY0IGhlaWdodCAgID0gMTsgIC8vIFRoZSBoZWlnaHQgYXQgd2hpY2ggdGhlIHNuYXBzaG90IHdhcyB0YWtlbgogIHVpbnQzMiBmb3JtYXQgICA9IDI7ICAvLyBUaGUgYXBwbGljYXRpb24tc3BlY2lmaWMgc25hcHNob3QgZm9ybWF0CiAgdWludDMyIGNodW5rcyAgID0gMzsgIC8vIE51bWJlciBvZiBjaHVua3MgaW4gdGhlIHNuYXBzaG90CiAgYnl0ZXMgIGhhc2ggICAgID0gNDsgIC8vIEFyYml0cmFyeSBzbmFwc2hvdCBoYXNoIC0gc2hvdWxkIGJlIGVxdWFsIG9ubHkgZm9yIGlkZW50aWNhbCBzbmFwc2hvdHMKICBieXRlcyAgbWV0YWRhdGEgPSA1OyAgLy8gQXJiaXRyYXJ5IGFwcGxpY2F0aW9uIG1ldGFkYXRhCn0K"}}),e._v(" "),a("p",[e._v("Chunks are exchanged simply as "),a("code",[e._v("bytes")]),e._v(", and cannot be larger than 16 MB. "),a("code",[e._v("Snapshot")]),e._v(" messages should be less than 4 MB.")]),e._v(" "),a("h3",{attrs:{id:"abci-interface"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abci-interface"}},[e._v("#")]),e._v(" ABCI Interface")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8gTGlzdHMgYXZhaWxhYmxlIHNuYXBzaG90cwptZXNzYWdlIFJlcXVlc3RMaXN0U25hcHNob3RzIHt9CgptZXNzYWdlIFJlc3BvbnNlTGlzdFNuYXBzaG90cyB7CiAgcmVwZWF0ZWQgU25hcHNob3Qgc25hcHNob3RzID0gMTsKfQoKLy8gT2ZmZXJzIGEgc25hcHNob3QgdG8gdGhlIGFwcGxpY2F0aW9uCm1lc3NhZ2UgUmVxdWVzdE9mZmVyU25hcHNob3QgewogIFNuYXBzaG90IHNuYXBzaG90ID0gMTsgIC8vIHNuYXBzaG90IG9mZmVyZWQgYnkgcGVlcnMKICBieXRlcyAgICBhcHBfaGFzaCA9IDI7ICAvLyBsaWdodCBjbGllbnQtdmVyaWZpZWQgYXBwIGhhc2ggZm9yIHNuYXBzaG90IGhlaWdodAogfQoKbWVzc2FnZSBSZXNwb25zZU9mZmVyU25hcHNob3QgewogIFJlc3VsdCByZXN1bHQgPSAxOwoKICBlbnVtIFJlc3VsdCB7CiAgICBhY2NlcHQgICAgICAgID0gMDsgIC8vIFNuYXBzaG90IGFjY2VwdGVkLCBhcHBseSBjaHVua3MKICAgIGFib3J0ICAgICAgICAgPSAxOyAgLy8gQWJvcnQgYWxsIHNuYXBzaG90IHJlc3RvcmF0aW9uCiAgICByZWplY3QgICAgICAgID0gMjsgIC8vIFJlamVjdCB0aGlzIHNwZWNpZmljIHNuYXBzaG90LCBhbmQgdHJ5IGEgZGlmZmVyZW50IG9uZQogICAgcmVqZWN0X2Zvcm1hdCA9IDM7ICAvLyBSZWplY3QgYWxsIHNuYXBzaG90cyBvZiB0aGlzIGZvcm1hdCwgYW5kIHRyeSBhIGRpZmZlcmVudCBvbmUKICAgIHJlamVjdF9zZW5kZXIgPSA0OyAgLy8gUmVqZWN0IGFsbCBzbmFwc2hvdHMgZnJvbSB0aGUgc2VuZGVyKHMpLCBhbmQgdHJ5IGEgZGlmZmVyZW50IG9uZQogIH0KfQoKLy8gTG9hZHMgYSBzbmFwc2hvdCBjaHVuawptZXNzYWdlIFJlcXVlc3RMb2FkU25hcHNob3RDaHVuayB7CiAgdWludDY0IGhlaWdodCA9IDE7CiAgdWludDMyIGZvcm1hdCA9IDI7CiAgdWludDMyIGNodW5rICA9IDM7IC8vIFplcm8taW5kZXhlZAp9CgptZXNzYWdlIFJlc3BvbnNlTG9hZFNuYXBzaG90Q2h1bmsgewogIGJ5dGVzIGNodW5rID0gMTsKfQoKLy8gQXBwbGllcyBhIHNuYXBzaG90IGNodW5rCm1lc3NhZ2UgUmVxdWVzdEFwcGx5U25hcHNob3RDaHVuayB7CiAgdWludDMyIGluZGV4ICA9IDE7CiAgYnl0ZXMgIGNodW5rICA9IDI7CiAgc3RyaW5nIHNlbmRlciA9IDM7CiB9CgptZXNzYWdlIFJlc3BvbnNlQXBwbHlTbmFwc2hvdENodW5rIHsKICBSZXN1bHQgICAgICAgICAgcmVzdWx0ICAgICAgICAgPSAxOwogIHJlcGVhdGVkIHVpbnQzMiByZWZldGNoX2NodW5rcyA9IDI7ICAvLyBDaHVua3MgdG8gcmVmZXRjaCBhbmQgcmVhcHBseSAocmVnYXJkbGVzcyBvZiByZXN1bHQpCiAgcmVwZWF0ZWQgc3RyaW5nIHJlamVjdF9zZW5kZXJzID0gMzsgIC8vIENodW5rIHNlbmRlcnMgdG8gcmVqZWN0IGFuZCBiYW4gKHJlZ2FyZGxlc3Mgb2YgcmVzdWx0KQoKICBlbnVtIFJlc3VsdCB7CiAgICBhY2NlcHQgICAgICAgICAgPSAwOyAgLy8gQ2h1bmsgc3VjY2Vzc2Z1bGx5IGFjY2VwdGVkCiAgICBhYm9ydCAgICAgICAgICAgPSAxOyAgLy8gQWJvcnQgYWxsIHNuYXBzaG90IHJlc3RvcmF0aW9uCiAgICByZXRyeSAgICAgICAgICAgPSAyOyAgLy8gUmV0cnkgY2h1bmssIGNvbWJpbmUgd2l0aCByZWZldGNoIGFuZCByZWplY3QgYXMgYXBwcm9wcmlhdGUKICAgIHJldHJ5X3NuYXBzaG90ICA9IDM7ICAvLyBSZXRyeSBzbmFwc2hvdCwgY29tYmluZSB3aXRoIHJlZmV0Y2ggYW5kIHJlamVjdCBhcyBhcHByb3ByaWF0ZQogICAgcmVqZWN0X3NuYXBzaG90ID0gNDsgIC8vIFJlamVjdCB0aGlzIHNuYXBzaG90LCB0cnkgYSBkaWZmZXJlbnQgb25lIGJ1dCBrZWVwIHNlbmRlciByZWplY3Rpb25zCiAgfQp9Cg=="}}),e._v(" "),a("h3",{attrs:{id:"taking-snapshots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#taking-snapshots"}},[e._v("#")]),e._v(" Taking Snapshots")]),e._v(" "),a("p",[e._v("Tendermint is not aware of the snapshotting process at all, it is entirely an application concern. The following guarantees must be provided:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Periodic:")]),e._v(" snapshots must be taken periodically, not on-demand, for faster restores, lower load, and less DoS risk.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Deterministic:")]),e._v(" snapshots must be deterministic, and identical across all nodes - typically by taking a snapshot at given height intervals.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Consistent:")]),e._v(" snapshots must be consistent, i.e. not affected by concurrent writes - typically by using a data store that supports versioning and/or snapshot isolation.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Asynchronous:")]),e._v(" snapshots must be asynchronous, i.e. not halt block processing and state transitions.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Chunked:")]),e._v(" snapshots must be split into chunks of reasonable size (on the order of megabytes), and each chunk must be verifiable against the chain app hash.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Garbage collected:")]),e._v(" snapshots must be garbage collected periodically.")])])]),e._v(" "),a("h3",{attrs:{id:"restoring-snapshots"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restoring-snapshots"}},[e._v("#")]),e._v(" Restoring Snapshots")]),e._v(" "),a("p",[e._v("Nodes should have options for enabling state sync and/or fast sync, and be provided a trusted header hash for the light client.")]),e._v(" "),a("p",[e._v("When starting an empty node with state sync and fast sync enabled, snapshots are restored as follows:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("The node checks that it is empty, i.e. that it has no state nor blocks.")])]),e._v(" "),a("li",[a("p",[e._v("The node contacts the given seeds to discover peers.")])]),e._v(" "),a("li",[a("p",[e._v("The node contacts a set of full nodes, and verifies the trusted block header using the given hash via the light client.")])]),e._v(" "),a("li",[a("p",[e._v("The node requests available snapshots via P2P from peers, via "),a("code",[e._v("RequestListSnapshots")]),e._v(". Peers will return the 10 most recent snapshots, one message per snapshot.")])]),e._v(" "),a("li",[a("p",[e._v("The node aggregates snapshots from multiple peers, ordered by height and format (in reverse). If there are mismatches between different snapshots, the one hosted by the largest amount of peers is chosen. The node iterates over all snapshots in reverse order by height and format until it finds one that satisfies all of the following conditions:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("The snapshot height's block is considered trustworthy by the light client (i.e. snapshot height is greater than trusted header and within unbonding period of the latest trustworthy block).")])]),e._v(" "),a("li",[a("p",[e._v("The snapshot's height or format hasn't been explicitly rejected by an earlier "),a("code",[e._v("RequestOfferSnapshot")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("The application accepts the "),a("code",[e._v("RequestOfferSnapshot")]),e._v(" call.")])])])]),e._v(" "),a("li",[a("p",[e._v("The node downloads chunks in parallel from multiple peers, via "),a("code",[e._v("RequestLoadSnapshotChunk")]),e._v(". Chunk messages cannot exceed 16 MB.")])]),e._v(" "),a("li",[a("p",[e._v("The node passes chunks sequentially to the app via "),a("code",[e._v("RequestApplySnapshotChunk")]),e._v(".")])]),e._v(" "),a("li",[a("p",[e._v("Once all chunks have been applied, the node compares the app hash to the chain app hash, and if they do not match it either errors or discards the state and starts over.")])]),e._v(" "),a("li",[a("p",[e._v("The node switches to fast sync to catch up blocks that were committed while restoring the snapshot.")])]),e._v(" "),a("li",[a("p",[e._v("The node switches to normal consensus mode.")])])]),e._v(" "),a("h2",{attrs:{id:"gaia-proposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gaia-proposal"}},[e._v("#")]),e._v(" Gaia Proposal")]),e._v(" "),a("p",[e._v("This describes the snapshot process seen from Gaia, using format version "),a("code",[e._v("1")]),e._v(". The serialization format is unspecified, but likely to be compressed Amino or Protobuf.")]),e._v(" "),a("h3",{attrs:{id:"snapshot-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapshot-metadata"}},[e._v("#")]),e._v(" Snapshot Metadata")]),e._v(" "),a("p",[e._v("In the initial version there is no snapshot metadata, so it is set to an empty byte buffer.")]),e._v(" "),a("p",[e._v("Once all chunks have been successfully built, snapshot metadata should be stored in a database and served via "),a("code",[e._v("RequestListSnapshots")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"snapshot-chunk-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapshot-chunk-format"}},[e._v("#")]),e._v(" Snapshot Chunk Format")]),e._v(" "),a("p",[e._v("The Gaia data structure consists of a set of named IAVL trees. A root hash is constructed by taking the root hashes of each of the IAVL trees, then constructing a Merkle tree of the sorted name/hash map.")]),e._v(" "),a("p",[e._v("IAVL trees are versioned, but a snapshot only contains the version relevant for the snapshot height. All historical versions are ignored.")]),e._v(" "),a("p",[e._v("IAVL trees are insertion-order dependent, so key/value pairs must be set in an appropriate insertion order to produce the same tree branching structure. This insertion order can be found by doing a breadth-first scan of all nodes (including inner nodes) and collecting unique keys in order. However, the node hash also depends on the node's version, so snapshots must contain the inner nodes' version numbers as well.")]),e._v(" "),a("p",[e._v("For the initial prototype, each chunk consists of a complete dump of all node data for all nodes in an entire IAVL tree. Thus the number of chunks equals the number of persistent stores in Gaia. No incremental verification of chunks is done, only a final app hash comparison at the end of the snapshot restoration.")]),e._v(" "),a("p",[e._v("For a production version, it should be sufficient to store key/value/version for all nodes (leaf and inner) in insertion order, chunked in some appropriate way. If per-chunk verification is required, the chunk must also contain enough information to reconstruct the Merkle proofs all the way up to the root of the multistore, e.g. by storing a complete subtree's key/value/version data plus Merkle hashes of all other branches up to the multistore root. The exact approach will depend on tradeoffs between size, time, and verification. IAVL RangeProofs are not recommended, since these include redundant data such as proofs for intermediate and leaf nodes that can be derived from the above data.")]),e._v(" "),a("p",[e._v("Chunks should be built greedily by collecting node data up to some size limit (e.g. 10 MB) and serializing it. Chunk data is stored in the file system as "),a("code",[e._v("snapshots/<height>/<format>/<chunk>")]),e._v(", and a SHA-256 checksum is stored along with the snapshot metadata.")]),e._v(" "),a("h3",{attrs:{id:"snapshot-scheduling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#snapshot-scheduling"}},[e._v("#")]),e._v(" Snapshot Scheduling")]),e._v(" "),a("p",[e._v("Snapshots should be taken at some configurable height interval, e.g. every 1000 blocks. All nodes should preferably have the same snapshot schedule, such that all nodes can serve chunks for a given snapshot.")]),e._v(" "),a("p",[e._v("Taking consistent snapshots of IAVL trees is greatly simplified by them being versioned: simply snapshot the version that corresponds to the snapshot height, while concurrent writes create new versions. IAVL pruning must not prune a version that is being snapshotted.")]),e._v(" "),a("p",[e._v("Snapshots must also be garbage collected after some configurable time, e.g. by keeping the latest "),a("code",[e._v("n")]),e._v(" snapshots.")]),e._v(" "),a("h2",{attrs:{id:"resolved-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resolved-questions"}},[e._v("#")]),e._v(" Resolved Questions")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Is it OK for state-synced nodes to not have historical blocks nor historical IAVL versions?")]),e._v(" "),a("blockquote",[a("p",[e._v("Yes, this is as intended. Maybe backfill blocks later.")])])]),e._v(" "),a("li",[a("p",[e._v("Do we need incremental chunk verification for first version?")]),e._v(" "),a("blockquote",[a("p",[e._v("No, we'll start simple. Can add chunk verification via a new snapshot format without any breaking changes in Tendermint. For adversarial conditions, maybe consider support for whitelisting peers to download chunks from.")])])]),e._v(" "),a("li",[a("p",[e._v("Should the snapshot ABCI interface be a separate optional ABCI service, or mandatory?")]),e._v(" "),a("blockquote",[a("p",[e._v("Mandatory, to keep things simple for now. It will therefore be a breaking change and push the release. For apps using the Cosmos SDK, we can provide a default implementation that does not serve snapshots and errors when trying to apply them.")])])]),e._v(" "),a("li",[a("p",[e._v("How can we make sure "),a("code",[e._v("ListSnapshots")]),e._v(" data is valid? An adversary can provide fake/invalid snapshots to DoS peers.")]),e._v(" "),a("blockquote",[a("p",[e._v("For now, just pick snapshots that are available on a large number of peers. Maybe support whitelisting. We may consider e.g. placing snapshot manifests on the blockchain later.")])])]),e._v(" "),a("li",[a("p",[e._v("Should we punish nodes that provide invalid snapshots? How?")]),e._v(" "),a("blockquote",[a("p",[e._v("No, these are full nodes not validators, so we can't punish them. Just disconnect from them and ignore them.")])])]),e._v(" "),a("li",[a("p",[e._v('Should we call these snapshots? The SDK already uses the term "snapshot" for '),a("code",[e._v("PruningOptions.SnapshotEvery")]),e._v(", and state sync will introduce additional SDK options for snapshot scheduling and pruning that are not related to IAVL snapshotting or pruning.")]),e._v(" "),a("blockquote",[a("p",[e._v("Yes. Hopefully these concepts are distinct enough that we can refer to state sync snapshots and IAVL snapshots without too much confusion.")])])]),e._v(" "),a("li",[a("p",[e._v("Should we store snapshot and chunk metadata in a database? Can we use the database for chunks?")]),e._v(" "),a("blockquote",[a("p",[e._v("As a first approach, store metadata in a database and chunks in the filesystem.")])])]),e._v(" "),a("li",[a("p",[e._v("Should a snapshot at height H be taken before or after the block at H is processed? E.g. RPC "),a("code",[e._v("/commit")]),e._v(" returns app_hash after "),a("em",[e._v("previous")]),e._v(" height, i.e. "),a("em",[e._v("before")]),e._v("  current height.")]),e._v(" "),a("blockquote",[a("p",[e._v("After commit.")])])]),e._v(" "),a("li",[a("p",[e._v("Do we need to support all versions of blockchain reactor (i.e. fast sync)?")]),e._v(" "),a("blockquote",[a("p",[e._v("We should remove the v1 reactor completely once v2 has stabilized.")])])]),e._v(" "),a("li",[a("p",[e._v("Should "),a("code",[e._v("ListSnapshots")]),e._v(" be a streaming API instead of a request/response API?")]),e._v(" "),a("blockquote",[a("p",[e._v("No, just use a max message size.")])])])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Accepted")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/architecture/adr-042-state-sync.html"}},[e._v("ADR-042")]),e._v(" and its references")],1)])],1)}),[],!1,null,null,null);t.default=o.exports}}]);