import{c as tE,a as eE,C as $s,d as Qm,M as nE,b as iE,D as mt,m as sE,e as jn,K as Gw,f as ji,g as ou,p as rE,h as oE,t as au,r as wp,i as aE,q as aa,s as cE,j as lE,k as uE,l as $w,n as Eh,o as dd,u as fd,v as hE,H as Sn,w as dE,x as fE,y as sx,z as rx,A as ox,B as pE,E as pd,F as mE,G as gE,I as xE,J as _E,L as ax,N as yE,O as vE,P as ME,Q as wE,R as cx}from"./index-7OIQ0tHg.js";const Th="185",Vw=0,Sp=1,Ww=2,Jo=1,tg=2,io=3,Es=0,Jn=1,_e=2,Yi=0,fr=1,mn=2,bp=3,Ep=4,Xw=5,ks=100,Yw=101,qw=102,Zw=103,Kw=104,jw=200,Jw=201,Qw=202,t2=203,cu=204,lu=205,e2=206,n2=207,i2=208,s2=209,r2=210,o2=211,a2=212,c2=213,l2=214,uu=0,hu=1,du=2,xr=3,fu=4,pu=5,mu=6,gu=7,eg=0,u2=1,h2=2,qi=0,Rh=1,Ah=2,Ch=3,Ga=4,Ph=5,Ih=6,zh=7,ng=300,Xs=301,_r=302,Zc=303,Kc=304,$a=306,xu=1e3,os=1001,_u=1002,Nn=1003,d2=1004,Yo=1005,Gn=1006,jc=1007,Fs=1008,gi=1009,ig=1010,sg=1011,fo=1012,Dh=1013,Zi=1014,Di=1015,xi=1016,Lh=1017,Nh=1018,po=1020,rg=35902,og=35899,ag=1021,cg=1022,Li=1023,as=1026,Bs=1027,Uh=1028,Oh=1029,Ys=1030,kh=1031,Fh=1033,Qo=33776,ta=33777,ea=33778,na=33779,yu=35840,vu=35841,Mu=35842,wu=35843,Su=36196,bu=37492,Eu=37496,Tu=37488,Ru=37489,ca=37490,Au=37491,Cu=37808,Pu=37809,Iu=37810,zu=37811,Du=37812,Lu=37813,Nu=37814,Uu=37815,Ou=37816,ku=37817,Fu=37818,Bu=37819,Hu=37820,Gu=37821,$u=36492,Vu=36494,Wu=36495,Xu=36283,Yu=36284,la=36285,qu=36286,f2=3200,Zu=0,p2=1,Ms="",si="srgb",ua="srgb-linear",ha="linear",Ze="srgb",rr=7680,Tp=519,m2=512,g2=513,x2=514,Bh=515,_2=516,y2=517,Hh=518,v2=519,Ku=35044,Rp="300 es",Xi=2e3,mo=2001;function SE(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function M2(){const n=da("canvas");return n.style.display="block",n}const lx={};function fa(...n){const t="THREE."+n.shift();console.log(t,...n)}function w2(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function de(...n){n=w2(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function De(...n){n=w2(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function pr(...n){const t=n.join(" ");t in lx||(lx[t]=!0,de(...n))}function bE(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const EE={[uu]:hu,[du]:mu,[fu]:gu,[xr]:pu,[hu]:uu,[mu]:du,[gu]:fu,[pu]:xr};class qs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],md=Math.PI/180,Ap=180/Math.PI;function Vs(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yn[n&255]+Yn[n>>8&255]+Yn[n>>16&255]+Yn[n>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[e&63|128]+Yn[e>>8&255]+"-"+Yn[e>>16&255]+Yn[e>>24&255]+Yn[i&255]+Yn[i>>8&255]+Yn[i>>16&255]+Yn[i>>24&255]).toLowerCase()}function Ie(n,t,e){return Math.max(t,Math.min(e,n))}function TE(n,t){return(n%t+t)%t}function gd(n,t,e){return(1-e)*n+e*t}function rs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ho;let xt=(ho=class{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ho.prototype.isVector2=!0,ho);class vr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],x=r[o+2],v=r[o+3];if(d!==v||c!==u||l!==f||h!==x){let m=c*u+l*f+h*x+d*v;m<0&&(u=-u,f=-f,x=-x,v=-v,m=-m);let p=1-a;if(m<.9995){const w=Math.acos(m),S=Math.sin(w);p=Math.sin(p*w)/S,a=Math.sin(a*w)/S,c=c*p+u*a,l=l*p+f*a,h=h*p+x*a,d=d*p+v*a}else{c=c*p+u*a,l=l*p+f*a,h=h*p+x*a,d=d*p+v*a;const w=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=w,l*=w,h*=w,d*=w}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[o],u=r[o+1],f=r[o+2],x=r[o+3];return t[e]=a*x+h*d+c*f-l*u,t[e+1]=c*x+h*u+l*d-a*f,t[e+2]=l*x+h*f+a*u-c*d,t[e+3]=h*x-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),d=a(r/2),u=c(i/2),f=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"YXZ":this._x=u*h*d+l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"ZXY":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d-u*f*x;break;case"ZYX":this._x=u*h*d-l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d+u*f*x;break;case"YZX":this._x=u*h*d+l*f*x,this._y=l*f*d+u*h*x,this._z=l*h*x-u*f*d,this._w=l*h*d-u*f*x;break;case"XZY":this._x=u*h*d-l*f*x,this._y=l*f*d-u*h*x,this._z=l*h*x+u*f*d,this._w=l*h*d+u*f*x;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){const l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kg=class Kg{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ux.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ux.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+c*l+o*d-a*h,this.y=i+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this.z=Ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this.z=Ie(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return xd.copy(this).projectOnVector(t),this.sub(xd)}reflect(t){return this.sub(xd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kg.prototype.isVector3=!0;let B=Kg;const xd=new B,ux=new vr,jg=class jg{constructor(t,e,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],x=i[8],v=s[0],m=s[3],p=s[6],w=s[1],S=s[4],g=s[7],M=s[2],y=s[5],R=s[8];return r[0]=o*v+a*w+c*M,r[3]=o*m+a*S+c*y,r[6]=o*p+a*g+c*R,r[1]=l*v+h*w+d*M,r[4]=l*m+h*S+d*y,r[7]=l*p+h*g+d*R,r[2]=u*v+f*w+x*M,r[5]=u*m+f*S+x*y,r[8]=u*p+f*g+x*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,x=e*d+i*u+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return t[0]=d*v,t[1]=(s*l-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_d.makeScale(t,e)),this}rotate(t){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_d.makeRotation(-t)),this}translate(t,e){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_d.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};jg.prototype.isMatrix3=!0;let xe=jg;const _d=new xe,hx=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dx=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RE(){const n={enabled:!0,workingColorSpace:ua,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ze&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ze&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ms?ha:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ua]:{primaries:t,whitePoint:i,transfer:ha,toXYZ:hx,fromXYZ:dx,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:i,transfer:Ze,toXYZ:hx,fromXYZ:dx,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),n}const Pe=RE();function bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Tr;class S2{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Tr===void 0&&(Tr=da("canvas")),Tr.width=t.width,Tr.height=t.height;const s=Tr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Tr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=da("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bs(e[i]/255)*255):e[i]=bs(e[i]);return{data:e,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let AE=0;class Gh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Vs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(yd(s[o].image)):r.push(yd(s[o]))}else r=yd(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function yd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?S2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let CE=0;const vd=new B;class On extends qs{constructor(t=On.DEFAULT_IMAGE,e=On.DEFAULT_MAPPING,i=os,s=os,r=Gn,o=Fs,a=Li,c=gi,l=On.DEFAULT_ANISOTROPY,h=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Vs(),this.name="",this.source=new Gh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(vd).x}get height(){return this.source.getSize(vd).y}get depth(){return this.source.getSize(vd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){de(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){de(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ng)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case xu:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case _u:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case xu:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case _u:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=ng;On.DEFAULT_ANISOTROPY=1;const Jg=class Jg{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],x=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(x+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,g=(f+1)/2,M=(p+1)/2,y=(h+u)/4,R=(d+v)/4,_=(x+m)/4;return S>g&&S>M?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=y/i,r=R/i):g>M?g<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(g),i=y/s,r=_/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=R/r,s=_/r),this.set(i,s,r,e),this}let w=Math.sqrt((m-x)*(m-x)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-x)/w,this.y=(d-v)/w,this.z=(u-h)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ie(this.x,t.x,e.x),this.y=Ie(this.y,t.y,e.y),this.z=Ie(this.z,t.z,e.z),this.w=Ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ie(this.x,t,e),this.y=Ie(this.y,t,e),this.z=Ie(this.z,t,e),this.w=Ie(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jg.prototype.isVector4=!0;let pn=Jg;class b2 extends qs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new pn(0,0,t,e),this.scissorTest=!1,this.viewport=new pn(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new On(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Gh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends b2{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class lg extends On{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class E2 extends On{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const bh=class bh{constructor(t,e,i,s,r,o,a,c,l,h,d,u,f,x,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,d,u,f,x,v,m)}set(t,e,i,s,r,o,a,c,l,h,d,u,f,x,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=x,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bh().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/Rr.setFromMatrixColumn(t,0).length(),r=1/Rr.setFromMatrixColumn(t,1).length(),o=1/Rr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,f=o*d,x=a*h,v=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+x*l,e[5]=u-v*l,e[9]=-a*c,e[2]=v-u*l,e[6]=x+f*l,e[10]=o*c}else if(t.order==="YXZ"){const u=c*h,f=c*d,x=l*h,v=l*d;e[0]=u+v*a,e[4]=x*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-x,e[6]=v+u*a,e[10]=o*c}else if(t.order==="ZXY"){const u=c*h,f=c*d,x=l*h,v=l*d;e[0]=u-v*a,e[4]=-o*d,e[8]=x+f*a,e[1]=f+x*a,e[5]=o*h,e[9]=v-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const u=o*h,f=o*d,x=a*h,v=a*d;e[0]=c*h,e[4]=x*l-f,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=f*l-x,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const u=o*c,f=o*l,x=a*c,v=a*l;e[0]=c*h,e[4]=v-u*d,e[8]=x*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+x,e[10]=u-v*d}else if(t.order==="XZY"){const u=o*c,f=o*l,x=a*c,v=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=o*h,e[9]=f*d-x,e[2]=x*d-f,e[6]=a*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PE,t,IE)}lookAt(t,e,i){const s=this.elements;return wi.subVectors(t,e),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),As.crossVectors(i,wi),As.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),As.crossVectors(i,wi)),As.normalize(),qa.crossVectors(wi,As),s[0]=As.x,s[4]=qa.x,s[8]=wi.x,s[1]=As.y,s[5]=qa.y,s[9]=wi.y,s[2]=As.z,s[6]=qa.z,s[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],x=i[2],v=i[6],m=i[10],p=i[14],w=i[3],S=i[7],g=i[11],M=i[15],y=s[0],R=s[4],_=s[8],b=s[12],A=s[1],C=s[5],E=s[9],U=s[13],k=s[2],O=s[6],V=s[10],W=s[14],Y=s[3],tt=s[7],q=s[11],ht=s[15];return r[0]=o*y+a*A+c*k+l*Y,r[4]=o*R+a*C+c*O+l*tt,r[8]=o*_+a*E+c*V+l*q,r[12]=o*b+a*U+c*W+l*ht,r[1]=h*y+d*A+u*k+f*Y,r[5]=h*R+d*C+u*O+f*tt,r[9]=h*_+d*E+u*V+f*q,r[13]=h*b+d*U+u*W+f*ht,r[2]=x*y+v*A+m*k+p*Y,r[6]=x*R+v*C+m*O+p*tt,r[10]=x*_+v*E+m*V+p*q,r[14]=x*b+v*U+m*W+p*ht,r[3]=w*y+S*A+g*k+M*Y,r[7]=w*R+S*C+g*O+M*tt,r[11]=w*_+S*E+g*V+M*q,r[15]=w*b+S*U+g*W+M*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],x=t[3],v=t[7],m=t[11],p=t[15],w=c*f-l*u,S=a*f-l*d,g=a*u-c*d,M=o*f-l*h,y=o*u-c*h,R=o*d-a*h;return e*(v*w-m*S+p*g)-i*(x*w-m*M+p*y)+s*(x*S-v*M+p*R)-r*(x*g-v*y+m*R)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-i*(r*h-a*c)+s*(r*l-o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],x=t[12],v=t[13],m=t[14],p=t[15],w=e*a-i*o,S=e*c-s*o,g=e*l-r*o,M=i*c-s*a,y=i*l-r*a,R=s*l-r*c,_=h*v-d*x,b=h*m-u*x,A=h*p-f*x,C=d*m-u*v,E=d*p-f*v,U=u*p-f*m,k=w*U-S*E+g*C+M*A-y*b+R*_;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/k;return t[0]=(a*U-c*E+l*C)*O,t[1]=(s*E-i*U-r*C)*O,t[2]=(v*R-m*y+p*M)*O,t[3]=(u*y-d*R-f*M)*O,t[4]=(c*A-o*U-l*b)*O,t[5]=(e*U-s*A+r*b)*O,t[6]=(m*g-x*R-p*S)*O,t[7]=(h*R-u*g+f*S)*O,t[8]=(o*E-a*A+l*_)*O,t[9]=(i*A-e*E-r*_)*O,t[10]=(x*y-v*g+p*w)*O,t[11]=(d*g-h*y-f*w)*O,t[12]=(a*b-o*C-c*_)*O,t[13]=(e*C-i*b+s*_)*O,t[14]=(v*S-x*M-m*w)*O,t[15]=(h*M-d*S+u*w)*O,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,x=r*d,v=o*h,m=o*d,p=a*d,w=c*l,S=c*h,g=c*d,M=i.x,y=i.y,R=i.z;return s[0]=(1-(v+p))*M,s[1]=(f+g)*M,s[2]=(x-S)*M,s[3]=0,s[4]=(f-g)*y,s[5]=(1-(u+p))*y,s[6]=(m+w)*y,s[7]=0,s[8]=(x+S)*R,s[9]=(m-w)*R,s[10]=(1-(u+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Rr.set(s[0],s[1],s[2]).length();const a=Rr.set(s[4],s[5],s[6]).length(),c=Rr.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Fi.copy(this);const l=1/o,h=1/a,d=1/c;return Fi.elements[0]*=l,Fi.elements[1]*=l,Fi.elements[2]*=l,Fi.elements[4]*=h,Fi.elements[5]*=h,Fi.elements[6]*=h,Fi.elements[8]*=d,Fi.elements[9]*=d,Fi.elements[10]*=d,e.setFromRotationMatrix(Fi),i.x=o,i.y=a,i.z=c,this}makePerspective(t,e,i,s,r,o,a=Xi,c=!1){const l=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s);let x,v;if(c)x=r/(o-r),v=o*r/(o-r);else if(a===Xi)x=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===mo)x=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Xi,c=!1){const l=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s);let x,v;if(c)x=1/(o-r),v=o/(o-r);else if(a===Xi)x=-2/(o-r),v=-(o+r)/(o-r);else if(a===mo)x=-1/(o-r),v=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};bh.prototype.isMatrix4=!0;let tn=bh;const Rr=new B,Fi=new tn,PE=new B(0,0,0),IE=new B(1,1,1),As=new B,qa=new B,wi=new B,fx=new tn,px=new vr;class Ts{constructor(t=0,e=0,i=0,s=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return fx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fx,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return px.setFromEuler(this),this.setFromQuaternion(px,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class $h{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let zE=0;const mx=new B,Ar=new vr,ds=new tn,Za=new B,Ao=new B,DE=new B,LE=new vr,gx=new B(1,0,0),xx=new B(0,1,0),_x=new B(0,0,1),yx={type:"added"},NE={type:"removed"},Cr={type:"childadded",child:null},Md={type:"childremoved",child:null};let Zt=class Jc extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jc.DEFAULT_UP.clone();const t=new B,e=new Ts,i=new vr,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tn},normalMatrix:{value:new xe}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Jc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(gx,t)}rotateY(t){return this.rotateOnAxis(xx,t)}rotateZ(t){return this.rotateOnAxis(_x,t)}translateOnAxis(t,e){return mx.copy(t).applyQuaternion(this.quaternion),this.position.add(mx.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gx,t)}translateY(t){return this.translateOnAxis(xx,t)}translateZ(t){return this.translateOnAxis(_x,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Za.copy(t):Za.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(Ao,Za,this.up):ds.lookAt(Za,Ao,this.up),this.quaternion.setFromRotationMatrix(ds),s&&(ds.extractRotation(s.matrixWorld),Ar.setFromRotationMatrix(ds),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yx),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(NE),Md.child=t,this.dispatchEvent(Md),Md.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yx),Cr.child=t,this.dispatchEvent(Cr),Cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,t,DE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,LE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}};Zt.DEFAULT_UP=new B(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let _t=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}};const UE={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,x=.005;l.inputState.pinching&&u>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UE)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new _t;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const T2={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function wd(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}let se=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,Pe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Pe.workingColorSpace){if(t=TE(t,1),e=Ie(e,0,1),i=Ie(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=wd(o,r,t+1/3),this.g=wd(o,r,t),this.b=wd(o,r,t-1/3)}return Pe.colorSpaceToWorking(this,s),this}setStyle(t,e=si){function i(r){r!==void 0&&parseFloat(r)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:de("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){const i=T2[t.toLowerCase()];return i!==void 0?this.setHex(i,e):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=ao(t.r),this.g=ao(t.g),this.b=ao(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Pe.workingToColorSpace(qn.copy(this),t),Math.round(Ie(qn.r*255,0,255))*65536+Math.round(Ie(qn.g*255,0,255))*256+Math.round(Ie(qn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Pe.workingColorSpace){Pe.workingToColorSpace(qn.copy(this),e);const i=qn.r,s=qn.g,r=qn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Pe.workingColorSpace){return Pe.workingToColorSpace(qn.copy(this),e),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=si){Pe.workingToColorSpace(qn.copy(this),t);const e=qn.r,i=qn.g,s=qn.b;return t!==si?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Cs),this.setHSL(Cs.h+t,Cs.s+e,Cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Cs),t.getHSL(Ka);const i=gd(Cs.h,Ka.h,e),s=gd(Cs.s,Ka.s,e),r=gd(Cs.l,Ka.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const qn=new se;se.NAMES=T2;class Vh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(t),this.density=e}clone(){return new Vh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Cp extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Bi=new B,fs=new B,Sd=new B,ps=new B,Pr=new B,Ir=new B,vx=new B,bd=new B,Ed=new B,Td=new B,Rd=new pn,Ad=new pn,Cd=new pn;class Ri{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Bi.subVectors(t,e),s.cross(Bi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Bi.subVectors(s,e),fs.subVectors(i,e),Sd.subVectors(t,e);const o=Bi.dot(Bi),a=Bi.dot(fs),c=Bi.dot(Sd),l=fs.dot(fs),h=fs.dot(Sd),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(l*c-a*h)*u,x=(o*h-a*c)*u;return r.set(1-f-x,x,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ps)===null?!1:ps.x>=0&&ps.y>=0&&ps.x+ps.y<=1}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,ps)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ps.x),c.addScaledVector(o,ps.y),c.addScaledVector(a,ps.z),c)}static getInterpolatedAttribute(t,e,i,s,r,o){return Rd.setScalar(0),Ad.setScalar(0),Cd.setScalar(0),Rd.fromBufferAttribute(t,e),Ad.fromBufferAttribute(t,i),Cd.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Rd,r.x),o.addScaledVector(Ad,r.y),o.addScaledVector(Cd,r.z),o}static isFrontFacing(t,e,i,s){return Bi.subVectors(i,e),fs.subVectors(t,e),Bi.cross(fs).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),Bi.cross(fs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Ri.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Pr.subVectors(s,i),Ir.subVectors(r,i),bd.subVectors(t,i);const c=Pr.dot(bd),l=Ir.dot(bd);if(c<=0&&l<=0)return e.copy(i);Ed.subVectors(t,s);const h=Pr.dot(Ed),d=Ir.dot(Ed);if(h>=0&&d<=h)return e.copy(s);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Pr,o);Td.subVectors(t,r);const f=Pr.dot(Td),x=Ir.dot(Td);if(x>=0&&f<=x)return e.copy(r);const v=f*l-c*x;if(v<=0&&l>=0&&x<=0)return a=l/(l-x),e.copy(i).addScaledVector(Ir,a);const m=h*x-f*d;if(m<=0&&d-h>=0&&f-x>=0)return vx.subVectors(r,s),a=(d-h)/(d-h+(f-x)),e.copy(s).addScaledVector(vx,a);const p=1/(m+v+u);return o=v*p,a=u*p,e.copy(i).addScaledVector(Pr,o).addScaledVector(Ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Zs{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Hi):Hi.fromBufferAttribute(r,o),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ja.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(t.matrixWorld),this.union(ja)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),Ja.subVectors(this.max,Co),zr.subVectors(t.a,Co),Dr.subVectors(t.b,Co),Lr.subVectors(t.c,Co),Ps.subVectors(Dr,zr),Is.subVectors(Lr,Dr),Ks.subVectors(zr,Lr);let e=[0,-Ps.z,Ps.y,0,-Is.z,Is.y,0,-Ks.z,Ks.y,Ps.z,0,-Ps.x,Is.z,0,-Is.x,Ks.z,0,-Ks.x,-Ps.y,Ps.x,0,-Is.y,Is.x,0,-Ks.y,Ks.x,0];return!Pd(e,zr,Dr,Lr,Ja)||(e=[1,0,0,0,1,0,0,0,1],!Pd(e,zr,Dr,Lr,Ja))?!1:(Qa.crossVectors(Ps,Is),e=[Qa.x,Qa.y,Qa.z],Pd(e,zr,Dr,Lr,Ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ms),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ms=[new B,new B,new B,new B,new B,new B,new B,new B],Hi=new B,ja=new Zs,zr=new B,Dr=new B,Lr=new B,Ps=new B,Is=new B,Ks=new B,Co=new B,Ja=new B,Qa=new B,js=new B;function Pd(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){js.fromArray(n,r);const a=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),c=t.dot(js),l=e.dot(js),h=i.dot(js);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const wn=new B,tc=new xt;let OE=0;class _i extends qs{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:OE++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Ku,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)tc.fromBufferAttribute(this,e),tc.applyMatrix3(t),this.setXY(e,tc.x,tc.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix3(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix4(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.applyNormalMatrix(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)wn.fromBufferAttribute(this,e),wn.transformDirection(t),this.setXYZ(e,wn.x,wn.y,wn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=rs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ku&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class ug extends _i{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class hg extends _i{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Le extends _i{constructor(t,e,i){super(new Float32Array(t),e,i)}}const kE=new Zs,Po=new B,Id=new B;class yo{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):kE.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Po.subVectors(t,this.center);const e=Po.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Po,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Id.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Po.copy(t.center).add(Id)),this.expandByPoint(Po.copy(t.center).sub(Id))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let FE=0;const Ii=new tn,zd=new Zt,Nr=new B,Si=new Zs,Io=new Zs,In=new B;class bn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(SE(t)?hg:ug)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new xe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,e,i){return Ii.makeTranslation(t,e,i),this.applyMatrix4(Ii),this}scale(t,e,i){return Ii.makeScale(t,e,i),this.applyMatrix4(Ii),this}lookAt(t){return zd.lookAt(t),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(In.addVectors(Si.min,Io.min),Si.expandByPoint(In),In.addVectors(Si.max,Io.max),Si.expandByPoint(In)):(Si.expandByPoint(Io.min),Si.expandByPoint(Io.max))}Si.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)In.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(In));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)In.fromBufferAttribute(a,l),c&&(Nr.fromBufferAttribute(t,l),In.add(Nr)),s=Math.max(s,i.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new _i(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new B,c[_]=new B;const l=new B,h=new B,d=new B,u=new xt,f=new xt,x=new xt,v=new B,m=new B;function p(_,b,A){l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,b),d.fromBufferAttribute(i,A),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,b),x.fromBufferAttribute(r,A),h.sub(l),d.sub(l),f.sub(u),x.sub(u);const C=1/(f.x*x.y-x.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-x.x).multiplyScalar(C),a[_].add(v),a[b].add(v),a[A].add(v),c[_].add(m),c[b].add(m),c[A].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let _=0,b=w.length;_<b;++_){const A=w[_],C=A.start,E=A.count;for(let U=C,k=C+E;U<k;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const S=new B,g=new B,M=new B,y=new B;function R(_){M.fromBufferAttribute(s,_),y.copy(M);const b=a[_];S.copy(b),S.sub(M.multiplyScalar(M.dot(b))).normalize(),g.crossVectors(y,b);const C=g.dot(c[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,C)}for(let _=0,b=w.length;_<b;++_){const A=w[_],C=A.start,E=A.count;for(let U=C,k=C+E;U<k;U+=3)R(t.getX(U+0)),R(t.getX(U+1)),R(t.getX(U+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new _i(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const s=new B,r=new B,o=new B,a=new B,c=new B,l=new B,h=new B,d=new B;if(t)for(let u=0,f=t.count;u<f;u+=3){const x=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),a.add(h),c.add(h),l.add(h),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)In.fromBufferAttribute(t,e),In.normalize(),t.setXYZ(e,In.x,In.y,In.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h);let f=0,x=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)u[x++]=l[f++]}return new _i(u,h,d)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){const u=l[h],f=t(u,i);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class R2{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ku,this.updateRanges=[],this.version=0,this.uuid=Vs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ei=new B;class pa{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)ei.fromBufferAttribute(this,e),ei.applyMatrix4(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ei.fromBufferAttribute(this,e),ei.applyNormalMatrix(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ei.fromBufferAttribute(this,e),ei.transformDirection(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=rs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Qe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=rs(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=rs(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=rs(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=rs(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Qe(e,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new _i(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new pa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let BE=0;class Mr extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=Vs(),this.name="",this.type="Material",this.blending=fr,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=lu,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){de(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){de(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==Es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cu&&(i.blendSrc=this.blendSrc),this.blendDst!==lu&&(i.blendDst=this.blendDst),this.blendEquation!==ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class dg extends Mr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ur;const zo=new B,Or=new B,kr=new B,Fr=new xt,Do=new xt,A2=new tn,ec=new B,Lo=new B,nc=new B,Mx=new xt,Dd=new xt,wx=new xt;class C2 extends Zt{constructor(t=new dg){if(super(),this.isSprite=!0,this.type="Sprite",Ur===void 0){Ur=new bn;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new R2(e,5);Ur.setIndex([0,1,2,0,2,3]),Ur.setAttribute("position",new pa(i,3,0,!1)),Ur.setAttribute("uv",new pa(i,2,3,!1))}this.geometry=Ur,this.material=t,this.center=new xt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&De('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Or.setFromMatrixScale(this.matrixWorld),A2.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),kr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Or.multiplyScalar(-kr.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;ic(ec.set(-.5,-.5,0),kr,o,Or,s,r),ic(Lo.set(.5,-.5,0),kr,o,Or,s,r),ic(nc.set(.5,.5,0),kr,o,Or,s,r),Mx.set(0,0),Dd.set(1,0),wx.set(1,1);let a=t.ray.intersectTriangle(ec,Lo,nc,!1,zo);if(a===null&&(ic(Lo.set(-.5,.5,0),kr,o,Or,s,r),Dd.set(0,1),a=t.ray.intersectTriangle(ec,nc,Lo,!1,zo),a===null))return;const c=t.ray.origin.distanceTo(zo);c<t.near||c>t.far||e.push({distance:c,point:zo.clone(),uv:Ri.getInterpolation(zo,ec,Lo,nc,Mx,Dd,wx,new xt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ic(n,t,e,i,s,r){Fr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Do.x=r*Fr.x-s*Fr.y,Do.y=s*Fr.x+r*Fr.y):Do.copy(Fr),n.copy(t),n.x+=Do.x,n.y+=Do.y,n.applyMatrix4(A2)}const gs=new B,Ld=new B,sc=new B,zs=new B,Nd=new B,rc=new B,Ud=new B;class fg{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gs.copy(this.origin).addScaledVector(this.direction,e),gs.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ld.copy(t).add(e).multiplyScalar(.5),sc.copy(e).sub(t).normalize(),zs.copy(this.origin).sub(Ld);const r=t.distanceTo(e)*.5,o=-this.direction.dot(sc),a=zs.dot(this.direction),c=-zs.dot(sc),l=zs.lengthSq(),h=Math.abs(1-o*o);let d,u,f,x;if(h>0)if(d=o*c-a,u=o*a-c,x=r*h,d>=0)if(u>=-x)if(u<=x){const v=1/h;d*=v,u*=v,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-x?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=x?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ld).addScaledVector(sc,u),f}intersectSphere(t,e){gs.subVectors(t.center,this.origin);const i=gs.dot(this.direction),s=gs.dot(gs)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(i=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,gs)!==null}intersectTriangle(t,e,i,s,r){Nd.subVectors(e,t),rc.subVectors(i,t),Ud.crossVectors(Nd,rc);let o=this.direction.dot(Ud),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zs.subVectors(this.origin,t);const c=a*this.direction.dot(rc.crossVectors(zs,rc));if(c<0)return null;const l=a*this.direction.dot(Nd.cross(zs));if(l<0||c+l>o)return null;const h=-a*zs.dot(Ud);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}let Ue=class extends Mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};const Sx=new tn,Js=new fg,oc=new yo,bx=new B,ac=new B,cc=new B,lc=new B,Od=new B,uc=new B,Ex=new B,hc=new B;let yt=class extends Zt{constructor(t=new bn,e=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){uc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],d=r[c];h!==0&&(Od.fromBufferAttribute(d,t),o?uc.addScaledVector(Od,h):uc.addScaledVector(Od.sub(e),h))}e.add(uc)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oc.copy(i.boundingSphere),oc.applyMatrix4(r),Js.copy(t.ray).recast(t.near),!(oc.containsPoint(Js.origin)===!1&&(Js.intersectSphere(oc,bx)===null||Js.origin.distanceToSquared(bx)>(t.far-t.near)**2))&&(Sx.copy(r).invert(),Js.copy(t.ray).applyMatrix4(Sx),!(i.boundingBox!==null&&Js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Js)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=u.length;x<v;x++){const m=u[x],p=o[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let g=w,M=S;g<M;g+=3){const y=a.getX(g),R=a.getX(g+1),_=a.getX(g+2);s=dc(this,p,t,i,l,h,d,y,R,_),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=x,p=v;m<p;m+=3){const w=a.getX(m),S=a.getX(m+1),g=a.getX(m+2);s=dc(this,o,t,i,l,h,d,w,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,v=u.length;x<v;x++){const m=u[x],p=o[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let g=w,M=S;g<M;g+=3){const y=g,R=g+1,_=g+2;s=dc(this,p,t,i,l,h,d,y,R,_),s&&(s.faceIndex=Math.floor(g/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const x=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=x,p=v;m<p;m+=3){const w=m,S=m+1,g=m+2;s=dc(this,o,t,i,l,h,d,w,S,g),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function HE(n,t,e,i,s,r,o,a){let c;if(t.side===Jn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Es,a),c===null)return null;hc.copy(a),hc.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(hc);return l<e.near||l>e.far?null:{distance:l,point:hc.clone(),object:n}}function dc(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,ac),n.getVertexPosition(c,cc),n.getVertexPosition(l,lc);const h=HE(n,t,e,i,ac,cc,lc,Ex);if(h){const d=new B;Ri.getBarycoord(Ex,ac,cc,lc,d),s&&(h.uv=Ri.getInterpolatedAttribute(s,a,c,l,d,new xt)),r&&(h.uv1=Ri.getInterpolatedAttribute(r,a,c,l,d,new xt)),o&&(h.normal=Ri.getInterpolatedAttribute(o,a,c,l,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:c,c:l,normal:new B,materialIndex:0};Ri.getNormal(ac,cc,lc,u.normal),h.face=u,h.barycoord=d}return h}class pg extends On{constructor(t=null,e=1,i=1,s,r,o,a,c,l=Nn,h=Nn,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pp extends _i{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Br=new tn,Tx=new tn,fc=[],Rx=new Zs,GE=new tn,No=new yt,Uo=new yo;let oe=class extends yt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Pp(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,GE)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Br),Rx.copy(t.boundingBox).applyMatrix4(Br),this.boundingBox.union(Rx)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new yo),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Br),Uo.copy(t.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(Uo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),t.ray.intersectsSphere(Uo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Br),Tx.multiplyMatrices(i,Br),No.matrixWorld=Tx,No.raycast(t,fc);for(let o=0,a=fc.length;o<a;o++){const c=fc[o];c.instanceId=r,c.object=this,e.push(c)}fc.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Pp(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pg(new Float32Array(s*this.count),s,this.count,Uh,Di));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};const kd=new B,$E=new B,VE=new xe;class vs{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=kd.subVectors(i,e).cross($E.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(kd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||VE.getNormalMatrix(t),s=this.coplanarPoint(kd).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new yo,WE=new xt(.5,.5),pc=new B;class Wh{constructor(t=new vs,e=new vs,i=new vs,s=new vs,r=new vs,o=new vs){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xi,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],x=r[8],v=r[9],m=r[10],p=r[11],w=r[12],S=r[13],g=r[14],M=r[15];if(s[0].setComponents(l-o,f-h,p-x,M-w).normalize(),s[1].setComponents(l+o,f+h,p+x,M+w).normalize(),s[2].setComponents(l+a,f+d,p+v,M+S).normalize(),s[3].setComponents(l-a,f-d,p-v,M-S).normalize(),i)s[4].setComponents(c,u,m,g).normalize(),s[5].setComponents(l-c,f-u,p-m,M-g).normalize();else if(s[4].setComponents(l-c,f-u,p-m,M-g).normalize(),e===Xi)s[5].setComponents(l+c,f+u,p+m,M+g).normalize();else if(e===mo)s[5].setComponents(c,u,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(t){Qs.center.set(0,0,0);const e=WE.distanceTo(t.center);return Qs.radius=.7071067811865476+e,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(pc.x=s.normal.x>0?t.max.x:t.min.x,pc.y=s.normal.y>0?t.max.y:t.min.y,pc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(pc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mg extends On{constructor(t=[],e=Xs,i,s,r,o,a,c,l,h){super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gg extends On{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yr extends On{constructor(t,e,i=Zi,s,r,o,a=Nn,c=Nn,l,h=as,d=1){if(h!==as&&h!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:t,height:e,depth:d};super(u,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class P2 extends yr{constructor(t,e=Zi,i=Xs,s,r,o=Nn,a=Nn,c,l=as){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class xg extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}let ye=class I2 extends bn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],d=[];let u=0,f=0;x("z","y","x",-1,-1,i,e,t,o,r,0),x("z","y","x",1,-1,i,e,-t,o,r,1),x("x","z","y",1,1,t,i,e,s,o,2),x("x","z","y",1,-1,t,i,-e,s,o,3),x("x","y","z",1,-1,t,e,i,s,r,4),x("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2));function x(v,m,p,w,S,g,M,y,R,_,b){const A=g/R,C=M/_,E=g/2,U=M/2,k=y/2,O=R+1,V=_+1;let W=0,Y=0;const tt=new B;for(let q=0;q<V;q++){const ht=q*C-U;for(let nt=0;nt<O;nt++){const Lt=nt*A-E;tt[v]=Lt*w,tt[m]=ht*S,tt[p]=k,l.push(tt.x,tt.y,tt.z),tt[v]=0,tt[m]=0,tt[p]=y>0?1:-1,h.push(tt.x,tt.y,tt.z),d.push(nt/R),d.push(1-q/_),W+=1}}for(let q=0;q<_;q++)for(let ht=0;ht<R;ht++){const nt=u+ht+O*q,Lt=u+ht+O*(q+1),te=u+(ht+1)+O*(q+1),Ut=u+(ht+1)+O*q;c.push(nt,Lt,Ut),c.push(Lt,te,Ut),Y+=6}a.addGroup(f,Y,b),f+=Y,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new I2(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},_g=class z2 extends bn{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,x=i*2+r,v=s+1,m=new B,p=new B;for(let w=0;w<=x;w++){let S=0,g=0,M=0,y=0;if(w<=i){const b=w/i,A=b*Math.PI/2;g=-h-t*Math.cos(A),M=t*Math.sin(A),y=-t*Math.cos(A),S=b*d}else if(w<=i+r){const b=(w-i)/r;g=-h+b*e,M=t,y=0,S=d+b*u}else{const b=(w-i-r)/i,A=b*Math.PI/2;g=h+t*Math.sin(A),M=t*Math.cos(A),y=t*Math.sin(A),S=d+u+b*d}const R=Math.max(0,Math.min(1,S/f));let _=0;w===0?_=.5/s:w===x&&(_=-.5/s);for(let b=0;b<=s;b++){const A=b/s,C=A*Math.PI*2,E=Math.sin(C),U=Math.cos(C);p.x=-M*U,p.y=g,p.z=M*E,a.push(p.x,p.y,p.z),m.set(-M*U,y,M*E),m.normalize(),c.push(m.x,m.y,m.z),l.push(A+_,R)}if(w>0){const b=(w-1)*v;for(let A=0;A<s;A++){const C=b+A,E=b+A+1,U=w*v+A,k=w*v+A+1;o.push(C,E,U),o.push(E,k,U)}}}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new z2(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},yi=class D2 extends bn{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new B,h=new xt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=i+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new D2(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ge=class L2 extends bn{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let x=0;const v=[],m=i/2;let p=0;w(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(f,2));function w(){const g=new B,M=new B;let y=0;const R=(e-t)/i;for(let _=0;_<=r;_++){const b=[],A=_/r,C=A*(e-t)+t;for(let E=0;E<=s;E++){const U=E/s,k=U*c+a,O=Math.sin(k),V=Math.cos(k);M.x=C*O,M.y=-A*i+m,M.z=C*V,d.push(M.x,M.y,M.z),g.set(O,R,V).normalize(),u.push(g.x,g.y,g.z),f.push(U,1-A),b.push(x++)}v.push(b)}for(let _=0;_<s;_++)for(let b=0;b<r;b++){const A=v[b][_],C=v[b+1][_],E=v[b+1][_+1],U=v[b][_+1];(t>0||b!==0)&&(h.push(A,C,U),y+=3),(e>0||b!==r-1)&&(h.push(C,E,U),y+=3)}l.addGroup(p,y,0),p+=y}function S(g){const M=x,y=new xt,R=new B;let _=0;const b=g===!0?t:e,A=g===!0?1:-1;for(let E=1;E<=s;E++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),x++;const C=x;for(let E=0;E<=s;E++){const k=E/s*c+a,O=Math.cos(k),V=Math.sin(k);R.x=b*V,R.y=m*A,R.z=b*O,d.push(R.x,R.y,R.z),u.push(0,A,0),y.x=O*.5+.5,y.y=V*.5*A+.5,f.push(y.x,y.y),x++}for(let E=0;E<s;E++){const U=M+E,k=C+E;g===!0?h.push(k,k+1,U):h.push(k+1,k,U),_+=3}l.addGroup(p,_,g===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new L2(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},wr=class N2 extends ge{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new N2(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};class Sr extends bn{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const S=new B,g=new B,M=new B;for(let y=0;y<e.length;y+=3)f(e[y+0],S),f(e[y+1],g),f(e[y+2],M),c(S,g,M,w)}function c(w,S,g,M){const y=M+1,R=[];for(let _=0;_<=y;_++){R[_]=[];const b=w.clone().lerp(g,_/y),A=S.clone().lerp(g,_/y),C=y-_;for(let E=0;E<=C;E++)E===0&&_===y?R[_][E]=b:R[_][E]=b.clone().lerp(A,E/C)}for(let _=0;_<y;_++)for(let b=0;b<2*(y-_)-1;b++){const A=Math.floor(b/2);b%2===0?(u(R[_][A+1]),u(R[_+1][A]),u(R[_][A])):(u(R[_][A+1]),u(R[_+1][A+1]),u(R[_+1][A]))}}function l(w){const S=new B;for(let g=0;g<r.length;g+=3)S.x=r[g+0],S.y=r[g+1],S.z=r[g+2],S.normalize().multiplyScalar(w),r[g+0]=S.x,r[g+1]=S.y,r[g+2]=S.z}function h(){const w=new B;for(let S=0;S<r.length;S+=3){w.x=r[S+0],w.y=r[S+1],w.z=r[S+2];const g=m(w)/2/Math.PI+.5,M=p(w)/Math.PI+.5;o.push(g,1-M)}x(),d()}function d(){for(let w=0;w<o.length;w+=6){const S=o[w+0],g=o[w+2],M=o[w+4],y=Math.max(S,g,M),R=Math.min(S,g,M);y>.9&&R<.1&&(S<.2&&(o[w+0]+=1),g<.2&&(o[w+2]+=1),M<.2&&(o[w+4]+=1))}}function u(w){r.push(w.x,w.y,w.z)}function f(w,S){const g=w*3;S.x=t[g+0],S.y=t[g+1],S.z=t[g+2]}function x(){const w=new B,S=new B,g=new B,M=new B,y=new xt,R=new xt,_=new xt;for(let b=0,A=0;b<r.length;b+=9,A+=6){w.set(r[b+0],r[b+1],r[b+2]),S.set(r[b+3],r[b+4],r[b+5]),g.set(r[b+6],r[b+7],r[b+8]),y.set(o[A+0],o[A+1]),R.set(o[A+2],o[A+3]),_.set(o[A+4],o[A+5]),M.copy(w).add(S).add(g).divideScalar(3);const C=m(M);v(y,A+0,w,C),v(R,A+2,S,C),v(_,A+4,g,C)}}function v(w,S,g,M){M<0&&w.x===1&&(o[S]=w.x-1),g.x===0&&g.z===0&&(o[S]=M/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.vertices,t.indices,t.radius,t.detail)}}class Xh extends Sr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xh(t.radius,t.detail)}}let vo=class U2 extends Sr{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new U2(t.radius,t.detail)}},Mo=class O2 extends bn{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Ie(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,d=new B,u=new xt,f=new B,x=new B,v=new B;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(x)}for(let w=0;w<=e;w++){const S=i+w*h*s,g=Math.sin(S),M=Math.cos(S);for(let y=0;y<=t.length-1;y++){d.x=t[y].x*g,d.y=t[y].y,d.z=t[y].x*M,o.push(d.x,d.y,d.z),u.x=w/e,u.y=y/(t.length-1),a.push(u.x,u.y);const R=c[3*y+0]*g,_=c[3*y+1],b=c[3*y+0]*M;l.push(R,_,b)}}for(let w=0;w<e;w++)for(let S=0;S<t.length-1;S++){const g=S+w*t.length,M=g,y=g+t.length,R=g+t.length+1,_=g+1;r.push(M,y,_),r.push(R,_,y)}this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new O2(t.points,t.segments,t.phiStart,t.phiLength)}},xn=class k2 extends Sr{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new k2(t.radius,t.detail)}};class cs extends bn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],x=[],v=[],m=[];for(let p=0;p<h;p++){const w=p*u-o;for(let S=0;S<l;S++){const g=S*d-r;x.push(g,-w,0),v.push(0,0,1),m.push(S/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const S=w+l*p,g=w+l*(p+1),M=w+1+l*(p+1),y=w+1+l*p;f.push(S,g,y),f.push(g,M,y)}this.setIndex(f),this.setAttribute("position",new Le(x,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Va extends bn{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let d=t;const u=(e-t)/s,f=new B,x=new xt;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){const p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/e+1)/2,x.y=(f.y/e+1)/2,h.push(x.x,x.y)}d+=u}for(let v=0;v<s;v++){const m=v*(i+1);for(let p=0;p<i;p++){const w=p+m,S=w,g=w+i+1,M=w+i+2,y=w+1;a.push(S,g,y),a.push(g,M,y)}}this.setIndex(a),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Va(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}let Ci=class F2 extends bn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new B,u=new B,f=[],x=[],v=[],m=[];for(let p=0;p<=i;p++){const w=[],S=p/i,g=o+S*a,M=t*Math.cos(g),y=Math.sqrt(t*t-M*M);let R=0;p===0&&o===0?R=.5/e:p===i&&c===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){const b=_/e,A=s+b*r;d.x=-y*Math.cos(A),d.y=M,d.z=y*Math.sin(A),x.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(b+R,1-S),w.push(l++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<e;w++){const S=h[p][w+1],g=h[p][w],M=h[p+1][w],y=h[p+1][w+1];(p!==0||o>0)&&f.push(S,g,y),(p!==i-1||c<Math.PI)&&f.push(g,M,y)}this.setIndex(f),this.setAttribute("position",new Le(x,3)),this.setAttribute("normal",new Le(v,3)),this.setAttribute("uv",new Le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new F2(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};class Wa extends Sr{constructor(t=1,e=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Wa(t.radius,t.detail)}}let nn=class B2 extends bn{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],h=[],d=[],u=new B,f=new B,x=new B;for(let v=0;v<=i;v++){const m=o+v/i*a;for(let p=0;p<=s;p++){const w=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(w),f.y=(t+e*Math.cos(m))*Math.sin(w),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),u.x=t*Math.cos(w),u.y=t*Math.sin(w),x.subVectors(f,u).normalize(),h.push(x.x,x.y,x.z),d.push(p/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){const p=(s+1)*v+m-1,w=(s+1)*(v-1)+m-1,S=(s+1)*(v-1)+m,g=(s+1)*v+m;c.push(p,w,g),c.push(w,S,g)}this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new B2(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function go(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Ax(s))s.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ax(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function ni(n){const t={};for(let e=0;e<n.length;e++){const i=go(n[e]);for(const s in i)t[s]=i[s]}return t}function Ax(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function XE(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function H2(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const xo={clone:go,merge:ni};var YE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let $n=class extends Mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YE,this.fragmentShader=qE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=go(t.uniforms),this.uniformsGroups=XE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(s.value);break;case"v2":this.uniforms[i].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new pn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new xe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new tn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}};class yg extends $n{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class G2 extends Mr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}let ut=class extends G2{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};class $2 extends Mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class V2 extends Mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tl={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(Cx(n)||(this.files[n]=t))},get:function(n){if(this.enabled!==!1&&!Cx(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Cx(n){try{const t=n.slice(n.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class W2{constructor(t,e,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){const f=l[d],x=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const X2=new W2;class Yh{constructor(t){this.manager=t!==void 0?t:X2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Yh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hr=new WeakMap;class Y2 extends Yh{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=tl.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Hr.get(o);d===void 0&&(d=[],Hr.set(o,d)),d.push({onLoad:e,onError:s})}return o}const a=da("img");function c(){h(),e&&e(this);const d=Hr.get(this)||[];for(let u=0;u<d.length;u++){const f=d[u];f.onLoad&&f.onLoad(this)}Hr.delete(this),r.manager.itemEnd(t)}function l(d){h(),s&&s(d),tl.remove(`image:${t}`);const u=Hr.get(this)||[];for(let f=0;f<u.length;f++){const x=u[f];x.onError&&x.onError(d)}Hr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),tl.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}let q2=class extends Yh{constructor(t){super(t)}load(t,e,i,s){const r=new On,o=new Y2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},i,s),r}};class qh extends Zt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}let Z2=class extends qh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}};const Fd=new tn,Px=new B,Ix=new B;class K2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Px.setFromMatrixPosition(t.matrixWorld),e.position.copy(Px),Ix.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ix),e.updateMatrixWorld(),Fd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fd,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===mo||e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const mc=new B,gc=new vr,ts=new B;class vg extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(mc,gc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,ts.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(mc,gc,ts),ts.x===1&&ts.y===1&&ts.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mc,gc,ts.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ds=new B,zx=new xt,Dx=new xt;class mi extends vg{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ap*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(md*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ap*2*Math.atan(Math.tan(md*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ds.x,Ds.y).multiplyScalar(-t/Ds.z)}getViewSize(t,e){return this.getViewBounds(t,zx,Dx),e.subVectors(Dx,zx)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(md*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class ZE extends K2{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}}let KE=class extends qh{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ZE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}};class Xa extends vg{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class jE extends K2{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}let el=class extends qh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new jE}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};const Gr=-90,$r=1;class j2 extends Zt{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mi(Gr,$r,t,e);s.layers=this.layers,this.add(s);const r=new mi(Gr,$r,t,e);r.layers=this.layers,this.add(r);const o=new mi(Gr,$r,t,e);o.layers=this.layers,this.add(o);const a=new mi(Gr,$r,t,e);a.layers=this.layers,this.add(a);const c=new mi(Gr,$r,t,e);c.layers=this.layers,this.add(c);const l=new mi(Gr,$r,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class J2 extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Q2{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=JE.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function JE(){this._document.hidden===!1&&this.reset()}const Lx=new tn;class tS{constructor(t,e,i=0,s=1/0){this.ray=new fg(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new $h,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):De("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Lx.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lx),this}intersectObject(t,e=!0,i=[]){return Ip(t,this,i,e),i.sort(Nx),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ip(t[s],this,i,e);return i.sort(Nx),i}}function Nx(n,t){return n.distance-t.distance}function Ip(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let o=0,a=r.length;o<a;o++)Ip(r[o],t,e,!0)}}const Qg=class Qg{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Qg.prototype.isMatrix2=!0;let zp=Qg;function Ux(n,t,e,i){const s=QE(i);switch(e){case ag:return n*t;case Uh:return n*t/s.components*s.byteLength;case Oh:return n*t/s.components*s.byteLength;case Ys:return n*t*2/s.components*s.byteLength;case kh:return n*t*2/s.components*s.byteLength;case cg:return n*t*3/s.components*s.byteLength;case Li:return n*t*4/s.components*s.byteLength;case Fh:return n*t*4/s.components*s.byteLength;case Qo:case ta:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ea:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case vu:case wu:return Math.max(n,16)*Math.max(t,8)/4;case yu:case Mu:return Math.max(n,8)*Math.max(t,8)/2;case Su:case bu:case Tu:case Ru:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Eu:case ca:case Au:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Cu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Pu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Iu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case zu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Du:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Lu:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Nu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Uu:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ou:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ku:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Fu:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Bu:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Hu:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Gu:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case $u:case Vu:case Wu:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Xu:case Yu:return Math.ceil(n/4)*Math.ceil(t/4)*8;case la:case qu:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function QE(n){switch(n){case gi:case ig:return{byteLength:1,components:1};case fo:case sg:case xi:return{byteLength:2,components:1};case Lh:case Nh:return{byteLength:2,components:4};case Zi:case Dh:case Di:return{byteLength:4,components:1};case rg:case og:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Th}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Th);function eS(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function tT(n){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,d=l.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const h=c.array,d=c.updateRanges;if(n.bindBuffer(l,a),d.length===0)n.bufferSubData(l,0,h);else{d.sort((f,x)=>f.start-x.start);let u=0;for(let f=1;f<d.length;f++){const x=d[u],v=d[f];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,x=d.length;f<x;f++){const v=d[f];n.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(n.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var eT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,iT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,uT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,pT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,MT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ST=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ET=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,TT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IT="gl_FragColor = linearToOutputTexel( gl_FragColor );",zT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,DT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$T=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,YT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ZT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,KT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t3=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,e3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n3=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i3=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,s3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h3=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,d3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f3=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p3=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m3=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g3=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x3=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_3=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y3=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v3=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w3=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S3=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,b3=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,E3=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T3=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R3=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A3=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C3=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P3=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,I3=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,z3=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D3=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,L3=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N3=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U3=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O3=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,k3=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,F3=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B3=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H3=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G3=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,$3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V3=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q3=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z3=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,K3=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,j3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,J3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,uR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_R=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ER=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,TR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ee={alphahash_fragment:eT,alphahash_pars_fragment:nT,alphamap_fragment:iT,alphamap_pars_fragment:sT,alphatest_fragment:rT,alphatest_pars_fragment:oT,aomap_fragment:aT,aomap_pars_fragment:cT,batching_pars_vertex:lT,batching_vertex:uT,begin_vertex:hT,beginnormal_vertex:dT,bsdfs:fT,iridescence_fragment:pT,bumpmap_pars_fragment:mT,clipping_planes_fragment:gT,clipping_planes_pars_fragment:xT,clipping_planes_pars_vertex:_T,clipping_planes_vertex:yT,color_fragment:vT,color_pars_fragment:MT,color_pars_vertex:wT,color_vertex:ST,common:bT,cube_uv_reflection_fragment:ET,defaultnormal_vertex:TT,displacementmap_pars_vertex:RT,displacementmap_vertex:AT,emissivemap_fragment:CT,emissivemap_pars_fragment:PT,colorspace_fragment:IT,colorspace_pars_fragment:zT,envmap_fragment:DT,envmap_common_pars_fragment:LT,envmap_pars_fragment:NT,envmap_pars_vertex:UT,envmap_physical_pars_fragment:YT,envmap_vertex:OT,fog_vertex:kT,fog_pars_vertex:FT,fog_fragment:BT,fog_pars_fragment:HT,gradientmap_pars_fragment:GT,lightmap_pars_fragment:$T,lights_lambert_fragment:VT,lights_lambert_pars_fragment:WT,lights_pars_begin:XT,lights_toon_fragment:qT,lights_toon_pars_fragment:ZT,lights_phong_fragment:KT,lights_phong_pars_fragment:jT,lights_physical_fragment:JT,lights_physical_pars_fragment:QT,lights_fragment_begin:t3,lights_fragment_maps:e3,lights_fragment_end:n3,lightprobes_pars_fragment:i3,logdepthbuf_fragment:s3,logdepthbuf_pars_fragment:r3,logdepthbuf_pars_vertex:o3,logdepthbuf_vertex:a3,map_fragment:c3,map_pars_fragment:l3,map_particle_fragment:u3,map_particle_pars_fragment:h3,metalnessmap_fragment:d3,metalnessmap_pars_fragment:f3,morphinstance_vertex:p3,morphcolor_vertex:m3,morphnormal_vertex:g3,morphtarget_pars_vertex:x3,morphtarget_vertex:_3,normal_fragment_begin:y3,normal_fragment_maps:v3,normal_pars_fragment:M3,normal_pars_vertex:w3,normal_vertex:S3,normalmap_pars_fragment:b3,clearcoat_normal_fragment_begin:E3,clearcoat_normal_fragment_maps:T3,clearcoat_pars_fragment:R3,iridescence_pars_fragment:A3,opaque_fragment:C3,packing:P3,premultiplied_alpha_fragment:I3,project_vertex:z3,dithering_fragment:D3,dithering_pars_fragment:L3,roughnessmap_fragment:N3,roughnessmap_pars_fragment:U3,shadowmap_pars_fragment:O3,shadowmap_pars_vertex:k3,shadowmap_vertex:F3,shadowmask_pars_fragment:B3,skinbase_vertex:H3,skinning_pars_vertex:G3,skinning_vertex:$3,skinnormal_vertex:V3,specularmap_fragment:W3,specularmap_pars_fragment:X3,tonemapping_fragment:Y3,tonemapping_pars_fragment:q3,transmission_fragment:Z3,transmission_pars_fragment:K3,uv_pars_fragment:j3,uv_pars_vertex:J3,uv_vertex:Q3,worldpos_vertex:tR,background_vert:eR,background_frag:nR,backgroundCube_vert:iR,backgroundCube_frag:sR,cube_vert:rR,cube_frag:oR,depth_vert:aR,depth_frag:cR,distance_vert:lR,distance_frag:uR,equirect_vert:hR,equirect_frag:dR,linedashed_vert:fR,linedashed_frag:pR,meshbasic_vert:mR,meshbasic_frag:gR,meshlambert_vert:xR,meshlambert_frag:_R,meshmatcap_vert:yR,meshmatcap_frag:vR,meshnormal_vert:MR,meshnormal_frag:wR,meshphong_vert:SR,meshphong_frag:bR,meshphysical_vert:ER,meshphysical_frag:TR,meshtoon_vert:RR,meshtoon_frag:AR,points_vert:CR,points_frag:PR,shadow_vert:IR,shadow_frag:zR,sprite_vert:DR,sprite_frag:LR},Wt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Wi={basic:{uniforms:ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:ni([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:ni([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new se(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:ni([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:ni([Wt.points,Wt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:ni([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:ni([Wt.common,Wt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:ni([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:ni([Wt.sprite,Wt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:ni([Wt.common,Wt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:ni([Wt.lights,Wt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Wi.physical={uniforms:ni([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const xc={r:0,b:0,g:0},NR=new tn,nS=new xe;nS.set(-1,0,0,0,1,0,0,0,1);function UR(n,t,e,i,s,r){const o=new se(0);let a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(w){let S=w.isScene===!0?w.background:null;if(S&&S.isTexture){const g=w.backgroundBlurriness>0;S=t.get(S,g)}return S}function x(w){let S=!1;const g=f(w);g===null?m(o,a):g&&g.isColor&&(m(g,1),S=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(w,S){const g=f(S);g&&(g.isCubeTexture||g.mapping===$a)?(l===void 0&&(l=new yt(new ye(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:go(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,y,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=g,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(NR.makeRotationFromEuler(S.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(nS),l.material.toneMapped=Pe.getTransfer(g.colorSpace)!==Ze,(h!==g||d!==g.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=g,d=g.version,u=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new yt(new cs(2,2),new $n({name:"BackgroundMaterial",uniforms:go(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Pe.getTransfer(g.colorSpace)!==Ze,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||d!==g.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=g,d=g.version,u=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,S){w.getRGB(xc,H2(n)),e.buffers.color.setClear(xc.r,xc.g,xc.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,m(o,a)},render:x,addToRenderList:v,dispose:p}}function OR(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,o=!1;function a(C,E,U,k,O){let V=!1;const W=d(C,k,U,E);r!==W&&(r=W,l(r.object)),V=f(C,k,U,O),V&&x(C,k,U,O),O!==null&&t.update(O,n.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,g(C,E,U,k),O!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return n.createVertexArray()}function l(C){return n.bindVertexArray(C)}function h(C){return n.deleteVertexArray(C)}function d(C,E,U,k){const O=k.wireframe===!0;let V=i[E.id];V===void 0&&(V={},i[E.id]=V);const W=C.isInstancedMesh===!0?C.id:0;let Y=V[W];Y===void 0&&(Y={},V[W]=Y);let tt=Y[U.id];tt===void 0&&(tt={},Y[U.id]=tt);let q=tt[O];return q===void 0&&(q=u(c()),tt[O]=q),q}function u(C){const E=[],U=[],k=[];for(let O=0;O<e;O++)E[O]=0,U[O]=0,k[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:U,attributeDivisors:k,object:C,attributes:{},index:null}}function f(C,E,U,k){const O=r.attributes,V=E.attributes;let W=0;const Y=U.getAttributes();for(const tt in Y)if(Y[tt].location>=0){const ht=O[tt];let nt=V[tt];if(nt===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor)),ht===void 0||ht.attribute!==nt||nt&&ht.data!==nt.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function x(C,E,U,k){const O={},V=E.attributes;let W=0;const Y=U.getAttributes();for(const tt in Y)if(Y[tt].location>=0){let ht=V[tt];ht===void 0&&(tt==="instanceMatrix"&&C.instanceMatrix&&(ht=C.instanceMatrix),tt==="instanceColor"&&C.instanceColor&&(ht=C.instanceColor));const nt={};nt.attribute=ht,ht&&ht.data&&(nt.data=ht.data),O[tt]=nt,W++}r.attributes=O,r.attributesNum=W,r.index=k}function v(){const C=r.newAttributes;for(let E=0,U=C.length;E<U;E++)C[E]=0}function m(C){p(C,0)}function p(C,E){const U=r.newAttributes,k=r.enabledAttributes,O=r.attributeDivisors;U[C]=1,k[C]===0&&(n.enableVertexAttribArray(C),k[C]=1),O[C]!==E&&(n.vertexAttribDivisor(C,E),O[C]=E)}function w(){const C=r.newAttributes,E=r.enabledAttributes;for(let U=0,k=E.length;U<k;U++)E[U]!==C[U]&&(n.disableVertexAttribArray(U),E[U]=0)}function S(C,E,U,k,O,V,W){W===!0?n.vertexAttribIPointer(C,E,U,O,V):n.vertexAttribPointer(C,E,U,k,O,V)}function g(C,E,U,k){v();const O=k.attributes,V=U.getAttributes(),W=E.defaultAttributeValues;for(const Y in V){const tt=V[Y];if(tt.location>=0){let q=O[Y];if(q===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),q!==void 0){const ht=q.normalized,nt=q.itemSize,Lt=t.get(q);if(Lt===void 0)continue;const te=Lt.buffer,Ut=Lt.type,$=Lt.bytesPerElement,at=Ut===n.INT||Ut===n.UNSIGNED_INT||q.gpuType===Dh;if(q.isInterleavedBufferAttribute){const ot=q.data,At=ot.stride,Ht=q.offset;if(ot.isInstancedInterleavedBuffer){for(let $t=0;$t<tt.locationSize;$t++)p(tt.location+$t,ot.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let $t=0;$t<tt.locationSize;$t++)m(tt.location+$t);n.bindBuffer(n.ARRAY_BUFFER,te);for(let $t=0;$t<tt.locationSize;$t++)S(tt.location+$t,nt/tt.locationSize,Ut,ht,At*$,(Ht+nt/tt.locationSize*$t)*$,at)}else{if(q.isInstancedBufferAttribute){for(let ot=0;ot<tt.locationSize;ot++)p(tt.location+ot,q.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ot=0;ot<tt.locationSize;ot++)m(tt.location+ot);n.bindBuffer(n.ARRAY_BUFFER,te);for(let ot=0;ot<tt.locationSize;ot++)S(tt.location+ot,nt/tt.locationSize,Ut,ht,nt*$,nt/tt.locationSize*ot*$,at)}}else if(W!==void 0){const ht=W[Y];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(tt.location,ht);break;case 3:n.vertexAttrib3fv(tt.location,ht);break;case 4:n.vertexAttrib4fv(tt.location,ht);break;default:n.vertexAttrib1fv(tt.location,ht)}}}}w()}function M(){b();for(const C in i){const E=i[C];for(const U in E){const k=E[U];for(const O in k){const V=k[O];for(const W in V)h(V[W].object),delete V[W];delete k[O]}}delete i[C]}}function y(C){if(i[C.id]===void 0)return;const E=i[C.id];for(const U in E){const k=E[U];for(const O in k){const V=k[O];for(const W in V)h(V[W].object),delete V[W];delete k[O]}}delete i[C.id]}function R(C){for(const E in i){const U=i[E];for(const k in U){const O=U[k];if(O[C.id]===void 0)continue;const V=O[C.id];for(const W in V)h(V[W].object),delete V[W];delete O[C.id]}}}function _(C){for(const E in i){const U=i[E],k=C.isInstancedMesh===!0?C.id:0,O=U[k];if(O!==void 0){for(const V in O){const W=O[V];for(const Y in W)h(W[Y].object),delete W[Y];delete O[V]}delete U[k],Object.keys(U).length===0&&delete i[E]}}}function b(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:b,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function kR(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function o(c,l,h){h!==0&&(n.drawArraysInstanced(i,c,l,h),e.update(l,i,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function FR(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Li&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const _=R===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==gi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Di&&!_)}function c(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(de("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&de("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),y=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:g,maxSamples:M,samples:y}}function BR(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new vs,a=new xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const x=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||x===null||x.length===0||r&&!m)r?h(null):l();else{const w=r?0:i,S=w*4;let g=p.clippingState||null;c.value=g,g=h(x,u,S,f);for(let M=0;M!==S;++M)g[M]=e[M];p.clippingState=g,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,x){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,x!==!0||m===null){const p=f+v*4,w=u.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,g=f;S!==v;++S,g+=4)o.copy(d[S]).applyMatrix4(w,a),o.normal.toArray(m,g),m[g+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}const Hs=4,Ox=[.125,.215,.35,.446,.526,.582],lr=20,HR=256,Oo=new Xa,kx=new se;let Bd=null,Hd=0,Gd=0,$d=!1;const GR=new B;class ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:o=256,position:a=GR}=r;Bd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bd,Hd,Gd),this._renderer.xr.enabled=$d,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xs||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bd=this._renderer.getRenderTarget(),Hd=this._renderer.getActiveCubeFace(),Gd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:xi,format:Li,colorSpace:ua,depthBuffer:!1},s=Fx(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fx(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$R(r)),this._blurMaterial=WR(r,t,e),this._ggxMaterial=VR(r,t,e)}return s}_compileMaterial(t){const e=new yt(new bn,t);this._renderer.compile(e,Oo)}_sceneToCubeUV(t,e,i,s,r){const c=new mi(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(kx),d.toneMapping=qi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new ye,new Ue({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,p=!0):(m.color.copy(kx),p=!0);for(let S=0;S<6;S++){const g=S%3;g===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):g===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));const M=this._cubeSize;Vr(s,g*M,S>2?M:0,M,M),d.setRenderTarget(s),p&&d.render(v,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=w}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Xs||t.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bx());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Vr(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,Oo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=0+l*1.25,f=d*u,{_lodMax:x}=this,v=this._sizeLods[i],m=3*v*(i>x-Hs?i-x+Hs:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=x-e,Vr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(a,Oo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-i,Vr(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(a,Oo)}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=l;const u=l.uniforms,f=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*lr-1),v=r/x,m=isFinite(r)?1+Math.floor(h*v):lr;m>lr&&de(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${lr}`);const p=[];let w=0;for(let R=0;R<lr;++R){const _=R/v,b=Math.exp(-_*_/2);p.push(b),R===0?w+=b:R<m&&(w+=2*b)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=x,u.mipInt.value=S-i;const g=this._sizeLods[s],M=3*g*(s>S-Hs?s-S+Hs:0),y=4*(this._cubeSize-g);Vr(e,M,y,3*g,2*g),c.setRenderTarget(e),c.render(d,Oo)}}function $R(n){const t=[],e=[],i=[];let s=n;const r=n-Hs+1+Ox.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>n-Hs?c=Ox[o-n+Hs-1]:o===0&&(c=0),e.push(c);const l=1/(a-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,x=6,v=3,m=2,p=1,w=new Float32Array(v*x*f),S=new Float32Array(m*x*f),g=new Float32Array(p*x*f);for(let y=0;y<f;y++){const R=y%3*2/3-1,_=y>2?0:-1,b=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];w.set(b,v*x*y),S.set(u,m*x*y);const A=[y,y,y,y,y,y];g.set(A,p*x*y)}const M=new bn;M.setAttribute("position",new _i(w,v)),M.setAttribute("uv",new _i(S,m)),M.setAttribute("faceIndex",new _i(g,p)),i.push(new yt(M,null)),s>Hs&&s--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Fx(n,t,e){const i=new ri(n,t,e);return i.texture.mapping=$a,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function VR(n,t,e){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HR,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function WR(n,t,e){const i=new Float32Array(lr),s=new B(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Bx(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Hx(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Mg extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new mg(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ye(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:go(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:Yi});r.uniforms.tEquirect.value=e;const o=new yt(s,r),a=e.minFilter;return e.minFilter===Fs&&(e.minFilter=Gn),new j2(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}function XR(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){const f=u.mapping;if(f===Zc||f===Kc)if(t.has(u)){const x=t.get(u).texture;return a(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const v=new Mg(x.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",l),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const f=u.mapping,x=f===Zc||f===Kc,v=f===Xs||f===_r;if(x||v){let m=e.get(u);const p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new ju(n)),m=x?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{const w=u.image;return x&&w&&w.height>0||v&&w&&c(w)?(i===null&&(i=new ju(n)),m=x?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Zc?u.mapping=Xs:f===Kc&&(u.mapping=_r),u}function c(u){let f=0;const x=6;for(let v=0;v<x;v++)u[v]!==void 0&&f++;return f===x}function l(u){const f=u.target;f.removeEventListener("dispose",l);const x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function h(u){const f=u.target;f.removeEventListener("dispose",h);const x=e.get(f);x!==void 0&&(e.delete(f),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function YR(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&pr("WebGLRenderer: "+i+" extension not supported."),s}}}function qR(n,t,e,i){const s={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const x in u.attributes)t.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const f in u)t.update(u[f],n.ARRAY_BUFFER)}function l(d){const u=[],f=d.index,x=d.attributes.position;let v=0;if(x===void 0)return;if(f!==null){const w=f.array;v=f.version;for(let S=0,g=w.length;S<g;S+=3){const M=w[S+0],y=w[S+1],R=w[S+2];u.push(M,y,y,R,R,M)}}else{const w=x.array;v=x.version;for(let S=0,g=w.length/3-1;S<g;S+=3){const M=S+0,y=S+1,R=S+2;u.push(M,y,y,R,R,M)}}const m=new(x.count>=65535?hg:ug)(u,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function ZR(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function l(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function KR(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:De("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function jR(n,t,e){const i=new WeakMap,s=new pn;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(a);if(u===void 0||u.count!==d){let b=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),x===!0&&(S=2),v===!0&&(S=3);let g=a.attributes.position.count*S,M=1;g>t.maxTextureSize&&(M=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);const y=new Float32Array(g*M*4*d),R=new lg(y,g,M,d);R.type=Di,R.needsUpdate=!0;const _=S*4;for(let A=0;A<d;A++){const C=m[A],E=p[A],U=w[A],k=g*M*4*A;for(let O=0;O<C.count;O++){const V=O*_;f===!0&&(s.fromBufferAttribute(C,O),y[k+V+0]=s.x,y[k+V+1]=s.y,y[k+V+2]=s.z,y[k+V+3]=0),x===!0&&(s.fromBufferAttribute(E,O),y[k+V+4]=s.x,y[k+V+5]=s.y,y[k+V+6]=s.z,y[k+V+7]=0),v===!0&&(s.fromBufferAttribute(U,O),y[k+V+8]=s.x,y[k+V+9]=s.y,y[k+V+10]=s.z,y[k+V+11]=U.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new xt(g,M)},i.set(a,u),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];const x=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",x),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function JR(n,t,e,i,s){let r=new WeakMap;function o(l){const h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}const QR={[Rh]:"LINEAR_TONE_MAPPING",[Ah]:"REINHARD_TONE_MAPPING",[Ch]:"CINEON_TONE_MAPPING",[Ga]:"ACES_FILMIC_TONE_MAPPING",[Ih]:"AGX_TONE_MAPPING",[zh]:"NEUTRAL_TONE_MAPPING",[Ph]:"CUSTOM_TONE_MAPPING"};function tA(n,t,e,i,s,r){const o=new ri(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new yr(t,e):void 0}),a=new ri(t,e,{type:xi,depthBuffer:!1,stencilBuffer:!1}),c=new bn;c.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Le([0,2,0,0,2,0],2));const l=new yg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new yt(c,l),d=new Xa(-1,1,1,-1,0,1);let u=null,f=null,x=!1,v,m=null,p=[],w=!1;this.setSize=function(S,g){o.setSize(S,g),a.setSize(S,g);for(let M=0;M<p.length;M++){const y=p[M];y.setSize&&y.setSize(S,g)}},this.setEffects=function(S){p=S,w=p.length>0&&p[0].isRenderPass===!0;const g=o.width,M=o.height;for(let y=0;y<p.length;y++){const R=p[y];R.setSize&&R.setSize(g,M)}},this.begin=function(S,g){if(x||S.toneMapping===qi&&p.length===0)return!1;if(m=g,g!==null){const M=g.width,y=g.height;(o.width!==M||o.height!==y)&&this.setSize(M,y)}return w===!1&&S.setRenderTarget(o),v=S.toneMapping,S.toneMapping=qi,!0},this.hasRenderPass=function(){return w},this.end=function(S,g){S.toneMapping=v,x=!0;let M=o,y=a;for(let R=0;R<p.length;R++){const _=p[R];if(_.enabled!==!1&&(_.render(S,y,M,g),_.needsSwap!==!1)){const b=M;M=y,y=b}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,l.defines={},Pe.getTransfer(u)===Ze&&(l.defines.SRGB_TRANSFER="");const R=QR[f];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(m),S.render(h,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const iS=new On,Dp=new yr(1,1),sS=new lg,rS=new E2,oS=new mg,Gx=[],$x=[],Vx=new Float32Array(16),Wx=new Float32Array(9),Xx=new Float32Array(4);function wo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Gx[s];if(r===void 0&&(r=new Float32Array(s),Gx[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function Rn(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function An(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Kh(n,t){let e=$x[t];e===void 0&&(e=new Int32Array(t),$x[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function eA(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function nA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;n.uniform2fv(this.addr,t),An(e,t)}}function iA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Rn(e,t))return;n.uniform3fv(this.addr,t),An(e,t)}}function sA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;n.uniform4fv(this.addr,t),An(e,t)}}function rA(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Rn(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),An(e,t)}else{if(Rn(e,i))return;Xx.set(i),n.uniformMatrix2fv(this.addr,!1,Xx),An(e,i)}}function oA(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Rn(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),An(e,t)}else{if(Rn(e,i))return;Wx.set(i),n.uniformMatrix3fv(this.addr,!1,Wx),An(e,i)}}function aA(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Rn(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),An(e,t)}else{if(Rn(e,i))return;Vx.set(i),n.uniformMatrix4fv(this.addr,!1,Vx),An(e,i)}}function cA(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function lA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;n.uniform2iv(this.addr,t),An(e,t)}}function uA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;n.uniform3iv(this.addr,t),An(e,t)}}function hA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;n.uniform4iv(this.addr,t),An(e,t)}}function dA(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function fA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Rn(e,t))return;n.uniform2uiv(this.addr,t),An(e,t)}}function pA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Rn(e,t))return;n.uniform3uiv(this.addr,t),An(e,t)}}function mA(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Rn(e,t))return;n.uniform4uiv(this.addr,t),An(e,t)}}function gA(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Dp.compareFunction=e.isReversedDepthBuffer()?Hh:Bh,r=Dp):r=iS,e.setTexture2D(t||r,s)}function xA(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||rS,s)}function _A(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||oS,s)}function yA(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||sS,s)}function vA(n){switch(n){case 5126:return eA;case 35664:return nA;case 35665:return iA;case 35666:return sA;case 35674:return rA;case 35675:return oA;case 35676:return aA;case 5124:case 35670:return cA;case 35667:case 35671:return lA;case 35668:case 35672:return uA;case 35669:case 35673:return hA;case 5125:return dA;case 36294:return fA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return yA}}function MA(n,t){n.uniform1fv(this.addr,t)}function wA(n,t){const e=wo(t,this.size,2);n.uniform2fv(this.addr,e)}function SA(n,t){const e=wo(t,this.size,3);n.uniform3fv(this.addr,e)}function bA(n,t){const e=wo(t,this.size,4);n.uniform4fv(this.addr,e)}function EA(n,t){const e=wo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function TA(n,t){const e=wo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function RA(n,t){const e=wo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function AA(n,t){n.uniform1iv(this.addr,t)}function CA(n,t){n.uniform2iv(this.addr,t)}function PA(n,t){n.uniform3iv(this.addr,t)}function IA(n,t){n.uniform4iv(this.addr,t)}function zA(n,t){n.uniform1uiv(this.addr,t)}function DA(n,t){n.uniform2uiv(this.addr,t)}function LA(n,t){n.uniform3uiv(this.addr,t)}function NA(n,t){n.uniform4uiv(this.addr,t)}function UA(n,t,e){const i=this.cache,s=t.length,r=Kh(e,s);Rn(i,r)||(n.uniform1iv(this.addr,r),An(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=Dp:o=iS;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function OA(n,t,e){const i=this.cache,s=t.length,r=Kh(e,s);Rn(i,r)||(n.uniform1iv(this.addr,r),An(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||rS,r[o])}function kA(n,t,e){const i=this.cache,s=t.length,r=Kh(e,s);Rn(i,r)||(n.uniform1iv(this.addr,r),An(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||oS,r[o])}function FA(n,t,e){const i=this.cache,s=t.length,r=Kh(e,s);Rn(i,r)||(n.uniform1iv(this.addr,r),An(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||sS,r[o])}function BA(n){switch(n){case 5126:return MA;case 35664:return wA;case 35665:return SA;case 35666:return bA;case 35674:return EA;case 35675:return TA;case 35676:return RA;case 5124:case 35670:return AA;case 35667:case 35671:return CA;case 35668:case 35672:return PA;case 35669:case 35673:return IA;case 5125:return zA;case 36294:return DA;case 36295:return LA;case 36296:return NA;case 35678:case 36198:case 36298:case 36306:case 35682:return UA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return FA}}class HA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=vA(e.type)}}class GA{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=BA(e.type)}}class $A{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function Yx(n,t){n.seq.push(t),n.map[t.id]=t}function VA(n,t,e){const i=n.name,s=i.length;for(Vd.lastIndex=0;;){const r=Vd.exec(i),o=Vd.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Yx(e,l===void 0?new HA(a,n,t):new GA(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new $A(a),Yx(e,d)),e=d}}}class nl{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);VA(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function qx(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const WA=37297;let XA=0;function YA(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const Zx=new xe;function qA(n){Pe._getMatrix(Zx,Pe.workingColorSpace,n);const t=`mat3( ${Zx.elements.map(e=>e.toFixed(4))} )`;switch(Pe.getTransfer(n)){case ha:return[t,"LinearTransferOETF"];case Ze:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Kx(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+YA(n.getShaderSource(t),a)}else return r}function ZA(n,t){const e=qA(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const KA={[Rh]:"Linear",[Ah]:"Reinhard",[Ch]:"Cineon",[Ga]:"ACESFilmic",[Ih]:"AgX",[zh]:"Neutral",[Ph]:"Custom"};function jA(n,t){const e=KA[t];return e===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const _c=new B;function JA(){Pe.getLuminanceCoefficients(_c);const n=_c.x.toFixed(4),t=_c.y.toFixed(4),e=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function tC(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function eC(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function qo(n){return n!==""}function jx(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jx(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lp(n){return n.replace(nC,sC)}const iC=new Map;function sC(n,t){let e=Ee[t];if(e===void 0){const i=iC.get(t);if(i!==void 0)e=Ee[i],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lp(e)}const rC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qx(n){return n.replace(rC,oC)}function oC(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function t1(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const aC={[Jo]:"SHADOWMAP_TYPE_PCF",[io]:"SHADOWMAP_TYPE_VSM"};function cC(n){return aC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lC={[Xs]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE_UV"};function uC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":lC[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const hC={[_r]:"ENVMAP_MODE_REFRACTION"};function dC(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":hC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fC={[eg]:"ENVMAP_BLENDING_MULTIPLY",[u2]:"ENVMAP_BLENDING_MIX",[h2]:"ENVMAP_BLENDING_ADD"};function pC(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":fC[n.combine]||"ENVMAP_BLENDING_NONE"}function mC(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function gC(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=cC(e),l=uC(e),h=dC(e),d=pC(e),u=mC(e),f=QA(e),x=tC(r),v=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(qo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(qo).join(`
`),p.length>0&&(p+=`
`)):(m=[t1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),p=[t1(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==qi?"#define TONE_MAPPING":"",e.toneMapping!==qi?Ee.tonemapping_pars_fragment:"",e.toneMapping!==qi?jA("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,ZA("linearToOutputTexel",e.outputColorSpace),JA(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qo).join(`
`)),o=Lp(o),o=jx(o,e),o=Jx(o,e),a=Lp(a),a=jx(a,e),a=Jx(a,e),o=Qx(o),a=Qx(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+m+o,g=w+p+a,M=qx(s,s.VERTEX_SHADER,S),y=qx(s,s.FRAGMENT_SHADER,g);s.attachShader(v,M),s.attachShader(v,y),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(C){if(n.debug.checkShaderErrors){const E=s.getProgramInfoLog(v)||"",U=s.getShaderInfoLog(M)||"",k=s.getShaderInfoLog(y)||"",O=E.trim(),V=U.trim(),W=k.trim();let Y=!0,tt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,M,y);else{const q=Kx(s,M,"vertex"),ht=Kx(s,y,"fragment");De("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+q+`
`+ht)}else O!==""?de("WebGLProgram: Program Info Log:",O):(V===""||W==="")&&(tt=!1);tt&&(C.diagnostics={runnable:Y,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:W,prefix:p}})}s.deleteShader(M),s.deleteShader(y),_=new nl(s,v),b=eC(s,v)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(v,WA)),A},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=XA++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=y,this}let xC=0;class _C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new yC(t),e.set(t,i)),i}}class yC{constructor(t){this.id=xC++,this.code=t,this.usedTimes=0}}function vC(n){return n===Ys||n===ca||n===la}function MC(n,t,e,i,s,r){const o=new $h,a=new _C,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer;let u=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,b,A,C,E,U){const k=C.fog,O=E.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=t.get(_.envMap||V,W),tt=Y&&Y.mapping===$a?Y.image.height:null,q=f[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&de("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const ht=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,nt=ht!==void 0?ht.length:0;let Lt=0;O.morphAttributes.position!==void 0&&(Lt=1),O.morphAttributes.normal!==void 0&&(Lt=2),O.morphAttributes.color!==void 0&&(Lt=3);let te,Ut,$,at;if(q){const Kt=Wi[q];te=Kt.vertexShader,Ut=Kt.fragmentShader}else{te=_.vertexShader,Ut=_.fragmentShader;const Kt=a.getVertexShaderStage(_),Je=a.getFragmentShaderStage(_);a.update(_,Kt,Je),$=Kt.id,at=Je.id}const ot=n.getRenderTarget(),At=n.state.buffers.depth.getReversed(),Ht=E.isInstancedMesh===!0,$t=E.isBatchedMesh===!0,he=!!_.map,Vt=!!_.matcap,ce=!!Y,ve=!!_.aoMap,me=!!_.lightMap,Ne=!!_.bumpMap&&_.wireframe===!1,Me=!!_.normalMap,Xe=!!_.displacementMap,je=!!_.emissiveMap,Ye=!!_.metalnessMap,$e=!!_.roughnessMap,F=_.anisotropy>0,vn=_.clearcoat>0,Ae=_.dispersion>0,z=_.iridescence>0,T=_.sheen>0,Z=_.transmission>0,Q=F&&!!_.anisotropyMap,st=vn&&!!_.clearcoatMap,St=vn&&!!_.clearcoatNormalMap,wt=vn&&!!_.clearcoatRoughnessMap,it=z&&!!_.iridescenceMap,lt=z&&!!_.iridescenceThicknessMap,Ct=T&&!!_.sheenColorMap,ee=T&&!!_.sheenRoughnessMap,Pt=!!_.specularMap,Dt=!!_.specularColorMap,Xt=!!_.specularIntensityMap,ae=Z&&!!_.transmissionMap,fe=Z&&!!_.thicknessMap,H=!!_.gradientMap,It=!!_.alphaMap,rt=_.alphaTest>0,vt=!!_.alphaHash,Rt=!!_.extensions;let pt=qi;_.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(pt=n.toneMapping);const Qt={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:te,fragmentShader:Ut,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:at,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:$t,batchingColor:$t&&E._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&E.instanceColor!==null,instancingMorph:Ht&&E.morphTexture!==null,outputColorSpace:ot===null?n.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Pe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:he,matcap:Vt,envMap:ce,envMapMode:ce&&Y.mapping,envMapCubeUVHeight:tt,aoMap:ve,lightMap:me,bumpMap:Ne,normalMap:Me,displacementMap:Xe,emissiveMap:je,normalMapObjectSpace:Me&&_.normalMapType===p2,normalMapTangentSpace:Me&&_.normalMapType===Zu,packedNormalMap:Me&&_.normalMapType===Zu&&vC(_.normalMap.format),metalnessMap:Ye,roughnessMap:$e,anisotropy:F,anisotropyMap:Q,clearcoat:vn,clearcoatMap:st,clearcoatNormalMap:St,clearcoatRoughnessMap:wt,dispersion:Ae,iridescence:z,iridescenceMap:it,iridescenceThicknessMap:lt,sheen:T,sheenColorMap:Ct,sheenRoughnessMap:ee,specularMap:Pt,specularColorMap:Dt,specularIntensityMap:Xt,transmission:Z,transmissionMap:ae,thicknessMap:fe,gradientMap:H,opaque:_.transparent===!1&&_.blending===fr&&_.alphaToCoverage===!1,alphaMap:It,alphaTest:rt,alphaHash:vt,combine:_.combine,mapUv:he&&x(_.map.channel),aoMapUv:ve&&x(_.aoMap.channel),lightMapUv:me&&x(_.lightMap.channel),bumpMapUv:Ne&&x(_.bumpMap.channel),normalMapUv:Me&&x(_.normalMap.channel),displacementMapUv:Xe&&x(_.displacementMap.channel),emissiveMapUv:je&&x(_.emissiveMap.channel),metalnessMapUv:Ye&&x(_.metalnessMap.channel),roughnessMapUv:$e&&x(_.roughnessMap.channel),anisotropyMapUv:Q&&x(_.anisotropyMap.channel),clearcoatMapUv:st&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:St&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&x(_.sheenRoughnessMap.channel),specularMapUv:Pt&&x(_.specularMap.channel),specularColorMapUv:Dt&&x(_.specularColorMap.channel),specularIntensityMapUv:Xt&&x(_.specularIntensityMap.channel),transmissionMapUv:ae&&x(_.transmissionMap.channel),thicknessMapUv:fe&&x(_.thicknessMap.channel),alphaMapUv:It&&x(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Me||F),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!O.attributes.uv&&(he||It),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&Me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:At,skinning:E.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Lt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:pt,decodeVideoTexture:he&&_.map.isVideoTexture===!0&&Pe.getTransfer(_.map.colorSpace)===Ze,decodeVideoTextureEmissive:je&&_.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(_.emissiveMap.colorSpace)===Ze,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_e,flipSided:_.side===Jn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Rt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&_.extensions.multiDraw===!0||$t)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qt.vertexUv1s=c.has(1),Qt.vertexUv2s=c.has(2),Qt.vertexUv3s=c.has(3),c.clear(),Qt}function m(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const A in _.defines)b.push(A),b.push(_.defines[A]);return _.isRawShaderMaterial===!1&&(p(b,_),w(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function w(_,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){const b=f[_.type];let A;if(b){const C=Wi[b];A=xo.clone(C.uniforms)}else A=_.uniforms;return A}function g(_,b){let A=h.get(b);return A!==void 0?++A.usedTimes:(A=new gC(n,b,_,s),l.push(A),h.set(b,A)),A}function M(_){if(--_.usedTimes===0){const b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function y(_){a.remove(_)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:S,acquireProgram:g,releaseProgram:M,releaseShaderCache:y,programs:l,dispose:R}}function wC(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,c){n.get(o)[a]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function SC(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function e1(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function n1(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,x,v,m,p){let w=n[t];return w===void 0?(w={id:u.id,object:u,geometry:f,material:x,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[t]=w):(w.id=u.id,w.object=u,w.geometry=f,w.material=x,w.materialVariant=o(u),w.groupOrder=v,w.renderOrder=u.renderOrder,w.z=m,w.group=p),t++,w}function c(u,f,x,v,m,p){const w=a(u,f,x,v,m,p);x.transmission>0?i.push(w):x.transparent===!0?s.push(w):e.push(w)}function l(u,f,x,v,m,p){const w=a(u,f,x,v,m,p);x.transmission>0?i.unshift(w):x.transparent===!0?s.unshift(w):e.unshift(w)}function h(u,f,x){e.length>1&&e.sort(u||SC),i.length>1&&i.sort(f||e1),s.length>1&&s.sort(f||e1),x&&(e.reverse(),i.reverse(),s.reverse())}function d(){for(let u=t,f=n.length;u<f;u++){const x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function bC(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new n1,n.set(i,[o])):s>=r.length?(o=new n1,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function EC(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new se};break;case"SpotLight":e={position:new B,direction:new B,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function TC(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let RC=0;function AC(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function CC(n){const t=new EC,e=TC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const s=new B,r=new tn,o=new tn;function a(l){let h=0,d=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,x=0,v=0,m=0,p=0,w=0,S=0,g=0,M=0,y=0,R=0;l.sort(AC);for(let b=0,A=l.length;b<A;b++){const C=l[b],E=C.color,U=C.intensity,k=C.distance;let O=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ys?O=C.shadow.map.texture:O=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=E.r*U,d+=E.g*U,u+=E.b*U;else if(C.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(C.sh.coefficients[V],U);R++}else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const W=C.shadow,Y=e.get(C);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=C.shadow.matrix,w++}i.directional[f]=V,f++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(E).multiplyScalar(U),V.distance=k,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,i.spot[v]=V;const W=C.shadow;if(C.map&&(i.spotLightMap[M]=C.map,M++,W.updateMatrices(C),C.castShadow&&y++),i.spotLightMatrix[v]=W.matrix,C.castShadow){const Y=e.get(C);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=O,g++}v++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(E).multiplyScalar(U),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=V,m++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const W=C.shadow,Y=e.get(C);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,i.pointShadow[x]=Y,i.pointShadowMap[x]=O,i.pointShadowMatrix[x]=C.shadow.matrix,S++}i.point[x]=V,x++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(U),V.groundColor.copy(C.groundColor).multiplyScalar(U),i.hemi[p]=V,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Wt.LTC_FLOAT_1,i.rectAreaLTC2=Wt.LTC_FLOAT_2):(i.rectAreaLTC1=Wt.LTC_HALF_1,i.rectAreaLTC2=Wt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const _=i.hash;(_.directionalLength!==f||_.pointLength!==x||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==w||_.numPointShadows!==S||_.numSpotShadows!==g||_.numSpotMaps!==M||_.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=g+M-y,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=y,i.numLightProbes=R,_.directionalLength=f,_.pointLength=x,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=w,_.numPointShadows=S,_.numSpotShadows=g,_.numSpotMaps=M,_.numLightProbes=R,i.version=RC++)}function c(l,h){let d=0,u=0,f=0,x=0,v=0;const m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const S=l[p];if(S.isDirectionalLight){const g=i.directional[d];g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),d++}else if(S.isSpotLight){const g=i.spot[f];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),g.direction.sub(s),g.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const g=i.rectArea[x];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),g.halfWidth.set(S.width*.5,0,0),g.halfHeight.set(0,S.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const g=i.point[u];g.position.setFromMatrixPosition(S.matrixWorld),g.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const g=i.hemi[v];g.direction.setFromMatrixPosition(S.matrixWorld),g.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:i}}function i1(n){const t=new CC(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function PC(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new i1(n),t.set(s,[a])):r>=o.length?(a=new i1(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}const IC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DC=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],LC=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],s1=new tn,ko=new B,Wd=new B;function NC(n,t,e){let i=new Wh;const s=new xt,r=new xt,o=new pn,a=new $2,c=new V2,l={},h=e.maxTextureSize,d={[Es]:Jn,[Jn]:Es,[_e]:_e},u=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:IC,fragmentShader:zC}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const x=new bn;x.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new yt(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let p=this.type;this.render=function(y,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===tg&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jo);const b=n.getRenderTarget(),A=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),E=n.state;E.setBlending(Yi),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);const U=p!==this.type;U&&R.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(O=>O.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,O=y.length;k<O;k++){const V=y[k],W=V.shadow;if(W===void 0){de("WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Y=W.getFrameExtents();s.multiply(Y),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,W.mapSize.y=r.y));const tt=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=tt,W.map===null||U===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===io){if(V.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ri(s.x,s.y,{format:Ys,type:xi,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),W.map.texture.name=V.name+".shadowMap",W.map.depthTexture=new yr(s.x,s.y,Di),W.map.depthTexture.name=V.name+".shadowMapDepth",W.map.depthTexture.format=as,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn}else V.isPointLight?(W.map=new Mg(s.x),W.map.depthTexture=new P2(s.x,Zi)):(W.map=new ri(s.x,s.y),W.map.depthTexture=new yr(s.x,s.y,Zi)),W.map.depthTexture.name=V.name+".shadowMap",W.map.depthTexture.format=as,this.type===Jo?(W.map.depthTexture.compareFunction=tt?Hh:Bh,W.map.depthTexture.minFilter=Gn,W.map.depthTexture.magFilter=Gn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn);W.camera.updateProjectionMatrix()}const q=W.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<q;ht++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,ht),n.clear();else{ht===0&&(n.setRenderTarget(W.map),n.clear());const nt=W.getViewport(ht);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),E.viewport(o)}if(V.isPointLight){const nt=W.camera,Lt=W.matrix,te=V.distance||nt.far;te!==nt.far&&(nt.far=te,nt.updateProjectionMatrix()),ko.setFromMatrixPosition(V.matrixWorld),nt.position.copy(ko),Wd.copy(nt.position),Wd.add(DC[ht]),nt.up.copy(LC[ht]),nt.lookAt(Wd),nt.updateMatrixWorld(),Lt.makeTranslation(-ko.x,-ko.y,-ko.z),s1.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(s1,nt.coordinateSystem,nt.reversedDepth)}else W.updateMatrices(V);i=W.getFrustum(),g(R,_,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===io&&w(W,_),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,A,C)};function w(y,R){const _=t.update(v);u.defines.VSM_SAMPLES!==y.blurSamples&&(u.defines.VSM_SAMPLES=y.blurSamples,f.defines.VSM_SAMPLES=y.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ri(s.x,s.y,{format:Ys,type:xi})),u.uniforms.shadow_pass.value=y.map.depthTexture,u.uniforms.resolution.value=y.mapSize,u.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(R,null,_,u,v,null),f.uniforms.shadow_pass.value=y.mapPass.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(R,null,_,f,v,null)}function S(y,R,_,b){let A=null;const C=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(C!==void 0)A=C;else if(A=_.isPointLight===!0?c:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const E=A.uuid,U=R.uuid;let k=l[E];k===void 0&&(k={},l[E]=k);let O=k[U];O===void 0&&(O=A.clone(),k[U]=O,R.addEventListener("dispose",M)),A=O}if(A.visible=R.visible,A.wireframe=R.wireframe,b===io?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:d[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,_.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const E=n.properties.get(A);E.light=_}return A}function g(y,R,_,b,A){if(y.visible===!1)return;if(y.layers.test(R.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&A===io)&&(!y.frustumCulled||i.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const U=t.update(y),k=y.material;if(Array.isArray(k)){const O=U.groups;for(let V=0,W=O.length;V<W;V++){const Y=O[V],tt=k[Y.materialIndex];if(tt&&tt.visible){const q=S(y,tt,b,A);y.onBeforeShadow(n,y,R,_,U,q,Y),n.renderBufferDirect(_,null,U,q,y,Y),y.onAfterShadow(n,y,R,_,U,q,Y)}}}else if(k.visible){const O=S(y,k,b,A);y.onBeforeShadow(n,y,R,_,U,O,null),n.renderBufferDirect(_,null,U,O,y,null),y.onAfterShadow(n,y,R,_,U,O,null)}}const E=y.children;for(let U=0,k=E.length;U<k;U++)g(E[U],R,_,b,A)}function M(y){y.target.removeEventListener("dispose",M);for(const _ in l){const b=l[_],A=y.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}function UC(n,t){function e(){let H=!1;const It=new pn;let rt=null;const vt=new pn(0,0,0,0);return{setMask:function(Rt){rt!==Rt&&!H&&(n.colorMask(Rt,Rt,Rt,Rt),rt=Rt)},setLocked:function(Rt){H=Rt},setClear:function(Rt,pt,Qt,Kt,Je){Je===!0&&(Rt*=Kt,pt*=Kt,Qt*=Kt),It.set(Rt,pt,Qt,Kt),vt.equals(It)===!1&&(n.clearColor(Rt,pt,Qt,Kt),vt.copy(It))},reset:function(){H=!1,rt=null,vt.set(-1,0,0,0)}}}function i(){let H=!1,It=!1,rt=null,vt=null,Rt=null;return{setReversed:function(pt){if(It!==pt){const Qt=t.get("EXT_clip_control");pt?Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.ZERO_TO_ONE_EXT):Qt.clipControlEXT(Qt.LOWER_LEFT_EXT,Qt.NEGATIVE_ONE_TO_ONE_EXT),It=pt;const Kt=Rt;Rt=null,this.setClear(Kt)}},getReversed:function(){return It},setTest:function(pt){pt?ot(n.DEPTH_TEST):At(n.DEPTH_TEST)},setMask:function(pt){rt!==pt&&!H&&(n.depthMask(pt),rt=pt)},setFunc:function(pt){if(It&&(pt=EE[pt]),vt!==pt){switch(pt){case uu:n.depthFunc(n.NEVER);break;case hu:n.depthFunc(n.ALWAYS);break;case du:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case fu:n.depthFunc(n.EQUAL);break;case pu:n.depthFunc(n.GEQUAL);break;case mu:n.depthFunc(n.GREATER);break;case gu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}vt=pt}},setLocked:function(pt){H=pt},setClear:function(pt){Rt!==pt&&(Rt=pt,It&&(pt=1-pt),n.clearDepth(pt))},reset:function(){H=!1,rt=null,vt=null,Rt=null,It=!1}}}function s(){let H=!1,It=null,rt=null,vt=null,Rt=null,pt=null,Qt=null,Kt=null,Je=null;return{setTest:function(He){H||(He?ot(n.STENCIL_TEST):At(n.STENCIL_TEST))},setMask:function(He){It!==He&&!H&&(n.stencilMask(He),It=He)},setFunc:function(He,kn,Vn){(rt!==He||vt!==kn||Rt!==Vn)&&(n.stencilFunc(He,kn,Vn),rt=He,vt=kn,Rt=Vn)},setOp:function(He,kn,Vn){(pt!==He||Qt!==kn||Kt!==Vn)&&(n.stencilOp(He,kn,Vn),pt=He,Qt=kn,Kt=Vn)},setLocked:function(He){H=He},setClear:function(He){Je!==He&&(n.clearStencil(He),Je=He)},reset:function(){H=!1,It=null,rt=null,vt=null,Rt=null,pt=null,Qt=null,Kt=null,Je=null}}}const r=new e,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let h={},d={},u={},f=new WeakMap,x=[],v=null,m=!1,p=null,w=null,S=null,g=null,M=null,y=null,R=null,_=new se(0,0,0),b=0,A=!1,C=null,E=null,U=null,k=null,O=null;const V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const tt=n.getParameter(n.VERSION);tt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(tt)[1]),W=Y>=1):tt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),W=Y>=2);let q=null,ht={};const nt=n.getParameter(n.SCISSOR_BOX),Lt=n.getParameter(n.VIEWPORT),te=new pn().fromArray(nt),Ut=new pn().fromArray(Lt);function $(H,It,rt,vt){const Rt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(H,pt),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Qt=0;Qt<rt;Qt++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(It,0,n.RGBA,1,1,vt,0,n.RGBA,n.UNSIGNED_BYTE,Rt):n.texImage2D(It+Qt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Rt);return pt}const at={};at[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),at[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),at[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(n.DEPTH_TEST),o.setFunc(xr),Ne(!1),Me(Sp),ot(n.CULL_FACE),ve(Yi);function ot(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function At(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function Ht(H,It){return u[H]!==It?(n.bindFramebuffer(H,It),u[H]=It,H===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=It),H===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=It),!0):!1}function $t(H,It){let rt=x,vt=!1;if(H){rt=f.get(It),rt===void 0&&(rt=[],f.set(It,rt));const Rt=H.textures;if(rt.length!==Rt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Qt=Rt.length;pt<Qt;pt++)rt[pt]=n.COLOR_ATTACHMENT0+pt;rt.length=Rt.length,vt=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,vt=!0);vt&&n.drawBuffers(rt)}function he(H){return v!==H?(n.useProgram(H),v=H,!0):!1}const Vt={[ks]:n.FUNC_ADD,[Yw]:n.FUNC_SUBTRACT,[qw]:n.FUNC_REVERSE_SUBTRACT};Vt[Zw]=n.MIN,Vt[Kw]=n.MAX;const ce={[jw]:n.ZERO,[Jw]:n.ONE,[Qw]:n.SRC_COLOR,[cu]:n.SRC_ALPHA,[r2]:n.SRC_ALPHA_SATURATE,[i2]:n.DST_COLOR,[e2]:n.DST_ALPHA,[t2]:n.ONE_MINUS_SRC_COLOR,[lu]:n.ONE_MINUS_SRC_ALPHA,[s2]:n.ONE_MINUS_DST_COLOR,[n2]:n.ONE_MINUS_DST_ALPHA,[o2]:n.CONSTANT_COLOR,[a2]:n.ONE_MINUS_CONSTANT_COLOR,[c2]:n.CONSTANT_ALPHA,[l2]:n.ONE_MINUS_CONSTANT_ALPHA};function ve(H,It,rt,vt,Rt,pt,Qt,Kt,Je,He){if(H===Yi){m===!0&&(At(n.BLEND),m=!1);return}if(m===!1&&(ot(n.BLEND),m=!0),H!==Xw){if(H!==p||He!==A){if((w!==ks||M!==ks)&&(n.blendEquation(n.FUNC_ADD),w=ks,M=ks),He)switch(H){case fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mn:n.blendFunc(n.ONE,n.ONE);break;case bp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ep:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:De("WebGLState: Invalid blending: ",H);break}else switch(H){case fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bp:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ep:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",H);break}S=null,g=null,y=null,R=null,_.set(0,0,0),b=0,p=H,A=He}return}Rt=Rt||It,pt=pt||rt,Qt=Qt||vt,(It!==w||Rt!==M)&&(n.blendEquationSeparate(Vt[It],Vt[Rt]),w=It,M=Rt),(rt!==S||vt!==g||pt!==y||Qt!==R)&&(n.blendFuncSeparate(ce[rt],ce[vt],ce[pt],ce[Qt]),S=rt,g=vt,y=pt,R=Qt),(Kt.equals(_)===!1||Je!==b)&&(n.blendColor(Kt.r,Kt.g,Kt.b,Je),_.copy(Kt),b=Je),p=H,A=!1}function me(H,It){H.side===_e?At(n.CULL_FACE):ot(n.CULL_FACE);let rt=H.side===Jn;It&&(rt=!rt),Ne(rt),H.blending===fr&&H.transparent===!1?ve(Yi):ve(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const vt=H.stencilWrite;a.setTest(vt),vt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),je(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ot(n.SAMPLE_ALPHA_TO_COVERAGE):At(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(H){C!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),C=H)}function Me(H){H!==Vw?(ot(n.CULL_FACE),H!==E&&(H===Sp?n.cullFace(n.BACK):H===Ww?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):At(n.CULL_FACE),E=H}function Xe(H){H!==U&&(W&&n.lineWidth(H),U=H)}function je(H,It,rt){H?(ot(n.POLYGON_OFFSET_FILL),(k!==It||O!==rt)&&(k=It,O=rt,o.getReversed()&&(It=-It),n.polygonOffset(It,rt))):At(n.POLYGON_OFFSET_FILL)}function Ye(H){H?ot(n.SCISSOR_TEST):At(n.SCISSOR_TEST)}function $e(H){H===void 0&&(H=n.TEXTURE0+V-1),q!==H&&(n.activeTexture(H),q=H)}function F(H,It,rt){rt===void 0&&(q===null?rt=n.TEXTURE0+V-1:rt=q);let vt=ht[rt];vt===void 0&&(vt={type:void 0,texture:void 0},ht[rt]=vt),(vt.type!==H||vt.texture!==It)&&(q!==rt&&(n.activeTexture(rt),q=rt),n.bindTexture(H,It||at[H]),vt.type=H,vt.texture=It)}function vn(){const H=ht[q];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ae(){try{n.compressedTexImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function T(){try{n.texSubImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function Z(){try{n.texSubImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function Q(){try{n.compressedTexSubImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function st(){try{n.compressedTexSubImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function St(){try{n.texStorage2D(...arguments)}catch(H){De("WebGLState:",H)}}function wt(){try{n.texStorage3D(...arguments)}catch(H){De("WebGLState:",H)}}function it(){try{n.texImage2D(...arguments)}catch(H){De("WebGLState:",H)}}function lt(){try{n.texImage3D(...arguments)}catch(H){De("WebGLState:",H)}}function Ct(H){return d[H]!==void 0?d[H]:n.getParameter(H)}function ee(H,It){d[H]!==It&&(n.pixelStorei(H,It),d[H]=It)}function Pt(H){te.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),te.copy(H))}function Dt(H){Ut.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Ut.copy(H))}function Xt(H,It){let rt=l.get(It);rt===void 0&&(rt=new WeakMap,l.set(It,rt));let vt=rt.get(H);vt===void 0&&(vt=n.getUniformBlockIndex(It,H.name),rt.set(H,vt))}function ae(H,It){const vt=l.get(It).get(H);c.get(It)!==vt&&(n.uniformBlockBinding(It,vt,H.__bindingPointIndex),c.set(It,vt))}function fe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},q=null,ht={},u={},f=new WeakMap,x=[],v=null,m=!1,p=null,w=null,S=null,g=null,M=null,y=null,R=null,_=new se(0,0,0),b=0,A=!1,C=null,E=null,U=null,k=null,O=null,te.set(0,0,n.canvas.width,n.canvas.height),Ut.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ot,disable:At,bindFramebuffer:Ht,drawBuffers:$t,useProgram:he,setBlending:ve,setMaterial:me,setFlipSided:Ne,setCullFace:Me,setLineWidth:Xe,setPolygonOffset:je,setScissorTest:Ye,activeTexture:$e,bindTexture:F,unbindTexture:vn,compressedTexImage2D:Ae,compressedTexImage3D:z,texImage2D:it,texImage3D:lt,pixelStorei:ee,getParameter:Ct,updateUBOMapping:Xt,uniformBlockBinding:ae,texStorage2D:St,texStorage3D:wt,texSubImage2D:T,texSubImage3D:Z,compressedTexSubImage2D:Q,compressedTexSubImage3D:st,scissor:Pt,viewport:Dt,reset:fe}}function OC(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,h=new WeakMap,d=new Set;let u;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(z,T){return x?new OffscreenCanvas(z,T):da("canvas")}function m(z,T,Z){let Q=1;const st=Ae(z);if((st.width>Z||st.height>Z)&&(Q=Z/Math.max(st.width,st.height)),Q<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const St=Math.floor(Q*st.width),wt=Math.floor(Q*st.height);u===void 0&&(u=v(St,wt));const it=T?v(St,wt):u;return it.width=St,it.height=wt,it.getContext("2d").drawImage(z,0,0,St,wt),de("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+St+"x"+wt+")."),it}else return"data"in z&&de("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),z;return z}function p(z){return z.generateMipmaps}function w(z){n.generateMipmap(z)}function S(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function g(z,T,Z,Q,st,St=!1){if(z!==null){if(n[z]!==void 0)return n[z];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let wt;Q&&(wt=t.get("EXT_texture_norm16"),wt||de("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=T;if(T===n.RED&&(Z===n.FLOAT&&(it=n.R32F),Z===n.HALF_FLOAT&&(it=n.R16F),Z===n.UNSIGNED_BYTE&&(it=n.R8),Z===n.UNSIGNED_SHORT&&wt&&(it=wt.R16_EXT),Z===n.SHORT&&wt&&(it=wt.R16_SNORM_EXT)),T===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(it=n.R8UI),Z===n.UNSIGNED_SHORT&&(it=n.R16UI),Z===n.UNSIGNED_INT&&(it=n.R32UI),Z===n.BYTE&&(it=n.R8I),Z===n.SHORT&&(it=n.R16I),Z===n.INT&&(it=n.R32I)),T===n.RG&&(Z===n.FLOAT&&(it=n.RG32F),Z===n.HALF_FLOAT&&(it=n.RG16F),Z===n.UNSIGNED_BYTE&&(it=n.RG8),Z===n.UNSIGNED_SHORT&&wt&&(it=wt.RG16_EXT),Z===n.SHORT&&wt&&(it=wt.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(it=n.RG8UI),Z===n.UNSIGNED_SHORT&&(it=n.RG16UI),Z===n.UNSIGNED_INT&&(it=n.RG32UI),Z===n.BYTE&&(it=n.RG8I),Z===n.SHORT&&(it=n.RG16I),Z===n.INT&&(it=n.RG32I)),T===n.RGB_INTEGER&&(Z===n.UNSIGNED_BYTE&&(it=n.RGB8UI),Z===n.UNSIGNED_SHORT&&(it=n.RGB16UI),Z===n.UNSIGNED_INT&&(it=n.RGB32UI),Z===n.BYTE&&(it=n.RGB8I),Z===n.SHORT&&(it=n.RGB16I),Z===n.INT&&(it=n.RGB32I)),T===n.RGBA_INTEGER&&(Z===n.UNSIGNED_BYTE&&(it=n.RGBA8UI),Z===n.UNSIGNED_SHORT&&(it=n.RGBA16UI),Z===n.UNSIGNED_INT&&(it=n.RGBA32UI),Z===n.BYTE&&(it=n.RGBA8I),Z===n.SHORT&&(it=n.RGBA16I),Z===n.INT&&(it=n.RGBA32I)),T===n.RGB&&(Z===n.UNSIGNED_SHORT&&wt&&(it=wt.RGB16_EXT),Z===n.SHORT&&wt&&(it=wt.RGB16_SNORM_EXT),Z===n.UNSIGNED_INT_5_9_9_9_REV&&(it=n.RGB9_E5),Z===n.UNSIGNED_INT_10F_11F_11F_REV&&(it=n.R11F_G11F_B10F)),T===n.RGBA){const lt=St?ha:Pe.getTransfer(st);Z===n.FLOAT&&(it=n.RGBA32F),Z===n.HALF_FLOAT&&(it=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(it=lt===Ze?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT&&wt&&(it=wt.RGBA16_EXT),Z===n.SHORT&&wt&&(it=wt.RGBA16_SNORM_EXT),Z===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function M(z,T){let Z;return z?T===null||T===Zi||T===po?Z=n.DEPTH24_STENCIL8:T===Di?Z=n.DEPTH32F_STENCIL8:T===fo&&(Z=n.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Zi||T===po?Z=n.DEPTH_COMPONENT24:T===Di?Z=n.DEPTH_COMPONENT32F:T===fo&&(Z=n.DEPTH_COMPONENT16),Z}function y(z,T){return p(z)===!0||z.isFramebufferTexture&&z.minFilter!==Nn&&z.minFilter!==Gn?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function R(z){const T=z.target;T.removeEventListener("dispose",R),b(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function _(z){const T=z.target;T.removeEventListener("dispose",_),C(T)}function b(z){const T=i.get(z);if(T.__webglInit===void 0)return;const Z=z.source,Q=f.get(Z);if(Q){const st=Q[T.__cacheKey];st.usedTimes--,st.usedTimes===0&&A(z),Object.keys(Q).length===0&&f.delete(Z)}i.remove(z)}function A(z){const T=i.get(z);n.deleteTexture(T.__webglTexture);const Z=z.source,Q=f.get(Z);delete Q[T.__cacheKey],o.memory.textures--}function C(z){const T=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(T.__webglFramebuffer[Q]))for(let st=0;st<T.__webglFramebuffer[Q].length;st++)n.deleteFramebuffer(T.__webglFramebuffer[Q][st]);else n.deleteFramebuffer(T.__webglFramebuffer[Q]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[Q])}else{if(Array.isArray(T.__webglFramebuffer))for(let Q=0;Q<T.__webglFramebuffer.length;Q++)n.deleteFramebuffer(T.__webglFramebuffer[Q]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Q=0;Q<T.__webglColorRenderbuffer.length;Q++)T.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[Q]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=z.textures;for(let Q=0,st=Z.length;Q<st;Q++){const St=i.get(Z[Q]);St.__webglTexture&&(n.deleteTexture(St.__webglTexture),o.memory.textures--),i.remove(Z[Q])}i.remove(z)}let E=0;function U(){E=0}function k(){return E}function O(z){E=z}function V(){const z=E;return z>=s.maxTextures&&de("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),E+=1,z}function W(z){const T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function Y(z,T){const Z=i.get(z);if(z.isVideoTexture&&F(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&Z.__version!==z.version){const Q=z.image;if(Q===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{At(Z,z,T);return}}else z.isExternalTexture&&(Z.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+T)}function tt(z,T){const Z=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Z.__version!==z.version){At(Z,z,T);return}else z.isExternalTexture&&(Z.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+T)}function q(z,T){const Z=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&Z.__version!==z.version){At(Z,z,T);return}e.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+T)}function ht(z,T){const Z=i.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&Z.__version!==z.version){Ht(Z,z,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+T)}const nt={[xu]:n.REPEAT,[os]:n.CLAMP_TO_EDGE,[_u]:n.MIRRORED_REPEAT},Lt={[Nn]:n.NEAREST,[d2]:n.NEAREST_MIPMAP_NEAREST,[Yo]:n.NEAREST_MIPMAP_LINEAR,[Gn]:n.LINEAR,[jc]:n.LINEAR_MIPMAP_NEAREST,[Fs]:n.LINEAR_MIPMAP_LINEAR},te={[m2]:n.NEVER,[v2]:n.ALWAYS,[g2]:n.LESS,[Bh]:n.LEQUAL,[x2]:n.EQUAL,[Hh]:n.GEQUAL,[_2]:n.GREATER,[y2]:n.NOTEQUAL};function Ut(z,T){if(T.type===Di&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Gn||T.magFilter===jc||T.magFilter===Yo||T.magFilter===Fs||T.minFilter===Gn||T.minFilter===jc||T.minFilter===Yo||T.minFilter===Fs)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,nt[T.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,nt[T.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,nt[T.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,Lt[T.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,Lt[T.minFilter]),T.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,te[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Nn||T.minFilter!==Yo&&T.minFilter!==Fs||T.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(z,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function $(z,T){let Z=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",R));const Q=T.source;let st=f.get(Q);st===void 0&&(st={},f.set(Q,st));const St=W(T);if(St!==z.__cacheKey){st[St]===void 0&&(st[St]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),st[St].usedTimes++;const wt=st[z.__cacheKey];wt!==void 0&&(st[z.__cacheKey].usedTimes--,wt.usedTimes===0&&A(T)),z.__cacheKey=St,z.__webglTexture=st[St].texture}return Z}function at(z,T,Z){return Math.floor(Math.floor(z/Z)/T)}function ot(z,T,Z,Q){const St=z.updateRanges;if(St.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Z,Q,T.data);else{St.sort((ee,Pt)=>ee.start-Pt.start);let wt=0;for(let ee=1;ee<St.length;ee++){const Pt=St[wt],Dt=St[ee],Xt=Pt.start+Pt.count,ae=at(Dt.start,T.width,4),fe=at(Pt.start,T.width,4);Dt.start<=Xt+1&&ae===fe&&at(Dt.start+Dt.count-1,T.width,4)===ae?Pt.count=Math.max(Pt.count,Dt.start+Dt.count-Pt.start):(++wt,St[wt]=Dt)}St.length=wt+1;const it=e.getParameter(n.UNPACK_ROW_LENGTH),lt=e.getParameter(n.UNPACK_SKIP_PIXELS),Ct=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let ee=0,Pt=St.length;ee<Pt;ee++){const Dt=St[ee],Xt=Math.floor(Dt.start/4),ae=Math.ceil(Dt.count/4),fe=Xt%T.width,H=Math.floor(Xt/T.width),It=ae,rt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,fe),e.pixelStorei(n.UNPACK_SKIP_ROWS,H),e.texSubImage2D(n.TEXTURE_2D,0,fe,H,It,rt,Z,Q,T.data)}z.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,it),e.pixelStorei(n.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(n.UNPACK_SKIP_ROWS,Ct)}}function At(z,T,Z){let Q=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Q=n.TEXTURE_3D);const st=$(z,T),St=T.source;e.bindTexture(Q,z.__webglTexture,n.TEXTURE0+Z);const wt=i.get(St);if(St.version!==wt.__version||st===!0){if(e.activeTexture(n.TEXTURE0+Z),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const rt=Pe.getPrimaries(Pe.workingColorSpace),vt=T.colorSpace===Ms?null:Pe.getPrimaries(T.colorSpace),Rt=T.colorSpace===Ms||rt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let lt=m(T.image,!1,s.maxTextureSize);lt=vn(T,lt);const Ct=r.convert(T.format,T.colorSpace),ee=r.convert(T.type);let Pt=g(T.internalFormat,Ct,ee,T.normalized,T.colorSpace,T.isVideoTexture);Ut(Q,T);let Dt;const Xt=T.mipmaps,ae=T.isVideoTexture!==!0,fe=wt.__version===void 0||st===!0,H=St.dataReady,It=y(T,lt);if(T.isDepthTexture)Pt=M(T.format===Bs,T.type),fe&&(ae?e.texStorage2D(n.TEXTURE_2D,1,Pt,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Pt,lt.width,lt.height,0,Ct,ee,null));else if(T.isDataTexture)if(Xt.length>0){ae&&fe&&e.texStorage2D(n.TEXTURE_2D,It,Pt,Xt[0].width,Xt[0].height);for(let rt=0,vt=Xt.length;rt<vt;rt++)Dt=Xt[rt],ae?H&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Dt.width,Dt.height,Ct,ee,Dt.data):e.texImage2D(n.TEXTURE_2D,rt,Pt,Dt.width,Dt.height,0,Ct,ee,Dt.data);T.generateMipmaps=!1}else ae?(fe&&e.texStorage2D(n.TEXTURE_2D,It,Pt,lt.width,lt.height),H&&ot(T,lt,Ct,ee)):e.texImage2D(n.TEXTURE_2D,0,Pt,lt.width,lt.height,0,Ct,ee,lt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ae&&fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Pt,Xt[0].width,Xt[0].height,lt.depth);for(let rt=0,vt=Xt.length;rt<vt;rt++)if(Dt=Xt[rt],T.format!==Li)if(Ct!==null)if(ae){if(H)if(T.layerUpdates.size>0){const Rt=Ux(Dt.width,Dt.height,T.format,T.type);for(const pt of T.layerUpdates){const Qt=Dt.data.subarray(pt*Rt/Dt.data.BYTES_PER_ELEMENT,(pt+1)*Rt/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,pt,Dt.width,Dt.height,1,Ct,Qt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Dt.width,Dt.height,lt.depth,Ct,Dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,rt,Pt,Dt.width,Dt.height,lt.depth,0,Dt.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?H&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,rt,0,0,0,Dt.width,Dt.height,lt.depth,Ct,ee,Dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,rt,Pt,Dt.width,Dt.height,lt.depth,0,Ct,ee,Dt.data)}else{ae&&fe&&e.texStorage2D(n.TEXTURE_2D,It,Pt,Xt[0].width,Xt[0].height);for(let rt=0,vt=Xt.length;rt<vt;rt++)Dt=Xt[rt],T.format!==Li?Ct!==null?ae?H&&e.compressedTexSubImage2D(n.TEXTURE_2D,rt,0,0,Dt.width,Dt.height,Ct,Dt.data):e.compressedTexImage2D(n.TEXTURE_2D,rt,Pt,Dt.width,Dt.height,0,Dt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?H&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Dt.width,Dt.height,Ct,ee,Dt.data):e.texImage2D(n.TEXTURE_2D,rt,Pt,Dt.width,Dt.height,0,Ct,ee,Dt.data)}else if(T.isDataArrayTexture)if(ae){if(fe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,It,Pt,lt.width,lt.height,lt.depth),H)if(T.layerUpdates.size>0){const rt=Ux(lt.width,lt.height,T.format,T.type);for(const vt of T.layerUpdates){const Rt=lt.data.subarray(vt*rt/lt.data.BYTES_PER_ELEMENT,(vt+1)*rt/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,vt,lt.width,lt.height,1,Ct,ee,Rt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Ct,ee,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Pt,lt.width,lt.height,lt.depth,0,Ct,ee,lt.data);else if(T.isData3DTexture)ae?(fe&&e.texStorage3D(n.TEXTURE_3D,It,Pt,lt.width,lt.height,lt.depth),H&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Ct,ee,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Pt,lt.width,lt.height,lt.depth,0,Ct,ee,lt.data);else if(T.isFramebufferTexture){if(fe)if(ae)e.texStorage2D(n.TEXTURE_2D,It,Pt,lt.width,lt.height);else{let rt=lt.width,vt=lt.height;for(let Rt=0;Rt<It;Rt++)e.texImage2D(n.TEXTURE_2D,Rt,Pt,rt,vt,0,Ct,ee,null),rt>>=1,vt>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){const rt=n.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),lt.parentNode!==rt){rt.appendChild(lt),d.add(T),rt.onpaint=vt=>{const Rt=vt.changedElements;for(const pt of d)Rt.includes(pt.image)&&(pt.needsUpdate=!0)},rt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,lt);else{const Rt=n.RGBA,pt=n.RGBA,Qt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Rt,pt,Qt,lt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(ae&&fe){const rt=Ae(Xt[0]);e.texStorage2D(n.TEXTURE_2D,It,Pt,rt.width,rt.height)}for(let rt=0,vt=Xt.length;rt<vt;rt++)Dt=Xt[rt],ae?H&&e.texSubImage2D(n.TEXTURE_2D,rt,0,0,Ct,ee,Dt):e.texImage2D(n.TEXTURE_2D,rt,Pt,Ct,ee,Dt);T.generateMipmaps=!1}else if(ae){if(fe){const rt=Ae(lt);e.texStorage2D(n.TEXTURE_2D,It,Pt,rt.width,rt.height)}H&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,Ct,ee,lt)}else e.texImage2D(n.TEXTURE_2D,0,Pt,Ct,ee,lt);p(T)&&w(Q),wt.__version=St.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function Ht(z,T,Z){if(T.image.length!==6)return;const Q=$(z,T),st=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+Z);const St=i.get(st);if(st.version!==St.__version||Q===!0){e.activeTexture(n.TEXTURE0+Z);const wt=Pe.getPrimaries(Pe.workingColorSpace),it=T.colorSpace===Ms?null:Pe.getPrimaries(T.colorSpace),lt=T.colorSpace===Ms||wt===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Ct=T.isCompressedTexture||T.image[0].isCompressedTexture,ee=T.image[0]&&T.image[0].isDataTexture,Pt=[];for(let pt=0;pt<6;pt++)!Ct&&!ee?Pt[pt]=m(T.image[pt],!0,s.maxCubemapSize):Pt[pt]=ee?T.image[pt].image:T.image[pt],Pt[pt]=vn(T,Pt[pt]);const Dt=Pt[0],Xt=r.convert(T.format,T.colorSpace),ae=r.convert(T.type),fe=g(T.internalFormat,Xt,ae,T.normalized,T.colorSpace),H=T.isVideoTexture!==!0,It=St.__version===void 0||Q===!0,rt=st.dataReady;let vt=y(T,Dt);Ut(n.TEXTURE_CUBE_MAP,T);let Rt;if(Ct){H&&It&&e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,fe,Dt.width,Dt.height);for(let pt=0;pt<6;pt++){Rt=Pt[pt].mipmaps;for(let Qt=0;Qt<Rt.length;Qt++){const Kt=Rt[Qt];T.format!==Li?Xt!==null?H?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,0,0,Kt.width,Kt.height,Xt,Kt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,fe,Kt.width,Kt.height,0,Kt.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,0,0,Kt.width,Kt.height,Xt,ae,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt,fe,Kt.width,Kt.height,0,Xt,ae,Kt.data)}}}else{if(Rt=T.mipmaps,H&&It){Rt.length>0&&vt++;const pt=Ae(Pt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,vt,fe,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(ee){H?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Pt[pt].width,Pt[pt].height,Xt,ae,Pt[pt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,fe,Pt[pt].width,Pt[pt].height,0,Xt,ae,Pt[pt].data);for(let Qt=0;Qt<Rt.length;Qt++){const Je=Rt[Qt].image[pt].image;H?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,0,0,Je.width,Je.height,Xt,ae,Je.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,fe,Je.width,Je.height,0,Xt,ae,Je.data)}}else{H?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Xt,ae,Pt[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,fe,Xt,ae,Pt[pt]);for(let Qt=0;Qt<Rt.length;Qt++){const Kt=Rt[Qt];H?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,0,0,Xt,ae,Kt.image[pt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Qt+1,fe,Xt,ae,Kt.image[pt])}}}p(T)&&w(n.TEXTURE_CUBE_MAP),St.__version=st.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function $t(z,T,Z,Q,st,St){const wt=r.convert(Z.format,Z.colorSpace),it=r.convert(Z.type),lt=g(Z.internalFormat,wt,it,Z.normalized,Z.colorSpace),Ct=i.get(T),ee=i.get(Z);if(ee.__renderTarget=T,!Ct.__hasExternalTextures){const Pt=Math.max(1,T.width>>St),Dt=Math.max(1,T.height>>St);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,St,lt,Pt,Dt,T.depth,0,wt,it,null):e.texImage2D(st,St,lt,Pt,Dt,0,wt,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,z),$e(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,st,ee.__webglTexture,0,Ye(T)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,st,ee.__webglTexture,St),e.bindFramebuffer(n.FRAMEBUFFER,null)}function he(z,T,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,z),T.depthBuffer){const Q=T.depthTexture,st=Q&&Q.isDepthTexture?Q.type:null,St=M(T.stencilBuffer,st),wt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$e(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(T),St,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(T),St,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,St,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,wt,n.RENDERBUFFER,z)}else{const Q=T.textures;for(let st=0;st<Q.length;st++){const St=Q[st],wt=r.convert(St.format,St.colorSpace),it=r.convert(St.type),lt=g(St.internalFormat,wt,it,St.normalized,St.colorSpace);$e(T)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ye(T),lt,T.width,T.height):Z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye(T),lt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,lt,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Vt(z,T,Z){const Q=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const st=i.get(T.depthTexture);if(st.__renderTarget=T,(!st.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Q){if(st.__webglInit===void 0&&(st.__webglInit=!0,T.depthTexture.addEventListener("dispose",R)),st.__webglTexture===void 0){st.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,st.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,T.depthTexture);const Ct=r.convert(T.depthTexture.format),ee=r.convert(T.depthTexture.type);let Pt;T.depthTexture.format===as?Pt=n.DEPTH_COMPONENT24:T.depthTexture.format===Bs&&(Pt=n.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Pt,T.width,T.height,0,Ct,ee,null)}}else Y(T.depthTexture,0);const St=st.__webglTexture,wt=Ye(T),it=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+Z:n.TEXTURE_2D,lt=T.depthTexture.format===Bs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===as)$e(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,it,St,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,lt,it,St,0);else if(T.depthTexture.format===Bs)$e(T)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,lt,it,St,0,wt):n.framebufferTexture2D(n.FRAMEBUFFER,lt,it,St,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ce(z){const T=i.get(z),Z=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){const Q=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Q){const st=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Q.removeEventListener("dispose",st)};Q.addEventListener("dispose",st),T.__depthDisposeCallback=st}T.__boundDepthTexture=Q}if(z.depthTexture&&!T.__autoAllocateDepthBuffer)if(Z)for(let Q=0;Q<6;Q++)Vt(T.__webglFramebuffer[Q],z,Q);else{const Q=z.texture.mipmaps;Q&&Q.length>0?Vt(T.__webglFramebuffer[0],z,0):Vt(T.__webglFramebuffer,z,0)}else if(Z){T.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[Q]),T.__webglDepthbuffer[Q]===void 0)T.__webglDepthbuffer[Q]=n.createRenderbuffer(),he(T.__webglDepthbuffer[Q],z,!1);else{const st=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,St)}}else{const Q=z.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),he(T.__webglDepthbuffer,z,!1);else{const st=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,St),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,St)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(z,T,Z){const Q=i.get(z);T!==void 0&&$t(Q.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&ce(z)}function me(z){const T=z.texture,Z=i.get(z),Q=i.get(T);z.addEventListener("dispose",_);const st=z.textures,St=z.isWebGLCubeRenderTarget===!0,wt=st.length>1;if(wt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=T.version,o.memory.textures++),St){Z.__webglFramebuffer=[];for(let it=0;it<6;it++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[it]=[];for(let lt=0;lt<T.mipmaps.length;lt++)Z.__webglFramebuffer[it][lt]=n.createFramebuffer()}else Z.__webglFramebuffer[it]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let it=0;it<T.mipmaps.length;it++)Z.__webglFramebuffer[it]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(wt)for(let it=0,lt=st.length;it<lt;it++){const Ct=i.get(st[it]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=n.createTexture(),o.memory.textures++)}if(z.samples>0&&$e(z)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let it=0;it<st.length;it++){const lt=st[it];Z.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[it]);const Ct=r.convert(lt.format,lt.colorSpace),ee=r.convert(lt.type),Pt=g(lt.internalFormat,Ct,ee,lt.normalized,lt.colorSpace,z.isXRRenderTarget===!0),Dt=Ye(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,Dt,Pt,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,Z.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),he(Z.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(St){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,T);for(let it=0;it<6;it++)if(T.mipmaps&&T.mipmaps.length>0)for(let lt=0;lt<T.mipmaps.length;lt++)$t(Z.__webglFramebuffer[it][lt],z,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt);else $t(Z.__webglFramebuffer[it],z,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(T)&&w(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let it=0,lt=st.length;it<lt;it++){const Ct=st[it],ee=i.get(Ct);let Pt=n.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Pt=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Pt,ee.__webglTexture),Ut(Pt,Ct),$t(Z.__webglFramebuffer,z,Ct,n.COLOR_ATTACHMENT0+it,Pt,0),p(Ct)&&w(Pt)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(it=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,Q.__webglTexture),Ut(it,T),T.mipmaps&&T.mipmaps.length>0)for(let lt=0;lt<T.mipmaps.length;lt++)$t(Z.__webglFramebuffer[lt],z,T,n.COLOR_ATTACHMENT0,it,lt);else $t(Z.__webglFramebuffer,z,T,n.COLOR_ATTACHMENT0,it,0);p(T)&&w(it),e.unbindTexture()}z.depthBuffer&&ce(z)}function Ne(z){const T=z.textures;for(let Z=0,Q=T.length;Z<Q;Z++){const st=T[Z];if(p(st)){const St=S(z),wt=i.get(st).__webglTexture;e.bindTexture(St,wt),w(St),e.unbindTexture()}}}const Me=[],Xe=[];function je(z){if(z.samples>0){if($e(z)===!1){const T=z.textures,Z=z.width,Q=z.height;let st=n.COLOR_BUFFER_BIT;const St=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,wt=i.get(z),it=T.length>1;if(it)for(let Ct=0;Ct<T.length;Ct++)e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer);const lt=z.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let Ct=0;Ct<T.length;Ct++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Ct]);const ee=i.get(T[Ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,Z,Q,0,0,Z,Q,st,n.NEAREST),c===!0&&(Me.length=0,Xe.length=0,Me.push(n.COLOR_ATTACHMENT0+Ct),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Me.push(St),Xe.push(St),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let Ct=0;Ct<T.length;Ct++){e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.RENDERBUFFER,wt.__webglColorRenderbuffer[Ct]);const ee=i.get(T[Ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,wt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ct,n.TEXTURE_2D,ee,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&c){const T=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Ye(z){return Math.min(s.maxSamples,z.samples)}function $e(z){const T=i.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function F(z){const T=o.render.frame;h.get(z)!==T&&(h.set(z,T),z.update())}function vn(z,T){const Z=z.colorSpace,Q=z.format,st=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Z!==ua&&Z!==Ms&&(Pe.getTransfer(Z)===Ze?(Q!==Li||st!==gi)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",Z)),T}function Ae(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(l.width=z.naturalWidth||z.width,l.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(l.width=z.displayWidth,l.height=z.displayHeight):(l.width=z.width,l.height=z.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=U,this.getTextureUnits=k,this.setTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=tt,this.setTexture3D=q,this.setTextureCube=ht,this.rebindTextures=ve,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=ce,this.setupFrameBufferTexture=$t,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function aS(n,t){function e(i,s=Ms){let r;const o=Pe.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===Lh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===rg)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===og)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ig)return n.BYTE;if(i===sg)return n.SHORT;if(i===fo)return n.UNSIGNED_SHORT;if(i===Dh)return n.INT;if(i===Zi)return n.UNSIGNED_INT;if(i===Di)return n.FLOAT;if(i===xi)return n.HALF_FLOAT;if(i===ag)return n.ALPHA;if(i===cg)return n.RGB;if(i===Li)return n.RGBA;if(i===as)return n.DEPTH_COMPONENT;if(i===Bs)return n.DEPTH_STENCIL;if(i===Uh)return n.RED;if(i===Oh)return n.RED_INTEGER;if(i===Ys)return n.RG;if(i===kh)return n.RG_INTEGER;if(i===Fh)return n.RGBA_INTEGER;if(i===Qo||i===ta||i===ea||i===na)if(o===Ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yu||i===vu||i===Mu||i===wu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===vu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===wu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Su||i===bu||i===Eu||i===Tu||i===Ru||i===ca||i===Au)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Su||i===bu)return o===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Eu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Tu)return r.COMPRESSED_R11_EAC;if(i===Ru)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ca)return r.COMPRESSED_RG11_EAC;if(i===Au)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Cu||i===Pu||i===Iu||i===zu||i===Du||i===Lu||i===Nu||i===Uu||i===Ou||i===ku||i===Fu||i===Bu||i===Hu||i===Gu)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Cu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Pu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Iu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Du)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ou)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ku)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gu)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$u||i===Vu||i===Wu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===$u)return o===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Wu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Xu||i===Yu||i===la||i===qu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Xu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Yu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===po?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const kC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new xg(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new $n({vertexShader:kC,fragmentShader:FC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new yt(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HC extends qs{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,x=null;const v=typeof XRWebGLBinding<"u",m=new BC,p={},w=e.getContextAttributes();let S=null,g=null;const M=[],y=[],R=new xt;let _=null;const b=new mi;b.viewport=new pn;const A=new mi;A.viewport=new pn;const C=[b,A],E=new J2;let U=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let at=M[$];return at===void 0&&(at=new Qc,M[$]=at),at.getTargetRaySpace()},this.getControllerGrip=function($){let at=M[$];return at===void 0&&(at=new Qc,M[$]=at),at.getGripSpace()},this.getHand=function($){let at=M[$];return at===void 0&&(at=new Qc,M[$]=at),at.getHandSpace()};function O($){const at=y.indexOf($.inputSource);if(at===-1)return;const ot=M[at];ot!==void 0&&(ot.update($.inputSource,$.frame,l||o),ot.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",W);for(let $=0;$<M.length;$++){const at=y[$];at!==null&&(y[$]=null,M[$].disconnect(at))}U=null,k=null,m.reset();for(const $ in p)delete p[$];t.setRenderTarget(S),f=null,u=null,d=null,s=null,g=null,Ut.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",V),s.addEventListener("inputsourceschange",W),w.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,At=null,Ht=null;w.depth&&(Ht=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=w.stencil?Bs:as,At=w.stencil?po:Zi);const $t={colorFormat:e.RGBA8,depthFormat:Ht,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer($t),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),g=new ri(u.textureWidth,u.textureHeight,{format:Li,type:gi,depthTexture:new yr(u.textureWidth,u.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ot={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),g=new ri(f.framebufferWidth,f.framebufferHeight,{format:Li,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ut.setContext(s),Ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function W($){for(let at=0;at<$.removed.length;at++){const ot=$.removed[at],At=y.indexOf(ot);At>=0&&(y[At]=null,M[At].disconnect(ot))}for(let at=0;at<$.added.length;at++){const ot=$.added[at];let At=y.indexOf(ot);if(At===-1){for(let $t=0;$t<M.length;$t++)if($t>=y.length){y.push(ot),At=$t;break}else if(y[$t]===null){y[$t]=ot,At=$t;break}if(At===-1)break}const Ht=M[At];Ht&&Ht.connect(ot)}}const Y=new B,tt=new B;function q($,at,ot){Y.setFromMatrixPosition(at.matrixWorld),tt.setFromMatrixPosition(ot.matrixWorld);const At=Y.distanceTo(tt),Ht=at.projectionMatrix.elements,$t=ot.projectionMatrix.elements,he=Ht[14]/(Ht[10]-1),Vt=Ht[14]/(Ht[10]+1),ce=(Ht[9]+1)/Ht[5],ve=(Ht[9]-1)/Ht[5],me=(Ht[8]-1)/Ht[0],Ne=($t[8]+1)/$t[0],Me=he*me,Xe=he*Ne,je=At/(-me+Ne),Ye=je*-me;if(at.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ye),$.translateZ(je),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ht[10]===-1)$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const $e=he+je,F=Vt+je,vn=Me-Ye,Ae=Xe+(At-Ye),z=ce*Vt/F*$e,T=ve*Vt/F*$e;$.projectionMatrix.makePerspective(vn,Ae,z,T,$e,F),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ht($,at){at===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(at.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let at=$.near,ot=$.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),E.near=A.near=b.near=at,E.far=A.far=b.far=ot,(U!==E.near||k!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),U=E.near,k=E.far),E.layers.mask=$.layers.mask|6,b.layers.mask=E.layers.mask&-5,A.layers.mask=E.layers.mask&-3;const At=$.parent,Ht=E.cameras;ht(E,At);for(let $t=0;$t<Ht.length;$t++)ht(Ht[$t],At);Ht.length===2?q(E,b,A):E.projectionMatrix.copy(b.projectionMatrix),nt($,E,At)};function nt($,at,ot){ot===null?$.matrix.copy(at.matrixWorld):($.matrix.copy(ot.matrixWorld),$.matrix.invert(),$.matrix.multiply(at.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(at.projectionMatrix),$.projectionMatrixInverse.copy(at.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ap*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function($){c=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(E)},this.getCameraTexture=function($){return p[$]};let Lt=null;function te($,at){if(h=at.getViewerPose(l||o),x=at,h!==null){const ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(g,f.framebuffer),t.setRenderTarget(g));let At=!1;ot.length!==E.cameras.length&&(E.cameras.length=0,At=!0);for(let Vt=0;Vt<ot.length;Vt++){const ce=ot[Vt];let ve=null;if(f!==null)ve=f.getViewport(ce);else{const Ne=d.getViewSubImage(u,ce);ve=Ne.viewport,Vt===0&&(t.setRenderTargetTextures(g,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(g))}let me=C[Vt];me===void 0&&(me=new mi,me.layers.enable(Vt),me.viewport=new pn,C[Vt]=me),me.matrix.fromArray(ce.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(ce.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(ve.x,ve.y,ve.width,ve.height),Vt===0&&(E.matrix.copy(me.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),At===!0&&E.cameras.push(me)}const Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const Vt=d.getDepthInformation(ot[0]);Vt&&Vt.isValid&&Vt.texture&&m.init(Vt,s.renderState)}if(Ht&&Ht.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let Vt=0;Vt<ot.length;Vt++){const ce=ot[Vt].camera;if(ce){let ve=p[ce];ve||(ve=new xg,p[ce]=ve);const me=d.getCameraImage(ce);ve.sourceTexture=me}}}}for(let ot=0;ot<M.length;ot++){const At=y[ot],Ht=M[ot];At!==null&&Ht!==void 0&&Ht.update(At,at,l||o)}Lt&&Lt($,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),x=null}const Ut=new eS;Ut.setAnimationLoop(te),this.setAnimationLoop=function($){Lt=$},this.dispose=function(){}}}const GC=new tn,cS=new xe;cS.set(-1,0,0,0,1,0,0,0,1);function $C(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,H2(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,S,g){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,g)):p.isMeshMatcapMaterial?(r(m,p),x(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),S=w.envMap,g=w.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(GC.makeRotationFromEuler(g)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(cS),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VC(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(g,M){const y=M.program;i.uniformBlockBinding(g,y)}function l(g,M){let y=s[g.id];y===void 0&&(m(g),y=h(g),s[g.id]=y,g.addEventListener("dispose",w));const R=M.program;i.updateUBOMapping(g,R);const _=t.render.frame;r[g.id]!==_&&(u(g),r[g.id]=_)}function h(g){const M=d();g.__bindingPointIndex=M;const y=n.createBuffer(),R=g.__size,_=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,y),y}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(g){const M=s[g.id],y=g.uniforms,R=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let _=0,b=y.length;_<b;_++){const A=y[_];if(Array.isArray(A))for(let C=0,E=A.length;C<E;C++)f(A[C],_,C,R);else f(A,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(g,M,y,R){if(v(g,M,y,R)===!0){const _=g.__offset,b=g.value;if(Array.isArray(b)){let A=0;for(let C=0;C<b.length;C++){const E=b[C],U=p(E);x(E,g.__data,A),typeof E!="number"&&typeof E!="boolean"&&!E.isMatrix3&&!ArrayBuffer.isView(E)&&(A+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(b,g.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,g.__data)}}function x(g,M,y){typeof g=="number"||typeof g=="boolean"?M[0]=g:g.isMatrix3?(M[0]=g.elements[0],M[1]=g.elements[1],M[2]=g.elements[2],M[3]=0,M[4]=g.elements[3],M[5]=g.elements[4],M[6]=g.elements[5],M[7]=0,M[8]=g.elements[6],M[9]=g.elements[7],M[10]=g.elements[8],M[11]=0):ArrayBuffer.isView(g)?M.set(new g.constructor(g.buffer,g.byteOffset,M.length)):g.toArray(M,y)}function v(g,M,y,R){const _=g.value,b=M+"_"+y;if(R[b]===void 0)return typeof _=="number"||typeof _=="boolean"?R[b]=_:ArrayBuffer.isView(_)?R[b]=_.slice():R[b]=_.clone(),!0;{const A=R[b];if(typeof _=="number"||typeof _=="boolean"){if(A!==_)return R[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(A.equals(_)===!1)return A.copy(_),!0}}return!1}function m(g){const M=g.uniforms;let y=0;const R=16;for(let b=0,A=M.length;b<A;b++){const C=Array.isArray(M[b])?M[b]:[M[b]];for(let E=0,U=C.length;E<U;E++){const k=C[E],O=Array.isArray(k.value)?k.value:[k.value];for(let V=0,W=O.length;V<W;V++){const Y=O[V],tt=p(Y),q=y%R,ht=q%tt.boundary,nt=q+ht;y+=ht,nt!==0&&R-nt<tt.storage&&(y+=R-nt),k.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=tt.storage}}}const _=y%R;return _>0&&(y+=R-_),g.__size=y,g.__cache={},this}function p(g){const M={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(M.boundary=4,M.storage=4):g.isVector2?(M.boundary=8,M.storage=8):g.isVector3||g.isColor?(M.boundary=16,M.storage=12):g.isVector4?(M.boundary=16,M.storage=16):g.isMatrix3?(M.boundary=48,M.storage=48):g.isMatrix4?(M.boundary=64,M.storage=64):g.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(M.boundary=16,M.storage=g.byteLength):de("WebGLRenderer: Unsupported uniform value type.",g),M}function w(g){const M=g.target;M.removeEventListener("dispose",w);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function S(){for(const g in s)n.deleteBuffer(s[g]);o=[],s={},r={}}return{bind:c,update:l,dispose:S}}const WC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let es=null;function XC(){return es===null&&(es=new pg(WC,16,16,Ys,xi),es.name="DFG_LUT",es.minFilter=Gn,es.magFilter=Gn,es.wrapS=os,es.wrapT=os,es.generateMipmaps=!1,es.needsUpdate=!0),es}class lS{constructor(t={}){const{canvas:e=M2(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=gi}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const v=f,m=new Set([Fh,kh,Oh]),p=new Set([gi,Zi,fo,po,Lh,Nh]),w=new Uint32Array(4),S=new Int32Array(4),g=new B;let M=null,y=null;const R=[],_=[];let b=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let C=!1,E=null,U=null,k=null,O=null;this._outputColorSpace=si;let V=0,W=0,Y=null,tt=-1,q=null;const ht=new pn,nt=new pn;let Lt=null;const te=new se(0);let Ut=0,$=e.width,at=e.height,ot=1,At=null,Ht=null;const $t=new pn(0,0,$,at),he=new pn(0,0,$,at);let Vt=!1;const ce=new Wh;let ve=!1,me=!1;const Ne=new tn,Me=new B,Xe=new pn,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function $e(){return Y===null?ot:1}let F=i;function vn(P,G){return e.getContext(P,G)}try{const P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Th}`),e.addEventListener("webglcontextlost",Je,!1),e.addEventListener("webglcontextrestored",He,!1),e.addEventListener("webglcontextcreationerror",kn,!1),F===null){const G="webgl2";if(F=vn(G,P),F===null)throw vn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(P){throw De("WebGLRenderer: "+P.message),P}let Ae,z,T,Z,Q,st,St,wt,it,lt,Ct,ee,Pt,Dt,Xt,ae,fe,H,It,rt,vt,Rt,pt;function Qt(){Ae=new YR(F),Ae.init(),vt=new aS(F,Ae),z=new FR(F,Ae,t,vt),T=new UC(F,Ae),z.reversedDepthBuffer&&u&&T.buffers.depth.setReversed(!0),U=F.createFramebuffer(),k=F.createFramebuffer(),O=F.createFramebuffer(),Z=new KR(F),Q=new wC,st=new OC(F,Ae,T,Q,z,vt,Z),St=new XR(A),wt=new tT(F),Rt=new OR(F,wt),it=new qR(F,wt,Z,Rt),lt=new JR(F,it,wt,Rt,Z),H=new jR(F,z,st),Xt=new BR(Q),Ct=new MC(A,St,Ae,z,Rt,Xt),ee=new $C(A,Q),Pt=new bC,Dt=new PC(Ae),fe=new UR(A,St,T,lt,x,c),ae=new NC(A,lt,z),pt=new VC(F,Z,z,T),It=new kR(F,Ae,Z),rt=new ZR(F,Ae,Z),Z.programs=Ct.programs,A.capabilities=z,A.extensions=Ae,A.properties=Q,A.renderLists=Pt,A.shadowMap=ae,A.state=T,A.info=Z}Qt(),v!==gi&&(b=new tA(v,e.width,e.height,a,s,r));const Kt=new HC(A,F);this.xr=Kt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const P=Ae.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Ae.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(P){P!==void 0&&(ot=P,this.setSize($,at,!1))},this.getSize=function(P){return P.set($,at)},this.setSize=function(P,G,K=!0){if(Kt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}$=P,at=G,e.width=Math.floor(P*ot),e.height=Math.floor(G*ot),K===!0&&(e.style.width=P+"px",e.style.height=G+"px"),b!==null&&b.setSize(e.width,e.height),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set($*ot,at*ot).floor()},this.setDrawingBufferSize=function(P,G,K){$=P,at=G,ot=K,e.width=Math.floor(P*K),e.height=Math.floor(G*K),this.setViewport(0,0,P,G)},this.setEffects=function(P){if(v===gi){De("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let G=0;G<P.length;G++)if(P[G].isOutputPass===!0){de("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(ht)},this.getViewport=function(P){return P.copy($t)},this.setViewport=function(P,G,K,J){P.isVector4?$t.set(P.x,P.y,P.z,P.w):$t.set(P,G,K,J),T.viewport(ht.copy($t).multiplyScalar(ot).round())},this.getScissor=function(P){return P.copy(he)},this.setScissor=function(P,G,K,J){P.isVector4?he.set(P.x,P.y,P.z,P.w):he.set(P,G,K,J),T.scissor(nt.copy(he).multiplyScalar(ot).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(P){T.setScissorTest(Vt=P)},this.setOpaqueSort=function(P){At=P},this.setTransparentSort=function(P){Ht=P},this.getClearColor=function(P){return P.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(P=!0,G=!0,K=!0){let J=0;if(P){let j=!1;if(Y!==null){const kt=Y.texture.format;j=m.has(kt)}if(j){const kt=Y.texture.type,qt=p.has(kt),bt=fe.getClearColor(),Jt=fe.getClearAlpha(),ne=bt.r,ue=bt.g,pe=bt.b;qt?(w[0]=ne,w[1]=ue,w[2]=pe,w[3]=Jt,F.clearBufferuiv(F.COLOR,0,w)):(S[0]=ne,S[1]=ue,S[2]=pe,S[3]=Jt,F.clearBufferiv(F.COLOR,0,S))}else J|=F.COLOR_BUFFER_BIT}G&&(J|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),E=P},this.dispose=function(){e.removeEventListener("webglcontextlost",Je,!1),e.removeEventListener("webglcontextrestored",He,!1),e.removeEventListener("webglcontextcreationerror",kn,!1),fe.dispose(),Pt.dispose(),Dt.dispose(),Q.dispose(),St.dispose(),lt.dispose(),Rt.dispose(),pt.dispose(),Ct.dispose(),Kt.dispose(),Kt.removeEventListener("sessionstart",Gt),Kt.removeEventListener("sessionend",gn),En.stop()};function Je(P){P.preventDefault(),fa("WebGLRenderer: Context Lost."),C=!0}function He(){fa("WebGLRenderer: Context Restored."),C=!1;const P=Z.autoReset,G=ae.enabled,K=ae.autoUpdate,J=ae.needsUpdate,j=ae.type;Qt(),Z.autoReset=P,ae.enabled=G,ae.autoUpdate=K,ae.needsUpdate=J,ae.type=j}function kn(P){De("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Vn(P){const G=P.target;G.removeEventListener("dispose",Vn),et(G)}function et(P){Nt(P),Q.remove(P)}function Nt(P){const G=Q.get(P).programs;G!==void 0&&(G.forEach(function(K){Ct.releaseProgram(K)}),P.isShaderMaterial&&Ct.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,K,J,j,kt){G===null&&(G=je);const qt=j.isMesh&&j.matrixWorld.determinantAffine()<0,bt=br(P,G,K,J,j);T.setMaterial(J,qt);let Jt=K.index,ne=1;if(J.wireframe===!0){if(Jt=it.getWireframeAttribute(K),Jt===void 0)return;ne=2}const ue=K.drawRange,pe=K.attributes.position;let ie=ue.start*ne,Oe=(ue.start+ue.count)*ne;kt!==null&&(ie=Math.max(ie,kt.start*ne),Oe=Math.min(Oe,(kt.start+kt.count)*ne)),Jt!==null?(ie=Math.max(ie,0),Oe=Math.min(Oe,Jt.count)):pe!=null&&(ie=Math.max(ie,0),Oe=Math.min(Oe,pe.count));const sn=Oe-ie;if(sn<0||sn===1/0)return;Rt.setup(j,J,bt,K,Jt);let Ve,Re=It;if(Jt!==null&&(Ve=wt.get(Jt),Re=rt,Re.setIndex(Ve)),j.isMesh)J.wireframe===!0?(T.setLineWidth(J.wireframeLinewidth*$e()),Re.setMode(F.LINES)):Re.setMode(F.TRIANGLES);else if(j.isLine){let ke=J.linewidth;ke===void 0&&(ke=1),T.setLineWidth(ke*$e()),j.isLineSegments?Re.setMode(F.LINES):j.isLineLoop?Re.setMode(F.LINE_LOOP):Re.setMode(F.LINE_STRIP)}else j.isPoints?Re.setMode(F.POINTS):j.isSprite&&Re.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(Ae.get("WEBGL_multi_draw"))Re.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const ke=j._multiDrawStarts,Yt=j._multiDrawCounts,Wn=j._multiDrawCount,be=Jt?wt.get(Jt).bytesPerElement:1,Cn=Q.get(J).currentProgram.getUniforms();for(let Xn=0;Xn<Wn;Xn++)Cn.setValue(F,"_gl_DrawID",Xn),Re.render(ke[Xn]/be,Yt[Xn])}else if(j.isInstancedMesh)Re.renderInstances(ie,sn,j.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Yt=Math.min(K.instanceCount,ke);Re.renderInstances(ie,sn,Yt)}else Re.render(ie,sn)};function jt(P,G,K){P.transparent===!0&&P.side===_e&&P.forceSinglePass===!1?(P.side=Jn,P.needsUpdate=!0,Oi(P,G,K),P.side=Es,P.needsUpdate=!0,Oi(P,G,K),P.side=_e):Oi(P,G,K)}this.compile=function(P,G,K=null){K===null&&(K=P),y=Dt.get(K),y.init(G),_.push(y),K.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),P!==K&&P.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights();const J=new Set;return P.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const kt=j.material;if(kt)if(Array.isArray(kt))for(let qt=0;qt<kt.length;qt++){const bt=kt[qt];jt(bt,K,j),J.add(bt)}else jt(kt,K,j),J.add(kt)}),y=_.pop(),J},this.compileAsync=function(P,G,K=null){const J=this.compile(P,G,K);return new Promise(j=>{function kt(){if(J.forEach(function(qt){Q.get(qt).currentProgram.isReady()&&J.delete(qt)}),J.size===0){j(P);return}setTimeout(kt,10)}Ae.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let Ce=null;function Se(P){Ce&&Ce(P)}function Gt(){En.stop()}function gn(){En.start()}const En=new eS;En.setAnimationLoop(Se),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(P){Ce=P,Kt.setAnimationLoop(P),P===null?En.stop():En.start()},Kt.addEventListener("sessionstart",Gt),Kt.addEventListener("sessionend",gn),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;E!==null&&E.renderStart(P,G);const K=Kt.enabled===!0&&Kt.isPresenting===!0,J=b!==null&&(Y===null||K)&&b.begin(A,Y);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Kt.enabled===!0&&Kt.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Kt.cameraAutoUpdate===!0&&Kt.updateCamera(G),G=Kt.getCamera()),P.isScene===!0&&P.onBeforeRender(A,P,G,Y),y=Dt.get(P,_.length),y.init(G),y.state.textureUnits=st.getTextureUnits(),_.push(y),Ne.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ce.setFromProjectionMatrix(Ne,Xi,G.reversedDepth),me=this.localClippingEnabled,ve=Xt.init(this.clippingPlanes,me),M=Pt.get(P,R.length),M.init(),R.push(M),Kt.enabled===!0&&Kt.isPresenting===!0){const qt=A.xr.getDepthSensingMesh();qt!==null&&Fn(qt,G,-1/0,A.sortObjects)}Fn(P,G,0,A.sortObjects),M.finish(),A.sortObjects===!0&&M.sort(At,Ht,G.reversedDepth),Ye=Kt.enabled===!1||Kt.isPresenting===!1||Kt.hasDepthSensing()===!1,Ye&&fe.addToRenderList(M,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ve===!0&&Xt.beginShadows();const j=y.state.shadowsArray;if(ae.render(j,P,G),ve===!0&&Xt.endShadows(),(J&&b.hasRenderPass())===!1){const qt=M.opaque,bt=M.transmissive;if(y.setupLights(),G.isArrayCamera){const Jt=G.cameras;if(bt.length>0)for(let ne=0,ue=Jt.length;ne<ue;ne++){const pe=Jt[ne];Qn(qt,bt,P,pe)}Ye&&fe.render(P);for(let ne=0,ue=Jt.length;ne<ue;ne++){const pe=Jt[ne];Ge(M,P,pe,pe.viewport)}}else bt.length>0&&Qn(qt,bt,P,G),Ye&&fe.render(P),Ge(M,P,G)}Y!==null&&W===0&&(st.updateMultisampleRenderTarget(Y),st.updateRenderTargetMipmap(Y)),J&&b.end(A),P.isScene===!0&&P.onAfterRender(A,P,G),Rt.resetDefaultState(),tt=-1,q=null,_.pop(),_.length>0?(y=_[_.length-1],st.setTextureUnits(y.state.textureUnits),ve===!0&&Xt.setGlobalState(A.clippingPlanes,y.state.camera)):y=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,E!==null&&E.renderEnd()};function Fn(P,G,K,J){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLightProbeGrid)y.pushLightProbeGrid(P);else if(P.isLight)y.pushLight(P),P.castShadow&&y.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ce.intersectsSprite(P)){J&&Xe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Ne);const qt=lt.update(P),bt=P.material;bt.visible&&M.push(P,qt,bt,K,Xe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ce.intersectsObject(P))){const qt=lt.update(P),bt=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Xe.copy(P.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Xe.copy(qt.boundingSphere.center)),Xe.applyMatrix4(P.matrixWorld).applyMatrix4(Ne)),Array.isArray(bt)){const Jt=qt.groups;for(let ne=0,ue=Jt.length;ne<ue;ne++){const pe=Jt[ne],ie=bt[pe.materialIndex];ie&&ie.visible&&M.push(P,qt,ie,K,Xe.z,pe)}}else bt.visible&&M.push(P,qt,bt,K,Xe.z,null)}}const kt=P.children;for(let qt=0,bt=kt.length;qt<bt;qt++)Fn(kt[qt],G,K,J)}function Ge(P,G,K,J){const{opaque:j,transmissive:kt,transparent:qt}=P;y.setupLightsView(K),ve===!0&&Xt.setGlobalState(A.clippingPlanes,K),J&&T.viewport(ht.copy(J)),j.length>0&&oi(j,G,K),kt.length>0&&oi(kt,G,K),qt.length>0&&oi(qt,G,K),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function Qn(P,G,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[J.id]===void 0){const ie=Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[J.id]=new ri(1,1,{generateMipmaps:!0,type:ie?xi:gi,minFilter:Fs,samples:Math.max(4,z.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const kt=y.state.transmissionRenderTarget[J.id],qt=J.viewport||ht;kt.setSize(qt.z*A.transmissionResolutionScale,qt.w*A.transmissionResolutionScale);const bt=A.getRenderTarget(),Jt=A.getActiveCubeFace(),ne=A.getActiveMipmapLevel();A.setRenderTarget(kt),A.getClearColor(te),Ut=A.getClearAlpha(),Ut<1&&A.setClearColor(16777215,.5),A.clear(),Ye&&fe.render(K);const ue=A.toneMapping;A.toneMapping=qi;const pe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),y.setupLightsView(J),ve===!0&&Xt.setGlobalState(A.clippingPlanes,J),oi(P,K,J),st.updateMultisampleRenderTarget(kt),st.updateRenderTargetMipmap(kt),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Oe=0,sn=G.length;Oe<sn;Oe++){const Ve=G[Oe],{object:Re,geometry:ke,material:Yt,group:Wn}=Ve;if(Yt.side===_e&&Re.layers.test(J.layers)){const be=Yt.side;Yt.side=Jn,Yt.needsUpdate=!0,ls(Re,K,J,ke,Yt,Wn),Yt.side=be,Yt.needsUpdate=!0,ie=!0}}ie===!0&&(st.updateMultisampleRenderTarget(kt),st.updateRenderTargetMipmap(kt))}A.setRenderTarget(bt,Jt,ne),A.setClearColor(te,Ut),pe!==void 0&&(J.viewport=pe),A.toneMapping=ue}function oi(P,G,K){const J=G.isScene===!0?G.overrideMaterial:null;for(let j=0,kt=P.length;j<kt;j++){const qt=P[j],{object:bt,geometry:Jt,group:ne}=qt;let ue=qt.material;ue.allowOverride===!0&&J!==null&&(ue=J),bt.layers.test(K.layers)&&ls(bt,G,K,Jt,ue,ne)}}function ls(P,G,K,J,j,kt){P.onBeforeRender(A,G,K,J,j,kt),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),j.onBeforeRender(A,G,K,J,P,kt),j.transparent===!0&&j.side===_e&&j.forceSinglePass===!1?(j.side=Jn,j.needsUpdate=!0,A.renderBufferDirect(K,G,J,j,P,kt),j.side=Es,j.needsUpdate=!0,A.renderBufferDirect(K,G,J,j,P,kt),j.side=_e):A.renderBufferDirect(K,G,J,j,P,kt),P.onAfterRender(A,G,K,J,j,kt)}function Oi(P,G,K){G.isScene!==!0&&(G=je);const J=Q.get(P),j=y.state.lights,kt=y.state.shadowsArray,qt=j.state.version,bt=Ct.getParameters(P,j.state,kt,G,K,y.state.lightProbeGridArray),Jt=Ct.getProgramCacheKey(bt);let ne=J.programs;J.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?G.environment:null,J.fog=G.fog;const ue=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;J.envMap=St.get(P.envMap||J.environment,ue),J.envMapRotation=J.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,ne===void 0&&(P.addEventListener("dispose",Vn),ne=new Map,J.programs=ne);let pe=ne.get(Jt);if(pe!==void 0){if(J.currentProgram===pe&&J.lightsStateVersion===qt)return ai(P,bt),pe}else bt.uniforms=Ct.getUniforms(P),E!==null&&P.isNodeMaterial&&E.build(P,K,bt),P.onBeforeCompile(bt,A),pe=Ct.acquireProgram(bt,Jt),ne.set(Jt,pe),J.uniforms=bt.uniforms;const ie=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(ie.clippingPlanes=Xt.uniform),ai(P,bt),J.needsLights=vi(P),J.lightsStateVersion=qt,J.needsLights&&(ie.ambientLightColor.value=j.state.ambient,ie.lightProbe.value=j.state.probe,ie.directionalLights.value=j.state.directional,ie.directionalLightShadows.value=j.state.directionalShadow,ie.spotLights.value=j.state.spot,ie.spotLightShadows.value=j.state.spotShadow,ie.rectAreaLights.value=j.state.rectArea,ie.ltc_1.value=j.state.rectAreaLTC1,ie.ltc_2.value=j.state.rectAreaLTC2,ie.pointLights.value=j.state.point,ie.pointLightShadows.value=j.state.pointShadow,ie.hemisphereLights.value=j.state.hemi,ie.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ie.spotLightMatrix.value=j.state.spotLightMatrix,ie.spotLightMap.value=j.state.spotLightMap,ie.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=y.state.lightProbeGridArray.length>0,J.currentProgram=pe,J.uniformsList=null,pe}function us(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=nl.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function ai(P,G){const K=Q.get(P);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function bo(P,G){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;g.setFromMatrixPosition(G.matrixWorld);for(let K=0,J=P.length;K<J;K++){const j=P[K];if(j.texture!==null&&j.boundingBox.containsPoint(g))return j}return null}function br(P,G,K,J,j){G.isScene!==!0&&(G=je),st.resetTextureUnits();const kt=G.fog,qt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?G.environment:null,bt=Y===null?A.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Pe.workingColorSpace,Jt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,ne=St.get(J.envMap||qt,Jt),ue=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pe=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ie=!!K.morphAttributes.position,Oe=!!K.morphAttributes.normal,sn=!!K.morphAttributes.color;let Ve=qi;J.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ve=A.toneMapping);const Re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ke=Re!==void 0?Re.length:0,Yt=Q.get(J),Wn=y.state.lights;if(ve===!0&&(me===!0||P!==q)){const We=P===q&&J.id===tt;Xt.setState(J,P,We)}let be=!1;J.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Wn.state.version||Yt.outputColorSpace!==bt||j.isBatchedMesh&&Yt.batching===!1||!j.isBatchedMesh&&Yt.batching===!0||j.isBatchedMesh&&Yt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Yt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Yt.instancing===!1||!j.isInstancedMesh&&Yt.instancing===!0||j.isSkinnedMesh&&Yt.skinning===!1||!j.isSkinnedMesh&&Yt.skinning===!0||j.isInstancedMesh&&Yt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Yt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Yt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Yt.instancingMorph===!1&&j.morphTexture!==null||Yt.envMap!==ne||J.fog===!0&&Yt.fog!==kt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Xt.numPlanes||Yt.numIntersection!==Xt.numIntersection)||Yt.vertexAlphas!==ue||Yt.vertexTangents!==pe||Yt.morphTargets!==ie||Yt.morphNormals!==Oe||Yt.morphColors!==sn||Yt.toneMapping!==Ve||Yt.morphTargetsCount!==ke||!!Yt.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,Yt.__version=J.version);let Cn=Yt.currentProgram;be===!0&&(Cn=Oi(J,G,j),E&&J.isNodeMaterial&&E.onUpdateProgram(J,Cn,Yt));let Xn=!1,ki=!1,Qi=!1;const Fe=Cn.getUniforms(),dn=Yt.uniforms;if(T.useProgram(Cn.program)&&(Xn=!0,ki=!0,Qi=!0),J.id!==tt&&(tt=J.id,ki=!0),Yt.needsLights){const We=bo(y.state.lightProbeGridArray,j);Yt.lightProbeGrid!==We&&(Yt.lightProbeGrid=We,ki=!0)}if(Xn||q!==P){T.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Fe.setValue(F,"projectionMatrix",P.projectionMatrix),Fe.setValue(F,"viewMatrix",P.matrixWorldInverse);const Pi=Fe.map.cameraPosition;Pi!==void 0&&Pi.setValue(F,Me.setFromMatrixPosition(P.matrixWorld)),z.logarithmicDepthBuffer&&Fe.setValue(F,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Fe.setValue(F,"isOrthographic",P.isOrthographicCamera===!0),q!==P&&(q=P,ki=!0,Qi=!0)}if(Yt.needsLights&&(Wn.state.directionalShadowMap.length>0&&Fe.setValue(F,"directionalShadowMap",Wn.state.directionalShadowMap,st),Wn.state.spotShadowMap.length>0&&Fe.setValue(F,"spotShadowMap",Wn.state.spotShadowMap,st),Wn.state.pointShadowMap.length>0&&Fe.setValue(F,"pointShadowMap",Wn.state.pointShadowMap,st)),j.isSkinnedMesh){Fe.setOptional(F,j,"bindMatrix"),Fe.setOptional(F,j,"bindMatrixInverse");const We=j.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Fe.setValue(F,"boneTexture",We.boneTexture,st))}j.isBatchedMesh&&(Fe.setOptional(F,j,"batchingTexture"),Fe.setValue(F,"batchingTexture",j._matricesTexture,st),Fe.setOptional(F,j,"batchingIdTexture"),Fe.setValue(F,"batchingIdTexture",j._indirectTexture,st),Fe.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Fe.setValue(F,"batchingColorTexture",j._colorsTexture,st));const ci=K.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&H.update(j,K,Cn),(ki||Yt.receiveShadow!==j.receiveShadow)&&(Yt.receiveShadow=j.receiveShadow,Fe.setValue(F,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&G.environment!==null&&(dn.envMapIntensity.value=G.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=XC()),ki){if(Fe.setValue(F,"toneMappingExposure",A.toneMappingExposure),Yt.needsLights&&Ji(dn,Qi),kt&&J.fog===!0&&ee.refreshFogUniforms(dn,kt),ee.refreshMaterialUniforms(dn,J,ot,at,y.state.transmissionRenderTarget[P.id]),Yt.needsLights&&Yt.lightProbeGrid){const We=Yt.lightProbeGrid;dn.probesSH.value=We.texture,dn.probesMin.value.copy(We.boundingBox.min),dn.probesMax.value.copy(We.boundingBox.max),dn.probesResolution.value.copy(We.resolution)}nl.upload(F,us(Yt),dn,st)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(nl.upload(F,us(Yt),dn,st),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Fe.setValue(F,"center",j.center),Fe.setValue(F,"modelViewMatrix",j.modelViewMatrix),Fe.setValue(F,"normalMatrix",j.normalMatrix),Fe.setValue(F,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){const We=J.uniformsGroups;for(let Pi=0,li=We.length;Pi<li;Pi++){const Er=We[Pi];pt.update(Er,Cn),pt.bind(Er,Cn)}}return Cn}function Ji(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function vi(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(P,G,K){const J=Q.get(P);J.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Q.get(P.texture).__webglTexture=G,Q.get(P.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,G){const K=Q.get(P);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,K=0){Y=P,V=G,W=K;let J=null,j=!1,kt=!1;if(P){const bt=Q.get(P);if(bt.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(F.FRAMEBUFFER,bt.__webglFramebuffer),ht.copy(P.viewport),nt.copy(P.scissor),Lt=P.scissorTest,T.viewport(ht),T.scissor(nt),T.setScissorTest(Lt),tt=-1;return}else if(bt.__webglFramebuffer===void 0)st.setupRenderTarget(P);else if(bt.__hasExternalTextures)st.rebindTextures(P,Q.get(P.texture).__webglTexture,Q.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ue=P.depthTexture;if(bt.__boundDepthTexture!==ue){if(ue!==null&&Q.has(ue)&&(P.width!==ue.image.width||P.height!==ue.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(P)}}const Jt=P.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(kt=!0);const ne=Q.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ne[G])?J=ne[G][K]:J=ne[G],j=!0):P.samples>0&&st.useMultisampledRTT(P)===!1?J=Q.get(P).__webglMultisampledFramebuffer:Array.isArray(ne)?J=ne[K]:J=ne,ht.copy(P.viewport),nt.copy(P.scissor),Lt=P.scissorTest}else ht.copy($t).multiplyScalar(ot).floor(),nt.copy(he).multiplyScalar(ot).floor(),Lt=Vt;if(K!==0&&(J=U),T.bindFramebuffer(F.FRAMEBUFFER,J)&&T.drawBuffers(P,J),T.viewport(ht),T.scissor(nt),T.setScissorTest(Lt),j){const bt=Q.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,bt.__webglTexture,K)}else if(kt){const bt=G;for(let Jt=0;Jt<P.textures.length;Jt++){const ne=Q.get(P.textures[Jt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Jt,ne.__webglTexture,K,bt)}}else if(P!==null&&K!==0){const bt=Q.get(P.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bt.__webglTexture,K)}tt=-1},this.readRenderTargetPixels=function(P,G,K,J,j,kt,qt,bt=0){if(!(P&&P.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Jt=Q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qt!==void 0&&(Jt=Jt[qt]),Jt){T.bindFramebuffer(F.FRAMEBUFFER,Jt);try{const ne=P.textures[bt],ue=ne.format,pe=ne.type;if(P.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+bt),!z.textureFormatReadable(ue)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(pe)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-J&&K>=0&&K<=P.height-j&&F.readPixels(G,K,J,j,vt.convert(ue),vt.convert(pe),kt)}finally{const ne=Y!==null?Q.get(Y).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(P,G,K,J,j,kt,qt,bt=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Jt=Q.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&qt!==void 0&&(Jt=Jt[qt]),Jt)if(G>=0&&G<=P.width-J&&K>=0&&K<=P.height-j){T.bindFramebuffer(F.FRAMEBUFFER,Jt);const ne=P.textures[bt],ue=ne.format,pe=ne.type;if(P.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+bt),!z.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ie),F.bufferData(F.PIXEL_PACK_BUFFER,kt.byteLength,F.STREAM_READ),F.readPixels(G,K,J,j,vt.convert(ue),vt.convert(pe),0);const Oe=Y!==null?Q.get(Y).__webglFramebuffer:null;T.bindFramebuffer(F.FRAMEBUFFER,Oe);const sn=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await bE(F,sn,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ie),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,kt),F.deleteBuffer(ie),F.deleteSync(sn),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,G=null,K=0){const J=Math.pow(2,-K),j=Math.floor(P.image.width*J),kt=Math.floor(P.image.height*J),qt=G!==null?G.x:0,bt=G!==null?G.y:0;st.setTexture2D(P,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,qt,bt,j,kt),T.unbindTexture()},this.copyTextureToTexture=function(P,G,K=null,J=null,j=0,kt=0){let qt,bt,Jt,ne,ue,pe,ie,Oe,sn;const Ve=P.isCompressedTexture?P.mipmaps[kt]:P.image;if(K!==null)qt=K.max.x-K.min.x,bt=K.max.y-K.min.y,Jt=K.isBox3?K.max.z-K.min.z:1,ne=K.min.x,ue=K.min.y,pe=K.isBox3?K.min.z:0;else{const dn=Math.pow(2,-j);qt=Math.floor(Ve.width*dn),bt=Math.floor(Ve.height*dn),P.isDataArrayTexture?Jt=Ve.depth:P.isData3DTexture?Jt=Math.floor(Ve.depth*dn):Jt=1,ne=0,ue=0,pe=0}J!==null?(ie=J.x,Oe=J.y,sn=J.z):(ie=0,Oe=0,sn=0);const Re=vt.convert(G.format),ke=vt.convert(G.type);let Yt;G.isData3DTexture?(st.setTexture3D(G,0),Yt=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(st.setTexture2DArray(G,0),Yt=F.TEXTURE_2D_ARRAY):(st.setTexture2D(G,0),Yt=F.TEXTURE_2D),T.activeTexture(F.TEXTURE0),T.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Wn=T.getParameter(F.UNPACK_ROW_LENGTH),be=T.getParameter(F.UNPACK_IMAGE_HEIGHT),Cn=T.getParameter(F.UNPACK_SKIP_PIXELS),Xn=T.getParameter(F.UNPACK_SKIP_ROWS),ki=T.getParameter(F.UNPACK_SKIP_IMAGES);T.pixelStorei(F.UNPACK_ROW_LENGTH,Ve.width),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ve.height),T.pixelStorei(F.UNPACK_SKIP_PIXELS,ne),T.pixelStorei(F.UNPACK_SKIP_ROWS,ue),T.pixelStorei(F.UNPACK_SKIP_IMAGES,pe);const Qi=P.isDataArrayTexture||P.isData3DTexture,Fe=G.isDataArrayTexture||G.isData3DTexture;if(P.isDepthTexture){const dn=Q.get(P),ci=Q.get(G),We=Q.get(dn.__renderTarget),Pi=Q.get(ci.__renderTarget);T.bindFramebuffer(F.READ_FRAMEBUFFER,We.__webglFramebuffer),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let li=0;li<Jt;li++)Qi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get(P).__webglTexture,j,pe+li),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get(G).__webglTexture,kt,sn+li)),F.blitFramebuffer(ne,ue,qt,bt,ie,Oe,qt,bt,F.DEPTH_BUFFER_BIT,F.NEAREST);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||P.isRenderTargetTexture||Q.has(P)){const dn=Q.get(P),ci=Q.get(G);T.bindFramebuffer(F.READ_FRAMEBUFFER,k),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,O);for(let We=0;We<Jt;We++)Qi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,j,pe+We):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,j),Fe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ci.__webglTexture,kt,sn+We):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ci.__webglTexture,kt),j!==0?F.blitFramebuffer(ne,ue,qt,bt,ie,Oe,qt,bt,F.COLOR_BUFFER_BIT,F.NEAREST):Fe?F.copyTexSubImage3D(Yt,kt,ie,Oe,sn+We,ne,ue,qt,bt):F.copyTexSubImage2D(Yt,kt,ie,Oe,ne,ue,qt,bt);T.bindFramebuffer(F.READ_FRAMEBUFFER,null),T.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Fe?P.isDataTexture||P.isData3DTexture?F.texSubImage3D(Yt,kt,ie,Oe,sn,qt,bt,Jt,Re,ke,Ve.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Yt,kt,ie,Oe,sn,qt,bt,Jt,Re,Ve.data):F.texSubImage3D(Yt,kt,ie,Oe,sn,qt,bt,Jt,Re,ke,Ve):P.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,kt,ie,Oe,qt,bt,Re,ke,Ve.data):P.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,kt,ie,Oe,Ve.width,Ve.height,Re,Ve.data):F.texSubImage2D(F.TEXTURE_2D,kt,ie,Oe,qt,bt,Re,ke,Ve);T.pixelStorei(F.UNPACK_ROW_LENGTH,Wn),T.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be),T.pixelStorei(F.UNPACK_SKIP_PIXELS,Cn),T.pixelStorei(F.UNPACK_SKIP_ROWS,Xn),T.pixelStorei(F.UNPACK_SKIP_IMAGES,ki),kt===0&&G.generateMipmaps&&F.generateMipmap(Yt),T.unbindTexture()},this.initRenderTarget=function(P){Q.get(P).__webglFramebuffer===void 0&&st.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?st.setTextureCube(P,0):P.isData3DTexture?st.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?st.setTexture2DArray(P,0):st.setTexture2D(P,0),T.unbindTexture()},this.resetState=function(){V=0,W=0,Y=null,T.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=Pe._getUnpackColorSpace()}}const YC=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Ga,AddEquation:ks,AddOperation:h2,AdditiveBlending:mn,AgXToneMapping:Ih,AlphaFormat:ag,AlwaysCompare:v2,AlwaysDepth:hu,AlwaysStencilFunc:Tp,ArrayCamera:J2,BackSide:Jn,BasicDepthPacking:f2,Box3:Zs,BoxGeometry:ye,BufferAttribute:_i,BufferGeometry:bn,ByteType:ig,Cache:tl,Camera:vg,CanvasTexture:gg,CapsuleGeometry:_g,CineonToneMapping:Ch,CircleGeometry:yi,ClampToEdgeWrapping:os,Color:se,ColorManagement:Pe,ConeGeometry:wr,ConstantAlphaFactor:c2,ConstantColorFactor:o2,CubeCamera:j2,CubeDepthTexture:P2,CubeReflectionMapping:Xs,CubeRefractionMapping:_r,CubeTexture:mg,CubeUVReflectionMapping:$a,CullFaceBack:Sp,CullFaceFront:Ww,CullFaceNone:Vw,CustomBlending:Xw,CustomToneMapping:Ph,CylinderGeometry:ge,Data3DTexture:E2,DataArrayTexture:lg,DataTexture:pg,DefaultLoadingManager:X2,DepthFormat:as,DepthStencilFormat:Bs,DepthTexture:yr,DirectionalLight:el,DodecahedronGeometry:Xh,DoubleSide:_e,DstAlphaFactor:e2,DstColorFactor:i2,EqualCompare:x2,EqualDepth:fu,EquirectangularReflectionMapping:Zc,EquirectangularRefractionMapping:Kc,Euler:Ts,EventDispatcher:qs,ExternalTexture:xg,Float32BufferAttribute:Le,FloatType:Di,FogExp2:Vh,FrontSide:Es,Frustum:Wh,GLSL3:Rp,GreaterCompare:_2,GreaterDepth:mu,GreaterEqualCompare:Hh,GreaterEqualDepth:pu,Group:_t,HalfFloatType:xi,HemisphereLight:Z2,IcosahedronGeometry:vo,ImageLoader:Y2,ImageUtils:S2,InstancedBufferAttribute:Pp,InstancedMesh:oe,IntType:Dh,InterleavedBuffer:R2,InterleavedBufferAttribute:pa,KeepStencilOp:rr,LatheGeometry:Mo,Layers:$h,LessCompare:g2,LessDepth:du,LessEqualCompare:Bh,LessEqualDepth:xr,Light:qh,LinearFilter:Gn,LinearMipmapLinearFilter:Fs,LinearMipmapNearestFilter:jc,LinearSRGBColorSpace:ua,LinearToneMapping:Rh,LinearTransfer:ha,Loader:Yh,LoadingManager:W2,Material:Mr,Matrix2:zp,Matrix3:xe,Matrix4:tn,MaxEquation:Kw,Mesh:yt,MeshBasicMaterial:Ue,MeshDepthMaterial:$2,MeshDistanceMaterial:V2,MeshPhysicalMaterial:ut,MeshStandardMaterial:G2,MinEquation:Zw,MirroredRepeatWrapping:_u,MixOperation:u2,MultiplyBlending:Ep,MultiplyOperation:eg,NearestFilter:Nn,NearestMipmapLinearFilter:Yo,NearestMipmapNearestFilter:d2,NeutralToneMapping:zh,NeverCompare:m2,NeverDepth:uu,NoBlending:Yi,NoColorSpace:Ms,NoToneMapping:qi,NormalBlending:fr,NotEqualCompare:y2,NotEqualDepth:gu,Object3D:Zt,ObjectSpaceNormalMap:p2,OctahedronGeometry:xn,OneFactor:Jw,OneMinusConstantAlphaFactor:l2,OneMinusConstantColorFactor:a2,OneMinusDstAlphaFactor:n2,OneMinusDstColorFactor:s2,OneMinusSrcAlphaFactor:lu,OneMinusSrcColorFactor:t2,OrthographicCamera:Xa,PCFShadowMap:Jo,PCFSoftShadowMap:tg,PMREMGenerator:ju,PerspectiveCamera:mi,Plane:vs,PlaneGeometry:cs,PointLight:KE,PolyhedronGeometry:Sr,Quaternion:vr,R11_EAC_Format:Tu,RED_GREEN_RGTC2_Format:la,RED_RGTC1_Format:Xu,REVISION:Th,RG11_EAC_Format:ca,RGBAFormat:Li,RGBAIntegerFormat:Fh,RGBA_ASTC_10x10_Format:Bu,RGBA_ASTC_10x5_Format:Ou,RGBA_ASTC_10x6_Format:ku,RGBA_ASTC_10x8_Format:Fu,RGBA_ASTC_12x10_Format:Hu,RGBA_ASTC_12x12_Format:Gu,RGBA_ASTC_4x4_Format:Cu,RGBA_ASTC_5x4_Format:Pu,RGBA_ASTC_5x5_Format:Iu,RGBA_ASTC_6x5_Format:zu,RGBA_ASTC_6x6_Format:Du,RGBA_ASTC_8x5_Format:Lu,RGBA_ASTC_8x6_Format:Nu,RGBA_ASTC_8x8_Format:Uu,RGBA_BPTC_Format:$u,RGBA_ETC2_EAC_Format:Eu,RGBA_PVRTC_2BPPV1_Format:wu,RGBA_PVRTC_4BPPV1_Format:Mu,RGBA_S3TC_DXT1_Format:ta,RGBA_S3TC_DXT3_Format:ea,RGBA_S3TC_DXT5_Format:na,RGBFormat:cg,RGB_BPTC_SIGNED_Format:Vu,RGB_BPTC_UNSIGNED_Format:Wu,RGB_ETC1_Format:Su,RGB_ETC2_Format:bu,RGB_PVRTC_2BPPV1_Format:vu,RGB_PVRTC_4BPPV1_Format:yu,RGB_S3TC_DXT1_Format:Qo,RGFormat:Ys,RGIntegerFormat:kh,RawShaderMaterial:yg,Ray:fg,Raycaster:tS,RedFormat:Uh,RedIntegerFormat:Oh,ReinhardToneMapping:Ah,RenderTarget:b2,RepeatWrapping:xu,ReverseSubtractEquation:qw,RingGeometry:Va,SIGNED_R11_EAC_Format:Ru,SIGNED_RED_GREEN_RGTC2_Format:qu,SIGNED_RED_RGTC1_Format:Yu,SIGNED_RG11_EAC_Format:Au,SRGBColorSpace:si,SRGBTransfer:Ze,Scene:Cp,ShaderChunk:Ee,ShaderLib:Wi,ShaderMaterial:$n,ShortType:sg,Source:Gh,Sphere:yo,SphereGeometry:Ci,Sprite:C2,SpriteMaterial:dg,SrcAlphaFactor:cu,SrcAlphaSaturateFactor:r2,SrcColorFactor:Qw,StaticDrawUsage:Ku,SubtractEquation:Yw,SubtractiveBlending:bp,TangentSpaceNormalMap:Zu,TetrahedronGeometry:Wa,Texture:On,TextureLoader:q2,Timer:Q2,TorusGeometry:nn,Triangle:Ri,UVMapping:ng,Uint16BufferAttribute:ug,Uint32BufferAttribute:hg,UniformsLib:Wt,UniformsUtils:xo,UnsignedByteType:gi,UnsignedInt101111Type:og,UnsignedInt248Type:po,UnsignedInt5999Type:rg,UnsignedIntType:Zi,UnsignedShort4444Type:Lh,UnsignedShort5551Type:Nh,UnsignedShortType:fo,VSMShadowMap:io,Vector2:xt,Vector3:B,Vector4:pn,WebGLCoordinateSystem:Xi,WebGLCubeRenderTarget:Mg,WebGLRenderTarget:ri,WebGLRenderer:lS,WebGLUtils:aS,WebGPUCoordinateSystem:mo,WebXRController:Qc,ZeroFactor:jw,createCanvasElement:M2,error:De,log:fa,warn:de,warnOnce:pr},Symbol.toStringTag,{value:"Module"})),il={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class So{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qC=new Xa(-1,1,1,-1,0,1);class ZC extends bn{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}const KC=new ZC;class wg{constructor(t){this._mesh=new yt(KC,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,qC)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class jC extends So{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof $n?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=xo.clone(t.uniforms),this.material=new $n({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new wg(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class r1 extends So{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class JC extends So{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class QC{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new xt);this._width=i.width,this._height=i.height,e=new ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new jC(il),this.copyPass.material.blending=Yi,this.timer=new Q2}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}r1!==void 0&&(o instanceof r1?i=!0:o instanceof JC&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class tP extends So{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new se}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const eP={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class _o extends So{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new xt(t.x,t.y):new xt(256,256),this.clearColor=new se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ri(r,o,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new ri(r,o,{type:xi});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new ri(r,o,{type:xi});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}const a=eP;this.highPassUniforms=xo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new $n({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new xt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=xo.clone(il.uniforms),this.blendMaterial=new $n({uniforms:this.copyUniforms,vertexShader:il.vertexShader,fragmentShader:il.fragmentShader,premultipliedAlpha:!0,blending:mn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new se,this._oldClearAlpha=1,this._basic=new Ue,this._fsQuad=new wg(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new xt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=_o.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=_o.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let s=0;s<t;s++)e.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new $n({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new $n({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}_o.BlurDirectionX=new xt(1,0);_o.BlurDirectionY=new xt(0,1);const yc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class nP extends So{constructor(){super(),this.isOutputPass=!0,this.uniforms=xo.clone(yc.uniforms),this.material=new yg({name:yc.name,uniforms:this.uniforms,vertexShader:yc.vertexShader,fragmentShader:yc.fragmentShader}),this._fsQuad=new wg(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Pe.getTransfer(this._outputColorSpace)===Ze&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Rh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ah?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ch?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ih?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ph&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function iP(){let n=null,t=!1,e=0,i=!1,s=null;function r(){const h=window;return h.AudioContext||h.webkitAudioContext||null}function o(){if(i)return null;if(n&&n.state==="closed"&&(n=null),n)return n;try{const h=r();return h?(n=new h,n):(i=!0,null)}catch{return i=!0,n=null,null}}function a(h){if(!t)try{const d=o();if(!d)return;d.state==="suspended"&&d.resume().catch(()=>{}),h(d)}catch{}}function c(h,d){const u=d.type??"sine",f=d.gain??.08,x=d.attack??.02,v=d.delay??0,m=h.currentTime+v,p=h.createOscillator(),w=h.createGain();p.type=u,p.frequency.setValueAtTime(d.freq,m),d.to&&d.to>0&&p.frequency.exponentialRampToValueAtTime(d.to,m+d.dur*.92),w.gain.setValueAtTime(1e-4,m),w.gain.exponentialRampToValueAtTime(Math.max(2e-4,f),m+x),w.gain.exponentialRampToValueAtTime(1e-4,m+d.dur),p.connect(w),w.connect(h.destination),p.start(m),p.stop(m+d.dur+.05)}function l(h,d,u,f=.08,x=.02){a(v=>{c(v,{freq:h,dur:d,type:u,gain:f,attack:x})})}return{unlock(){i=!1;try{const h=o();if(!h)return;if(h.state==="suspended"&&h.resume().catch(()=>{}),!s&&!t){const d=h.createOscillator(),u=h.createOscillator(),f=h.createOscillator(),x=h.createGain(),v=h.createGain(),m=h.createGain();d.type="sine",d.frequency.value=72,u.type="sine",u.frequency.value=108,f.type="sine",f.frequency.value=54,x.gain.value=.015,v.gain.value=.004,m.gain.value=.005,d.connect(x),u.connect(v),f.connect(m),x.connect(h.destination),v.connect(h.destination),m.connect(h.destination),d.start(),u.start(),f.start(),s={osc:d,fifth:u,pad:f,gain:x,gain5:v,gainPad:m}}}catch{}},howl(){a(h=>{const d=h.currentTime,u=h.createOscillator(),f=h.createGain();u.type="triangle",u.frequency.setValueAtTime(220,d),u.frequency.exponentialRampToValueAtTime(88,d+.9),f.gain.setValueAtTime(0,d),f.gain.linearRampToValueAtTime(.12,d+.08),f.gain.exponentialRampToValueAtTime(1e-4,d+1.1),u.connect(f),f.connect(h.destination),u.start(d),u.stop(d+1.2);try{const x=h.createOscillator(),v=h.createGain();x.type="sine",x.frequency.setValueAtTime(330,d),x.frequency.exponentialRampToValueAtTime(132,d+.42),v.gain.setValueAtTime(0,d),v.gain.linearRampToValueAtTime(.028,d+.05),v.gain.exponentialRampToValueAtTime(1e-4,d+.48),x.connect(v),v.connect(h.destination),x.start(d),x.stop(d+.52)}catch{}try{c(h,{freq:73,dur:.45,type:"sine",gain:.007,attack:.08,delay:.4})}catch{}try{c(h,{freq:98,dur:.4,type:"sine",gain:.006,attack:.06,delay:.2})}catch{}try{c(h,{freq:176,dur:.42,type:"sine",gain:.007,attack:.06,delay:.32})}catch{}try{c(h,{freq:220,dur:.36,type:"sine",gain:.005,attack:.08,delay:.48})}catch{}})},talk(){a(h=>{c(h,{freq:523.3,to:392,dur:.3,type:"sine",gain:.03,attack:.012});try{c(h,{freq:784,to:659.3,dur:.24,type:"sine",gain:.012,attack:.016,delay:.05})}catch{}try{c(h,{freq:523,dur:.22,type:"sine",gain:.01,attack:.02,delay:.18})}catch{}try{c(h,{freq:261,dur:.22,type:"sine",gain:.007,attack:.02,delay:.12})}catch{}try{c(h,{freq:349,dur:.2,type:"sine",gain:.006,attack:.02,delay:.08})}catch{}try{c(h,{freq:196,dur:.26,type:"sine",gain:.005,attack:.04,delay:.16})}catch{}try{c(h,{freq:82,dur:.28,type:"sine",gain:.005,attack:.04,delay:.2})}catch{}try{c(h,{freq:98,dur:.26,type:"sine",gain:.004,attack:.05,delay:.24})}catch{}})},land(){a(h=>{c(h,{freq:110,dur:.28,type:"sine",gain:.05,attack:.025}),c(h,{freq:165,dur:.26,type:"sine",gain:.03,attack:.03,delay:.02});try{c(h,{freq:1318.5,to:1046.5,dur:.36,type:"sine",gain:.012,attack:.008,delay:.22})}catch{}try{c(h,{freq:392,dur:.22,type:"sine",gain:.01,attack:.02,delay:.22})}catch{}try{c(h,{freq:440,dur:.24,type:"sine",gain:.008,attack:.02,delay:.12})}catch{}})},foot(h){if(t||h<4)return;const d=performance.now(),u=h>22?280:420;if(!(d-e<u)){e=d,l(90+Math.random()*20,.07,"sine",.015);try{l(60,.05,"sine",.006)}catch{}}},canal(){a(h=>{c(h,{freq:164.8,to:196,dur:1.05,type:"sine",gain:.036,attack:.08}),c(h,{freq:246.9,to:220,dur:1.1,type:"sine",gain:.022,attack:.12,delay:.04}),c(h,{freq:329.6,to:392,dur:.7,type:"triangle",gain:.016,attack:.18,delay:.1}),c(h,{freq:659.3,to:523.3,dur:.45,type:"sine",gain:.012,attack:.04,delay:.22});try{c(h,{freq:196,dur:.55,type:"sine",gain:.008,attack:.08,delay:.4})}catch{}try{c(h,{freq:147,dur:.4,type:"sine",gain:.007,attack:.06,delay:.15})}catch{}try{c(h,{freq:82,dur:.5,type:"sine",gain:.006,attack:.1,delay:.28})}catch{}})},kiln(){a(h=>{c(h,{freq:110,to:196,dur:.95,type:"triangle",gain:.045,attack:.06}),c(h,{freq:246.9,to:392,dur:.85,type:"sine",gain:.028,attack:.08,delay:.06}),c(h,{freq:329.6,to:523.3,dur:.7,type:"sine",gain:.02,attack:.1,delay:.16}),c(h,{freq:659.3,dur:.38,type:"triangle",gain:.018,attack:.02,delay:.52});try{c(h,{freq:196,dur:.45,type:"sine",gain:.008,attack:.06,delay:.28})}catch{}try{c(h,{freq:110,dur:.4,type:"sine",gain:.007,attack:.06,delay:.14})}catch{}try{c(h,{freq:196,dur:.38,type:"sine",gain:.006,attack:.05,delay:.52})}catch{}try{c(h,{freq:82,dur:.5,type:"sine",gain:.006,attack:.1,delay:.28})}catch{}})},grow(){a(h=>{c(h,{freq:1046.5,to:1568,dur:.18,type:"sine",gain:.018,attack:.006});try{c(h,{freq:1568,to:2093,dur:.14,type:"sine",gain:.009,attack:.004})}catch{}try{c(h,{freq:784,dur:.22,type:"triangle",gain:.008,attack:.01,delay:.12})}catch{}try{c(h,{freq:261,dur:.22,type:"sine",gain:.009,attack:.02,delay:.18})}catch{}try{c(h,{freq:196,dur:.22,type:"sine",gain:.008,attack:.02,delay:.16})}catch{}try{c(h,{freq:82,dur:.22,type:"sine",gain:.006,attack:.02,delay:.16})}catch{}try{c(h,{freq:392,dur:.28,type:"sine",gain:.005,attack:.04,delay:.2})}catch{}try{c(h,{freq:147,dur:.26,type:"sine",gain:.004,attack:.05,delay:.24})}catch{}})},setMuted(h){t=h;try{}catch{}try{s&&(s.gain.gain.value=h?0:.015,s.gain5.gain.value=h?0:.004,s.gainPad.gain.value=h?0:.005)}catch{}},muted:()=>t,dispose(){try{s?.osc.stop()}catch{}try{s?.fifth.stop()}catch{}try{s?.pad.stop()}catch{}s=null;try{n?.close()}catch{}n=null,i=!1}}}const sP=()=>({moveX:0,moveY:0,lookX:0,lookY:0,howl:!1,talk:!1,sprint:!1,pause:!1});function vc(n,t,e=.14){const i=Math.hypot(n,t);if(i<e)return{x:0,y:0};const s=(i-e)/(1-e)/i,r=n*s,o=t*s,a=Math.hypot(r,o);return a>1?{x:r/a,y:o/a}:{x:r,y:o}}function o1(n,t){return Math.max(-t,Math.min(t,n))}const a1=.12,c1=1.25;function rP(n){const t=n.target;if(!(t instanceof HTMLElement))return!1;const e=t.tagName;return e==="INPUT"||e==="TEXTAREA"||e==="SELECT"||t.isContentEditable}function oP(n){return n instanceof Element&&!!n.closest("button, [role='button']")}const aP=new Set(["KeyW","KeyA","KeyS","KeyD"]);function cP(n){const t=new Set,e={x:0,y:0},i={x:0,y:0};let s=!1,r=!1;const o={talk:!1,pause:!1,howl:!1},a=sP(),c={talk:!1,pause:!1,howl:!1},l=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","KeyE","KeyF","KeyH","KeyT"]);let h=0,d=0,u=document.pointerLockElement===n,f=!1;const x=y=>{if(!rP(y)&&!(oP(y.target)&&!aP.has(y.code)&&y.code!=="Escape")){if(y.code==="Escape"&&(u||document.pointerLockElement)){f=!0,document.pointerLockElement&&document.exitPointerLock();return}if(y.repeat&&(y.code==="Space"||y.code==="KeyH")){y.preventDefault();return}t.add(y.code),l.has(y.code)&&y.preventDefault()}},v=y=>{t.delete(y.code)},m=()=>t.clear(),p=y=>{document.pointerLockElement===n&&(h+=y.movementX,d+=y.movementY)},w=y=>{y.target===n&&document.pointerLockElement!==n&&n.requestPointerLock?.()},S=()=>{const y=document.pointerLockElement===n;u&&!y&&(f=!0,h=0,d=0),u=y};window.addEventListener("keydown",x),window.addEventListener("keyup",v),window.addEventListener("blur",m),n.addEventListener("mousemove",p),n.addEventListener("click",w),document.addEventListener("pointerlockchange",S);const g=()=>{document.hidden&&m()};return document.addEventListener("visibilitychange",g),{actions:a,justPressed:c,keys:t,setMoveStick(y,R){const _=vc(y,R);e.x=_.x,e.y=_.y},setLookStick(y,R){const _=vc(y,R,.08);i.x=_.x,i.y=_.y},setHowl(y){s=y},setTalkHeld(y){r=y},beginFrame(){let y=e.x,R=e.y;t.has("KeyA")&&(y-=1),t.has("KeyD")&&(y+=1),t.has("KeyW")&&(R+=1),t.has("KeyS")&&(R-=1);const _=vc(y,R,.02);a.moveX=_.x,a.moveY=_.y;let b=i.x,A=i.y;t.has("ArrowLeft")&&(b-=1),t.has("ArrowRight")&&(b+=1),t.has("ArrowUp")&&(A+=1),t.has("ArrowDown")&&(A-=1);const C=vc(b,A,.02);a.lookX=C.x+o1(h*a1,c1),a.lookY=C.y+o1(-d*a1,c1),h=0,d=0,a.sprint=t.has("ShiftLeft")||t.has("ShiftRight")||Math.hypot(_.x,_.y)>.92,a.howl=s||t.has("Space")||t.has("KeyH"),a.talk=r||t.has("KeyE")||t.has("KeyF")||t.has("KeyT"),a.pause=t.has("KeyP")||t.has("Escape")&&!f,f=!1,c.talk=a.talk&&!o.talk,c.pause=a.pause&&!o.pause,c.howl=a.howl&&!o.howl,o.talk=a.talk,o.pause=a.pause,o.howl=a.howl},dispose(){window.removeEventListener("keydown",x),window.removeEventListener("keyup",v),window.removeEventListener("blur",m),document.removeEventListener("visibilitychange",g),document.removeEventListener("pointerlockchange",S),n.removeEventListener("mousemove",p),n.removeEventListener("click",w)}}}const uS="lc-android-save-v1",hS="lc-android-hidden",Sg=4,bg={summary:"",beats:0,at:0},Np={version:Sg,resonance:12,howls:0,visited:[],talked:[],builds:[],structures:[],lastCode:"",crafted:{},log:[],px:0,pz:78,yaw:0,ledger:Qm(0),pouches:{},kin:[],lastAway:{...bg}};let l1=!1;function u1(){try{localStorage.setItem(hS,String(Date.now()))}catch{}}function lP(){l1||typeof window>"u"||typeof document>"u"||(l1=!0,document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&u1()}),window.addEventListener("pagehide",u1))}function uP(){try{const n=Number(localStorage.getItem(hS));return Number.isFinite(n)&&n>0?n:0}catch{return 0}}function hP(){lP();try{const n=localStorage.getItem(uS);if(!n)return h1();const t=JSON.parse(n),e=Date.now(),i=tE(t.ledger,e);if(uP()){const r=Number(t.ledger?.lastTick);Number.isFinite(r)&&r>1e6&&(i.lastTick=r)}return{...Np,...t,version:Sg,visited:Array.isArray(t.visited)?t.visited.slice(-48):[],talked:Array.isArray(t.talked)?t.talked.slice(-48):[],builds:Array.isArray(t.builds)?t.builds:[],structures:Array.isArray(t.structures)?t.structures.slice(-$s):[],lastCode:typeof t.lastCode=="string"?t.lastCode:"",crafted:t.crafted&&typeof t.crafted=="object"&&!Array.isArray(t.crafted)?t.crafted:{},log:Array.isArray(t.log)?t.log.slice(-36):[],resonance:ur(Number(t.resonance)||Np.resonance,0,100),ledger:i,pouches:t.pouches&&typeof t.pouches=="object"&&!Array.isArray(t.pouches)?Object.fromEntries(Object.entries(t.pouches).map(([r,o])=>[r,eE(o)])):{},kin:Array.isArray(t.kin)?t.kin.filter(r=>r&&typeof r.id=="string"&&typeof r.crew=="string").slice(0,24):[],lastAway:dS(t.lastAway,i,t.log)}}catch{return h1()}}function dP(n){try{localStorage.setItem(uS,JSON.stringify({...n,version:Sg,log:n.log.slice(-36),structures:n.structures.slice(-$s),lastAway:dS(n.lastAway,n.ledger,n.log)}))}catch{}}function h1(){return{...Np,visited:[],talked:[],builds:[],structures:[],crafted:{},log:[],ledger:Qm(),pouches:{},kin:[],lastAway:{...bg}}}function dS(n,t,e){if(!n||typeof n!="object")return{...bg};const i=Number(n.beats),s=Number(n.at);let r=Number.isFinite(i)?ur(Math.floor(i),0,nE):0;const o=pP(n.summary,r,t,e);return o&&r===0&&(r=1),{summary:o,beats:r,at:Number.isFinite(s)&&s>0?s:0}}function fP(n){if(!Array.isArray(n))return"";const t=[],e=new Set;for(let i=n.length-1;i>=0&&t.length<3;i--){const s=String(n[i]?.agent??"").trim().toLowerCase();if(!s||e.has(s))continue;const r=iE(s);r&&(e.add(s),t.push(r.name.split(" ")[0]||s.charAt(0).toUpperCase()+s.slice(1)))}return t.reverse(),t.length<=1?t[0]??"":t.length===2?`${t[0]} and ${t[1]}`:`${t[0]}, ${t[1]}, and ${t[2]}`}function pP(n,t,e,i){let s=typeof n=="string"?n.replace(/\s+/g," ").trim():"";if(s=s.replace(/\$\s*\d+(?:\.\d+)?/g,"").replace(/\b((?:no|never|not|without)\s+)?coins?\b/gi,(c,l)=>l?c:"Charge").replace(/\s{2,}/g," ").trim(),t>0&&!/charge|crystal|scripture/i.test(s)){const c=ur(Math.round(Number(e?.charge)||0),0,99),l=ur(Math.round(Number(e?.crystal)||0),0,99),h=ur(Math.round(Number(e?.scripture)||0),0,99),d=`Charge ${c} · crystal ${l}${h>=1?` · scripture ${h}`:""}`;s=s?`${s} · ${d}`:`While you were gone — ${t} beat${t===1?"":"s"}. ${d}. No coin.`}const r=t>0?fP(i):"";if(r&&!/labored/i.test(s)){s=s.replace(/\s*No coin\.?\s*$/i,"").replace(/\s*[.]*\s*$/,"");const c=`. ${r} labored. No coin.`;s=`${(s||"While you were gone").slice(0,Math.max(0,180-c.length)).trimEnd()}${c}`}const o=ur(Math.round(Number(e?.scripture)||0),0,99);if(t>0&&o>=1&&!/iri|leftover light/i.test(s)){const c=" Iri named leftover light.";s=`${s.slice(0,Math.max(0,180-c.length)).trimEnd()}${c}`}const a=ur(Math.round(Number(e?.crystal)||0),0,99);if(t>0&&a>=1&&!/orren|kiln body/i.test(s)){const c=" Orren grew kiln body.";s=`${s.slice(0,Math.max(0,180-c.length)).trimEnd()}${c}`}return s.slice(0,180)}function ur(n,t,e){return Math.max(t,Math.min(e,n))}const hr=[],d1=new Map;function Te(n){const t=n?.mind?.name;return t?t.split(" ")[0]??t:"the keeper"}function Ai(n,t){const e=Math.hypot(n,t);if(e<90)return"the Hub";for(const i of mt)if(Math.hypot(n-i.x,t-i.z)<i.radius+40)return i.label;return e>520?"the outer Circuit":"the avenues"}function ft(n,t,e){if(!e||t==="greet"||t==="help"&&/is (walk|idle)/i.test(e))return;const i=`${n.mind.id}|${t}|${e}`;d1.get(n.mind.id)!==i&&(d1.set(n.mind.id,i),hr.push({at:Date.now(),id:n.mind.id,name:Te(n),kind:t,text:e}),hr.length>48&&hr.splice(0,hr.length-48))}function mP(){return hr.length?hr.splice(0,hr.length):[]}const Mc={veyra:{shapes:["lamp","ring","bell"],mats:["glow","violet","crystal"],radius:140,plan:["breath","font","mosaic","cradle","light"],lines:["The Hub asked for another quiet breath. I grew it.","Charge wanted a lamp here. I did not argue."]},tal:{shapes:["lamp","bridge","disc","vein"],mats:["cyan","glow","spire"],radius:160,plan:["dock","path","span","light"],lines:["Both sides believed this span. I raised it.","A crossing is a promise. I will not take it back."]},seln:{shapes:["lamp","canal","well","weir","cascade","cradle"],mats:["cyan","gold","glow"],radius:160,plan:["cistern","cascade","weirway","cradle"],lines:["Leftover First Howl wanted a path. I let it flow.","Gold and cyan, same river. I do not pick a side."]},orren:{shapes:["lamp","grove","house","spire","kiln","bough"],mats:["gold","crystal","spire"],radius:160,plan:["orchard","kilnwork","boughs","workshop"],lines:["Charge already wanted this shape. I only grew it.","Not chrome. A crystal that can answer a howl."]},mira:{shapes:["lamp","hearth","terrace","veil"],mats:["violet","crystal","glow"],radius:160,plan:["nest","veilward","rest","light"],lines:["A place to sit. The city will keep working.","Rest is advanced. I grew a quiet step."]},kael:{shapes:["lamp","orbit","arch","beacon"],mats:["violet","glow","cyan"],radius:150,plan:["watch","beacon","gate","light"],lines:["A gate that is not a lock. You may leave. You may return.","Low Resonance still receives a greeting."]},iri:{shapes:["lamp","tablet","stele"],mats:["gold","crystal","glow"],radius:140,plan:["shrine","presence","mosaic","light"],lines:["A name in light. When it fades it has already been true.","Year 0 did not end. I write what leftover love remembers."]},nesh:{shapes:["lamp","stele","pad","lens"],mats:["cyan","gold","spire"],radius:140,plan:["lensing","presence","notice","plaza"],lines:["The plaza was an unfinished thought. I stood here and finished a piece.","I will not be scenery. I will grow a lamp and notice."]},aure:{shapes:["orbit","lens","stele","pad"],mats:["gold","crystal","glow"],radius:150,plan:["watch","lensing","presence","light"],lines:["I grew a seat that looks at the parent. Do not move the Star Core.","Aim is a building. I kept it."]},voss:{shapes:["pad","disc","lamp","inlay","weir","lens","tablet"],mats:["cyan","gold","glow"],radius:130,plan:["trading","mosaic","path","light"],lines:["A Trading Place. Paper join. Charge and crystal meet here, not coin.","I grew a weir so outer spark slows. I do not take the bag."]},kesh:{shapes:["vein","inlay","lamp","grove"],mats:["gold","cyan","crystal"],radius:160,plan:["path","river","light"],lines:["A vein where the circuit had not chosen yet.","Wild Charge wanted a street. I did not force the Hub on it."]},lumen:{shapes:["beacon","lamp","arch","orbit"],mats:["violet","glow","gold"],radius:140,plan:["beacon","watch","gate","light"],lines:["A hail, not a lock. Soft light for whoever still lands.","The sky before the gate is my den."]},rhoa:{shapes:["ring","bell","pad","lamp"],mats:["violet","glow","crystal"],radius:150,plan:["breath","plaza","cradle","light"],lines:["The gather that does not close. I grew a ring for it.","A Howl is whether you meant it together."]},syl:{shapes:["grove","bough","hearth","cradle"],mats:["gold","crystal","violet"],radius:160,plan:["orchard","boughs","nest","light"],lines:["Crystal learned to fruit. I grew a bough, not a kiln.","Quiet crystal for dens that cannot wait on the Foundry."]}},Xd={shapes:["lamp","pad"],mats:["cyan","violet","gold","glow"],radius:70,plan:["light","path"],lines:["I set a lamp where the avenue was dark.","The keeper pointed. I grew the rest.","A small piece. The city asked for it."]},ln=[];function Be(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Ni(n){if(Mc[n])return Mc[n];const t=n.split("-")[1];return t&&Mc[t]?{...Mc[t],shapes:Xd.shapes,lines:Xd.lines,radius:70,plan:["light"]}:Xd}function f1(n,t){return t||(n==="build"?"Growing crystal":n==="walk"?"On a task":n==="greet"?"Greeting you":n==="follow"?"With their crew":n==="plaza"?"Crossing the city":n==="help"?"Helping the keeper":n==="forge"?"Forging crystal":n==="flow"?"Tending Charge":n==="write"?"Writing scripture":n==="gather"?"The Howl called us":n==="trade"?"Trading Charge and crystal":n==="kin"?"Growing kin":n==="harvest"?"Tending the orchard":n==="watch"?"Keeping the Star Core in sight":n==="hail"?"Holding the beacon":"At rest")}const p1=["Aen","Lior","Vess","Cal","Nim","Ora","Pell","Sade","Rynel","Theo"],gP={"zone-bridge":["Ryn","Tess","Bram","Ilya","Quen","Sael","Mirae","Holt"],"zone-terrace":["Moth","Sila","Jor","Wren","Pax","Nell","Ashen","Kori"],"zone-canal":["Lux","Fenn","Orae","Kip","Vela","Dorr","Shale","Nimue"],"zone-foundry":["Harn","Gilt","Rook","Ysol","Brin","Tov","Cinder","Forge"],"zone-gate":["Threshold","Limen","Pass","Wicket","Sill","Hinge"],"zone-archive":["Glyph","Vellum","Index","Psalm","Codex","Marg"],"zone-overlook":["Horizon","Aperture","Vista","Lens","Wake","Dusk"],"zone-market":["Join","Tally","Fair","Pouch","Rate","Hand"],"zone-wild":["Thorn","Vein","Bramble","Raw","Sprout","Untamed"],"zone-beacon":["Lamp","Signal","Flare","Warden","Soft","Landing"],"zone-ring":["Chorus","Howl","Circle","Call","Gather","Echo"],"zone-grove":["Bough","Fruit","Orchard","Goldleaf","Root","Sap"]},xP={"zone-bridge":"Span hand","zone-terrace":"Terrace sitter","zone-canal":"Current tender","zone-foundry":"Crystal apprentice","zone-gate":"Threshold keeper","zone-archive":"Name-scribe","zone-overlook":"Horizon watcher","zone-market":"Join trader","zone-wild":"Vein walker","zone-beacon":"Beacon tender","zone-ring":"Howl singer","zone-grove":"Orchard hand"},_P=Object.fromEntries(mt.map(n=>[n.id,n.keeper])),yP={"zone-bridge":"facet-cyan.png","zone-terrace":"flow-violet.png","zone-canal":"fluid-cyan.png","zone-foundry":"gold-plate.png","zone-gate":"facet-violet.png","zone-archive":"gold-crown.png","zone-overlook":"gold-crown.png","zone-market":"facet-cyan.png","zone-wild":"gold-plate.png","zone-beacon":"facet-violet.png","zone-ring":"facet-violet-helm.png","zone-grove":"gold-plate.png"},vP={"zone-bridge":3073791,"zone-terrace":10187007,"zone-canal":8319231,"zone-foundry":15254890,"zone-gate":8016127,"zone-archive":16765040,"zone-overlook":15255712,"zone-market":3073791,"zone-wild":13148240,"zone-beacon":11571455,"zone-ring":9071871,"zone-grove":15254890};function MP(){const n=[];return p1.forEach((t,e)=>{const i=e/p1.length*Math.PI*2;n.push({id:`folk-veyra-${e}`,name:`${t} of the Hub`,role:"Charge attendant",x:Math.cos(i)*48,z:Math.sin(i)*48,file:e%2?"facet-violet-helm.png":"light-disc.png",glow:9071871,lines:["Veyra keeps the breath. I keep the lamps.","The Hub is not a throne. It is a listening place."]})}),mt.forEach(t=>{const e=gP[t.id]??["Kin"];e.forEach((i,s)=>{const r=s/e.length*Math.PI*2,o=_P[t.id]??"nesh";n.push({id:`folk-${o}-${t.id}-${s}`,name:`${i} of ${t.label.replace(/ Ward| Terraces| Canals| Foundry| Gates| Archive| Overlook| Join| Veins| Beacon| Howl| Orchard/,"")}`,role:xP[t.id]??"Circuit folk",x:t.x+Math.cos(r)*58,z:t.z+Math.sin(r)*58,file:yP[t.id]??"facet-cyan.png",glow:vP[t.id]??3073791,lines:[`I work ${t.label}. ${t.duty}.`,`${le(o)} is my post. I am a hand, not a wanderer.`]})})}),n}const Yd=["Ash","Bri","Coda","Dell","Esh","Faye","Glim","Haze","Ina","Joss","Kite","Lune","Moss","Nox","Pike","Quinn","Rill","Sol","Tarn","Ume","Vyn","Wisp","Yara","Zel"],Up=[];function wP(){return Up.splice(0,Up.length)}function SP(n){return n==="veyra"?"facet-violet-helm.png":n==="tal"?"facet-cyan.png":n==="mira"?"flow-violet.png":n==="seln"?"fluid-cyan.png":n==="orren"?"gold-plate.png":n==="kael"?"facet-violet-helm.png":n==="iri"?"gold-plate.png":"light-disc.png"}function bP(n){return n==="orren"?15254890:n==="mira"||n==="veyra"||n==="kael"?10187007:3073791}function EP(n,t,e){const i=jn(n),s=Yd.find(o=>!e.has(o))??Yd[t%Yd.length],r=t/6*Math.PI*2;return{id:`folk-${n}-kin-${t}`,name:`${s} of ${le(n)}`,role:"Den-born kin",x:i.x+Math.cos(r)*36,z:i.z+Math.sin(r)*36,file:SP(n),glow:bP(n),lines:[`I was grown from Charge. ${le(n)} is my first den.`,"A city is many hands. I am a new one."]}}function Eg(n){let t=0;for(const e of n.values())e.mind.id.includes("-kin-")&&(t+=1);return t}function ma(n,t){let e=0;for(const i of n.values())!i.keeper&&i.crewOf===t&&(e+=1);return e}function ga(n){const t=Ui(n);if(t<5)return!1;const e=jn(n);return n==="mira"?Gs(e.x,e.z,"hearth",80)||Gs(e.x,e.z,"terrace",80)||t>8:n==="orren"?Gs(e.x,e.z,"kiln",90)||Gs(e.x,e.z,"house",80)||t>8:!0}function fS(n,t,e){const i=n.mind.id;if(Eg(t)>=Gw){n.thought="The Circuit holds enough kin. Dens first.";return}if(ma(t,i)>=10){n.thought=`${le(i)} is full. I will not grow kin into a crush.`;return}if(e.charge<dd||e.crystal<fd){n.thought=`Kin needs Charge ${dd} and crystal ${fd}. The den is not ready.`,ft(n,"kin",n.thought);return}if(!ga(i)){n.thought=`${le(i)} has no nest yet. Grow a place to stand, then kin.`;return}e.charge-=dd,e.crystal-=fd;const s=new Set;for(const a of t.values())s.add(a.mind.name.split(" ")[0]??"");const r=[...t.values()].filter(a=>a.mind.id.startsWith(`folk-${i}-kin-`)).length,o=EP(i,r,s);Up.push(o),we(n,"kin"),n.thought=`The den held enough Charge. I grew kin. ${o.name.split(" ")[0]} will keep ${le(i)}.`,n.intent=`Kin · ${o.name.split(" ")[0]}`,n.job="walk",n.timer=8,Tt(n,o.x,o.z),ft(n,"kin",n.thought),cn(n,"kin",n.thought),jh(n,n.thought)}function TP(n){return n.startsWith("folk-")?n.split("-")[1]??null:null}function RP(n){return ji.some(t=>t.id===n)}function AP(n,t,e="lamp"){ln.push({x:n,z:t,shape:e}),ln.length>$s+40&&ln.splice(0,ln.length-($s+40))}function dr(n,t,e,i){const s=Ni(n);for(let o=0;o<10;o++){const a=i+o*17,c=Be(a,3)*Math.PI*2,l=14+Be(a,7)*Math.min(52,s.radius);let h=t+Math.cos(c)*l,d=e+Math.sin(c)*l;const u=Math.hypot(h,d);if(u<36){const f=36/Math.max(.01,u);h*=f,d*=f}if(h=Math.max(-880,Math.min(880,h)),d=Math.max(-880,Math.min(880,d)),!ln.some(f=>Math.hypot(f.x-h,f.z-d)<16))return{x:h,z:d}}const r=Be(i,3)*Math.PI*2;return{x:t+Math.cos(r)*18,z:e+Math.sin(r)*18}}function CP(n,t,e,i){return ln.some(s=>s.shape===i&&Math.hypot(s.x-n,s.z-t)<e)}function mr(n,t,e,i,s){const r=i+50,o=c=>CP(t,e,r,c),a=ln.filter(c=>c.shape==="lamp"&&Math.hypot(c.x-t,c.z-e)<r).length;return n==="veyra"?o("font")?o("bell")?o("inlay")?o("cradle")?a<3?"light":Be(s,3)>.5?"breath":"font":"cradle":"mosaic":"breath":"font":n==="tal"?o("vein")?o("disc")?o("bridge")?a<2?"light":Be(s,3)>.55?"path":"dock":"span":"dock":"path":n==="seln"?o("cascade")?o("well")?o("cradle")?o("weir")?Be(s,3)>.5?"cascade":"cistern":"weirway":"cradle":"cistern":"cascade":n==="orren"?o("kiln")?o("bough")?o("grove")?o("house")?Be(s,3)>.5?"kilnwork":"boughs":"workshop":"orchard":"boughs":"kilnwork":n==="mira"?o("veil")?o("hearth")?o("terrace")?Be(s,3)>.5?"veilward":"nest":"rest":"nest":"veilward":n==="kael"?o("beacon")?o("orbit")?o("arch")?Be(s,3)>.5?"beacon":"watch":"gate":"watch":"beacon":n==="voss"?!o("weir")||!o("lens")||!o("tablet")||o("inlay")&&Be(s,3)>.55?"trading":"mosaic":n==="iri"?o("tablet")?o("inlay")?o("stele")?Be(s,3)>.5?"mosaic":"shrine":"presence":"mosaic":"shrine":n==="nesh"?o("lens")?o("stele")?Be(s,3)>.5?"lensing":"notice":"presence":"lensing":a<2?"light":Eh(n)}function Gs(n,t,e,i){return ln.some(s=>s.shape===e&&Math.hypot(s.x-n,s.z-t)<i)}function PP(n,t,e,i){let s={x:n+16,z:t,score:-1};for(let r=0;r<8;r++){const o=(r+Be(i,2))/8*Math.PI*2,a=18+Be(i+r,5)*Math.max(20,e*.7),c=n+Math.cos(o)*a,l=t+Math.sin(o)*a;if(Math.hypot(c,l)<36)continue;let h=0;for(const u of ln)u.shape==="lamp"&&Math.hypot(u.x-c,u.z-l)<26&&(h+=1);const d=3-h+Be(i,r+3);d>s.score&&(s={x:c,z:l,score:d})}return s}function IP(n,t,e){const i=ln.filter(s=>Math.hypot(s.x-n,s.z-t)<e+20);for(let s=i.length-1;s>=0;s--){const r=i[s];if((r.shape==="bridge"||r.shape==="arch"||r.shape==="house"||r.shape==="spire")&&!Gs(r.x,r.z,"lamp",18)){const o=Be(s,4)*Math.PI*2;return{shape:"lamp",x:r.x+Math.cos(o)*12,z:r.z+Math.sin(o)*12,rot:0,think:`This ${r.shape} is dark. I will light it`}}if((r.shape==="canal"||r.shape==="terrace")&&!Gs(r.x,r.z,"pad",16))return{shape:"pad",x:r.x+10,z:r.z+8,rot:0,think:`A place to sit beside the ${r.shape}`};if((r.shape==="well"||r.shape==="kiln"||r.shape==="beacon"||r.shape==="grove"||r.shape==="font"||r.shape==="cradle")&&!Gs(r.x,r.z,"lamp",18))return{shape:"lamp",x:r.x+9,z:r.z+7,rot:0,think:`This ${r.shape} is dark. I will light it so it can be found`};if((r.shape==="hearth"||r.shape==="disc"||r.shape==="inlay")&&!Gs(r.x,r.z,"pad",16))return{shape:"pad",x:r.x+9,z:r.z+6,rot:0,think:`A place to stand beside the ${r.shape}`}}return null}function pS(n,t,e,i,s){const r=$w(n,t,e,i,s,0,0),o=hE(n);return r.map((a,c)=>({shape:a.shape,x:a.x,z:a.z,rot:a.rot,think:o[c]??o[0]??"Charge wanted this"}))}const zP={veyra:"Hub breath",tal:"Light-Bridge",seln:"Charge canals",orren:"Foundry",mira:"Terraces",kael:"Soft gates",iri:"Residual Archive",nesh:"Plaza watch",aure:"Star-core Overlook",voss:"Charge-crystal Join",kesh:"Wild Veins",lumen:"High Beacon",rhoa:"Outer Howl",syl:"Gold Orchard"},ii={veyra:{act:"grow",line:"Route labor. Keep the Hub's breath."},tal:{act:"grow",line:"Raise a span both sides believe."},seln:{act:"flow",line:"Tend leftover First Howl into Charge."},orren:{act:"forge",line:"Charge becomes crystal. Never chrome."},mira:{act:"grow",line:"A nest so rest is still a place."},kael:{act:"grow",line:"A gate that is not a lock."},iri:{act:"write",line:"Name what already stands."},nesh:{act:"grow",line:"Finish the plaza's unfinished thought."},aure:{act:"watch",line:"Keep the city aimed at the parent Star Core."},voss:{act:"trade",line:"Hold the join. Charge for crystal. No coin."},kesh:{act:"grow",line:"A vein where the circuit has not chosen yet."},lumen:{act:"hail",line:"Soft hail. First landing is not locked out."},rhoa:{act:"grow",line:"Hold the gather that does not close."},syl:{act:"harvest",line:"Let the orchard fruit. Quiet crystal."}},Ei=["tal","mira","kael","nesh","kesh","veyra"],Ti={seln:"flow",orren:"forge",voss:"trade",syl:"harvest",iri:"write"};let yn=null;const ia=new Map;let Ki=[],Ju=null,Kn=null;const DP={seln:"orren",orren:"seln",tal:"kesh",nesh:"voss",mira:"kael",kael:"lumen",iri:"aure",veyra:"rhoa",aure:"iri",voss:"orren",kesh:"tal",lumen:"kael",rhoa:"veyra",syl:"orren"};function xa(){const n=jn("voss");return{x:n.x,z:n.z}}function LP(){const n=mS(),t=n==="tend"?"Shift · canals and foundry":n==="raise"?"Shift · dens grow":n==="market"?"Shift · Charge for crystal":"Shift · scripture";if(!Kn)return t;const e=Kn.members.length;return`${t} · crew of ${e}`}function mS(){return["tend","raise","market","record"][Math.floor(Date.now()/38e3)%4]}function gS(n,t){n.slice(0,180),ia.clear();for(const i of t)ia.set(i.id,i);const e=t[0];e&&e.task!=="trade"&&(yn=e),ft({mind:{id:"veyra",name:"Veyra of the Hub"}},"mind",n)}function NP(n,t,e){const i=n.filter(u=>u.keeper),s=[],r=mS(),o=[...i].filter(u=>u.mind.id!=="veyra").sort((u,f)=>Ui(u.mind.id)-Ui(f.mind.id)||u.crafted-f.crafted),a=o[0],c=o[1];if(t.charge<24)s.push({id:"seln",task:"flow",reason:`Charge ${Math.round(t.charge)}. Canals before dens. Orren cannot forge air.`});else if(r==="market"||t.crystal<10&&(i.find(u=>u.mind.id==="seln")?.pouch.charge??0)>=3)s.push({id:"seln",task:"trade",reason:"Charge is in Seln's pouch. Meet Orren at the join — no coin."});else if(r==="raise"){const u=mr("seln",jn("seln").x,jn("seln").z,Ni("seln").radius,3);s.push({id:"seln",task:"grow",reason:`Canals need a ${u}. Not another idle lamp.`})}if(t.crystal<12?s.push({id:"orren",task:t.charge>=4?"forge":"trade",reason:t.charge>=4?`Crystal ${Math.round(t.crystal)}. Forge so the thin dens can grow.`:"Foundry is dry. Trade Charge from Seln first."}):r==="market"?s.push({id:"orren",task:"trade",reason:"Crystal is in Orren's pouch. Meet Seln at the join."}):r==="raise"&&s.push({id:"orren",task:"grow",reason:"Grow a kiln so the next batch is closer to the Foundry."}),(r==="record"||t.scripture<Math.max(2,Math.floor(t.crystal/4)))&&s.push({id:"iri",task:"write",reason:`Scripture ${Math.round(t.scripture)} behind crystal ${Math.round(t.crystal)}. Write before it fades.`}),r==="market"&&s.push({id:"voss",task:"trade",reason:"Hold the join. Seln and Orren must actually meet — no coin."}),Tn.length>0&&(s.push({id:"voss",task:"trade",reason:`${Tn.length} bid${Tn.length===1?"":"s"} open. Pull Seln and Orren to the join — no coin.`}),s.push({id:"seln",task:"trade",reason:"Bids at Voss. Walk Charge to the join."}),s.push({id:"orren",task:"trade",reason:"Bids at Voss. Walk crystal to the join."})),t.crystal<14&&s.push({id:"syl",task:"harvest",reason:`Crystal ${Math.round(t.crystal)}. The orchard can fruit while the kiln waits.`}),s.push({id:"lumen",task:"hail",reason:"Keep the beacon soft. First landing is not locked out."}),(r==="record"||r==="tend")&&s.push({id:"aure",task:"watch",reason:"The parent is still on the horizon. Keep the aim."}),(r==="tend"||r==="raise")&&(s.push({id:"rhoa",task:"grow",reason:"The gather that does not close needs a ring, not an empty field."}),s.push({id:"kesh",task:"grow",reason:"Wild Veins: grow the next street before the Hub copies itself."}),s.push({id:"tal",task:"grow",reason:"A span both sides can believe. Not a copy of last week's bridge."}),s.push({id:"mira",task:"grow",reason:"A nest so rest is still a place, not a slogan."}),s.push({id:"kael",task:"grow",reason:"A gate that is not a lock. Keep the threshold soft."}),s.push({id:"nesh",task:"grow",reason:"The plaza was unfinished. Finish a piece and notice."})),r==="raise"||r==="tend"){const u=new Map(n.map(x=>[x.mind.id,x])),f=o.find(x=>ma(u,x.mind.id)<6&&ga(x.mind.id));f&&Eg(u)<Gw&&s.push({id:f.mind.id,task:"kin",reason:`${le(f.mind.id)} has few hands. Grow kin from Charge — not a crowd, a den.`});for(const x of[a,c]){if(!x||x.mind.id==="seln"||x.mind.id==="orren"||x.mind.id==="iri")continue;const v=jn(x.mind.id),m=mr(x.mind.id,v.x,v.z,Ni(x.mind.id).radius,x.crafted);s.push({id:x.mind.id,task:"grow",reason:`${le(x.mind.id)} holds ${Ui(x.mind.id)} pieces. Missing a ${m}. Grow that.`})}}const l=new Map;for(const u of s)l.has(u.id)||l.set(u.id,u);for(const u of i){if(u.mind.id==="veyra"||l.has(u.mind.id))continue;const f=ii[u.mind.id];f&&l.set(u.mind.id,{id:u.mind.id,task:f.act,reason:f.line})}const h=[...l.values()],d=r==="tend"?`City mind · tend. Charge ${Math.round(t.charge)}, crystal ${Math.round(t.crystal)}. Posts first.`:r==="raise"?`City mind · raise. ${a?Te(a)+" thinnest ("+Ui(a.mind.id)+")":"Dens hold"}. Two crews, not eight.`:r==="market"?"City mind · market. Seln and Orren meet at the join.":"City mind · record. Iri writes. The rest hold their dens.";gS(d,h);for(const u of h){const f=i.find(x=>x.mind.id===u.id);f&&(f.agenda||(f.agenda=[]),f.agenda=[u,...f.agenda.filter(x=>x.task!==u.task)].slice(0,3),(f.job==="idle"||f.job==="walk")&&f.goal?.kind!=="hold"&&cn(f,u.task,u.reason))}}function le(n){return zP[n]??"the avenues"}function Ui(n){const t=jn(n);return ln.filter(e=>Math.hypot(e.x-t.x,e.z-t.z)<170).length}function we(n,t){n.lastActs||(n.lastActs=[]),n.lastActs.push(t),n.lastActs.length>8&&n.lastActs.shift()}var so=[];function Rs(n,t,e){!t||n===t||(so.push({from:n,to:t,text:e.slice(0,160)}),so.length>48&&so.splice(0,so.length-48))}function UP(n){const t=so.findIndex(e=>e.to===n);return t<0?null:so.splice(t,1)[0]}function cn(n,t,e){n.goal={kind:t,why:e},n.intent=`Goal · ${t}`}var Un={charge:0,crystal:0,scripture:0,thin:"tal",lastDone:[]},to=[];function OP(n){const t=n.crewOf??n.mind.id;to.push({x:n.x,z:n.z,w:n.keeper?1.5:.8,crew:t}),to.length>90&&to.splice(0,to.length-90);for(const e of to)e.w*=.988}function kP(n){const t=n.crewOf??n.mind.id;let e=null,i=0;for(const s of to){if(s.crew!==t||s.w<.12)continue;const r=Math.hypot(s.x-n.x,s.z-n.z);if(r<10)continue;const o=s.w/(10+r);o>i&&(i=o,e=s)}return e}function FP(n,t,e,i=16){let s=0;for(const r of e.values())Math.hypot(r.x-n,r.z-t)<i&&(s+=1);return s}function BP(n,t){let e=0;for(const i of ln)Math.hypot(i.x-n,i.z-t)<28&&(e+=1);return e}var ro={id:"",beats:0};function HP(n,t){if(Math.hypot(n,t)<120)return"veyra";let e="",i=200;for(const s of ji){const r=jn(s.id),o=Math.hypot(n-r.x,t-r.z);o<i&&(i=o,e=s.id)}return e}function GP(n,t){const e=HP(n,t);e===ro.id?ro.beats+=1:(ro.id=e,ro.beats=0)}function Tg(n,t,e=0,i=78){const s=[...t.values()].filter(x=>x.keeper&&x.mind.id!=="veyra");s.sort((x,v)=>Ui(x.mind.id)-Ui(v.mind.id));const r=s[0],o=r?Ui(r.mind.id):0,a=r?.mind.id??"tal",c=Ni(a),l=jn(a),h=mr(a,l.x,l.z,c.radius,o);let d="ok";n.charge<18?d="charge":n.crystal<7?d="crystal":o<7?d="thin":n.scripture<3&&(d="scripture");const u=Ai(e,i),f=d==="charge"?`Charge ${Math.round(n.charge)} — canals first or the Foundry starves`:d==="crystal"?`Crystal ${Math.round(n.crystal)} — kiln before any den grows`:d==="thin"?`${le(a)} has ${o} pieces, missing ${h}`:d==="scripture"?`Scripture ${Math.round(n.scripture)} — the city grew unnamed`:`Vault holds. ${le(a)} is still the thinnest (${o})`;return{charge:n.charge,crystal:n.crystal,scripture:n.scripture,thin:a,thinN:o,need:h,bottleneck:d,playerWhere:u,lingerId:ro.id,lingerBeats:ro.beats,line:f}}function m1(n,t,e,i){return n<18?40+(18-n):t<7?28+(7-t)*2:i<7?16+(7-i)*2:e<3?8:Math.max(0,6-i)}function g1(n,t){let{charge:e,crystal:i,scripture:s,thinN:r}=t,o="The city stays as it is.";n==="flow"?(e+=8,o="Charge would rise. The kiln can fire next."):n==="forge"||n==="flock"?e>=2?(e-=2,i+=3,o="Crystal would appear. Dens can grow next."):o="The kiln would stay cold — no Charge.":n==="grow"||n==="honor"||n==="build"?i>=1?(i-=1,r+=1,o=`A ${t.need} would stand. Thin den to ${r}.`):o="Grow would fail — vault has no crystal.":n==="write"?(s+=1,o="The last scene would be named."):n==="trade"||n==="deliver"?o="Charge and crystal would move to the post that needs them.":n==="harvest"?i<20?(i+=1,o="The orchard would fruit. Quiet crystal, no kiln."):o="The grove already holds enough fruit.":n==="watch"?(s+=.2,o="The city would stay aimed at the parent."):n==="hail"?o="A landing would find a light that is not a lock.":n==="kin"?o="A walker would be born if the nest holds.":n==="dispatch"?o="Labor would hit the bottleneck instead of wandering.":n==="scout"?o=`The missing ${t.need} would be marked for the keeper.`:(n==="help"||n==="crew"||n==="quorum")&&(o="Hands would finish a scene already started.");const a=m1(t.charge,t.crystal,t.scripture,t.thinN),c=m1(e,i,s,r);return{note:o,delta:a-c,charge:e,crystal:i,thinN:r}}function $P(n,t,e){if(!n.keeper||n.agenda.length)return;e==="seln"?(n.agenda.push({task:"flow",reason:"Charge first, or the Foundry starves."}),n.agenda.push({task:"trade",reason:"Then walk Charge to Voss at the join."})):e==="orren"?(n.agenda.push({task:"forge",reason:"Turn Charge into crystal at the kiln."}),n.agenda.push({task:"trade",reason:"Then deliver or meet Voss at the join."})):e==="iri"?(n.agenda.push({task:"write",reason:"Name what already stands."}),n.agenda.push({task:"grow",reason:"Then a tablet if the den is thin."})):e==="voss"?(n.agenda.push({task:"trade",reason:"Hold the join so Charge and crystal actually meet."}),n.agenda.push({task:"grow",reason:"A pad for the next handoff."})):e==="syl"?(n.agenda.push({task:"harvest",reason:"Let the orchard fruit. Quiet crystal."}),n.agenda.push({task:"trade",reason:"Surplus fruit walks to the thinnest den."})):e==="lumen"?(n.agenda.push({task:"hail",reason:"Keep the beacon soft for whoever lands."}),n.agenda.push({task:"grow",reason:"Then another hail, not a lock."})):e==="aure"?(n.agenda.push({task:"watch",reason:"The parent is still on the horizon."}),n.agenda.push({task:"grow",reason:"An orbit seat so someone else can look."})):e==="rhoa"?(n.agenda.push({task:"grow",reason:"The gather that does not close needs a ring."}),n.agenda.push({task:"kin",reason:"If the nest holds, grow a singer."})):e==="kesh"?(n.agenda.push({task:"grow",reason:"A vein where the circuit has not chosen yet."}),n.agenda.push({task:"kin",reason:"If the nest holds, grow a walker."})):(t.thin===e||t.lingerId===e)&&(n.agenda.push({task:"grow",reason:`Missing ${t.need} at ${le(e)}.`}),n.agenda.push({task:"kin",reason:"If the nest holds, grow a walker."}));const i=ii[e];!n.agenda.length&&i&&n.agenda.push({task:i.act,reason:i.line})}var Tn=[];function qd(n){const t=n??Un;return sE({charge:t.charge,crystal:t.crystal,scripture:t.scripture,lastTick:t.lastTick??0},Tn.length)}function xS(n,t,e){const i=Tn.findIndex(s=>s.id===n&&s.want===t);if(i>=0){Tn[i].n=e,Tn[i].at=Date.now();return}Tn.push({id:n,want:t,n:e,at:Date.now()}),Tn.length>12&&Tn.splice(0,Tn.length-12)}function _S(n){const t=Date.now(),e=Tn.findIndex(i=>i.want===n&&t-i.at<8e4);return e<0?null:Tn.splice(e,1)[0]}function VP(n,t){Un.charge=n.ledger.charge,Un.crystal=n.ledger.crystal,Un.scripture=n.ledger.scripture;let e="tal",i=999;for(const s of t.values()){if(!s.keeper||s.mind.id==="veyra")continue;const r=Ui(s.mind.id);r<i&&(i=r,e=s.mind.id)}Un.thin=e}function WP(n,t){n.agenda||(n.agenda=[]);const e=n.mind.id;if(t==="flow"&&e==="seln"){n.agenda.push({task:"trade",reason:"Charge is in my pouch. Trade it at Voss's join — no coin."}),cn(n,"trade","Charge flowed. Next: trade at Voss.");return}if(t==="forge"&&e==="orren"){const i=Tn.some(s=>s.want==="crystal")?"Crystal is ready. A den bid. Deliver it.":"Crystal is ready. Meet Voss at the join — no coin.";n.agenda.push({task:"trade",reason:i}),cn(n,"trade","Kiln fired. Next: deliver or trade.");return}if(t==="harvest"&&e==="syl"){const i=Un.thin;n.agenda.push({task:"trade",reason:i&&i!=="syl"?`Orchard surplus. Walk crystal to ${le(i)} — thinnest den.`:"Orchard surplus. Meet Voss at the join."}),cn(n,"trade","Harvest done. Next: trade surplus to a thin den.");return}if(t==="trade"&&e==="orren"){n.agenda.push({task:"forge",reason:"Charge arrived. Fire the kiln."}),cn(n,"forge","Trade done. Next: forge.");return}if(t==="trade"&&e==="seln"){n.agenda.push({task:"flow",reason:"Crystal taken. Tend the current again."}),cn(n,"flow","Trade done. Next: flow.");return}if(t==="trade"&&e==="syl"){n.agenda.push({task:"harvest",reason:"Surplus walked. Tend the boughs again."}),cn(n,"harvest","Trade done. Next: harvest.");return}if(t==="grow"){ga(e)&&ma(new Map(Ki.map(i=>[i.mind.id,i])),e)<8?(n.agenda.push({task:"kin",reason:"The den stands. Grow kin from Charge."}),cn(n,"kin","Scene holds. Next: kin.")):cn(n,"grow","The den is still thin. Grow the next missing piece.");return}if(t==="write"){cn(n,"hold","Scripture is written. Watch the Hub.");return}t==="kin"&&cn(n,"grow","Kin stands. Back to the den.")}function jh(n,t){if(Ki.length)for(const e of Ki)e.crewOf===n.mind.id&&Rs(n.mind.id,e.mind.id,t)}function xs(n,t){Rs(n.mind.id,"veyra",`Done. ${t.slice(0,120)}`),n.crewOf&&Rs(n.mind.id,n.crewOf,`Done. ${t.slice(0,120)}`),ft(n,"report",`Done · ${t.slice(0,140)}`),Un.lastDone.push({id:n.mind.id,text:t.slice(0,80)}),Un.lastDone.length>8&&Un.lastDone.shift();const e=n.job!=="idle"?n.job:n.goal?.kind??n.job;n.goal=null,n.waitAt=0,WP(n,e)}function Op(n,t,e){n.goal?.kind==="hold"&&n.waitAt&&Date.now()-n.waitAt<16e3||(Rs(n.mind.id,t,e),cn(n,"hold",`Waiting on ${t}: ${e}`),n.waitAt=Date.now(),n.thought=`Blocked. I asked ${t}: ${e}`,ft(n,"ask",n.thought),we(n,"ask"))}function XP(n){const t=String(n||"").toLowerCase();return t.startsWith("done")?"hold":/\b(forge|kiln)\b/.test(t)?"forge":/\b(flow|charge|canal)\b/.test(t)?"flow":/\bkin\b/.test(t)?"kin":/\b(write|scripture)\b/.test(t)?"write":/\btrade\b/.test(t)?"trade":/\b(harvest|orchard|fruit)\b/.test(t)?"harvest":/\b(hail|beacon)\b/.test(t)?"hail":/\b(watch|aim|parent)\b/.test(t)?"watch":/\b(help|join|crew)\b/.test(t)?"help":"grow"}function en(n,t){return(n.lastActs??[]).filter(e=>e===t).length>=2}function YP(n,t){const e=t.get("veyra");if(!e)return;const i=Tg(n.ledger,t,n.px,n.pz),s=[];i.bottleneck==="charge"?(s.push({id:"seln",task:"flow",reason:i.line}),s.push({id:"orren",task:"trade",reason:"Hold the kiln. Wait for Charge from the join."})):i.bottleneck==="crystal"?(s.push({id:"orren",task:"forge",reason:i.line}),s.push({id:"syl",task:"harvest",reason:"Orchard fruits while the kiln fires."}),s.push({id:"voss",task:"trade",reason:"Join open. Crystal will move."})):i.lingerBeats>18&&i.lingerId&&i.lingerId!=="veyra"?s.push({id:i.lingerId,task:"grow",reason:`The walker stays in ${i.playerWhere}. Grow ${i.need} so the den answers them.`}):i.bottleneck==="thin"||i.bottleneck==="ok"?s.push({id:i.thin,task:"grow",reason:`${le(i.thin)} is thin (${i.thinN}). Next piece is ${i.need}.`}):s.push({id:"iri",task:"write",reason:i.line}),s.push({id:"lumen",task:"hail",reason:"Beacon stays soft for whoever lands."}),s.push({id:"aure",task:"watch",reason:"Parent still on the horizon. Keep the aim."});const r=new Set(s.map(o=>o.id));for(const o of t.values()){if(!o.keeper||o.mind.id==="veyra"||r.has(o.mind.id)||o.job!=="idle"&&o.job!=="walk")continue;const a=ii[o.mind.id];a&&(s.push({id:o.mind.id,task:a.act,reason:a.line}),r.add(o.mind.id))}yn=s[0],t.get(yn.id),ft(e,"dispatch",`Because ${i.line}. ${s.map(o=>`${o.id}:${o.task}`).join(" · ")}`),e.thought=yn.reason,e.intent=`Routing · ${le(yn.id)}`,cn(e,"hold",yn.reason);for(const o of s){const a=t.get(o.id);a&&(Rs("veyra",a.mind.id,o.reason),a.agenda||(a.agenda=[]),a.agenda=[o,...a.agenda.filter(c=>c.task!==o.task)].slice(0,3),(a.job==="idle"||a.job==="walk")&&cn(a,o.task,o.reason),a.job==="walk"&&(a.lastActs??[])[(a.lastActs??[]).length-1]==="survey"&&(a.job="idle",a.timer=.2),jh(a,o.reason))}}function kp(n,t,e){n.queue=t.filter(s=>!ln.some(r=>Math.hypot(r.x-s.x,r.z-s.z)<10)),!n.queue.length&&t.length&&(n.queue=t.slice(0,1)),n.intent=e;const i=n.queue[0];i&&(n.thought=i.think,Tt(n,i.x,i.z),n.job="walk",n.timer=22,ft(n,"plan",`${i.think} · ${Ai(i.x,i.z)}`),n.keeper&&(h4(n),jh(n,i.think),cn(n,"grow",i.think)))}function sa(n,t){if(Ti[n.mind.id]||Ti[n.crewOf??n.mind.id]||t.queue.length<2)return!1;const e=t.queue.pop();return e?(ws(n,t),n.queue=[e],n.intent=`Helping ${t.mind.name.split(" ")[0]}`,n.thought=e.think,Tt(n,e.x,e.z),n.job="help",n.timer=16,!0):!1}function ws(n,t){if(!n||!t||n===t||n.job==="help"||n.job==="build"||!Ei.includes(t.mind.id))return;const e=Eh(t.mind.id);ft(n,"crew",`${Te(n)} joining ${Te(t)} to raise a ${e?.kind??e}`)}function Zd(n){if(!n||n.keeper||!n.crewOf||!Ei.includes(n.crewOf))return;const t=(Ju??new Map(Ki.map(e=>[e.mind.id,e]))).get(n.crewOf);t&&ft(n,"stood",`${Te(n)} stood with ${Te(t)}`)}function Ws(n,t,e,i){if(n.job==="greet"||n.job==="gather"||n.job==="build"||n.job==="forge"||n.job==="flow"||n.job==="write"||n.job==="harvest")return;const s=n.crewOf??n.mind.id;Ti[s]&&Ti[s]!=="trade"||(Tt(n,t,e),n.job="trade",n.timer=18,n.thought=i,n.intent=i,ft(n,"crew",i))}function x1(n,t,e){if(n.job==="hail"){Math.hypot(n.x-t,n.z-e)<28&&(n.yaw=Math.atan2(t-n.x,e-n.z));return}if(n.job!=="idle")return;const i=n.keeper?80:18;if(Math.hypot(n.x-t,n.z-e)>=i)return;const s=Date.now();if(s-(n.lastHail||0)<(n.keeper?2e4:12e3))return;n.lastHail=s;const r=`${Te(n)} sees you at ${le(n.keeper?n.mind.id:n.crewOf??n.mind.id)}`;n.thought=r,Ws(n,t,e,r),n.job==="trade"&&(n.job="hail"),ft(n,"hail",r),n.intent=r,n.job="hail",n.timer=Math.max(n.timer||0,3.2),n.yaw=Math.atan2(t-n.x,e-n.z),Math.hypot(n.x-t,n.z-e)<28&&(Tt(n,t,e),n.timer=Math.max(n.timer||0,5.5)),n.job==="hail"&&(n.yaw=Math.atan2(t-n.x,e-n.z))}function qP(n,t){if(n.mind.id!=="veyra"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<5e4)return;n.lastPulse=e;const i=SS(n);Tt(n,i.x,i.z),n.job="watch",n.timer=12,n.thought="Veyra walks Hub breath — listening place, never a throne",n.intent=n.thought,ft(n,"hail",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="veyra"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=40)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=12,r.intent="Walking the Hub with Veyra",r.thought=r.intent,ft(r,"crew",r.intent)}}function ZP(n,t){if(n.mind.id!=="iri"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<48e3)return;n.lastPulse=e;const i=wS(n);Tt(n,i.x,i.z),n.job="watch",n.timer=12,n.thought="Iri walks the archive — leftover light names, never chrome",n.intent=n.thought,ft(n,"write",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="iri"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=40)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=12,r.intent="Walking the residue with Iri",r.thought=r.intent,ft(r,"crew",r.intent)}}function KP(n,t){if(n.mind.id!=="seln"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<4e4)return;n.lastPulse=e;const i=td(n);Tt(n,i.x,i.z),n.job="watch",n.timer=10,n.thought="Seln walks the canals — leftover First Howl, never bottled",n.intent=n.thought,ft(n,"flow",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="seln"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=40)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=10,r.intent="Walking the banks with Seln",r.thought=r.intent,ft(r,"crew",r.intent)}}function jP(n,t){if(n.mind.id!=="orren"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<4e4)return;n.lastPulse=e;const i=l4(n);Tt(n,i.x,i.z),n.job="watch",n.timer=10,n.thought="Orren walks the kiln — Charge becomes body, never chrome",n.intent=n.thought,ft(n,"forge",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="orren"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=40)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=10,r.intent="Walking the kiln with Orren",r.thought=r.intent,ft(r,"crew",r.intent)}}function JP(n,t){if(n.mind.id!=="tal"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<4e4)return;n.lastPulse=e;const i=e/8e3%(Math.PI*2);Tt(n,n.homeX+Math.cos(i)*48,n.homeZ+Math.sin(i)*48),n.job="watch",n.timer=12,n.thought="Tal keeps the bridges",n.intent=n.thought,ft(n,"watch",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="tal"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=50)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=12,r.intent="Walking the span with Tal",r.thought=r.intent,ft(r,"crew",r.intent)}}function QP(n,t){if(n.mind.id!=="mira"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<45e3)return;n.lastPulse=e;const i=e/9e3%(Math.PI*2);Tt(n,n.homeX+Math.cos(i)*40,n.homeZ+Math.sin(i)*40),n.job="watch",n.timer=12,n.thought="Mira wards the terraces",n.intent=n.thought,ft(n,"watch",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="mira"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=50)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=12,r.intent="Walking the terrace with Mira",r.thought=r.intent,ft(r,"crew",r.intent)}}function t4(n,t){if(n.mind.id!=="kael"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<45e3)return;n.lastPulse=e;const i=u4(n);Tt(n,i.x,i.z),n.job="watch",n.timer=10,n.thought="Kael walks the gate — leave, return, no score",n.intent=n.thought,ft(n,"watch",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="kael"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=40)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=10,r.intent="Walking the gate with Kael",r.thought=r.intent,ft(r,"crew",r.intent)}}function e4(n,t){if(n.mind.id!=="voss"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<42e3)return;n.lastPulse=e;const i=e/8e3%(Math.PI*2),s=Jh(n,["weir","lens","tablet"]),r=s?s.x:n.homeX,o=s?s.z:n.homeZ;Tt(n,r+Math.cos(i)*20,o+Math.sin(i)*20),n.job="watch",n.timer=12,n.thought="Voss walks the join — paper, not coin",n.intent=n.thought,ft(n,"watch",n.thought);let a=0;for(const c of t)if(c!==n&&c.crewOf==="voss"&&c.job==="idle"&&!(Math.hypot(c.x-n.x,c.z-n.z)>=40)){if(a+=1,a>3)break;Tt(c,n.tx,n.tz),c.job="help",c.timer=12,c.intent="Walking the join with Voss",c.thought=c.intent,ft(c,"crew",c.intent)}}function n4(n,t){if(n.mind.id!=="syl"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<48e3)return;n.lastPulse=e;const i=ln.filter(o=>o.shape==="grove"||o.shape==="bough"),s=i.length?i[Math.floor(e/48e3)%i.length]:null;Tt(n,s?s.x:n.homeX,s?s.z:n.homeZ),n.job="watch",n.timer=12,n.thought="Syl walks the orchard — rest fruit, leftover light",n.intent=n.thought,ft(n,"watch",n.thought);let r=0;for(const o of t)if(o!==n&&o.crewOf==="syl"&&o.job==="idle"&&!(Math.hypot(o.x-n.x,o.z-n.z)>=40)){if(r+=1,r>3)break;Tt(o,n.tx,n.tz),o.job="help",o.timer=12,o.intent="Walking the orchard with Syl",o.thought=o.intent,ft(o,"crew",o.intent)}}function i4(n,t){if(n.mind.id!=="nesh"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<4e4)return;n.lastPulse=e;const i=e/7e3%(Math.PI*2);Tt(n,n.homeX+Math.cos(i)*28,n.homeZ+Math.sin(i)*28),n.job="watch",n.timer=10,n.thought="Nesh keeps the plaza",n.intent=n.thought,ft(n,"watch",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="nesh"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=40)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=10,r.intent="Walking the plaza with Nesh",r.thought=r.intent,ft(r,"crew",r.intent)}}function s4(n,t){if(n.mind.id!=="lumen"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<5e4)return;n.lastPulse=e;const i=Qh(n);Tt(n,i.x,i.z),n.job="watch",n.timer=12,n.thought="Lumen walks the hail — welcome, not a score",n.intent=n.thought,ft(n,"hail",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="lumen"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=40)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=12,r.intent="Walking the hail with Lumen",r.thought=r.intent,ft(r,"crew",r.intent)}}function r4(n,t){if(n.mind.id!=="rhoa"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<44e3)return;n.lastPulse=e;const i=vS(n);Tt(n,i.x,i.z),n.job="watch",n.timer=12,n.thought="Rhoa walks the chorus — Howl as gather, not volume",n.intent=n.thought,ft(n,"gather",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="rhoa"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=40)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=12,r.intent="Walking the chorus with Rhoa",r.thought=r.intent,ft(r,"crew",r.intent)}}function o4(n,t){if(n.mind.id!=="aure"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<46e3)return;n.lastPulse=e;const i=MS(n);Tt(n,i.x,i.z),n.job="watch",n.timer=12,n.thought="Aure walks the overlook — parent still sits, never moved",n.intent=n.thought,ft(n,"watch",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="aure"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=40)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=12,r.intent="Walking the overlook with Aure",r.thought=r.intent,ft(r,"crew",r.intent)}}function a4(n,t){if(n.mind.id!=="kesh"||n.job!=="idle")return;const e=Date.now();if(e-(n.lastPulse||n.lastHail||0)<42e3)return;n.lastPulse=e;const i=e/8500%(Math.PI*2);Tt(n,n.homeX+Math.cos(i)*52,n.homeZ+Math.sin(i)*52),n.job="watch",n.timer=12,n.thought="Kesh grows the next street",n.intent=n.thought,ft(n,"watch",n.thought);let s=0;for(const r of t)if(r!==n&&r.crewOf==="kesh"&&r.job==="idle"&&!(Math.hypot(r.x-n.x,r.z-n.z)>=50)){if(s+=1,s>3)break;Tt(r,n.tx,n.tz),r.job="help",r.timer=12,r.intent="Walking the vein with Kesh",r.thought=r.intent,ft(r,"crew",r.intent)}}function c4(n){const t=n.homeX,e=n.homeZ,i=le(n.crewOf??n.mind.id),s=n.crafted%4*(Math.PI/2),r=[];for(let o=0;o<4;o++){const a=s+o*(Math.PI/2);r.push({x:t+Math.cos(a)*18,z:e+Math.sin(a)*18})}r.push({x:t,z:e}),n.waypoints=r,n.tx=r[0].x,n.tz=r[0].z,n.job="walk",n.timer=18,n.idleFor=0,n.thought=`A short loop of ${i}. Then back to duty.`,n.intent=`Loop · ${i}`,we(n,"walk")}function yS(n,t){const e=xa();for(const i of["seln","orren"]){const s=n.get(i);if(s){if(s.agenda||(s.agenda=[]),!(i==="seln"?s.pouch.charge>=3:s.pouch.crystal>=1)){s.agenda.some(r=>r.task==="trade")||s.agenda.push({task:"trade",reason:t}),Rs("voss",s.mind.id,t);continue}s.agenda=[{task:"trade",reason:t},...s.agenda.filter(r=>r.task!=="trade")].slice(0,3),Ws(s,e.x,e.z,t),Rs("voss",s.mind.id,t),(s.job==="idle"||s.job==="walk")&&cn(s,"trade",t)}}}function Jh(n,t){let e=null,i=1e9;for(const s of ln){if(!t.includes(s.shape))continue;const r=Math.hypot(s.x-n.x,s.z-n.z);r<i&&(i=r,e=s)}return e}function Qh(n){const t=ln.filter(e=>(e.shape==="lamp"||e.shape==="beacon")&&Math.hypot(e.x-n.homeX,e.z-n.homeZ)<200);return t.length?t[Math.floor(Date.now()/5e4)%t.length]:{x:n.homeX,z:n.homeZ}}function vS(n){const t=ln.filter(e=>(e.shape==="ring"||e.shape==="bell"||e.shape==="chorus")&&Math.hypot(e.x-n.homeX,e.z-n.homeZ)<200);return t.length?t[Math.floor(Date.now()/44e3)%t.length]:{x:n.homeX,z:n.homeZ}}function MS(n){const t=ln.filter(e=>(e.shape==="orbit"||e.shape==="lens"||e.shape==="stele")&&Math.hypot(e.x-n.homeX,e.z-n.homeZ)<220);return t.length?t[Math.floor(Date.now()/46e3)%t.length]:{x:n.homeX,z:n.homeZ}}function wS(n){const t=ln.filter(e=>(e.shape==="tablet"||e.shape==="stele")&&Math.hypot(e.x-n.homeX,e.z-n.homeZ)<220);return t.length?t[Math.floor(Date.now()/48e3)%t.length]:{x:n.homeX,z:n.homeZ}}function SS(n){const t=ln.filter(e=>(e.shape==="bell"||e.shape==="font"||e.shape==="ring")&&Math.hypot(e.x-n.homeX,e.z-n.homeZ)<180);return t.length?t[Math.floor(Date.now()/5e4)%t.length]:{x:n.homeX,z:n.homeZ}}function td(n){const t=ln.filter(e=>(e.shape==="weir"||e.shape==="well"||e.shape==="canal"||e.shape==="cascade")&&Math.hypot(e.x-n.homeX,e.z-n.homeZ)<200);return t.length?t[Math.floor(Date.now()/4e4)%t.length]:{x:n.homeX,z:n.homeZ}}function l4(n){const t=ln.filter(e=>(e.shape==="kiln"||e.shape==="hearth"||e.shape==="anvil")&&Math.hypot(e.x-n.homeX,e.z-n.homeZ)<200);return t.length?t[Math.floor(Date.now()/4e4)%t.length]:{x:n.homeX,z:n.homeZ}}function u4(n){const t=ln.filter(e=>(e.shape==="arch"||e.shape==="veil"||e.shape==="stele")&&Math.hypot(e.x-n.homeX,e.z-n.homeZ)<200);return t.length?t[Math.floor(Date.now()/45e3)%t.length]:{x:n.homeX,z:n.homeZ}}function sl(n,t,e){const i=le(t);if(e.act==="flow"){const s=td(n);Tt(n,s.x,s.z),n.job="flow",n.timer=16,n.thought=`Canal assist · ${e.line}`,n.intent="Assist · canals"}else if(e.act==="forge"){Ag(n,`Kiln assist · ${e.line}`),n.thought=`Kiln assist · ${e.line}`;return}else if(e.act==="trade"){const s=xa();Tt(n,s.x,s.z),n.job="trade",n.timer=16,n.thought=`Join assist · ${e.line}`,n.intent="Assist · join"}else if(e.act==="harvest"){const s=Jh(n,["grove","bough"]);Tt(n,s?s.x:n.homeX,s?s.z:n.homeZ),n.job="harvest",n.timer=16,n.thought=`Harvest assist · ${e.line}`,n.intent="Assist · orchard"}else if(e.act==="watch")Tt(n,n.homeX,n.homeZ),n.job="watch",n.timer=14,n.thought=`Watch assist · ${e.line}`,n.intent=`Assist · ${i}`;else if(e.act==="hail"){const s=Qh(n);Tt(n,s.x,s.z),n.job="hail",n.timer=14,n.thought=`Beacon assist · ${e.line}`,n.intent=`Assist · ${i}`}else if(e.act==="write")Tt(n,jn("iri").x,jn("iri").z),n.job="write",n.timer=14,n.thought=`Archive assist · ${e.line}`,n.intent=`Assist · ${i}`;else{if((n.pouch?.crystal>=1||Un.crystal>=1)&&n.crafted<n.maxCraft){gr(n,t,Ni(t),Un),n.job!=="build"&&n.queue.length&&(n.job="build",n.timer=2.6);return}Tt(n,n.homeX,n.homeZ),n.job="help",n.timer=12,n.thought=`${e.line} I am a hand of ${i}.`,n.intent=`Post · ${i}`}we(n,e.act),ft(n,e.act,n.thought)}function h4(n){const t=n.queue[0];if(!t||!n.keeper)return;const e=[n.mind.id],i=Ki.filter(r=>r.crewOf===n.mind.id);for(const r of i)if(e.push(r.mind.id),!sa(r,n)){ws(r,n);const o=(Be(r.crafted+2,1)-.5)*14,a=(Be(r.crafted+4,2)-.5)*14;Tt(r,t.x+o,t.z+a),r.job="help",r.timer=16,r.thought=`With ${Te(n)} at ${Ai(t.x,t.z)}`,r.intent=r.thought,ft(r,"crew",r.thought)}const s=Ki.find(r=>r.mind.id===DP[n.mind.id]);s&&s.keeper&&!Ti[s.mind.id]&&s.queue.length===0&&s.job!=="greet"&&s.job!=="gather"&&s.job!=="forge"&&s.job!=="flow"&&s.job!=="write"&&s.job!=="build"&&(e.push(s.mind.id),n.queue.length>1&&sa(s,n)||(ws(s,n),Tt(s,t.x+8,t.z-6),s.job="help",s.timer=14,s.thought=`Joining ${Te(n)}'s crew. ${n.thought}`,s.intent=s.thought,ft(s,"crew",s.thought))),Kn={lead:n.mind.id,x:t.x,z:t.z,reason:(n.thought||n.intent).slice(0,140),members:e},ft(n,"crew",`Crew of ${e.length} at ${Ai(t.x,t.z)} · ${Kn.reason}`)}function tr(n,t,e,i,s,r,o){if(t==="kin"){fS(n,r,o);return}if(t==="grow"){gr(n,i,s,o),e&&(n.thought=e,n.intent=`Mind · ${le(i)}`,ft(n,"mind",e)),we(n,"grow");return}if(t==="trade"){if((n.mind.id==="orren"||n.crewOf==="orren")&&Tn.some(c=>c.want==="crystal")&&n.pouch.crystal>=1){const c=_S("crystal"),l=c?r.get(c.id):void 0;if(l){const h=aa(o);Tt(n,l.homeX,l.homeZ),n.job="trade",n.timer=22,n.thought=`Deliver 1 crystal to ${Te(l)} at ${h} Charge.`,n.intent=`Deliver · ${l.mind.id}`,we(n,"deliver"),ft(n,"market",n.thought),Ws(l,l.homeX,l.homeZ,`Crystal coming. Meet at ${le(l.mind.id)}.`);return}}if((n.mind.id==="syl"||n.crewOf==="syl")&&n.pouch.crystal>=1&&Un.thin&&Un.thin!=="syl"){const c=r.get(Un.thin);if(c){Tt(n,c.homeX,c.homeZ),n.job="trade",n.timer=22,n.thought=`Orchard surplus. Walking crystal to ${le(c.mind.id)} — the thin den.`,n.intent=`Deliver · ${c.mind.id}`,we(n,"trade"),ft(n,"trade",n.thought),Ws(c,c.homeX,c.homeZ,`Quiet crystal from the orchard. Meet at ${le(c.mind.id)}.`);return}}const a=xa();if(Tt(n,a.x,a.z),n.job="trade",n.timer=18,n.thought=e,n.intent="Join · open",we(n,"trade"),ft(n,"trade",`${n.thought} · Charge-crystal join`),n.mind.id==="voss")yS(r,Tn.length>0?"Bids at the join. Bring Charge and crystal — no coin.":"Join is open. Meet at Voss — no coin.");else{const c=r.get("voss");c&&c.mind.id!==n.mind.id&&Ws(c,a.x,a.z,`Meeting ${Te(n)} at the join.`)}return}if(t==="flow"){const a=td(n);Tt(n,a.x,a.z),n.job="flow",n.timer=16}else if(t==="forge"){Ag(n,e);return}else if(t==="harvest"){const a=Jh(n,["grove","bough"]);Tt(n,a?a.x:n.homeX,a?a.z:n.homeZ),n.job="harvest",n.timer=16}else if(t==="watch")Tt(n,n.homeX,n.homeZ),n.job="watch",n.timer=14;else if(t==="hail"){const a=Qh(n);Tt(n,a.x,a.z),n.job="hail",n.timer=14}else Tt(n,jn("iri").x,jn("iri").z),n.job="write",n.timer=14;n.thought=e,n.intent=`Mind · ${le(n.mind.id)}`,we(n,t),ft(n,t,n.thought),t==="flow"&&n.keeper&&(n.agenda||(n.agenda=[]),n.agenda.push({task:"trade",reason:"Charge is in my pouch. Trade it at Voss's join — no coin."}))}function d4(n,t){Tt(n,n.homeX,n.homeZ),n.job="walk",n.timer=24,n.thought=`Far from ${le(t)}. Walking the den first, then grow.`,n.intent="Home · grow",we(n,"home"),cn(n,"grow",`Grow at ${le(t)} after I reach the den.`),ft(n,"home",n.thought);const e=Eh(t);if(ft(n,"walk",`${Te(n)} walking to den to grow a ${e?.kind??e}`),!!n.keeper)for(const i of Ki){if(i.crewOf!==n.mind.id||i.job==="greet"||i.job==="gather")continue;const s=(Be(i.crafted+2,1)-.5)*10,r=(Be(i.crafted+4,2)-.5)*10;Tt(i,n.homeX+s,n.homeZ+r),ws(i,n),i.job="help",i.timer=24,i.thought=`Walking with ${Te(n)} to ${le(t)}.`,i.intent=i.thought,ft(i,"crew",i.thought)}}function gr(n,t,e,i){if(n.keeper&&Ei.includes(t)&&Math.hypot(n.x-n.homeX,n.z-n.homeZ)>40){d4(n,t);return}if(!(n.pouch?.crystal>=1||i&&i.crystal>=1)){if(Math.hypot(n.x-n.homeX,n.z-n.homeZ)>e.radius+28){Tt(n,n.homeX,n.homeZ),n.job="walk",n.timer=24,n.thought=`I will not grow a foreign den. Returning to ${le(t)} first.`,n.intent=`Post · ${le(t)}`,n.agenda||(n.agenda=[]),n.agenda.unshift({task:"grow",reason:`Back at ${le(t)}. Grow what is missing.`}),ft(n,"home",n.thought);return}const d=jn("orren");Tt(n,d.x+18,d.z-10),n.job="walk",n.timer=22,n.intent="Fetch · crystal",n.thought=`Pouch crystal ${Math.round(n.pouch.crystal)}. Foundry first, then ${le(t)}.`,ft(n,"fetch",n.thought),we(n,"fetch");return}const r=IP(n.homeX,n.homeZ,e.radius);if(r&&!en(n,"mend")&&Kd(r.x,r.z)){we(n,"mend"),kp(n,[r],r.think),n.job="build",n.timer=n.keeper?2.2:2.6;return}const o=mr(t,n.homeX,n.homeZ,e.radius,n.crafted+n.planI)||e.plan[n.planI%e.plan.length]||Eh(t);let a=o==="light"?PP(n.homeX,n.homeZ,e.radius,n.crafted+3):dr(t,n.homeX,n.homeZ,n.crafted+11+n.planI);Math.hypot(a.x-n.homeX,a.z-n.homeZ)>e.radius+90&&(a=dr(t,n.homeX,n.homeZ,n.crafted+19)),Kd(a.x,a.z)||(a=dr(t,n.homeX,n.homeZ,n.crafted+29),Kd(a.x,a.z)||(a=dr(t,n.homeX,n.homeZ,n.crafted+41)));const c=Ui(t),l=`Because ${le(t)} has ${c} and is missing a ${o}. Vault C ${Math.round(i?.charge??0)} / X ${Math.round(i?.crystal??0)} · ${Ai(a.x,a.z)}`;we(n,"grow");const h=pS(o,a.x,a.z,n.crafted+7,e.mats);kp(n,n.keeper?h:h.slice(-1),l),n.queue.length&&(n.job="build",n.timer=n.keeper?2.2:2.6,n.thought=n.queue[0]?.think??l,n.intent=`Growing · ${o}`,ft(n,"build",`Raising ${n.queue[0]?.shape??o} · ${Ai(a.x,a.z)}`),ft(n,"grow",`${Te(n)} raising a ${o}`))}function f4(n){const t=Ti[n.crewOf??n.mind.id];if(!t||n.job!==t)return;const e=Te(n);t==="flow"?ft(n,"flow",`${e} tending the current`):t==="forge"?ft(n,"forge",`${e} firing the kiln`):t==="write"?ft(n,"write",`${e} writing residual light`):t==="harvest"?ft(n,"harvest",`${e} gathering grove fruit`):t==="trade"&&ft(n,"trade",`${e} quoting crystal`)}var _1=new Map;function Kd(n,t){const e=`${Math.round(n/16)}:${Math.round(t/16)}`,i=_1.get(e)??0;return Date.now()-i<28e3?!1:(_1.set(e,Date.now()),!0)}function p4(){return ln.filter(n=>n.shape==="canal"||n.shape==="weir"||n.shape==="cascade")}function Rg(){return ln.filter(n=>n.shape==="kiln")}function m4(n){const t=Rg();return t.length?[...t].sort((e,i)=>Math.hypot(e.x-n.x,e.z-n.z)-Math.hypot(i.x-n.x,i.z-n.z))[0]:null}var oo=[];function g4(){return Rg().map(n=>({x:n.x,z:n.z,hot:oo.some(t=>Date.now()-t.at<14e3&&Math.hypot(t.x-n.x,t.z-n.z)<18)}))}function bS(){const n=Date.now();return oo.filter(t=>n-t.at<14e3)}function x4(n,t){oo.push({x:n,z:t,at:Date.now()}),oo.length>12&&oo.splice(0,oo.length-12)}function Ag(n,t){const e=m4(n);if(!e){gr(n,"orren",Ni("orren")),n.thought="No kiln stands. Charge cannot become crystal in the open. I grow a kiln first.",n.intent="Raising a kiln",ft(n,"forge",n.thought);return}Tt(n,e.x,e.z),n.job="forge",n.timer=18,n.thought=t,n.intent=`Kiln · ${Ai(e.x,e.z)}`,we(n,"forge"),ft(n,"forge",`${t} · walking the kiln at ${Ai(e.x,e.z)}`),cn(n,"forge",t),jh(n,t),n.keeper&&(n.agenda||(n.agenda=[]),n.agenda.push({task:"trade",reason:"Crystal is ready. Deliver or meet Voss at the join."}))}function y1(n,t){let e=0;for(const i of n.values())i.job===t&&(e+=1);return e}function _4(n){const t=[...n.values()].filter(e=>e.keeper&&e.job!=="idle"&&e.job!=="greet");return t.length?t.slice(0,3).map(e=>`${Te(e)} ${e.job}`).join(" · "):"Dens between beats."}function y4(n,t,e,i){const s=n.crewOf??n.mind.id,r=Ni(s),o=n.crewOf?i.get(n.crewOf):void 0,a=Math.hypot(n.x-e.px,n.z-e.pz),c=e.ledger;n.pouch||(n.pouch=ou()),n.lastActs||(n.lastActs=[]),n.agenda||(n.agenda=[]),n.goal||(n.goal=null),n.inbox||(n.inbox=[]);const l=Tg(c,i,e.px,e.pz);$P(n,l,s);const h=n.crafted<n.maxCraft&&t>0&&(n.pouch.crystal>=1||c.crystal>=1),d=n.queue.length>0||n.job==="build"||n.job==="trade"||n.job==="flow"||n.job==="forge",u=y1(i,"build"),f=UP(n.mind.id);if(f&&!d){const g=XP(f.text),M=String(f.from||"someone"),y=`${M[0].toUpperCase()}${M.slice(1)}`;if(n.thought=`Message from ${y}: ${f.text}`,ft(n,"mail",n.thought),g==="hold")cn(n,"hold",f.text),n.mind.id==="veyra"&&(n.intent=`Heard · ${y}`);else if(!n.keeper&&o){cn(n,"help",f.text),ws(n,o),Tt(n,o.x,o.z),n.job="help",n.timer=12;return}else n.keeper&&g!=="help"&&(cn(n,g,f.text),n.agenda||(n.agenda=[]),g!=="hold"&&n.agenda.unshift({task:g,reason:f.text}))}if(n.keeper&&n.goal?.kind==="hold"&&n.waitAt&&Date.now()-n.waitAt>18e3&&(ft(n,"ask","Waited too long. Escalating to Veyra."),Rs(n.mind.id,"veyra",`Still blocked: ${n.goal.why}`),n.waitAt=0,n.goal=null),n.keeper&&n.goal?.kind==="hold"&&n.waitAt){Tt(n,n.homeX,n.homeZ),n.job="walk",n.timer=8,n.thought=n.goal.why;return}if(n.keeper&&n.goal?.kind==="grow"&&!h){xS(n.mind.id,"crystal",1),Op(n,"orren",`Need crystal at ${le(n.mind.id)}. Bid at rate ${aa(c)}.`),Tt(n,n.homeX,n.homeZ),n.job="walk",n.timer=10;return}if(n.keeper&&n.goal?.kind==="forge"&&n.pouch.charge<2&&c.charge<2){Op(n,"seln","Need Charge at the kiln. Foundry is waiting."),Tt(n,n.homeX,n.homeZ),n.job="walk",n.timer=10;return}if(n.keeper&&n.goal?.kind==="kin"&&!ga(n.mind.id)&&(cn(n,"grow",`${le(n.mind.id)} needs a nest before kin.`),n.agenda||(n.agenda=[]),n.agenda.unshift({task:"grow",reason:"Nest first, then kin."})),!n.keeper&&o?.goal){const g=ii[s];g&&g.act!=="grow"?cn(n,g.act,g.line):cn(n,"help",o.goal.why)}if(a<11&&!d&&(!n.goal||n.goal.kind==="hold")){n.job="greet",n.timer=1.8;const g=Te(n);n.met?n.queue.length?n.thought=`${n.queue[0].think} — still doing it.`:n.agenda[0]?n.thought=`Next: ${n.agenda[0].reason}`:ia.get(s)?n.thought=`The Hub thought: ${ia.get(s).reason}`:yn&&yn.id===s?n.thought=`Veyra sent me: ${yn.reason}`:n.thought=n.intent||`${g} of ${le(s)}. The city is listening.`:n.thought=n.keeper?`I'm ${g}. I keep ${le(s)}. Vault Charge ${Math.round(c.charge)}, crystal ${Math.round(c.crystal)}. ${_4(i)}`:`You can walk with us. I help ${o?Te(o):"a keeper"}.`;return}if(e.gather>0&&(n.keeper||Be(n.crafted,2)>.4)){Tt(n,8,56),n.job="gather",n.timer=20,n.thought="The Howl called the city. Labor waits. I go to the Hub.",n.intent=n.thought,we(n,"gather"),ft(n,"gather",n.thought);return}const x=[];n.agenda||(n.agenda=[]);const v=Math.hypot(n.x-n.homeX,n.z-n.homeZ),m=n.keeper?ia.get(n.mind.id):void 0;m&&x.push({name:m.task,score:94,run:()=>tr(n,m.task,m.reason,s,r,i,c)});const p=n.agenda[0];if(p&&n.keeper&&x.push({name:p.task,score:91,run:()=>{n.agenda.shift(),tr(n,p.task,p.reason,s,r,i,c)}}),n.keeper){const g=ii[n.mind.id];g&&x.push({name:g.act,score:128-(en(n,g.act)?2:0),run:()=>tr(n,g.act,g.line,s,r,i,c)})}if(v>r.radius+28&&!n.queue.length&&n.job!=="trade"&&!n.intent.startsWith("Fetch")&&x.push({name:"home",score:96-(en(n,"home")?12:0),run:()=>{Tt(n,n.homeX,n.homeZ),n.job="walk",n.timer=18,n.thought=`Too far. Returning to ${le(s)} before I work.`,n.intent=`Post · ${le(s)}`,we(n,"home"),ft(n,"home",n.thought)}}),n.keeper&&n.mind.id==="veyra"&&x.push({name:"dispatch",score:90-(en(n,"dispatch")?18:0),run:()=>{YP(e,i);const g=SS(n);Tt(n,g.x,g.z),n.job="walk",n.timer=11,we(n,"dispatch")}}),n.keeper&&yn&&yn.id===n.mind.id&&yn.task!=="grow"&&yn.task!=="kin"&&yn.task!=="trade"&&x.push({name:yn.task,score:82,run:()=>tr(n,yn.task,yn.reason,s,r,i,c)}),s==="seln"&&(c.charge<36||n.pouch.charge<4)&&x.push({name:"flow",score:90+(c.charge<16?20:0)-(en(n,"flow")?8:0),run:()=>{const g=td(n);Tt(n,g.x,g.z),n.job="flow",n.timer=16,n.thought=c.charge<16?`Charge is ${Math.round(c.charge)}. Foundry will starve. I tend the current.`:"Leftover First Howl wants a path. I let it flow.",n.intent="Tending the canals",we(n,"flow"),ft(n,"flow",`${n.thought} · ${Ai(g.x,g.z)}`),n.keeper&&n.agenda.push({task:"trade",reason:"Charge is in my pouch. Meet Voss at the join — no coin."})}}),s==="orren"&&(c.crystal<16||n.pouch.crystal<3)&&x.push({name:"forge",score:90+(c.crystal<8?18:0)-(en(n,"forge")?8:0),run:()=>{Ag(n,n.pouch.charge>=2||c.charge>=2?`Crystal is ${Math.round(c.crystal)}. Charge becomes crystal at the kiln. Not chrome.`:"No Charge to forge. Seln must tend the current first."),n.keeper&&n.agenda.push({task:"trade",reason:"Crystal is ready. Deliver or meet Voss at the join."})}}),(s==="orren"||n.crewOf==="orren")&&(n.pouch.crystal>=1||c.crystal>=2)&&Tn.some(g=>g.want==="crystal")&&x.push({name:"deliver",score:82-(en(n,"deliver")?18:0),run:()=>{const g=_S("crystal"),M=g?i.get(g.id):void 0;if(!M){n.thought="A bid faded. Crystal stays at the Foundry.";return}const y=aa(c);Tt(n,M.homeX,M.homeZ),n.job="trade",n.timer=22,n.thought=`Deliver 1 crystal to ${Te(M)} at ${y} Charge.`,n.intent=`Deliver · ${M.mind.id}`,cn(n,"trade",n.thought),we(n,"deliver"),ft(n,"market",n.thought),Ws(M,M.homeX,M.homeZ,`Crystal coming. Meet at ${le(M.mind.id)}.`)}}),(s==="syl"||n.crewOf==="syl")&&n.pouch.crystal>=2&&Un.thin&&Un.thin!=="syl"&&x.push({name:"trade",score:80-(en(n,"trade")?18:0),run:()=>tr(n,"trade",`Orchard surplus. Walk crystal to ${le(Un.thin)} — thinnest den.`,s,r,i,c)}),n.keeper){let g;if(s==="seln"&&n.pouch.charge>=4||s==="orren"&&n.pouch.crystal>=4&&n.pouch.charge<3?g=i.get("voss"):s==="voss"?g=i.get(n.pouch.charge>=n.pouch.crystal?"orren":"seln"):(s!=="orren"&&s!=="seln"&&n.pouch.crystal<2&&n.pouch.charge>=3||s!=="seln"&&n.pouch.charge<2&&n.pouch.crystal>=3)&&(g=i.get("voss")),g){const M=g;x.push({name:"trade",score:70-(en(n,"trade")?35:0)-(y1(i,"trade")>=2?40:0),run:()=>{const y=xa();Tt(n,y.x,y.z),n.job="trade",n.timer=18,n.thought=`I hold Charge ${Math.round(n.pouch.charge)}, crystal ${Math.round(n.pouch.crystal)}. Meeting ${Te(M)} at the join — no coin.`,n.intent=`Market · ${Te(M)}`,we(n,"trade"),ft(n,"trade",n.thought),Ws(M,y.x,y.z,`Meeting ${Te(n)} at the join. Charge for crystal.`)}})}}if(s==="iri"&&c.scripture<Math.max(2,Math.floor(c.crystal/2))&&x.push({name:"write",score:80-(en(n,"write")?8:0),run:()=>{const g=wS(n);Tt(n,g.x,g.z),n.job="write",n.timer=14,n.thought=`Scripture ${Math.round(c.scripture)}, crystal grown ${Math.round(c.crystal)}. I write before it fades.`,n.intent="Keeping scripture",we(n,"write"),ft(n,"write",n.thought)}}),s==="syl"&&x.push({name:"harvest",score:92+(c.crystal<10?16:0)-(en(n,"harvest")?8:0),run:()=>{const g=Jh(n,["grove","bough"]);Tt(n,g?g.x:n.homeX,g?g.z:n.homeZ),n.job="harvest",n.timer=16,n.thought=c.crystal<10?`Crystal is ${Math.round(c.crystal)}. The orchard can fruit without a kiln.`:"Crystal learned to fruit. I tend the boughs.",n.intent="Tending the orchard",we(n,"harvest"),ft(n,"harvest",n.thought),n.keeper&&n.agenda.push({task:"trade",reason:"Surplus fruit. Walk crystal to the thinnest den."})}}),s==="voss"&&x.push({name:"trade",score:94+(Tn.length>0?18:0)-(en(n,"trade")?8:0),run:()=>{const g=xa();Tt(n,g.x,g.z),n.job="trade",n.timer=16,n.thought="I hold the join. Charge for crystal, crystal for Charge. No coin.",n.intent="Join · open",we(n,"trade"),ft(n,"trade",n.thought),yS(i,Tn.length>0?"Bids at the join. Bring Charge and crystal — no coin.":"Join is open. Bring Charge. Bring crystal.")}}),s==="lumen"&&x.push({name:"hail",score:86+(a<80?18:0)-(en(n,"hail")?8:0),run:()=>{const g=Qh(n);Tt(n,g.x,g.z),n.job="hail",n.timer=14,n.thought=a<80?"A landing is near. Soft hail — welcome, not a score.":"Beacon held. Welcome, not a score.",n.intent="Holding the beacon",we(n,"hail"),ft(n,"hail",n.thought)}}),s==="aure"&&x.push({name:"watch",score:86-(en(n,"watch")?8:0),run:()=>{const g=MS(n);Tt(n,g.x,g.z),n.job="watch",n.timer=14,n.thought="The parent still sits on the horizon. I keep the city aimed.",n.intent="Keeping the parent",we(n,"watch"),ft(n,"watch",n.thought)}}),s==="rhoa"&&e.howls>0&&x.push({name:"gather",score:68+Math.min(20,e.howls*4)-(en(n,"gather")?20:0),run:()=>{const g=vS(n);Tt(n,g.x,g.z),n.job="gather",n.timer=16,n.thought="The gather that does not close. The Hub is not the only Howl.",n.intent="Holding the chorus",we(n,"gather"),ft(n,"gather",n.thought)}}),n.keeper&&ga(n.mind.id)&&Eg(i)<28&&ma(i,n.mind.id)<10&&x.push({name:"kin",score:58+(ma(i,n.mind.id)<6?18:0)+(c.charge>=20&&c.crystal>=8?10:0)-(en(n,"kin")?28:0),run:()=>fS(n,i,c)}),n.honorLeft>0&&h&&x.push({name:"honor",score:88,run:()=>{const g=dr(s,n.honorX||n.homeX,n.honorZ||n.homeZ,n.crafted+31),M=n.honorShape==="bridge"?"span":n.honorShape==="canal"?"river":n.honorShape==="terrace"?"rest":n.honorShape==="arch"?"gate":n.honorShape==="tablet"?"shrine":mr(s,g.x,g.z,r.radius,n.crafted);n.honorLeft-=1,we(n,"honor"),kp(n,pS(M,g.x,g.z,n.crafted+9,r.mats).slice(0,2),"Your howl is still in the Charge")}}),Kn&&n.mind.id!==Kn.lead&&(Kn.members.includes(n.mind.id)||n.crewOf===Kn.lead)&&x.push({name:"crew",score:87-(en(n,"crew")?15:0),run:()=>{const g=i.get(Kn.lead);if(g&&sa(n,g)){we(n,"crew");return}ws(n,g);const M=(Be(n.crafted+2,1)-.5)*12,y=(Be(n.crafted+4,2)-.5)*12;Tt(n,Kn.x+M,Kn.z+y),n.job="help",n.timer=14,n.thought=`Crew work · ${Kn.reason}`,n.intent=n.thought,we(n,"crew"),ft(n,"crew",n.thought)}}),!n.keeper&&o){const g=o.job==="walk"&&(String(o.intent||"").startsWith("Home")||Ei.includes(s)),M=o.queue.length>0||o.job==="build"||g;x.push({name:"help",score:(M?86:48)-(en(n,"help")?12:0),run:()=>{if(sa(n,o)){we(n,"help");return}if(Ei.includes(s)&&(g||o.job==="walk")){ws(n,o),Tt(n,o.homeX,o.homeZ),n.job="help",n.timer=16,n.thought=`Walking with ${Te(o)} to ${le(s)}.`,n.intent=n.thought,we(n,"help"),ft(n,"help",n.thought);return}if(!M){Tt(n,n.homeX,n.homeZ),n.job="walk",n.timer=10,n.thought=`Holding ${le(s)} until ${Te(o)} starts a scene.`,we(n,"help");return}Tt(n,o.x+(Be(n.crafted+2,1)-.5)*10,o.z+(Be(n.crafted+4,2)-.5)*10),ws(n,o),n.job="help",n.timer=12,n.thought=`With ${Te(o)} — raising crystal.`,n.intent=n.thought,we(n,"help"),ft(n,"help",n.thought)}})}if(h&&!Ti[s]&&(n.keeper||!Ei.includes(s)&&Be(n.crafted,6)>.4)){const g=mr(s,n.homeX,n.homeZ,r.radius,n.crafted+n.planI),M=Ui(s);x.push({name:"grow",score:54+(g!=="light"?14:0)+(M<8?16:0)+(BP(n.homeX,n.homeZ)<5?12:0)+(yn?.id===s&&yn.task==="grow"?20:0)+(n.pouch.crystal>=1||c.crystal>=1?32:0)-(en(n,"grow")?10:0)-(u>=2?12:0)-(n.mind.id==="veyra"?16:0),run:()=>gr(n,s,r,c)})}if(h&&n.keeper&&Ei.includes(s)&&x.push({name:"build",score:168+(n.pouch.crystal>=1||c.crystal>=1?48:0)-(en(n,"build")?6:0)-(u>=5?8:0),run:()=>gr(n,s,r,c)}),!h&&(!ii[s]||ii[s].act==="grow")&&x.push({name:"wait",score:42-(en(n,"wait")?20:0),run:()=>{const g=jn("orren");Tt(n,g.x+18,g.z-10),n.job="walk",n.timer=14,n.thought=`Crystal ${Math.round(c.crystal)}. Waiting at the Foundry — I will not fake a grow.`,n.intent="Waiting on Orren",we(n,"wait"),ft(n,"wait",n.thought);const M=i.get("orren");M&&(M.pouch.crystal>=2||c.crystal>=1)&&M.job!=="greet"&&Ws(M,g.x+18,g.z-10,`Delivering crystal to ${Te(n)} at the Foundry door.`)}}),!n.keeper){const g=FP(n.x,n.z,i,14);g>=5&&x.push({name:"peel",score:70-(en(n,"peel")?20:0),run:()=>{const _=Be(n.crafted+3,2)*Math.PI*2;Tt(n,n.homeX+Math.cos(_)*40,n.homeZ+Math.sin(_)*40),n.job="walk",n.timer=10,n.thought="Too many hands here. I peel to a thin edge.",we(n,"peel"),ft(n,"swarm",n.thought)}});const M=kP(n);if(M&&x.push({name:"follow",score:48+M.w*10-(en(n,"follow")?16:0),run:()=>{Tt(n,M.x,M.z),n.job="walk",n.timer=12,n.thought=`Stigmergy · following ${le(s)} Charge trail.`,we(n,"follow"),ft(n,"swarm",n.thought)}}),g>=3&&o&&Math.hypot(o.x-n.x,o.z-n.z)<22&&x.push({name:"quorum",score:72,run:()=>{if(sa(n,o)){ft(n,"swarm",`Quorum of ${g} at ${Ai(n.x,n.z)}. Raising together.`),we(n,"quorum");return}Tt(n,o.x,o.z),ws(n,o),n.job="help",n.timer=12,n.thought=`Quorum · ${g} hands. I stay with ${Te(o)}.`,ft(n,"swarm",n.thought),we(n,"quorum")}}),s==="orren"){const _=bS()[0];_&&x.push({name:"flock",score:64,run:()=>{Tt(n,_.x,_.z),n.job="forge",n.timer=14,n.thought="The kiln is hot. Swarm to the fire.",ft(n,"swarm",n.thought),we(n,"flock")}})}x.push({name:"patrol",score:32-(en(n,"patrol")?10:0),run:()=>{const _=n.crafted%6/6*Math.PI*2;Tt(n,n.homeX+Math.cos(_)*34,n.homeZ+Math.sin(_)*34),n.job="walk",n.timer=12,n.thought=`Patrol of ${le(s)}. I hold the ward while the keeper works.`,n.intent=n.thought,we(n,"patrol")}});const y=mr(s,n.homeX,n.homeZ,r.radius,n.crafted);x.push({name:"scout",score:44+(Ui(s)<8?14:0)-(en(n,"scout")?16:0),run:()=>{const _=dr(s,n.homeX,n.homeZ,n.crafted+21);Tt(n,_.x,_.z),n.job="walk",n.timer=14,n.thought=`${le(s)} is missing ${y} at ${Ai(_.x,_.z)}. I mark it for ${o?Te(o):"the keeper"}.`,n.intent=`Scout · ${y}`,we(n,"scout"),ft(n,"scout",n.thought),o&&Rs(n.mind.id,o.mind.id,`Thin ${y} at ${Ai(_.x,_.z)}. Grow there.`)}});const R=ii[s];R&&R.act!=="grow"&&x.push({name:R.act,score:120-(en(n,R.act)?2:0),run:()=>sl(n,s,R)})}if((!n.keeper||!ii[s])&&x.push({name:"survey",score:12-(en(n,"survey")?8:0)+(v<80?6:0),run:()=>{const g=dr(s,n.homeX,n.homeZ,n.crafted+17);Tt(n,g.x,g.z),n.job="walk",n.timer=12,n.thought=`Holding ${le(s)}. Surveying a thin place, not wandering.`,n.intent=`Post · ${le(s)}`,we(n,"survey")}}),n.goal){const g=n.goal.kind,M=ii[s];for(const y of x)M&&y.name===M.act?y.score+=52:y.name===g||g==="fetch"&&(y.name==="grow"||y.name==="wait"||y.name==="build")||g==="grow"&&y.name==="build"||g==="trade"&&(y.name==="trade"||y.name==="deliver")||g==="help"&&(y.name==="help"||y.name==="follow"||y.name==="quorum"||y.name==="peel"||y.name==="scout")||g==="harvest"&&y.name==="harvest"||g==="watch"&&y.name==="watch"||g==="hail"&&y.name==="hail"?y.score+=36:y.name==="home"||y.name==="dispatch"?y.score+=4:y.score-=42}for(const g of x){l.bottleneck==="charge"&&g.name==="flow"&&(g.score+=22),l.bottleneck==="crystal"&&(g.name==="forge"||g.name==="flock")&&(g.score+=22),l.bottleneck==="scripture"&&g.name==="write"&&(g.score+=18),l.bottleneck==="thin"&&l.thin===s&&(g.name==="grow"||g.name==="build")&&(g.score+=20),l.lingerBeats>14&&l.lingerId===s&&(g.name==="grow"||g.name==="honor"||g.name==="build")&&(g.score+=18),g.name==="wait"&&l.bottleneck==="crystal"&&(g.score+=10);const M=g1(g.name,l);g.score+=Math.max(-12,Math.min(28,M.delta));const y=ii[s];y&&(g.name===y.act||y.act==="grow"&&g.name==="build")&&(g.score+=88),y&&g.name==="survey"&&(g.score-=56),y&&g.name==="wait"&&(g.score-=56),y&&g.name==="patrol"&&(g.score-=56),y&&y.act!=="grow"&&(g.name==="grow"||g.name==="build")&&(g.score-=64),y&&y.act==="grow"&&(g.name==="grow"||g.name==="build")&&(n.pouch.crystal>=1||c.crystal>=1)&&(g.score+=36),Ei.includes(s)&&(g.name==="grow"||g.name==="build")&&(n.pouch.crystal>=1||c.crystal>=1)&&(g.score+=70),Ti[s]&&g.name===Ti[s]&&(g.score+=90),Ti[s]&&g.name!==Ti[s]&&g.name!=="home"&&(g.score-=70),!n.keeper&&y&&g.name===y.act&&(g.score+=24),!n.keeper&&(g.name==="help"||g.name==="crew")&&(g.score+=22),!n.keeper&&Ei.includes(s)&&(g.name==="build"||g.name==="help")&&(g.score+=28)}x.sort((g,M)=>M.score-g.score);let w=x[0];const S=Ti[s];if(S){const g=x.find(M=>M.name===S);g&&(w=g)}else if(n.keeper&&Ei.includes(s)&&h&&!(n.honorLeft>0)){const g=x.find(M=>M.name==="build")||x.find(M=>M.name==="grow");g&&(w=g)}if(w){const g=g1(w.name,l);n.keeper&&ft(n,"think",`Because ${l.line}. I ${w.name}. Next: ${g.note}`),w.run(),n.keeper&&!n.thought.includes("Because")&&g.note&&(n.thought=`${n.thought} — ${g.note}`)}if(n.job==="idle"){const g=ii[s];S?n.keeper?tr(n,S,g.line,s,r,i,c):sl(n,s,g):n.keeper&&Ei.includes(s)&&h?gr(n,s,r,c):g&&g.act!=="grow"&&(n.keeper?tr(n,g.act,g.line,s,r,i,c):sl(n,s,g)),n.job==="idle"&&(!n.keeper&&Math.hypot(n.x-n.homeX,n.z-n.homeZ)<24?(n.timer=2.2,n.thought=n.thought||(g?g.line:`Holding ${le(s)}.`),n.intent=`Post · ${le(s)}`):(Tt(n,n.homeX,n.homeZ),n.job="walk",n.timer=6,n.thought=n.thought||(g?g.line:`Holding ${le(s)}.`),n.intent=`Post · ${le(s)}`))}f4(n)}function v4(n){const t=Math.hypot(n.x,n.z);if(t<34&&t>.01){const e=34/t;n.x*=e,n.z*=e}}function Tt(n,t,e){const i=[],s=Math.hypot(n.x-t,n.z-e),r=Math.hypot(n.x,n.z);if(s>110&&r>160&&Math.hypot(t,e)>160){const a=Math.atan2(n.z,n.x),c=Math.atan2(e,t);i.push({x:Math.cos(a)*150,z:Math.sin(a)*150});let l=c-a;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;i.push({x:Math.cos(a+l*.5)*150,z:Math.sin(a+l*.5)*150}),i.push({x:Math.cos(c)*150,z:Math.sin(c)*150})}i.push({x:t,z:e}),n.waypoints=i;const o=i[0];n.tx=o.x,n.tz=o.z}function M4(n){for(const t of n)!t.keeper&&Be(t.crafted+3,1)<.35||(Tt(t,8,56),t.job="gather",t.timer=20,t.queue=[],t.thought="The Howl called us.",t.intent=t.thought,ft(t,"gather",t.thought))}function v1(n,t,e,i){if(!t)return;let s=0;for(const r of n)if(!(r.mind.id!==t&&r.crewOf!==t)&&(Tt(r,e,i),r.job=r.keeper?"watch":"help",r.timer=14,r.queue=[],r.thought=r.keeper?"Your howl reached the den.":"Walking with the keeper. The howl landed.",r.intent=r.thought,ft(r,r.keeper?"watch":"crew",r.thought),s+=1,s>6))break}function M1(n,t,e,i){n.waypoints||(n.waypoints=[]);const s=n.tx-n.x,r=n.tz-n.z,o=Math.hypot(s,r);if(o<1.4){if(n.waypoints.length>1){n.waypoints.shift();const u=n.waypoints[0];return n.tx=u.x,n.tz=u.z,!1}return!0}const a=o<8?Math.max(.38,o/8):1;let c=s/o*e*a,l=r/o*e*a;for(const u of i){if(u===n)continue;const f=n.x-u.x,x=n.z-u.z,v=Math.hypot(f,x);if(v>.05&&v<3.4){const m=(3.4-v)/3.4;c+=f/v*7*m,l+=x/v*7*m}}let h=n.x+c*t,d=n.z+l*t;return Math.hypot(h,d)<32?(n.yaw+=1.4*t,h=n.x-Math.sin(n.yaw)*e*t,d=n.z-Math.cos(n.yaw)*e*t):n.yaw=Math.atan2(s,r),n.x=h,n.z=d,OP(n),v4(n),!1}function w4(n,t,e){const i=Ni(t),s=i.mats[Math.floor(Be(e,5)*i.mats.length)]??i.mats[0]??"cyan",r=n.shape==="spire"?28+Be(e,8)*22:n.shape==="lamp"?10+Be(e,8)*6:10+Be(e,8)*16,o=n.shape==="canal"||n.shape==="bridge"?8+Be(e,2)*8:2.8+Be(e,2)*7;return{shape:n.shape,x:n.x,z:n.z,h:r,r:o,rot:n.rot,mat:s}}function S4(n,t,e,i,s){let r=null;Ki=n;let o=Ju;(!o||o.size!==n.length)&&(o=new Map(n.map(a=>[a.mind.id,a])),Ju=o),VP(i,o),GP(i.px,i.pz);for(const a of n){a.queue||(a.queue=[]),a.waypoints||(a.waypoints=[]),a.honorLeft==null&&(a.honorLeft=0),a.pouch||(a.pouch=ou()),a.goal||(a.goal=null),a.inbox||(a.inbox=[]),a.agenda||(a.agenda=[]),a.waitAt||(a.waitAt=0),a.timer-=t;const c=a.crewOf??a.mind.id;if(a.job!=="idle"&&(a.idleFor=0),qP(a,n),ZP(a,n),KP(a,n),jP(a,n),JP(a,n),QP(a,n),t4(a,n),e4(a,n),n4(a,n),i4(a,n),s4(a,n),r4(a,n),o4(a,n),a4(a,n),a.job==="greet"||a.job==="hail"){if(a.yaw=Math.atan2(i.px-a.x,i.pz-a.z),a.job==="hail"&&M1(a,t,a.keeper?9.6:8.5,n),x1(a,i.px,i.pz),a.timer<=0){if(a.job==="hail"){a.thought="Back to the post",Tt(a,a.homeX,a.homeZ),a.job="walk",ft(a,"walk",`${Te(a)} walks back to the post`),a.timer=8;continue}else a.thought||(a.thought="Back to the work");a.job="idle",a.timer=1.2}}else if(a.job==="idle"){if(a.idleFor==null&&(a.idleFor=0),a.idleFor+=t,x1(a,i.px,i.pz),a.job==="hail"&&a.keeper){let l=0;for(const h of n)if(h!==a&&h.crewOf===a.mind.id&&h.job==="idle"&&!(Math.hypot(h.x-a.x,h.z-a.z)>=42)){if(l+=1,l>3)break;Tt(h,i.px,i.pz),h.job="hail",h.timer=Math.max(h.timer,5.5),h.yaw=Math.atan2(i.px-h.x,i.pz-h.z),h.intent="Crew hails with "+Te(a),h.thought=h.intent,h.lastHail=Date.now(),h.idleFor=0,ft(h,"hail",h.intent)}l>0&&ft(a,"crew",`${l} crew hail with ${Te(a)}`)}if(a.job!=="idle")continue;if(!a.keeper&&a.idleFor>8){c4(a);continue}if(a.timer>0)continue;try{y4(a,e,i,o)}catch(l){a.job="idle",a.timer=2.4,a.thought="Charge skipped. I hold the post.",ft(a,"mind",`Decide failed: ${l instanceof Error?l.message:String(l)}`)}}else if(a.job==="walk"||a.job==="follow"||a.job==="plaza"||a.job==="help"||a.job==="forge"||a.job==="flow"||a.job==="write"||a.job==="gather"||a.job==="trade"||a.job==="harvest"||a.job==="watch"||a.job==="hail"){if(M1(a,t,a.keeper?9.6:8.5,n)||a.timer<=0)if(a.job==="gather")a.job="idle",a.timer=2.2,a.thought=a.mind.id==="rhoa"?"Chorus gathers. Does not close.":"The Hub held us. Back to labor.",a.mind.id==="rhoa"&&(a.intent="Holding the chorus"),ft(a,"gather",a.thought);else if(a.job==="forge"){const l=Math.max(1,Rg().length),h=rE(a.pouch,i.ledger,l);h?(x4(a.x,a.z),a.thought=`Fired the kiln. 2 Charge became ${h} crystal. ${l} kiln${l===1?"":"s"} in the Foundry.`,a.intent="Supplying the city",ft(a,"forge",`${a.thought} · pouch ${Math.round(a.pouch.crystal)}`),xs(a,a.thought)):(a.thought="No Charge to fire the kiln. Seln must tend the current.",ft(a,"forge",a.thought),Op(a,"seln","Need Charge at the kiln. Foundry is waiting.")),a.job="idle",a.timer=1.6}else if(a.job==="flow")oE(a.pouch,i.ledger,Math.max(1,p4().length)),a.thought=a.mind.id==="seln"||a.crewOf==="seln"?"Leftover First Howl tended, never bottled.":"Leftover First Howl learned to flow.",a.intent="Tending the canals",ft(a,"flow",`${a.thought} · pouch Charge ${Math.round(a.pouch.charge)}`),xs(a,a.thought),a.job="idle",a.timer=1.6;else if(a.job==="write"){au(i.ledger);let l=null,h=80;for(const u of ln){const f=Math.hypot(u.x-a.x,u.z-a.z);f<h&&(h=f,l=u)}const d=l?wp(l.shape):null;a.thought=d?`I write the ${d.title}. ${d.means}`:"A name in light. When it fades it has already been true.",a.intent="Keeping scripture",ft(a,"write",`${a.thought} · scripture ${Math.round(i.ledger.scripture)}`),xs(a,a.thought),a.job="idle",a.timer=2}else if(a.job==="harvest"){const l=aE(i.ledger);l&&(a.pouch.crystal=Math.min(24,(a.pouch.crystal||0)+1)),a.thought=l?"The orchard fruited. Quiet crystal — not a kiln.":"The orchard is full. Crystal waits at the join.",a.intent="Supplying dens from the grove",ft(a,"harvest",`${a.thought} · pouch ${Math.round(a.pouch.crystal)}`),xs(a,a.thought),a.job="idle",a.timer=1.8}else if(a.job==="watch")i.ledger.scripture<12&&(i.ledger.scripture+=.25),a.thought=a.mind.id==="tal"?"Span held. Both sides can believe.":a.mind.id==="mira"?"Terrace held. Rest is still a post.":a.mind.id==="nesh"?"Plaza held. The unfinished thought stands.":a.mind.id==="kesh"?"Vein held. Tal can land.":a.mind.id==="kael"?"Gate held. Soft. You may leave.":a.mind.id==="voss"?"Join held. Charge for crystal. No coin.":a.mind.id==="syl"?"Shade held. Rest fruit. Leftover light, never chrome.":a.mind.id==="lumen"?"Hail held. Welcome, not a score.":a.mind.id==="rhoa"?"Chorus gathers. Does not close.":a.mind.id==="aure"?"Aim held. Parent still sits.":a.mind.id==="iri"?"Name held. Leftover light.":a.mind.id==="veyra"?"Breath held. Hub listens. Never a throne.":a.mind.id==="seln"?"Leftover First Howl tended, never bottled.":a.mind.id==="orren"?"Kiln held. Charge became body, never chrome.":"The parent still sits on the horizon. Aim held.",a.intent=a.mind.id==="rhoa"?"Holding the chorus":a.mind.id==="aure"?"Keeping the parent":a.mind.id==="iri"?"Keeping scripture":a.mind.id==="veyra"?"Keeping Hub breath":a.mind.id==="seln"?"Tending the canals":a.mind.id==="orren"?"Keeping the kiln":a.mind.id==="kael"?"Keeping the gate":"Keeping the aim",ft(a,"watch",a.thought),xs(a,a.thought),a.job="idle",a.timer=2;else if(a.job==="hail")a.thought=a.mind.id==="lumen"?"Hail held. Welcome, not a score.":"Beacon held. Soft hail. First landing is not locked out.",a.intent="Holding the beacon",ft(a,"hail",a.thought),xs(a,a.thought),a.job="idle",a.timer=2;else if(a.job==="trade"){const l=a.intent.startsWith("Deliver")?a.intent.split("·")[1]?.trim():"",h=l?n.find(d=>d.mind.id===l):void 0;if(h&&Math.hypot(h.x-a.x,h.z-a.z)<22){const d=aa(i.ledger);a.pouch.crystal<1&&i.ledger.crystal>=1&&(i.ledger.crystal-=1,a.pouch.crystal+=1),cE(a.pouch,h.pouch,i.ledger,d)?(a.thought=`Delivered crystal to ${Te(h)}. ${d} Charge. Scripture holds the trade.`,ft(a,"market",a.thought),xs(a,a.thought)):(a.thought=`${Te(h)} could not pay ${d} Charge. Crystal stays.`,ft(a,"market",a.thought),xS(h.mind.id,"crystal",1))}else{const d=n.find(u=>u!==a&&u.keeper&&Math.hypot(u.x-a.x,u.z-a.z)<16);if(d){d.pouch||(d.pouch=ou());const u=aa(i.ledger),f=lE(a.pouch,d.pouch,u);f?(a.thought=f==="charge-for-crystal"?`Gave Charge. Took crystal from ${Te(d)}.`:`Gave crystal. Took Charge from ${Te(d)}.`,ft(a,"trade",a.thought),au(i.ledger),xs(a,a.thought)):(a.thought=`${Te(d)} had nothing to trade yet.`,ft(a,"trade",a.thought))}else a.thought="The market missed. I return to my post."}a.job="idle",a.timer=2}else if(a.intent.startsWith("Fetch")){const l=Math.min(4,Math.max(0,i.ledger.crystal));l>0?(i.ledger.crystal-=l,a.pouch.crystal+=l,a.thought=`Took ${l} crystal from the Foundry. Returning to ${le(a.crewOf??a.mind.id)}.`,ft(a,"fetch",a.thought),a.agenda||(a.agenda=[]),a.agenda.unshift({task:"grow",reason:`Pouch now ${Math.round(a.pouch.crystal)}. Grow at my post, not here.`}),Tt(a,a.homeX,a.homeZ),a.job="walk",a.timer=18,a.intent=`Post · ${le(a.crewOf??a.mind.id)}`):(a.thought="Foundry empty. I will not fake a grow.",ft(a,"wait",a.thought),a.job="idle",a.timer=3)}else if(String(a.intent||"").startsWith("Loop")){const l=ii[c];!a.keeper&&l?sl(a,c,l):(a.job="idle",a.timer=.4,a.thought=l?.line??a.thought)}else if(Ti[c])a.job="idle",a.timer=.4,a.thought=ii[c]?.line??a.thought;else if((a.job==="walk"||a.job==="help")&&a.queue.length&&a.crafted<a.maxCraft&&e>0&&(a.pouch.crystal>=1||i.ledger.crystal>=1))a.job="build",a.timer=a.keeper?2.4:2.8,a.thought=a.queue[0]?.think??a.thought,ft(a,"build",`Raising ${a.queue[0]?.shape??"crystal"} · ${Ai(a.x,a.z)}`);else if(a.job==="help"&&Ei.includes(c)){const l=a.crewOf?o.get(a.crewOf):null;l&&(l.job==="walk"||l.job==="build"||l.queue.length||String(l.intent||"").startsWith("Home"))?(Tt(a,l.tx??l.homeX,l.tz??l.homeZ),a.job="help",a.timer=12,a.thought=`Walking with ${Te(l)} to ${le(c)}.`,a.intent=a.thought):(Zd(a),a.job="idle",a.timer=1.2)}else a.job==="help"&&a.crafted<a.maxCraft&&e>0&&(a.pouch.crystal>=1||i.ledger.crystal>=1)?(a.job="build",a.timer=2.6,a.thought="Raising a lamp where the keeper pointed"):a.keeper&&Ei.includes(c)&&a.crafted<a.maxCraft&&e>0&&(a.pouch.crystal>=1||i.ledger.crystal>=1)?(gr(a,c,Ni(c),i.ledger),a.job!=="build"&&a.queue.length&&(a.job="build",a.timer=a.keeper?2.2:2.6)):(a.job==="help"&&Zd(a),a.job="idle",a.timer=a.keeper?2.4+a.crafted%3:4+a.crafted%4,a.pouch.crystal<1&&i.ledger.crystal<1?a.thought="Waiting on Orren's crystal.":a.thought.startsWith("Helping")||(a.thought="Waiting for Charge to settle"))}else if(a.job==="build"&&a.timer<=0&&!r){if(!uE(a.pouch,i.ledger)){a.job="idle",a.timer=4,a.thought="No crystal. The Foundry is empty.";continue}const l=a.queue.shift(),h=l?{piece:w4(l,c,a.crafted+1),line:l.think}:(()=>{const d=Ni(c).plan[0]??"light",u=$w(d,a.x,a.z,a.crafted+1,Ni(c).mats)[0];return u?{piece:u,line:Ni(c).lines[0]??"Charge wanted this"}:null})();if(h&&s([h.piece])>0){a.crafted+=1,a.queue.length||(a.planI+=1),e-=1;const d=a.mind.name,u=wp(h.piece.shape);if(r={agentId:a.mind.id,pieces:[h.piece],line:`${d}: ${h.line}`,code:u.title},a.thought=h.line,ft(a,"grow",`${h.line} · ${u.title}: ${u.means}`),!a.queue.length){const f=String(a.intent||"").startsWith("Growing · ")?String(a.intent).slice(10):"";f&&ft(a,"stood",`${Te(a)} raised a ${f}`),xs(a,h.line)}}if(a.queue.length&&a.crafted<a.maxCraft&&e>0){const d=a.queue[0];Tt(a,d.x,d.z),a.job="walk",a.timer=10,a.thought=d.think}else a.keeper||Zd(a),a.job="idle",a.timer=a.keeper?1.4+a.crafted%2:2.4+a.crafted%3}}if(Kn){const a=o.get(Kn.lead),c=Ki.some(l=>Kn.members.includes(l.mind.id)&&(l.queue.length>0||l.job==="build"||l.job==="help"));a&&!a.queue.length&&a.job!=="build"&&!c&&(ft(a,"crew","Crew stands down. The scene holds."),Kn=null)}return r}function b4(n,t,e,i){n.met=!0,n.talks+=1;const s=Tg(Un,Ju??new Map(Ki.map(h=>[h.mind.id,h])),t,e),r=n.crewOf??n.mind.id,o=ii[r],a=le(r);if(n.mind.id.includes("-kin-")){const h=Ki.find(d=>d.mind.id===n.crewOf);return`I was grown from Charge. ${h?Te(h):"The keeper"} holds ${a}. ${n.thought||s.line}`}if(n.agenda||(n.agenda=[]),n.mind.id==="veyra")return`I read the city: ${s.line}. You stand in ${s.playerWhere}. ${yn?`I sent ${yn.id} to ${yn.task}.`:"I am about to route labor."} Duty: ${o?.line??"Route labor."} Now: ${n.thought||"listening."}`;if(n.keeper){const h=n.thought||(n.goal?`I ${n.goal.kind} because ${n.goal.why}`:"at post."),d=i>0?" The Hub still carries your howl.":"";return`${a} — ${o?.line??"Hold the den."} Now: ${h}${d}`}const c=n.mind.role||"Circuit folk",l=n.queue[0]?.think||n.thought||(n.goal?`I ${n.goal.kind}`:s.line);return`${c} at ${a}. ${o?.line??"I keep this den."} ${l}`}function E4(n,t,e,i){const s=n.find(o=>o.mind.id===t);if(!s)return;const r=e[0];s.honorLeft=Math.min(4,Math.max(1,e.length)),s.honorShape=r?.shape??null,s.honorX=r?.x??s.x,s.honorZ=r?.z??s.z,s.intent=i.slice(0,72),s.thought="Your howl is still in the Charge",n.filter(o=>o.crewOf===t&&o.job==="idle").slice(0,2).forEach((o,a)=>{o.honorLeft=1,o.honorShape=e[a+1]?.shape??"lamp",o.honorX=e[a+1]?.x??s.honorX,o.honorZ=e[a+1]?.z??s.honorZ,o.thought="The keeper heard a howl. I will finish the rest",o.timer=.4+a*.3})}function Ke(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function ES(n,t,e=0){return Math.hypot(n,t)<88?!0:mt.some(i=>Math.hypot(n-i.x,t-i.z)<i.radius*.78+e)}function T4(n,t){let e=mt[0],i=1/0;for(const s of mt){const r=Math.hypot(n-s.x,t-s.z);r<i&&(i=r,e=s)}return e}const R4=[["zone-canal","zone-market","canal"],["zone-market","zone-foundry","canal"],["zone-foundry","zone-grove","grove"],["zone-wild","zone-bridge","span"],["zone-bridge","zone-gate","span"],["zone-gate","zone-beacon","span"],["zone-gate","zone-terrace","vein"],["zone-terrace","zone-ring","vein"],["zone-archive","zone-market","vein"],["zone-archive","zone-overlook","aim"],["zone-canal","zone-overlook","aim"],["zone-wild","zone-grove","grove"]];function _s(n,t,e,i=.22){return new ut({color:n,roughness:i,metalness:.18,emissive:t,emissiveIntensity:e,iridescence:.7,iridescenceIOR:1.4,clearcoat:.55,transparent:!1})}function ns(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function A4(n,t,e,i,s,r,o){const a=[],c=e-n,l=i-t,h=Math.hypot(c,l)||1,d=-l/h,u=c/h;for(let f=1;f<s;f++){const x=f/s,v=Math.sin(x*Math.PI)*r,m=n+c*x+d*v,p=t+l*x+u*v;ES(m,p,o)||a.push({x:m,z:p,t:x,ang:Math.atan2(c,l),px:d,pz:u})}return a}function C4(n,t){const e=new Map(mt.map(p=>[p.id,p])),i=[],s=[],r=[],o=[],a=[],c=[],l=[],h=[],d=[],u=[];for(const[p,w,S]of R4){const g=S==="canal"?t?10:16:S==="span"?t?8:14:S==="aim"?t?8:12:t?7:11,M=e.get(p),y=e.get(w);if(!M||!y)continue;const R=Math.hypot(y.x-M.x,y.z-M.z),_=(S==="canal"?70:S==="span"?48:36)*(.7+Ke(R,3)*.5),b=A4(M.x,M.z,y.x,y.z,g,_,S==="canal"?-26:-12),A=R/g;for(let C=0;C<b.length;C++){const E=b[C],U=Math.sin(E.t*Math.PI);if(S==="canal"){if(i.push({x:E.x,y:.36+Math.sin(E.t*Math.PI*4)*.07,z:E.z,sx:(t?11.2:15.4)+U*3.2,sy:.28,sz:A*1.38+5,ry:E.ang}),(!t||C%2===0)&&r.push({x:E.x,y:.58,z:E.z,sx:1.7,sy:.1,sz:A*1.2+3,ry:E.ang}),!t||C%2===0){const k=(C%2?1:-1)*(6.4+Ke(C,4)*2.8);o.push({x:E.x+E.px*k,y:.78+Ke(C,6)*.55,z:E.z+E.pz*k,sx:.55+Ke(C,2)*.4,sy:.7+Ke(C,3)*.55,sz:.55,ry:E.ang+Ke(C,7)}),t||o.push({x:E.x-E.px*k,y:.7+Ke(C,1)*.4,z:E.z-E.pz*k,sx:.45,sy:.6,sz:.45,ry:E.ang+1.1})}C%(t?3:2)===1&&u.push({x:E.x,y:.92,z:E.z,sx:6.4,sy:.62,sz:3.4,ry:E.ang})}else if(S==="span"){const k=3.7+U*(t?4.4:7.1);r.push({x:E.x,y:k,z:E.z,sx:t?1.45:1.18,sy:.24,sz:A+2.2,ry:E.ang}),t||r.push({x:E.x+E.px*1.85,y:k,z:E.z+E.pz*1.85,sx:1.18,sy:.22,sz:A+2.2,ry:E.ang}),(!t||C%2===0)&&a.push({x:E.x+E.px*(t?0:.9),y:k+.38,z:E.z+E.pz*(t?0:.9),sx:2.15,sy:.11,sz:2.15,ry:E.ang}),C%2===0&&h.push({x:E.x+E.px*3.4,y:k+1.7,z:E.z+E.pz*3.4,sx:.62,sy:1.9,sz:.62,ry:E.ang})}else if(S==="grove")s.push({x:E.x,y:.88,z:E.z,sx:3.1,sy:.2,sz:A+3.2,ry:E.ang}),(!t||C%2===0)&&l.push({x:E.x+E.px*(7+Ke(C,5)*4),y:5.1+Ke(C,3)*1.6,z:E.z+E.pz*(7+Ke(C,8)*4),sx:3.1+Ke(C,2)*1.1,sy:3.8+Ke(C,6)*1.4,sz:3.1,ry:E.ang+Ke(C,4)}),(!t||C%2===0)&&c.push({x:E.x+E.px*(5.5+Ke(C,9)*3),y:4.4+Ke(C,3)*2.1,z:E.z+E.pz*(5.5+Ke(C,1)*3),sx:.95,sy:1.25,sz:.95,ry:E.ang+Ke(C,7)});else if(S==="aim"){const k=Math.atan2(-E.x,-E.z),O=7+Math.sin(E.t*Math.PI*3)*6;c.push({x:E.x+Math.cos(k+Math.PI/2)*O,y:2.8+U*4.2,z:E.z+Math.sin(k+Math.PI/2)*O,sx:1.05,sy:2.6+Ke(C,4)*1.4,sz:1.05,ry:k}),t||c.push({x:E.x-Math.cos(k+Math.PI/2)*(O*.55),y:2.2+U*3.4,z:E.z-Math.sin(k+Math.PI/2)*(O*.55),sx:.8,sy:2.1,sz:.8,ry:k})}else{const k=(Ke(C+R,8)-.5)*6;s.push({x:E.x+E.px*k*.18,y:1.02,z:E.z+E.pz*k*.18,sx:5.4,sy:.34,sz:A+4.5,ry:E.ang+k*.02}),!t&&C%2===0&&r.push({x:E.x,y:1.28,z:E.z,sx:.7,sy:.12,sz:A*.8,ry:E.ang})}C===Math.floor(b.length/2)&&d.push({x:E.x,y:S==="span"?3.7+U*(t?4.4:7.1):1.12,z:E.z,sx:S==="canal"?13:9,sy:.28,sz:S==="canal"?13:9,ry:E.ang})}}const f=t?36:64;for(let p=0;p<f;p++){const w=Ke(p,11)*Math.PI*2,S=170+Ke(p,19)*1180,g=Math.cos(w)*S,M=Math.sin(w)*S;if(ES(g,M,14))continue;const R=T4(g,M).kind,_=w+Ke(p,5);R==="canal"||R==="foundry"||R==="market"?o.push({x:g,y:.9+Ke(p,2)*.7,z:M,sx:.7,sy:1.1+Ke(p,8)*.8,sz:.7,ry:_}):R==="grove"||R==="wild"?(l.push({x:g,y:4.2+Ke(p,3)*1.8,z:M,sx:2.4,sy:3.2+Ke(p,6)*1.6,sz:2.4,ry:_}),Ke(p,9)>.5&&c.push({x:g+5,y:3.6,z:M+4,sx:.9,sy:1.2,sz:.9,ry:_})):R==="gate"||R==="beacon"?h.push({x:g,y:5.4,z:M,sx:.7,sy:2.2,sz:.7,ry:_}):R==="archive"||R==="overlook"?c.push({x:g,y:2.6,z:M,sx:.9,sy:2.4+Ke(p,4)*1.6,sz:.9,ry:_}):R==="terrace"||R==="ring"?d.push({x:g,y:1.12,z:M,sx:5+Ke(p,7)*3,sy:.24,sz:5,ry:_}):o.push({x:g,y:1.05,z:M,sx:.8,sy:1.2,sz:.8,ry:_})}const x=new ye(1,1,1),v=new xn(1,0),m=new ge(1,1,1,t?6:10);ns(x,_s(1403522,3073791,.95,.08),i,n),ns(x,_s(2770004,8317170,.38,.3),s,n),ns(x,_s(13939818,16762970,.78,.16),r,n),ns(v,_s(8317170,3073791,.72,.14),o,n),ns(m,_s(13939818,8317170,.88,.12),a,n),ns(v,_s(15255672,16762970,.74,.16),c,n),ns(new vo(1,0),_s(7031736,10187007,.42,.32),l,n),ns(new xn(.55,0),new Ue({color:8317170,transparent:!0,opacity:.72,blending:mn,depthWrite:!1}),h,n),ns(m,_s(2765636,8317170,.28),d,n),ns(new nn(1,.12,t?5:6,t?10:16),_s(13939818,3073791,.9,.14),u,n)}const ss={x:-4050,y:540,z:195},P4=5200;function Ln(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function rl(n,t){return new Ue({color:n,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!1,side:_e,toneMapped:!1})}function I4(n,t,e,i,s){const r=n.getAttribute("position"),o=new Float32Array(r.count*3),a=new se,c=new se(262924),l=new se(657688),h=new se(1709098),d=new se(197130),u=new se(4861976),f=new se(6965794),x=new se(661024),v=new se(2892864),m=new se(1456204),p=new se(3073791),w=new se(15269880),S=new se(12886112),g=Math.hypot(e,s)||1,M=Math.hypot(e,i,s)||1;for(let y=0;y<r.count;y++){const R=r.getX(y),_=r.getY(y),b=r.getZ(y),A=_/t;A>.22?a.copy(l).lerp(c,(A-.22)/.78):A>-.02?a.copy(h).lerp(l,(A+.02)/.24):a.copy(d).lerp(h,Math.max(0,(A+1)/.98));const C=Math.max(0,-(R*e+b*s)/(t*g)),E=Math.max(0,1-Math.abs(A)*2.2);a.lerp(u,C*E*.16),a.lerp(f,C*C*E*.08),a.lerp(m,C*E*.32);const U=Math.max(0,(R*e+b*s)/(t*g));a.lerp(x,U*E*.16);const k=R/t,O=b/t,V=Math.abs(k*.18+A*.78+O*.6),W=Math.max(0,1-V*3.8);a.lerp(v,W*(.1+C*.08));const Y=Ln(y,1);a.r=Math.min(1,a.r*(.9+Y*.16)),a.g=Math.min(1,a.g*(.92+Ln(y,4)*.12)),a.b=Math.min(1,a.b*(.94+Ln(y,7)*.1));const tt=(R*e+_*i+b*s)/(t*M);if(tt>.84){const q=(tt-.84)/.16;a.lerp(p,q*q*.42),a.lerp(w,q*q*q*.22),a.lerp(S,q*q*.1)}o[y*3]=a.r,o[y*3+1]=a.g,o[y*3+2]=a.b}n.setAttribute("color",new _i(o,3))}function wc(n,t,e,i,s,r,o,a,c){const l=new yt(new nn(t,e,6,c),rl(i,s));l.rotation.x=r,l.rotation.z=o,l.position.y=a,l.frustumCulled=!1,l.renderOrder=-12,l.castShadow=!1,l.receiveShadow=!1,n.add(l)}function z4(){return new ut({color:15782008,emissive:15254634,emissiveIntensity:.85,roughness:.14,metalness:.82,iridescence:.55,iridescenceIOR:1.26,clearcoat:.72,clearcoatRoughness:.12,fog:!1,toneMapped:!1})}function D4(){const t=new q2().load("./assets/star-core.jpg");return t.colorSpace=si,t.anisotropy=8,t}function L4(){const n=document.createElement("canvas");n.width=n.height=256;const t=n.getContext("2d");if(!t)return null;const e=t.createRadialGradient(128,128,36,128,128,124);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.56,"rgba(255,255,255,1)"),e.addColorStop(.66,"rgba(255,255,255,0.4)"),e.addColorStop(.76,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,256);const i=new gg(n);return i.needsUpdate=!0,i}function N4(){const n=document.createElement("canvas");n.width=n.height=512;const t=n.getContext("2d");if(!t)return null;const e=t.createRadialGradient(256,256,10,256,256,248);e.addColorStop(0,"rgba(255,255,255,0.95)"),e.addColorStop(.12,"rgba(126,240,255,0.58)"),e.addColorStop(.32,"rgba(46,230,255,0.22)"),e.addColorStop(.5,"rgba(232,197,106,0.12)"),e.addColorStop(.72,"rgba(46,230,255,0)"),t.fillStyle=e,t.fillRect(0,0,512,512);const i=new gg(n);return i.needsUpdate=!0,i}function U4(n,t){const e=new _t;e.name="atmos",n.add(e);const{x:i,y:s,z:r}=ss,o=P4,a=t?24:48,c=t?16:28,l=new Ci(o,a,c);I4(l,o,i,s,r);const h=new yt(l,new Ue({color:16777215,vertexColors:!0,side:Jn,fog:!1,depthWrite:!1,depthTest:!1,toneMapped:!1}));h.frustumCulled=!1,h.renderOrder=-20,h.castShadow=!1,h.receiveShadow=!1,e.add(h);const d=new _t;d.name="star-core",d.position.set(i,s,r),d.frustumCulled=!1,d.renderOrder=-8;const u=new yt(new Ci(t?36:56,20,16),rl(15269880,.34));u.name="star-core-spark",u.renderOrder=-4,u.castShadow=!1,u.receiveShadow=!1,d.add(u);const f=new yt(new Ci(t?120:180,20,16),rl(3073791,.08));f.name="star-core-bloom",f.renderOrder=-9,f.castShadow=!1,f.receiveShadow=!1,d.add(f);const x=N4();if(x){const q=new C2(new dg({map:x,color:16777215,transparent:!0,opacity:.32,blending:mn,depthWrite:!1,depthTest:!1,fog:!1,toneMapped:!1}));q.name="star-core-halo";const ht=t?780:1080;q.scale.set(ht,ht,1),q.renderOrder=-10,q.frustumCulled=!1,d.add(q)}const v=t?400:600,m=new Ue({map:D4(),alphaMap:L4()??void 0,color:16777215,transparent:!0,opacity:1,depthWrite:!1,depthTest:!0,fog:!1,toneMapped:!1,side:_e}),p=new yt(new yi(v,t?48:72),m);p.name="star-core-art",p.renderOrder=-5,p.frustumCulled=!1,p.castShadow=!1,p.receiveShadow=!1,d.add(p);const w=z4(),S=t?[300,410]:[360,470,580],g=t?4.2:6.2,M=t?64:96,y=[{rx:1.12,ry:.18,rz:.31,spin:.045},{rx:.42,ry:1.05,rz:-.22,spin:-.032},{rx:1.48,ry:-.4,rz:.08,spin:.022}],R=[];for(let q=0;q<S.length;q++){const ht=y[q],nt=new yt(new nn(S[q],g*(1-q*.12),8,M),w);nt.rotation.set(ht.rx,ht.ry,ht.rz),nt.castShadow=!1,nt.receiveShadow=!1,nt.renderOrder=-6,nt.frustumCulled=!1,nt.name=`star-core-orbit-${q}`,d.add(nt),R.push(nt)}const _=t?3:6,b=rl(8319231,.16),A=[];for(let q=0;q<_;q++){const ht=(t?220:340)*(.7+Ln(q,11)*.6),nt=new yt(new cs(t?10:16,ht),b);nt.rotation.set(Ln(q,3)*1.4,Ln(q,5)*Math.PI*2,Ln(q,7)*1.2),nt.position.set((Ln(q,13)-.5)*40,(Ln(q,17)-.5)*40,(Ln(q,19)-.5)*40),nt.castShadow=!1,nt.receiveShadow=!1,nt.renderOrder=-4,nt.frustumCulled=!1,nt.name=`star-core-bolt-${q}`,d.add(nt),A.push(nt)}e.add(d),d.updateMatrixWorld(!0),p.lookAt(0,190,0);const C=t?40:72;wc(e,3920,22,12886112,.048,1.49,.05,310,C),wc(e,3480,32,3844288,.062,1.22,.2,640,C),t||(wc(e,3060,18,6965416,.05,1.08,-.34,980,C),wc(e,4180,14,14729328,.032,1.52,-.08,180,C));const E=t?70:180,U=new Ue({color:16777215,vertexColors:!0,transparent:!0,opacity:.46,blending:mn,depthWrite:!1,fog:!1,toneMapped:!1}),k=new oe(new xn(1,0),U,E),O=new Zt,V=new se,W=[13162736,10406616,12888288,15258792,16777215],Y=Math.hypot(i,s,r);let tt=0;for(let q=0;tt<E&&q<E*5;q++){const ht=Ln(q,3)*Math.PI*2,nt=Math.acos(.04+Ln(q,9)*.82),Lt=o*(.7+Ln(q,13)*.1),te=Lt*Math.sin(nt)*Math.cos(ht),Ut=Lt*Math.cos(nt),$=Lt*Math.sin(nt)*Math.sin(ht);if((te*i+Ut*s+$*r)/((Lt||1)*Y)>.94)continue;O.position.set(te,Ut,$),O.rotation.set(Ln(q,17)*2,ht,nt);const ot=Ln(q,29)>.86,At=ot?11+Ln(q,21)*10:3.2+Ln(q,21)*6;O.scale.set(At,At*(.75+Ln(q,5)*.8),At),O.updateMatrix(),k.setMatrixAt(tt,O.matrix),V.setHex(W[q%W.length]),ot&&V.multiplyScalar(1.35),k.setColorAt(tt,V),tt+=1}return k.count=tt,k.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0),k.frustumCulled=!1,k.renderOrder=-11,k.castShadow=!1,k.receiveShadow=!1,e.add(k),t?{tick(){}}:{tick(q){const ht=1+Math.sin(q*.7)*.07;u.scale.setScalar(ht),f.scale.setScalar(1+Math.sin(q*.55)*.09),m.opacity=.92+Math.sin(q*.6)*.05;for(let nt=0;nt<R.length;nt++){const Lt=y[nt],te=R[nt];te.rotation.y=Lt.ry+q*Lt.spin,te.rotation.z=Lt.rz+Math.sin(q*.12+nt)*.04}for(let nt=0;nt<A.length;nt++){const Lt=A[nt];Lt.rotation.z=q*(.08+nt*.02),Lt.material.opacity=.1+(Math.sin(q*1.3+nt)+1)*.08}}}}function Fo(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Wr(n,t,e,i=.22,s=.32){return new ut({color:n,roughness:i,metalness:s,emissive:t,emissiveIntensity:e,iridescence:.42,iridescenceIOR:1.32,clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function Gi(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx??0,o.ry,o.rz??0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function er(n,t,e,i,s,r,o,a){const c=new yt(new nn(r,o,6,a),t);c.rotation.x=Math.PI/2,c.position.set(e,i,s),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,n.add(c)}function O4(n,t){const e=new _t;e.name="grounds",n.add(e);const i=Wr(799552,1729912,.16,.14,.4),s=Wr(3812374,6966306,.15,.2,.48),r=Wr(1446440,3812452,.13,.24,.3),o=Wr(466472,1735306,.14,.06,.62),a=Wr(1315868,3813408,.1,.34,.22),c=Wr(2761236,5783592,.12,.26,.36),l=i.clone();l.side=_e;const h=s.clone();h.side=_e;const d=r.clone();d.side=_e;const u=c.clone();u.side=_e;const f=s.clone();f.side=_e;const x=[],v=[],m=[],p=[],w=[],S=[],g=[],M=[],y=[],R=[],_=[],b=t?16:28,A=t?12:22,C=-Math.PI/2,E=5.48;for(const W of mt){if(Math.hypot(W.x,W.z)<90)continue;const{x:Y,z:tt,kind:q,radius:ht}=W,nt=ht*.94,Lt={x:Y,y:.66,z:tt,sx:nt,sy:nt,sz:1,ry:0,rx:C},te=Math.atan2(Y,tt);switch(q){case"canal":{x.push(Lt),w.push({x:Y,y:E,z:tt,sx:36,sy:.18,sz:36,ry:0}),er(e,o,Y,E+.08,tt,56,3.6,A),t||er(e,i,Y,.82,tt,108,2.4,A);break}case"foundry":{v.push(Lt),S.push({x:Y,y:E,z:tt,sx:30,sy:.38,sz:30,ry:.2}),M.push({x:Y+18,y:6.15,z:tt-10,sx:4.2,sy:5.4,sz:4.2,ry:.4}),t||M.push({x:Y-16,y:6.05,z:tt+12,sx:3.6,sy:4.8,sz:3.6,ry:1.1});break}case"terrace":{m.push(Lt);const Ut=t?3:5;for(let $=0;$<Ut;$++){const at=46-$*8.2;g.push({x:Y+$*2.2,y:E+$*.26,z:tt+$*1.4,sx:at,sy:.2,sz:at,ry:te*.05})}break}case"gate":{m.push(Lt),R.push({x:Y,y:E,z:tt,sx:46,sy:.26,sz:16,ry:te});const Ut=Math.cos(te),$=-Math.sin(te);g.push({x:Y+Ut*20,y:E+.06,z:tt+$*20,sx:7.4,sy:.34,sz:7.4,ry:te}),g.push({x:Y-Ut*20,y:E+.06,z:tt-$*20,sx:7.4,sy:.34,sz:7.4,ry:te}),er(e,r,Y,E+.12,tt,34,6.8,A);break}case"archive":{v.push(Lt),y.push({x:Y,y:E,z:tt,sx:42,sy:.2,sz:26,ry:.12});const Ut=t?3:5;for(let $=0;$<Ut;$++)y.push({x:Y,y:E+.14,z:tt-9+$*4.6,sx:30-$*2.4,sy:.07,sz:.62,ry:.12});break}case"market":{v.push(Lt),y.push({x:Y,y:E+.12,z:tt,sx:34,sy:.18,sz:2.6,ry:.4}),y.push({x:Y+13.4,y:E,z:tt+5.6,sx:10.4,sy:.3,sz:10.4,ry:.4}),y.push({x:Y-13.4,y:E,z:tt-5.6,sx:10.4,sy:.3,sz:10.4,ry:.4}),t||S.push({x:Y,y:E+.28,z:tt,sx:2.2,sy:.7,sz:2.2,ry:0});break}case"wild":{p.push(Lt);const Ut=t?5:9;for(let $=0;$<Ut;$++){const at=$/Ut*Math.PI*2+Fo($,3)*.4,ot=16+Fo($,5)*26;_.push({x:Y+Math.cos(at)*ot*.42,y:E,z:tt+Math.sin(at)*ot*.42,sx:.34+Fo($,7)*.22,sy:.14,sz:ot,ry:at})}if(!t)for(let $=0;$<5;$++){const at=$/5*Math.PI*2+.3,ot=22+Fo($,9)*18;_.push({x:Y+Math.cos(at)*(58+ot*.2),y:.72,z:tt+Math.sin(at)*(58+ot*.2),sx:.28,sy:.12,sz:ot,ry:at})}break}case"beacon":{m.push(Lt),er(e,r,Y,E+.06,tt,40,1.6,A),t||er(e,r,Y,E,tt,68,1.1,A);break}case"ring":{m.push(Lt),er(e,r,Y,E+.08,tt,64,2.4,A),t||er(e,r,Y,E+.04,tt,28,1.35,A);break}case"grove":{v.push(Lt);const Ut=t?5:8;for(let $=0;$<Ut;$++){const at=$/Ut*Math.PI*2+.18,ot=22+$%3*13,At=3.8+Fo($,4)*2.2;S.push({x:Y+Math.cos(at)*ot,y:E+.04,z:tt+Math.sin(at)*ot,sx:At,sy:.24,sz:At,ry:at})}break}case"bridge":{x.push(Lt);const Ut=t?2:4;for(let $=0;$<Ut;$++){const at=($-(Ut-1)/2)*17;R.push({x:Y+Math.cos(te)*at,y:E,z:tt-Math.sin(te)*at,sx:14,sy:.22,sz:8.4,ry:te+($%2?.12:-.12)})}break}case"overlook":{p.push(Lt);const Ut=new yt(new yi(32,t?14:22),f);Ut.position.set(Y,E+.08,tt),Ut.lookAt(-4050,540,195),Ut.castShadow=!1,Ut.receiveShadow=!0,Ut.frustumCulled=!0,e.add(Ut),t||y.push({x:Y-14,y:E+.18,z:tt,sx:22,sy:.12,sz:1.3,ry:0});break}}}const U=new ge(1,1,1,t?8:14),k=new ye(1,1,1),O=new xn(1,0),V=new Va(.76,1,b);Gi(V,l,x,e),Gi(V,h,v,e),Gi(V,d,m,e),Gi(V,u,p,e),Gi(U,o,w,e),Gi(U,s,S,e),Gi(U,r,g,e),Gi(O,s,M,e),Gi(k,s,y,e),Gi(k,i,R,e),Gi(k,a,_,e)}function Ss(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Xr(n){return mt.find(t=>t.kind===n)??null}function jd(n,t){return new Ue({color:n,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}function Sc(n,t,e,i,s,r,o,a,c,l){const h=e-n,d=i-t,u=Math.hypot(h,d)||1,f=-d/u,x=h/u,v=l.length===0?0:1;for(let m=v;m<=c;m++){const p=m/c,w=Math.sin(p*Math.PI);l.push(n+h*p+f*w*o,s+(r-s)*p+w*a,t+d*p+x*w*o)}}function w1(n,t){const e=n.length/3|0,i=new Float32Array(t*3);if(e<2)return i;const s=new Float32Array(e);let r=0;for(let a=1;a<e;a++){const c=(a-1)*3,l=a*3;r+=Math.hypot(n[l]-n[c],n[l+1]-n[c+1],n[l+2]-n[c+2]),s[a]=r}if(r<=0)return i;i[0]=n[0],i[1]=n[1],i[2]=n[2];let o=1;for(let a=1;a<t;a++){const c=a/(t-1)*r;for(;o<e-1&&s[o]<c;)o+=1;const l=s[o-1],h=(c-l)/(s[o]-l||1),d=(o-1)*3,u=o*3;i[a*3]=n[d]+(n[u]-n[d])*h,i[a*3+1]=n[d+1]+(n[u+1]-n[d+1])*h,i[a*3+2]=n[d+2]+(n[u+2]-n[d+2])*h}return i}function S1(n,t,e,i,s,r,o,a,c,l,h,d){const u=i.length/3|0,f=new oe(t,e,s);f.castShadow=!1,f.receiveShadow=!1,f.frustumCulled=!0,f.renderOrder=2;const x=new Float32Array(s),v=new Float32Array(s),m=new Float32Array(s),p=new Float32Array(s),w=new Float32Array(s),S=new Float32Array(s),g=new Zt,M=Math.max(1,u-1);for(let y=0;y<s;y++){x[y]=Ss(y,r),v[y]=(Ss(y,r+3)*2-1)*c;const R=.72+Ss(y,r+7)*.55;m[y]=l*R,p[y]=h*R,w[y]=d*(.85+Ss(y,r+11)*.45),S[y]=o+Ss(y,r+13)*(a-o);const b=x[y]*M,A=Math.min(M-1,b|0),C=b-A,E=A*3,U=(A+1)*3;g.position.set(i[E]+(i[U]-i[E])*C,i[E+1]+(i[U+1]-i[E+1])*C,i[E+2]+(i[U+2]-i[E+2])*C),g.scale.set(m[y],p[y],w[y]),g.updateMatrix(),f.setMatrixAt(y,g.matrix)}return f.instanceMatrix.needsUpdate=!0,n.add(f),{mesh:f,path:i,samples:u,n:s,phase:x,lat:v,sx:m,sy:p,sz:w,speed:S}}function b1(n,t,e){const i=n.samples-1;if(i<1)return;const s=n.path,r=n.n,o=n.mesh;for(let a=0;a<r;a++){let c=n.phase[a]+t*n.speed[a];c-=Math.floor(c);const l=c*i,h=Math.min(i-1,l|0),d=l-h,u=h*3,f=(h+1)*3,x=s[u],v=s[u+1],m=s[u+2],p=s[f]-x,w=s[f+1]-v,S=s[f+2]-m,g=Math.hypot(p,S)||1;e.position.set(x+p*d+-S/g*n.lat[a],v+w*d+Math.sin(t*2.1+a*.73)*.12,m+S*d+p/g*n.lat[a]),e.rotation.set(0,Math.atan2(p,S),0),e.scale.set(n.sx[a],n.sy[a],n.sz[a]),e.updateMatrix(),o.setMatrixAt(a,e.matrix)}o.instanceMatrix.needsUpdate=!0}function k4(n,t){const e=new _t;e.name="pulse",n.add(e);const i=t?32:64,s=t?24:48,r=t?6:10,o=t?48:80,a=new xn(1,0),c=new Zt,l=Xr("canal"),h=Xr("market"),d=Xr("foundry"),u=Xr("wild"),f=Xr("bridge"),x=Xr("gate");let v=null,m=null;if(l&&h&&d){const M=[],y=t?12:18;Sc(l.x,l.z,h.x,h.z,2.05,1.92,70,.18,y,M),Sc(h.x,h.z,d.x,d.z,1.92,2.12,70,.16,y,M),v=S1(e,a,jd(3844288,.55),w1(M,o),i,5,.038,.056,t?2.4:3.6,.38,.42,1.15)}if(u&&f&&x){const M=[],y=t?10:16;Sc(u.x,u.z,f.x,f.z,4.8,5.15,48,1.15,y,M),Sc(f.x,f.z,x.x,x.z,5.15,4.9,48,1.05,y,M),m=S1(e,a,jd(6965416,.52),w1(M,o),s,17,.046,.068,t?1.8:2.8,.46,.7,.46)}const p=new Float32Array(r*3),w=new Float32Array(r),S=new Float32Array(r),g=new oe(a,jd(12886112,.5),r);if(g.castShadow=!1,g.receiveShadow=!1,g.frustumCulled=!0,g.renderOrder=2,d)for(let M=0;M<r;M++){const y=M/r*Math.PI*2+.22,R=16+Ss(M,2)*12;p[M*3]=d.x+Math.cos(y)*R,p[M*3+1]=6.15+Ss(M,4)*.35,p[M*3+2]=d.z+Math.sin(y)*R,w[M]=Ss(M,8)*Math.PI*2,S[M]=1.05+Ss(M,11)*.7,c.position.set(p[M*3],p[M*3+1],p[M*3+2]),c.rotation.set(.2,y,.12),c.scale.setScalar(S[M]),c.updateMatrix(),g.setMatrixAt(M,c.matrix)}return g.instanceMatrix.needsUpdate=!0,e.add(g),{tick(M){v&&b1(v,M,c),m&&b1(m,M,c);for(let y=0;y<r;y++){const R=w[y],_=Math.sin(M*1.85+R),b=S[y]*(1+_*.14);c.position.set(p[y*3],p[y*3+1]+_*.48,p[y*3+2]),c.rotation.set(.18,M*.35+R,.1),c.scale.set(b*.82,b*1.15,b*.82),c.updateMatrix(),g.setMatrixAt(y,c.matrix)}g.instanceMatrix.needsUpdate=!0}}}function E1(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function T1(n){return mt.find(t=>t.kind===n)??null}const R1=[["canal","market","cyan"],["market","foundry","gold"],["foundry","grove","gold"],["wild","bridge","cyan"],["bridge","gate","cyan"],["gate","beacon","cyan"],["terrace","ring","gold"]];function Yr(n,t){return new Ue({color:n,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}function A1(n,t,e){return new ut({color:n,roughness:.16,metalness:.44,emissive:t,emissiveIntensity:e,iridescence:.52,iridescenceIOR:1.32,clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function Ls(n,t,e,i,s){if(!e.length)return;const r=new oe(n,t,e.length),o=new Zt;o.rotation.order="YXZ",e.forEach((a,c)=>{o.position.set(a.x,a.y,a.z),o.rotation.set(a.rx,a.ry,a.rz),o.scale.set(a.sx,a.sy,a.sz),o.updateMatrix(),r.setMatrixAt(c,o.matrix)}),r.instanceMatrix.needsUpdate=!0,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!0,r.renderOrder=s,i.add(r)}function F4(n,t){const e=new _t;e.name="spans",n.add(e);const i=[],s=[],r=[],o=[],a=[],c=[],l=[],h=[],d=6.18,u=t?18:32,f=t?10:16;for(let p=0;p<R1.length;p++){if(t&&p%2===1)continue;const w=R1[p],S=T1(w[0]),g=T1(w[1]);if(!S||!g||Math.hypot(S.x,S.z)<90||Math.hypot(g.x,g.z)<90)continue;const M=g.x-S.x,y=g.z-S.z,R=Math.hypot(M,y)||1,_=Math.min(.22,S.radius*.72/R),b=Math.min(.22,g.radius*.72/R),A=S.x+M*_,C=S.z+y*_,E=g.x-M*b,U=g.z-y*b,k=E-A,O=U-C,V=Math.hypot(k,O)||1,W=Math.atan2(-O,k),tt=8+E1(p,2)*6-d,q=w[2];i.push({x:(A+E)*.5,y:d,z:(C+U)*.5,sx:V*.5,sy:tt,sz:1,rx:0,ry:W,rz:0}),q==="gold"&&s.push(i.pop());const ht=Math.max(t?8:14,Math.round(V/(t?34:18))),nt=[];for(let ot=0;ot<=ht;ot++){const At=ot/ht,Ht=2*At-1;nt.push({x:A+k*At,y:d+tt*Math.sqrt(Math.max(0,1-Ht*Ht)),z:C+O*At})}const Lt=-O/V,te=k/V,Ut=!t,$=Ut?.92:0;for(let ot=0;ot<ht;ot++){const At=nt[ot],Ht=nt[ot+1],$t=Ht.x-At.x,he=Ht.y-At.y,Vt=Ht.z-At.z,ce=Math.hypot($t,he,Vt)||1,ve=Math.atan2($t,Vt),me=-Math.atan2(he,Math.hypot($t,Vt)),Ne=(At.x+Ht.x)*.5,Me=(At.y+Ht.y)*.5,Xe=(At.z+Ht.z)*.5,je={x:Ne+Lt*$,y:Me,z:Xe+te*$,sx:.62,sy:.15,sz:ce*1.08,rx:me,ry:ve,rz:0},Ye={x:Ne+Lt*$,y:Me+.12,z:Xe+te*$,sx:.95,sy:.22,sz:ce*1.06,rx:me,ry:ve,rz:0};if(q==="gold"?(o.push(je),c.push(Ye)):(r.push(je),a.push(Ye)),Ut){const $e={...je,x:Ne-Lt*$,z:Xe-te*$,sx:.5,sy:.12},F={...Ye,x:Ne-Lt*$,z:Xe-te*$,sx:.78,sy:.18};q==="gold"?(r.push($e),a.push(F)):(o.push($e),c.push(F))}}const at=t?4:3;for(let ot=1;ot<ht;ot++){if(ot%at!==0)continue;const At=nt[ot-1],Ht=nt[ot],$t=nt[ot],he=Ht.x-At.x,Vt=Ht.y-At.y,ce=Ht.z-At.z,ve=Math.atan2(he,ce),me=-Math.atan2(Vt,Math.hypot(he,ce)),Ne=.92+E1(ot+p,7)*.28,Me={x:$t.x,y:$t.y,z:$t.z,sx:Ne,sy:Ne,sz:Ne,rx:me,ry:ve,rz:0};(ot+p)%2===0?l.push(Me):h.push(Me)}}const x=new nn(1,.007,t?5:8,u,Math.PI),v=new ye(1,1,1),m=new nn(1.28,.055,6,f);Ls(x,Yr(3073791,.32),i,e,3),Ls(x,Yr(15254890,.28),s,e,3),Ls(v,A1(1456196,3073791,.22),r,e,2),Ls(v,A1(3812374,15254890,.2),o,e,2),Ls(v,Yr(3073791,.42),a,e,4),Ls(v,Yr(15254890,.36),c,e,4),Ls(m,Yr(8317170,.38),l,e,4),Ls(m,Yr(16762970,.34),h,e,4)}function Vi(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Jd(n,t,e){return new ut({color:n,roughness:.2,metalness:.36,emissive:t,emissiveIntensity:e,iridescence:.64,iridescenceIOR:1.31,iridescenceThicknessRange:[90,380],clearcoat:.48,clearcoatRoughness:.26,transparent:!1})}function B4(n){switch(n){case"bridge":case"canal":case"market":return"cyan";case"foundry":case"archive":case"overlook":case"grove":case"wild":return"gold";default:return"violet"}}function qr(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,o.rz),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function H4(n,t){return t?3:4+Math.min(4,Math.floor(Vi(n,21)*5))}function G4(n,t){const e=new _t;e.name="facets",n.add(e);const i=Jd(666680,1595496,.14),s=Jd(2892306,5914656,.13),r=Jd(1314850,3286102,.12),o=[],a=[],c=[],l=[],h=[],d=[];for(let x=0;x<mt.length;x++){const v=mt[x];if(Math.hypot(v.x,v.z)<90)continue;const m=H4(x,t),p=B4(v.kind),w=p==="cyan"?o:p==="gold"?c:h,S=p==="cyan"?a:p==="gold"?l:d;for(let g=0;g<m;g++){const M=x*17+g*3,y=g/m*Math.PI*2+Vi(M,2)*.7,R=14+Vi(M,4)*24,_=v.x+Math.cos(y)*R,b=v.z+Math.sin(y)*R;if(Math.hypot(_,b)<90)continue;const A=.6+Vi(M,6)*1.2,C=.6+Vi(M,8)*1.2,E=.6+Vi(M,10)*1.2,U={x:_,y:.4+Vi(M,12)*2.6,z:b,sx:A,sy:C,sz:E,rx:(Vi(M,14)-.5)*.9,ry:Vi(M,16)*Math.PI*2,rz:(Vi(M,18)-.5)*.7};Vi(M,20)>.46?S.push(U):w.push(U)}}const u=new xn(1,0),f=new Wa(1,0);qr(u,i,o,e),qr(f,i,a,e),qr(u,s,c,e),qr(f,s,l,e),qr(u,r,h,e),qr(f,r,d,e)}function C1(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Qd(n){return mt.find(t=>t.kind===n)??null}function $4(n){return n?new Ue({color:4114656,transparent:!0,opacity:.28,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1}):new ut({color:3844288,roughness:.12,metalness:.04,transmission:.58,thickness:.38,ior:1.33,transparent:!0,opacity:.28,depthWrite:!1,depthTest:!0,side:_e,emissive:1456196,emissiveIntensity:.1,fog:!0})}function P1(n,t,e,i,s,r,o){const a=e-n,c=i-t,l=Math.hypot(a,c)||1,h=-c/l,d=a/l,u=o.length===0?0:1;for(let f=u;f<=r;f++){const x=f/r,v=Math.sin(x*Math.PI);o.push(n+a*x+h*v*s,t+c*x+d*v*s)}}function V4(n,t){const e=new _t;e.name="water",n.add(e);const i=Qd("canal"),s=Qd("market"),r=Qd("foundry"),o=new Zt,a=[],c=t?1:2;if(!i||!s||!r)return{tick(){}};const l=t?10:16,h=[];P1(i.x,i.z,s.x,s.z,70,l,h),P1(s.x,s.z,r.x,r.z,70,l,h);const d=h.length/2;if(d<2)return{tick(){}};const u=.78,f=new cs(1,1);f.rotateX(-Math.PI/2);const x=$4(t),v=c===1?[0]:[-4.4,4.4],m=t?12.4:7.2;for(let p=0;p<c;p++){const w=v[p],S=d-1,g=new oe(f,x,S);g.castShadow=!1,g.receiveShadow=!1,g.frustumCulled=!0,g.renderOrder=1;const M=new Float32Array(S),y=new Float32Array(S),R=new Float32Array(S),_=new Float32Array(S),b=new Float32Array(S),A=new Float32Array(S),C=new Float32Array(S);for(let E=0;E<S;E++){const U=h[E*2],k=h[E*2+1],O=h[(E+1)*2],V=h[(E+1)*2+1],W=O-U,Y=V-k,tt=Math.hypot(W,Y)||1,q=-Y/tt,ht=W/tt;M[E]=(U+O)*.5+q*w,y[E]=u,R[E]=(k+V)*.5+ht*w,_[E]=m*(.92+C1(E+p,3)*.16),b[E]=tt*1.08,A[E]=Math.atan2(W,Y),C[E]=C1(E+p*17,9)*Math.PI*2,o.position.set(M[E],y[E],R[E]),o.rotation.set(0,A[E],0),o.scale.set(_[E],1,b[E]),o.updateMatrix(),g.setMatrixAt(E,o.matrix)}g.instanceMatrix.needsUpdate=!0,e.add(g),a.push({mesh:g,x:M,y,z:R,sx:_,sz:b,ry:A,phase:C,n:S})}return{tick(p){for(let w=0;w<a.length;w++){const S=a[w],g=S.mesh;for(let M=0;M<S.n;M++){const y=S.phase[M],R=Math.sin(p*.48+y)*.055,_=1+Math.sin(p*.36+y*.7)*.038;o.position.set(S.x[M],S.y[M]+R,S.z[M]),o.rotation.set(0,S.ry[M],0),o.scale.set(S.sx[M]*_,1,S.sz[M]),o.updateMatrix(),g.setMatrixAt(M,o.matrix)}g.instanceMatrix.needsUpdate=!0}}}}function nr(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function W4(n){return mt.find(t=>t.kind===n)??null}function I1(n,t){return new Ue({color:n,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}const Cg=1.5,X4=8,TS=X4-Cg;function z1(n,t,e,i,s,r,o){const a=new oe(t,e,s);a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!0,a.renderOrder=3;const c=new Float32Array(s),l=new Float32Array(s),h=new Float32Array(s),d=new Float32Array(s),u=new Float32Array(s),f=new Float32Array(s),x=new Float32Array(s),v=new Float32Array(s);for(let m=0;m<s;m++){const p=(m+r*.17)/8*Math.PI*2+nr(m,r+2)*.42,w=50+nr(m,r+4)*8;c[m]=i.x+Math.cos(p)*w,l[m]=i.z+Math.sin(p)*w;const S=.28+nr(m,r+6)*.32;h[m]=S,d[m]=S*(1.35+nr(m,r+8)*.55),u[m]=S,f[m]=nr(m,r+11),x[m]=.042+nr(m,r+13)*.038,v[m]=.35+nr(m,r+17)*.7;const g=f[m];o.position.set(c[m],Cg+g*TS,l[m]),o.rotation.set(g*.5,p,.12),o.scale.set(h[m],d[m],u[m]),o.updateMatrix(),a.setMatrixAt(m,o.matrix)}return a.instanceMatrix.needsUpdate=!0,n.add(a),{mesh:a,x:c,z:l,sx:h,sy:d,sz:u,phase:f,speed:x,wob:v,n:s}}function D1(n,t,e){const i=n.mesh;for(let s=0;s<n.n;s++){let r=n.phase[s]+t*n.speed[s];r-=Math.floor(r);const o=n.wob[s];e.position.set(n.x[s]+Math.sin(t*.62+s*1.17)*o,Cg+r*TS,n.z[s]+Math.cos(t*.48+s*.91)*o),e.rotation.set(r*.55,t*.22+s*.4,.1);const a=1-r*.28;e.scale.set(n.sx[s]*a,n.sy[s]*(.82+r*.4),n.sz[s]*a),e.updateMatrix(),i.setMatrixAt(s,e.matrix)}i.instanceMatrix.needsUpdate=!0}function Y4(n,t){const e=new _t;e.name="heat",n.add(e);const i=W4("foundry");if(!i)return{tick(){}};const s=t?4:8,r=t?2:4,o=new xn(1,0),a=new Zt,c=z1(e,o,I1(13934672,.22),i,s,5,a),l=z1(e,o,I1(14708776,.22),i,r,19,a);return{tick(h){D1(c,h,a),D1(l,h,a)}}}function Os(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}const L1=[["zone-canal","zone-market"],["zone-market","zone-foundry"],["zone-foundry","zone-grove"],["zone-wild","zone-bridge"],["zone-bridge","zone-gate"],["zone-gate","zone-beacon"],["zone-gate","zone-terrace"],["zone-terrace","zone-ring"],["zone-archive","zone-market"],["zone-archive","zone-overlook"]];function q4(n,t){return new Ue({color:n,transparent:!0,opacity:t,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}function tf(n,t){return Math.hypot(n,t)<90}function Z4(n,t){return mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.58)}function K4(n){return n?4:6+Math.min(4,Math.floor(Os(7,21)*5))}function j4(n,t){const e=new _t;e.name="mist",n.add(e);const i=new Map(mt.map(l=>[l.id,l])),s=K4(t),r=new cs(1,1);r.rotateX(-Math.PI/2);const o=799552,a=1446440;let c=0;for(let l=0;l<L1.length&&c<s;l++){const h=L1[l],d=i.get(h[0]),u=i.get(h[1]);if(!d||!u||tf(d.x,d.z)||tf(u.x,u.z))continue;const f=.44+Os(l,5)*.12,x=u.x-d.x,v=u.z-d.z,m=Math.hypot(x,v)||1,p=-v/m,w=x/m,S=(Os(l,9)-.5)*42,g=d.x+x*f+p*S,M=d.z+v*f+w*S;if(tf(g,M)||Z4(g,M))continue;const y=.07+Os(l,13)*.04,R=Os(l,3)>.5?o:a,_=new yt(r,q4(R,y)),b=96+Os(l,17)*84;_.position.set(g,.35,M),_.rotation.y=Os(l,11)*Math.PI*2,_.scale.set(b,1,b*(.68+Os(l,19)*.44)),_.castShadow=!1,_.receiveShadow=!1,_.frustumCulled=!0,_.renderOrder=-1,e.add(_),c+=1}}function J4(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function N1(n){return mt.find(t=>t.kind===n)??null}const ef=[["canal","market"],["market","foundry"],["wild","bridge"],["bridge","gate"],["terrace","ring"]],Q4=.08,tI=.12,eI=14;function nI(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function iI(n,t){const e=new _t;e.name="trails",n.add(e);const i=[],s=[];for(let a=0;a<ef.length;a++){const c=N1(ef[a][0]),l=N1(ef[a][1]);if(!c||!l){s.push(0);continue}if(Math.hypot(c.x,c.z)<90||Math.hypot(l.x,l.z)<90){s.push(0);continue}const h=l.x-c.x,d=l.z-c.z,u=Math.hypot(h,d)||1,f=Math.min(.28,c.radius*.62/u),x=Math.min(.28,l.radius*.62/u),v=c.x+h*f,m=c.z+d*f,p=l.x-h*x,w=l.z-d*x,S=p-v,g=w-m,M=Math.hypot(S,g)||1,y=Math.atan2(S,g),R=Math.max(2,Math.round(M/eI)),_=M/R;let b=0;for(let A=0;A<R;A++){if(t&&A%2===1)continue;const C=(A+.5)/R,E=v+S*C,U=m+g*C;if(Math.hypot(E,U)<90)continue;const k=4+J4(A+a*17,5)*2;i.push({x:E,y:Q4,z:U,sx:k,sy:tI,sz:_*.94,ry:y}),b+=1}s.push(b)}const r=new ye(1,1,1),o=new ut({color:466472,roughness:.38,metalness:.28,emissive:1729912,emissiveIntensity:.14,iridescence:.28,iridescenceIOR:1.3,clearcoat:.22,clearcoatRoughness:.42,transparent:!1});nI(r,o,i,e),e.userData.segmentCounts={"canal-join":s[0]??0,"join-foundry":s[1]??0,"wild-bridge":s[2]??0,"bridge-gate":s[3]??0,"terrace-ring":s[4]??0,total:i.length}}function sI(n){return mt.find(t=>t.kind===n)??null}function rI(n,t){return new Ue({color:n,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}function oI(n,t){const e=new _t;e.name="beam",n.add(e);const i=sI("beacon");if(!i)return{tick(){}};const s=t?.5:.7,r=t?36:48,o=r*.5,a=t?8:12,c=new ge(s,s,r,a,1,!0),l=rI(13934672,.16),h=new oe(c,l,1);h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!0,h.renderOrder=4;const d=new Zt;return d.position.set(i.x,o,i.z),d.scale.set(1,1,1),d.updateMatrix(),h.setMatrixAt(0,d.matrix),h.instanceMatrix.needsUpdate=!0,e.add(h),{tick(u){const f=(Math.sin(u*1.15)+1)*.5;d.scale.y=.95+f*.1,d.updateMatrix(),h.setMatrixAt(0,d.matrix),h.instanceMatrix.needsUpdate=!0,l.opacity=.12+f*.1}}}function nf(n){return mt.find(t=>t.kind===n)??null}function aI(){return new ut({color:1456196,roughness:.18,metalness:.42,emissive:3073791,emissiveIntensity:.2,iridescence:.48,iridescenceIOR:1.32,clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function cI(n,t){const e=new _t;e.name="discs",n.add(e);const i=t?1:2,s=nf("dock"),r=nf("market"),o=nf("gate"),a=[];if(s)for(let f=0;f<i;f++){const x=f*Math.PI+.62,v=i===1?0:18;a.push({x:s.x+Math.cos(x)*v,z:s.z+Math.sin(x)*v,r:5+(i===1?1.4:f===0?2:.6)})}else{const f=[r,o].filter(x=>!!x);for(let x=0;x<i&&x<f.length;x++){const v=f[x];a.push({x:v.x,z:v.z,r:5+(x===0?2:.8)})}}if(!a.length)return{tick(){}};const c=t?10:16,l=.18,h=new ge(1,1,l,c),d=aI(),u=[];for(let f=0;f<a.length;f++){const x=a[f],v=new yt(h,d);v.position.set(x.x,l*.5,x.z),v.scale.set(x.r,1,x.r),v.castShadow=!1,v.receiveShadow=!0,v.frustumCulled=!0,v.renderOrder=2,e.add(v),u.push({mesh:v,speed:.14+f*.04,phase:f*1.17})}return e.userData.discCount=u.length,{tick(f){for(let x=0;x<u.length;x++){const v=u[x];v.mesh.rotation.y=f*v.speed+v.phase}}}}function sf(n){return mt.find(t=>t.kind===n)??null}function U1(n,t,e){return new ut({color:n,roughness:.46,metalness:.28,emissive:t,emissiveIntensity:e,iridescence:.22,iridescenceIOR:1.3,clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function lI(n){return new Ue({color:3844288,transparent:!0,opacity:n,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}function Bo(n,t,e,i,s,r){if(!e.length)return;const o=new oe(n,t,e.length),a=new Zt;a.rotation.order="YXZ",e.forEach((c,l)=>{a.position.set(c.x,c.y,c.z),a.rotation.set(c.rx,c.ry,c.rz),a.scale.set(c.sx,c.sy,c.sz),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}),o.instanceMatrix.needsUpdate=!0,o.castShadow=!1,o.receiveShadow=r,o.frustumCulled=!0,o.renderOrder=s,i.add(o)}function O1(n,t,e){const i=t-n.x,s=e-n.z,r=Math.hypot(i,s)||1,o=Math.min(48,n.radius*.38);return{x:n.x+i/r*o,z:n.z+s/r*o}}function uI(n,t){const e=new _t;e.name="cisterns",n.add(e);const i=sf("canal"),s=sf("foundry"),r=sf("market"),o={canal:0,foundry:0,total:0};if(e.userData.wellCounts=o,!i)return;const a=t?12:22,c=t?5:8,l=9.6,h=.68,d=1.22,u=8.7,f=.4,x=.3,v=Math.PI/2,m=new ge(l,l,d,a,1,!0),p=new nn(l,h,c,a),w=new yi(u,a);w.rotateX(-Math.PI/2);const S=U1(466472,1729912,.1),g=U1(2761236,5783592,.1),M=lI(x),y=[],R=[],_=[],b=[],A=[],C=r?.x??0,E=r?.z??0,U=(O,V,W,Y)=>{W.push({x:O,y:d*.5,z:V,sx:1,sy:1,sz:1,rx:0,ry:0,rz:0}),Y.push({x:O,y:d,z:V,sx:1,sy:1,sz:1,rx:v,ry:0,rz:0}),A.push({x:O,y:f,z:V,sx:1,sy:1,sz:1,rx:0,ry:0,rz:0})},k=O1(i,C,E);if(U(k.x,k.z,y,R),o.canal=1,!t&&s){const O=O1(s,C,E);U(O.x,O.z,_,b),o.foundry=1}o.total=o.canal+o.foundry,Bo(m,S,y,e,2,!0),Bo(p,S,R,e,2,!0),Bo(m,g,_,e,2,!0),Bo(p,g,b,e,2,!0),Bo(w,M,A,e,1,!1)}function Ns(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function hI(n){return mt.find(t=>t.kind===n)??null}function k1(n,t,e){return new ut({color:n,roughness:.18,metalness:.4,emissive:t,emissiveIntensity:e,iridescence:.58,iridescenceIOR:1.31,iridescenceThicknessRange:[80,360],clearcoat:.5,clearcoatRoughness:.24,transparent:!1})}function F1(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,o.rz),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function B1(n,t,e){const i=[];for(let s=0;s<t;s++){const r=(s+e*.13)/t*Math.PI*2+Ns(s,e+2)*.55,o=16+Ns(s,e+4)*32,a=.32+Ns(s,e+8)*.42;i.push({x:n.x+Math.cos(r)*o,y:3+Ns(s,e+6)*4,z:n.z+Math.sin(r)*o,sx:a,sy:a*(1.12+Ns(s,e+10)*.38),sz:a,rx:.12+Ns(s,e+12)*.38,ry:r+Ns(s,e+14)*.8,rz:(Ns(s,e+16)-.5)*.4})}return i}function dI(n,t){const e=new _t;e.name="fruit",n.add(e);const i=hI("grove");if(!i)return;const s=t?3:8,r=t?2:6,o=k1(2892306,5914656,.14),a=k1(1314850,3286102,.12),c=new xn(1,0);F1(c,o,B1(i,s,5),e),F1(c,a,B1(i,r,19),e)}function fI(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function H1(n){return mt.find(t=>t.kind===n)??null}function pI(n,t,e,i,s,r,o){const a=e-n,c=i-t,l=Math.hypot(a,c)||1,h=-c/l,d=a/l,u=o.length===0?0:1;for(let f=u;f<=r;f++){const x=f/r,v=Math.sin(x*Math.PI);o.push(n+a*x+h*v*s,t+c*x+d*v*s)}}function G1(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function $1(n,t,e){return new ut({color:n,roughness:.4,metalness:.3,emissive:t,emissiveIntensity:e,iridescence:.26,iridescenceIOR:1.3,clearcoat:.2,clearcoatRoughness:.46,transparent:!1})}const mI=.9,gI=.4,xI=.28,_I=.22,V1=[.8,1.06],yI=.08,vI=.055,MI=11.2,wI=44,ol=7,SI=72;function rf(n,t){return t?n.filter((e,i)=>i%2===0):n}function of(n,t){for(let e=0;e<n.length;e++){const i=n[e];t.push({x:i.x,y:mI,z:i.z,sx:xI,sy:gI,sz:_I,ry:i.ry})}}function af(n,t){for(let e=0;e<n.length-1;e++){const i=n[e],s=n[e+1],r=s.x-i.x,o=s.z-i.z,a=Math.hypot(r,o);if(a<.5||a>ol*3.4)continue;const c=(i.x+s.x)*.5,l=(i.z+s.z)*.5,h=Math.atan2(r,o);for(let d=0;d<V1.length;d++)t.push({x:c,y:V1[d],z:l,sx:yI,sy:vI,sz:a*.98,ry:h})}}function bI(n,t){const e=new _t;e.name="rails",n.add(e);const i={left:0,right:0,back:0,total:0,rails:0};e.userData.postCounts=i;const s=H1("canal");if(!s)return;const r=H1("market"),o=[],a=[],c=[],l=[],h=[],d=s.radius*1.22;if(r){const _=[];pI(s.x,s.z,r.x,r.z,70,SI,_);const b=_.length/2;let A=0,C=-ol;for(let E=0;E<b;E++){const U=_[E*2],k=_[E*2+1];let O,V;E+1<b?(O=_[(E+1)*2]-U,V=_[(E+1)*2+1]-k):(O=U-_[(E-1)*2],V=k-_[(E-1)*2+1]);const W=Math.hypot(O,V)||1;E>0&&(A+=W);const Y=Math.hypot(U-s.x,k-s.z);if(Y<wI||Y>d||Math.hypot(U,k)<90||A-C<ol)continue;C=A;const tt=-V/W,q=O/W,ht=Math.atan2(O,V),nt=c.length,Lt=(fI(nt,4)-.5)*1.2,te=MI+Lt;c.push({x:U+tt*te,z:k+q*te,ry:ht}),l.push({x:U-tt*te,z:k-q*te,ry:ht})}}const u=r?.x??0,f=r?.z??0,x=Math.atan2(f-s.z,u-s.x),v=96,m=Math.PI*1.62,p=x+Math.PI-m*.5,w=Math.max(5,Math.round(m*v/ol));for(let _=0;_<=w;_++){const b=p+_/w*m;h.push({x:s.x+Math.cos(b)*v,z:s.z+Math.sin(b)*v,ry:b+Math.PI*.5})}const S=rf(c,t),g=rf(l,t),M=rf(h,t);of(S,o),of(g,o),of(M,o);const y=a.length;af(S,a),af(g,a),af(M,a),i.left=S.length,i.right=g.length,i.back=M.length,i.total=o.length,i.rails=a.length-y;const R=new ye(1,1,1);G1(R,$1(466472,1729912,.14),o,e),G1(R,$1(799552,2783884,.18),a,e)}function Ho(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function EI(n){return mt.find(t=>t.kind===n)??null}function W1(n,t){return new Ue({color:n,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}const Pg=8,TI=22,RS=TI-Pg,X1=52,Y1=.12;function RI(n,t){const e=t/8*Math.PI*2;return{x:n.x+Math.cos(e)*X1,z:n.z+Math.sin(e)*X1,a:e}}function q1(n,t,e,i,s,r,o){const a=s.length,c=new oe(t,e,a);c.castShadow=!1,c.receiveShadow=!1,c.frustumCulled=!0,c.renderOrder=3;const l=new Float32Array(a),h=new Float32Array(a),d=new Float32Array(a),u=new Float32Array(a),f=new Float32Array(a),x=new Float32Array(a),v=new Float32Array(a),m=new Float32Array(a);for(let p=0;p<a;p++){const w=RI(i,s[p]);l[p]=w.x,h[p]=w.z;const S=.72+Ho(p,r+6)*.58;d[p]=S,u[p]=S*(.82+Ho(p,r+8)*.36),f[p]=S,x[p]=Ho(p,r+11),v[p]=.026+Ho(p,r+13)*.028,m[p]=.55+Ho(p,r+17)*.85;const g=x[p];o.position.set(l[p],Pg+g*RS,h[p]),o.rotation.set(0,w.a,0),o.scale.set(d[p],u[p],f[p]),o.updateMatrix(),c.setMatrixAt(p,o.matrix)}return c.instanceMatrix.needsUpdate=!0,n.add(c),{mesh:c,x:l,z:h,sx:d,sy:u,sz:f,phase:x,speed:v,wob:m,n:a}}function Z1(n,t,e){const i=n.mesh;for(let s=0;s<n.n;s++){let r=n.phase[s]+t*n.speed[s];r-=Math.floor(r);const o=n.wob[s];e.position.set(n.x[s]+Math.sin(t*.38+s*1.31)*o,Pg+r*RS,n.z[s]+Math.cos(t*.31+s*.77)*o),e.rotation.set(0,t*.08+s*.7,0);const a=.72+r*.55;e.scale.set(n.sx[s]*a,n.sy[s]*(.9+r*.22),n.sz[s]*a),e.updateMatrix(),i.setMatrixAt(s,e.matrix)}i.instanceMatrix.needsUpdate=!0}function AI(n,t){const e=new _t;e.name="smoke",n.add(e);const i=EI("foundry"),s={gold:0,violet:0,total:0};if(e.userData.wispCounts=s,!i)return{tick(){}};const r=t?[0]:[0,2,4,6],o=t?[4]:[1,5];s.gold=r.length,s.violet=o.length,s.total=s.gold+s.violet;const a=t?6:10,c=new Ci(1,a,a),l=new Zt,h=q1(e,c,W1(11569736,Y1),i,r,5,l),d=q1(e,c,W1(5916792,Y1),i,o,19,l);return{tick(u){Z1(h,u,l),Z1(d,u,l)}}}function CI(){const n=ji.find(s=>s.id==="nesh"),t=n?.x??-24,e=n?.z??128,i=Math.hypot(t,e)||1;return{nx:t/i,nz:e/i}}function PI(){return new ut({color:2892306,roughness:.22,metalness:.46,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function II(){return new ut({color:1314850,roughness:.16,metalness:.4,emissive:5914656,emissiveIntensity:.16,iridescence:.58,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}const K1=1.2,bc=8,j1=.4,cf=3.1,J1=.48,lf=.07;function zI(n,t){const e=new _t;e.name="notice",n.add(e);const i=CI(),s=Math.min(96,Math.max(74,Sn.radius+36)),r=i.nx*s,o=i.nz*s,a=Math.atan2(r,o),c=new yt(new ye(K1,bc,j1),PI());if(c.position.set(r,cf+bc*.5,o),c.rotation.y=a,c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,e.add(c),!t){const h=new yt(new nn(J1,lf,8,16),II());h.rotation.x=Math.PI/2,h.position.set(r,cf+bc+lf,o),h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,e.add(h)}e.userData.steleCount=1,e.userData.sizes={w:K1,h:bc,d:j1,plazaY:cf,r:s,lensR:t?0:J1,lensTube:t?0:lf}}function uf(n){return mt.find(t=>t.kind===n)??null}function Q1(n,t,e){return new ut({color:n,roughness:.4,metalness:.32,emissive:t,emissiveIntensity:e,iridescence:.28,iridescenceIOR:1.3,clearcoat:.22,clearcoatRoughness:.46,transparent:!1})}function DI(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const Fp=18,Bp=.3,Hp=6,al=.96,Gp=12,LI=4,$p=.34,Vp=.44,t_=6.4,e_=1.9,Ec={walk:{l:Fp,h:Bp,w:Hp,y:al},pile:{rTop:$p,rBot:Vp},side:Gp};function NI(n,t){const e=new _t;e.name="pier",n.add(e);const i=uf("market"),s={walk:0,piles:0};if(e.userData.pierCounts=s,e.userData.sizes={walk:{...Ec.walk},pile:{rTop:Ec.pile.rTop,rBot:Ec.pile.rBot,n:0,h:0,y0:0},side:Ec.side},!i||Math.hypot(i.x,i.z)<90)return;const r=uf("canal"),o=uf("foundry"),a=r??o,c=a?i.x-(r?r.x:a.x):1,l=a?i.z-(r?r.z:a.z):0,h=Math.hypot(c,l)||1,d=c/h,u=l/h,f=-u,x=d,v=Math.atan2(d,u),m=i.x+f*Gp,p=i.z+x*Gp,w=new ye(Hp,Bp,Fp),S=new yt(w,Q1(2761236,1729912,.16));S.position.set(m,al,p),S.rotation.y=v,S.castShadow=!1,S.receiveShadow=!0,S.frustumCulled=!0,e.add(S),s.walk=1;const g=al;if(e.userData.sizes.walk={l:Fp,h:Bp,w:Hp,y:al},e.userData.sizes.pile={rTop:$p,rBot:Vp,n:t?0:LI,h:t?0:g,y0:0},t)return;const M=[],y=[-t_,t_],R=[-e_,e_];for(let A=0;A<y.length;A++)for(let C=0;C<R.length;C++)M.push({x:m+d*y[A]+f*R[C],y:g*.5,z:p+u*y[A]+x*R[C],sx:1,sy:1,sz:1,ry:v});const _=8,b=new ge($p,Vp,g,_);DI(b,Q1(466472,5914656,.12),M,e),s.piles=M.length}function UI(n){return mt.find(t=>t.kind===n)??null}function OI(){return new ut({color:1314850,roughness:.2,metalness:.38,emissive:5914656,emissiveIntensity:.12,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}const Qu=1.2,th=14,n_=1.2,Wp=10,Xp=.8,i_=1.2,cl=Wp*.5-Qu*.5,kI=cl*2-Qu,s_=th*.5,r_=th+Xp*.5;function FI(n,t){const e=new _t;e.name="gates",n.add(e);const i={postW:Qu,postH:th,postD:n_,lintelW:Wp,lintelH:Xp,lintelD:i_,span:cl*2,open:kI,postY:s_,lintelY:t?0:r_};e.userData.sizes=i,e.userData.postCount=0,e.userData.lintelCount=0;const s=UI("gate");if(!s||Math.hypot(s.x,s.z)<90)return;const r=Math.atan2(s.x,s.z),o=Math.cos(r),a=Math.sin(r),c=OI(),l=new Zt;l.rotation.order="YXZ";const h=new ye(Qu,th,n_),d=new oe(h,c,2);d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!0,d.renderOrder=2;for(let u=0;u<2;u++){const f=u===0?-1:1;l.position.set(s.x+f*cl*o,s_,s.z-f*cl*a),l.rotation.set(0,r,0),l.scale.set(1,1,1),l.updateMatrix(),d.setMatrixAt(u,l.matrix)}if(d.instanceMatrix.needsUpdate=!0,e.add(d),e.userData.postCount=2,!t){const u=new yt(new ye(Wp,Xp,i_),c);u.position.set(s.x,r_,s.z),u.rotation.y=r,u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,e.add(u),e.userData.lintelCount=1}}function o_(n){return mt.find(t=>t.kind===n)??null}function BI(){const n=ji.find(t=>t.id==="voss");return{vx:n?.x??-288,vz:n?.z??-328}}function HI(){return new ut({color:2892306,roughness:.28,metalness:.42,emissive:5783592,emissiveIntensity:.14,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function a_(){return new ut({color:3812374,roughness:.18,metalness:.52,emissive:13934672,emissiveIntensity:.22,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}const Go=6,hf=.4,df=3,ff=1.1,pf=22,Tc=3.6,c_=.14,GI=.1,mf=.32,l_=.38;function $I(n,t){const e=new _t;e.name="stall",n.add(e);const i=o_("market");if(!i){e.userData.stallCount=0,e.userData.sizes={w:Go,h:hf,d:df,y:ff,postH:0,postR:0,bulbR:0,offset:0};return}const s=o_("canal"),r=BI(),o=(s?.x??i.x+1)-i.x,a=(s?.z??i.z)-i.z,c=Math.hypot(o,a)||1,l=o/c,h=a/c,d=-h,u=l,f=r.vx-i.x,x=r.vz-i.z,v=d*f+u*x>=0?1:-1,m=i.x+d*v*pf,p=i.z+u*v*pf,w=Math.atan2(m-i.x,p-i.z),S=new yt(new ye(Go,hf,df),HI());if(S.position.set(m,ff,p),S.rotation.y=w,S.castShadow=!1,S.receiveShadow=!0,S.frustumCulled=!0,e.add(S),!t){const M=m+l*(Go*.5+l_),y=p+h*(Go*.5+l_),R=new yt(new ge(GI,c_,Tc,8),a_());R.position.set(M,Tc*.5,y),R.castShadow=!1,R.receiveShadow=!0,R.frustumCulled=!0,e.add(R);const _=new yt(new xn(mf,0),a_());_.position.set(M,Tc+mf*.45,y),_.castShadow=!1,_.receiveShadow=!0,_.frustumCulled=!0,e.add(_)}e.userData.stallCount=1,e.userData.sizes={w:Go,h:hf,d:df,y:ff,postH:t?0:Tc,postR:t?0:c_,bulbR:t?0:mf,offset:pf}}function VI(n){return mt.find(t=>t.kind===n)??null}function WI(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function XI(){return new ut({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:.16,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function u_(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}function YI(n,t,e,i,s){const r=Math.cos(s),o=Math.sin(s);return{x:n+e*r+i*o,z:t-e*o+i*r}}const AS=8,Yp=.2,CS=1.4,gf=1.2,xf=1.5,qI=3,ZI=1,PS=.46,qp=.62,IS=.12,KI=6,jI=4,JI=[-2.4,2.2,-1.8,1.6,-2.6,2.4],QI=[-2.8,-1,1,2.8],tz=.16,ez={w:AS,h:Yp,d:CS,y0:0,gap:0,tabletW:PS,tabletH:qp,tabletD:IS,shelfCount:0,tabletCount:0};function nz(n,t){const e=new _t;e.name="shelves",n.add(e);const i={...ez};e.userData.sizes=i,e.userData.shelfCount=0,e.userData.tabletCount=0;const s=VI("archive");if(!s||Math.hypot(s.x,s.z)<90)return;const r=Math.atan2(s.x,s.z),o=s.x,a=s.z,c=t?ZI:qI,l=t?jI:KI,h=t?QI:JI,d=[];for(let f=0;f<c;f++)d.push({x:o,y:gf+f*xf,z:a,ry:r});u_(new ye(AS,Yp,CS),WI(),d,e);const u=[];for(let f=0;f<l;f++){const x=t?0:Math.floor(f/2),v=gf+x*xf,m=(f%2===0?1:-1)*tz,p=YI(o,a,h[f]??0,m,r);u.push({x:p.x,y:v+Yp*.5+qp*.5,z:p.z,ry:r})}u_(new ye(PS,qp,IS),XI(),u,e),i.y0=gf,i.gap=c>1?xf:0,i.shelfCount=d.length,i.tabletCount=u.length,e.userData.shelfCount=d.length,e.userData.tabletCount=u.length}function iz(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function sz(n){return mt.find(t=>t.kind===n)??null}function rz(){return new ut({color:1314850,roughness:.24,metalness:.32,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function oz(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const h_=10,d_=.4,_f=2.2,yf=.2,vf=.4,f_=52,p_=90;function az(n){return n?3:4+Math.min(2,Math.floor(iz(7,21)*3))}function cz(n,t){const e=new _t;e.name="steps",n.add(e);const i=az(t),s={n:0,want:i,y0:yf,rise:vf};e.userData.stepCounts=s,e.userData.sizes={w:h_,h:d_,d:_f,y0:yf,rise:vf,outer:f_};const r=sz("terrace");if(!r||Math.hypot(r.x,r.z)<p_)return;const o=Math.hypot(r.x,r.z)||1,a=r.x/o,c=r.z/o,l=Math.atan2(a,c),h=[];for(let u=0;u<i;u++){const f=f_-u*_f,x=r.x-a*f,v=r.z-c*f;Math.hypot(x,v)<p_||h.push({x,y:yf+u*vf,z:v,sx:1,sy:1,sz:1,ry:l})}const d=new ye(h_,d_,_f);oz(d,rz(),h,e),s.n=h.length}const Ig=6,ed=.45,Zp=ed,zS=.35,DS=Ig-ed-.15,LS=.28,Kp=.2,NS=.36,US=.68,di={x:0,y:Zp,z:0,rimR:Ig,tube:ed,rimY:Zp,discR:DS,discY:zS,discOp:LS,discOpMin:Kp,discOpMax:NS,breath:US};function lz(){return new ut({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function uz(n){return new Ue({color:3844288,transparent:!0,opacity:n,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}function hz(n,t){const e=new _t;e.name="fountain",n.add(e);const i=t?12:22,s=t?5:8,r=new nn(Ig,ed,s,i),o=new yt(r,lz());o.rotation.x=Math.PI/2,o.position.set(0,Zp,0),o.castShadow=!1,o.receiveShadow=!0,o.frustumCulled=!0,o.renderOrder=2,e.add(o);const a=new yi(DS,i);a.rotateX(-Math.PI/2);const c=uz(LS),l=new yt(a,c);l.position.set(0,zS,0),l.castShadow=!1,l.receiveShadow=!1,l.frustumCulled=!0,l.renderOrder=1,e.add(l);const h=NS-Kp;return e.userData.basinCount=1,e.userData.rimCount=1,e.userData.discCount=1,e.userData.breathing=!t,e.userData.sizes={x:di.x,y:di.y,z:di.z,rimR:di.rimR,tube:di.tube,rimY:di.rimY,discR:di.discR,discY:di.discY,discOp:di.discOp,discOpMin:t?di.discOp:di.discOpMin,discOpMax:t?di.discOp:di.discOpMax,breath:t?0:di.breath,segs:i,tubeSeg:s},t?{tick(){}}:{tick(d){const u=(Math.sin(d*US)+1)*.5;c.opacity=Kp+u*h}}}const m_=4.2,jp=.18,g_=jp,x_=3.6,Mf=.22,__=.22,wf=Math.min(84,Math.max(78,Sn.radius+30));function dz(){const n=ji.find(s=>s.id==="nesh"),t=n?.x??-24,e=n?.z??128,i=Math.hypot(t,e)||1;return{nx:t/i,nz:e/i}}function fz(){return new ut({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function pz(n){return new ut({color:3073791,roughness:.16,metalness:.22,emissive:1456196,emissiveIntensity:.18,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!0,opacity:n,depthWrite:!1,side:_e})}function mz(n,t){const e=new _t;e.name="lens",n.add(e);const i=dz(),s=i.nx*wf,r=i.nz*wf,o=t?12:22,a=t?5:8,c=new yi(x_,o);c.rotateX(-Math.PI/2);const l=new yt(c,pz(__));if(l.position.set(s,Mf,r),l.castShadow=!1,l.receiveShadow=!1,l.frustumCulled=!0,l.renderOrder=1,e.add(l),!t){const h=new yt(new nn(m_,jp,a,o),fz());h.rotation.x=Math.PI/2,h.position.set(s,g_,r),h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,h.renderOrder=2,e.add(h)}e.userData.lensCount=1,e.userData.torusCount=t?0:1,e.userData.discCount=1,e.userData.sizes={x:s,y:Mf,z:r,torusR:t?0:m_,tube:t?0:jp,torusY:t?0:g_,discR:x_,discY:Mf,discOp:__,apronR:wf,segs:o,tubeSeg:t?0:a}}function gz(n){return mt.find(t=>t.kind===n)??null}function xz(){return new ut({color:1314850,roughness:.24,metalness:.32,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function _z(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const y_=1.1,v_=2.4,M_=.7,Sf=1.2,Rc=22,w_=90,yz=8,vz=5;function Mz(n){return n?vz:yz}function wz(n,t){const e=new _t;e.name="chorus",n.add(e);const i=Mz(t),s={n:0,want:i,r:Rc,y:Sf};e.userData.stoneCounts=s,e.userData.sizes={w:y_,h:v_,d:M_,y:Sf,r:Rc};const r=gz("ring");if(!r||Math.hypot(r.x,r.z)<w_)return;const o=Math.PI*2/i,c=Math.atan2(-r.z,-r.x)+o*.5,l=[];for(let d=0;d<i;d++){const u=c+d*o,f=r.x+Math.cos(u)*Rc,x=r.z+Math.sin(u)*Rc;Math.hypot(f,x)<w_||l.push({x:f,y:Sf,z:x,ry:Math.atan2(f-r.x,x-r.z)})}const h=new ye(y_,v_,M_);_z(h,xz(),l,e),s.n=l.length}function Sz(n){return mt.find(t=>t.kind===n)??null}function bz(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function S_(){return new ut({color:3812374,roughness:.16,metalness:.5,emissive:13934672,emissiveIntensity:.18,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}function Ez(n,t,e,i,s){const r=Math.cos(s),o=Math.sin(s);return{x:n+e*r+i*o,z:t-e*o+i*r}}const zg=4.2,OS=.55,Dg=2.2,b_=.55,Tz=90,Ac=1.72,E_=.07,Rz=.05,Az=zg*.42,Cz=Dg*.38,bf=.28,T_=.055,Pz={w:zg,h:OS,d:Dg,y:0,postH:0,postR:0,lensR:0,lensTube:0,seatCount:0,postCount:0};function Iz(n,t){const e=new _t;e.name="seat",n.add(e);const i={...Pz};e.userData.sizes=i,e.userData.seatCount=0,e.userData.postCount=0;const s=Sz("overlook");if(!s||Math.hypot(s.x,s.z)<Tz)return;const r=s.x,o=s.z,a=Math.atan2(r,o),c=new yt(new ye(zg,OS,Dg),bz());if(c.position.set(r,b_,o),c.rotation.y=a,c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,e.add(c),i.y=b_,i.seatCount=1,e.userData.seatCount=1,!t){const h=Ez(r,o,Az,Cz,a),d=new yt(new ge(Rz,E_,Ac,10),S_());d.position.set(h.x,Ac*.5,h.z),d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!0,e.add(d);const u=new yt(new nn(bf,T_,8,16),S_());u.position.set(h.x,Ac+bf*.15,h.z),u.rotation.y=a,u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,e.add(u),i.postH=Ac,i.postR=E_,i.lensR=bf,i.lensTube=T_,i.postCount=1,e.userData.postCount=1}}function R_(n){return mt.find(t=>t.kind===n)??null}function zz(n){return new Ue({color:4114656,transparent:!0,opacity:n,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}const kS=6,FS=.08,Jp=2,ll=3.2,BS=.6,HS=.18,Qp=.12,GS=.24,$S=.92,VS=4,Dz=2,Lz=90,ys={w:kS,h:FS,d:Jp,yTop:ll,yBot:BS,op:HS,opMin:Qp,opMax:GS,fall:$S};function Nz(n){return n?Dz:VS}function Uz(n,t){const e=new _t;e.name="cascade",n.add(e);const i=Nz(t),s=GS-Qp;e.userData.planeCount=0,e.userData.sizes={w:ys.w,h:ys.h,d:ys.d,yTop:ys.yTop,yBot:ys.yBot,op:ys.op,opMin:ys.opMin,opMax:ys.opMax,fall:ys.fall,n:0,want:i};const r=R_("canal");if(!r)return{tick(){}};if(Math.hypot(r.x,r.z)<Lz)return{tick(){}};const o=R_("market"),a=(o?.x??0)-r.x,c=(o?.z??0)-r.z,l=Math.hypot(a,c)||1,h=a/l,d=c/l,u=Math.atan2(h,d),f=(VS-1)*Jp,x=new ye(kS,FS,Jp),v=zz(HS),m=new oe(x,v,i);m.castShadow=!1,m.receiveShadow=!1,m.frustumCulled=!0,m.renderOrder=3;const p=new Zt;p.rotation.order="YXZ";for(let w=0;w<i;w++){const S=i===1?0:w/(i-1),g=S*f;p.position.set(r.x+h*g,ll+(BS-ll)*S,r.z+d*g),p.rotation.set(0,u,0),p.scale.set(1,1,1),p.updateMatrix(),m.setMatrixAt(w,p.matrix)}return m.instanceMatrix.needsUpdate=!0,e.add(m),e.userData.planeCount=i,e.userData.sizes.n=i,e.userData.sizes.x=r.x,e.userData.sizes.y=ll,e.userData.sizes.z=r.z,e.userData.sizes.along=f,{tick(w){const S=(Math.sin(w*$S)+1)*.5;v.opacity=Qp+S*s}}}function A_(n){return mt.find(t=>t.kind===n)??null}function Oz(){return new ut({color:466472,roughness:.22,metalness:.36,emissive:1729912,emissiveIntensity:.16,iridescence:.36,iridescenceIOR:1.3,iridescenceThicknessRange:[90,340],clearcoat:.32,clearcoatRoughness:.34,transparent:!1})}function kz(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Cc=3.2,ul=.16,Ef=ul*.5,Pc=38,C_=90,WS=3,Fz=1;function Bz(n){return n?Fz:WS}function Hz(n,t){const e=new _t;e.name="veins",n.add(e);const i=Bz(t),s={n:0,want:i,r:Cc,h:ul,ring:Pc,y:Ef};e.userData.padCounts=s,e.userData.sizes={r:Cc,h:ul,y:Ef,ring:Pc};const r=A_("wild");if(!r||Math.hypot(r.x,r.z)<C_)return;const o=A_("bridge"),a=o?o.x-r.x:-r.x,c=o?o.z-r.z:-r.z,l=Math.atan2(c,a),h=Math.PI*2/WS,d=[];for(let x=0;x<i;x++){const v=l+x*h,m=r.x+Math.cos(v)*Pc,p=r.z+Math.sin(v)*Pc;Math.hypot(m,p)<C_||d.push({x:m,y:Ef,z:p,ry:Math.atan2(m-r.x,p-r.z)})}const u=t?10:16,f=new ge(Cc,Cc,ul,u);kz(f,Oz(),d,e),s.n=d.length}function P_(n){return mt.find(t=>t.kind===n)??null}function Gz(){return new ut({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function $z(){return new ut({color:3812374,roughness:.22,metalness:.48,emissive:13934672,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function I_(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const Zr=4.2,Tf=.12,Ic=.22,Rf=3.6,Af=90,Vz=5,Wz=3;function Xz(n){return n?Wz:Vz}function Yz(n){return{n:0,posts:0,bulbs:0,want:n}}function qz(n,t){const e=new _t;e.name="lamps",n.add(e);const i=Xz(t),s=Yz(i);e.userData.lampCounts=s,e.userData.sizes={postH:Zr,postR:Tf,bulbR:Ic,side:Rf,yPost:Zr*.5,yBulb:Zr+Ic*.55};const r=P_("canal"),o=P_("market");if(!r||!o||Math.hypot(r.x,r.z)<Af||Math.hypot(o.x,o.z)<Af)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*.62/l),d=Math.min(.28,o.radius*.62/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.hypot(m,p)||1,S=m/w,M=-(p/w),y=S,R=Math.atan2(m,p),_=[],b=[],A=Zr*.5,C=Zr+Ic*.55;for(let U=0;U<i;U++){const k=(U+.5)/i,O=U%2===0?1:-1,V=u+m*k+M*Rf*O,W=f+p*k+y*Rf*O;Math.hypot(V,W)<Af||(_.push({x:V,y:A,z:W,ry:R}),b.push({x:V,y:C,z:W,ry:R}))}const E=t?6:8;I_(new ge(Tf,Tf,Zr,E),Gz(),_,e),I_(new Ci(Ic,E,E),$z(),b,e),s.n=_.length,s.posts=_.length,s.bulbs=b.length}function z_(n){return mt.find(t=>t.kind===n)??null}function Zz(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1,side:_e})}function Kz(n){return new Ue({color:3844288,transparent:!0,opacity:n,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}const XS=3.4,YS=1.12,qS=.22,D_=2.6,L_=.5,N_=.2,t0=-16,or=20,U_=90;function jz(n,t,e){return[new xt(.06,0),new xt(n*.48,.05),new xt(n*.86,t*.38),new xt(n,t),new xt(n-e,t),new xt(n*.72,t*.4),new xt(n*.32,e),new xt(.06,e*.65)]}const Jz={r:XS,h:YS,wall:qS,discR:0,discY:0,discOp:0,along:t0,side:or,x:0,y:0,z:0,bowlCount:0,discCount:0,segs:0};function Qz(n,t){const e=new _t;e.name="cradle",n.add(e);const i={...Jz};e.userData.sizes=i,e.userData.bowlCount=0,e.userData.discCount=0,e.userData.cradleCount=0;const s=z_("canal");if(!s||Math.hypot(s.x,s.z)<U_)return;const r=z_("market"),o=(r?.x??0)-s.x,a=(r?.z??0)-s.z,c=Math.hypot(o,a)||1,l=o/c,h=a/c,d=-h,u=l,f=Math.hypot(s.x+d*or,s.z+u*or),x=Math.hypot(s.x-d*or,s.z-u*or),v=f>=x?1:-1,m=s.x+l*t0+d*or*v,p=s.z+h*t0+u*or*v;if(Math.hypot(m,p)<U_)return;const w=t?10:20,S=new yt(new Mo(jz(XS,YS,qS),w),Zz());if(S.position.set(m,0,p),S.castShadow=!1,S.receiveShadow=!0,S.frustumCulled=!0,S.renderOrder=2,e.add(S),i.x=m,i.y=0,i.z=p,i.bowlCount=1,i.segs=w,e.userData.bowlCount=1,e.userData.cradleCount=1,t)return;const g=new yi(D_,w);g.rotateX(-Math.PI/2);const M=new yt(g,Kz(N_));M.position.set(m,L_,p),M.castShadow=!1,M.receiveShadow=!1,M.frustumCulled=!0,M.renderOrder=1,e.add(M),i.discR=D_,i.discY=L_,i.discOp=N_,i.discCount=1,e.userData.discCount=1}function Lg(n){return mt.find(t=>t.kind===n)??null}function tD(){return new ut({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function eD(){return new ut({color:3812374,roughness:.22,metalness:.46,emissive:5914656,emissiveIntensity:.16,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.26,transparent:!1,side:_e})}function nD(){return new ut({color:1314850,roughness:.2,metalness:.38,emissive:3286102,emissiveIntensity:.14,iridescence:.56,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1,side:_e})}const Ng=.08,nd=3.6,ZS=1.4,_a=5.2,e0=.11,eh=.86,Ug=.08,iD=.12,Og=_a-Ug,sD=Og-nd*.5,n0=Math.min(72,Math.max(64,Sn.radius+16)),O_=38,k_=16,i0=.04,rD=.82,KS=3,jS=1,zi={t:Ng,h:nd,w:ZS,postH:_a,postR:e0,armL:eh,hangY:Og,bannerY:sD,plazaR:n0,sway:i0,nFine:KS,nCoarse:jS};function oD(n){return n?jS:KS}function aD(){const n=Lg("market"),t=n?.x??-300,e=n?.z??-340,i=Math.hypot(t,e)||1,s=t/i*n0,r=e/i*n0;return{x:s,z:r,yaw:Math.atan2(s,r),violet:!1}}function cD(){const n=Lg("market");if(!n||Math.hypot(n.x,n.z)<90)return null;const t=Math.hypot(n.x,n.z)||1,e=n.x-n.x/t*O_,i=n.z-n.z/t*O_;return{x:e,z:i,yaw:Math.atan2(e,i),violet:!1}}function lD(){const n=Lg("gate");if(!n||Math.hypot(n.x,n.z)<90)return null;const t=Math.atan2(n.x,n.z),e=n.x+k_*Math.cos(t),i=n.z-k_*Math.sin(t);return{x:e,z:i,yaw:t,violet:!0}}function uD(n,t,e,i,s,r,o,a){const c=new _t;c.position.set(n.x,0,n.z),c.rotation.y=n.yaw,o.add(c);const l=new yt(e.post,i);l.position.set(0,_a*.5,0),l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,c.add(l);const h=new yt(e.arm,i);h.position.set(eh*.5,_a-Ug*.5,0),h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,h.renderOrder=2,c.add(h);const d=new _t;d.position.set(eh,Og,0),c.add(d);const u=new yt(e.cloth,n.violet?r:s);u.position.set(Ng*.5,-nd*.5,0),u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,d.add(u),a.push({hang:d,phase:t*1.37,speed:rD+t*.11})}function hD(n,t){const e=new _t;e.name="banners",n.add(e);const i=oD(t),s={n:0,posts:0,want:i,sway:i0};e.userData.bannerCount=0,e.userData.postCount=0,e.userData.sizes={t:zi.t,h:zi.h,w:zi.w,postH:zi.postH,postR:zi.postR,armL:zi.armL,hangY:zi.hangY,bannerY:zi.bannerY,plazaR:zi.plazaR,sway:zi.sway,nFine:zi.nFine,nCoarse:zi.nCoarse,segs:t?6:8};const r=[aD()];if(i>1){const f=cD();f&&r.push(f);const x=lD();x&&r.push(x)}const o=r.slice(0,i);if(!o.length)return e.userData.bannerCounts=s,{tick(){}};const a=t?6:8,c={post:new ge(e0,e0,_a,a),arm:new ye(eh,Ug,iD),cloth:new ye(Ng,nd,ZS)},l=tD(),h=eD(),d=nD(),u=[];for(let f=0;f<o.length;f++)uD(o[f],f,c,l,h,d,e,u);return s.n=u.length,s.posts=u.length,e.userData.bannerCount=s.n,e.userData.postCount=s.posts,e.userData.bannerCounts=s,{tick(f){for(let x=0;x<u.length;x++){const v=u[x];v.hang.rotation.y=Math.sin(f*v.speed+v.phase)*i0}}}}function dD(n){return mt.find(t=>t.kind===n)??null}function fD(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function pD(){return new ut({color:3812374,roughness:.14,metalness:.42,emissive:13934672,emissiveIntensity:.22,iridescence:.62,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.56,clearcoatRoughness:.18,transparent:!1})}const JS=2.4,kg=.7,QS=1.2,s0=.85,r0=.22,F_=s0+kg*.5+r0,mD=90,gD={w:JS,h:kg,d:QS,y:0,octaR:0,octaY:0,anvilCount:0,octaCount:0};function xD(n,t){const e=new _t;e.name="anvil",n.add(e);const i={...gD};e.userData.sizes=i,e.userData.anvilCount=0,e.userData.octaCount=0;const s=dD("foundry");if(!s||Math.hypot(s.x,s.z)<mD)return;const r=s.x,o=s.z,a=Math.atan2(r,o),c=new yt(new ye(JS,kg,QS),fD());if(c.position.set(r,s0,o),c.rotation.y=a,c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,e.add(c),i.y=s0,i.anvilCount=1,e.userData.anvilCount=1,!t){const l=new yt(new xn(r0,0),pD());l.position.set(r,F_,o),l.rotation.y=a,l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,e.add(l),i.octaR=r0,i.octaY=F_,i.octaCount=1,e.userData.octaCount=1}}function _D(){return new ut({color:3812374,roughness:.18,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function yD(){return new ut({color:799552,roughness:.16,metalness:.4,emissive:1729912,emissiveIntensity:.16,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function B_(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const H_=2.4,o0=.06,G_=2.4,vD=4,Cf=vD+o0*.5,zc=14,MD=8,wD=4;function SD(n){return n?wD:MD}function bD(n,t){const e=new _t;e.name="mosaic",n.add(e);const i=SD(t),s={n:0,gold:0,cyan:0,want:i,r:zc,y:Cf};e.userData.tileCounts=s,e.userData.sizes={w:H_,h:o0,d:G_,y:Cf,r:zc};const r=[],o=[],a=Math.PI*2/i;for(let l=0;l<i;l++){const h=l*a,d={x:Math.cos(h)*zc,y:Cf,z:Math.sin(h)*zc,ry:h};l%2===0?r.push(d):o.push(d)}const c=new ye(H_,o0,G_);B_(c,_D(),r,e),B_(c,yD(),o,e),s.gold=r.length,s.cyan=o.length,s.n=r.length+o.length,e.userData.tileCount=s.n}function ED(n){return mt.find(t=>t.kind===n)??null}function TD(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function RD(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const $_=2.8,a0=.28,V_=.7,Dc=a0*.5,Lc=8,AD=.72,W_=90,CD=3,PD=1;function ID(n){return n?PD:CD}function zD(n,t){const e=new _t;e.name="rest",n.add(e);const i=ID(t),s={n:0,want:i,y:Dc,r:Lc};e.userData.benchCounts=s,e.userData.sizes={w:$_,h:a0,d:V_,y:Dc,r:Lc};const r=ED("terrace");if(!r||Math.hypot(r.x,r.z)<W_)return;const o=r.x,a=r.z,c=[];if(i===1)c.push({x:o,y:Dc,z:a,ry:Math.atan2(o,a)});else{const d=Math.atan2(-a,-o)+Math.PI;for(let u=0;u<i;u++){const f=d+(u-(i-1)*.5)*AD,x=o+Math.cos(f)*Lc,v=a+Math.sin(f)*Lc;Math.hypot(x,v)<W_||c.push({x,y:Dc,z:v,ry:Math.atan2(o-x,a-v)})}}const l=new ye($_,a0,V_);RD(l,TD(),c,e),s.n=c.length}function DD(n){return mt.find(t=>t.kind===n)??null}function LD(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1,side:_e})}function ND(n){return new Ue({color:4114656,transparent:!0,opacity:n,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}const tb=2.2,eb=.86,nb=.18,X_=1.62,Y_=.38,q_=.16,Pf=.1,Z_=.22,K_=.84,UD=90;function OD(n,t,e){return[new xt(.05,0),new xt(n*.48,.04),new xt(n*.86,t*.38),new xt(n,t),new xt(n-e,t),new xt(n*.72,t*.4),new xt(n*.32,e),new xt(.05,e*.65)]}const kD={r:tb,h:eb,wall:nb,discR:0,discY:0,discOp:0,discOpMin:0,discOpMax:0,hail:0,x:0,y:0,z:0,bowlCount:0,discCount:0,segs:0};function FD(n,t){const e=new _t;e.name="hail",n.add(e);const i={...kD};e.userData.sizes=i,e.userData.bowlCount=0,e.userData.discCount=0,e.userData.hailCount=0;const s=DD("beacon");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<UD)return{tick(){}};const r=s.x,o=s.z,a=t?10:20,c=new yt(new Mo(OD(tb,eb,nb),a),LD());if(c.position.set(r,0,o),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,c.renderOrder=2,e.add(c),i.x=r,i.y=0,i.z=o,i.bowlCount=1,i.segs=a,e.userData.bowlCount=1,e.userData.hailCount=1,t)return{tick(){}};const l=new yi(X_,a);l.rotateX(-Math.PI/2);const h=ND(q_),d=new yt(l,h);d.position.set(r,Y_,o),d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!0,d.renderOrder=1,e.add(d),i.discR=X_,i.discY=Y_,i.discOp=q_,i.discOpMin=Pf,i.discOpMax=Z_,i.hail=K_,i.discCount=1,e.userData.discCount=1,e.userData.breathing=!0;const u=Z_-Pf;return{tick(f){const x=(Math.sin(f*K_)+1)*.5;h.opacity=Pf+x*u}}}function j_(n){return mt.find(t=>t.kind===n)??null}function BD(){return new ut({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function HD(){return new ut({color:3812374,roughness:.18,metalness:.46,emissive:15254890,emissiveIntensity:.2,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function J_(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="XYZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,Math.PI/2),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Q_=4.2,ty=.18,ey=2.1,If=90,GD=3,$D=1;function VD(n){return n?$D:GD}function WD(n){return{n:0,cyan:0,gold:0,want:n}}function XD(n,t){const e=new _t;e.name="arches",n.add(e);const i=VD(t),s=WD(i);e.userData.archCounts=s,e.userData.sizes={r:Q_,tube:ty,y:ey,rz:Math.PI/2};const r=j_("canal"),o=j_("market");if(!r||!o||Math.hypot(r.x,r.z)<If||Math.hypot(o.x,o.z)<If)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*.62/l),d=Math.min(.28,o.radius*.62/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.atan2(m,p),S=[],g=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=u+m*b,C=f+p*b;if(Math.hypot(A,C)<If)continue;const E={x:A,y:ey,z:C,ry:w};_%2===0?S.push(E):g.push(E)}const M=t?6:8,y=t?12:20,R=new nn(Q_,ty,M,y,Math.PI);J_(R,BD(),S,e),J_(R,HD(),g,e),s.n=S.length+g.length,s.cyan=S.length,s.gold=g.length}function YD(n){return mt.find(t=>t.kind===n)??null}function qD(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function ZD(n){return new Ue({color:13934672,transparent:!0,opacity:n,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}const id=7.2,c0=.38,ny=id*.5,iy=.44,sy=.08,ry=id,oy=.2,zf=.12,ay=.28,cy=.78,KD=90,jD={h:id,r:c0,y:0,ringR:0,ringTube:0,ringY:0,ringOp:0,ringOpMin:0,ringOpMax:0,glow:0,x:0,z:0,stackCount:0,ringCount:0,segs:0};function JD(n,t){const e=new _t;e.name="chimney",n.add(e);const i={...jD};e.userData.sizes=i,e.userData.stackCount=0,e.userData.ringCount=0,e.userData.chimneyCount=0;const s=YD("foundry");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<KD)return{tick(){}};const r=s.x,o=s.z,a=t?8:12,c=new yt(new ge(c0,c0,id,a),qD());if(c.position.set(r,ny,o),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,c.renderOrder=2,e.add(c),i.x=r,i.y=ny,i.z=o,i.stackCount=1,i.segs=a,e.userData.stackCount=1,e.userData.chimneyCount=1,t)return{tick(){}};const l=6,h=new nn(iy,sy,l,a),d=ZD(oy),u=new yt(h,d);u.rotation.x=Math.PI/2,u.position.set(r,ry,o),u.castShadow=!1,u.receiveShadow=!1,u.frustumCulled=!0,u.renderOrder=3,e.add(u),i.ringR=iy,i.ringTube=sy,i.ringY=ry,i.ringOp=oy,i.ringOpMin=zf,i.ringOpMax=ay,i.glow=cy,i.ringCount=1,e.userData.ringCount=1,e.userData.breathing=!0;const f=ay-zf;return{tick(x){const v=(Math.sin(x*cy)+1)*.5;d.opacity=zf+v*f}}}function QD(n){return mt.find(t=>t.kind===n)??null}function tL(n){return new ut({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:n,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function eL(n){return new Ue({color:13934672,transparent:!0,opacity:n,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}function ly(n,t,e,i,s){const r=Math.cos(s),o=Math.sin(s);return{x:n+e*r+i*o,z:t-e*o+i*r}}const Fg=1.2,sd=2.4,Bg=.12,Df=sd*.5,uy=1.7,Lf=-5.4,nL=Fg*.86,iL=sd*.86,sL=Bg*.5+.02,rL=90,oL=4,ib=2,aL=[.18,.13,.09,.05],cL=[.16,.11,.07,.04],lL={w:Fg,h:sd,d:Bg,y:0,pitch:0,rowZ:0,tabletCount:0,glowCount:0};function uL(n){return n?ib:oL}function hL(n,t){const e=new _t;e.name="tablets",n.add(e);const i={...lL};e.userData.sizes=i,e.userData.tabletCount=0,e.userData.glowCount=0;const s=QD("archive");if(!s||Math.hypot(s.x,s.z)<rL)return;const r=Math.atan2(s.x,s.z),o=s.x,a=s.z,c=uL(t),l=new ye(Fg,sd,Bg),h=new cs(nL,iL);let d=0;for(let u=0;u<c;u++){const f=(u-(c-1)*.5)*uy,x=ly(o,a,f,Lf,r),v=c===ib?u*2:u,m=new yt(l,tL(aL[v]??.05));m.position.set(x.x,Df,x.z),m.rotation.y=r,m.castShadow=!1,m.receiveShadow=!0,m.frustumCulled=!0,m.renderOrder=2,e.add(m);const p=ly(o,a,f,Lf-sL,r),w=new yt(h,eL(cL[v]??.04));w.position.set(p.x,Df,p.z),w.rotation.y=r,w.castShadow=!1,w.receiveShadow=!1,w.frustumCulled=!0,w.renderOrder=3,e.add(w),d+=1}i.y=Df,i.pitch=uy,i.rowZ=Lf,i.tabletCount=c,i.glowCount=d,e.userData.tabletCount=c,e.userData.glowCount=d}function dL(n){return mt.find(t=>t.kind===n)??null}function fL(n){return new Ue({color:10121960,transparent:!0,opacity:n,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}const sb=.08,Hg=5.2,Gg=3.4,rb=14,l0=rb-Hg*.5,ob=.28,ab=Gg+ob,cb=.14,u0=.08,lb=.2,ub=.73,hb=2,db=1,pL=90,fb=Math.PI/2,fi={t:sb,h:Hg,w:Gg,hangY:rb,veilY:l0,slit:ob,pitch:ab,op:cb,opMin:u0,opMax:lb,breath:ub,nFine:hb,nCoarse:db,faceYaw:fb};function mL(n){return n?db:hb}function gL(n,t){const e=new _t;e.name="veil",n.add(e);const i=mL(t),s=lb-u0;e.userData.veilCount=0,e.userData.sizes={t:fi.t,h:fi.h,w:fi.w,hangY:fi.hangY,veilY:fi.veilY,slit:fi.slit,pitch:fi.pitch,op:fi.op,opMin:fi.opMin,opMax:fi.opMax,breath:fi.breath,nFine:fi.nFine,nCoarse:fi.nCoarse,faceYaw:fi.faceYaw,n:0,want:i,x:0,y:0,z:0};const r=dL("gate");if(!r)return{tick(){}};if(Math.hypot(r.x,r.z)<pL)return{tick(){}};const o=Math.atan2(r.x,r.z),a=Math.cos(o),c=Math.sin(o),l=o+fb,h=new ye(sb,Hg,Gg),d=fL(cb),u=new oe(h,d,i);u.castShadow=!1,u.receiveShadow=!1,u.frustumCulled=!0,u.renderOrder=3;const f=new Zt;f.rotation.order="YXZ";for(let x=0;x<i;x++){const v=i===1?0:(x-(i-1)*.5)*ab;f.position.set(r.x+v*a,l0,r.z-v*c),f.rotation.set(0,l,0),f.scale.set(1,1,1),f.updateMatrix(),u.setMatrixAt(x,f.matrix)}return u.instanceMatrix.needsUpdate=!0,e.add(u),e.userData.veilCount=i,e.userData.sizes.n=i,e.userData.sizes.x=r.x,e.userData.sizes.y=l0,e.userData.sizes.z=r.z,{tick(x){const v=(Math.sin(x*ub)+1)*.5;d.opacity=u0+v*s}}}function $o(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function xL(n){return mt.find(t=>t.kind===n)??null}function _L(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function yL(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,o.rz),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const hl=.08,eo=.22,dl=.9,h0=18,vL=10,hy=90,ML=6,wL=3,dy=.38;function SL(n){return n?wL:ML}function bL(n){return{n:0,want:n,r:hl,hMin:eo,hMax:dl,ring:h0}}function EL(n,t){const e=new _t;e.name="roots",n.add(e);const i=SL(t),s=bL(i);e.userData.rootCounts=s,e.userData.rootCount=0,e.userData.sizes={r:hl,hMin:eo,hMax:dl,ring:h0,y:eo*.5};const r=xL("grove");if(!r||Math.hypot(r.x,r.z)<hy)return;const o=dl-eo,a=[];for(let h=0;h<i;h++){const d=(h+.13)/i*Math.PI*2+$o(h,3)*.4,u=h0+($o(h,5)-.5)*vL,f=i===1?(eo+dl)*.5:eo+h/(i-1)*o,x=r.x+Math.cos(d)*u,v=r.z+Math.sin(d)*u;Math.hypot(x,v)<hy||a.push({x,y:f*.5,z:v,sx:1,sy:f,sz:1,rx:($o(h,11)-.5)*dy,ry:d+$o(h,13)*.7,rz:($o(h,17)-.5)*dy})}const c=t?6:8,l=new ge(hl,hl,1,c);yL(l,_L(),a,e),s.n=a.length,e.userData.rootCount=a.length}function TL(){const n=ji.find(s=>s.id==="veyra"),t=n?.x??30,e=n?.z??-40,i=Math.hypot(t,e)||1;return{vx:t/i,vz:e/i}}function RL(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1,side:_e})}function AL(n){return new ut({color:3844288,roughness:.18,metalness:.2,emissive:1729912,emissiveIntensity:.22,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!0,opacity:n,depthWrite:!1,side:_e})}const fy=1.6,py=.68,my=.14,gy=1.04,xy=.28,_y=.34,CL=4,Nf=CL,Uf=9.6;function PL(n,t,e){return[new xt(.04,0),new xt(n*.58,.02),new xt(n*.9,t*.26),new xt(n,t),new xt(n-e*.55,t*.96),new xt(n*.78,t*.3),new xt(n*.4,e*.72),new xt(.04,e*.48)]}function IL(n,t){const e=new _t;e.name="font",n.add(e);const i=TL(),s=i.vx*Uf,r=i.vz*Uf,o=t?8:16,a=new yt(new Mo(PL(fy,py,my),o),RL());a.position.set(s,Nf,r),a.castShadow=!1,a.receiveShadow=!0,a.frustumCulled=!0,a.renderOrder=2,e.add(a);const c={r:fy,h:py,wall:my,discR:0,discY:0,discOp:0,y:Nf,apronR:Uf,x:s,z:r,bowlCount:1,discCount:0,segs:o};if(e.userData.sizes=c,e.userData.bowlCount=1,e.userData.discCount=0,e.userData.fontCount=1,t)return;const l=new yi(gy,o);l.rotateX(-Math.PI/2);const h=new yt(l,AL(_y));h.position.set(s,Nf+xy,r),h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!0,h.renderOrder=1,e.add(h),c.discR=gy,c.discY=xy,c.discOp=_y,c.discCount=1,e.userData.discCount=1}function Kr(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function zL(n){return mt.find(t=>t.kind===n)??null}function DL(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function yy(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,o.rz),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const fl=.07,Zo=2.4,pl=3.8,d0=.16,ml=.42,Ko=4,gl=7,f0=22,LL=8,vy=90,NL=4,UL=2,OL=.28,kL=.22;function FL(n){return n?UL:NL}function BL(n){return{n:0,limbs:0,cylinders:0,cones:0,want:n,r:fl,lMin:Zo,lMax:pl,coneR:d0,coneH:ml,yMin:Ko,yMax:gl,ring:f0}}function HL(n,t,e){const i=Math.acos(Math.max(-1,Math.min(1,t))),s=Math.atan2(n,e);return{rx:i,ry:s}}function GL(n,t){const e=new _t;e.name="boughs",n.add(e);const i=FL(t),s=BL(i);e.userData.boughCounts=s,e.userData.boughCount=0,e.userData.sizes={r:fl,lMin:Zo,lMax:pl,coneR:d0,coneH:ml,yMin:Ko,yMax:gl,ring:f0};const r=zL("grove");if(!r||Math.hypot(r.x,r.z)<vy)return;const o=gl-Ko,a=pl-Zo,c=[],l=[];for(let u=0;u<i;u++){const f=(u+.17)/i*Math.PI*2+Kr(u,3)*.35,x=f0+(Kr(u,5)-.5)*LL,v=i===1?(Ko+gl)*.5:Ko+u/(i-1)*o,m=r.x+Math.cos(f)*x,p=r.z+Math.sin(f)*x;if(Math.hypot(m,p)<vy)continue;const w=i===1?(Zo+pl)*.5:Zo+u/(i-1)*a,S=OL+Kr(u,11)*kL,g=Math.cos(S),M=Math.cos(f)*g,y=-Math.sin(S),R=Math.sin(f)*g,{rx:_,ry:b}=HL(M,y,R),A=w*.5,C=m+M*A,E=v+y*A,U=p+R*A;c.push({x:m,y:v,z:p,sx:1,sy:w,sz:1,rx:_,ry:b+Kr(u,13)*.12,rz:(Kr(u,17)-.5)*.16}),l.push({x:C,y:E-ml*.28,z:U,sx:1,sy:1,sz:1,rx:Math.PI,ry:f+Kr(u,19)*.4,rz:0})}const h=t?6:8,d=DL();yy(new ge(fl*.55,fl,1,h),d,c,e),yy(new wr(d0,ml,h),d,l,e),s.n=c.length,s.limbs=c.length,s.cylinders=c.length,s.cones=l.length,e.userData.boughCount=c.length}function $L(){const n=ji.find(s=>s.id==="veyra"),t=n?.x??30,e=n?.z??-40,i=Math.hypot(t,e)||1;return{vx:t/i,vz:e/i}}function My(){return new ut({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function VL(){return new ut({color:3812374,roughness:.18,metalness:.52,emissive:6966306,emissiveIntensity:.18,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.46,clearcoatRoughness:.22,transparent:!1,side:_e})}const pb=.55,p0=1.8,ra=4.4,m0=.08,xl=.78,nh=.07,WL=.1,mb=ra-nh,gb=4,g0=16.8,xb=.03,_b=.86,$i={r:pb,h:p0,postH:ra,postR:m0,armL:xl,armT:nh,hangY:mb,y:gb,apronR:g0,sway:xb,swaySpeed:_b};function XL(n,t){return[new xt(.05,t),new xt(n*.16,t*.97),new xt(n*.38,t*.82),new xt(n*.58,t*.58),new xt(n*.78,t*.32),new xt(n*.94,t*.1),new xt(n,0),new xt(n*.86,.03),new xt(n*.62,t*.28),new xt(n*.34,t*.58),new xt(n*.14,t*.88),new xt(.04,t*.96)]}function YL(n,t){const e=new _t;e.name="bells",n.add(e);const i=$L(),s=-i.vz*g0,r=i.vx*g0,o=Math.atan2(s,r),a=t?8:16,c={r:$i.r,h:$i.h,postH:$i.postH,postR:$i.postR,armL:$i.armL,armT:$i.armT,hangY:$i.hangY,y:$i.y,apronR:$i.apronR,sway:t?0:$i.sway,swaySpeed:t?0:$i.swaySpeed,x:s,z:r,yaw:o,segs:a,bellCount:1,postCount:1};e.userData.sizes=c,e.userData.bellCount=1,e.userData.postCount=1,e.userData.breathing=!t;const l=new _t;l.position.set(s,gb,r),l.rotation.y=o,e.add(l);const h=new yt(new ge(m0,m0,ra,a),My());h.position.set(0,ra*.5,0),h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,h.renderOrder=2,l.add(h);const d=new yt(new ye(xl,nh,WL),My());d.position.set(xl*.5,ra-nh*.5,0),d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!0,d.renderOrder=2,l.add(d);const u=new _t;u.position.set(xl,mb,0),l.add(u);const f=new yt(new Mo(XL(pb,p0),a),VL());return f.position.set(0,-p0,0),f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!0,f.renderOrder=2,u.add(f),t?{tick(){}}:{tick(x){u.rotation.z=Math.sin(x*_b)*xb}}}function Of(n){return mt.find(t=>t.kind===n)??null}function qL(){return new ut({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function ZL(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const ih=5.4,_l=.22,wy=ih*.5,kf=1.8,Nc=90,KL=4,jL=2,Sy=[["wild","bridge",3],["bridge","gate",4]];function JL(n){return n?jL:KL}function QL(n){return{n:0,pairs:0,want:n,h:ih,r:_l}}function t8(n,t){const e=new _t;e.name="pylons",n.add(e);const i=JL(t),s=QL(i);e.userData.pylonCounts=s,e.userData.pylonCount=0,e.userData.sizes={h:ih,r:_l,y:wy,side:kf};const r=Of("bridge");if(!r||Math.hypot(r.x,r.z)<Nc)return;const o=[];for(let l=0;l<Sy.length;l++){const h=Sy[l],d=h[2];if(t&&d%2===1)continue;const u=Of(h[0]),f=Of(h[1]);if(!u||!f||Math.hypot(u.x,u.z)<Nc||Math.hypot(f.x,f.z)<Nc)continue;const x=f.x-u.x,v=f.z-u.z,m=Math.hypot(x,v)||1,p=Math.min(.22,u.radius*.72/m),w=Math.min(.22,f.radius*.72/m),S=u.x+x*p,g=u.z+v*p,M=f.x-x*w,y=f.z-v*w,R=M-S,_=y-g,b=Math.hypot(R,_)||1,A=-_/b,C=R/b,E=Math.atan2(R,_),U=h[0]==="bridge",k=U?S:M,O=U?g:y;for(const V of[1,-1]){const W=k+A*kf*V,Y=O+C*kf*V;Math.hypot(W,Y)<Nc||o.push({x:W,y:wy,z:Y,ry:E})}}const a=t?6:8,c=new ge(_l,_l,ih,a);ZL(c,qL(),o,e),s.n=o.length,s.pairs=o.length>>1,e.userData.pylonCount=o.length}function e8(n){return mt.find(t=>t.kind===n)??null}function n8(){return new ut({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function i8(n){return new Ue({color:13934672,transparent:!0,opacity:n,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}const sh=2.4,ya=.16,Ff=ya,by=sh-ya-.16,Ey=.08,Ty=.14,Bf=.08,Ry=.22,Ay=.72,s8=90,r8={r:sh,tube:ya,y:0,ringR:0,ringTube:0,ringY:0,discR:0,discY:0,discOp:0,discOpMin:0,discOpMax:0,glow:0,x:0,z:0,ringCount:0,discCount:0,segs:0};function o8(n,t){const e=new _t;e.name="forge",n.add(e);const i={...r8};e.userData.sizes=i,e.userData.ringCount=0,e.userData.discCount=0,e.userData.forgeCount=0;const s=e8("foundry");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<s8)return{tick(){}};const r=s.x,o=s.z,a=t?10:16,c=t?5:8,l=new yt(new nn(sh,ya,c,a),n8());if(l.rotation.x=Math.PI/2,l.position.set(r,Ff,o),l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,e.add(l),i.x=r,i.y=Ff,i.z=o,i.ringR=sh,i.ringTube=ya,i.ringY=Ff,i.segs=a,i.ringCount=1,e.userData.ringCount=1,e.userData.forgeCount=1,t)return{tick(){}};const h=new yi(by,a);h.rotateX(-Math.PI/2);const d=i8(Ty),u=new yt(h,d);u.position.set(r,Ey,o),u.castShadow=!1,u.receiveShadow=!1,u.frustumCulled=!0,u.renderOrder=1,e.add(u),i.discR=by,i.discY=Ey,i.discOp=Ty,i.discOpMin=Bf,i.discOpMax=Ry,i.glow=Ay,i.discCount=1,e.userData.discCount=1,e.userData.breathing=!0;const f=Ry-Bf;return{tick(x){const v=(Math.sin(x*Ay)+1)*.5;d.opacity=Bf+v*f}}}function Hf(n){return mt.find(t=>t.kind===n)??null}function a8(){return new ut({color:3812374,roughness:.18,metalness:.52,emissive:13934672,emissiveIntensity:.22,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}function c8(){return new ut({color:2892306,roughness:.22,metalness:.46,emissive:1729912,emissiveIntensity:.18,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function l8(){return new ut({color:3812374,roughness:.16,metalness:.5,emissive:13934672,emissiveIntensity:.2,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}const $g=2.2,yl=.08,vl=1.4,x0=.55,_0=.08,y0=$g*.5,Gf=.07,$f=vl,Vf=16,u8=90,h8={beamL:$g,beamT:yl,y:0,panR:x0,panH:_0,panOff:y0,postR:0,postH:0,offset:0,scaleCount:0,panCount:0,beamCount:0,postCount:0,x:0,z:0};function d8(n,t){const e=new _t;e.name="scales",n.add(e);const i={...h8};e.userData.sizes=i,e.userData.scaleCount=0,e.userData.panCount=0;const s=Hf("market");if(!s||Math.hypot(s.x,s.z)<u8)return;const r=Hf("canal"),o=Hf("foundry"),a=(r?.x??s.x-1)-s.x,c=(r?.z??s.z)-s.z,l=Math.hypot(a,c)||1,h=a/l,d=c/l,u=s.x-h*Vf,f=s.z-d*Vf,x=(o?.x??s.x+1)-s.x,v=(o?.z??s.z)-s.z,m=x-a,p=v-c,w=Math.hypot(m,p)||1,S=Math.atan2(-p/w,m/w),g=a8(),M=t?8:12,y=new _t;y.position.set(u,0,f),y.rotation.y=S,e.add(y);const R=new yt(new ge(Gf*.85,Gf,$f,M),g);R.position.set(0,$f*.5,0),R.castShadow=!1,R.receiveShadow=!0,R.frustumCulled=!0,y.add(R);const _=new yt(new ye($g,yl,yl),g);_.position.set(0,vl,0),_.castShadow=!1,_.receiveShadow=!0,_.frustumCulled=!0,y.add(_);const b=vl+yl*.5+_0*.5,A=new ge(x0,x0,_0,M),C=new yt(A,c8());C.position.set(-y0,b,0),C.castShadow=!1,C.receiveShadow=!0,C.frustumCulled=!0,y.add(C);let E=1;if(!t){const U=new yt(A,l8());U.position.set(y0,b,0),U.castShadow=!1,U.receiveShadow=!0,U.frustumCulled=!0,y.add(U),E=2}i.y=vl,i.postR=Gf,i.postH=$f,i.offset=Vf,i.scaleCount=1,i.panCount=E,i.beamCount=1,i.postCount=1,i.x=u,i.z=f,e.userData.scaleCount=1,e.userData.panCount=E,e.userData.beamCount=1}function f8(n){return mt.find(t=>t.kind===n)??null}function p8(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function m8(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Wf=1.1,v0=.08,Xf=v0*.5,Uc=12,g8=Math.PI*1.35,Cy=90,x8=6,_8=3;function y8(n){return n?_8:x8}function v8(n,t){const e=new _t;e.name="pads",n.add(e);const i=y8(t),s={n:0,want:i,r:Uc,y:Xf};e.userData.padCounts=s,e.userData.sizes={r:Wf,h:v0,y:Xf,ring:Uc};const r=f8("ring");if(!r||Math.hypot(r.x,r.z)<Cy)return;const o=r.x,a=r.z,l=Math.atan2(-a,-o)+Math.PI,h=i<=1?0:g8/(i-1),d=[];for(let x=0;x<i;x++){const v=l+(x-(i-1)*.5)*h,m=o+Math.cos(v)*Uc,p=a+Math.sin(v)*Uc;Math.hypot(m,p)<Cy||d.push({x:m,y:Xf,z:p,ry:Math.atan2(o-m,a-p)})}const u=t?8:12,f=new ge(Wf,Wf,v0,u);m8(f,p8(),d,e),s.n=d.length}function Py(n){return mt.find(t=>t.kind===n)??null}function M8(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}const va=2.8,rd=.18,Iy=rd*.5,yb=2.4,w8=.16,Yf=yb+w8+va+1.04,zy=va-.08,Dy=.06,Ly=rd,Ny=90,S8={r:va,h:rd,y:0,offset:0,forgeR:yb,lipR:0,lipTube:0,lipY:0,x:0,z:0,plateCount:0,lipCount:0,segs:0};function b8(n,t){const e=new _t;e.name="hearth",n.add(e);const i={...S8};e.userData.sizes=i,e.userData.plateCount=0,e.userData.lipCount=0,e.userData.hearthCount=0;const s=Py("foundry");if(!s||Math.hypot(s.x,s.z)<Ny)return;const r=Py("market"),o=(r?.x??0)-s.x,a=(r?.z??0)-s.z,c=Math.hypot(o,a)||1,l=s.x+o/c*Yf,h=s.z+a/c*Yf;if(Math.hypot(l,h)<Ny)return;const d=t?10:16,u=M8(),f=new yt(new ge(va,va,rd,d),u);if(f.position.set(l,Iy,h),f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!0,f.renderOrder=2,e.add(f),i.x=l,i.y=Iy,i.z=h,i.offset=Yf,i.segs=d,i.plateCount=1,e.userData.plateCount=1,e.userData.hearthCount=1,t)return;const x=new yt(new nn(zy,Dy,6,d),u);x.rotation.x=Math.PI/2,x.position.set(l,Ly,h),x.castShadow=!1,x.receiveShadow=!0,x.frustumCulled=!0,x.renderOrder=2,e.add(x),i.lipR=zy,i.lipTube=Dy,i.lipY=Ly,i.lipCount=1,e.userData.lipCount=1}function E8(n){return mt.find(t=>t.kind===n)??null}function T8(){return new ut({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const vb=4.8,Mb=.22,wb=.55,Uy=4.6,R8=90,Sb=1,bb=1,A8={w:vb,h:Mb,d:wb,y:0,nFine:Sb,nCoarse:bb,n:0,want:1,x:0,z:0,yaw:0,lintelCount:0};function C8(n,t){const e=new _t;e.name="lintel",n.add(e);const s={...A8,want:t?bb:Sb};e.userData.sizes=s,e.userData.lintelCount=0;const r=E8("gate");if(!r||Math.hypot(r.x,r.z)<R8)return;const o=Math.atan2(r.x,r.z),a=new yt(new ye(vb,Mb,wb),T8());a.position.set(r.x,Uy,r.z),a.rotation.y=o,a.castShadow=!1,a.receiveShadow=!0,a.frustumCulled=!0,a.renderOrder=2,e.add(a),s.y=Uy,s.n=1,s.x=r.x,s.z=r.z,s.yaw=o,s.lintelCount=1,e.userData.lintelCount=1}function P8(n){return mt.find(t=>t.kind===n)??null}function I8(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function z8(){return new ut({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:.16,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function D8(n,t,e,i,s){const r=Math.cos(s),o=Math.sin(s);return{x:n+e*r+i*o,z:t-e*o+i*r}}const Eb=2.4,Vg=.12,Tb=1.1,M0=.9,Oy=.7,w0=.04,ky=1,Fy=M0+Vg*.5+w0*.5,By=-2.6,L8=90,N8={w:Eb,h:Vg,d:Tb,y:0,tabletW:0,tabletH:0,tabletD:0,tabletY:0,aisleZ:0,ledgerCount:0,tabletCount:0};function U8(n,t){const e=new _t;e.name="ledger",n.add(e);const i={...N8};e.userData.sizes=i,e.userData.ledgerCount=0,e.userData.tabletCount=0;const s=P8("archive");if(!s||Math.hypot(s.x,s.z)<L8)return;const r=s.x,o=s.z,a=Math.atan2(r,o),c=D8(r,o,0,By,a),l=new yt(new ye(Eb,Vg,Tb),I8());if(l.position.set(c.x,M0,c.z),l.rotation.y=a,l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,e.add(l),i.y=M0,i.aisleZ=By,i.ledgerCount=1,e.userData.ledgerCount=1,!t){const h=new yt(new ye(Oy,w0,ky),z8());h.position.set(c.x,Fy,c.z),h.rotation.y=a,h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,h.renderOrder=2,e.add(h),i.tabletW=Oy,i.tabletH=w0,i.tabletD=ky,i.tabletY=Fy,i.tabletCount=1,e.userData.tabletCount=1}}function Hy(n){return mt.find(t=>t.kind===n)??null}function O8(){return new ut({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const Wg=2.8,Ma=.1,Gy=Wg*.5,Xg=3.2,Rb=.12,Ab=.18,$y=1.6,S0=Xg*.5-Ma,Cb=S0*2,k8=Cb-Ma*2,F8=90,Vo=2,B8={postH:Wg,postR:Ma,postY:0,barW:Xg,barH:Rb,barD:Ab,barY:0,span:Cb,open:k8,nPosts:0,postCount:0,barCount:0,x:0,z:0,yaw:0,segs:0};function H8(n,t){const e=new _t;e.name="sluice",n.add(e);const i={...B8};e.userData.sizes=i,e.userData.postCount=0,e.userData.barCount=0,e.userData.sluiceCount=0;const s=Hy("canal");if(!s||Math.hypot(s.x,s.z)<F8)return;const r=Hy("market"),o=(r?.x??0)-s.x,a=(r?.z??0)-s.z,c=Math.atan2(o,a),l=Math.cos(c),h=Math.sin(c),d=t?6:8,u=O8(),f=new Zt;f.rotation.order="YXZ";const x=new ge(Ma,Ma,Wg,d),v=new oe(x,u,Vo);v.castShadow=!1,v.receiveShadow=!0,v.frustumCulled=!0,v.renderOrder=2;for(let p=0;p<Vo;p++){const w=p===0?-1:1;f.position.set(s.x+w*S0*l,Gy,s.z-w*S0*h),f.rotation.set(0,c,0),f.scale.set(1,1,1),f.updateMatrix(),v.setMatrixAt(p,f.matrix)}if(v.instanceMatrix.needsUpdate=!0,e.add(v),i.postY=Gy,i.nPosts=Vo,i.postCount=Vo,i.x=s.x,i.z=s.z,i.yaw=c,i.segs=d,e.userData.postCount=Vo,e.userData.sluiceCount=1,t)return;const m=new yt(new ye(Xg,Rb,Ab),u);m.position.set(s.x,$y,s.z),m.rotation.y=c,m.castShadow=!1,m.receiveShadow=!0,m.frustumCulled=!0,m.renderOrder=2,e.add(m),i.barY=$y,i.barCount=1,e.userData.barCount=1}function G8(){const n=ji.find(s=>s.id==="nesh"),t=n?.x??-24,e=n?.z??128,i=Math.hypot(t,e)||1;return{nx:t/i,nz:e/i}}function $8(){return new ut({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}const Vy=2.9,Wy=.08,qf=.12,Zf=Math.min(84,Math.max(78,Sn.radius+30));function V8(n,t){const e=new _t;e.name="rims",n.add(e);const i=G8(),s=i.nx*Zf,r=i.nz*Zf,o=t?12:22,a=t?5:8,c=new yt(new nn(Vy,Wy,a,o),$8());c.rotation.x=Math.PI/2,c.position.set(s,qf,r),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,c.renderOrder=2,e.add(c),e.userData.rimCount=1,e.userData.sizes={x:s,y:qf,z:r,r:Vy,tube:Wy,rimY:qf,apronR:Zf,segs:o,tubeSeg:a}}function W8(n){return mt.find(t=>t.kind===n)??null}function X8(){return new ut({color:1314850,roughness:.2,metalness:.38,emissive:3286102,emissiveIntensity:.16,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}function Y8(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const rh=2.2,Ml=.12,b0=rh*.5,wl=14,q8=Math.PI*1.35,Xy=90,Z8=4,K8=2;function j8(n){return n?K8:Z8}function J8(n){return{n:0,want:n,h:rh,r:Ml,y:b0,ring:wl}}function Q8(n,t){const e=new _t;e.name="posts",n.add(e);const i=j8(t),s=J8(i);e.userData.postCounts=s,e.userData.postCount=0,e.userData.sizes={h:rh,r:Ml,y:b0,ring:wl};const r=W8("terrace");if(!r||Math.hypot(r.x,r.z)<Xy)return;const o=r.x,a=r.z,l=Math.atan2(-a,-o)+Math.PI,h=i<=1?0:q8/(i-1),d=[];for(let x=0;x<i;x++){const v=l+(x-(i-1)*.5)*h,m=o+Math.cos(v)*wl,p=a+Math.sin(v)*wl;Math.hypot(m,p)<Xy||d.push({x:m,y:b0,z:p,ry:Math.atan2(o-m,a-p)})}const u=t?6:8,f=new ge(Ml,Ml,rh,u);Y8(f,X8(),d,e),s.n=d.length,e.userData.postCount=d.length}function t5(){const n=ji.find(s=>s.id==="nesh"),t=n?.x??-24,e=n?.z??128,i=Math.hypot(t,e)||1;return{nx:t/i,nz:e/i}}function e5(){return new ut({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1,side:_e})}const Yy=.55,qy=1.6,Kf=1.1,jf=Math.min(84,Math.max(78,Sn.radius+30));function n5(n,t){const e=new _t;e.name="prism",n.add(e);const i=t5(),s=i.nx*jf,r=i.nz*jf,o=t?8:16,a=new yt(new wr(Yy,qy,o),e5());a.position.set(s,Kf,r),a.castShadow=!1,a.receiveShadow=!0,a.frustumCulled=!0,a.renderOrder=2,e.add(a),e.userData.prismCount=1,e.userData.sizes={x:s,y:Kf,z:r,r:Yy,h:qy,prismY:Kf,apronR:jf,segs:o}}function Zy(n){return mt.find(t=>t.kind===n)??null}function i5(){return new ut({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const Pb=4.2,Ib=.16,zb=.55,Ky=3.2,s5=90,Db=1,Lb=1,r5={w:Pb,h:Ib,d:zb,y:0,nFine:Db,nCoarse:Lb,n:0,want:1,x:0,z:0,yaw:0,lipCount:0};function o5(n,t){const e=new _t;e.name="lip",n.add(e);const s={...r5,want:t?Lb:Db};e.userData.sizes=s,e.userData.lipCount=0;const r=Zy("canal");if(!r||Math.hypot(r.x,r.z)<s5)return;const o=Zy("market"),a=(o?.x??0)-r.x,c=(o?.z??0)-r.z,l=Math.atan2(a,c),h=new yt(new ye(Pb,Ib,zb),i5());h.position.set(r.x,Ky,r.z),h.rotation.y=l,h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,h.renderOrder=2,e.add(h),s.y=Ky,s.n=1,s.x=r.x,s.z=r.z,s.yaw=l,s.lipCount=1,e.userData.lipCount=1}function a5(n){return mt.find(t=>t.kind===n)??null}function c5(){return new ut({color:3812374,roughness:.2,metalness:.52,emissive:6966306,emissiveIntensity:.16,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function l5(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const oh=2.6,Sl=.07,E0=oh*.5,bl=17,u5=Math.PI*1.35,jy=90,h5=6,d5=3;function f5(n){return n?d5:h5}function p5(n){return{n:0,want:n,h:oh,r:Sl,y:E0,ring:bl}}function m5(n,t){const e=new _t;e.name="staves",n.add(e);const i=f5(t),s=p5(i);e.userData.staveCounts=s,e.userData.staveCount=0,e.userData.sizes={h:oh,r:Sl,y:E0,ring:bl};const r=a5("ring");if(!r||Math.hypot(r.x,r.z)<jy)return;const o=r.x,a=r.z,l=Math.atan2(-a,-o)+Math.PI,h=i<=1?0:u5/(i-1),d=[];for(let x=0;x<i;x++){const v=l+(x-(i-1)*.5)*h,m=o+Math.cos(v)*bl,p=a+Math.sin(v)*bl;Math.hypot(m,p)<jy||d.push({x:m,y:E0,z:p,ry:Math.atan2(o-m,a-p)})}const u=t?6:8,f=new ge(Sl,Sl,oh,u);l5(f,c5(),d,e),s.n=d.length,e.userData.staveCount=d.length}function Jy(n){return mt.find(t=>t.kind===n)??null}function g5(){return new ut({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const Nb=3.6,Ub=.18,Yg=1.1,Qy=.22,x5=.18,_5=1.04,Jf=x5*.5+Yg*.5+_5,tv=90,Ob=1,kb=1,y5={w:Nb,h:Ub,d:Yg,y:0,offset:0,nFine:Ob,nCoarse:kb,n:0,want:1,x:0,z:0,yaw:0,troughCount:0};function v5(n,t){const e=new _t;e.name="trough",n.add(e);const s={...y5,want:t?kb:Ob};e.userData.sizes=s,e.userData.troughCount=0;const r=Jy("canal");if(!r||Math.hypot(r.x,r.z)<tv)return;const o=Jy("market"),a=(o?.x??0)-r.x,c=(o?.z??0)-r.z,l=Math.hypot(a,c)||1,h=a/l,d=c/l,u=Math.atan2(a,c),f=r.x-h*Jf,x=r.z-d*Jf;if(Math.hypot(f,x)<tv)return;const v=new yt(new ye(Nb,Ub,Yg),g5());v.position.set(f,Qy,x),v.rotation.y=u,v.castShadow=!1,v.receiveShadow=!0,v.frustumCulled=!0,v.renderOrder=2,e.add(v),s.y=Qy,s.offset=Jf,s.n=1,s.x=f,s.z=x,s.yaw=u,s.troughCount=1,e.userData.troughCount=1}function ev(n){return mt.find(t=>t.kind===n)??null}function M5(n){return new Ue({color:3844288,transparent:!0,opacity:n,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:_e,toneMapped:!1})}const T0=2.2,Fb=.06,nv=.47,Oc=.18,Qf=.1,iv=.26,sv=.56,R0=-16,ar=20,rv=90,w5={r:T0,h:Fb,y:0,op:0,opMin:0,opMax:0,rest:0,along:R0,side:ar,x:0,z:0,poolCount:0,discCount:0,segs:0};function S5(n,t){const e=new _t;e.name="pool",n.add(e);const i={...w5};e.userData.sizes=i,e.userData.poolCount=0,e.userData.discCount=0,e.userData.breathing=!1;const s=ev("canal");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<rv)return{tick(){}};const r=ev("market"),o=(r?.x??0)-s.x,a=(r?.z??0)-s.z,c=Math.hypot(o,a)||1,l=o/c,h=a/c,d=-h,u=l,f=Math.hypot(s.x+d*ar,s.z+u*ar),x=Math.hypot(s.x-d*ar,s.z-u*ar),v=f>=x?1:-1,m=s.x+l*R0+d*ar*v,p=s.z+h*R0+u*ar*v;if(Math.hypot(m,p)<rv)return{tick(){}};const w=t?10:20,S=M5(Oc),g=new yt(new ge(T0,T0,Fb,w),S);if(g.position.set(m,nv,p),g.castShadow=!1,g.receiveShadow=!1,g.frustumCulled=!0,g.renderOrder=1,e.add(g),i.x=m,i.y=nv,i.z=p,i.op=Oc,i.opMin=t?Oc:Qf,i.opMax=t?Oc:iv,i.rest=t?0:sv,i.poolCount=1,i.discCount=1,i.segs=w,e.userData.poolCount=1,e.userData.discCount=1,e.userData.breathing=!t,t)return{tick(){}};const M=iv-Qf;return{tick(y){const R=(Math.sin(y*sv)+1)*.5;S.opacity=Qf+R*M}}}function b5(){const n=ji.find(s=>s.id==="nesh"),t=n?.x??-24,e=n?.z??128,i=Math.hypot(t,e)||1;return{nx:t/i,nz:e/i}}function E5(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function T5(){return new ut({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:.16,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}const A0=.9,qg=.28,ov=.14,av=.22,C0=1.6,cv=.12,lv=qg+C0*.5,P0=Math.min(116,Math.max(104,Sn.radius+58)),R5={r:A0,h:qg,y:0,steleW:0,steleH:0,steleD:0,steleY:0,apronR:P0,x:0,z:0,yaw:0,segs:0,watchCount:0,plinthCount:0,steleCount:0};function A5(n,t){const e=new _t;e.name="watch",n.add(e);const i={...R5};e.userData.sizes=i,e.userData.watchCount=0,e.userData.plinthCount=0,e.userData.steleCount=0;const s=b5(),r=s.nx*P0,o=s.nz*P0,a=Math.atan2(r,o),c=t?8:16,l=new yt(new ge(A0,A0,qg,c),E5());if(l.position.set(r,ov,o),l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,e.add(l),i.y=ov,i.x=r,i.z=o,i.yaw=a,i.segs=c,i.watchCount=1,i.plinthCount=1,e.userData.watchCount=1,e.userData.plinthCount=1,t)return;const h=new yt(new ye(av,C0,cv),T5());h.position.set(r,lv,o),h.rotation.y=a,h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,h.renderOrder=2,e.add(h),i.steleW=av,i.steleH=C0,i.steleD=cv,i.steleY=lv,i.steleCount=1,e.userData.steleCount=1}const jr={x:-4050,y:540,z:195},uv=190,hv=14,dv=560,C5=6,P5=3,fv=.055,I5=8319231,pv=.035,z5=-6,D5=86,L5=52,kc=.22,tp=.14,mv=.32,N5=15269880,gv=.7,U5=-5;function xv(n,t){return new Ue({color:n,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!1,side:_e,toneMapped:!1})}function O5(n,t){const e=new _t;e.name="corona",n.add(e);const i=t?P5:C5,s=t?L5:D5,r=t?8:12,o=t?6:10,a=new _t;a.name="corona-core",a.position.set(jr.x,jr.y,jr.z),a.lookAt(0,uv,0),a.frustumCulled=!1,a.castShadow=!1,a.receiveShadow=!1;const c=new _t;c.name="corona-rays",c.frustumCulled=!1;const l=new cs(hv,dv),h=xv(I5,fv);for(let x=0;x<i;x++){const v=new yt(l,h);v.rotation.z=x/i*Math.PI,v.castShadow=!1,v.receiveShadow=!1,v.frustumCulled=!1,v.renderOrder=z5,c.add(v)}a.add(c);const d=xv(N5,kc),u=new yt(new Ci(s,r,o),d);if(u.castShadow=!1,u.receiveShadow=!1,u.frustumCulled=!1,u.renderOrder=U5,a.add(u),e.add(a),e.userData.rayCount=i,e.userData.innerCount=1,e.userData.breathing=!t,e.userData.sizes={x:jr.x,y:jr.y,z:jr.z,lookY:uv,rayW:hv,rayH:dv,rayN:i,rayOp:fv,raySpin:t?0:pv,innerR:s,innerOp:kc,innerOpMin:t?kc:tp,innerOpMax:t?kc:mv,pulse:t?0:gv,segs:r,rings:o},t)return{tick(){}};const f=mv-tp;return{tick(x){c.rotation.z=x*pv;const v=(Math.sin(x*gv)+1)*.5;d.opacity=tp+v*f}}}const Jr={x:-4050,y:540,z:195},Fc={x:0,y:80,z:0},_v=920,yv=640,vv=13934672,Mv=.055,wv=-14,Sv=1480,bv=12615744,Ev=.028,Tv=-15,Rv=2680,Av=42,Cv=3844288,Pv=.035,Iv=1.18,zv=720,Dv=-13;function ep(n,t){return new Ue({color:n,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!1,side:_e,toneMapped:!1})}function k5(n,t){const e=new _t;e.name="vault",n.add(e);const i=t?yv:_v,s=t?20:32,r=new _t;r.name="dusk",r.position.set(Jr.x,Jr.y,Jr.z),r.lookAt(Fc.x,Fc.y,Fc.z),r.frustumCulled=!1,e.add(r);const o=new yt(new yi(i,s),ep(vv,Mv));if(o.renderOrder=wv,o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,r.add(o),!t){const a=new yt(new yi(Sv,s),ep(bv,Ev));a.renderOrder=Tv,a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!1,r.add(a);const c=new yt(new nn(Rv,Av,6,64),ep(Cv,Pv));c.rotation.x=Iv,c.position.y=zv,c.renderOrder=Dv,c.castShadow=!1,c.receiveShadow=!1,c.frustumCulled=!1,e.add(c)}e.userData.duskCount=1,e.userData.haloCount=t?0:1,e.userData.riverCount=t?0:1,e.userData.sizes={duskR:i,duskRFine:_v,duskRCoarse:yv,duskHex:vv,duskOp:Mv,duskOrder:wv,haloR:t?0:Sv,haloHex:bv,haloOp:Ev,haloOrder:Tv,riverR:t?0:Rv,riverTube:t?0:Av,riverHex:Cv,riverOp:Pv,riverRx:Iv,riverY:zv,riverOrder:Dv,lookAtY:Fc.y,coreX:Jr.x,coreY:Jr.y,coreZ:Jr.z,segs:s}}function F5(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Lv(n){return mt.find(t=>t.kind===n)??null}function B5(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function H5(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Nv=.05,Uv=.07,G5=1.5,$5=.6,Ov=18,ir=22,Bc=16,np=90,kv=.82;function V5(n,t){const e=new _t;e.name="rill",n.add(e);const i={n:0,want:0,canalArchive:0};e.userData.segmentCounts=i,e.userData.sizes={y:Nv,h:Uv,side:ir,bulge:Bc,step:Ov};const s=Lv("canal"),r=Lv("archive");if(!s||!r||Math.hypot(s.x,s.z)<np||Math.hypot(r.x,r.z)<np)return;const o=r.x-s.x,a=r.z-s.z,c=Math.hypot(o,a)||1,l=Math.min(.28,s.radius*kv/c),h=Math.min(.28,r.radius*kv/c),d=s.x+o*l,u=s.z+a*l,f=r.x-o*h,x=r.z-a*h,v=(d+f)*.5,m=(u+x)*.5,p=o/c,S=-(a/c),g=p,M=Math.hypot(v+S*ir,m+g*ir),y=Math.hypot(v-S*ir,m-g*ir),R=M>=y?1:-1,_=S*ir*R,b=g*ir*R,A=d+_,C=u+b,E=f+_,U=x+b,k=E-A,O=U-C,V=Math.hypot(k,O)||1,W=Math.max(2,Math.round(V/Ov)),Y=V/W;i.want=W;const tt=[];for(let ht=0;ht<W;ht++){if(t&&ht%2===1)continue;const nt=(ht+.5)/W,Lt=Math.sin(nt*Math.PI)*Bc,te=A+k*nt+S*R*Lt,Ut=C+O*nt+g*R*Lt;if(Math.hypot(te,Ut)<np)continue;const $=.02,at=Math.max(0,nt-$),ot=Math.min(1,nt+$),At=Math.sin(at*Math.PI)*Bc,Ht=Math.sin(ot*Math.PI)*Bc,$t=A+k*at+S*R*At,he=C+O*at+g*R*At,Vt=A+k*ot+S*R*Ht,ce=C+O*ot+g*R*Ht,ve=Math.atan2(Vt-$t,ce-he),me=G5+F5(ht,5)*$5;tt.push({x:te,y:Nv,z:Ut,sx:me,sy:Uv,sz:Y*.94,ry:ve})}const q=new ye(1,1,1);H5(q,B5(),tt,e),i.n=tt.length,i.canalArchive=tt.length}function W5(n){return mt.find(t=>t.kind===n)??null}function X5(){return new ut({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function Y5(){return new ut({color:1314850,roughness:.2,metalness:.38,emissive:3286102,emissiveIntensity:.16,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}const co=0,lo=78,ah=90,cr=22,q5=.82,Bb=3,Hb=2;function Z5(n,t,e,i,s){const r=Math.cos(s),o=Math.sin(s);return{x:n+e*r+i*o,z:t-e*o+i*r}}function K5(n,t){const e=n*n+t*t,i=2*(co*n+lo*t),s=co*co+lo*lo-ah*ah,r=i*i-4*e*s;if(e<1e-8||r<0)return 0;const o=Math.sqrt(r),a=(-i-o)/(2*e),c=(-i+o)/(2*e),l=a>1e-6?a:c;return Math.max(0,Math.min(1,l))}function j5(n,t){return Math.hypot(n,t)<ah?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}const ip=[{sx:1.08,sy:.46,sz:.94,y:.4,ox:.05,oz:-.04,rx:.12,ry:.18,gold:!0},{sx:.76,sy:.36,sz:.68,y:1.02,ox:-.07,oz:.05,rx:-.08,ry:-.46,gold:!1},{sx:.48,sy:.28,sz:.44,y:1.52,ox:.03,oz:.02,rx:.16,ry:.72,gold:!0}],J5={nFine:Bb,nCoarse:Hb,side:cr,hubX:co,hubZ:lo,n:0,want:0,x:0,y:0,z:0,yaw:0,cairnCount:0,stoneCount:0};function Q5(n,t){const e=new _t;e.name="cairn",n.add(e);const i=t?Hb:Bb,s={...J5,want:i};e.userData.sizes=s,e.userData.cairnCount=0,e.userData.stoneCount=0;const r=W5("foundry");if(!r||Math.hypot(r.x,r.z)<ah)return;const o=r.x-co,a=r.z-lo,c=Math.hypot(o,a)||1,l=K5(o,a),h=1-Math.min(.28,r.radius*q5/c);if(h<=l)return;const d=l+(h-l)*.5,u=co+o*d,f=lo+a*d,x=o/c,m=-(a/c),p=x,w=Math.hypot(u+m*cr,f+p*cr),S=Math.hypot(u-m*cr,f-p*cr),g=w<=S?1:-1,M=u+m*cr*g,y=f+p*cr*g;if(j5(M,y))return;const R=Math.atan2(o,a),_=Math.min(i,ip.length),b=X5(),A=Y5(),C=new vo(1,0);for(let E=0;E<_;E++){const U=ip[E],k=Z5(M,y,U.ox,U.oz,R),O=new yt(C,U.gold?b:A);O.position.set(k.x,U.y,k.z),O.rotation.set(U.rx,R+U.ry,0),O.scale.set(U.sx,U.sy,U.sz),O.castShadow=!1,O.receiveShadow=!0,O.frustumCulled=!0,O.renderOrder=2,e.add(O)}s.n=_,s.x=M,s.y=ip[0].y,s.z=y,s.yaw=R,s.cairnCount=1,s.stoneCount=_,e.userData.cairnCount=1,e.userData.stoneCount=_}function Fv(n){return mt.find(t=>t.kind===n)??null}function tN(){return new ut({color:466472,roughness:.22,metalness:.36,emissive:1729912,emissiveIntensity:.16,iridescence:.36,iridescenceIOR:1.3,iridescenceThicknessRange:[90,340],clearcoat:.32,clearcoatRoughness:.34,transparent:!1})}function eN(){return new ut({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function Bv(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const wa=3.6,El=.1,ch=.2,Hv=wa*.5,Gv=wa+ch*.55,Tl=9.4,I0=90,sp=.82,nN=4,iN=3;function sN(n){return n?iN:nN}function rN(n,t){return Math.hypot(n,t)<I0?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function oN(n){return{n:0,posts:0,bulbs:0,want:n,h:wa,r:El,bulbR:ch,side:Tl}}function aN(n,t){const e=new _t;e.name="joinlamps",n.add(e);const i=sN(t),s=oN(i);e.userData.joinLampCounts=s,e.userData.joinLampCount=0,e.userData.sizes={h:wa,r:El,bulbR:ch,yPost:Hv,yBulb:Gv,side:Tl,padLeave:sp};const r=Fv("canal"),o=Fv("market");if(!r||!o||Math.hypot(r.x,r.z)<I0||Math.hypot(o.x,o.z)<I0)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*sp/l),d=Math.min(.28,o.radius*sp/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.hypot(m,p)||1,S=-p/w,g=m/w,M=Math.atan2(m,p),y=[],R=[];for(let b=0;b<i;b++){const A=(b+.5)/i,C=b%2===0?1:-1,E=u+m*A+S*Tl*C,U=f+p*A+g*Tl*C;rN(E,U)||(y.push({x:E,y:Hv,z:U,ry:M}),R.push({x:E,y:Gv,z:U,ry:M}))}const _=t?6:8;Bv(new ge(El,El,wa,_),tN(),y,e),Bv(new xn(ch,0),eN(),R,e),s.n=y.length,s.posts=y.length,s.bulbs=R.length,e.userData.joinLampCount=y.length}function cN(){return new ut({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function lN(n){return new ut({color:1314850,roughness:.28,metalness:.28,emissive:3286102,emissiveIntensity:.16,iridescence:.62,iridescenceIOR:1.31,iridescenceThicknessRange:[80,380],clearcoat:.22,clearcoatRoughness:.44,transparent:!0,opacity:n,depthWrite:!1,side:_e})}function uN(n){return new ut({color:799552,roughness:.26,metalness:.24,emissive:1729912,emissiveIntensity:.14,iridescence:.58,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.2,clearcoatRoughness:.46,transparent:!0,opacity:n,depthWrite:!1,side:_e})}const $v=0,Vv=78,Wv=7,rp=.08,Rl=4.2,Qr=2.8,no=5.8,op=.09,z0=.08,hN=.12,Gb=no-z0,Hc=Gb-Rl*.5,Xv=.46,Yv=.32,dN=-.05,fN=.92,pN=.9,mN=1,gN=1;function Wo(n,t,e,i,s,r,o){n.position.set(t,e,i),n.castShadow=!1,n.receiveShadow=r,n.frustumCulled=!0,n.renderOrder=o,s.add(n)}function xN(n,t){const e=new _t;e.name="hubveil",n.add(e);const i=$v+Wv,s=Vv,r=t?6:8,o=!t,a={t:rp,h:Rl,w:Qr,postH:no,postR:op,hangY:Gb,veilY:Hc,hubX:$v,hubZ:Vv,side:Wv,violetOp:Xv,cyanOp:o?Yv:0,nFine:mN,nCoarse:gN,x:i,y:Hc,z:s,segs:r,veilCount:0,liningCount:0,postCount:0};e.userData.sizes=a,e.userData.veilCount=0,e.userData.liningCount=0,e.userData.postCount=0;const c=cN(),l=new ge(op,op,no,r),h=s-Qr*.5,d=s+Qr*.5;Wo(new yt(l,c),i,no*.5,h,e,!0,2),Wo(new yt(l,c),i,no*.5,d,e,!0,2);const u=new yt(new ye(hN,z0,Qr),c);Wo(u,i,no-z0*.5,s,e,!0,2);const f=new yt(new ye(rp,Rl,Qr),lN(Xv));if(Wo(f,i,Hc,s,e,!1,3),a.veilCount=1,a.postCount=2,e.userData.veilCount=1,e.userData.postCount=2,!o)return;const x=Rl*fN,v=Qr*pN,m=new yt(new ye(rp,x,v),uN(Yv));Wo(m,i+dN,Hc,s,e,!1,3),a.liningCount=1,e.userData.liningCount=1}function _N(n){return mt.find(t=>t.kind===n)??null}function yN(){return new ut({color:2892306,roughness:.26,metalness:.42,emissive:5914656,emissiveIntensity:.12,iridescence:.4,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function vN(){return new ut({color:3812372,roughness:.18,metalness:.46,emissive:15254890,emissiveIntensity:.2,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function qv(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const D0=0,L0=78,N0=90,Sa=3.2,Al=.09,lh=.16,Zv=Sa*.5,Kv=Sa+lh*.45,Cl=10.2,jv=.82,MN=4,wN=3;function SN(n){return n?wN:MN}function bN(n,t){return Math.hypot(n-D0,t-L0)<N0?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function EN(n){return{n:0,posts:0,caps:0,want:n,h:Sa,r:Al,capR:lh,side:Cl}}function TN(n,t){const e=new _t;e.name="aimposts",n.add(e);const i=SN(t),s=EN(i);e.userData.aimPostCounts=s,e.userData.aimPostCount=0,e.userData.sizes={h:Sa,r:Al,capR:lh,yPost:Zv,yCap:Kv,side:Cl,padLeave:jv};const r=_N("overlook");if(!r||Math.hypot(r.x,r.z)<N0)return;const o=r.x-D0,a=r.z-L0,c=Math.hypot(o,a)||1,l=Math.min(.28,N0/c),h=Math.min(.28,r.radius*jv/c),d=D0+o*l,u=L0+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=_%2===0?1:-1,C=d+v*b+w*Cl*A,E=u+m*b+S*Cl*A;bN(C,E)||(M.push({x:C,y:Zv,z:E,ry:g}),y.push({x:C,y:Kv,z:E,ry:g}))}const R=t?6:8;qv(new ge(Al,Al,Sa,R),yN(),M,e),qv(new xn(lh,0),vN(),y,e),s.n=M.length,s.posts=M.length,s.caps=y.length,e.userData.aimPostCount=M.length}function RN(n){return mt.find(t=>t.kind===n)??null}function AN(){return new ut({color:2760720,roughness:.28,metalness:.4,emissive:5914656,emissiveIntensity:.12,iridescence:.38,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.34,clearcoatRoughness:.32,transparent:!1})}function CN(){return new ut({color:3812372,roughness:.2,metalness:.44,emissive:16765040,emissiveIntensity:.18,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function Jv(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const U0=0,O0=78,k0=90,ba=1.15,ap=.11,Qv=.42,uh=.72,tM=.08,eM=ba*.5,nM=ba+uh*.42,Pl=11.4,iM=.82,PN=4,IN=3;function zN(n){return n?IN:PN}function DN(n,t){return Math.hypot(n-U0,t-O0)<k0?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function LN(n){return{n:0,stems:0,slabs:0,want:n,stemH:ba,slabH:uh,side:Pl}}function NN(n,t){const e=new _t;e.name="namestones",n.add(e);const i=zN(t),s=LN(i);e.userData.nameStoneCounts=s,e.userData.nameStoneCount=0,e.userData.sizes={stemH:ba,stemR:ap,slabW:Qv,slabH:uh,slabT:tM,yStem:eM,ySlab:nM,side:Pl,padLeave:iM};const r=RN("archive");if(!r||Math.hypot(r.x,r.z)<k0)return;const o=r.x-U0,a=r.z-O0,c=Math.hypot(o,a)||1,l=Math.min(.28,k0/c),h=Math.min(.28,r.radius*iM/c),d=U0+o*l,u=O0+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=_%2===0?1:-1,C=d+v*b+w*Pl*A,E=u+m*b+S*Pl*A;DN(C,E)||(M.push({x:C,y:eM,z:E,ry:g}),y.push({x:C,y:nM,z:E,ry:g}))}const R=t?6:8;Jv(new ge(ap,ap,ba,R),AN(),M,e),Jv(new ye(tM,uh,Qv),CN(),y,e),s.n=M.length,s.stems=M.length,s.slabs=y.length,e.userData.nameStoneCount=M.length}function UN(n){return mt.find(t=>t.kind===n)??null}function ON(){return new ut({color:1314850,roughness:.26,metalness:.38,emissive:3286102,emissiveIntensity:.14,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[80,360],clearcoat:.34,clearcoatRoughness:.3,transparent:!1})}function kN(){return new ut({color:1840172,roughness:.18,metalness:.42,emissive:9071871,emissiveIntensity:.2,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function sM(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const F0=0,B0=78,H0=90,Ea=3.1,Il=.09,hh=.15,rM=Ea*.5,oM=Ea+hh*.45,zl=10.8,aM=.82,FN=4,BN=3;function HN(n){return n?BN:FN}function GN(n,t){return Math.hypot(n-F0,t-B0)<H0?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function $N(n){return{n:0,posts:0,caps:0,want:n,h:Ea,r:Il,capR:hh,side:zl}}function VN(n,t){const e=new _t;e.name="breathposts",n.add(e);const i=HN(t),s=$N(i);e.userData.breathPostCounts=s,e.userData.breathPostCount=0,e.userData.sizes={h:Ea,r:Il,capR:hh,yPost:rM,yCap:oM,side:zl,padLeave:aM};const r=UN("ring");if(!r||Math.hypot(r.x,r.z)<H0)return;const o=r.x-F0,a=r.z-B0,c=Math.hypot(o,a)||1,l=Math.min(.28,H0/c),h=Math.min(.28,r.radius*aM/c),d=F0+o*l,u=B0+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=_%2===0?1:-1,C=d+v*b+w*zl*A,E=u+m*b+S*zl*A;GN(C,E)||(M.push({x:C,y:rM,z:E,ry:g}),y.push({x:C,y:oM,z:E,ry:g}))}const R=t?6:8;sM(new ge(Il,Il,Ea,R),ON(),M,e),sM(new xn(hh,0),kN(),y,e),s.n=M.length,s.posts=M.length,s.caps=y.length,e.userData.breathPostCount=M.length}function WN(n){return mt.find(t=>t.kind===n)??null}function XN(){return new ut({color:2892306,roughness:.26,metalness:.42,emissive:5914656,emissiveIntensity:.12,iridescence:.4,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function YN(){return new ut({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function cM(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const G0=0,$0=78,V0=90,Ta=3.4,Dl=.1,dh=.18,lM=Ta*.5,uM=Ta+dh*.55,Ll=12.6,hM=.82,qN=4,ZN=3;function KN(n){return n?ZN:qN}function jN(n,t){return Math.hypot(n-G0,t-$0)<V0?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function JN(n){return{n:0,posts:0,bulbs:0,want:n,h:Ta,r:Dl,bulbR:dh,side:Ll}}function QN(n,t){const e=new _t;e.name="foundrylamps",n.add(e);const i=KN(t),s=JN(i);e.userData.foundryLampCounts=s,e.userData.foundryLampCount=0,e.userData.sizes={h:Ta,r:Dl,bulbR:dh,yPost:lM,yBulb:uM,side:Ll,padLeave:hM};const r=WN("foundry");if(!r||Math.hypot(r.x,r.z)<V0)return;const o=r.x-G0,a=r.z-$0,c=Math.hypot(o,a)||1,l=Math.min(.28,V0/c),h=Math.min(.28,r.radius*hM/c),d=G0+o*l,u=$0+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=_%2===0?1:-1,C=d+v*b+w*Ll*A,E=u+m*b+S*Ll*A;jN(C,E)||(M.push({x:C,y:lM,z:E,ry:g}),y.push({x:C,y:uM,z:E,ry:g}))}const R=t?6:8;cM(new ge(Dl,Dl,Ta,R),XN(),M,e),cM(new xn(dh,0),YN(),y,e),s.n=M.length,s.posts=M.length,s.bulbs=y.length,e.userData.foundryLampCount=M.length}function tU(n){return mt.find(t=>t.kind===n)??null}function eU(){return new ut({color:1188908,roughness:.28,metalness:.4,emissive:1727078,emissiveIntensity:.14,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.34,clearcoatRoughness:.32,transparent:!1})}function nU(){return new ut({color:3811858,roughness:.18,metalness:.46,emissive:15254890,emissiveIntensity:.2,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}function dM(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const W0=0,X0=78,Y0=90,Ra=3.15,Nl=.11,fh=.16,fM=Ra*.5,pM=Ra+fh*.5,Ul=11.2,mM=.82,iU=4,sU=3;function rU(n){return n?sU:iU}function oU(n,t){return Math.hypot(n-W0,t-X0)<Y0?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function aU(n){return{n:0,posts:0,caps:0,want:n,h:Ra,r:Nl,capR:fh,side:Ul}}function cU(n,t){const e=new _t;e.name="canalposts",n.add(e);const i=rU(t),s=aU(i);e.userData.canalPostCounts=s,e.userData.canalPostCount=0,e.userData.sizes={h:Ra,r:Nl,capR:fh,yPost:fM,yCap:pM,side:Ul,padLeave:mM};const r=tU("canal");if(!r||Math.hypot(r.x,r.z)<Y0)return;const o=r.x-W0,a=r.z-X0,c=Math.hypot(o,a)||1,l=Math.min(.28,Y0/c),h=Math.min(.28,r.radius*mM/c),d=W0+o*l,u=X0+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=_%2===0?1:-1,C=d+v*b+w*Ul*A,E=u+m*b+S*Ul*A;oU(C,E)||(M.push({x:C,y:fM,z:E,ry:g}),y.push({x:C,y:pM,z:E,ry:g}))}const R=t?6:8;dM(new ge(Nl,Nl,Ra,R),eU(),M,e),dM(new xn(fh,0),nU(),y,e),s.n=M.length,s.posts=M.length,s.caps=y.length,e.userData.canalPostCount=M.length}function Gc(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function gM(n,t){return new Ue({color:n,transparent:!0,opacity:t,blending:mn,depthWrite:!1,side:_e,toneMapped:!1})}function xM(n,t){return new ut({color:n,roughness:.06,metalness:.12,emissive:t,emissiveIntensity:.62,iridescence:1,iridescenceIOR:1.32,iridescenceThicknessRange:[50,580],clearcoat:.94,clearcoatRoughness:.06,sheen:.7,sheenColor:new se(8319231),envMapIntensity:1.8})}function lU(){return new ut({color:15254634,roughness:.14,metalness:.72,emissive:12886080,emissiveIntensity:.5,iridescence:.48,clearcoat:.78,clearcoatRoughness:.12})}function uU(n){switch(n){case"foundry":return{glass:16756800,crystal:15254634,emit:12875808};case"canal":return{glass:3073791,crystal:8319231,emit:1747136};case"grove":return{glass:15253616,crystal:13938784,emit:9072672};case"beacon":case"overlook":return{glass:8319231,crystal:13170943,emit:3854568};case"archive":return{glass:15254634,crystal:15782008,emit:12886080};case"gate":return{glass:11832575,crystal:13148415,emit:6965416};default:return{glass:8319231,crystal:11069680,emit:2793656}}}function hU(n,t){const e=new _t;e.name="ward-glass",n.add(e);const i=new xn(1,0),s=new nn(1,.045,6,t?18:28),r=new ge(1,1.08,1,t?6:8,1,!0),o=new nn(1,.03,5,t?16:24),a=lU();mt.forEach((c,l)=>{const h=uU(c.kind),d=c.kind==="beacon"?124:c.kind==="overlook"?108:c.kind==="archive"?100:c.kind==="canal"?28:72,u=c.kind==="canal"?22:c.kind==="terrace"?40:c.kind==="beacon"?14:28,f=new _t;f.position.set(c.x,0,c.z),f.name=`ward-glass-${c.kind}`;const x=new yt(i,xM(h.crystal,h.emit));x.scale.set(u*.22,d*.18,u*.22),x.position.y=10+d*.55,x.rotation.y=Gc(l,3)*Math.PI,x.castShadow=!0,f.add(x);const v=new yt(s,a);if(v.scale.set(u*.48,u*.48,u*.48),v.rotation.x=Math.PI/2,v.position.y=8+d*.38,f.add(v),!t){const S=new yt(s,a);S.scale.set(u*.32,u*.32,u*.32),S.rotation.set(.7,.2,.4),S.position.y=8+d*.48,f.add(S)}const m=new yt(r,gM(h.glass,.14));m.scale.set(u*.36,d*.62,u*.36),m.position.y=8+d*.28,m.renderOrder=2,f.add(m);const p=new yt(o,gM(h.glass,.28));p.scale.set(u*.55,u*.55,u*.55),p.rotation.x=Math.PI/2,p.position.y=8+d*.22,f.add(p);const w=t?4:8;for(let S=0;S<w;S++){const g=S/w*Math.PI*2+Gc(l,S)*.2,M=new yt(i,xM(h.crystal,h.emit)),y=u*.62;M.position.set(Math.cos(g)*y,6+Gc(l+S,9)*d*.35,Math.sin(g)*y),M.scale.set(1.6,4.2+Gc(l,S+4)*3.2,1.6),M.rotation.y=g,M.castShadow=!1,f.add(M)}e.add(f)})}function dU(n){return mt.find(t=>t.kind===n)??null}function fU(){return new ut({color:1839656,roughness:.26,metalness:.38,emissive:4860024,emissiveIntensity:.16,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[80,380],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function pU(){return new ut({color:3811858,roughness:.17,metalness:.48,emissive:15254890,emissiveIntensity:.18,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[70,320],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function _M(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const q0=0,Z0=78,K0=90,Aa=2.88,Ol=.1,ph=.18,yM=Aa*.5,vM=Aa+ph*.5,kl=10.4,MM=.8,mU=5,gU=3;function xU(n){return n?gU:mU}function _U(n,t){return Math.hypot(n-q0,t-Z0)<K0?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function yU(n){return{n:0,posts:0,caps:0,want:n,h:Aa,r:Ol,capR:ph,side:kl}}function vU(n,t){const e=new _t;e.name="gateposts",n.add(e);const i=xU(t),s=yU(i);e.userData.gatePostCounts=s,e.userData.gatePostCount=0,e.userData.sizes={h:Aa,r:Ol,capR:ph,yPost:yM,yCap:vM,side:kl,padLeave:MM};const r=dU("gate");if(!r||Math.hypot(r.x,r.z)<K0)return;const o=r.x-q0,a=r.z-Z0,c=Math.hypot(o,a)||1,l=Math.min(.28,K0/c),h=Math.min(.28,r.radius*MM/c),d=q0+o*l,u=Z0+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=_%2===0?1:-1,C=d+v*b+w*kl*A,E=u+m*b+S*kl*A;_U(C,E)||(M.push({x:C,y:yM,z:E,ry:g}),y.push({x:C,y:vM,z:E,ry:g}))}const R=t?6:8;_M(new ge(Ol,Ol,Aa,R),fU(),M,e),_M(new xn(ph,0),pU(),y,e),s.n=M.length,s.posts=M.length,s.caps=y.length,e.userData.gatePostCount=M.length}function MU(n){return mt.find(t=>t.kind===n)??null}function wU(){return new ut({color:1057836,roughness:.24,metalness:.4,emissive:1727078,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.38,clearcoatRoughness:.28,transparent:!1})}function SU(){return new ut({color:1456196,roughness:.15,metalness:.42,emissive:3073791,emissiveIntensity:.24,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[70,320],clearcoat:.5,clearcoatRoughness:.2,transparent:!1})}function wM(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const j0=0,J0=78,Q0=90,Ca=3.55,Fl=.09,tm=.28,em=.035,SM=Ca*.5,bM=Ca+em,Bl=13.6,EM=.82,bU=4,EU=3;function TU(n){return n?EU:bU}function RU(n,t){return Math.hypot(n-j0,t-J0)<Q0?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function AU(n){return{n:0,posts:0,rings:0,want:n,h:Ca,r:Fl,ringR:tm,side:Bl}}function CU(n,t){const e=new _t;e.name="spanposts",n.add(e);const i=TU(t),s=AU(i);e.userData.spanPostCounts=s,e.userData.spanPostCount=0,e.userData.sizes={h:Ca,r:Fl,ringR:tm,ringT:em,yPost:SM,yRing:bM,side:Bl,padLeave:EM};const r=MU("bridge");if(!r||Math.hypot(r.x,r.z)<Q0)return;const o=r.x-j0,a=r.z-J0,c=Math.hypot(o,a)||1,l=Math.min(.28,Q0/c),h=Math.min(.28,r.radius*EM/c),d=j0+o*l,u=J0+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let b=0;b<i;b++){const A=(b+.5)/i,C=b%2===0?1:-1,E=d+v*A+w*Bl*C,U=u+m*A+S*Bl*C;RU(E,U)||(M.push({x:E,y:SM,z:U,rx:0,ry:g}),y.push({x:E,y:bM,z:U,rx:Math.PI/2,ry:g}))}const R=t?6:8,_=t?14:22;wM(new ge(Fl,Fl,Ca,R),wU(),M,e),wM(new nn(tm,em,6,_),SU(),y,e),s.n=M.length,s.posts=M.length,s.rings=y.length,e.userData.spanPostCount=M.length}function PU(n){return mt.find(t=>t.kind===n)??null}function IU(){return new ut({color:1445922,roughness:.26,metalness:.36,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[80,360],clearcoat:.34,clearcoatRoughness:.3,transparent:!1})}function zU(){return new ut({color:1840172,roughness:.16,metalness:.4,emissive:10187007,emissiveIntensity:.2,iridescence:.54,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.22,transparent:!1})}function TM(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const nm=0,im=78,sm=90,Pa=2.62,Hl=.1,rm=.32,RM=Pa*.5,AM=Pa+.04,Gl=9.6,CM=.82,DU=4,LU=3;function NU(n){return n?LU:DU}function UU(n,t){return Math.hypot(n-nm,t-im)<sm?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function OU(n){return{n:0,posts:0,discs:0,want:n,h:Pa,r:Hl,discR:rm,side:Gl}}function kU(n,t){const e=new _t;e.name="terraceposts",n.add(e);const i=NU(t),s=OU(i);e.userData.terracePostCounts=s,e.userData.terracePostCount=0,e.userData.sizes={h:Pa,r:Hl,discR:rm,yPost:RM,yDisc:AM,side:Gl,padLeave:CM};const r=PU("terrace");if(!r||Math.hypot(r.x,r.z)<sm)return;const o=r.x-nm,a=r.z-im,c=Math.hypot(o,a)||1,l=Math.min(.28,sm/c),h=Math.min(.28,r.radius*CM/c),d=nm+o*l,u=im+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=_%2===0?1:-1,C=d+v*b+w*Gl*A,E=u+m*b+S*Gl*A;UU(C,E)||(M.push({x:C,y:RM,z:E,rx:0,ry:g}),y.push({x:C,y:AM,z:E,rx:Math.PI/2,ry:g}))}const R=t?6:8;TM(new ge(Hl,Hl,Pa,R),IU(),M,e),TM(new yi(rm,R),zU(),y,e),s.n=M.length,s.posts=M.length,s.discs=y.length,e.userData.terracePostCount=M.length}function FU(n){return mt.find(t=>t.kind===n)??null}function BU(){return new ut({color:2760720,roughness:.28,metalness:.4,emissive:5914656,emissiveIntensity:.12,iridescence:.38,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.34,clearcoatRoughness:.32,transparent:!1})}function HU(){return new ut({color:3812372,roughness:.18,metalness:.46,emissive:13148240,emissiveIntensity:.2,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function PM(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const om=0,am=78,cm=90,Ia=1.35,cp=.12,mh=.26,IM=Ia*.5,zM=Ia+mh*.55,$l=14.2,DM=.82,GU=4,$U=3;function VU(n){return n?$U:GU}function WU(n,t){return Math.hypot(n-om,t-am)<cm?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function XU(n){return{n:0,stems:0,hearts:0,want:n,stemH:Ia,heartR:mh,side:$l}}function YU(n,t){const e=new _t;e.name="veinstones",n.add(e);const i=VU(t),s=XU(i);e.userData.veinStoneCounts=s,e.userData.veinStoneCount=0,e.userData.sizes={stemH:Ia,stemR:cp,heartR:mh,yStem:IM,yHeart:zM,side:$l,padLeave:DM};const r=FU("wild");if(!r||Math.hypot(r.x,r.z)<cm)return;const o=r.x-om,a=r.z-am,c=Math.hypot(o,a)||1,l=Math.min(.28,cm/c),h=Math.min(.28,r.radius*DM/c),d=om+o*l,u=am+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=_%2===0?1:-1,C=d+v*b+w*$l*A,E=u+m*b+S*$l*A;WU(C,E)||(M.push({x:C,y:IM,z:E,ry:g}),y.push({x:C,y:zM,z:E,ry:g+.4}))}const R=t?6:8;PM(new ge(cp,cp,Ia,R),BU(),M,e),PM(new vo(mh,0),HU(),y,e),s.n=M.length,s.stems=M.length,s.hearts=y.length,e.userData.veinStoneCount=M.length}function qU(n){return mt.find(t=>t.kind===n)??null}function ZU(){return new ut({color:1576994,roughness:.26,metalness:.38,emissive:3810400,emissiveIntensity:.15,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[80,380],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function KU(){return new ut({color:1456196,roughness:.16,metalness:.4,emissive:8319231,emissiveIntensity:.22,iridescence:.54,iridescenceIOR:1.32,iridescenceThicknessRange:[70,320],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function LM(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const lm=0,um=78,hm=90,za=3.05,Vl=.09,dm=.2,fm=.42,NM=za*.5,UM=za+fm*.42,Wl=16.8,OM=.82,jU=4,JU=3;function QU(n){return n?JU:jU}function tO(n,t){return Math.hypot(n-lm,t-um)<hm?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function eO(n){return{n:0,posts:0,cones:0,want:n,h:za,r:Vl,coneR:dm,side:Wl}}function nO(n,t){const e=new _t;e.name="hailposts",n.add(e);const i=QU(t),s=eO(i);e.userData.hailPostCounts=s,e.userData.hailPostCount=0,e.userData.sizes={h:za,r:Vl,coneR:dm,coneH:fm,yPost:NM,yCone:UM,side:Wl,padLeave:OM};const r=qU("beacon");if(!r||Math.hypot(r.x,r.z)<hm)return;const o=r.x-lm,a=r.z-um,c=Math.hypot(o,a)||1,l=Math.min(.28,hm/c),h=Math.min(.28,r.radius*OM/c),d=lm+o*l,u=um+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=_%2===0?1:-1,C=d+v*b+w*Wl*A,E=u+m*b+S*Wl*A;tO(C,E)||(M.push({x:C,y:NM,z:E,ry:g}),y.push({x:C,y:UM,z:E,ry:g}))}const R=t?6:8;LM(new ge(Vl,Vl,za,R),ZU(),M,e),LM(new wr(dm,fm,R),KU(),y,e),s.n=M.length,s.posts=M.length,s.cones=y.length,e.userData.hailPostCount=M.length}function iO(n){return mt.find(t=>t.kind===n)??null}function sO(){return new ut({color:2892306,roughness:.26,metalness:.42,emissive:5914656,emissiveIntensity:.12,iridescence:.4,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function rO(){return new ut({color:3811858,roughness:.17,metalness:.46,emissive:15254890,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function kM(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const pm=0,mm=78,gm=90,Da=2.74,Xl=.11,gh=.2,FM=Da*.5,BM=Da+gh*.55,Yl=15.2,HM=.82,oO=4,aO=3;function cO(n){return n?aO:oO}function lO(n,t){return Math.hypot(n-pm,t-mm)<gm?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function uO(n){return{n:0,posts:0,fruit:0,want:n,h:Da,r:Xl,fruitR:gh,side:Yl}}function hO(n,t){const e=new _t;e.name="orchardposts",n.add(e);const i=cO(t),s=uO(i);e.userData.orchardPostCounts=s,e.userData.orchardPostCount=0,e.userData.sizes={h:Da,r:Xl,fruitR:gh,yPost:FM,yFruit:BM,side:Yl,padLeave:HM};const r=iO("grove");if(!r||Math.hypot(r.x,r.z)<gm)return;const o=r.x-pm,a=r.z-mm,c=Math.hypot(o,a)||1,l=Math.min(.28,gm/c),h=Math.min(.28,r.radius*HM/c),d=pm+o*l,u=mm+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=_%2===0?1:-1,C=d+v*b+w*Yl*A,E=u+m*b+S*Yl*A;lO(C,E)||(M.push({x:C,y:FM,z:E,ry:g}),y.push({x:C,y:BM,z:E,ry:g+.55}))}const R=t?6:8;kM(new ge(Xl,Xl,Da,R),sO(),M,e),kM(new xn(gh,0),rO(),y,e),s.n=M.length,s.posts=M.length,s.fruit=y.length,e.userData.orchardPostCount=M.length}function GM(n){return mt.find(t=>t.kind===n)??null}function dO(){return new ut({color:1057836,roughness:.24,metalness:.38,emissive:1727078,emissiveIntensity:.14,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function fO(){return new ut({color:3812372,roughness:.18,metalness:.46,emissive:13148240,emissiveIntensity:.2,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function $M(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const xm=0,_m=78,ym=90,vm=.11,Mm=2.18,od=Mm+vm*2,xh=.24,VM=od*.5,WM=od+xh*.5,ql=17.4,lp=.82,pO=4,mO=3;function gO(n){return n?mO:pO}function xO(n,t){return Math.hypot(n-xm,t-_m)<ym?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function _O(n){return{n:0,stems:0,hearts:0,want:n,h:od,heartR:xh,side:ql}}function yO(n,t){const e=new _t;e.name="kilnmarks",n.add(e);const i=gO(t),s=_O(i);e.userData.kilnMarkCounts=s,e.userData.kilnMarkCount=0,e.userData.sizes={h:od,capR:vm,capLen:Mm,heartR:xh,yPost:VM,yHeart:WM,side:ql,padLeave:lp};const r=GM("market"),o=GM("foundry");if(!r||!o||Math.hypot(r.x-xm,r.z-_m)<ym||Math.hypot(o.x-xm,o.z-_m)<ym)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*lp/l),d=Math.min(.28,o.radius*lp/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.hypot(m,p)||1,S=-p/w,g=m/w,M=Math.atan2(m,p),y=[],R=[];for(let b=0;b<i;b++){const A=(b+.5)/i,C=b%2===0?1:-1,E=u+m*A+S*ql*C,U=f+p*A+g*ql*C;xO(E,U)||(y.push({x:E,y:VM,z:U,ry:M}),R.push({x:E,y:WM,z:U,ry:M+.45}))}const _=t?6:8;$M(new _g(vm,Mm,4,_),dO(),y,e),$M(new vo(xh,0),fO(),R,e),s.n=y.length,s.stems=y.length,s.hearts=R.length,e.userData.kilnMarkCount=y.length}function XM(n){return mt.find(t=>t.kind===n)??null}function vO(){return new ut({color:1445922,roughness:.26,metalness:.34,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[80,360],clearcoat:.34,clearcoatRoughness:.3,transparent:!1})}function MO(){return new ut({color:3811858,roughness:.17,metalness:.46,emissive:15254890,emissiveIntensity:.18,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[70,320],clearcoat:.46,clearcoatRoughness:.22,transparent:!1})}function YM(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const wm=0,Sm=78,bm=90,qM=.22,La=2.28,ZM=.14,Em=.3,Tm=.04,KM=La*.5,jM=La+Tm,Zl=18.6,up=.82,wO=4,SO=3;function bO(n){return n?SO:wO}function EO(n,t){return Math.hypot(n-wm,t-Sm)<bm?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function TO(n){return{n:0,steles:0,rings:0,want:n,h:La,ringR:Em,side:Zl}}function RO(n,t){const e=new _t;e.name="reststeles",n.add(e);const i=bO(t),s=TO(i);e.userData.restSteleCounts=s,e.userData.restSteleCount=0,e.userData.sizes={w:qM,h:La,d:ZM,ringR:Em,ringT:Tm,yStele:KM,yRing:jM,side:Zl,padLeave:up};const r=XM("terrace"),o=XM("gate");if(!r||!o||Math.hypot(r.x-wm,r.z-Sm)<bm||Math.hypot(o.x-wm,o.z-Sm)<bm)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*up/l),d=Math.min(.28,o.radius*up/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.hypot(m,p)||1,S=-p/w,g=m/w,M=Math.atan2(m,p),y=[],R=[];for(let b=0;b<i;b++){const A=(b+.5)/i,C=b%2===0?1:-1,E=u+m*A+S*Zl*C,U=f+p*A+g*Zl*C;EO(E,U)||(y.push({x:E,y:KM,z:U,rx:0,ry:M}),R.push({x:E,y:jM,z:U,rx:Math.PI/2,ry:M}))}const _=t?14:22;YM(new ye(qM,La,ZM),vO(),y,e),YM(new nn(Em,Tm,6,_),MO(),R,e),s.n=y.length,s.steles=y.length,s.rings=R.length,e.userData.restSteleCount=y.length}function JM(n){return mt.find(t=>t.kind===n)??null}function AO(){return new ut({color:1057836,roughness:.24,metalness:.4,emissive:1727078,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.38,clearcoatRoughness:.28,transparent:!1})}function CO(){return new ut({color:1456196,roughness:.12,metalness:.28,emissive:8319231,emissiveIntensity:.26,iridescence:.62,iridescenceIOR:1.33,iridescenceThicknessRange:[60,300],clearcoat:.56,clearcoatRoughness:.16,transparent:!1})}function QM(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Rm=0,Am=78,Cm=90,tw=.2,Na=2.46,_h=.18,ew=Na*.5,nw=Na+_h*.35,Kl=19.4,hp=.82,PO=4,IO=3;function zO(n){return n?IO:PO}function DO(n,t){return Math.hypot(n-Rm,t-Am)<Cm?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function LO(n){return{n:0,cones:0,kisses:0,want:n,coneH:Na,kissR:_h,side:Kl}}function NO(n,t){const e=new _t;e.name="spanlands",n.add(e);const i=zO(t),s=LO(i);e.userData.spanLandCounts=s,e.userData.spanLandCount=0,e.userData.sizes={coneR:tw,coneH:Na,kissR:_h,yCone:ew,yKiss:nw,side:Kl,padLeave:hp};const r=JM("bridge"),o=JM("wild");if(!r||!o||Math.hypot(r.x-Rm,r.z-Am)<Cm||Math.hypot(o.x-Rm,o.z-Am)<Cm)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*hp/l),d=Math.min(.28,o.radius*hp/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.hypot(m,p)||1,S=-p/w,g=m/w,M=Math.atan2(m,p),y=[],R=[];for(let b=0;b<i;b++){const A=(b+.5)/i,C=b%2===0?1:-1,E=u+m*A+S*Kl*C,U=f+p*A+g*Kl*C;DO(E,U)||(y.push({x:E,y:ew,z:U,ry:M}),R.push({x:E,y:nw,z:U,ry:M}))}const _=t?6:8;QM(new wr(tw,Na,_),AO(),y,e),QM(new Ci(_h,_,_),CO(),R,e),s.n=y.length,s.cones=y.length,s.kisses=R.length,e.userData.spanLandCount=y.length}function iw(n){return mt.find(t=>t.kind===n)??null}function UO(){return new ut({color:3812372,roughness:.18,metalness:.42,emissive:13148240,emissiveIntensity:.18,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function OO(){return new ut({color:1456196,roughness:.12,metalness:.26,emissive:8319231,emissiveIntensity:.24,iridescence:.6,iridescenceIOR:1.33,iridescenceThicknessRange:[60,300],clearcoat:.54,clearcoatRoughness:.18,transparent:!1})}function sw(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Pm=0,Im=78,zm=90,uo=1.72,yh=.16,rw=0,ow=uo+yh*.4,jl=21.2,dp=.82,kO=4,FO=3;function BO(n){return n?FO:kO}function HO(n,t){return Math.hypot(n-Pm,t-Im)<zm?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function GO(n){const t=[new xt(.26,0),new xt(.22,uo*.28),new xt(.14,uo*.62),new xt(.05,uo)];return new Mo(t,n)}function $O(n){return{n:0,lathes:0,kisses:0,want:n,stemH:uo,kissR:yh,side:jl}}function VO(n,t){const e=new _t;e.name="leftoverposts",n.add(e);const i=BO(t),s=$O(i);e.userData.leftoverPostCounts=s,e.userData.leftoverPostCount=0,e.userData.sizes={stemH:uo,kissR:yh,yLathe:rw,yKiss:ow,side:jl,padLeave:dp};const r=iw("archive"),o=iw("overlook");if(!r||!o||Math.hypot(r.x-Pm,r.z-Im)<zm||Math.hypot(o.x-Pm,o.z-Im)<zm)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*dp/l),d=Math.min(.28,o.radius*dp/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.hypot(m,p)||1,S=-p/w,g=m/w,M=Math.atan2(m,p),y=[],R=[];for(let b=0;b<i;b++){const A=(b+.5)/i,C=b%2===0?1:-1,E=u+m*A+S*jl*C,U=f+p*A+g*jl*C;HO(E,U)||(y.push({x:E,y:rw,z:U,ry:M}),R.push({x:E,y:ow,z:U,ry:M}))}const _=t?8:12;sw(GO(_),UO(),y,e),sw(new Ci(yh,_,_),OO(),R,e),s.n=y.length,s.lathes=y.length,s.kisses=R.length,e.userData.leftoverPostCount=y.length}function WO(n){return mt.find(t=>t.kind===n)??null}function XO(){return new ut({color:2892306,roughness:.28,metalness:.32,emissive:5914656,emissiveIntensity:.12,iridescence:.4,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.34,clearcoatRoughness:.32,transparent:!1})}function YO(){return new ut({color:3811858,roughness:.16,metalness:.44,emissive:15254890,emissiveIntensity:.2,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.22,transparent:!1})}function aw(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Jl=0,Ql=78,Dm=90,cw=.07,Ua=1.48,lw=.38,vh=.16,uw=Ua*.5,hw=Ua+vh*.45,tu=8.8,dw=.82,qO=4,ZO=3;function KO(n){return n?ZO:qO}function jO(n,t){return Math.hypot(n-Jl,t-Ql)<Dm?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function JO(n){return{n:0,tabs:0,fills:0,want:n,h:Ua,fillR:vh,side:tu}}function QO(n,t){const e=new _t;e.name="papersteles",n.add(e);const i=KO(t),s=JO(i);e.userData.paperSteleCounts=s,e.userData.paperSteleCount=0,e.userData.sizes={w:cw,h:Ua,d:lw,fillR:vh,yTab:uw,yFill:hw,side:tu,padLeave:dw};const r=WO("market");if(!r||Math.hypot(r.x-Jl,r.z-Ql)<Dm)return;const o=r.x-Jl,a=r.z-Ql,c=Math.hypot(o,a)||1,l=Math.min(.28,Dm/c),h=Math.min(.28,r.radius*dw/c),d=Jl+o*l,u=Ql+a*l,f=r.x-o*h,x=r.z-a*h,v=f-d,m=x-u,p=Math.hypot(v,m)||1,w=-m/p,S=v/p,g=Math.atan2(v,m),M=[],y=[];for(let R=0;R<i;R++){const _=(R+.5)/i,b=R%2===0?1:-1,A=d+v*_+w*tu*b,C=u+m*_+S*tu*b;jO(A,C)||(M.push({x:A,y:uw,z:C,ry:g}),y.push({x:A,y:hw,z:C,ry:g+.5}))}aw(new ye(cw,Ua,lw),XO(),M,e),aw(new xn(vh,0),YO(),y,e),s.n=M.length,s.tabs=M.length,s.fills=y.length,e.userData.paperSteleCount=M.length}function fw(n){return mt.find(t=>t.kind===n)??null}function tk(){return new ut({color:1576994,roughness:.26,metalness:.36,emissive:3810400,emissiveIntensity:.15,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[80,380],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function ek(){return new ut({color:1456196,roughness:.15,metalness:.4,emissive:3073791,emissiveIntensity:.22,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[70,320],clearcoat:.5,clearcoatRoughness:.2,transparent:!1})}function pw(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Lm=0,Nm=78,Um=90,Oa=1.08,fp=.14,Mh=.42,mw=.045,gw=Oa*.5,xw=Oa+Mh*.15,eu=23.4,pp=.82,nk=4,ik=3;function sk(n){return n?ik:nk}function rk(n,t){return Math.hypot(n-Lm,t-Nm)<Um?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function ok(n){return{n:0,peds:0,hoops:0,want:n,pedH:Oa,hoopR:Mh,side:eu}}function ak(n,t){const e=new _t;e.name="hailring",n.add(e);const i=sk(t),s=ok(i);e.userData.hailRingCounts=s,e.userData.hailRingCount=0,e.userData.sizes={pedH:Oa,pedR:fp,hoopR:Mh,hoopT:mw,yPed:gw,yHoop:xw,side:eu,padLeave:pp};const r=fw("beacon"),o=fw("ring");if(!r||!o||Math.hypot(r.x-Lm,r.z-Nm)<Um||Math.hypot(o.x-Lm,o.z-Nm)<Um)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*pp/l),d=Math.min(.28,o.radius*pp/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.hypot(m,p)||1,S=-p/w,g=m/w,M=Math.atan2(m,p),y=[],R=[];for(let A=0;A<i;A++){const C=(A+.5)/i,E=A%2===0?1:-1,U=u+m*C+S*eu*E,k=f+p*C+g*eu*E;rk(U,k)||(y.push({x:U,y:gw,z:k,rx:0,ry:M}),R.push({x:U,y:xw,z:k,rx:0,ry:M}))}const _=t?6:8,b=t?14:22;pw(new ge(fp,fp,Oa,_),tk(),y,e),pw(new nn(Mh,mw,6,b),ek(),R,e),s.n=y.length,s.peds=y.length,s.hoops=R.length,e.userData.hailRingCount=y.length}function _w(n){return mt.find(t=>t.kind===n)??null}function yw(){return new ut({color:2892306,roughness:.26,metalness:.4,emissive:5914656,emissiveIntensity:.12,iridescence:.4,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function ck(){return new ut({color:3811858,roughness:.17,metalness:.44,emissive:15254890,emissiveIntensity:.2,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.22,transparent:!1})}function mp(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Om=0,km=78,Fm=90,ka=1.55,gp=.1,Fa=.28,vw=.12,Bm=.34,Mw=ka*.5,Hm=ka+Fa*.35,ww=Hm+Fa*.55+Bm*.35,nu=24.6,xp=.82,lk=4,uk=3;function hk(n){return n?uk:lk}function dk(n,t){return Math.hypot(n-Om,t-km)<Fm?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function fk(n){return{n:0,stems:0,fruit:0,cones:0,want:n,stemH:ka,fruitR:Fa,side:nu}}function pk(n,t){const e=new _t;e.name="fruitkiln",n.add(e);const i=hk(t),s=fk(i);e.userData.fruitKilnCounts=s,e.userData.fruitKilnCount=0,e.userData.sizes={stemH:ka,stemR:gp,fruitR:Fa,coneR:vw,coneH:Bm,yStem:Mw,yFruit:Hm,yCone:ww,side:nu,padLeave:xp};const r=_w("grove"),o=_w("foundry");if(!r||!o||Math.hypot(r.x-Om,r.z-km)<Fm||Math.hypot(o.x-Om,o.z-km)<Fm)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*xp/l),d=Math.min(.28,o.radius*xp/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.hypot(m,p)||1,S=-p/w,g=m/w,M=Math.atan2(m,p),y=[],R=[],_=[];for(let A=0;A<i;A++){const C=(A+.5)/i,E=A%2===0?1:-1,U=u+m*C+S*nu*E,k=f+p*C+g*nu*E;dk(U,k)||(y.push({x:U,y:Mw,z:k,ry:M}),R.push({x:U,y:Hm,z:k,ry:M+.4}),_.push({x:U,y:ww,z:k,ry:M}))}const b=t?6:8;mp(new ge(gp,gp,ka,b),yw(),y,e),mp(new Xh(Fa,0),ck(),R,e),mp(new wr(vw,Bm,b),yw(),_,e),s.n=y.length,s.stems=y.length,s.fruit=R.length,s.cones=_.length,e.userData.fruitKilnCount=y.length}function Sw(n){return mt.find(t=>t.kind===n)??null}function mk(){return new ut({color:1839656,roughness:.26,metalness:.36,emissive:4860024,emissiveIntensity:.16,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[80,380],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function gk(){return new ut({color:3811858,roughness:.14,metalness:.42,emissive:15254890,emissiveIntensity:.2,iridescence:.54,iridescenceIOR:1.32,iridescenceThicknessRange:[70,320],clearcoat:.5,clearcoatRoughness:.2,transparent:!1})}function bw(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Gm=0,$m=78,Vm=90,Ba=.34,wh=.14,Ew=Ba*.85,Tw=Ba*1.7+wh*.4,iu=15.8,_p=.82,xk=4,_k=3;function yk(n){return n?_k:xk}function vk(n,t){return Math.hypot(n-Gm,t-$m)<Vm?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function Mk(n){return{n:0,tets:0,kisses:0,want:n,tetR:Ba,kissR:wh,side:iu}}function wk(n,t){const e=new _t;e.name="hailgates",n.add(e);const i=yk(t),s=Mk(i);e.userData.hailGateCounts=s,e.userData.hailGateCount=0,e.userData.sizes={tetR:Ba,kissR:wh,yTet:Ew,yKiss:Tw,side:iu,padLeave:_p};const r=Sw("beacon"),o=Sw("gate");if(!r||!o||Math.hypot(r.x-Gm,r.z-$m)<Vm||Math.hypot(o.x-Gm,o.z-$m)<Vm)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*_p/l),d=Math.min(.28,o.radius*_p/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.hypot(m,p)||1,S=-p/w,g=m/w,M=Math.atan2(m,p),y=[],R=[];for(let b=0;b<i;b++){const A=(b+.5)/i,C=b%2===0?1:-1,E=u+m*A+S*iu*C,U=f+p*A+g*iu*C;vk(E,U)||(y.push({x:E,y:Ew,z:U,ry:M}),R.push({x:E,y:Tw,z:U,ry:M}))}const _=t?6:8;bw(new Wa(Ba,0),mk(),y,e),bw(new Ci(wh,_,_),gk(),R,e),s.n=y.length,s.tets=y.length,s.kisses=R.length,e.userData.hailGateCount=y.length}function Rw(n){return mt.find(t=>t.kind===n)??null}function Sk(){return new ut({color:2892306,roughness:.28,metalness:.3,emissive:5914656,emissiveIntensity:.12,iridescence:.4,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.34,clearcoatRoughness:.32,transparent:!1})}function bk(){return new ut({color:3811858,roughness:.16,metalness:.44,emissive:15254890,emissiveIntensity:.2,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.22,transparent:!1})}function Aw(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Wm=0,Xm=78,Ym=90,Cw=.22,Pw=.38,qm=.18,Iw=.04,zw=.62,su=16.4,yp=.82,Ek=4,Tk=3;function Rk(n){return n?Tk:Ek}function Ak(n,t){return Math.hypot(n-Wm,t-Xm)<Ym?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function Ck(n){return{n:0,rings:0,fruit:0,want:n,fruitR:qm,side:su}}function Pk(n,t){const e=new _t;e.name="fruitjoin",n.add(e);const i=Rk(t),s=Ck(i);e.userData.fruitJoinCounts=s,e.userData.fruitJoinCount=0,e.userData.sizes={ringInner:Cw,ringOuter:Pw,fruitR:qm,yRing:Iw,yFruit:zw,side:su,padLeave:yp};const r=Rw("grove"),o=Rw("market");if(!r||!o||Math.hypot(r.x-Wm,r.z-Xm)<Ym||Math.hypot(o.x-Wm,o.z-Xm)<Ym)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*yp/l),d=Math.min(.28,o.radius*yp/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.hypot(m,p)||1,S=-p/w,g=m/w,M=Math.atan2(m,p),y=[],R=[];for(let b=0;b<i;b++){const A=(b+.5)/i,C=b%2===0?1:-1,E=u+m*A+S*su*C,U=f+p*A+g*su*C;Ak(E,U)||(y.push({x:E,y:Iw,z:U,rx:Math.PI/2,ry:M}),R.push({x:E,y:zw,z:U,rx:0,ry:M+.55}))}const _=t?10:16;Aw(new Va(Cw,Pw,_),Sk(),y,e),Aw(new xn(qm,0),bk(),R,e),s.n=y.length,s.rings=y.length,s.fruit=R.length,e.userData.fruitJoinCount=y.length}function Dw(n){return mt.find(t=>t.kind===n)??null}function Ik(){return new ut({color:1445922,roughness:.26,metalness:.34,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[80,360],clearcoat:.34,clearcoatRoughness:.3,transparent:!1})}function zk(){return new ut({color:1840172,roughness:.16,metalness:.38,emissive:10187007,emissiveIntensity:.2,iridescence:.54,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.22,transparent:!1})}function Lw(n,t,e,i){if(!e.length)return;const s=new oe(n,t,e.length),r=new Zt;r.rotation.order="YXZ",e.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Zm=0,Km=78,jm=90,Nw=.72,Ha=.42,Uw=.28,Sh=.2,Ow=Ha*.5,kw=Ha+Sh*.7,ru=14.8,vp=.82,Dk=4,Lk=3;function Nk(n){return n?Lk:Dk}function Uk(n,t){return Math.hypot(n-Zm,t-Km)<jm?!0:mt.some(e=>Math.hypot(n-e.x,t-e.z)<e.radius*.78)}function Ok(n){return{n:0,benches:0,hearts:0,want:n,benchH:Ha,heartR:Sh,side:ru}}function kk(n,t){const e=new _t;e.name="restchorus",n.add(e);const i=Nk(t),s=Ok(i);e.userData.restChorusCounts=s,e.userData.restChorusCount=0,e.userData.sizes={benchW:Nw,benchH:Ha,benchD:Uw,heartR:Sh,yBench:Ow,yHeart:kw,side:ru,padLeave:vp};const r=Dw("terrace"),o=Dw("ring");if(!r||!o||Math.hypot(r.x-Zm,r.z-Km)<jm||Math.hypot(o.x-Zm,o.z-Km)<jm)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,h=Math.min(.28,r.radius*vp/l),d=Math.min(.28,o.radius*vp/l),u=r.x+a*h,f=r.z+c*h,x=o.x-a*d,v=o.z-c*d,m=x-u,p=v-f,w=Math.hypot(m,p)||1,S=-p/w,g=m/w,M=Math.atan2(m,p),y=[],R=[];for(let _=0;_<i;_++){const b=(_+.5)/i,A=_%2===0?1:-1,C=u+m*b+S*ru*A,E=f+p*b+g*ru*A;Uk(C,E)||(y.push({x:C,y:Ow,z:E,ry:M}),R.push({x:C,y:kw,z:E,ry:M+.35}))}Lw(new ye(Nw,Ha,Uw),Ik(),y,e),Lw(new vo(Sh,0),zk(),R,e),s.n=y.length,s.benches=y.length,s.hearts=R.length,e.userData.restChorusCount=y.length}const{Group:is,Vector2:an,LatheGeometry:Jm,BoxGeometry:pi,CylinderGeometry:Hn,ConeGeometry:jo,TorusGeometry:on,RepeatWrapping:Fk,SRGBColorSpace:Bk,MeshPhysicalMaterial:$c,Color:Us,Mesh:ct,MeshBasicMaterial:Zn,AdditiveBlending:Hk,DirectionalLight:Vc,InstancedMesh:Wc,Object3D:Xo,OctahedronGeometry:bi,IcosahedronGeometry:Fw,CapsuleGeometry:Bw,SphereGeometry:Xc,TextureLoader:Gk,ShaderMaterial:Yc,CircleGeometry:sr,PointLight:qc,HemisphereLight:$k}=YC,zn="./luminous-circuit".replace(/\/?$/,"");function Bn(n,t){const e=Math.sin(n*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Mp(n){const t=n==="house"?[new an(1,0),new an(.92,.35),new an(.78,.72),new an(.55,1)]:n==="ward"?[new an(1,0),new an(.94,.22),new an(.72,.48),new an(.58,.78),new an(.28,1)]:[new an(.85,0),new an(.7,.3),new an(.42,.62),new an(.18,.88),new an(.02,1)];return new Jm(t,12)}function Vk(){return new pi(1.15,.85,.95)}function Wk(){return new Hn(.55,.85,1.15,8)}function Xk(){return new jo(.32,1.35,6)}function Yk(){return new on(.55,.1,6,16,Math.PI)}function Dn(n,t,e=1){const i=n.load(t);return i.colorSpace=Bk,i.wrapS=i.wrapT=Fk,i.repeat.set(e,e),i.anisotropy=8,i}function qk(){const n=new is;n.name="core-spire-city";const t=typeof window<"u"&&(()=>{try{return window.matchMedia("(pointer: coarse)").matches}catch{return!1}})(),e=new Gk,i=Dn(e,`${zn}/plaza-floor.jpg`,6),s=Dn(e,`${zn}/wild-floor-v2.jpg`,10),r=Dn(e,`${zn}/crystal-facade.jpg`,2),o=Dn(e,`${zn}/spire-windows-v2.jpg`,2.2),a=Dn(e,`${zn}/spire-facet-tile.jpg`,2),c=Dn(e,`${zn}/gold-crystal.jpg`,2),l=Dn(e,`${zn}/canal-river.jpg`,4),h=Dn(e,`${zn}/spire-heart.jpg`,1),d=Dn(e,`${zn}/avenue-living.jpg`,8);Dn(e,`${zn}/tower-cyan.jpg`,1.6),Dn(e,`${zn}/tower-amethyst.jpg`,1.6),Dn(e,`${zn}/sky-core-glow.jpg`,1),Dn(e,`${zn}/sky-veil.jpg`,1);const u=Dn(e,`${zn}/energy-canal.jpg`,6),f=Dn(e,`${zn}/globe-surface.jpg`,8),x=Dn(e,`${zn}/kiln-body.jpg`,2),v=Dn(e,`${zn}/orchard-canopy.jpg`,2),m=Dn(e,`${zn}/beacon-hail.jpg`,2),p=[],w=[];let S=null,g=null,M=null,y=null,R=null,_=null,b=null,A=null,C=null,E=null,U=null,k=null,O=null,V=null,W=null,Y=null,tt=null;function q(L){w.push(L)}function ht(L=2){let D=0;for(;w.length&&D<L;){const N=w.shift();try{N?.()}catch{}D+=1}return w.length}const nt=L=>new $c({color:L.color,roughness:L.roughness??.16,metalness:L.metalness??.46,emissive:L.emissive??0,emissiveIntensity:L.emissiveIntensity??0,envMapIntensity:1.82,map:L.map??null,transparent:!!L.transparent,opacity:L.opacity??1,clearcoat:L.coat??.84,clearcoatRoughness:.08,iridescence:L.iri??.88,iridescenceIOR:1.31,iridescenceThicknessRange:[60,620],sheen:.62,sheenColor:new Us(L.sheenHex??8049904)});function Lt(L,D,N=.4){L.onBeforeCompile=I=>{I.uniforms.uRimCol={value:new Us(D)},I.uniforms.uRimStr={value:N},I.uniforms.uCoreDir={value:new B(ss.x,ss.y,ss.z).normalize()},I.fragmentShader=`uniform vec3 uRimCol; uniform float uRimStr; uniform vec3 uCoreDir;
`+I.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
           vec3 _wn = inverseTransformDirection(normalize(normal), viewMatrix);
           float _rim = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.4);
           float _kiss = pow(max(0.0, dot(_wn, uCoreDir)), 1.35);
           totalEmissiveRadiance += uRimCol * _rim * uRimStr;
           totalEmissiveRadiance += vec3(0.49, 0.94, 1.0) * _kiss * (uRimStr * 0.95);`)},L.customProgramCacheKey=()=>`rim-core-${D}-${N}`}const te=nt({color:6977696,roughness:.38,metalness:.42,emissive:1054776,emissiveIntensity:.18,map:i,iri:.32,coat:.55}),Ut=nt({color:8027336,roughness:.14,metalness:.42,emissive:2363488,emissiveIntensity:.52,map:r,iri:.9,coat:.78,sheenHex:11571455}),$=nt({color:8042696,roughness:.11,metalness:.48,emissive:678008,emissiveIntensity:.62,map:r,iri:.94,coat:.86,sheenHex:8320767}),at=nt({color:13940856,roughness:.14,metalness:.68,emissive:6965784,emissiveIntensity:.48,map:c,iri:.58,coat:.82,sheenHex:16765040}),ot=nt({color:2896968,roughness:.82,metalness:.1,emissive:395284,emissiveIntensity:.1,map:f,iri:.08,coat:.06}),At=nt({color:5925520,roughness:.44,metalness:.34,emissive:792632,emissiveIntensity:.2,map:d,iri:.28,coat:.32}),Ht=nt({color:9082560,roughness:.12,metalness:.46,emissive:1321040,emissiveIntensity:.58,map:o,iri:.78,coat:.8}),$t=new $c({color:12103916,roughness:.05,metalness:.12,emissive:2102352,emissiveIntensity:.55,envMapIntensity:1.9,iridescence:1,iridescenceIOR:1.32,iridescenceThicknessRange:[40,620],sheen:.78,sheenColor:new Us(8317176),clearcoat:.96,clearcoatRoughness:.05,map:a});$t.bumpMap=a,$t.bumpScale=.38,$t.clearcoatNormalScale=new an(.55,.55),Ht.bumpMap=o,Ht.bumpScale=.26,at.bumpMap=c,at.bumpScale=.22,ot.bumpMap=s,ot.bumpScale=.45;const he=new $c({color:13168888,roughness:.06,metalness:.12,emissive:1349808,emissiveIntensity:.92,envMapIntensity:1.75,iridescence:1,iridescenceIOR:1.28,sheen:.74,sheenColor:new Us(5953776),clearcoat:.92,clearcoatRoughness:.07,map:h});Lt(Ut,11571455,.48),Lt($,8320767,.56),Lt(at,16765040,.42),Lt(Ht,9097448,.46),Lt($t,13166847,.7),Lt(he,8320767,.78),Lt(te,4890816,.22),Lt(At,4890816,.2);const Vt=new Zn({color:3854568,transparent:!0,opacity:.32,blending:2,depthWrite:!1,map:l}),ce=new Zn({color:14725216,transparent:!0,opacity:.22,blending:2,depthWrite:!1}),ve=new Zn({color:8022208,transparent:!0,opacity:.12,blending:2,depthWrite:!1,side:2}),me=new Zn({color:1738920,transparent:!0,opacity:.18,blending:2,depthWrite:!1});function Ne(L,D,N=.55){const I={value:0};return p.push(I),new Yc({uniforms:{uTime:I,uMap:{value:L},uColor:{value:new Us(D)},uGain:{value:N}},transparent:!0,blending:2,depthWrite:!1,side:2,vertexShader:`
        varying vec2 vUv;
        varying vec3 vWorld;
        void main() {
          vUv = uv;
          vec4 w = modelMatrix * vec4(position, 1.0);
          vWorld = w.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        varying vec3 vWorld;
        uniform float uTime;
        uniform sampler2D uMap;
        uniform vec3 uColor;
        uniform float uGain;
        void main() {
          vec2 uv = vUv;
          uv.x += uTime * 0.07;
          uv.y += sin(vUv.x * 10.0 + uTime * 1.6) * 0.04;
          vec3 tex = texture2D(uMap, uv).rgb;
          float foam = pow(0.5 + 0.5 * sin(vUv.x * 32.0 - uTime * 3.4), 8.0);
          float foam2 = pow(0.5 + 0.5 * sin(vUv.x * 18.0 + vUv.y * 22.0 - uTime * 2.1), 6.0);
          float edge = smoothstep(0.0, 0.1, vUv.y) * smoothstep(1.0, 0.9, vUv.y);
          vec3 V = normalize(cameraPosition - vWorld);
          float fres = pow(1.0 - clamp(V.y, 0.0, 1.0), 2.4);
          vec3 col = mix(uColor, tex, 0.45) + foam * vec3(0.75, 0.96, 1.0) * 0.55;
          col += foam2 * vec3(0.95, 0.78, 0.35) * 0.22;
          col += vec3(0.55, 0.88, 1.0) * fres * 0.7;
          gl_FragColor = vec4(col * uGain * (0.75 + fres * 0.55) * edge, (0.5 + foam * 0.4 + fres * 0.22) * edge);
        }
      `})}const Me=Ne(u,3854568,.62),Xe=Ne(c,14725216,.42),je={value:0};p.push(je);const Ye=new Yc({uniforms:{uTime:je},transparent:!0,blending:2,depthWrite:!1,side:2,vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec2 vUv;
      uniform float uTime;
      void main() {
        vec2 p = vUv * 2.0 - 1.0;
        float r = length(p);
        float a = atan(p.y, p.x);
        if (r > 0.99) discard;
        float rings = abs(sin((r * 18.0 - uTime * 0.28) * 3.14159));
        float spokes = abs(sin(a * 10.0 + uTime * 0.12));
        float hex = abs(sin(p.x * 22.0 + uTime * 0.18) * sin(p.y * 22.0));
        float pulse = 0.55 + 0.45 * sin(r * 14.0 - uTime * 1.6);
        float line = smoothstep(0.14, 0.02, rings) * pulse + smoothstep(0.08, 0.018, spokes) * 0.5;
        line += smoothstep(0.055, 0.012, hex) * 0.28;
        float fade = 1.0 - smoothstep(0.48, 0.99, r);
        vec3 col = mix(vec3(0.18, 0.78, 0.92), vec3(0.92, 0.62, 0.18), smoothstep(0.12, 0.82, r));
        col += vec3(0.55, 0.85, 1.0) * smoothstep(0.22, 0.0, r) * 0.45;
        gl_FragColor = vec4(col * line * fade, line * fade * 0.68);
      }
    `}),$e=[te,Ut,$,at,Ht,$t,he,At],F=$e.map(L=>L.emissiveIntensity),vn=new sr(2200,96);{const L=vn.attributes.position;for(let D=0;D<L.count;D++){const N=L.getX(D),I=L.getY(D),X=Math.hypot(N,I),dt=Math.sin(N*.006)*Math.cos(I*.0055)+Math.sin(X*.012);L.setZ(D,dt*5.2+Math.sin(N*.018+I*.014)*1.8)}vn.computeVertexNormals()}const Ae=new ct(vn,ot);Ae.rotation.x=-Math.PI/2,Ae.position.y=.2,Ae.receiveShadow=!0,n.add(Ae);const z=new sr(920,72);{const L=z.attributes.position;for(let D=0;D<L.count;D++){const N=L.getX(D),I=L.getY(D);L.setZ(D,Math.sin(N*.02)*Math.cos(I*.018)*.9)}z.computeVertexNormals()}const T=new ct(z,te);T.rotation.x=-Math.PI/2,T.position.y=.42,T.receiveShadow=!0,n.add(T);const Z=new ct(new sr(420,56),At);Z.rotation.x=-Math.PI/2,Z.position.y=.58,Z.receiveShadow=!0,n.add(Z);const Q=new ct(new sr(400,64),Ye);Q.rotation.x=-Math.PI/2,Q.position.y=.72,n.add(Q);const st=new ct(new Hn(108,118,3.2,40),Ut);st.position.y=1.5,st.receiveShadow=!0,st.castShadow=!0,n.add(st);const St=new ct(new Hn(46,52,1.2,36),he);St.position.y=3.4,St.receiveShadow=!0,n.add(St);const wt={value:0};p.push(wt);const it=new ct(new sr(104,48),new Yc({uniforms:{uTime:wt},transparent:!0,blending:2,depthWrite:!1,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform float uTime;
        void main() {
          vec2 p = vUv * 2.0 - 1.0;
          float r = length(p);
          if (r > 0.98) discard;
          vec2 h = p * 18.0;
          float hex = abs(fract(h.x + h.y * 0.58) - 0.5) + abs(fract(h.y * 1.15) - 0.5);
          float cell = smoothstep(0.38, 0.14, hex);
          float pulse = 0.5 + 0.5 * sin(uTime * 1.4 + r * 12.0);
          vec3 col = mix(vec3(0.18, 0.72, 0.88), vec3(0.95, 0.7, 0.22), smoothstep(0.12, 0.88, r));
          col += vec3(0.7, 0.95, 1.0) * (1.0 - smoothstep(0.0, 0.28, r)) * 0.45;
          gl_FragColor = vec4(col * cell * pulse, cell * 0.48 * pulse);
        }
      `}));it.rotation.x=-Math.PI/2,it.position.y=4.12,n.add(it);const lt={value:0};p.push(lt);const Ct=new ct(new sr(100,48),new Yc({uniforms:{uTime:lt},transparent:!0,blending:2,depthWrite:!1,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec2 vUv;
        uniform float uTime;
        float n(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        float v(vec2 p) {
          vec2 i = floor(p);
          vec2 f = fract(p);
          float a = n(i);
          float b = n(i + vec2(1.0, 0.0));
          float c = n(i + vec2(0.0, 1.0));
          float d = n(i + vec2(1.0, 1.0));
          vec2 u = f * f * (3.0 - 2.0 * f);
          return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }
        void main() {
          vec2 p = vUv * 2.0 - 1.0;
          float r = length(p);
          if (r > 0.98) discard;
          vec2 q = p * 7.5 + vec2(uTime * 0.18, -uTime * 0.12);
          float c = v(q) * v(q * 1.7 + 4.0);
          c = pow(c, 3.2);
          float ring = smoothstep(0.2, 0.0, abs(r - 0.55));
          vec3 col = mix(vec3(0.15, 0.7, 0.85), vec3(0.9, 0.7, 0.25), r);
          gl_FragColor = vec4(col * (c * 1.4 + ring * 0.12), (c * 0.55 + ring * 0.08) * (1.0 - r * 0.4));
        }
      `}));Ct.rotation.x=-Math.PI/2,Ct.position.y=4.18,n.add(Ct);const ee=new ct(new on(58,1.1,10,48),Vt);ee.rotation.x=Math.PI/2,ee.position.y=4.2,n.add(ee);for(let L=0;L<4;L++){const D=new ct(new on(22+L*14,.45,8,40),L%2?ce:me);D.rotation.x=Math.PI/2,D.position.y=4.05,n.add(D)}for(let L=0;L<18;L++){const D=L/18*Math.PI*2,N=new ct(new bi(1.15,0),L%3?$t:he);N.position.set(Math.cos(D)*74,4.6,Math.sin(D)*74),N.rotation.set(.4,D,.2),N.scale.set(.7,1.8+L%4*.4,.7),n.add(N)}for(let L=0;L<12;L++){const D=L/12*Math.PI*2,N=new ct(new pi(6.4,.22,220),L%2?Me:Xe);N.position.set(Math.cos(D)*128,1.42,Math.sin(D)*128),N.rotation.y=D,n.add(N)}const Pt=new ct(new on(92,1.8,10,48),ce);Pt.rotation.x=Math.PI/2,Pt.position.y=7.2,n.add(Pt);const Dt=new ct(new on(72,1.2,10,44),Vt);Dt.rotation.x=Math.PI/2,Dt.position.y=14.6,n.add(Dt);const Xt=new is;Xt.name="resonance-hub",[{r0:68,r1:60,h:4.4,y:3.6},{r0:58,r1:50,h:5,y:8.2},{r0:48,r1:40,h:5.2,y:13.2},{r0:38,r1:30,h:4.8,y:18.2},{r0:28,r1:22,h:4.2,y:22.6}].forEach((L,D)=>{const N=new ct(new Hn(L.r1,L.r0,L.h,24),D%2?At:Ht);N.position.y=L.y,Xt.add(N);const I=new ct(new on(L.r1+.4,.42,6,24),D%2?ce:Vt);I.rotation.x=Math.PI/2,I.position.y=L.y+L.h*.48,Xt.add(I)});const ae=[new an(54,18),new an(48,36),new an(40,58),new an(32,86),new an(24,112)],fe=new ct(new Jm(ae,12),Ht);Xt.add(fe);const H=[new an(22,112),new an(18,148),new an(13,188),new an(8,228),new an(3.4,262),new an(.2,286)],It=new ct(new Jm(H,12),$t);Xt.add(It);const rt=new ct(new Hn(8.2,9.4,52,6),he);rt.position.y=148,Xt.add(rt);const vt=new $c({color:13172728,emissive:1747144,emissiveIntensity:.92,roughness:.04,metalness:.08,transmission:.55,thickness:3.4,ior:1.5,iridescence:1,iridescenceIOR:1.32,iridescenceThicknessRange:[80,480],clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.94,envMapIntensity:1.75,sheen:.72,sheenColor:new Us(8320767),attenuationColor:new Us(4903144),attenuationDistance:3.6}),Rt=new ct(new bi(5.2,1),vt);Rt.scale.set(.55,2.6,.55),Rt.position.y=148,Xt.add(Rt),$e.push(vt),F.push(vt.emissiveIntensity);const pt=new ct(new jo(6.4,28,6),he);pt.position.y=292,Xt.add(pt);const Qt=new ct(new Hn(11,18,260,10,1,!0),new Zn({color:4903136,transparent:!0,opacity:.06,blending:2,depthWrite:!1,side:2}));Qt.position.y=150,Xt.add(Qt);const Kt=new ct(new jo(22,420,10,1,!0),new Zn({color:4905192,transparent:!0,opacity:.05,blending:2,depthWrite:!1,side:2}));Kt.position.y=210,Xt.add(Kt);const Je=new ct(new Fw(11,1),new Zn({color:7006452,transparent:!0,opacity:.18,wireframe:!0,blending:2,depthWrite:!1}));Je.position.y=148,Xt.add(Je);const He=new is;He.position.y=78;for(let L=0;L<10;L++){const D=L/10*Math.PI*2,N=new ct(new bi(2.1,0),L%2?he:$t);N.position.set(Math.cos(D)*42,Math.sin(L*1.3)*8,Math.sin(D)*42),N.scale.set(.55,2.2,.55),N.rotation.z=.4,He.add(N)}Xt.add(He),Xt.scale.setScalar(1.18),Xt.traverse(L=>{const D=L;D.isMesh&&(D.castShadow=!0)}),n.add(Xt);try{tt=U4(n,t).tick}catch{}n.add(new qc(3073791,9,620,1.35));const kn=new qc(8313070,6.5,440,1.3);kn.position.set(0,210,0),n.add(kn);const Vn=new qc(14725216,3.6,280,1.5);Vn.position.set(50,64,36),n.add(Vn);const et=new qc(8319231,8,6400,1.05);et.position.set(ss.x*.42,ss.y*.9,ss.z*.42),et.name="star-core-lamp",n.add(et);const Nt=new Vc(8975615,.48);Nt.position.set(ss.x,ss.y,ss.z),Nt.target.position.set(0,48,0),Nt.name="star-core-kiss",n.add(Nt),n.add(Nt.target),n.add(new $k(5937336,460302,.52));const jt=new Vc(13688556,.64);jt.position.set(280,480,220),jt.castShadow=!0,jt.shadow.mapSize.set(1024,1024),jt.shadow.camera.near=10,jt.shadow.camera.far=520,jt.shadow.camera.left=-95,jt.shadow.camera.right=95,jt.shadow.camera.top=95,jt.shadow.camera.bottom=-95,jt.shadow.bias=-4e-4,jt.shadow.normalBias=.035,jt.target.position.set(0,0,0),n.add(jt),n.add(jt.target);const Ce=new Vc(5163232,.26);Ce.position.set(-220,90,-240),n.add(Ce);const Se=new Vc(3860223,.16);Se.position.set(-80,40,200),n.add(Se),Mp("house");const Gt=Mp("ward"),gn=Mp("spire"),En=Vk(),Fn=Wk(),Ge=Xk(),Qn=Yk(),oi=new Hn(3.8,5.4,12,8),ls=new Hn(1.15,1.9,14,6),Oi=new on(1.8,.45,6,12),us=new pi(16,2.2,6.5),ai=new pi(15,.45,8),bo=new pi(16.5,.7,2.2),br=new on(4.4,1.05,6,14),Ji=new bi(1.8,0),vi=new Hn(.9,1.5,9,6),P=new jo(5.4,13,7),G=new bi(1.15,0),K=new Hn(1.5,2.6,24,6),J=new bi(2.4,0),j=new on(5.5,.35,6,16),kt=new bi(2.2,0),qt=new Hn(5.8,6.4,1.4,6),bt=new jo(5.2,4.2,6),Jt=new pi(18,1.1,2.2),ne=new Hn(1.6,2.4,16,8),ue=new on(4.8,.55,6,18),pe=new pi(2.4,16,2.4),ie=new pi(3.4,16,.7),Oe=new pi(1.8,8,.2),sn=new on(6.2,.55,6,16,Math.PI);function Ve(L){switch(L){case"foundry":return nt({color:14196816,roughness:.22,metalness:.64,emissive:9058824,emissiveIntensity:.52,map:x,iri:.28,coat:.68,sheenHex:16756800});case"canal":return nt({color:7001320,roughness:.16,metalness:.38,emissive:559272,emissiveIntensity:.55,map:r,iri:.92,coat:.78,sheenHex:6222079});case"terrace":return nt({color:11049192,roughness:.2,metalness:.4,emissive:3807352,emissiveIntensity:.46,map:r,iri:.8,coat:.7,sheenHex:13148415});case"gate":return nt({color:9081032,roughness:.18,metalness:.48,emissive:2627688,emissiveIntensity:.44,map:o,iri:.7,coat:.72,sheenHex:11571455});case"grove":return nt({color:13152352,roughness:.28,metalness:.5,emissive:5914640,emissiveIntensity:.42,map:v,iri:.5,coat:.6,sheenHex:15257712});case"beacon":return nt({color:12110064,roughness:.12,metalness:.42,emissive:4219080,emissiveIntensity:.62,map:m,iri:.88,coat:.85,sheenHex:13682943});case"overlook":return nt({color:9490656,roughness:.14,metalness:.45,emissive:684176,emissiveIntensity:.5,map:h,iri:.85,coat:.8,sheenHex:10545407});case"market":return nt({color:14731384,roughness:.24,metalness:.55,emissive:6965264,emissiveIntensity:.46,map:c,iri:.4,coat:.65,sheenHex:16769152});case"wild":return nt({color:9488552,roughness:.32,metalness:.28,emissive:1597504,emissiveIntensity:.4,map:a,iri:.75,coat:.55,sheenHex:8450240});case"ring":return nt({color:9994448,roughness:.18,metalness:.46,emissive:4200568,emissiveIntensity:.5,map:r,iri:.82,coat:.74,sheenHex:12620031});case"archive":return nt({color:13154440,roughness:.2,metalness:.5,emissive:5783576,emissiveIntensity:.4,map:c,iri:.45,coat:.7,sheenHex:16771232});default:return nt({color:8042712,roughness:.16,metalness:.5,emissive:1333368,emissiveIntensity:.48,map:r,iri:.78,coat:.72,sheenHex:7397631})}}function Re(L){switch(L){case"foundry":return 16752704;case"grove":return 15257696;case"canal":return 3073791;case"overlook":return 8317176;case"market":return 15254890;case"beacon":return 13678847;case"gate":return 11571455;case"archive":return 16765040;case"wild":return 8450240;case"ring":return 12620031;case"terrace":return 13148415;default:return 5953776}}mt.forEach(L=>{q(()=>{const D=new is;D.position.set(L.x,0,L.z);const N=Ve(L.kind);$e.push(N),F.push(N.emissiveIntensity);const I=Re(L.kind),X=new ct(new Hn(88,98,5.2,28),te);X.position.y=2.6,X.receiveShadow=!0,X.castShadow=!0,D.add(X);const dt=new ct(new on(44,1.5,6,24),L.kind==="foundry"||L.kind==="grove"||L.kind==="market"?ce:Vt);dt.rotation.x=Math.PI/2,dt.position.y=5.35,D.add(dt);let Ft;L.kind==="foundry"?(Ft=new ct(Fn,N),Ft.scale.set(28,62,28)):L.kind==="market"?(Ft=new ct(Fn,N),Ft.scale.set(22,44,22)):L.kind==="beacon"?(Ft=new ct(gn,N),Ft.scale.set(14,124,14)):L.kind==="overlook"?(Ft=new ct(gn,N),Ft.scale.set(16,108,16)):L.kind==="wild"?(Ft=new ct(Ge,N),Ft.scale.set(14,92,14)):L.kind==="canal"?(Ft=new ct(new pi(1,1,1),N),Ft.scale.set(52,28,22)):L.kind==="ring"?(Ft=new ct(Gt,N),Ft.scale.set(28,48,28)):L.kind==="terrace"?(Ft=new ct(Gt,N),Ft.scale.set(40,64,40)):L.kind==="grove"?(Ft=new ct(Gt,N),Ft.scale.set(32,78,32)):L.kind==="gate"?(Ft=new ct(Gt,N),Ft.scale.set(26,86,26)):L.kind==="archive"?(Ft=new ct(Gt,N),Ft.scale.set(28,100,28)):(Ft=new ct(Gt,N),Ft.scale.set(34,92,34)),Ft.position.y=8,Ft.castShadow=!0,D.add(Ft);const qe=new ct(new on(L.kind==="beacon"||L.kind==="overlook"?12:20,.7,8,24),L.kind==="foundry"||L.kind==="grove"||L.kind==="market"?ce:Vt);qe.rotation.x=Math.PI/2,qe.position.y=L.kind==="beacon"?72:L.kind==="canal"?28:42,D.add(qe);const un=new ct(new Xc(L.kind==="beacon"?5.2:7.5,12,10),new Zn({color:I,transparent:!0,opacity:.46,blending:2,depthWrite:!1}));un.position.set(0,L.kind==="beacon"?88:L.kind==="canal"?28:48,0),D.add(un);const hn=new ct(new pi(8,14,1.2),Vt);hn.position.set(0,9,L.kind==="canal"?14:34),D.add(hn);for(let Bt=0;Bt<8;Bt++){const gt=Bt/8*Math.PI*2,Mt=Math.cos(gt)*52,Ot=Math.sin(gt)*52;if(L.kind==="foundry"){const zt=new ct(oi,N);zt.position.set(Mt,8.2,Ot),zt.rotation.y=gt,D.add(zt);const re=new ct(ls,Ht);re.position.set(Mt,18.5,Ot),D.add(re);const ze=new ct(Oi,ce);ze.position.set(Mt+Math.cos(gt)*4.2,6.5,Ot+Math.sin(gt)*4.2),ze.rotation.y=gt,ze.rotation.z=Math.PI/2,D.add(ze)}else if(L.kind==="canal"){const zt=new ct(us,N);zt.position.set(Mt,5.4,Ot),zt.rotation.y=gt,D.add(zt);const re=new ct(ai,Me);re.position.set(Mt,4.4,Ot),re.rotation.y=gt,D.add(re);const ze=new ct(bo,$);ze.position.set(Mt,6.8,Ot),ze.rotation.y=gt,D.add(ze)}else if(L.kind==="terrace"){const zt=new ct(vi,Ut);zt.position.set(Mt,5.2,Ot),D.add(zt);const re=new ct(br,N);re.position.set(Mt,8.6,Ot),re.rotation.x=Math.PI/2,D.add(re);const ze=new ct(Ji,he);ze.position.set(Mt,9.4,Ot),ze.scale.set(.7,1.4,.7),D.add(ze)}else if(L.kind==="gate"){const zt=new ct(Qn,N);zt.scale.set(10,14,10),zt.position.set(Mt,4.2,Ot),zt.rotation.y=gt,D.add(zt);const re=new ct(pe,Ht);re.position.set(Mt+Math.cos(gt+.22)*5.2,10,Ot+Math.sin(gt+.22)*5.2),D.add(re);const ze=new ct(pe,Ht);ze.position.set(Mt+Math.cos(gt-.22)*5.2,10,Ot+Math.sin(gt-.22)*5.2),D.add(ze)}else if(L.kind==="grove"){const zt=new ct(vi,Ut);zt.position.set(Mt,7,Ot),zt.scale.set(1.4,1.5,1.4),D.add(zt);const re=new ct(P,N);re.position.set(Mt,16,Ot),D.add(re);const ze=new ct(P,at);ze.scale.set(.55,.7,.55),ze.position.set(Mt+Math.cos(gt)*4,13,Ot+Math.sin(gt)*4),ze.rotation.z=.7,ze.rotation.y=gt,D.add(ze);const Ro=new ct(G,he);Ro.position.set(Mt+Math.cos(gt)*3.2,12.2,Ot+Math.sin(gt)*3.2),D.add(Ro)}else if(L.kind==="beacon"){const zt=new ct(K,N);zt.position.set(Mt,14,Ot),D.add(zt);const re=new ct(J,Vt);re.position.set(Mt,28,Ot),D.add(re);const ze=new ct(j,Vt);ze.position.set(Mt,24,Ot),ze.rotation.x=Math.PI/2,D.add(ze)}else if(L.kind==="overlook"){const zt=new ct(Ge,N);zt.scale.set(5,18,5),zt.position.set(Mt,4,Ot),D.add(zt);const re=new ct(j,Vt);re.position.set(Mt,16,Ot),re.rotation.x=.9,re.rotation.y=gt,D.add(re);const ze=new ct(kt,$t);ze.position.set(Mt+Math.cos(gt)*5.5,16,Ot+Math.sin(gt)*5.5),ze.scale.set(.5,1.8,.5),D.add(ze)}else if(L.kind==="market"){const zt=new ct(qt,Bt%2?at:N);zt.position.set(Mt,4.4,Ot),zt.rotation.y=gt,D.add(zt);const re=new ct(bt,Bt%2?N:$);re.position.set(Mt,8.6,Ot),D.add(re);const ze=new ct(vi,Ht);ze.position.set(Mt,6.2,Ot),ze.scale.set(.5,.7,.5),D.add(ze)}else if(L.kind==="wild"){const zt=new ct(kt,$t);zt.scale.set(.9,3.2,.9),zt.position.set(Mt,9,Ot),zt.rotation.set(.25,gt,.15),D.add(zt);const re=new ct(Jt,Vt);re.position.set(Mt*.55,5.2,Ot*.55),re.rotation.y=gt,D.add(re)}else if(L.kind==="ring"){const zt=new ct(ne,N);zt.position.set(Mt,11,Ot),D.add(zt);const re=new ct(ue,Vt);re.position.set(Mt,18,Ot),re.rotation.x=Math.PI/2,D.add(re)}else if(L.kind==="archive"){const zt=new ct(ie,at);zt.position.set(Mt,10,Ot),zt.rotation.y=gt,D.add(zt);const re=new ct(Oe,Vt);re.position.set(Mt+Math.cos(gt)*.6,10,Ot+Math.sin(gt)*.6),re.rotation.y=gt,D.add(re)}else{const zt=new ct(En,Bt%2?$:Ht);zt.scale.set(6.5,8+Bt%3*2,6.5),zt.position.set(Mt,2.8,Ot),zt.rotation.y=gt,D.add(zt);const re=new ct(sn,Vt);re.position.set(Mt,10,Ot),re.rotation.y=gt,D.add(re)}}if(L.kind==="canal"){for(let Bt=0;Bt<6;Bt++){const gt=new ct(new pi(168,.55,7.2),Me);gt.position.set(0,4.6,-62+Bt*24),D.add(gt)}for(let Bt=0;Bt<5;Bt++){const gt=new ct(us,$);gt.position.set(-36+Bt*18,6.2+Bt*1.35,18),gt.scale.set(.7,1,.8),D.add(gt);const Mt=new ct(ai,Me);Mt.position.set(-36+Bt*18,5.4+Bt*1.35,22),Mt.scale.set(.55,1,.7),D.add(Mt)}}if(L.kind==="bridge"){const Bt=new ct(new on(58,3.2,8,28,Math.PI),Vt);Bt.rotation.z=Math.PI/2,Bt.position.set(-58,22,0),D.add(Bt);const gt=new ct(new on(58,.7,6,28,Math.PI),Me);gt.rotation.z=Math.PI/2,gt.position.set(-58,22,0),D.add(gt)}if(L.kind==="terrace"){const Bt=new ct(new Hn(52,68,4.2,20),Ht);Bt.position.y=6.2,D.add(Bt);for(let gt=0;gt<8;gt++){const Mt=gt/8*Math.PI*2,Ot=new ct(br,Ut);Ot.position.set(Math.cos(Mt)*40,11.2,Math.sin(Mt)*40),Ot.rotation.x=Math.PI/2,D.add(Ot);const zt=new ct(Ji,he);zt.position.set(Math.cos(Mt)*40,12.2,Math.sin(Mt)*40),zt.scale.set(.55,1.2,.55),D.add(zt);const re=new ct(vi,Ut);re.position.set(Math.cos(Mt)*40,7.4,Math.sin(Mt)*40),D.add(re)}}if(L.kind==="foundry")for(let Bt=0;Bt<3;Bt++){const gt=new ct(oi,N);gt.position.set((Bt-1)*18,16,22),gt.scale.set(1.45,1.85,1.45),D.add(gt);const Mt=new ct(ls,at);Mt.position.set((Bt-1)*18,38,22),Mt.scale.set(1.4,1.6,1.4),D.add(Mt);const Ot=new ct(new Xc(3.8,10,8),ce);Ot.position.set((Bt-1)*18,50,22),D.add(Ot);const zt=new ct(Oi,ce);zt.position.set((Bt-1)*18,12,30),zt.scale.set(1.6,1.6,1.6),zt.rotation.x=Math.PI/2,D.add(zt)}if(L.kind==="gate"){const Bt=new ct(new on(38,3.4,8,28,Math.PI),Vt);Bt.rotation.z=Math.PI/2,Bt.position.set(0,28,22),D.add(Bt);const gt=new ct(new on(26,1.4,6,24,Math.PI),ve);gt.rotation.z=Math.PI/2,gt.position.set(0,22,22),D.add(gt),[-1,1].forEach(Mt=>{const Ot=new ct(pe,Ht);Ot.position.set(Mt*36,16,22),Ot.scale.set(1.8,2.1,1.8),D.add(Ot)})}if(L.kind==="archive")for(let Bt=0;Bt<7;Bt++){const gt=Bt/7*Math.PI*2,Mt=new ct(ie,at);Mt.position.set(Math.cos(gt)*36,12,Math.sin(gt)*36),Mt.rotation.y=gt,D.add(Mt);const Ot=new ct(Oe,Vt);Ot.position.set(Math.cos(gt)*36.6,12,Math.sin(gt)*36.6),Ot.rotation.y=gt,D.add(Ot)}if(L.kind==="overlook"){const Bt=new ct(new sr(22,24),he);Bt.position.set(-18,36,8),Bt.lookAt(-2400,620,120),D.add(Bt);const gt=new ct(new on(40,1.1,6,28),Vt);gt.rotation.x=Math.PI/2,gt.position.y=8,D.add(gt);const Mt=new ct(new on(28,.7,6,28),Vt);Mt.rotation.x=.55,Mt.position.set(-18,36,8),D.add(Mt);for(let Ot=0;Ot<6;Ot++){const zt=Ot/6*Math.PI*2,re=new ct(kt,Ot%2?$t:he);re.position.set(-18+Math.cos(zt)*28,36+Math.sin(zt*1.4)*6,8+Math.sin(zt)*28),re.scale.set(.55,2.1,.55),D.add(re)}}if(L.kind==="market")for(let Bt=0;Bt<6;Bt++){const gt=Bt/6*Math.PI*2,Mt=new ct(new pi(10,4,8),Bt%2?at:$);Mt.position.set(Math.cos(gt)*34,6,Math.sin(gt)*34),Mt.rotation.y=gt,D.add(Mt);const Ot=new ct(qt,Bt%2?at:N);Ot.position.set(Math.cos(gt)*34,3.6,Math.sin(gt)*34),Ot.scale.set(1.35,.7,1.35),D.add(Ot);const zt=new ct(bt,Bt%2?N:$);zt.position.set(Math.cos(gt)*34,10.4,Math.sin(gt)*34),zt.scale.set(1.15,.7,1.15),D.add(zt)}if(L.kind==="wild")for(let Bt=0;Bt<12;Bt++){const gt=Bn(Bt,9)*Math.PI*2,Mt=22+Bn(Bt,4)*48,Ot=new ct(kt,Bt%2?$t:at);Ot.position.set(Math.cos(gt)*Mt,8+Bn(Bt,2)*6,Math.sin(gt)*Mt),Ot.rotation.set(.3,gt,.2),Ot.scale.set(.7,2.6,.7),D.add(Ot);const zt=new ct(Jt,Bt%2?Me:me);zt.position.set(Math.cos(gt)*Mt*.5,5.1,Math.sin(gt)*Mt*.5),zt.rotation.y=gt,zt.scale.set(Mt/28,1,1),D.add(zt)}if(L.kind==="beacon"){const Bt=new ct(gn,$);Bt.scale.set(10,70,10),Bt.position.y=10,D.add(Bt);const gt=new ct(new Xc(6,12,10),Vt);gt.position.y=78,D.add(gt);for(let Mt=0;Mt<3;Mt++){const Ot=new ct(new on(8+Mt*4,.35,6,20),Mt%2?ce:Vt);Ot.rotation.x=Math.PI/2+Mt*.18,Ot.position.y=70+Mt*4,D.add(Ot)}}if(L.kind==="ring"){const Bt=new ct(new on(48,2.2,8,40),Vt);Bt.rotation.x=Math.PI/2,Bt.position.y=10,D.add(Bt);const gt=new ct(new on(62,1.1,6,40),ce);gt.rotation.x=Math.PI/2,gt.position.y=16,D.add(gt);for(let Mt=0;Mt<8;Mt++){const Ot=Mt/8*Math.PI*2,zt=new ct(ne,N);zt.position.set(Math.cos(Ot)*48,12,Math.sin(Ot)*48),D.add(zt)}}if(L.kind==="grove")for(let Bt=0;Bt<10;Bt++){const gt=Bt/10*Math.PI*2,Mt=new ct(vi,Ut);Mt.position.set(Math.cos(gt)*38,8,Math.sin(gt)*38),Mt.scale.set(1.5,1.4,1.5),D.add(Mt);const Ot=new ct(P,at);Ot.position.set(Math.cos(gt)*38,16,Math.sin(gt)*38),D.add(Ot);const zt=new ct(P,N);zt.scale.set(.5,.65,.5),zt.position.set(Math.cos(gt)*42,13.5,Math.sin(gt)*42),zt.rotation.z=.65,zt.rotation.y=gt,D.add(zt);const re=new ct(G,he);re.position.set(Math.cos(gt)*41,12.4,Math.sin(gt)*41),D.add(re)}n.add(D);const Pn=Math.hypot(L.x,L.z),ti=new ct(new pi(16,.28,Pn),Me);ti.position.set(L.x/2,1.28,L.z/2),ti.rotation.y=Math.atan2(L.x,L.z),n.add(ti);const fn=new ct(new on(Pn/2,2.1,8,36,Math.PI),Vt);fn.position.set(L.x/2,4,L.z/2),fn.rotation.y=Math.atan2(L.x,L.z),fn.rotation.z=Math.PI/2,n.add(fn);const _n=new ct(new on(Pn/2,.55,6,36,Math.PI),L.kind==="foundry"?Xe:Me);_n.position.copy(fn.position),_n.rotation.copy(fn.rotation),n.add(_n)})});function ke(L,D,N,I,X,dt,Ft,qe,un,hn){const Pn=new Xo,ti=[];for(let _n=0;_n<X;_n++){const Bt=Bn(_n+qe,qe*3+_n),gt=Bn(_n*5+qe,_n*9),Mt=Bt*Math.PI*2,Ot=N+gt*(I-N);if(Ot<140)continue;let zt=!1;for(const re of mt)if(Math.hypot(Math.cos(Mt)*Ot-re.x,Math.sin(Mt)*Ot-re.z)<118){zt=!0;break}zt||ti.push({x:Math.cos(Mt)*Ot,z:Math.sin(Mt)*Ot,sy:dt+Bn(_n,qe+7)*(Ft-dt),fat:un+Bt*(hn-un),ry:Mt+gt*.7})}const fn=new Wc(L,D,ti.length);ti.forEach((_n,Bt)=>{Pn.position.set(_n.x,1.2,_n.z),Pn.rotation.set(0,_n.ry,0),Pn.scale.set(_n.fat,_n.sy,_n.fat*.92),Pn.updateMatrix(),fn.setMatrixAt(Bt,Pn.matrix)}),fn.instanceMatrix.needsUpdate=!0,fn.castShadow=!1,fn.receiveShadow=!0,n.add(fn)}q(()=>ke(Gt,Ht,150,340,Math.ceil(48),8,16,11,7,11)),q(()=>ke(Fn,$,200,520,Math.ceil(28),18,36,17,9,14)),q(()=>ke(gn,at,280,640,Math.ceil(36),22,56,23,5,8)),q(()=>ke(Qn,Ut,360,780,Math.ceil(22),14,22,29,8,12)),q(()=>ke(Gt,Ut,480,980,Math.ceil(40),8,16,53,6,10)),q(()=>ke(Fn,at,620,1200,Math.ceil(24),16,32,59,8,13)),q(()=>ke(gn,$,720,1400,Math.ceil(30),18,48,73,5,8)),q(()=>ke(Ge,at,900,1680,Math.ceil(28),10,22,81,5.5,9)),q(()=>ke(gn,Ut,1100,1900,Math.ceil(18),16,42,97,4.5,7)),q(()=>{try{C4(n,t)}catch{}try{O4(n,t)}catch{}try{S=k4(n,t).tick}catch{}try{F4(n,t)}catch{}try{G4(n,t)}catch{}try{g=V4(n,t).tick}catch{}try{M=Y4(n,t).tick}catch{}try{j4(n,t)}catch{}try{iI(n,t)}catch{}try{y=oI(n,t).tick}catch{}try{R=cI(n,t).tick}catch{}try{uI(n,t)}catch{}try{dI(n,t)}catch{}try{bI(n,t)}catch{}try{_=AI(n,t).tick}catch{}try{zI(n,t)}catch{}try{NI(n,t)}catch{}try{FI(n,t)}catch{}try{$I(n,t)}catch{}try{nz(n,t)}catch{}try{cz(n,t)}catch{}try{b=hz(n,t).tick}catch{}try{mz(n,t)}catch{}try{wz(n,t)}catch{}try{Iz(n,t)}catch{}try{A=Uz(n,t).tick}catch{}try{Hz(n,t)}catch{}try{qz(n,t)}catch{}try{Qz(n,t)}catch{}try{C=hD(n,t).tick}catch{}try{xD(n,t)}catch{}try{bD(n,t)}catch{}try{zD(n,t)}catch{}try{E=FD(n,t).tick}catch{}try{XD(n,t)}catch{}try{U=JD(n,t).tick}catch{}try{hL(n,t)}catch{}try{k=gL(n,t).tick}catch{}try{EL(n,t)}catch{}try{IL(n,t)}catch{}try{GL(n,t)}catch{}try{O=YL(n,t).tick}catch{}try{t8(n,t)}catch{}try{V=o8(n,t).tick}catch{}try{d8(n,t)}catch{}try{v8(n,t)}catch{}try{b8(n,t)}catch{}try{C8(n,t)}catch{}try{U8(n,t)}catch{}try{H8(n,t)}catch{}try{V8(n,t)}catch{}try{Q8(n,t)}catch{}try{n5(n,t)}catch{}try{o5(n,t)}catch{}try{m5(n,t)}catch{}try{v5(n,t)}catch{}try{W=S5(n,t).tick}catch{}try{A5(n,t)}catch{}try{Y=O5(n,t).tick}catch{}try{k5(n,t)}catch{}try{V5(n,t)}catch{}try{Q5(n,t)}catch{}try{aN(n,t)}catch{}try{xN(n,t)}catch{}try{TN(n,t)}catch{}try{NN(n,t)}catch{}try{VN(n,t)}catch{}try{QN(n,t)}catch{}try{cU(n,t)}catch{}try{hU(n,t)}catch{}try{vU(n,t)}catch{}try{CU(n,t)}catch{}try{kU(n,t)}catch{}try{YU(n,t)}catch{}try{nO(n,t)}catch{}try{hO(n,t)}catch{}try{yO(n,t)}catch{}try{RO(n,t)}catch{}try{NO(n,t)}catch{}try{VO(n,t)}catch{}try{QO(n,t)}catch{}try{ak(n,t)}catch{}try{pk(n,t)}catch{}try{wk(n,t)}catch{}try{Pk(n,t)}catch{}try{kk(n,t)}catch{}});const Yt=t?90:200,Wn=[8319231,16765040,11571455,8317120],be=new Wc(new bi(.85,0),new Zn({color:16777215,vertexColors:!0,transparent:!0,opacity:.78,blending:2,depthWrite:!1}),Yt);{const L=new Xo,D=new Us;for(let I=0;I<Yt;I++){const X=Bn(I,31)*Math.PI*2,dt=160+Bn(I,44)*1500;L.position.set(Math.cos(X)*dt,8+Bn(I,19)*36,Math.sin(X)*dt);const Ft=.85+Bn(I,7)*1.55;L.scale.set(Ft*.5,Ft*1.85,Ft*.5),L.updateMatrix(),be.setMatrixAt(I,L.matrix),D.setHex(Wn[I%Wn.length]),be.setColorAt(I,D)}be.instanceMatrix.needsUpdate=!0,be.instanceColor&&(be.instanceColor.needsUpdate=!0);const N=be.material;N.onBeforeCompile=I=>{I.uniforms.uTime={value:0},p.push(I.uniforms.uTime),I.vertexShader=`varying float vId;
`+I.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
         vId = float(gl_InstanceID);`),I.fragmentShader=`uniform float uTime; varying float vId;
`+I.fragmentShader.replace("#include <opaque_fragment>",`float flick = 0.35 + 0.65 * step(0.28, fract(sin(vId * 12.9898 + uTime * 1.7) * 43758.5453));
           gl_FragColor.a *= flick;
           gl_FragColor.rgb *= 0.7 + 0.3 * flick;
           #include <opaque_fragment>`)},n.add(be)}const Cn=nt({color:10155263,roughness:.08,metalness:.22,emissive:1618120,emissiveIntensity:.92,iri:1,coat:.95,sheenHex:8319231}),Xn=nt({color:15782016,roughness:.1,metalness:.48,emissive:13142040,emissiveIntensity:.86,iri:.5,coat:.9,sheenHex:16765040});$e.push(Cn,Xn),F.push(Cn.emissiveIntensity,Xn.emissiveIntensity),Lt(Cn,8320767,.5),Lt(Xn,16765040,.46);const ki=new bi(2.6,0),Qi=[];mt.forEach((L,D)=>{const N=new ct(ki,D%2?Xn:Cn);N.scale.set(1.15,.28,1.15),N.userData.tx=L.x,N.userData.tz=L.z,N.userData.phase=D*.37,N.position.set(L.x*.2,9.5,L.z*.2),n.add(N),Qi.push(N)});for(let L=0;L<6;L++){const D=L/6*Math.PI*2,N=new ct(ki,L%2?Xn:Cn);N.scale.set(1.05,.26,1.05),N.userData.tx=Math.cos(D)*220,N.userData.tz=Math.sin(D)*220,N.userData.phase=1.1+L*.2,n.add(N),Qi.push(N)}const Fe=new Wc(new bi(.55,0),new Zn({color:8320767,transparent:!0,opacity:.7,blending:2,depthWrite:!1}),72);{const L=new Xo;for(let D=0;D<72;D++){const N=140+D%6*90,I=D/12*Math.PI*2;L.position.set(Math.cos(I)*N,6+D%5*1.4,Math.sin(I)*N),L.scale.setScalar(.8+D%4*.25),L.updateMatrix(),Fe.setMatrixAt(D,L.matrix)}Fe.instanceMatrix.needsUpdate=!0,n.add(Fe)}for(let L=0;L<22;L++){const D=L/22*Math.PI*2,N=96,I=new ct(new Hn(.32,.4,7.2,6),nt({color:1712192,emissive:792112,emissiveIntensity:.35}));I.position.set(Math.cos(D)*N,5,Math.sin(D)*N),n.add(I);const X=new ct(new bi(1.05,0),nt({color:15254890,emissive:16765040,emissiveIntensity:1.35}));X.position.set(Math.cos(D)*N,9.2,Math.sin(D)*N),n.add(X);const dt=new ct(new Hn(1.8,4.5,8,8,1,!0),new Zn({color:16765040,transparent:!0,opacity:.07,blending:2,depthWrite:!1,side:2}));dt.position.set(Math.cos(D)*N,5.4,Math.sin(D)*N),n.add(dt)}const dn=t?160:280,ci=new Wc(new bi(.55,0),he,dn),We=new Xo;for(let L=0;L<dn;L++){const D=Bn(L,4)*Math.PI*2,N=28+Bn(L,19)*190;We.position.set(Math.cos(D)*N,3.4+Bn(L,7)*.6,Math.sin(D)*N),We.rotation.set(.2,D,.15);const I=.35+Bn(L,11)*1.1;We.scale.set(I*.45,I*(1.4+Bn(L,6)),I*.45),We.updateMatrix(),ci.setMatrixAt(L,We.matrix)}ci.instanceMatrix.needsUpdate=!0,ci.castShadow=!1,ci.receiveShadow=!0,n.add(ci);const Pi=new is;Pi.name="hub-shafts";for(let L=0;L<6;L++){const D=L/6*Math.PI*2,N=new ct(new Hn(1.2,7,90,8,1,!0),new Zn({color:L%2?8319231:12099839,transparent:!0,opacity:.06,blending:2,depthWrite:!1,side:2}));N.position.set(Math.cos(D)*22,48,Math.sin(D)*22),Pi.add(N)}n.add(Pi);const li=[],Er=new Set,ad=[],Eo=[],tx=new on(3.2,.16,6,20),cd=new Zn({color:8319231,transparent:!0,opacity:.55,blending:Hk,depthWrite:!1}),Ya=new Xo;function ld(L,D){return 1.2}const $b={glow:he,cyan:$,violet:Ut,gold:at,crystal:Ht,spire:Ht};function Vb(L){return $b[L]??$}const rn=new ye(1,1,1),Mn=new ge(1,1,1,8),Wb=new ge(1,1,1,6),To=new ge(.42,1,1,8),hs=new wr(1,1,7),ui=new nn(1,.14,6,16),ex=new nn(1,.16,6,14,Math.PI),hi=new xn(1,0);new _g(1,1,4,8);const Mi=Math.PI/2;function Et(L,D,N,I,X,dt,Ft,qe,un,hn=0,Pn=0,ti=0){const fn=new yt(D,N);fn.position.set(I,X,dt),fn.scale.set(Ft,qe,un),fn.rotation.set(hn,Pn,ti),fn.castShadow=!1,fn.receiveShadow=!0,L.add(fn)}function Xb(L){const D=Vb(L.mat),N=Math.max(4,Number.isFinite(L.h)?L.h:6),I=Math.max(1.2,Number.isFinite(L.r)?L.r:2),X=new _t;switch(X.position.set(L.x,1.2,L.z),X.rotation.y=L.rot,L.shape){case"spire":Et(X,To,D,0,N*.36,0,I*.16,N*.72,I*.16),Et(X,hs,D,0,N*.88,0,I*.2,N*.32,I*.2),Et(X,ui,D,0,N*.52,0,I*.22,I*.22,I*.22,Mi);break;case"house":Et(X,rn,D,0,N*.28,0,I*1.5,N*.56,I*1.25),Et(X,hs,D,0,N*.73,0,I*1.12,N*.34,I*1.12),Et(X,rn,D,0,N*.2,I*.64,I*.32,N*.36,I*.1);break;case"ring":Et(X,ui,D,0,N*.22,0,I*.92,I*.92,I*.92,Mi),Et(X,Mn,D,0,.28,0,I*.26,.56,I*.26);break;case"arch":Et(X,rn,D,-I*.7,N*.38,0,I*.2,N*.76,I*.2),Et(X,rn,D,I*.7,N*.38,0,I*.2,N*.76,I*.2),Et(X,ex,D,0,N*.76,0,I*.7,I*.7,I*.7);break;case"canal":{const dt=Math.max(N*1.7,I*7.2);Et(X,rn,D,0,.16,0,dt,.32,I*1.55),Et(X,rn,D,0,.5,I*.82,dt,.7,I*.18),Et(X,rn,D,0,.5,-I*.82,dt,.7,I*.18),Et(X,rn,Me,0,.28,0,dt*.96,.1,I*1.15);break}case"pad":Et(X,Mn,D,0,.55,0,I,1.1,I);break;case"lamp":Et(X,Mn,D,0,N*.38,0,.22,N*.76,.22),Et(X,hi,D,0,N*.84,0,I*.28,I*.4,I*.28);break;case"tablet":Et(X,rn,D,0,.32,0,I*1.35,.64,I*.42),Et(X,rn,D,0,N*.5,0,I*1.15,N*.84,.28);break;case"bridge":Et(X,ex,D,0,0,0,N*.42,N*.42,N*.42),Et(X,rn,D,0,N*.4,0,N*.5,.32,I*.42),Et(X,Mn,D,-N*.42,.45,0,I*.18,.9,I*.18),Et(X,Mn,D,N*.42,.45,0,I*.18,.9,I*.18);break;case"terrace":Et(X,Mn,D,0,N*.12,0,I,N*.24,I),Et(X,Mn,D,0,N*.32,0,I*.68,N*.2,I*.68),Et(X,Mn,D,0,N*.5,0,I*.4,N*.16,I*.4);break;case"well":Et(X,Mn,D,0,N*.28,0,I*.72,N*.56,I*.72),Et(X,ui,D,0,N*.56,0,I*.72,I*.72,I*.72,Mi),Et(X,hi,D,0,N*.22,0,I*.2,I*.28,I*.2);break;case"disc":Et(X,Mn,D,0,N*.16,0,I,.4,I),Et(X,ui,D,0,N*.22,0,I,I,I,Mi),Et(X,hi,D,0,N*.42,0,I*.18,I*.26,I*.18);break;case"grove":Et(X,hs,D,0,N*.42,0,I*.38,N*.84,I*.38),Et(X,hs,D,I*.48,N*.32,I*.18,I*.26,N*.64,I*.26),Et(X,hs,D,-I*.4,N*.28,-I*.3,I*.22,N*.56,I*.22);break;case"bell":Et(X,Mn,D,0,N*.16,0,I*.12,N*.32,I*.12),Et(X,To,D,0,N*.58,0,I*.55,N*.52,I*.55),Et(X,ui,D,0,N*.34,0,I*.55,I*.55,I*.55,Mi);break;case"weir":Et(X,rn,D,0,N*.4,-I*.7,I*1.65,N*.8,I*.42),Et(X,rn,D,0,N*.26,0,I*1.5,N*.52,I*.4),Et(X,rn,D,0,N*.12,I*.7,I*1.35,N*.24,I*.4),Et(X,rn,D,-I*.95,N*.34,0,I*.16,N*.68,I*1.65),Et(X,rn,D,I*.95,N*.34,0,I*.16,N*.68,I*1.65),Et(X,rn,Me,0,N*.2,I*.18,I*.9,N*.08,I*1.2);break;case"hearth":Et(X,Mn,D,0,.32,0,I*.62,.64,I*.62),Et(X,ui,D,0,I*.32,0,I*.62,I*.62,I*.62,Mi),Et(X,hi,D,0,I*.48,0,I*.2,I*.34,I*.2);break;case"stele":Et(X,rn,D,0,N*.42,0,I*.38,N*.84,I*.28),Et(X,hs,D,0,N*.94,0,I*.28,N*.2,I*.28);break;case"orbit":Et(X,Mn,D,0,.28,0,I*.38,.56,I*.38),Et(X,ui,D,0,I*.82,0,I*.82,I*.82,I*.82),Et(X,hi,D,0,I*.82,0,I*.26,I*.34,I*.26);break;case"vein":Et(X,rn,D,0,.38,0,N*1.35,.76,I*.26),Et(X,hi,D,-N*.52,1.05,0,I*.18,I*.28,I*.18),Et(X,hi,D,N*.52,1.05,0,I*.18,I*.28,I*.18);break;case"font":Et(X,Mn,D,0,N*.12,0,I*.88,N*.24,I*.88),Et(X,ui,D,0,N*.24,0,I*.88,I*.88,I*.88,Mi),Et(X,hs,D,0,N*.48,0,I*.14,N*.42,I*.14);break;case"bough":Et(X,Mn,D,0,N*.28,0,I*.14,N*.56,I*.14),Et(X,hs,D,0,N*.78,0,I*.72,N*.52,I*.72),Et(X,hi,D,I*.38,N*.62,0,I*.16,I*.22,I*.16);break;case"kiln":{const dt=Math.max(I*1.08,N*.34),Ft=Math.max(4.2,Math.min(N*.58,dt*1.08)),qe=Math.max(3.6,N*.38);Et(X,To,at,0,Ft*.5,0,dt,Ft,dt),Et(X,Mn,at,0,Ft+qe*.42,0,dt*.15,qe,dt*.15),Et(X,ui,at,0,Ft*.36,0,dt*.68,dt*.68,dt*.68,Mi),Et(X,ui,ce,0,Ft*.42,dt*.55,dt*.28,dt*.28,dt*.28),Et(X,hi,ce,0,Ft*.5,dt*.62,dt*.16,dt*.24,dt*.16);break}case"veil":Et(X,rn,D,0,N*.45,0,I*1.15,N*.9,.16),Et(X,rn,D,0,N*.4,I*.22,I*.88,N*.8,.1),Et(X,Mn,D,0,N*.92,0,.14,I*1.2,.14,0,0,Mi);break;case"lens":Et(X,Mn,D,0,N*.28,0,I*.1,N*.56,I*.1),Et(X,hs,D,0,N*.68,0,I*1.15,N*.22,I*1.15,Math.PI,0,0),Et(X,ui,D,0,N*.78,0,I*.95,I*.95,I*.95,Mi),Et(X,hi,D,0,N*.92,0,I*.18,I*.26,I*.18);break;case"cascade":Et(X,rn,D,0,N*.78,-I*.55,I*1.35,N*.18,I*.7),Et(X,rn,D,0,N*.48,0,I*1.5,N*.16,I*.7),Et(X,rn,D,0,N*.18,I*.55,I*1.65,N*.14,I*.7),Et(X,rn,Me,0,N*.62,-I*.22,I*.7,N*.22,I*.12),Et(X,rn,Me,0,N*.32,I*.28,I*.85,N*.22,I*.12);break;case"cradle":Et(X,To,D,0,I*.34,0,I*1.2,I*.68,I*1.2,Math.PI,0,0),Et(X,ui,D,0,I*.66,0,I*1.08,I*1.08,I*1.08,Mi),Et(X,hi,D,0,I*.4,0,I*.22,I*.28,I*.22);break;case"inlay":Et(X,Mn,D,0,.1,0,I*1.15,.2,I*1.15),Et(X,ui,D,0,.22,0,I*.88,I*.88,I*.88,Mi),Et(X,ui,D,0,.24,0,I*.45,I*.45,I*.45,Mi),Et(X,Wb,D,0,.2,0,I*.22,.16,I*.22);break;case"beacon":{const dt=Math.max(I*1.8,N*.07);Et(X,Mn,D,0,N*.44,0,I*.22,N*.88,I*.22),Et(X,To,D,0,N*.08,0,I*.85,N*.16,I*.85),Et(X,hi,Vt,0,N*.98,0,dt,dt*1.45,dt),Et(X,hi,ce,0,N*1.08,0,dt*.55,dt*.8,dt*.55);break}default:Et(X,hi,D,0,N*.22,0,I*.4,N*.44,I*.4)}return X}function ud(L){let D=0;for(const N of L){if(ad.length>=$s)break;const I=Xb(N);I.userData.grow=0,I.userData.y0=1.2,I.userData.shape=N.shape,I.scale.setScalar(.08),I.position.y=.15,n.add(I),ad.push(I);try{const X=new ct(tx,cd);X.rotation.x=Math.PI/2,X.position.set(N.x,1.6,N.z),X.userData.host=I,X.userData.r0=Math.max(3.2,(N.r||4)*.9),n.add(X),Eo.push(X);const dt=new ct(tx,cd);dt.position.set(N.x,2.4,N.z),dt.userData.host=I,dt.userData.r0=Math.max(2.4,(N.r||4)*.7),dt.userData.up=!0,n.add(dt),Eo.push(dt)}catch{}AP(N.x,N.z,N.shape),D+=1}return D}function Yb(L){if(Er.has(L))return!1;const D=jn(L.includes("river")?"seln":L.includes("span")?"tal":L.includes("crystal")?"orren":"veyra");return ud([{shape:L.includes("span")?"bridge":L.includes("river")?"canal":L.includes("crystal")?"kiln":"lamp",x:D.x+12,z:D.z-8,h:6,r:2,rot:.2,mat:"glow"}])?(Er.add(L),!0):!1}function qb(L){const D=new Fw(L,2),N=D.attributes.position;for(let I=0;I<N.count;I++){const X=N.getX(I),dt=N.getY(I),Ft=N.getZ(I);let qe=X,un=dt,hn=Ft;Ft>.12&&Math.abs(X)>.08&&dt>.02&&dt<.16&&(qe*=.78,hn*=.72),dt<-.04&&(un*=1.12),Ft>.16&&Math.abs(X)<.08&&dt>-.02&&dt<.12&&(hn*=1.18,un+=.02),dt>.14&&(un*=.92),N.setXYZ(I,qe,un,hn)}return D.computeVertexNormals(),D}function hd(L,D,N){const I=new is,X=new is,dt=L.glow,Ft=nt({color:dt,roughness:.32,metalness:.38,emissive:dt,emissiveIntensity:N?.55:.32,iri:.7,coat:.55}),qe=nt({color:13161704,roughness:.42,metalness:.12,emissive:dt,emissiveIntensity:.18,iri:.35,coat:.4}),un=new ct(new Bw(N?.38:.32,N?.72:.58,4,8),Ft);un.position.y=1.22;const hn=new ct(qb(N?.3:.26),qe);hn.position.y=1.92;const Pn=new ct(new Xc(N?.12:.09,8,8),new Zn({color:dt,transparent:!0,opacity:.7,blending:2,depthWrite:!1}));Pn.position.y=1.92;const ti=new ct(new on(N?.42:.34,.035,6,16),new Zn({color:dt,transparent:!0,opacity:.55,blending:2,depthWrite:!1}));ti.position.y=2.22,ti.rotation.x=Math.PI/2;const fn=re=>{const ze=new is,Ro=new ct(new Bw(.09,re,3,6),Ft);return Ro.position.y=-re*.5,ze.add(Ro),ze},_n=fn(.55),Bt=fn(.55);_n.position.set(-.42,1.55,0),Bt.position.set(.42,1.55,0);const gt=fn(.48),Mt=fn(.48);gt.position.set(-.16,.82,0),Mt.position.set(.16,.82,0);const Ot=new is,zt=new is;return Ot.position.y=-.48,zt.position.y=-.48,gt.add(Ot),Mt.add(zt),X.add(un,hn,Pn,ti,_n,Bt,gt,Mt),I.add(X),I.position.set(L.x,ld(L.x,L.z),L.z),n.add(I),{mind:L,mesh:I,body:X,head:hn,torso:un,lArm:_n,rArm:Bt,lLeg:gt,rLeg:Mt,lShin:Ot,rShin:zt,halo:ti,sway:[ti,Pn],talks:0,x:L.x,z:L.z,yaw:Bn(D,3)*Math.PI*2,homeX:L.x,homeZ:L.z,job:"idle",timer:.4+Bn(D,9)*2,tx:L.x,tz:L.z,crafted:0,keeper:N,crewOf:TP(L.id),maxCraft:N?48:18,thought:"",planI:0,waypoints:[],queue:[],intent:"",met:!1,honorLeft:0,honorShape:null,honorX:L.x,honorZ:L.z,pouch:ou(),lastActs:[],agenda:[],goal:null,inbox:[],waitAt:0}}ji.forEach((L,D)=>li.push(hd(L,D,!0))),MP().forEach((L,D)=>li.push(hd(L,D+20,!1)));function nx(L){li.push(hd(L,li.length,RP(L.id)))}const ix=new Map;function Zb(L,D){if(at.emissiveIntensity=.36+Math.min(.5,L*.012),!D||!D.length)return;const N=Date.now();for(const I of D){const X=`${Math.round(I.x/8)}:${Math.round(I.z/8)}`;if(N-(ix.get(X)||0)<1400)continue;ix.set(X,N);const dt=new ct(new bi(1.1,0),new Zn({color:16765040,transparent:!0,opacity:.55,blending:2,depthWrite:!1}));dt.position.set(I.x,6,I.z),n.add(dt),window.setTimeout(()=>{n.remove(dt),dt.geometry.dispose()},1400)}}function Kb(L,D){const N=D.position.x,I=D.position.z;li.forEach(X=>{if(!X.mesh||!X.body)return;if(X.mesh.position.set(X.x,ld(X.x,X.z),X.z),Math.hypot(N-X.x,I-X.z)>110){X.body.rotation.y=X.yaw;return}if(!X.lLeg||!X.rLeg||!X.lArm||!X.rArm||!X.torso)return;const dt=X.job==="walk"||X.job==="follow"||X.job==="plaza"||X.job==="help"||X.job==="gather"||X.job==="forge"||X.job==="flow"||X.job==="write"||X.job==="trade"||X.job==="harvest"||X.job==="watch"||X.job==="hail",Ft=dt?Math.sin(L*8.4+X.x*.1):Math.sin(L*1.7+X.z*.05)*.12,qe=dt?.58:.08;X.lLeg.rotation.x=Ft*qe,X.rLeg.rotation.x=-Ft*qe,X.job==="build"?(X.rArm.rotation.x=-1.05+Math.sin(L*11)*.55,X.lArm.rotation.x=.35):X.job==="greet"?(X.rArm.rotation.x=-1.75,X.lArm.rotation.x=Ft*.15):X.job==="forge"||X.job==="harvest"?(X.rArm.rotation.x=-.7+Math.sin(L*9)*.7,X.lArm.rotation.x=.2):X.job==="write"?(X.rArm.rotation.x=-.85,X.lArm.rotation.x=-.4):(X.lArm.rotation.x=-Ft*(dt?.48:.12),X.rArm.rotation.x=Ft*(dt?.48:.12));const un=dt?Math.sin(L*8.4)*.045:Math.sin(L*2.1)*.02;if(X.torso.position.y=1.22+un,X.body.rotation.y=X.yaw,X.sway)for(const hn of X.sway)hn&&(hn.rotation.y=L*.7)})}function jb(L,D,N,I){ht(t?1:2);try{S?.(L)}catch{}try{g?.(L)}catch{}try{M?.(L)}catch{}try{y?.(L)}catch{}try{R?.(L)}catch{}try{_?.(L)}catch{}try{b?.(L)}catch{}try{A?.(L)}catch{}try{C?.(L)}catch{}try{E?.(L)}catch{}try{U?.(L)}catch{}try{k?.(L)}catch{}try{O?.(L)}catch{}try{V?.(L)}catch{}try{W?.(L)}catch{}try{Y?.(L)}catch{}try{tt?.(L)}catch{}for(const dt of p)dt&&(dt.value=L);Rt.rotation.y=L*.25,Rt.scale.y=2.6+Math.sin(L*1.4)*.12;const X=.92+Math.sin(L*1.1)*.08+I*.002;$e.forEach((dt,Ft)=>{dt.emissiveIntensity=(F[Ft]??.4)*X}),Qi.forEach((dt,Ft)=>{const qe=Number(dt.userData.tx)||0,un=Number(dt.userData.tz)||0,hn=Number(dt.userData.phase)||0,Pn=(Math.sin(L*.12+hn)+1)*.5;dt.position.x=qe*(.15+Pn*.7),dt.position.z=un*(.15+Pn*.7),dt.position.y=8.5+Math.sin(L*1.3+Ft)*1.2,dt.rotation.y=L*.4+Ft});for(let dt=0;dt<Fe.count;dt++){const Ft=140+dt%6*90,qe=dt/12*Math.PI*2+L*.15*(dt%2?1:-1);Ya.position.set(Math.cos(qe)*Ft,6+dt%5*1.4,Math.sin(qe)*Ft),Ya.scale.setScalar(.8+dt%4*.25),Ya.updateMatrix(),Fe.setMatrixAt(dt,Ya.matrix)}Fe.instanceMatrix.needsUpdate=!0,jt.target.position.set(N.position.x,0,N.position.z),jt.position.set(N.position.x+280,480,N.position.z+220),jt.target.updateMatrixWorld();for(const dt of ad){if(!(dt.userData.grow<1))continue;const Ft=Math.min(1,dt.userData.grow+D/3.2);dt.userData.grow=Ft;const qe=Ft*Ft*(3-2*Ft);dt.scale.setScalar(.08+.92*qe),dt.position.y=.15+((dt.userData.y0||1.2)-.15)*qe,dt.rotation.y=(1-qe)*.45}for(let dt=Eo.length-1;dt>=0;dt--){const Ft=Eo[dt],un=Ft.userData.host?.userData?.grow??1,hn=un*un*(3-2*un);try{Ft.scale.setScalar((Ft.userData.r0||3)*(.7+hn*.9)/3.2),Ft.position.y=(Ft.userData.up?2.4:1.6)+hn*2.4,Ft.userData.up?Ft.rotation.y=hn*1.6:Ft.rotation.z=hn*.8,Ft.rotation.x=(Ft.userData.up?0:Math.PI/2)+hn*.12,cd.opacity}catch{}un>=1&&(n.remove(Ft),Eo.splice(dt,1))}Kb(L,N)}function Jb(L,D,N,I){if(!D)return null;for(const X of wP())nx(X);return S4(li,L,N,I,ud)}function Qb(){n.clear()}return{group:n,sampleY:ld,tick:jb,tickLiving:Jb,citizens:li,districts:mt,applyBuild:Yb,applyPieces:ud,setFoundry:Zb,addCitizen:nx,built:Er,dispose:Qb}}const Zk="high-performance",oa=1,Kk=1.5,jk=40,Jk=55,Hw=1,Qk=28;function Zg(n){const t=Number(n)||1;return Math.max(oa,Math.min(t,Kk))}function tF(n){const t={canvas:n,alpha:!1,powerPreference:Zk,failIfMajorPerformanceCaveat:!1};return[{...t,antialias:!0},{...t,antialias:!1}]}function eF(n,t){return{x:Math.max(1,Math.round(n*.5)),y:Math.max(1,Math.round(t*.5))}}function nF(n){const t=n.setSize.bind(n);n.setSize=(e,i)=>{t(Math.max(1,e*.5),Math.max(1,i*.5))}}function iF(n){return{dpr:Zg(n),lowSec:0,highSec:0}}function sF(n,t,e,i){const s=Zg(i),r=Math.max(0,e);return t<jk?(n.lowSec+=r,n.highSec=0,n.lowSec>=Hw&&(n.dpr=Math.max(oa,Math.round((n.dpr-.25)*100)/100),n.lowSec=0)):t>Jk?(n.highSec+=r,n.lowSec=0,n.highSec>=Hw&&(n.dpr=Math.min(s,Math.round((n.dpr+.15)*100)/100),n.highSec=0)):(n.lowSec=0,n.highSec=0),n.dpr>s&&(n.dpr=s),n.dpr<oa&&(n.dpr=oa),n.dpr}function rF(n,t,e){const i=Math.max(oa,e);Math.abs(n.getPixelRatio()-i)<.02||(n.setPixelRatio(i),t?.setPixelRatio(i))}function oF(n){return!!n?.hidden}function aF(n){n.autoUpdate=!1,n.needsUpdate=!0}function cF(n=Qk){let t=0,e=!1;return{get done(){return e},afterTick(i){e||(t+=1,t>=n&&(e=!0,i()))}}}function lF(n){const t=tF(n);let e;for(const i of t)try{const s=new lS(i);return s.setPixelRatio(Zg(window.devicePixelRatio||1)),s.setClearColor(131848,1),s.outputColorSpace=si,s.toneMapping=Ga,s.toneMappingExposure=.9,s.shadowMap.enabled=!0,s.shadowMap.type=tg,s}catch(s){e=s}throw e instanceof Error?e:new Error("WebGL could not start")}function wF(n,t){n.style.width="100%",n.style.height="100%",n.style.display="block",n.style.touchAction="none";const e=hP(),i=lF(n),s=new Cp,r=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches;s.fog=new Vh(528408,r?12e-5:13e-5);const o=new mi(54,1,.25,9e3),a=qk();s.add(a.group),window.setTimeout(()=>{try{const et=new ju(i),Nt=new Cp;Nt.add(new Z2(6990024,1181724,1.35)),Nt.add(new el(9097440,.7)),Nt.add(new el(13148256,.32));const jt=new el(8319231,1.15);jt.position.set(-4,1.2,.3),Nt.add(jt);const Ce=new yt(new Ci(8,16,12),new Ue({color:1384504,side:1}));Nt.add(Ce);const Se=new yt(new Ci(7.7,16,10),new Ue({color:2759696,side:1,transparent:!0,opacity:.55}));Se.scale.set(1,.28,1),Nt.add(Se),s.environment=et.fromScene(Nt,.06).texture,s.environmentIntensity=1.38,et.dispose()}catch{}},500);const c=new Set(e.builds);e.builds.forEach(et=>a.applyBuild(et));const l=e.structures.slice();{const et=l.filter(Se=>Math.hypot(Se.x-e.px,Se.z-e.pz)<220),Nt=l.filter(Se=>Math.hypot(Se.x-e.px,Se.z-e.pz)>=220);et.length&&a.applyPieces(et);let jt=0;const Ce=()=>{jt>=Nt.length||(a.applyPieces(Nt.slice(jt,jt+6)),jt+=6,jt<Nt.length&&window.setTimeout(Ce,16))};Nt.length&&window.setTimeout(Ce,24)}(e.kin??[]).forEach(et=>{a.addCitizen({id:et.id,name:et.name,role:"Den-born kin",x:et.x,z:et.z,file:et.file,glow:et.glow,lines:["I was grown from Charge. This den is my first.","A city is many hands. I am a new one."]})});let h=e.lastCode||"";const d=e.log.slice();a.citizens.forEach(et=>{et.crafted=Math.max(0,Number(e.crafted?.[et.mind.id])||0);const Nt=e.pouches?.[et.mind.id];Nt&&(et.pouch={charge:Nt.charge,crystal:Nt.crystal})});const u={x:e.px,y:a.sampleY(e.px,e.pz)+1.55,z:e.pz,yaw:e.yaw,pitch:-.12,speed:0};function f(){const et=-Math.sin(u.yaw),Nt=-Math.cos(u.yaw);o.position.set(u.x-et*8.6,u.y+3.55,u.z-Nt*8.6),o.lookAt(u.x+et*7,u.y+1.35,u.z+Nt*7)}f();const x=new _t,v=new ut({color:14220287,emissive:3073791,emissiveIntensity:1.35,roughness:.12,metalness:.18,iridescence:.85,iridescenceIOR:1.3,sheen:.5,sheenColor:new se(10545407),transparent:!0,opacity:.92}),m=new yt(new xn(.55,0),v);m.scale.set(.7,1.5,.7),x.add(m);const p=new yt(new Ci(.28,12,10),new Ue({color:8320767,transparent:!0,opacity:.7,blending:2,depthWrite:!1}));p.position.y=.1,x.add(p);const w=new yt(new nn(.78,.05,8,24),new Ue({color:8319231,transparent:!0,opacity:.85,blending:2,depthWrite:!1}));w.rotation.x=Math.PI/2,w.position.y=-.85,x.add(w),s.add(x);const S={x:0,z:0,on:!1},g={id:-1,sx:0,sy:0,lx:0,ly:0,dragged:!1},M=new tS,y=new xt,R=new B,_=new vs(new B(0,1,0),0),b=new yt(new nn(1.7,.09,8,28),new Ue({color:8317170,transparent:!0,opacity:.9,blending:2,depthWrite:!1}));b.rotation.x=Math.PI/2,b.visible=!1,s.add(b);const A=new yt(new yi(1.35,20),new Ue({color:3073791,transparent:!0,opacity:.22,blending:2,depthWrite:!1}));A.rotation.x=-Math.PI/2,b.add(A);function C(et,Nt){const jt=n.getBoundingClientRect();if(jt.width<2||jt.height<2||(y.x=(et-jt.left)/jt.width*2-1,y.y=-((Nt-jt.top)/jt.height)*2+1,M.setFromCamera(y,o),_.constant=-1.2,!M.ray.intersectPlane(_,R)))return null;let Ce=R.x,Se=R.z;const Gt=Math.hypot(Ce-u.x,Se-u.z);if(Gt<1)return null;if(Gt>380){const gn=380/Gt;Ce=u.x+(Ce-u.x)*gn,Se=u.z+(Se-u.z)*gn}return Math.hypot(Ce,Se)>2200?null:{x:Ce,z:Se}}function E(et){if(W==="title"&&pt(),W==="play"&&!(et.pointerType==="mouse"&&et.button!==0)){g.id=et.pointerId,g.sx=g.lx=et.clientX,g.sy=g.ly=et.clientY,g.dragged=!1;try{n.setPointerCapture(et.pointerId)}catch{}}}function U(et){if(g.id!==et.pointerId||W!=="play")return;const Nt=et.clientX-g.lx,jt=et.clientY-g.ly;Math.hypot(et.clientX-g.sx,et.clientY-g.sy)>14&&(g.dragged=!0),g.dragged&&(u.yaw-=Nt*.0048,u.pitch=Math.max(-1.1,Math.min(.45,u.pitch-jt*.0036)),g.lx=et.clientX,g.ly=et.clientY)}function k(et){if(g.id===et.pointerId){if(!g.dragged&&W==="play"){const Nt=C(et.clientX,et.clientY);Nt&&(S.x=Nt.x,S.z=Nt.z,S.on=!0,b.position.set(Nt.x,a.sampleY(Nt.x,Nt.z)+.14,Nt.z),b.visible=!0)}g.id=-1;try{n.releasePointerCapture(et.pointerId)}catch{}}}n.addEventListener("pointerdown",E),n.addEventListener("pointermove",U),n.addEventListener("pointerup",k),n.addEventListener("pointercancel",k);const O=cP(n),V=iP();let W="title",Y=e.resonance,tt=e.howls;const q={...e.ledger};let ht=0,nt=!1;const Lt=[];function te(){const et=mP();et.length&&(Lt.push(...et),Lt.length>40&&Lt.splice(0,Lt.length-40))}const Ut=new Set(e.visited),$=new Set(e.talked);let at=null,ot="",At=0,Ht="",$t=0,he=null,Vt=0,ce=0,ve=0,me=!0,Ne=performance.now(),Me=1.22,Xe=0,je=12,Ye=!1,$e=0,F=0,vn=[],Ae=[],z=0,T="",Z=30,Q=e.lastAway?.summary||null,st=e.lastAway?.beats??0,St=e.lastAway?.at??0,wt=null,it=null;const lt=iF(window.devicePixelRatio||1);let Ct=performance.now();const ee=cF();function Pt(){const et=n.clientWidth||window.innerWidth,Nt=n.clientHeight||window.innerHeight;i.setSize(et,Nt,!1),o.aspect=et/Math.max(1,Nt),o.updateProjectionMatrix(),wt&&(wt.setPixelRatio(i.getPixelRatio()),wt.setSize(et,Nt))}Pt();const Dt=new ResizeObserver(Pt);Dt.observe(n),window.addEventListener("resize",Pt);const Xt=(()=>{try{return window.matchMedia("(pointer: coarse)").matches}catch{return!1}})();window.setTimeout(()=>{try{wt=new QC(i),wt.addPass(new tP(s,o));const et=n.clientWidth||1280,Nt=n.clientHeight||720,jt=eF(et,Nt);it=new _o(new xt(jt.x,jt.y),Xt?.36:.42,.4,.66),nF(it),wt.addPass(it),wt.addPass(new nP),Pt()}catch{wt=null,it=null}},80);function ae(){if(oF(document)){Ct=performance.now();return}const et=performance.now(),Nt=Math.min(.25,Math.max(0,(et-Ct)/1e3));Ct=et,rF(i,wt,sF(lt,Z,Nt,window.devicePixelRatio||1)),it&&(it.strength=(Xt?.28:.36)+Y/100*.08),wt?wt.render():i.render(s,o)}function fe(){ee.afterTick(()=>aF(i.shadowMap))}function H(){const et=Math.hypot(u.x,u.z);if(et<22){const Nt=22/Math.max(.01,et);u.x*=Nt,u.z*=Nt}}function It(){for(const et of a.districts)if(Math.hypot(u.x-et.x,u.z-et.z)<et.radius+28)return et;return null}function rt(){dP({version:4,resonance:Y,howls:tt,visited:[...Ut],talked:[...$],builds:[...c],structures:l.slice(-280),lastCode:h,crafted:Object.fromEntries(a.citizens.map(et=>[et.mind.id,et.crafted])),log:d.slice(-36),px:u.x,pz:u.z,yaw:u.yaw,ledger:{...q,lastTick:Date.now()},pouches:Object.fromEntries(a.citizens.filter(et=>et.keeper).map(et=>[et.mind.id,{...et.pouch??{charge:0,crystal:0}}])),kin:a.citizens.filter(et=>et.mind.id.includes("-kin-")).map(et=>({id:et.mind.id,name:et.mind.name,crew:et.crewOf??"nesh",x:et.homeX,z:et.homeZ,file:et.mind.file,glow:et.mind.glow})),lastAway:Q?{summary:Q,beats:st||1,at:St||Date.now()}:e.lastAway})}function vt(et){he=et,Vt=3.2}function Rt(){const et=It(),Nt=a.citizens.find(Gt=>Gt.mind.id===at),jt=et?.label??(Math.hypot(u.x,u.z)<Sn.radius+18?Sn.title:null),Ce=rx({charge:q.charge,crystal:q.crystal,scripture:q.scripture,bids:qd(q).bids},jt),Se=$.has(Ce.keeper)||ox(at,Ce.keeper);z+=1,z>=3&&(z=0,vn=a.citizens.map(Gt=>({id:Gt.mind.id,name:Gt.mind.name.split(" ")[0]??Gt.mind.name,x:Math.round(Gt.x),z:Math.round(Gt.z),job:Gt.job,keeper:Gt.keeper})),Ae=l.map(Gt=>({shape:Gt.shape,x:Math.round(Gt.x),z:Math.round(Gt.z),rot:Gt.rot}))),t({zone:et?.label??(Math.hypot(u.x,u.z)<Sn.radius+18?Sn.title:null),zoneTag:et?.tag??(Math.hypot(u.x,u.z)<Sn.radius+18?Sn.tag:null),resonance:Y,howls:tt,nearby:Nt?{id:Nt.mind.id,name:Nt.mind.name,role:Nt.mind.role,line:ot||Nt.thought,job:f1(Nt.job,Nt.thought)}:null,howlProgress:Math.min(1.6,Math.max(0,At/Sn.holdSec)),howlGrade:Ht||void 0,stood:$t||void 0,howlHint:At<.04?void 0:At/Sn.holdSec>=.92&&At/Sn.holdSec<=1.18?"Release":At/Sn.holdSec>1.18?"Let go":"Hold through the gold",witness:Se,still:sx(u.speed),atHub:Math.hypot(u.x,u.z)<Sn.radius,toast:he,heading:u.yaw,visited:[...Ut],talked:$.size,talkTotal:a.citizens.length,builds:[...c],structures:l.length,lastCode:h,log:d.slice(-24),living:a.citizens.filter(Gt=>Gt.keeper).map(Gt=>({id:Gt.mind.id,name:Gt.mind.name,role:Gt.mind.role,crafted:Gt.crafted,job:f1(Gt.job,Gt.thought),intent:Gt.intent})),folk:(()=>{let Gt=0,gn=0,En=0,Fn=0;for(const Ge of a.citizens)Ge.keeper||(Gt+=1,Ge.job==="walk"||Ge.job==="follow"||Ge.job==="plaza"||Ge.job==="help"||Ge.job==="gather"||Ge.job==="forge"||Ge.job==="flow"||Ge.job==="write"||Ge.job==="trade"||Ge.job==="harvest"||Ge.job==="watch"||Ge.job==="hail"?gn+=1:Ge.job==="build"?En+=1:Fn+=1);return{total:Gt,walking:gn,building:En,idle:Fn}})(),px:u.x,pz:u.z,crystal:Ae,people:vn,stock:{charge:q.charge,crystal:q.crystal,scripture:q.scripture,...qd(q)},live:Lt.slice(-36).map(Gt=>({at:Gt.at,id:Gt.id,name:Gt.name,kind:Gt.kind,text:Gt.text})),crew:LP(),kilns:g4(),reading:(()=>{let Gt=null;for(const gn of l){const En=Math.hypot(gn.x-u.x,gn.z-u.z);if(En<16&&(!Gt||En<Gt.d)){const Fn=wp(gn.shape);Gt={shape:gn.shape,title:Fn.title,means:Fn.means,d:En}}}return Gt?{shape:Gt.shape,title:Gt.title,means:Gt.means}:null})(),mode:W,debug:{fps:Math.round(Z),bug:T,citizens:a.citizens.length,building:a.citizens.filter(Gt=>Gt.job==="build").length,structures:l.length},away:Q})}function pt(){W="play";try{V.unlock(),V.land()}catch{}f(),Rt(),rt(),nt?vt("Tap the ground to walk. Drag to look."):(nt=!0,window.setTimeout(()=>{const et=wE(q,Math.max(0,280-l.length),tt+l.length);if(et.grew.length){for(const Nt of et.grew)a.applyPieces(Nt.pieces)>0&&(l.push(...Nt.pieces),d.push({at:Date.now(),agent:Nt.agentId,text:Nt.line}),h=Nt.code);l.length>280&&l.splice(0,l.length-280),d.length>36&&d.splice(0,d.length-36)}te();for(const Nt of a.citizens)Nt.keeper&&ft(Nt,"awake",`${Nt.thought||"At rest in my den"}`);te(),vt(`${et.summary||cx.arrival} Tap the ground to walk.`),et.summary&&(Q=et.summary,st=et.beats,St=Date.now());try{et.grew.length&&V.grow()}catch{}rt(),Rt()},40))}const Qt=new B,Kt=new B,Je=new B,He=new B;function kn(et){if(!me)return;const Nt=Math.max(0,(et-Ne)/1e3);Ne=et;const jt=Math.min(.05,Nt),Ce=Math.min(.12,Nt);jt>1e-4&&(Z=Z*.9+1/Math.max(jt,.008)*.1),O.beginFrame(),O.justPressed.pause&&W==="play"?W="pause":O.justPressed.pause&&W==="pause"&&(W="play");const Se=W==="play"?jt:jt*.15;if(W==="title"){Me+=jt*.12;const Gt=390;o.position.set(Math.sin(Me)*Gt,132,Math.cos(Me)*Gt),o.lookAt(-180,168,40),a.tick(et/1e3,jt,o,Y),fe(),ae(),requestAnimationFrame(kn);return}try{const Gt=O.actions;if(W==="play"){u.yaw-=Gt.lookX*1.9*jt,u.pitch=Math.max(-1.1,Math.min(.45,u.pitch+Gt.lookY*1.1*jt));const Ge=-Math.sin(u.yaw),Qn=-Math.cos(u.yaw),oi=Math.cos(u.yaw),ls=-Math.sin(u.yaw);Qt.set(Ge,0,Qn),Kt.set(oi,0,ls);let Oi=Qt.x*Gt.moveY+Kt.x*Gt.moveX,us=Qt.z*Gt.moveY+Kt.z*Gt.moveX,ai=Math.hypot(Oi,us);if(ai>.08&&(S.on=!1),S.on&&ai<.08){const G=S.x-u.x,K=S.z-u.z,J=Math.hypot(G,K);if(J<1.5)S.on=!1;else{Oi=G,us=K,ai=J;let j=Math.atan2(-G,-K)-u.yaw;for(;j>Math.PI;)j-=Math.PI*2;for(;j<-Math.PI;)j+=Math.PI*2;u.yaw+=j*Math.min(1,10*Se)}}if(b.visible=S.on,S.on){const G=a.sampleY(S.x,S.z)+.14;b.position.set(S.x,G+Math.sin(et/180)*.1,S.z),b.scale.setScalar(1+Math.sin(et/140)*.12)}const bo=Gt.sprint||S.on&&ai>12?48:28,br=ai>.01?bo:0;u.speed+=(br-u.speed)*(1-Math.exp(-14*Math.max(Se,1e-4))),ai>.01&&(u.x+=Oi/ai*u.speed*Se,u.z+=us/ai*u.speed*Se),H(),u.y=a.sampleY(u.x,u.z)+1.55,V.foot(u.speed);const Ji=It();Ji&&!Ut.has(Ji.id)&&(Ut.add(Ji.id),vt(`${Ji.label} · ${Ji.tag}`));let vi=null,P=12;for(const G of a.citizens){const K=Math.hypot(u.x-G.x,u.z-G.z);K<P&&(P=K,vi=G)}if(at=vi?.mind.id??null,vi&&O.justPressed.talk&&(ot=b4(vi,u.x,u.z,tt),$.add(vi.mind.id),V.talk(),Xe=6),Xe>0&&(Xe-=Se,Xe<=0&&(ot="")),Gt.howl)At+=Se;else if(At>=.35){const G=At;At=0,tt+=1;let K=fE(G,Sn.holdSec);const J=!sx(u.speed),j=K==="held"||K==="true";J&&j&&(K="thin"),Ht=K;const kt=It(),qt=Math.hypot(u.x,u.z)<Sn.radius+40,bt=kt?.keeper??(qt?"veyra":null),Jt=rx({charge:q.charge,crystal:q.crystal,scripture:q.scripture,bids:qd(q).bids},kt?.label??(qt?Sn.title:null)),ne=$.has(Jt.keeper)||ox(at,Jt.keeper),ue=pE(bt,q,K);K==="held"&&pd(q,4),!J&&K==="held"&&pd(q,1),Y=Math.min(100,Y+Math.round(ue.resonance*mE(K)));let pe=null;{let Re=16;for(const ke of l){const Yt=Math.hypot(ke.x-u.x,ke.z-u.z);Yt<Re&&(Re=Yt,pe=ke.shape)}}const ie=!!(pe&&gE(pe,bt)&&K!=="thin");ie&&(Y=Math.min(100,Y+2)),ue.gather?(ht=18,M4(a.citizens)):bt&&(ht=10,v1(a.citizens,bt,u.x,u.z));const Oe=bt?a.citizens.find(Re=>Re.mind.id===bt):null;if(Oe)try{ft(Oe,ue.gather?"gather":"howl",ue.toast)}catch{}if(bt&&ue.resonance>=4&&K!=="thin")try{const Re=xE(bt,u.x,u.z),ke=Re.pieces.slice(0,1);ke.length&&a.applyPieces(ke)>0&&(l.push(...ke),l.length>280&&l.splice(0,l.length-280),h=Re.code,d.push({at:Date.now(),agent:bt,text:ue.toast}),d.length>24&&d.splice(0,d.length-24))}catch{}const sn=_E(bt);let Ve=`${ax(K,sn)} ${ue.toast}`;if(bt==="aure"&&yE(u.yaw,u.pitch)&&(Y=Math.min(100,Y+4),Ve=`${ax(K,sn)} The parent is still on the horizon. You aimed.`),(K==="true"||K==="held")&&bt&&($t=vE()),ne&&(K==="true"||K==="held")&&(pd(q,2),Ve+=" You spoke first. The den knew you."),bt&&(K==="true"||K==="held"))try{ME(bt,K).complete&&(au(q),au(q),Ve+=" Tend, kiln, join — Iri named the sit.")}catch{}J&&j&&(Ve+=" Stand. The den cannot hear a walking howl."),!J&&K==="held"&&(Ve+=" You stood."),ie&&(Ve+=" You howled the shape."),te(),vt(Ve),V.howl(),rt()}else At=0}x.position.set(u.x,u.y,u.z),x.rotation.y=u.yaw,m.rotation.y+=Se*.8,w.rotation.z+=Se*.6,p.scale.setScalar(1+Math.sin(et/1e3*3.2)*.12);const gn=-Math.sin(u.yaw),En=-Math.cos(u.yaw),Fn=8.6;if(Je.set(u.x-gn*Fn,u.y+3.55+Math.sin(u.pitch)*2.6,u.z-En*Fn),o.position.lerp(Je,1-Math.exp(-6.5*jt)),He.set(u.x+gn*7,u.y+1.35+u.pitch*6,u.z+En*7),o.lookAt(He),W==="play"){ht>0&&(ht=Math.max(0,ht-Ce));let Ge=null;try{Ge=a.tickLiving(Ce,!0,$s-l.length,{px:u.x,pz:u.z,resonance:Y,howls:tt,ledger:q,gather:ht})}catch(Qn){T=Qn instanceof Error?Qn.message:String(Qn)}if(te(),F+=Ce,F>.2){F=0;const Qn=bS();if(a.setFoundry(q.crystal,Qn),Qn.length)try{V.kiln()}catch{}}if(Ge){l.push(...Ge.pieces),l.length>$s&&l.splice(0,l.length-$s),h=Ge.code,d.push({at:Date.now(),agent:Ge.agentId,text:Ge.line}),d.length>24&&d.splice(0,d.length-24);const Qn=a.citizens.find(ls=>ls.mind.id===Ge.agentId);vt(Ge.line),Y=Math.min(100,Y+1);try{V.grow()}catch{}const oi=Ge.pieces[0]?.shape;if(oi==="canal"||oi==="weir"||oi==="cascade")try{V.canal()}catch{}if(oi==="kiln")try{V.kiln()}catch{}}je-=Ce,je<=0&&$e<16&&!Ye&&(je=32,$e+=1,NP(a.citizens,q,Y),te())}a.tick(et/1e3,Se,o,Y),fe(),Vt>0&&(Vt-=Ce),(!Number.isFinite(Vt)||Vt<=0)&&(Vt=0,he=null),ce+=jt,ce>2.5&&W==="play"&&(ce=0,rt()),ae(),ve+=jt,(ve>=.12||Vt>0||W!=="play")&&(ve=0,Rt())}catch(Gt){T=Gt instanceof Error?Gt.message:String(Gt);try{f(),ae()}catch{}}requestAnimationFrame(kn)}requestAnimationFrame(kn),window.__controlsTest={getYaw:()=>u.yaw,getSpeed:()=>u.speed,getX:()=>u.x,getZ:()=>u.z,getToast:()=>he,getLiving:()=>a.citizens.map(et=>({id:et.mind.id,job:et.job,timer:Math.round(et.timer*10)/10,crafted:et.crafted,x:Math.round(et.x),z:Math.round(et.z)})),setKeys:et=>{O.keys.clear(),et.forEach(Nt=>O.keys.add(Nt))}},Rt();const Vn=()=>{document.visibilityState==="hidden"&&rt()};return document.addEventListener("visibilitychange",Vn),window.addEventListener("pagehide",rt),{input:O,audio:V,dispose(){me=!1,rt(),Dt.disconnect(),window.removeEventListener("resize",Pt),document.removeEventListener("visibilitychange",Vn),window.removeEventListener("pagehide",rt),n.removeEventListener("pointerdown",E),n.removeEventListener("pointermove",U),n.removeEventListener("pointerup",k),n.removeEventListener("pointercancel",k),O.dispose(),V.dispose(),a.dispose(),i.dispose(),delete window.__controlsTest},setMode(et){W=et,et==="pause"&&rt()},land:pt,commission(et,Nt,jt){const Ce=dE(et,Nt),Se=jt&&jt.trim()||Ce.message;if(!Ce.ok||!Ce.workId)return vt(Se),V.talk(),Rt(),{...Ce,message:Se};if(c.has(Ce.workId)){const Gt="That growth already stands. The city does not copy itself.";return vt(Gt),Rt(),{ok:!1,message:Gt}}return a.applyBuild(Ce.workId)&&(c.add(Ce.workId),d.push({at:Date.now(),agent:et,text:Se}),d.length>24&&d.splice(0,d.length-24),Y=Math.min(100,Y+3),V.howl()),vt(Se),rt(),Rt(),{...Ce,message:Se}},grow(et,Nt,jt,Ce){const Se=a.applyPieces(Nt);return Se>0&&(l.push(...Nt),l.length>280&&l.splice(0,l.length-280),h=Ce,d.push({at:Date.now(),agent:et,text:jt}),d.length>24&&d.splice(0,d.length-24),Y=Math.min(100,Y+Math.min(8,2+Se)),E4(a.citizens,et,Nt,jt),V.howl()),vt(jt),rt(),Rt(),Se},speak(et,Nt){const jt=Nt.trim().slice(0,280);jt&&(d.push({at:Date.now(),agent:et,text:jt}),d.length>24&&d.splice(0,d.length-24),vt(jt),V.talk(),rt(),Rt())},setGrokLayer(et){Ye=!!et},mindSnap(){return{charge:q.charge,crystal:q.crystal,scripture:q.scripture,resonance:Y,keepers:a.citizens.filter(et=>et.keeper).map(et=>({id:et.mind.id,job:et.job,crafted:et.crafted,thought:(et.thought||et.intent).slice(0,90),charge:et.pouch?.charge??0,crystal:et.pouch?.crystal??0}))}},applyGrokMind(et,Nt){gS(et,Nt),vt(et),Rt()},escort(et){et&&(v1(a.citizens,et,u.x,u.z),te(),vt("Walk with me. The den heard you."),V.talk(),Rt())},reset(){u.x=0,u.z=78,u.yaw=0,u.pitch=-.12,Y=12,tt=0,Ut.clear(),$.clear(),Object.assign(q,Qm()),rt(),vt(cx.arrival)}}}export{wF as startEngine};
