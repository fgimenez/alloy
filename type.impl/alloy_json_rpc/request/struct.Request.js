(function() {var type_impls = {
"alloy_json_rpc":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Request%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#51\">source</a><a href=\"#impl-Clone-for-Request%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"alloy_json_rpc/request/struct.Request.html\" title=\"struct alloy_json_rpc::request::Request\">Request</a>&lt;Params&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#51\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"alloy_json_rpc/request/struct.Request.html\" title=\"struct alloy_json_rpc::request::Request\">Request</a>&lt;Params&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","alloy_json_rpc::request::PartiallySerializedRequest"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Request%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#51\">source</a><a href=\"#impl-Debug-for-Request%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"alloy_json_rpc/request/struct.Request.html\" title=\"struct alloy_json_rpc::request::Request\">Request</a>&lt;Params&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#51\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","alloy_json_rpc::request::PartiallySerializedRequest"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Request%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#123-147\">source</a><a href=\"#impl-Request%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, Params&gt; <a class=\"struct\" href=\"alloy_json_rpc/request/struct.Request.html\" title=\"struct alloy_json_rpc::request::Request\">Request</a>&lt;Params&gt;<div class=\"where\">where\n    Params: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"https://docs.rs/serde_json/1.0.116/serde_json/raw/struct.RawValue.html\" title=\"struct serde_json::raw::RawValue\">RawValue</a>&gt; + 'a,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_params_as\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#135-137\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/request/struct.Request.html#tymethod.try_params_as\" class=\"fn\">try_params_as</a>&lt;T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.200/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>&gt;(&amp;self) -&gt; <a class=\"type\" href=\"https://docs.rs/serde_json/1.0.116/serde_json/error/type.Result.html\" title=\"type serde_json::error::Result\">Result</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Attempt to deserialize the params.</p>\n<p>To borrow from the params via the deserializer, use\n<a href=\"alloy_json_rpc/request/struct.Request.html#method.try_borrow_params_as\" title=\"method alloy_json_rpc::request::Request::try_borrow_params_as\"><code>Request::try_borrow_params_as</code></a>.</p>\n<h5 id=\"returns\"><a class=\"doc-anchor\" href=\"#returns\">§</a>Returns</h5>\n<ul>\n<li><code>Ok(T)</code> if the params can be deserialized as <code>T</code></li>\n<li><code>Err(e)</code> if the params cannot be deserialized as <code>T</code></li>\n</ul>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_borrow_params_as\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#144-146\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/request/struct.Request.html#tymethod.try_borrow_params_as\" class=\"fn\">try_borrow_params_as</a>&lt;T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.200/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'a&gt;&gt;(&amp;'a self) -&gt; <a class=\"type\" href=\"https://docs.rs/serde_json/1.0.116/serde_json/error/type.Result.html\" title=\"type serde_json::error::Result\">Result</a>&lt;T&gt;</h4></section></summary><div class=\"docblock\"><p>Attempt to deserialize the params, borrowing from the params</p>\n<h5 id=\"returns-1\"><a class=\"doc-anchor\" href=\"#returns-1\">§</a>Returns</h5>\n<ul>\n<li><code>Ok(T)</code> if the params can be deserialized as <code>T</code></li>\n<li><code>Err(e)</code> if the params cannot be deserialized as <code>T</code></li>\n</ul>\n</div></details></div></details>",0,"alloy_json_rpc::request::PartiallySerializedRequest"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Request%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#59-81\">source</a><a href=\"#impl-Request%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params&gt; <a class=\"struct\" href=\"alloy_json_rpc/request/struct.Request.html\" title=\"struct alloy_json_rpc::request::Request\">Request</a>&lt;Params&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#61-63\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/request/struct.Request.html#tymethod.new\" class=\"fn\">new</a>(method: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'static, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>&gt;&gt;, id: <a class=\"enum\" href=\"alloy_json_rpc/common/enum.Id.html\" title=\"enum alloy_json_rpc::common::Id\">Id</a>, params: Params) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Create a new <code>Request</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_subscription\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#66-68\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/request/struct.Request.html#tymethod.is_subscription\" class=\"fn\">is_subscription</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class=\"docblock\"><p>Returns <code>true</code> if the request is a subscription.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_is_subscription\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#72-74\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/request/struct.Request.html#tymethod.set_is_subscription\" class=\"fn\">set_is_subscription</a>(&amp;mut self)</h4></section></summary><div class=\"docblock\"><p>Indicates that the request is a non-standard subscription (i.e. not\n“eth_subscribe”).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_subscription_status\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#78-80\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/request/struct.Request.html#tymethod.set_subscription_status\" class=\"fn\">set_subscription_status</a>(&amp;mut self, sub: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>)</h4></section></summary><div class=\"docblock\"><p>Setter for <code>is_subscription</code>. Indicates to RPC clients that the request\ntriggers a stream of notifications.</p>\n</div></details></div></details>",0,"alloy_json_rpc::request::PartiallySerializedRequest"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Request%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#93-111\">source</a><a href=\"#impl-Request%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params&gt; <a class=\"struct\" href=\"alloy_json_rpc/request/struct.Request.html\" title=\"struct alloy_json_rpc::request::Request\">Request</a>&lt;Params&gt;<div class=\"where\">where\n    Params: <a class=\"trait\" href=\"alloy_json_rpc/trait.RpcParam.html\" title=\"trait alloy_json_rpc::RpcParam\">RpcParam</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.box_params\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#102-104\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/request/struct.Request.html#tymethod.box_params\" class=\"fn\">box_params</a>(self) -&gt; <a class=\"type\" href=\"alloy_json_rpc/request/type.PartiallySerializedRequest.html\" title=\"type alloy_json_rpc::request::PartiallySerializedRequest\">PartiallySerializedRequest</a></h4></section></summary><div class=\"docblock\"><p>Serialize the request parameters as a boxed <a href=\"https://docs.rs/serde_json/1.0.116/serde_json/raw/struct.RawValue.html\" title=\"struct serde_json::raw::RawValue\"><code>RawValue</code></a>.</p>\n<h5 id=\"panics\"><a class=\"doc-anchor\" href=\"#panics\">§</a>Panics</h5>\n<p>If serialization of the params fails.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#107-110\">source</a><h4 class=\"code-header\">pub fn <a href=\"alloy_json_rpc/request/struct.Request.html#tymethod.serialize\" class=\"fn\">serialize</a>(self) -&gt; <a class=\"type\" href=\"https://docs.rs/serde_json/1.0.116/serde_json/error/type.Result.html\" title=\"type serde_json::error::Result\">Result</a>&lt;<a class=\"struct\" href=\"alloy_json_rpc/request/struct.SerializedRequest.html\" title=\"struct alloy_json_rpc::request::SerializedRequest\">SerializedRequest</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Serialize the request, including the request parameters.</p>\n</div></details></div></details>",0,"alloy_json_rpc::request::PartiallySerializedRequest"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Request%3CParams%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#151-173\">source</a><a href=\"#impl-Serialize-for-Request%3CParams%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;Params&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.200/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"alloy_json_rpc/request/struct.Request.html\" title=\"struct alloy_json_rpc::request::Request\">Request</a>&lt;Params&gt;<div class=\"where\">where\n    Params: <a class=\"trait\" href=\"alloy_json_rpc/trait.RpcParam.html\" title=\"trait alloy_json_rpc::RpcParam\">RpcParam</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/alloy_json_rpc/request.rs.html#155-172\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.200/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(&amp;self, serializer: S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.200/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.200/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.200/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.200/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","alloy_json_rpc::request::PartiallySerializedRequest"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()