(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{227:function(e,t,n){"use strict";n.r(t),n.d(t,"Cassandra",function(){return xe}),n.d(t,"MSSQL",function(){return Oe}),n.d(t,"MariaSQL",function(){return ye}),n.d(t,"MySQL",function(){return _e}),n.d(t,"PLSQL",function(){return we}),n.d(t,"PostgreSQL",function(){return ge}),n.d(t,"SQLDialect",function(){return ce}),n.d(t,"SQLite",function(){return ke}),n.d(t,"StandardSQL",function(){return fe}),n.d(t,"keywordCompletion",function(){return ue}),n.d(t,"keywordCompletionSource",function(){return le}),n.d(t,"schemaCompletion",function(){return me}),n.d(t,"schemaCompletionSource",function(){return de}),n.d(t,"sql",function(){return pe});var r=n(2),a=n(4),i=n(5),o=n(3),s=n(27),c=n(29);function l(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(s)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=36,m=1,p=2,f=3,g=4,h=5,v=6,b=7,_=8,y=9,O=10,k=11,x=12,w=13,Q=14,S=15,C=16,q=17,P=18,T=19,U=20,z=21,j=22,X=23,B=24;function R(e){return e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57}function Z(e,t,n){for(var r=!1;;){if(e.next<0)return;if(e.next==t&&!r)return void e.advance();r=n&&!r&&92==e.next,e.advance()}}function L(e,t){for(;95==e.next||R(e.next);)null!=t&&(t+=String.fromCharCode(e.next)),e.advance();return t}function V(e,t){for(;48==e.next||49==e.next;)e.advance();t&&e.next==t&&e.advance()}function D(e,t){for(;;){if(46==e.next){if(t)break;t=!0}else if(e.next<48||e.next>57)break;e.advance()}if(69==e.next||101==e.next)for(e.advance(),43!=e.next&&45!=e.next||e.advance();e.next>=48&&e.next<=57;)e.advance()}function I(e){for(;!(e.next<0||10==e.next);)e.advance()}function $(e,t){for(var n=0;n<t.length;n++)if(t.charCodeAt(n)==e)return!0;return!1}var A=" \t\r\n";function E(e,t,n){var r=Object.create(null);r.true=r.false=h,r.null=r.unknown=v;var a,i=l(e.split(" "));try{for(i.s();!(a=i.n()).done;){var o=a.value;o&&(r[o]=U)}}catch(f){i.e(f)}finally{i.f()}var s,c=l(t.split(" "));try{for(c.s();!(s=c.n()).done;){var u=s.value;u&&(r[u]=z)}}catch(f){c.e(f)}finally{c.f()}var d,m=l((n||"").split(" "));try{for(m.s();!(d=m.n()).done;){var p=d.value;p&&(r[p]=B)}}catch(f){m.e(f)}finally{m.f()}return r}var N="array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ",W="absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ",G={backslashEscapes:!1,hashComments:!1,spaceAfterDashes:!1,slashComments:!1,doubleQuotedStrings:!1,doubleDollarQuotedStrings:!1,unquotedBitLiterals:!1,treatBitsAsBytes:!1,charSetCasts:!1,operatorChars:"*+-%<>!=&|~^/",specialVar:"?",identifierQuotes:'"',words:E(W,N)};function Y(e){return new s.b(function(t){var n,r,a=t.next;if(t.advance(),$(a,A)){for(;$(t.next,A);)t.advance();t.acceptToken(d)}else if(36==a&&36==t.next&&e.doubleDollarQuotedStrings)!function(e){for(;;){if(e.next<0||e.peek(1)<0)return;if(36==e.next&&36==e.peek(1))return void e.advance(2);e.advance()}}(t),t.acceptToken(f);else if(39==a||34==a&&e.doubleQuotedStrings)Z(t,a,e.backslashEscapes),t.acceptToken(f);else if(35==a&&e.hashComments||47==a&&47==t.next&&e.slashComments)I(t),t.acceptToken(m);else if(45!=a||45!=t.next||e.spaceAfterDashes&&32!=t.peek(1))if(47==a&&42==t.next){t.advance();for(var i=-1,o=1;!(t.next<0);)if(t.advance(),42==i&&47==t.next){if(!--o){t.advance();break}i=-1}else 47==i&&42==t.next?(o++,i=-1):i=t.next;t.acceptToken(p)}else if(101!=a&&69!=a||39!=t.next)if(110!=a&&78!=a||39!=t.next||!e.charSetCasts)if(95==a&&e.charSetCasts)for(var s=0;;s++){if(39==t.next&&s>1){t.advance(),Z(t,39,e.backslashEscapes),t.acceptToken(f);break}if(!R(t.next))break;t.advance()}else if(40==a)t.acceptToken(b);else if(41==a)t.acceptToken(_);else if(123==a)t.acceptToken(y);else if(125==a)t.acceptToken(O);else if(91==a)t.acceptToken(k);else if(93==a)t.acceptToken(x);else if(59==a)t.acceptToken(w);else if(e.unquotedBitLiterals&&48==a&&98==t.next)t.advance(),V(t),t.acceptToken(j);else if(98!=a&&66!=a||39!=t.next&&34!=t.next){if(48==a&&(120==t.next||88==t.next)||(120==a||88==a)&&39==t.next){var c=39==t.next;for(t.advance();(r=t.next)>=48&&r<=57||r>=97&&r<=102||r>=65&&r<=70;)t.advance();c&&39==t.next&&t.advance(),t.acceptToken(g)}else if(46==a&&t.next>=48&&t.next<=57)D(t,!0),t.acceptToken(g);else if(46==a)t.acceptToken(Q);else if(a>=48&&a<=57)D(t,!1),t.acceptToken(g);else if($(a,e.operatorChars)){for(;$(t.next,e.operatorChars);)t.advance();t.acceptToken(S)}else if($(a,e.specialVar))t.next==a&&t.advance(),function(e){if(39==e.next||34==e.next||96==e.next){var t=e.next;e.advance(),Z(e,t,!1)}else L(e)}(t),t.acceptToken(q);else if($(a,e.identifierQuotes))Z(t,a,!1),t.acceptToken(T);else if(58==a||44==a)t.acceptToken(C);else if(R(a)){var l=L(t,String.fromCharCode(a));t.acceptToken(46==t.next?P:null!==(n=e.words[l.toLowerCase()])&&void 0!==n?n:P)}}else{var u=t.next;t.advance(),e.treatBitsAsBytes?(Z(t,u,e.backslashEscapes),t.acceptToken(X)):(V(t,u),t.acceptToken(j))}else t.advance(),Z(t,39,e.backslashEscapes),t.acceptToken(f);else t.advance(),Z(t,39,!0);else I(t),t.acceptToken(m)})}var K=Y(G),M=s.c.deserialize({version:14,states:"%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",stateData:",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",goto:"#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",nodeNames:"\u26a0 LineComment BlockComment String Number Bool Null ( ) { } [ ] ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",maxTerm:38,skippedNodes:[0,1,2],repeatNodeCount:3,tokenData:"RORO",tokenizers:[0,K],topRules:{Script:[0,25]},tokenPrec:0});function J(e){for(var t=e.cursor().moveTo(e.from,-1);/Comment/.test(t.name);)t.moveTo(t.from,-1);return t.node}function F(e,t){var n=e.sliceString(t.from,t.to),r=/^([`'"])(.*)\1$/.exec(n);return r?r[2]:n}function H(e){return e&&("Identifier"==e.name||"QuotedIdentifier"==e.name)}function ee(e,t){if("CompositeIdentifier"==t.name){for(var n=[],r=t.firstChild;r;r=r.nextSibling)H(r)&&n.push(F(e,r));return n}return[F(e,t)]}function te(e,t){for(var n=[];;){if(!t||"."!=t.name)return n;var r=J(t);if(!H(r))return n;n.unshift(F(e,r)),t=J(r)}}function ne(e,t){var n=Object(i.C)(e).resolveInner(t,-1),r=function(e,t){for(var n,r=t;!n;r=r.parent){if(!r)return null;"Statement"==r.name&&(n=r)}for(var a=null,i=n.firstChild,o=!1,s=null;i;i=i.nextSibling){var c="Keyword"==i.name?e.sliceString(i.from,i.to).toLowerCase():null,l=null;if(o)if("as"==c&&s&&H(i.nextSibling))l=F(e,i.nextSibling);else{if(c&&re.has(c))break;s&&H(i)&&(l=F(e,i))}else o="from"==c;l&&(a||(a=Object.create(null)),a[l]=ee(e,s)),s=/Identifier$/.test(i.name)?i:null}return a}(e.doc,n);return"Identifier"==n.name||"QuotedIdentifier"==n.name||"Keyword"==n.name?{from:n.from,quoted:"QuotedIdentifier"==n.name?e.doc.sliceString(n.from,n.from+1):null,parents:te(e.doc,J(n)),aliases:r}:"."==n.name?{from:t,quoted:null,parents:te(e.doc,n),aliases:r}:{from:t,quoted:null,parents:[],empty:!0,aliases:r}}var re=new Set("where group having order union intersect except all distinct limit offset fetch for".split(" "));var ae=/^\w*$/,ie=/^[`'"]?\w*[`'"]?$/,oe=function(){function e(){Object(r.a)(this,e),this.list=[],this.children=void 0}return Object(a.a)(e,[{key:"child",value:function(t){var n=this.children||(this.children=Object.create(null));return n[t]||(n[t]=new e)}},{key:"childCompletions",value:function(e){return this.children?Object.keys(this.children).filter(function(e){return e}).map(function(t){return{label:t,type:e}}):[]}}]),e}();var se=M.configure({props:[i.v.add({Statement:Object(i.k)()}),i.s.add({Statement:function(e){return{from:e.firstChild.to,to:e.to}},BlockComment:function(e){return{from:e.from+2,to:e.to-2}}}),Object(o.c)({Keyword:o.e.keyword,Type:o.e.typeName,Builtin:o.e.standard(o.e.name),Bits:o.e.number,Bytes:o.e.string,Bool:o.e.bool,Null:o.e.null,Number:o.e.number,String:o.e.string,Identifier:o.e.name,QuotedIdentifier:o.e.special(o.e.string),SpecialVar:o.e.special(o.e.name),LineComment:o.e.lineComment,BlockComment:o.e.blockComment,Operator:o.e.operator,"Semi Punctuation":o.e.punctuation,"( )":o.e.paren,"{ }":o.e.brace,"[ ]":o.e.squareBracket})]}),ce=function(){function e(t,n){Object(r.a)(this,e),this.dialect=t,this.language=n}return Object(a.a)(e,[{key:"extension",get:function(){return this.language.extension}}],[{key:"define",value:function(t){var n=function(e,t,n,r){var a={};for(var i in G)a[i]=(e.hasOwnProperty(i)?e:G)[i];return t&&(a.words=E(t,n||"",r)),a}(t,t.keywords,t.types,t.builtin);return new e(n,i.c.define({name:"sql",parser:se.configure({tokenizers:[{from:K,to:Y(n)}]}),languageData:{commentTokens:{line:"--",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}}))}}]),e}();function le(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(e,t){var n=Object.keys(e).map(function(n){return{label:t?n.toUpperCase():n,type:e[n]==z?"type":e[n]==U?"keyword":"variable",boost:-1}});return Object(c.f)(["QuotedIdentifier","SpecialVar","String","LineComment","BlockComment","."],Object(c.d)(n))}(e.dialect.words,t)}function ue(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.language.data.of({autocomplete:le(e,t)})}function de(e){return e.schema?function(e,t,n,r,a){var i=new oe,o=i.child(a||"");for(var s in e){var c=s.indexOf(".");(c>-1?i.child(s.slice(0,c)):o).child(c>-1?s.slice(c+1):s).list=e[s].map(function(e){return"string"==typeof e?{label:e,type:"property"}:e})}for(var u in o.list=(t||o.childCompletions("type")).concat(r?o.child(r).list:[]),i.children){var d=i.child(u);d.list.length||(d.list=d.childCompletions("type"))}return i.list=o.list.concat(n||i.childCompletions("type")),function(e){var t=ne(e.state,e.pos),n=t.parents,a=t.from,s=t.quoted,c=t.empty,u=t.aliases;if(c&&!e.explicit)return null;u&&1==n.length&&(n=u[n[0]]||n);var d,m=i,p=l(n);try{for(p.s();!(d=p.n()).done;){for(var f=d.value;!m.children||!m.children[f];)if(m==i)m=o;else{if(m!=o||!r)return null;m=m.child(r)}m=m.child(f)}}catch(_){p.e(_)}finally{p.f()}var g,h,v=s&&e.state.sliceDoc(e.pos,e.pos+1)==s,b=m.list;return m==i&&u&&(b=b.concat(Object.keys(u).map(function(e){return{label:e,type:"constant"}}))),{from:a,to:v?e.pos+1:void 0,options:(g=s,h=b,g?h.map(function(e){return Object.assign(Object.assign({},e),{label:g+e.label+g,apply:void 0})}):h),validFor:s?ie:ae}}}(e.schema,e.tables,e.schemas,e.defaultTable,e.defaultSchema):function(){return null}}function me(e){return e.schema?(e.dialect||fe).language.data.of({autocomplete:de(e)}):[]}function pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dialect||fe;return new i.f(t.language,[me(e),ue(t,!!e.upperCaseKeywords)])}var fe=ce.define({}),ge=ce.define({charSetCasts:!0,doubleDollarQuotedStrings:!0,operatorChars:"+-*/<>=~!@#%^&|`?",specialVar:"",keywords:W+"a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",types:N+"bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"}),he="accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill",ve=N+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed",be="charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee",_e=ce.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:W+"group_concat "+he,types:ve,builtin:be}),ye=ce.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:W+"always generated groupby_concat hard persistent shutdown soft virtual "+he,types:ve,builtin:be}),Oe=ce.define({keywords:W+"trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",types:N+"bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",builtin:"binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",operatorChars:"*+-%<>!=^&|/",specialVar:"@"}),ke=ce.define({keywords:W+"abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",types:N+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",builtin:"auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",operatorChars:"*+-%<>!=&|/~",identifierQuotes:'`"',specialVar:"@:?$"}),xe=ce.define({keywords:"add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",types:N+"ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",slashComments:!0}),we=ce.define({keywords:W+"abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",builtin:"appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",types:N+"ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",operatorChars:"*/+-%<>!=~",doubleQuotedStrings:!0,charSetCasts:!0})}}]);
//# sourceMappingURL=21.fa38c48b.chunk.js.map