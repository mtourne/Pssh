(function(b){function a(b,d){if({}.hasOwnProperty.call(a.cache,b))return a.cache[b];var e=a.resolve(b);if(!e)throw new Error('Failed to resolve module '+b);var c={id:b,require:a,filename:b,exports:{},loaded:!1,parent:d,children:[]};d&&d.children.push(c);var f=b.slice(0,b.lastIndexOf('/')+1);return a.cache[b]=c.exports,e.call(c.exports,c,c.exports,f,b),c.loaded=!0,a.cache[b]=c.exports}a.modules={},a.cache={},a.resolve=function(b){return{}.hasOwnProperty.call(a.modules,b)?a.modules[b]:void 0},a.define=function(b,c){a.modules[b]=c};var c=function(a){return a='/',{title:'browser',version:'v0.12.4',browser:!0,env:{},argv:[],nextTick:b.setImmediate||function(a){setTimeout(a,0)},cwd:function(){return a},chdir:function(b){a=b}}}();a.define('/lib/link-initialize.js',function(v,E,D,C){'use strict';function k(a){b.contentWindow.postMessage(JSON.stringify(g.merge({disableAnimations:y||w},a)),'https://cdn.plaid.com/link')}var g=a('/lib/util.js',v),c=function(b,a,c){for(b=document.getElementsByTagName('script'),a=0,c=b.length;a<c;a+=1)if(/link-initialize[.]js$/.test(b[a].src))return b[a];throw new Error('Failed to find script')}(),x=document.createElement('img');x.src='https://cdn.plaid.com/link/0.1.12/img/spritesheet.png';var e=window.location,h;e.origin!=null?h=e.origin:h=e.protocol+'//'+e.hostname+(e.port?':'+e.port:'');var t=[{name:'American Express',type:'amex',auth:!1,connect:!0},{name:'Bank of America',type:'bofa',auth:!0,connect:!0},{name:'Citi',type:'citi',auth:!0,connect:!0},{name:'CapitalOne 360',type:'capone360',auth:!0,connect:!1},{name:'Chase',type:'chase',auth:!0,connect:!0},{name:'Fidelity',type:'fidelity',auth:!0,connect:!1},{name:'Navy Federal Credit Union',type:'nfcu',auth:!0,connect:!0},{name:'PNC',type:'pnc',auth:!0,connect:!1},{name:'TD Bank',type:'td',auth:!0,connect:!1},{name:'Charles Schwab',type:'schwab',auth:!0,connect:!1},{name:'SVB',type:'svb',auth:!0,connect:!0},{name:'US Bank',type:'us',auth:!0,connect:!0},{name:'USAA',type:'usaa',auth:!0,connect:!0},{name:'Wells Fargo',type:'wells',auth:!0,connect:!0}],b=document.createElement('iframe'),s=!1;b.id='plaid-link-iframe',b.src='https://cdn.plaid.com/link/0.1.12/link.html',b.width='100%',b.height='100%',b.style.position='fixed',b.style.top='0',b.style.left='0',b.style.right='0',b.style.bottom='0',b.style.zIndex='99999999',b.style.borderWidth='0',b.style.display='none',b.style.overflowX='hidden',b.style.overflowY='auto',document.body.appendChild(b);var u=c.getAttribute('data-form-id'),f=document.getElementById(u),q,d;if(u==null){var p,o,m=null;b.onload=function(){typeof o==='function'&&o(),m!=null&&(k(m),b.style.display='block',document.body.style.overflow='hidden'),s=!0},v.exports={create:function(a){if(a.clientName==null)throw new Error('Missing clientName');if(a.env!=='development'&&a.env!=='tartan'&&a.env!=='production')throw new Error('Invalid env: env must be "tartan" or "production"');if(a.product!=='auth'&&a.product!=='connect')throw new Error('Invalid product: product must be "auth" or "connect"');if(a.key==null)throw new Error('Missing key');if(typeof a.onSuccess!=='function')throw new Error('Invalid onSuccess function');p=a.onExit,o=a.onLoad,q=a.onSuccess;var c=g.filter(t,function(b){return b[a.product]});return{institutions:c,open:function(c){if(c!=null){var d=g.find(t,function(a){return a.type===c});if(d!=null&&!d[a.product])throw new Error('"'+c+'" is not supported with "'+a.product+'". Use the "institutions" property of the Plaid Link handler to determine supported institution types.')}if(!s){m=g.merge({action:'open',institution:c,origin:h,useSandbox:a.key==='test_key'},a),typeof o==='function'&&console.error('Unable to open Plaid Link: wait until your onLoad function has been called before attempting to call .open() on your Plaid Link handler.');return}k({action:'open',clientName:a.clientName,env:a.env,institution:c,isPatch:a.token!=null,key:a.key,longTail:a.longTail===!0,origin:h,product:a.product,selectAccount:a.selectAccount===!0,token:a.token,useSandbox:a.key==='test_key',webhook:a.webhook}),b.style.display='block',document.body.style.overflow='hidden'}}}}}else{if(f==null)throw new Error('Uncaught Error: Specify a valid data-form-id');var r=c.getAttribute('data-client-name'),i=c.getAttribute('data-env'),n=c.getAttribute('data-key'),z=c.getAttribute('data-long-tail')==='true',j=c.getAttribute('data-product'),B=c.getAttribute('data-select-account')==='true',l=c.getAttribute('data-token'),A=c.getAttribute('data-webhook');if(r==null)throw new Error('Missing data-client-name');if(i!=='development'&&i!=='tartan'&&i!=='production')throw new Error('Invalid data-env: data-env must be "tartan" or "production"');if(n==null)throw new Error('Missing data-key');if(j!=='auth'&&j!=='connect')throw new Error('Invalid data-product: valid products are "auth" or "connect"');b.onload=function(){k({action:'open',clientName:r,env:i,isPatch:l!=null,key:n,longTail:z,origin:h,product:j,selectAccount:B,token:l,useSandbox:n==='test_key',webhook:A})},d=document.createElement('button'),d.disabled=!0,d.id='plaid-link-button',d.textContent=l!=null?'Relink your bank account':'Link your bank account',d.onclick=function(a){a.preventDefault(),b.style.display='block',document.body.style.overflow='hidden',k({action:'active'})},f.appendChild(d),q=function(d,c){for(var b in c){var a=document.createElement('input');a.type='hidden',a.name=b,f.appendChild(a),a.value=c[b]}f.submit()}}var y=/android|iemobile|iphone|ipod|windows phone/i.test(navigator.userAgent),w=/MSIE |Trident/i.test(navigator.userAgent);window.addEventListener('message',function(c){var a;try{a=JSON.parse(c.data)}catch(b){a={}}a.action==='exit'?(typeof p==='function'&&p(),b.style.display='none',document.body.style.overflow=null):a.action==='connected'?(q(a.metadata.public_token,a.metadata),b.style.display='none',document.body.style.overflow=null):a.action==='acknowledged'&&d!=null&&(d.disabled=!1)},!1)}),a.define('/lib/util.js',function(d,a,e,f){'use strict';function b(a){return('0'+a.toString(16)).slice(-2)}function c(a){return parseInt(a,16)}a.filter=function(b,e){var c=[],d=b.length,a;for(a=0;a<d;a+=1)e(b[a])&&c.push(b[a]);return c},a.find=function(b,d){var c=b.length,a;for(a=0;a<c;a+=1)if(d(b[a]))return b[a]},a.fromPairs=function(b){var a={};return b.forEach(function(b){a[b[0]]=b[1]}),a},a.merge=function(c,d){var b={},a;for(a in c)b[a]=c[a];for(a in d)b[a]=d[a];return b},a.pipe=function(b){var a=function(b,d){var c=b[0],e=b.slice(1);switch(b.length){case 0:return undefined;case 1:return c(d);default:return a(e,c(d))}};return a.bind(this,b)},a.eq=function(a){return function(b){return b===a}},a.debounce=function(b,d,c){var a;return function(){var e=this,f=arguments,g=function(){a=null,c||b.apply(e,f)},h=c&&!a;clearTimeout(a),a=setTimeout(g,d),h&&b.apply(e,f)}},a.concat=function(a,b){return a.concat(b)},a.addClassName=function(c,d){var b=d.className.split(' ');b.indexOf(c)<0&&(d.className=a.concat(b,[c]).join(' '))},a.removeClassName=function(e,d){var b=d.className.split(' '),c=b.indexOf(e);c>=0&&(d.className=a.concat(b.slice(0,c),b.slice(c+1)).join(' '))},a.toggleClassName=function(b,c,d){(d?a.addClassName:a.removeClassName)(b,c)},a.rgb=function(a,c,d){return'#'+b(a)+b(c)+b(d)},a.rgba=function(a,b,c,d){return'rgba('+a+', '+b+', '+c+', '+d+')'},a.rgbaFromHexAlpha=function(b,d){return b.match(/^rgba\(/i)?b:a.rgba.apply(null,b.match(/[0-9A-F]{2}/gi).map(c).concat(d))},a.parseRgbaString=function(a){return a.split('(')[1].split(')')[0].split(',',3)},a.toPX=function(a){return a.toString()+'px'}}),b.Plaid=a('/lib/link-initialize.js')}.call(this,this))
//# sourceMappingURL=link-initialize.js.map