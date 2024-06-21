(function() {var type_impls = {
"polars_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-UInt32Type\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/datatypes/mod.rs.html#178\">source</a><a href=\"#impl-Clone-for-UInt32Type\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"polars_core/datatypes/struct.UInt32Type.html\" title=\"struct polars_core::datatypes::UInt32Type\">UInt32Type</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polars_core/datatypes/mod.rs.html#178\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"polars_core/datatypes/struct.UInt32Type.html\" title=\"struct polars_core::datatypes::UInt32Type\">UInt32Type</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","polars_core::datatypes::aliases::IdxType"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PolarsDataType-for-UInt32Type\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/datatypes/mod.rs.html#178\">source</a><a href=\"#impl-PolarsDataType-for-UInt32Type\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsDataType.html\" title=\"trait polars_core::datatypes::PolarsDataType\">PolarsDataType</a> for <a class=\"struct\" href=\"polars_core/datatypes/struct.UInt32Type.html\" title=\"struct polars_core::datatypes::UInt32Type\">UInt32Type</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Physical\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Physical\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polars_core/datatypes/trait.PolarsDataType.html#associatedtype.Physical\" class=\"associatedtype\">Physical</a>&lt;'a&gt; = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a></h4></section><section id=\"associatedtype.OwnedPhysical\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.OwnedPhysical\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polars_core/datatypes/trait.PolarsDataType.html#associatedtype.OwnedPhysical\" class=\"associatedtype\">OwnedPhysical</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a></h4></section><section id=\"associatedtype.ZeroablePhysical\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ZeroablePhysical\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polars_core/datatypes/trait.PolarsDataType.html#associatedtype.ZeroablePhysical\" class=\"associatedtype\">ZeroablePhysical</a>&lt;'a&gt; = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a></h4></section><section id=\"associatedtype.Array\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Array\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polars_core/datatypes/trait.PolarsDataType.html#associatedtype.Array\" class=\"associatedtype\">Array</a> = PrimitiveArray&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>&gt;</h4></section><section id=\"associatedtype.IsNested\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.IsNested\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polars_core/datatypes/trait.PolarsDataType.html#associatedtype.IsNested\" class=\"associatedtype\">IsNested</a> = <a class=\"struct\" href=\"polars_core/datatypes/struct.FalseT.html\" title=\"struct polars_core::datatypes::FalseT\">FalseT</a></h4></section><section id=\"associatedtype.HasViews\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.HasViews\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polars_core/datatypes/trait.PolarsDataType.html#associatedtype.HasViews\" class=\"associatedtype\">HasViews</a> = <a class=\"struct\" href=\"polars_core/datatypes/struct.FalseT.html\" title=\"struct polars_core::datatypes::FalseT\">FalseT</a></h4></section><section id=\"method.get_dtype\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/polars_core/datatypes/mod.rs.html#178\">source</a><a href=\"#method.get_dtype\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"polars_core/datatypes/trait.PolarsDataType.html#tymethod.get_dtype\" class=\"fn\">get_dtype</a>() -&gt; <a class=\"enum\" href=\"polars_core/datatypes/enum.DataType.html\" title=\"enum polars_core::datatypes::DataType\">DataType</a></h4></section></div></details>","PolarsDataType","polars_core::datatypes::aliases::IdxType"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PolarsNumericType-for-UInt32Type\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/datatypes/mod.rs.html#178\">source</a><a href=\"#impl-PolarsNumericType-for-UInt32Type\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsNumericType.html\" title=\"trait polars_core::datatypes::PolarsNumericType\">PolarsNumericType</a> for <a class=\"struct\" href=\"polars_core/datatypes/struct.UInt32Type.html\" title=\"struct polars_core::datatypes::UInt32Type\">UInt32Type</a></h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.Native\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Native\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"polars_core/datatypes/trait.PolarsNumericType.html#associatedtype.Native\" class=\"associatedtype\">Native</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a></h4></section></div></details>","PolarsNumericType","polars_core::datatypes::aliases::IdxType"],["<section id=\"impl-Copy-for-UInt32Type\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/datatypes/mod.rs.html#178\">source</a><a href=\"#impl-Copy-for-UInt32Type\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"polars_core/datatypes/struct.UInt32Type.html\" title=\"struct polars_core::datatypes::UInt32Type\">UInt32Type</a></h3></section>","Copy","polars_core::datatypes::aliases::IdxType"],["<section id=\"impl-PolarsIntegerType-for-UInt32Type\" class=\"impl\"><a class=\"src rightside\" href=\"src/polars_core/datatypes/mod.rs.html#178\">source</a><a href=\"#impl-PolarsIntegerType-for-UInt32Type\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"polars_core/datatypes/trait.PolarsIntegerType.html\" title=\"trait polars_core::datatypes::PolarsIntegerType\">PolarsIntegerType</a> for <a class=\"struct\" href=\"polars_core/datatypes/struct.UInt32Type.html\" title=\"struct polars_core::datatypes::UInt32Type\">UInt32Type</a></h3></section>","PolarsIntegerType","polars_core::datatypes::aliases::IdxType"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()