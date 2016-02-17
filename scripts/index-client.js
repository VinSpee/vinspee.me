// all md files as JSON + generate collections
require.context('../content', true, /\.md$/);

// ---

import 'whatwg-fetch';
import statinamicClient from 'statinamic/lib/client';

import * as layouts from 'layouts';
import metadata from 'app/metadata';
import routes from 'app/routes';
import store from 'app/store';

statinamicClient({
	layouts,
	metadata,
	routes,
	store,
});

/* eslint-disable */
try{!function(t,e,n,r,a,s,i,l){n&&(s=n[r],s&&(i=t.createElement("style"),i.innerHTML=s,t.getElementsByTagName("head")[0].appendChild(i)),l=e.setAttribute,e.setAttribute=function(t,p,u,c){"string"==typeof p&&p.indexOf(a)>-1&&(u=new XMLHttpRequest,u.open("GET",p,!0),u.onreadystatechange=function(){if(4===u.readyState){c=u.responseText.replace(/url\(\//g,"url("+a+"/");try{c!==s&&(n[r]=c)}catch(t){s&&(s=i.innerHTML="")}}},u.send(null),e.setAttribute=l,s)||l.apply(this,arguments)})}(document,Element.prototype,localStorage,"tk","https://use.typekit.net")}catch(x){}
/* eslint-enable */
