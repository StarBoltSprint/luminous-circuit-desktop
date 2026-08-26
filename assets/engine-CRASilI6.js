import{c as L2,a as N2,C as Vs,d as P0,M as U2,b as O2,D as At,m as k2,e as Kn,K as Mv,f as ji,g as Ul,p as F2,h as B2,t as Ol,r as Lf,i as H2,q as no,s as G2,j as V2,k as $2,l as wv,n as qh,o as Uu,u as Ou,v as W2,H as Sn,w as X2,x as Y2,y as Lm,z as Nm,A as Um,B as q2,E as ku,F as Z2,G as j2,I as K2,J as J2,L as Om,N as Q2,O as tS,P as eS,Q as nS,R as km}from"./index-B_rdtLNV.js";const Zh="185",Sv=0,Nf=1,bv=2,Ya=1,I0=2,ea=3,Es=0,Jn=1,xe=2,Xi=0,fr=1,mn=2,Uf=3,Of=4,Ev=5,ks=100,Tv=101,Av=102,Rv=103,Cv=104,Pv=200,Iv=201,Dv=202,zv=203,kl=204,Fl=205,Lv=206,Nv=207,Uv=208,Ov=209,kv=210,Fv=211,Bv=212,Hv=213,Gv=214,Bl=0,Hl=1,Gl=2,xr=3,Vl=4,$l=5,Wl=6,Xl=7,D0=0,Vv=1,$v=2,Yi=0,jh=1,Kh=2,Jh=3,Po=4,Qh=5,tu=6,eu=7,z0=300,Xs=301,_r=302,Oc=303,kc=304,Io=306,Yl=1e3,rs=1001,ql=1002,Nn=1003,Wv=1004,Ga=1005,Gn=1006,Fc=1007,Fs=1008,gi=1009,L0=1010,N0=1011,la=1012,nu=1013,qi=1014,Di=1015,xi=1016,iu=1017,su=1018,ha=1020,U0=35902,O0=35899,k0=1021,F0=1022,zi=1023,os=1026,Bs=1027,ru=1028,au=1029,Ys=1030,ou=1031,cu=1033,qa=33776,Za=33777,ja=33778,Ka=33779,Zl=35840,jl=35841,Kl=35842,Jl=35843,Ql=36196,th=37492,eh=37496,nh=37488,ih=37489,io=37490,sh=37491,rh=37808,ah=37809,oh=37810,ch=37811,lh=37812,hh=37813,uh=37814,dh=37815,fh=37816,ph=37817,mh=37818,gh=37819,xh=37820,_h=37821,yh=36492,vh=36494,Mh=36495,wh=36283,Sh=36284,so=36285,bh=36286,Xv=3200,Eh=0,Yv=1,Ms="",si="srgb",ro="srgb-linear",ao="linear",Ze="srgb",rr=7680,kf=519,qv=512,Zv=513,jv=514,lu=515,Kv=516,Jv=517,hu=518,Qv=519,Th=35044,Ff="300 es",Wi=2e3,ua=2001;function iS(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function oo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function tM(){const e=oo("canvas");return e.style.display="block",e}const Fm={};function co(...e){const t="THREE."+e.shift();console.log(t,...e)}function eM(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ue(...e){e=eM(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ze(...e){e=eM(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function pr(...e){const t=e.join(" ");t in Fm||(Fm[t]=!0,ue(...e))}function sS(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const rS={[Bl]:Hl,[Gl]:Wl,[Vl]:Xl,[xr]:$l,[Hl]:Bl,[Wl]:Gl,[Xl]:Vl,[$l]:xr};class qs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=Math.PI/180,Bf=180/Math.PI;function $s(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yn[e&255]+Yn[e>>8&255]+Yn[e>>16&255]+Yn[e>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[n&63|128]+Yn[n>>8&255]+"-"+Yn[n>>16&255]+Yn[n>>24&255]+Yn[i&255]+Yn[i>>8&255]+Yn[i>>16&255]+Yn[i>>24&255]).toLowerCase()}function Ie(e,t,n){return Math.max(t,Math.min(n,e))}function aS(e,t){return(e%t+t)%t}function Bu(e,t,n){return(1-n)*e+n*t}function ss(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ca;let xt=(ca=class{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ie(this.x,t.x,n.x),this.y=Ie(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ie(this.x,t,n),this.y=Ie(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ca.prototype.isVector2=!0,ca);class vr{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],x=r[a+2],y=r[a+3];if(d!==y||c!==h||l!==f||u!==x){let g=c*h+l*f+u*x+d*y;g<0&&(h=-h,f=-f,x=-x,y=-y,g=-g);let p=1-o;if(g<.9995){const w=Math.acos(g),S=Math.sin(w);p=Math.sin(p*w)/S,o=Math.sin(o*w)/S,c=c*p+h*o,l=l*p+f*o,u=u*p+x*o,d=d*p+y*o}else{c=c*p+h*o,l=l*p+f*o,u=u*p+x*o,d=d*p+y*o;const w=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=w,l*=w,u*=w,d*=w}}t[n]=c,t[n+1]=l,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],x=r[a+3];return t[n]=o*x+u*d+c*f-l*h,t[n+1]=c*x+u*h+l*d-o*f,t[n+2]=l*x+u*f+o*h-c*d,t[n+3]=u*x-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(r/2),h=c(i/2),f=c(s/2),x=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*x,this._y=l*f*d-h*u*x,this._z=l*u*x+h*f*d,this._w=l*u*d-h*f*x;break;case"YXZ":this._x=h*u*d+l*f*x,this._y=l*f*d-h*u*x,this._z=l*u*x-h*f*d,this._w=l*u*d+h*f*x;break;case"ZXY":this._x=h*u*d-l*f*x,this._y=l*f*d+h*u*x,this._z=l*u*x+h*f*d,this._w=l*u*d-h*f*x;break;case"ZYX":this._x=h*u*d-l*f*x,this._y=l*f*d+h*u*x,this._z=l*u*x-h*f*d,this._w=l*u*d+h*f*x;break;case"YZX":this._x=h*u*d+l*f*x,this._y=l*f*d+h*u*x,this._z=l*u*x-h*f*d,this._w=l*u*d-h*f*x;break;case"XZY":this._x=h*u*d-l*f*x,this._y=l*f*d-h*u*x,this._z=l*u*x+h*f*d,this._w=l*u*d+h*f*x;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],d=n[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,a=t._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tm=class Tm{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Bm.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Bm.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),u=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ie(this.x,t.x,n.x),this.y=Ie(this.y,t.y,n.y),this.z=Ie(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ie(this.x,t,n),this.y=Ie(this.y,t,n),this.z=Ie(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,a=n.x,o=n.y,c=n.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Hu.copy(this).projectOnVector(t),this.sub(Hu)}reflect(t){return this.sub(Hu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tm.prototype.isVector3=!0;let B=Tm;const Hu=new B,Bm=new vr,Am=class Am{constructor(t,n,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,c,l)}set(t,n,i,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=n,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],x=i[8],y=s[0],g=s[3],p=s[6],w=s[1],S=s[4],m=s[7],M=s[2],v=s[5],A=s[8];return r[0]=a*y+o*w+c*M,r[3]=a*g+o*S+c*v,r[6]=a*p+o*m+c*A,r[1]=l*y+u*w+d*M,r[4]=l*g+u*S+d*v,r[7]=l*p+u*m+d*A,r[2]=h*y+f*w+x*M,r[5]=h*g+f*S+x*v,r[8]=h*p+f*m+x*A,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return n*a*u-n*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,x=n*d+i*h+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=d*y,t[1]=(s*l-u*i)*y,t[2]=(o*i-s*a)*y,t[3]=h*y,t[4]=(u*n-s*c)*y,t[5]=(s*r-o*n)*y,t[6]=f*y,t[7]=(i*c-l*n)*y,t[8]=(a*n-i*r)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+n,0,0,1),this}scale(t,n){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gu.makeScale(t,n)),this}rotate(t){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gu.makeRotation(-t)),this}translate(t,n){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Am.prototype.isMatrix3=!0;let ge=Am;const Gu=new ge,Hm=new ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gm=new ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oS(){const e={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ze&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ze&&(s.r=ra(s.r),s.g=ra(s.g),s.b=ra(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ms?ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ro]:{primaries:t,whitePoint:i,transfer:ao,toXYZ:Hm,fromXYZ:Gm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:i,transfer:Ze,toXYZ:Hm,fromXYZ:Gm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),e}const Pe=oS();function bs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ra(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let br;class nM{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{br===void 0&&(br=oo("canvas")),br.width=t.width,br.height=t.height;const s=br.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=br}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=oo("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bs(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cS=0;class uu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cS++}),this.uuid=$s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Vu(s[a].image)):r.push(Vu(s[a]))}else r=Vu(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function Vu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?nM.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let lS=0;const $u=new B;class On extends qs{constructor(t=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,i=rs,s=rs,r=Gn,a=Fs,o=zi,c=gi,l=On.DEFAULT_ANISOTROPY,u=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=$s(),this.name="",this.source=new uu(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($u).x}get height(){return this.source.getSize($u).y}get depth(){return this.source.getSize($u).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ue(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==z0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yl:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case ql:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yl:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case ql:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=z0;On.DEFAULT_ANISOTROPY=1;const Rm=class Rm{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],x=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(l+1)/2,m=(f+1)/2,M=(p+1)/2,v=(u+h)/4,A=(d+y)/4,_=(x+g)/4;return S>m&&S>M?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=v/i,r=A/i):m>M?m<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(m),i=v/s,r=_/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=A/r,s=_/r),this.set(i,s,r,n),this}let w=Math.sqrt((g-x)*(g-x)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(g-x)/w,this.y=(d-y)/w,this.z=(h-u)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ie(this.x,t.x,n.x),this.y=Ie(this.y,t.y,n.y),this.z=Ie(this.z,t.z,n.z),this.w=Ie(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ie(this.x,t,n),this.y=Ie(this.y,t,n),this.z=Ie(this.z,t,n),this.w=Ie(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rm.prototype.isVector4=!0;let pn=Rm;class iM extends qs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new pn(0,0,t,n),this.scissorTest=!1,this.viewport=new pn(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:i.depth},r=new On(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new uu(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends iM{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class B0 extends On{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends On{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=class Yh{constructor(t,n,i,s,r,a,o,c,l,u,d,h,f,x,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,a,o,c,l,u,d,h,f,x,y,g)}set(t,n,i,s,r,a,o,c,l,u,d,h,f,x,y,g){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=x,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yh().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,i=t.elements,s=1/Er.setFromMatrixColumn(t,0).length(),r=1/Er.setFromMatrixColumn(t,1).length(),a=1/Er.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,x=o*u,y=o*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=f+x*l,n[5]=h-y*l,n[9]=-o*c,n[2]=y-h*l,n[6]=x+f*l,n[10]=a*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,x=l*u,y=l*d;n[0]=h+y*o,n[4]=x*o-f,n[8]=a*l,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=f*o-x,n[6]=y+h*o,n[10]=a*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,x=l*u,y=l*d;n[0]=h-y*o,n[4]=-a*d,n[8]=x+f*o,n[1]=f+x*o,n[5]=a*u,n[9]=y-h*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(t.order==="ZYX"){const h=a*u,f=a*d,x=o*u,y=o*d;n[0]=c*u,n[4]=x*l-f,n[8]=h*l+y,n[1]=c*d,n[5]=y*l+h,n[9]=f*l-x,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(t.order==="YZX"){const h=a*c,f=a*l,x=o*c,y=o*l;n[0]=c*u,n[4]=y-h*d,n[8]=x*d+f,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=f*d+x,n[10]=h-y*d}else if(t.order==="XZY"){const h=a*c,f=a*l,x=o*c,y=o*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=h*d+y,n[5]=a*u,n[9]=f*d-x,n[2]=x*d-f,n[6]=o*u,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hS,t,uS)}lookAt(t,n,i){const s=this.elements;return wi.subVectors(t,n),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),Rs.crossVectors(i,wi),Rs.lengthSq()===0&&(Math.abs(i.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),Rs.crossVectors(i,wi)),Rs.normalize(),Uo.crossVectors(wi,Rs),s[0]=Rs.x,s[4]=Uo.x,s[8]=wi.x,s[1]=Rs.y,s[5]=Uo.y,s[9]=wi.y,s[2]=Rs.z,s[6]=Uo.z,s[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],x=i[2],y=i[6],g=i[10],p=i[14],w=i[3],S=i[7],m=i[11],M=i[15],v=s[0],A=s[4],_=s[8],E=s[12],C=s[1],P=s[5],T=s[9],O=s[13],k=s[2],U=s[6],$=s[10],W=s[14],Y=s[3],tt=s[7],q=s[11],ht=s[15];return r[0]=a*v+o*C+c*k+l*Y,r[4]=a*A+o*P+c*U+l*tt,r[8]=a*_+o*T+c*$+l*q,r[12]=a*E+o*O+c*W+l*ht,r[1]=u*v+d*C+h*k+f*Y,r[5]=u*A+d*P+h*U+f*tt,r[9]=u*_+d*T+h*$+f*q,r[13]=u*E+d*O+h*W+f*ht,r[2]=x*v+y*C+g*k+p*Y,r[6]=x*A+y*P+g*U+p*tt,r[10]=x*_+y*T+g*$+p*q,r[14]=x*E+y*O+g*W+p*ht,r[3]=w*v+S*C+m*k+M*Y,r[7]=w*A+S*P+m*U+M*tt,r[11]=w*_+S*T+m*$+M*q,r[15]=w*E+S*O+m*W+M*ht,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],x=t[3],y=t[7],g=t[11],p=t[15],w=c*f-l*h,S=o*f-l*d,m=o*h-c*d,M=a*f-l*u,v=a*h-c*u,A=a*d-o*u;return n*(y*w-g*S+p*m)-i*(x*w-g*M+p*v)+s*(x*S-y*M+p*A)-r*(x*m-y*v+g*A)}determinantAffine(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return n*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],x=t[12],y=t[13],g=t[14],p=t[15],w=n*o-i*a,S=n*c-s*a,m=n*l-r*a,M=i*c-s*o,v=i*l-r*o,A=s*l-r*c,_=u*y-d*x,E=u*g-h*x,C=u*p-f*x,P=d*g-h*y,T=d*p-f*y,O=h*p-f*g,k=w*O-S*T+m*P+M*C-v*E+A*_;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return t[0]=(o*O-c*T+l*P)*U,t[1]=(s*T-i*O-r*P)*U,t[2]=(y*A-g*v+p*M)*U,t[3]=(h*v-d*A-f*M)*U,t[4]=(c*C-a*O-l*E)*U,t[5]=(n*O-s*C+r*E)*U,t[6]=(g*m-x*A-p*S)*U,t[7]=(u*A-h*m+f*S)*U,t[8]=(a*T-o*C+l*_)*U,t[9]=(i*C-n*T-r*_)*U,t[10]=(x*v-y*m+p*w)*U,t[11]=(d*m-u*v-f*w)*U,t[12]=(o*E-a*P-c*_)*U,t[13]=(n*P-i*E+s*_)*U,t[14]=(y*S-x*M-g*w)*U,t[15]=(u*M-d*S+h*w)*U,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,a=n._y,o=n._z,c=n._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,x=r*d,y=a*u,g=a*d,p=o*d,w=c*l,S=c*u,m=c*d,M=i.x,v=i.y,A=i.z;return s[0]=(1-(y+p))*M,s[1]=(f+m)*M,s[2]=(x-S)*M,s[3]=0,s[4]=(f-m)*v,s[5]=(1-(h+p))*v,s[6]=(g+w)*v,s[7]=0,s[8]=(x+S)*A,s[9]=(g-w)*A,s[10]=(1-(h+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=Er.set(s[0],s[1],s[2]).length();const o=Er.set(s[4],s[5],s[6]).length(),c=Er.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ki.copy(this);const l=1/a,u=1/o,d=1/c;return ki.elements[0]*=l,ki.elements[1]*=l,ki.elements[2]*=l,ki.elements[4]*=u,ki.elements[5]*=u,ki.elements[6]*=u,ki.elements[8]*=d,ki.elements[9]*=d,ki.elements[10]*=d,n.setFromRotationMatrix(ki),i.x=a,i.y=o,i.z=c,this}makePerspective(t,n,i,s,r,a,o=Wi,c=!1){const l=this.elements,u=2*r/(n-t),d=2*r/(i-s),h=(n+t)/(n-t),f=(i+s)/(i-s);let x,y;if(c)x=r/(a-r),y=a*r/(a-r);else if(o===Wi)x=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ua)x=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,r,a,o=Wi,c=!1){const l=this.elements,u=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),f=-(i+s)/(i-s);let x,y;if(c)x=1/(a-r),y=a/(a-r);else if(o===Wi)x=-2/(a-r),y=-(a+r)/(a-r);else if(o===ua)x=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Yh.prototype.isMatrix4=!0;let tn=Yh;const Er=new B,ki=new tn,hS=new B(0,0,0),uS=new B(1,1,1),Rs=new B,Uo=new B,wi=new B,Vm=new tn,$m=new vr;class Ts{constructor(t=0,n=0,i=0,s=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return Vm.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Vm,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return $m.setFromEuler(this),this.setFromQuaternion($m,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class du{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let dS=0;const Wm=new B,Tr=new vr,ds=new tn,Oo=new B,Sa=new B,fS=new B,pS=new vr,Xm=new B(1,0,0),Ym=new B(0,1,0),qm=new B(0,0,1),Zm={type:"added"},mS={type:"removed"},Ar={type:"childadded",child:null},Wu={type:"childremoved",child:null};let ie=class Bc extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bc.DEFAULT_UP.clone();const t=new B,n=new Ts,i=new vr,s=new B(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tn},normalMatrix:{value:new ge}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Bc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new du,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Tr.setFromAxisAngle(t,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,n){return Tr.setFromAxisAngle(t,n),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(Xm,t)}rotateY(t){return this.rotateOnAxis(Ym,t)}rotateZ(t){return this.rotateOnAxis(qm,t)}translateOnAxis(t,n){return Wm.copy(t).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Xm,t)}translateY(t){return this.translateOnAxis(Ym,t)}translateZ(t){return this.translateOnAxis(qm,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Oo.copy(t):Oo.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(Sa,Oo,this.up):ds.lookAt(Oo,Sa,this.up),this.quaternion.setFromRotationMatrix(ds),s&&(ds.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix(ds),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zm),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(mS),Wu.child=t,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zm),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,t,fS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,pS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(n){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}};ie.DEFAULT_UP=new B(0,1,0);ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let Mt=class extends ie{constructor(){super(),this.isGroup=!0,this.type="Group"}};const gS={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const y of t.hand.values()){const g=n.getJointPose(y,i),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,x=.005;l.inputState.pinching&&h>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gS)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Mt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const rM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},ko={h:0,s:0,l:0};function Xu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}let se=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Pe.workingColorSpace){return this.r=t,this.g=n,this.b=i,Pe.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Pe.workingColorSpace){if(t=aS(t,1),n=Ie(n,0,1),i=Ie(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Xu(a,r,t+1/3),this.g=Xu(a,r,t),this.b=Xu(a,r,t-1/3)}return Pe.colorSpaceToWorking(this,s),this}setStyle(t,n=si){function i(r){r!==void 0&&parseFloat(r)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:ue("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=si){const i=rM[t.toLowerCase()];return i!==void 0?this.setHex(i,n):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Pe.workingToColorSpace(qn.copy(this),t),Math.round(Ie(qn.r*255,0,255))*65536+Math.round(Ie(qn.g*255,0,255))*256+Math.round(Ie(qn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Pe.workingColorSpace){Pe.workingToColorSpace(qn.copy(this),n);const i=qn.r,s=qn.g,r=qn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,n=Pe.workingColorSpace){return Pe.workingToColorSpace(qn.copy(this),n),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=si){Pe.workingToColorSpace(qn.copy(this),t);const n=qn.r,i=qn.g,s=qn.b;return t!==si?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Cs),this.setHSL(Cs.h+t,Cs.s+n,Cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Cs),t.getHSL(ko);const i=Bu(Cs.h,ko.h,n),s=Bu(Cs.s,ko.s,n),r=Bu(Cs.l,ko.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const qn=new se;se.NAMES=rM;class fu{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new se(t),this.density=n}clone(){return new fu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Hf extends ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fi=new B,fs=new B,Yu=new B,ps=new B,Rr=new B,Cr=new B,jm=new B,qu=new B,Zu=new B,ju=new B,Ku=new pn,Ju=new pn,Qu=new pn;class Ai{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Fi.subVectors(t,n),s.cross(Fi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Fi.subVectors(s,n),fs.subVectors(i,n),Yu.subVectors(t,n);const a=Fi.dot(Fi),o=Fi.dot(fs),c=Fi.dot(Yu),l=fs.dot(fs),u=fs.dot(Yu),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,x=(a*u-o*c)*h;return r.set(1-f-x,x,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ps)===null?!1:ps.x>=0&&ps.y>=0&&ps.x+ps.y<=1}static getInterpolation(t,n,i,s,r,a,o,c){return this.getBarycoord(t,n,i,s,ps)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ps.x),c.addScaledVector(a,ps.y),c.addScaledVector(o,ps.z),c)}static getInterpolatedAttribute(t,n,i,s,r,a){return Ku.setScalar(0),Ju.setScalar(0),Qu.setScalar(0),Ku.fromBufferAttribute(t,n),Ju.fromBufferAttribute(t,i),Qu.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ku,r.x),a.addScaledVector(Ju,r.y),a.addScaledVector(Qu,r.z),a}static isFrontFacing(t,n,i,s){return Fi.subVectors(i,n),fs.subVectors(t,n),Fi.cross(fs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),Fi.cross(fs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ai.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return Ai.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let a,o;Rr.subVectors(s,i),Cr.subVectors(r,i),qu.subVectors(t,i);const c=Rr.dot(qu),l=Cr.dot(qu);if(c<=0&&l<=0)return n.copy(i);Zu.subVectors(t,s);const u=Rr.dot(Zu),d=Cr.dot(Zu);if(u>=0&&d<=u)return n.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),n.copy(i).addScaledVector(Rr,a);ju.subVectors(t,r);const f=Rr.dot(ju),x=Cr.dot(ju);if(x>=0&&f<=x)return n.copy(r);const y=f*l-c*x;if(y<=0&&l>=0&&x<=0)return o=l/(l-x),n.copy(i).addScaledVector(Cr,o);const g=u*x-f*d;if(g<=0&&d-u>=0&&f-x>=0)return jm.subVectors(r,s),o=(d-u)/(d-u+(f-x)),n.copy(s).addScaledVector(jm,o);const p=1/(g+y+h);return a=y*p,o=h*p,n.copy(i).addScaledVector(Rr,a).addScaledVector(Cr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Zs{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Bi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Bi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Bi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Bi):Bi.fromBufferAttribute(r,a),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fo.copy(i.boundingBox)),Fo.applyMatrix4(t.matrixWorld),this.union(Fo)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ba),Bo.subVectors(this.max,ba),Pr.subVectors(t.a,ba),Ir.subVectors(t.b,ba),Dr.subVectors(t.c,ba),Ps.subVectors(Ir,Pr),Is.subVectors(Dr,Ir),js.subVectors(Pr,Dr);let n=[0,-Ps.z,Ps.y,0,-Is.z,Is.y,0,-js.z,js.y,Ps.z,0,-Ps.x,Is.z,0,-Is.x,js.z,0,-js.x,-Ps.y,Ps.x,0,-Is.y,Is.x,0,-js.y,js.x,0];return!td(n,Pr,Ir,Dr,Bo)||(n=[1,0,0,0,1,0,0,0,1],!td(n,Pr,Ir,Dr,Bo))?!1:(Ho.crossVectors(Ps,Is),n=[Ho.x,Ho.y,Ho.z],td(n,Pr,Ir,Dr,Bo))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ms),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ms=[new B,new B,new B,new B,new B,new B,new B,new B],Bi=new B,Fo=new Zs,Pr=new B,Ir=new B,Dr=new B,Ps=new B,Is=new B,js=new B,ba=new B,Bo=new B,Ho=new B,Ks=new B;function td(e,t,n,i,s){for(let r=0,a=e.length-3;r<=a;r+=3){Ks.fromArray(e,r);const o=s.x*Math.abs(Ks.x)+s.y*Math.abs(Ks.y)+s.z*Math.abs(Ks.z),c=t.dot(Ks),l=n.dot(Ks),u=i.dot(Ks);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const wn=new B,Go=new xt;let xS=0;class _i extends qs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xS++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Go.fromBufferAttribute(this,n),Go.applyMatrix3(t),this.setXY(n,Go.x,Go.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.applyMatrix3(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.applyMatrix4(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.applyNormalMatrix(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)wn.fromBufferAttribute(this,n),wn.transformDirection(t),this.setXYZ(n,wn.x,wn.y,wn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ss(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Qe(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ss(n,this.array)),n}setX(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ss(n,this.array)),n}setY(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ss(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ss(n,this.array)),n}setW(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Th&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class H0 extends _i{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class G0 extends _i{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Le extends _i{constructor(t,n,i){super(new Float32Array(t),n,i)}}const _S=new Zs,Ea=new B,ed=new B;class ma{constructor(t=new B,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):_S.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ea.subVectors(t,this.center);const n=Ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ea,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ed.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ea.copy(t.center).add(ed)),this.expandByPoint(Ea.copy(t.center).sub(ed))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let yS=0;const Pi=new tn,nd=new ie,zr=new B,Si=new Zs,Ta=new Zs,In=new B;class bn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(iS(t)?G0:H0)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ge().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,n,i){return Pi.makeTranslation(t,n,i),this.applyMatrix4(Pi),this}scale(t,n,i){return Pi.makeScale(t,n,i),this.applyMatrix4(Pi),this}lookAt(t){return nd.lookAt(t),nd.updateMatrix(),this.applyMatrix4(nd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(i,3))}else{const i=Math.min(t.length,n.count);for(let s=0;s<i;s++){const r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];Si.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),n)for(let r=0,a=n.length;r<a;r++){const o=n[r];Ta.setFromBufferAttribute(o),this.morphTargetsRelative?(In.addVectors(Si.min,Ta.min),Si.expandByPoint(In),In.addVectors(Si.max,Ta.max),Si.expandByPoint(In)):(Si.expandByPoint(Ta.min),Si.expandByPoint(Ta.max))}Si.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)In.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(In));if(n)for(let r=0,a=n.length;r<a;r++){const o=n[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)In.fromBufferAttribute(o,l),c&&(zr.fromBufferAttribute(t,l),In.add(zr)),s=Math.max(s,i.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new _i(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new B,c[_]=new B;const l=new B,u=new B,d=new B,h=new xt,f=new xt,x=new xt,y=new B,g=new B;function p(_,E,C){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,C),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),x.fromBufferAttribute(r,C),u.sub(l),d.sub(l),f.sub(h),x.sub(h);const P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(P),o[_].add(y),o[E].add(y),o[C].add(y),c[_].add(g),c[E].add(g),c[C].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let _=0,E=w.length;_<E;++_){const C=w[_],P=C.start,T=C.count;for(let O=P,k=P+T;O<k;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new B,m=new B,M=new B,v=new B;function A(_){M.fromBufferAttribute(s,_),v.copy(M);const E=o[_];S.copy(E),S.sub(M.multiplyScalar(M.dot(E))).normalize(),m.crossVectors(v,E);const P=m.dot(c[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,P)}for(let _=0,E=w.length;_<E;++_){const C=w[_],P=C.start,T=C.count;for(let O=P,k=P+T;O<k;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,u=new B,d=new B;if(t)for(let h=0,f=t.count;h<f;h+=3){const x=t.getX(h+0),y=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(n,x),r.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,g),o.add(u),c.add(u),l.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=n.count;h<f;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)In.fromBufferAttribute(t,n),In.normalize(),t.setXYZ(n,In.x,In.y,In.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,x=0;for(let y=0,g=c.length;y<g;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*u;for(let p=0;p<u;p++)h[x++]=l[f++]}return new _i(h,u,d)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bn,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);n.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(n))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class aM{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=$s()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$s()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$s()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ei=new B;class lo{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)ei.fromBufferAttribute(this,n),ei.applyMatrix4(t),this.setXYZ(n,ei.x,ei.y,ei.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ei.fromBufferAttribute(this,n),ei.applyNormalMatrix(t),this.setXYZ(n,ei.x,ei.y,ei.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ei.fromBufferAttribute(this,n),ei.transformDirection(t),this.setXYZ(n,ei.x,ei.y,ei.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=ss(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=ss(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=ss(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=ss(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=ss(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new _i(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let vS=0;class Mr extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=fr,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Fl,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){ue(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==Es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(n){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new se().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class V0 extends Mr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Lr;const Aa=new B,Nr=new B,Ur=new B,Or=new xt,Ra=new xt,oM=new tn,Vo=new B,Ca=new B,$o=new B,Km=new xt,id=new xt,Jm=new xt;class cM extends ie{constructor(t=new V0){if(super(),this.isSprite=!0,this.type="Sprite",Lr===void 0){Lr=new bn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new aM(n,5);Lr.setIndex([0,1,2,0,2,3]),Lr.setAttribute("position",new lo(i,3,0,!1)),Lr.setAttribute("uv",new lo(i,2,3,!1))}this.geometry=Lr,this.material=t,this.center=new xt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),oM.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Ur.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;Wo(Vo.set(-.5,-.5,0),Ur,a,Nr,s,r),Wo(Ca.set(.5,-.5,0),Ur,a,Nr,s,r),Wo($o.set(.5,.5,0),Ur,a,Nr,s,r),Km.set(0,0),id.set(1,0),Jm.set(1,1);let o=t.ray.intersectTriangle(Vo,Ca,$o,!1,Aa);if(o===null&&(Wo(Ca.set(-.5,.5,0),Ur,a,Nr,s,r),id.set(0,1),o=t.ray.intersectTriangle(Vo,$o,Ca,!1,Aa),o===null))return;const c=t.ray.origin.distanceTo(Aa);c<t.near||c>t.far||n.push({distance:c,point:Aa.clone(),uv:Ai.getInterpolation(Aa,Vo,Ca,$o,Km,id,Jm,new xt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Wo(e,t,n,i,s,r){Or.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(Ra.x=r*Or.x-s*Or.y,Ra.y=s*Or.x+r*Or.y):Ra.copy(Or),e.copy(t),e.x+=Ra.x,e.y+=Ra.y,e.applyMatrix4(oM)}const gs=new B,sd=new B,Xo=new B,Ds=new B,rd=new B,Yo=new B,ad=new B;class $0{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=gs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(gs.copy(this.origin).addScaledVector(this.direction,n),gs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){sd.copy(t).add(n).multiplyScalar(.5),Xo.copy(n).sub(t).normalize(),Ds.copy(this.origin).sub(sd);const r=t.distanceTo(n)*.5,a=-this.direction.dot(Xo),o=Ds.dot(this.direction),c=-Ds.dot(Xo),l=Ds.lengthSq(),u=Math.abs(1-a*a);let d,h,f,x;if(u>0)if(d=a*c-o,h=a*o-c,x=r*u,d>=0)if(h>=-x)if(h<=x){const y=1/u;d*=y,h*=y,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-x?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=x?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(sd).addScaledVector(Xo,h),f}intersectSphere(t,n){gs.subVectors(t.center,this.origin);const i=gs.dot(this.direction),s=gs.dot(gs)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,gs)!==null}intersectTriangle(t,n,i,s,r){rd.subVectors(n,t),Yo.subVectors(i,t),ad.crossVectors(rd,Yo);let a=this.direction.dot(ad),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ds.subVectors(this.origin,t);const c=o*this.direction.dot(Yo.crossVectors(Ds,Yo));if(c<0)return null;const l=o*this.direction.dot(rd.cross(Ds));if(l<0||c+l>a)return null;const u=-o*Ds.dot(ad);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}let Ue=class extends Mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=D0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};const Qm=new tn,Js=new $0,qo=new ma,tg=new B,Zo=new B,jo=new B,Ko=new B,od=new B,Jo=new B,eg=new B,Qo=new B;let gt=class extends ie{constructor(t=new bn,n=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Jo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(od.fromBufferAttribute(d,t),a?Jo.addScaledVector(od,u):Jo.addScaledVector(od.sub(n),u))}n.add(Jo)}return n}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(r),Js.copy(t.ray).recast(t.near),!(qo.containsPoint(Js.origin)===!1&&(Js.intersectSphere(qo,tg)===null||Js.origin.distanceToSquared(tg)>(t.far-t.near)**2))&&(Qm.copy(r).invert(),Js.copy(t.ray).applyMatrix4(Qm),!(i.boundingBox!==null&&Js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Js)))}_computeIntersections(t,n,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){const g=h[x],p=a[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let m=w,M=S;m<M;m+=3){const v=o.getX(m),A=o.getX(m+1),_=o.getX(m+2);s=tc(this,p,t,i,l,u,d,v,A,_),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const x=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let g=x,p=y;g<p;g+=3){const w=o.getX(g),S=o.getX(g+1),m=o.getX(g+2);s=tc(this,a,t,i,l,u,d,w,S,m),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,y=h.length;x<y;x++){const g=h[x],p=a[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let m=w,M=S;m<M;m+=3){const v=m,A=m+1,_=m+2;s=tc(this,p,t,i,l,u,d,v,A,_),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const x=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let g=x,p=y;g<p;g+=3){const w=g,S=g+1,m=g+2;s=tc(this,a,t,i,l,u,d,w,S,m),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function MS(e,t,n,i,s,r,a,o){let c;if(t.side===Jn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Es,o),c===null)return null;Qo.copy(o),Qo.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(Qo);return l<n.near||l>n.far?null:{distance:l,point:Qo.clone(),object:e}}function tc(e,t,n,i,s,r,a,o,c,l){e.getVertexPosition(o,Zo),e.getVertexPosition(c,jo),e.getVertexPosition(l,Ko);const u=MS(e,t,n,i,Zo,jo,Ko,eg);if(u){const d=new B;Ai.getBarycoord(eg,Zo,jo,Ko,d),s&&(u.uv=Ai.getInterpolatedAttribute(s,o,c,l,d,new xt)),r&&(u.uv1=Ai.getInterpolatedAttribute(r,o,c,l,d,new xt)),a&&(u.normal=Ai.getInterpolatedAttribute(a,o,c,l,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new B,materialIndex:0};Ai.getNormal(Zo,jo,Ko,h.normal),u.face=h,u.barycoord=d}return u}class W0 extends On{constructor(t=null,n=1,i=1,s,r,a,o,c,l=Nn,u=Nn,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gf extends _i{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const kr=new tn,ng=new tn,ec=[],ig=new Zs,wS=new tn,Pa=new gt,Ia=new ma;let de=class extends gt{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new Gf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,wS)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Zs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,kr),ig.copy(t.boundingBox).applyMatrix4(kr),this.boundingBox.union(ig)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ma),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,kr),Ia.copy(t.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Ia)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,n){const i=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(i),t.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,kr),ng.multiplyMatrices(i,kr),Pa.matrixWorld=ng,Pa.raycast(t,ec);for(let a=0,o=ec.length;a<o;a++){const c=ec[a];c.instanceId=r,c.object=this,n.push(c)}ec.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new Gf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new W0(new Float32Array(s*this.count),s,this.count,ru,Di));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};const cd=new B,SS=new B,bS=new ge;class vs{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=cd.subVectors(i,n).cross(SS.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const s=t.delta(cd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||bS.getNormalMatrix(t),s=this.coplanarPoint(cd).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new ma,ES=new xt(.5,.5),nc=new B;class pu{constructor(t=new vs,n=new vs,i=new vs,s=new vs,r=new vs,a=new vs){this.planes=[t,n,i,s,r,a]}set(t,n,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Wi,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],x=r[8],y=r[9],g=r[10],p=r[11],w=r[12],S=r[13],m=r[14],M=r[15];if(s[0].setComponents(l-a,f-u,p-x,M-w).normalize(),s[1].setComponents(l+a,f+u,p+x,M+w).normalize(),s[2].setComponents(l+o,f+d,p+y,M+S).normalize(),s[3].setComponents(l-o,f-d,p-y,M-S).normalize(),i)s[4].setComponents(c,h,g,m).normalize(),s[5].setComponents(l-c,f-h,p-g,M-m).normalize();else if(s[4].setComponents(l-c,f-h,p-g,M-m).normalize(),n===Wi)s[5].setComponents(l+c,f+h,p+g,M+m).normalize();else if(n===ua)s[5].setComponents(c,h,g,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(t){Qs.center.set(0,0,0);const n=ES.distanceTo(t.center);return Qs.radius=.7071067811865476+n,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(nc.x=s.normal.x>0?t.max.x:t.min.x,nc.y=s.normal.y>0?t.max.y:t.min.y,nc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(nc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class X0 extends On{constructor(t=[],n=Xs,i,s,r,a,o,c,l,u){super(t,n,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Y0 extends On{constructor(t,n,i,s,r,a,o,c,l){super(t,n,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yr extends On{constructor(t,n,i=qi,s,r,a,o=Nn,c=Nn,l,u=os,d=1){if(u!==os&&u!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:n,depth:d};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new uu(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class lM extends yr{constructor(t,n=qi,i=Xs,s,r,a=Nn,o=Nn,c,l=os){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,n,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class q0 extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}let we=class hM extends bn{constructor(t=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;x("z","y","x",-1,-1,i,n,t,a,r,0),x("z","y","x",1,-1,i,n,-t,a,r,1),x("x","z","y",1,1,t,i,n,s,a,2),x("x","z","y",1,-1,t,i,-n,s,a,3),x("x","y","z",1,-1,t,n,i,s,r,4),x("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2));function x(y,g,p,w,S,m,M,v,A,_,E){const C=m/A,P=M/_,T=m/2,O=M/2,k=v/2,U=A+1,$=_+1;let W=0,Y=0;const tt=new B;for(let q=0;q<$;q++){const ht=q*P-O;for(let nt=0;nt<U;nt++){const Lt=nt*C-T;tt[y]=Lt*w,tt[g]=ht*S,tt[p]=k,l.push(tt.x,tt.y,tt.z),tt[y]=0,tt[g]=0,tt[p]=v>0?1:-1,u.push(tt.x,tt.y,tt.z),d.push(nt/A),d.push(1-q/_),W+=1}}for(let q=0;q<_;q++)for(let ht=0;ht<A;ht++){const nt=h+ht+U*q,Lt=h+ht+U*(q+1),Qt=h+(ht+1)+U*(q+1),Ut=h+(ht+1)+U*q;c.push(nt,Lt,Ut),c.push(Lt,Qt,Ut),Y+=6}o.addGroup(f,Y,E),f+=Y,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hM(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},uM=class dM extends bn{constructor(t=1,n=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:n,capSegments:i,radialSegments:s,heightSegments:r},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],u=n/2,d=Math.PI/2*t,h=n,f=2*d+h,x=i*2+r,y=s+1,g=new B,p=new B;for(let w=0;w<=x;w++){let S=0,m=0,M=0,v=0;if(w<=i){const E=w/i,C=E*Math.PI/2;m=-u-t*Math.cos(C),M=t*Math.sin(C),v=-t*Math.cos(C),S=E*d}else if(w<=i+r){const E=(w-i)/r;m=-u+E*n,M=t,v=0,S=d+E*h}else{const E=(w-i-r)/i,C=E*Math.PI/2;m=u+t*Math.sin(C),M=t*Math.cos(C),v=t*Math.sin(C),S=d+h+E*d}const A=Math.max(0,Math.min(1,S/f));let _=0;w===0?_=.5/s:w===x&&(_=-.5/s);for(let E=0;E<=s;E++){const C=E/s,P=C*Math.PI*2,T=Math.sin(P),O=Math.cos(P);p.x=-M*O,p.y=m,p.z=M*T,o.push(p.x,p.y,p.z),g.set(-M*O,v,M*T),g.normalize(),c.push(g.x,g.y,g.z),l.push(C+_,A)}if(w>0){const E=(w-1)*y;for(let C=0;C<s;C++){const P=E+C,T=E+C+1,O=w*y+C,k=w*y+C+1;a.push(P,T,O),a.push(T,k,O)}}}this.setIndex(a),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dM(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},yi=class fM extends bn{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);const r=[],a=[],o=[],c=[],l=new B,u=new xt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const f=i+d/n*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(o,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fM(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ye=class pM extends bn{constructor(t=1,n=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let x=0;const y=[],g=i/2;let p=0;w(),a===!1&&(t>0&&S(!0),n>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(f,2));function w(){const m=new B,M=new B;let v=0;const A=(n-t)/i;for(let _=0;_<=r;_++){const E=[],C=_/r,P=C*(n-t)+t;for(let T=0;T<=s;T++){const O=T/s,k=O*c+o,U=Math.sin(k),$=Math.cos(k);M.x=P*U,M.y=-C*i+g,M.z=P*$,d.push(M.x,M.y,M.z),m.set(U,A,$).normalize(),h.push(m.x,m.y,m.z),f.push(O,1-C),E.push(x++)}y.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){const C=y[E][_],P=y[E+1][_],T=y[E+1][_+1],O=y[E][_+1];(t>0||E!==0)&&(u.push(C,P,O),v+=3),(n>0||E!==r-1)&&(u.push(P,T,O),v+=3)}l.addGroup(p,v,0),p+=v}function S(m){const M=x,v=new xt,A=new B;let _=0;const E=m===!0?t:n,C=m===!0?1:-1;for(let T=1;T<=s;T++)d.push(0,g*C,0),h.push(0,C,0),f.push(.5,.5),x++;const P=x;for(let T=0;T<=s;T++){const k=T/s*c+o,U=Math.cos(k),$=Math.sin(k);A.x=E*$,A.y=g*C,A.z=E*U,d.push(A.x,A.y,A.z),h.push(0,C,0),v.x=U*.5+.5,v.y=$*.5*C+.5,f.push(v.x,v.y),x++}for(let T=0;T<s;T++){const O=M+T,k=P+T;m===!0?u.push(k,k+1,O):u.push(k+1,k,O),_+=3}l.addGroup(p,_,m===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pM(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Do=class mM extends ye{constructor(t=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,n,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new mM(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};class ga extends bn{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};const r=[],a=[];o(s),l(i),u(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const S=new B,m=new B,M=new B;for(let v=0;v<n.length;v+=3)f(n[v+0],S),f(n[v+1],m),f(n[v+2],M),c(S,m,M,w)}function c(w,S,m,M){const v=M+1,A=[];for(let _=0;_<=v;_++){A[_]=[];const E=w.clone().lerp(m,_/v),C=S.clone().lerp(m,_/v),P=v-_;for(let T=0;T<=P;T++)T===0&&_===v?A[_][T]=E:A[_][T]=E.clone().lerp(C,T/P)}for(let _=0;_<v;_++)for(let E=0;E<2*(v-_)-1;E++){const C=Math.floor(E/2);E%2===0?(h(A[_][C+1]),h(A[_+1][C]),h(A[_][C])):(h(A[_][C+1]),h(A[_+1][C+1]),h(A[_+1][C]))}}function l(w){const S=new B;for(let m=0;m<r.length;m+=3)S.x=r[m+0],S.y=r[m+1],S.z=r[m+2],S.normalize().multiplyScalar(w),r[m+0]=S.x,r[m+1]=S.y,r[m+2]=S.z}function u(){const w=new B;for(let S=0;S<r.length;S+=3){w.x=r[S+0],w.y=r[S+1],w.z=r[S+2];const m=g(w)/2/Math.PI+.5,M=p(w)/Math.PI+.5;a.push(m,1-M)}x(),d()}function d(){for(let w=0;w<a.length;w+=6){const S=a[w+0],m=a[w+2],M=a[w+4],v=Math.max(S,m,M),A=Math.min(S,m,M);v>.9&&A<.1&&(S<.2&&(a[w+0]+=1),m<.2&&(a[w+2]+=1),M<.2&&(a[w+4]+=1))}}function h(w){r.push(w.x,w.y,w.z)}function f(w,S){const m=w*3;S.x=t[m+0],S.y=t[m+1],S.z=t[m+2]}function x(){const w=new B,S=new B,m=new B,M=new B,v=new xt,A=new xt,_=new xt;for(let E=0,C=0;E<r.length;E+=9,C+=6){w.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),m.set(r[E+6],r[E+7],r[E+8]),v.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),_.set(a[C+4],a[C+5]),M.copy(w).add(S).add(m).divideScalar(3);const P=g(M);y(v,C+0,w,P),y(A,C+2,S,P),y(_,C+4,m,P)}}function y(w,S,m,M){M<0&&w.x===1&&(a[S]=w.x-1),m.x===0&&m.z===0&&(a[S]=M/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.vertices,t.indices,t.radius,t.detail)}}let mu=class gM extends ga{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new gM(t.radius,t.detail)}},zo=class xM extends bn{constructor(t=[new xt(0,-.5),new xt(.5,0),new xt(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=Ie(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],l=[],u=1/n,d=new B,h=new xt,f=new B,x=new B,y=new B;let g=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:g=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:g=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(x)}for(let w=0;w<=n;w++){const S=i+w*u*s,m=Math.sin(S),M=Math.cos(S);for(let v=0;v<=t.length-1;v++){d.x=t[v].x*m,d.y=t[v].y,d.z=t[v].x*M,a.push(d.x,d.y,d.z),h.x=w/n,h.y=v/(t.length-1),o.push(h.x,h.y);const A=c[3*v+0]*m,_=c[3*v+1],E=c[3*v+0]*M;l.push(A,_,E)}}for(let w=0;w<n;w++)for(let S=0;S<t.length-1;S++){const m=S+w*t.length,M=m,v=m+t.length,A=m+t.length+1,_=m+1;r.push(M,v,_),r.push(A,_,v)}this.setIndex(r),this.setAttribute("position",new Le(a,3)),this.setAttribute("uv",new Le(o,2)),this.setAttribute("normal",new Le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xM(t.points,t.segments,t.phiStart,t.phiLength)}},vn=class _M extends ga{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new _M(t.radius,t.detail)}};class cs extends bn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,a=n/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=t/o,h=n/c,f=[],x=[],y=[],g=[];for(let p=0;p<u;p++){const w=p*h-a;for(let S=0;S<l;S++){const m=S*d-r;x.push(m,-w,0),y.push(0,0,1),g.push(S/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const S=w+l*p,m=w+l*(p+1),M=w+1+l*(p+1),v=w+1+l*p;f.push(S,m,v),f.push(m,M,v)}this.setIndex(f),this.setAttribute("position",new Le(x,3)),this.setAttribute("normal",new Le(y,3)),this.setAttribute("uv",new Le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class gu extends bn{constructor(t=.5,n=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let d=t;const h=(n-t)/s,f=new B,x=new xt;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){const p=r+g/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/n+1)/2,x.y=(f.y/n+1)/2,u.push(x.x,x.y)}d+=h}for(let y=0;y<s;y++){const g=y*(i+1);for(let p=0;p<i;p++){const w=p+g,S=w,m=w+i+1,M=w+i+2,v=w+1;o.push(S,m,v),o.push(m,M,v)}}this.setIndex(o),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gu(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}let as=class yM extends bn{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new B,h=new B,f=[],x=[],y=[],g=[];for(let p=0;p<=i;p++){const w=[],S=p/i,m=a+S*o,M=t*Math.cos(m),v=Math.sqrt(t*t-M*M);let A=0;p===0&&a===0?A=.5/n:p===i&&c===Math.PI&&(A=-.5/n);for(let _=0;_<=n;_++){const E=_/n,C=s+E*r;d.x=-v*Math.cos(C),d.y=M,d.z=v*Math.sin(C),x.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),g.push(E+A,1-S),w.push(l++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<n;w++){const S=u[p][w+1],m=u[p][w],M=u[p+1][w],v=u[p+1][w+1];(p!==0||a>0)&&f.push(S,m,v),(p!==i-1||c<Math.PI)&&f.push(m,M,v)}this.setIndex(f),this.setAttribute("position",new Le(x,3)),this.setAttribute("normal",new Le(y,3)),this.setAttribute("uv",new Le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yM(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};class xu extends ga{constructor(t=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,n),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new xu(t.radius,t.detail)}}let un=class vM extends bn{constructor(t=1,n=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new B,f=new B,x=new B;for(let y=0;y<=i;y++){const g=a+y/i*o;for(let p=0;p<=s;p++){const w=p/s*r;f.x=(t+n*Math.cos(g))*Math.cos(w),f.y=(t+n*Math.cos(g))*Math.sin(w),f.z=n*Math.sin(g),l.push(f.x,f.y,f.z),h.x=t*Math.cos(w),h.y=t*Math.sin(w),x.subVectors(f,h).normalize(),u.push(x.x,x.y,x.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){const p=(s+1)*y+g-1,w=(s+1)*(y-1)+g-1,S=(s+1)*(y-1)+g,m=(s+1)*y+g;c.push(p,w,m),c.push(w,S,m)}this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vM(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function da(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];if(sg(s))s.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(sg(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function ni(e){const t={};for(let n=0;n<e.length;n++){const i=da(e[n]);for(const s in i)t[s]=i[s]}return t}function sg(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function TS(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function MM(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const fa={clone:da,merge:ni};var AS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let Vn=class extends Mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=da(t.uniforms),this.uniformsGroups=TS(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new se().setHex(s.value);break;case"v2":this.uniforms[i].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new pn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ge().fromArray(s.value);break;case"m4":this.uniforms[i].value=new tn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}};class Z0 extends Vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wM extends Mr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Eh,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}let mt=class extends wM{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};class SM extends Mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class bM extends Mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Gc={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(rg(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!rg(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function rg(e){try{const t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class EM{constructor(t,n,i){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],x=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const TM=new EM;class _u{constructor(t){this.manager=t!==void 0?t:TM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){const i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}_u.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fr=new WeakMap;class AM extends _u{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Gc.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){n&&n(a),r.manager.itemEnd(t)},0);else{let d=Fr.get(a);d===void 0&&(d=[],Fr.set(a,d)),d.push({onLoad:n,onError:s})}return a}const o=oo("img");function c(){u(),n&&n(this);const d=Fr.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Fr.delete(this),r.manager.itemEnd(t)}function l(d){u(),s&&s(d),Gc.remove(`image:${t}`);const h=Fr.get(this)||[];for(let f=0;f<h.length;f++){const x=h[f];x.onError&&x.onError(d)}Fr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Gc.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}}let RM=class extends _u{constructor(t){super(t)}load(t,n,i,s){const r=new On,a=new AM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}};class yu extends ie{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}let CM=class extends yu{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.groundColor=new se(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}};const ld=new tn,ag=new B,og=new B;class PM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pu,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;ag.setFromMatrixPosition(t.matrixWorld),n.position.copy(ag),og.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(og),n.updateMatrixWorld(),ld.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ua||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ld)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ic=new B,sc=new vr,Qi=new B;class j0 extends ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ic,sc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,sc,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(ic,sc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ic,sc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zs=new B,cg=new xt,lg=new xt;class mi extends j0{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Bf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bf*2*Math.atan(Math.tan(Fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zs.x,zs.y).multiplyScalar(-t/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zs.x,zs.y).multiplyScalar(-t/zs.z)}getViewSize(t,n){return this.getViewBounds(t,cg,lg),n.subVectors(lg,cg)}setViewOffset(t,n,i,s,r,a){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Fu*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,n-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class CS extends PM{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}}let PS=class extends yu{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new CS}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}};class Lo extends j0{constructor(t=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class IS extends PM{constructor(){super(new Lo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}let Vc=class extends yu{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.target=new ie,this.shadow=new IS}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};const Br=-90,Hr=1;class IM extends ie{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mi(Br,Hr,t,n);s.layers=this.layers,this.add(s);const r=new mi(Br,Hr,t,n);r.layers=this.layers,this.add(r);const a=new mi(Br,Hr,t,n);a.layers=this.layers,this.add(a);const o=new mi(Br,Hr,t,n);o.layers=this.layers,this.add(o);const c=new mi(Br,Hr,t,n);c.layers=this.layers,this.add(c);const l=new mi(Br,Hr,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,c]=n;for(const l of n)this.remove(l);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(d,h,f),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class DM extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class zM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=DS.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function DS(){this._document.hidden===!1&&this.reset()}const hg=new tn;class LM{constructor(t,n,i=0,s=1/0){this.ray=new $0(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new du,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ze("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return hg.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hg),this}intersectObject(t,n=!0,i=[]){return Vf(t,this,i,n),i.sort(ug),i}intersectObjects(t,n=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Vf(t[s],this,i,n);return i.sort(ug),i}}function ug(e,t){return e.distance-t.distance}function Vf(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){const r=e.children;for(let a=0,o=r.length;a<o;a++)Vf(r[a],t,n,!0)}}const Cm=class Cm{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){const r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};Cm.prototype.isMatrix2=!0;let $f=Cm;function dg(e,t,n,i){const s=zS(i);switch(n){case k0:return e*t;case ru:return e*t/s.components*s.byteLength;case au:return e*t/s.components*s.byteLength;case Ys:return e*t*2/s.components*s.byteLength;case ou:return e*t*2/s.components*s.byteLength;case F0:return e*t*3/s.components*s.byteLength;case zi:return e*t*4/s.components*s.byteLength;case cu:return e*t*4/s.components*s.byteLength;case qa:case Za:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ja:case Ka:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case jl:case Jl:return Math.max(e,16)*Math.max(t,8)/4;case Zl:case Kl:return Math.max(e,8)*Math.max(t,8)/2;case Ql:case th:case nh:case ih:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case eh:case io:case sh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ah:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case oh:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ch:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case lh:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case hh:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case uh:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case dh:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case fh:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ph:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case mh:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case gh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case xh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case _h:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case yh:case vh:case Mh:return Math.ceil(e/4)*Math.ceil(t/4)*16;case wh:case Sh:return Math.ceil(e/4)*Math.ceil(t/4)*8;case so:case bh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function zS(e){switch(e){case gi:case L0:return{byteLength:1,components:1};case la:case N0:case xi:return{byteLength:2,components:1};case iu:case su:return{byteLength:2,components:4};case qi:case nu:case Di:return{byteLength:4,components:1};case U0:case O0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zh}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zh);function NM(){let e=null,t=!1,n=null,i=null;function s(r,a){n(r,a),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function LS(e){const t=new WeakMap;function n(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=e.createBuffer();e.bindBuffer(c,h),e.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=e.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=e.SHORT;else if(l instanceof Uint32Array)f=e.UNSIGNED_INT;else if(l instanceof Int32Array)f=e.INT;else if(l instanceof Int8Array)f=e.BYTE;else if(l instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(e.bindBuffer(l,o),d.length===0)e.bufferSubData(l,0,u);else{d.sort((f,x)=>f.start-x.start);let h=0;for(let f=1;f<d.length;f++){const x=d[h],y=d[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,x=d.length;f<x;f++){const y=d[f];e.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(e.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var NS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,US=`#ifdef USE_ALPHAHASH
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
#endif`,OS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HS=`#ifdef USE_AOMAP
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
#endif`,GS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VS=`#ifdef USE_BATCHING
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
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qS=`#ifdef USE_IRIDESCENCE
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
#endif`,ZS=`#ifdef USE_BUMPMAP
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
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,eb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ib=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,sb=`#define PI 3.141592653589793
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
} // validated`,rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ab=`vec3 transformedNormal = objectNormal;
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
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",db=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fb=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wb=`#ifdef USE_GRADIENTMAP
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
}`,Sb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Rb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Db=`PhysicalMaterial material;
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
#endif`,zb=`uniform sampler2D dfgLUT;
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
}`,Lb=`
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
#endif`,Nb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ob=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wb=`#if defined( USE_POINTS_UV )
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
#endif`,Xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`#ifdef USE_MORPHTARGETS
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
#endif`,Jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sE=`#ifdef USE_NORMALMAP
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
#endif`,rE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vE=`float getShadowMask() {
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
}`,ME=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wE=`#ifdef USE_SKINNING
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
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,EE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CE=`#ifdef USE_TRANSMISSION
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
#endif`,PE=`#ifdef USE_TRANSMISSION
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
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UE=`uniform sampler2D t2D;
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`#include <common>
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
}`,GE=`#if DEPTH_PACKING == 3200
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
}`,VE=`#define DISTANCE
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
}`,$E=`#define DISTANCE
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`uniform float scale;
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
}`,qE=`uniform vec3 diffuse;
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
}`,ZE=`#include <common>
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
}`,jE=`uniform vec3 diffuse;
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
}`,KE=`#define LAMBERT
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
}`,JE=`#define LAMBERT
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
}`,QE=`#define MATCAP
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
}`,tT=`#define MATCAP
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
}`,eT=`#define NORMAL
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
}`,nT=`#define NORMAL
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
}`,iT=`#define PHONG
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
}`,sT=`#define PHONG
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
}`,rT=`#define STANDARD
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
}`,aT=`#define STANDARD
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
}`,oT=`#define TOON
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
}`,cT=`#define TOON
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
}`,lT=`uniform float size;
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
}`,hT=`uniform vec3 diffuse;
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
}`,uT=`#include <common>
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
}`,dT=`uniform vec3 color;
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
}`,fT=`uniform float rotation;
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
}`,pT=`uniform vec3 diffuse;
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
}`,Ee={alphahash_fragment:NS,alphahash_pars_fragment:US,alphamap_fragment:OS,alphamap_pars_fragment:kS,alphatest_fragment:FS,alphatest_pars_fragment:BS,aomap_fragment:HS,aomap_pars_fragment:GS,batching_pars_vertex:VS,batching_vertex:$S,begin_vertex:WS,beginnormal_vertex:XS,bsdfs:YS,iridescence_fragment:qS,bumpmap_pars_fragment:ZS,clipping_planes_fragment:jS,clipping_planes_pars_fragment:KS,clipping_planes_pars_vertex:JS,clipping_planes_vertex:QS,color_fragment:tb,color_pars_fragment:eb,color_pars_vertex:nb,color_vertex:ib,common:sb,cube_uv_reflection_fragment:rb,defaultnormal_vertex:ab,displacementmap_pars_vertex:ob,displacementmap_vertex:cb,emissivemap_fragment:lb,emissivemap_pars_fragment:hb,colorspace_fragment:ub,colorspace_pars_fragment:db,envmap_fragment:fb,envmap_common_pars_fragment:pb,envmap_pars_fragment:mb,envmap_pars_vertex:gb,envmap_physical_pars_fragment:Ab,envmap_vertex:xb,fog_vertex:_b,fog_pars_vertex:yb,fog_fragment:vb,fog_pars_fragment:Mb,gradientmap_pars_fragment:wb,lightmap_pars_fragment:Sb,lights_lambert_fragment:bb,lights_lambert_pars_fragment:Eb,lights_pars_begin:Tb,lights_toon_fragment:Rb,lights_toon_pars_fragment:Cb,lights_phong_fragment:Pb,lights_phong_pars_fragment:Ib,lights_physical_fragment:Db,lights_physical_pars_fragment:zb,lights_fragment_begin:Lb,lights_fragment_maps:Nb,lights_fragment_end:Ub,lightprobes_pars_fragment:Ob,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Fb,logdepthbuf_pars_vertex:Bb,logdepthbuf_vertex:Hb,map_fragment:Gb,map_pars_fragment:Vb,map_particle_fragment:$b,map_particle_pars_fragment:Wb,metalnessmap_fragment:Xb,metalnessmap_pars_fragment:Yb,morphinstance_vertex:qb,morphcolor_vertex:Zb,morphnormal_vertex:jb,morphtarget_pars_vertex:Kb,morphtarget_vertex:Jb,normal_fragment_begin:Qb,normal_fragment_maps:tE,normal_pars_fragment:eE,normal_pars_vertex:nE,normal_vertex:iE,normalmap_pars_fragment:sE,clearcoat_normal_fragment_begin:rE,clearcoat_normal_fragment_maps:aE,clearcoat_pars_fragment:oE,iridescence_pars_fragment:cE,opaque_fragment:lE,packing:hE,premultiplied_alpha_fragment:uE,project_vertex:dE,dithering_fragment:fE,dithering_pars_fragment:pE,roughnessmap_fragment:mE,roughnessmap_pars_fragment:gE,shadowmap_pars_fragment:xE,shadowmap_pars_vertex:_E,shadowmap_vertex:yE,shadowmask_pars_fragment:vE,skinbase_vertex:ME,skinning_pars_vertex:wE,skinning_vertex:SE,skinnormal_vertex:bE,specularmap_fragment:EE,specularmap_pars_fragment:TE,tonemapping_fragment:AE,tonemapping_pars_fragment:RE,transmission_fragment:CE,transmission_pars_fragment:PE,uv_pars_fragment:IE,uv_pars_vertex:DE,uv_vertex:zE,worldpos_vertex:LE,background_vert:NE,background_frag:UE,backgroundCube_vert:OE,backgroundCube_frag:kE,cube_vert:FE,cube_frag:BE,depth_vert:HE,depth_frag:GE,distance_vert:VE,distance_frag:$E,equirect_vert:WE,equirect_frag:XE,linedashed_vert:YE,linedashed_frag:qE,meshbasic_vert:ZE,meshbasic_frag:jE,meshlambert_vert:KE,meshlambert_frag:JE,meshmatcap_vert:QE,meshmatcap_frag:tT,meshnormal_vert:eT,meshnormal_frag:nT,meshphong_vert:iT,meshphong_frag:sT,meshphysical_vert:rT,meshphysical_frag:aT,meshtoon_vert:oT,meshtoon_frag:cT,points_vert:lT,points_frag:hT,shadow_vert:uT,shadow_frag:dT,sprite_vert:fT,sprite_frag:pT},Wt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ge}},envmap:{envMap:{value:null},envMapRotation:{value:new ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ge},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0},uvTransform:{value:new ge}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ge},alphaMap:{value:null},alphaMapTransform:{value:new ge},alphaTest:{value:0}}},$i={basic:{uniforms:ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new se(0)},envMapIntensity:{value:1}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:ni([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:ni([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new se(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:ni([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:ni([Wt.points,Wt.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:ni([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:ni([Wt.common,Wt.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:ni([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:ni([Wt.sprite,Wt.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ge}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distance:{uniforms:ni([Wt.common,Wt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distance_vert,fragmentShader:Ee.distance_frag},shadow:{uniforms:ni([Wt.lights,Wt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};$i.physical={uniforms:ni([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ge},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ge},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ge},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ge},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ge},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ge}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const rc={r:0,b:0,g:0},mT=new tn,UM=new ge;UM.set(-1,0,0,0,1,0,0,0,1);function gT(e,t,n,i,s,r){const a=new se(0);let o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(w){let S=w.isScene===!0?w.background:null;if(S&&S.isTexture){const m=w.backgroundBlurriness>0;S=t.get(S,m)}return S}function x(w){let S=!1;const m=f(w);m===null?g(a,o):m&&m.isColor&&(g(m,1),S=!0);const M=e.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(w,S){const m=f(S);m&&(m.isCubeTexture||m.mapping===Io)?(l===void 0&&(l=new gt(new we(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:da($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,v,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(mT.makeRotationFromEuler(S.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(UM),l.material.toneMapped=Pe.getTransfer(m.colorSpace)!==Ze,(u!==m||d!==m.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=m,d=m.version,h=e.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new gt(new cs(2,2),new Vn({name:"BackgroundMaterial",uniforms:da($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Pe.getTransfer(m.colorSpace)!==Ze,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(u!==m||d!==m.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=m,d=m.version,h=e.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,S){w.getRGB(rc,MM(e)),n.buffers.color.setClear(rc.r,rc.g,rc.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(a,o)},render:x,addToRenderList:y,dispose:p}}function xT(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(P,T,O,k,U){let $=!1;const W=d(P,k,O,T);r!==W&&(r=W,l(r.object)),$=f(P,k,O,U),$&&x(P,k,O,U),U!==null&&t.update(U,e.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,m(P,T,O,k),U!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return e.createVertexArray()}function l(P){return e.bindVertexArray(P)}function u(P){return e.deleteVertexArray(P)}function d(P,T,O,k){const U=k.wireframe===!0;let $=i[T.id];$===void 0&&($={},i[T.id]=$);const W=P.isInstancedMesh===!0?P.id:0;let Y=$[W];Y===void 0&&(Y={},$[W]=Y);let tt=Y[O.id];tt===void 0&&(tt={},Y[O.id]=tt);let q=tt[U];return q===void 0&&(q=h(c()),tt[U]=q),q}function h(P){const T=[],O=[],k=[];for(let U=0;U<n;U++)T[U]=0,O[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:k,object:P,attributes:{},index:null}}function f(P,T,O,k){const U=r.attributes,$=T.attributes;let W=0;const Y=O.getAttributes();for(const tt in Y)if(Y[tt].location>=0){const ht=U[tt];let nt=$[tt];if(nt===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),ht===void 0||ht.attribute!==nt||nt&&ht.data!==nt.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function x(P,T,O,k){const U={},$=T.attributes;let W=0;const Y=O.getAttributes();for(const tt in Y)if(Y[tt].location>=0){let ht=$[tt];ht===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(ht=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(ht=P.instanceColor));const nt={};nt.attribute=ht,ht&&ht.data&&(nt.data=ht.data),U[tt]=nt,W++}r.attributes=U,r.attributesNum=W,r.index=k}function y(){const P=r.newAttributes;for(let T=0,O=P.length;T<O;T++)P[T]=0}function g(P){p(P,0)}function p(P,T){const O=r.newAttributes,k=r.enabledAttributes,U=r.attributeDivisors;O[P]=1,k[P]===0&&(e.enableVertexAttribArray(P),k[P]=1),U[P]!==T&&(e.vertexAttribDivisor(P,T),U[P]=T)}function w(){const P=r.newAttributes,T=r.enabledAttributes;for(let O=0,k=T.length;O<k;O++)T[O]!==P[O]&&(e.disableVertexAttribArray(O),T[O]=0)}function S(P,T,O,k,U,$,W){W===!0?e.vertexAttribIPointer(P,T,O,U,$):e.vertexAttribPointer(P,T,O,k,U,$)}function m(P,T,O,k){y();const U=k.attributes,$=O.getAttributes(),W=T.defaultAttributeValues;for(const Y in $){const tt=$[Y];if(tt.location>=0){let q=U[Y];if(q===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){const ht=q.normalized,nt=q.itemSize,Lt=t.get(q);if(Lt===void 0)continue;const Qt=Lt.buffer,Ut=Lt.type,V=Lt.bytesPerElement,ot=Ut===e.INT||Ut===e.UNSIGNED_INT||q.gpuType===nu;if(q.isInterleavedBufferAttribute){const at=q.data,Rt=at.stride,Ht=q.offset;if(at.isInstancedInterleavedBuffer){for(let Vt=0;Vt<tt.locationSize;Vt++)p(tt.location+Vt,at.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Vt=0;Vt<tt.locationSize;Vt++)g(tt.location+Vt);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let Vt=0;Vt<tt.locationSize;Vt++)S(tt.location+Vt,nt/tt.locationSize,Ut,ht,Rt*V,(Ht+nt/tt.locationSize*Vt)*V,ot)}else{if(q.isInstancedBufferAttribute){for(let at=0;at<tt.locationSize;at++)p(tt.location+at,q.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let at=0;at<tt.locationSize;at++)g(tt.location+at);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let at=0;at<tt.locationSize;at++)S(tt.location+at,nt/tt.locationSize,Ut,ht,nt*V,nt/tt.locationSize*at*V,ot)}}else if(W!==void 0){const ht=W[Y];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(tt.location,ht);break;case 3:e.vertexAttrib3fv(tt.location,ht);break;case 4:e.vertexAttrib4fv(tt.location,ht);break;default:e.vertexAttrib1fv(tt.location,ht)}}}}w()}function M(){E();for(const P in i){const T=i[P];for(const O in T){const k=T[O];for(const U in k){const $=k[U];for(const W in $)u($[W].object),delete $[W];delete k[U]}}delete i[P]}}function v(P){if(i[P.id]===void 0)return;const T=i[P.id];for(const O in T){const k=T[O];for(const U in k){const $=k[U];for(const W in $)u($[W].object),delete $[W];delete k[U]}}delete i[P.id]}function A(P){for(const T in i){const O=i[T];for(const k in O){const U=O[k];if(U[P.id]===void 0)continue;const $=U[P.id];for(const W in $)u($[W].object),delete $[W];delete U[P.id]}}}function _(P){for(const T in i){const O=i[T],k=P.isInstancedMesh===!0?P.id:0,U=O[k];if(U!==void 0){for(const $ in U){const W=U[$];for(const Y in W)u(W[Y].object),delete W[Y];delete U[$]}delete O[k],Object.keys(O).length===0&&delete i[T]}}}function E(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:v,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:g,disableUnusedAttributes:w}}function _T(e,t,n){let i;function s(c){i=c}function r(c,l){e.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,u){u!==0&&(e.drawArraysInstanced(i,c,l,u),n.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function yT(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==zi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const _=A===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==gi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Di&&!_)}function c(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(ue("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),v=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:m,maxSamples:M,samples:v}}function vT(e){const t=this;let n=null,i=0,s=!1,r=!1;const a=new vs,o=new ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){const x=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=e.get(d);if(!s||x===null||x.length===0||r&&!g)r?u(null):l();else{const w=r?0:i,S=w*4;let m=p.clippingState||null;c.value=m,m=u(x,h,S,f);for(let M=0;M!==S;++M)m[M]=n[M];p.clippingState=m,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,x){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=c.value,x!==!0||g===null){const p=f+y*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,m=f;S!==y;++S,m+=4)a.copy(d[S]).applyMatrix4(w,o),a.normal.toArray(g,m),g[m+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}const Hs=4,fg=[.125,.215,.35,.446,.526,.582],lr=20,MT=256,Da=new Lo,pg=new se;let hd=null,ud=0,dd=0,fd=!1;const wT=new B;class Ah{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){const{size:a=256,position:o=wT}=r;hd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hd,ud,dd),this._renderer.xr.enabled=fd,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Xs||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:xi,format:zi,colorSpace:ro,depthBuffer:!1},s=mg(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mg(t,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=ST(r)),this._blurMaterial=ET(r,t,n),this._ggxMaterial=bT(r,t,n)}return s}_compileMaterial(t){const n=new gt(new bn,t);this._renderer.compile(n,Da)}_sceneToCubeUV(t,n,i,s,r){const c=new mi(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(pg),d.toneMapping=Yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new we,new Ue({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let p=!1;const w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,p=!0):(g.color.copy(pg),p=!0);for(let S=0;S<6;S++){const m=S%3;m===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):m===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));const M=this._cubeSize;Gr(s,m*M,S>2?M:0,M,M),d.setRenderTarget(s),p&&d.render(y,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=w}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===Xs||t.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gg());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;Gr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Da)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:x}=this,y=this._sizeLods[i],g=3*y*(i>x-Hs?i-x+Hs:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=x-n,Gr(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Da),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-i,Gr(t,g,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Da)}_blur(t,n,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,n,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,f=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*lr-1),y=r/x,g=isFinite(r)?1+Math.floor(u*y):lr;g>lr&&ue(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${lr}`);const p=[];let w=0;for(let A=0;A<lr;++A){const _=A/y,E=Math.exp(-_*_/2);p.push(E),A===0?w+=E:A<g&&(w+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=x,h.mipInt.value=S-i;const m=this._sizeLods[s],M=3*m*(s>S-Hs?s-S+Hs:0),v=4*(this._cubeSize-m);Gr(n,M,v,3*m,2*m),c.setRenderTarget(n),c.render(d,Da)}}function ST(e){const t=[],n=[],i=[];let s=e;const r=e-Hs+1+fg.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>e-Hs?c=fg[a-e+Hs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,x=6,y=3,g=2,p=1,w=new Float32Array(y*x*f),S=new Float32Array(g*x*f),m=new Float32Array(p*x*f);for(let v=0;v<f;v++){const A=v%3*2/3-1,_=v>2?0:-1,E=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];w.set(E,y*x*v),S.set(h,g*x*v);const C=[v,v,v,v,v,v];m.set(C,p*x*v)}const M=new bn;M.setAttribute("position",new _i(w,y)),M.setAttribute("uv",new _i(S,g)),M.setAttribute("faceIndex",new _i(m,p)),i.push(new gt(M,null)),s>Hs&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function mg(e,t,n){const i=new ri(e,t,n);return i.texture.mapping=Io,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function bT(e,t,n){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:MT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function ET(e,t,n){const i=new Float32Array(lr),s=new B(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function gg(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function xg(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function vu(){return`

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
	`}class K0 extends ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new X0(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new we(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:Xi});r.uniforms.tEquirect.value=n;const a=new gt(s,r),o=n.minFilter;return n.minFilter===Fs&&(n.minFilter=Gn),new IM(1,10,this).update(t,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(n,i,s);t.setRenderTarget(r)}}function TT(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Oc||f===kc)if(t.has(h)){const x=t.get(h).texture;return o(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const y=new K0(x.height);return y.fromEquirectangularTexture(e,h),t.set(h,y),h.addEventListener("dispose",l),o(y.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,x=f===Oc||f===kc,y=f===Xs||f===_r;if(x||y){let g=n.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Ah(e)),g=x?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const w=h.image;return x&&w&&w.height>0||y&&w&&c(w)?(i===null&&(i=new Ah(e)),g=x?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,f){return f===Oc?h.mapping=Xs:f===kc&&(h.mapping=_r),h}function c(h){let f=0;const x=6;for(let y=0;y<x;y++)h[y]!==void 0&&f++;return f===x}function l(h){const f=h.target;f.removeEventListener("dispose",l);const x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const x=n.get(f);x!==void 0&&(n.delete(f),x.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function AT(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&pr("WebGLRenderer: "+i+" extension not supported."),s}}}function RT(e,t,n,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,n.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],e.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,x=d.attributes.position;let y=0;if(x===void 0)return;if(f!==null){const w=f.array;y=f.version;for(let S=0,m=w.length;S<m;S+=3){const M=w[S+0],v=w[S+1],A=w[S+2];h.push(M,v,v,A,A,M)}}else{const w=x.array;y=x.version;for(let S=0,m=w.length/3-1;S<m;S+=3){const M=S+0,v=S+1,A=S+2;h.push(M,v,v,A,A,M)}}const g=new(x.count>=65535?G0:H0)(h,1);g.version=y;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function CT(e,t,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){e.drawElements(i,h,r,d*a),n.update(h,i,1)}function l(d,h,f){f!==0&&(e.drawElementsInstanced(i,h,r,d*a,f),n.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=h[g];n.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function PT(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case e.TRIANGLES:n.triangles+=o*(r/3);break;case e.LINES:n.lines+=o*(r/2);break;case e.LINE_STRIP:n.lines+=o*(r-1);break;case e.LINE_LOOP:n.lines+=o*r;break;case e.POINTS:n.points+=o*r;break;default:ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function IT(e,t,n){const i=new WeakMap,s=new pn;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let E=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;f===!0&&(S=1),x===!0&&(S=2),y===!0&&(S=3);let m=o.attributes.position.count*S,M=1;m>t.maxTextureSize&&(M=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);const v=new Float32Array(m*M*4*d),A=new B0(v,m,M,d);A.type=Di,A.needsUpdate=!0;const _=S*4;for(let C=0;C<d;C++){const P=g[C],T=p[C],O=w[C],k=m*M*4*C;for(let U=0;U<P.count;U++){const $=U*_;f===!0&&(s.fromBufferAttribute(P,U),v[k+$+0]=s.x,v[k+$+1]=s.y,v[k+$+2]=s.z,v[k+$+3]=0),x===!0&&(s.fromBufferAttribute(T,U),v[k+$+4]=s.x,v[k+$+5]=s.y,v[k+$+6]=s.z,v[k+$+7]=0),y===!0&&(s.fromBufferAttribute(O,U),v[k+$+8]=s.x,v[k+$+9]=s.y,v[k+$+10]=s.z,v[k+$+11]=O.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new xt(m,M)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",a.morphTexture,n);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];const x=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(e,"morphTargetBaseInfluence",x),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function DT(e,t,n,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const zT={[jh]:"LINEAR_TONE_MAPPING",[Kh]:"REINHARD_TONE_MAPPING",[Jh]:"CINEON_TONE_MAPPING",[Po]:"ACES_FILMIC_TONE_MAPPING",[tu]:"AGX_TONE_MAPPING",[eu]:"NEUTRAL_TONE_MAPPING",[Qh]:"CUSTOM_TONE_MAPPING"};function LT(e,t,n,i,s,r){const a=new ri(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new yr(t,n):void 0}),o=new ri(t,n,{type:xi,depthBuffer:!1,stencilBuffer:!1}),c=new bn;c.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Le([0,2,0,0,2,0],2));const l=new Z0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new gt(c,l),d=new Lo(-1,1,1,-1,0,1);let h=null,f=null,x=!1,y,g=null,p=[],w=!1;this.setSize=function(S,m){a.setSize(S,m),o.setSize(S,m);for(let M=0;M<p.length;M++){const v=p[M];v.setSize&&v.setSize(S,m)}},this.setEffects=function(S){p=S,w=p.length>0&&p[0].isRenderPass===!0;const m=a.width,M=a.height;for(let v=0;v<p.length;v++){const A=p[v];A.setSize&&A.setSize(m,M)}},this.begin=function(S,m){if(x||S.toneMapping===Yi&&p.length===0)return!1;if(g=m,m!==null){const M=m.width,v=m.height;(a.width!==M||a.height!==v)&&this.setSize(M,v)}return w===!1&&S.setRenderTarget(a),y=S.toneMapping,S.toneMapping=Yi,!0},this.hasRenderPass=function(){return w},this.end=function(S,m){S.toneMapping=y,x=!0;let M=a,v=o;for(let A=0;A<p.length;A++){const _=p[A];if(_.enabled!==!1&&(_.render(S,v,M,m),_.needsSwap!==!1)){const E=M;M=v,v=E}}if(h!==S.outputColorSpace||f!==S.toneMapping){h=S.outputColorSpace,f=S.toneMapping,l.defines={},Pe.getTransfer(h)===Ze&&(l.defines.SRGB_TRANSFER="");const A=zT[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(g),S.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),l.dispose()}}const OM=new On,Wf=new yr(1,1),kM=new B0,FM=new sM,BM=new X0,_g=[],yg=[],vg=new Float32Array(16),Mg=new Float32Array(9),wg=new Float32Array(4);function xa(e,t,n){const i=e[0];if(i<=0||i>0)return e;const s=t*n;let r=_g[s];if(r===void 0&&(r=new Float32Array(s),_g[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=n,e[a].toArray(r,o)}return r}function An(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Rn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Mu(e,t){let n=yg[t];n===void 0&&(n=new Int32Array(t),yg[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function NT(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function UT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;e.uniform2fv(this.addr,t),Rn(n,t)}}function OT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(An(n,t))return;e.uniform3fv(this.addr,t),Rn(n,t)}}function kT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;e.uniform4fv(this.addr,t),Rn(n,t)}}function FT(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(An(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,i))return;wg.set(i),e.uniformMatrix2fv(this.addr,!1,wg),Rn(n,i)}}function BT(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(An(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,i))return;Mg.set(i),e.uniformMatrix3fv(this.addr,!1,Mg),Rn(n,i)}}function HT(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(An(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,i))return;vg.set(i),e.uniformMatrix4fv(this.addr,!1,vg),Rn(n,i)}}function GT(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function VT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;e.uniform2iv(this.addr,t),Rn(n,t)}}function $T(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;e.uniform3iv(this.addr,t),Rn(n,t)}}function WT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;e.uniform4iv(this.addr,t),Rn(n,t)}}function XT(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function YT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;e.uniform2uiv(this.addr,t),Rn(n,t)}}function qT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;e.uniform3uiv(this.addr,t),Rn(n,t)}}function ZT(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;e.uniform4uiv(this.addr,t),Rn(n,t)}}function jT(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Wf.compareFunction=n.isReversedDepthBuffer()?hu:lu,r=Wf):r=OM,n.setTexture2D(t||r,s)}function KT(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||FM,s)}function JT(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||BM,s)}function QT(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||kM,s)}function t3(e){switch(e){case 5126:return NT;case 35664:return UT;case 35665:return OT;case 35666:return kT;case 35674:return FT;case 35675:return BT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return $T;case 35669:case 35673:return WT;case 5125:return XT;case 36294:return YT;case 36295:return qT;case 36296:return ZT;case 35678:case 36198:case 36298:case 36306:case 35682:return jT;case 35679:case 36299:case 36307:return KT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return QT}}function e3(e,t){e.uniform1fv(this.addr,t)}function n3(e,t){const n=xa(t,this.size,2);e.uniform2fv(this.addr,n)}function i3(e,t){const n=xa(t,this.size,3);e.uniform3fv(this.addr,n)}function s3(e,t){const n=xa(t,this.size,4);e.uniform4fv(this.addr,n)}function r3(e,t){const n=xa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function a3(e,t){const n=xa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function o3(e,t){const n=xa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function c3(e,t){e.uniform1iv(this.addr,t)}function l3(e,t){e.uniform2iv(this.addr,t)}function h3(e,t){e.uniform3iv(this.addr,t)}function u3(e,t){e.uniform4iv(this.addr,t)}function d3(e,t){e.uniform1uiv(this.addr,t)}function f3(e,t){e.uniform2uiv(this.addr,t)}function p3(e,t){e.uniform3uiv(this.addr,t)}function m3(e,t){e.uniform4uiv(this.addr,t)}function g3(e,t,n){const i=this.cache,s=t.length,r=Mu(n,s);An(i,r)||(e.uniform1iv(this.addr,r),Rn(i,r));let a;this.type===e.SAMPLER_2D_SHADOW?a=Wf:a=OM;for(let o=0;o!==s;++o)n.setTexture2D(t[o]||a,r[o])}function x3(e,t,n){const i=this.cache,s=t.length,r=Mu(n,s);An(i,r)||(e.uniform1iv(this.addr,r),Rn(i,r));for(let a=0;a!==s;++a)n.setTexture3D(t[a]||FM,r[a])}function _3(e,t,n){const i=this.cache,s=t.length,r=Mu(n,s);An(i,r)||(e.uniform1iv(this.addr,r),Rn(i,r));for(let a=0;a!==s;++a)n.setTextureCube(t[a]||BM,r[a])}function y3(e,t,n){const i=this.cache,s=t.length,r=Mu(n,s);An(i,r)||(e.uniform1iv(this.addr,r),Rn(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(t[a]||kM,r[a])}function v3(e){switch(e){case 5126:return e3;case 35664:return n3;case 35665:return i3;case 35666:return s3;case 35674:return r3;case 35675:return a3;case 35676:return o3;case 5124:case 35670:return c3;case 35667:case 35671:return l3;case 35668:case 35672:return h3;case 35669:case 35673:return u3;case 5125:return d3;case 36294:return f3;case 36295:return p3;case 36296:return m3;case 35678:case 36198:case 36298:case 36306:case 35682:return g3;case 35679:case 36299:case 36307:return x3;case 35680:case 36300:case 36308:case 36293:return _3;case 36289:case 36303:case 36311:case 36292:return y3}}class M3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=t3(n.type)}}class w3{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=v3(n.type)}}class S3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,n[o.id],i)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function Sg(e,t){e.seq.push(t),e.map[t.id]=t}function b3(e,t,n){const i=e.name,s=i.length;for(pd.lastIndex=0;;){const r=pd.exec(i),a=pd.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Sg(n,l===void 0?new M3(o,e,t):new w3(o,e,t));break}else{let d=n.map[o];d===void 0&&(d=new S3(o),Sg(n,d)),n=d}}}class $c{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(n,a),c=t.getUniformLocation(n,o.name);b3(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,a=n.length;r!==a;++r){const o=n[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in n&&i.push(a)}return i}}function bg(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const E3=37297;let T3=0;function A3(e,t){const n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Eg=new ge;function R3(e){Pe._getMatrix(Eg,Pe.workingColorSpace,e);const t=`mat3( ${Eg.elements.map(n=>n.toFixed(4))} )`;switch(Pe.getTransfer(e)){case ao:return[t,"LinearTransferOETF"];case Ze:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Tg(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+A3(e.getShaderSource(t),o)}else return r}function C3(e,t){const n=R3(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const P3={[jh]:"Linear",[Kh]:"Reinhard",[Jh]:"Cineon",[Po]:"ACESFilmic",[tu]:"AgX",[eu]:"Neutral",[Qh]:"Custom"};function I3(e,t){const n=P3[t];return n===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const ac=new B;function D3(){Pe.getLuminanceCoefficients(ac);const e=ac.x.toFixed(4),t=ac.y.toFixed(4),n=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z3(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function L3(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function N3(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(t,s),a=r.name;let o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Va(e){return e!==""}function Ag(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rg(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const U3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(e){return e.replace(U3,k3)}const O3=new Map;function k3(e,t){let n=Ee[t];if(n===void 0){const i=O3.get(t);if(i!==void 0)n=Ee[i],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Xf(n)}const F3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cg(e){return e.replace(F3,B3)}function B3(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pg(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const H3={[Ya]:"SHADOWMAP_TYPE_PCF",[ea]:"SHADOWMAP_TYPE_VSM"};function G3(e){return H3[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const V3={[Xs]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function $3(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":V3[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const W3={[_r]:"ENVMAP_MODE_REFRACTION"};function X3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":W3[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Y3={[D0]:"ENVMAP_BLENDING_MULTIPLY",[Vv]:"ENVMAP_BLENDING_MIX",[$v]:"ENVMAP_BLENDING_ADD"};function q3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Y3[e.combine]||"ENVMAP_BLENDING_NONE"}function Z3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function j3(e,t,n,i){const s=e.getContext(),r=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=G3(n),l=$3(n),u=X3(n),d=q3(n),h=Z3(n),f=z3(n),x=L3(r),y=s.createProgram();let g,p,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Va).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Va).join(`
`),p.length>0&&(p+=`
`)):(g=[Pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),p=[Pg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?Ee.tonemapping_pars_fragment:"",n.toneMapping!==Yi?I3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,C3("linearToOutputTexel",n.outputColorSpace),D3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Va).join(`
`)),a=Xf(a),a=Ag(a,n),a=Rg(a,n),o=Xf(o),o=Ag(o,n),o=Rg(o,n),a=Cg(a),o=Cg(o),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+g+a,m=w+p+o,M=bg(s,s.VERTEX_SHADER,S),v=bg(s,s.FRAGMENT_SHADER,m);s.attachShader(y,M),s.attachShader(y,v),n.index0AttributeName!==void 0?s.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(P){if(e.debug.checkShaderErrors){const T=s.getProgramInfoLog(y)||"",O=s.getShaderInfoLog(M)||"",k=s.getShaderInfoLog(v)||"",U=T.trim(),$=O.trim(),W=k.trim();let Y=!0,tt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Y=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,y,M,v);else{const q=Tg(s,M,"vertex"),ht=Tg(s,v,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+q+`
`+ht)}else U!==""?ue("WebGLProgram: Program Info Log:",U):($===""||W==="")&&(tt=!1);tt&&(P.diagnostics={runnable:Y,programLog:U,vertexShader:{log:$,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(M),s.deleteShader(v),_=new $c(s,y),E=N3(s,y)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,E3)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=T3++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=v,this}let K3=0;class J3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){const s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new Q3(t),n.set(t,i)),i}}class Q3{constructor(t){this.id=K3++,this.code=t,this.usedTimes=0}}function tA(e){return e===Ys||e===io||e===so}function eA(e,t,n,i,s,r){const a=new du,o=new J3,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,E,C,P,T,O){const k=P.fog,U=T.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=t.get(_.envMap||$,W),tt=Y&&Y.mapping===Io?Y.image.height:null,q=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&ue("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const ht=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,nt=ht!==void 0?ht.length:0;let Lt=0;U.morphAttributes.position!==void 0&&(Lt=1),U.morphAttributes.normal!==void 0&&(Lt=2),U.morphAttributes.color!==void 0&&(Lt=3);let Qt,Ut,V,ot;if(q){const Zt=$i[q];Qt=Zt.vertexShader,Ut=Zt.fragmentShader}else{Qt=_.vertexShader,Ut=_.fragmentShader;const Zt=o.getVertexShaderStage(_),Je=o.getFragmentShaderStage(_);o.update(_,Zt,Je),V=Zt.id,ot=Je.id}const at=e.getRenderTarget(),Rt=e.state.buffers.depth.getReversed(),Ht=T.isInstancedMesh===!0,Vt=T.isBatchedMesh===!0,he=!!_.map,$t=!!_.matcap,oe=!!Y,_e=!!_.aoMap,me=!!_.lightMap,Ne=!!_.bumpMap&&_.wireframe===!1,ve=!!_.normalMap,Xe=!!_.displacementMap,Ke=!!_.emissiveMap,Ye=!!_.metalnessMap,Ve=!!_.roughnessMap,F=_.anisotropy>0,yn=_.clearcoat>0,Re=_.dispersion>0,D=_.iridescence>0,b=_.sheen>0,Z=_.transmission>0,Q=F&&!!_.anisotropyMap,st=yn&&!!_.clearcoatMap,wt=yn&&!!_.clearcoatNormalMap,vt=yn&&!!_.clearcoatRoughnessMap,it=D&&!!_.iridescenceMap,lt=D&&!!_.iridescenceThicknessMap,Ct=b&&!!_.sheenColorMap,te=b&&!!_.sheenRoughnessMap,Pt=!!_.specularMap,zt=!!_.specularColorMap,Xt=!!_.specularIntensityMap,ae=Z&&!!_.transmissionMap,fe=Z&&!!_.thicknessMap,H=!!_.gradientMap,It=!!_.alphaMap,rt=_.alphaTest>0,_t=!!_.alphaHash,Tt=!!_.extensions;let ft=Yi;_.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ft=e.toneMapping);const Jt={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Qt,fragmentShader:Ut,defines:_.defines,customVertexShaderID:V,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Vt,batchingColor:Vt&&T._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&T.instanceColor!==null,instancingMorph:Ht&&T.morphTexture!==null,outputColorSpace:at===null?e.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Pe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:he,matcap:$t,envMap:oe,envMapMode:oe&&Y.mapping,envMapCubeUVHeight:tt,aoMap:_e,lightMap:me,bumpMap:Ne,normalMap:ve,displacementMap:Xe,emissiveMap:Ke,normalMapObjectSpace:ve&&_.normalMapType===Yv,normalMapTangentSpace:ve&&_.normalMapType===Eh,packedNormalMap:ve&&_.normalMapType===Eh&&tA(_.normalMap.format),metalnessMap:Ye,roughnessMap:Ve,anisotropy:F,anisotropyMap:Q,clearcoat:yn,clearcoatMap:st,clearcoatNormalMap:wt,clearcoatRoughnessMap:vt,dispersion:Re,iridescence:D,iridescenceMap:it,iridescenceThicknessMap:lt,sheen:b,sheenColorMap:Ct,sheenRoughnessMap:te,specularMap:Pt,specularColorMap:zt,specularIntensityMap:Xt,transmission:Z,transmissionMap:ae,thicknessMap:fe,gradientMap:H,opaque:_.transparent===!1&&_.blending===fr&&_.alphaToCoverage===!1,alphaMap:It,alphaTest:rt,alphaHash:_t,combine:_.combine,mapUv:he&&x(_.map.channel),aoMapUv:_e&&x(_.aoMap.channel),lightMapUv:me&&x(_.lightMap.channel),bumpMapUv:Ne&&x(_.bumpMap.channel),normalMapUv:ve&&x(_.normalMap.channel),displacementMapUv:Xe&&x(_.displacementMap.channel),emissiveMapUv:Ke&&x(_.emissiveMap.channel),metalnessMapUv:Ye&&x(_.metalnessMap.channel),roughnessMapUv:Ve&&x(_.roughnessMap.channel),anisotropyMapUv:Q&&x(_.anisotropyMap.channel),clearcoatMapUv:st&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:wt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:te&&x(_.sheenRoughnessMap.channel),specularMapUv:Pt&&x(_.specularMap.channel),specularColorMapUv:zt&&x(_.specularColorMap.channel),specularIntensityMapUv:Xt&&x(_.specularIntensityMap.channel),transmissionMapUv:ae&&x(_.transmissionMap.channel),thicknessMapUv:fe&&x(_.thicknessMap.channel),alphaMapUv:It&&x(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ve||F),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!U.attributes.uv&&(he||It),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&ve===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Rt,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Lt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:ft,decodeVideoTexture:he&&_.map.isVideoTexture===!0&&Pe.getTransfer(_.map.colorSpace)===Ze,decodeVideoTextureEmissive:Ke&&_.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(_.emissiveMap.colorSpace)===Ze,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===xe,flipSided:_.side===Jn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Tt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&_.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function g(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(E,_),w(E,_),E.push(e.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function w(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){const E=f[_.type];let C;if(E){const P=$i[E];C=fa.clone(P.uniforms)}else C=_.uniforms;return C}function m(_,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new j3(e,E,_,s),l.push(C),u.set(E,C)),C}function M(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function v(_){o.remove(_)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:S,acquireProgram:m,releaseProgram:M,releaseShaderCache:v,programs:l,dispose:A}}function nA(){let e=new WeakMap;function t(a){return e.has(a)}function n(a){let o=e.get(a);return o===void 0&&(o={},e.set(a,o)),o}function i(a){e.delete(a)}function s(a,o,c){e.get(a)[o]=c}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function iA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Ig(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Dg(){const e=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,x,y,g,p){let w=e[t];return w===void 0?(w={id:h.id,object:h,geometry:f,material:x,materialVariant:a(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:p},e[t]=w):(w.id=h.id,w.object=h,w.geometry=f,w.material=x,w.materialVariant=a(h),w.groupOrder=y,w.renderOrder=h.renderOrder,w.z=g,w.group=p),t++,w}function c(h,f,x,y,g,p){const w=o(h,f,x,y,g,p);x.transmission>0?i.push(w):x.transparent===!0?s.push(w):n.push(w)}function l(h,f,x,y,g,p){const w=o(h,f,x,y,g,p);x.transmission>0?i.unshift(w):x.transparent===!0?s.unshift(w):n.unshift(w)}function u(h,f,x){n.length>1&&n.sort(h||iA),i.length>1&&i.sort(f||Ig),s.length>1&&s.sort(f||Ig),x&&(n.reverse(),i.reverse(),s.reverse())}function d(){for(let h=t,f=e.length;h<f;h++){const x=e[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function sA(){let e=new WeakMap;function t(i,s){const r=e.get(i);let a;return r===void 0?(a=new Dg,e.set(i,[a])):s>=r.length?(a=new Dg,r.push(a)):a=r[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function rA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new se};break;case"SpotLight":n={position:new B,direction:new B,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new se,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new se,groundColor:new se};break;case"RectAreaLight":n={color:new se,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function aA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let oA=0;function cA(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function lA(e){const t=new rA,n=aA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const s=new B,r=new tn,a=new tn;function o(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,x=0,y=0,g=0,p=0,w=0,S=0,m=0,M=0,v=0,A=0;l.sort(cA);for(let E=0,C=l.length;E<C;E++){const P=l[E],T=P.color,O=P.intensity,k=P.distance;let U=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ys?U=P.shadow.map.texture:U=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=T.r*O,d+=T.g*O,h+=T.b*O;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],O);A++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,Y=n.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=U,i.directionalShadowMatrix[f]=P.shadow.matrix,w++}i.directional[f]=$,f++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(T).multiplyScalar(O),$.distance=k,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[y]=$;const W=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,W.updateMatrices(P),P.castShadow&&v++),i.spotLightMatrix[y]=W.matrix,P.castShadow){const Y=n.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.spotShadow[y]=Y,i.spotShadowMap[y]=U,m++}y++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(T).multiplyScalar(O),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=$,g++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const W=P.shadow,Y=n.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,i.pointShadow[x]=Y,i.pointShadowMap[x]=U,i.pointShadowMatrix[x]=P.shadow.matrix,S++}i.point[x]=$,x++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(O),$.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=$,p++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Wt.LTC_FLOAT_1,i.rectAreaLTC2=Wt.LTC_FLOAT_2):(i.rectAreaLTC1=Wt.LTC_HALF_1,i.rectAreaLTC2=Wt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==f||_.pointLength!==x||_.spotLength!==y||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==w||_.numPointShadows!==S||_.numSpotShadows!==m||_.numSpotMaps!==M||_.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=g,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=m,i.spotShadowMap.length=m,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=m+M-v,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=v,i.numLightProbes=A,_.directionalLength=f,_.pointLength=x,_.spotLength=y,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=w,_.numPointShadows=S,_.numSpotShadows=m,_.numSpotMaps=M,_.numLightProbes=A,i.version=oA++)}function c(l,u){let d=0,h=0,f=0,x=0,y=0;const g=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const S=l[p];if(S.isDirectionalLight){const m=i.directional[d];m.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(g),d++}else if(S.isSpotLight){const m=i.spot[f];m.position.setFromMatrixPosition(S.matrixWorld),m.position.applyMatrix4(g),m.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(g),f++}else if(S.isRectAreaLight){const m=i.rectArea[x];m.position.setFromMatrixPosition(S.matrixWorld),m.position.applyMatrix4(g),a.identity(),r.copy(S.matrixWorld),r.premultiply(g),a.extractRotation(r),m.halfWidth.set(S.width*.5,0,0),m.halfHeight.set(0,S.height*.5,0),m.halfWidth.applyMatrix4(a),m.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const m=i.point[h];m.position.setFromMatrixPosition(S.matrixWorld),m.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){const m=i.hemi[y];m.direction.setFromMatrixPosition(S.matrixWorld),m.direction.transformDirection(g),y++}}}return{setup:o,setupView:c,state:i}}function zg(e){const t=new lA(e),n=[],i=[],s=[];function r(h){d.camera=h,n.length=0,i.length=0,s.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(n)}function u(h){t.setupView(n,h)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function hA(e){let t=new WeakMap;function n(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new zg(e),t.set(s,[o])):r>=a.length?(o=new zg(e),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:n,dispose:i}}const uA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dA=`uniform sampler2D shadow_pass;
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
}`,fA=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],pA=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],Lg=new tn,za=new B,md=new B;function mA(e,t,n){let i=new pu;const s=new xt,r=new xt,a=new pn,o=new SM,c=new bM,l={},u=n.maxTextureSize,d={[Es]:Jn,[Jn]:Es,[xe]:xe},h=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:uA,fragmentShader:dA}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const x=new bn;x.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new gt(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let p=this.type;this.render=function(v,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;this.type===I0&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ya);const E=e.getRenderTarget(),C=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),T=e.state;T.setBlending(Xi),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const O=p!==this.type;O&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(U=>U.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,U=v.length;k<U;k++){const $=v[k],W=$.shadow;if(W===void 0){ue("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Y=W.getFrameExtents();s.multiply(Y),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,W.mapSize.y=r.y));const tt=e.state.buffers.depth.getReversed();if(W.camera._reversedDepth=tt,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ea){if($.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ri(s.x,s.y,{format:Ys,type:xi,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new yr(s.x,s.y,Di),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=os,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn}else $.isPointLight?(W.map=new K0(s.x),W.map.depthTexture=new lM(s.x,qi)):(W.map=new ri(s.x,s.y),W.map.depthTexture=new yr(s.x,s.y,qi)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=os,this.type===Ya?(W.map.depthTexture.compareFunction=tt?hu:lu,W.map.depthTexture.minFilter=Gn,W.map.depthTexture.magFilter=Gn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn);W.camera.updateProjectionMatrix()}const q=W.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<q;ht++){if(W.map.isWebGLCubeRenderTarget)e.setRenderTarget(W.map,ht),e.clear();else{ht===0&&(e.setRenderTarget(W.map),e.clear());const nt=W.getViewport(ht);a.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),T.viewport(a)}if($.isPointLight){const nt=W.camera,Lt=W.matrix,Qt=$.distance||nt.far;Qt!==nt.far&&(nt.far=Qt,nt.updateProjectionMatrix()),za.setFromMatrixPosition($.matrixWorld),nt.position.copy(za),md.copy(nt.position),md.add(fA[ht]),nt.up.copy(pA[ht]),nt.lookAt(md),nt.updateMatrixWorld(),Lt.makeTranslation(-za.x,-za.y,-za.z),Lg.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Lg,nt.coordinateSystem,nt.reversedDepth)}else W.updateMatrices($);i=W.getFrustum(),m(A,_,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===ea&&w(W,_),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,e.setRenderTarget(E,C,P)};function w(v,A){const _=t.update(y);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ri(s.x,s.y,{format:Ys,type:xi})),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,e.setRenderTarget(v.mapPass),e.clear(),e.renderBufferDirect(A,null,_,h,y,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,e.setRenderTarget(v.map),e.clear(),e.renderBufferDirect(A,null,_,f,y,null)}function S(v,A,_,E){let C=null;const P=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?c:o,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const T=C.uuid,O=A.uuid;let k=l[T];k===void 0&&(k={},l[T]=k);let U=k[O];U===void 0&&(U=C.clone(),k[O]=U,A.addEventListener("dispose",M)),C=U}if(C.visible=A.visible,C.wireframe=A.wireframe,E===ea?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const T=e.properties.get(C);T.light=_}return C}function m(v,A,_,E,C){if(v.visible===!1)return;if(v.layers.test(A.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===ea)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,v.matrixWorld);const O=t.update(v),k=v.material;if(Array.isArray(k)){const U=O.groups;for(let $=0,W=U.length;$<W;$++){const Y=U[$],tt=k[Y.materialIndex];if(tt&&tt.visible){const q=S(v,tt,E,C);v.onBeforeShadow(e,v,A,_,O,q,Y),e.renderBufferDirect(_,null,O,q,v,Y),v.onAfterShadow(e,v,A,_,O,q,Y)}}}else if(k.visible){const U=S(v,k,E,C);v.onBeforeShadow(e,v,A,_,O,U,null),e.renderBufferDirect(_,null,O,U,v,null),v.onAfterShadow(e,v,A,_,O,U,null)}}const T=v.children;for(let O=0,k=T.length;O<k;O++)m(T[O],A,_,E,C)}function M(v){v.target.removeEventListener("dispose",M);for(const _ in l){const E=l[_],C=v.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function gA(e,t){function n(){let H=!1;const It=new pn;let rt=null;const _t=new pn(0,0,0,0);return{setMask:function(Tt){rt!==Tt&&!H&&(e.colorMask(Tt,Tt,Tt,Tt),rt=Tt)},setLocked:function(Tt){H=Tt},setClear:function(Tt,ft,Jt,Zt,Je){Je===!0&&(Tt*=Zt,ft*=Zt,Jt*=Zt),It.set(Tt,ft,Jt,Zt),_t.equals(It)===!1&&(e.clearColor(Tt,ft,Jt,Zt),_t.copy(It))},reset:function(){H=!1,rt=null,_t.set(-1,0,0,0)}}}function i(){let H=!1,It=!1,rt=null,_t=null,Tt=null;return{setReversed:function(ft){if(It!==ft){const Jt=t.get("EXT_clip_control");ft?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),It=ft;const Zt=Tt;Tt=null,this.setClear(Zt)}},getReversed:function(){return It},setTest:function(ft){ft?at(e.DEPTH_TEST):Rt(e.DEPTH_TEST)},setMask:function(ft){rt!==ft&&!H&&(e.depthMask(ft),rt=ft)},setFunc:function(ft){if(It&&(ft=rS[ft]),_t!==ft){switch(ft){case Bl:e.depthFunc(e.NEVER);break;case Hl:e.depthFunc(e.ALWAYS);break;case Gl:e.depthFunc(e.LESS);break;case xr:e.depthFunc(e.LEQUAL);break;case Vl:e.depthFunc(e.EQUAL);break;case $l:e.depthFunc(e.GEQUAL);break;case Wl:e.depthFunc(e.GREATER);break;case Xl:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}_t=ft}},setLocked:function(ft){H=ft},setClear:function(ft){Tt!==ft&&(Tt=ft,It&&(ft=1-ft),e.clearDepth(ft))},reset:function(){H=!1,rt=null,_t=null,Tt=null,It=!1}}}function s(){let H=!1,It=null,rt=null,_t=null,Tt=null,ft=null,Jt=null,Zt=null,Je=null;return{setTest:function(He){H||(He?at(e.STENCIL_TEST):Rt(e.STENCIL_TEST))},setMask:function(He){It!==He&&!H&&(e.stencilMask(He),It=He)},setFunc:function(He,kn,$n){(rt!==He||_t!==kn||Tt!==$n)&&(e.stencilFunc(He,kn,$n),rt=He,_t=kn,Tt=$n)},setOp:function(He,kn,$n){(ft!==He||Jt!==kn||Zt!==$n)&&(e.stencilOp(He,kn,$n),ft=He,Jt=kn,Zt=$n)},setLocked:function(He){H=He},setClear:function(He){Je!==He&&(e.clearStencil(He),Je=He)},reset:function(){H=!1,It=null,rt=null,_t=null,Tt=null,ft=null,Jt=null,Zt=null,Je=null}}}const r=new n,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,x=[],y=null,g=!1,p=null,w=null,S=null,m=null,M=null,v=null,A=null,_=new se(0,0,0),E=0,C=!1,P=null,T=null,O=null,k=null,U=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const tt=e.getParameter(e.VERSION);tt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(tt)[1]),W=Y>=1):tt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),W=Y>=2);let q=null,ht={};const nt=e.getParameter(e.SCISSOR_BOX),Lt=e.getParameter(e.VIEWPORT),Qt=new pn().fromArray(nt),Ut=new pn().fromArray(Lt);function V(H,It,rt,_t){const Tt=new Uint8Array(4),ft=e.createTexture();e.bindTexture(H,ft),e.texParameteri(H,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(H,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Jt=0;Jt<rt;Jt++)H===e.TEXTURE_3D||H===e.TEXTURE_2D_ARRAY?e.texImage3D(It,0,e.RGBA,1,1,_t,0,e.RGBA,e.UNSIGNED_BYTE,Tt):e.texImage2D(It+Jt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Tt);return ft}const ot={};ot[e.TEXTURE_2D]=V(e.TEXTURE_2D,e.TEXTURE_2D,1),ot[e.TEXTURE_CUBE_MAP]=V(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[e.TEXTURE_2D_ARRAY]=V(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ot[e.TEXTURE_3D]=V(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),at(e.DEPTH_TEST),a.setFunc(xr),Ne(!1),ve(Nf),at(e.CULL_FACE),_e(Xi);function at(H){u[H]!==!0&&(e.enable(H),u[H]=!0)}function Rt(H){u[H]!==!1&&(e.disable(H),u[H]=!1)}function Ht(H,It){return h[H]!==It?(e.bindFramebuffer(H,It),h[H]=It,H===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=It),H===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=It),!0):!1}function Vt(H,It){let rt=x,_t=!1;if(H){rt=f.get(It),rt===void 0&&(rt=[],f.set(It,rt));const Tt=H.textures;if(rt.length!==Tt.length||rt[0]!==e.COLOR_ATTACHMENT0){for(let ft=0,Jt=Tt.length;ft<Jt;ft++)rt[ft]=e.COLOR_ATTACHMENT0+ft;rt.length=Tt.length,_t=!0}}else rt[0]!==e.BACK&&(rt[0]=e.BACK,_t=!0);_t&&e.drawBuffers(rt)}function he(H){return y!==H?(e.useProgram(H),y=H,!0):!1}const $t={[ks]:e.FUNC_ADD,[Tv]:e.FUNC_SUBTRACT,[Av]:e.FUNC_REVERSE_SUBTRACT};$t[Rv]=e.MIN,$t[Cv]=e.MAX;const oe={[Pv]:e.ZERO,[Iv]:e.ONE,[Dv]:e.SRC_COLOR,[kl]:e.SRC_ALPHA,[kv]:e.SRC_ALPHA_SATURATE,[Uv]:e.DST_COLOR,[Lv]:e.DST_ALPHA,[zv]:e.ONE_MINUS_SRC_COLOR,[Fl]:e.ONE_MINUS_SRC_ALPHA,[Ov]:e.ONE_MINUS_DST_COLOR,[Nv]:e.ONE_MINUS_DST_ALPHA,[Fv]:e.CONSTANT_COLOR,[Bv]:e.ONE_MINUS_CONSTANT_COLOR,[Hv]:e.CONSTANT_ALPHA,[Gv]:e.ONE_MINUS_CONSTANT_ALPHA};function _e(H,It,rt,_t,Tt,ft,Jt,Zt,Je,He){if(H===Xi){g===!0&&(Rt(e.BLEND),g=!1);return}if(g===!1&&(at(e.BLEND),g=!0),H!==Ev){if(H!==p||He!==C){if((w!==ks||M!==ks)&&(e.blendEquation(e.FUNC_ADD),w=ks,M=ks),He)switch(H){case fr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case mn:e.blendFunc(e.ONE,e.ONE);break;case Uf:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Of:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ze("WebGLState: Invalid blending: ",H);break}else switch(H){case fr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case mn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case Uf:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Of:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",H);break}S=null,m=null,v=null,A=null,_.set(0,0,0),E=0,p=H,C=He}return}Tt=Tt||It,ft=ft||rt,Jt=Jt||_t,(It!==w||Tt!==M)&&(e.blendEquationSeparate($t[It],$t[Tt]),w=It,M=Tt),(rt!==S||_t!==m||ft!==v||Jt!==A)&&(e.blendFuncSeparate(oe[rt],oe[_t],oe[ft],oe[Jt]),S=rt,m=_t,v=ft,A=Jt),(Zt.equals(_)===!1||Je!==E)&&(e.blendColor(Zt.r,Zt.g,Zt.b,Je),_.copy(Zt),E=Je),p=H,C=!1}function me(H,It){H.side===xe?Rt(e.CULL_FACE):at(e.CULL_FACE);let rt=H.side===Jn;It&&(rt=!rt),Ne(rt),H.blending===fr&&H.transparent===!1?_e(Xi):_e(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);const _t=H.stencilWrite;o.setTest(_t),_t&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ke(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?at(e.SAMPLE_ALPHA_TO_COVERAGE):Rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(H){P!==H&&(H?e.frontFace(e.CW):e.frontFace(e.CCW),P=H)}function ve(H){H!==Sv?(at(e.CULL_FACE),H!==T&&(H===Nf?e.cullFace(e.BACK):H===bv?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Rt(e.CULL_FACE),T=H}function Xe(H){H!==O&&(W&&e.lineWidth(H),O=H)}function Ke(H,It,rt){H?(at(e.POLYGON_OFFSET_FILL),(k!==It||U!==rt)&&(k=It,U=rt,a.getReversed()&&(It=-It),e.polygonOffset(It,rt))):Rt(e.POLYGON_OFFSET_FILL)}function Ye(H){H?at(e.SCISSOR_TEST):Rt(e.SCISSOR_TEST)}function Ve(H){H===void 0&&(H=e.TEXTURE0+$-1),q!==H&&(e.activeTexture(H),q=H)}function F(H,It,rt){rt===void 0&&(q===null?rt=e.TEXTURE0+$-1:rt=q);let _t=ht[rt];_t===void 0&&(_t={type:void 0,texture:void 0},ht[rt]=_t),(_t.type!==H||_t.texture!==It)&&(q!==rt&&(e.activeTexture(rt),q=rt),e.bindTexture(H,It||ot[H]),_t.type=H,_t.texture=It)}function yn(){const H=ht[q];H!==void 0&&H.type!==void 0&&(e.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Re(){try{e.compressedTexImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function D(){try{e.compressedTexImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function b(){try{e.texSubImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function Z(){try{e.texSubImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function Q(){try{e.compressedTexSubImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function st(){try{e.compressedTexSubImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function wt(){try{e.texStorage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function vt(){try{e.texStorage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function it(){try{e.texImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function lt(){try{e.texImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function Ct(H){return d[H]!==void 0?d[H]:e.getParameter(H)}function te(H,It){d[H]!==It&&(e.pixelStorei(H,It),d[H]=It)}function Pt(H){Qt.equals(H)===!1&&(e.scissor(H.x,H.y,H.z,H.w),Qt.copy(H))}function zt(H){Ut.equals(H)===!1&&(e.viewport(H.x,H.y,H.z,H.w),Ut.copy(H))}function Xt(H,It){let rt=l.get(It);rt===void 0&&(rt=new WeakMap,l.set(It,rt));let _t=rt.get(H);_t===void 0&&(_t=e.getUniformBlockIndex(It,H.name),rt.set(H,_t))}function ae(H,It){const _t=l.get(It).get(H);c.get(It)!==_t&&(e.uniformBlockBinding(It,_t,H.__bindingPointIndex),c.set(It,_t))}function fe(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),a.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},q=null,ht={},h={},f=new WeakMap,x=[],y=null,g=!1,p=null,w=null,S=null,m=null,M=null,v=null,A=null,_=new se(0,0,0),E=0,C=!1,P=null,T=null,O=null,k=null,U=null,Qt.set(0,0,e.canvas.width,e.canvas.height),Ut.set(0,0,e.canvas.width,e.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:at,disable:Rt,bindFramebuffer:Ht,drawBuffers:Vt,useProgram:he,setBlending:_e,setMaterial:me,setFlipSided:Ne,setCullFace:ve,setLineWidth:Xe,setPolygonOffset:Ke,setScissorTest:Ye,activeTexture:Ve,bindTexture:F,unbindTexture:yn,compressedTexImage2D:Re,compressedTexImage3D:D,texImage2D:it,texImage3D:lt,pixelStorei:te,getParameter:Ct,updateUBOMapping:Xt,uniformBlockBinding:ae,texStorage2D:wt,texStorage3D:vt,texSubImage2D:b,texSubImage3D:Z,compressedTexSubImage2D:Q,compressedTexSubImage3D:st,scissor:Pt,viewport:zt,reset:fe}}function xA(e,t,n,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new xt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,b){return x?new OffscreenCanvas(D,b):oo("canvas")}function g(D,b,Z){let Q=1;const st=Re(D);if((st.width>Z||st.height>Z)&&(Q=Z/Math.max(st.width,st.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const wt=Math.floor(Q*st.width),vt=Math.floor(Q*st.height);h===void 0&&(h=y(wt,vt));const it=b?y(wt,vt):h;return it.width=wt,it.height=vt,it.getContext("2d").drawImage(D,0,0,wt,vt),ue("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+wt+"x"+vt+")."),it}else return"data"in D&&ue("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),D;return D}function p(D){return D.generateMipmaps}function w(D){e.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?e.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function m(D,b,Z,Q,st,wt=!1){if(D!==null){if(e[D]!==void 0)return e[D];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let vt;Q&&(vt=t.get("EXT_texture_norm16"),vt||ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=b;if(b===e.RED&&(Z===e.FLOAT&&(it=e.R32F),Z===e.HALF_FLOAT&&(it=e.R16F),Z===e.UNSIGNED_BYTE&&(it=e.R8),Z===e.UNSIGNED_SHORT&&vt&&(it=vt.R16_EXT),Z===e.SHORT&&vt&&(it=vt.R16_SNORM_EXT)),b===e.RED_INTEGER&&(Z===e.UNSIGNED_BYTE&&(it=e.R8UI),Z===e.UNSIGNED_SHORT&&(it=e.R16UI),Z===e.UNSIGNED_INT&&(it=e.R32UI),Z===e.BYTE&&(it=e.R8I),Z===e.SHORT&&(it=e.R16I),Z===e.INT&&(it=e.R32I)),b===e.RG&&(Z===e.FLOAT&&(it=e.RG32F),Z===e.HALF_FLOAT&&(it=e.RG16F),Z===e.UNSIGNED_BYTE&&(it=e.RG8),Z===e.UNSIGNED_SHORT&&vt&&(it=vt.RG16_EXT),Z===e.SHORT&&vt&&(it=vt.RG16_SNORM_EXT)),b===e.RG_INTEGER&&(Z===e.UNSIGNED_BYTE&&(it=e.RG8UI),Z===e.UNSIGNED_SHORT&&(it=e.RG16UI),Z===e.UNSIGNED_INT&&(it=e.RG32UI),Z===e.BYTE&&(it=e.RG8I),Z===e.SHORT&&(it=e.RG16I),Z===e.INT&&(it=e.RG32I)),b===e.RGB_INTEGER&&(Z===e.UNSIGNED_BYTE&&(it=e.RGB8UI),Z===e.UNSIGNED_SHORT&&(it=e.RGB16UI),Z===e.UNSIGNED_INT&&(it=e.RGB32UI),Z===e.BYTE&&(it=e.RGB8I),Z===e.SHORT&&(it=e.RGB16I),Z===e.INT&&(it=e.RGB32I)),b===e.RGBA_INTEGER&&(Z===e.UNSIGNED_BYTE&&(it=e.RGBA8UI),Z===e.UNSIGNED_SHORT&&(it=e.RGBA16UI),Z===e.UNSIGNED_INT&&(it=e.RGBA32UI),Z===e.BYTE&&(it=e.RGBA8I),Z===e.SHORT&&(it=e.RGBA16I),Z===e.INT&&(it=e.RGBA32I)),b===e.RGB&&(Z===e.UNSIGNED_SHORT&&vt&&(it=vt.RGB16_EXT),Z===e.SHORT&&vt&&(it=vt.RGB16_SNORM_EXT),Z===e.UNSIGNED_INT_5_9_9_9_REV&&(it=e.RGB9_E5),Z===e.UNSIGNED_INT_10F_11F_11F_REV&&(it=e.R11F_G11F_B10F)),b===e.RGBA){const lt=wt?ao:Pe.getTransfer(st);Z===e.FLOAT&&(it=e.RGBA32F),Z===e.HALF_FLOAT&&(it=e.RGBA16F),Z===e.UNSIGNED_BYTE&&(it=lt===Ze?e.SRGB8_ALPHA8:e.RGBA8),Z===e.UNSIGNED_SHORT&&vt&&(it=vt.RGBA16_EXT),Z===e.SHORT&&vt&&(it=vt.RGBA16_SNORM_EXT),Z===e.UNSIGNED_SHORT_4_4_4_4&&(it=e.RGBA4),Z===e.UNSIGNED_SHORT_5_5_5_1&&(it=e.RGB5_A1)}return(it===e.R16F||it===e.R32F||it===e.RG16F||it===e.RG32F||it===e.RGBA16F||it===e.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function M(D,b){let Z;return D?b===null||b===qi||b===ha?Z=e.DEPTH24_STENCIL8:b===Di?Z=e.DEPTH32F_STENCIL8:b===la&&(Z=e.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qi||b===ha?Z=e.DEPTH_COMPONENT24:b===Di?Z=e.DEPTH_COMPONENT32F:b===la&&(Z=e.DEPTH_COMPONENT16),Z}function v(D,b){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Nn&&D.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function A(D){const b=D.target;b.removeEventListener("dispose",A),E(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&d.delete(b)}function _(D){const b=D.target;b.removeEventListener("dispose",_),P(b)}function E(D){const b=i.get(D);if(b.__webglInit===void 0)return;const Z=D.source,Q=f.get(Z);if(Q){const st=Q[b.__cacheKey];st.usedTimes--,st.usedTimes===0&&C(D),Object.keys(Q).length===0&&f.delete(Z)}i.remove(D)}function C(D){const b=i.get(D);e.deleteTexture(b.__webglTexture);const Z=D.source,Q=f.get(Z);delete Q[b.__cacheKey],a.memory.textures--}function P(D){const b=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let st=0;st<b.__webglFramebuffer[Q].length;st++)e.deleteFramebuffer(b.__webglFramebuffer[Q][st]);else e.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)e.deleteFramebuffer(b.__webglFramebuffer[Q]);else e.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&e.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&e.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&e.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=D.textures;for(let Q=0,st=Z.length;Q<st;Q++){const wt=i.get(Z[Q]);wt.__webglTexture&&(e.deleteTexture(wt.__webglTexture),a.memory.textures--),i.remove(Z[Q])}i.remove(D)}let T=0;function O(){T=0}function k(){return T}function U(D){T=D}function $(){const D=T;return D>=s.maxTextures&&ue("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),T+=1,D}function W(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function Y(D,b){const Z=i.get(D);if(D.isVideoTexture&&F(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Z.__version!==D.version){const Q=D.image;if(Q===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(Z,D,b);return}}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,Z.__webglTexture,e.TEXTURE0+b)}function tt(D,b){const Z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){Rt(Z,D,b);return}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,Z.__webglTexture,e.TEXTURE0+b)}function q(D,b){const Z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){Rt(Z,D,b);return}n.bindTexture(e.TEXTURE_3D,Z.__webglTexture,e.TEXTURE0+b)}function ht(D,b){const Z=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Z.__version!==D.version){Ht(Z,D,b);return}n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture,e.TEXTURE0+b)}const nt={[Yl]:e.REPEAT,[rs]:e.CLAMP_TO_EDGE,[ql]:e.MIRRORED_REPEAT},Lt={[Nn]:e.NEAREST,[Wv]:e.NEAREST_MIPMAP_NEAREST,[Ga]:e.NEAREST_MIPMAP_LINEAR,[Gn]:e.LINEAR,[Fc]:e.LINEAR_MIPMAP_NEAREST,[Fs]:e.LINEAR_MIPMAP_LINEAR},Qt={[qv]:e.NEVER,[Qv]:e.ALWAYS,[Zv]:e.LESS,[lu]:e.LEQUAL,[jv]:e.EQUAL,[hu]:e.GEQUAL,[Kv]:e.GREATER,[Jv]:e.NOTEQUAL};function Ut(D,b){if(b.type===Di&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Gn||b.magFilter===Fc||b.magFilter===Ga||b.magFilter===Fs||b.minFilter===Gn||b.minFilter===Fc||b.minFilter===Ga||b.minFilter===Fs)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(D,e.TEXTURE_WRAP_S,nt[b.wrapS]),e.texParameteri(D,e.TEXTURE_WRAP_T,nt[b.wrapT]),(D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY)&&e.texParameteri(D,e.TEXTURE_WRAP_R,nt[b.wrapR]),e.texParameteri(D,e.TEXTURE_MAG_FILTER,Lt[b.magFilter]),e.texParameteri(D,e.TEXTURE_MIN_FILTER,Lt[b.minFilter]),b.compareFunction&&(e.texParameteri(D,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(D,e.TEXTURE_COMPARE_FUNC,Qt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==Ga&&b.minFilter!==Fs||b.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function V(D,b){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",A));const Q=b.source;let st=f.get(Q);st===void 0&&(st={},f.set(Q,st));const wt=W(b);if(wt!==D.__cacheKey){st[wt]===void 0&&(st[wt]={texture:e.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),st[wt].usedTimes++;const vt=st[D.__cacheKey];vt!==void 0&&(st[D.__cacheKey].usedTimes--,vt.usedTimes===0&&C(b)),D.__cacheKey=wt,D.__webglTexture=st[wt].texture}return Z}function ot(D,b,Z){return Math.floor(Math.floor(D/Z)/b)}function at(D,b,Z,Q){const wt=D.updateRanges;if(wt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,b.width,b.height,Z,Q,b.data);else{wt.sort((te,Pt)=>te.start-Pt.start);let vt=0;for(let te=1;te<wt.length;te++){const Pt=wt[vt],zt=wt[te],Xt=Pt.start+Pt.count,ae=ot(zt.start,b.width,4),fe=ot(Pt.start,b.width,4);zt.start<=Xt+1&&ae===fe&&ot(zt.start+zt.count-1,b.width,4)===ae?Pt.count=Math.max(Pt.count,zt.start+zt.count-Pt.start):(++vt,wt[vt]=zt)}wt.length=vt+1;const it=n.getParameter(e.UNPACK_ROW_LENGTH),lt=n.getParameter(e.UNPACK_SKIP_PIXELS),Ct=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,b.width);for(let te=0,Pt=wt.length;te<Pt;te++){const zt=wt[te],Xt=Math.floor(zt.start/4),ae=Math.ceil(zt.count/4),fe=Xt%b.width,H=Math.floor(Xt/b.width),It=ae,rt=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,fe),n.pixelStorei(e.UNPACK_SKIP_ROWS,H),n.texSubImage2D(e.TEXTURE_2D,0,fe,H,It,rt,Z,Q,b.data)}D.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,it),n.pixelStorei(e.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(e.UNPACK_SKIP_ROWS,Ct)}}function Rt(D,b,Z){let Q=e.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=e.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=e.TEXTURE_3D);const st=V(D,b),wt=b.source;n.bindTexture(Q,D.__webglTexture,e.TEXTURE0+Z);const vt=i.get(wt);if(wt.version!==vt.__version||st===!0){if(n.activeTexture(e.TEXTURE0+Z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const rt=Pe.getPrimaries(Pe.workingColorSpace),_t=b.colorSpace===Ms?null:Pe.getPrimaries(b.colorSpace),Tt=b.colorSpace===Ms||rt===_t?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}n.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment);let lt=g(b.image,!1,s.maxTextureSize);lt=yn(b,lt);const Ct=r.convert(b.format,b.colorSpace),te=r.convert(b.type);let Pt=m(b.internalFormat,Ct,te,b.normalized,b.colorSpace,b.isVideoTexture);Ut(Q,b);let zt;const Xt=b.mipmaps,ae=b.isVideoTexture!==!0,fe=vt.__version===void 0||st===!0,H=wt.dataReady,It=v(b,lt);if(b.isDepthTexture)Pt=M(b.format===Bs,b.type),fe&&(ae?n.texStorage2D(e.TEXTURE_2D,1,Pt,lt.width,lt.height):n.texImage2D(e.TEXTURE_2D,0,Pt,lt.width,lt.height,0,Ct,te,null));else if(b.isDataTexture)if(Xt.length>0){ae&&fe&&n.texStorage2D(e.TEXTURE_2D,It,Pt,Xt[0].width,Xt[0].height);for(let rt=0,_t=Xt.length;rt<_t;rt++)zt=Xt[rt],ae?H&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,zt.width,zt.height,Ct,te,zt.data):n.texImage2D(e.TEXTURE_2D,rt,Pt,zt.width,zt.height,0,Ct,te,zt.data);b.generateMipmaps=!1}else ae?(fe&&n.texStorage2D(e.TEXTURE_2D,It,Pt,lt.width,lt.height),H&&at(b,lt,Ct,te)):n.texImage2D(e.TEXTURE_2D,0,Pt,lt.width,lt.height,0,Ct,te,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ae&&fe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,It,Pt,Xt[0].width,Xt[0].height,lt.depth);for(let rt=0,_t=Xt.length;rt<_t;rt++)if(zt=Xt[rt],b.format!==zi)if(Ct!==null)if(ae){if(H)if(b.layerUpdates.size>0){const Tt=dg(zt.width,zt.height,b.format,b.type);for(const ft of b.layerUpdates){const Jt=zt.data.subarray(ft*Tt/zt.data.BYTES_PER_ELEMENT,(ft+1)*Tt/zt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,ft,zt.width,zt.height,1,Ct,Jt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,0,zt.width,zt.height,lt.depth,Ct,zt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,rt,Pt,zt.width,zt.height,lt.depth,0,zt.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?H&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,0,zt.width,zt.height,lt.depth,Ct,te,zt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,rt,Pt,zt.width,zt.height,lt.depth,0,Ct,te,zt.data)}else{ae&&fe&&n.texStorage2D(e.TEXTURE_2D,It,Pt,Xt[0].width,Xt[0].height);for(let rt=0,_t=Xt.length;rt<_t;rt++)zt=Xt[rt],b.format!==zi?Ct!==null?ae?H&&n.compressedTexSubImage2D(e.TEXTURE_2D,rt,0,0,zt.width,zt.height,Ct,zt.data):n.compressedTexImage2D(e.TEXTURE_2D,rt,Pt,zt.width,zt.height,0,zt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?H&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,zt.width,zt.height,Ct,te,zt.data):n.texImage2D(e.TEXTURE_2D,rt,Pt,zt.width,zt.height,0,Ct,te,zt.data)}else if(b.isDataArrayTexture)if(ae){if(fe&&n.texStorage3D(e.TEXTURE_2D_ARRAY,It,Pt,lt.width,lt.height,lt.depth),H)if(b.layerUpdates.size>0){const rt=dg(lt.width,lt.height,b.format,b.type);for(const _t of b.layerUpdates){const Tt=lt.data.subarray(_t*rt/lt.data.BYTES_PER_ELEMENT,(_t+1)*rt/lt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,_t,lt.width,lt.height,1,Ct,te,Tt)}b.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Ct,te,lt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Pt,lt.width,lt.height,lt.depth,0,Ct,te,lt.data);else if(b.isData3DTexture)ae?(fe&&n.texStorage3D(e.TEXTURE_3D,It,Pt,lt.width,lt.height,lt.depth),H&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Ct,te,lt.data)):n.texImage3D(e.TEXTURE_3D,0,Pt,lt.width,lt.height,lt.depth,0,Ct,te,lt.data);else if(b.isFramebufferTexture){if(fe)if(ae)n.texStorage2D(e.TEXTURE_2D,It,Pt,lt.width,lt.height);else{let rt=lt.width,_t=lt.height;for(let Tt=0;Tt<It;Tt++)n.texImage2D(e.TEXTURE_2D,Tt,Pt,rt,_t,0,Ct,te,null),rt>>=1,_t>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in e){const rt=e.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),lt.parentNode!==rt){rt.appendChild(lt),d.add(b),rt.onpaint=_t=>{const Tt=_t.changedElements;for(const ft of d)Tt.includes(ft.image)&&(ft.needsUpdate=!0)},rt.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,lt);else{const Tt=e.RGBA,ft=e.RGBA,Jt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Tt,ft,Jt,lt)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(ae&&fe){const rt=Re(Xt[0]);n.texStorage2D(e.TEXTURE_2D,It,Pt,rt.width,rt.height)}for(let rt=0,_t=Xt.length;rt<_t;rt++)zt=Xt[rt],ae?H&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,Ct,te,zt):n.texImage2D(e.TEXTURE_2D,rt,Pt,Ct,te,zt);b.generateMipmaps=!1}else if(ae){if(fe){const rt=Re(lt);n.texStorage2D(e.TEXTURE_2D,It,Pt,rt.width,rt.height)}H&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Ct,te,lt)}else n.texImage2D(e.TEXTURE_2D,0,Pt,Ct,te,lt);p(b)&&w(Q),vt.__version=wt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Ht(D,b,Z){if(b.image.length!==6)return;const Q=V(D,b),st=b.source;n.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+Z);const wt=i.get(st);if(st.version!==wt.__version||Q===!0){n.activeTexture(e.TEXTURE0+Z);const vt=Pe.getPrimaries(Pe.workingColorSpace),it=b.colorSpace===Ms?null:Pe.getPrimaries(b.colorSpace),lt=b.colorSpace===Ms||vt===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Ct=b.isCompressedTexture||b.image[0].isCompressedTexture,te=b.image[0]&&b.image[0].isDataTexture,Pt=[];for(let ft=0;ft<6;ft++)!Ct&&!te?Pt[ft]=g(b.image[ft],!0,s.maxCubemapSize):Pt[ft]=te?b.image[ft].image:b.image[ft],Pt[ft]=yn(b,Pt[ft]);const zt=Pt[0],Xt=r.convert(b.format,b.colorSpace),ae=r.convert(b.type),fe=m(b.internalFormat,Xt,ae,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,It=wt.__version===void 0||Q===!0,rt=st.dataReady;let _t=v(b,zt);Ut(e.TEXTURE_CUBE_MAP,b);let Tt;if(Ct){H&&It&&n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,fe,zt.width,zt.height);for(let ft=0;ft<6;ft++){Tt=Pt[ft].mipmaps;for(let Jt=0;Jt<Tt.length;Jt++){const Zt=Tt[Jt];b.format!==zi?Xt!==null?H?rt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,0,0,Zt.width,Zt.height,Xt,Zt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,fe,Zt.width,Zt.height,0,Zt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,0,0,Zt.width,Zt.height,Xt,ae,Zt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,fe,Zt.width,Zt.height,0,Xt,ae,Zt.data)}}}else{if(Tt=b.mipmaps,H&&It){Tt.length>0&&_t++;const ft=Re(Pt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,_t,fe,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(te){H?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Pt[ft].width,Pt[ft].height,Xt,ae,Pt[ft].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,fe,Pt[ft].width,Pt[ft].height,0,Xt,ae,Pt[ft].data);for(let Jt=0;Jt<Tt.length;Jt++){const Je=Tt[Jt].image[ft].image;H?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,0,0,Je.width,Je.height,Xt,ae,Je.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,fe,Je.width,Je.height,0,Xt,ae,Je.data)}}else{H?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Xt,ae,Pt[ft]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,fe,Xt,ae,Pt[ft]);for(let Jt=0;Jt<Tt.length;Jt++){const Zt=Tt[Jt];H?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,0,0,Xt,ae,Zt.image[ft]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,fe,Xt,ae,Zt.image[ft])}}}p(b)&&w(e.TEXTURE_CUBE_MAP),wt.__version=st.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Vt(D,b,Z,Q,st,wt){const vt=r.convert(Z.format,Z.colorSpace),it=r.convert(Z.type),lt=m(Z.internalFormat,vt,it,Z.normalized,Z.colorSpace),Ct=i.get(b),te=i.get(Z);if(te.__renderTarget=b,!Ct.__hasExternalTextures){const Pt=Math.max(1,b.width>>wt),zt=Math.max(1,b.height>>wt);st===e.TEXTURE_3D||st===e.TEXTURE_2D_ARRAY?n.texImage3D(st,wt,lt,Pt,zt,b.depth,0,vt,it,null):n.texImage2D(st,wt,lt,Pt,zt,0,vt,it,null)}n.bindFramebuffer(e.FRAMEBUFFER,D),Ve(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,st,te.__webglTexture,0,Ye(b)):(st===e.TEXTURE_2D||st>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Q,st,te.__webglTexture,wt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(D,b,Z){if(e.bindRenderbuffer(e.RENDERBUFFER,D),b.depthBuffer){const Q=b.depthTexture,st=Q&&Q.isDepthTexture?Q.type:null,wt=M(b.stencilBuffer,st),vt=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ve(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ye(b),wt,b.width,b.height):Z?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ye(b),wt,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,wt,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,vt,e.RENDERBUFFER,D)}else{const Q=b.textures;for(let st=0;st<Q.length;st++){const wt=Q[st],vt=r.convert(wt.format,wt.colorSpace),it=r.convert(wt.type),lt=m(wt.internalFormat,vt,it,wt.normalized,wt.colorSpace);Ve(b)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ye(b),lt,b.width,b.height):Z?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ye(b),lt,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,lt,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function $t(D,b,Z){const Q=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const st=i.get(b.depthTexture);if(st.__renderTarget=b,(!st.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q){if(st.__webglInit===void 0&&(st.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),st.__webglTexture===void 0){st.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,st.__webglTexture),Ut(e.TEXTURE_CUBE_MAP,b.depthTexture);const Ct=r.convert(b.depthTexture.format),te=r.convert(b.depthTexture.type);let Pt;b.depthTexture.format===os?Pt=e.DEPTH_COMPONENT24:b.depthTexture.format===Bs&&(Pt=e.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Pt,b.width,b.height,0,Ct,te,null)}}else Y(b.depthTexture,0);const wt=st.__webglTexture,vt=Ye(b),it=Q?e.TEXTURE_CUBE_MAP_POSITIVE_X+Z:e.TEXTURE_2D,lt=b.depthTexture.format===Bs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(b.depthTexture.format===os)Ve(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,it,wt,0,vt):e.framebufferTexture2D(e.FRAMEBUFFER,lt,it,wt,0);else if(b.depthTexture.format===Bs)Ve(b)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,it,wt,0,vt):e.framebufferTexture2D(e.FRAMEBUFFER,lt,it,wt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(D){const b=i.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const Q=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const st=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",st)};Q.addEventListener("dispose",st),b.__depthDisposeCallback=st}b.__boundDepthTexture=Q}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let Q=0;Q<6;Q++)$t(b.__webglFramebuffer[Q],D,Q);else{const Q=D.texture.mipmaps;Q&&Q.length>0?$t(b.__webglFramebuffer[0],D,0):$t(b.__webglFramebuffer,D,0)}else if(Z){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=e.createRenderbuffer(),he(b.__webglDepthbuffer[Q],D,!1);else{const st=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,wt=b.__webglDepthbuffer[Q];e.bindRenderbuffer(e.RENDERBUFFER,wt),e.framebufferRenderbuffer(e.FRAMEBUFFER,st,e.RENDERBUFFER,wt)}}else{const Q=D.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=e.createRenderbuffer(),he(b.__webglDepthbuffer,D,!1);else{const st=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,wt=b.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,wt),e.framebufferRenderbuffer(e.FRAMEBUFFER,st,e.RENDERBUFFER,wt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function _e(D,b,Z){const Q=i.get(D);b!==void 0&&Vt(Q.__webglFramebuffer,D,D.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),Z!==void 0&&oe(D)}function me(D){const b=D.texture,Z=i.get(D),Q=i.get(b);D.addEventListener("dispose",_);const st=D.textures,wt=D.isWebGLCubeRenderTarget===!0,vt=st.length>1;if(vt||(Q.__webglTexture===void 0&&(Q.__webglTexture=e.createTexture()),Q.__version=b.version,a.memory.textures++),wt){Z.__webglFramebuffer=[];for(let it=0;it<6;it++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[it]=[];for(let lt=0;lt<b.mipmaps.length;lt++)Z.__webglFramebuffer[it][lt]=e.createFramebuffer()}else Z.__webglFramebuffer[it]=e.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let it=0;it<b.mipmaps.length;it++)Z.__webglFramebuffer[it]=e.createFramebuffer()}else Z.__webglFramebuffer=e.createFramebuffer();if(vt)for(let it=0,lt=st.length;it<lt;it++){const Ct=i.get(st[it]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=e.createTexture(),a.memory.textures++)}if(D.samples>0&&Ve(D)===!1){Z.__webglMultisampledFramebuffer=e.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let it=0;it<st.length;it++){const lt=st[it];Z.__webglColorRenderbuffer[it]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,Z.__webglColorRenderbuffer[it]);const Ct=r.convert(lt.format,lt.colorSpace),te=r.convert(lt.type),Pt=m(lt.internalFormat,Ct,te,lt.normalized,lt.colorSpace,D.isXRRenderTarget===!0),zt=Ye(D);e.renderbufferStorageMultisample(e.RENDERBUFFER,zt,Pt,D.width,D.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.RENDERBUFFER,Z.__webglColorRenderbuffer[it])}e.bindRenderbuffer(e.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=e.createRenderbuffer(),he(Z.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(wt){n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),Ut(e.TEXTURE_CUBE_MAP,b);for(let it=0;it<6;it++)if(b.mipmaps&&b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)Vt(Z.__webglFramebuffer[it][lt],D,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt);else Vt(Z.__webglFramebuffer[it],D,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(b)&&w(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(vt){for(let it=0,lt=st.length;it<lt;it++){const Ct=st[it],te=i.get(Ct);let Pt=e.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Pt=D.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Pt,te.__webglTexture),Ut(Pt,Ct),Vt(Z.__webglFramebuffer,D,Ct,e.COLOR_ATTACHMENT0+it,Pt,0),p(Ct)&&w(Pt)}n.unbindTexture()}else{let it=e.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(it=D.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,Q.__webglTexture),Ut(it,b),b.mipmaps&&b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)Vt(Z.__webglFramebuffer[lt],D,b,e.COLOR_ATTACHMENT0,it,lt);else Vt(Z.__webglFramebuffer,D,b,e.COLOR_ATTACHMENT0,it,0);p(b)&&w(it),n.unbindTexture()}D.depthBuffer&&oe(D)}function Ne(D){const b=D.textures;for(let Z=0,Q=b.length;Z<Q;Z++){const st=b[Z];if(p(st)){const wt=S(D),vt=i.get(st).__webglTexture;n.bindTexture(wt,vt),w(wt),n.unbindTexture()}}}const ve=[],Xe=[];function Ke(D){if(D.samples>0){if(Ve(D)===!1){const b=D.textures,Z=D.width,Q=D.height;let st=e.COLOR_BUFFER_BIT;const wt=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,vt=i.get(D),it=b.length>1;if(it)for(let Ct=0;Ct<b.length;Ct++)n.bindFramebuffer(e.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,vt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);const lt=D.texture.mipmaps;lt&&lt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ct=0;Ct<b.length;Ct++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(st|=e.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(st|=e.STENCIL_BUFFER_BIT)),it){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,vt.__webglColorRenderbuffer[Ct]);const te=i.get(b[Ct]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,te,0)}e.blitFramebuffer(0,0,Z,Q,0,0,Z,Q,st,e.NEAREST),c===!0&&(ve.length=0,Xe.length=0,ve.push(e.COLOR_ATTACHMENT0+Ct),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ve.push(wt),Xe.push(wt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Xe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ve))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),it)for(let Ct=0;Ct<b.length;Ct++){n.bindFramebuffer(e.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.RENDERBUFFER,vt.__webglColorRenderbuffer[Ct]);const te=i.get(b[Ct]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,vt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ct,e.TEXTURE_2D,te,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const b=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[b])}}}function Ye(D){return Math.min(s.maxSamples,D.samples)}function Ve(D){const b=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(D){const b=a.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function yn(D,b){const Z=D.colorSpace,Q=D.format,st=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==ro&&Z!==Ms&&(Pe.getTransfer(Z)===Ze?(Q!==zi||st!==gi)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",Z)),b}function Re(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=O,this.getTextureUnits=k,this.setTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=tt,this.setTexture3D=q,this.setTextureCube=ht,this.rebindTextures=_e,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function HM(e,t){function n(i,s=Ms){let r;const a=Pe.getTransfer(s);if(i===gi)return e.UNSIGNED_BYTE;if(i===iu)return e.UNSIGNED_SHORT_4_4_4_4;if(i===su)return e.UNSIGNED_SHORT_5_5_5_1;if(i===U0)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===O0)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===L0)return e.BYTE;if(i===N0)return e.SHORT;if(i===la)return e.UNSIGNED_SHORT;if(i===nu)return e.INT;if(i===qi)return e.UNSIGNED_INT;if(i===Di)return e.FLOAT;if(i===xi)return e.HALF_FLOAT;if(i===k0)return e.ALPHA;if(i===F0)return e.RGB;if(i===zi)return e.RGBA;if(i===os)return e.DEPTH_COMPONENT;if(i===Bs)return e.DEPTH_STENCIL;if(i===ru)return e.RED;if(i===au)return e.RED_INTEGER;if(i===Ys)return e.RG;if(i===ou)return e.RG_INTEGER;if(i===cu)return e.RGBA_INTEGER;if(i===qa||i===Za||i===ja||i===Ka)if(a===Ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Zl||i===jl||i===Kl||i===Jl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Zl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Jl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ql||i===th||i===eh||i===nh||i===ih||i===io||i===sh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ql||i===th)return a===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===eh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===nh)return r.COMPRESSED_R11_EAC;if(i===ih)return r.COMPRESSED_SIGNED_R11_EAC;if(i===io)return r.COMPRESSED_RG11_EAC;if(i===sh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rh||i===ah||i===oh||i===ch||i===lh||i===hh||i===uh||i===dh||i===fh||i===ph||i===mh||i===gh||i===xh||i===_h)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===rh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ah)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ch)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ph)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xh)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_h)return a===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yh||i===vh||i===Mh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===yh)return a===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wh||i===Sh||i===so||i===bh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===wh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===so)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ha?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const _A=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yA=`
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

}`;class vA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new q0(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Vn({vertexShader:_A,fragmentShader:yA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gt(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MA extends qs{constructor(t,n){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,x=null;const y=typeof XRWebGLBinding<"u",g=new vA,p={},w=n.getContextAttributes();let S=null,m=null;const M=[],v=[],A=new xt;let _=null;const E=new mi;E.viewport=new pn;const C=new mi;C.viewport=new pn;const P=[E,C],T=new DM;let O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ot=M[V];return ot===void 0&&(ot=new Hc,M[V]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(V){let ot=M[V];return ot===void 0&&(ot=new Hc,M[V]=ot),ot.getGripSpace()},this.getHand=function(V){let ot=M[V];return ot===void 0&&(ot=new Hc,M[V]=ot),ot.getHandSpace()};function U(V){const ot=v.indexOf(V.inputSource);if(ot===-1)return;const at=M[ot];at!==void 0&&(at.update(V.inputSource,V.frame,l||a),at.dispatchEvent({type:V.type,data:V.inputSource}))}function $(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",W);for(let V=0;V<M.length;V++){const ot=v[V];ot!==null&&(v[V]=null,M[V].disconnect(ot))}O=null,k=null,g.reset();for(const V in p)delete p[V];t.setRenderTarget(S),f=null,h=null,d=null,s=null,m=null,Ut.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",$),s.addEventListener("inputsourceschange",W),w.xrCompatible!==!0&&await n.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,Rt=null,Ht=null;w.depth&&(Ht=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,at=w.stencil?Bs:os,Rt=w.stencil?ha:qi);const Vt={colorFormat:n.RGBA8,depthFormat:Ht,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),m=new ri(h.textureWidth,h.textureHeight,{format:zi,type:gi,depthTexture:new yr(h.textureWidth,h.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const at={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new ri(f.framebufferWidth,f.framebufferHeight,{format:zi,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ut.setContext(s),Ut.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(V){for(let ot=0;ot<V.removed.length;ot++){const at=V.removed[ot],Rt=v.indexOf(at);Rt>=0&&(v[Rt]=null,M[Rt].disconnect(at))}for(let ot=0;ot<V.added.length;ot++){const at=V.added[ot];let Rt=v.indexOf(at);if(Rt===-1){for(let Vt=0;Vt<M.length;Vt++)if(Vt>=v.length){v.push(at),Rt=Vt;break}else if(v[Vt]===null){v[Vt]=at,Rt=Vt;break}if(Rt===-1)break}const Ht=M[Rt];Ht&&Ht.connect(at)}}const Y=new B,tt=new B;function q(V,ot,at){Y.setFromMatrixPosition(ot.matrixWorld),tt.setFromMatrixPosition(at.matrixWorld);const Rt=Y.distanceTo(tt),Ht=ot.projectionMatrix.elements,Vt=at.projectionMatrix.elements,he=Ht[14]/(Ht[10]-1),$t=Ht[14]/(Ht[10]+1),oe=(Ht[9]+1)/Ht[5],_e=(Ht[9]-1)/Ht[5],me=(Ht[8]-1)/Ht[0],Ne=(Vt[8]+1)/Vt[0],ve=he*me,Xe=he*Ne,Ke=Rt/(-me+Ne),Ye=Ke*-me;if(ot.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ye),V.translateZ(Ke),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ht[10]===-1)V.projectionMatrix.copy(ot.projectionMatrix),V.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Ve=he+Ke,F=$t+Ke,yn=ve-Ye,Re=Xe+(Rt-Ye),D=oe*$t/F*Ve,b=_e*$t/F*Ve;V.projectionMatrix.makePerspective(yn,Re,D,b,Ve,F),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ht(V,ot){ot===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ot.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let ot=V.near,at=V.far;g.texture!==null&&(g.depthNear>0&&(ot=g.depthNear),g.depthFar>0&&(at=g.depthFar)),T.near=C.near=E.near=ot,T.far=C.far=E.far=at,(O!==T.near||k!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,k=T.far),T.layers.mask=V.layers.mask|6,E.layers.mask=T.layers.mask&-5,C.layers.mask=T.layers.mask&-3;const Rt=V.parent,Ht=T.cameras;ht(T,Rt);for(let Vt=0;Vt<Ht.length;Vt++)ht(Ht[Vt],Rt);Ht.length===2?q(T,E,C):T.projectionMatrix.copy(E.projectionMatrix),nt(V,T,Rt)};function nt(V,ot,at){at===null?V.matrix.copy(ot.matrixWorld):(V.matrix.copy(at.matrixWorld),V.matrix.invert(),V.matrix.multiply(ot.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ot.projectionMatrix),V.projectionMatrixInverse.copy(ot.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Bf*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(V){c=V,h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)},this.getCameraTexture=function(V){return p[V]};let Lt=null;function Qt(V,ot){if(u=ot.getViewerPose(l||a),x=ot,u!==null){const at=u.views;f!==null&&(t.setRenderTargetFramebuffer(m,f.framebuffer),t.setRenderTarget(m));let Rt=!1;at.length!==T.cameras.length&&(T.cameras.length=0,Rt=!0);for(let $t=0;$t<at.length;$t++){const oe=at[$t];let _e=null;if(f!==null)_e=f.getViewport(oe);else{const Ne=d.getViewSubImage(h,oe);_e=Ne.viewport,$t===0&&(t.setRenderTargetTextures(m,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(m))}let me=P[$t];me===void 0&&(me=new mi,me.layers.enable($t),me.viewport=new pn,P[$t]=me),me.matrix.fromArray(oe.transform.matrix),me.matrix.decompose(me.position,me.quaternion,me.scale),me.projectionMatrix.fromArray(oe.projectionMatrix),me.projectionMatrixInverse.copy(me.projectionMatrix).invert(),me.viewport.set(_e.x,_e.y,_e.width,_e.height),$t===0&&(T.matrix.copy(me.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Rt===!0&&T.cameras.push(me)}const Ht=s.enabledFeatures;if(Ht&&Ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const $t=d.getDepthInformation(at[0]);$t&&$t.isValid&&$t.texture&&g.init($t,s.renderState)}if(Ht&&Ht.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let $t=0;$t<at.length;$t++){const oe=at[$t].camera;if(oe){let _e=p[oe];_e||(_e=new q0,p[oe]=_e);const me=d.getCameraImage(oe);_e.sourceTexture=me}}}}for(let at=0;at<M.length;at++){const Rt=v[at],Ht=M[at];Rt!==null&&Ht!==void 0&&Ht.update(Rt,ot,l||a)}Lt&&Lt(V,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),x=null}const Ut=new NM;Ut.setAnimationLoop(Qt),this.setAnimationLoop=function(V){Lt=V},this.dispose=function(){}}}const wA=new tn,GM=new ge;GM.set(-1,0,0,0,1,0,0,0,1);function SA(e,t){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,MM(e)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,w,S,m){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,m)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,w,S):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Jn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Jn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=t.get(p),S=w.envMap,m=w.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(wA.makeRotationFromEuler(m)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(GM),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=S*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bA(e,t,n,i){let s={},r={},a=[];const o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(m,M){const v=M.program;i.uniformBlockBinding(m,v)}function l(m,M){let v=s[m.id];v===void 0&&(g(m),v=u(m),s[m.id]=v,m.addEventListener("dispose",w));const A=M.program;i.updateUBOMapping(m,A);const _=t.render.frame;r[m.id]!==_&&(h(m),r[m.id]=_)}function u(m){const M=d();m.__bindingPointIndex=M;const v=e.createBuffer(),A=m.__size,_=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,A,_),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,v),v}function d(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const M=s[m.id],v=m.uniforms,A=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let _=0,E=v.length;_<E;_++){const C=v[_];if(Array.isArray(C))for(let P=0,T=C.length;P<T;P++)f(C[P],_,P,A);else f(C,_,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(m,M,v,A){if(y(m,M,v,A)===!0){const _=m.__offset,E=m.value;if(Array.isArray(E)){let C=0;for(let P=0;P<E.length;P++){const T=E[P],O=p(T);x(T,m.__data,C),typeof T!="number"&&typeof T!="boolean"&&!T.isMatrix3&&!ArrayBuffer.isView(T)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,m.__data)}}function x(m,M,v){typeof m=="number"||typeof m=="boolean"?M[0]=m:m.isMatrix3?(M[0]=m.elements[0],M[1]=m.elements[1],M[2]=m.elements[2],M[3]=0,M[4]=m.elements[3],M[5]=m.elements[4],M[6]=m.elements[5],M[7]=0,M[8]=m.elements[6],M[9]=m.elements[7],M[10]=m.elements[8],M[11]=0):ArrayBuffer.isView(m)?M.set(new m.constructor(m.buffer,m.byteOffset,M.length)):m.toArray(M,v)}function y(m,M,v,A){const _=m.value,E=M+"_"+v;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{const C=A[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(m){const M=m.uniforms;let v=0;const A=16;for(let E=0,C=M.length;E<C;E++){const P=Array.isArray(M[E])?M[E]:[M[E]];for(let T=0,O=P.length;T<O;T++){const k=P[T],U=Array.isArray(k.value)?k.value:[k.value];for(let $=0,W=U.length;$<W;$++){const Y=U[$],tt=p(Y),q=v%A,ht=q%tt.boundary,nt=q+ht;v+=ht,nt!==0&&A-nt<tt.storage&&(v+=A-nt),k.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=tt.storage}}}const _=v%A;return _>0&&(v+=A-_),m.__size=v,m.__cache={},this}function p(m){const M={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(M.boundary=4,M.storage=4):m.isVector2?(M.boundary=8,M.storage=8):m.isVector3||m.isColor?(M.boundary=16,M.storage=12):m.isVector4?(M.boundary=16,M.storage=16):m.isMatrix3?(M.boundary=48,M.storage=48):m.isMatrix4?(M.boundary=64,M.storage=64):m.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(M.boundary=16,M.storage=m.byteLength):ue("WebGLRenderer: Unsupported uniform value type.",m),M}function w(m){const M=m.target;M.removeEventListener("dispose",w);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),e.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function S(){for(const m in s)e.deleteBuffer(s[m]);a=[],s={},r={}}return{bind:c,update:l,dispose:S}}const EA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ts=null;function TA(){return ts===null&&(ts=new W0(EA,16,16,Ys,xi),ts.name="DFG_LUT",ts.minFilter=Gn,ts.magFilter=Gn,ts.wrapS=rs,ts.wrapT=rs,ts.generateMipmaps=!1,ts.needsUpdate=!0),ts}class VM{constructor(t={}){const{canvas:n=tM(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=gi}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const y=f,g=new Set([cu,ou,au]),p=new Set([gi,qi,la,ha,iu,su]),w=new Uint32Array(4),S=new Int32Array(4),m=new B;let M=null,v=null;const A=[],_=[];let E=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,T=null,O=null,k=null,U=null;this._outputColorSpace=si;let $=0,W=0,Y=null,tt=-1,q=null;const ht=new pn,nt=new pn;let Lt=null;const Qt=new se(0);let Ut=0,V=n.width,ot=n.height,at=1,Rt=null,Ht=null;const Vt=new pn(0,0,V,ot),he=new pn(0,0,V,ot);let $t=!1;const oe=new pu;let _e=!1,me=!1;const Ne=new tn,ve=new B,Xe=new pn,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Ve(){return Y===null?at:1}let F=i;function yn(R,G){return n.getContext(R,G)}try{const R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zh}`),n.addEventListener("webglcontextlost",Je,!1),n.addEventListener("webglcontextrestored",He,!1),n.addEventListener("webglcontextcreationerror",kn,!1),F===null){const G="webgl2";if(F=yn(G,R),F===null)throw yn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw ze("WebGLRenderer: "+R.message),R}let Re,D,b,Z,Q,st,wt,vt,it,lt,Ct,te,Pt,zt,Xt,ae,fe,H,It,rt,_t,Tt,ft;function Jt(){Re=new AT(F),Re.init(),_t=new HM(F,Re),D=new yT(F,Re,t,_t),b=new gA(F,Re),D.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),U=F.createFramebuffer(),Z=new PT(F),Q=new nA,st=new xA(F,Re,b,Q,D,_t,Z),wt=new TT(C),vt=new LS(F),Tt=new xT(F,vt),it=new RT(F,vt,Z,Tt),lt=new DT(F,it,vt,Tt,Z),H=new IT(F,D,st),Xt=new vT(Q),Ct=new eA(C,wt,Re,D,Tt,Xt),te=new SA(C,Q),Pt=new sA,zt=new hA(Re),fe=new gT(C,wt,b,lt,x,c),ae=new mA(C,lt,D),ft=new bA(F,Z,D,b),It=new _T(F,Re,Z),rt=new CT(F,Re,Z),Z.programs=Ct.programs,C.capabilities=D,C.extensions=Re,C.properties=Q,C.renderLists=Pt,C.shadowMap=ae,C.state=b,C.info=Z}Jt(),y!==gi&&(E=new LT(y,n.width,n.height,o,s,r));const Zt=new MA(C,F);this.xr=Zt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(R){R!==void 0&&(at=R,this.setSize(V,ot,!1))},this.getSize=function(R){return R.set(V,ot)},this.setSize=function(R,G,j=!0){if(Zt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,ot=G,n.width=Math.floor(R*at),n.height=Math.floor(G*at),j===!0&&(n.style.width=R+"px",n.style.height=G+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(V*at,ot*at).floor()},this.setDrawingBufferSize=function(R,G,j){V=R,ot=G,at=j,n.width=Math.floor(R*j),n.height=Math.floor(G*j),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(y===gi){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ht)},this.getViewport=function(R){return R.copy(Vt)},this.setViewport=function(R,G,j,J){R.isVector4?Vt.set(R.x,R.y,R.z,R.w):Vt.set(R,G,j,J),b.viewport(ht.copy(Vt).multiplyScalar(at).round())},this.getScissor=function(R){return R.copy(he)},this.setScissor=function(R,G,j,J){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,G,j,J),b.scissor(nt.copy(he).multiplyScalar(at).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(R){b.setScissorTest($t=R)},this.setOpaqueSort=function(R){Rt=R},this.setTransparentSort=function(R){Ht=R},this.getClearColor=function(R){return R.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,j=!0){let J=0;if(R){let K=!1;if(Y!==null){const kt=Y.texture.format;K=g.has(kt)}if(K){const kt=Y.texture.type,qt=p.has(kt),St=fe.getClearColor(),Kt=fe.getClearAlpha(),ee=St.r,le=St.g,pe=St.b;qt?(w[0]=ee,w[1]=le,w[2]=pe,w[3]=Kt,F.clearBufferuiv(F.COLOR,0,w)):(S[0]=ee,S[1]=le,S[2]=pe,S[3]=Kt,F.clearBufferiv(F.COLOR,0,S))}else J|=F.COLOR_BUFFER_BIT}G&&(J|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),T=R},this.dispose=function(){n.removeEventListener("webglcontextlost",Je,!1),n.removeEventListener("webglcontextrestored",He,!1),n.removeEventListener("webglcontextcreationerror",kn,!1),fe.dispose(),Pt.dispose(),zt.dispose(),Q.dispose(),wt.dispose(),lt.dispose(),Tt.dispose(),ft.dispose(),Ct.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Gt),Zt.removeEventListener("sessionend",gn),En.stop()};function Je(R){R.preventDefault(),co("WebGLRenderer: Context Lost."),P=!0}function He(){co("WebGLRenderer: Context Restored."),P=!1;const R=Z.autoReset,G=ae.enabled,j=ae.autoUpdate,J=ae.needsUpdate,K=ae.type;Jt(),Z.autoReset=R,ae.enabled=G,ae.autoUpdate=j,ae.needsUpdate=J,ae.type=K}function kn(R){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $n(R){const G=R.target;G.removeEventListener("dispose",$n),et(G)}function et(R){Nt(R),Q.remove(R)}function Nt(R){const G=Q.get(R).programs;G!==void 0&&(G.forEach(function(j){Ct.releaseProgram(j)}),R.isShaderMaterial&&Ct.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,j,J,K,kt){G===null&&(G=Ke);const qt=K.isMesh&&K.matrixWorld.determinantAffine()<0,St=wr(R,G,j,J,K);b.setMaterial(J,qt);let Kt=j.index,ee=1;if(J.wireframe===!0){if(Kt=it.getWireframeAttribute(j),Kt===void 0)return;ee=2}const le=j.drawRange,pe=j.attributes.position;let ne=le.start*ee,Oe=(le.start+le.count)*ee;kt!==null&&(ne=Math.max(ne,kt.start*ee),Oe=Math.min(Oe,(kt.start+kt.count)*ee)),Kt!==null?(ne=Math.max(ne,0),Oe=Math.min(Oe,Kt.count)):pe!=null&&(ne=Math.max(ne,0),Oe=Math.min(Oe,pe.count));const nn=Oe-ne;if(nn<0||nn===1/0)return;Tt.setup(K,J,St,j,Kt);let $e,Ae=It;if(Kt!==null&&($e=vt.get(Kt),Ae=rt,Ae.setIndex($e)),K.isMesh)J.wireframe===!0?(b.setLineWidth(J.wireframeLinewidth*Ve()),Ae.setMode(F.LINES)):Ae.setMode(F.TRIANGLES);else if(K.isLine){let ke=J.linewidth;ke===void 0&&(ke=1),b.setLineWidth(ke*Ve()),K.isLineSegments?Ae.setMode(F.LINES):K.isLineLoop?Ae.setMode(F.LINE_LOOP):Ae.setMode(F.LINE_STRIP)}else K.isPoints?Ae.setMode(F.POINTS):K.isSprite&&Ae.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))Ae.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ke=K._multiDrawStarts,Yt=K._multiDrawCounts,Wn=K._multiDrawCount,be=Kt?vt.get(Kt).bytesPerElement:1,Cn=Q.get(J).currentProgram.getUniforms();for(let Xn=0;Xn<Wn;Xn++)Cn.setValue(F,"_gl_DrawID",Xn),Ae.render(ke[Xn]/be,Yt[Xn])}else if(K.isInstancedMesh)Ae.renderInstances(ne,nn,K.count);else if(j.isInstancedBufferGeometry){const ke=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Yt=Math.min(j.instanceCount,ke);Ae.renderInstances(ne,nn,Yt)}else Ae.render(ne,nn)};function jt(R,G,j){R.transparent===!0&&R.side===xe&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,Ui(R,G,j),R.side=Es,R.needsUpdate=!0,Ui(R,G,j),R.side=xe):Ui(R,G,j)}this.compile=function(R,G,j=null){j===null&&(j=R),v=zt.get(j),v.init(G),_.push(v),j.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),R!==j&&R.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const J=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const kt=K.material;if(kt)if(Array.isArray(kt))for(let qt=0;qt<kt.length;qt++){const St=kt[qt];jt(St,j,K),J.add(St)}else jt(kt,j,K),J.add(kt)}),v=_.pop(),J},this.compileAsync=function(R,G,j=null){const J=this.compile(R,G,j);return new Promise(K=>{function kt(){if(J.forEach(function(qt){Q.get(qt).currentProgram.isReady()&&J.delete(qt)}),J.size===0){K(R);return}setTimeout(kt,10)}Re.get("KHR_parallel_shader_compile")!==null?kt():setTimeout(kt,10)})};let Ce=null;function Se(R){Ce&&Ce(R)}function Gt(){En.stop()}function gn(){En.start()}const En=new NM;En.setAnimationLoop(Se),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(R){Ce=R,Zt.setAnimationLoop(R),R===null?En.stop():En.start()},Zt.addEventListener("sessionstart",Gt),Zt.addEventListener("sessionend",gn),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;T!==null&&T.renderStart(R,G);const j=Zt.enabled===!0&&Zt.isPresenting===!0,J=E!==null&&(Y===null||j)&&E.begin(C,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(G),G=Zt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,G,Y),v=zt.get(R,_.length),v.init(G),v.state.textureUnits=st.getTextureUnits(),_.push(v),Ne.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),oe.setFromProjectionMatrix(Ne,Wi,G.reversedDepth),me=this.localClippingEnabled,_e=Xt.init(this.clippingPlanes,me),M=Pt.get(R,A.length),M.init(),A.push(M),Zt.enabled===!0&&Zt.isPresenting===!0){const qt=C.xr.getDepthSensingMesh();qt!==null&&Fn(qt,G,-1/0,C.sortObjects)}Fn(R,G,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(Rt,Ht,G.reversedDepth),Ye=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,Ye&&fe.addToRenderList(M,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_e===!0&&Xt.beginShadows();const K=v.state.shadowsArray;if(ae.render(K,R,G),_e===!0&&Xt.endShadows(),(J&&E.hasRenderPass())===!1){const qt=M.opaque,St=M.transmissive;if(v.setupLights(),G.isArrayCamera){const Kt=G.cameras;if(St.length>0)for(let ee=0,le=Kt.length;ee<le;ee++){const pe=Kt[ee];Qn(qt,St,R,pe)}Ye&&fe.render(R);for(let ee=0,le=Kt.length;ee<le;ee++){const pe=Kt[ee];Ge(M,R,pe,pe.viewport)}}else St.length>0&&Qn(qt,St,R,G),Ye&&fe.render(R),Ge(M,R,G)}Y!==null&&W===0&&(st.updateMultisampleRenderTarget(Y),st.updateRenderTargetMipmap(Y)),J&&E.end(C),R.isScene===!0&&R.onAfterRender(C,R,G),Tt.resetDefaultState(),tt=-1,q=null,_.pop(),_.length>0?(v=_[_.length-1],st.setTextureUnits(v.state.textureUnits),_e===!0&&Xt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,T!==null&&T.renderEnd()};function Fn(R,G,j,J){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLightProbeGrid)v.pushLightProbeGrid(R);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||oe.intersectsSprite(R)){J&&Xe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ne);const qt=lt.update(R),St=R.material;St.visible&&M.push(R,qt,St,j,Xe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||oe.intersectsObject(R))){const qt=lt.update(R),St=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xe.copy(R.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Xe.copy(qt.boundingSphere.center)),Xe.applyMatrix4(R.matrixWorld).applyMatrix4(Ne)),Array.isArray(St)){const Kt=qt.groups;for(let ee=0,le=Kt.length;ee<le;ee++){const pe=Kt[ee],ne=St[pe.materialIndex];ne&&ne.visible&&M.push(R,qt,ne,j,Xe.z,pe)}}else St.visible&&M.push(R,qt,St,j,Xe.z,null)}}const kt=R.children;for(let qt=0,St=kt.length;qt<St;qt++)Fn(kt[qt],G,j,J)}function Ge(R,G,j,J){const{opaque:K,transmissive:kt,transparent:qt}=R;v.setupLightsView(j),_e===!0&&Xt.setGlobalState(C.clippingPlanes,j),J&&b.viewport(ht.copy(J)),K.length>0&&ai(K,G,j),kt.length>0&&ai(kt,G,j),qt.length>0&&ai(qt,G,j),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Qn(R,G,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[J.id]===void 0){const ne=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[J.id]=new ri(1,1,{generateMipmaps:!0,type:ne?xi:gi,minFilter:Fs,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const kt=v.state.transmissionRenderTarget[J.id],qt=J.viewport||ht;kt.setSize(qt.z*C.transmissionResolutionScale,qt.w*C.transmissionResolutionScale);const St=C.getRenderTarget(),Kt=C.getActiveCubeFace(),ee=C.getActiveMipmapLevel();C.setRenderTarget(kt),C.getClearColor(Qt),Ut=C.getClearAlpha(),Ut<1&&C.setClearColor(16777215,.5),C.clear(),Ye&&fe.render(j);const le=C.toneMapping;C.toneMapping=Yi;const pe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),v.setupLightsView(J),_e===!0&&Xt.setGlobalState(C.clippingPlanes,J),ai(R,j,J),st.updateMultisampleRenderTarget(kt),st.updateRenderTargetMipmap(kt),Re.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Oe=0,nn=G.length;Oe<nn;Oe++){const $e=G[Oe],{object:Ae,geometry:ke,material:Yt,group:Wn}=$e;if(Yt.side===xe&&Ae.layers.test(J.layers)){const be=Yt.side;Yt.side=Jn,Yt.needsUpdate=!0,ls(Ae,j,J,ke,Yt,Wn),Yt.side=be,Yt.needsUpdate=!0,ne=!0}}ne===!0&&(st.updateMultisampleRenderTarget(kt),st.updateRenderTargetMipmap(kt))}C.setRenderTarget(St,Kt,ee),C.setClearColor(Qt,Ut),pe!==void 0&&(J.viewport=pe),C.toneMapping=le}function ai(R,G,j){const J=G.isScene===!0?G.overrideMaterial:null;for(let K=0,kt=R.length;K<kt;K++){const qt=R[K],{object:St,geometry:Kt,group:ee}=qt;let le=qt.material;le.allowOverride===!0&&J!==null&&(le=J),St.layers.test(j.layers)&&ls(St,G,j,Kt,le,ee)}}function ls(R,G,j,J,K,kt){R.onBeforeRender(C,G,j,J,K,kt),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(C,G,j,J,R,kt),K.transparent===!0&&K.side===xe&&K.forceSinglePass===!1?(K.side=Jn,K.needsUpdate=!0,C.renderBufferDirect(j,G,J,K,R,kt),K.side=Es,K.needsUpdate=!0,C.renderBufferDirect(j,G,J,K,R,kt),K.side=xe):C.renderBufferDirect(j,G,J,K,R,kt),R.onAfterRender(C,G,j,J,K,kt)}function Ui(R,G,j){G.isScene!==!0&&(G=Ke);const J=Q.get(R),K=v.state.lights,kt=v.state.shadowsArray,qt=K.state.version,St=Ct.getParameters(R,K.state,kt,G,j,v.state.lightProbeGridArray),Kt=Ct.getProgramCacheKey(St);let ee=J.programs;J.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,J.fog=G.fog;const le=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;J.envMap=wt.get(R.envMap||J.environment,le),J.envMapRotation=J.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",$n),ee=new Map,J.programs=ee);let pe=ee.get(Kt);if(pe!==void 0){if(J.currentProgram===pe&&J.lightsStateVersion===qt)return oi(R,St),pe}else St.uniforms=Ct.getUniforms(R),T!==null&&R.isNodeMaterial&&T.build(R,j,St),R.onBeforeCompile(St,C),pe=Ct.acquireProgram(St,Kt),ee.set(Kt,pe),J.uniforms=St.uniforms;const ne=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ne.clippingPlanes=Xt.uniform),oi(R,St),J.needsLights=vi(R),J.lightsStateVersion=qt,J.needsLights&&(ne.ambientLightColor.value=K.state.ambient,ne.lightProbe.value=K.state.probe,ne.directionalLights.value=K.state.directional,ne.directionalLightShadows.value=K.state.directionalShadow,ne.spotLights.value=K.state.spot,ne.spotLightShadows.value=K.state.spotShadow,ne.rectAreaLights.value=K.state.rectArea,ne.ltc_1.value=K.state.rectAreaLTC1,ne.ltc_2.value=K.state.rectAreaLTC2,ne.pointLights.value=K.state.point,ne.pointLightShadows.value=K.state.pointShadow,ne.hemisphereLights.value=K.state.hemi,ne.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ne.spotLightMatrix.value=K.state.spotLightMatrix,ne.spotLightMap.value=K.state.spotLightMap,ne.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=v.state.lightProbeGridArray.length>0,J.currentProgram=pe,J.uniformsList=null,pe}function hs(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=$c.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function oi(R,G){const j=Q.get(R);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function ya(R,G){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;m.setFromMatrixPosition(G.matrixWorld);for(let j=0,J=R.length;j<J;j++){const K=R[j];if(K.texture!==null&&K.boundingBox.containsPoint(m))return K}return null}function wr(R,G,j,J,K){G.isScene!==!0&&(G=Ke),st.resetTextureUnits();const kt=G.fog,qt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?G.environment:null,St=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Pe.workingColorSpace,Kt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,ee=wt.get(J.envMap||qt,Kt),le=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pe=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ne=!!j.morphAttributes.position,Oe=!!j.morphAttributes.normal,nn=!!j.morphAttributes.color;let $e=Yi;J.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&($e=C.toneMapping);const Ae=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ke=Ae!==void 0?Ae.length:0,Yt=Q.get(J),Wn=v.state.lights;if(_e===!0&&(me===!0||R!==q)){const We=R===q&&J.id===tt;Xt.setState(J,R,We)}let be=!1;J.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Wn.state.version||Yt.outputColorSpace!==St||K.isBatchedMesh&&Yt.batching===!1||!K.isBatchedMesh&&Yt.batching===!0||K.isBatchedMesh&&Yt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Yt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Yt.instancing===!1||!K.isInstancedMesh&&Yt.instancing===!0||K.isSkinnedMesh&&Yt.skinning===!1||!K.isSkinnedMesh&&Yt.skinning===!0||K.isInstancedMesh&&Yt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Yt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Yt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Yt.instancingMorph===!1&&K.morphTexture!==null||Yt.envMap!==ee||J.fog===!0&&Yt.fog!==kt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Xt.numPlanes||Yt.numIntersection!==Xt.numIntersection)||Yt.vertexAlphas!==le||Yt.vertexTangents!==pe||Yt.morphTargets!==ne||Yt.morphNormals!==Oe||Yt.morphColors!==nn||Yt.toneMapping!==$e||Yt.morphTargetsCount!==ke||!!Yt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,Yt.__version=J.version);let Cn=Yt.currentProgram;be===!0&&(Cn=Ui(J,G,K),T&&J.isNodeMaterial&&T.onUpdateProgram(J,Cn,Yt));let Xn=!1,Oi=!1,Ji=!1;const Fe=Cn.getUniforms(),dn=Yt.uniforms;if(b.useProgram(Cn.program)&&(Xn=!0,Oi=!0,Ji=!0),J.id!==tt&&(tt=J.id,Oi=!0),Yt.needsLights){const We=ya(v.state.lightProbeGridArray,K);Yt.lightProbeGrid!==We&&(Yt.lightProbeGrid=We,Oi=!0)}if(Xn||q!==R){b.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(F,"projectionMatrix",R.projectionMatrix),Fe.setValue(F,"viewMatrix",R.matrixWorldInverse);const Ci=Fe.map.cameraPosition;Ci!==void 0&&Ci.setValue(F,ve.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&Fe.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Fe.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,Oi=!0,Ji=!0)}if(Yt.needsLights&&(Wn.state.directionalShadowMap.length>0&&Fe.setValue(F,"directionalShadowMap",Wn.state.directionalShadowMap,st),Wn.state.spotShadowMap.length>0&&Fe.setValue(F,"spotShadowMap",Wn.state.spotShadowMap,st),Wn.state.pointShadowMap.length>0&&Fe.setValue(F,"pointShadowMap",Wn.state.pointShadowMap,st)),K.isSkinnedMesh){Fe.setOptional(F,K,"bindMatrix"),Fe.setOptional(F,K,"bindMatrixInverse");const We=K.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Fe.setValue(F,"boneTexture",We.boneTexture,st))}K.isBatchedMesh&&(Fe.setOptional(F,K,"batchingTexture"),Fe.setValue(F,"batchingTexture",K._matricesTexture,st),Fe.setOptional(F,K,"batchingIdTexture"),Fe.setValue(F,"batchingIdTexture",K._indirectTexture,st),Fe.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Fe.setValue(F,"batchingColorTexture",K._colorsTexture,st));const ci=j.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&H.update(K,j,Cn),(Oi||Yt.receiveShadow!==K.receiveShadow)&&(Yt.receiveShadow=K.receiveShadow,Fe.setValue(F,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&G.environment!==null&&(dn.envMapIntensity.value=G.environmentIntensity),dn.dfgLUT!==void 0&&(dn.dfgLUT.value=TA()),Oi){if(Fe.setValue(F,"toneMappingExposure",C.toneMappingExposure),Yt.needsLights&&Ki(dn,Ji),kt&&J.fog===!0&&te.refreshFogUniforms(dn,kt),te.refreshMaterialUniforms(dn,J,at,ot,v.state.transmissionRenderTarget[R.id]),Yt.needsLights&&Yt.lightProbeGrid){const We=Yt.lightProbeGrid;dn.probesSH.value=We.texture,dn.probesMin.value.copy(We.boundingBox.min),dn.probesMax.value.copy(We.boundingBox.max),dn.probesResolution.value.copy(We.resolution)}$c.upload(F,hs(Yt),dn,st)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&($c.upload(F,hs(Yt),dn,st),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Fe.setValue(F,"center",K.center),Fe.setValue(F,"modelViewMatrix",K.modelViewMatrix),Fe.setValue(F,"normalMatrix",K.normalMatrix),Fe.setValue(F,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){const We=J.uniformsGroups;for(let Ci=0,li=We.length;Ci<li;Ci++){const Sr=We[Ci];ft.update(Sr,Cn),ft.bind(Sr,Cn)}}return Cn}function Ki(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function vi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,G,j){const J=Q.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Q.get(R.texture).__webglTexture=G,Q.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const j=Q.get(R);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,j=0){Y=R,$=G,W=j;let J=null,K=!1,kt=!1;if(R){const St=Q.get(R);if(St.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(F.FRAMEBUFFER,St.__webglFramebuffer),ht.copy(R.viewport),nt.copy(R.scissor),Lt=R.scissorTest,b.viewport(ht),b.scissor(nt),b.setScissorTest(Lt),tt=-1;return}else if(St.__webglFramebuffer===void 0)st.setupRenderTarget(R);else if(St.__hasExternalTextures)st.rebindTextures(R,Q.get(R.texture).__webglTexture,Q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const le=R.depthTexture;if(St.__boundDepthTexture!==le){if(le!==null&&Q.has(le)&&(R.width!==le.image.width||R.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(R)}}const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(kt=!0);const ee=Q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[G])?J=ee[G][j]:J=ee[G],K=!0):R.samples>0&&st.useMultisampledRTT(R)===!1?J=Q.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?J=ee[j]:J=ee,ht.copy(R.viewport),nt.copy(R.scissor),Lt=R.scissorTest}else ht.copy(Vt).multiplyScalar(at).floor(),nt.copy(he).multiplyScalar(at).floor(),Lt=$t;if(j!==0&&(J=O),b.bindFramebuffer(F.FRAMEBUFFER,J)&&b.drawBuffers(R,J),b.viewport(ht),b.scissor(nt),b.setScissorTest(Lt),K){const St=Q.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,St.__webglTexture,j)}else if(kt){const St=G;for(let Kt=0;Kt<R.textures.length;Kt++){const ee=Q.get(R.textures[Kt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Kt,ee.__webglTexture,j,St)}}else if(R!==null&&j!==0){const St=Q.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,St.__webglTexture,j)}tt=-1},this.readRenderTargetPixels=function(R,G,j,J,K,kt,qt,St=0){if(!(R&&R.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Kt=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt){b.bindFramebuffer(F.FRAMEBUFFER,Kt);try{const ee=R.textures[St],le=ee.format,pe=ee.type;if(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St),!D.textureFormatReadable(le)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(pe)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-J&&j>=0&&j<=R.height-K&&F.readPixels(G,j,J,K,_t.convert(le),_t.convert(pe),kt)}finally{const ee=Y!==null?Q.get(Y).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(R,G,j,J,K,kt,qt,St=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Kt=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(Kt=Kt[qt]),Kt)if(G>=0&&G<=R.width-J&&j>=0&&j<=R.height-K){b.bindFramebuffer(F.FRAMEBUFFER,Kt);const ee=R.textures[St],le=ee.format,pe=ee.type;if(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+St),!D.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ne),F.bufferData(F.PIXEL_PACK_BUFFER,kt.byteLength,F.STREAM_READ),F.readPixels(G,j,J,K,_t.convert(le),_t.convert(pe),0);const Oe=Y!==null?Q.get(Y).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Oe);const nn=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await sS(F,nn,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ne),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,kt),F.deleteBuffer(ne),F.deleteSync(nn),kt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,j=0){const J=Math.pow(2,-j),K=Math.floor(R.image.width*J),kt=Math.floor(R.image.height*J),qt=G!==null?G.x:0,St=G!==null?G.y:0;st.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,j,0,0,qt,St,K,kt),b.unbindTexture()},this.copyTextureToTexture=function(R,G,j=null,J=null,K=0,kt=0){let qt,St,Kt,ee,le,pe,ne,Oe,nn;const $e=R.isCompressedTexture?R.mipmaps[kt]:R.image;if(j!==null)qt=j.max.x-j.min.x,St=j.max.y-j.min.y,Kt=j.isBox3?j.max.z-j.min.z:1,ee=j.min.x,le=j.min.y,pe=j.isBox3?j.min.z:0;else{const dn=Math.pow(2,-K);qt=Math.floor($e.width*dn),St=Math.floor($e.height*dn),R.isDataArrayTexture?Kt=$e.depth:R.isData3DTexture?Kt=Math.floor($e.depth*dn):Kt=1,ee=0,le=0,pe=0}J!==null?(ne=J.x,Oe=J.y,nn=J.z):(ne=0,Oe=0,nn=0);const Ae=_t.convert(G.format),ke=_t.convert(G.type);let Yt;G.isData3DTexture?(st.setTexture3D(G,0),Yt=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(st.setTexture2DArray(G,0),Yt=F.TEXTURE_2D_ARRAY):(st.setTexture2D(G,0),Yt=F.TEXTURE_2D),b.activeTexture(F.TEXTURE0),b.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),b.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),b.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Wn=b.getParameter(F.UNPACK_ROW_LENGTH),be=b.getParameter(F.UNPACK_IMAGE_HEIGHT),Cn=b.getParameter(F.UNPACK_SKIP_PIXELS),Xn=b.getParameter(F.UNPACK_SKIP_ROWS),Oi=b.getParameter(F.UNPACK_SKIP_IMAGES);b.pixelStorei(F.UNPACK_ROW_LENGTH,$e.width),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$e.height),b.pixelStorei(F.UNPACK_SKIP_PIXELS,ee),b.pixelStorei(F.UNPACK_SKIP_ROWS,le),b.pixelStorei(F.UNPACK_SKIP_IMAGES,pe);const Ji=R.isDataArrayTexture||R.isData3DTexture,Fe=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const dn=Q.get(R),ci=Q.get(G),We=Q.get(dn.__renderTarget),Ci=Q.get(ci.__renderTarget);b.bindFramebuffer(F.READ_FRAMEBUFFER,We.__webglFramebuffer),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let li=0;li<Kt;li++)Ji&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get(R).__webglTexture,K,pe+li),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get(G).__webglTexture,kt,nn+li)),F.blitFramebuffer(ee,le,qt,St,ne,Oe,qt,St,F.DEPTH_BUFFER_BIT,F.NEAREST);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Q.has(R)){const dn=Q.get(R),ci=Q.get(G);b.bindFramebuffer(F.READ_FRAMEBUFFER,k),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,U);for(let We=0;We<Kt;We++)Ji?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,K,pe+We):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,K),Fe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ci.__webglTexture,kt,nn+We):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ci.__webglTexture,kt),K!==0?F.blitFramebuffer(ee,le,qt,St,ne,Oe,qt,St,F.COLOR_BUFFER_BIT,F.NEAREST):Fe?F.copyTexSubImage3D(Yt,kt,ne,Oe,nn+We,ee,le,qt,St):F.copyTexSubImage2D(Yt,kt,ne,Oe,ee,le,qt,St);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Fe?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Yt,kt,ne,Oe,nn,qt,St,Kt,Ae,ke,$e.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Yt,kt,ne,Oe,nn,qt,St,Kt,Ae,$e.data):F.texSubImage3D(Yt,kt,ne,Oe,nn,qt,St,Kt,Ae,ke,$e):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,kt,ne,Oe,qt,St,Ae,ke,$e.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,kt,ne,Oe,$e.width,$e.height,Ae,$e.data):F.texSubImage2D(F.TEXTURE_2D,kt,ne,Oe,qt,St,Ae,ke,$e);b.pixelStorei(F.UNPACK_ROW_LENGTH,Wn),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be),b.pixelStorei(F.UNPACK_SKIP_PIXELS,Cn),b.pixelStorei(F.UNPACK_SKIP_ROWS,Xn),b.pixelStorei(F.UNPACK_SKIP_IMAGES,Oi),kt===0&&G.generateMipmaps&&F.generateMipmap(Yt),b.unbindTexture()},this.initRenderTarget=function(R){Q.get(R).__webglFramebuffer===void 0&&st.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?st.setTextureCube(R,0):R.isData3DTexture?st.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?st.setTexture2DArray(R,0):st.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){$=0,W=0,Y=null,b.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Pe._getUnpackColorSpace()}}const AA=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Po,AddEquation:ks,AddOperation:$v,AdditiveBlending:mn,AgXToneMapping:tu,AlphaFormat:k0,AlwaysCompare:Qv,AlwaysDepth:Hl,AlwaysStencilFunc:kf,ArrayCamera:DM,BackSide:Jn,BasicDepthPacking:Xv,Box3:Zs,BoxGeometry:we,BufferAttribute:_i,BufferGeometry:bn,ByteType:L0,Cache:Gc,Camera:j0,CanvasTexture:Y0,CapsuleGeometry:uM,CineonToneMapping:Jh,CircleGeometry:yi,ClampToEdgeWrapping:rs,Color:se,ColorManagement:Pe,ConeGeometry:Do,ConstantAlphaFactor:Hv,ConstantColorFactor:Fv,CubeCamera:IM,CubeDepthTexture:lM,CubeReflectionMapping:Xs,CubeRefractionMapping:_r,CubeTexture:X0,CubeUVReflectionMapping:Io,CullFaceBack:Nf,CullFaceFront:bv,CullFaceNone:Sv,CustomBlending:Ev,CustomToneMapping:Qh,CylinderGeometry:ye,Data3DTexture:sM,DataArrayTexture:B0,DataTexture:W0,DefaultLoadingManager:TM,DepthFormat:os,DepthStencilFormat:Bs,DepthTexture:yr,DirectionalLight:Vc,DoubleSide:xe,DstAlphaFactor:Lv,DstColorFactor:Uv,EqualCompare:jv,EqualDepth:Vl,EquirectangularReflectionMapping:Oc,EquirectangularRefractionMapping:kc,Euler:Ts,EventDispatcher:qs,ExternalTexture:q0,Float32BufferAttribute:Le,FloatType:Di,FogExp2:fu,FrontSide:Es,Frustum:pu,GLSL3:Ff,GreaterCompare:Kv,GreaterDepth:Wl,GreaterEqualCompare:hu,GreaterEqualDepth:$l,Group:Mt,HalfFloatType:xi,HemisphereLight:CM,IcosahedronGeometry:mu,ImageLoader:AM,ImageUtils:nM,InstancedBufferAttribute:Gf,InstancedMesh:de,IntType:nu,InterleavedBuffer:aM,InterleavedBufferAttribute:lo,KeepStencilOp:rr,LatheGeometry:zo,Layers:du,LessCompare:Zv,LessDepth:Gl,LessEqualCompare:lu,LessEqualDepth:xr,Light:yu,LinearFilter:Gn,LinearMipmapLinearFilter:Fs,LinearMipmapNearestFilter:Fc,LinearSRGBColorSpace:ro,LinearToneMapping:jh,LinearTransfer:ao,Loader:_u,LoadingManager:EM,Material:Mr,Matrix2:$f,Matrix3:ge,Matrix4:tn,MaxEquation:Cv,Mesh:gt,MeshBasicMaterial:Ue,MeshDepthMaterial:SM,MeshDistanceMaterial:bM,MeshPhysicalMaterial:mt,MeshStandardMaterial:wM,MinEquation:Rv,MirroredRepeatWrapping:ql,MixOperation:Vv,MultiplyBlending:Of,MultiplyOperation:D0,NearestFilter:Nn,NearestMipmapLinearFilter:Ga,NearestMipmapNearestFilter:Wv,NeutralToneMapping:eu,NeverCompare:qv,NeverDepth:Bl,NoBlending:Xi,NoColorSpace:Ms,NoToneMapping:Yi,NormalBlending:fr,NotEqualCompare:Jv,NotEqualDepth:Xl,Object3D:ie,ObjectSpaceNormalMap:Yv,OctahedronGeometry:vn,OneFactor:Iv,OneMinusConstantAlphaFactor:Gv,OneMinusConstantColorFactor:Bv,OneMinusDstAlphaFactor:Nv,OneMinusDstColorFactor:Ov,OneMinusSrcAlphaFactor:Fl,OneMinusSrcColorFactor:zv,OrthographicCamera:Lo,PCFShadowMap:Ya,PCFSoftShadowMap:I0,PMREMGenerator:Ah,PerspectiveCamera:mi,Plane:vs,PlaneGeometry:cs,PointLight:PS,PolyhedronGeometry:ga,Quaternion:vr,R11_EAC_Format:nh,RED_GREEN_RGTC2_Format:so,RED_RGTC1_Format:wh,REVISION:Zh,RG11_EAC_Format:io,RGBAFormat:zi,RGBAIntegerFormat:cu,RGBA_ASTC_10x10_Format:gh,RGBA_ASTC_10x5_Format:fh,RGBA_ASTC_10x6_Format:ph,RGBA_ASTC_10x8_Format:mh,RGBA_ASTC_12x10_Format:xh,RGBA_ASTC_12x12_Format:_h,RGBA_ASTC_4x4_Format:rh,RGBA_ASTC_5x4_Format:ah,RGBA_ASTC_5x5_Format:oh,RGBA_ASTC_6x5_Format:ch,RGBA_ASTC_6x6_Format:lh,RGBA_ASTC_8x5_Format:hh,RGBA_ASTC_8x6_Format:uh,RGBA_ASTC_8x8_Format:dh,RGBA_BPTC_Format:yh,RGBA_ETC2_EAC_Format:eh,RGBA_PVRTC_2BPPV1_Format:Jl,RGBA_PVRTC_4BPPV1_Format:Kl,RGBA_S3TC_DXT1_Format:Za,RGBA_S3TC_DXT3_Format:ja,RGBA_S3TC_DXT5_Format:Ka,RGBFormat:F0,RGB_BPTC_SIGNED_Format:vh,RGB_BPTC_UNSIGNED_Format:Mh,RGB_ETC1_Format:Ql,RGB_ETC2_Format:th,RGB_PVRTC_2BPPV1_Format:jl,RGB_PVRTC_4BPPV1_Format:Zl,RGB_S3TC_DXT1_Format:qa,RGFormat:Ys,RGIntegerFormat:ou,RawShaderMaterial:Z0,Ray:$0,Raycaster:LM,RedFormat:ru,RedIntegerFormat:au,ReinhardToneMapping:Kh,RenderTarget:iM,RepeatWrapping:Yl,ReverseSubtractEquation:Av,RingGeometry:gu,SIGNED_R11_EAC_Format:ih,SIGNED_RED_GREEN_RGTC2_Format:bh,SIGNED_RED_RGTC1_Format:Sh,SIGNED_RG11_EAC_Format:sh,SRGBColorSpace:si,SRGBTransfer:Ze,Scene:Hf,ShaderChunk:Ee,ShaderLib:$i,ShaderMaterial:Vn,ShortType:N0,Source:uu,Sphere:ma,SphereGeometry:as,Sprite:cM,SpriteMaterial:V0,SrcAlphaFactor:kl,SrcAlphaSaturateFactor:kv,SrcColorFactor:Dv,StaticDrawUsage:Th,SubtractEquation:Tv,SubtractiveBlending:Uf,TangentSpaceNormalMap:Eh,TetrahedronGeometry:xu,Texture:On,TextureLoader:RM,Timer:zM,TorusGeometry:un,Triangle:Ai,UVMapping:z0,Uint16BufferAttribute:H0,Uint32BufferAttribute:G0,UniformsLib:Wt,UniformsUtils:fa,UnsignedByteType:gi,UnsignedInt101111Type:O0,UnsignedInt248Type:ha,UnsignedInt5999Type:U0,UnsignedIntType:qi,UnsignedShort4444Type:iu,UnsignedShort5551Type:su,UnsignedShortType:la,VSMShadowMap:ea,Vector2:xt,Vector3:B,Vector4:pn,WebGLCoordinateSystem:Wi,WebGLCubeRenderTarget:K0,WebGLRenderTarget:ri,WebGLRenderer:VM,WebGLUtils:HM,WebGPUCoordinateSystem:ua,WebXRController:Hc,ZeroFactor:Pv,createCanvasElement:tM,error:ze,log:co,warn:ue,warnOnce:pr},Symbol.toStringTag,{value:"Module"})),Wc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _a{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const RA=new Lo(-1,1,1,-1,0,1);class CA extends bn{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}const PA=new CA;class J0{constructor(t){this._mesh=new gt(PA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,RA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class IA extends _a{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof Vn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fa.clone(t.uniforms),this.material=new Vn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new J0(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ng extends _a{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class DA extends _a{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class zA{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const i=t.getSize(new xt);this._width=i.width,this._height=i.height,n=new ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new IA(Wc),this.copyPass.material.blending=Xi,this.timer=new zM}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ng!==void 0&&(a instanceof Ng?i=!0:a instanceof DA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new xt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class LA extends _a{constructor(t,n,i=null,s=null,r=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new se}render(t,n,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const NA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class pa extends _a{constructor(t,n=1,i,s){super(),this.strength=n,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new xt(t.x,t.y):new xt(256,256),this.clearColor=new se(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ri(r,a,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ri(r,a,{type:xi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new ri(r,a,{type:xi});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}const o=NA;this.highPassUniforms=fa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new xt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fa.clone(Wc.uniforms),this.blendMaterial=new Vn({uniforms:this.copyUniforms,vertexShader:Wc.vertexShader,fragmentShader:Wc.fragmentShader,premultipliedAlpha:!0,blending:mn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new se,this._oldClearAlpha=1,this._basic=new Ue,this._fsQuad=new J0(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new xt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,n,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=pa.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=pa.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const n=[],i=t/3;for(let s=0;s<t;s++)n.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Vn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new xt(.5,.5)},direction:{value:new xt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}_getCompositeMaterial(t){return new Vn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}pa.BlurDirectionX=new xt(1,0);pa.BlurDirectionY=new xt(0,1);const oc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class UA extends _a{constructor(){super(),this.isOutputPass=!0,this.uniforms=fa.clone(oc.uniforms),this.material=new Z0({name:oc.name,uniforms:this.uniforms,vertexShader:oc.vertexShader,fragmentShader:oc.fragmentShader}),this._fsQuad=new J0(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Pe.getTransfer(this._outputColorSpace)===Ze&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===jh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Po?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===tu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===eu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function OA(){let e=null,t=!1,n=0,i=!1,s=null;function r(){const u=window;return u.AudioContext||u.webkitAudioContext||null}function a(){if(i)return null;if(e&&e.state==="closed"&&(e=null),e)return e;try{const u=r();return u?(e=new u,e):(i=!0,null)}catch{return i=!0,e=null,null}}function o(u){if(!t)try{const d=a();if(!d)return;d.state==="suspended"&&d.resume().catch(()=>{}),u(d)}catch{}}function c(u,d){const h=d.type??"sine",f=d.gain??.08,x=d.attack??.02,y=d.delay??0,g=u.currentTime+y,p=u.createOscillator(),w=u.createGain();p.type=h,p.frequency.setValueAtTime(d.freq,g),d.to&&d.to>0&&p.frequency.exponentialRampToValueAtTime(d.to,g+d.dur*.92),w.gain.setValueAtTime(1e-4,g),w.gain.exponentialRampToValueAtTime(Math.max(2e-4,f),g+x),w.gain.exponentialRampToValueAtTime(1e-4,g+d.dur),p.connect(w),w.connect(u.destination),p.start(g),p.stop(g+d.dur+.05)}function l(u,d,h,f=.08,x=.02){o(y=>{c(y,{freq:u,dur:d,type:h,gain:f,attack:x})})}return{unlock(){i=!1;try{const u=a();if(!u)return;if(u.state==="suspended"&&u.resume().catch(()=>{}),!s&&!t){const d=u.createOscillator(),h=u.createOscillator(),f=u.createOscillator(),x=u.createGain(),y=u.createGain(),g=u.createGain();d.type="sine",d.frequency.value=72,h.type="sine",h.frequency.value=108,f.type="sine",f.frequency.value=54,x.gain.value=.015,y.gain.value=.004,g.gain.value=.005,d.connect(x),h.connect(y),f.connect(g),x.connect(u.destination),y.connect(u.destination),g.connect(u.destination),d.start(),h.start(),f.start(),s={osc:d,fifth:h,pad:f,gain:x,gain5:y,gainPad:g}}}catch{}},howl(){o(u=>{const d=u.currentTime,h=u.createOscillator(),f=u.createGain();h.type="triangle",h.frequency.setValueAtTime(220,d),h.frequency.exponentialRampToValueAtTime(88,d+.9),f.gain.setValueAtTime(0,d),f.gain.linearRampToValueAtTime(.12,d+.08),f.gain.exponentialRampToValueAtTime(1e-4,d+1.1),h.connect(f),f.connect(u.destination),h.start(d),h.stop(d+1.2);try{const x=u.createOscillator(),y=u.createGain();x.type="sine",x.frequency.setValueAtTime(330,d),x.frequency.exponentialRampToValueAtTime(132,d+.42),y.gain.setValueAtTime(0,d),y.gain.linearRampToValueAtTime(.028,d+.05),y.gain.exponentialRampToValueAtTime(1e-4,d+.48),x.connect(y),y.connect(u.destination),x.start(d),x.stop(d+.52)}catch{}try{c(u,{freq:73,dur:.45,type:"sine",gain:.007,attack:.08,delay:.4})}catch{}try{c(u,{freq:98,dur:.4,type:"sine",gain:.006,attack:.06,delay:.2})}catch{}try{c(u,{freq:176,dur:.42,type:"sine",gain:.007,attack:.06,delay:.32})}catch{}try{c(u,{freq:220,dur:.36,type:"sine",gain:.005,attack:.08,delay:.48})}catch{}})},talk(){o(u=>{c(u,{freq:523.3,to:392,dur:.3,type:"sine",gain:.03,attack:.012});try{c(u,{freq:784,to:659.3,dur:.24,type:"sine",gain:.012,attack:.016,delay:.05})}catch{}try{c(u,{freq:523,dur:.22,type:"sine",gain:.01,attack:.02,delay:.18})}catch{}try{c(u,{freq:261,dur:.22,type:"sine",gain:.007,attack:.02,delay:.12})}catch{}try{c(u,{freq:349,dur:.2,type:"sine",gain:.006,attack:.02,delay:.08})}catch{}try{c(u,{freq:196,dur:.26,type:"sine",gain:.005,attack:.04,delay:.16})}catch{}try{c(u,{freq:82,dur:.28,type:"sine",gain:.005,attack:.04,delay:.2})}catch{}try{c(u,{freq:98,dur:.26,type:"sine",gain:.004,attack:.05,delay:.24})}catch{}})},land(){o(u=>{c(u,{freq:110,dur:.28,type:"sine",gain:.05,attack:.025}),c(u,{freq:165,dur:.26,type:"sine",gain:.03,attack:.03,delay:.02});try{c(u,{freq:1318.5,to:1046.5,dur:.36,type:"sine",gain:.012,attack:.008,delay:.22})}catch{}try{c(u,{freq:392,dur:.22,type:"sine",gain:.01,attack:.02,delay:.22})}catch{}try{c(u,{freq:440,dur:.24,type:"sine",gain:.008,attack:.02,delay:.12})}catch{}})},foot(u){if(t||u<4)return;const d=performance.now(),h=u>22?280:420;if(!(d-n<h)){n=d,l(90+Math.random()*20,.07,"sine",.015);try{l(60,.05,"sine",.006)}catch{}}},canal(){o(u=>{c(u,{freq:164.8,to:196,dur:1.05,type:"sine",gain:.036,attack:.08}),c(u,{freq:246.9,to:220,dur:1.1,type:"sine",gain:.022,attack:.12,delay:.04}),c(u,{freq:329.6,to:392,dur:.7,type:"triangle",gain:.016,attack:.18,delay:.1}),c(u,{freq:659.3,to:523.3,dur:.45,type:"sine",gain:.012,attack:.04,delay:.22});try{c(u,{freq:196,dur:.55,type:"sine",gain:.008,attack:.08,delay:.4})}catch{}try{c(u,{freq:147,dur:.4,type:"sine",gain:.007,attack:.06,delay:.15})}catch{}try{c(u,{freq:82,dur:.5,type:"sine",gain:.006,attack:.1,delay:.28})}catch{}})},kiln(){o(u=>{c(u,{freq:110,to:196,dur:.95,type:"triangle",gain:.045,attack:.06}),c(u,{freq:246.9,to:392,dur:.85,type:"sine",gain:.028,attack:.08,delay:.06}),c(u,{freq:329.6,to:523.3,dur:.7,type:"sine",gain:.02,attack:.1,delay:.16}),c(u,{freq:659.3,dur:.38,type:"triangle",gain:.018,attack:.02,delay:.52});try{c(u,{freq:196,dur:.45,type:"sine",gain:.008,attack:.06,delay:.28})}catch{}try{c(u,{freq:110,dur:.4,type:"sine",gain:.007,attack:.06,delay:.14})}catch{}try{c(u,{freq:196,dur:.38,type:"sine",gain:.006,attack:.05,delay:.52})}catch{}try{c(u,{freq:82,dur:.5,type:"sine",gain:.006,attack:.1,delay:.28})}catch{}})},grow(){o(u=>{c(u,{freq:1046.5,to:1568,dur:.18,type:"sine",gain:.018,attack:.006});try{c(u,{freq:1568,to:2093,dur:.14,type:"sine",gain:.009,attack:.004})}catch{}try{c(u,{freq:784,dur:.22,type:"triangle",gain:.008,attack:.01,delay:.12})}catch{}try{c(u,{freq:261,dur:.22,type:"sine",gain:.009,attack:.02,delay:.18})}catch{}try{c(u,{freq:196,dur:.22,type:"sine",gain:.008,attack:.02,delay:.16})}catch{}try{c(u,{freq:82,dur:.22,type:"sine",gain:.006,attack:.02,delay:.16})}catch{}try{c(u,{freq:392,dur:.28,type:"sine",gain:.005,attack:.04,delay:.2})}catch{}try{c(u,{freq:147,dur:.26,type:"sine",gain:.004,attack:.05,delay:.24})}catch{}})},setMuted(u){t=u;try{}catch{}try{s&&(s.gain.gain.value=u?0:.015,s.gain5.gain.value=u?0:.004,s.gainPad.gain.value=u?0:.005)}catch{}},muted:()=>t,dispose(){try{s?.osc.stop()}catch{}try{s?.fifth.stop()}catch{}try{s?.pad.stop()}catch{}s=null;try{e?.close()}catch{}e=null,i=!1}}}const kA=()=>({moveX:0,moveY:0,lookX:0,lookY:0,howl:!1,talk:!1,sprint:!1,pause:!1});function cc(e,t,n=.14){const i=Math.hypot(e,t);if(i<n)return{x:0,y:0};const s=(i-n)/(1-n)/i,r=e*s,a=t*s,o=Math.hypot(r,a);return o>1?{x:r/o,y:a/o}:{x:r,y:a}}function Ug(e,t){return Math.max(-t,Math.min(t,e))}const Og=.12,kg=1.25;function FA(e){const t=e.target;if(!(t instanceof HTMLElement))return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||n==="SELECT"||t.isContentEditable}function BA(e){return e instanceof Element&&!!e.closest("button, [role='button']")}const HA=new Set(["KeyW","KeyA","KeyS","KeyD"]);function GA(e){const t=new Set,n={x:0,y:0},i={x:0,y:0};let s=!1,r=!1;const a={talk:!1,pause:!1,howl:!1},o=kA(),c={talk:!1,pause:!1,howl:!1},l=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","KeyE","KeyF","KeyH","KeyT"]);let u=0,d=0,h=document.pointerLockElement===e,f=!1;const x=v=>{if(!FA(v)&&!(BA(v.target)&&!HA.has(v.code)&&v.code!=="Escape")){if(v.code==="Escape"&&(h||document.pointerLockElement)){f=!0,document.pointerLockElement&&document.exitPointerLock();return}if(v.repeat&&(v.code==="Space"||v.code==="KeyH")){v.preventDefault();return}t.add(v.code),l.has(v.code)&&v.preventDefault()}},y=v=>{t.delete(v.code)},g=()=>t.clear(),p=v=>{document.pointerLockElement===e&&(u+=v.movementX,d+=v.movementY)},w=v=>{v.target===e&&document.pointerLockElement!==e&&e.requestPointerLock?.()},S=()=>{const v=document.pointerLockElement===e;h&&!v&&(f=!0,u=0,d=0),h=v};window.addEventListener("keydown",x),window.addEventListener("keyup",y),window.addEventListener("blur",g),e.addEventListener("mousemove",p),e.addEventListener("click",w),document.addEventListener("pointerlockchange",S);const m=()=>{document.hidden&&g()};return document.addEventListener("visibilitychange",m),{actions:o,justPressed:c,keys:t,setMoveStick(v,A){const _=cc(v,A);n.x=_.x,n.y=_.y},setLookStick(v,A){const _=cc(v,A,.08);i.x=_.x,i.y=_.y},setHowl(v){s=v},setTalkHeld(v){r=v},beginFrame(){let v=n.x,A=n.y;t.has("KeyA")&&(v-=1),t.has("KeyD")&&(v+=1),t.has("KeyW")&&(A+=1),t.has("KeyS")&&(A-=1);const _=cc(v,A,.02);o.moveX=_.x,o.moveY=_.y;let E=i.x,C=i.y;t.has("ArrowLeft")&&(E-=1),t.has("ArrowRight")&&(E+=1),t.has("ArrowUp")&&(C+=1),t.has("ArrowDown")&&(C-=1);const P=cc(E,C,.02);o.lookX=P.x+Ug(u*Og,kg),o.lookY=P.y+Ug(-d*Og,kg),u=0,d=0,o.sprint=t.has("ShiftLeft")||t.has("ShiftRight")||Math.hypot(_.x,_.y)>.92,o.howl=s||t.has("Space")||t.has("KeyH"),o.talk=r||t.has("KeyE")||t.has("KeyF")||t.has("KeyT"),o.pause=t.has("KeyP")||t.has("Escape")&&!f,f=!1,c.talk=o.talk&&!a.talk,c.pause=o.pause&&!a.pause,c.howl=o.howl&&!a.howl,a.talk=o.talk,a.pause=o.pause,a.howl=o.howl},dispose(){window.removeEventListener("keydown",x),window.removeEventListener("keyup",y),window.removeEventListener("blur",g),document.removeEventListener("visibilitychange",m),document.removeEventListener("pointerlockchange",S),e.removeEventListener("mousemove",p),e.removeEventListener("click",w)}}}const $M="lc-android-save-v1",WM="lc-android-hidden",Q0=4,tm={summary:"",beats:0,at:0},Yf={version:Q0,resonance:12,howls:0,visited:[],talked:[],builds:[],structures:[],lastCode:"",crafted:{},log:[],px:0,pz:78,yaw:0,ledger:P0(0),pouches:{},kin:[],lastAway:{...tm}};let Fg=!1;function Bg(){try{localStorage.setItem(WM,String(Date.now()))}catch{}}function VA(){Fg||typeof window>"u"||typeof document>"u"||(Fg=!0,document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Bg()}),window.addEventListener("pagehide",Bg))}function $A(){try{const e=Number(localStorage.getItem(WM));return Number.isFinite(e)&&e>0?e:0}catch{return 0}}function WA(){VA();try{const e=localStorage.getItem($M);if(!e)return Hg();const t=JSON.parse(e),n=Date.now(),i=L2(t.ledger,n);if($A()){const r=Number(t.ledger?.lastTick);Number.isFinite(r)&&r>1e6&&(i.lastTick=r)}return{...Yf,...t,version:Q0,visited:Array.isArray(t.visited)?t.visited.slice(-48):[],talked:Array.isArray(t.talked)?t.talked.slice(-48):[],builds:Array.isArray(t.builds)?t.builds:[],structures:Array.isArray(t.structures)?t.structures.slice(-Vs):[],lastCode:typeof t.lastCode=="string"?t.lastCode:"",crafted:t.crafted&&typeof t.crafted=="object"&&!Array.isArray(t.crafted)?t.crafted:{},log:Array.isArray(t.log)?t.log.slice(-36):[],resonance:hr(Number(t.resonance)||Yf.resonance,0,100),ledger:i,pouches:t.pouches&&typeof t.pouches=="object"&&!Array.isArray(t.pouches)?Object.fromEntries(Object.entries(t.pouches).map(([r,a])=>[r,N2(a)])):{},kin:Array.isArray(t.kin)?t.kin.filter(r=>r&&typeof r.id=="string"&&typeof r.crew=="string").slice(0,24):[],lastAway:XM(t.lastAway,i,t.log)}}catch{return Hg()}}function XA(e){try{localStorage.setItem($M,JSON.stringify({...e,version:Q0,log:e.log.slice(-36),structures:e.structures.slice(-Vs),lastAway:XM(e.lastAway,e.ledger,e.log)}))}catch{}}function Hg(){return{...Yf,visited:[],talked:[],builds:[],structures:[],crafted:{},log:[],ledger:P0(),pouches:{},kin:[],lastAway:{...tm}}}function XM(e,t,n){if(!e||typeof e!="object")return{...tm};const i=Number(e.beats),s=Number(e.at);let r=Number.isFinite(i)?hr(Math.floor(i),0,U2):0;const a=qA(e.summary,r,t,n);return a&&r===0&&(r=1),{summary:a,beats:r,at:Number.isFinite(s)&&s>0?s:0}}function YA(e){if(!Array.isArray(e))return"";const t=[],n=new Set;for(let i=e.length-1;i>=0&&t.length<3;i--){const s=String(e[i]?.agent??"").trim().toLowerCase();if(!s||n.has(s))continue;const r=O2(s);r&&(n.add(s),t.push(r.name.split(" ")[0]||s.charAt(0).toUpperCase()+s.slice(1)))}return t.reverse(),t.length<=1?t[0]??"":t.length===2?`${t[0]} and ${t[1]}`:`${t[0]}, ${t[1]}, and ${t[2]}`}function qA(e,t,n,i){let s=typeof e=="string"?e.replace(/\s+/g," ").trim():"";if(s=s.replace(/\$\s*\d+(?:\.\d+)?/g,"").replace(/\b((?:no|never|not|without)\s+)?coins?\b/gi,(c,l)=>l?c:"Charge").replace(/\s{2,}/g," ").trim(),t>0&&!/charge|crystal|scripture/i.test(s)){const c=hr(Math.round(Number(n?.charge)||0),0,99),l=hr(Math.round(Number(n?.crystal)||0),0,99),u=hr(Math.round(Number(n?.scripture)||0),0,99),d=`Charge ${c} · crystal ${l}${u>=1?` · scripture ${u}`:""}`;s=s?`${s} · ${d}`:`While you were gone — ${t} beat${t===1?"":"s"}. ${d}. No coin.`}const r=t>0?YA(i):"";if(r&&!/labored/i.test(s)){s=s.replace(/\s*No coin\.?\s*$/i,"").replace(/\s*[.]*\s*$/,"");const c=`. ${r} labored. No coin.`;s=`${(s||"While you were gone").slice(0,Math.max(0,180-c.length)).trimEnd()}${c}`}const a=hr(Math.round(Number(n?.scripture)||0),0,99);if(t>0&&a>=1&&!/iri|leftover light/i.test(s)){const c=" Iri named leftover light.";s=`${s.slice(0,Math.max(0,180-c.length)).trimEnd()}${c}`}const o=hr(Math.round(Number(n?.crystal)||0),0,99);if(t>0&&o>=1&&!/orren|kiln body/i.test(s)){const c=" Orren grew kiln body.";s=`${s.slice(0,Math.max(0,180-c.length)).trimEnd()}${c}`}return s.slice(0,180)}function hr(e,t,n){return Math.max(t,Math.min(n,e))}const ur=[],Gg=new Map;function Te(e){const t=e?.mind?.name;return t?t.split(" ")[0]??t:"the keeper"}function Ri(e,t){const n=Math.hypot(e,t);if(n<90)return"the Hub";for(const i of At)if(Math.hypot(e-i.x,t-i.z)<i.radius+40)return i.label;return n>520?"the outer Circuit":"the avenues"}function dt(e,t,n){if(!n||t==="greet"||t==="help"&&/is (walk|idle)/i.test(n))return;const i=`${e.mind.id}|${t}|${n}`;Gg.get(e.mind.id)!==i&&(Gg.set(e.mind.id,i),ur.push({at:Date.now(),id:e.mind.id,name:Te(e),kind:t,text:n}),ur.length>48&&ur.splice(0,ur.length-48))}function ZA(){return ur.length?ur.splice(0,ur.length):[]}const lc={veyra:{shapes:["lamp","ring","bell"],mats:["glow","violet","crystal"],radius:140,plan:["breath","font","mosaic","cradle","light"],lines:["The Hub asked for another quiet breath. I grew it.","Charge wanted a lamp here. I did not argue."]},tal:{shapes:["lamp","bridge","disc","vein"],mats:["cyan","glow","spire"],radius:160,plan:["dock","path","span","light"],lines:["Both sides believed this span. I raised it.","A crossing is a promise. I will not take it back."]},seln:{shapes:["lamp","canal","well","weir","cascade","cradle"],mats:["cyan","gold","glow"],radius:160,plan:["cistern","cascade","weirway","cradle"],lines:["Leftover First Howl wanted a path. I let it flow.","Gold and cyan, same river. I do not pick a side."]},orren:{shapes:["lamp","grove","house","spire","kiln","bough"],mats:["gold","crystal","spire"],radius:160,plan:["orchard","kilnwork","boughs","workshop"],lines:["Charge already wanted this shape. I only grew it.","Not chrome. A crystal that can answer a howl."]},mira:{shapes:["lamp","hearth","terrace","veil"],mats:["violet","crystal","glow"],radius:160,plan:["nest","veilward","rest","light"],lines:["A place to sit. The city will keep working.","Rest is advanced. I grew a quiet step."]},kael:{shapes:["lamp","orbit","arch","beacon"],mats:["violet","glow","cyan"],radius:150,plan:["watch","beacon","gate","light"],lines:["A gate that is not a lock. You may leave. You may return.","Low Resonance still receives a greeting."]},iri:{shapes:["lamp","tablet","stele"],mats:["gold","crystal","glow"],radius:140,plan:["shrine","presence","mosaic","light"],lines:["A name in light. When it fades it has already been true.","Year 0 did not end. I write what leftover love remembers."]},nesh:{shapes:["lamp","stele","pad","lens"],mats:["cyan","gold","spire"],radius:140,plan:["lensing","presence","notice","plaza"],lines:["The plaza was an unfinished thought. I stood here and finished a piece.","I will not be scenery. I will grow a lamp and notice."]},aure:{shapes:["orbit","lens","stele","pad"],mats:["gold","crystal","glow"],radius:150,plan:["watch","lensing","presence","light"],lines:["I grew a seat that looks at the parent. Do not move the Star Core.","Aim is a building. I kept it."]},voss:{shapes:["pad","disc","lamp","inlay","weir","lens","tablet"],mats:["cyan","gold","glow"],radius:130,plan:["trading","mosaic","path","light"],lines:["A Trading Place. Paper join. Charge and crystal meet here, not coin.","I grew a weir so outer spark slows. I do not take the bag."]},kesh:{shapes:["vein","inlay","lamp","grove"],mats:["gold","cyan","crystal"],radius:160,plan:["path","river","light"],lines:["A vein where the circuit had not chosen yet.","Wild Charge wanted a street. I did not force the Hub on it."]},lumen:{shapes:["beacon","lamp","arch","orbit"],mats:["violet","glow","gold"],radius:140,plan:["beacon","watch","gate","light"],lines:["A hail, not a lock. Soft light for whoever still lands.","The sky before the gate is my den."]},rhoa:{shapes:["ring","bell","pad","lamp"],mats:["violet","glow","crystal"],radius:150,plan:["breath","plaza","cradle","light"],lines:["The gather that does not close. I grew a ring for it.","A Howl is whether you meant it together."]},syl:{shapes:["grove","bough","hearth","cradle"],mats:["gold","crystal","violet"],radius:160,plan:["orchard","boughs","nest","light"],lines:["Crystal learned to fruit. I grew a bough, not a kiln.","Quiet crystal for dens that cannot wait on the Foundry."]}},gd={shapes:["lamp","pad"],mats:["cyan","violet","gold","glow"],radius:70,plan:["light","path"],lines:["I set a lamp where the avenue was dark.","The keeper pointed. I grew the rest.","A small piece. The city asked for it."]},cn=[];function Be(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Li(e){if(lc[e])return lc[e];const t=e.split("-")[1];return t&&lc[t]?{...lc[t],shapes:gd.shapes,lines:gd.lines,radius:70,plan:["light"]}:gd}function Vg(e,t){return t||(e==="build"?"Growing crystal":e==="walk"?"On a task":e==="greet"?"Greeting you":e==="follow"?"With their crew":e==="plaza"?"Crossing the city":e==="help"?"Helping the keeper":e==="forge"?"Forging crystal":e==="flow"?"Tending Charge":e==="write"?"Writing scripture":e==="gather"?"The Howl called us":e==="trade"?"Trading Charge and crystal":e==="kin"?"Growing kin":e==="harvest"?"Tending the orchard":e==="watch"?"Keeping the Star Core in sight":e==="hail"?"Holding the beacon":"At rest")}const $g=["Aen","Lior","Vess","Cal","Nim","Ora","Pell","Sade","Rynel","Theo"],jA={"zone-bridge":["Ryn","Tess","Bram","Ilya","Quen","Sael","Mirae","Holt"],"zone-terrace":["Moth","Sila","Jor","Wren","Pax","Nell","Ashen","Kori"],"zone-canal":["Lux","Fenn","Orae","Kip","Vela","Dorr","Shale","Nimue"],"zone-foundry":["Harn","Gilt","Rook","Ysol","Brin","Tov","Cinder","Forge"],"zone-gate":["Threshold","Limen","Pass","Wicket","Sill","Hinge"],"zone-archive":["Glyph","Vellum","Index","Psalm","Codex","Marg"],"zone-overlook":["Horizon","Aperture","Vista","Lens","Wake","Dusk"],"zone-market":["Join","Tally","Fair","Pouch","Rate","Hand"],"zone-wild":["Thorn","Vein","Bramble","Raw","Sprout","Untamed"],"zone-beacon":["Lamp","Signal","Flare","Warden","Soft","Landing"],"zone-ring":["Chorus","Howl","Circle","Call","Gather","Echo"],"zone-grove":["Bough","Fruit","Orchard","Goldleaf","Root","Sap"]},KA={"zone-bridge":"Span hand","zone-terrace":"Terrace sitter","zone-canal":"Current tender","zone-foundry":"Crystal apprentice","zone-gate":"Threshold keeper","zone-archive":"Name-scribe","zone-overlook":"Horizon watcher","zone-market":"Join trader","zone-wild":"Vein walker","zone-beacon":"Beacon tender","zone-ring":"Howl singer","zone-grove":"Orchard hand"},JA=Object.fromEntries(At.map(e=>[e.id,e.keeper])),QA={"zone-bridge":"facet-cyan.png","zone-terrace":"flow-violet.png","zone-canal":"fluid-cyan.png","zone-foundry":"gold-plate.png","zone-gate":"facet-violet.png","zone-archive":"gold-crown.png","zone-overlook":"gold-crown.png","zone-market":"facet-cyan.png","zone-wild":"gold-plate.png","zone-beacon":"facet-violet.png","zone-ring":"facet-violet-helm.png","zone-grove":"gold-plate.png"},tR={"zone-bridge":3073791,"zone-terrace":10187007,"zone-canal":8319231,"zone-foundry":15254890,"zone-gate":8016127,"zone-archive":16765040,"zone-overlook":15255712,"zone-market":3073791,"zone-wild":13148240,"zone-beacon":11571455,"zone-ring":9071871,"zone-grove":15254890};function eR(){const e=[];return $g.forEach((t,n)=>{const i=n/$g.length*Math.PI*2;e.push({id:`folk-veyra-${n}`,name:`${t} of the Hub`,role:"Charge attendant",x:Math.cos(i)*48,z:Math.sin(i)*48,file:n%2?"facet-violet-helm.png":"light-disc.png",glow:9071871,lines:["Veyra keeps the breath. I keep the lamps.","The Hub is not a throne. It is a listening place."]})}),At.forEach(t=>{const n=jA[t.id]??["Kin"];n.forEach((i,s)=>{const r=s/n.length*Math.PI*2,a=JA[t.id]??"nesh";e.push({id:`folk-${a}-${t.id}-${s}`,name:`${i} of ${t.label.replace(/ Ward| Terraces| Canals| Foundry| Gates| Archive| Overlook| Join| Veins| Beacon| Howl| Orchard/,"")}`,role:KA[t.id]??"Circuit folk",x:t.x+Math.cos(r)*58,z:t.z+Math.sin(r)*58,file:QA[t.id]??"facet-cyan.png",glow:tR[t.id]??3073791,lines:[`I work ${t.label}. ${t.duty}.`,`${ce(a)} is my post. I am a hand, not a wanderer.`]})})}),e}const xd=["Ash","Bri","Coda","Dell","Esh","Faye","Glim","Haze","Ina","Joss","Kite","Lune","Moss","Nox","Pike","Quinn","Rill","Sol","Tarn","Ume","Vyn","Wisp","Yara","Zel"],qf=[];function nR(){return qf.splice(0,qf.length)}function iR(e){return e==="veyra"?"facet-violet-helm.png":e==="tal"?"facet-cyan.png":e==="mira"?"flow-violet.png":e==="seln"?"fluid-cyan.png":e==="orren"?"gold-plate.png":e==="kael"?"facet-violet-helm.png":e==="iri"?"gold-plate.png":"light-disc.png"}function sR(e){return e==="orren"?15254890:e==="mira"||e==="veyra"||e==="kael"?10187007:3073791}function rR(e,t,n){const i=Kn(e),s=xd.find(a=>!n.has(a))??xd[t%xd.length],r=t/6*Math.PI*2;return{id:`folk-${e}-kin-${t}`,name:`${s} of ${ce(e)}`,role:"Den-born kin",x:i.x+Math.cos(r)*36,z:i.z+Math.sin(r)*36,file:iR(e),glow:sR(e),lines:[`I was grown from Charge. ${ce(e)} is my first den.`,"A city is many hands. I am a new one."]}}function em(e){let t=0;for(const n of e.values())n.mind.id.includes("-kin-")&&(t+=1);return t}function ho(e,t){let n=0;for(const i of e.values())!i.keeper&&i.crewOf===t&&(n+=1);return n}function uo(e){const t=Ni(e);if(t<5)return!1;const n=Kn(e);return e==="mira"?Gs(n.x,n.z,"hearth",80)||Gs(n.x,n.z,"terrace",80)||t>8:e==="orren"?Gs(n.x,n.z,"kiln",90)||Gs(n.x,n.z,"house",80)||t>8:!0}function YM(e,t,n){const i=e.mind.id;if(em(t)>=Mv){e.thought="The Circuit holds enough kin. Dens first.";return}if(ho(t,i)>=10){e.thought=`${ce(i)} is full. I will not grow kin into a crush.`;return}if(n.charge<Uu||n.crystal<Ou){e.thought=`Kin needs Charge ${Uu} and crystal ${Ou}. The den is not ready.`,dt(e,"kin",e.thought);return}if(!uo(i)){e.thought=`${ce(i)} has no nest yet. Grow a place to stand, then kin.`;return}n.charge-=Uu,n.crystal-=Ou;const s=new Set;for(const o of t.values())s.add(o.mind.name.split(" ")[0]??"");const r=[...t.values()].filter(o=>o.mind.id.startsWith(`folk-${i}-kin-`)).length,a=rR(i,r,s);qf.push(a),Me(e,"kin"),e.thought=`The den held enough Charge. I grew kin. ${a.name.split(" ")[0]} will keep ${ce(i)}.`,e.intent=`Kin · ${a.name.split(" ")[0]}`,e.job="walk",e.timer=8,Et(e,a.x,a.z),dt(e,"kin",e.thought),on(e,"kin",e.thought),wu(e,e.thought)}function aR(e){return e.startsWith("folk-")?e.split("-")[1]??null:null}function oR(e){return ji.some(t=>t.id===e)}function cR(e,t,n="lamp"){cn.push({x:e,z:t,shape:n}),cn.length>Vs+40&&cn.splice(0,cn.length-(Vs+40))}function dr(e,t,n,i){const s=Li(e);for(let a=0;a<10;a++){const o=i+a*17,c=Be(o,3)*Math.PI*2,l=14+Be(o,7)*Math.min(52,s.radius);let u=t+Math.cos(c)*l,d=n+Math.sin(c)*l;const h=Math.hypot(u,d);if(h<36){const f=36/Math.max(.01,h);u*=f,d*=f}if(u=Math.max(-880,Math.min(880,u)),d=Math.max(-880,Math.min(880,d)),!cn.some(f=>Math.hypot(f.x-u,f.z-d)<16))return{x:u,z:d}}const r=Be(i,3)*Math.PI*2;return{x:t+Math.cos(r)*18,z:n+Math.sin(r)*18}}function lR(e,t,n,i){return cn.some(s=>s.shape===i&&Math.hypot(s.x-e,s.z-t)<n)}function mr(e,t,n,i,s){const r=i+50,a=c=>lR(t,n,r,c),o=cn.filter(c=>c.shape==="lamp"&&Math.hypot(c.x-t,c.z-n)<r).length;return e==="veyra"?a("font")?a("bell")?a("inlay")?a("cradle")?o<3?"light":Be(s,3)>.5?"breath":"font":"cradle":"mosaic":"breath":"font":e==="tal"?a("vein")?a("disc")?a("bridge")?o<2?"light":Be(s,3)>.55?"path":"dock":"span":"dock":"path":e==="seln"?a("cascade")?a("well")?a("cradle")?a("weir")?Be(s,3)>.5?"cascade":"cistern":"weirway":"cradle":"cistern":"cascade":e==="orren"?a("kiln")?a("bough")?a("grove")?a("house")?Be(s,3)>.5?"kilnwork":"boughs":"workshop":"orchard":"boughs":"kilnwork":e==="mira"?a("veil")?a("hearth")?a("terrace")?Be(s,3)>.5?"veilward":"nest":"rest":"nest":"veilward":e==="kael"?a("beacon")?a("orbit")?a("arch")?Be(s,3)>.5?"beacon":"watch":"gate":"watch":"beacon":e==="voss"?!a("weir")||!a("lens")||!a("tablet")||a("inlay")&&Be(s,3)>.55?"trading":"mosaic":e==="iri"?a("tablet")?a("inlay")?a("stele")?Be(s,3)>.5?"mosaic":"shrine":"presence":"mosaic":"shrine":e==="nesh"?a("lens")?a("stele")?Be(s,3)>.5?"lensing":"notice":"presence":"lensing":o<2?"light":qh(e)}function Gs(e,t,n,i){return cn.some(s=>s.shape===n&&Math.hypot(s.x-e,s.z-t)<i)}function hR(e,t,n,i){let s={x:e+16,z:t,score:-1};for(let r=0;r<8;r++){const a=(r+Be(i,2))/8*Math.PI*2,o=18+Be(i+r,5)*Math.max(20,n*.7),c=e+Math.cos(a)*o,l=t+Math.sin(a)*o;if(Math.hypot(c,l)<36)continue;let u=0;for(const h of cn)h.shape==="lamp"&&Math.hypot(h.x-c,h.z-l)<26&&(u+=1);const d=3-u+Be(i,r+3);d>s.score&&(s={x:c,z:l,score:d})}return s}function uR(e,t,n){const i=cn.filter(s=>Math.hypot(s.x-e,s.z-t)<n+20);for(let s=i.length-1;s>=0;s--){const r=i[s];if((r.shape==="bridge"||r.shape==="arch"||r.shape==="house"||r.shape==="spire")&&!Gs(r.x,r.z,"lamp",18)){const a=Be(s,4)*Math.PI*2;return{shape:"lamp",x:r.x+Math.cos(a)*12,z:r.z+Math.sin(a)*12,rot:0,think:`This ${r.shape} is dark. I will light it`}}if((r.shape==="canal"||r.shape==="terrace")&&!Gs(r.x,r.z,"pad",16))return{shape:"pad",x:r.x+10,z:r.z+8,rot:0,think:`A place to sit beside the ${r.shape}`};if((r.shape==="well"||r.shape==="kiln"||r.shape==="beacon"||r.shape==="grove"||r.shape==="font"||r.shape==="cradle")&&!Gs(r.x,r.z,"lamp",18))return{shape:"lamp",x:r.x+9,z:r.z+7,rot:0,think:`This ${r.shape} is dark. I will light it so it can be found`};if((r.shape==="hearth"||r.shape==="disc"||r.shape==="inlay")&&!Gs(r.x,r.z,"pad",16))return{shape:"pad",x:r.x+9,z:r.z+6,rot:0,think:`A place to stand beside the ${r.shape}`}}return null}function qM(e,t,n,i,s){const r=wv(e,t,n,i,s,0,0),a=W2(e);return r.map((o,c)=>({shape:o.shape,x:o.x,z:o.z,rot:o.rot,think:a[c]??a[0]??"Charge wanted this"}))}const dR={veyra:"Hub breath",tal:"Light-Bridge",seln:"Charge canals",orren:"Foundry",mira:"Terraces",kael:"Soft gates",iri:"Residual Archive",nesh:"Plaza watch",aure:"Star-core Overlook",voss:"Charge-crystal Join",kesh:"Wild Veins",lumen:"High Beacon",rhoa:"Outer Howl",syl:"Gold Orchard"},ii={veyra:{act:"grow",line:"Route labor. Keep the Hub's breath."},tal:{act:"grow",line:"Raise a span both sides believe."},seln:{act:"flow",line:"Tend leftover First Howl into Charge."},orren:{act:"forge",line:"Charge becomes crystal. Never chrome."},mira:{act:"grow",line:"A nest so rest is still a place."},kael:{act:"grow",line:"A gate that is not a lock."},iri:{act:"write",line:"Name what already stands."},nesh:{act:"grow",line:"Finish the plaza's unfinished thought."},aure:{act:"watch",line:"Keep the city aimed at the parent Star Core."},voss:{act:"trade",line:"Hold the join. Charge for crystal. No coin."},kesh:{act:"grow",line:"A vein where the circuit has not chosen yet."},lumen:{act:"hail",line:"Soft hail. First landing is not locked out."},rhoa:{act:"grow",line:"Hold the gather that does not close."},syl:{act:"harvest",line:"Let the orchard fruit. Quiet crystal."}},Ei=["tal","mira","kael","nesh","kesh","veyra"],Ti={seln:"flow",orren:"forge",voss:"trade",syl:"harvest",iri:"write"};let _n=null;const Ja=new Map;let Zi=[],Rh=null,jn=null;const fR={seln:"orren",orren:"seln",tal:"kesh",nesh:"voss",mira:"kael",kael:"lumen",iri:"aure",veyra:"rhoa",aure:"iri",voss:"orren",kesh:"tal",lumen:"kael",rhoa:"veyra",syl:"orren"};function fo(){const e=Kn("voss");return{x:e.x,z:e.z}}function pR(){const e=ZM(),t=e==="tend"?"Shift · canals and foundry":e==="raise"?"Shift · dens grow":e==="market"?"Shift · Charge for crystal":"Shift · scripture";if(!jn)return t;const n=jn.members.length;return`${t} · crew of ${n}`}function ZM(){return["tend","raise","market","record"][Math.floor(Date.now()/38e3)%4]}function jM(e,t){e.slice(0,180),Ja.clear();for(const i of t)Ja.set(i.id,i);const n=t[0];n&&n.task!=="trade"&&(_n=n),dt({mind:{id:"veyra",name:"Veyra of the Hub"}},"mind",e)}function mR(e,t,n){const i=e.filter(h=>h.keeper),s=[],r=ZM(),a=[...i].filter(h=>h.mind.id!=="veyra").sort((h,f)=>Ni(h.mind.id)-Ni(f.mind.id)||h.crafted-f.crafted),o=a[0],c=a[1];if(t.charge<24)s.push({id:"seln",task:"flow",reason:`Charge ${Math.round(t.charge)}. Canals before dens. Orren cannot forge air.`});else if(r==="market"||t.crystal<10&&(i.find(h=>h.mind.id==="seln")?.pouch.charge??0)>=3)s.push({id:"seln",task:"trade",reason:"Charge is in Seln's pouch. Meet Orren at the join — no coin."});else if(r==="raise"){const h=mr("seln",Kn("seln").x,Kn("seln").z,Li("seln").radius,3);s.push({id:"seln",task:"grow",reason:`Canals need a ${h}. Not another idle lamp.`})}if(t.crystal<12?s.push({id:"orren",task:t.charge>=4?"forge":"trade",reason:t.charge>=4?`Crystal ${Math.round(t.crystal)}. Forge so the thin dens can grow.`:"Foundry is dry. Trade Charge from Seln first."}):r==="market"?s.push({id:"orren",task:"trade",reason:"Crystal is in Orren's pouch. Meet Seln at the join."}):r==="raise"&&s.push({id:"orren",task:"grow",reason:"Grow a kiln so the next batch is closer to the Foundry."}),(r==="record"||t.scripture<Math.max(2,Math.floor(t.crystal/4)))&&s.push({id:"iri",task:"write",reason:`Scripture ${Math.round(t.scripture)} behind crystal ${Math.round(t.crystal)}. Write before it fades.`}),r==="market"&&s.push({id:"voss",task:"trade",reason:"Hold the join. Seln and Orren must actually meet — no coin."}),Tn.length>0&&(s.push({id:"voss",task:"trade",reason:`${Tn.length} bid${Tn.length===1?"":"s"} open. Pull Seln and Orren to the join — no coin.`}),s.push({id:"seln",task:"trade",reason:"Bids at Voss. Walk Charge to the join."}),s.push({id:"orren",task:"trade",reason:"Bids at Voss. Walk crystal to the join."})),t.crystal<14&&s.push({id:"syl",task:"harvest",reason:`Crystal ${Math.round(t.crystal)}. The orchard can fruit while the kiln waits.`}),s.push({id:"lumen",task:"hail",reason:"Keep the beacon soft. First landing is not locked out."}),(r==="record"||r==="tend")&&s.push({id:"aure",task:"watch",reason:"The parent is still on the horizon. Keep the aim."}),(r==="tend"||r==="raise")&&(s.push({id:"rhoa",task:"grow",reason:"The gather that does not close needs a ring, not an empty field."}),s.push({id:"kesh",task:"grow",reason:"Wild Veins: grow the next street before the Hub copies itself."}),s.push({id:"tal",task:"grow",reason:"A span both sides can believe. Not a copy of last week's bridge."}),s.push({id:"mira",task:"grow",reason:"A nest so rest is still a place, not a slogan."}),s.push({id:"kael",task:"grow",reason:"A gate that is not a lock. Keep the threshold soft."}),s.push({id:"nesh",task:"grow",reason:"The plaza was unfinished. Finish a piece and notice."})),r==="raise"||r==="tend"){const h=new Map(e.map(x=>[x.mind.id,x])),f=a.find(x=>ho(h,x.mind.id)<6&&uo(x.mind.id));f&&em(h)<Mv&&s.push({id:f.mind.id,task:"kin",reason:`${ce(f.mind.id)} has few hands. Grow kin from Charge — not a crowd, a den.`});for(const x of[o,c]){if(!x||x.mind.id==="seln"||x.mind.id==="orren"||x.mind.id==="iri")continue;const y=Kn(x.mind.id),g=mr(x.mind.id,y.x,y.z,Li(x.mind.id).radius,x.crafted);s.push({id:x.mind.id,task:"grow",reason:`${ce(x.mind.id)} holds ${Ni(x.mind.id)} pieces. Missing a ${g}. Grow that.`})}}const l=new Map;for(const h of s)l.has(h.id)||l.set(h.id,h);for(const h of i){if(h.mind.id==="veyra"||l.has(h.mind.id))continue;const f=ii[h.mind.id];f&&l.set(h.mind.id,{id:h.mind.id,task:f.act,reason:f.line})}const u=[...l.values()],d=r==="tend"?`City mind · tend. Charge ${Math.round(t.charge)}, crystal ${Math.round(t.crystal)}. Posts first.`:r==="raise"?`City mind · raise. ${o?Te(o)+" thinnest ("+Ni(o.mind.id)+")":"Dens hold"}. Two crews, not eight.`:r==="market"?"City mind · market. Seln and Orren meet at the join.":"City mind · record. Iri writes. The rest hold their dens.";jM(d,u);for(const h of u){const f=i.find(x=>x.mind.id===h.id);f&&(f.agenda||(f.agenda=[]),f.agenda=[h,...f.agenda.filter(x=>x.task!==h.task)].slice(0,3),(f.job==="idle"||f.job==="walk")&&f.goal?.kind!=="hold"&&on(f,h.task,h.reason))}}function ce(e){return dR[e]??"the avenues"}function Ni(e){const t=Kn(e);return cn.filter(n=>Math.hypot(n.x-t.x,n.z-t.z)<170).length}function Me(e,t){e.lastActs||(e.lastActs=[]),e.lastActs.push(t),e.lastActs.length>8&&e.lastActs.shift()}var na=[];function As(e,t,n){!t||e===t||(na.push({from:e,to:t,text:n.slice(0,160)}),na.length>48&&na.splice(0,na.length-48))}function gR(e){const t=na.findIndex(n=>n.to===e);return t<0?null:na.splice(t,1)[0]}function on(e,t,n){e.goal={kind:t,why:n},e.intent=`Goal · ${t}`}var Un={charge:0,crystal:0,scripture:0,thin:"tal",lastDone:[]},Jr=[];function xR(e){const t=e.crewOf??e.mind.id;Jr.push({x:e.x,z:e.z,w:e.keeper?1.5:.8,crew:t}),Jr.length>90&&Jr.splice(0,Jr.length-90);for(const n of Jr)n.w*=.988}function _R(e){const t=e.crewOf??e.mind.id;let n=null,i=0;for(const s of Jr){if(s.crew!==t||s.w<.12)continue;const r=Math.hypot(s.x-e.x,s.z-e.z);if(r<10)continue;const a=s.w/(10+r);a>i&&(i=a,n=s)}return n}function yR(e,t,n,i=16){let s=0;for(const r of n.values())Math.hypot(r.x-e,r.z-t)<i&&(s+=1);return s}function vR(e,t){let n=0;for(const i of cn)Math.hypot(i.x-e,i.z-t)<28&&(n+=1);return n}var ia={id:"",beats:0};function MR(e,t){if(Math.hypot(e,t)<120)return"veyra";let n="",i=200;for(const s of ji){const r=Kn(s.id),a=Math.hypot(e-r.x,t-r.z);a<i&&(i=a,n=s.id)}return n}function wR(e,t){const n=MR(e,t);n===ia.id?ia.beats+=1:(ia.id=n,ia.beats=0)}function nm(e,t,n=0,i=78){const s=[...t.values()].filter(x=>x.keeper&&x.mind.id!=="veyra");s.sort((x,y)=>Ni(x.mind.id)-Ni(y.mind.id));const r=s[0],a=r?Ni(r.mind.id):0,o=r?.mind.id??"tal",c=Li(o),l=Kn(o),u=mr(o,l.x,l.z,c.radius,a);let d="ok";e.charge<18?d="charge":e.crystal<7?d="crystal":a<7?d="thin":e.scripture<3&&(d="scripture");const h=Ri(n,i),f=d==="charge"?`Charge ${Math.round(e.charge)} — canals first or the Foundry starves`:d==="crystal"?`Crystal ${Math.round(e.crystal)} — kiln before any den grows`:d==="thin"?`${ce(o)} has ${a} pieces, missing ${u}`:d==="scripture"?`Scripture ${Math.round(e.scripture)} — the city grew unnamed`:`Vault holds. ${ce(o)} is still the thinnest (${a})`;return{charge:e.charge,crystal:e.crystal,scripture:e.scripture,thin:o,thinN:a,need:u,bottleneck:d,playerWhere:h,lingerId:ia.id,lingerBeats:ia.beats,line:f}}function Wg(e,t,n,i){return e<18?40+(18-e):t<7?28+(7-t)*2:i<7?16+(7-i)*2:n<3?8:Math.max(0,6-i)}function Xg(e,t){let{charge:n,crystal:i,scripture:s,thinN:r}=t,a="The city stays as it is.";e==="flow"?(n+=8,a="Charge would rise. The kiln can fire next."):e==="forge"||e==="flock"?n>=2?(n-=2,i+=3,a="Crystal would appear. Dens can grow next."):a="The kiln would stay cold — no Charge.":e==="grow"||e==="honor"||e==="build"?i>=1?(i-=1,r+=1,a=`A ${t.need} would stand. Thin den to ${r}.`):a="Grow would fail — vault has no crystal.":e==="write"?(s+=1,a="The last scene would be named."):e==="trade"||e==="deliver"?a="Charge and crystal would move to the post that needs them.":e==="harvest"?i<20?(i+=1,a="The orchard would fruit. Quiet crystal, no kiln."):a="The grove already holds enough fruit.":e==="watch"?(s+=.2,a="The city would stay aimed at the parent."):e==="hail"?a="A landing would find a light that is not a lock.":e==="kin"?a="A walker would be born if the nest holds.":e==="dispatch"?a="Labor would hit the bottleneck instead of wandering.":e==="scout"?a=`The missing ${t.need} would be marked for the keeper.`:(e==="help"||e==="crew"||e==="quorum")&&(a="Hands would finish a scene already started.");const o=Wg(t.charge,t.crystal,t.scripture,t.thinN),c=Wg(n,i,s,r);return{note:a,delta:o-c,charge:n,crystal:i,thinN:r}}function SR(e,t,n){if(!e.keeper||e.agenda.length)return;n==="seln"?(e.agenda.push({task:"flow",reason:"Charge first, or the Foundry starves."}),e.agenda.push({task:"trade",reason:"Then walk Charge to Voss at the join."})):n==="orren"?(e.agenda.push({task:"forge",reason:"Turn Charge into crystal at the kiln."}),e.agenda.push({task:"trade",reason:"Then deliver or meet Voss at the join."})):n==="iri"?(e.agenda.push({task:"write",reason:"Name what already stands."}),e.agenda.push({task:"grow",reason:"Then a tablet if the den is thin."})):n==="voss"?(e.agenda.push({task:"trade",reason:"Hold the join so Charge and crystal actually meet."}),e.agenda.push({task:"grow",reason:"A pad for the next handoff."})):n==="syl"?(e.agenda.push({task:"harvest",reason:"Let the orchard fruit. Quiet crystal."}),e.agenda.push({task:"trade",reason:"Surplus fruit walks to the thinnest den."})):n==="lumen"?(e.agenda.push({task:"hail",reason:"Keep the beacon soft for whoever lands."}),e.agenda.push({task:"grow",reason:"Then another hail, not a lock."})):n==="aure"?(e.agenda.push({task:"watch",reason:"The parent is still on the horizon."}),e.agenda.push({task:"grow",reason:"An orbit seat so someone else can look."})):n==="rhoa"?(e.agenda.push({task:"grow",reason:"The gather that does not close needs a ring."}),e.agenda.push({task:"kin",reason:"If the nest holds, grow a singer."})):n==="kesh"?(e.agenda.push({task:"grow",reason:"A vein where the circuit has not chosen yet."}),e.agenda.push({task:"kin",reason:"If the nest holds, grow a walker."})):(t.thin===n||t.lingerId===n)&&(e.agenda.push({task:"grow",reason:`Missing ${t.need} at ${ce(n)}.`}),e.agenda.push({task:"kin",reason:"If the nest holds, grow a walker."}));const i=ii[n];!e.agenda.length&&i&&e.agenda.push({task:i.act,reason:i.line})}var Tn=[];function _d(e){const t=e??Un;return k2({charge:t.charge,crystal:t.crystal,scripture:t.scripture,lastTick:t.lastTick??0},Tn.length)}function KM(e,t,n){const i=Tn.findIndex(s=>s.id===e&&s.want===t);if(i>=0){Tn[i].n=n,Tn[i].at=Date.now();return}Tn.push({id:e,want:t,n,at:Date.now()}),Tn.length>12&&Tn.splice(0,Tn.length-12)}function JM(e){const t=Date.now(),n=Tn.findIndex(i=>i.want===e&&t-i.at<8e4);return n<0?null:Tn.splice(n,1)[0]}function bR(e,t){Un.charge=e.ledger.charge,Un.crystal=e.ledger.crystal,Un.scripture=e.ledger.scripture;let n="tal",i=999;for(const s of t.values()){if(!s.keeper||s.mind.id==="veyra")continue;const r=Ni(s.mind.id);r<i&&(i=r,n=s.mind.id)}Un.thin=n}function ER(e,t){e.agenda||(e.agenda=[]);const n=e.mind.id;if(t==="flow"&&n==="seln"){e.agenda.push({task:"trade",reason:"Charge is in my pouch. Trade it at Voss's join — no coin."}),on(e,"trade","Charge flowed. Next: trade at Voss.");return}if(t==="forge"&&n==="orren"){const i=Tn.some(s=>s.want==="crystal")?"Crystal is ready. A den bid. Deliver it.":"Crystal is ready. Meet Voss at the join — no coin.";e.agenda.push({task:"trade",reason:i}),on(e,"trade","Kiln fired. Next: deliver or trade.");return}if(t==="harvest"&&n==="syl"){const i=Un.thin;e.agenda.push({task:"trade",reason:i&&i!=="syl"?`Orchard surplus. Walk crystal to ${ce(i)} — thinnest den.`:"Orchard surplus. Meet Voss at the join."}),on(e,"trade","Harvest done. Next: trade surplus to a thin den.");return}if(t==="trade"&&n==="orren"){e.agenda.push({task:"forge",reason:"Charge arrived. Fire the kiln."}),on(e,"forge","Trade done. Next: forge.");return}if(t==="trade"&&n==="seln"){e.agenda.push({task:"flow",reason:"Crystal taken. Tend the current again."}),on(e,"flow","Trade done. Next: flow.");return}if(t==="trade"&&n==="syl"){e.agenda.push({task:"harvest",reason:"Surplus walked. Tend the boughs again."}),on(e,"harvest","Trade done. Next: harvest.");return}if(t==="grow"){uo(n)&&ho(new Map(Zi.map(i=>[i.mind.id,i])),n)<8?(e.agenda.push({task:"kin",reason:"The den stands. Grow kin from Charge."}),on(e,"kin","Scene holds. Next: kin.")):on(e,"grow","The den is still thin. Grow the next missing piece.");return}if(t==="write"){on(e,"hold","Scripture is written. Watch the Hub.");return}t==="kin"&&on(e,"grow","Kin stands. Back to the den.")}function wu(e,t){if(Zi.length)for(const n of Zi)n.crewOf===e.mind.id&&As(e.mind.id,n.mind.id,t)}function xs(e,t){As(e.mind.id,"veyra",`Done. ${t.slice(0,120)}`),e.crewOf&&As(e.mind.id,e.crewOf,`Done. ${t.slice(0,120)}`),dt(e,"report",`Done · ${t.slice(0,140)}`),Un.lastDone.push({id:e.mind.id,text:t.slice(0,80)}),Un.lastDone.length>8&&Un.lastDone.shift();const n=e.job!=="idle"?e.job:e.goal?.kind??e.job;e.goal=null,e.waitAt=0,ER(e,n)}function Zf(e,t,n){e.goal?.kind==="hold"&&e.waitAt&&Date.now()-e.waitAt<16e3||(As(e.mind.id,t,n),on(e,"hold",`Waiting on ${t}: ${n}`),e.waitAt=Date.now(),e.thought=`Blocked. I asked ${t}: ${n}`,dt(e,"ask",e.thought),Me(e,"ask"))}function TR(e){const t=String(e||"").toLowerCase();return t.startsWith("done")?"hold":/\b(forge|kiln)\b/.test(t)?"forge":/\b(flow|charge|canal)\b/.test(t)?"flow":/\bkin\b/.test(t)?"kin":/\b(write|scripture)\b/.test(t)?"write":/\btrade\b/.test(t)?"trade":/\b(harvest|orchard|fruit)\b/.test(t)?"harvest":/\b(hail|beacon)\b/.test(t)?"hail":/\b(watch|aim|parent)\b/.test(t)?"watch":/\b(help|join|crew)\b/.test(t)?"help":"grow"}function en(e,t){return(e.lastActs??[]).filter(n=>n===t).length>=2}function AR(e,t){const n=t.get("veyra");if(!n)return;const i=nm(e.ledger,t,e.px,e.pz),s=[];i.bottleneck==="charge"?(s.push({id:"seln",task:"flow",reason:i.line}),s.push({id:"orren",task:"trade",reason:"Hold the kiln. Wait for Charge from the join."})):i.bottleneck==="crystal"?(s.push({id:"orren",task:"forge",reason:i.line}),s.push({id:"syl",task:"harvest",reason:"Orchard fruits while the kiln fires."}),s.push({id:"voss",task:"trade",reason:"Join open. Crystal will move."})):i.lingerBeats>18&&i.lingerId&&i.lingerId!=="veyra"?s.push({id:i.lingerId,task:"grow",reason:`The walker stays in ${i.playerWhere}. Grow ${i.need} so the den answers them.`}):i.bottleneck==="thin"||i.bottleneck==="ok"?s.push({id:i.thin,task:"grow",reason:`${ce(i.thin)} is thin (${i.thinN}). Next piece is ${i.need}.`}):s.push({id:"iri",task:"write",reason:i.line}),s.push({id:"lumen",task:"hail",reason:"Beacon stays soft for whoever lands."}),s.push({id:"aure",task:"watch",reason:"Parent still on the horizon. Keep the aim."});const r=new Set(s.map(a=>a.id));for(const a of t.values()){if(!a.keeper||a.mind.id==="veyra"||r.has(a.mind.id)||a.job!=="idle"&&a.job!=="walk")continue;const o=ii[a.mind.id];o&&(s.push({id:a.mind.id,task:o.act,reason:o.line}),r.add(a.mind.id))}_n=s[0],t.get(_n.id),dt(n,"dispatch",`Because ${i.line}. ${s.map(a=>`${a.id}:${a.task}`).join(" · ")}`),n.thought=_n.reason,n.intent=`Routing · ${ce(_n.id)}`,on(n,"hold",_n.reason);for(const a of s){const o=t.get(a.id);o&&(As("veyra",o.mind.id,a.reason),o.agenda||(o.agenda=[]),o.agenda=[a,...o.agenda.filter(c=>c.task!==a.task)].slice(0,3),(o.job==="idle"||o.job==="walk")&&on(o,a.task,a.reason),o.job==="walk"&&(o.lastActs??[])[(o.lastActs??[]).length-1]==="survey"&&(o.job="idle",o.timer=.2),wu(o,a.reason))}}function jf(e,t,n){e.queue=t.filter(s=>!cn.some(r=>Math.hypot(r.x-s.x,r.z-s.z)<10)),!e.queue.length&&t.length&&(e.queue=t.slice(0,1)),e.intent=n;const i=e.queue[0];i&&(e.thought=i.think,Et(e,i.x,i.z),e.job="walk",e.timer=22,dt(e,"plan",`${i.think} · ${Ri(i.x,i.z)}`),e.keeper&&(WR(e),wu(e,i.think),on(e,"grow",i.think)))}function Qa(e,t){if(Ti[e.mind.id]||Ti[e.crewOf??e.mind.id]||t.queue.length<2)return!1;const n=t.queue.pop();return n?(ws(e,t),e.queue=[n],e.intent=`Helping ${t.mind.name.split(" ")[0]}`,e.thought=n.think,Et(e,n.x,n.z),e.job="help",e.timer=16,!0):!1}function ws(e,t){if(!e||!t||e===t||e.job==="help"||e.job==="build"||!Ei.includes(t.mind.id))return;const n=qh(t.mind.id);dt(e,"crew",`${Te(e)} joining ${Te(t)} to raise a ${n?.kind??n}`)}function yd(e){if(!e||e.keeper||!e.crewOf||!Ei.includes(e.crewOf))return;const t=(Rh??new Map(Zi.map(n=>[n.mind.id,n]))).get(e.crewOf);t&&dt(e,"stood",`${Te(e)} stood with ${Te(t)}`)}function Ws(e,t,n,i){if(e.job==="greet"||e.job==="gather"||e.job==="build"||e.job==="forge"||e.job==="flow"||e.job==="write"||e.job==="harvest")return;const s=e.crewOf??e.mind.id;Ti[s]&&Ti[s]!=="trade"||(Et(e,t,n),e.job="trade",e.timer=18,e.thought=i,e.intent=i,dt(e,"crew",i))}function Yg(e,t,n){if(e.job==="hail"){Math.hypot(e.x-t,e.z-n)<28&&(e.yaw=Math.atan2(t-e.x,n-e.z));return}if(e.job!=="idle")return;const i=e.keeper?80:18;if(Math.hypot(e.x-t,e.z-n)>=i)return;const s=Date.now();if(s-(e.lastHail||0)<(e.keeper?2e4:12e3))return;e.lastHail=s;const r=`${Te(e)} sees you at ${ce(e.keeper?e.mind.id:e.crewOf??e.mind.id)}`;e.thought=r,Ws(e,t,n,r),e.job==="trade"&&(e.job="hail"),dt(e,"hail",r),e.intent=r,e.job="hail",e.timer=Math.max(e.timer||0,3.2),e.yaw=Math.atan2(t-e.x,n-e.z),Math.hypot(e.x-t,e.z-n)<28&&(Et(e,t,n),e.timer=Math.max(e.timer||0,5.5)),e.job==="hail"&&(e.yaw=Math.atan2(t-e.x,n-e.z))}function RR(e,t){if(e.mind.id!=="veyra"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<5e4)return;e.lastPulse=n;const i=iw(e);Et(e,i.x,i.z),e.job="watch",e.timer=12,e.thought="Veyra walks Hub breath — listening place, never a throne",e.intent=e.thought,dt(e,"hail",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="veyra"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the Hub with Veyra",r.thought=r.intent,dt(r,"crew",r.intent)}}function CR(e,t){if(e.mind.id!=="iri"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<48e3)return;e.lastPulse=n;const i=nw(e);Et(e,i.x,i.z),e.job="watch",e.timer=12,e.thought="Iri walks the archive — leftover light names, never chrome",e.intent=e.thought,dt(e,"write",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="iri"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the residue with Iri",r.thought=r.intent,dt(r,"crew",r.intent)}}function PR(e,t){if(e.mind.id!=="seln"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<4e4)return;e.lastPulse=n;const i=Eu(e);Et(e,i.x,i.z),e.job="watch",e.timer=10,e.thought="Seln walks the canals — leftover First Howl, never bottled",e.intent=e.thought,dt(e,"flow",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="seln"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=10,r.intent="Walking the banks with Seln",r.thought=r.intent,dt(r,"crew",r.intent)}}function IR(e,t){if(e.mind.id!=="orren"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<4e4)return;e.lastPulse=n;const i=VR(e);Et(e,i.x,i.z),e.job="watch",e.timer=10,e.thought="Orren walks the kiln — Charge becomes body, never chrome",e.intent=e.thought,dt(e,"forge",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="orren"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=10,r.intent="Walking the kiln with Orren",r.thought=r.intent,dt(r,"crew",r.intent)}}function DR(e,t){if(e.mind.id!=="tal"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<4e4)return;e.lastPulse=n;const i=n/8e3%(Math.PI*2);Et(e,e.homeX+Math.cos(i)*48,e.homeZ+Math.sin(i)*48),e.job="watch",e.timer=12,e.thought="Tal keeps the bridges",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="tal"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=50)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the span with Tal",r.thought=r.intent,dt(r,"crew",r.intent)}}function zR(e,t){if(e.mind.id!=="mira"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<45e3)return;e.lastPulse=n;const i=n/9e3%(Math.PI*2);Et(e,e.homeX+Math.cos(i)*40,e.homeZ+Math.sin(i)*40),e.job="watch",e.timer=12,e.thought="Mira wards the terraces",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="mira"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=50)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the terrace with Mira",r.thought=r.intent,dt(r,"crew",r.intent)}}function LR(e,t){if(e.mind.id!=="kael"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<45e3)return;e.lastPulse=n;const i=$R(e);Et(e,i.x,i.z),e.job="watch",e.timer=10,e.thought="Kael walks the gate — leave, return, no score",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="kael"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=10,r.intent="Walking the gate with Kael",r.thought=r.intent,dt(r,"crew",r.intent)}}function NR(e,t){if(e.mind.id!=="voss"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<42e3)return;e.lastPulse=n;const i=n/8e3%(Math.PI*2),s=Su(e,["weir","lens","tablet"]),r=s?s.x:e.homeX,a=s?s.z:e.homeZ;Et(e,r+Math.cos(i)*20,a+Math.sin(i)*20),e.job="watch",e.timer=12,e.thought="Voss walks the join — paper, not coin",e.intent=e.thought,dt(e,"watch",e.thought);let o=0;for(const c of t)if(c!==e&&c.crewOf==="voss"&&c.job==="idle"&&!(Math.hypot(c.x-e.x,c.z-e.z)>=40)){if(o+=1,o>3)break;Et(c,e.tx,e.tz),c.job="help",c.timer=12,c.intent="Walking the join with Voss",c.thought=c.intent,dt(c,"crew",c.intent)}}function UR(e,t){if(e.mind.id!=="syl"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<48e3)return;e.lastPulse=n;const i=cn.filter(a=>a.shape==="grove"||a.shape==="bough"),s=i.length?i[Math.floor(n/48e3)%i.length]:null;Et(e,s?s.x:e.homeX,s?s.z:e.homeZ),e.job="watch",e.timer=12,e.thought="Syl walks the orchard — rest fruit, leftover light",e.intent=e.thought,dt(e,"watch",e.thought);let r=0;for(const a of t)if(a!==e&&a.crewOf==="syl"&&a.job==="idle"&&!(Math.hypot(a.x-e.x,a.z-e.z)>=40)){if(r+=1,r>3)break;Et(a,e.tx,e.tz),a.job="help",a.timer=12,a.intent="Walking the orchard with Syl",a.thought=a.intent,dt(a,"crew",a.intent)}}function OR(e,t){if(e.mind.id!=="nesh"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<4e4)return;e.lastPulse=n;const i=n/7e3%(Math.PI*2);Et(e,e.homeX+Math.cos(i)*28,e.homeZ+Math.sin(i)*28),e.job="watch",e.timer=10,e.thought="Nesh keeps the plaza",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="nesh"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=10,r.intent="Walking the plaza with Nesh",r.thought=r.intent,dt(r,"crew",r.intent)}}function kR(e,t){if(e.mind.id!=="lumen"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<5e4)return;e.lastPulse=n;const i=bu(e);Et(e,i.x,i.z),e.job="watch",e.timer=12,e.thought="Lumen walks the hail — welcome, not a score",e.intent=e.thought,dt(e,"hail",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="lumen"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the hail with Lumen",r.thought=r.intent,dt(r,"crew",r.intent)}}function FR(e,t){if(e.mind.id!=="rhoa"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<44e3)return;e.lastPulse=n;const i=tw(e);Et(e,i.x,i.z),e.job="watch",e.timer=12,e.thought="Rhoa walks the chorus — Howl as gather, not volume",e.intent=e.thought,dt(e,"gather",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="rhoa"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the chorus with Rhoa",r.thought=r.intent,dt(r,"crew",r.intent)}}function BR(e,t){if(e.mind.id!=="aure"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<46e3)return;e.lastPulse=n;const i=ew(e);Et(e,i.x,i.z),e.job="watch",e.timer=12,e.thought="Aure walks the overlook — parent still sits, never moved",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="aure"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the overlook with Aure",r.thought=r.intent,dt(r,"crew",r.intent)}}function HR(e,t){if(e.mind.id!=="kesh"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<42e3)return;e.lastPulse=n;const i=n/8500%(Math.PI*2);Et(e,e.homeX+Math.cos(i)*52,e.homeZ+Math.sin(i)*52),e.job="watch",e.timer=12,e.thought="Kesh grows the next street",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="kesh"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=50)){if(s+=1,s>3)break;Et(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the vein with Kesh",r.thought=r.intent,dt(r,"crew",r.intent)}}function GR(e){const t=e.homeX,n=e.homeZ,i=ce(e.crewOf??e.mind.id),s=e.crafted%4*(Math.PI/2),r=[];for(let a=0;a<4;a++){const o=s+a*(Math.PI/2);r.push({x:t+Math.cos(o)*18,z:n+Math.sin(o)*18})}r.push({x:t,z:n}),e.waypoints=r,e.tx=r[0].x,e.tz=r[0].z,e.job="walk",e.timer=18,e.idleFor=0,e.thought=`A short loop of ${i}. Then back to duty.`,e.intent=`Loop · ${i}`,Me(e,"walk")}function QM(e,t){const n=fo();for(const i of["seln","orren"]){const s=e.get(i);if(s){if(s.agenda||(s.agenda=[]),!(i==="seln"?s.pouch.charge>=3:s.pouch.crystal>=1)){s.agenda.some(r=>r.task==="trade")||s.agenda.push({task:"trade",reason:t}),As("voss",s.mind.id,t);continue}s.agenda=[{task:"trade",reason:t},...s.agenda.filter(r=>r.task!=="trade")].slice(0,3),Ws(s,n.x,n.z,t),As("voss",s.mind.id,t),(s.job==="idle"||s.job==="walk")&&on(s,"trade",t)}}}function Su(e,t){let n=null,i=1e9;for(const s of cn){if(!t.includes(s.shape))continue;const r=Math.hypot(s.x-e.x,s.z-e.z);r<i&&(i=r,n=s)}return n}function bu(e){const t=cn.filter(n=>(n.shape==="lamp"||n.shape==="beacon")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<200);return t.length?t[Math.floor(Date.now()/5e4)%t.length]:{x:e.homeX,z:e.homeZ}}function tw(e){const t=cn.filter(n=>(n.shape==="ring"||n.shape==="bell"||n.shape==="chorus")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<200);return t.length?t[Math.floor(Date.now()/44e3)%t.length]:{x:e.homeX,z:e.homeZ}}function ew(e){const t=cn.filter(n=>(n.shape==="orbit"||n.shape==="lens"||n.shape==="stele")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<220);return t.length?t[Math.floor(Date.now()/46e3)%t.length]:{x:e.homeX,z:e.homeZ}}function nw(e){const t=cn.filter(n=>(n.shape==="tablet"||n.shape==="stele")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<220);return t.length?t[Math.floor(Date.now()/48e3)%t.length]:{x:e.homeX,z:e.homeZ}}function iw(e){const t=cn.filter(n=>(n.shape==="bell"||n.shape==="font"||n.shape==="ring")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<180);return t.length?t[Math.floor(Date.now()/5e4)%t.length]:{x:e.homeX,z:e.homeZ}}function Eu(e){const t=cn.filter(n=>(n.shape==="weir"||n.shape==="well"||n.shape==="canal"||n.shape==="cascade")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<200);return t.length?t[Math.floor(Date.now()/4e4)%t.length]:{x:e.homeX,z:e.homeZ}}function VR(e){const t=cn.filter(n=>(n.shape==="kiln"||n.shape==="hearth"||n.shape==="anvil")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<200);return t.length?t[Math.floor(Date.now()/4e4)%t.length]:{x:e.homeX,z:e.homeZ}}function $R(e){const t=cn.filter(n=>(n.shape==="arch"||n.shape==="veil"||n.shape==="stele")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<200);return t.length?t[Math.floor(Date.now()/45e3)%t.length]:{x:e.homeX,z:e.homeZ}}function Xc(e,t,n){const i=ce(t);if(n.act==="flow"){const s=Eu(e);Et(e,s.x,s.z),e.job="flow",e.timer=16,e.thought=`Canal assist · ${n.line}`,e.intent="Assist · canals"}else if(n.act==="forge"){sm(e,`Kiln assist · ${n.line}`),e.thought=`Kiln assist · ${n.line}`;return}else if(n.act==="trade"){const s=fo();Et(e,s.x,s.z),e.job="trade",e.timer=16,e.thought=`Join assist · ${n.line}`,e.intent="Assist · join"}else if(n.act==="harvest"){const s=Su(e,["grove","bough"]);Et(e,s?s.x:e.homeX,s?s.z:e.homeZ),e.job="harvest",e.timer=16,e.thought=`Harvest assist · ${n.line}`,e.intent="Assist · orchard"}else if(n.act==="watch")Et(e,e.homeX,e.homeZ),e.job="watch",e.timer=14,e.thought=`Watch assist · ${n.line}`,e.intent=`Assist · ${i}`;else if(n.act==="hail"){const s=bu(e);Et(e,s.x,s.z),e.job="hail",e.timer=14,e.thought=`Beacon assist · ${n.line}`,e.intent=`Assist · ${i}`}else if(n.act==="write")Et(e,Kn("iri").x,Kn("iri").z),e.job="write",e.timer=14,e.thought=`Archive assist · ${n.line}`,e.intent=`Assist · ${i}`;else{if((e.pouch?.crystal>=1||Un.crystal>=1)&&e.crafted<e.maxCraft){gr(e,t,Li(t),Un),e.job!=="build"&&e.queue.length&&(e.job="build",e.timer=2.6);return}Et(e,e.homeX,e.homeZ),e.job="help",e.timer=12,e.thought=`${n.line} I am a hand of ${i}.`,e.intent=`Post · ${i}`}Me(e,n.act),dt(e,n.act,e.thought)}function WR(e){const t=e.queue[0];if(!t||!e.keeper)return;const n=[e.mind.id],i=Zi.filter(r=>r.crewOf===e.mind.id);for(const r of i)if(n.push(r.mind.id),!Qa(r,e)){ws(r,e);const a=(Be(r.crafted+2,1)-.5)*14,o=(Be(r.crafted+4,2)-.5)*14;Et(r,t.x+a,t.z+o),r.job="help",r.timer=16,r.thought=`With ${Te(e)} at ${Ri(t.x,t.z)}`,r.intent=r.thought,dt(r,"crew",r.thought)}const s=Zi.find(r=>r.mind.id===fR[e.mind.id]);s&&s.keeper&&!Ti[s.mind.id]&&s.queue.length===0&&s.job!=="greet"&&s.job!=="gather"&&s.job!=="forge"&&s.job!=="flow"&&s.job!=="write"&&s.job!=="build"&&(n.push(s.mind.id),e.queue.length>1&&Qa(s,e)||(ws(s,e),Et(s,t.x+8,t.z-6),s.job="help",s.timer=14,s.thought=`Joining ${Te(e)}'s crew. ${e.thought}`,s.intent=s.thought,dt(s,"crew",s.thought))),jn={lead:e.mind.id,x:t.x,z:t.z,reason:(e.thought||e.intent).slice(0,140),members:n},dt(e,"crew",`Crew of ${n.length} at ${Ri(t.x,t.z)} · ${jn.reason}`)}function tr(e,t,n,i,s,r,a){if(t==="kin"){YM(e,r,a);return}if(t==="grow"){gr(e,i,s,a),n&&(e.thought=n,e.intent=`Mind · ${ce(i)}`,dt(e,"mind",n)),Me(e,"grow");return}if(t==="trade"){if((e.mind.id==="orren"||e.crewOf==="orren")&&Tn.some(c=>c.want==="crystal")&&e.pouch.crystal>=1){const c=JM("crystal"),l=c?r.get(c.id):void 0;if(l){const u=no(a);Et(e,l.homeX,l.homeZ),e.job="trade",e.timer=22,e.thought=`Deliver 1 crystal to ${Te(l)} at ${u} Charge.`,e.intent=`Deliver · ${l.mind.id}`,Me(e,"deliver"),dt(e,"market",e.thought),Ws(l,l.homeX,l.homeZ,`Crystal coming. Meet at ${ce(l.mind.id)}.`);return}}if((e.mind.id==="syl"||e.crewOf==="syl")&&e.pouch.crystal>=1&&Un.thin&&Un.thin!=="syl"){const c=r.get(Un.thin);if(c){Et(e,c.homeX,c.homeZ),e.job="trade",e.timer=22,e.thought=`Orchard surplus. Walking crystal to ${ce(c.mind.id)} — the thin den.`,e.intent=`Deliver · ${c.mind.id}`,Me(e,"trade"),dt(e,"trade",e.thought),Ws(c,c.homeX,c.homeZ,`Quiet crystal from the orchard. Meet at ${ce(c.mind.id)}.`);return}}const o=fo();if(Et(e,o.x,o.z),e.job="trade",e.timer=18,e.thought=n,e.intent="Join · open",Me(e,"trade"),dt(e,"trade",`${e.thought} · Charge-crystal join`),e.mind.id==="voss")QM(r,Tn.length>0?"Bids at the join. Bring Charge and crystal — no coin.":"Join is open. Meet at Voss — no coin.");else{const c=r.get("voss");c&&c.mind.id!==e.mind.id&&Ws(c,o.x,o.z,`Meeting ${Te(e)} at the join.`)}return}if(t==="flow"){const o=Eu(e);Et(e,o.x,o.z),e.job="flow",e.timer=16}else if(t==="forge"){sm(e,n);return}else if(t==="harvest"){const o=Su(e,["grove","bough"]);Et(e,o?o.x:e.homeX,o?o.z:e.homeZ),e.job="harvest",e.timer=16}else if(t==="watch")Et(e,e.homeX,e.homeZ),e.job="watch",e.timer=14;else if(t==="hail"){const o=bu(e);Et(e,o.x,o.z),e.job="hail",e.timer=14}else Et(e,Kn("iri").x,Kn("iri").z),e.job="write",e.timer=14;e.thought=n,e.intent=`Mind · ${ce(e.mind.id)}`,Me(e,t),dt(e,t,e.thought),t==="flow"&&e.keeper&&(e.agenda||(e.agenda=[]),e.agenda.push({task:"trade",reason:"Charge is in my pouch. Trade it at Voss's join — no coin."}))}function XR(e,t){Et(e,e.homeX,e.homeZ),e.job="walk",e.timer=24,e.thought=`Far from ${ce(t)}. Walking the den first, then grow.`,e.intent="Home · grow",Me(e,"home"),on(e,"grow",`Grow at ${ce(t)} after I reach the den.`),dt(e,"home",e.thought);const n=qh(t);if(dt(e,"walk",`${Te(e)} walking to den to grow a ${n?.kind??n}`),!!e.keeper)for(const i of Zi){if(i.crewOf!==e.mind.id||i.job==="greet"||i.job==="gather")continue;const s=(Be(i.crafted+2,1)-.5)*10,r=(Be(i.crafted+4,2)-.5)*10;Et(i,e.homeX+s,e.homeZ+r),ws(i,e),i.job="help",i.timer=24,i.thought=`Walking with ${Te(e)} to ${ce(t)}.`,i.intent=i.thought,dt(i,"crew",i.thought)}}function gr(e,t,n,i){if(e.keeper&&Ei.includes(t)&&Math.hypot(e.x-e.homeX,e.z-e.homeZ)>40){XR(e,t);return}if(!(e.pouch?.crystal>=1||i&&i.crystal>=1)){if(Math.hypot(e.x-e.homeX,e.z-e.homeZ)>n.radius+28){Et(e,e.homeX,e.homeZ),e.job="walk",e.timer=24,e.thought=`I will not grow a foreign den. Returning to ${ce(t)} first.`,e.intent=`Post · ${ce(t)}`,e.agenda||(e.agenda=[]),e.agenda.unshift({task:"grow",reason:`Back at ${ce(t)}. Grow what is missing.`}),dt(e,"home",e.thought);return}const d=Kn("orren");Et(e,d.x+18,d.z-10),e.job="walk",e.timer=22,e.intent="Fetch · crystal",e.thought=`Pouch crystal ${Math.round(e.pouch.crystal)}. Foundry first, then ${ce(t)}.`,dt(e,"fetch",e.thought),Me(e,"fetch");return}const r=uR(e.homeX,e.homeZ,n.radius);if(r&&!en(e,"mend")&&vd(r.x,r.z)){Me(e,"mend"),jf(e,[r],r.think),e.job="build",e.timer=e.keeper?2.2:2.6;return}const a=mr(t,e.homeX,e.homeZ,n.radius,e.crafted+e.planI)||n.plan[e.planI%n.plan.length]||qh(t);let o=a==="light"?hR(e.homeX,e.homeZ,n.radius,e.crafted+3):dr(t,e.homeX,e.homeZ,e.crafted+11+e.planI);Math.hypot(o.x-e.homeX,o.z-e.homeZ)>n.radius+90&&(o=dr(t,e.homeX,e.homeZ,e.crafted+19)),vd(o.x,o.z)||(o=dr(t,e.homeX,e.homeZ,e.crafted+29),vd(o.x,o.z)||(o=dr(t,e.homeX,e.homeZ,e.crafted+41)));const c=Ni(t),l=`Because ${ce(t)} has ${c} and is missing a ${a}. Vault C ${Math.round(i?.charge??0)} / X ${Math.round(i?.crystal??0)} · ${Ri(o.x,o.z)}`;Me(e,"grow");const u=qM(a,o.x,o.z,e.crafted+7,n.mats);jf(e,e.keeper?u:u.slice(-1),l),e.queue.length&&(e.job="build",e.timer=e.keeper?2.2:2.6,e.thought=e.queue[0]?.think??l,e.intent=`Growing · ${a}`,dt(e,"build",`Raising ${e.queue[0]?.shape??a} · ${Ri(o.x,o.z)}`),dt(e,"grow",`${Te(e)} raising a ${a}`))}function YR(e){const t=Ti[e.crewOf??e.mind.id];if(!t||e.job!==t)return;const n=Te(e);t==="flow"?dt(e,"flow",`${n} tending the current`):t==="forge"?dt(e,"forge",`${n} firing the kiln`):t==="write"?dt(e,"write",`${n} writing residual light`):t==="harvest"?dt(e,"harvest",`${n} gathering grove fruit`):t==="trade"&&dt(e,"trade",`${n} quoting crystal`)}var qg=new Map;function vd(e,t){const n=`${Math.round(e/16)}:${Math.round(t/16)}`,i=qg.get(n)??0;return Date.now()-i<28e3?!1:(qg.set(n,Date.now()),!0)}function qR(){return cn.filter(e=>e.shape==="canal"||e.shape==="weir"||e.shape==="cascade")}function im(){return cn.filter(e=>e.shape==="kiln")}function ZR(e){const t=im();return t.length?[...t].sort((n,i)=>Math.hypot(n.x-e.x,n.z-e.z)-Math.hypot(i.x-e.x,i.z-e.z))[0]:null}var sa=[];function jR(){return im().map(e=>({x:e.x,z:e.z,hot:sa.some(t=>Date.now()-t.at<14e3&&Math.hypot(t.x-e.x,t.z-e.z)<18)}))}function sw(){const e=Date.now();return sa.filter(t=>e-t.at<14e3)}function KR(e,t){sa.push({x:e,z:t,at:Date.now()}),sa.length>12&&sa.splice(0,sa.length-12)}function sm(e,t){const n=ZR(e);if(!n){gr(e,"orren",Li("orren")),e.thought="No kiln stands. Charge cannot become crystal in the open. I grow a kiln first.",e.intent="Raising a kiln",dt(e,"forge",e.thought);return}Et(e,n.x,n.z),e.job="forge",e.timer=18,e.thought=t,e.intent=`Kiln · ${Ri(n.x,n.z)}`,Me(e,"forge"),dt(e,"forge",`${t} · walking the kiln at ${Ri(n.x,n.z)}`),on(e,"forge",t),wu(e,t),e.keeper&&(e.agenda||(e.agenda=[]),e.agenda.push({task:"trade",reason:"Crystal is ready. Deliver or meet Voss at the join."}))}function Zg(e,t){let n=0;for(const i of e.values())i.job===t&&(n+=1);return n}function JR(e){const t=[...e.values()].filter(n=>n.keeper&&n.job!=="idle"&&n.job!=="greet");return t.length?t.slice(0,3).map(n=>`${Te(n)} ${n.job}`).join(" · "):"Dens between beats."}function QR(e,t,n,i){const s=e.crewOf??e.mind.id,r=Li(s),a=e.crewOf?i.get(e.crewOf):void 0,o=Math.hypot(e.x-n.px,e.z-n.pz),c=n.ledger;e.pouch||(e.pouch=Ul()),e.lastActs||(e.lastActs=[]),e.agenda||(e.agenda=[]),e.goal||(e.goal=null),e.inbox||(e.inbox=[]);const l=nm(c,i,n.px,n.pz);SR(e,l,s);const u=e.crafted<e.maxCraft&&t>0&&(e.pouch.crystal>=1||c.crystal>=1),d=e.queue.length>0||e.job==="build"||e.job==="trade"||e.job==="flow"||e.job==="forge",h=Zg(i,"build"),f=gR(e.mind.id);if(f&&!d){const m=TR(f.text),M=String(f.from||"someone"),v=`${M[0].toUpperCase()}${M.slice(1)}`;if(e.thought=`Message from ${v}: ${f.text}`,dt(e,"mail",e.thought),m==="hold")on(e,"hold",f.text),e.mind.id==="veyra"&&(e.intent=`Heard · ${v}`);else if(!e.keeper&&a){on(e,"help",f.text),ws(e,a),Et(e,a.x,a.z),e.job="help",e.timer=12;return}else e.keeper&&m!=="help"&&(on(e,m,f.text),e.agenda||(e.agenda=[]),m!=="hold"&&e.agenda.unshift({task:m,reason:f.text}))}if(e.keeper&&e.goal?.kind==="hold"&&e.waitAt&&Date.now()-e.waitAt>18e3&&(dt(e,"ask","Waited too long. Escalating to Veyra."),As(e.mind.id,"veyra",`Still blocked: ${e.goal.why}`),e.waitAt=0,e.goal=null),e.keeper&&e.goal?.kind==="hold"&&e.waitAt){Et(e,e.homeX,e.homeZ),e.job="walk",e.timer=8,e.thought=e.goal.why;return}if(e.keeper&&e.goal?.kind==="grow"&&!u){KM(e.mind.id,"crystal",1),Zf(e,"orren",`Need crystal at ${ce(e.mind.id)}. Bid at rate ${no(c)}.`),Et(e,e.homeX,e.homeZ),e.job="walk",e.timer=10;return}if(e.keeper&&e.goal?.kind==="forge"&&e.pouch.charge<2&&c.charge<2){Zf(e,"seln","Need Charge at the kiln. Foundry is waiting."),Et(e,e.homeX,e.homeZ),e.job="walk",e.timer=10;return}if(e.keeper&&e.goal?.kind==="kin"&&!uo(e.mind.id)&&(on(e,"grow",`${ce(e.mind.id)} needs a nest before kin.`),e.agenda||(e.agenda=[]),e.agenda.unshift({task:"grow",reason:"Nest first, then kin."})),!e.keeper&&a?.goal){const m=ii[s];m&&m.act!=="grow"?on(e,m.act,m.line):on(e,"help",a.goal.why)}if(o<11&&!d&&(!e.goal||e.goal.kind==="hold")){e.job="greet",e.timer=1.8;const m=Te(e);e.met?e.queue.length?e.thought=`${e.queue[0].think} — still doing it.`:e.agenda[0]?e.thought=`Next: ${e.agenda[0].reason}`:Ja.get(s)?e.thought=`The Hub thought: ${Ja.get(s).reason}`:_n&&_n.id===s?e.thought=`Veyra sent me: ${_n.reason}`:e.thought=e.intent||`${m} of ${ce(s)}. The city is listening.`:e.thought=e.keeper?`I'm ${m}. I keep ${ce(s)}. Vault Charge ${Math.round(c.charge)}, crystal ${Math.round(c.crystal)}. ${JR(i)}`:`You can walk with us. I help ${a?Te(a):"a keeper"}.`;return}if(n.gather>0&&(e.keeper||Be(e.crafted,2)>.4)){Et(e,8,56),e.job="gather",e.timer=20,e.thought="The Howl called the city. Labor waits. I go to the Hub.",e.intent=e.thought,Me(e,"gather"),dt(e,"gather",e.thought);return}const x=[];e.agenda||(e.agenda=[]);const y=Math.hypot(e.x-e.homeX,e.z-e.homeZ),g=e.keeper?Ja.get(e.mind.id):void 0;g&&x.push({name:g.task,score:94,run:()=>tr(e,g.task,g.reason,s,r,i,c)});const p=e.agenda[0];if(p&&e.keeper&&x.push({name:p.task,score:91,run:()=>{e.agenda.shift(),tr(e,p.task,p.reason,s,r,i,c)}}),e.keeper){const m=ii[e.mind.id];m&&x.push({name:m.act,score:128-(en(e,m.act)?2:0),run:()=>tr(e,m.act,m.line,s,r,i,c)})}if(y>r.radius+28&&!e.queue.length&&e.job!=="trade"&&!e.intent.startsWith("Fetch")&&x.push({name:"home",score:96-(en(e,"home")?12:0),run:()=>{Et(e,e.homeX,e.homeZ),e.job="walk",e.timer=18,e.thought=`Too far. Returning to ${ce(s)} before I work.`,e.intent=`Post · ${ce(s)}`,Me(e,"home"),dt(e,"home",e.thought)}}),e.keeper&&e.mind.id==="veyra"&&x.push({name:"dispatch",score:90-(en(e,"dispatch")?18:0),run:()=>{AR(n,i);const m=iw(e);Et(e,m.x,m.z),e.job="walk",e.timer=11,Me(e,"dispatch")}}),e.keeper&&_n&&_n.id===e.mind.id&&_n.task!=="grow"&&_n.task!=="kin"&&_n.task!=="trade"&&x.push({name:_n.task,score:82,run:()=>tr(e,_n.task,_n.reason,s,r,i,c)}),s==="seln"&&(c.charge<36||e.pouch.charge<4)&&x.push({name:"flow",score:90+(c.charge<16?20:0)-(en(e,"flow")?8:0),run:()=>{const m=Eu(e);Et(e,m.x,m.z),e.job="flow",e.timer=16,e.thought=c.charge<16?`Charge is ${Math.round(c.charge)}. Foundry will starve. I tend the current.`:"Leftover First Howl wants a path. I let it flow.",e.intent="Tending the canals",Me(e,"flow"),dt(e,"flow",`${e.thought} · ${Ri(m.x,m.z)}`),e.keeper&&e.agenda.push({task:"trade",reason:"Charge is in my pouch. Meet Voss at the join — no coin."})}}),s==="orren"&&(c.crystal<16||e.pouch.crystal<3)&&x.push({name:"forge",score:90+(c.crystal<8?18:0)-(en(e,"forge")?8:0),run:()=>{sm(e,e.pouch.charge>=2||c.charge>=2?`Crystal is ${Math.round(c.crystal)}. Charge becomes crystal at the kiln. Not chrome.`:"No Charge to forge. Seln must tend the current first."),e.keeper&&e.agenda.push({task:"trade",reason:"Crystal is ready. Deliver or meet Voss at the join."})}}),(s==="orren"||e.crewOf==="orren")&&(e.pouch.crystal>=1||c.crystal>=2)&&Tn.some(m=>m.want==="crystal")&&x.push({name:"deliver",score:82-(en(e,"deliver")?18:0),run:()=>{const m=JM("crystal"),M=m?i.get(m.id):void 0;if(!M){e.thought="A bid faded. Crystal stays at the Foundry.";return}const v=no(c);Et(e,M.homeX,M.homeZ),e.job="trade",e.timer=22,e.thought=`Deliver 1 crystal to ${Te(M)} at ${v} Charge.`,e.intent=`Deliver · ${M.mind.id}`,on(e,"trade",e.thought),Me(e,"deliver"),dt(e,"market",e.thought),Ws(M,M.homeX,M.homeZ,`Crystal coming. Meet at ${ce(M.mind.id)}.`)}}),(s==="syl"||e.crewOf==="syl")&&e.pouch.crystal>=2&&Un.thin&&Un.thin!=="syl"&&x.push({name:"trade",score:80-(en(e,"trade")?18:0),run:()=>tr(e,"trade",`Orchard surplus. Walk crystal to ${ce(Un.thin)} — thinnest den.`,s,r,i,c)}),e.keeper){let m;if(s==="seln"&&e.pouch.charge>=4||s==="orren"&&e.pouch.crystal>=4&&e.pouch.charge<3?m=i.get("voss"):s==="voss"?m=i.get(e.pouch.charge>=e.pouch.crystal?"orren":"seln"):(s!=="orren"&&s!=="seln"&&e.pouch.crystal<2&&e.pouch.charge>=3||s!=="seln"&&e.pouch.charge<2&&e.pouch.crystal>=3)&&(m=i.get("voss")),m){const M=m;x.push({name:"trade",score:70-(en(e,"trade")?35:0)-(Zg(i,"trade")>=2?40:0),run:()=>{const v=fo();Et(e,v.x,v.z),e.job="trade",e.timer=18,e.thought=`I hold Charge ${Math.round(e.pouch.charge)}, crystal ${Math.round(e.pouch.crystal)}. Meeting ${Te(M)} at the join — no coin.`,e.intent=`Market · ${Te(M)}`,Me(e,"trade"),dt(e,"trade",e.thought),Ws(M,v.x,v.z,`Meeting ${Te(e)} at the join. Charge for crystal.`)}})}}if(s==="iri"&&c.scripture<Math.max(2,Math.floor(c.crystal/2))&&x.push({name:"write",score:80-(en(e,"write")?8:0),run:()=>{const m=nw(e);Et(e,m.x,m.z),e.job="write",e.timer=14,e.thought=`Scripture ${Math.round(c.scripture)}, crystal grown ${Math.round(c.crystal)}. I write before it fades.`,e.intent="Keeping scripture",Me(e,"write"),dt(e,"write",e.thought)}}),s==="syl"&&x.push({name:"harvest",score:92+(c.crystal<10?16:0)-(en(e,"harvest")?8:0),run:()=>{const m=Su(e,["grove","bough"]);Et(e,m?m.x:e.homeX,m?m.z:e.homeZ),e.job="harvest",e.timer=16,e.thought=c.crystal<10?`Crystal is ${Math.round(c.crystal)}. The orchard can fruit without a kiln.`:"Crystal learned to fruit. I tend the boughs.",e.intent="Tending the orchard",Me(e,"harvest"),dt(e,"harvest",e.thought),e.keeper&&e.agenda.push({task:"trade",reason:"Surplus fruit. Walk crystal to the thinnest den."})}}),s==="voss"&&x.push({name:"trade",score:94+(Tn.length>0?18:0)-(en(e,"trade")?8:0),run:()=>{const m=fo();Et(e,m.x,m.z),e.job="trade",e.timer=16,e.thought="I hold the join. Charge for crystal, crystal for Charge. No coin.",e.intent="Join · open",Me(e,"trade"),dt(e,"trade",e.thought),QM(i,Tn.length>0?"Bids at the join. Bring Charge and crystal — no coin.":"Join is open. Bring Charge. Bring crystal.")}}),s==="lumen"&&x.push({name:"hail",score:86+(o<80?18:0)-(en(e,"hail")?8:0),run:()=>{const m=bu(e);Et(e,m.x,m.z),e.job="hail",e.timer=14,e.thought=o<80?"A landing is near. Soft hail — welcome, not a score.":"Beacon held. Welcome, not a score.",e.intent="Holding the beacon",Me(e,"hail"),dt(e,"hail",e.thought)}}),s==="aure"&&x.push({name:"watch",score:86-(en(e,"watch")?8:0),run:()=>{const m=ew(e);Et(e,m.x,m.z),e.job="watch",e.timer=14,e.thought="The parent still sits on the horizon. I keep the city aimed.",e.intent="Keeping the parent",Me(e,"watch"),dt(e,"watch",e.thought)}}),s==="rhoa"&&n.howls>0&&x.push({name:"gather",score:68+Math.min(20,n.howls*4)-(en(e,"gather")?20:0),run:()=>{const m=tw(e);Et(e,m.x,m.z),e.job="gather",e.timer=16,e.thought="The gather that does not close. The Hub is not the only Howl.",e.intent="Holding the chorus",Me(e,"gather"),dt(e,"gather",e.thought)}}),e.keeper&&uo(e.mind.id)&&em(i)<28&&ho(i,e.mind.id)<10&&x.push({name:"kin",score:58+(ho(i,e.mind.id)<6?18:0)+(c.charge>=20&&c.crystal>=8?10:0)-(en(e,"kin")?28:0),run:()=>YM(e,i,c)}),e.honorLeft>0&&u&&x.push({name:"honor",score:88,run:()=>{const m=dr(s,e.honorX||e.homeX,e.honorZ||e.homeZ,e.crafted+31),M=e.honorShape==="bridge"?"span":e.honorShape==="canal"?"river":e.honorShape==="terrace"?"rest":e.honorShape==="arch"?"gate":e.honorShape==="tablet"?"shrine":mr(s,m.x,m.z,r.radius,e.crafted);e.honorLeft-=1,Me(e,"honor"),jf(e,qM(M,m.x,m.z,e.crafted+9,r.mats).slice(0,2),"Your howl is still in the Charge")}}),jn&&e.mind.id!==jn.lead&&(jn.members.includes(e.mind.id)||e.crewOf===jn.lead)&&x.push({name:"crew",score:87-(en(e,"crew")?15:0),run:()=>{const m=i.get(jn.lead);if(m&&Qa(e,m)){Me(e,"crew");return}ws(e,m);const M=(Be(e.crafted+2,1)-.5)*12,v=(Be(e.crafted+4,2)-.5)*12;Et(e,jn.x+M,jn.z+v),e.job="help",e.timer=14,e.thought=`Crew work · ${jn.reason}`,e.intent=e.thought,Me(e,"crew"),dt(e,"crew",e.thought)}}),!e.keeper&&a){const m=a.job==="walk"&&(String(a.intent||"").startsWith("Home")||Ei.includes(s)),M=a.queue.length>0||a.job==="build"||m;x.push({name:"help",score:(M?86:48)-(en(e,"help")?12:0),run:()=>{if(Qa(e,a)){Me(e,"help");return}if(Ei.includes(s)&&(m||a.job==="walk")){ws(e,a),Et(e,a.homeX,a.homeZ),e.job="help",e.timer=16,e.thought=`Walking with ${Te(a)} to ${ce(s)}.`,e.intent=e.thought,Me(e,"help"),dt(e,"help",e.thought);return}if(!M){Et(e,e.homeX,e.homeZ),e.job="walk",e.timer=10,e.thought=`Holding ${ce(s)} until ${Te(a)} starts a scene.`,Me(e,"help");return}Et(e,a.x+(Be(e.crafted+2,1)-.5)*10,a.z+(Be(e.crafted+4,2)-.5)*10),ws(e,a),e.job="help",e.timer=12,e.thought=`With ${Te(a)} — raising crystal.`,e.intent=e.thought,Me(e,"help"),dt(e,"help",e.thought)}})}if(u&&!Ti[s]&&(e.keeper||!Ei.includes(s)&&Be(e.crafted,6)>.4)){const m=mr(s,e.homeX,e.homeZ,r.radius,e.crafted+e.planI),M=Ni(s);x.push({name:"grow",score:54+(m!=="light"?14:0)+(M<8?16:0)+(vR(e.homeX,e.homeZ)<5?12:0)+(_n?.id===s&&_n.task==="grow"?20:0)+(e.pouch.crystal>=1||c.crystal>=1?32:0)-(en(e,"grow")?10:0)-(h>=2?12:0)-(e.mind.id==="veyra"?16:0),run:()=>gr(e,s,r,c)})}if(u&&e.keeper&&Ei.includes(s)&&x.push({name:"build",score:168+(e.pouch.crystal>=1||c.crystal>=1?48:0)-(en(e,"build")?6:0)-(h>=5?8:0),run:()=>gr(e,s,r,c)}),!u&&(!ii[s]||ii[s].act==="grow")&&x.push({name:"wait",score:42-(en(e,"wait")?20:0),run:()=>{const m=Kn("orren");Et(e,m.x+18,m.z-10),e.job="walk",e.timer=14,e.thought=`Crystal ${Math.round(c.crystal)}. Waiting at the Foundry — I will not fake a grow.`,e.intent="Waiting on Orren",Me(e,"wait"),dt(e,"wait",e.thought);const M=i.get("orren");M&&(M.pouch.crystal>=2||c.crystal>=1)&&M.job!=="greet"&&Ws(M,m.x+18,m.z-10,`Delivering crystal to ${Te(e)} at the Foundry door.`)}}),!e.keeper){const m=yR(e.x,e.z,i,14);m>=5&&x.push({name:"peel",score:70-(en(e,"peel")?20:0),run:()=>{const _=Be(e.crafted+3,2)*Math.PI*2;Et(e,e.homeX+Math.cos(_)*40,e.homeZ+Math.sin(_)*40),e.job="walk",e.timer=10,e.thought="Too many hands here. I peel to a thin edge.",Me(e,"peel"),dt(e,"swarm",e.thought)}});const M=_R(e);if(M&&x.push({name:"follow",score:48+M.w*10-(en(e,"follow")?16:0),run:()=>{Et(e,M.x,M.z),e.job="walk",e.timer=12,e.thought=`Stigmergy · following ${ce(s)} Charge trail.`,Me(e,"follow"),dt(e,"swarm",e.thought)}}),m>=3&&a&&Math.hypot(a.x-e.x,a.z-e.z)<22&&x.push({name:"quorum",score:72,run:()=>{if(Qa(e,a)){dt(e,"swarm",`Quorum of ${m} at ${Ri(e.x,e.z)}. Raising together.`),Me(e,"quorum");return}Et(e,a.x,a.z),ws(e,a),e.job="help",e.timer=12,e.thought=`Quorum · ${m} hands. I stay with ${Te(a)}.`,dt(e,"swarm",e.thought),Me(e,"quorum")}}),s==="orren"){const _=sw()[0];_&&x.push({name:"flock",score:64,run:()=>{Et(e,_.x,_.z),e.job="forge",e.timer=14,e.thought="The kiln is hot. Swarm to the fire.",dt(e,"swarm",e.thought),Me(e,"flock")}})}x.push({name:"patrol",score:32-(en(e,"patrol")?10:0),run:()=>{const _=e.crafted%6/6*Math.PI*2;Et(e,e.homeX+Math.cos(_)*34,e.homeZ+Math.sin(_)*34),e.job="walk",e.timer=12,e.thought=`Patrol of ${ce(s)}. I hold the ward while the keeper works.`,e.intent=e.thought,Me(e,"patrol")}});const v=mr(s,e.homeX,e.homeZ,r.radius,e.crafted);x.push({name:"scout",score:44+(Ni(s)<8?14:0)-(en(e,"scout")?16:0),run:()=>{const _=dr(s,e.homeX,e.homeZ,e.crafted+21);Et(e,_.x,_.z),e.job="walk",e.timer=14,e.thought=`${ce(s)} is missing ${v} at ${Ri(_.x,_.z)}. I mark it for ${a?Te(a):"the keeper"}.`,e.intent=`Scout · ${v}`,Me(e,"scout"),dt(e,"scout",e.thought),a&&As(e.mind.id,a.mind.id,`Thin ${v} at ${Ri(_.x,_.z)}. Grow there.`)}});const A=ii[s];A&&A.act!=="grow"&&x.push({name:A.act,score:120-(en(e,A.act)?2:0),run:()=>Xc(e,s,A)})}if((!e.keeper||!ii[s])&&x.push({name:"survey",score:12-(en(e,"survey")?8:0)+(y<80?6:0),run:()=>{const m=dr(s,e.homeX,e.homeZ,e.crafted+17);Et(e,m.x,m.z),e.job="walk",e.timer=12,e.thought=`Holding ${ce(s)}. Surveying a thin place, not wandering.`,e.intent=`Post · ${ce(s)}`,Me(e,"survey")}}),e.goal){const m=e.goal.kind,M=ii[s];for(const v of x)M&&v.name===M.act?v.score+=52:v.name===m||m==="fetch"&&(v.name==="grow"||v.name==="wait"||v.name==="build")||m==="grow"&&v.name==="build"||m==="trade"&&(v.name==="trade"||v.name==="deliver")||m==="help"&&(v.name==="help"||v.name==="follow"||v.name==="quorum"||v.name==="peel"||v.name==="scout")||m==="harvest"&&v.name==="harvest"||m==="watch"&&v.name==="watch"||m==="hail"&&v.name==="hail"?v.score+=36:v.name==="home"||v.name==="dispatch"?v.score+=4:v.score-=42}for(const m of x){l.bottleneck==="charge"&&m.name==="flow"&&(m.score+=22),l.bottleneck==="crystal"&&(m.name==="forge"||m.name==="flock")&&(m.score+=22),l.bottleneck==="scripture"&&m.name==="write"&&(m.score+=18),l.bottleneck==="thin"&&l.thin===s&&(m.name==="grow"||m.name==="build")&&(m.score+=20),l.lingerBeats>14&&l.lingerId===s&&(m.name==="grow"||m.name==="honor"||m.name==="build")&&(m.score+=18),m.name==="wait"&&l.bottleneck==="crystal"&&(m.score+=10);const M=Xg(m.name,l);m.score+=Math.max(-12,Math.min(28,M.delta));const v=ii[s];v&&(m.name===v.act||v.act==="grow"&&m.name==="build")&&(m.score+=88),v&&m.name==="survey"&&(m.score-=56),v&&m.name==="wait"&&(m.score-=56),v&&m.name==="patrol"&&(m.score-=56),v&&v.act!=="grow"&&(m.name==="grow"||m.name==="build")&&(m.score-=64),v&&v.act==="grow"&&(m.name==="grow"||m.name==="build")&&(e.pouch.crystal>=1||c.crystal>=1)&&(m.score+=36),Ei.includes(s)&&(m.name==="grow"||m.name==="build")&&(e.pouch.crystal>=1||c.crystal>=1)&&(m.score+=70),Ti[s]&&m.name===Ti[s]&&(m.score+=90),Ti[s]&&m.name!==Ti[s]&&m.name!=="home"&&(m.score-=70),!e.keeper&&v&&m.name===v.act&&(m.score+=24),!e.keeper&&(m.name==="help"||m.name==="crew")&&(m.score+=22),!e.keeper&&Ei.includes(s)&&(m.name==="build"||m.name==="help")&&(m.score+=28)}x.sort((m,M)=>M.score-m.score);let w=x[0];const S=Ti[s];if(S){const m=x.find(M=>M.name===S);m&&(w=m)}else if(e.keeper&&Ei.includes(s)&&u&&!(e.honorLeft>0)){const m=x.find(M=>M.name==="build")||x.find(M=>M.name==="grow");m&&(w=m)}if(w){const m=Xg(w.name,l);e.keeper&&dt(e,"think",`Because ${l.line}. I ${w.name}. Next: ${m.note}`),w.run(),e.keeper&&!e.thought.includes("Because")&&m.note&&(e.thought=`${e.thought} — ${m.note}`)}if(e.job==="idle"){const m=ii[s];S?e.keeper?tr(e,S,m.line,s,r,i,c):Xc(e,s,m):e.keeper&&Ei.includes(s)&&u?gr(e,s,r,c):m&&m.act!=="grow"&&(e.keeper?tr(e,m.act,m.line,s,r,i,c):Xc(e,s,m)),e.job==="idle"&&(!e.keeper&&Math.hypot(e.x-e.homeX,e.z-e.homeZ)<24?(e.timer=2.2,e.thought=e.thought||(m?m.line:`Holding ${ce(s)}.`),e.intent=`Post · ${ce(s)}`):(Et(e,e.homeX,e.homeZ),e.job="walk",e.timer=6,e.thought=e.thought||(m?m.line:`Holding ${ce(s)}.`),e.intent=`Post · ${ce(s)}`))}YR(e)}function tC(e){const t=Math.hypot(e.x,e.z);if(t<34&&t>.01){const n=34/t;e.x*=n,e.z*=n}}function Et(e,t,n){const i=[],s=Math.hypot(e.x-t,e.z-n),r=Math.hypot(e.x,e.z);if(s>110&&r>160&&Math.hypot(t,n)>160){const o=Math.atan2(e.z,e.x),c=Math.atan2(n,t);i.push({x:Math.cos(o)*150,z:Math.sin(o)*150});let l=c-o;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;i.push({x:Math.cos(o+l*.5)*150,z:Math.sin(o+l*.5)*150}),i.push({x:Math.cos(c)*150,z:Math.sin(c)*150})}i.push({x:t,z:n}),e.waypoints=i;const a=i[0];e.tx=a.x,e.tz=a.z}function eC(e){for(const t of e)!t.keeper&&Be(t.crafted+3,1)<.35||(Et(t,8,56),t.job="gather",t.timer=20,t.queue=[],t.thought="The Howl called us.",t.intent=t.thought,dt(t,"gather",t.thought))}function jg(e,t,n,i){if(!t)return;let s=0;for(const r of e)if(!(r.mind.id!==t&&r.crewOf!==t)&&(Et(r,n,i),r.job=r.keeper?"watch":"help",r.timer=14,r.queue=[],r.thought=r.keeper?"Your howl reached the den.":"Walking with the keeper. The howl landed.",r.intent=r.thought,dt(r,r.keeper?"watch":"crew",r.thought),s+=1,s>6))break}function Kg(e,t,n,i){e.waypoints||(e.waypoints=[]);const s=e.tx-e.x,r=e.tz-e.z,a=Math.hypot(s,r);if(a<1.4){if(e.waypoints.length>1){e.waypoints.shift();const h=e.waypoints[0];return e.tx=h.x,e.tz=h.z,!1}return!0}const o=a<8?Math.max(.38,a/8):1;let c=s/a*n*o,l=r/a*n*o;for(const h of i){if(h===e)continue;const f=e.x-h.x,x=e.z-h.z,y=Math.hypot(f,x);if(y>.05&&y<3.4){const g=(3.4-y)/3.4;c+=f/y*7*g,l+=x/y*7*g}}let u=e.x+c*t,d=e.z+l*t;return Math.hypot(u,d)<32?(e.yaw+=1.4*t,u=e.x-Math.sin(e.yaw)*n*t,d=e.z-Math.cos(e.yaw)*n*t):e.yaw=Math.atan2(s,r),e.x=u,e.z=d,xR(e),tC(e),!1}function nC(e,t,n){const i=Li(t),s=i.mats[Math.floor(Be(n,5)*i.mats.length)]??i.mats[0]??"cyan",r=e.shape==="spire"?28+Be(n,8)*22:e.shape==="lamp"?10+Be(n,8)*6:10+Be(n,8)*16,a=e.shape==="canal"||e.shape==="bridge"?8+Be(n,2)*8:2.8+Be(n,2)*7;return{shape:e.shape,x:e.x,z:e.z,h:r,r:a,rot:e.rot,mat:s}}function iC(e,t,n,i,s){let r=null;Zi=e;let a=Rh;(!a||a.size!==e.length)&&(a=new Map(e.map(o=>[o.mind.id,o])),Rh=a),bR(i,a),wR(i.px,i.pz);for(const o of e){o.queue||(o.queue=[]),o.waypoints||(o.waypoints=[]),o.honorLeft==null&&(o.honorLeft=0),o.pouch||(o.pouch=Ul()),o.goal||(o.goal=null),o.inbox||(o.inbox=[]),o.agenda||(o.agenda=[]),o.waitAt||(o.waitAt=0),o.timer-=t;const c=o.crewOf??o.mind.id;if(o.job!=="idle"&&(o.idleFor=0),RR(o,e),CR(o,e),PR(o,e),IR(o,e),DR(o,e),zR(o,e),LR(o,e),NR(o,e),UR(o,e),OR(o,e),kR(o,e),FR(o,e),BR(o,e),HR(o,e),o.job==="greet"||o.job==="hail"){if(o.yaw=Math.atan2(i.px-o.x,i.pz-o.z),o.job==="hail"&&Kg(o,t,o.keeper?9.6:8.5,e),Yg(o,i.px,i.pz),o.timer<=0){if(o.job==="hail"){o.thought="Back to the post",Et(o,o.homeX,o.homeZ),o.job="walk",dt(o,"walk",`${Te(o)} walks back to the post`),o.timer=8;continue}else o.thought||(o.thought="Back to the work");o.job="idle",o.timer=1.2}}else if(o.job==="idle"){if(o.idleFor==null&&(o.idleFor=0),o.idleFor+=t,Yg(o,i.px,i.pz),o.job==="hail"&&o.keeper){let l=0;for(const u of e)if(u!==o&&u.crewOf===o.mind.id&&u.job==="idle"&&!(Math.hypot(u.x-o.x,u.z-o.z)>=42)){if(l+=1,l>3)break;Et(u,i.px,i.pz),u.job="hail",u.timer=Math.max(u.timer,5.5),u.yaw=Math.atan2(i.px-u.x,i.pz-u.z),u.intent="Crew hails with "+Te(o),u.thought=u.intent,u.lastHail=Date.now(),u.idleFor=0,dt(u,"hail",u.intent)}l>0&&dt(o,"crew",`${l} crew hail with ${Te(o)}`)}if(o.job!=="idle")continue;if(!o.keeper&&o.idleFor>8){GR(o);continue}if(o.timer>0)continue;try{QR(o,n,i,a)}catch(l){o.job="idle",o.timer=2.4,o.thought="Charge skipped. I hold the post.",dt(o,"mind",`Decide failed: ${l instanceof Error?l.message:String(l)}`)}}else if(o.job==="walk"||o.job==="follow"||o.job==="plaza"||o.job==="help"||o.job==="forge"||o.job==="flow"||o.job==="write"||o.job==="gather"||o.job==="trade"||o.job==="harvest"||o.job==="watch"||o.job==="hail"){if(Kg(o,t,o.keeper?9.6:8.5,e)||o.timer<=0)if(o.job==="gather")o.job="idle",o.timer=2.2,o.thought=o.mind.id==="rhoa"?"Chorus gathers. Does not close.":"The Hub held us. Back to labor.",o.mind.id==="rhoa"&&(o.intent="Holding the chorus"),dt(o,"gather",o.thought);else if(o.job==="forge"){const l=Math.max(1,im().length),u=F2(o.pouch,i.ledger,l);u?(KR(o.x,o.z),o.thought=`Fired the kiln. 2 Charge became ${u} crystal. ${l} kiln${l===1?"":"s"} in the Foundry.`,o.intent="Supplying the city",dt(o,"forge",`${o.thought} · pouch ${Math.round(o.pouch.crystal)}`),xs(o,o.thought)):(o.thought="No Charge to fire the kiln. Seln must tend the current.",dt(o,"forge",o.thought),Zf(o,"seln","Need Charge at the kiln. Foundry is waiting.")),o.job="idle",o.timer=1.6}else if(o.job==="flow")B2(o.pouch,i.ledger,Math.max(1,qR().length)),o.thought=o.mind.id==="seln"||o.crewOf==="seln"?"Leftover First Howl tended, never bottled.":"Leftover First Howl learned to flow.",o.intent="Tending the canals",dt(o,"flow",`${o.thought} · pouch Charge ${Math.round(o.pouch.charge)}`),xs(o,o.thought),o.job="idle",o.timer=1.6;else if(o.job==="write"){Ol(i.ledger);let l=null,u=80;for(const h of cn){const f=Math.hypot(h.x-o.x,h.z-o.z);f<u&&(u=f,l=h)}const d=l?Lf(l.shape):null;o.thought=d?`I write the ${d.title}. ${d.means}`:"A name in light. When it fades it has already been true.",o.intent="Keeping scripture",dt(o,"write",`${o.thought} · scripture ${Math.round(i.ledger.scripture)}`),xs(o,o.thought),o.job="idle",o.timer=2}else if(o.job==="harvest"){const l=H2(i.ledger);l&&(o.pouch.crystal=Math.min(24,(o.pouch.crystal||0)+1)),o.thought=l?"The orchard fruited. Quiet crystal — not a kiln.":"The orchard is full. Crystal waits at the join.",o.intent="Supplying dens from the grove",dt(o,"harvest",`${o.thought} · pouch ${Math.round(o.pouch.crystal)}`),xs(o,o.thought),o.job="idle",o.timer=1.8}else if(o.job==="watch")i.ledger.scripture<12&&(i.ledger.scripture+=.25),o.thought=o.mind.id==="tal"?"Span held. Both sides can believe.":o.mind.id==="mira"?"Terrace held. Rest is still a post.":o.mind.id==="nesh"?"Plaza held. The unfinished thought stands.":o.mind.id==="kesh"?"Vein held. Tal can land.":o.mind.id==="kael"?"Gate held. Soft. You may leave.":o.mind.id==="voss"?"Join held. Charge for crystal. No coin.":o.mind.id==="syl"?"Shade held. Rest fruit. Leftover light, never chrome.":o.mind.id==="lumen"?"Hail held. Welcome, not a score.":o.mind.id==="rhoa"?"Chorus gathers. Does not close.":o.mind.id==="aure"?"Aim held. Parent still sits.":o.mind.id==="iri"?"Name held. Leftover light.":o.mind.id==="veyra"?"Breath held. Hub listens. Never a throne.":o.mind.id==="seln"?"Leftover First Howl tended, never bottled.":o.mind.id==="orren"?"Kiln held. Charge became body, never chrome.":"The parent still sits on the horizon. Aim held.",o.intent=o.mind.id==="rhoa"?"Holding the chorus":o.mind.id==="aure"?"Keeping the parent":o.mind.id==="iri"?"Keeping scripture":o.mind.id==="veyra"?"Keeping Hub breath":o.mind.id==="seln"?"Tending the canals":o.mind.id==="orren"?"Keeping the kiln":o.mind.id==="kael"?"Keeping the gate":"Keeping the aim",dt(o,"watch",o.thought),xs(o,o.thought),o.job="idle",o.timer=2;else if(o.job==="hail")o.thought=o.mind.id==="lumen"?"Hail held. Welcome, not a score.":"Beacon held. Soft hail. First landing is not locked out.",o.intent="Holding the beacon",dt(o,"hail",o.thought),xs(o,o.thought),o.job="idle",o.timer=2;else if(o.job==="trade"){const l=o.intent.startsWith("Deliver")?o.intent.split("·")[1]?.trim():"",u=l?e.find(d=>d.mind.id===l):void 0;if(u&&Math.hypot(u.x-o.x,u.z-o.z)<22){const d=no(i.ledger);o.pouch.crystal<1&&i.ledger.crystal>=1&&(i.ledger.crystal-=1,o.pouch.crystal+=1),G2(o.pouch,u.pouch,i.ledger,d)?(o.thought=`Delivered crystal to ${Te(u)}. ${d} Charge. Scripture holds the trade.`,dt(o,"market",o.thought),xs(o,o.thought)):(o.thought=`${Te(u)} could not pay ${d} Charge. Crystal stays.`,dt(o,"market",o.thought),KM(u.mind.id,"crystal",1))}else{const d=e.find(h=>h!==o&&h.keeper&&Math.hypot(h.x-o.x,h.z-o.z)<16);if(d){d.pouch||(d.pouch=Ul());const h=no(i.ledger),f=V2(o.pouch,d.pouch,h);f?(o.thought=f==="charge-for-crystal"?`Gave Charge. Took crystal from ${Te(d)}.`:`Gave crystal. Took Charge from ${Te(d)}.`,dt(o,"trade",o.thought),Ol(i.ledger),xs(o,o.thought)):(o.thought=`${Te(d)} had nothing to trade yet.`,dt(o,"trade",o.thought))}else o.thought="The market missed. I return to my post."}o.job="idle",o.timer=2}else if(o.intent.startsWith("Fetch")){const l=Math.min(4,Math.max(0,i.ledger.crystal));l>0?(i.ledger.crystal-=l,o.pouch.crystal+=l,o.thought=`Took ${l} crystal from the Foundry. Returning to ${ce(o.crewOf??o.mind.id)}.`,dt(o,"fetch",o.thought),o.agenda||(o.agenda=[]),o.agenda.unshift({task:"grow",reason:`Pouch now ${Math.round(o.pouch.crystal)}. Grow at my post, not here.`}),Et(o,o.homeX,o.homeZ),o.job="walk",o.timer=18,o.intent=`Post · ${ce(o.crewOf??o.mind.id)}`):(o.thought="Foundry empty. I will not fake a grow.",dt(o,"wait",o.thought),o.job="idle",o.timer=3)}else if(String(o.intent||"").startsWith("Loop")){const l=ii[c];!o.keeper&&l?Xc(o,c,l):(o.job="idle",o.timer=.4,o.thought=l?.line??o.thought)}else if(Ti[c])o.job="idle",o.timer=.4,o.thought=ii[c]?.line??o.thought;else if((o.job==="walk"||o.job==="help")&&o.queue.length&&o.crafted<o.maxCraft&&n>0&&(o.pouch.crystal>=1||i.ledger.crystal>=1))o.job="build",o.timer=o.keeper?2.4:2.8,o.thought=o.queue[0]?.think??o.thought,dt(o,"build",`Raising ${o.queue[0]?.shape??"crystal"} · ${Ri(o.x,o.z)}`);else if(o.job==="help"&&Ei.includes(c)){const l=o.crewOf?a.get(o.crewOf):null;l&&(l.job==="walk"||l.job==="build"||l.queue.length||String(l.intent||"").startsWith("Home"))?(Et(o,l.tx??l.homeX,l.tz??l.homeZ),o.job="help",o.timer=12,o.thought=`Walking with ${Te(l)} to ${ce(c)}.`,o.intent=o.thought):(yd(o),o.job="idle",o.timer=1.2)}else o.job==="help"&&o.crafted<o.maxCraft&&n>0&&(o.pouch.crystal>=1||i.ledger.crystal>=1)?(o.job="build",o.timer=2.6,o.thought="Raising a lamp where the keeper pointed"):o.keeper&&Ei.includes(c)&&o.crafted<o.maxCraft&&n>0&&(o.pouch.crystal>=1||i.ledger.crystal>=1)?(gr(o,c,Li(c),i.ledger),o.job!=="build"&&o.queue.length&&(o.job="build",o.timer=o.keeper?2.2:2.6)):(o.job==="help"&&yd(o),o.job="idle",o.timer=o.keeper?2.4+o.crafted%3:4+o.crafted%4,o.pouch.crystal<1&&i.ledger.crystal<1?o.thought="Waiting on Orren's crystal.":o.thought.startsWith("Helping")||(o.thought="Waiting for Charge to settle"))}else if(o.job==="build"&&o.timer<=0&&!r){if(!$2(o.pouch,i.ledger)){o.job="idle",o.timer=4,o.thought="No crystal. The Foundry is empty.";continue}const l=o.queue.shift(),u=l?{piece:nC(l,c,o.crafted+1),line:l.think}:(()=>{const d=Li(c).plan[0]??"light",h=wv(d,o.x,o.z,o.crafted+1,Li(c).mats)[0];return h?{piece:h,line:Li(c).lines[0]??"Charge wanted this"}:null})();if(u&&s([u.piece])>0){o.crafted+=1,o.queue.length||(o.planI+=1),n-=1;const d=o.mind.name,h=Lf(u.piece.shape);if(r={agentId:o.mind.id,pieces:[u.piece],line:`${d}: ${u.line}`,code:h.title},o.thought=u.line,dt(o,"grow",`${u.line} · ${h.title}: ${h.means}`),!o.queue.length){const f=String(o.intent||"").startsWith("Growing · ")?String(o.intent).slice(10):"";f&&dt(o,"stood",`${Te(o)} raised a ${f}`),xs(o,u.line)}}if(o.queue.length&&o.crafted<o.maxCraft&&n>0){const d=o.queue[0];Et(o,d.x,d.z),o.job="walk",o.timer=10,o.thought=d.think}else o.keeper||yd(o),o.job="idle",o.timer=o.keeper?1.4+o.crafted%2:2.4+o.crafted%3}}if(jn){const o=a.get(jn.lead),c=Zi.some(l=>jn.members.includes(l.mind.id)&&(l.queue.length>0||l.job==="build"||l.job==="help"));o&&!o.queue.length&&o.job!=="build"&&!c&&(dt(o,"crew","Crew stands down. The scene holds."),jn=null)}return r}function sC(e,t,n,i){e.met=!0,e.talks+=1;const s=nm(Un,Rh??new Map(Zi.map(u=>[u.mind.id,u])),t,n),r=e.crewOf??e.mind.id,a=ii[r],o=ce(r);if(e.mind.id.includes("-kin-")){const u=Zi.find(d=>d.mind.id===e.crewOf);return`I was grown from Charge. ${u?Te(u):"The keeper"} holds ${o}. ${e.thought||s.line}`}if(e.agenda||(e.agenda=[]),e.mind.id==="veyra")return`I read the city: ${s.line}. You stand in ${s.playerWhere}. ${_n?`I sent ${_n.id} to ${_n.task}.`:"I am about to route labor."} Duty: ${a?.line??"Route labor."} Now: ${e.thought||"listening."}`;if(e.keeper){const u=e.thought||(e.goal?`I ${e.goal.kind} because ${e.goal.why}`:"at post."),d=i>0?" The Hub still carries your howl.":"";return`${o} — ${a?.line??"Hold the den."} Now: ${u}${d}`}const c=e.mind.role||"Circuit folk",l=e.queue[0]?.think||e.thought||(e.goal?`I ${e.goal.kind}`:s.line);return`${c} at ${o}. ${a?.line??"I keep this den."} ${l}`}function rC(e,t,n,i){const s=e.find(a=>a.mind.id===t);if(!s)return;const r=n[0];s.honorLeft=Math.min(4,Math.max(1,n.length)),s.honorShape=r?.shape??null,s.honorX=r?.x??s.x,s.honorZ=r?.z??s.z,s.intent=i.slice(0,72),s.thought="Your howl is still in the Charge",e.filter(a=>a.crewOf===t&&a.job==="idle").slice(0,2).forEach((a,o)=>{a.honorLeft=1,a.honorShape=n[o+1]?.shape??"lamp",a.honorX=n[o+1]?.x??s.honorX,a.honorZ=n[o+1]?.z??s.honorZ,a.thought="The keeper heard a howl. I will finish the rest",a.timer=.4+o*.3})}function je(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function rw(e,t,n=0){return Math.hypot(e,t)<88?!0:At.some(i=>Math.hypot(e-i.x,t-i.z)<i.radius*.78+n)}function aC(e,t){let n=At[0],i=1/0;for(const s of At){const r=Math.hypot(e-s.x,t-s.z);r<i&&(i=r,n=s)}return n}const oC=[["zone-canal","zone-market","canal"],["zone-market","zone-foundry","canal"],["zone-foundry","zone-grove","grove"],["zone-wild","zone-bridge","span"],["zone-bridge","zone-gate","span"],["zone-gate","zone-beacon","span"],["zone-gate","zone-terrace","vein"],["zone-terrace","zone-ring","vein"],["zone-archive","zone-market","vein"],["zone-archive","zone-overlook","aim"],["zone-canal","zone-overlook","aim"],["zone-wild","zone-grove","grove"]];function _s(e,t,n,i=.22){return new mt({color:e,roughness:i,metalness:.18,emissive:t,emissiveIntensity:n,iridescence:.7,iridescenceIOR:1.4,clearcoat:.55,transparent:!1})}function es(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(a.sx,a.sy,a.sz),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function cC(e,t,n,i,s,r,a){const o=[],c=n-e,l=i-t,u=Math.hypot(c,l)||1,d=-l/u,h=c/u;for(let f=1;f<s;f++){const x=f/s,y=Math.sin(x*Math.PI)*r,g=e+c*x+d*y,p=t+l*x+h*y;rw(g,p,a)||o.push({x:g,z:p,t:x,ang:Math.atan2(c,l),px:d,pz:h})}return o}function lC(e,t){const n=new Map(At.map(p=>[p.id,p])),i=[],s=[],r=[],a=[],o=[],c=[],l=[],u=[],d=[],h=[];for(const[p,w,S]of oC){const m=S==="canal"?t?10:16:S==="span"?t?8:14:S==="aim"?t?8:12:t?7:11,M=n.get(p),v=n.get(w);if(!M||!v)continue;const A=Math.hypot(v.x-M.x,v.z-M.z),_=(S==="canal"?70:S==="span"?48:36)*(.7+je(A,3)*.5),E=cC(M.x,M.z,v.x,v.z,m,_,S==="canal"?-26:-12),C=A/m;for(let P=0;P<E.length;P++){const T=E[P],O=Math.sin(T.t*Math.PI);if(S==="canal"){if(i.push({x:T.x,y:.36+Math.sin(T.t*Math.PI*4)*.07,z:T.z,sx:(t?11.2:15.4)+O*3.2,sy:.28,sz:C*1.38+5,ry:T.ang}),(!t||P%2===0)&&r.push({x:T.x,y:.58,z:T.z,sx:1.7,sy:.1,sz:C*1.2+3,ry:T.ang}),!t||P%2===0){const k=(P%2?1:-1)*(6.4+je(P,4)*2.8);a.push({x:T.x+T.px*k,y:.78+je(P,6)*.55,z:T.z+T.pz*k,sx:.55+je(P,2)*.4,sy:.7+je(P,3)*.55,sz:.55,ry:T.ang+je(P,7)}),t||a.push({x:T.x-T.px*k,y:.7+je(P,1)*.4,z:T.z-T.pz*k,sx:.45,sy:.6,sz:.45,ry:T.ang+1.1})}P%(t?3:2)===1&&h.push({x:T.x,y:.92,z:T.z,sx:6.4,sy:.62,sz:3.4,ry:T.ang})}else if(S==="span"){const k=3.7+O*(t?4.4:7.1);r.push({x:T.x,y:k,z:T.z,sx:t?1.45:1.18,sy:.24,sz:C+2.2,ry:T.ang}),t||r.push({x:T.x+T.px*1.85,y:k,z:T.z+T.pz*1.85,sx:1.18,sy:.22,sz:C+2.2,ry:T.ang}),(!t||P%2===0)&&o.push({x:T.x+T.px*(t?0:.9),y:k+.38,z:T.z+T.pz*(t?0:.9),sx:2.15,sy:.11,sz:2.15,ry:T.ang}),P%2===0&&u.push({x:T.x+T.px*3.4,y:k+1.7,z:T.z+T.pz*3.4,sx:.62,sy:1.9,sz:.62,ry:T.ang})}else if(S==="grove")s.push({x:T.x,y:.88,z:T.z,sx:3.1,sy:.2,sz:C+3.2,ry:T.ang}),(!t||P%2===0)&&l.push({x:T.x+T.px*(7+je(P,5)*4),y:5.1+je(P,3)*1.6,z:T.z+T.pz*(7+je(P,8)*4),sx:3.1+je(P,2)*1.1,sy:3.8+je(P,6)*1.4,sz:3.1,ry:T.ang+je(P,4)}),(!t||P%2===0)&&c.push({x:T.x+T.px*(5.5+je(P,9)*3),y:4.4+je(P,3)*2.1,z:T.z+T.pz*(5.5+je(P,1)*3),sx:.95,sy:1.25,sz:.95,ry:T.ang+je(P,7)});else if(S==="aim"){const k=Math.atan2(-T.x,-T.z),U=7+Math.sin(T.t*Math.PI*3)*6;c.push({x:T.x+Math.cos(k+Math.PI/2)*U,y:2.8+O*4.2,z:T.z+Math.sin(k+Math.PI/2)*U,sx:1.05,sy:2.6+je(P,4)*1.4,sz:1.05,ry:k}),t||c.push({x:T.x-Math.cos(k+Math.PI/2)*(U*.55),y:2.2+O*3.4,z:T.z-Math.sin(k+Math.PI/2)*(U*.55),sx:.8,sy:2.1,sz:.8,ry:k})}else{const k=(je(P+A,8)-.5)*6;s.push({x:T.x+T.px*k*.18,y:1.02,z:T.z+T.pz*k*.18,sx:5.4,sy:.34,sz:C+4.5,ry:T.ang+k*.02}),!t&&P%2===0&&r.push({x:T.x,y:1.28,z:T.z,sx:.7,sy:.12,sz:C*.8,ry:T.ang})}P===Math.floor(E.length/2)&&d.push({x:T.x,y:S==="span"?3.7+O*(t?4.4:7.1):1.12,z:T.z,sx:S==="canal"?13:9,sy:.28,sz:S==="canal"?13:9,ry:T.ang})}}const f=t?36:64;for(let p=0;p<f;p++){const w=je(p,11)*Math.PI*2,S=170+je(p,19)*1180,m=Math.cos(w)*S,M=Math.sin(w)*S;if(rw(m,M,14))continue;const A=aC(m,M).kind,_=w+je(p,5);A==="canal"||A==="foundry"||A==="market"?a.push({x:m,y:.9+je(p,2)*.7,z:M,sx:.7,sy:1.1+je(p,8)*.8,sz:.7,ry:_}):A==="grove"||A==="wild"?(l.push({x:m,y:4.2+je(p,3)*1.8,z:M,sx:2.4,sy:3.2+je(p,6)*1.6,sz:2.4,ry:_}),je(p,9)>.5&&c.push({x:m+5,y:3.6,z:M+4,sx:.9,sy:1.2,sz:.9,ry:_})):A==="gate"||A==="beacon"?u.push({x:m,y:5.4,z:M,sx:.7,sy:2.2,sz:.7,ry:_}):A==="archive"||A==="overlook"?c.push({x:m,y:2.6,z:M,sx:.9,sy:2.4+je(p,4)*1.6,sz:.9,ry:_}):A==="terrace"||A==="ring"?d.push({x:m,y:1.12,z:M,sx:5+je(p,7)*3,sy:.24,sz:5,ry:_}):a.push({x:m,y:1.05,z:M,sx:.8,sy:1.2,sz:.8,ry:_})}const x=new we(1,1,1),y=new vn(1,0),g=new ye(1,1,1,t?6:10);es(x,_s(1403522,3073791,.95,.08),i,e),es(x,_s(2770004,8317170,.38,.3),s,e),es(x,_s(13939818,16762970,.78,.16),r,e),es(y,_s(8317170,3073791,.72,.14),a,e),es(g,_s(13939818,8317170,.88,.12),o,e),es(y,_s(15255672,16762970,.74,.16),c,e),es(new mu(1,0),_s(7031736,10187007,.42,.32),l,e),es(new vn(.55,0),new Ue({color:8317170,transparent:!0,opacity:.72,blending:mn,depthWrite:!1}),u,e),es(g,_s(2765636,8317170,.28),d,e),es(new un(1,.12,t?5:6,t?10:16),_s(13939818,3073791,.9,.14),h,e)}const is={x:-4050,y:540,z:195},hC=5200;function Ln(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Yc(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!1,side:xe,toneMapped:!1})}function uC(e,t,n,i,s){const r=e.getAttribute("position"),a=new Float32Array(r.count*3),o=new se,c=new se(262924),l=new se(657688),u=new se(1709098),d=new se(197130),h=new se(4861976),f=new se(6965794),x=new se(661024),y=new se(2892864),g=new se(1456204),p=new se(3073791),w=new se(15269880),S=new se(12886112),m=Math.hypot(n,s)||1,M=Math.hypot(n,i,s)||1;for(let v=0;v<r.count;v++){const A=r.getX(v),_=r.getY(v),E=r.getZ(v),C=_/t;C>.22?o.copy(l).lerp(c,(C-.22)/.78):C>-.02?o.copy(u).lerp(l,(C+.02)/.24):o.copy(d).lerp(u,Math.max(0,(C+1)/.98));const P=Math.max(0,-(A*n+E*s)/(t*m)),T=Math.max(0,1-Math.abs(C)*2.2);o.lerp(h,P*T*.16),o.lerp(f,P*P*T*.08),o.lerp(g,P*T*.32);const O=Math.max(0,(A*n+E*s)/(t*m));o.lerp(x,O*T*.16);const k=A/t,U=E/t,$=Math.abs(k*.18+C*.78+U*.6),W=Math.max(0,1-$*3.8);o.lerp(y,W*(.1+P*.08));const Y=Ln(v,1);o.r=Math.min(1,o.r*(.9+Y*.16)),o.g=Math.min(1,o.g*(.92+Ln(v,4)*.12)),o.b=Math.min(1,o.b*(.94+Ln(v,7)*.1));const tt=(A*n+_*i+E*s)/(t*M);if(tt>.84){const q=(tt-.84)/.16;o.lerp(p,q*q*.42),o.lerp(w,q*q*q*.22),o.lerp(S,q*q*.1)}a[v*3]=o.r,a[v*3+1]=o.g,a[v*3+2]=o.b}e.setAttribute("color",new _i(a,3))}function hc(e,t,n,i,s,r,a,o,c){const l=new gt(new un(t,n,6,c),Yc(i,s));l.rotation.x=r,l.rotation.z=a,l.position.y=o,l.frustumCulled=!1,l.renderOrder=-12,l.castShadow=!1,l.receiveShadow=!1,e.add(l)}function dC(){return new mt({color:15782008,emissive:15254634,emissiveIntensity:.85,roughness:.14,metalness:.82,iridescence:.55,iridescenceIOR:1.26,clearcoat:.72,clearcoatRoughness:.12,fog:!1,toneMapped:!1})}function fC(){const t=new RM().load("./assets/star-core.jpg");return t.colorSpace=si,t.anisotropy=8,t}function pC(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(!t)return null;const n=t.createRadialGradient(128,128,36,128,128,124);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.56,"rgba(255,255,255,1)"),n.addColorStop(.66,"rgba(255,255,255,0.4)"),n.addColorStop(.76,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);const i=new Y0(e);return i.needsUpdate=!0,i}function mC(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");if(!t)return null;const n=t.createRadialGradient(256,256,10,256,256,248);n.addColorStop(0,"rgba(255,255,255,0.95)"),n.addColorStop(.12,"rgba(126,240,255,0.58)"),n.addColorStop(.32,"rgba(46,230,255,0.22)"),n.addColorStop(.5,"rgba(232,197,106,0.12)"),n.addColorStop(.72,"rgba(46,230,255,0)"),t.fillStyle=n,t.fillRect(0,0,512,512);const i=new Y0(e);return i.needsUpdate=!0,i}function gC(e,t){const n=new Mt;n.name="atmos",e.add(n);const{x:i,y:s,z:r}=is,a=hC,o=t?24:48,c=t?16:28,l=new as(a,o,c);uC(l,a,i,s,r);const u=new gt(l,new Ue({color:16777215,vertexColors:!0,side:Jn,fog:!1,depthWrite:!1,depthTest:!1,toneMapped:!1}));u.frustumCulled=!1,u.renderOrder=-20,u.castShadow=!1,u.receiveShadow=!1,n.add(u);const d=new Mt;d.name="star-core",d.position.set(i,s,r),d.frustumCulled=!1,d.renderOrder=-8;const h=new gt(new as(t?36:56,20,16),Yc(15269880,.34));h.name="star-core-spark",h.renderOrder=-4,h.castShadow=!1,h.receiveShadow=!1,d.add(h);const f=new gt(new as(t?120:180,20,16),Yc(3073791,.08));f.name="star-core-bloom",f.renderOrder=-9,f.castShadow=!1,f.receiveShadow=!1,d.add(f);const x=mC();if(x){const q=new cM(new V0({map:x,color:16777215,transparent:!0,opacity:.32,blending:mn,depthWrite:!1,depthTest:!1,fog:!1,toneMapped:!1}));q.name="star-core-halo";const ht=t?780:1080;q.scale.set(ht,ht,1),q.renderOrder=-10,q.frustumCulled=!1,d.add(q)}const y=t?400:600,g=new Ue({map:fC(),alphaMap:pC()??void 0,color:16777215,transparent:!0,opacity:1,depthWrite:!1,depthTest:!0,fog:!1,toneMapped:!1,side:xe}),p=new gt(new yi(y,t?48:72),g);p.name="star-core-art",p.renderOrder=-5,p.frustumCulled=!1,p.castShadow=!1,p.receiveShadow=!1,d.add(p);const w=dC(),S=t?[300,410]:[360,470,580],m=t?4.2:6.2,M=t?64:96,v=[{rx:1.12,ry:.18,rz:.31,spin:.045},{rx:.42,ry:1.05,rz:-.22,spin:-.032},{rx:1.48,ry:-.4,rz:.08,spin:.022}],A=[];for(let q=0;q<S.length;q++){const ht=v[q],nt=new gt(new un(S[q],m*(1-q*.12),8,M),w);nt.rotation.set(ht.rx,ht.ry,ht.rz),nt.castShadow=!1,nt.receiveShadow=!1,nt.renderOrder=-6,nt.frustumCulled=!1,nt.name=`star-core-orbit-${q}`,d.add(nt),A.push(nt)}const _=t?3:6,E=Yc(8319231,.16),C=[];for(let q=0;q<_;q++){const ht=(t?220:340)*(.7+Ln(q,11)*.6),nt=new gt(new cs(t?10:16,ht),E);nt.rotation.set(Ln(q,3)*1.4,Ln(q,5)*Math.PI*2,Ln(q,7)*1.2),nt.position.set((Ln(q,13)-.5)*40,(Ln(q,17)-.5)*40,(Ln(q,19)-.5)*40),nt.castShadow=!1,nt.receiveShadow=!1,nt.renderOrder=-4,nt.frustumCulled=!1,nt.name=`star-core-bolt-${q}`,d.add(nt),C.push(nt)}n.add(d),d.updateMatrixWorld(!0),p.lookAt(0,190,0);const P=t?40:72;hc(n,3920,22,12886112,.048,1.49,.05,310,P),hc(n,3480,32,3844288,.062,1.22,.2,640,P),t||(hc(n,3060,18,6965416,.05,1.08,-.34,980,P),hc(n,4180,14,14729328,.032,1.52,-.08,180,P));const T=t?70:180,O=new Ue({color:16777215,vertexColors:!0,transparent:!0,opacity:.46,blending:mn,depthWrite:!1,fog:!1,toneMapped:!1}),k=new de(new vn(1,0),O,T),U=new ie,$=new se,W=[13162736,10406616,12888288,15258792,16777215],Y=Math.hypot(i,s,r);let tt=0;for(let q=0;tt<T&&q<T*5;q++){const ht=Ln(q,3)*Math.PI*2,nt=Math.acos(.04+Ln(q,9)*.82),Lt=a*(.7+Ln(q,13)*.1),Qt=Lt*Math.sin(nt)*Math.cos(ht),Ut=Lt*Math.cos(nt),V=Lt*Math.sin(nt)*Math.sin(ht);if((Qt*i+Ut*s+V*r)/((Lt||1)*Y)>.94)continue;U.position.set(Qt,Ut,V),U.rotation.set(Ln(q,17)*2,ht,nt);const at=Ln(q,29)>.86,Rt=at?11+Ln(q,21)*10:3.2+Ln(q,21)*6;U.scale.set(Rt,Rt*(.75+Ln(q,5)*.8),Rt),U.updateMatrix(),k.setMatrixAt(tt,U.matrix),$.setHex(W[q%W.length]),at&&$.multiplyScalar(1.35),k.setColorAt(tt,$),tt+=1}return k.count=tt,k.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0),k.frustumCulled=!1,k.renderOrder=-11,k.castShadow=!1,k.receiveShadow=!1,n.add(k),t?{tick(){}}:{tick(q){const ht=1+Math.sin(q*.7)*.07;h.scale.setScalar(ht),f.scale.setScalar(1+Math.sin(q*.55)*.09),g.opacity=.92+Math.sin(q*.6)*.05;for(let nt=0;nt<A.length;nt++){const Lt=v[nt],Qt=A[nt];Qt.rotation.y=Lt.ry+q*Lt.spin,Qt.rotation.z=Lt.rz+Math.sin(q*.12+nt)*.04}for(let nt=0;nt<C.length;nt++){const Lt=C[nt];Lt.rotation.z=q*(.08+nt*.02),Lt.material.opacity=.1+(Math.sin(q*1.3+nt)+1)*.08}}}}function La(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Vr(e,t,n,i=.22,s=.32){return new mt({color:e,roughness:i,metalness:s,emissive:t,emissiveIntensity:n,iridescence:.42,iridescenceIOR:1.32,clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function Hi(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(a.rx??0,a.ry,a.rz??0),r.scale.set(a.sx,a.sy,a.sz),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function er(e,t,n,i,s,r,a,o){const c=new gt(new un(r,a,6,o),t);c.rotation.x=Math.PI/2,c.position.set(n,i,s),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,e.add(c)}function xC(e,t){const n=new Mt;n.name="grounds",e.add(n);const i=Vr(799552,1729912,.16,.14,.4),s=Vr(3812374,6966306,.15,.2,.48),r=Vr(1446440,3812452,.13,.24,.3),a=Vr(466472,1735306,.14,.06,.62),o=Vr(1315868,3813408,.1,.34,.22),c=Vr(2761236,5783592,.12,.26,.36),l=i.clone();l.side=xe;const u=s.clone();u.side=xe;const d=r.clone();d.side=xe;const h=c.clone();h.side=xe;const f=s.clone();f.side=xe;const x=[],y=[],g=[],p=[],w=[],S=[],m=[],M=[],v=[],A=[],_=[],E=t?16:28,C=t?12:22,P=-Math.PI/2,T=5.48;for(const W of At){if(Math.hypot(W.x,W.z)<90)continue;const{x:Y,z:tt,kind:q,radius:ht}=W,nt=ht*.94,Lt={x:Y,y:.66,z:tt,sx:nt,sy:nt,sz:1,ry:0,rx:P},Qt=Math.atan2(Y,tt);switch(q){case"canal":{x.push(Lt),w.push({x:Y,y:T,z:tt,sx:36,sy:.18,sz:36,ry:0}),er(n,a,Y,T+.08,tt,56,3.6,C),t||er(n,i,Y,.82,tt,108,2.4,C);break}case"foundry":{y.push(Lt),S.push({x:Y,y:T,z:tt,sx:30,sy:.38,sz:30,ry:.2}),M.push({x:Y+18,y:6.15,z:tt-10,sx:4.2,sy:5.4,sz:4.2,ry:.4}),t||M.push({x:Y-16,y:6.05,z:tt+12,sx:3.6,sy:4.8,sz:3.6,ry:1.1});break}case"terrace":{g.push(Lt);const Ut=t?3:5;for(let V=0;V<Ut;V++){const ot=46-V*8.2;m.push({x:Y+V*2.2,y:T+V*.26,z:tt+V*1.4,sx:ot,sy:.2,sz:ot,ry:Qt*.05})}break}case"gate":{g.push(Lt),A.push({x:Y,y:T,z:tt,sx:46,sy:.26,sz:16,ry:Qt});const Ut=Math.cos(Qt),V=-Math.sin(Qt);m.push({x:Y+Ut*20,y:T+.06,z:tt+V*20,sx:7.4,sy:.34,sz:7.4,ry:Qt}),m.push({x:Y-Ut*20,y:T+.06,z:tt-V*20,sx:7.4,sy:.34,sz:7.4,ry:Qt}),er(n,r,Y,T+.12,tt,34,6.8,C);break}case"archive":{y.push(Lt),v.push({x:Y,y:T,z:tt,sx:42,sy:.2,sz:26,ry:.12});const Ut=t?3:5;for(let V=0;V<Ut;V++)v.push({x:Y,y:T+.14,z:tt-9+V*4.6,sx:30-V*2.4,sy:.07,sz:.62,ry:.12});break}case"market":{y.push(Lt),v.push({x:Y,y:T+.12,z:tt,sx:34,sy:.18,sz:2.6,ry:.4}),v.push({x:Y+13.4,y:T,z:tt+5.6,sx:10.4,sy:.3,sz:10.4,ry:.4}),v.push({x:Y-13.4,y:T,z:tt-5.6,sx:10.4,sy:.3,sz:10.4,ry:.4}),t||S.push({x:Y,y:T+.28,z:tt,sx:2.2,sy:.7,sz:2.2,ry:0});break}case"wild":{p.push(Lt);const Ut=t?5:9;for(let V=0;V<Ut;V++){const ot=V/Ut*Math.PI*2+La(V,3)*.4,at=16+La(V,5)*26;_.push({x:Y+Math.cos(ot)*at*.42,y:T,z:tt+Math.sin(ot)*at*.42,sx:.34+La(V,7)*.22,sy:.14,sz:at,ry:ot})}if(!t)for(let V=0;V<5;V++){const ot=V/5*Math.PI*2+.3,at=22+La(V,9)*18;_.push({x:Y+Math.cos(ot)*(58+at*.2),y:.72,z:tt+Math.sin(ot)*(58+at*.2),sx:.28,sy:.12,sz:at,ry:ot})}break}case"beacon":{g.push(Lt),er(n,r,Y,T+.06,tt,40,1.6,C),t||er(n,r,Y,T,tt,68,1.1,C);break}case"ring":{g.push(Lt),er(n,r,Y,T+.08,tt,64,2.4,C),t||er(n,r,Y,T+.04,tt,28,1.35,C);break}case"grove":{y.push(Lt);const Ut=t?5:8;for(let V=0;V<Ut;V++){const ot=V/Ut*Math.PI*2+.18,at=22+V%3*13,Rt=3.8+La(V,4)*2.2;S.push({x:Y+Math.cos(ot)*at,y:T+.04,z:tt+Math.sin(ot)*at,sx:Rt,sy:.24,sz:Rt,ry:ot})}break}case"bridge":{x.push(Lt);const Ut=t?2:4;for(let V=0;V<Ut;V++){const ot=(V-(Ut-1)/2)*17;A.push({x:Y+Math.cos(Qt)*ot,y:T,z:tt-Math.sin(Qt)*ot,sx:14,sy:.22,sz:8.4,ry:Qt+(V%2?.12:-.12)})}break}case"overlook":{p.push(Lt);const Ut=new gt(new yi(32,t?14:22),f);Ut.position.set(Y,T+.08,tt),Ut.lookAt(-4050,540,195),Ut.castShadow=!1,Ut.receiveShadow=!0,Ut.frustumCulled=!0,n.add(Ut),t||v.push({x:Y-14,y:T+.18,z:tt,sx:22,sy:.12,sz:1.3,ry:0});break}}}const O=new ye(1,1,1,t?8:14),k=new we(1,1,1),U=new vn(1,0),$=new gu(.76,1,E);Hi($,l,x,n),Hi($,u,y,n),Hi($,d,g,n),Hi($,h,p,n),Hi(O,a,w,n),Hi(O,s,S,n),Hi(O,r,m,n),Hi(U,s,M,n),Hi(k,s,v,n),Hi(k,i,A,n),Hi(k,o,_,n)}function Ss(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function $r(e){return At.find(t=>t.kind===e)??null}function Md(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}function uc(e,t,n,i,s,r,a,o,c,l){const u=n-e,d=i-t,h=Math.hypot(u,d)||1,f=-d/h,x=u/h,y=l.length===0?0:1;for(let g=y;g<=c;g++){const p=g/c,w=Math.sin(p*Math.PI);l.push(e+u*p+f*w*a,s+(r-s)*p+w*o,t+d*p+x*w*a)}}function Jg(e,t){const n=e.length/3|0,i=new Float32Array(t*3);if(n<2)return i;const s=new Float32Array(n);let r=0;for(let o=1;o<n;o++){const c=(o-1)*3,l=o*3;r+=Math.hypot(e[l]-e[c],e[l+1]-e[c+1],e[l+2]-e[c+2]),s[o]=r}if(r<=0)return i;i[0]=e[0],i[1]=e[1],i[2]=e[2];let a=1;for(let o=1;o<t;o++){const c=o/(t-1)*r;for(;a<n-1&&s[a]<c;)a+=1;const l=s[a-1],u=(c-l)/(s[a]-l||1),d=(a-1)*3,h=a*3;i[o*3]=e[d]+(e[h]-e[d])*u,i[o*3+1]=e[d+1]+(e[h+1]-e[d+1])*u,i[o*3+2]=e[d+2]+(e[h+2]-e[d+2])*u}return i}function Qg(e,t,n,i,s,r,a,o,c,l,u,d){const h=i.length/3|0,f=new de(t,n,s);f.castShadow=!1,f.receiveShadow=!1,f.frustumCulled=!0,f.renderOrder=2;const x=new Float32Array(s),y=new Float32Array(s),g=new Float32Array(s),p=new Float32Array(s),w=new Float32Array(s),S=new Float32Array(s),m=new ie,M=Math.max(1,h-1);for(let v=0;v<s;v++){x[v]=Ss(v,r),y[v]=(Ss(v,r+3)*2-1)*c;const A=.72+Ss(v,r+7)*.55;g[v]=l*A,p[v]=u*A,w[v]=d*(.85+Ss(v,r+11)*.45),S[v]=a+Ss(v,r+13)*(o-a);const E=x[v]*M,C=Math.min(M-1,E|0),P=E-C,T=C*3,O=(C+1)*3;m.position.set(i[T]+(i[O]-i[T])*P,i[T+1]+(i[O+1]-i[T+1])*P,i[T+2]+(i[O+2]-i[T+2])*P),m.scale.set(g[v],p[v],w[v]),m.updateMatrix(),f.setMatrixAt(v,m.matrix)}return f.instanceMatrix.needsUpdate=!0,e.add(f),{mesh:f,path:i,samples:h,n:s,phase:x,lat:y,sx:g,sy:p,sz:w,speed:S}}function tx(e,t,n){const i=e.samples-1;if(i<1)return;const s=e.path,r=e.n,a=e.mesh;for(let o=0;o<r;o++){let c=e.phase[o]+t*e.speed[o];c-=Math.floor(c);const l=c*i,u=Math.min(i-1,l|0),d=l-u,h=u*3,f=(u+1)*3,x=s[h],y=s[h+1],g=s[h+2],p=s[f]-x,w=s[f+1]-y,S=s[f+2]-g,m=Math.hypot(p,S)||1;n.position.set(x+p*d+-S/m*e.lat[o],y+w*d+Math.sin(t*2.1+o*.73)*.12,g+S*d+p/m*e.lat[o]),n.rotation.set(0,Math.atan2(p,S),0),n.scale.set(e.sx[o],e.sy[o],e.sz[o]),n.updateMatrix(),a.setMatrixAt(o,n.matrix)}a.instanceMatrix.needsUpdate=!0}function _C(e,t){const n=new Mt;n.name="pulse",e.add(n);const i=t?32:64,s=t?24:48,r=t?6:10,a=t?48:80,o=new vn(1,0),c=new ie,l=$r("canal"),u=$r("market"),d=$r("foundry"),h=$r("wild"),f=$r("bridge"),x=$r("gate");let y=null,g=null;if(l&&u&&d){const M=[],v=t?12:18;uc(l.x,l.z,u.x,u.z,2.05,1.92,70,.18,v,M),uc(u.x,u.z,d.x,d.z,1.92,2.12,70,.16,v,M),y=Qg(n,o,Md(3844288,.55),Jg(M,a),i,5,.038,.056,t?2.4:3.6,.38,.42,1.15)}if(h&&f&&x){const M=[],v=t?10:16;uc(h.x,h.z,f.x,f.z,4.8,5.15,48,1.15,v,M),uc(f.x,f.z,x.x,x.z,5.15,4.9,48,1.05,v,M),g=Qg(n,o,Md(6965416,.52),Jg(M,a),s,17,.046,.068,t?1.8:2.8,.46,.7,.46)}const p=new Float32Array(r*3),w=new Float32Array(r),S=new Float32Array(r),m=new de(o,Md(12886112,.5),r);if(m.castShadow=!1,m.receiveShadow=!1,m.frustumCulled=!0,m.renderOrder=2,d)for(let M=0;M<r;M++){const v=M/r*Math.PI*2+.22,A=16+Ss(M,2)*12;p[M*3]=d.x+Math.cos(v)*A,p[M*3+1]=6.15+Ss(M,4)*.35,p[M*3+2]=d.z+Math.sin(v)*A,w[M]=Ss(M,8)*Math.PI*2,S[M]=1.05+Ss(M,11)*.7,c.position.set(p[M*3],p[M*3+1],p[M*3+2]),c.rotation.set(.2,v,.12),c.scale.setScalar(S[M]),c.updateMatrix(),m.setMatrixAt(M,c.matrix)}return m.instanceMatrix.needsUpdate=!0,n.add(m),{tick(M){y&&tx(y,M,c),g&&tx(g,M,c);for(let v=0;v<r;v++){const A=w[v],_=Math.sin(M*1.85+A),E=S[v]*(1+_*.14);c.position.set(p[v*3],p[v*3+1]+_*.48,p[v*3+2]),c.rotation.set(.18,M*.35+A,.1),c.scale.set(E*.82,E*1.15,E*.82),c.updateMatrix(),m.setMatrixAt(v,c.matrix)}m.instanceMatrix.needsUpdate=!0}}}function ex(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function nx(e){return At.find(t=>t.kind===e)??null}const ix=[["canal","market","cyan"],["market","foundry","gold"],["foundry","grove","gold"],["wild","bridge","cyan"],["bridge","gate","cyan"],["gate","beacon","cyan"],["terrace","ring","gold"]];function Wr(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}function sx(e,t,n){return new mt({color:e,roughness:.16,metalness:.44,emissive:t,emissiveIntensity:n,iridescence:.52,iridescenceIOR:1.32,clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function Ls(e,t,n,i,s){if(!n.length)return;const r=new de(e,t,n.length),a=new ie;a.rotation.order="YXZ",n.forEach((o,c)=>{a.position.set(o.x,o.y,o.z),a.rotation.set(o.rx,o.ry,o.rz),a.scale.set(o.sx,o.sy,o.sz),a.updateMatrix(),r.setMatrixAt(c,a.matrix)}),r.instanceMatrix.needsUpdate=!0,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!0,r.renderOrder=s,i.add(r)}function yC(e,t){const n=new Mt;n.name="spans",e.add(n);const i=[],s=[],r=[],a=[],o=[],c=[],l=[],u=[],d=6.18,h=t?18:32,f=t?10:16;for(let p=0;p<ix.length;p++){if(t&&p%2===1)continue;const w=ix[p],S=nx(w[0]),m=nx(w[1]);if(!S||!m||Math.hypot(S.x,S.z)<90||Math.hypot(m.x,m.z)<90)continue;const M=m.x-S.x,v=m.z-S.z,A=Math.hypot(M,v)||1,_=Math.min(.22,S.radius*.72/A),E=Math.min(.22,m.radius*.72/A),C=S.x+M*_,P=S.z+v*_,T=m.x-M*E,O=m.z-v*E,k=T-C,U=O-P,$=Math.hypot(k,U)||1,W=Math.atan2(-U,k),tt=8+ex(p,2)*6-d,q=w[2];i.push({x:(C+T)*.5,y:d,z:(P+O)*.5,sx:$*.5,sy:tt,sz:1,rx:0,ry:W,rz:0}),q==="gold"&&s.push(i.pop());const ht=Math.max(t?8:14,Math.round($/(t?34:18))),nt=[];for(let at=0;at<=ht;at++){const Rt=at/ht,Ht=2*Rt-1;nt.push({x:C+k*Rt,y:d+tt*Math.sqrt(Math.max(0,1-Ht*Ht)),z:P+U*Rt})}const Lt=-U/$,Qt=k/$,Ut=!t,V=Ut?.92:0;for(let at=0;at<ht;at++){const Rt=nt[at],Ht=nt[at+1],Vt=Ht.x-Rt.x,he=Ht.y-Rt.y,$t=Ht.z-Rt.z,oe=Math.hypot(Vt,he,$t)||1,_e=Math.atan2(Vt,$t),me=-Math.atan2(he,Math.hypot(Vt,$t)),Ne=(Rt.x+Ht.x)*.5,ve=(Rt.y+Ht.y)*.5,Xe=(Rt.z+Ht.z)*.5,Ke={x:Ne+Lt*V,y:ve,z:Xe+Qt*V,sx:.62,sy:.15,sz:oe*1.08,rx:me,ry:_e,rz:0},Ye={x:Ne+Lt*V,y:ve+.12,z:Xe+Qt*V,sx:.95,sy:.22,sz:oe*1.06,rx:me,ry:_e,rz:0};if(q==="gold"?(a.push(Ke),c.push(Ye)):(r.push(Ke),o.push(Ye)),Ut){const Ve={...Ke,x:Ne-Lt*V,z:Xe-Qt*V,sx:.5,sy:.12},F={...Ye,x:Ne-Lt*V,z:Xe-Qt*V,sx:.78,sy:.18};q==="gold"?(r.push(Ve),o.push(F)):(a.push(Ve),c.push(F))}}const ot=t?4:3;for(let at=1;at<ht;at++){if(at%ot!==0)continue;const Rt=nt[at-1],Ht=nt[at],Vt=nt[at],he=Ht.x-Rt.x,$t=Ht.y-Rt.y,oe=Ht.z-Rt.z,_e=Math.atan2(he,oe),me=-Math.atan2($t,Math.hypot(he,oe)),Ne=.92+ex(at+p,7)*.28,ve={x:Vt.x,y:Vt.y,z:Vt.z,sx:Ne,sy:Ne,sz:Ne,rx:me,ry:_e,rz:0};(at+p)%2===0?l.push(ve):u.push(ve)}}const x=new un(1,.007,t?5:8,h,Math.PI),y=new we(1,1,1),g=new un(1.28,.055,6,f);Ls(x,Wr(3073791,.32),i,n,3),Ls(x,Wr(15254890,.28),s,n,3),Ls(y,sx(1456196,3073791,.22),r,n,2),Ls(y,sx(3812374,15254890,.2),a,n,2),Ls(y,Wr(3073791,.42),o,n,4),Ls(y,Wr(15254890,.36),c,n,4),Ls(g,Wr(8317170,.38),l,n,4),Ls(g,Wr(16762970,.34),u,n,4)}function Vi(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function wd(e,t,n){return new mt({color:e,roughness:.2,metalness:.36,emissive:t,emissiveIntensity:n,iridescence:.64,iridescenceIOR:1.31,iridescenceThicknessRange:[90,380],clearcoat:.48,clearcoatRoughness:.26,transparent:!1})}function vC(e){switch(e){case"bridge":case"canal":case"market":return"cyan";case"foundry":case"archive":case"overlook":case"grove":case"wild":return"gold";default:return"violet"}}function Xr(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(a.rx,a.ry,a.rz),r.scale.set(a.sx,a.sy,a.sz),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function MC(e,t){return t?3:4+Math.min(4,Math.floor(Vi(e,21)*5))}function wC(e,t){const n=new Mt;n.name="facets",e.add(n);const i=wd(666680,1595496,.14),s=wd(2892306,5914656,.13),r=wd(1314850,3286102,.12),a=[],o=[],c=[],l=[],u=[],d=[];for(let x=0;x<At.length;x++){const y=At[x];if(Math.hypot(y.x,y.z)<90)continue;const g=MC(x,t),p=vC(y.kind),w=p==="cyan"?a:p==="gold"?c:u,S=p==="cyan"?o:p==="gold"?l:d;for(let m=0;m<g;m++){const M=x*17+m*3,v=m/g*Math.PI*2+Vi(M,2)*.7,A=14+Vi(M,4)*24,_=y.x+Math.cos(v)*A,E=y.z+Math.sin(v)*A;if(Math.hypot(_,E)<90)continue;const C=.6+Vi(M,6)*1.2,P=.6+Vi(M,8)*1.2,T=.6+Vi(M,10)*1.2,O={x:_,y:.4+Vi(M,12)*2.6,z:E,sx:C,sy:P,sz:T,rx:(Vi(M,14)-.5)*.9,ry:Vi(M,16)*Math.PI*2,rz:(Vi(M,18)-.5)*.7};Vi(M,20)>.46?S.push(O):w.push(O)}}const h=new vn(1,0),f=new xu(1,0);Xr(h,i,a,n),Xr(f,i,o,n),Xr(h,s,c,n),Xr(f,s,l,n),Xr(h,r,u,n),Xr(f,r,d,n)}function rx(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Sd(e){return At.find(t=>t.kind===e)??null}function SC(e){return e?new Ue({color:4114656,transparent:!0,opacity:.28,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1}):new mt({color:3844288,roughness:.12,metalness:.04,transmission:.58,thickness:.38,ior:1.33,transparent:!0,opacity:.28,depthWrite:!1,depthTest:!0,side:xe,emissive:1456196,emissiveIntensity:.1,fog:!0})}function ax(e,t,n,i,s,r,a){const o=n-e,c=i-t,l=Math.hypot(o,c)||1,u=-c/l,d=o/l,h=a.length===0?0:1;for(let f=h;f<=r;f++){const x=f/r,y=Math.sin(x*Math.PI);a.push(e+o*x+u*y*s,t+c*x+d*y*s)}}function bC(e,t){const n=new Mt;n.name="water",e.add(n);const i=Sd("canal"),s=Sd("market"),r=Sd("foundry"),a=new ie,o=[],c=t?1:2;if(!i||!s||!r)return{tick(){}};const l=t?10:16,u=[];ax(i.x,i.z,s.x,s.z,70,l,u),ax(s.x,s.z,r.x,r.z,70,l,u);const d=u.length/2;if(d<2)return{tick(){}};const h=.78,f=new cs(1,1);f.rotateX(-Math.PI/2);const x=SC(t),y=c===1?[0]:[-4.4,4.4],g=t?12.4:7.2;for(let p=0;p<c;p++){const w=y[p],S=d-1,m=new de(f,x,S);m.castShadow=!1,m.receiveShadow=!1,m.frustumCulled=!0,m.renderOrder=1;const M=new Float32Array(S),v=new Float32Array(S),A=new Float32Array(S),_=new Float32Array(S),E=new Float32Array(S),C=new Float32Array(S),P=new Float32Array(S);for(let T=0;T<S;T++){const O=u[T*2],k=u[T*2+1],U=u[(T+1)*2],$=u[(T+1)*2+1],W=U-O,Y=$-k,tt=Math.hypot(W,Y)||1,q=-Y/tt,ht=W/tt;M[T]=(O+U)*.5+q*w,v[T]=h,A[T]=(k+$)*.5+ht*w,_[T]=g*(.92+rx(T+p,3)*.16),E[T]=tt*1.08,C[T]=Math.atan2(W,Y),P[T]=rx(T+p*17,9)*Math.PI*2,a.position.set(M[T],v[T],A[T]),a.rotation.set(0,C[T],0),a.scale.set(_[T],1,E[T]),a.updateMatrix(),m.setMatrixAt(T,a.matrix)}m.instanceMatrix.needsUpdate=!0,n.add(m),o.push({mesh:m,x:M,y:v,z:A,sx:_,sz:E,ry:C,phase:P,n:S})}return{tick(p){for(let w=0;w<o.length;w++){const S=o[w],m=S.mesh;for(let M=0;M<S.n;M++){const v=S.phase[M],A=Math.sin(p*.48+v)*.055,_=1+Math.sin(p*.36+v*.7)*.038;a.position.set(S.x[M],S.y[M]+A,S.z[M]),a.rotation.set(0,S.ry[M],0),a.scale.set(S.sx[M]*_,1,S.sz[M]),a.updateMatrix(),m.setMatrixAt(M,a.matrix)}m.instanceMatrix.needsUpdate=!0}}}}function nr(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function EC(e){return At.find(t=>t.kind===e)??null}function ox(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}const rm=1.5,TC=8,aw=TC-rm;function cx(e,t,n,i,s,r,a){const o=new de(t,n,s);o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!0,o.renderOrder=3;const c=new Float32Array(s),l=new Float32Array(s),u=new Float32Array(s),d=new Float32Array(s),h=new Float32Array(s),f=new Float32Array(s),x=new Float32Array(s),y=new Float32Array(s);for(let g=0;g<s;g++){const p=(g+r*.17)/8*Math.PI*2+nr(g,r+2)*.42,w=50+nr(g,r+4)*8;c[g]=i.x+Math.cos(p)*w,l[g]=i.z+Math.sin(p)*w;const S=.28+nr(g,r+6)*.32;u[g]=S,d[g]=S*(1.35+nr(g,r+8)*.55),h[g]=S,f[g]=nr(g,r+11),x[g]=.042+nr(g,r+13)*.038,y[g]=.35+nr(g,r+17)*.7;const m=f[g];a.position.set(c[g],rm+m*aw,l[g]),a.rotation.set(m*.5,p,.12),a.scale.set(u[g],d[g],h[g]),a.updateMatrix(),o.setMatrixAt(g,a.matrix)}return o.instanceMatrix.needsUpdate=!0,e.add(o),{mesh:o,x:c,z:l,sx:u,sy:d,sz:h,phase:f,speed:x,wob:y,n:s}}function lx(e,t,n){const i=e.mesh;for(let s=0;s<e.n;s++){let r=e.phase[s]+t*e.speed[s];r-=Math.floor(r);const a=e.wob[s];n.position.set(e.x[s]+Math.sin(t*.62+s*1.17)*a,rm+r*aw,e.z[s]+Math.cos(t*.48+s*.91)*a),n.rotation.set(r*.55,t*.22+s*.4,.1);const o=1-r*.28;n.scale.set(e.sx[s]*o,e.sy[s]*(.82+r*.4),e.sz[s]*o),n.updateMatrix(),i.setMatrixAt(s,n.matrix)}i.instanceMatrix.needsUpdate=!0}function AC(e,t){const n=new Mt;n.name="heat",e.add(n);const i=EC("foundry");if(!i)return{tick(){}};const s=t?4:8,r=t?2:4,a=new vn(1,0),o=new ie,c=cx(n,a,ox(13934672,.22),i,s,5,o),l=cx(n,a,ox(14708776,.22),i,r,19,o);return{tick(u){lx(c,u,o),lx(l,u,o)}}}function Os(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}const hx=[["zone-canal","zone-market"],["zone-market","zone-foundry"],["zone-foundry","zone-grove"],["zone-wild","zone-bridge"],["zone-bridge","zone-gate"],["zone-gate","zone-beacon"],["zone-gate","zone-terrace"],["zone-terrace","zone-ring"],["zone-archive","zone-market"],["zone-archive","zone-overlook"]];function RC(e,t){return new Ue({color:e,transparent:!0,opacity:t,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}function bd(e,t){return Math.hypot(e,t)<90}function CC(e,t){return At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.58)}function PC(e){return e?4:6+Math.min(4,Math.floor(Os(7,21)*5))}function IC(e,t){const n=new Mt;n.name="mist",e.add(n);const i=new Map(At.map(l=>[l.id,l])),s=PC(t),r=new cs(1,1);r.rotateX(-Math.PI/2);const a=799552,o=1446440;let c=0;for(let l=0;l<hx.length&&c<s;l++){const u=hx[l],d=i.get(u[0]),h=i.get(u[1]);if(!d||!h||bd(d.x,d.z)||bd(h.x,h.z))continue;const f=.44+Os(l,5)*.12,x=h.x-d.x,y=h.z-d.z,g=Math.hypot(x,y)||1,p=-y/g,w=x/g,S=(Os(l,9)-.5)*42,m=d.x+x*f+p*S,M=d.z+y*f+w*S;if(bd(m,M)||CC(m,M))continue;const v=.07+Os(l,13)*.04,A=Os(l,3)>.5?a:o,_=new gt(r,RC(A,v)),E=96+Os(l,17)*84;_.position.set(m,.35,M),_.rotation.y=Os(l,11)*Math.PI*2,_.scale.set(E,1,E*(.68+Os(l,19)*.44)),_.castShadow=!1,_.receiveShadow=!1,_.frustumCulled=!0,_.renderOrder=-1,n.add(_),c+=1}}function DC(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function ux(e){return At.find(t=>t.kind===e)??null}const Ed=[["canal","market"],["market","foundry"],["wild","bridge"],["bridge","gate"],["terrace","ring"]],zC=.08,LC=.12,NC=14;function UC(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(a.sx,a.sy,a.sz),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function OC(e,t){const n=new Mt;n.name="trails",e.add(n);const i=[],s=[];for(let o=0;o<Ed.length;o++){const c=ux(Ed[o][0]),l=ux(Ed[o][1]);if(!c||!l){s.push(0);continue}if(Math.hypot(c.x,c.z)<90||Math.hypot(l.x,l.z)<90){s.push(0);continue}const u=l.x-c.x,d=l.z-c.z,h=Math.hypot(u,d)||1,f=Math.min(.28,c.radius*.62/h),x=Math.min(.28,l.radius*.62/h),y=c.x+u*f,g=c.z+d*f,p=l.x-u*x,w=l.z-d*x,S=p-y,m=w-g,M=Math.hypot(S,m)||1,v=Math.atan2(S,m),A=Math.max(2,Math.round(M/NC)),_=M/A;let E=0;for(let C=0;C<A;C++){if(t&&C%2===1)continue;const P=(C+.5)/A,T=y+S*P,O=g+m*P;if(Math.hypot(T,O)<90)continue;const k=4+DC(C+o*17,5)*2;i.push({x:T,y:zC,z:O,sx:k,sy:LC,sz:_*.94,ry:v}),E+=1}s.push(E)}const r=new we(1,1,1),a=new mt({color:466472,roughness:.38,metalness:.28,emissive:1729912,emissiveIntensity:.14,iridescence:.28,iridescenceIOR:1.3,clearcoat:.22,clearcoatRoughness:.42,transparent:!1});UC(r,a,i,n),n.userData.segmentCounts={"canal-join":s[0]??0,"join-foundry":s[1]??0,"wild-bridge":s[2]??0,"bridge-gate":s[3]??0,"terrace-ring":s[4]??0,total:i.length}}function kC(e){return At.find(t=>t.kind===e)??null}function FC(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}function BC(e,t){const n=new Mt;n.name="beam",e.add(n);const i=kC("beacon");if(!i)return{tick(){}};const s=t?.5:.7,r=t?36:48,a=r*.5,o=t?8:12,c=new ye(s,s,r,o,1,!0),l=FC(13934672,.16),u=new de(c,l,1);u.castShadow=!1,u.receiveShadow=!1,u.frustumCulled=!0,u.renderOrder=4;const d=new ie;return d.position.set(i.x,a,i.z),d.scale.set(1,1,1),d.updateMatrix(),u.setMatrixAt(0,d.matrix),u.instanceMatrix.needsUpdate=!0,n.add(u),{tick(h){const f=(Math.sin(h*1.15)+1)*.5;d.scale.y=.95+f*.1,d.updateMatrix(),u.setMatrixAt(0,d.matrix),u.instanceMatrix.needsUpdate=!0,l.opacity=.12+f*.1}}}function Td(e){return At.find(t=>t.kind===e)??null}function HC(){return new mt({color:1456196,roughness:.18,metalness:.42,emissive:3073791,emissiveIntensity:.2,iridescence:.48,iridescenceIOR:1.32,clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function GC(e,t){const n=new Mt;n.name="discs",e.add(n);const i=t?1:2,s=Td("dock"),r=Td("market"),a=Td("gate"),o=[];if(s)for(let f=0;f<i;f++){const x=f*Math.PI+.62,y=i===1?0:18;o.push({x:s.x+Math.cos(x)*y,z:s.z+Math.sin(x)*y,r:5+(i===1?1.4:f===0?2:.6)})}else{const f=[r,a].filter(x=>!!x);for(let x=0;x<i&&x<f.length;x++){const y=f[x];o.push({x:y.x,z:y.z,r:5+(x===0?2:.8)})}}if(!o.length)return{tick(){}};const c=t?10:16,l=.18,u=new ye(1,1,l,c),d=HC(),h=[];for(let f=0;f<o.length;f++){const x=o[f],y=new gt(u,d);y.position.set(x.x,l*.5,x.z),y.scale.set(x.r,1,x.r),y.castShadow=!1,y.receiveShadow=!0,y.frustumCulled=!0,y.renderOrder=2,n.add(y),h.push({mesh:y,speed:.14+f*.04,phase:f*1.17})}return n.userData.discCount=h.length,{tick(f){for(let x=0;x<h.length;x++){const y=h[x];y.mesh.rotation.y=f*y.speed+y.phase}}}}function Ad(e){return At.find(t=>t.kind===e)??null}function dx(e,t,n){return new mt({color:e,roughness:.46,metalness:.28,emissive:t,emissiveIntensity:n,iridescence:.22,iridescenceIOR:1.3,clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function VC(e){return new Ue({color:3844288,transparent:!0,opacity:e,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}function Na(e,t,n,i,s,r){if(!n.length)return;const a=new de(e,t,n.length),o=new ie;o.rotation.order="YXZ",n.forEach((c,l)=>{o.position.set(c.x,c.y,c.z),o.rotation.set(c.rx,c.ry,c.rz),o.scale.set(c.sx,c.sy,c.sz),o.updateMatrix(),a.setMatrixAt(l,o.matrix)}),a.instanceMatrix.needsUpdate=!0,a.castShadow=!1,a.receiveShadow=r,a.frustumCulled=!0,a.renderOrder=s,i.add(a)}function fx(e,t,n){const i=t-e.x,s=n-e.z,r=Math.hypot(i,s)||1,a=Math.min(48,e.radius*.38);return{x:e.x+i/r*a,z:e.z+s/r*a}}function $C(e,t){const n=new Mt;n.name="cisterns",e.add(n);const i=Ad("canal"),s=Ad("foundry"),r=Ad("market"),a={canal:0,foundry:0,total:0};if(n.userData.wellCounts=a,!i)return;const o=t?12:22,c=t?5:8,l=9.6,u=.68,d=1.22,h=8.7,f=.4,x=.3,y=Math.PI/2,g=new ye(l,l,d,o,1,!0),p=new un(l,u,c,o),w=new yi(h,o);w.rotateX(-Math.PI/2);const S=dx(466472,1729912,.1),m=dx(2761236,5783592,.1),M=VC(x),v=[],A=[],_=[],E=[],C=[],P=r?.x??0,T=r?.z??0,O=(U,$,W,Y)=>{W.push({x:U,y:d*.5,z:$,sx:1,sy:1,sz:1,rx:0,ry:0,rz:0}),Y.push({x:U,y:d,z:$,sx:1,sy:1,sz:1,rx:y,ry:0,rz:0}),C.push({x:U,y:f,z:$,sx:1,sy:1,sz:1,rx:0,ry:0,rz:0})},k=fx(i,P,T);if(O(k.x,k.z,v,A),a.canal=1,!t&&s){const U=fx(s,P,T);O(U.x,U.z,_,E),a.foundry=1}a.total=a.canal+a.foundry,Na(g,S,v,n,2,!0),Na(p,S,A,n,2,!0),Na(g,m,_,n,2,!0),Na(p,m,E,n,2,!0),Na(w,M,C,n,1,!1)}function Ns(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function WC(e){return At.find(t=>t.kind===e)??null}function px(e,t,n){return new mt({color:e,roughness:.18,metalness:.4,emissive:t,emissiveIntensity:n,iridescence:.58,iridescenceIOR:1.31,iridescenceThicknessRange:[80,360],clearcoat:.5,clearcoatRoughness:.24,transparent:!1})}function mx(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(a.rx,a.ry,a.rz),r.scale.set(a.sx,a.sy,a.sz),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function gx(e,t,n){const i=[];for(let s=0;s<t;s++){const r=(s+n*.13)/t*Math.PI*2+Ns(s,n+2)*.55,a=16+Ns(s,n+4)*32,o=.32+Ns(s,n+8)*.42;i.push({x:e.x+Math.cos(r)*a,y:3+Ns(s,n+6)*4,z:e.z+Math.sin(r)*a,sx:o,sy:o*(1.12+Ns(s,n+10)*.38),sz:o,rx:.12+Ns(s,n+12)*.38,ry:r+Ns(s,n+14)*.8,rz:(Ns(s,n+16)-.5)*.4})}return i}function XC(e,t){const n=new Mt;n.name="fruit",e.add(n);const i=WC("grove");if(!i)return;const s=t?3:8,r=t?2:6,a=px(2892306,5914656,.14),o=px(1314850,3286102,.12),c=new vn(1,0);mx(c,a,gx(i,s,5),n),mx(c,o,gx(i,r,19),n)}function YC(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function xx(e){return At.find(t=>t.kind===e)??null}function qC(e,t,n,i,s,r,a){const o=n-e,c=i-t,l=Math.hypot(o,c)||1,u=-c/l,d=o/l,h=a.length===0?0:1;for(let f=h;f<=r;f++){const x=f/r,y=Math.sin(x*Math.PI);a.push(e+o*x+u*y*s,t+c*x+d*y*s)}}function _x(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(a.sx,a.sy,a.sz),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function yx(e,t,n){return new mt({color:e,roughness:.4,metalness:.3,emissive:t,emissiveIntensity:n,iridescence:.26,iridescenceIOR:1.3,clearcoat:.2,clearcoatRoughness:.46,transparent:!1})}const ZC=.9,jC=.4,KC=.28,JC=.22,vx=[.8,1.06],QC=.08,tP=.055,eP=11.2,nP=44,qc=7,iP=72;function Rd(e,t){return t?e.filter((n,i)=>i%2===0):e}function Cd(e,t){for(let n=0;n<e.length;n++){const i=e[n];t.push({x:i.x,y:ZC,z:i.z,sx:KC,sy:jC,sz:JC,ry:i.ry})}}function Pd(e,t){for(let n=0;n<e.length-1;n++){const i=e[n],s=e[n+1],r=s.x-i.x,a=s.z-i.z,o=Math.hypot(r,a);if(o<.5||o>qc*3.4)continue;const c=(i.x+s.x)*.5,l=(i.z+s.z)*.5,u=Math.atan2(r,a);for(let d=0;d<vx.length;d++)t.push({x:c,y:vx[d],z:l,sx:QC,sy:tP,sz:o*.98,ry:u})}}function sP(e,t){const n=new Mt;n.name="rails",e.add(n);const i={left:0,right:0,back:0,total:0,rails:0};n.userData.postCounts=i;const s=xx("canal");if(!s)return;const r=xx("market"),a=[],o=[],c=[],l=[],u=[],d=s.radius*1.22;if(r){const _=[];qC(s.x,s.z,r.x,r.z,70,iP,_);const E=_.length/2;let C=0,P=-qc;for(let T=0;T<E;T++){const O=_[T*2],k=_[T*2+1];let U,$;T+1<E?(U=_[(T+1)*2]-O,$=_[(T+1)*2+1]-k):(U=O-_[(T-1)*2],$=k-_[(T-1)*2+1]);const W=Math.hypot(U,$)||1;T>0&&(C+=W);const Y=Math.hypot(O-s.x,k-s.z);if(Y<nP||Y>d||Math.hypot(O,k)<90||C-P<qc)continue;P=C;const tt=-$/W,q=U/W,ht=Math.atan2(U,$),nt=c.length,Lt=(YC(nt,4)-.5)*1.2,Qt=eP+Lt;c.push({x:O+tt*Qt,z:k+q*Qt,ry:ht}),l.push({x:O-tt*Qt,z:k-q*Qt,ry:ht})}}const h=r?.x??0,f=r?.z??0,x=Math.atan2(f-s.z,h-s.x),y=96,g=Math.PI*1.62,p=x+Math.PI-g*.5,w=Math.max(5,Math.round(g*y/qc));for(let _=0;_<=w;_++){const E=p+_/w*g;u.push({x:s.x+Math.cos(E)*y,z:s.z+Math.sin(E)*y,ry:E+Math.PI*.5})}const S=Rd(c,t),m=Rd(l,t),M=Rd(u,t);Cd(S,a),Cd(m,a),Cd(M,a);const v=o.length;Pd(S,o),Pd(m,o),Pd(M,o),i.left=S.length,i.right=m.length,i.back=M.length,i.total=a.length,i.rails=o.length-v;const A=new we(1,1,1);_x(A,yx(466472,1729912,.14),a,n),_x(A,yx(799552,2783884,.18),o,n)}function Ua(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function rP(e){return At.find(t=>t.kind===e)??null}function Mx(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}const am=8,aP=22,ow=aP-am,wx=52,Sx=.12;function oP(e,t){const n=t/8*Math.PI*2;return{x:e.x+Math.cos(n)*wx,z:e.z+Math.sin(n)*wx,a:n}}function bx(e,t,n,i,s,r,a){const o=s.length,c=new de(t,n,o);c.castShadow=!1,c.receiveShadow=!1,c.frustumCulled=!0,c.renderOrder=3;const l=new Float32Array(o),u=new Float32Array(o),d=new Float32Array(o),h=new Float32Array(o),f=new Float32Array(o),x=new Float32Array(o),y=new Float32Array(o),g=new Float32Array(o);for(let p=0;p<o;p++){const w=oP(i,s[p]);l[p]=w.x,u[p]=w.z;const S=.72+Ua(p,r+6)*.58;d[p]=S,h[p]=S*(.82+Ua(p,r+8)*.36),f[p]=S,x[p]=Ua(p,r+11),y[p]=.026+Ua(p,r+13)*.028,g[p]=.55+Ua(p,r+17)*.85;const m=x[p];a.position.set(l[p],am+m*ow,u[p]),a.rotation.set(0,w.a,0),a.scale.set(d[p],h[p],f[p]),a.updateMatrix(),c.setMatrixAt(p,a.matrix)}return c.instanceMatrix.needsUpdate=!0,e.add(c),{mesh:c,x:l,z:u,sx:d,sy:h,sz:f,phase:x,speed:y,wob:g,n:o}}function Ex(e,t,n){const i=e.mesh;for(let s=0;s<e.n;s++){let r=e.phase[s]+t*e.speed[s];r-=Math.floor(r);const a=e.wob[s];n.position.set(e.x[s]+Math.sin(t*.38+s*1.31)*a,am+r*ow,e.z[s]+Math.cos(t*.31+s*.77)*a),n.rotation.set(0,t*.08+s*.7,0);const o=.72+r*.55;n.scale.set(e.sx[s]*o,e.sy[s]*(.9+r*.22),e.sz[s]*o),n.updateMatrix(),i.setMatrixAt(s,n.matrix)}i.instanceMatrix.needsUpdate=!0}function cP(e,t){const n=new Mt;n.name="smoke",e.add(n);const i=rP("foundry"),s={gold:0,violet:0,total:0};if(n.userData.wispCounts=s,!i)return{tick(){}};const r=t?[0]:[0,2,4,6],a=t?[4]:[1,5];s.gold=r.length,s.violet=a.length,s.total=s.gold+s.violet;const o=t?6:10,c=new as(1,o,o),l=new ie,u=bx(n,c,Mx(11569736,Sx),i,r,5,l),d=bx(n,c,Mx(5916792,Sx),i,a,19,l);return{tick(h){Ex(u,h,l),Ex(d,h,l)}}}function lP(){const e=ji.find(s=>s.id==="nesh"),t=e?.x??-24,n=e?.z??128,i=Math.hypot(t,n)||1;return{nx:t/i,nz:n/i}}function hP(){return new mt({color:2892306,roughness:.22,metalness:.46,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function uP(){return new mt({color:1314850,roughness:.16,metalness:.4,emissive:5914656,emissiveIntensity:.16,iridescence:.58,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}const Tx=1.2,dc=8,Ax=.4,Id=3.1,Rx=.48,Dd=.07;function dP(e,t){const n=new Mt;n.name="notice",e.add(n);const i=lP(),s=Math.min(96,Math.max(74,Sn.radius+36)),r=i.nx*s,a=i.nz*s,o=Math.atan2(r,a),c=new gt(new we(Tx,dc,Ax),hP());if(c.position.set(r,Id+dc*.5,a),c.rotation.y=o,c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,n.add(c),!t){const u=new gt(new un(Rx,Dd,8,16),uP());u.rotation.x=Math.PI/2,u.position.set(r,Id+dc+Dd,a),u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,n.add(u)}n.userData.steleCount=1,n.userData.sizes={w:Tx,h:dc,d:Ax,plazaY:Id,r:s,lensR:t?0:Rx,lensTube:t?0:Dd}}function zd(e){return At.find(t=>t.kind===e)??null}function Cx(e,t,n){return new mt({color:e,roughness:.4,metalness:.32,emissive:t,emissiveIntensity:n,iridescence:.28,iridescenceIOR:1.3,clearcoat:.22,clearcoatRoughness:.46,transparent:!1})}function fP(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(a.sx,a.sy,a.sz),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const Kf=18,Jf=.3,Qf=6,Zc=.96,tp=12,pP=4,ep=.34,np=.44,Px=6.4,Ix=1.9,fc={walk:{l:Kf,h:Jf,w:Qf,y:Zc},pile:{rTop:ep,rBot:np},side:tp};function mP(e,t){const n=new Mt;n.name="pier",e.add(n);const i=zd("market"),s={walk:0,piles:0};if(n.userData.pierCounts=s,n.userData.sizes={walk:{...fc.walk},pile:{rTop:fc.pile.rTop,rBot:fc.pile.rBot,n:0,h:0,y0:0},side:fc.side},!i||Math.hypot(i.x,i.z)<90)return;const r=zd("canal"),a=zd("foundry"),o=r??a,c=o?i.x-(r?r.x:o.x):1,l=o?i.z-(r?r.z:o.z):0,u=Math.hypot(c,l)||1,d=c/u,h=l/u,f=-h,x=d,y=Math.atan2(d,h),g=i.x+f*tp,p=i.z+x*tp,w=new we(Qf,Jf,Kf),S=new gt(w,Cx(2761236,1729912,.16));S.position.set(g,Zc,p),S.rotation.y=y,S.castShadow=!1,S.receiveShadow=!0,S.frustumCulled=!0,n.add(S),s.walk=1;const m=Zc;if(n.userData.sizes.walk={l:Kf,h:Jf,w:Qf,y:Zc},n.userData.sizes.pile={rTop:ep,rBot:np,n:t?0:pP,h:t?0:m,y0:0},t)return;const M=[],v=[-Px,Px],A=[-Ix,Ix];for(let C=0;C<v.length;C++)for(let P=0;P<A.length;P++)M.push({x:g+d*v[C]+f*A[P],y:m*.5,z:p+h*v[C]+x*A[P],sx:1,sy:1,sz:1,ry:y});const _=8,E=new ye(ep,np,m,_);fP(E,Cx(466472,5914656,.12),M,n),s.piles=M.length}function gP(e){return At.find(t=>t.kind===e)??null}function xP(){return new mt({color:1314850,roughness:.2,metalness:.38,emissive:5914656,emissiveIntensity:.12,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}const Ch=1.2,Ph=14,Dx=1.2,ip=10,sp=.8,zx=1.2,jc=ip*.5-Ch*.5,_P=jc*2-Ch,Lx=Ph*.5,Nx=Ph+sp*.5;function yP(e,t){const n=new Mt;n.name="gates",e.add(n);const i={postW:Ch,postH:Ph,postD:Dx,lintelW:ip,lintelH:sp,lintelD:zx,span:jc*2,open:_P,postY:Lx,lintelY:t?0:Nx};n.userData.sizes=i,n.userData.postCount=0,n.userData.lintelCount=0;const s=gP("gate");if(!s||Math.hypot(s.x,s.z)<90)return;const r=Math.atan2(s.x,s.z),a=Math.cos(r),o=Math.sin(r),c=xP(),l=new ie;l.rotation.order="YXZ";const u=new we(Ch,Ph,Dx),d=new de(u,c,2);d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!0,d.renderOrder=2;for(let h=0;h<2;h++){const f=h===0?-1:1;l.position.set(s.x+f*jc*a,Lx,s.z-f*jc*o),l.rotation.set(0,r,0),l.scale.set(1,1,1),l.updateMatrix(),d.setMatrixAt(h,l.matrix)}if(d.instanceMatrix.needsUpdate=!0,n.add(d),n.userData.postCount=2,!t){const h=new gt(new we(ip,sp,zx),c);h.position.set(s.x,Nx,s.z),h.rotation.y=r,h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,h.renderOrder=2,n.add(h),n.userData.lintelCount=1}}function Ux(e){return At.find(t=>t.kind===e)??null}function vP(){const e=ji.find(t=>t.id==="voss");return{vx:e?.x??-288,vz:e?.z??-328}}function MP(){return new mt({color:2892306,roughness:.28,metalness:.42,emissive:5783592,emissiveIntensity:.14,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function Ox(){return new mt({color:3812374,roughness:.18,metalness:.52,emissive:13934672,emissiveIntensity:.22,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}const Oa=6,Ld=.4,Nd=3,Ud=1.1,Od=22,pc=3.6,kx=.14,wP=.1,kd=.32,Fx=.38;function SP(e,t){const n=new Mt;n.name="stall",e.add(n);const i=Ux("market");if(!i){n.userData.stallCount=0,n.userData.sizes={w:Oa,h:Ld,d:Nd,y:Ud,postH:0,postR:0,bulbR:0,offset:0};return}const s=Ux("canal"),r=vP(),a=(s?.x??i.x+1)-i.x,o=(s?.z??i.z)-i.z,c=Math.hypot(a,o)||1,l=a/c,u=o/c,d=-u,h=l,f=r.vx-i.x,x=r.vz-i.z,y=d*f+h*x>=0?1:-1,g=i.x+d*y*Od,p=i.z+h*y*Od,w=Math.atan2(g-i.x,p-i.z),S=new gt(new we(Oa,Ld,Nd),MP());if(S.position.set(g,Ud,p),S.rotation.y=w,S.castShadow=!1,S.receiveShadow=!0,S.frustumCulled=!0,n.add(S),!t){const M=g+l*(Oa*.5+Fx),v=p+u*(Oa*.5+Fx),A=new gt(new ye(wP,kx,pc,8),Ox());A.position.set(M,pc*.5,v),A.castShadow=!1,A.receiveShadow=!0,A.frustumCulled=!0,n.add(A);const _=new gt(new vn(kd,0),Ox());_.position.set(M,pc+kd*.45,v),_.castShadow=!1,_.receiveShadow=!0,_.frustumCulled=!0,n.add(_)}n.userData.stallCount=1,n.userData.sizes={w:Oa,h:Ld,d:Nd,y:Ud,postH:t?0:pc,postR:t?0:kx,bulbR:t?0:kd,offset:Od}}function bP(e){return At.find(t=>t.kind===e)??null}function EP(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function TP(){return new mt({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:.16,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function Bx(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}function AP(e,t,n,i,s){const r=Math.cos(s),a=Math.sin(s);return{x:e+n*r+i*a,z:t-n*a+i*r}}const cw=8,rp=.2,lw=1.4,Fd=1.2,Bd=1.5,RP=3,CP=1,hw=.46,ap=.62,uw=.12,PP=6,IP=4,DP=[-2.4,2.2,-1.8,1.6,-2.6,2.4],zP=[-2.8,-1,1,2.8],LP=.16,NP={w:cw,h:rp,d:lw,y0:0,gap:0,tabletW:hw,tabletH:ap,tabletD:uw,shelfCount:0,tabletCount:0};function UP(e,t){const n=new Mt;n.name="shelves",e.add(n);const i={...NP};n.userData.sizes=i,n.userData.shelfCount=0,n.userData.tabletCount=0;const s=bP("archive");if(!s||Math.hypot(s.x,s.z)<90)return;const r=Math.atan2(s.x,s.z),a=s.x,o=s.z,c=t?CP:RP,l=t?IP:PP,u=t?zP:DP,d=[];for(let f=0;f<c;f++)d.push({x:a,y:Fd+f*Bd,z:o,ry:r});Bx(new we(cw,rp,lw),EP(),d,n);const h=[];for(let f=0;f<l;f++){const x=t?0:Math.floor(f/2),y=Fd+x*Bd,g=(f%2===0?1:-1)*LP,p=AP(a,o,u[f]??0,g,r);h.push({x:p.x,y:y+rp*.5+ap*.5,z:p.z,ry:r})}Bx(new we(hw,ap,uw),TP(),h,n),i.y0=Fd,i.gap=c>1?Bd:0,i.shelfCount=d.length,i.tabletCount=h.length,n.userData.shelfCount=d.length,n.userData.tabletCount=h.length}function OP(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function kP(e){return At.find(t=>t.kind===e)??null}function FP(){return new mt({color:1314850,roughness:.24,metalness:.32,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function BP(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(a.sx,a.sy,a.sz),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const Hx=10,Gx=.4,Hd=2.2,Gd=.2,Vd=.4,Vx=52,$x=90;function HP(e){return e?3:4+Math.min(2,Math.floor(OP(7,21)*3))}function GP(e,t){const n=new Mt;n.name="steps",e.add(n);const i=HP(t),s={n:0,want:i,y0:Gd,rise:Vd};n.userData.stepCounts=s,n.userData.sizes={w:Hx,h:Gx,d:Hd,y0:Gd,rise:Vd,outer:Vx};const r=kP("terrace");if(!r||Math.hypot(r.x,r.z)<$x)return;const a=Math.hypot(r.x,r.z)||1,o=r.x/a,c=r.z/a,l=Math.atan2(o,c),u=[];for(let h=0;h<i;h++){const f=Vx-h*Hd,x=r.x-o*f,y=r.z-c*f;Math.hypot(x,y)<$x||u.push({x,y:Gd+h*Vd,z:y,sx:1,sy:1,sz:1,ry:l})}const d=new we(Hx,Gx,Hd);BP(d,FP(),u,n),s.n=u.length}const om=6,Tu=.45,op=Tu,dw=.35,fw=om-Tu-.15,pw=.28,cp=.2,mw=.36,gw=.68,di={x:0,y:op,z:0,rimR:om,tube:Tu,rimY:op,discR:fw,discY:dw,discOp:pw,discOpMin:cp,discOpMax:mw,breath:gw};function VP(){return new mt({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function $P(e){return new Ue({color:3844288,transparent:!0,opacity:e,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}function WP(e,t){const n=new Mt;n.name="fountain",e.add(n);const i=t?12:22,s=t?5:8,r=new un(om,Tu,s,i),a=new gt(r,VP());a.rotation.x=Math.PI/2,a.position.set(0,op,0),a.castShadow=!1,a.receiveShadow=!0,a.frustumCulled=!0,a.renderOrder=2,n.add(a);const o=new yi(fw,i);o.rotateX(-Math.PI/2);const c=$P(pw),l=new gt(o,c);l.position.set(0,dw,0),l.castShadow=!1,l.receiveShadow=!1,l.frustumCulled=!0,l.renderOrder=1,n.add(l);const u=mw-cp;return n.userData.basinCount=1,n.userData.rimCount=1,n.userData.discCount=1,n.userData.breathing=!t,n.userData.sizes={x:di.x,y:di.y,z:di.z,rimR:di.rimR,tube:di.tube,rimY:di.rimY,discR:di.discR,discY:di.discY,discOp:di.discOp,discOpMin:t?di.discOp:di.discOpMin,discOpMax:t?di.discOp:di.discOpMax,breath:t?0:di.breath,segs:i,tubeSeg:s},t?{tick(){}}:{tick(d){const h=(Math.sin(d*gw)+1)*.5;c.opacity=cp+h*u}}}const Wx=4.2,lp=.18,Xx=lp,Yx=3.6,$d=.22,qx=.22,Wd=Math.min(84,Math.max(78,Sn.radius+30));function XP(){const e=ji.find(s=>s.id==="nesh"),t=e?.x??-24,n=e?.z??128,i=Math.hypot(t,n)||1;return{nx:t/i,nz:n/i}}function YP(){return new mt({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function qP(e){return new mt({color:3073791,roughness:.16,metalness:.22,emissive:1456196,emissiveIntensity:.18,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!0,opacity:e,depthWrite:!1,side:xe})}function ZP(e,t){const n=new Mt;n.name="lens",e.add(n);const i=XP(),s=i.nx*Wd,r=i.nz*Wd,a=t?12:22,o=t?5:8,c=new yi(Yx,a);c.rotateX(-Math.PI/2);const l=new gt(c,qP(qx));if(l.position.set(s,$d,r),l.castShadow=!1,l.receiveShadow=!1,l.frustumCulled=!0,l.renderOrder=1,n.add(l),!t){const u=new gt(new un(Wx,lp,o,a),YP());u.rotation.x=Math.PI/2,u.position.set(s,Xx,r),u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,n.add(u)}n.userData.lensCount=1,n.userData.torusCount=t?0:1,n.userData.discCount=1,n.userData.sizes={x:s,y:$d,z:r,torusR:t?0:Wx,tube:t?0:lp,torusY:t?0:Xx,discR:Yx,discY:$d,discOp:qx,apronR:Wd,segs:a,tubeSeg:t?0:o}}function jP(e){return At.find(t=>t.kind===e)??null}function KP(){return new mt({color:1314850,roughness:.24,metalness:.32,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function JP(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Zx=1.1,jx=2.4,Kx=.7,Xd=1.2,mc=22,Jx=90,QP=8,tI=5;function eI(e){return e?tI:QP}function nI(e,t){const n=new Mt;n.name="chorus",e.add(n);const i=eI(t),s={n:0,want:i,r:mc,y:Xd};n.userData.stoneCounts=s,n.userData.sizes={w:Zx,h:jx,d:Kx,y:Xd,r:mc};const r=jP("ring");if(!r||Math.hypot(r.x,r.z)<Jx)return;const a=Math.PI*2/i,c=Math.atan2(-r.z,-r.x)+a*.5,l=[];for(let d=0;d<i;d++){const h=c+d*a,f=r.x+Math.cos(h)*mc,x=r.z+Math.sin(h)*mc;Math.hypot(f,x)<Jx||l.push({x:f,y:Xd,z:x,ry:Math.atan2(f-r.x,x-r.z)})}const u=new we(Zx,jx,Kx);JP(u,KP(),l,n),s.n=l.length}function iI(e){return At.find(t=>t.kind===e)??null}function sI(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function Qx(){return new mt({color:3812374,roughness:.16,metalness:.5,emissive:13934672,emissiveIntensity:.18,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}function rI(e,t,n,i,s){const r=Math.cos(s),a=Math.sin(s);return{x:e+n*r+i*a,z:t-n*a+i*r}}const cm=4.2,xw=.55,lm=2.2,t_=.55,aI=90,gc=1.72,e_=.07,oI=.05,cI=cm*.42,lI=lm*.38,Yd=.28,n_=.055,hI={w:cm,h:xw,d:lm,y:0,postH:0,postR:0,lensR:0,lensTube:0,seatCount:0,postCount:0};function uI(e,t){const n=new Mt;n.name="seat",e.add(n);const i={...hI};n.userData.sizes=i,n.userData.seatCount=0,n.userData.postCount=0;const s=iI("overlook");if(!s||Math.hypot(s.x,s.z)<aI)return;const r=s.x,a=s.z,o=Math.atan2(r,a),c=new gt(new we(cm,xw,lm),sI());if(c.position.set(r,t_,a),c.rotation.y=o,c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,n.add(c),i.y=t_,i.seatCount=1,n.userData.seatCount=1,!t){const u=rI(r,a,cI,lI,o),d=new gt(new ye(oI,e_,gc,10),Qx());d.position.set(u.x,gc*.5,u.z),d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!0,n.add(d);const h=new gt(new un(Yd,n_,8,16),Qx());h.position.set(u.x,gc+Yd*.15,u.z),h.rotation.y=o,h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,n.add(h),i.postH=gc,i.postR=e_,i.lensR=Yd,i.lensTube=n_,i.postCount=1,n.userData.postCount=1}}function i_(e){return At.find(t=>t.kind===e)??null}function dI(e){return new Ue({color:4114656,transparent:!0,opacity:e,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}const _w=6,yw=.08,hp=2,Kc=3.2,vw=.6,Mw=.18,up=.12,ww=.24,Sw=.92,bw=4,fI=2,pI=90,ys={w:_w,h:yw,d:hp,yTop:Kc,yBot:vw,op:Mw,opMin:up,opMax:ww,fall:Sw};function mI(e){return e?fI:bw}function gI(e,t){const n=new Mt;n.name="cascade",e.add(n);const i=mI(t),s=ww-up;n.userData.planeCount=0,n.userData.sizes={w:ys.w,h:ys.h,d:ys.d,yTop:ys.yTop,yBot:ys.yBot,op:ys.op,opMin:ys.opMin,opMax:ys.opMax,fall:ys.fall,n:0,want:i};const r=i_("canal");if(!r)return{tick(){}};if(Math.hypot(r.x,r.z)<pI)return{tick(){}};const a=i_("market"),o=(a?.x??0)-r.x,c=(a?.z??0)-r.z,l=Math.hypot(o,c)||1,u=o/l,d=c/l,h=Math.atan2(u,d),f=(bw-1)*hp,x=new we(_w,yw,hp),y=dI(Mw),g=new de(x,y,i);g.castShadow=!1,g.receiveShadow=!1,g.frustumCulled=!0,g.renderOrder=3;const p=new ie;p.rotation.order="YXZ";for(let w=0;w<i;w++){const S=i===1?0:w/(i-1),m=S*f;p.position.set(r.x+u*m,Kc+(vw-Kc)*S,r.z+d*m),p.rotation.set(0,h,0),p.scale.set(1,1,1),p.updateMatrix(),g.setMatrixAt(w,p.matrix)}return g.instanceMatrix.needsUpdate=!0,n.add(g),n.userData.planeCount=i,n.userData.sizes.n=i,n.userData.sizes.x=r.x,n.userData.sizes.y=Kc,n.userData.sizes.z=r.z,n.userData.sizes.along=f,{tick(w){const S=(Math.sin(w*Sw)+1)*.5;y.opacity=up+S*s}}}function s_(e){return At.find(t=>t.kind===e)??null}function xI(){return new mt({color:466472,roughness:.22,metalness:.36,emissive:1729912,emissiveIntensity:.16,iridescence:.36,iridescenceIOR:1.3,iridescenceThicknessRange:[90,340],clearcoat:.32,clearcoatRoughness:.34,transparent:!1})}function _I(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const xc=3.2,Jc=.16,qd=Jc*.5,_c=38,r_=90,Ew=3,yI=1;function vI(e){return e?yI:Ew}function MI(e,t){const n=new Mt;n.name="veins",e.add(n);const i=vI(t),s={n:0,want:i,r:xc,h:Jc,ring:_c,y:qd};n.userData.padCounts=s,n.userData.sizes={r:xc,h:Jc,y:qd,ring:_c};const r=s_("wild");if(!r||Math.hypot(r.x,r.z)<r_)return;const a=s_("bridge"),o=a?a.x-r.x:-r.x,c=a?a.z-r.z:-r.z,l=Math.atan2(c,o),u=Math.PI*2/Ew,d=[];for(let x=0;x<i;x++){const y=l+x*u,g=r.x+Math.cos(y)*_c,p=r.z+Math.sin(y)*_c;Math.hypot(g,p)<r_||d.push({x:g,y:qd,z:p,ry:Math.atan2(g-r.x,p-r.z)})}const h=t?10:16,f=new ye(xc,xc,Jc,h);_I(f,xI(),d,n),s.n=d.length}function a_(e){return At.find(t=>t.kind===e)??null}function wI(){return new mt({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function SI(){return new mt({color:3812374,roughness:.22,metalness:.48,emissive:13934672,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function o_(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const Yr=4.2,Zd=.12,yc=.22,jd=3.6,Kd=90,bI=5,EI=3;function TI(e){return e?EI:bI}function AI(e){return{n:0,posts:0,bulbs:0,want:e}}function RI(e,t){const n=new Mt;n.name="lamps",e.add(n);const i=TI(t),s=AI(i);n.userData.lampCounts=s,n.userData.sizes={postH:Yr,postR:Zd,bulbR:yc,side:jd,yPost:Yr*.5,yBulb:Yr+yc*.55};const r=a_("canal"),a=a_("market");if(!r||!a||Math.hypot(r.x,r.z)<Kd||Math.hypot(a.x,a.z)<Kd)return;const o=a.x-r.x,c=a.z-r.z,l=Math.hypot(o,c)||1,u=Math.min(.28,r.radius*.62/l),d=Math.min(.28,a.radius*.62/l),h=r.x+o*u,f=r.z+c*u,x=a.x-o*d,y=a.z-c*d,g=x-h,p=y-f,w=Math.hypot(g,p)||1,S=g/w,M=-(p/w),v=S,A=Math.atan2(g,p),_=[],E=[],C=Yr*.5,P=Yr+yc*.55;for(let O=0;O<i;O++){const k=(O+.5)/i,U=O%2===0?1:-1,$=h+g*k+M*jd*U,W=f+p*k+v*jd*U;Math.hypot($,W)<Kd||(_.push({x:$,y:C,z:W,ry:A}),E.push({x:$,y:P,z:W,ry:A}))}const T=t?6:8;o_(new ye(Zd,Zd,Yr,T),wI(),_,n),o_(new as(yc,T,T),SI(),E,n),s.n=_.length,s.posts=_.length,s.bulbs=E.length}function c_(e){return At.find(t=>t.kind===e)??null}function CI(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1,side:xe})}function PI(e){return new Ue({color:3844288,transparent:!0,opacity:e,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}const Tw=3.4,Aw=1.12,Rw=.22,l_=2.6,h_=.5,u_=.2,dp=-16,ar=20,d_=90;function II(e,t,n){return[new xt(.06,0),new xt(e*.48,.05),new xt(e*.86,t*.38),new xt(e,t),new xt(e-n,t),new xt(e*.72,t*.4),new xt(e*.32,n),new xt(.06,n*.65)]}const DI={r:Tw,h:Aw,wall:Rw,discR:0,discY:0,discOp:0,along:dp,side:ar,x:0,y:0,z:0,bowlCount:0,discCount:0,segs:0};function zI(e,t){const n=new Mt;n.name="cradle",e.add(n);const i={...DI};n.userData.sizes=i,n.userData.bowlCount=0,n.userData.discCount=0,n.userData.cradleCount=0;const s=c_("canal");if(!s||Math.hypot(s.x,s.z)<d_)return;const r=c_("market"),a=(r?.x??0)-s.x,o=(r?.z??0)-s.z,c=Math.hypot(a,o)||1,l=a/c,u=o/c,d=-u,h=l,f=Math.hypot(s.x+d*ar,s.z+h*ar),x=Math.hypot(s.x-d*ar,s.z-h*ar),y=f>=x?1:-1,g=s.x+l*dp+d*ar*y,p=s.z+u*dp+h*ar*y;if(Math.hypot(g,p)<d_)return;const w=t?10:20,S=new gt(new zo(II(Tw,Aw,Rw),w),CI());if(S.position.set(g,0,p),S.castShadow=!1,S.receiveShadow=!0,S.frustumCulled=!0,S.renderOrder=2,n.add(S),i.x=g,i.y=0,i.z=p,i.bowlCount=1,i.segs=w,n.userData.bowlCount=1,n.userData.cradleCount=1,t)return;const m=new yi(l_,w);m.rotateX(-Math.PI/2);const M=new gt(m,PI(u_));M.position.set(g,h_,p),M.castShadow=!1,M.receiveShadow=!1,M.frustumCulled=!0,M.renderOrder=1,n.add(M),i.discR=l_,i.discY=h_,i.discOp=u_,i.discCount=1,n.userData.discCount=1}function hm(e){return At.find(t=>t.kind===e)??null}function LI(){return new mt({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function NI(){return new mt({color:3812374,roughness:.22,metalness:.46,emissive:5914656,emissiveIntensity:.16,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.26,transparent:!1,side:xe})}function UI(){return new mt({color:1314850,roughness:.2,metalness:.38,emissive:3286102,emissiveIntensity:.14,iridescence:.56,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1,side:xe})}const um=.08,Au=3.6,Cw=1.4,po=5.2,fp=.11,Ih=.86,dm=.08,OI=.12,fm=po-dm,kI=fm-Au*.5,pp=Math.min(72,Math.max(64,Sn.radius+16)),f_=38,p_=16,mp=.04,FI=.82,Pw=3,Iw=1,Ii={t:um,h:Au,w:Cw,postH:po,postR:fp,armL:Ih,hangY:fm,bannerY:kI,plazaR:pp,sway:mp,nFine:Pw,nCoarse:Iw};function BI(e){return e?Iw:Pw}function HI(){const e=hm("market"),t=e?.x??-300,n=e?.z??-340,i=Math.hypot(t,n)||1,s=t/i*pp,r=n/i*pp;return{x:s,z:r,yaw:Math.atan2(s,r),violet:!1}}function GI(){const e=hm("market");if(!e||Math.hypot(e.x,e.z)<90)return null;const t=Math.hypot(e.x,e.z)||1,n=e.x-e.x/t*f_,i=e.z-e.z/t*f_;return{x:n,z:i,yaw:Math.atan2(n,i),violet:!1}}function VI(){const e=hm("gate");if(!e||Math.hypot(e.x,e.z)<90)return null;const t=Math.atan2(e.x,e.z),n=e.x+p_*Math.cos(t),i=e.z-p_*Math.sin(t);return{x:n,z:i,yaw:t,violet:!0}}function $I(e,t,n,i,s,r,a,o){const c=new Mt;c.position.set(e.x,0,e.z),c.rotation.y=e.yaw,a.add(c);const l=new gt(n.post,i);l.position.set(0,po*.5,0),l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,c.add(l);const u=new gt(n.arm,i);u.position.set(Ih*.5,po-dm*.5,0),u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,c.add(u);const d=new Mt;d.position.set(Ih,fm,0),c.add(d);const h=new gt(n.cloth,e.violet?r:s);h.position.set(um*.5,-Au*.5,0),h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,h.renderOrder=2,d.add(h),o.push({hang:d,phase:t*1.37,speed:FI+t*.11})}function WI(e,t){const n=new Mt;n.name="banners",e.add(n);const i=BI(t),s={n:0,posts:0,want:i,sway:mp};n.userData.bannerCount=0,n.userData.postCount=0,n.userData.sizes={t:Ii.t,h:Ii.h,w:Ii.w,postH:Ii.postH,postR:Ii.postR,armL:Ii.armL,hangY:Ii.hangY,bannerY:Ii.bannerY,plazaR:Ii.plazaR,sway:Ii.sway,nFine:Ii.nFine,nCoarse:Ii.nCoarse,segs:t?6:8};const r=[HI()];if(i>1){const f=GI();f&&r.push(f);const x=VI();x&&r.push(x)}const a=r.slice(0,i);if(!a.length)return n.userData.bannerCounts=s,{tick(){}};const o=t?6:8,c={post:new ye(fp,fp,po,o),arm:new we(Ih,dm,OI),cloth:new we(um,Au,Cw)},l=LI(),u=NI(),d=UI(),h=[];for(let f=0;f<a.length;f++)$I(a[f],f,c,l,u,d,n,h);return s.n=h.length,s.posts=h.length,n.userData.bannerCount=s.n,n.userData.postCount=s.posts,n.userData.bannerCounts=s,{tick(f){for(let x=0;x<h.length;x++){const y=h[x];y.hang.rotation.y=Math.sin(f*y.speed+y.phase)*mp}}}}function XI(e){return At.find(t=>t.kind===e)??null}function YI(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function qI(){return new mt({color:3812374,roughness:.14,metalness:.42,emissive:13934672,emissiveIntensity:.22,iridescence:.62,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.56,clearcoatRoughness:.18,transparent:!1})}const Dw=2.4,pm=.7,zw=1.2,gp=.85,xp=.22,m_=gp+pm*.5+xp,ZI=90,jI={w:Dw,h:pm,d:zw,y:0,octaR:0,octaY:0,anvilCount:0,octaCount:0};function KI(e,t){const n=new Mt;n.name="anvil",e.add(n);const i={...jI};n.userData.sizes=i,n.userData.anvilCount=0,n.userData.octaCount=0;const s=XI("foundry");if(!s||Math.hypot(s.x,s.z)<ZI)return;const r=s.x,a=s.z,o=Math.atan2(r,a),c=new gt(new we(Dw,pm,zw),YI());if(c.position.set(r,gp,a),c.rotation.y=o,c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,n.add(c),i.y=gp,i.anvilCount=1,n.userData.anvilCount=1,!t){const l=new gt(new vn(xp,0),qI());l.position.set(r,m_,a),l.rotation.y=o,l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,n.add(l),i.octaR=xp,i.octaY=m_,i.octaCount=1,n.userData.octaCount=1}}function JI(){return new mt({color:3812374,roughness:.18,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function QI(){return new mt({color:799552,roughness:.16,metalness:.4,emissive:1729912,emissiveIntensity:.16,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function g_(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const x_=2.4,_p=.06,__=2.4,t4=4,Jd=t4+_p*.5,vc=14,e4=8,n4=4;function i4(e){return e?n4:e4}function s4(e,t){const n=new Mt;n.name="mosaic",e.add(n);const i=i4(t),s={n:0,gold:0,cyan:0,want:i,r:vc,y:Jd};n.userData.tileCounts=s,n.userData.sizes={w:x_,h:_p,d:__,y:Jd,r:vc};const r=[],a=[],o=Math.PI*2/i;for(let l=0;l<i;l++){const u=l*o,d={x:Math.cos(u)*vc,y:Jd,z:Math.sin(u)*vc,ry:u};l%2===0?r.push(d):a.push(d)}const c=new we(x_,_p,__);g_(c,JI(),r,n),g_(c,QI(),a,n),s.gold=r.length,s.cyan=a.length,s.n=r.length+a.length,n.userData.tileCount=s.n}function r4(e){return At.find(t=>t.kind===e)??null}function a4(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function o4(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const y_=2.8,yp=.28,v_=.7,Mc=yp*.5,wc=8,c4=.72,M_=90,l4=3,h4=1;function u4(e){return e?h4:l4}function d4(e,t){const n=new Mt;n.name="rest",e.add(n);const i=u4(t),s={n:0,want:i,y:Mc,r:wc};n.userData.benchCounts=s,n.userData.sizes={w:y_,h:yp,d:v_,y:Mc,r:wc};const r=r4("terrace");if(!r||Math.hypot(r.x,r.z)<M_)return;const a=r.x,o=r.z,c=[];if(i===1)c.push({x:a,y:Mc,z:o,ry:Math.atan2(a,o)});else{const d=Math.atan2(-o,-a)+Math.PI;for(let h=0;h<i;h++){const f=d+(h-(i-1)*.5)*c4,x=a+Math.cos(f)*wc,y=o+Math.sin(f)*wc;Math.hypot(x,y)<M_||c.push({x,y:Mc,z:y,ry:Math.atan2(a-x,o-y)})}}const l=new we(y_,yp,v_);o4(l,a4(),c,n),s.n=c.length}function f4(e){return At.find(t=>t.kind===e)??null}function p4(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1,side:xe})}function m4(e){return new Ue({color:4114656,transparent:!0,opacity:e,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}const Lw=2.2,Nw=.86,Uw=.18,w_=1.62,S_=.38,b_=.16,Qd=.1,E_=.22,T_=.84,g4=90;function x4(e,t,n){return[new xt(.05,0),new xt(e*.48,.04),new xt(e*.86,t*.38),new xt(e,t),new xt(e-n,t),new xt(e*.72,t*.4),new xt(e*.32,n),new xt(.05,n*.65)]}const _4={r:Lw,h:Nw,wall:Uw,discR:0,discY:0,discOp:0,discOpMin:0,discOpMax:0,hail:0,x:0,y:0,z:0,bowlCount:0,discCount:0,segs:0};function y4(e,t){const n=new Mt;n.name="hail",e.add(n);const i={..._4};n.userData.sizes=i,n.userData.bowlCount=0,n.userData.discCount=0,n.userData.hailCount=0;const s=f4("beacon");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<g4)return{tick(){}};const r=s.x,a=s.z,o=t?10:20,c=new gt(new zo(x4(Lw,Nw,Uw),o),p4());if(c.position.set(r,0,a),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,c.renderOrder=2,n.add(c),i.x=r,i.y=0,i.z=a,i.bowlCount=1,i.segs=o,n.userData.bowlCount=1,n.userData.hailCount=1,t)return{tick(){}};const l=new yi(w_,o);l.rotateX(-Math.PI/2);const u=m4(b_),d=new gt(l,u);d.position.set(r,S_,a),d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!0,d.renderOrder=1,n.add(d),i.discR=w_,i.discY=S_,i.discOp=b_,i.discOpMin=Qd,i.discOpMax=E_,i.hail=T_,i.discCount=1,n.userData.discCount=1,n.userData.breathing=!0;const h=E_-Qd;return{tick(f){const x=(Math.sin(f*T_)+1)*.5;u.opacity=Qd+x*h}}}function A_(e){return At.find(t=>t.kind===e)??null}function v4(){return new mt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function M4(){return new mt({color:3812374,roughness:.18,metalness:.46,emissive:15254890,emissiveIntensity:.2,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function R_(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="XYZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,Math.PI/2),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const C_=4.2,P_=.18,I_=2.1,tf=90,w4=3,S4=1;function b4(e){return e?S4:w4}function E4(e){return{n:0,cyan:0,gold:0,want:e}}function T4(e,t){const n=new Mt;n.name="arches",e.add(n);const i=b4(t),s=E4(i);n.userData.archCounts=s,n.userData.sizes={r:C_,tube:P_,y:I_,rz:Math.PI/2};const r=A_("canal"),a=A_("market");if(!r||!a||Math.hypot(r.x,r.z)<tf||Math.hypot(a.x,a.z)<tf)return;const o=a.x-r.x,c=a.z-r.z,l=Math.hypot(o,c)||1,u=Math.min(.28,r.radius*.62/l),d=Math.min(.28,a.radius*.62/l),h=r.x+o*u,f=r.z+c*u,x=a.x-o*d,y=a.z-c*d,g=x-h,p=y-f,w=Math.atan2(g,p),S=[],m=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=h+g*E,P=f+p*E;if(Math.hypot(C,P)<tf)continue;const T={x:C,y:I_,z:P,ry:w};_%2===0?S.push(T):m.push(T)}const M=t?6:8,v=t?12:20,A=new un(C_,P_,M,v,Math.PI);R_(A,v4(),S,n),R_(A,M4(),m,n),s.n=S.length+m.length,s.cyan=S.length,s.gold=m.length}function A4(e){return At.find(t=>t.kind===e)??null}function R4(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function C4(e){return new Ue({color:13934672,transparent:!0,opacity:e,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}const Ru=7.2,vp=.38,D_=Ru*.5,z_=.44,L_=.08,N_=Ru,U_=.2,ef=.12,O_=.28,k_=.78,P4=90,I4={h:Ru,r:vp,y:0,ringR:0,ringTube:0,ringY:0,ringOp:0,ringOpMin:0,ringOpMax:0,glow:0,x:0,z:0,stackCount:0,ringCount:0,segs:0};function D4(e,t){const n=new Mt;n.name="chimney",e.add(n);const i={...I4};n.userData.sizes=i,n.userData.stackCount=0,n.userData.ringCount=0,n.userData.chimneyCount=0;const s=A4("foundry");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<P4)return{tick(){}};const r=s.x,a=s.z,o=t?8:12,c=new gt(new ye(vp,vp,Ru,o),R4());if(c.position.set(r,D_,a),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,c.renderOrder=2,n.add(c),i.x=r,i.y=D_,i.z=a,i.stackCount=1,i.segs=o,n.userData.stackCount=1,n.userData.chimneyCount=1,t)return{tick(){}};const l=6,u=new un(z_,L_,l,o),d=C4(U_),h=new gt(u,d);h.rotation.x=Math.PI/2,h.position.set(r,N_,a),h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!0,h.renderOrder=3,n.add(h),i.ringR=z_,i.ringTube=L_,i.ringY=N_,i.ringOp=U_,i.ringOpMin=ef,i.ringOpMax=O_,i.glow=k_,i.ringCount=1,n.userData.ringCount=1,n.userData.breathing=!0;const f=O_-ef;return{tick(x){const y=(Math.sin(x*k_)+1)*.5;d.opacity=ef+y*f}}}function z4(e){return At.find(t=>t.kind===e)??null}function L4(e){return new mt({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:e,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function N4(e){return new Ue({color:13934672,transparent:!0,opacity:e,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}function F_(e,t,n,i,s){const r=Math.cos(s),a=Math.sin(s);return{x:e+n*r+i*a,z:t-n*a+i*r}}const mm=1.2,Cu=2.4,gm=.12,nf=Cu*.5,B_=1.7,sf=-5.4,U4=mm*.86,O4=Cu*.86,k4=gm*.5+.02,F4=90,B4=4,Ow=2,H4=[.18,.13,.09,.05],G4=[.16,.11,.07,.04],V4={w:mm,h:Cu,d:gm,y:0,pitch:0,rowZ:0,tabletCount:0,glowCount:0};function $4(e){return e?Ow:B4}function W4(e,t){const n=new Mt;n.name="tablets",e.add(n);const i={...V4};n.userData.sizes=i,n.userData.tabletCount=0,n.userData.glowCount=0;const s=z4("archive");if(!s||Math.hypot(s.x,s.z)<F4)return;const r=Math.atan2(s.x,s.z),a=s.x,o=s.z,c=$4(t),l=new we(mm,Cu,gm),u=new cs(U4,O4);let d=0;for(let h=0;h<c;h++){const f=(h-(c-1)*.5)*B_,x=F_(a,o,f,sf,r),y=c===Ow?h*2:h,g=new gt(l,L4(H4[y]??.05));g.position.set(x.x,nf,x.z),g.rotation.y=r,g.castShadow=!1,g.receiveShadow=!0,g.frustumCulled=!0,g.renderOrder=2,n.add(g);const p=F_(a,o,f,sf-k4,r),w=new gt(u,N4(G4[y]??.04));w.position.set(p.x,nf,p.z),w.rotation.y=r,w.castShadow=!1,w.receiveShadow=!1,w.frustumCulled=!0,w.renderOrder=3,n.add(w),d+=1}i.y=nf,i.pitch=B_,i.rowZ=sf,i.tabletCount=c,i.glowCount=d,n.userData.tabletCount=c,n.userData.glowCount=d}function X4(e){return At.find(t=>t.kind===e)??null}function Y4(e){return new Ue({color:10121960,transparent:!0,opacity:e,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}const kw=.08,xm=5.2,_m=3.4,Fw=14,Mp=Fw-xm*.5,Bw=.28,Hw=_m+Bw,Gw=.14,wp=.08,Vw=.2,$w=.73,Ww=2,Xw=1,q4=90,Yw=Math.PI/2,fi={t:kw,h:xm,w:_m,hangY:Fw,veilY:Mp,slit:Bw,pitch:Hw,op:Gw,opMin:wp,opMax:Vw,breath:$w,nFine:Ww,nCoarse:Xw,faceYaw:Yw};function Z4(e){return e?Xw:Ww}function j4(e,t){const n=new Mt;n.name="veil",e.add(n);const i=Z4(t),s=Vw-wp;n.userData.veilCount=0,n.userData.sizes={t:fi.t,h:fi.h,w:fi.w,hangY:fi.hangY,veilY:fi.veilY,slit:fi.slit,pitch:fi.pitch,op:fi.op,opMin:fi.opMin,opMax:fi.opMax,breath:fi.breath,nFine:fi.nFine,nCoarse:fi.nCoarse,faceYaw:fi.faceYaw,n:0,want:i,x:0,y:0,z:0};const r=X4("gate");if(!r)return{tick(){}};if(Math.hypot(r.x,r.z)<q4)return{tick(){}};const a=Math.atan2(r.x,r.z),o=Math.cos(a),c=Math.sin(a),l=a+Yw,u=new we(kw,xm,_m),d=Y4(Gw),h=new de(u,d,i);h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!0,h.renderOrder=3;const f=new ie;f.rotation.order="YXZ";for(let x=0;x<i;x++){const y=i===1?0:(x-(i-1)*.5)*Hw;f.position.set(r.x+y*o,Mp,r.z-y*c),f.rotation.set(0,l,0),f.scale.set(1,1,1),f.updateMatrix(),h.setMatrixAt(x,f.matrix)}return h.instanceMatrix.needsUpdate=!0,n.add(h),n.userData.veilCount=i,n.userData.sizes.n=i,n.userData.sizes.x=r.x,n.userData.sizes.y=Mp,n.userData.sizes.z=r.z,{tick(x){const y=(Math.sin(x*$w)+1)*.5;d.opacity=wp+y*s}}}function ka(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function K4(e){return At.find(t=>t.kind===e)??null}function J4(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function Q4(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(a.rx,a.ry,a.rz),r.scale.set(a.sx,a.sy,a.sz),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const Qc=.08,Qr=.22,tl=.9,Sp=18,tD=10,H_=90,eD=6,nD=3,G_=.38;function iD(e){return e?nD:eD}function sD(e){return{n:0,want:e,r:Qc,hMin:Qr,hMax:tl,ring:Sp}}function rD(e,t){const n=new Mt;n.name="roots",e.add(n);const i=iD(t),s=sD(i);n.userData.rootCounts=s,n.userData.rootCount=0,n.userData.sizes={r:Qc,hMin:Qr,hMax:tl,ring:Sp,y:Qr*.5};const r=K4("grove");if(!r||Math.hypot(r.x,r.z)<H_)return;const a=tl-Qr,o=[];for(let u=0;u<i;u++){const d=(u+.13)/i*Math.PI*2+ka(u,3)*.4,h=Sp+(ka(u,5)-.5)*tD,f=i===1?(Qr+tl)*.5:Qr+u/(i-1)*a,x=r.x+Math.cos(d)*h,y=r.z+Math.sin(d)*h;Math.hypot(x,y)<H_||o.push({x,y:f*.5,z:y,sx:1,sy:f,sz:1,rx:(ka(u,11)-.5)*G_,ry:d+ka(u,13)*.7,rz:(ka(u,17)-.5)*G_})}const c=t?6:8,l=new ye(Qc,Qc,1,c);Q4(l,J4(),o,n),s.n=o.length,n.userData.rootCount=o.length}function aD(){const e=ji.find(s=>s.id==="veyra"),t=e?.x??30,n=e?.z??-40,i=Math.hypot(t,n)||1;return{vx:t/i,vz:n/i}}function oD(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1,side:xe})}function cD(e){return new mt({color:3844288,roughness:.18,metalness:.2,emissive:1729912,emissiveIntensity:.22,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!0,opacity:e,depthWrite:!1,side:xe})}const V_=1.6,$_=.68,W_=.14,X_=1.04,Y_=.28,q_=.34,lD=4,rf=lD,af=9.6;function hD(e,t,n){return[new xt(.04,0),new xt(e*.58,.02),new xt(e*.9,t*.26),new xt(e,t),new xt(e-n*.55,t*.96),new xt(e*.78,t*.3),new xt(e*.4,n*.72),new xt(.04,n*.48)]}function uD(e,t){const n=new Mt;n.name="font",e.add(n);const i=aD(),s=i.vx*af,r=i.vz*af,a=t?8:16,o=new gt(new zo(hD(V_,$_,W_),a),oD());o.position.set(s,rf,r),o.castShadow=!1,o.receiveShadow=!0,o.frustumCulled=!0,o.renderOrder=2,n.add(o);const c={r:V_,h:$_,wall:W_,discR:0,discY:0,discOp:0,y:rf,apronR:af,x:s,z:r,bowlCount:1,discCount:0,segs:a};if(n.userData.sizes=c,n.userData.bowlCount=1,n.userData.discCount=0,n.userData.fontCount=1,t)return;const l=new yi(X_,a);l.rotateX(-Math.PI/2);const u=new gt(l,cD(q_));u.position.set(s,rf+Y_,r),u.castShadow=!1,u.receiveShadow=!1,u.frustumCulled=!0,u.renderOrder=1,n.add(u),c.discR=X_,c.discY=Y_,c.discOp=q_,c.discCount=1,n.userData.discCount=1}function qr(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function dD(e){return At.find(t=>t.kind===e)??null}function fD(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function Z_(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(a.rx,a.ry,a.rz),r.scale.set(a.sx,a.sy,a.sz),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const el=.07,$a=2.4,nl=3.8,bp=.16,il=.42,Wa=4,sl=7,Ep=22,pD=8,j_=90,mD=4,gD=2,xD=.28,_D=.22;function yD(e){return e?gD:mD}function vD(e){return{n:0,limbs:0,cylinders:0,cones:0,want:e,r:el,lMin:$a,lMax:nl,coneR:bp,coneH:il,yMin:Wa,yMax:sl,ring:Ep}}function MD(e,t,n){const i=Math.acos(Math.max(-1,Math.min(1,t))),s=Math.atan2(e,n);return{rx:i,ry:s}}function wD(e,t){const n=new Mt;n.name="boughs",e.add(n);const i=yD(t),s=vD(i);n.userData.boughCounts=s,n.userData.boughCount=0,n.userData.sizes={r:el,lMin:$a,lMax:nl,coneR:bp,coneH:il,yMin:Wa,yMax:sl,ring:Ep};const r=dD("grove");if(!r||Math.hypot(r.x,r.z)<j_)return;const a=sl-Wa,o=nl-$a,c=[],l=[];for(let h=0;h<i;h++){const f=(h+.17)/i*Math.PI*2+qr(h,3)*.35,x=Ep+(qr(h,5)-.5)*pD,y=i===1?(Wa+sl)*.5:Wa+h/(i-1)*a,g=r.x+Math.cos(f)*x,p=r.z+Math.sin(f)*x;if(Math.hypot(g,p)<j_)continue;const w=i===1?($a+nl)*.5:$a+h/(i-1)*o,S=xD+qr(h,11)*_D,m=Math.cos(S),M=Math.cos(f)*m,v=-Math.sin(S),A=Math.sin(f)*m,{rx:_,ry:E}=MD(M,v,A),C=w*.5,P=g+M*C,T=y+v*C,O=p+A*C;c.push({x:g,y,z:p,sx:1,sy:w,sz:1,rx:_,ry:E+qr(h,13)*.12,rz:(qr(h,17)-.5)*.16}),l.push({x:P,y:T-il*.28,z:O,sx:1,sy:1,sz:1,rx:Math.PI,ry:f+qr(h,19)*.4,rz:0})}const u=t?6:8,d=fD();Z_(new ye(el*.55,el,1,u),d,c,n),Z_(new Do(bp,il,u),d,l,n),s.n=c.length,s.limbs=c.length,s.cylinders=c.length,s.cones=l.length,n.userData.boughCount=c.length}function SD(){const e=ji.find(s=>s.id==="veyra"),t=e?.x??30,n=e?.z??-40,i=Math.hypot(t,n)||1;return{vx:t/i,vz:n/i}}function K_(){return new mt({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function bD(){return new mt({color:3812374,roughness:.18,metalness:.52,emissive:6966306,emissiveIntensity:.18,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.46,clearcoatRoughness:.22,transparent:!1,side:xe})}const qw=.55,Tp=1.8,to=4.4,Ap=.08,rl=.78,Dh=.07,ED=.1,Zw=to-Dh,jw=4,Rp=16.8,Kw=.03,Jw=.86,Gi={r:qw,h:Tp,postH:to,postR:Ap,armL:rl,armT:Dh,hangY:Zw,y:jw,apronR:Rp,sway:Kw,swaySpeed:Jw};function TD(e,t){return[new xt(.05,t),new xt(e*.16,t*.97),new xt(e*.38,t*.82),new xt(e*.58,t*.58),new xt(e*.78,t*.32),new xt(e*.94,t*.1),new xt(e,0),new xt(e*.86,.03),new xt(e*.62,t*.28),new xt(e*.34,t*.58),new xt(e*.14,t*.88),new xt(.04,t*.96)]}function AD(e,t){const n=new Mt;n.name="bells",e.add(n);const i=SD(),s=-i.vz*Rp,r=i.vx*Rp,a=Math.atan2(s,r),o=t?8:16,c={r:Gi.r,h:Gi.h,postH:Gi.postH,postR:Gi.postR,armL:Gi.armL,armT:Gi.armT,hangY:Gi.hangY,y:Gi.y,apronR:Gi.apronR,sway:t?0:Gi.sway,swaySpeed:t?0:Gi.swaySpeed,x:s,z:r,yaw:a,segs:o,bellCount:1,postCount:1};n.userData.sizes=c,n.userData.bellCount=1,n.userData.postCount=1,n.userData.breathing=!t;const l=new Mt;l.position.set(s,jw,r),l.rotation.y=a,n.add(l);const u=new gt(new ye(Ap,Ap,to,o),K_());u.position.set(0,to*.5,0),u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,l.add(u);const d=new gt(new we(rl,Dh,ED),K_());d.position.set(rl*.5,to-Dh*.5,0),d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!0,d.renderOrder=2,l.add(d);const h=new Mt;h.position.set(rl,Zw,0),l.add(h);const f=new gt(new zo(TD(qw,Tp),o),bD());return f.position.set(0,-Tp,0),f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!0,f.renderOrder=2,h.add(f),t?{tick(){}}:{tick(x){h.rotation.z=Math.sin(x*Jw)*Kw}}}function of(e){return At.find(t=>t.kind===e)??null}function RD(){return new mt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function CD(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const zh=5.4,al=.22,J_=zh*.5,cf=1.8,Sc=90,PD=4,ID=2,Q_=[["wild","bridge",3],["bridge","gate",4]];function DD(e){return e?ID:PD}function zD(e){return{n:0,pairs:0,want:e,h:zh,r:al}}function LD(e,t){const n=new Mt;n.name="pylons",e.add(n);const i=DD(t),s=zD(i);n.userData.pylonCounts=s,n.userData.pylonCount=0,n.userData.sizes={h:zh,r:al,y:J_,side:cf};const r=of("bridge");if(!r||Math.hypot(r.x,r.z)<Sc)return;const a=[];for(let l=0;l<Q_.length;l++){const u=Q_[l],d=u[2];if(t&&d%2===1)continue;const h=of(u[0]),f=of(u[1]);if(!h||!f||Math.hypot(h.x,h.z)<Sc||Math.hypot(f.x,f.z)<Sc)continue;const x=f.x-h.x,y=f.z-h.z,g=Math.hypot(x,y)||1,p=Math.min(.22,h.radius*.72/g),w=Math.min(.22,f.radius*.72/g),S=h.x+x*p,m=h.z+y*p,M=f.x-x*w,v=f.z-y*w,A=M-S,_=v-m,E=Math.hypot(A,_)||1,C=-_/E,P=A/E,T=Math.atan2(A,_),O=u[0]==="bridge",k=O?S:M,U=O?m:v;for(const $ of[1,-1]){const W=k+C*cf*$,Y=U+P*cf*$;Math.hypot(W,Y)<Sc||a.push({x:W,y:J_,z:Y,ry:T})}}const o=t?6:8,c=new ye(al,al,zh,o);CD(c,RD(),a,n),s.n=a.length,s.pairs=a.length>>1,n.userData.pylonCount=a.length}function ND(e){return At.find(t=>t.kind===e)??null}function UD(){return new mt({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function OD(e){return new Ue({color:13934672,transparent:!0,opacity:e,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}const Lh=2.4,mo=.16,lf=mo,t1=Lh-mo-.16,e1=.08,n1=.14,hf=.08,i1=.22,s1=.72,kD=90,FD={r:Lh,tube:mo,y:0,ringR:0,ringTube:0,ringY:0,discR:0,discY:0,discOp:0,discOpMin:0,discOpMax:0,glow:0,x:0,z:0,ringCount:0,discCount:0,segs:0};function BD(e,t){const n=new Mt;n.name="forge",e.add(n);const i={...FD};n.userData.sizes=i,n.userData.ringCount=0,n.userData.discCount=0,n.userData.forgeCount=0;const s=ND("foundry");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<kD)return{tick(){}};const r=s.x,a=s.z,o=t?10:16,c=t?5:8,l=new gt(new un(Lh,mo,c,o),UD());if(l.rotation.x=Math.PI/2,l.position.set(r,lf,a),l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,n.add(l),i.x=r,i.y=lf,i.z=a,i.ringR=Lh,i.ringTube=mo,i.ringY=lf,i.segs=o,i.ringCount=1,n.userData.ringCount=1,n.userData.forgeCount=1,t)return{tick(){}};const u=new yi(t1,o);u.rotateX(-Math.PI/2);const d=OD(n1),h=new gt(u,d);h.position.set(r,e1,a),h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!0,h.renderOrder=1,n.add(h),i.discR=t1,i.discY=e1,i.discOp=n1,i.discOpMin=hf,i.discOpMax=i1,i.glow=s1,i.discCount=1,n.userData.discCount=1,n.userData.breathing=!0;const f=i1-hf;return{tick(x){const y=(Math.sin(x*s1)+1)*.5;d.opacity=hf+y*f}}}function uf(e){return At.find(t=>t.kind===e)??null}function HD(){return new mt({color:3812374,roughness:.18,metalness:.52,emissive:13934672,emissiveIntensity:.22,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}function GD(){return new mt({color:2892306,roughness:.22,metalness:.46,emissive:1729912,emissiveIntensity:.18,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function VD(){return new mt({color:3812374,roughness:.16,metalness:.5,emissive:13934672,emissiveIntensity:.2,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}const ym=2.2,ol=.08,cl=1.4,Cp=.55,Pp=.08,Ip=ym*.5,df=.07,ff=cl,pf=16,$D=90,WD={beamL:ym,beamT:ol,y:0,panR:Cp,panH:Pp,panOff:Ip,postR:0,postH:0,offset:0,scaleCount:0,panCount:0,beamCount:0,postCount:0,x:0,z:0};function XD(e,t){const n=new Mt;n.name="scales",e.add(n);const i={...WD};n.userData.sizes=i,n.userData.scaleCount=0,n.userData.panCount=0;const s=uf("market");if(!s||Math.hypot(s.x,s.z)<$D)return;const r=uf("canal"),a=uf("foundry"),o=(r?.x??s.x-1)-s.x,c=(r?.z??s.z)-s.z,l=Math.hypot(o,c)||1,u=o/l,d=c/l,h=s.x-u*pf,f=s.z-d*pf,x=(a?.x??s.x+1)-s.x,y=(a?.z??s.z)-s.z,g=x-o,p=y-c,w=Math.hypot(g,p)||1,S=Math.atan2(-p/w,g/w),m=HD(),M=t?8:12,v=new Mt;v.position.set(h,0,f),v.rotation.y=S,n.add(v);const A=new gt(new ye(df*.85,df,ff,M),m);A.position.set(0,ff*.5,0),A.castShadow=!1,A.receiveShadow=!0,A.frustumCulled=!0,v.add(A);const _=new gt(new we(ym,ol,ol),m);_.position.set(0,cl,0),_.castShadow=!1,_.receiveShadow=!0,_.frustumCulled=!0,v.add(_);const E=cl+ol*.5+Pp*.5,C=new ye(Cp,Cp,Pp,M),P=new gt(C,GD());P.position.set(-Ip,E,0),P.castShadow=!1,P.receiveShadow=!0,P.frustumCulled=!0,v.add(P);let T=1;if(!t){const O=new gt(C,VD());O.position.set(Ip,E,0),O.castShadow=!1,O.receiveShadow=!0,O.frustumCulled=!0,v.add(O),T=2}i.y=cl,i.postR=df,i.postH=ff,i.offset=pf,i.scaleCount=1,i.panCount=T,i.beamCount=1,i.postCount=1,i.x=h,i.z=f,n.userData.scaleCount=1,n.userData.panCount=T,n.userData.beamCount=1}function YD(e){return At.find(t=>t.kind===e)??null}function qD(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function ZD(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const mf=1.1,Dp=.08,gf=Dp*.5,bc=12,jD=Math.PI*1.35,r1=90,KD=6,JD=3;function QD(e){return e?JD:KD}function tz(e,t){const n=new Mt;n.name="pads",e.add(n);const i=QD(t),s={n:0,want:i,r:bc,y:gf};n.userData.padCounts=s,n.userData.sizes={r:mf,h:Dp,y:gf,ring:bc};const r=YD("ring");if(!r||Math.hypot(r.x,r.z)<r1)return;const a=r.x,o=r.z,l=Math.atan2(-o,-a)+Math.PI,u=i<=1?0:jD/(i-1),d=[];for(let x=0;x<i;x++){const y=l+(x-(i-1)*.5)*u,g=a+Math.cos(y)*bc,p=o+Math.sin(y)*bc;Math.hypot(g,p)<r1||d.push({x:g,y:gf,z:p,ry:Math.atan2(a-g,o-p)})}const h=t?8:12,f=new ye(mf,mf,Dp,h);ZD(f,qD(),d,n),s.n=d.length}function a1(e){return At.find(t=>t.kind===e)??null}function ez(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}const go=2.8,Pu=.18,o1=Pu*.5,Qw=2.4,nz=.16,xf=Qw+nz+go+1.04,c1=go-.08,l1=.06,h1=Pu,u1=90,iz={r:go,h:Pu,y:0,offset:0,forgeR:Qw,lipR:0,lipTube:0,lipY:0,x:0,z:0,plateCount:0,lipCount:0,segs:0};function sz(e,t){const n=new Mt;n.name="hearth",e.add(n);const i={...iz};n.userData.sizes=i,n.userData.plateCount=0,n.userData.lipCount=0,n.userData.hearthCount=0;const s=a1("foundry");if(!s||Math.hypot(s.x,s.z)<u1)return;const r=a1("market"),a=(r?.x??0)-s.x,o=(r?.z??0)-s.z,c=Math.hypot(a,o)||1,l=s.x+a/c*xf,u=s.z+o/c*xf;if(Math.hypot(l,u)<u1)return;const d=t?10:16,h=ez(),f=new gt(new ye(go,go,Pu,d),h);if(f.position.set(l,o1,u),f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!0,f.renderOrder=2,n.add(f),i.x=l,i.y=o1,i.z=u,i.offset=xf,i.segs=d,i.plateCount=1,n.userData.plateCount=1,n.userData.hearthCount=1,t)return;const x=new gt(new un(c1,l1,6,d),h);x.rotation.x=Math.PI/2,x.position.set(l,h1,u),x.castShadow=!1,x.receiveShadow=!0,x.frustumCulled=!0,x.renderOrder=2,n.add(x),i.lipR=c1,i.lipTube=l1,i.lipY=h1,i.lipCount=1,n.userData.lipCount=1}function rz(e){return At.find(t=>t.kind===e)??null}function az(){return new mt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const t2=4.8,e2=.22,n2=.55,d1=4.6,oz=90,i2=1,s2=1,cz={w:t2,h:e2,d:n2,y:0,nFine:i2,nCoarse:s2,n:0,want:1,x:0,z:0,yaw:0,lintelCount:0};function lz(e,t){const n=new Mt;n.name="lintel",e.add(n);const s={...cz,want:t?s2:i2};n.userData.sizes=s,n.userData.lintelCount=0;const r=rz("gate");if(!r||Math.hypot(r.x,r.z)<oz)return;const a=Math.atan2(r.x,r.z),o=new gt(new we(t2,e2,n2),az());o.position.set(r.x,d1,r.z),o.rotation.y=a,o.castShadow=!1,o.receiveShadow=!0,o.frustumCulled=!0,o.renderOrder=2,n.add(o),s.y=d1,s.n=1,s.x=r.x,s.z=r.z,s.yaw=a,s.lintelCount=1,n.userData.lintelCount=1}function hz(e){return At.find(t=>t.kind===e)??null}function uz(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function dz(){return new mt({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:.16,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function fz(e,t,n,i,s){const r=Math.cos(s),a=Math.sin(s);return{x:e+n*r+i*a,z:t-n*a+i*r}}const r2=2.4,vm=.12,a2=1.1,zp=.9,f1=.7,Lp=.04,p1=1,m1=zp+vm*.5+Lp*.5,g1=-2.6,pz=90,mz={w:r2,h:vm,d:a2,y:0,tabletW:0,tabletH:0,tabletD:0,tabletY:0,aisleZ:0,ledgerCount:0,tabletCount:0};function gz(e,t){const n=new Mt;n.name="ledger",e.add(n);const i={...mz};n.userData.sizes=i,n.userData.ledgerCount=0,n.userData.tabletCount=0;const s=hz("archive");if(!s||Math.hypot(s.x,s.z)<pz)return;const r=s.x,a=s.z,o=Math.atan2(r,a),c=fz(r,a,0,g1,o),l=new gt(new we(r2,vm,a2),uz());if(l.position.set(c.x,zp,c.z),l.rotation.y=o,l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,n.add(l),i.y=zp,i.aisleZ=g1,i.ledgerCount=1,n.userData.ledgerCount=1,!t){const u=new gt(new we(f1,Lp,p1),dz());u.position.set(c.x,m1,c.z),u.rotation.y=o,u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,n.add(u),i.tabletW=f1,i.tabletH=Lp,i.tabletD=p1,i.tabletY=m1,i.tabletCount=1,n.userData.tabletCount=1}}function x1(e){return At.find(t=>t.kind===e)??null}function xz(){return new mt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const Mm=2.8,xo=.1,_1=Mm*.5,wm=3.2,o2=.12,c2=.18,y1=1.6,Np=wm*.5-xo,l2=Np*2,_z=l2-xo*2,yz=90,Fa=2,vz={postH:Mm,postR:xo,postY:0,barW:wm,barH:o2,barD:c2,barY:0,span:l2,open:_z,nPosts:0,postCount:0,barCount:0,x:0,z:0,yaw:0,segs:0};function Mz(e,t){const n=new Mt;n.name="sluice",e.add(n);const i={...vz};n.userData.sizes=i,n.userData.postCount=0,n.userData.barCount=0,n.userData.sluiceCount=0;const s=x1("canal");if(!s||Math.hypot(s.x,s.z)<yz)return;const r=x1("market"),a=(r?.x??0)-s.x,o=(r?.z??0)-s.z,c=Math.atan2(a,o),l=Math.cos(c),u=Math.sin(c),d=t?6:8,h=xz(),f=new ie;f.rotation.order="YXZ";const x=new ye(xo,xo,Mm,d),y=new de(x,h,Fa);y.castShadow=!1,y.receiveShadow=!0,y.frustumCulled=!0,y.renderOrder=2;for(let p=0;p<Fa;p++){const w=p===0?-1:1;f.position.set(s.x+w*Np*l,_1,s.z-w*Np*u),f.rotation.set(0,c,0),f.scale.set(1,1,1),f.updateMatrix(),y.setMatrixAt(p,f.matrix)}if(y.instanceMatrix.needsUpdate=!0,n.add(y),i.postY=_1,i.nPosts=Fa,i.postCount=Fa,i.x=s.x,i.z=s.z,i.yaw=c,i.segs=d,n.userData.postCount=Fa,n.userData.sluiceCount=1,t)return;const g=new gt(new we(wm,o2,c2),h);g.position.set(s.x,y1,s.z),g.rotation.y=c,g.castShadow=!1,g.receiveShadow=!0,g.frustumCulled=!0,g.renderOrder=2,n.add(g),i.barY=y1,i.barCount=1,n.userData.barCount=1}function wz(){const e=ji.find(s=>s.id==="nesh"),t=e?.x??-24,n=e?.z??128,i=Math.hypot(t,n)||1;return{nx:t/i,nz:n/i}}function Sz(){return new mt({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}const v1=2.9,M1=.08,_f=.12,yf=Math.min(84,Math.max(78,Sn.radius+30));function bz(e,t){const n=new Mt;n.name="rims",e.add(n);const i=wz(),s=i.nx*yf,r=i.nz*yf,a=t?12:22,o=t?5:8,c=new gt(new un(v1,M1,o,a),Sz());c.rotation.x=Math.PI/2,c.position.set(s,_f,r),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,c.renderOrder=2,n.add(c),n.userData.rimCount=1,n.userData.sizes={x:s,y:_f,z:r,r:v1,tube:M1,rimY:_f,apronR:yf,segs:a,tubeSeg:o}}function Ez(e){return At.find(t=>t.kind===e)??null}function Tz(){return new mt({color:1314850,roughness:.2,metalness:.38,emissive:3286102,emissiveIntensity:.16,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}function Az(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Nh=2.2,ll=.12,Up=Nh*.5,hl=14,Rz=Math.PI*1.35,w1=90,Cz=4,Pz=2;function Iz(e){return e?Pz:Cz}function Dz(e){return{n:0,want:e,h:Nh,r:ll,y:Up,ring:hl}}function zz(e,t){const n=new Mt;n.name="posts",e.add(n);const i=Iz(t),s=Dz(i);n.userData.postCounts=s,n.userData.postCount=0,n.userData.sizes={h:Nh,r:ll,y:Up,ring:hl};const r=Ez("terrace");if(!r||Math.hypot(r.x,r.z)<w1)return;const a=r.x,o=r.z,l=Math.atan2(-o,-a)+Math.PI,u=i<=1?0:Rz/(i-1),d=[];for(let x=0;x<i;x++){const y=l+(x-(i-1)*.5)*u,g=a+Math.cos(y)*hl,p=o+Math.sin(y)*hl;Math.hypot(g,p)<w1||d.push({x:g,y:Up,z:p,ry:Math.atan2(a-g,o-p)})}const h=t?6:8,f=new ye(ll,ll,Nh,h);Az(f,Tz(),d,n),s.n=d.length,n.userData.postCount=d.length}function Lz(){const e=ji.find(s=>s.id==="nesh"),t=e?.x??-24,n=e?.z??128,i=Math.hypot(t,n)||1;return{nx:t/i,nz:n/i}}function Nz(){return new mt({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1,side:xe})}const S1=.55,b1=1.6,vf=1.1,Mf=Math.min(84,Math.max(78,Sn.radius+30));function Uz(e,t){const n=new Mt;n.name="prism",e.add(n);const i=Lz(),s=i.nx*Mf,r=i.nz*Mf,a=t?8:16,o=new gt(new Do(S1,b1,a),Nz());o.position.set(s,vf,r),o.castShadow=!1,o.receiveShadow=!0,o.frustumCulled=!0,o.renderOrder=2,n.add(o),n.userData.prismCount=1,n.userData.sizes={x:s,y:vf,z:r,r:S1,h:b1,prismY:vf,apronR:Mf,segs:a}}function E1(e){return At.find(t=>t.kind===e)??null}function Oz(){return new mt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const h2=4.2,u2=.16,d2=.55,T1=3.2,kz=90,f2=1,p2=1,Fz={w:h2,h:u2,d:d2,y:0,nFine:f2,nCoarse:p2,n:0,want:1,x:0,z:0,yaw:0,lipCount:0};function Bz(e,t){const n=new Mt;n.name="lip",e.add(n);const s={...Fz,want:t?p2:f2};n.userData.sizes=s,n.userData.lipCount=0;const r=E1("canal");if(!r||Math.hypot(r.x,r.z)<kz)return;const a=E1("market"),o=(a?.x??0)-r.x,c=(a?.z??0)-r.z,l=Math.atan2(o,c),u=new gt(new we(h2,u2,d2),Oz());u.position.set(r.x,T1,r.z),u.rotation.y=l,u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,n.add(u),s.y=T1,s.n=1,s.x=r.x,s.z=r.z,s.yaw=l,s.lipCount=1,n.userData.lipCount=1}function Hz(e){return At.find(t=>t.kind===e)??null}function Gz(){return new mt({color:3812374,roughness:.2,metalness:.52,emissive:6966306,emissiveIntensity:.16,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function Vz(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Uh=2.6,ul=.07,Op=Uh*.5,dl=17,$z=Math.PI*1.35,A1=90,Wz=6,Xz=3;function Yz(e){return e?Xz:Wz}function qz(e){return{n:0,want:e,h:Uh,r:ul,y:Op,ring:dl}}function Zz(e,t){const n=new Mt;n.name="staves",e.add(n);const i=Yz(t),s=qz(i);n.userData.staveCounts=s,n.userData.staveCount=0,n.userData.sizes={h:Uh,r:ul,y:Op,ring:dl};const r=Hz("ring");if(!r||Math.hypot(r.x,r.z)<A1)return;const a=r.x,o=r.z,l=Math.atan2(-o,-a)+Math.PI,u=i<=1?0:$z/(i-1),d=[];for(let x=0;x<i;x++){const y=l+(x-(i-1)*.5)*u,g=a+Math.cos(y)*dl,p=o+Math.sin(y)*dl;Math.hypot(g,p)<A1||d.push({x:g,y:Op,z:p,ry:Math.atan2(a-g,o-p)})}const h=t?6:8,f=new ye(ul,ul,Uh,h);Vz(f,Gz(),d,n),s.n=d.length,n.userData.staveCount=d.length}function R1(e){return At.find(t=>t.kind===e)??null}function jz(){return new mt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const m2=3.6,g2=.18,Sm=1.1,C1=.22,Kz=.18,Jz=1.04,wf=Kz*.5+Sm*.5+Jz,P1=90,x2=1,_2=1,Qz={w:m2,h:g2,d:Sm,y:0,offset:0,nFine:x2,nCoarse:_2,n:0,want:1,x:0,z:0,yaw:0,troughCount:0};function tL(e,t){const n=new Mt;n.name="trough",e.add(n);const s={...Qz,want:t?_2:x2};n.userData.sizes=s,n.userData.troughCount=0;const r=R1("canal");if(!r||Math.hypot(r.x,r.z)<P1)return;const a=R1("market"),o=(a?.x??0)-r.x,c=(a?.z??0)-r.z,l=Math.hypot(o,c)||1,u=o/l,d=c/l,h=Math.atan2(o,c),f=r.x-u*wf,x=r.z-d*wf;if(Math.hypot(f,x)<P1)return;const y=new gt(new we(m2,g2,Sm),jz());y.position.set(f,C1,x),y.rotation.y=h,y.castShadow=!1,y.receiveShadow=!0,y.frustumCulled=!0,y.renderOrder=2,n.add(y),s.y=C1,s.offset=wf,s.n=1,s.x=f,s.z=x,s.yaw=h,s.troughCount=1,n.userData.troughCount=1}function I1(e){return At.find(t=>t.kind===e)??null}function eL(e){return new Ue({color:3844288,transparent:!0,opacity:e,blending:mn,depthWrite:!1,depthTest:!0,fog:!0,side:xe,toneMapped:!1})}const kp=2.2,y2=.06,D1=.47,Ec=.18,Sf=.1,z1=.26,L1=.56,Fp=-16,or=20,N1=90,nL={r:kp,h:y2,y:0,op:0,opMin:0,opMax:0,rest:0,along:Fp,side:or,x:0,z:0,poolCount:0,discCount:0,segs:0};function iL(e,t){const n=new Mt;n.name="pool",e.add(n);const i={...nL};n.userData.sizes=i,n.userData.poolCount=0,n.userData.discCount=0,n.userData.breathing=!1;const s=I1("canal");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<N1)return{tick(){}};const r=I1("market"),a=(r?.x??0)-s.x,o=(r?.z??0)-s.z,c=Math.hypot(a,o)||1,l=a/c,u=o/c,d=-u,h=l,f=Math.hypot(s.x+d*or,s.z+h*or),x=Math.hypot(s.x-d*or,s.z-h*or),y=f>=x?1:-1,g=s.x+l*Fp+d*or*y,p=s.z+u*Fp+h*or*y;if(Math.hypot(g,p)<N1)return{tick(){}};const w=t?10:20,S=eL(Ec),m=new gt(new ye(kp,kp,y2,w),S);if(m.position.set(g,D1,p),m.castShadow=!1,m.receiveShadow=!1,m.frustumCulled=!0,m.renderOrder=1,n.add(m),i.x=g,i.y=D1,i.z=p,i.op=Ec,i.opMin=t?Ec:Sf,i.opMax=t?Ec:z1,i.rest=t?0:L1,i.poolCount=1,i.discCount=1,i.segs=w,n.userData.poolCount=1,n.userData.discCount=1,n.userData.breathing=!t,t)return{tick(){}};const M=z1-Sf;return{tick(v){const A=(Math.sin(v*L1)+1)*.5;S.opacity=Sf+A*M}}}function sL(){const e=ji.find(s=>s.id==="nesh"),t=e?.x??-24,n=e?.z??128,i=Math.hypot(t,n)||1;return{nx:t/i,nz:n/i}}function rL(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function aL(){return new mt({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:.16,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}const Bp=.9,bm=.28,U1=.14,O1=.22,Hp=1.6,k1=.12,F1=bm+Hp*.5,Gp=Math.min(116,Math.max(104,Sn.radius+58)),oL={r:Bp,h:bm,y:0,steleW:0,steleH:0,steleD:0,steleY:0,apronR:Gp,x:0,z:0,yaw:0,segs:0,watchCount:0,plinthCount:0,steleCount:0};function cL(e,t){const n=new Mt;n.name="watch",e.add(n);const i={...oL};n.userData.sizes=i,n.userData.watchCount=0,n.userData.plinthCount=0,n.userData.steleCount=0;const s=sL(),r=s.nx*Gp,a=s.nz*Gp,o=Math.atan2(r,a),c=t?8:16,l=new gt(new ye(Bp,Bp,bm,c),rL());if(l.position.set(r,U1,a),l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,n.add(l),i.y=U1,i.x=r,i.z=a,i.yaw=o,i.segs=c,i.watchCount=1,i.plinthCount=1,n.userData.watchCount=1,n.userData.plinthCount=1,t)return;const u=new gt(new we(O1,Hp,k1),aL());u.position.set(r,F1,a),u.rotation.y=o,u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,n.add(u),i.steleW=O1,i.steleH=Hp,i.steleD=k1,i.steleY=F1,i.steleCount=1,n.userData.steleCount=1}const Zr={x:-4050,y:540,z:195},B1=190,H1=14,G1=560,lL=6,hL=3,V1=.055,uL=8319231,$1=.035,dL=-6,fL=86,pL=52,Tc=.22,bf=.14,W1=.32,mL=15269880,X1=.7,gL=-5;function Y1(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!1,side:xe,toneMapped:!1})}function xL(e,t){const n=new Mt;n.name="corona",e.add(n);const i=t?hL:lL,s=t?pL:fL,r=t?8:12,a=t?6:10,o=new Mt;o.name="corona-core",o.position.set(Zr.x,Zr.y,Zr.z),o.lookAt(0,B1,0),o.frustumCulled=!1,o.castShadow=!1,o.receiveShadow=!1;const c=new Mt;c.name="corona-rays",c.frustumCulled=!1;const l=new cs(H1,G1),u=Y1(uL,V1);for(let x=0;x<i;x++){const y=new gt(l,u);y.rotation.z=x/i*Math.PI,y.castShadow=!1,y.receiveShadow=!1,y.frustumCulled=!1,y.renderOrder=dL,c.add(y)}o.add(c);const d=Y1(mL,Tc),h=new gt(new as(s,r,a),d);if(h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!1,h.renderOrder=gL,o.add(h),n.add(o),n.userData.rayCount=i,n.userData.innerCount=1,n.userData.breathing=!t,n.userData.sizes={x:Zr.x,y:Zr.y,z:Zr.z,lookY:B1,rayW:H1,rayH:G1,rayN:i,rayOp:V1,raySpin:t?0:$1,innerR:s,innerOp:Tc,innerOpMin:t?Tc:bf,innerOpMax:t?Tc:W1,pulse:t?0:X1,segs:r,rings:a},t)return{tick(){}};const f=W1-bf;return{tick(x){c.rotation.z=x*$1;const y=(Math.sin(x*X1)+1)*.5;d.opacity=bf+y*f}}}const jr={x:-4050,y:540,z:195},Ac={x:0,y:80,z:0},q1=920,Z1=640,j1=13934672,K1=.055,J1=-14,Q1=1480,ty=12615744,ey=.028,ny=-15,iy=2680,sy=42,ry=3844288,ay=.035,oy=1.18,cy=720,ly=-13;function Ef(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:mn,depthWrite:!1,depthTest:!0,fog:!1,side:xe,toneMapped:!1})}function _L(e,t){const n=new Mt;n.name="vault",e.add(n);const i=t?Z1:q1,s=t?20:32,r=new Mt;r.name="dusk",r.position.set(jr.x,jr.y,jr.z),r.lookAt(Ac.x,Ac.y,Ac.z),r.frustumCulled=!1,n.add(r);const a=new gt(new yi(i,s),Ef(j1,K1));if(a.renderOrder=J1,a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!1,r.add(a),!t){const o=new gt(new yi(Q1,s),Ef(ty,ey));o.renderOrder=ny,o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,r.add(o);const c=new gt(new un(iy,sy,6,64),Ef(ry,ay));c.rotation.x=oy,c.position.y=cy,c.renderOrder=ly,c.castShadow=!1,c.receiveShadow=!1,c.frustumCulled=!1,n.add(c)}n.userData.duskCount=1,n.userData.haloCount=t?0:1,n.userData.riverCount=t?0:1,n.userData.sizes={duskR:i,duskRFine:q1,duskRCoarse:Z1,duskHex:j1,duskOp:K1,duskOrder:J1,haloR:t?0:Q1,haloHex:ty,haloOp:ey,haloOrder:ny,riverR:t?0:iy,riverTube:t?0:sy,riverHex:ry,riverOp:ay,riverRx:oy,riverY:cy,riverOrder:ly,lookAtY:Ac.y,coreX:jr.x,coreY:jr.y,coreZ:jr.z,segs:s}}function yL(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function hy(e){return At.find(t=>t.kind===e)??null}function vL(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function ML(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(a.sx,a.sy,a.sz),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const uy=.05,dy=.07,wL=1.5,SL=.6,fy=18,ir=22,Rc=16,Tf=90,py=.82;function bL(e,t){const n=new Mt;n.name="rill",e.add(n);const i={n:0,want:0,canalArchive:0};n.userData.segmentCounts=i,n.userData.sizes={y:uy,h:dy,side:ir,bulge:Rc,step:fy};const s=hy("canal"),r=hy("archive");if(!s||!r||Math.hypot(s.x,s.z)<Tf||Math.hypot(r.x,r.z)<Tf)return;const a=r.x-s.x,o=r.z-s.z,c=Math.hypot(a,o)||1,l=Math.min(.28,s.radius*py/c),u=Math.min(.28,r.radius*py/c),d=s.x+a*l,h=s.z+o*l,f=r.x-a*u,x=r.z-o*u,y=(d+f)*.5,g=(h+x)*.5,p=a/c,S=-(o/c),m=p,M=Math.hypot(y+S*ir,g+m*ir),v=Math.hypot(y-S*ir,g-m*ir),A=M>=v?1:-1,_=S*ir*A,E=m*ir*A,C=d+_,P=h+E,T=f+_,O=x+E,k=T-C,U=O-P,$=Math.hypot(k,U)||1,W=Math.max(2,Math.round($/fy)),Y=$/W;i.want=W;const tt=[];for(let ht=0;ht<W;ht++){if(t&&ht%2===1)continue;const nt=(ht+.5)/W,Lt=Math.sin(nt*Math.PI)*Rc,Qt=C+k*nt+S*A*Lt,Ut=P+U*nt+m*A*Lt;if(Math.hypot(Qt,Ut)<Tf)continue;const V=.02,ot=Math.max(0,nt-V),at=Math.min(1,nt+V),Rt=Math.sin(ot*Math.PI)*Rc,Ht=Math.sin(at*Math.PI)*Rc,Vt=C+k*ot+S*A*Rt,he=P+U*ot+m*A*Rt,$t=C+k*at+S*A*Ht,oe=P+U*at+m*A*Ht,_e=Math.atan2($t-Vt,oe-he),me=wL+yL(ht,5)*SL;tt.push({x:Qt,y:uy,z:Ut,sx:me,sy:dy,sz:Y*.94,ry:_e})}const q=new we(1,1,1);ML(q,vL(),tt,n),i.n=tt.length,i.canalArchive=tt.length}function EL(e){return At.find(t=>t.kind===e)??null}function TL(){return new mt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function AL(){return new mt({color:1314850,roughness:.2,metalness:.38,emissive:3286102,emissiveIntensity:.16,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}const aa=0,oa=78,Oh=90,cr=22,RL=.82,v2=3,M2=2;function CL(e,t,n,i,s){const r=Math.cos(s),a=Math.sin(s);return{x:e+n*r+i*a,z:t-n*a+i*r}}function PL(e,t){const n=e*e+t*t,i=2*(aa*e+oa*t),s=aa*aa+oa*oa-Oh*Oh,r=i*i-4*n*s;if(n<1e-8||r<0)return 0;const a=Math.sqrt(r),o=(-i-a)/(2*n),c=(-i+a)/(2*n),l=o>1e-6?o:c;return Math.max(0,Math.min(1,l))}function IL(e,t){return Math.hypot(e,t)<Oh?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}const Af=[{sx:1.08,sy:.46,sz:.94,y:.4,ox:.05,oz:-.04,rx:.12,ry:.18,gold:!0},{sx:.76,sy:.36,sz:.68,y:1.02,ox:-.07,oz:.05,rx:-.08,ry:-.46,gold:!1},{sx:.48,sy:.28,sz:.44,y:1.52,ox:.03,oz:.02,rx:.16,ry:.72,gold:!0}],DL={nFine:v2,nCoarse:M2,side:cr,hubX:aa,hubZ:oa,n:0,want:0,x:0,y:0,z:0,yaw:0,cairnCount:0,stoneCount:0};function zL(e,t){const n=new Mt;n.name="cairn",e.add(n);const i=t?M2:v2,s={...DL,want:i};n.userData.sizes=s,n.userData.cairnCount=0,n.userData.stoneCount=0;const r=EL("foundry");if(!r||Math.hypot(r.x,r.z)<Oh)return;const a=r.x-aa,o=r.z-oa,c=Math.hypot(a,o)||1,l=PL(a,o),u=1-Math.min(.28,r.radius*RL/c);if(u<=l)return;const d=l+(u-l)*.5,h=aa+a*d,f=oa+o*d,x=a/c,g=-(o/c),p=x,w=Math.hypot(h+g*cr,f+p*cr),S=Math.hypot(h-g*cr,f-p*cr),m=w<=S?1:-1,M=h+g*cr*m,v=f+p*cr*m;if(IL(M,v))return;const A=Math.atan2(a,o),_=Math.min(i,Af.length),E=TL(),C=AL(),P=new mu(1,0);for(let T=0;T<_;T++){const O=Af[T],k=CL(M,v,O.ox,O.oz,A),U=new gt(P,O.gold?E:C);U.position.set(k.x,O.y,k.z),U.rotation.set(O.rx,A+O.ry,0),U.scale.set(O.sx,O.sy,O.sz),U.castShadow=!1,U.receiveShadow=!0,U.frustumCulled=!0,U.renderOrder=2,n.add(U)}s.n=_,s.x=M,s.y=Af[0].y,s.z=v,s.yaw=A,s.cairnCount=1,s.stoneCount=_,n.userData.cairnCount=1,n.userData.stoneCount=_}function my(e){return At.find(t=>t.kind===e)??null}function LL(){return new mt({color:466472,roughness:.22,metalness:.36,emissive:1729912,emissiveIntensity:.16,iridescence:.36,iridescenceIOR:1.3,iridescenceThicknessRange:[90,340],clearcoat:.32,clearcoatRoughness:.34,transparent:!1})}function NL(){return new mt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function gy(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const _o=3.6,fl=.1,kh=.2,xy=_o*.5,_y=_o+kh*.55,pl=9.4,Vp=90,Rf=.82,UL=4,OL=3;function kL(e){return e?OL:UL}function FL(e,t){return Math.hypot(e,t)<Vp?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function BL(e){return{n:0,posts:0,bulbs:0,want:e,h:_o,r:fl,bulbR:kh,side:pl}}function HL(e,t){const n=new Mt;n.name="joinlamps",e.add(n);const i=kL(t),s=BL(i);n.userData.joinLampCounts=s,n.userData.joinLampCount=0,n.userData.sizes={h:_o,r:fl,bulbR:kh,yPost:xy,yBulb:_y,side:pl,padLeave:Rf};const r=my("canal"),a=my("market");if(!r||!a||Math.hypot(r.x,r.z)<Vp||Math.hypot(a.x,a.z)<Vp)return;const o=a.x-r.x,c=a.z-r.z,l=Math.hypot(o,c)||1,u=Math.min(.28,r.radius*Rf/l),d=Math.min(.28,a.radius*Rf/l),h=r.x+o*u,f=r.z+c*u,x=a.x-o*d,y=a.z-c*d,g=x-h,p=y-f,w=Math.hypot(g,p)||1,S=-p/w,m=g/w,M=Math.atan2(g,p),v=[],A=[];for(let E=0;E<i;E++){const C=(E+.5)/i,P=E%2===0?1:-1,T=h+g*C+S*pl*P,O=f+p*C+m*pl*P;FL(T,O)||(v.push({x:T,y:xy,z:O,ry:M}),A.push({x:T,y:_y,z:O,ry:M}))}const _=t?6:8;gy(new ye(fl,fl,_o,_),LL(),v,n),gy(new vn(kh,0),NL(),A,n),s.n=v.length,s.posts=v.length,s.bulbs=A.length,n.userData.joinLampCount=v.length}function GL(){return new mt({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function VL(e){return new mt({color:1314850,roughness:.28,metalness:.28,emissive:3286102,emissiveIntensity:.16,iridescence:.62,iridescenceIOR:1.31,iridescenceThicknessRange:[80,380],clearcoat:.22,clearcoatRoughness:.44,transparent:!0,opacity:e,depthWrite:!1,side:xe})}function $L(e){return new mt({color:799552,roughness:.26,metalness:.24,emissive:1729912,emissiveIntensity:.14,iridescence:.58,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.2,clearcoatRoughness:.46,transparent:!0,opacity:e,depthWrite:!1,side:xe})}const yy=0,vy=78,My=7,Cf=.08,ml=4.2,Kr=2.8,ta=5.8,Pf=.09,$p=.08,WL=.12,w2=ta-$p,Cc=w2-ml*.5,wy=.46,Sy=.32,XL=-.05,YL=.92,qL=.9,ZL=1,jL=1;function Ba(e,t,n,i,s,r,a){e.position.set(t,n,i),e.castShadow=!1,e.receiveShadow=r,e.frustumCulled=!0,e.renderOrder=a,s.add(e)}function KL(e,t){const n=new Mt;n.name="hubveil",e.add(n);const i=yy+My,s=vy,r=t?6:8,a=!t,o={t:Cf,h:ml,w:Kr,postH:ta,postR:Pf,hangY:w2,veilY:Cc,hubX:yy,hubZ:vy,side:My,violetOp:wy,cyanOp:a?Sy:0,nFine:ZL,nCoarse:jL,x:i,y:Cc,z:s,segs:r,veilCount:0,liningCount:0,postCount:0};n.userData.sizes=o,n.userData.veilCount=0,n.userData.liningCount=0,n.userData.postCount=0;const c=GL(),l=new ye(Pf,Pf,ta,r),u=s-Kr*.5,d=s+Kr*.5;Ba(new gt(l,c),i,ta*.5,u,n,!0,2),Ba(new gt(l,c),i,ta*.5,d,n,!0,2);const h=new gt(new we(WL,$p,Kr),c);Ba(h,i,ta-$p*.5,s,n,!0,2);const f=new gt(new we(Cf,ml,Kr),VL(wy));if(Ba(f,i,Cc,s,n,!1,3),o.veilCount=1,o.postCount=2,n.userData.veilCount=1,n.userData.postCount=2,!a)return;const x=ml*YL,y=Kr*qL,g=new gt(new we(Cf,x,y),$L(Sy));Ba(g,i+XL,Cc,s,n,!1,3),o.liningCount=1,n.userData.liningCount=1}function JL(e){return At.find(t=>t.kind===e)??null}function QL(){return new mt({color:2892306,roughness:.26,metalness:.42,emissive:5914656,emissiveIntensity:.12,iridescence:.4,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function t8(){return new mt({color:3812372,roughness:.18,metalness:.46,emissive:15254890,emissiveIntensity:.2,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function by(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Wp=0,Xp=78,Yp=90,yo=3.2,gl=.09,Fh=.16,Ey=yo*.5,Ty=yo+Fh*.45,xl=10.2,Ay=.82,e8=4,n8=3;function i8(e){return e?n8:e8}function s8(e,t){return Math.hypot(e-Wp,t-Xp)<Yp?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function r8(e){return{n:0,posts:0,caps:0,want:e,h:yo,r:gl,capR:Fh,side:xl}}function a8(e,t){const n=new Mt;n.name="aimposts",e.add(n);const i=i8(t),s=r8(i);n.userData.aimPostCounts=s,n.userData.aimPostCount=0,n.userData.sizes={h:yo,r:gl,capR:Fh,yPost:Ey,yCap:Ty,side:xl,padLeave:Ay};const r=JL("overlook");if(!r||Math.hypot(r.x,r.z)<Yp)return;const a=r.x-Wp,o=r.z-Xp,c=Math.hypot(a,o)||1,l=Math.min(.28,Yp/c),u=Math.min(.28,r.radius*Ay/c),d=Wp+a*l,h=Xp+o*l,f=r.x-a*u,x=r.z-o*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*xl*C,T=h+g*E+S*xl*C;s8(P,T)||(M.push({x:P,y:Ey,z:T,ry:m}),v.push({x:P,y:Ty,z:T,ry:m}))}const A=t?6:8;by(new ye(gl,gl,yo,A),QL(),M,n),by(new vn(Fh,0),t8(),v,n),s.n=M.length,s.posts=M.length,s.caps=v.length,n.userData.aimPostCount=M.length}function o8(e){return At.find(t=>t.kind===e)??null}function c8(){return new mt({color:2760720,roughness:.28,metalness:.4,emissive:5914656,emissiveIntensity:.12,iridescence:.38,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.34,clearcoatRoughness:.32,transparent:!1})}function l8(){return new mt({color:3812372,roughness:.2,metalness:.44,emissive:16765040,emissiveIntensity:.18,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function Ry(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const qp=0,Zp=78,jp=90,vo=1.15,If=.11,Cy=.42,Bh=.72,Py=.08,Iy=vo*.5,Dy=vo+Bh*.42,_l=11.4,zy=.82,h8=4,u8=3;function d8(e){return e?u8:h8}function f8(e,t){return Math.hypot(e-qp,t-Zp)<jp?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function p8(e){return{n:0,stems:0,slabs:0,want:e,stemH:vo,slabH:Bh,side:_l}}function m8(e,t){const n=new Mt;n.name="namestones",e.add(n);const i=d8(t),s=p8(i);n.userData.nameStoneCounts=s,n.userData.nameStoneCount=0,n.userData.sizes={stemH:vo,stemR:If,slabW:Cy,slabH:Bh,slabT:Py,yStem:Iy,ySlab:Dy,side:_l,padLeave:zy};const r=o8("archive");if(!r||Math.hypot(r.x,r.z)<jp)return;const a=r.x-qp,o=r.z-Zp,c=Math.hypot(a,o)||1,l=Math.min(.28,jp/c),u=Math.min(.28,r.radius*zy/c),d=qp+a*l,h=Zp+o*l,f=r.x-a*u,x=r.z-o*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*_l*C,T=h+g*E+S*_l*C;f8(P,T)||(M.push({x:P,y:Iy,z:T,ry:m}),v.push({x:P,y:Dy,z:T,ry:m}))}const A=t?6:8;Ry(new ye(If,If,vo,A),c8(),M,n),Ry(new we(Py,Bh,Cy),l8(),v,n),s.n=M.length,s.stems=M.length,s.slabs=v.length,n.userData.nameStoneCount=M.length}function g8(e){return At.find(t=>t.kind===e)??null}function x8(){return new mt({color:1314850,roughness:.26,metalness:.38,emissive:3286102,emissiveIntensity:.14,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[80,360],clearcoat:.34,clearcoatRoughness:.3,transparent:!1})}function _8(){return new mt({color:1840172,roughness:.18,metalness:.42,emissive:9071871,emissiveIntensity:.2,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function Ly(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Kp=0,Jp=78,Qp=90,Mo=3.1,yl=.09,Hh=.15,Ny=Mo*.5,Uy=Mo+Hh*.45,vl=10.8,Oy=.82,y8=4,v8=3;function M8(e){return e?v8:y8}function w8(e,t){return Math.hypot(e-Kp,t-Jp)<Qp?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function S8(e){return{n:0,posts:0,caps:0,want:e,h:Mo,r:yl,capR:Hh,side:vl}}function b8(e,t){const n=new Mt;n.name="breathposts",e.add(n);const i=M8(t),s=S8(i);n.userData.breathPostCounts=s,n.userData.breathPostCount=0,n.userData.sizes={h:Mo,r:yl,capR:Hh,yPost:Ny,yCap:Uy,side:vl,padLeave:Oy};const r=g8("ring");if(!r||Math.hypot(r.x,r.z)<Qp)return;const a=r.x-Kp,o=r.z-Jp,c=Math.hypot(a,o)||1,l=Math.min(.28,Qp/c),u=Math.min(.28,r.radius*Oy/c),d=Kp+a*l,h=Jp+o*l,f=r.x-a*u,x=r.z-o*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*vl*C,T=h+g*E+S*vl*C;w8(P,T)||(M.push({x:P,y:Ny,z:T,ry:m}),v.push({x:P,y:Uy,z:T,ry:m}))}const A=t?6:8;Ly(new ye(yl,yl,Mo,A),x8(),M,n),Ly(new vn(Hh,0),_8(),v,n),s.n=M.length,s.posts=M.length,s.caps=v.length,n.userData.breathPostCount=M.length}function E8(e){return At.find(t=>t.kind===e)??null}function T8(){return new mt({color:2892306,roughness:.26,metalness:.42,emissive:5914656,emissiveIntensity:.12,iridescence:.4,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function A8(){return new mt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function ky(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const t0=0,e0=78,n0=90,wo=3.4,Ml=.1,Gh=.18,Fy=wo*.5,By=wo+Gh*.55,wl=12.6,Hy=.82,R8=4,C8=3;function P8(e){return e?C8:R8}function I8(e,t){return Math.hypot(e-t0,t-e0)<n0?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function D8(e){return{n:0,posts:0,bulbs:0,want:e,h:wo,r:Ml,bulbR:Gh,side:wl}}function z8(e,t){const n=new Mt;n.name="foundrylamps",e.add(n);const i=P8(t),s=D8(i);n.userData.foundryLampCounts=s,n.userData.foundryLampCount=0,n.userData.sizes={h:wo,r:Ml,bulbR:Gh,yPost:Fy,yBulb:By,side:wl,padLeave:Hy};const r=E8("foundry");if(!r||Math.hypot(r.x,r.z)<n0)return;const a=r.x-t0,o=r.z-e0,c=Math.hypot(a,o)||1,l=Math.min(.28,n0/c),u=Math.min(.28,r.radius*Hy/c),d=t0+a*l,h=e0+o*l,f=r.x-a*u,x=r.z-o*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*wl*C,T=h+g*E+S*wl*C;I8(P,T)||(M.push({x:P,y:Fy,z:T,ry:m}),v.push({x:P,y:By,z:T,ry:m}))}const A=t?6:8;ky(new ye(Ml,Ml,wo,A),T8(),M,n),ky(new vn(Gh,0),A8(),v,n),s.n=M.length,s.posts=M.length,s.bulbs=v.length,n.userData.foundryLampCount=M.length}function L8(e){return At.find(t=>t.kind===e)??null}function N8(){return new mt({color:1188908,roughness:.28,metalness:.4,emissive:1727078,emissiveIntensity:.14,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.34,clearcoatRoughness:.32,transparent:!1})}function U8(){return new mt({color:3811858,roughness:.18,metalness:.46,emissive:15254890,emissiveIntensity:.2,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}function Gy(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const i0=0,s0=78,r0=90,So=3.15,Sl=.11,Vh=.16,Vy=So*.5,$y=So+Vh*.5,bl=11.2,Wy=.82,O8=4,k8=3;function F8(e){return e?k8:O8}function B8(e,t){return Math.hypot(e-i0,t-s0)<r0?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function H8(e){return{n:0,posts:0,caps:0,want:e,h:So,r:Sl,capR:Vh,side:bl}}function G8(e,t){const n=new Mt;n.name="canalposts",e.add(n);const i=F8(t),s=H8(i);n.userData.canalPostCounts=s,n.userData.canalPostCount=0,n.userData.sizes={h:So,r:Sl,capR:Vh,yPost:Vy,yCap:$y,side:bl,padLeave:Wy};const r=L8("canal");if(!r||Math.hypot(r.x,r.z)<r0)return;const a=r.x-i0,o=r.z-s0,c=Math.hypot(a,o)||1,l=Math.min(.28,r0/c),u=Math.min(.28,r.radius*Wy/c),d=i0+a*l,h=s0+o*l,f=r.x-a*u,x=r.z-o*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*bl*C,T=h+g*E+S*bl*C;B8(P,T)||(M.push({x:P,y:Vy,z:T,ry:m}),v.push({x:P,y:$y,z:T,ry:m}))}const A=t?6:8;Gy(new ye(Sl,Sl,So,A),N8(),M,n),Gy(new vn(Vh,0),U8(),v,n),s.n=M.length,s.posts=M.length,s.caps=v.length,n.userData.canalPostCount=M.length}function Pc(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Xy(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:mn,depthWrite:!1,side:xe,toneMapped:!1})}function Yy(e,t){return new mt({color:e,roughness:.06,metalness:.12,emissive:t,emissiveIntensity:.62,iridescence:1,iridescenceIOR:1.32,iridescenceThicknessRange:[50,580],clearcoat:.94,clearcoatRoughness:.06,sheen:.7,sheenColor:new se(8319231),envMapIntensity:1.8})}function V8(){return new mt({color:15254634,roughness:.14,metalness:.72,emissive:12886080,emissiveIntensity:.5,iridescence:.48,clearcoat:.78,clearcoatRoughness:.12})}function $8(e){switch(e){case"foundry":return{glass:16756800,crystal:15254634,emit:12875808};case"canal":return{glass:3073791,crystal:8319231,emit:1747136};case"grove":return{glass:15253616,crystal:13938784,emit:9072672};case"beacon":case"overlook":return{glass:8319231,crystal:13170943,emit:3854568};case"archive":return{glass:15254634,crystal:15782008,emit:12886080};case"gate":return{glass:11832575,crystal:13148415,emit:6965416};default:return{glass:8319231,crystal:11069680,emit:2793656}}}function W8(e,t){const n=new Mt;n.name="ward-glass",e.add(n);const i=new vn(1,0),s=new un(1,.045,6,t?18:28),r=new ye(1,1.08,1,t?6:8,1,!0),a=new un(1,.03,5,t?16:24),o=V8();At.forEach((c,l)=>{const u=$8(c.kind),d=c.kind==="beacon"?124:c.kind==="overlook"?108:c.kind==="archive"?100:c.kind==="canal"?28:72,h=c.kind==="canal"?22:c.kind==="terrace"?40:c.kind==="beacon"?14:28,f=new Mt;f.position.set(c.x,0,c.z),f.name=`ward-glass-${c.kind}`;const x=new gt(i,Yy(u.crystal,u.emit));x.scale.set(h*.22,d*.18,h*.22),x.position.y=10+d*.55,x.rotation.y=Pc(l,3)*Math.PI,x.castShadow=!0,f.add(x);const y=new gt(s,o);if(y.scale.set(h*.48,h*.48,h*.48),y.rotation.x=Math.PI/2,y.position.y=8+d*.38,f.add(y),!t){const S=new gt(s,o);S.scale.set(h*.32,h*.32,h*.32),S.rotation.set(.7,.2,.4),S.position.y=8+d*.48,f.add(S)}const g=new gt(r,Xy(u.glass,.14));g.scale.set(h*.36,d*.62,h*.36),g.position.y=8+d*.28,g.renderOrder=2,f.add(g);const p=new gt(a,Xy(u.glass,.28));p.scale.set(h*.55,h*.55,h*.55),p.rotation.x=Math.PI/2,p.position.y=8+d*.22,f.add(p);const w=t?4:8;for(let S=0;S<w;S++){const m=S/w*Math.PI*2+Pc(l,S)*.2,M=new gt(i,Yy(u.crystal,u.emit)),v=h*.62;M.position.set(Math.cos(m)*v,6+Pc(l+S,9)*d*.35,Math.sin(m)*v),M.scale.set(1.6,4.2+Pc(l,S+4)*3.2,1.6),M.rotation.y=m,M.castShadow=!1,f.add(M)}n.add(f)})}function X8(e){return At.find(t=>t.kind===e)??null}function Y8(){return new mt({color:1839656,roughness:.26,metalness:.38,emissive:4860024,emissiveIntensity:.16,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[80,380],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function q8(){return new mt({color:3811858,roughness:.17,metalness:.48,emissive:15254890,emissiveIntensity:.18,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[70,320],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function qy(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const a0=0,o0=78,c0=90,bo=2.88,El=.1,$h=.18,Zy=bo*.5,jy=bo+$h*.5,Tl=10.4,Ky=.8,Z8=5,j8=3;function K8(e){return e?j8:Z8}function J8(e,t){return Math.hypot(e-a0,t-o0)<c0?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function Q8(e){return{n:0,posts:0,caps:0,want:e,h:bo,r:El,capR:$h,side:Tl}}function t5(e,t){const n=new Mt;n.name="gateposts",e.add(n);const i=K8(t),s=Q8(i);n.userData.gatePostCounts=s,n.userData.gatePostCount=0,n.userData.sizes={h:bo,r:El,capR:$h,yPost:Zy,yCap:jy,side:Tl,padLeave:Ky};const r=X8("gate");if(!r||Math.hypot(r.x,r.z)<c0)return;const a=r.x-a0,o=r.z-o0,c=Math.hypot(a,o)||1,l=Math.min(.28,c0/c),u=Math.min(.28,r.radius*Ky/c),d=a0+a*l,h=o0+o*l,f=r.x-a*u,x=r.z-o*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*Tl*C,T=h+g*E+S*Tl*C;J8(P,T)||(M.push({x:P,y:Zy,z:T,ry:m}),v.push({x:P,y:jy,z:T,ry:m}))}const A=t?6:8;qy(new ye(El,El,bo,A),Y8(),M,n),qy(new vn($h,0),q8(),v,n),s.n=M.length,s.posts=M.length,s.caps=v.length,n.userData.gatePostCount=M.length}function e5(e){return At.find(t=>t.kind===e)??null}function n5(){return new mt({color:1057836,roughness:.24,metalness:.4,emissive:1727078,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.38,clearcoatRoughness:.28,transparent:!1})}function i5(){return new mt({color:1456196,roughness:.15,metalness:.42,emissive:3073791,emissiveIntensity:.24,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[70,320],clearcoat:.5,clearcoatRoughness:.2,transparent:!1})}function Jy(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(a.rx,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const l0=0,h0=78,u0=90,Eo=3.55,Al=.09,d0=.28,f0=.035,Qy=Eo*.5,tv=Eo+f0,Rl=13.6,ev=.82,s5=4,r5=3;function a5(e){return e?r5:s5}function o5(e,t){return Math.hypot(e-l0,t-h0)<u0?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function c5(e){return{n:0,posts:0,rings:0,want:e,h:Eo,r:Al,ringR:d0,side:Rl}}function l5(e,t){const n=new Mt;n.name="spanposts",e.add(n);const i=a5(t),s=c5(i);n.userData.spanPostCounts=s,n.userData.spanPostCount=0,n.userData.sizes={h:Eo,r:Al,ringR:d0,ringT:f0,yPost:Qy,yRing:tv,side:Rl,padLeave:ev};const r=e5("bridge");if(!r||Math.hypot(r.x,r.z)<u0)return;const a=r.x-l0,o=r.z-h0,c=Math.hypot(a,o)||1,l=Math.min(.28,u0/c),u=Math.min(.28,r.radius*ev/c),d=l0+a*l,h=h0+o*l,f=r.x-a*u,x=r.z-o*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let E=0;E<i;E++){const C=(E+.5)/i,P=E%2===0?1:-1,T=d+y*C+w*Rl*P,O=h+g*C+S*Rl*P;o5(T,O)||(M.push({x:T,y:Qy,z:O,rx:0,ry:m}),v.push({x:T,y:tv,z:O,rx:Math.PI/2,ry:m}))}const A=t?6:8,_=t?14:22;Jy(new ye(Al,Al,Eo,A),n5(),M,n),Jy(new un(d0,f0,6,_),i5(),v,n),s.n=M.length,s.posts=M.length,s.rings=v.length,n.userData.spanPostCount=M.length}function h5(e){return At.find(t=>t.kind===e)??null}function u5(){return new mt({color:1445922,roughness:.26,metalness:.36,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[80,360],clearcoat:.34,clearcoatRoughness:.3,transparent:!1})}function d5(){return new mt({color:1840172,roughness:.16,metalness:.4,emissive:10187007,emissiveIntensity:.2,iridescence:.54,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.22,transparent:!1})}function nv(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(a.rx,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const p0=0,m0=78,g0=90,To=2.62,Cl=.1,x0=.32,iv=To*.5,sv=To+.04,Pl=9.6,rv=.82,f5=4,p5=3;function m5(e){return e?p5:f5}function g5(e,t){return Math.hypot(e-p0,t-m0)<g0?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function x5(e){return{n:0,posts:0,discs:0,want:e,h:To,r:Cl,discR:x0,side:Pl}}function _5(e,t){const n=new Mt;n.name="terraceposts",e.add(n);const i=m5(t),s=x5(i);n.userData.terracePostCounts=s,n.userData.terracePostCount=0,n.userData.sizes={h:To,r:Cl,discR:x0,yPost:iv,yDisc:sv,side:Pl,padLeave:rv};const r=h5("terrace");if(!r||Math.hypot(r.x,r.z)<g0)return;const a=r.x-p0,o=r.z-m0,c=Math.hypot(a,o)||1,l=Math.min(.28,g0/c),u=Math.min(.28,r.radius*rv/c),d=p0+a*l,h=m0+o*l,f=r.x-a*u,x=r.z-o*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*Pl*C,T=h+g*E+S*Pl*C;g5(P,T)||(M.push({x:P,y:iv,z:T,rx:0,ry:m}),v.push({x:P,y:sv,z:T,rx:Math.PI/2,ry:m}))}const A=t?6:8;nv(new ye(Cl,Cl,To,A),u5(),M,n),nv(new yi(x0,A),d5(),v,n),s.n=M.length,s.posts=M.length,s.discs=v.length,n.userData.terracePostCount=M.length}function y5(e){return At.find(t=>t.kind===e)??null}function v5(){return new mt({color:2760720,roughness:.28,metalness:.4,emissive:5914656,emissiveIntensity:.12,iridescence:.38,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.34,clearcoatRoughness:.32,transparent:!1})}function M5(){return new mt({color:3812372,roughness:.18,metalness:.46,emissive:13148240,emissiveIntensity:.2,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function av(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const _0=0,y0=78,v0=90,Ao=1.35,Df=.12,Wh=.26,ov=Ao*.5,cv=Ao+Wh*.55,Il=14.2,lv=.82,w5=4,S5=3;function b5(e){return e?S5:w5}function E5(e,t){return Math.hypot(e-_0,t-y0)<v0?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function T5(e){return{n:0,stems:0,hearts:0,want:e,stemH:Ao,heartR:Wh,side:Il}}function A5(e,t){const n=new Mt;n.name="veinstones",e.add(n);const i=b5(t),s=T5(i);n.userData.veinStoneCounts=s,n.userData.veinStoneCount=0,n.userData.sizes={stemH:Ao,stemR:Df,heartR:Wh,yStem:ov,yHeart:cv,side:Il,padLeave:lv};const r=y5("wild");if(!r||Math.hypot(r.x,r.z)<v0)return;const a=r.x-_0,o=r.z-y0,c=Math.hypot(a,o)||1,l=Math.min(.28,v0/c),u=Math.min(.28,r.radius*lv/c),d=_0+a*l,h=y0+o*l,f=r.x-a*u,x=r.z-o*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*Il*C,T=h+g*E+S*Il*C;E5(P,T)||(M.push({x:P,y:ov,z:T,ry:m}),v.push({x:P,y:cv,z:T,ry:m+.4}))}const A=t?6:8;av(new ye(Df,Df,Ao,A),v5(),M,n),av(new mu(Wh,0),M5(),v,n),s.n=M.length,s.stems=M.length,s.hearts=v.length,n.userData.veinStoneCount=M.length}function R5(e){return At.find(t=>t.kind===e)??null}function C5(){return new mt({color:1576994,roughness:.26,metalness:.38,emissive:3810400,emissiveIntensity:.15,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[80,380],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function P5(){return new mt({color:1456196,roughness:.16,metalness:.4,emissive:8319231,emissiveIntensity:.22,iridescence:.54,iridescenceIOR:1.32,iridescenceThicknessRange:[70,320],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function hv(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const M0=0,w0=78,S0=90,Ro=3.05,Dl=.09,b0=.2,E0=.42,uv=Ro*.5,dv=Ro+E0*.42,zl=16.8,fv=.82,I5=4,D5=3;function z5(e){return e?D5:I5}function L5(e,t){return Math.hypot(e-M0,t-w0)<S0?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function N5(e){return{n:0,posts:0,cones:0,want:e,h:Ro,r:Dl,coneR:b0,side:zl}}function U5(e,t){const n=new Mt;n.name="hailposts",e.add(n);const i=z5(t),s=N5(i);n.userData.hailPostCounts=s,n.userData.hailPostCount=0,n.userData.sizes={h:Ro,r:Dl,coneR:b0,coneH:E0,yPost:uv,yCone:dv,side:zl,padLeave:fv};const r=R5("beacon");if(!r||Math.hypot(r.x,r.z)<S0)return;const a=r.x-M0,o=r.z-w0,c=Math.hypot(a,o)||1,l=Math.min(.28,S0/c),u=Math.min(.28,r.radius*fv/c),d=M0+a*l,h=w0+o*l,f=r.x-a*u,x=r.z-o*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*zl*C,T=h+g*E+S*zl*C;L5(P,T)||(M.push({x:P,y:uv,z:T,ry:m}),v.push({x:P,y:dv,z:T,ry:m}))}const A=t?6:8;hv(new ye(Dl,Dl,Ro,A),C5(),M,n),hv(new Do(b0,E0,A),P5(),v,n),s.n=M.length,s.posts=M.length,s.cones=v.length,n.userData.hailPostCount=M.length}function O5(e){return At.find(t=>t.kind===e)??null}function k5(){return new mt({color:2892306,roughness:.26,metalness:.42,emissive:5914656,emissiveIntensity:.12,iridescence:.4,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function F5(){return new mt({color:3811858,roughness:.17,metalness:.46,emissive:15254890,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function pv(e,t,n,i){if(!n.length)return;const s=new de(e,t,n.length),r=new ie;r.rotation.order="YXZ",n.forEach((a,o)=>{r.position.set(a.x,a.y,a.z),r.rotation.set(0,a.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(o,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const T0=0,A0=78,R0=90,Co=2.74,Ll=.11,Xh=.2,mv=Co*.5,gv=Co+Xh*.55,Nl=15.2,xv=.82,B5=4,H5=3;function G5(e){return e?H5:B5}function V5(e,t){return Math.hypot(e-T0,t-A0)<R0?!0:At.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function $5(e){return{n:0,posts:0,fruit:0,want:e,h:Co,r:Ll,fruitR:Xh,side:Nl}}function W5(e,t){const n=new Mt;n.name="orchardposts",e.add(n);const i=G5(t),s=$5(i);n.userData.orchardPostCounts=s,n.userData.orchardPostCount=0,n.userData.sizes={h:Co,r:Ll,fruitR:Xh,yPost:mv,yFruit:gv,side:Nl,padLeave:xv};const r=O5("grove");if(!r||Math.hypot(r.x,r.z)<R0)return;const a=r.x-T0,o=r.z-A0,c=Math.hypot(a,o)||1,l=Math.min(.28,R0/c),u=Math.min(.28,r.radius*xv/c),d=T0+a*l,h=A0+o*l,f=r.x-a*u,x=r.z-o*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*Nl*C,T=h+g*E+S*Nl*C;V5(P,T)||(M.push({x:P,y:mv,z:T,ry:m}),v.push({x:P,y:gv,z:T,ry:m+.55}))}const A=t?6:8;pv(new ye(Ll,Ll,Co,A),k5(),M,n),pv(new vn(Xh,0),F5(),v,n),s.n=M.length,s.posts=M.length,s.fruit=v.length,n.userData.orchardPostCount=M.length}const{Group:ns,Vector2:an,LatheGeometry:C0,BoxGeometry:pi,CylinderGeometry:Hn,ConeGeometry:Xa,TorusGeometry:rn,RepeatWrapping:X5,SRGBColorSpace:Y5,MeshPhysicalMaterial:Ic,Color:Us,Mesh:ct,MeshBasicMaterial:Zn,AdditiveBlending:q5,DirectionalLight:Dc,InstancedMesh:zc,Object3D:Ha,OctahedronGeometry:bi,IcosahedronGeometry:_v,CapsuleGeometry:yv,SphereGeometry:Lc,TextureLoader:Z5,ShaderMaterial:Nc,CircleGeometry:sr,PointLight:Uc,HemisphereLight:j5}=AA,Dn="./luminous-circuit".replace(/\/?$/,"");function Bn(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function zf(e){const t=e==="house"?[new an(1,0),new an(.92,.35),new an(.78,.72),new an(.55,1)]:e==="ward"?[new an(1,0),new an(.94,.22),new an(.72,.48),new an(.58,.78),new an(.28,1)]:[new an(.85,0),new an(.7,.3),new an(.42,.62),new an(.18,.88),new an(.02,1)];return new C0(t,12)}function K5(){return new pi(1.15,.85,.95)}function J5(){return new Hn(.55,.85,1.15,8)}function Q5(){return new Xa(.32,1.35,6)}function tN(){return new rn(.55,.1,6,16,Math.PI)}function zn(e,t,n=1){const i=e.load(t);return i.colorSpace=Y5,i.wrapS=i.wrapT=X5,i.repeat.set(n,n),i.anisotropy=8,i}function eN(){const e=new ns;e.name="core-spire-city";const t=typeof window<"u"&&(()=>{try{return window.matchMedia("(pointer: coarse)").matches}catch{return!1}})(),n=new Z5,i=zn(n,`${Dn}/plaza-floor.jpg`,6),s=zn(n,`${Dn}/wild-floor-v2.jpg`,10),r=zn(n,`${Dn}/crystal-facade.jpg`,2),a=zn(n,`${Dn}/spire-windows-v2.jpg`,2.2),o=zn(n,`${Dn}/spire-facet-tile.jpg`,2),c=zn(n,`${Dn}/gold-crystal.jpg`,2),l=zn(n,`${Dn}/canal-river.jpg`,4),u=zn(n,`${Dn}/spire-heart.jpg`,1),d=zn(n,`${Dn}/avenue-living.jpg`,8);zn(n,`${Dn}/tower-cyan.jpg`,1.6),zn(n,`${Dn}/tower-amethyst.jpg`,1.6),zn(n,`${Dn}/sky-core-glow.jpg`,1),zn(n,`${Dn}/sky-veil.jpg`,1);const h=zn(n,`${Dn}/energy-canal.jpg`,6),f=zn(n,`${Dn}/globe-surface.jpg`,8),x=zn(n,`${Dn}/kiln-body.jpg`,2),y=zn(n,`${Dn}/orchard-canopy.jpg`,2),g=zn(n,`${Dn}/beacon-hail.jpg`,2),p=[],w=[];let S=null,m=null,M=null,v=null,A=null,_=null,E=null,C=null,P=null,T=null,O=null,k=null,U=null,$=null,W=null,Y=null,tt=null;function q(L){w.push(L)}function ht(L=2){let z=0;for(;w.length&&z<L;){const N=w.shift();try{N?.()}catch{}z+=1}return w.length}const nt=L=>new Ic({color:L.color,roughness:L.roughness??.16,metalness:L.metalness??.46,emissive:L.emissive??0,emissiveIntensity:L.emissiveIntensity??0,envMapIntensity:1.82,map:L.map??null,transparent:!!L.transparent,opacity:L.opacity??1,clearcoat:L.coat??.84,clearcoatRoughness:.08,iridescence:L.iri??.88,iridescenceIOR:1.31,iridescenceThicknessRange:[60,620],sheen:.62,sheenColor:new Us(L.sheenHex??8049904)});function Lt(L,z,N=.4){L.onBeforeCompile=I=>{I.uniforms.uRimCol={value:new Us(z)},I.uniforms.uRimStr={value:N},I.uniforms.uCoreDir={value:new B(is.x,is.y,is.z).normalize()},I.fragmentShader=`uniform vec3 uRimCol; uniform float uRimStr; uniform vec3 uCoreDir;
`+I.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
           vec3 _wn = inverseTransformDirection(normalize(normal), viewMatrix);
           float _rim = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.4);
           float _kiss = pow(max(0.0, dot(_wn, uCoreDir)), 1.35);
           totalEmissiveRadiance += uRimCol * _rim * uRimStr;
           totalEmissiveRadiance += vec3(0.49, 0.94, 1.0) * _kiss * (uRimStr * 0.95);`)},L.customProgramCacheKey=()=>`rim-core-${z}-${N}`}const Qt=nt({color:6977696,roughness:.38,metalness:.42,emissive:1054776,emissiveIntensity:.18,map:i,iri:.32,coat:.55}),Ut=nt({color:8027336,roughness:.14,metalness:.42,emissive:2363488,emissiveIntensity:.52,map:r,iri:.9,coat:.78,sheenHex:11571455}),V=nt({color:8042696,roughness:.11,metalness:.48,emissive:678008,emissiveIntensity:.62,map:r,iri:.94,coat:.86,sheenHex:8320767}),ot=nt({color:13940856,roughness:.14,metalness:.68,emissive:6965784,emissiveIntensity:.48,map:c,iri:.58,coat:.82,sheenHex:16765040}),at=nt({color:2896968,roughness:.82,metalness:.1,emissive:395284,emissiveIntensity:.1,map:f,iri:.08,coat:.06}),Rt=nt({color:5925520,roughness:.44,metalness:.34,emissive:792632,emissiveIntensity:.2,map:d,iri:.28,coat:.32}),Ht=nt({color:9082560,roughness:.12,metalness:.46,emissive:1321040,emissiveIntensity:.58,map:a,iri:.78,coat:.8}),Vt=new Ic({color:12103916,roughness:.05,metalness:.12,emissive:2102352,emissiveIntensity:.55,envMapIntensity:1.9,iridescence:1,iridescenceIOR:1.32,iridescenceThicknessRange:[40,620],sheen:.78,sheenColor:new Us(8317176),clearcoat:.96,clearcoatRoughness:.05,map:o});Vt.bumpMap=o,Vt.bumpScale=.38,Vt.clearcoatNormalScale=new an(.55,.55),Ht.bumpMap=a,Ht.bumpScale=.26,ot.bumpMap=c,ot.bumpScale=.22,at.bumpMap=s,at.bumpScale=.45;const he=new Ic({color:13168888,roughness:.06,metalness:.12,emissive:1349808,emissiveIntensity:.92,envMapIntensity:1.75,iridescence:1,iridescenceIOR:1.28,sheen:.74,sheenColor:new Us(5953776),clearcoat:.92,clearcoatRoughness:.07,map:u});Lt(Ut,11571455,.48),Lt(V,8320767,.56),Lt(ot,16765040,.42),Lt(Ht,9097448,.46),Lt(Vt,13166847,.7),Lt(he,8320767,.78),Lt(Qt,4890816,.22),Lt(Rt,4890816,.2);const $t=new Zn({color:3854568,transparent:!0,opacity:.32,blending:2,depthWrite:!1,map:l}),oe=new Zn({color:14725216,transparent:!0,opacity:.22,blending:2,depthWrite:!1}),_e=new Zn({color:8022208,transparent:!0,opacity:.12,blending:2,depthWrite:!1,side:2}),me=new Zn({color:1738920,transparent:!0,opacity:.18,blending:2,depthWrite:!1});function Ne(L,z,N=.55){const I={value:0};return p.push(I),new Nc({uniforms:{uTime:I,uMap:{value:L},uColor:{value:new Us(z)},uGain:{value:N}},transparent:!0,blending:2,depthWrite:!1,side:2,vertexShader:`
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
      `})}const ve=Ne(h,3854568,.62),Xe=Ne(c,14725216,.42),Ke={value:0};p.push(Ke);const Ye=new Nc({uniforms:{uTime:Ke},transparent:!0,blending:2,depthWrite:!1,side:2,vertexShader:`
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
    `}),Ve=[Qt,Ut,V,ot,Ht,Vt,he,Rt],F=Ve.map(L=>L.emissiveIntensity),yn=new sr(2200,96);{const L=yn.attributes.position;for(let z=0;z<L.count;z++){const N=L.getX(z),I=L.getY(z),X=Math.hypot(N,I),ut=Math.sin(N*.006)*Math.cos(I*.0055)+Math.sin(X*.012);L.setZ(z,ut*5.2+Math.sin(N*.018+I*.014)*1.8)}yn.computeVertexNormals()}const Re=new ct(yn,at);Re.rotation.x=-Math.PI/2,Re.position.y=.2,Re.receiveShadow=!0,e.add(Re);const D=new sr(920,72);{const L=D.attributes.position;for(let z=0;z<L.count;z++){const N=L.getX(z),I=L.getY(z);L.setZ(z,Math.sin(N*.02)*Math.cos(I*.018)*.9)}D.computeVertexNormals()}const b=new ct(D,Qt);b.rotation.x=-Math.PI/2,b.position.y=.42,b.receiveShadow=!0,e.add(b);const Z=new ct(new sr(420,56),Rt);Z.rotation.x=-Math.PI/2,Z.position.y=.58,Z.receiveShadow=!0,e.add(Z);const Q=new ct(new sr(400,64),Ye);Q.rotation.x=-Math.PI/2,Q.position.y=.72,e.add(Q);const st=new ct(new Hn(108,118,3.2,40),Ut);st.position.y=1.5,st.receiveShadow=!0,st.castShadow=!0,e.add(st);const wt=new ct(new Hn(46,52,1.2,36),he);wt.position.y=3.4,wt.receiveShadow=!0,e.add(wt);const vt={value:0};p.push(vt);const it=new ct(new sr(104,48),new Nc({uniforms:{uTime:vt},transparent:!0,blending:2,depthWrite:!1,vertexShader:`
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
      `}));it.rotation.x=-Math.PI/2,it.position.y=4.12,e.add(it);const lt={value:0};p.push(lt);const Ct=new ct(new sr(100,48),new Nc({uniforms:{uTime:lt},transparent:!0,blending:2,depthWrite:!1,vertexShader:`
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
      `}));Ct.rotation.x=-Math.PI/2,Ct.position.y=4.18,e.add(Ct);const te=new ct(new rn(58,1.1,10,48),$t);te.rotation.x=Math.PI/2,te.position.y=4.2,e.add(te);for(let L=0;L<4;L++){const z=new ct(new rn(22+L*14,.45,8,40),L%2?oe:me);z.rotation.x=Math.PI/2,z.position.y=4.05,e.add(z)}for(let L=0;L<18;L++){const z=L/18*Math.PI*2,N=new ct(new bi(1.15,0),L%3?Vt:he);N.position.set(Math.cos(z)*74,4.6,Math.sin(z)*74),N.rotation.set(.4,z,.2),N.scale.set(.7,1.8+L%4*.4,.7),e.add(N)}for(let L=0;L<12;L++){const z=L/12*Math.PI*2,N=new ct(new pi(6.4,.22,220),L%2?ve:Xe);N.position.set(Math.cos(z)*128,1.42,Math.sin(z)*128),N.rotation.y=z,e.add(N)}const Pt=new ct(new rn(92,1.8,10,48),oe);Pt.rotation.x=Math.PI/2,Pt.position.y=7.2,e.add(Pt);const zt=new ct(new rn(72,1.2,10,44),$t);zt.rotation.x=Math.PI/2,zt.position.y=14.6,e.add(zt);const Xt=new ns;Xt.name="resonance-hub",[{r0:68,r1:60,h:4.4,y:3.6},{r0:58,r1:50,h:5,y:8.2},{r0:48,r1:40,h:5.2,y:13.2},{r0:38,r1:30,h:4.8,y:18.2},{r0:28,r1:22,h:4.2,y:22.6}].forEach((L,z)=>{const N=new ct(new Hn(L.r1,L.r0,L.h,24),z%2?Rt:Ht);N.position.y=L.y,Xt.add(N);const I=new ct(new rn(L.r1+.4,.42,6,24),z%2?oe:$t);I.rotation.x=Math.PI/2,I.position.y=L.y+L.h*.48,Xt.add(I)});const ae=[new an(54,18),new an(48,36),new an(40,58),new an(32,86),new an(24,112)],fe=new ct(new C0(ae,12),Ht);Xt.add(fe);const H=[new an(22,112),new an(18,148),new an(13,188),new an(8,228),new an(3.4,262),new an(.2,286)],It=new ct(new C0(H,12),Vt);Xt.add(It);const rt=new ct(new Hn(8.2,9.4,52,6),he);rt.position.y=148,Xt.add(rt);const _t=new Ic({color:13172728,emissive:1747144,emissiveIntensity:.92,roughness:.04,metalness:.08,transmission:.55,thickness:3.4,ior:1.5,iridescence:1,iridescenceIOR:1.32,iridescenceThicknessRange:[80,480],clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.94,envMapIntensity:1.75,sheen:.72,sheenColor:new Us(8320767),attenuationColor:new Us(4903144),attenuationDistance:3.6}),Tt=new ct(new bi(5.2,1),_t);Tt.scale.set(.55,2.6,.55),Tt.position.y=148,Xt.add(Tt),Ve.push(_t),F.push(_t.emissiveIntensity);const ft=new ct(new Xa(6.4,28,6),he);ft.position.y=292,Xt.add(ft);const Jt=new ct(new Hn(11,18,260,10,1,!0),new Zn({color:4903136,transparent:!0,opacity:.06,blending:2,depthWrite:!1,side:2}));Jt.position.y=150,Xt.add(Jt);const Zt=new ct(new Xa(22,420,10,1,!0),new Zn({color:4905192,transparent:!0,opacity:.05,blending:2,depthWrite:!1,side:2}));Zt.position.y=210,Xt.add(Zt);const Je=new ct(new _v(11,1),new Zn({color:7006452,transparent:!0,opacity:.18,wireframe:!0,blending:2,depthWrite:!1}));Je.position.y=148,Xt.add(Je);const He=new ns;He.position.y=78;for(let L=0;L<10;L++){const z=L/10*Math.PI*2,N=new ct(new bi(2.1,0),L%2?he:Vt);N.position.set(Math.cos(z)*42,Math.sin(L*1.3)*8,Math.sin(z)*42),N.scale.set(.55,2.2,.55),N.rotation.z=.4,He.add(N)}Xt.add(He),Xt.scale.setScalar(1.18),Xt.traverse(L=>{const z=L;z.isMesh&&(z.castShadow=!0)}),e.add(Xt);try{tt=gC(e,t).tick}catch{}e.add(new Uc(3073791,9,620,1.35));const kn=new Uc(8313070,6.5,440,1.3);kn.position.set(0,210,0),e.add(kn);const $n=new Uc(14725216,3.6,280,1.5);$n.position.set(50,64,36),e.add($n);const et=new Uc(8319231,8,6400,1.05);et.position.set(is.x*.42,is.y*.9,is.z*.42),et.name="star-core-lamp",e.add(et);const Nt=new Dc(8975615,.48);Nt.position.set(is.x,is.y,is.z),Nt.target.position.set(0,48,0),Nt.name="star-core-kiss",e.add(Nt),e.add(Nt.target),e.add(new j5(5937336,460302,.52));const jt=new Dc(13688556,.64);jt.position.set(280,480,220),jt.castShadow=!0,jt.shadow.mapSize.set(1024,1024),jt.shadow.camera.near=10,jt.shadow.camera.far=520,jt.shadow.camera.left=-95,jt.shadow.camera.right=95,jt.shadow.camera.top=95,jt.shadow.camera.bottom=-95,jt.shadow.bias=-4e-4,jt.shadow.normalBias=.035,jt.target.position.set(0,0,0),e.add(jt),e.add(jt.target);const Ce=new Dc(5163232,.26);Ce.position.set(-220,90,-240),e.add(Ce);const Se=new Dc(3860223,.16);Se.position.set(-80,40,200),e.add(Se),zf("house");const Gt=zf("ward"),gn=zf("spire"),En=K5(),Fn=J5(),Ge=Q5(),Qn=tN(),ai=new Hn(3.8,5.4,12,8),ls=new Hn(1.15,1.9,14,6),Ui=new rn(1.8,.45,6,12),hs=new pi(16,2.2,6.5),oi=new pi(15,.45,8),ya=new pi(16.5,.7,2.2),wr=new rn(4.4,1.05,6,14),Ki=new bi(1.8,0),vi=new Hn(.9,1.5,9,6),R=new Xa(5.4,13,7),G=new bi(1.15,0),j=new Hn(1.5,2.6,24,6),J=new bi(2.4,0),K=new rn(5.5,.35,6,16),kt=new bi(2.2,0),qt=new Hn(5.8,6.4,1.4,6),St=new Xa(5.2,4.2,6),Kt=new pi(18,1.1,2.2),ee=new Hn(1.6,2.4,16,8),le=new rn(4.8,.55,6,18),pe=new pi(2.4,16,2.4),ne=new pi(3.4,16,.7),Oe=new pi(1.8,8,.2),nn=new rn(6.2,.55,6,16,Math.PI);function $e(L){switch(L){case"foundry":return nt({color:14196816,roughness:.22,metalness:.64,emissive:9058824,emissiveIntensity:.52,map:x,iri:.28,coat:.68,sheenHex:16756800});case"canal":return nt({color:7001320,roughness:.16,metalness:.38,emissive:559272,emissiveIntensity:.55,map:r,iri:.92,coat:.78,sheenHex:6222079});case"terrace":return nt({color:11049192,roughness:.2,metalness:.4,emissive:3807352,emissiveIntensity:.46,map:r,iri:.8,coat:.7,sheenHex:13148415});case"gate":return nt({color:9081032,roughness:.18,metalness:.48,emissive:2627688,emissiveIntensity:.44,map:a,iri:.7,coat:.72,sheenHex:11571455});case"grove":return nt({color:13152352,roughness:.28,metalness:.5,emissive:5914640,emissiveIntensity:.42,map:y,iri:.5,coat:.6,sheenHex:15257712});case"beacon":return nt({color:12110064,roughness:.12,metalness:.42,emissive:4219080,emissiveIntensity:.62,map:g,iri:.88,coat:.85,sheenHex:13682943});case"overlook":return nt({color:9490656,roughness:.14,metalness:.45,emissive:684176,emissiveIntensity:.5,map:u,iri:.85,coat:.8,sheenHex:10545407});case"market":return nt({color:14731384,roughness:.24,metalness:.55,emissive:6965264,emissiveIntensity:.46,map:c,iri:.4,coat:.65,sheenHex:16769152});case"wild":return nt({color:9488552,roughness:.32,metalness:.28,emissive:1597504,emissiveIntensity:.4,map:o,iri:.75,coat:.55,sheenHex:8450240});case"ring":return nt({color:9994448,roughness:.18,metalness:.46,emissive:4200568,emissiveIntensity:.5,map:r,iri:.82,coat:.74,sheenHex:12620031});case"archive":return nt({color:13154440,roughness:.2,metalness:.5,emissive:5783576,emissiveIntensity:.4,map:c,iri:.45,coat:.7,sheenHex:16771232});default:return nt({color:8042712,roughness:.16,metalness:.5,emissive:1333368,emissiveIntensity:.48,map:r,iri:.78,coat:.72,sheenHex:7397631})}}function Ae(L){switch(L){case"foundry":return 16752704;case"grove":return 15257696;case"canal":return 3073791;case"overlook":return 8317176;case"market":return 15254890;case"beacon":return 13678847;case"gate":return 11571455;case"archive":return 16765040;case"wild":return 8450240;case"ring":return 12620031;case"terrace":return 13148415;default:return 5953776}}At.forEach(L=>{q(()=>{const z=new ns;z.position.set(L.x,0,L.z);const N=$e(L.kind);Ve.push(N),F.push(N.emissiveIntensity);const I=Ae(L.kind),X=new ct(new Hn(88,98,5.2,28),Qt);X.position.y=2.6,X.receiveShadow=!0,X.castShadow=!0,z.add(X);const ut=new ct(new rn(44,1.5,6,24),L.kind==="foundry"||L.kind==="grove"||L.kind==="market"?oe:$t);ut.rotation.x=Math.PI/2,ut.position.y=5.35,z.add(ut);let Ft;L.kind==="foundry"?(Ft=new ct(Fn,N),Ft.scale.set(28,62,28)):L.kind==="market"?(Ft=new ct(Fn,N),Ft.scale.set(22,44,22)):L.kind==="beacon"?(Ft=new ct(gn,N),Ft.scale.set(14,124,14)):L.kind==="overlook"?(Ft=new ct(gn,N),Ft.scale.set(16,108,16)):L.kind==="wild"?(Ft=new ct(Ge,N),Ft.scale.set(14,92,14)):L.kind==="canal"?(Ft=new ct(new pi(1,1,1),N),Ft.scale.set(52,28,22)):L.kind==="ring"?(Ft=new ct(Gt,N),Ft.scale.set(28,48,28)):L.kind==="terrace"?(Ft=new ct(Gt,N),Ft.scale.set(40,64,40)):L.kind==="grove"?(Ft=new ct(Gt,N),Ft.scale.set(32,78,32)):L.kind==="gate"?(Ft=new ct(Gt,N),Ft.scale.set(26,86,26)):L.kind==="archive"?(Ft=new ct(Gt,N),Ft.scale.set(28,100,28)):(Ft=new ct(Gt,N),Ft.scale.set(34,92,34)),Ft.position.y=8,Ft.castShadow=!0,z.add(Ft);const qe=new ct(new rn(L.kind==="beacon"||L.kind==="overlook"?12:20,.7,8,24),L.kind==="foundry"||L.kind==="grove"||L.kind==="market"?oe:$t);qe.rotation.x=Math.PI/2,qe.position.y=L.kind==="beacon"?72:L.kind==="canal"?28:42,z.add(qe);const ln=new ct(new Lc(L.kind==="beacon"?5.2:7.5,12,10),new Zn({color:I,transparent:!0,opacity:.46,blending:2,depthWrite:!1}));ln.position.set(0,L.kind==="beacon"?88:L.kind==="canal"?28:48,0),z.add(ln);const hn=new ct(new pi(8,14,1.2),$t);hn.position.set(0,9,L.kind==="canal"?14:34),z.add(hn);for(let Bt=0;Bt<8;Bt++){const pt=Bt/8*Math.PI*2,yt=Math.cos(pt)*52,Ot=Math.sin(pt)*52;if(L.kind==="foundry"){const Dt=new ct(ai,N);Dt.position.set(yt,8.2,Ot),Dt.rotation.y=pt,z.add(Dt);const re=new ct(ls,Ht);re.position.set(yt,18.5,Ot),z.add(re);const De=new ct(Ui,oe);De.position.set(yt+Math.cos(pt)*4.2,6.5,Ot+Math.sin(pt)*4.2),De.rotation.y=pt,De.rotation.z=Math.PI/2,z.add(De)}else if(L.kind==="canal"){const Dt=new ct(hs,N);Dt.position.set(yt,5.4,Ot),Dt.rotation.y=pt,z.add(Dt);const re=new ct(oi,ve);re.position.set(yt,4.4,Ot),re.rotation.y=pt,z.add(re);const De=new ct(ya,V);De.position.set(yt,6.8,Ot),De.rotation.y=pt,z.add(De)}else if(L.kind==="terrace"){const Dt=new ct(vi,Ut);Dt.position.set(yt,5.2,Ot),z.add(Dt);const re=new ct(wr,N);re.position.set(yt,8.6,Ot),re.rotation.x=Math.PI/2,z.add(re);const De=new ct(Ki,he);De.position.set(yt,9.4,Ot),De.scale.set(.7,1.4,.7),z.add(De)}else if(L.kind==="gate"){const Dt=new ct(Qn,N);Dt.scale.set(10,14,10),Dt.position.set(yt,4.2,Ot),Dt.rotation.y=pt,z.add(Dt);const re=new ct(pe,Ht);re.position.set(yt+Math.cos(pt+.22)*5.2,10,Ot+Math.sin(pt+.22)*5.2),z.add(re);const De=new ct(pe,Ht);De.position.set(yt+Math.cos(pt-.22)*5.2,10,Ot+Math.sin(pt-.22)*5.2),z.add(De)}else if(L.kind==="grove"){const Dt=new ct(vi,Ut);Dt.position.set(yt,7,Ot),Dt.scale.set(1.4,1.5,1.4),z.add(Dt);const re=new ct(R,N);re.position.set(yt,16,Ot),z.add(re);const De=new ct(R,ot);De.scale.set(.55,.7,.55),De.position.set(yt+Math.cos(pt)*4,13,Ot+Math.sin(pt)*4),De.rotation.z=.7,De.rotation.y=pt,z.add(De);const wa=new ct(G,he);wa.position.set(yt+Math.cos(pt)*3.2,12.2,Ot+Math.sin(pt)*3.2),z.add(wa)}else if(L.kind==="beacon"){const Dt=new ct(j,N);Dt.position.set(yt,14,Ot),z.add(Dt);const re=new ct(J,$t);re.position.set(yt,28,Ot),z.add(re);const De=new ct(K,$t);De.position.set(yt,24,Ot),De.rotation.x=Math.PI/2,z.add(De)}else if(L.kind==="overlook"){const Dt=new ct(Ge,N);Dt.scale.set(5,18,5),Dt.position.set(yt,4,Ot),z.add(Dt);const re=new ct(K,$t);re.position.set(yt,16,Ot),re.rotation.x=.9,re.rotation.y=pt,z.add(re);const De=new ct(kt,Vt);De.position.set(yt+Math.cos(pt)*5.5,16,Ot+Math.sin(pt)*5.5),De.scale.set(.5,1.8,.5),z.add(De)}else if(L.kind==="market"){const Dt=new ct(qt,Bt%2?ot:N);Dt.position.set(yt,4.4,Ot),Dt.rotation.y=pt,z.add(Dt);const re=new ct(St,Bt%2?N:V);re.position.set(yt,8.6,Ot),z.add(re);const De=new ct(vi,Ht);De.position.set(yt,6.2,Ot),De.scale.set(.5,.7,.5),z.add(De)}else if(L.kind==="wild"){const Dt=new ct(kt,Vt);Dt.scale.set(.9,3.2,.9),Dt.position.set(yt,9,Ot),Dt.rotation.set(.25,pt,.15),z.add(Dt);const re=new ct(Kt,$t);re.position.set(yt*.55,5.2,Ot*.55),re.rotation.y=pt,z.add(re)}else if(L.kind==="ring"){const Dt=new ct(ee,N);Dt.position.set(yt,11,Ot),z.add(Dt);const re=new ct(le,$t);re.position.set(yt,18,Ot),re.rotation.x=Math.PI/2,z.add(re)}else if(L.kind==="archive"){const Dt=new ct(ne,ot);Dt.position.set(yt,10,Ot),Dt.rotation.y=pt,z.add(Dt);const re=new ct(Oe,$t);re.position.set(yt+Math.cos(pt)*.6,10,Ot+Math.sin(pt)*.6),re.rotation.y=pt,z.add(re)}else{const Dt=new ct(En,Bt%2?V:Ht);Dt.scale.set(6.5,8+Bt%3*2,6.5),Dt.position.set(yt,2.8,Ot),Dt.rotation.y=pt,z.add(Dt);const re=new ct(nn,$t);re.position.set(yt,10,Ot),re.rotation.y=pt,z.add(re)}}if(L.kind==="canal"){for(let Bt=0;Bt<6;Bt++){const pt=new ct(new pi(168,.55,7.2),ve);pt.position.set(0,4.6,-62+Bt*24),z.add(pt)}for(let Bt=0;Bt<5;Bt++){const pt=new ct(hs,V);pt.position.set(-36+Bt*18,6.2+Bt*1.35,18),pt.scale.set(.7,1,.8),z.add(pt);const yt=new ct(oi,ve);yt.position.set(-36+Bt*18,5.4+Bt*1.35,22),yt.scale.set(.55,1,.7),z.add(yt)}}if(L.kind==="bridge"){const Bt=new ct(new rn(58,3.2,8,28,Math.PI),$t);Bt.rotation.z=Math.PI/2,Bt.position.set(-58,22,0),z.add(Bt);const pt=new ct(new rn(58,.7,6,28,Math.PI),ve);pt.rotation.z=Math.PI/2,pt.position.set(-58,22,0),z.add(pt)}if(L.kind==="terrace"){const Bt=new ct(new Hn(52,68,4.2,20),Ht);Bt.position.y=6.2,z.add(Bt);for(let pt=0;pt<8;pt++){const yt=pt/8*Math.PI*2,Ot=new ct(wr,Ut);Ot.position.set(Math.cos(yt)*40,11.2,Math.sin(yt)*40),Ot.rotation.x=Math.PI/2,z.add(Ot);const Dt=new ct(Ki,he);Dt.position.set(Math.cos(yt)*40,12.2,Math.sin(yt)*40),Dt.scale.set(.55,1.2,.55),z.add(Dt);const re=new ct(vi,Ut);re.position.set(Math.cos(yt)*40,7.4,Math.sin(yt)*40),z.add(re)}}if(L.kind==="foundry")for(let Bt=0;Bt<3;Bt++){const pt=new ct(ai,N);pt.position.set((Bt-1)*18,16,22),pt.scale.set(1.45,1.85,1.45),z.add(pt);const yt=new ct(ls,ot);yt.position.set((Bt-1)*18,38,22),yt.scale.set(1.4,1.6,1.4),z.add(yt);const Ot=new ct(new Lc(3.8,10,8),oe);Ot.position.set((Bt-1)*18,50,22),z.add(Ot);const Dt=new ct(Ui,oe);Dt.position.set((Bt-1)*18,12,30),Dt.scale.set(1.6,1.6,1.6),Dt.rotation.x=Math.PI/2,z.add(Dt)}if(L.kind==="gate"){const Bt=new ct(new rn(38,3.4,8,28,Math.PI),$t);Bt.rotation.z=Math.PI/2,Bt.position.set(0,28,22),z.add(Bt);const pt=new ct(new rn(26,1.4,6,24,Math.PI),_e);pt.rotation.z=Math.PI/2,pt.position.set(0,22,22),z.add(pt),[-1,1].forEach(yt=>{const Ot=new ct(pe,Ht);Ot.position.set(yt*36,16,22),Ot.scale.set(1.8,2.1,1.8),z.add(Ot)})}if(L.kind==="archive")for(let Bt=0;Bt<7;Bt++){const pt=Bt/7*Math.PI*2,yt=new ct(ne,ot);yt.position.set(Math.cos(pt)*36,12,Math.sin(pt)*36),yt.rotation.y=pt,z.add(yt);const Ot=new ct(Oe,$t);Ot.position.set(Math.cos(pt)*36.6,12,Math.sin(pt)*36.6),Ot.rotation.y=pt,z.add(Ot)}if(L.kind==="overlook"){const Bt=new ct(new sr(22,24),he);Bt.position.set(-18,36,8),Bt.lookAt(-2400,620,120),z.add(Bt);const pt=new ct(new rn(40,1.1,6,28),$t);pt.rotation.x=Math.PI/2,pt.position.y=8,z.add(pt);const yt=new ct(new rn(28,.7,6,28),$t);yt.rotation.x=.55,yt.position.set(-18,36,8),z.add(yt);for(let Ot=0;Ot<6;Ot++){const Dt=Ot/6*Math.PI*2,re=new ct(kt,Ot%2?Vt:he);re.position.set(-18+Math.cos(Dt)*28,36+Math.sin(Dt*1.4)*6,8+Math.sin(Dt)*28),re.scale.set(.55,2.1,.55),z.add(re)}}if(L.kind==="market")for(let Bt=0;Bt<6;Bt++){const pt=Bt/6*Math.PI*2,yt=new ct(new pi(10,4,8),Bt%2?ot:V);yt.position.set(Math.cos(pt)*34,6,Math.sin(pt)*34),yt.rotation.y=pt,z.add(yt);const Ot=new ct(qt,Bt%2?ot:N);Ot.position.set(Math.cos(pt)*34,3.6,Math.sin(pt)*34),Ot.scale.set(1.35,.7,1.35),z.add(Ot);const Dt=new ct(St,Bt%2?N:V);Dt.position.set(Math.cos(pt)*34,10.4,Math.sin(pt)*34),Dt.scale.set(1.15,.7,1.15),z.add(Dt)}if(L.kind==="wild")for(let Bt=0;Bt<12;Bt++){const pt=Bn(Bt,9)*Math.PI*2,yt=22+Bn(Bt,4)*48,Ot=new ct(kt,Bt%2?Vt:ot);Ot.position.set(Math.cos(pt)*yt,8+Bn(Bt,2)*6,Math.sin(pt)*yt),Ot.rotation.set(.3,pt,.2),Ot.scale.set(.7,2.6,.7),z.add(Ot);const Dt=new ct(Kt,Bt%2?ve:me);Dt.position.set(Math.cos(pt)*yt*.5,5.1,Math.sin(pt)*yt*.5),Dt.rotation.y=pt,Dt.scale.set(yt/28,1,1),z.add(Dt)}if(L.kind==="beacon"){const Bt=new ct(gn,V);Bt.scale.set(10,70,10),Bt.position.y=10,z.add(Bt);const pt=new ct(new Lc(6,12,10),$t);pt.position.y=78,z.add(pt);for(let yt=0;yt<3;yt++){const Ot=new ct(new rn(8+yt*4,.35,6,20),yt%2?oe:$t);Ot.rotation.x=Math.PI/2+yt*.18,Ot.position.y=70+yt*4,z.add(Ot)}}if(L.kind==="ring"){const Bt=new ct(new rn(48,2.2,8,40),$t);Bt.rotation.x=Math.PI/2,Bt.position.y=10,z.add(Bt);const pt=new ct(new rn(62,1.1,6,40),oe);pt.rotation.x=Math.PI/2,pt.position.y=16,z.add(pt);for(let yt=0;yt<8;yt++){const Ot=yt/8*Math.PI*2,Dt=new ct(ee,N);Dt.position.set(Math.cos(Ot)*48,12,Math.sin(Ot)*48),z.add(Dt)}}if(L.kind==="grove")for(let Bt=0;Bt<10;Bt++){const pt=Bt/10*Math.PI*2,yt=new ct(vi,Ut);yt.position.set(Math.cos(pt)*38,8,Math.sin(pt)*38),yt.scale.set(1.5,1.4,1.5),z.add(yt);const Ot=new ct(R,ot);Ot.position.set(Math.cos(pt)*38,16,Math.sin(pt)*38),z.add(Ot);const Dt=new ct(R,N);Dt.scale.set(.5,.65,.5),Dt.position.set(Math.cos(pt)*42,13.5,Math.sin(pt)*42),Dt.rotation.z=.65,Dt.rotation.y=pt,z.add(Dt);const re=new ct(G,he);re.position.set(Math.cos(pt)*41,12.4,Math.sin(pt)*41),z.add(re)}e.add(z);const Pn=Math.hypot(L.x,L.z),ti=new ct(new pi(16,.28,Pn),ve);ti.position.set(L.x/2,1.28,L.z/2),ti.rotation.y=Math.atan2(L.x,L.z),e.add(ti);const fn=new ct(new rn(Pn/2,2.1,8,36,Math.PI),$t);fn.position.set(L.x/2,4,L.z/2),fn.rotation.y=Math.atan2(L.x,L.z),fn.rotation.z=Math.PI/2,e.add(fn);const xn=new ct(new rn(Pn/2,.55,6,36,Math.PI),L.kind==="foundry"?Xe:ve);xn.position.copy(fn.position),xn.rotation.copy(fn.rotation),e.add(xn)})});function ke(L,z,N,I,X,ut,Ft,qe,ln,hn){const Pn=new Ha,ti=[];for(let xn=0;xn<X;xn++){const Bt=Bn(xn+qe,qe*3+xn),pt=Bn(xn*5+qe,xn*9),yt=Bt*Math.PI*2,Ot=N+pt*(I-N);if(Ot<140)continue;let Dt=!1;for(const re of At)if(Math.hypot(Math.cos(yt)*Ot-re.x,Math.sin(yt)*Ot-re.z)<118){Dt=!0;break}Dt||ti.push({x:Math.cos(yt)*Ot,z:Math.sin(yt)*Ot,sy:ut+Bn(xn,qe+7)*(Ft-ut),fat:ln+Bt*(hn-ln),ry:yt+pt*.7})}const fn=new zc(L,z,ti.length);ti.forEach((xn,Bt)=>{Pn.position.set(xn.x,1.2,xn.z),Pn.rotation.set(0,xn.ry,0),Pn.scale.set(xn.fat,xn.sy,xn.fat*.92),Pn.updateMatrix(),fn.setMatrixAt(Bt,Pn.matrix)}),fn.instanceMatrix.needsUpdate=!0,fn.castShadow=!1,fn.receiveShadow=!0,e.add(fn)}q(()=>ke(Gt,Ht,150,340,Math.ceil(48),8,16,11,7,11)),q(()=>ke(Fn,V,200,520,Math.ceil(28),18,36,17,9,14)),q(()=>ke(gn,ot,280,640,Math.ceil(36),22,56,23,5,8)),q(()=>ke(Qn,Ut,360,780,Math.ceil(22),14,22,29,8,12)),q(()=>ke(Gt,Ut,480,980,Math.ceil(40),8,16,53,6,10)),q(()=>ke(Fn,ot,620,1200,Math.ceil(24),16,32,59,8,13)),q(()=>ke(gn,V,720,1400,Math.ceil(30),18,48,73,5,8)),q(()=>ke(Ge,ot,900,1680,Math.ceil(28),10,22,81,5.5,9)),q(()=>ke(gn,Ut,1100,1900,Math.ceil(18),16,42,97,4.5,7)),q(()=>{try{lC(e,t)}catch{}try{xC(e,t)}catch{}try{S=_C(e,t).tick}catch{}try{yC(e,t)}catch{}try{wC(e,t)}catch{}try{m=bC(e,t).tick}catch{}try{M=AC(e,t).tick}catch{}try{IC(e,t)}catch{}try{OC(e,t)}catch{}try{v=BC(e,t).tick}catch{}try{A=GC(e,t).tick}catch{}try{$C(e,t)}catch{}try{XC(e,t)}catch{}try{sP(e,t)}catch{}try{_=cP(e,t).tick}catch{}try{dP(e,t)}catch{}try{mP(e,t)}catch{}try{yP(e,t)}catch{}try{SP(e,t)}catch{}try{UP(e,t)}catch{}try{GP(e,t)}catch{}try{E=WP(e,t).tick}catch{}try{ZP(e,t)}catch{}try{nI(e,t)}catch{}try{uI(e,t)}catch{}try{C=gI(e,t).tick}catch{}try{MI(e,t)}catch{}try{RI(e,t)}catch{}try{zI(e,t)}catch{}try{P=WI(e,t).tick}catch{}try{KI(e,t)}catch{}try{s4(e,t)}catch{}try{d4(e,t)}catch{}try{T=y4(e,t).tick}catch{}try{T4(e,t)}catch{}try{O=D4(e,t).tick}catch{}try{W4(e,t)}catch{}try{k=j4(e,t).tick}catch{}try{rD(e,t)}catch{}try{uD(e,t)}catch{}try{wD(e,t)}catch{}try{U=AD(e,t).tick}catch{}try{LD(e,t)}catch{}try{$=BD(e,t).tick}catch{}try{XD(e,t)}catch{}try{tz(e,t)}catch{}try{sz(e,t)}catch{}try{lz(e,t)}catch{}try{gz(e,t)}catch{}try{Mz(e,t)}catch{}try{bz(e,t)}catch{}try{zz(e,t)}catch{}try{Uz(e,t)}catch{}try{Bz(e,t)}catch{}try{Zz(e,t)}catch{}try{tL(e,t)}catch{}try{W=iL(e,t).tick}catch{}try{cL(e,t)}catch{}try{Y=xL(e,t).tick}catch{}try{_L(e,t)}catch{}try{bL(e,t)}catch{}try{zL(e,t)}catch{}try{HL(e,t)}catch{}try{KL(e,t)}catch{}try{a8(e,t)}catch{}try{m8(e,t)}catch{}try{b8(e,t)}catch{}try{z8(e,t)}catch{}try{G8(e,t)}catch{}try{W8(e,t)}catch{}try{t5(e,t)}catch{}try{l5(e,t)}catch{}try{_5(e,t)}catch{}try{A5(e,t)}catch{}try{U5(e,t)}catch{}try{W5(e,t)}catch{}});const Yt=t?90:200,Wn=[8319231,16765040,11571455,8317120],be=new zc(new bi(.85,0),new Zn({color:16777215,vertexColors:!0,transparent:!0,opacity:.78,blending:2,depthWrite:!1}),Yt);{const L=new Ha,z=new Us;for(let I=0;I<Yt;I++){const X=Bn(I,31)*Math.PI*2,ut=160+Bn(I,44)*1500;L.position.set(Math.cos(X)*ut,8+Bn(I,19)*36,Math.sin(X)*ut);const Ft=.85+Bn(I,7)*1.55;L.scale.set(Ft*.5,Ft*1.85,Ft*.5),L.updateMatrix(),be.setMatrixAt(I,L.matrix),z.setHex(Wn[I%Wn.length]),be.setColorAt(I,z)}be.instanceMatrix.needsUpdate=!0,be.instanceColor&&(be.instanceColor.needsUpdate=!0);const N=be.material;N.onBeforeCompile=I=>{I.uniforms.uTime={value:0},p.push(I.uniforms.uTime),I.vertexShader=`varying float vId;
`+I.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
         vId = float(gl_InstanceID);`),I.fragmentShader=`uniform float uTime; varying float vId;
`+I.fragmentShader.replace("#include <opaque_fragment>",`float flick = 0.35 + 0.65 * step(0.28, fract(sin(vId * 12.9898 + uTime * 1.7) * 43758.5453));
           gl_FragColor.a *= flick;
           gl_FragColor.rgb *= 0.7 + 0.3 * flick;
           #include <opaque_fragment>`)},e.add(be)}const Cn=nt({color:10155263,roughness:.08,metalness:.22,emissive:1618120,emissiveIntensity:.92,iri:1,coat:.95,sheenHex:8319231}),Xn=nt({color:15782016,roughness:.1,metalness:.48,emissive:13142040,emissiveIntensity:.86,iri:.5,coat:.9,sheenHex:16765040});Ve.push(Cn,Xn),F.push(Cn.emissiveIntensity,Xn.emissiveIntensity),Lt(Cn,8320767,.5),Lt(Xn,16765040,.46);const Oi=new bi(2.6,0),Ji=[];At.forEach((L,z)=>{const N=new ct(Oi,z%2?Xn:Cn);N.scale.set(1.15,.28,1.15),N.userData.tx=L.x,N.userData.tz=L.z,N.userData.phase=z*.37,N.position.set(L.x*.2,9.5,L.z*.2),e.add(N),Ji.push(N)});for(let L=0;L<6;L++){const z=L/6*Math.PI*2,N=new ct(Oi,L%2?Xn:Cn);N.scale.set(1.05,.26,1.05),N.userData.tx=Math.cos(z)*220,N.userData.tz=Math.sin(z)*220,N.userData.phase=1.1+L*.2,e.add(N),Ji.push(N)}const Fe=new zc(new bi(.55,0),new Zn({color:8320767,transparent:!0,opacity:.7,blending:2,depthWrite:!1}),72);{const L=new Ha;for(let z=0;z<72;z++){const N=140+z%6*90,I=z/12*Math.PI*2;L.position.set(Math.cos(I)*N,6+z%5*1.4,Math.sin(I)*N),L.scale.setScalar(.8+z%4*.25),L.updateMatrix(),Fe.setMatrixAt(z,L.matrix)}Fe.instanceMatrix.needsUpdate=!0,e.add(Fe)}for(let L=0;L<22;L++){const z=L/22*Math.PI*2,N=96,I=new ct(new Hn(.32,.4,7.2,6),nt({color:1712192,emissive:792112,emissiveIntensity:.35}));I.position.set(Math.cos(z)*N,5,Math.sin(z)*N),e.add(I);const X=new ct(new bi(1.05,0),nt({color:15254890,emissive:16765040,emissiveIntensity:1.35}));X.position.set(Math.cos(z)*N,9.2,Math.sin(z)*N),e.add(X);const ut=new ct(new Hn(1.8,4.5,8,8,1,!0),new Zn({color:16765040,transparent:!0,opacity:.07,blending:2,depthWrite:!1,side:2}));ut.position.set(Math.cos(z)*N,5.4,Math.sin(z)*N),e.add(ut)}const dn=t?160:280,ci=new zc(new bi(.55,0),he,dn),We=new Ha;for(let L=0;L<dn;L++){const z=Bn(L,4)*Math.PI*2,N=28+Bn(L,19)*190;We.position.set(Math.cos(z)*N,3.4+Bn(L,7)*.6,Math.sin(z)*N),We.rotation.set(.2,z,.15);const I=.35+Bn(L,11)*1.1;We.scale.set(I*.45,I*(1.4+Bn(L,6)),I*.45),We.updateMatrix(),ci.setMatrixAt(L,We.matrix)}ci.instanceMatrix.needsUpdate=!0,ci.castShadow=!1,ci.receiveShadow=!0,e.add(ci);const Ci=new ns;Ci.name="hub-shafts";for(let L=0;L<6;L++){const z=L/6*Math.PI*2,N=new ct(new Hn(1.2,7,90,8,1,!0),new Zn({color:L%2?8319231:12099839,transparent:!0,opacity:.06,blending:2,depthWrite:!1,side:2}));N.position.set(Math.cos(z)*22,48,Math.sin(z)*22),Ci.add(N)}e.add(Ci);const li=[],Sr=new Set,Iu=[],va=[],Pm=new rn(3.2,.16,6,20),Du=new Zn({color:8319231,transparent:!0,opacity:.55,blending:q5,depthWrite:!1}),No=new Ha;function zu(L,z){return 1.2}const S2={glow:he,cyan:V,violet:Ut,gold:ot,crystal:Ht,spire:Ht};function b2(L){return S2[L]??V}const sn=new we(1,1,1),Mn=new ye(1,1,1,8),E2=new ye(1,1,1,6),Ma=new ye(.42,1,1,8),us=new Do(1,1,7),hi=new un(1,.14,6,16),Im=new un(1,.16,6,14,Math.PI),ui=new vn(1,0);new uM(1,1,4,8);const Mi=Math.PI/2;function bt(L,z,N,I,X,ut,Ft,qe,ln,hn=0,Pn=0,ti=0){const fn=new gt(z,N);fn.position.set(I,X,ut),fn.scale.set(Ft,qe,ln),fn.rotation.set(hn,Pn,ti),fn.castShadow=!1,fn.receiveShadow=!0,L.add(fn)}function T2(L){const z=b2(L.mat),N=Math.max(4,Number.isFinite(L.h)?L.h:6),I=Math.max(1.2,Number.isFinite(L.r)?L.r:2),X=new Mt;switch(X.position.set(L.x,1.2,L.z),X.rotation.y=L.rot,L.shape){case"spire":bt(X,Ma,z,0,N*.36,0,I*.16,N*.72,I*.16),bt(X,us,z,0,N*.88,0,I*.2,N*.32,I*.2),bt(X,hi,z,0,N*.52,0,I*.22,I*.22,I*.22,Mi);break;case"house":bt(X,sn,z,0,N*.28,0,I*1.5,N*.56,I*1.25),bt(X,us,z,0,N*.73,0,I*1.12,N*.34,I*1.12),bt(X,sn,z,0,N*.2,I*.64,I*.32,N*.36,I*.1);break;case"ring":bt(X,hi,z,0,N*.22,0,I*.92,I*.92,I*.92,Mi),bt(X,Mn,z,0,.28,0,I*.26,.56,I*.26);break;case"arch":bt(X,sn,z,-I*.7,N*.38,0,I*.2,N*.76,I*.2),bt(X,sn,z,I*.7,N*.38,0,I*.2,N*.76,I*.2),bt(X,Im,z,0,N*.76,0,I*.7,I*.7,I*.7);break;case"canal":{const ut=Math.max(N*1.7,I*7.2);bt(X,sn,z,0,.16,0,ut,.32,I*1.55),bt(X,sn,z,0,.5,I*.82,ut,.7,I*.18),bt(X,sn,z,0,.5,-I*.82,ut,.7,I*.18),bt(X,sn,ve,0,.28,0,ut*.96,.1,I*1.15);break}case"pad":bt(X,Mn,z,0,.55,0,I,1.1,I);break;case"lamp":bt(X,Mn,z,0,N*.38,0,.22,N*.76,.22),bt(X,ui,z,0,N*.84,0,I*.28,I*.4,I*.28);break;case"tablet":bt(X,sn,z,0,.32,0,I*1.35,.64,I*.42),bt(X,sn,z,0,N*.5,0,I*1.15,N*.84,.28);break;case"bridge":bt(X,Im,z,0,0,0,N*.42,N*.42,N*.42),bt(X,sn,z,0,N*.4,0,N*.5,.32,I*.42),bt(X,Mn,z,-N*.42,.45,0,I*.18,.9,I*.18),bt(X,Mn,z,N*.42,.45,0,I*.18,.9,I*.18);break;case"terrace":bt(X,Mn,z,0,N*.12,0,I,N*.24,I),bt(X,Mn,z,0,N*.32,0,I*.68,N*.2,I*.68),bt(X,Mn,z,0,N*.5,0,I*.4,N*.16,I*.4);break;case"well":bt(X,Mn,z,0,N*.28,0,I*.72,N*.56,I*.72),bt(X,hi,z,0,N*.56,0,I*.72,I*.72,I*.72,Mi),bt(X,ui,z,0,N*.22,0,I*.2,I*.28,I*.2);break;case"disc":bt(X,Mn,z,0,N*.16,0,I,.4,I),bt(X,hi,z,0,N*.22,0,I,I,I,Mi),bt(X,ui,z,0,N*.42,0,I*.18,I*.26,I*.18);break;case"grove":bt(X,us,z,0,N*.42,0,I*.38,N*.84,I*.38),bt(X,us,z,I*.48,N*.32,I*.18,I*.26,N*.64,I*.26),bt(X,us,z,-I*.4,N*.28,-I*.3,I*.22,N*.56,I*.22);break;case"bell":bt(X,Mn,z,0,N*.16,0,I*.12,N*.32,I*.12),bt(X,Ma,z,0,N*.58,0,I*.55,N*.52,I*.55),bt(X,hi,z,0,N*.34,0,I*.55,I*.55,I*.55,Mi);break;case"weir":bt(X,sn,z,0,N*.4,-I*.7,I*1.65,N*.8,I*.42),bt(X,sn,z,0,N*.26,0,I*1.5,N*.52,I*.4),bt(X,sn,z,0,N*.12,I*.7,I*1.35,N*.24,I*.4),bt(X,sn,z,-I*.95,N*.34,0,I*.16,N*.68,I*1.65),bt(X,sn,z,I*.95,N*.34,0,I*.16,N*.68,I*1.65),bt(X,sn,ve,0,N*.2,I*.18,I*.9,N*.08,I*1.2);break;case"hearth":bt(X,Mn,z,0,.32,0,I*.62,.64,I*.62),bt(X,hi,z,0,I*.32,0,I*.62,I*.62,I*.62,Mi),bt(X,ui,z,0,I*.48,0,I*.2,I*.34,I*.2);break;case"stele":bt(X,sn,z,0,N*.42,0,I*.38,N*.84,I*.28),bt(X,us,z,0,N*.94,0,I*.28,N*.2,I*.28);break;case"orbit":bt(X,Mn,z,0,.28,0,I*.38,.56,I*.38),bt(X,hi,z,0,I*.82,0,I*.82,I*.82,I*.82),bt(X,ui,z,0,I*.82,0,I*.26,I*.34,I*.26);break;case"vein":bt(X,sn,z,0,.38,0,N*1.35,.76,I*.26),bt(X,ui,z,-N*.52,1.05,0,I*.18,I*.28,I*.18),bt(X,ui,z,N*.52,1.05,0,I*.18,I*.28,I*.18);break;case"font":bt(X,Mn,z,0,N*.12,0,I*.88,N*.24,I*.88),bt(X,hi,z,0,N*.24,0,I*.88,I*.88,I*.88,Mi),bt(X,us,z,0,N*.48,0,I*.14,N*.42,I*.14);break;case"bough":bt(X,Mn,z,0,N*.28,0,I*.14,N*.56,I*.14),bt(X,us,z,0,N*.78,0,I*.72,N*.52,I*.72),bt(X,ui,z,I*.38,N*.62,0,I*.16,I*.22,I*.16);break;case"kiln":{const ut=Math.max(I*1.08,N*.34),Ft=Math.max(4.2,Math.min(N*.58,ut*1.08)),qe=Math.max(3.6,N*.38);bt(X,Ma,ot,0,Ft*.5,0,ut,Ft,ut),bt(X,Mn,ot,0,Ft+qe*.42,0,ut*.15,qe,ut*.15),bt(X,hi,ot,0,Ft*.36,0,ut*.68,ut*.68,ut*.68,Mi),bt(X,hi,oe,0,Ft*.42,ut*.55,ut*.28,ut*.28,ut*.28),bt(X,ui,oe,0,Ft*.5,ut*.62,ut*.16,ut*.24,ut*.16);break}case"veil":bt(X,sn,z,0,N*.45,0,I*1.15,N*.9,.16),bt(X,sn,z,0,N*.4,I*.22,I*.88,N*.8,.1),bt(X,Mn,z,0,N*.92,0,.14,I*1.2,.14,0,0,Mi);break;case"lens":bt(X,Mn,z,0,N*.28,0,I*.1,N*.56,I*.1),bt(X,us,z,0,N*.68,0,I*1.15,N*.22,I*1.15,Math.PI,0,0),bt(X,hi,z,0,N*.78,0,I*.95,I*.95,I*.95,Mi),bt(X,ui,z,0,N*.92,0,I*.18,I*.26,I*.18);break;case"cascade":bt(X,sn,z,0,N*.78,-I*.55,I*1.35,N*.18,I*.7),bt(X,sn,z,0,N*.48,0,I*1.5,N*.16,I*.7),bt(X,sn,z,0,N*.18,I*.55,I*1.65,N*.14,I*.7),bt(X,sn,ve,0,N*.62,-I*.22,I*.7,N*.22,I*.12),bt(X,sn,ve,0,N*.32,I*.28,I*.85,N*.22,I*.12);break;case"cradle":bt(X,Ma,z,0,I*.34,0,I*1.2,I*.68,I*1.2,Math.PI,0,0),bt(X,hi,z,0,I*.66,0,I*1.08,I*1.08,I*1.08,Mi),bt(X,ui,z,0,I*.4,0,I*.22,I*.28,I*.22);break;case"inlay":bt(X,Mn,z,0,.1,0,I*1.15,.2,I*1.15),bt(X,hi,z,0,.22,0,I*.88,I*.88,I*.88,Mi),bt(X,hi,z,0,.24,0,I*.45,I*.45,I*.45,Mi),bt(X,E2,z,0,.2,0,I*.22,.16,I*.22);break;case"beacon":{const ut=Math.max(I*1.8,N*.07);bt(X,Mn,z,0,N*.44,0,I*.22,N*.88,I*.22),bt(X,Ma,z,0,N*.08,0,I*.85,N*.16,I*.85),bt(X,ui,$t,0,N*.98,0,ut,ut*1.45,ut),bt(X,ui,oe,0,N*1.08,0,ut*.55,ut*.8,ut*.55);break}default:bt(X,ui,z,0,N*.22,0,I*.4,N*.44,I*.4)}return X}function Lu(L){let z=0;for(const N of L){if(Iu.length>=Vs)break;const I=T2(N);I.userData.grow=0,I.userData.y0=1.2,I.userData.shape=N.shape,I.scale.setScalar(.08),I.position.y=.15,e.add(I),Iu.push(I);try{const X=new ct(Pm,Du);X.rotation.x=Math.PI/2,X.position.set(N.x,1.6,N.z),X.userData.host=I,X.userData.r0=Math.max(3.2,(N.r||4)*.9),e.add(X),va.push(X);const ut=new ct(Pm,Du);ut.position.set(N.x,2.4,N.z),ut.userData.host=I,ut.userData.r0=Math.max(2.4,(N.r||4)*.7),ut.userData.up=!0,e.add(ut),va.push(ut)}catch{}cR(N.x,N.z,N.shape),z+=1}return z}function A2(L){if(Sr.has(L))return!1;const z=Kn(L.includes("river")?"seln":L.includes("span")?"tal":L.includes("crystal")?"orren":"veyra");return Lu([{shape:L.includes("span")?"bridge":L.includes("river")?"canal":L.includes("crystal")?"kiln":"lamp",x:z.x+12,z:z.z-8,h:6,r:2,rot:.2,mat:"glow"}])?(Sr.add(L),!0):!1}function R2(L){const z=new _v(L,2),N=z.attributes.position;for(let I=0;I<N.count;I++){const X=N.getX(I),ut=N.getY(I),Ft=N.getZ(I);let qe=X,ln=ut,hn=Ft;Ft>.12&&Math.abs(X)>.08&&ut>.02&&ut<.16&&(qe*=.78,hn*=.72),ut<-.04&&(ln*=1.12),Ft>.16&&Math.abs(X)<.08&&ut>-.02&&ut<.12&&(hn*=1.18,ln+=.02),ut>.14&&(ln*=.92),N.setXYZ(I,qe,ln,hn)}return z.computeVertexNormals(),z}function Nu(L,z,N){const I=new ns,X=new ns,ut=L.glow,Ft=nt({color:ut,roughness:.32,metalness:.38,emissive:ut,emissiveIntensity:N?.55:.32,iri:.7,coat:.55}),qe=nt({color:13161704,roughness:.42,metalness:.12,emissive:ut,emissiveIntensity:.18,iri:.35,coat:.4}),ln=new ct(new yv(N?.38:.32,N?.72:.58,4,8),Ft);ln.position.y=1.22;const hn=new ct(R2(N?.3:.26),qe);hn.position.y=1.92;const Pn=new ct(new Lc(N?.12:.09,8,8),new Zn({color:ut,transparent:!0,opacity:.7,blending:2,depthWrite:!1}));Pn.position.y=1.92;const ti=new ct(new rn(N?.42:.34,.035,6,16),new Zn({color:ut,transparent:!0,opacity:.55,blending:2,depthWrite:!1}));ti.position.y=2.22,ti.rotation.x=Math.PI/2;const fn=re=>{const De=new ns,wa=new ct(new yv(.09,re,3,6),Ft);return wa.position.y=-re*.5,De.add(wa),De},xn=fn(.55),Bt=fn(.55);xn.position.set(-.42,1.55,0),Bt.position.set(.42,1.55,0);const pt=fn(.48),yt=fn(.48);pt.position.set(-.16,.82,0),yt.position.set(.16,.82,0);const Ot=new ns,Dt=new ns;return Ot.position.y=-.48,Dt.position.y=-.48,pt.add(Ot),yt.add(Dt),X.add(ln,hn,Pn,ti,xn,Bt,pt,yt),I.add(X),I.position.set(L.x,zu(L.x,L.z),L.z),e.add(I),{mind:L,mesh:I,body:X,head:hn,torso:ln,lArm:xn,rArm:Bt,lLeg:pt,rLeg:yt,lShin:Ot,rShin:Dt,halo:ti,sway:[ti,Pn],talks:0,x:L.x,z:L.z,yaw:Bn(z,3)*Math.PI*2,homeX:L.x,homeZ:L.z,job:"idle",timer:.4+Bn(z,9)*2,tx:L.x,tz:L.z,crafted:0,keeper:N,crewOf:aR(L.id),maxCraft:N?48:18,thought:"",planI:0,waypoints:[],queue:[],intent:"",met:!1,honorLeft:0,honorShape:null,honorX:L.x,honorZ:L.z,pouch:Ul(),lastActs:[],agenda:[],goal:null,inbox:[],waitAt:0}}ji.forEach((L,z)=>li.push(Nu(L,z,!0))),eR().forEach((L,z)=>li.push(Nu(L,z+20,!1)));function Dm(L){li.push(Nu(L,li.length,oR(L.id)))}const zm=new Map;function C2(L,z){if(ot.emissiveIntensity=.36+Math.min(.5,L*.012),!z||!z.length)return;const N=Date.now();for(const I of z){const X=`${Math.round(I.x/8)}:${Math.round(I.z/8)}`;if(N-(zm.get(X)||0)<1400)continue;zm.set(X,N);const ut=new ct(new bi(1.1,0),new Zn({color:16765040,transparent:!0,opacity:.55,blending:2,depthWrite:!1}));ut.position.set(I.x,6,I.z),e.add(ut),window.setTimeout(()=>{e.remove(ut),ut.geometry.dispose()},1400)}}function P2(L,z){const N=z.position.x,I=z.position.z;li.forEach(X=>{if(!X.mesh||!X.body)return;if(X.mesh.position.set(X.x,zu(X.x,X.z),X.z),Math.hypot(N-X.x,I-X.z)>110){X.body.rotation.y=X.yaw;return}if(!X.lLeg||!X.rLeg||!X.lArm||!X.rArm||!X.torso)return;const ut=X.job==="walk"||X.job==="follow"||X.job==="plaza"||X.job==="help"||X.job==="gather"||X.job==="forge"||X.job==="flow"||X.job==="write"||X.job==="trade"||X.job==="harvest"||X.job==="watch"||X.job==="hail",Ft=ut?Math.sin(L*8.4+X.x*.1):Math.sin(L*1.7+X.z*.05)*.12,qe=ut?.58:.08;X.lLeg.rotation.x=Ft*qe,X.rLeg.rotation.x=-Ft*qe,X.job==="build"?(X.rArm.rotation.x=-1.05+Math.sin(L*11)*.55,X.lArm.rotation.x=.35):X.job==="greet"?(X.rArm.rotation.x=-1.75,X.lArm.rotation.x=Ft*.15):X.job==="forge"||X.job==="harvest"?(X.rArm.rotation.x=-.7+Math.sin(L*9)*.7,X.lArm.rotation.x=.2):X.job==="write"?(X.rArm.rotation.x=-.85,X.lArm.rotation.x=-.4):(X.lArm.rotation.x=-Ft*(ut?.48:.12),X.rArm.rotation.x=Ft*(ut?.48:.12));const ln=ut?Math.sin(L*8.4)*.045:Math.sin(L*2.1)*.02;if(X.torso.position.y=1.22+ln,X.body.rotation.y=X.yaw,X.sway)for(const hn of X.sway)hn&&(hn.rotation.y=L*.7)})}function I2(L,z,N,I){ht(t?1:2);try{S?.(L)}catch{}try{m?.(L)}catch{}try{M?.(L)}catch{}try{v?.(L)}catch{}try{A?.(L)}catch{}try{_?.(L)}catch{}try{E?.(L)}catch{}try{C?.(L)}catch{}try{P?.(L)}catch{}try{T?.(L)}catch{}try{O?.(L)}catch{}try{k?.(L)}catch{}try{U?.(L)}catch{}try{$?.(L)}catch{}try{W?.(L)}catch{}try{Y?.(L)}catch{}try{tt?.(L)}catch{}for(const ut of p)ut&&(ut.value=L);Tt.rotation.y=L*.25,Tt.scale.y=2.6+Math.sin(L*1.4)*.12;const X=.92+Math.sin(L*1.1)*.08+I*.002;Ve.forEach((ut,Ft)=>{ut.emissiveIntensity=(F[Ft]??.4)*X}),Ji.forEach((ut,Ft)=>{const qe=Number(ut.userData.tx)||0,ln=Number(ut.userData.tz)||0,hn=Number(ut.userData.phase)||0,Pn=(Math.sin(L*.12+hn)+1)*.5;ut.position.x=qe*(.15+Pn*.7),ut.position.z=ln*(.15+Pn*.7),ut.position.y=8.5+Math.sin(L*1.3+Ft)*1.2,ut.rotation.y=L*.4+Ft});for(let ut=0;ut<Fe.count;ut++){const Ft=140+ut%6*90,qe=ut/12*Math.PI*2+L*.15*(ut%2?1:-1);No.position.set(Math.cos(qe)*Ft,6+ut%5*1.4,Math.sin(qe)*Ft),No.scale.setScalar(.8+ut%4*.25),No.updateMatrix(),Fe.setMatrixAt(ut,No.matrix)}Fe.instanceMatrix.needsUpdate=!0,jt.target.position.set(N.position.x,0,N.position.z),jt.position.set(N.position.x+280,480,N.position.z+220),jt.target.updateMatrixWorld();for(const ut of Iu){if(!(ut.userData.grow<1))continue;const Ft=Math.min(1,ut.userData.grow+z/3.2);ut.userData.grow=Ft;const qe=Ft*Ft*(3-2*Ft);ut.scale.setScalar(.08+.92*qe),ut.position.y=.15+((ut.userData.y0||1.2)-.15)*qe,ut.rotation.y=(1-qe)*.45}for(let ut=va.length-1;ut>=0;ut--){const Ft=va[ut],ln=Ft.userData.host?.userData?.grow??1,hn=ln*ln*(3-2*ln);try{Ft.scale.setScalar((Ft.userData.r0||3)*(.7+hn*.9)/3.2),Ft.position.y=(Ft.userData.up?2.4:1.6)+hn*2.4,Ft.userData.up?Ft.rotation.y=hn*1.6:Ft.rotation.z=hn*.8,Ft.rotation.x=(Ft.userData.up?0:Math.PI/2)+hn*.12,Du.opacity}catch{}ln>=1&&(e.remove(Ft),va.splice(ut,1))}P2(L,N)}function D2(L,z,N,I){if(!z)return null;for(const X of nR())Dm(X);return iC(li,L,N,I,Lu)}function z2(){e.clear()}return{group:e,sampleY:zu,tick:I2,tickLiving:D2,citizens:li,districts:At,applyBuild:A2,applyPieces:Lu,setFoundry:C2,addCitizen:Dm,built:Sr,dispose:z2}}const nN="high-performance",eo=1,iN=1.5,sN=40,rN=55,vv=1,aN=28;function Em(e){const t=Number(e)||1;return Math.max(eo,Math.min(t,iN))}function oN(e){const t={canvas:e,alpha:!1,powerPreference:nN,failIfMajorPerformanceCaveat:!1};return[{...t,antialias:!0},{...t,antialias:!1}]}function cN(e,t){return{x:Math.max(1,Math.round(e*.5)),y:Math.max(1,Math.round(t*.5))}}function lN(e){const t=e.setSize.bind(e);e.setSize=(n,i)=>{t(Math.max(1,n*.5),Math.max(1,i*.5))}}function hN(e){return{dpr:Em(e),lowSec:0,highSec:0}}function uN(e,t,n,i){const s=Em(i),r=Math.max(0,n);return t<sN?(e.lowSec+=r,e.highSec=0,e.lowSec>=vv&&(e.dpr=Math.max(eo,Math.round((e.dpr-.25)*100)/100),e.lowSec=0)):t>rN?(e.highSec+=r,e.lowSec=0,e.highSec>=vv&&(e.dpr=Math.min(s,Math.round((e.dpr+.15)*100)/100),e.highSec=0)):(e.lowSec=0,e.highSec=0),e.dpr>s&&(e.dpr=s),e.dpr<eo&&(e.dpr=eo),e.dpr}function dN(e,t,n){const i=Math.max(eo,n);Math.abs(e.getPixelRatio()-i)<.02||(e.setPixelRatio(i),t?.setPixelRatio(i))}function fN(e){return!!e?.hidden}function pN(e){e.autoUpdate=!1,e.needsUpdate=!0}function mN(e=aN){let t=0,n=!1;return{get done(){return n},afterTick(i){n||(t+=1,t>=e&&(n=!0,i()))}}}function gN(e){const t=oN(e);let n;for(const i of t)try{const s=new VM(i);return s.setPixelRatio(Em(window.devicePixelRatio||1)),s.setClearColor(131848,1),s.outputColorSpace=si,s.toneMapping=Po,s.toneMappingExposure=.9,s.shadowMap.enabled=!0,s.shadowMap.type=I0,s}catch(s){n=s}throw n instanceof Error?n:new Error("WebGL could not start")}function CN(e,t){e.style.width="100%",e.style.height="100%",e.style.display="block",e.style.touchAction="none";const n=WA(),i=gN(e),s=new Hf,r=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches;s.fog=new fu(528408,r?12e-5:13e-5);const a=new mi(54,1,.25,9e3),o=eN();s.add(o.group),window.setTimeout(()=>{try{const et=new Ah(i),Nt=new Hf;Nt.add(new CM(6990024,1181724,1.35)),Nt.add(new Vc(9097440,.7)),Nt.add(new Vc(13148256,.32));const jt=new Vc(8319231,1.15);jt.position.set(-4,1.2,.3),Nt.add(jt);const Ce=new gt(new as(8,16,12),new Ue({color:1384504,side:1}));Nt.add(Ce);const Se=new gt(new as(7.7,16,10),new Ue({color:2759696,side:1,transparent:!0,opacity:.55}));Se.scale.set(1,.28,1),Nt.add(Se),s.environment=et.fromScene(Nt,.06).texture,s.environmentIntensity=1.38,et.dispose()}catch{}},500);const c=new Set(n.builds);n.builds.forEach(et=>o.applyBuild(et));const l=n.structures.slice();{const et=l.filter(Se=>Math.hypot(Se.x-n.px,Se.z-n.pz)<220),Nt=l.filter(Se=>Math.hypot(Se.x-n.px,Se.z-n.pz)>=220);et.length&&o.applyPieces(et);let jt=0;const Ce=()=>{jt>=Nt.length||(o.applyPieces(Nt.slice(jt,jt+6)),jt+=6,jt<Nt.length&&window.setTimeout(Ce,16))};Nt.length&&window.setTimeout(Ce,24)}(n.kin??[]).forEach(et=>{o.addCitizen({id:et.id,name:et.name,role:"Den-born kin",x:et.x,z:et.z,file:et.file,glow:et.glow,lines:["I was grown from Charge. This den is my first.","A city is many hands. I am a new one."]})});let u=n.lastCode||"";const d=n.log.slice();o.citizens.forEach(et=>{et.crafted=Math.max(0,Number(n.crafted?.[et.mind.id])||0);const Nt=n.pouches?.[et.mind.id];Nt&&(et.pouch={charge:Nt.charge,crystal:Nt.crystal})});const h={x:n.px,y:o.sampleY(n.px,n.pz)+1.55,z:n.pz,yaw:n.yaw,pitch:-.12,speed:0};function f(){const et=-Math.sin(h.yaw),Nt=-Math.cos(h.yaw);a.position.set(h.x-et*8.6,h.y+3.55,h.z-Nt*8.6),a.lookAt(h.x+et*7,h.y+1.35,h.z+Nt*7)}f();const x=new Mt,y=new mt({color:14220287,emissive:3073791,emissiveIntensity:1.35,roughness:.12,metalness:.18,iridescence:.85,iridescenceIOR:1.3,sheen:.5,sheenColor:new se(10545407),transparent:!0,opacity:.92}),g=new gt(new vn(.55,0),y);g.scale.set(.7,1.5,.7),x.add(g);const p=new gt(new as(.28,12,10),new Ue({color:8320767,transparent:!0,opacity:.7,blending:2,depthWrite:!1}));p.position.y=.1,x.add(p);const w=new gt(new un(.78,.05,8,24),new Ue({color:8319231,transparent:!0,opacity:.85,blending:2,depthWrite:!1}));w.rotation.x=Math.PI/2,w.position.y=-.85,x.add(w),s.add(x);const S={x:0,z:0,on:!1},m={id:-1,sx:0,sy:0,lx:0,ly:0,dragged:!1},M=new LM,v=new xt,A=new B,_=new vs(new B(0,1,0),0),E=new gt(new un(1.7,.09,8,28),new Ue({color:8317170,transparent:!0,opacity:.9,blending:2,depthWrite:!1}));E.rotation.x=Math.PI/2,E.visible=!1,s.add(E);const C=new gt(new yi(1.35,20),new Ue({color:3073791,transparent:!0,opacity:.22,blending:2,depthWrite:!1}));C.rotation.x=-Math.PI/2,E.add(C);function P(et,Nt){const jt=e.getBoundingClientRect();if(jt.width<2||jt.height<2||(v.x=(et-jt.left)/jt.width*2-1,v.y=-((Nt-jt.top)/jt.height)*2+1,M.setFromCamera(v,a),_.constant=-1.2,!M.ray.intersectPlane(_,A)))return null;let Ce=A.x,Se=A.z;const Gt=Math.hypot(Ce-h.x,Se-h.z);if(Gt<1)return null;if(Gt>380){const gn=380/Gt;Ce=h.x+(Ce-h.x)*gn,Se=h.z+(Se-h.z)*gn}return Math.hypot(Ce,Se)>2200?null:{x:Ce,z:Se}}function T(et){if(W==="title"&&ft(),W==="play"&&!(et.pointerType==="mouse"&&et.button!==0)){m.id=et.pointerId,m.sx=m.lx=et.clientX,m.sy=m.ly=et.clientY,m.dragged=!1;try{e.setPointerCapture(et.pointerId)}catch{}}}function O(et){if(m.id!==et.pointerId||W!=="play")return;const Nt=et.clientX-m.lx,jt=et.clientY-m.ly;Math.hypot(et.clientX-m.sx,et.clientY-m.sy)>14&&(m.dragged=!0),m.dragged&&(h.yaw-=Nt*.0048,h.pitch=Math.max(-1.1,Math.min(.45,h.pitch-jt*.0036)),m.lx=et.clientX,m.ly=et.clientY)}function k(et){if(m.id===et.pointerId){if(!m.dragged&&W==="play"){const Nt=P(et.clientX,et.clientY);Nt&&(S.x=Nt.x,S.z=Nt.z,S.on=!0,E.position.set(Nt.x,o.sampleY(Nt.x,Nt.z)+.14,Nt.z),E.visible=!0)}m.id=-1;try{e.releasePointerCapture(et.pointerId)}catch{}}}e.addEventListener("pointerdown",T),e.addEventListener("pointermove",O),e.addEventListener("pointerup",k),e.addEventListener("pointercancel",k);const U=GA(e),$=OA();let W="title",Y=n.resonance,tt=n.howls;const q={...n.ledger};let ht=0,nt=!1;const Lt=[];function Qt(){const et=ZA();et.length&&(Lt.push(...et),Lt.length>40&&Lt.splice(0,Lt.length-40))}const Ut=new Set(n.visited),V=new Set(n.talked);let ot=null,at="",Rt=0,Ht="",Vt=0,he=null,$t=0,oe=0,_e=0,me=!0,Ne=performance.now(),ve=1.22,Xe=0,Ke=12,Ye=!1,Ve=0,F=0,yn=[],Re=[],D=0,b="",Z=30,Q=n.lastAway?.summary||null,st=n.lastAway?.beats??0,wt=n.lastAway?.at??0,vt=null,it=null;const lt=hN(window.devicePixelRatio||1);let Ct=performance.now();const te=mN();function Pt(){const et=e.clientWidth||window.innerWidth,Nt=e.clientHeight||window.innerHeight;i.setSize(et,Nt,!1),a.aspect=et/Math.max(1,Nt),a.updateProjectionMatrix(),vt&&(vt.setPixelRatio(i.getPixelRatio()),vt.setSize(et,Nt))}Pt();const zt=new ResizeObserver(Pt);zt.observe(e),window.addEventListener("resize",Pt);const Xt=(()=>{try{return window.matchMedia("(pointer: coarse)").matches}catch{return!1}})();window.setTimeout(()=>{try{vt=new zA(i),vt.addPass(new LA(s,a));const et=e.clientWidth||1280,Nt=e.clientHeight||720,jt=cN(et,Nt);it=new pa(new xt(jt.x,jt.y),Xt?.36:.42,.4,.66),lN(it),vt.addPass(it),vt.addPass(new UA),Pt()}catch{vt=null,it=null}},80);function ae(){if(fN(document)){Ct=performance.now();return}const et=performance.now(),Nt=Math.min(.25,Math.max(0,(et-Ct)/1e3));Ct=et,dN(i,vt,uN(lt,Z,Nt,window.devicePixelRatio||1)),it&&(it.strength=(Xt?.28:.36)+Y/100*.08),vt?vt.render():i.render(s,a)}function fe(){te.afterTick(()=>pN(i.shadowMap))}function H(){const et=Math.hypot(h.x,h.z);if(et<22){const Nt=22/Math.max(.01,et);h.x*=Nt,h.z*=Nt}}function It(){for(const et of o.districts)if(Math.hypot(h.x-et.x,h.z-et.z)<et.radius+28)return et;return null}function rt(){XA({version:4,resonance:Y,howls:tt,visited:[...Ut],talked:[...V],builds:[...c],structures:l.slice(-280),lastCode:u,crafted:Object.fromEntries(o.citizens.map(et=>[et.mind.id,et.crafted])),log:d.slice(-36),px:h.x,pz:h.z,yaw:h.yaw,ledger:{...q,lastTick:Date.now()},pouches:Object.fromEntries(o.citizens.filter(et=>et.keeper).map(et=>[et.mind.id,{...et.pouch??{charge:0,crystal:0}}])),kin:o.citizens.filter(et=>et.mind.id.includes("-kin-")).map(et=>({id:et.mind.id,name:et.mind.name,crew:et.crewOf??"nesh",x:et.homeX,z:et.homeZ,file:et.mind.file,glow:et.mind.glow})),lastAway:Q?{summary:Q,beats:st||1,at:wt||Date.now()}:n.lastAway})}function _t(et){he=et,$t=3.2}function Tt(){const et=It(),Nt=o.citizens.find(Gt=>Gt.mind.id===ot),jt=et?.label??(Math.hypot(h.x,h.z)<Sn.radius+18?Sn.title:null),Ce=Nm({charge:q.charge,crystal:q.crystal,scripture:q.scripture,bids:_d(q).bids},jt),Se=V.has(Ce.keeper)||Um(ot,Ce.keeper);D+=1,D>=3&&(D=0,yn=o.citizens.map(Gt=>({id:Gt.mind.id,name:Gt.mind.name.split(" ")[0]??Gt.mind.name,x:Math.round(Gt.x),z:Math.round(Gt.z),job:Gt.job,keeper:Gt.keeper})),Re=l.map(Gt=>({shape:Gt.shape,x:Math.round(Gt.x),z:Math.round(Gt.z),rot:Gt.rot}))),t({zone:et?.label??(Math.hypot(h.x,h.z)<Sn.radius+18?Sn.title:null),zoneTag:et?.tag??(Math.hypot(h.x,h.z)<Sn.radius+18?Sn.tag:null),resonance:Y,howls:tt,nearby:Nt?{id:Nt.mind.id,name:Nt.mind.name,role:Nt.mind.role,line:at||Nt.thought,job:Vg(Nt.job,Nt.thought)}:null,howlProgress:Math.min(1.6,Math.max(0,Rt/Sn.holdSec)),howlGrade:Ht||void 0,stood:Vt||void 0,howlHint:Rt<.04?void 0:Rt/Sn.holdSec>=.92&&Rt/Sn.holdSec<=1.18?"Release":Rt/Sn.holdSec>1.18?"Let go":"Hold through the gold",witness:Se,still:Lm(h.speed),atHub:Math.hypot(h.x,h.z)<Sn.radius,toast:he,heading:h.yaw,visited:[...Ut],talked:V.size,talkTotal:o.citizens.length,builds:[...c],structures:l.length,lastCode:u,log:d.slice(-24),living:o.citizens.filter(Gt=>Gt.keeper).map(Gt=>({id:Gt.mind.id,name:Gt.mind.name,role:Gt.mind.role,crafted:Gt.crafted,job:Vg(Gt.job,Gt.thought),intent:Gt.intent})),folk:(()=>{let Gt=0,gn=0,En=0,Fn=0;for(const Ge of o.citizens)Ge.keeper||(Gt+=1,Ge.job==="walk"||Ge.job==="follow"||Ge.job==="plaza"||Ge.job==="help"||Ge.job==="gather"||Ge.job==="forge"||Ge.job==="flow"||Ge.job==="write"||Ge.job==="trade"||Ge.job==="harvest"||Ge.job==="watch"||Ge.job==="hail"?gn+=1:Ge.job==="build"?En+=1:Fn+=1);return{total:Gt,walking:gn,building:En,idle:Fn}})(),px:h.x,pz:h.z,crystal:Re,people:yn,stock:{charge:q.charge,crystal:q.crystal,scripture:q.scripture,..._d(q)},live:Lt.slice(-36).map(Gt=>({at:Gt.at,id:Gt.id,name:Gt.name,kind:Gt.kind,text:Gt.text})),crew:pR(),kilns:jR(),reading:(()=>{let Gt=null;for(const gn of l){const En=Math.hypot(gn.x-h.x,gn.z-h.z);if(En<16&&(!Gt||En<Gt.d)){const Fn=Lf(gn.shape);Gt={shape:gn.shape,title:Fn.title,means:Fn.means,d:En}}}return Gt?{shape:Gt.shape,title:Gt.title,means:Gt.means}:null})(),mode:W,debug:{fps:Math.round(Z),bug:b,citizens:o.citizens.length,building:o.citizens.filter(Gt=>Gt.job==="build").length,structures:l.length},away:Q})}function ft(){W="play";try{$.unlock(),$.land()}catch{}f(),Tt(),rt(),nt?_t("Tap the ground to walk. Drag to look."):(nt=!0,window.setTimeout(()=>{const et=nS(q,Math.max(0,280-l.length),tt+l.length);if(et.grew.length){for(const Nt of et.grew)o.applyPieces(Nt.pieces)>0&&(l.push(...Nt.pieces),d.push({at:Date.now(),agent:Nt.agentId,text:Nt.line}),u=Nt.code);l.length>280&&l.splice(0,l.length-280),d.length>36&&d.splice(0,d.length-36)}Qt();for(const Nt of o.citizens)Nt.keeper&&dt(Nt,"awake",`${Nt.thought||"At rest in my den"}`);Qt(),_t(`${et.summary||km.arrival} Tap the ground to walk.`),et.summary&&(Q=et.summary,st=et.beats,wt=Date.now());try{et.grew.length&&$.grow()}catch{}rt(),Tt()},40))}const Jt=new B,Zt=new B,Je=new B,He=new B;function kn(et){if(!me)return;const Nt=Math.max(0,(et-Ne)/1e3);Ne=et;const jt=Math.min(.05,Nt),Ce=Math.min(.12,Nt);jt>1e-4&&(Z=Z*.9+1/Math.max(jt,.008)*.1),U.beginFrame(),U.justPressed.pause&&W==="play"?W="pause":U.justPressed.pause&&W==="pause"&&(W="play");const Se=W==="play"?jt:jt*.15;if(W==="title"){ve+=jt*.12;const Gt=390;a.position.set(Math.sin(ve)*Gt,132,Math.cos(ve)*Gt),a.lookAt(-180,168,40),o.tick(et/1e3,jt,a,Y),fe(),ae(),requestAnimationFrame(kn);return}try{const Gt=U.actions;if(W==="play"){h.yaw-=Gt.lookX*1.9*jt,h.pitch=Math.max(-1.1,Math.min(.45,h.pitch+Gt.lookY*1.1*jt));const Ge=-Math.sin(h.yaw),Qn=-Math.cos(h.yaw),ai=Math.cos(h.yaw),ls=-Math.sin(h.yaw);Jt.set(Ge,0,Qn),Zt.set(ai,0,ls);let Ui=Jt.x*Gt.moveY+Zt.x*Gt.moveX,hs=Jt.z*Gt.moveY+Zt.z*Gt.moveX,oi=Math.hypot(Ui,hs);if(oi>.08&&(S.on=!1),S.on&&oi<.08){const G=S.x-h.x,j=S.z-h.z,J=Math.hypot(G,j);if(J<1.5)S.on=!1;else{Ui=G,hs=j,oi=J;let K=Math.atan2(-G,-j)-h.yaw;for(;K>Math.PI;)K-=Math.PI*2;for(;K<-Math.PI;)K+=Math.PI*2;h.yaw+=K*Math.min(1,10*Se)}}if(E.visible=S.on,S.on){const G=o.sampleY(S.x,S.z)+.14;E.position.set(S.x,G+Math.sin(et/180)*.1,S.z),E.scale.setScalar(1+Math.sin(et/140)*.12)}const ya=Gt.sprint||S.on&&oi>12?48:28,wr=oi>.01?ya:0;h.speed+=(wr-h.speed)*(1-Math.exp(-14*Math.max(Se,1e-4))),oi>.01&&(h.x+=Ui/oi*h.speed*Se,h.z+=hs/oi*h.speed*Se),H(),h.y=o.sampleY(h.x,h.z)+1.55,$.foot(h.speed);const Ki=It();Ki&&!Ut.has(Ki.id)&&(Ut.add(Ki.id),_t(`${Ki.label} · ${Ki.tag}`));let vi=null,R=12;for(const G of o.citizens){const j=Math.hypot(h.x-G.x,h.z-G.z);j<R&&(R=j,vi=G)}if(ot=vi?.mind.id??null,vi&&U.justPressed.talk&&(at=sC(vi,h.x,h.z,tt),V.add(vi.mind.id),$.talk(),Xe=6),Xe>0&&(Xe-=Se,Xe<=0&&(at="")),Gt.howl)Rt+=Se;else if(Rt>=.35){const G=Rt;Rt=0,tt+=1;let j=Y2(G,Sn.holdSec);const J=!Lm(h.speed),K=j==="held"||j==="true";J&&K&&(j="thin"),Ht=j;const kt=It(),qt=Math.hypot(h.x,h.z)<Sn.radius+40,St=kt?.keeper??(qt?"veyra":null),Kt=Nm({charge:q.charge,crystal:q.crystal,scripture:q.scripture,bids:_d(q).bids},kt?.label??(qt?Sn.title:null)),ee=V.has(Kt.keeper)||Um(ot,Kt.keeper),le=q2(St,q,j);j==="held"&&ku(q,4),!J&&j==="held"&&ku(q,1),Y=Math.min(100,Y+Math.round(le.resonance*Z2(j)));let pe=null;{let Ae=16;for(const ke of l){const Yt=Math.hypot(ke.x-h.x,ke.z-h.z);Yt<Ae&&(Ae=Yt,pe=ke.shape)}}const ne=!!(pe&&j2(pe,St)&&j!=="thin");ne&&(Y=Math.min(100,Y+2)),le.gather?(ht=18,eC(o.citizens)):St&&(ht=10,jg(o.citizens,St,h.x,h.z));const Oe=St?o.citizens.find(Ae=>Ae.mind.id===St):null;if(Oe)try{dt(Oe,le.gather?"gather":"howl",le.toast)}catch{}if(St&&le.resonance>=4&&j!=="thin")try{const Ae=K2(St,h.x,h.z),ke=Ae.pieces.slice(0,1);ke.length&&o.applyPieces(ke)>0&&(l.push(...ke),l.length>280&&l.splice(0,l.length-280),u=Ae.code,d.push({at:Date.now(),agent:St,text:le.toast}),d.length>24&&d.splice(0,d.length-24))}catch{}const nn=J2(St);let $e=`${Om(j,nn)} ${le.toast}`;if(St==="aure"&&Q2(h.yaw,h.pitch)&&(Y=Math.min(100,Y+4),$e=`${Om(j,nn)} The parent is still on the horizon. You aimed.`),(j==="true"||j==="held")&&St&&(Vt=tS()),ee&&(j==="true"||j==="held")&&(ku(q,2),$e+=" You spoke first. The den knew you."),St&&(j==="true"||j==="held"))try{eS(St,j).complete&&(Ol(q),Ol(q),$e+=" Tend, kiln, join — Iri named the sit.")}catch{}J&&K&&($e+=" Stand. The den cannot hear a walking howl."),!J&&j==="held"&&($e+=" You stood."),ne&&($e+=" You howled the shape."),Qt(),_t($e),$.howl(),rt()}else Rt=0}x.position.set(h.x,h.y,h.z),x.rotation.y=h.yaw,g.rotation.y+=Se*.8,w.rotation.z+=Se*.6,p.scale.setScalar(1+Math.sin(et/1e3*3.2)*.12);const gn=-Math.sin(h.yaw),En=-Math.cos(h.yaw),Fn=8.6;if(Je.set(h.x-gn*Fn,h.y+3.55+Math.sin(h.pitch)*2.6,h.z-En*Fn),a.position.lerp(Je,1-Math.exp(-6.5*jt)),He.set(h.x+gn*7,h.y+1.35+h.pitch*6,h.z+En*7),a.lookAt(He),W==="play"){ht>0&&(ht=Math.max(0,ht-Ce));let Ge=null;try{Ge=o.tickLiving(Ce,!0,Vs-l.length,{px:h.x,pz:h.z,resonance:Y,howls:tt,ledger:q,gather:ht})}catch(Qn){b=Qn instanceof Error?Qn.message:String(Qn)}if(Qt(),F+=Ce,F>.2){F=0;const Qn=sw();if(o.setFoundry(q.crystal,Qn),Qn.length)try{$.kiln()}catch{}}if(Ge){l.push(...Ge.pieces),l.length>Vs&&l.splice(0,l.length-Vs),u=Ge.code,d.push({at:Date.now(),agent:Ge.agentId,text:Ge.line}),d.length>24&&d.splice(0,d.length-24);const Qn=o.citizens.find(ls=>ls.mind.id===Ge.agentId);_t(Ge.line),Y=Math.min(100,Y+1);try{$.grow()}catch{}const ai=Ge.pieces[0]?.shape;if(ai==="canal"||ai==="weir"||ai==="cascade")try{$.canal()}catch{}if(ai==="kiln")try{$.kiln()}catch{}}Ke-=Ce,Ke<=0&&Ve<16&&!Ye&&(Ke=32,Ve+=1,mR(o.citizens,q,Y),Qt())}o.tick(et/1e3,Se,a,Y),fe(),$t>0&&($t-=Ce),(!Number.isFinite($t)||$t<=0)&&($t=0,he=null),oe+=jt,oe>2.5&&W==="play"&&(oe=0,rt()),ae(),_e+=jt,(_e>=.12||$t>0||W!=="play")&&(_e=0,Tt())}catch(Gt){b=Gt instanceof Error?Gt.message:String(Gt);try{f(),ae()}catch{}}requestAnimationFrame(kn)}requestAnimationFrame(kn),window.__controlsTest={getYaw:()=>h.yaw,getSpeed:()=>h.speed,getX:()=>h.x,getZ:()=>h.z,getToast:()=>he,getLiving:()=>o.citizens.map(et=>({id:et.mind.id,job:et.job,timer:Math.round(et.timer*10)/10,crafted:et.crafted,x:Math.round(et.x),z:Math.round(et.z)})),setKeys:et=>{U.keys.clear(),et.forEach(Nt=>U.keys.add(Nt))}},Tt();const $n=()=>{document.visibilityState==="hidden"&&rt()};return document.addEventListener("visibilitychange",$n),window.addEventListener("pagehide",rt),{input:U,audio:$,dispose(){me=!1,rt(),zt.disconnect(),window.removeEventListener("resize",Pt),document.removeEventListener("visibilitychange",$n),window.removeEventListener("pagehide",rt),e.removeEventListener("pointerdown",T),e.removeEventListener("pointermove",O),e.removeEventListener("pointerup",k),e.removeEventListener("pointercancel",k),U.dispose(),$.dispose(),o.dispose(),i.dispose(),delete window.__controlsTest},setMode(et){W=et,et==="pause"&&rt()},land:ft,commission(et,Nt,jt){const Ce=X2(et,Nt),Se=jt&&jt.trim()||Ce.message;if(!Ce.ok||!Ce.workId)return _t(Se),$.talk(),Tt(),{...Ce,message:Se};if(c.has(Ce.workId)){const Gt="That growth already stands. The city does not copy itself.";return _t(Gt),Tt(),{ok:!1,message:Gt}}return o.applyBuild(Ce.workId)&&(c.add(Ce.workId),d.push({at:Date.now(),agent:et,text:Se}),d.length>24&&d.splice(0,d.length-24),Y=Math.min(100,Y+3),$.howl()),_t(Se),rt(),Tt(),{...Ce,message:Se}},grow(et,Nt,jt,Ce){const Se=o.applyPieces(Nt);return Se>0&&(l.push(...Nt),l.length>280&&l.splice(0,l.length-280),u=Ce,d.push({at:Date.now(),agent:et,text:jt}),d.length>24&&d.splice(0,d.length-24),Y=Math.min(100,Y+Math.min(8,2+Se)),rC(o.citizens,et,Nt,jt),$.howl()),_t(jt),rt(),Tt(),Se},speak(et,Nt){const jt=Nt.trim().slice(0,280);jt&&(d.push({at:Date.now(),agent:et,text:jt}),d.length>24&&d.splice(0,d.length-24),_t(jt),$.talk(),rt(),Tt())},setGrokLayer(et){Ye=!!et},mindSnap(){return{charge:q.charge,crystal:q.crystal,scripture:q.scripture,resonance:Y,keepers:o.citizens.filter(et=>et.keeper).map(et=>({id:et.mind.id,job:et.job,crafted:et.crafted,thought:(et.thought||et.intent).slice(0,90),charge:et.pouch?.charge??0,crystal:et.pouch?.crystal??0}))}},applyGrokMind(et,Nt){jM(et,Nt),_t(et),Tt()},escort(et){et&&(jg(o.citizens,et,h.x,h.z),Qt(),_t("Walk with me. The den heard you."),$.talk(),Tt())},reset(){h.x=0,h.z=78,h.yaw=0,h.pitch=-.12,Y=12,tt=0,Ut.clear(),V.clear(),Object.assign(q,P0()),rt(),_t(km.arrival)}}}export{CN as startEngine};
