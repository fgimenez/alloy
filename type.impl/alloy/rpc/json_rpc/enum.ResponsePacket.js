(function() {var type_impls = {
"alloy":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a href=\"#impl-Clone-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, ErrData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,\n    ErrData: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","alloy::rpc::json_rpc::BorrowedResponsePacket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a href=\"#impl-Debug-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, ErrData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    ErrData: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","alloy::rpc::json_rpc::BorrowedResponsePacket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, Payload, ErrData&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.200/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;<div class=\"where\">where\n    Payload: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.200/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,\n    ErrData: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.200/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.200/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(\n    deserializer: D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;, &lt;D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.200/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.200/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.200/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.200/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","alloy::rpc::json_rpc::BorrowedResponsePacket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CVec%3CResponse%3CPayload,+ErrData%3E%3E%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a href=\"#impl-From%3CVec%3CResponse%3CPayload,+ErrData%3E%3E%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, ErrData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.Response.html\" title=\"struct alloy::rpc::json_rpc::Response\">Response</a>&lt;Payload, ErrData&gt;&gt;&gt; for <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(\n    value: <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.Response.html\" title=\"struct alloy::rpc::json_rpc::Response\">Response</a>&lt;Payload, ErrData&gt;&gt;\n) -&gt; <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<Vec<Response<Payload, ErrData>>>","alloy::rpc::json_rpc::BorrowedResponsePacket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromIterator%3CResponse%3CPayload,+ErrData%3E%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a href=\"#impl-FromIterator%3CResponse%3CPayload,+ErrData%3E%3E-for-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, ErrData&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.Response.html\" title=\"struct alloy::rpc::json_rpc::Response\">Response</a>&lt;Payload, ErrData&gt;&gt; for <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_iter\" class=\"method trait-impl\"><a href=\"#method.from_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\" class=\"fn\">from_iter</a>&lt;T&gt;(iter: T) -&gt; <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.Response.html\" title=\"struct alloy::rpc::json_rpc::Response\">Response</a>&lt;Payload, ErrData&gt;&gt;,</div></h4></section></summary><div class='docblock'>Creates a value from an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\">Read more</a></div></details></div></details>","FromIterator<Response<Payload, ErrData>>","alloy::rpc::json_rpc::BorrowedResponsePacket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResponsePacket%3C%26RawValue,+%26RawValue%3E\" class=\"impl\"><a href=\"#impl-ResponsePacket%3C%26RawValue,+%26RawValue%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a>&lt;&amp;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.116/serde_json/raw/struct.RawValue.html\" title=\"struct serde_json::raw::RawValue\">RawValue</a>, &amp;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.116/serde_json/raw/struct.RawValue.html\" title=\"struct serde_json::raw::RawValue\">RawValue</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_owned\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html#tymethod.into_owned\" class=\"fn\">into_owned</a>(self) -&gt; <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a></h4></section></summary><div class=\"docblock\"><p>Convert this borrowed response packet into an owned packet by copying\nthe data from the deserializer (if necessary).</p>\n</div></details></div></details>",0,"alloy::rpc::json_rpc::BorrowedResponsePacket"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ResponsePacket%3CPayload,+ErrData%3E\" class=\"impl\"><a href=\"#impl-ResponsePacket%3CPayload,+ErrData%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Payload, ErrData&gt; <a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html\" title=\"enum alloy::rpc::json_rpc::ResponsePacket\">ResponsePacket</a>&lt;Payload, ErrData&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_success\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html#tymethod.is_success\" class=\"fn\">is_success</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the response payload is a success.</p>\n<p>For batch responses, this returns <code>true</code> if <strong>all</strong> responses are successful.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_error\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html#tymethod.is_error\" class=\"fn\">is_error</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the response payload is an error.</p>\n<p>For batch responses, this returns <code>true</code> there’s at least one error response.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_error\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html#tymethod.as_error\" class=\"fn\">as_error</a>(&amp;self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;&amp;<a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns the <a href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a> if the response is an error.</p>\n<p>For batch responses, this returns the first error response.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.iter_errors\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html#tymethod.iter_errors\" class=\"fn\">iter_errors</a>(&amp;self) -&gt; impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = &amp;<a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>&lt;ErrData&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Returns an iterator over the <a href=\"alloy/rpc/json_rpc/struct.ErrorPayload.html\" title=\"struct alloy::rpc::json_rpc::ErrorPayload\">ErrorPayload</a>s in the response.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.responses_by_ids\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"alloy/rpc/json_rpc/enum.ResponsePacket.html#tymethod.responses_by_ids\" class=\"fn\">responses_by_ids</a>(\n    &amp;self,\n    ids: &amp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/collections/hash/set/struct.HashSet.html\" title=\"struct std::collections::hash::set::HashSet\">HashSet</a>&lt;<a class=\"enum\" href=\"alloy/rpc/json_rpc/enum.Id.html\" title=\"enum alloy::rpc::json_rpc::Id\">Id</a>&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&amp;<a class=\"struct\" href=\"alloy/rpc/json_rpc/struct.Response.html\" title=\"struct alloy::rpc::json_rpc::Response\">Response</a>&lt;Payload, ErrData&gt;&gt;</h4></section></summary><div class=\"docblock\"><p>Find responses by a list of IDs.</p>\n<p>This is intended to be used in conjunction with\n<a href=\"alloy/rpc/json_rpc/enum.RequestPacket.html#method.subscription_request_ids\" title=\"method alloy::rpc::json_rpc::RequestPacket::subscription_request_ids\"><code>RequestPacket::subscription_request_ids</code></a> to identify subscription\nresponses.</p>\n<h5 id=\"note\"><a class=\"doc-anchor\" href=\"#note\">§</a>Note</h5>\n<ul>\n<li>Responses are not guaranteed to be in the same order.</li>\n<li>Responses are not guaranteed to be in the set.</li>\n<li>If the packet contains duplicate IDs, both will be found.</li>\n</ul>\n</div></details></div></details>",0,"alloy::rpc::json_rpc::BorrowedResponsePacket"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()