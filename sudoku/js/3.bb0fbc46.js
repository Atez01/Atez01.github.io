(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"2d4d":function(t,e,r){},"5dfa":function(t,e,r){"use strict";var o=r("8a43"),n=r.n(o);n.a},"7c80":function(t,e,r){"use strict";var o=r("e3a3"),n=r.n(o);n.a},"8a43":function(t,e,r){},"8b24":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-page",{staticClass:"flex"},[r("Sudoku")],1)},n=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-page wrap full-width row"},[r("div",{staticClass:"square col-12 col-sm-8 col-md-12 col-lg-12 q-pa-md"},[r("div",{staticClass:"main-grid"},t._l(t.grid,(function(e){var o=e.x,n=e.y;return r("Cell",{key:o+"-"+n,ref:"cell_"+o+"_"+n,refInFor:!0,staticClass:"cell",attrs:{position:{x:o,y:n}},on:{move:t.move}})})),1)]),t.$q.platform.is.mobile?r("div",{staticClass:"col-12 col-sm-4 col-md-12 col-lg-12 self-end"},[r("SudokuControls")],1):t._e()])},s=[],i=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),c=r.n(i),l=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value,expression:"value",modifiers:{number:!0}}],ref:"input",class:{input:!0,invalid:t.hasError},attrs:{type:"text",readonly:t.isLocked},domProps:{value:t.value},on:{focus:t.focus,keydown:t.onKeyDown,input:function(e){e.target.composing||(t.value=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])},u=[];function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){c()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={name:"Cell",props:{position:{type:Object,required:!0}},computed:{cell:function(){return this.$store.getters["sudoku/cell"](this.position.x,this.position.y)},hasError:function(){return this.cell.hasError},isLocked:function(){return this.cell.isLocked},value:{get:function(){return this.cell.value},set:function(t){this.$store.commit("sudoku/setValue",f(f({},this.position),{},{value:t}))}}},methods:{onKeyDown:function(t){var e=this,r=t.keyCode,o=t.key,n={38:"up",39:"right",40:"down",37:"left"};if(r in n){var a=n[r];this.$emit("move",{where:a,currentPosition:this.position}),t.preventDefault()}else"Tab"!==o&&setTimeout((function(){return e.$refs.input.select()}),0)},focus:function(){this.$refs.input.select()}}},h=p,m=(r("7c80"),r("2877")),b=Object(m["a"])(h,l,u,!1,null,"6f2041f3",null),v=b.exports,g=r("d08d"),y=r("2f62");function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){c()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={name:"Sudoku",components:{Cell:v,SudokuControls:g["a"]},computed:k({},Object(y["c"])("sudoku",["grid"])),methods:{move:function(t){var e=t.where,r=t.currentPosition,o=k({},r);"up"==e?o.y--:"right"===e?o.x++:"down"===e?o.y++:"left"===e&&o.x--;var n="cell_".concat(o.x,"_").concat(o.y);if(n in this.$refs){var a=this.$refs[n][0];a.focus()}}}},j=O,C=(r("e120"),Object(m["a"])(j,a,s,!1,null,null,null)),q=C.exports,S={name:"PageIndex",components:{Sudoku:q}},x=S,P=r("eebe"),_=r.n(P),D=r("9989"),E=Object(m["a"])(x,o,n,!1,null,null,null);e["default"]=E.exports;_()(E,"components",{QPage:D["a"]})},d08d:function(t,e,r){"use strict";var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"q-px-md q-pt-md full-height full-width column"},[r("div",{staticClass:"col q-gutter-y-md"},[r("q-btn-toggle",{staticClass:"q-ma-none q-mt-md",attrs:{spread:"","toggle-color":"primary",color:"white","text-color":"primary",options:[{label:"Locked",value:!0},{label:"Unlocked",value:!1}]},model:{value:t.isLocked,callback:function(e){t.isLocked=e},expression:"isLocked"}}),r("div",{staticClass:"row q-gutter-x-md"},[r("div",{staticClass:"col"},[r("q-btn",{staticClass:"full-width",attrs:{color:"red","icon-right":"restore",label:"Reset"},on:{click:t.reset}})],1),r("div",{staticClass:"col"},[r("q-btn",{staticClass:"full-width",attrs:{color:"primary","icon-right":"casino",label:"Solve"},on:{click:t.solve}})],1)]),r("q-item",{staticClass:"q-my-none"},[r("q-item-section",{attrs:{avatar:""}},[r("q-icon",{attrs:{color:"red-"+t.difficulty,name:"extension"}})],1),r("q-item-section",[r("q-slider",{attrs:{min:1,max:10,step:1,snap:"",label:"",color:"red"},model:{value:t.difficulty,callback:function(e){t.difficulty=e},expression:"difficulty"}})],1)],1),r("q-badge",{staticClass:"q-my-none",attrs:{color:"red"}},[t._v("Difficulty: "+t._s(t.difficulty))]),r("q-btn",{staticClass:"full-width q-mt-sm",attrs:{color:"primary","icon-right":"fas fa-random",label:"Generate"},on:{click:t.generate}}),r("q-dialog",{attrs:{value:t.hasError,"transition-show":"scale","transition-hide":"scale"},on:{hide:t.acknowledgeError}},[r("q-card",{staticClass:"bg-red text-white",staticStyle:{width:"300px"}},[r("q-card-section",[r("div",{staticClass:"text-h6"},[t._v("Sudoku error")])]),r("q-card-section",{staticClass:"q-pt-none"},[t._v("\n          "+t._s(t.errorMessage)+"\n        ")]),r("q-card-actions",{staticClass:"bg-white text-red",attrs:{align:"right"}},[r("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK"}})],1)],1)],1),r("q-dialog",{attrs:{value:t.isWorking,persistent:"","transition-show":"scale","transition-hide":"scale"}},[r("q-card",{staticClass:"bg-primary text-white",staticStyle:{width:"300px"}},[r("q-card-section",[r("div",{staticClass:"text-h6"},[r("div",{staticClass:"loading"},[t._v("Calculating")])])]),r("q-card-section",{staticClass:"q-pt-none"},[t._v("\n          "+t._s(t.workingMessage)+"\n        ")]),r("q-card-actions",{staticClass:"bg-white text-primary",attrs:{align:"right"}},[r("q-btn",{attrs:{flat:"",label:"Cancel"},on:{click:t.stop}})],1)],1)],1)],1),t._m(0)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-caption author col-1 desktop-only"},[t._v("\n    Made with ❤️ and Quasar by "),r("a",{attrs:{href:"https://github.com/lubosmato",target:"_blank"}},[t._v("lubosmato")])])}],a=(r("8e6e"),r("8a81"),r("ac6a"),r("cadf"),r("06db"),r("456d"),r("9523")),s=r.n(a),i=r("2f62");function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var u=Object(i["a"])("sudoku"),d=u.mapMutations,f=u.mapState,p=["😄","😃","😀","😊","😉","😍","😚","😗","😙","😜","😝","😛","😳","😁","😔","😌","😒","😞","😣","😢","😂","😭","😪","😥","😰","😅","😓","😩","😫","😨","😱","😆","😋","😷","😎","😴","😵","😲","😟","😦","😧","😈","👿","😮","😬","😐","😕","😯","😶","😇","😏","😑","👍","👌","👊","✊","✌","👋","✋","👈","🙏","☝","👏","💪"];function h(){return p[Math.floor(Math.random()*p.length)]}var m=["Sudoku is based on an early mathematical analysis concept designed in 1782","the very first Sudoku World Championships were hosted in 2006 in Italy","several celebrities have admitted to being addicted to Sudoku","the Guinness World Record for the fastest time to complete a Sudoku is less than 1 minute and a half","in the year following Sudoku going viral, pencil sales are said to have increased by around 700%","the name “Sudoku” can be broken down into “Su” which means “Number” and “Doku” which means “Single/Only.”","the New York Time crossword editor predicted that the Sudoku mania wouldn’t last; he was wrong","while a Sudoku puzzle can have more than one solution, a well-formed puzzle has just one unique solution","JavaScript is not very fast language?"];function b(){return m[Math.floor(Math.random()*m.length)]}var v={name:"SudokuControls",data:function(){return{isLocked:!1,difficulty:1,workingMessage:""}},computed:l(l({},f(["errorMessage","isWorking"])),{},{hasError:function(){return""!==this.errorMessage}}),watch:{isWorking:function(t){if(t){var e=h(),r=b();this.workingMessage="Did you know that ".concat(r,"? ").concat(e)}},isLocked:function(t){t?this.lockFilled():this.unlockAll()}},methods:l(l({},d(["reset","lockFilled","unlockAll","acknowledgeError"])),{},{solve:function(){this.$store.dispatch("sudoku/solve")},generate:function(){this.$store.dispatch("sudoku/generate",this.difficulty)},stop:function(){this.$store.dispatch("sudoku/stop")}})},g=v,y=(r("5dfa"),r("2877")),w=r("eebe"),k=r.n(w),O=r("6a67"),j=r("9c40"),C=r("66e5"),q=r("4074"),S=r("0016"),x=r("c1d0"),P=r("58a8"),_=r("24e8"),D=r("f09f"),E=r("a370"),$=r("4b7e"),Q=r("7f67"),M=Object(y["a"])(g,o,n,!1,null,"f2925152",null);e["a"]=M.exports;k()(M,"components",{QBtnToggle:O["a"],QBtn:j["a"],QItem:C["a"],QItemSection:q["a"],QIcon:S["a"],QSlider:x["a"],QBadge:P["a"],QDialog:_["a"],QCard:D["a"],QCardSection:E["a"],QCardActions:$["a"]}),k()(M,"directives",{ClosePopup:Q["a"]})},e120:function(t,e,r){"use strict";var o=r("2d4d"),n=r.n(o);n.a},e3a3:function(t,e,r){}}]);