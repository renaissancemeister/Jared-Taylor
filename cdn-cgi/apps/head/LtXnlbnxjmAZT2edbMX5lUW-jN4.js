;window.CloudflareApps=window.Eager=window.CloudflareApps||window.Eager||{};window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="0bd65b83ad45de9e3219d9c597685476";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){CloudflareApps.internal=CloudflareApps.internal||{};var errors=[];CloudflareApps.internal.placementErrors=errors;var errorHashes={}
var noteError=function(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'');if(errorHashes[hash])
return;errorHashes[hash]=true;errors.push(options);}
var initializedSelectors={};var currentInit=false;CloudflareApps.internal.markSelectors=function(){if(!currentInit){check();currentInit=true;setTimeout(function(){currentInit=false;});}}
var check=function(){var installs=window.CloudflareApps.installs;for(var installId in installs){if(!installs.hasOwnProperty(installId))
continue;var selectors=installs[installId].selectors;if(!selectors)
continue;for(var key in selectors){if(!selectors.hasOwnProperty(key))
continue;var hash=installId+"::"+key;if(initializedSelectors[hash])
continue;var els=document.querySelectorAll(selectors[key]);if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId});initializedSelectors[hash]=true;continue;}else if(!els||!els.length){continue;}
initializedSelectors[hash]=true;els[0].setAttribute('cfapps-selector',selectors[key]);}}}
CloudflareApps.querySelector=function(selector){if(selector==='body'||selector==='head'){return document[selector];}
CloudflareApps.internal.markSelectors();var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]');if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector});els=document.querySelectorAll(selector);if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector});return null;}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector});}
return els[0];}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector});}
return els[0];}})();;(function(){var prevEls={};CloudflareApps.createElement=function(options,prevEl){CloudflareApps.internal.markSelectors();try{if(prevEl&&prevEl.parentNode){var replacedEl;if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId];}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl);delete prevEls[prevEl.cfAppsElementId];}else{prevEl.parentNode.removeChild(prevEl);}}
var element=document.createElement('cloudflare-app');var container;try{container=CloudflareApps.querySelector(options.selector);}catch(e){}
if(!container){return element;}
if(!container.parentNode&&(options.method=="after"||options.method=="before"||options.method=="replace")){return element;}
if(container==document.body){if(options.method=="after")
options.method="append";else if(options.method=="before")
options.method="prepend";}
switch(options.method){case"prepend":if(container.firstChild){container.insertBefore(element,container.firstChild);break;}
case"append":container.appendChild(element);break;case"after":if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling);}else{container.parentNode.appendChild(element);}
break;case"before":container.parentNode.insertBefore(element,container);break;case"replace":try{id=element.cfAppsElementId=Math.random().toString(36);prevEls[id]=container;}catch(e){}
container.parentNode.replaceChild(element,container);}
return element;}catch(e){if(typeof console!=="undefined"&&typeof console.error!=="undefined"){console.error("Error creating Cloudflare Apps element",e);}}}})();;(function(){CloudflareApps.matchPage=function(patterns){if(!patterns||!patterns.length){return true;}
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed;var loc=url.host+url.path;}else{var loc=document.location.host+document.location.pathname;}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i');if(re.test(loc)){return true;}}
return false;}})();;CloudflareApps.installs["Gb9rAUYQKdoX"]={appId:"ZCDIXCYkgZ6P",scope:{}};;CloudflareApps.installs["Gb9rAUYQKdoX"].options={"color":"#585858","showLink":false,"text":""};;CloudflareApps.installs["cYcTSkSpOwIM"]={appId:"lMxPPXVOqmoE",scope:{}};;CloudflareApps.installs["cYcTSkSpOwIM"].options={"id":"UA-2642027-2","social":true};;if(CloudflareApps.matchPage(CloudflareApps.installs['Gb9rAUYQKdoX'].URLPatterns)){(function(){if(!window.addEventListener||!document.documentElement.setAttribute||!document.querySelector||!document.documentElement.classList||!window.localStorage){return}
var options=CloudflareApps.installs['Gb9rAUYQKdoX'].options;var isPreview="Gb9rAUYQKdoX"=='preview';var optionsString=JSON.stringify(options);if(!isPreview&&localStorage.welcomeBarShownWithOptions===optionsString){return;}
var setOptions=function(opts){options=opts;update();};var update=function(){updateColors();updateCopy();setPageStyles();};var colorStyle=document.createElement('style');document.head.appendChild(colorStyle);var updateColors=function(){colorStyle.innerHTML=''+'.cfapps-welcome-bar {'+'background: '+options.color+' !important'+'}'+'.cfapps-welcome-bar .cfapps-welcome-bar-button {'+'color: '+options.color+' !important'+'}'+'';};var el=document.createElement('cfapps-welcome-bar');el.addEventListener('touchstart',function(){},false);el.className='cfapps-welcome-bar';var updateCopy=function(){el.innerHTML=''+'<div class="cfapps-welcome-bar-close-button"></div>'+'<div class="cfapps-welcome-bar-content">'+'<div class="cfapps-welcome-bar-text"></div>'+'<div class="cfapps-welcome-bar-content-inner">'+'<a target="_blank" class="cfapps-welcome-bar-link">'+'<button class="cfapps-welcome-bar-button"></button>'+'</a>'+'</div>'+'</div>'+'';var textEl=el.querySelector('.cfapps-welcome-bar-text')
textEl.innerHTML=options.text||' ';var buttonEl=el.querySelector('.cfapps-welcome-bar-button')
buttonEl.innerHTML=options.buttonText||'&nbsp;';var linkEl;linkEl=el.querySelector('.cfapps-welcome-bar-link')
linkEl.setAttribute('href',options.linkAddress);el.querySelector('.cfapps-welcome-bar-close-button').addEventListener('click',hide);linkEl.addEventListener('click',hide);if(!options.showLink){el.setAttribute('with-hidden-link','')}else{el.removeAttribute('with-hidden-link')}}
var htmlStyle=document.createElement('style');document.head.appendChild(htmlStyle);var show=function(){document.documentElement.setAttribute('cfapps-welcome-bar-show','true');if(!htmlStyle.parentNode){document.head.appendChild(htmlStyle);}};show();var isShown=function(){return document.documentElement.getAttribute('cfapps-welcome-bar-show')==='true';};var hide=function(){document.documentElement.setAttribute('cfapps-welcome-bar-show','false');document.head.removeChild(htmlStyle);try{localStorage.welcomeBarShownWithOptions=optionsString;}catch(e){}
setPageStyles();};var setPageStyles=function(){setHTMlStyle();setFixedElementStyles();};var documentElementOriginallyPositionStatic=getComputedStyle(document.documentElement).position==='static';var setHTMlStyle=function(){if(!document.body)return;var style='';if(documentElementOriginallyPositionStatic&&isShown()){var positionStyle='';style=''+'html {'+'position: relative;'+'top: '+el.clientHeight+'px'+'}'+'';}
htmlStyle.innerHTML=style;};var setFixedElementStyles=function(){var removeTopStyle=function(node){if(!node.getAttribute('style'))return;node.setAttribute('style',node.getAttribute('style').replace(/top[^;]+;?/g,''));};var elHeight=el.clientHeight;var allNodes=document.querySelectorAll('*:not(.cfapps-welcome-bar):not([data-cfapps-welcome-bar-adjusted-fixed-element-original-top])');Array.prototype.forEach.call(allNodes,function(node){var computedStyle=getComputedStyle(node);var boundingClientRect=node.getBoundingClientRect();var isSticky=computedStyle.position==='sticky';var isFixed=computedStyle.position==='fixed';var isBottomFixed=computedStyle.bottom==='0px'&&boundingClientRect.bottom===window.innerHeight&&boundingClientRect.top>=elHeight;if((isFixed||isSticky)&&!isBottomFixed){var top=boundingClientRect.top;var styleTop=parseInt(computedStyle.top,10);if(isSticky||(top===styleTop&&top<=elHeight)){node.setAttribute('data-cfapps-welcome-bar-adjusted-fixed-element-original-top',top);}}});var adjustedNodes=document.querySelectorAll('[data-cfapps-welcome-bar-adjusted-fixed-element-original-top]');Array.prototype.forEach.call(adjustedNodes,function(node){removeTopStyle(node);var computedStyle=getComputedStyle(node);var isFixedOrSticky=computedStyle.position==='fixed'||computedStyle.position==='sticky';if(isFixedOrSticky&&isShown()&&elHeight>0){var newTop=(parseInt(computedStyle.top,10)||0)+elHeight;node.style.top=newTop+'px';}});};window.addEventListener('resize',setPageStyles);document.addEventListener('DOMContentLoaded',function(){document.body.appendChild(el);update();setTimeout(setPageStyles,0);});window.CloudflareWelcomeBar={setOptions:setOptions,show:show,hide:hide};})();};if(CloudflareApps.matchPage(CloudflareApps.installs['cYcTSkSpOwIM'].URLPatterns)){(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');};if(CloudflareApps.matchPage(CloudflareApps.installs['cYcTSkSpOwIM'].URLPatterns)){(function(){var options=CloudflareApps.installs['cYcTSkSpOwIM'].options
if(!options.id)return
window.ga('create',options.id,'auto')
window.ga('send','pageview')
if(options.social){(function(b){(function(a){"__CF"in b&&"DJS"in b.__CF?b.__CF.DJS.push(a):"addEventListener"in b?b.addEventListener("load",a,!1):b.attachEvent("onload",a)})(function(){"FB"in b&&"Event"in FB&&"subscribe"in FB.Event&&(FB.Event.subscribe("edge.create",function(a){_gaq.push(["_trackSocial","facebook","like",a])}),FB.Event.subscribe("edge.remove",function(a){_gaq.push(["_trackSocial","facebook","unlike",a])}),FB.Event.subscribe("message.send",function(a){_gaq.push(["_trackSocial","facebook","send",a])}));"twttr"in b&&"events"in twttr&&"bind"in twttr.events&&twttr.events.bind("tweet",function(a){if(a){var b;if(a.target&&a.target.nodeName=="IFRAME")a:{if(a=a.target.src){a=a.split("#")[0].match(/[^?=&]+=([^&]*)?/g);b=0;for(var c;c=a[b];++b)if(c.indexOf("url")===0){b=unescape(c.split("=")[1]);break a}}b=void 0}_gaq.push(["_trackSocial","twitter","tweet",b])}})})})(window);}}())};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,LmNmYXBwcy13ZWxjb21lLWJhciB7CiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7CiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50OwogIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkOwogIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7CiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsKICAtbW96LXVzZXItc2VsZWN0OiBub25lOwogIC1tcy11c2VyLXNlbGVjdDogbm9uZTsKICB1c2VyLXNlbGVjdDogbm9uZQp9CgouY2ZhcHBzLXdlbGNvbWUtYmFyOmJlZm9yZSwgLmNmYXBwcy13ZWxjb21lLWJhcjphZnRlciwgLmNmYXBwcy13ZWxjb21lLWJhciAqLCAuY2ZhcHBzLXdlbGNvbWUtYmFyICo6YmVmb3JlLCAuY2ZhcHBzLXdlbGNvbWUtYmFyICo6YWZ0ZXIgewogIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7CiAgbGluZS1oZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50OwogIGJveC1zaXppbmc6IGluaGVyaXQgIWltcG9ydGFudAp9CgouY2ZhcHBzLXdlbGNvbWUtYmFyIDo6LW1vei1zZWxlY3Rpb24gewogIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjQpICFpbXBvcnRhbnQ7CiAgY29sb3I6ICNmZmYgIWltcG9ydGFudAp9CgouY2ZhcHBzLXdlbGNvbWUtYmFyIDo6c2VsZWN0aW9uIHsKICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC40KSAhaW1wb3J0YW50OwogIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQKfQoKLmNmYXBwcy13ZWxjb21lLWJhciwgLmNmYXBwcy13ZWxjb21lLWJhciAqIHsKICBmb250LWZhbWlseTogaW5oZXJpdCAhaW1wb3J0YW50OwogIGZvbnQtc2l6ZTogaW5oZXJpdCAhaW1wb3J0YW50OwogIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50OwogIGJvcmRlcjogMCAhaW1wb3J0YW50OwogIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDsKICBtYXJnaW46IDAgIWltcG9ydGFudDsKICBwYWRkaW5nOiAwICFpbXBvcnRhbnQKfQoKaHRtbCA+IGJvZHkgPiAuY2ZhcHBzLXdlbGNvbWUtYmFyIHsKICAvKgogICAgU3BlY2lmaWNpdHkgdG8gY29tYmF0IHRoaW5ncyBsaWtlIHRoaXMgKGZyb20gQ05OLmNvbSBhcyBvZiA2LzYvMTYpOgoKICAgIGJvZHkgPiA6bm90KC5uYXYpIHsKICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDsKICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7CiAgICB9CiAgKi8KICBwb3NpdGlvbjogZml4ZWQ7CiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsKICB6LWluZGV4OiAxODAwNDsKICB0b3A6IDA7CiAgbGVmdDogMDsKICByaWdodDogMDsKICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDsKICB3aWR0aDogMTAwJTsKICBtYXgtd2lkdGg6IDEwMCU7CiAgcGFkZGluZzogLjVlbSA1ZW0gIWltcG9ydGFudDsKICBjb2xvcjogI2ZmZjsKICBmb250LXdlaWdodDogYm9sZDsKICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsKICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTMwMCUsIDApICFpbXBvcnRhbnQ7CiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwJSwgMCkgIWltcG9ydGFudDsKICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDsKICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7CiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudAp9CgogIEBtZWRpYSAobWF4LXdpZHRoOiA0MGVtKSB7CiAgICBodG1sID4gYm9keSA+IC5jZmFwcHMtd2VsY29tZS1iYXIgewogICAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7CiAgICAgIHBhZGRpbmc6IDFlbSAyLjVlbSAxZW0gLjRlbSAhaW1wb3J0YW50CiAgICB9CiAgfQoKICBAbWVkaWEgKG1heC13aWR0aDogMTVlbSkgewogICAgaHRtbCA+IGJvZHkgPiAuY2ZhcHBzLXdlbGNvbWUtYmFyIHsKICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50CiAgICB9CiAgfQoKICBodG1sW2NmYXBwcy13ZWxjb21lLWJhci1zaG93PSJ0cnVlIl0gPiBib2R5ID4gLmNmYXBwcy13ZWxjb21lLWJhciB7CiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDsKICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDsKICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDsKICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDsKICAgIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDsKICB9CgogIC5jZmFwcHMtd2VsY29tZS1iYXItY2xvc2UtYnV0dG9uIHsKICAgIGN1cnNvcjogcG9pbnRlcjsKICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgIHotaW5kZXg6IDE4MDA1OwogICAgcmlnaHQ6IDA7CiAgICB0b3A6IDA7CiAgICBib3R0b206IDA7CiAgICB3aWR0aDogNGVtICFpbXBvcnRhbnQKICB9CgogICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwZW0pIHsKICAgICAgLmNmYXBwcy13ZWxjb21lLWJhci1jbG9zZS1idXR0b24gewogICAgICAgIHdpZHRoOiAyLjVlbSAhaW1wb3J0YW50CiAgICAgIH0KCiAgICAgIC5jZmFwcHMtd2VsY29tZS1iYXItY2xvc2UtYnV0dG9uOmJlZm9yZSB7CiAgICAgICAgbWFyZ2luLXRvcDogLjI1ZW0gIWltcG9ydGFudAogICAgICB9CiAgICB9CgogICAgLmNmYXBwcy13ZWxjb21lLWJhci1jbG9zZS1idXR0b246YmVmb3JlIHsKICAgICAgcG9zaXRpb246IGFic29sdXRlOwogICAgICBmb250LWZhbWlseTogIkhlbHZldGljYSBOZXVlIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsKICAgICAgY29udGVudDogIlwwMEQ3IjsKICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsKICAgICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDsKICAgICAgbGluZS1oZWlnaHQ6IC43NWVtICFpbXBvcnRhbnQ7CiAgICAgIGhlaWdodDogMWVtOwogICAgICB3aWR0aDogMWVtOwogICAgICB0b3A6IDA7CiAgICAgIHJpZ2h0OiAwOwogICAgICBsZWZ0OiAwOwogICAgICBib3R0b206IDA7CiAgICAgIG1hcmdpbjogYXV0bzsKICAgICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuMik7CiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7CiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lCiAgICB9CgogIC5jZmFwcHMtd2VsY29tZS1iYXItY2xvc2UtYnV0dG9uOmhvdmVyOmJlZm9yZSB7CiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNykKICB9CgogICAgLmNmYXBwcy13ZWxjb21lLWJhci10ZXh0IHsKICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7CiAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbSAhaW1wb3J0YW50OwogICAgICBtYXJnaW46IDAgLjZlbSAuNGVtIC42ZW0gIWltcG9ydGFudAogICAgfQoKICAgIC5jZmFwcHMtd2VsY29tZS1iYXJbd2l0aC1oaWRkZW4tbGlua10gLmNmYXBwcy13ZWxjb21lLWJhci10ZXh0IHsKICAgICAgbWFyZ2luLXRvcDogLjUyNWVtICFpbXBvcnRhbnQ7CiAgICAgIG1hcmdpbi1ib3R0b206IC41MjVlbSAhaW1wb3J0YW50CiAgICB9CgogICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwZW0pIHsKICAgICAgLmNmYXBwcy13ZWxjb21lLWJhclt3aXRoLWhpZGRlbi1saW5rXSAuY2ZhcHBzLXdlbGNvbWUtYmFyLXRleHQgewogICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDsKICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQKICAgICAgfQogICAgfQoKICAgIC5jZmFwcHMtd2VsY29tZS1iYXItY29udGVudC1pbm5lciB7CiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50OwogICAgICBtYXJnaW46IDAgLjVlbSAhaW1wb3J0YW50CiAgICB9CgogICAgQG1lZGlhIChtYXgtd2lkdGg6IDQwZW0pIHsKICAgICAgLmNmYXBwcy13ZWxjb21lLWJhci1jb250ZW50LWlubmVyIHsKICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50CiAgICAgIH0KICAgIH0KCiAgICAuY2ZhcHBzLXdlbGNvbWUtYmFyLWxpbmsgewogICAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudAogICAgfQoKICAgIC5jZmFwcHMtd2VsY29tZS1iYXJbd2l0aC1oaWRkZW4tbGlua10gLmNmYXBwcy13ZWxjb21lLWJhci1jb250ZW50LWlubmVyIHsKICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50CiAgICB9CgogICAgLmNmYXBwcy13ZWxjb21lLWJhciBidXR0b24uY2ZhcHBzLXdlbGNvbWUtYmFyLWJ1dHRvbiB7CiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50OwogICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsKICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lICFpbXBvcnRhbnQ7CiAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50OwogICAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsKICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDsKICAgICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50OwogICAgICBwYWRkaW5nOiAuNjVlbSAxLjZlbSAuNmVtIC45ZW0gIWltcG9ydGFudDsKICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7CiAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50OwogICAgICBib3JkZXItcmFkaXVzOiAuMTg3NWVtOwogICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OwogICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7CiAgICAgIGxldHRlci1zcGFjaW5nOiAuMDhlbTsKICAgICAgdGV4dC1pbmRlbnQ6IC4wOGVtOwogICAgICBmb250LXNpemU6IC45ZW0gIWltcG9ydGFudDsKICAgICAgb3BhY2l0eTogLjg1OwogICAgICBtYXgtd2lkdGg6IDE2ZW0gIWltcG9ydGFudDsKICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50OwogICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7CiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsKICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXMgIWltcG9ydGFudAogICAgfQoKICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MGVtKSB7CiAgICAgIC5jZmFwcHMtd2VsY29tZS1iYXItYnV0dG9uIHsKICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNmVtICFpbXBvcnRhbnQ7CiAgICAgICAgcGFkZGluZy1yaWdodDogMS42ZW0gIWltcG9ydGFudDsKICAgICAgICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDsKICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50CiAgICAgIH0KICAgIH0KCiAgICBAZm9udC1mYWNlIHsKICAgICAgZm9udC1mYW1pbHk6ICJjZmFwcHMtd2VsY29tZS1iYXItaWNvbnMiOwogICAgICBmb250LXN0eWxlOiBub3JtYWw7CiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7CiAgICAgIHNyYzogdXJsKGRhdGE6YXBwbGljYXRpb24veC1mb250LXdvZmY7Y2hhcnNldD11dGYtODtiYXNlNjQsZDA5R1JrOVVWRThBQUFPZ0FBb0FBQUFBQlh3QUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJEUmtZZ0FBQUE5QUFBQU1BQUFBRFJLamNwVDBaR1ZFMEFBQUcwQUFBQUdnQUFBQnh6Q2MyZVQxTXZNZ0FBQWRBQUFBQklBQUFBWUlES0JTbGpiV0Z3QUFBQ0dBQUFBRGNBQUFGQ0FBMGk0V2hsWVdRQUFBSlFBQUFBTHdBQUFEWUR0dFlXYUdobFlRQUFBb0FBQUFBZ0FBQUFKQWF0QWVob2JYUjRBQUFDb0FBQUFBZ0FBQUFJQS9vQUFHMWhlSEFBQUFLb0FBQUFCZ0FBQUFZQUFsQUFibUZ0WlFBQUFyQUFBQURZQUFBQnNFbkJCMXB3YjNOMEFBQURpQUFBQUJZQUFBQWcvNTBBWjNpY1kyUmdZV0ZnWkdUa1NVMU1UeTNTelV6T3p5dG1ZR1JpWUdSdy9DSEQ5RU9XK1ljRVN3OFBZd1FQODBjZUZqa3VCcFlPRGZudWJqaURoNzI3NU1la1h4MnNNZ3hkL0RJTURBSXlETDJDTWd3Y01nd25oUmlZUWNid01rZ3dLQmRscG1lVUpHZWtsaFhsNXlGWmhHd25Bd05qT3dNVEk2T0NlZmZIWHp3ZkdUOSsvUENSK2FQWTk2Ty9idncreXZieFg1SG9MNTRQLzNqWStYNU0rdEVpK2lmOHg0eUFpQjlhZjFML0FQR3hVRmErSHhORnVrVzdlYmdBT2taR28zaWNZMkJnWUdRQWdnc0ZEb2tnK3FMUHNYa3dHZ0JFWWdibEFBQjRuR05nWnZ6TE9JR0JsWUdEMVpoMUpnTURveHlFWnI3T2tNWWt4QUFFckF3UTBNQ0FDZ0xTWEZNWUhCU3NGS3pZMHY2bE1leGcvc0lnRGhSbWhDdFFBRUpHQUVROUMyOTRuR05nWUdCbWdHQVpCa1lHRUxBQjhoakJmQllHQlNETkFvUkF2b0xWLy84UTh2NXhxRW9HUmpZR0dITjRBaUk4QndDWTRnY05BSGljWTJCa1lHQUE0aTNQNzJySDg5dDhaZURtWUFDQml6N0g1aUhvL3k4Wi96Ri9BWEk1R0poQW9nQnFkdzFDQUhpY1kyQmtZR0QrOHY4bHd3N0d2d3dNLy84ei9tTUFpcUFBSmdEQWh3ZVhBZjBBQUFIOUFBQUFBRkFBQUFJQUFIaWNqWSs5RGNJd0VJVmZJRUhpUjVTSTBnVVNsU003QWdvR29LU2tSOGlLMHNTU3d3eU13QmlNd1FDTXdRRFVQSnNyS0Npd2RQWjNkKzkrREdDQ0t6TEVrMkdNdVhBUEJZeHdIMHRjaEhOcTdzSUYrU2s4d0RpYlVwbmxRMFptcVNweUR5TXNoUHZZWXlPY1UzTVRMc2dQNFFINUJZY2phdDRCR2cxTzhHalJBZTVZdTZDYmsyL3BmTVVsc2t2K09iMGgxU3RVS1BrUGhTM3RkOWRQemxLbHNhSlZKSXMxMi9uMnZQT2hkcW9xamRxcXIrbjByTkVyWFJsTDRUL2JIbEsrWXo1bTQ3eTRGdzR1ZEkxdmxTM05YMzNlRWhCRE1uaWNZMkJtQUlQL3N4alNnQlFqQXhvQUFDNnFBZ1FBQUE9PSkgZm9ybWF0KCJ3b2ZmIik7CiAgICB9CgogICAgLmNmYXBwcy13ZWxjb21lLWJhci1idXR0b246YWZ0ZXIgewogICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDsKICAgICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7CiAgICAgIHRvcDogMCAhaW1wb3J0YW50OwogICAgICBib3R0b206IDAgIWltcG9ydGFudDsKICAgICAgbWFyZ2luLXRvcDogYXV0byAhaW1wb3J0YW50OwogICAgICBtYXJnaW4tYm90dG9tOiBhdXRvICFpbXBvcnRhbnQ7CiAgICAgIHJpZ2h0OiAuNzVlbSAhaW1wb3J0YW50OwogICAgICBmb250LWZhbWlseTogImNmYXBwcy13ZWxjb21lLWJhci1pY29ucyI7CiAgICAgIGNvbnRlbnQ6ICJcMjAzQSI7CiAgICAgIHBhZGRpbmctbGVmdDogLjNlbSAhaW1wb3J0YW50OwogICAgICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50OwogICAgICBmb250LXN0eWxlOiBub3JtYWw7CiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0OwogICAgICBmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7CiAgICAgIGhlaWdodDogMS4wNWVtICFpbXBvcnRhbnQ7CiAgICAgIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQKICAgIH0KCiAgICAuY2ZhcHBzLXdlbGNvbWUtYmFyLWJ1dHRvbltkaXNhYmxlZF0gewogICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkCiAgICB9CgogICAgLmNmYXBwcy13ZWxjb21lLWJhci1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyIHsKICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OwogICAgICBvcGFjaXR5OiAxCiAgICB9CgogICAgLmNmYXBwcy13ZWxjb21lLWJhci1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyOmFjdGl2ZSB7CiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsKICAgICAgb3BhY2l0eTogLjcKICAgIH0KCiAgICAuY2ZhcHBzLXdlbGNvbWUtYmFyLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6Zm9jdXM6YmVmb3JlIHsKICAgICAgY29udGVudDogIiI7CiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsKICAgICAgdG9wOiAycHg7CiAgICAgIHJpZ2h0OiAycHg7CiAgICAgIGJvdHRvbTogMnB4OwogICAgICBsZWZ0OiAycHg7CiAgICAgIGJvcmRlci1yYWRpdXM6IC4xZW07CiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCAjZmZmOwogICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsKICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZS1pbi1vdXQKICAgIH0KCiAgICAuY2ZhcHBzLXdlbGNvbWUtYmFyLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6Zm9jdXM6YWN0aXZlOmJlZm9yZSB7CiAgICAgIG9wYWNpdHk6IDAKICAgIH0KCiAgLmNmYXBwcy13ZWxjb21lLWJhci1icmFuZGluZyB7CiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDsKICAgIGxlZnQ6IDA7CiAgICBwYWRkaW5nOiAwIDEuNWVtICFpbXBvcnRhbnQ7CiAgICBmb250LXNpemU6IC43NWVtICFpbXBvcnRhbnQ7CiAgICBoZWlnaHQ6IDEuMjVlbTsKICAgIHRvcDogMDsKICAgIGJvdHRvbTogMDsKICAgIG1hcmdpbi10b3A6IGF1dG8gIWltcG9ydGFudDsKICAgIG1hcmdpbi1ib3R0b206IGF1dG8gIWltcG9ydGFudAogIH0KCiAgICBAbWVkaWEgKG1heC13aWR0aDogNDBlbSkgewogICAgICAuY2ZhcHBzLXdlbGNvbWUtYmFyLWJyYW5kaW5nIHsKICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDsKICAgICAgICB0b3A6IC40ZW0gIWltcG9ydGFudDsKICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsKICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDsKICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQKICAgICAgfQogICAgfQoKICAgIGEuY2ZhcHBzLXdlbGNvbWUtYmFyLWJyYW5kaW5nLWxpbmsgewogICAgICBjb2xvcjogaW5oZXJpdDsKICAgICAgb3BhY2l0eTogLjQKICAgIH0KCiAgICAgIGEuY2ZhcHBzLXdlbGNvbWUtYmFyLWJyYW5kaW5nLWxpbms6aG92ZXIgewogICAgICAgIG9wYWNpdHk6IC44CiAgICAgIH0K';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();