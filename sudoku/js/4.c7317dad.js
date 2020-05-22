(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"6cb3":function(t,e,a){"use strict";var o=a("aa12"),s=a.n(o);s.a},"713b":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"hHh LpR fFf"}},[t.$q.platform.is.desktop?a("q-drawer",{attrs:{"show-if-above":"",side:"left",bordered:""},model:{value:t.left,callback:function(e){t.left=e},expression:"left"}},[a("SudokuControls")],1):t._e(),a("q-page-container",[a("router-view")],1)],1)},s=[],r=a("d08d"),i={components:{SudokuControls:r["a"]},data:function(){return{left:!0}}},n=i,c=a("2877"),l=a("eebe"),d=a.n(l),u=a("4d5a"),h=a("9404"),p=a("09e3"),f=Object(c["a"])(n,o,s,!1,null,null,null);e["default"]=f.exports;d()(f,"components",{QLayout:u["a"],QDrawer:h["a"],QPageContainer:p["a"]})},aa12:function(t,e,a){},d08d:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-px-md q-pt-md full-height full-width column"},[a("div",{staticClass:"col q-gutter-y-md"},[a("div",{staticClass:"row q-gutter-x-md"},[a("div",{staticClass:"col"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"lock"},on:{click:t.lockFilled}})],1),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary",icon:"lock_open"},on:{click:t.unlockAll}})],1)]),a("div",{staticClass:"row q-gutter-x-md"},[a("div",{staticClass:"col"},[a("q-btn",{staticClass:"full-width",attrs:{color:"red","icon-right":"restore",label:"Reset"},on:{click:t.reset}})],1),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary","icon-right":"casino",label:"Solve"},on:{click:t.solve}})],1)]),a("q-slider",{attrs:{min:1,max:10,step:1,snap:"",label:"",color:"red"},model:{value:t.difficulty,callback:function(e){t.difficulty=e},expression:"difficulty"}}),a("q-badge",{staticClass:"q-my-none",attrs:{color:"red"}},[t._v("Difficulty: "+t._s(t.difficulty))]),a("div",{staticClass:"row q-gutter-x-md q-mt-sm"},[a("q-btn",{attrs:{color:"red",icon:"share"},on:{click:t.share}}),a("q-tooltip",{attrs:{"content-class":{hidden:!t.isCopiedShown},"content-style":"font-size: 1em","transition-show":"scale","transition-hide":"scale"}},[t._v("\n        Copied to clipboard\n      ")]),a("div",{staticClass:"col"},[a("q-btn",{staticClass:"full-width",attrs:{color:"primary","icon-right":"fas fa-random",label:"Generate"},on:{click:t.generate}})],1)],1),a("q-dialog",{attrs:{value:t.hasError,"transition-show":"scale","transition-hide":"scale"},on:{hide:t.acknowledgeError}},[a("q-card",{staticClass:"bg-red text-white",staticStyle:{width:"300px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Sudoku error")])]),a("q-card-section",{staticClass:"q-pt-none"},[t._v("\n          "+t._s(t.errorMessage)+"\n        ")]),a("q-card-actions",{staticClass:"bg-white text-red",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK"}})],1)],1)],1),a("q-dialog",{attrs:{value:t.isWorking,persistent:"","transition-show":"scale","transition-hide":"scale"}},[a("q-card",{staticClass:"bg-primary text-white",staticStyle:{width:"300px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[a("div",{staticClass:"loading"},[t._v("Calculating")])])]),a("q-card-section",{staticClass:"q-pt-none"},[t._v("\n          "+t._s(t.workingMessage)+"\n        ")]),a("q-card-actions",{staticClass:"bg-white text-primary",attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",label:"Cancel"},on:{click:t.stop}})],1)],1)],1)],1),t._m(0)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-caption author col-1 desktop-only"},[t._v("\n    Made with ❤️ and Quasar "),a("a",{attrs:{href:"https://github.com/lubosmato/sudoku-solver",target:"_blank"}},[t._v("source")])])}],r=(a("8e6e"),a("8a81"),a("ac6a"),a("cadf"),a("06db"),a("456d"),a("a34a")),i=a.n(r),n=(a("96cf"),a("c973")),c=a.n(n),l=a("9523"),d=a.n(l),u=a("2f62");function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){d()(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f=Object(u["a"])("sudoku"),g=f.mapMutations,v=f.mapState,w=["😄","😃","😀","😊","😉","😍","😚","😗","😙","😜","😝","😛","😳","😁","😔","😌","😒","😞","😣","😢","😂","😭","😪","😥","😰","😅","😓","😩","😫","😨","😱","😆","😋","😷","😎","😴","😵","😲","😟","😦","😧","😈","👿","😮","😬","😐","😕","😯","😶","😇","😏","😑","👍","👌","👊","✊","✌","👋","✋","👈","🙏","☝","👏","💪"];function b(){return w[Math.floor(Math.random()*w.length)]}var m=["Sudoku is based on an early mathematical analysis concept designed in 1782","the very first Sudoku World Championships were hosted in 2006 in Italy","several celebrities have admitted to being addicted to Sudoku","the Guinness World Record for the fastest time to complete a Sudoku is less than 1 minute and a half","in the year following Sudoku going viral, pencil sales are said to have increased by around 700%","the name “Sudoku” can be broken down into “Su” which means “Number” and “Doku” which means “Single/Only.”","the New York Time crossword editor predicted that the Sudoku mania wouldn’t last; he was wrong","while a Sudoku puzzle can have more than one solution, a well-formed puzzle has just one unique solution","JavaScript is not very fast language and this app is written in JavaScript"];function k(){return m[Math.floor(Math.random()*m.length)]}var y={name:"SudokuControls",data:function(){return{isCopiedShown:!1,difficulty:1,workingMessage:""}},computed:p(p({},v(["errorMessage","isWorking"])),{},{hasError:function(){return""!==this.errorMessage}}),watch:{isWorking:function(t){if(t){var e=b(),a=k();this.workingMessage="Did you know that ".concat(a,"? ").concat(e)}}},methods:p(p({},g(["reset","lockFilled","unlockAll","acknowledgeError"])),{},{solve:function(){this.$store.dispatch("sudoku/solve")},generate:function(){this.$store.dispatch("sudoku/generate",this.difficulty)},stop:function(){this.$store.dispatch("sudoku/stop")},share:function(){var t=this;return c()(i.a.mark((function e(){var a,o;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$store.getters["sudoku/exported"],o="".concat(window.location.origin).concat(t.$router.options.base).concat(a),e.prev=2,e.next=5,navigator.share({title:"Hey! Check this Sudoku 🙂",text:"I just generated this Sudoku puzzle for you!",url:o});case 5:e.next=19;break;case 7:return e.prev=7,e.t0=e["catch"](2),e.prev=9,e.next=12,navigator.clipboard.writeText(o);case 12:t.isCopiedShown=!0,setTimeout((function(){t.isCopiedShown=!1}),2e3),e.next=19;break;case 16:e.prev=16,e.t1=e["catch"](9),t.$store.commit("sudoku/updateError","Something went wrong 😥");case 19:case"end":return e.stop()}}),e,null,[[2,7],[9,16]])})))()}})},C=y,q=(a("6cb3"),a("2877")),S=a("eebe"),x=a.n(S),O=a("9c40"),_=a("c1d0"),j=a("58a8"),M=a("05c0"),Q=a("24e8"),E=a("f09f"),P=a("a370"),$=a("4b7e"),D=a("7f67"),z=Object(q["a"])(C,o,s,!1,null,"3e16fef4",null);e["a"]=z.exports;x()(z,"components",{QBtn:O["a"],QSlider:_["a"],QBadge:j["a"],QTooltip:M["a"],QDialog:Q["a"],QCard:E["a"],QCardSection:P["a"],QCardActions:$["a"]}),x()(z,"directives",{ClosePopup:D["a"]})}}]);