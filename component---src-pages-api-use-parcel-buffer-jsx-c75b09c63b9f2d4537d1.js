(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{379:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(368),s=t(367),r=t(12),b=t.n(r),p=t(93),l=t.n(p),m=t(78),i=t(120),u=t(384),N=t(371),d=t(370),j=t(392),O=t.n(j),h=t(385),f={_frontmatter:{}},g="wrapper";function k(e){var a=e.components,t=l()(e,["components"]);return Object(m.b)(g,b()({},f,t,{components:a,mdxType:"MDXLayout"}),Object(m.b)("h1",{id:"useparcelbuffer"},"useParcelBuffer"),Object(m.b)(d.a,{src:O.a,mdxType:"ApiPageIcon"}),Object(m.b)("p",null,"The useParcelBuffer function is a React hook. Its job is to control the flow of Parcel changes by providing a buffer."),Object(m.b)("p",null,"It receives a Parcel (via ",Object(m.b)("a",b()({parentName:"p"},{href:"#parcel"}),"parcel"),") and provides a Parcel of its own (referred to as ",Object(m.b)("a",b()({parentName:"p"},{href:"#innerParcel"}),"innerParcel"),"). ",Object(m.b)("inlineCode",{parentName:"p"},"innerParcel")," initially has the same contents as ",Object(m.b)("inlineCode",{parentName:"p"},"parcel"),". Changes to ",Object(m.b)("inlineCode",{parentName:"p"},"innerParcel")," will be applied immediately like normal."),Object(m.b)("p",null,"When buffering is enabled, these changes will not be propagated up through ",Object(m.b)("inlineCode",{parentName:"p"},"parcel"),", and are instead held in an internal buffer. These can be released later, either explicitly by calling ",Object(m.b)("a",b()({parentName:"p"},{href:"#submit"}),"control.submit()"),", or automatically if ",Object(m.b)("a",b()({parentName:"p"},{href:"#debounce"}),"debounce")," is being used."),Object(m.b)(u.a,{mdxType:"Message"},"In most cases you'll probably want to use the ",Object(m.b)(i.b,{to:"/api/useParcelForm",mdxType:"Link"},"useParcelForm")," hook instead, which combines useParcelState with useParcelBuffer."),Object(m.b)("p",null,Object(m.b)("strong",{parentName:"p"},Object(m.b)("a",b()({parentName:"strong"},{href:"/ui-behaviour#Submitting-forms"}),'Please refer to the "Submitting Forms" example to see how this buffering behaves'))),Object(m.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(m.b)("pre",b()({parentName:"div"},{className:"language-js"}),Object(m.b)("code",b()({parentName:"pre"},{className:"language-js"}),Object(m.b)("span",b()({parentName:"code"},{className:"token keyword"}),"import")," useParcelBuffer ",Object(m.b)("span",b()({parentName:"code"},{className:"token keyword"}),"from")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token string"}),"'react-dataparcels/useParcelBuffer'"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";")))),Object(m.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(m.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(m.b)("code",b()({parentName:"pre"},{className:"language-flow"}),Object(m.b)("span",b()({parentName:"code"},{className:"token keyword"}),"let")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"["),"innerParcel",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),",")," control",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"=")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token function"}),"useParcelBuffer"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"{"),"\n    parcel",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Parcel",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(m.b)("span",b()({parentName:"code"},{className:"token comment"}),"// optional"),"\n    buffer",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"?"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token type tag"}),"boolean"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),","),"\n    debounce",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"?"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token type tag"}),"number"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),","),"\n    beforeChange",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"?"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ParcelUpdater",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"|"),"ParcelUpdater",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"["),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"}"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";")))),Object(m.b)("h2",{id:"params"},Object(m.b)(i.d,{textStyle:"weak",mdxType:"Text"},"Params")),Object(m.b)("h3",{id:"parcel"},"parcel"),Object(m.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(m.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(m.b)("code",b()({parentName:"pre"},{className:"language-flow"}),"parcel",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Parcel"))),Object(m.b)("p",null,"The useParcelBuffer hook must be passed a ",Object(m.b)("inlineCode",{parentName:"p"},"parcel"),", the Parcel which the buffer will apply to."),Object(m.b)("h4",{id:"behaviour-notes"},"Behaviour notes"),Object(m.b)("p",null,"Whenever a useParcelBuffer hook receives a new Parcel via props, its default behaviour is to:"),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},"update to contain the new Parcel’s data"),Object(m.b)("li",{parentName:"ul"},"forget about all its buffered changes")),Object(m.b)("p",null,"This is safe default behaviour because changes in the buffer may not be compatible with the new Parcel's data shape. However it may be user unfriendly in some cases, depending on when and how often the parcel updates."),Object(m.b)("p",null,"If you would like to keep the changes in the buffer, and you know that buffered changes will always be compatible with any new Parcel's data shape, consider using ",Object(m.b)("a",b()({parentName:"p"},{href:"/api/useParcelForm#rebase"}),"useParcelForm.rebase")," or ",Object(m.b)("a",b()({parentName:"p"},{href:"/api/useParcelState#rebase"}),"useParcelState.rebase"),"."),Object(m.b)("h3",{id:"buffer"},"buffer"),Object(m.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(m.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(m.b)("code",b()({parentName:"pre"},{className:"language-flow"}),"buffer",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"?"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token type tag"}),"boolean")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"=")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token boolean"}),"true")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token comment"}),"// optional")))),Object(m.b)("p",null,"When ",Object(m.b)("inlineCode",{parentName:"p"},"buffer")," is true, changes that occur to ",Object(m.b)("inlineCode",{parentName:"p"},"innerParcel")," will be caught in useParcelBuffer's buffer, until released explicitly by calling ",Object(m.b)("a",b()({parentName:"p"},{href:"#submit"}),"control.submit()"),", or automatically if ",Object(m.b)("a",b()({parentName:"p"},{href:"#debounce"}),"debounce")," is being used."),Object(m.b)("p",null,"When ",Object(m.b)("inlineCode",{parentName:"p"},"buffer")," is false, changes will propagate up to ",Object(m.b)("inlineCode",{parentName:"p"},"parcel")," immediately."),Object(m.b)("h3",{id:"debounce"},"debounce"),Object(m.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(m.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(m.b)("code",b()({parentName:"pre"},{className:"language-flow"}),"debounce",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"?"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token type tag"}),"number")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token comment"}),"// optional")))),Object(m.b)("p",null,"If set, ",Object(m.b)("inlineCode",{parentName:"p"},"debounce")," will debounce any changes that enter the buffer. The number indicates the number of milliseconds to debounce."),Object(m.b)("p",null,"This can be used to make ",Object(m.b)("a",b()({parentName:"p"},{href:"/ui-behaviour#Autosaving-forms"}),"autosaving forms"),"."),Object(m.b)("h4",{id:"debouncing-explained"},"Debouncing explained"),Object(m.b)("p",null,"When the ",Object(m.b)("inlineCode",{parentName:"p"},"innerParcel")," sends a change, the useParelBuffer hook will catch it and prevent it from being propagated out of the buffer."),Object(m.b)("p",null,"The useParcelBuffer hooks waits until no new changes have occured for ",Object(m.b)("inlineCode",{parentName:"p"},"debounce")," number of milliseconds. It then releases all the changes it has buffered, all together in a single change request."),Object(m.b)("h3",{id:"beforechange"},"beforeChange"),Object(m.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(m.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(m.b)("code",b()({parentName:"pre"},{className:"language-flow"}),"beforeChange",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"?"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ParcelUpdater",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"|"),"ParcelUpdater",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"["),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token comment"}),"// optional"),"\n\n",Object(m.b)("span",b()({parentName:"code"},{className:"token keyword"}),"type")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token function-variable function"}),"ParcelUpdater")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"=")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),"value",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token type tag"}),"any"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),",")," changeRequest",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ChangeRequest",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"=>")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token type tag"}),"any"),"\n",Object(m.b)("span",b()({parentName:"code"},{className:"token keyword"}),"type")," ParcelUpdater ",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"=")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token function"}),"asNode"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),"node",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ParcelNode",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),",")," changeRequest",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ChangeRequest",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"=>")," ParcelNode",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";"),"\n",Object(m.b)("span",b()({parentName:"code"},{className:"token keyword"}),"type")," ParcelUpdater ",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"=")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token function"}),"asChildNodes"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),"nodes",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token type tag"}),"any"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),",")," changeRequest",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ChangeRequest",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"=>")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token type tag"}),"any"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";")))),Object(m.b)("p",null,"The ",Object(m.b)("inlineCode",{parentName:"p"},"beforeChange")," parameter accepts either a single function, or an array of functions. Whenever a new ",Object(m.b)("inlineCode",{parentName:"p"},"parcel")," is taken into useParcelBuffer from params, and whenever the useParcelBuffer hook recieves a change from below, the change is passed through each ",Object(m.b)("inlineCode",{parentName:"p"},"beforeChange")," function."),Object(m.b)("p",null,"Internally the useParcelBuffer hook uses ",Object(m.b)("a",b()({parentName:"p"},{href:"/api/Parcel#modifyUp()"}),"Parcel.modifyUp()")," on each of the ",Object(m.b)("inlineCode",{parentName:"p"},"beforeChange")," functions. If more than one function is passed to ",Object(m.b)("inlineCode",{parentName:"p"},"beforeChange"),", the change will go through the first function in the array first, then the second etc."),Object(m.b)("p",null,"This is particularly useful for setting ",Object(m.b)("a",b()({parentName:"p"},{href:"data-editing#Deriving-meta"}),"derived data"),", and plugins such as ",Object(m.b)("a",b()({parentName:"p"},{href:"/api/validation"}),"validation")," are built to be passed into ",Object(m.b)("inlineCode",{parentName:"p"},"beforeChange"),"."),Object(m.b)(h.a,{mdxType:"ValueUpdater"}),Object(m.b)("div",{className:"gatsby-highlight","data-language":"js"},Object(m.b)("pre",b()({parentName:"div"},{className:"language-js"}),Object(m.b)("code",b()({parentName:"pre"},{className:"language-js"}),Object(m.b)("span",b()({parentName:"code"},{className:"token comment"}),'// parcel.value is "ABC"'),"\n\n",Object(m.b)("span",b()({parentName:"code"},{className:"token keyword"}),"let")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"["),"innerParcel",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"]")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"=")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token function"}),"useParcelBuffer"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"{"),"\n    parcel",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(m.b)("span",b()({parentName:"code"},{className:"token function-variable function"}),"beforeChange"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token parameter"}),"value")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token operator"}),"=>")," value",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"."),Object(m.b)("span",b()({parentName:"code"},{className:"token function"}),"toLowerCase"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),"\n",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"}"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(m.b)("span",b()({parentName:"code"},{className:"token comment"}),'// ^ "ABC" will be passed through `beforeChange`'),"\n",Object(m.b)("span",b()({parentName:"code"},{className:"token comment"}),'// and useParcelBuffer\'s Parcel will contain a value of "abc"'),"\n",Object(m.b)("span",b()({parentName:"code"},{className:"token comment"}),'// parcel.value is now "abc"'),"\n\ninnerParcel",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"."),Object(m.b)("span",b()({parentName:"code"},{className:"token function"}),"set"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"("),Object(m.b)("span",b()({parentName:"code"},{className:"token string"}),'"HELLO"'),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),")"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),";"),"\n\n",Object(m.b)("span",b()({parentName:"code"},{className:"token comment"}),'// ^ "HELLO" will be passed through `beforeChange`'),"\n",Object(m.b)("span",b()({parentName:"code"},{className:"token comment"}),'// and useParcelBuffer\'s Parcel will contain a value of "hello"'),"\n",Object(m.b)("span",b()({parentName:"code"},{className:"token comment"}),'// parcel.value is now "hello"')))),Object(m.b)("h2",{id:"returns"},Object(m.b)(i.d,{textStyle:"weak",mdxType:"Text"},"Returns")),Object(m.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(m.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(m.b)("code",b()({parentName:"pre"},{className:"language-flow"}),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"["),"innerParcel",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Parcel",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),",")," control",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ParcelHookControl",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"]")))),Object(m.b)("h3",{id:"innerparcel"},"innerParcel"),Object(m.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(m.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(m.b)("code",b()({parentName:"pre"},{className:"language-flow"}),"innerParcel",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Parcel"))),Object(m.b)("p",null,"The first element of the returned array is the ",Object(m.b)("inlineCode",{parentName:"p"},"innerParcel"),", a Parcel that contains the current state of ",Object(m.b)("inlineCode",{parentName:"p"},"parcel")," with all the changes in the buffer applied to it. When buffering is enabled, any changes that ",Object(m.b)("inlineCode",{parentName:"p"},"innerParcel")," receives will go into the buffer."),Object(m.b)("h3",{id:"control"},"control"),Object(m.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(m.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(m.b)("code",b()({parentName:"pre"},{className:"language-flow"}),"control",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ParcelHookControl"))),Object(m.b)("p",null,"The second element of the returned array is a ParcelHookControl instance."),Object(m.b)("h2",{id:"parcelhookcontrol"},"ParcelHookControl"),Object(m.b)("div",{className:"gatsby-highlight","data-language":"flow"},Object(m.b)("pre",b()({parentName:"div"},{className:"language-flow"}),Object(m.b)("code",b()({parentName:"pre"},{className:"language-flow"}),Object(m.b)("span",b()({parentName:"code"},{className:"token keyword"}),"class")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token class-name"}),"ParcelHookControl")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"{"),"\n    submit",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token type tag"}),"Function"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),","),"\n    reset",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token type tag"}),"Function"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),","),"\n    buffered",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," ",Object(m.b)("span",b()({parentName:"code"},{className:"token type tag"}),"boolean"),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),","),"\n    actions",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),":")," Action",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"["),Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(m.b)("span",b()({parentName:"code"},{className:"token punctuation"}),"}")))),Object(m.b)("ul",null,Object(m.b)("li",{parentName:"ul"},Object(m.b)(N.a,{name:"submit",type:"() => void",mdxType:"Param"}),Object(m.b)("p",{parentName:"li"},"When called, this function will release all changes in the buffer.")),Object(m.b)("li",{parentName:"ul"},Object(m.b)(N.a,{name:"reset",type:"() => void",mdxType:"Param"}),Object(m.b)("p",{parentName:"li"},"When called, this function will remove all changes in the buffer, and reset the data in ",Object(m.b)("inlineCode",{parentName:"p"},"innerParcel")," to be the same as ",Object(m.b)("inlineCode",{parentName:"p"},"parcel"),".")),Object(m.b)("li",{parentName:"ul"},Object(m.b)(N.a,{name:"buffered",type:"boolean",mdxType:"Param"}),Object(m.b)("p",{parentName:"li"},"This boolean is true when there are any changes in the buffer, or false if the buffer is empty.")),Object(m.b)("li",{parentName:"ul"},Object(m.b)(N.a,{name:"actions",type:"Action[]",mdxType:"Param"}),Object(m.b)("p",{parentName:"li"},"An array of actions that are currently in the buffer."))))}k.isMDXComponent=!0;var y=t(369);a.default=function(){return c.a.createElement(o.a,null,c.a.createElement(s.b,{pageTop:!0,pageBottom:!0,mdxHeading:!0,nav:y.a,pageNav:["# useParcelBuffer","# Params","parcel","buffer","debounce","beforeChange","# Returns","innerParcel","control","# ParcelHookControl"]},c.a.createElement(k,null)))}},384:function(e,a,t){"use strict";var n=t(94),c=t.n(n),o=t(95);function s(){var e=c()(["\n    background-color: ",";\n    padding: 1rem;\n    margin-bottom: 1rem;\n    font-size: ",";\n"]);return s=function(){return e},e}a.a=o.b.div(s(),(function(e){return e.theme.colors.bgAlt}),(function(e){return e.theme.fontSizes.s}))},385:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(12),c=t.n(n),o=t(93),s=t.n(o),r=(t(0),t(78)),b={_frontmatter:{}},p="wrapper";function l(e){var a=e.components,t=s()(e,["components"]);return Object(r.b)(p,c()({},b,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"please-be-careful"},"Please be careful"),Object(r.b)("p",null,"This method is safe to use in most simple cases, but in some cases it should not be used:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the updater gives you a primitive value or childless value, you can return anything."),Object(r.b)("li",{parentName:"ul"},"If the updater gives you a value that has children, you can always return a primitive value or childless value."),Object(r.b)("li",{parentName:"ul"},"If the updater gives you a value that has children, you can return a value with children ",Object(r.b)("strong",{parentName:"li"},"only if the shape hasn't changed"),".")),Object(r.b)("p",null,"To find out why, and what to do about it, please read about ",Object(r.b)("a",c()({parentName:"p"},{href:"/parcel-updaters"}),"parcel updaters"),"."))}l.isMDXComponent=!0},392:function(e,a,t){e.exports=t.p+"static/parcelboundaryhoc-0aa10d814c31c6a6dd6331cf554851ce.gif"}}]);
//# sourceMappingURL=component---src-pages-api-use-parcel-buffer-jsx-c75b09c63b9f2d4537d1.js.map