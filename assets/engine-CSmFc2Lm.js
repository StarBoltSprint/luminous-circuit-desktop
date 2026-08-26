import{c as Iw,a as Dw,C as Vs,d as Xp,M as zw,b as Lw,D as Ht,m as Nw,e as jn,K as _y,f as Ki,g as Ml,p as Uw,h as Ow,t as wl,r as gf,i as kw,q as no,s as Fw,j as Bw,k as Hw,l as yy,n as Ih,o as yu,u as vu,v as Gw,H as wn,w as Vw,x as $w,y as j0,z as J0,A as Q0,B as Ww,E as Mu,F as Xw,G as Yw,I as qw,J as Zw,L as tm,N as Kw,O as jw,P as Jw,Q as Qw,R as em}from"./index-D4YBetko.js";const Dh="185",vy=0,xf=1,My=2,Ya=1,Yp=2,ea=3,Es=0,Jn=1,ge=2,Xi=0,fr=1,pn=2,_f=3,yf=4,wy=5,ks=100,Sy=101,by=102,Ey=103,Ty=104,Ay=200,Ry=201,Cy=202,Py=203,Sl=204,bl=205,Iy=206,Dy=207,zy=208,Ly=209,Ny=210,Uy=211,Oy=212,ky=213,Fy=214,El=0,Tl=1,Al=2,xr=3,Rl=4,Cl=5,Pl=6,Il=7,qp=0,By=1,Hy=2,Yi=0,zh=1,Lh=2,Nh=3,Eo=4,Uh=5,Oh=6,kh=7,Zp=300,Xs=301,_r=302,Ic=303,Dc=304,To=306,Dl=1e3,rs=1001,zl=1002,Nn=1003,Gy=1004,Ga=1005,Gn=1006,zc=1007,Fs=1008,gi=1009,Kp=1010,jp=1011,la=1012,Fh=1013,qi=1014,Di=1015,xi=1016,Bh=1017,Hh=1018,ha=1020,Jp=35902,Qp=35899,t0=1021,e0=1022,zi=1023,os=1026,Bs=1027,Gh=1028,Vh=1029,Ys=1030,$h=1031,Wh=1033,qa=33776,Za=33777,Ka=33778,ja=33779,Ll=35840,Nl=35841,Ul=35842,Ol=35843,kl=36196,Fl=37492,Bl=37496,Hl=37488,Gl=37489,io=37490,Vl=37491,$l=37808,Wl=37809,Xl=37810,Yl=37811,ql=37812,Zl=37813,Kl=37814,jl=37815,Jl=37816,Ql=37817,th=37818,eh=37819,nh=37820,ih=37821,sh=36492,rh=36494,ah=36495,oh=36283,ch=36284,so=36285,lh=36286,Vy=3200,hh=0,$y=1,Ms="",si="srgb",ro="srgb-linear",ao="linear",Ze="srgb",rr=7680,vf=519,Wy=512,Xy=513,Yy=514,Xh=515,qy=516,Zy=517,Yh=518,Ky=519,uh=35044,Mf="300 es",Wi=2e3,ua=2001;function t2(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function oo(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function jy(){const e=oo("canvas");return e.style.display="block",e}const nm={};function co(...e){const t="THREE."+e.shift();console.log(t,...e)}function Jy(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function ue(...e){e=Jy(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function ze(...e){e=Jy(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function pr(...e){const t=e.join(" ");t in nm||(nm[t]=!0,ue(...e))}function e2(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const n2={[El]:Tl,[Al]:Pl,[Rl]:Il,[xr]:Cl,[Tl]:El,[Pl]:Al,[Il]:Rl,[Cl]:xr};class qs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=Math.PI/180,wf=180/Math.PI;function $s(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yn[e&255]+Yn[e>>8&255]+Yn[e>>16&255]+Yn[e>>24&255]+"-"+Yn[t&255]+Yn[t>>8&255]+"-"+Yn[t>>16&15|64]+Yn[t>>24&255]+"-"+Yn[n&63|128]+Yn[n>>8&255]+"-"+Yn[n>>16&255]+Yn[n>>24&255]+Yn[i&255]+Yn[i>>8&255]+Yn[i>>16&255]+Yn[i>>24&255]).toLowerCase()}function Ie(e,t,n){return Math.max(t,Math.min(n,e))}function i2(e,t){return(e%t+t)%t}function Su(e,t,n){return(1-n)*e+n*t}function ss(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qe(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ca;let gt=(ca=class{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Ie(this.x,t.x,n.x),this.y=Ie(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Ie(this.x,t,n),this.y=Ie(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ca.prototype.isVector2=!0,ca);class vr{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[o+0],f=r[o+1],x=r[o+2],y=r[o+3];if(d!==y||c!==h||l!==f||u!==x){let g=c*h+l*f+u*x+d*y;g<0&&(h=-h,f=-f,x=-x,y=-y,g=-g);let p=1-a;if(g<.9995){const w=Math.acos(g),S=Math.sin(w);p=Math.sin(p*w)/S,a=Math.sin(a*w)/S,c=c*p+h*a,l=l*p+f*a,u=u*p+x*a,d=d*p+y*a}else{c=c*p+h*a,l=l*p+f*a,u=u*p+x*a,d=d*p+y*a;const w=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=w,l*=w,u*=w,d*=w}}t[n]=c,t[n+1]=l,t[n+2]=u,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,o){const a=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[o],h=r[o+1],f=r[o+2],x=r[o+3];return t[n]=a*x+u*d+c*f-l*h,t[n+1]=c*x+u*h+l*d-a*f,t[n+2]=l*x+u*f+a*h-c*d,t[n+3]=u*x-a*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(s/2),d=a(r/2),h=c(i/2),f=c(s/2),x=c(r/2);switch(o){case"XYZ":this._x=h*u*d+l*f*x,this._y=l*f*d-h*u*x,this._z=l*u*x+h*f*d,this._w=l*u*d-h*f*x;break;case"YXZ":this._x=h*u*d+l*f*x,this._y=l*f*d-h*u*x,this._z=l*u*x-h*f*d,this._w=l*u*d+h*f*x;break;case"ZXY":this._x=h*u*d-l*f*x,this._y=l*f*d+h*u*x,this._z=l*u*x+h*f*d,this._w=l*u*d-h*f*x;break;case"ZYX":this._x=h*u*d-l*f*x,this._y=l*f*d+h*u*x,this._z=l*u*x-h*f*d,this._w=l*u*d+h*f*x;break;case"YZX":this._x=h*u*d+l*f*x,this._y=l*f*d+h*u*x,this._z=l*u*x-h*f*d,this._w=l*u*d-h*f*x;break;case"XZY":this._x=h*u*d-l*f*x,this._y=l*f*d-h*u*x,this._z=l*u*x+h*f*d,this._w=l*u*d+h*f*x;break;default:ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],c=n[9],l=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(i>a&&i>d){const f=2*Math.sqrt(1+i-a-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){const f=2*Math.sqrt(1+a-i-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-i*l,this._z=r*u+o*l+i*c-s*a,this._w=o*u-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let c=1-n;if(a<.9995){const l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+o*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const V0=class V0{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(im.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(im.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),u=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+c*l+o*d-a*u,this.y=i+c*u+a*l-r*d,this.z=s+c*d+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Ie(this.x,t.x,n.x),this.y=Ie(this.y,t.y,n.y),this.z=Ie(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Ie(this.x,t,n),this.y=Ie(this.y,t,n),this.z=Ie(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,c=n.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bu.copy(this).projectOnVector(t),this.sub(bu)}reflect(t){return this.sub(bu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};V0.prototype.isVector3=!0;let B=V0;const bu=new B,im=new vr,$0=class $0{constructor(t,n,i,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l)}set(t,n,i,s,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],x=i[8],y=s[0],g=s[3],p=s[6],w=s[1],S=s[4],m=s[7],M=s[2],v=s[5],A=s[8];return r[0]=o*y+a*w+c*M,r[3]=o*g+a*S+c*v,r[6]=o*p+a*m+c*A,r[1]=l*y+u*w+d*M,r[4]=l*g+u*S+d*v,r[7]=l*p+u*m+d*A,r[2]=h*y+f*w+x*M,r[5]=h*g+f*S+x*v,r[8]=h*p+f*m+x*A,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return n*o*u-n*a*l-i*r*u+i*a*c+s*r*l-s*o*c}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=u*o-a*l,h=a*c-u*r,f=l*r-o*c,x=n*d+i*h+s*f;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return t[0]=d*y,t[1]=(s*l-u*i)*y,t[2]=(a*i-s*o)*y,t[3]=h*y,t[4]=(u*n-s*c)*y,t[5]=(s*r-a*n)*y,t[6]=f*y,t[7]=(i*c-l*n)*y,t[8]=(o*n-i*r)*y,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+n,0,0,1),this}scale(t,n){return pr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eu.makeScale(t,n)),this}rotate(t){return pr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eu.makeRotation(-t)),this}translate(t,n){return pr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eu.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};$0.prototype.isMatrix3=!0;let me=$0;const Eu=new me,sm=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rm=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function s2(){const e={enabled:!0,workingColorSpace:ro,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ze&&(s.r=bs(s.r),s.g=bs(s.g),s.b=bs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ze&&(s.r=ra(s.r),s.g=ra(s.g),s.b=ra(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ms?ao:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return pr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return pr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[ro]:{primaries:t,whitePoint:i,transfer:ao,toXYZ:sm,fromXYZ:rm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:i,transfer:Ze,toXYZ:sm,fromXYZ:rm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),e}const Pe=s2();function bs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ra(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let br;class Qy{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{br===void 0&&(br=oo("canvas")),br.width=t.width,br.height=t.height;const s=br.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=br}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=oo("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:t.width,height:t.height}}else return ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let r2=0;class qh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r2++}),this.uuid=$s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tu(s[o].image)):r.push(Tu(s[o]))}else r=Tu(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function Tu(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Qy.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(ue("Texture: Unable to serialize Texture."),{})}let a2=0;const Au=new B;class On extends qs{constructor(t=On.DEFAULT_IMAGE,n=On.DEFAULT_MAPPING,i=rs,s=rs,r=Gn,o=Fs,a=zi,c=gi,l=On.DEFAULT_ANISOTROPY,u=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a2++}),this.uuid=$s(),this.name="",this.source=new qh(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Au).x}get height(){return this.source.getSize(Au).y}get depth(){return this.source.getSize(Au).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ue(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dl:t.x=t.x-Math.floor(t.x);break;case rs:t.x=t.x<0?0:1;break;case zl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dl:t.y=t.y-Math.floor(t.y);break;case rs:t.y=t.y<0?0:1;break;case zl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Zp;On.DEFAULT_ANISOTROPY=1;const W0=class W0{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],x=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(x+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(l+1)/2,m=(f+1)/2,M=(p+1)/2,v=(u+h)/4,A=(d+y)/4,_=(x+g)/4;return S>m&&S>M?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=v/i,r=A/i):m>M?m<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(m),i=v/s,r=_/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=A/r,s=_/r),this.set(i,s,r,n),this}let w=Math.sqrt((g-x)*(g-x)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(g-x)/w,this.y=(d-y)/w,this.z=(h-u)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Ie(this.x,t.x,n.x),this.y=Ie(this.y,t.y,n.y),this.z=Ie(this.z,t.z,n.z),this.w=Ie(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Ie(this.x,t,n),this.y=Ie(this.y,t,n),this.z=Ie(this.z,t,n),this.w=Ie(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ie(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};W0.prototype.isVector4=!0;let fn=W0;class tv extends qs{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new fn(0,0,t,n),this.scissorTest=!1,this.viewport=new fn(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:i.depth},r=new On(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const n={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new qh(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends tv{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class n0 extends On{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ev extends On{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ph=class Ph{constructor(t,n,i,s,r,o,a,c,l,u,d,h,f,x,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,c,l,u,d,h,f,x,y,g)}set(t,n,i,s,r,o,a,c,l,u,d,h,f,x,y,g){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=x,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ph().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinantAffine()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const n=this.elements,i=t.elements,s=1/Er.setFromMatrixColumn(t,0).length(),r=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=o*u,f=o*d,x=a*u,y=a*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=f+x*l,n[5]=h-y*l,n[9]=-a*c,n[2]=y-h*l,n[6]=x+f*l,n[10]=o*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,x=l*u,y=l*d;n[0]=h+y*a,n[4]=x*a-f,n[8]=o*l,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=f*a-x,n[6]=y+h*a,n[10]=o*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,x=l*u,y=l*d;n[0]=h-y*a,n[4]=-o*d,n[8]=x+f*a,n[1]=f+x*a,n[5]=o*u,n[9]=y-h*a,n[2]=-o*l,n[6]=a,n[10]=o*c}else if(t.order==="ZYX"){const h=o*u,f=o*d,x=a*u,y=a*d;n[0]=c*u,n[4]=x*l-f,n[8]=h*l+y,n[1]=c*d,n[5]=y*l+h,n[9]=f*l-x,n[2]=-l,n[6]=a*c,n[10]=o*c}else if(t.order==="YZX"){const h=o*c,f=o*l,x=a*c,y=a*l;n[0]=c*u,n[4]=y-h*d,n[8]=x*d+f,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-l*u,n[6]=f*d+x,n[10]=h-y*d}else if(t.order==="XZY"){const h=o*c,f=o*l,x=a*c,y=a*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=h*d+y,n[5]=o*u,n[9]=f*d-x,n[2]=x*d-f,n[6]=a*u,n[10]=y*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(o2,t,c2)}lookAt(t,n,i){const s=this.elements;return Mi.subVectors(t,n),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Rs.crossVectors(i,Mi),Rs.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Rs.crossVectors(i,Mi)),Rs.normalize(),Po.crossVectors(Mi,Rs),s[0]=Rs.x,s[4]=Po.x,s[8]=Mi.x,s[1]=Rs.y,s[5]=Po.y,s[9]=Mi.y,s[2]=Rs.z,s[6]=Po.z,s[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],x=i[2],y=i[6],g=i[10],p=i[14],w=i[3],S=i[7],m=i[11],M=i[15],v=s[0],A=s[4],_=s[8],E=s[12],C=s[1],P=s[5],T=s[9],O=s[13],k=s[2],U=s[6],$=s[10],W=s[14],Y=s[3],tt=s[7],q=s[11],ht=s[15];return r[0]=o*v+a*C+c*k+l*Y,r[4]=o*A+a*P+c*U+l*tt,r[8]=o*_+a*T+c*$+l*q,r[12]=o*E+a*O+c*W+l*ht,r[1]=u*v+d*C+h*k+f*Y,r[5]=u*A+d*P+h*U+f*tt,r[9]=u*_+d*T+h*$+f*q,r[13]=u*E+d*O+h*W+f*ht,r[2]=x*v+y*C+g*k+p*Y,r[6]=x*A+y*P+g*U+p*tt,r[10]=x*_+y*T+g*$+p*q,r[14]=x*E+y*O+g*W+p*ht,r[3]=w*v+S*C+m*k+M*Y,r[7]=w*A+S*P+m*U+M*tt,r[11]=w*_+S*T+m*$+M*q,r[15]=w*E+S*O+m*W+M*ht,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],x=t[3],y=t[7],g=t[11],p=t[15],w=c*f-l*h,S=a*f-l*d,m=a*h-c*d,M=o*f-l*u,v=o*h-c*u,A=o*d-a*u;return n*(y*w-g*S+p*m)-i*(x*w-g*M+p*v)+s*(x*S-y*M+p*A)-r*(x*m-y*v+g*A)}determinantAffine(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return n*(o*u-a*l)-i*(r*u-a*c)+s*(r*l-o*c)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],x=t[12],y=t[13],g=t[14],p=t[15],w=n*a-i*o,S=n*c-s*o,m=n*l-r*o,M=i*c-s*a,v=i*l-r*a,A=s*l-r*c,_=u*y-d*x,E=u*g-h*x,C=u*p-f*x,P=d*g-h*y,T=d*p-f*y,O=h*p-f*g,k=w*O-S*T+m*P+M*C-v*E+A*_;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return t[0]=(a*O-c*T+l*P)*U,t[1]=(s*T-i*O-r*P)*U,t[2]=(y*A-g*v+p*M)*U,t[3]=(h*v-d*A-f*M)*U,t[4]=(c*C-o*O-l*E)*U,t[5]=(n*O-s*C+r*E)*U,t[6]=(g*m-x*A-p*S)*U,t[7]=(u*A-h*m+f*S)*U,t[8]=(o*T-a*C+l*_)*U,t[9]=(i*C-n*T-r*_)*U,t[10]=(x*v-y*m+p*w)*U,t[11]=(d*m-u*v-f*w)*U,t[12]=(a*E-o*P-c*_)*U,t[13]=(n*P-i*E+s*_)*U,t[14]=(y*S-x*M-g*w)*U,t[15]=(u*M-d*S+h*w)*U,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+i,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,c=n._w,l=r+r,u=o+o,d=a+a,h=r*l,f=r*u,x=r*d,y=o*u,g=o*d,p=a*d,w=c*l,S=c*u,m=c*d,M=i.x,v=i.y,A=i.z;return s[0]=(1-(y+p))*M,s[1]=(f+m)*M,s[2]=(x-S)*M,s[3]=0,s[4]=(f-m)*v,s[5]=(1-(h+p))*v,s[6]=(g+w)*v,s[7]=0,s[8]=(x+S)*A,s[9]=(g-w)*A,s[10]=(1-(h+y))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Er.set(s[0],s[1],s[2]).length();const a=Er.set(s[4],s[5],s[6]).length(),c=Er.set(s[8],s[9],s[10]).length();r<0&&(o=-o),ki.copy(this);const l=1/o,u=1/a,d=1/c;return ki.elements[0]*=l,ki.elements[1]*=l,ki.elements[2]*=l,ki.elements[4]*=u,ki.elements[5]*=u,ki.elements[6]*=u,ki.elements[8]*=d,ki.elements[9]*=d,ki.elements[10]*=d,n.setFromRotationMatrix(ki),i.x=o,i.y=a,i.z=c,this}makePerspective(t,n,i,s,r,o,a=Wi,c=!1){const l=this.elements,u=2*r/(n-t),d=2*r/(i-s),h=(n+t)/(n-t),f=(i+s)/(i-s);let x,y;if(c)x=r/(o-r),y=o*r/(o-r);else if(a===Wi)x=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===ua)x=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=Wi,c=!1){const l=this.elements,u=2/(n-t),d=2/(i-s),h=-(n+t)/(n-t),f=-(i+s)/(i-s);let x,y;if(c)x=1/(o-r),y=o/(o-r);else if(a===Wi)x=-2/(o-r),y=-(o+r)/(o-r);else if(a===ua)x=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=x,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Ph.prototype.isMatrix4=!0;let tn=Ph;const Er=new B,ki=new tn,o2=new B(0,0,0),c2=new B(1,1,1),Rs=new B,Po=new B,Mi=new B,am=new tn,om=new vr;class Ts{constructor(t=0,n=0,i=0,s=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return am.makeRotationFromQuaternion(t),this.setFromRotationMatrix(am,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return om.setFromEuler(this),this.setFromQuaternion(om,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class Zh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let l2=0;const cm=new B,Tr=new vr,ds=new tn,Io=new B,Sa=new B,h2=new B,u2=new vr,lm=new B(1,0,0),hm=new B(0,1,0),um=new B(0,0,1),dm={type:"added"},d2={type:"removed"},Ar={type:"childadded",child:null},Ru={type:"childremoved",child:null};let re=class Lc extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l2++}),this.uuid=$s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Lc.DEFAULT_UP.clone();const t=new B,n=new Ts,i=new vr,s=new B(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tn},normalMatrix:{value:new me}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Lc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Lc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Tr.setFromAxisAngle(t,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(t,n){return Tr.setFromAxisAngle(t,n),this.quaternion.premultiply(Tr),this}rotateX(t){return this.rotateOnAxis(lm,t)}rotateY(t){return this.rotateOnAxis(hm,t)}rotateZ(t){return this.rotateOnAxis(um,t)}translateOnAxis(t,n){return cm.copy(t).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(lm,t)}translateY(t){return this.translateOnAxis(hm,t)}translateZ(t){return this.translateOnAxis(um,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Io.copy(t):Io.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(Sa,Io,this.up):ds.lookAt(Io,Sa,this.up),this.quaternion.setFromRotationMatrix(ds),s&&(ds.extractRotation(s.matrixWorld),Tr.setFromRotationMatrix(ds),this.quaternion.premultiply(Tr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(ze("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(dm),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):ze("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(d2),Ru.child=t,this.dispatchEvent(Ru),Ru.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ds.multiply(t.parent.matrixWorld)),t.applyMatrix4(ds),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(dm),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,t,h2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sa,u2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(n){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),x=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),x.length>0&&(i.nodes=x)}return i.object=s,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}};re.DEFAULT_UP=new B(0,1,0);re.DEFAULT_MATRIX_AUTO_UPDATE=!0;re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;let Tt=class extends re{constructor(){super(),this.isGroup=!0,this.type="Group"}};const f2={type:"move"};class Nc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const y of t.hand.values()){const g=n.getJointPose(y,i),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,x=.005;l.inputState.pinching&&h>f+x?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-x&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(f2)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new Tt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cs={h:0,s:0,l:0},Do={h:0,s:0,l:0};function Cu(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}let ie=class{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=Pe.workingColorSpace){return this.r=t,this.g=n,this.b=i,Pe.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=Pe.workingColorSpace){if(t=i2(t,1),n=Ie(n,0,1),i=Ie(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Cu(o,r,t+1/3),this.g=Cu(o,r,t),this.b=Cu(o,r,t-1/3)}return Pe.colorSpaceToWorking(this,s),this}setStyle(t,n=si){function i(r){r!==void 0&&parseFloat(r)<1&&ue("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:ue("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);ue("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=si){const i=nv[t.toLowerCase()];return i!==void 0?this.setHex(i,n):ue("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}copyLinearToSRGB(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Pe.workingToColorSpace(qn.copy(this),t),Math.round(Ie(qn.r*255,0,255))*65536+Math.round(Ie(qn.g*255,0,255))*256+Math.round(Ie(qn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Pe.workingColorSpace){Pe.workingToColorSpace(qn.copy(this),n);const i=qn.r,s=qn.g,r=qn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,n=Pe.workingColorSpace){return Pe.workingToColorSpace(qn.copy(this),n),t.r=qn.r,t.g=qn.g,t.b=qn.b,t}getStyle(t=si){Pe.workingToColorSpace(qn.copy(this),t);const n=qn.r,i=qn.g,s=qn.b;return t!==si?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(Cs),this.setHSL(Cs.h+t,Cs.s+n,Cs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(Cs),t.getHSL(Do);const i=Su(Cs.h,Do.h,n),s=Su(Cs.s,Do.s,n),r=Su(Cs.l,Do.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const qn=new ie;ie.NAMES=nv;class Kh{constructor(t,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new ie(t),this.density=n}clone(){return new Kh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sf extends re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ts,this.environmentIntensity=1,this.environmentRotation=new Ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fi=new B,fs=new B,Pu=new B,ps=new B,Rr=new B,Cr=new B,fm=new B,Iu=new B,Du=new B,zu=new B,Lu=new fn,Nu=new fn,Uu=new fn;class Ti{constructor(t=new B,n=new B,i=new B){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),Fi.subVectors(t,n),s.cross(Fi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){Fi.subVectors(s,n),fs.subVectors(i,n),Pu.subVectors(t,n);const o=Fi.dot(Fi),a=Fi.dot(fs),c=Fi.dot(Pu),l=fs.dot(fs),u=fs.dot(Pu),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-a*u)*h,x=(o*u-a*c)*h;return r.set(1-f-x,x,f)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ps)===null?!1:ps.x>=0&&ps.y>=0&&ps.x+ps.y<=1}static getInterpolation(t,n,i,s,r,o,a,c){return this.getBarycoord(t,n,i,s,ps)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ps.x),c.addScaledVector(o,ps.y),c.addScaledVector(a,ps.z),c)}static getInterpolatedAttribute(t,n,i,s,r,o){return Lu.setScalar(0),Nu.setScalar(0),Uu.setScalar(0),Lu.fromBufferAttribute(t,n),Nu.fromBufferAttribute(t,i),Uu.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Lu,r.x),o.addScaledVector(Nu,r.y),o.addScaledVector(Uu,r.z),o}static isFrontFacing(t,n,i,s){return Fi.subVectors(i,n),fs.subVectors(t,n),Fi.cross(fs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fi.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),Fi.cross(fs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ti.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return Ti.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let o,a;Rr.subVectors(s,i),Cr.subVectors(r,i),Iu.subVectors(t,i);const c=Rr.dot(Iu),l=Cr.dot(Iu);if(c<=0&&l<=0)return n.copy(i);Du.subVectors(t,s);const u=Rr.dot(Du),d=Cr.dot(Du);if(u>=0&&d<=u)return n.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),n.copy(i).addScaledVector(Rr,o);zu.subVectors(t,r);const f=Rr.dot(zu),x=Cr.dot(zu);if(x>=0&&f<=x)return n.copy(r);const y=f*l-c*x;if(y<=0&&l>=0&&x<=0)return a=l/(l-x),n.copy(i).addScaledVector(Cr,a);const g=u*x-f*d;if(g<=0&&d-u>=0&&f-x>=0)return fm.subVectors(r,s),a=(d-u)/(d-u+(f-x)),n.copy(s).addScaledVector(fm,a);const p=1/(g+y+h);return o=y*p,a=h*p,n.copy(i).addScaledVector(Rr,o).addScaledVector(Cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Zs{constructor(t=new B(1/0,1/0,1/0),n=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Bi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Bi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Bi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bi):Bi.fromBufferAttribute(r,o),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zo.copy(i.boundingBox)),zo.applyMatrix4(t.matrixWorld),this.union(zo)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ba),Lo.subVectors(this.max,ba),Pr.subVectors(t.a,ba),Ir.subVectors(t.b,ba),Dr.subVectors(t.c,ba),Ps.subVectors(Ir,Pr),Is.subVectors(Dr,Ir),Ks.subVectors(Pr,Dr);let n=[0,-Ps.z,Ps.y,0,-Is.z,Is.y,0,-Ks.z,Ks.y,Ps.z,0,-Ps.x,Is.z,0,-Is.x,Ks.z,0,-Ks.x,-Ps.y,Ps.x,0,-Is.y,Is.x,0,-Ks.y,Ks.x,0];return!Ou(n,Pr,Ir,Dr,Lo)||(n=[1,0,0,0,1,0,0,0,1],!Ou(n,Pr,Ir,Dr,Lo))?!1:(No.crossVectors(Ps,Is),n=[No.x,No.y,No.z],Ou(n,Pr,Ir,Dr,Lo))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ms),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ms=[new B,new B,new B,new B,new B,new B,new B,new B],Bi=new B,zo=new Zs,Pr=new B,Ir=new B,Dr=new B,Ps=new B,Is=new B,Ks=new B,ba=new B,Lo=new B,No=new B,js=new B;function Ou(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){js.fromArray(e,r);const a=s.x*Math.abs(js.x)+s.y*Math.abs(js.y)+s.z*Math.abs(js.z),c=t.dot(js),l=n.dot(js),u=i.dot(js);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Mn=new B,Uo=new gt;let p2=0;class _i extends qs{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:p2++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=uh,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Uo.fromBufferAttribute(this,n),Uo.applyMatrix3(t),this.setXY(n,Uo.x,Uo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix3(t),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyMatrix4(t),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.applyNormalMatrix(t),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Mn.fromBufferAttribute(this,n),Mn.transformDirection(t),this.setXYZ(n,Mn.x,Mn.y,Mn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=ss(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Qe(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=ss(n,this.array)),n}setX(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=ss(n,this.array)),n}setY(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=ss(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=ss(n,this.array)),n}setW(t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uh&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class i0 extends _i{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class s0 extends _i{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class Le extends _i{constructor(t,n,i){super(new Float32Array(t),n,i)}}const m2=new Zs,Ea=new B,ku=new B;class ma{constructor(t=new B,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):m2.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ea.subVectors(t,this.center);const n=Ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ea,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ku.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ea.copy(t.center).add(ku)),this.expandByPoint(Ea.copy(t.center).sub(ku))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let g2=0;const Pi=new tn,Fu=new re,zr=new B,wi=new Zs,Ta=new Zs,In=new B;class bn extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:g2++}),this.uuid=$s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(t2(t)?s0:i0)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new me().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,n,i){return Pi.makeTranslation(t,n,i),this.applyMatrix4(Pi),this}scale(t,n,i){return Pi.makeScale(t,n,i),this.applyMatrix4(Pi),this}lookAt(t){return Fu.lookAt(t),Fu.updateMatrix(),this.applyMatrix4(Fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Le(i,3))}else{const i=Math.min(t.length,n.count);for(let s=0;s<i;s++){const r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];wi.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,wi.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,wi.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(wi.min),this.boundingBox.expandByPoint(wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(wi.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Ta.setFromBufferAttribute(a),this.morphTargetsRelative?(In.addVectors(wi.min,Ta.min),wi.expandByPoint(In),In.addVectors(wi.max,Ta.max),wi.expandByPoint(In)):(wi.expandByPoint(Ta.min),wi.expandByPoint(Ta.max))}wi.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)In.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(In));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)In.fromBufferAttribute(a,l),c&&(zr.fromBufferAttribute(t,l),In.add(zr)),s=Math.max(s,i.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new _i(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],c=[];for(let _=0;_<i.count;_++)a[_]=new B,c[_]=new B;const l=new B,u=new B,d=new B,h=new gt,f=new gt,x=new gt,y=new B,g=new B;function p(_,E,C){l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,C),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,E),x.fromBufferAttribute(r,C),u.sub(l),d.sub(l),f.sub(h),x.sub(h);const P=1/(f.x*x.y-x.x*f.y);isFinite(P)&&(y.copy(u).multiplyScalar(x.y).addScaledVector(d,-f.y).multiplyScalar(P),g.copy(d).multiplyScalar(f.x).addScaledVector(u,-x.x).multiplyScalar(P),a[_].add(y),a[E].add(y),a[C].add(y),c[_].add(g),c[E].add(g),c[C].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let _=0,E=w.length;_<E;++_){const C=w[_],P=C.start,T=C.count;for(let O=P,k=P+T;O<k;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new B,m=new B,M=new B,v=new B;function A(_){M.fromBufferAttribute(s,_),v.copy(M);const E=a[_];S.copy(E),S.sub(M.multiplyScalar(M.dot(E))).normalize(),m.crossVectors(v,E);const P=m.dot(c[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,P)}for(let _=0,E=w.length;_<E;++_){const C=w[_],P=C.start,T=C.count;for(let O=P,k=P+T;O<k;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new _i(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new B,r=new B,o=new B,a=new B,c=new B,l=new B,u=new B,d=new B;if(t)for(let h=0,f=t.count;h<f;h+=3){const x=t.getX(h+0),y=t.getX(h+1),g=t.getX(h+2);s.fromBufferAttribute(n,x),r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,g),a.add(u),c.add(u),l.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(g,l.x,l.y,l.z)}else for(let h=0,f=n.count;h<f;h+=3)s.fromBufferAttribute(n,h+0),r.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)In.fromBufferAttribute(t,n),In.normalize(),t.setXYZ(n,In.x,In.y,In.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u);let f=0,x=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*u;for(let p=0;p<u;p++)h[x++]=l[f++]}return new _i(h,u,d)}if(this.index===null)return ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bn,i=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,i);n.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(n))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class iv{constructor(t,n){this.isInterleavedBuffer=!0,this.array=t,this.stride=n,this.count=t!==void 0?t.length/n:0,this.usage=uh,this.updateRanges=[],this.version=0,this.uuid=$s()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,n,i){t*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=n.array[i+s];return this}set(t,n=0){return this.array.set(t,n),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$s()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$s()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ei=new B;class lo{constructor(t,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let n=0,i=this.data.count;n<i;n++)ei.fromBufferAttribute(this,n),ei.applyMatrix4(t),this.setXYZ(n,ei.x,ei.y,ei.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)ei.fromBufferAttribute(this,n),ei.applyNormalMatrix(t),this.setXYZ(n,ei.x,ei.y,ei.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)ei.fromBufferAttribute(this,n),ei.transformDirection(t),this.setXYZ(n,ei.x,ei.y,ei.z);return this}getComponent(t,n){let i=this.array[t*this.data.stride+this.offset+n];return this.normalized&&(i=ss(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[t*this.data.stride+this.offset+n]=i,this}setX(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset]=n,this}setY(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+1]=n,this}setZ(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+2]=n,this}setW(t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[t*this.data.stride+this.offset+3]=n,this}getX(t){let n=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(n=ss(n,this.array)),n}getY(t){let n=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(n=ss(n,this.array)),n}getZ(t){let n=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(n=ss(n,this.array)),n}getW(t){let n=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(n=ss(n,this.array)),n}setXY(t,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this}setXYZ(t,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),s=Qe(s,this.array),r=Qe(r,this.array)),this.data.array[t+0]=n,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new _i(new this.array.constructor(n),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new lo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let x2=0;class Mr extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x2++}),this.uuid=$s(),this.name="",this.type="Material",this.blending=fr,this.side=Es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sl,this.blendDst=bl,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){ue(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fr&&(i.blending=this.blending),this.side!==Es&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sl&&(i.blendSrc=this.blendSrc),this.blendDst!==bl&&(i.blendDst=this.blendDst),this.blendEquation!==ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(n){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,n){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ie().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=n[t.map]||null),t.matcap!==void 0&&(this.matcap=n[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=n[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=n[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=n[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new gt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=n[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=n[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=n[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=n[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=n[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=n[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=n[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=n[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=n[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=n[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=n[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=n[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=n[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=n[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=n[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=n[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class r0 extends Mr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ie(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Lr;const Aa=new B,Nr=new B,Ur=new B,Or=new gt,Ra=new gt,sv=new tn,Oo=new B,Ca=new B,ko=new B,pm=new gt,Bu=new gt,mm=new gt;class rv extends re{constructor(t=new r0){if(super(),this.isSprite=!0,this.type="Sprite",Lr===void 0){Lr=new bn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new iv(n,5);Lr.setIndex([0,1,2,0,2,3]),Lr.setAttribute("position",new lo(i,3,0,!1)),Lr.setAttribute("uv",new lo(i,2,3,!1))}this.geometry=Lr,this.material=t,this.center=new gt(.5,.5),this.count=1}raycast(t,n){t.camera===null&&ze('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Nr.setFromMatrixScale(this.matrixWorld),sv.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Nr.multiplyScalar(-Ur.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;Fo(Oo.set(-.5,-.5,0),Ur,o,Nr,s,r),Fo(Ca.set(.5,-.5,0),Ur,o,Nr,s,r),Fo(ko.set(.5,.5,0),Ur,o,Nr,s,r),pm.set(0,0),Bu.set(1,0),mm.set(1,1);let a=t.ray.intersectTriangle(Oo,Ca,ko,!1,Aa);if(a===null&&(Fo(Ca.set(-.5,.5,0),Ur,o,Nr,s,r),Bu.set(0,1),a=t.ray.intersectTriangle(Oo,ko,Ca,!1,Aa),a===null))return;const c=t.ray.origin.distanceTo(Aa);c<t.near||c>t.far||n.push({distance:c,point:Aa.clone(),uv:Ti.getInterpolation(Aa,Oo,Ca,ko,pm,Bu,mm,new gt),face:null,object:this})}copy(t,n){return super.copy(t,n),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fo(e,t,n,i,s,r){Or.subVectors(e,n).addScalar(.5).multiply(i),s!==void 0?(Ra.x=r*Or.x-s*Or.y,Ra.y=s*Or.x+r*Or.y):Ra.copy(Or),e.copy(t),e.x+=Ra.x,e.y+=Ra.y,e.applyMatrix4(sv)}const gs=new B,Hu=new B,Bo=new B,Ds=new B,Gu=new B,Ho=new B,Vu=new B;class a0{constructor(t=new B,n=new B(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gs)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=gs.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(gs.copy(this.origin).addScaledVector(this.direction,n),gs.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Hu.copy(t).add(n).multiplyScalar(.5),Bo.copy(n).sub(t).normalize(),Ds.copy(this.origin).sub(Hu);const r=t.distanceTo(n)*.5,o=-this.direction.dot(Bo),a=Ds.dot(this.direction),c=-Ds.dot(Bo),l=Ds.lengthSq(),u=Math.abs(1-o*o);let d,h,f,x;if(u>0)if(d=o*c-a,h=o*a-c,x=r*u,d>=0)if(h>=-x)if(h<=x){const y=1/u;d*=y,h*=y,f=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;else h<=-x?(d=Math.max(0,-(-o*r+a)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=x?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(o*r+a)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=o>0?-r:r,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Hu).addScaledVector(Bo,h),f}intersectSphere(t,n){gs.subVectors(t.center,this.origin);const i=gs.dot(this.direction),s=gs.dot(gs)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,gs)!==null}intersectTriangle(t,n,i,s,r){Gu.subVectors(n,t),Ho.subVectors(i,t),Vu.crossVectors(Gu,Ho);let o=this.direction.dot(Vu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ds.subVectors(this.origin,t);const c=a*this.direction.dot(Ho.crossVectors(Ds,Ho));if(c<0)return null;const l=a*this.direction.dot(Gu.cross(Ds));if(l<0||c+l>o)return null;const u=-a*Ds.dot(Vu);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}let Ue=class extends Mr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.combine=qp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};const gm=new tn,Js=new a0,Go=new ma,xm=new B,Vo=new B,$o=new B,Wo=new B,$u=new B,Xo=new B,_m=new B,Yo=new B;let mt=class extends re{constructor(t=new bn,n=new Ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Xo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],d=r[c];u!==0&&($u.fromBufferAttribute(d,t),o?Xo.addScaledVector($u,u):Xo.addScaledVector($u.sub(n),u))}n.add(Xo)}return n}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Go.copy(i.boundingSphere),Go.applyMatrix4(r),Js.copy(t.ray).recast(t.near),!(Go.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Go,xm)===null||Js.origin.distanceToSquared(xm)>(t.far-t.near)**2))&&(gm.copy(r).invert(),Js.copy(t.ray).applyMatrix4(gm),!(i.boundingBox!==null&&Js.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Js)))}_computeIntersections(t,n,i){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const g=h[x],p=o[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let m=w,M=S;m<M;m+=3){const v=a.getX(m),A=a.getX(m+1),_=a.getX(m+2);s=qo(this,p,t,i,l,u,d,v,A,_),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const x=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=x,p=y;g<p;g+=3){const w=a.getX(g),S=a.getX(g+1),m=a.getX(g+2);s=qo(this,o,t,i,l,u,d,w,S,m),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,y=h.length;x<y;x++){const g=h[x],p=o[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let m=w,M=S;m<M;m+=3){const v=m,A=m+1,_=m+2;s=qo(this,p,t,i,l,u,d,v,A,_),s&&(s.faceIndex=Math.floor(m/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{const x=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let g=x,p=y;g<p;g+=3){const w=g,S=g+1,m=g+2;s=qo(this,o,t,i,l,u,d,w,S,m),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function _2(e,t,n,i,s,r,o,a){let c;if(t.side===Jn?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Es,a),c===null)return null;Yo.copy(a),Yo.applyMatrix4(e.matrixWorld);const l=n.ray.origin.distanceTo(Yo);return l<n.near||l>n.far?null:{distance:l,point:Yo.clone(),object:e}}function qo(e,t,n,i,s,r,o,a,c,l){e.getVertexPosition(a,Vo),e.getVertexPosition(c,$o),e.getVertexPosition(l,Wo);const u=_2(e,t,n,i,Vo,$o,Wo,_m);if(u){const d=new B;Ti.getBarycoord(_m,Vo,$o,Wo,d),s&&(u.uv=Ti.getInterpolatedAttribute(s,a,c,l,d,new gt)),r&&(u.uv1=Ti.getInterpolatedAttribute(r,a,c,l,d,new gt)),o&&(u.normal=Ti.getInterpolatedAttribute(o,a,c,l,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:c,c:l,normal:new B,materialIndex:0};Ti.getNormal(Vo,$o,Wo,h.normal),u.face=h,u.barycoord=d}return u}class o0 extends On{constructor(t=null,n=1,i=1,s,r,o,a,c,l=Nn,u=Nn,d,h){super(null,o,a,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bf extends _i{constructor(t,n,i,s=1){super(t,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const kr=new tn,ym=new tn,Zo=[],vm=new Zs,y2=new tn,Pa=new mt,Ia=new ma;let _e=class extends mt{constructor(t,n,i){super(t,n),this.isInstancedMesh=!0,this.instanceMatrix=new bf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,y2)}computeBoundingBox(){const t=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Zs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,kr),vm.copy(t.boundingBox).applyMatrix4(kr),this.boundingBox.union(vm)}computeBoundingSphere(){const t=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ma),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,kr),Ia.copy(t.boundingSphere).applyMatrix4(kr),this.boundingSphere.union(Ia)}copy(t,n){return super.copy(t,n),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,n){return n.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,n){const i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,n){const i=this.matrixWorld,s=this.count;if(Pa.geometry=this.geometry,Pa.material=this.material,Pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ia.copy(this.boundingSphere),Ia.applyMatrix4(i),t.ray.intersectsSphere(Ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,kr),ym.multiplyMatrices(i,kr),Pa.matrixWorld=ym,Pa.raycast(t,Zo);for(let o=0,a=Zo.length;o<a;o++){const c=Zo[o];c.instanceId=r,c.object=this,n.push(c)}Zo.length=0}}setColorAt(t,n){return this.instanceColor===null&&(this.instanceColor=new bf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,n){return n.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,n){const i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new o0(new Float32Array(s*this.count),s,this.count,Gh,Di));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<i.length;l++)o+=i[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(i,c+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}};const Wu=new B,v2=new B,M2=new me;class vs{constructor(t=new B(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=Wu.subVectors(i,n).cross(v2.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const s=t.delta(Wu),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||M2.getNormalMatrix(t),s=this.coplanarPoint(Wu).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new ma,w2=new gt(.5,.5),Ko=new B;class jh{constructor(t=new vs,n=new vs,i=new vs,s=new vs,r=new vs,o=new vs){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Wi,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],x=r[8],y=r[9],g=r[10],p=r[11],w=r[12],S=r[13],m=r[14],M=r[15];if(s[0].setComponents(l-o,f-u,p-x,M-w).normalize(),s[1].setComponents(l+o,f+u,p+x,M+w).normalize(),s[2].setComponents(l+a,f+d,p+y,M+S).normalize(),s[3].setComponents(l-a,f-d,p-y,M-S).normalize(),i)s[4].setComponents(c,h,g,m).normalize(),s[5].setComponents(l-c,f-h,p-g,M-m).normalize();else if(s[4].setComponents(l-c,f-h,p-g,M-m).normalize(),n===Wi)s[5].setComponents(l+c,f+h,p+g,M+m).normalize();else if(n===ua)s[5].setComponents(c,h,g,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(t){Qs.center.set(0,0,0);const n=w2.distanceTo(t.center);return Qs.radius=.7071067811865476+n,Qs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Ko.x=s.normal.x>0?t.max.x:t.min.x,Ko.y=s.normal.y>0?t.max.y:t.min.y,Ko.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class c0 extends On{constructor(t=[],n=Xs,i,s,r,o,a,c,l,u){super(t,n,i,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class l0 extends On{constructor(t,n,i,s,r,o,a,c,l){super(t,n,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yr extends On{constructor(t,n,i=qi,s,r,o,a=Nn,c=Nn,l,u=os,d=1){if(u!==os&&u!==Bs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:n,depth:d};super(h,s,r,o,a,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class av extends yr{constructor(t,n=qi,i=Xs,s,r,o=Nn,a=Nn,c,l=os){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,n,i,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class h0 extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}let Me=class ov extends bn{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],d=[];let h=0,f=0;x("z","y","x",-1,-1,i,n,t,o,r,0),x("z","y","x",1,-1,i,n,-t,o,r,1),x("x","z","y",1,1,t,i,n,s,o,2),x("x","z","y",1,-1,t,i,-n,s,o,3),x("x","y","z",1,-1,t,n,i,s,r,4),x("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2));function x(y,g,p,w,S,m,M,v,A,_,E){const C=m/A,P=M/_,T=m/2,O=M/2,k=v/2,U=A+1,$=_+1;let W=0,Y=0;const tt=new B;for(let q=0;q<$;q++){const ht=q*P-O;for(let nt=0;nt<U;nt++){const zt=nt*C-T;tt[y]=zt*w,tt[g]=ht*S,tt[p]=k,l.push(tt.x,tt.y,tt.z),tt[y]=0,tt[g]=0,tt[p]=v>0?1:-1,u.push(tt.x,tt.y,tt.z),d.push(nt/A),d.push(1-q/_),W+=1}}for(let q=0;q<_;q++)for(let ht=0;ht<A;ht++){const nt=h+ht+U*q,zt=h+ht+U*(q+1),Qt=h+(ht+1)+U*(q+1),Nt=h+(ht+1)+U*q;c.push(nt,zt,Nt),c.push(zt,Qt,Nt),Y+=6}a.addGroup(f,Y,E),f+=Y,h+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ov(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},cv=class lv extends bn{constructor(t=1,n=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:n,capSegments:i,radialSegments:s,heightSegments:r},n=Math.max(0,n),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const o=[],a=[],c=[],l=[],u=n/2,d=Math.PI/2*t,h=n,f=2*d+h,x=i*2+r,y=s+1,g=new B,p=new B;for(let w=0;w<=x;w++){let S=0,m=0,M=0,v=0;if(w<=i){const E=w/i,C=E*Math.PI/2;m=-u-t*Math.cos(C),M=t*Math.sin(C),v=-t*Math.cos(C),S=E*d}else if(w<=i+r){const E=(w-i)/r;m=-u+E*n,M=t,v=0,S=d+E*h}else{const E=(w-i-r)/i,C=E*Math.PI/2;m=u+t*Math.sin(C),M=t*Math.cos(C),v=t*Math.sin(C),S=d+h+E*d}const A=Math.max(0,Math.min(1,S/f));let _=0;w===0?_=.5/s:w===x&&(_=-.5/s);for(let E=0;E<=s;E++){const C=E/s,P=C*Math.PI*2,T=Math.sin(P),O=Math.cos(P);p.x=-M*O,p.y=m,p.z=M*T,a.push(p.x,p.y,p.z),g.set(-M*O,v,M*T),g.normalize(),c.push(g.x,g.y,g.z),l.push(C+_,A)}if(w>0){const E=(w-1)*y;for(let C=0;C<s;C++){const P=E+C,T=E+C+1,O=w*y+C,k=w*y+C+1;o.push(P,T,O),o.push(T,k,O)}}}this.setIndex(o),this.setAttribute("position",new Le(a,3)),this.setAttribute("normal",new Le(c,3)),this.setAttribute("uv",new Le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lv(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Ri=class hv extends bn{constructor(t=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);const r=[],o=[],a=[],c=[],l=new B,u=new gt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=n;d++,h+=3){const f=i+d/n*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("normal",new Le(a,3)),this.setAttribute("uv",new Le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hv(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Te=class uv extends bn{constructor(t=1,n=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let x=0;const y=[],g=i/2;let p=0;w(),o===!1&&(t>0&&S(!0),n>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Le(d,3)),this.setAttribute("normal",new Le(h,3)),this.setAttribute("uv",new Le(f,2));function w(){const m=new B,M=new B;let v=0;const A=(n-t)/i;for(let _=0;_<=r;_++){const E=[],C=_/r,P=C*(n-t)+t;for(let T=0;T<=s;T++){const O=T/s,k=O*c+a,U=Math.sin(k),$=Math.cos(k);M.x=P*U,M.y=-C*i+g,M.z=P*$,d.push(M.x,M.y,M.z),m.set(U,A,$).normalize(),h.push(m.x,m.y,m.z),f.push(O,1-C),E.push(x++)}y.push(E)}for(let _=0;_<s;_++)for(let E=0;E<r;E++){const C=y[E][_],P=y[E+1][_],T=y[E+1][_+1],O=y[E][_+1];(t>0||E!==0)&&(u.push(C,P,O),v+=3),(n>0||E!==r-1)&&(u.push(P,T,O),v+=3)}l.addGroup(p,v,0),p+=v}function S(m){const M=x,v=new gt,A=new B;let _=0;const E=m===!0?t:n,C=m===!0?1:-1;for(let T=1;T<=s;T++)d.push(0,g*C,0),h.push(0,C,0),f.push(.5,.5),x++;const P=x;for(let T=0;T<=s;T++){const k=T/s*c+a,U=Math.cos(k),$=Math.sin(k);A.x=E*$,A.y=g*C,A.z=E*U,d.push(A.x,A.y,A.z),h.push(0,C,0),v.x=U*.5+.5,v.y=$*.5*C+.5,f.push(v.x,v.y),x++}for(let T=0;T<s;T++){const O=M+T,k=P+T;m===!0?u.push(k,k+1,O):u.push(k+1,k,O),_+=3}l.addGroup(p,_,m===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uv(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Jh=class dv extends Te{constructor(t=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,n,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new dv(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};class ga extends bn{constructor(t=[],n=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:n,radius:i,detail:s};const r=[],o=[];a(s),l(i),u(),this.setAttribute("position",new Le(r,3)),this.setAttribute("normal",new Le(r.slice(),3)),this.setAttribute("uv",new Le(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const S=new B,m=new B,M=new B;for(let v=0;v<n.length;v+=3)f(n[v+0],S),f(n[v+1],m),f(n[v+2],M),c(S,m,M,w)}function c(w,S,m,M){const v=M+1,A=[];for(let _=0;_<=v;_++){A[_]=[];const E=w.clone().lerp(m,_/v),C=S.clone().lerp(m,_/v),P=v-_;for(let T=0;T<=P;T++)T===0&&_===v?A[_][T]=E:A[_][T]=E.clone().lerp(C,T/P)}for(let _=0;_<v;_++)for(let E=0;E<2*(v-_)-1;E++){const C=Math.floor(E/2);E%2===0?(h(A[_][C+1]),h(A[_+1][C]),h(A[_][C])):(h(A[_][C+1]),h(A[_+1][C+1]),h(A[_+1][C]))}}function l(w){const S=new B;for(let m=0;m<r.length;m+=3)S.x=r[m+0],S.y=r[m+1],S.z=r[m+2],S.normalize().multiplyScalar(w),r[m+0]=S.x,r[m+1]=S.y,r[m+2]=S.z}function u(){const w=new B;for(let S=0;S<r.length;S+=3){w.x=r[S+0],w.y=r[S+1],w.z=r[S+2];const m=g(w)/2/Math.PI+.5,M=p(w)/Math.PI+.5;o.push(m,1-M)}x(),d()}function d(){for(let w=0;w<o.length;w+=6){const S=o[w+0],m=o[w+2],M=o[w+4],v=Math.max(S,m,M),A=Math.min(S,m,M);v>.9&&A<.1&&(S<.2&&(o[w+0]+=1),m<.2&&(o[w+2]+=1),M<.2&&(o[w+4]+=1))}}function h(w){r.push(w.x,w.y,w.z)}function f(w,S){const m=w*3;S.x=t[m+0],S.y=t[m+1],S.z=t[m+2]}function x(){const w=new B,S=new B,m=new B,M=new B,v=new gt,A=new gt,_=new gt;for(let E=0,C=0;E<r.length;E+=9,C+=6){w.set(r[E+0],r[E+1],r[E+2]),S.set(r[E+3],r[E+4],r[E+5]),m.set(r[E+6],r[E+7],r[E+8]),v.set(o[C+0],o[C+1]),A.set(o[C+2],o[C+3]),_.set(o[C+4],o[C+5]),M.copy(w).add(S).add(m).divideScalar(3);const P=g(M);y(v,C+0,w,P),y(A,C+2,S,P),y(_,C+4,m,P)}}function y(w,S,m,M){M<0&&w.x===1&&(o[S]=w.x-1),m.x===0&&m.z===0&&(o[S]=M/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.vertices,t.indices,t.radius,t.detail)}}let u0=class fv extends ga{constructor(t=1,n=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,n),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new fv(t.radius,t.detail)}},Ao=class pv extends bn{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=Ie(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],u=1/n,d=new B,h=new gt,f=new B,x=new B,y=new B;let g=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:g=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(y.x,y.y,y.z);break;default:g=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-g,f.z=p*0,x.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(x)}for(let w=0;w<=n;w++){const S=i+w*u*s,m=Math.sin(S),M=Math.cos(S);for(let v=0;v<=t.length-1;v++){d.x=t[v].x*m,d.y=t[v].y,d.z=t[v].x*M,o.push(d.x,d.y,d.z),h.x=w/n,h.y=v/(t.length-1),a.push(h.x,h.y);const A=c[3*v+0]*m,_=c[3*v+1],E=c[3*v+0]*M;l.push(A,_,E)}}for(let w=0;w<n;w++)for(let S=0;S<t.length-1;S++){const m=S+w*t.length,M=m,v=m+t.length,A=m+t.length+1,_=m+1;r.push(M,v,_),r.push(A,_,v)}this.setIndex(r),this.setAttribute("position",new Le(o,3)),this.setAttribute("uv",new Le(a,2)),this.setAttribute("normal",new Le(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pv(t.points,t.segments,t.phiStart,t.phiLength)}},Sn=class mv extends ga{constructor(t=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,n),this.type="OctahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new mv(t.radius,t.detail)}};class cs extends bn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,o=n/2,a=Math.floor(i),c=Math.floor(s),l=a+1,u=c+1,d=t/a,h=n/c,f=[],x=[],y=[],g=[];for(let p=0;p<u;p++){const w=p*h-o;for(let S=0;S<l;S++){const m=S*d-r;x.push(m,-w,0),y.push(0,0,1),g.push(S/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const S=w+l*p,m=w+l*(p+1),M=w+1+l*(p+1),v=w+1+l*p;f.push(S,m,v),f.push(m,M,v)}this.setIndex(f),this.setAttribute("position",new Le(x,3)),this.setAttribute("normal",new Le(y,3)),this.setAttribute("uv",new Le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qh extends bn{constructor(t=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],c=[],l=[],u=[];let d=t;const h=(n-t)/s,f=new B,x=new gt;for(let y=0;y<=s;y++){for(let g=0;g<=i;g++){const p=r+g/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),x.x=(f.x/n+1)/2,x.y=(f.y/n+1)/2,u.push(x.x,x.y)}d+=h}for(let y=0;y<s;y++){const g=y*(i+1);for(let p=0;p<i;p++){const w=p+g,S=w,m=w+i+1,M=w+i+2,v=w+1;a.push(S,m,v),a.push(m,M,v)}}this.setIndex(a),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(l,3)),this.setAttribute("uv",new Le(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qh(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}let as=class gv extends bn{constructor(t=1,n=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let l=0;const u=[],d=new B,h=new B,f=[],x=[],y=[],g=[];for(let p=0;p<=i;p++){const w=[],S=p/i,m=o+S*a,M=t*Math.cos(m),v=Math.sqrt(t*t-M*M);let A=0;p===0&&o===0?A=.5/n:p===i&&c===Math.PI&&(A=-.5/n);for(let _=0;_<=n;_++){const E=_/n,C=s+E*r;d.x=-v*Math.cos(C),d.y=M,d.z=v*Math.sin(C),x.push(d.x,d.y,d.z),h.copy(d).normalize(),y.push(h.x,h.y,h.z),g.push(E+A,1-S),w.push(l++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<n;w++){const S=u[p][w+1],m=u[p][w],M=u[p+1][w],v=u[p+1][w+1];(p!==0||o>0)&&f.push(S,m,v),(p!==i-1||c<Math.PI)&&f.push(m,M,v)}this.setIndex(f),this.setAttribute("position",new Le(x,3)),this.setAttribute("normal",new Le(y,3)),this.setAttribute("uv",new Le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gv(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};class tu extends ga{constructor(t=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,s,t,n),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:n}}static fromJSON(t){return new tu(t.radius,t.detail)}}let mn=class xv extends bn{constructor(t=1,n=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new B,f=new B,x=new B;for(let y=0;y<=i;y++){const g=o+y/i*a;for(let p=0;p<=s;p++){const w=p/s*r;f.x=(t+n*Math.cos(g))*Math.cos(w),f.y=(t+n*Math.cos(g))*Math.sin(w),f.z=n*Math.sin(g),l.push(f.x,f.y,f.z),h.x=t*Math.cos(w),h.y=t*Math.sin(w),x.subVectors(f,h).normalize(),u.push(x.x,x.y,x.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){const p=(s+1)*y+g-1,w=(s+1)*(y-1)+g-1,S=(s+1)*(y-1)+g,m=(s+1)*y+g;c.push(p,w,m),c.push(w,S,m)}this.setIndex(c),this.setAttribute("position",new Le(l,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xv(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function da(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];if(Mm(s))s.isRenderTargetTexture?(ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(Mm(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function ni(e){const t={};for(let n=0;n<e.length;n++){const i=da(e[n]);for(const s in i)t[s]=i[s]}return t}function Mm(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function S2(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function _v(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const fa={clone:da,merge:ni};var b2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,E2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;let Vn=class extends Mr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b2,this.fragmentShader=E2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=da(t.uniforms),this.uniformsGroups=S2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(t,n){if(super.fromJSON(t,n),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new ie().setHex(s.value);break;case"v2":this.uniforms[i].value=new gt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new B().fromArray(s.value);break;case"v4":this.uniforms[i].value=new fn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new me().fromArray(s.value);break;case"m4":this.uniforms[i].value=new tn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}};class d0 extends Vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yv extends Mr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}let wt=class extends yv{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ie(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};class vv extends Mr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Mv extends Mr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Uc={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(wm(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!wm(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function wm(e){try{const t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class wv{constructor(t,n,i){const s=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){const d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){const f=l[d],x=l[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Sv=new wv;class eu{constructor(t){this.manager=t!==void 0?t:Sv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,n){const i=this;return new Promise(function(s,r){i.load(t,s,n,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}eu.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fr=new WeakMap;class bv extends eu{constructor(t){super(t)}load(t,n,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Uc.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){n&&n(o),r.manager.itemEnd(t)},0);else{let d=Fr.get(o);d===void 0&&(d=[],Fr.set(o,d)),d.push({onLoad:n,onError:s})}return o}const a=oo("img");function c(){u(),n&&n(this);const d=Fr.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onLoad&&f.onLoad(this)}Fr.delete(this),r.manager.itemEnd(t)}function l(d){u(),s&&s(d),Uc.remove(`image:${t}`);const h=Fr.get(this)||[];for(let f=0;f<h.length;f++){const x=h[f];x.onError&&x.onError(d)}Fr.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Uc.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}}let Ev=class extends eu{constructor(t){super(t)}load(t,n,i,s){const r=new On,o=new bv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}};class nu extends re{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}let Tv=class extends nu{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}};const Xu=new tn,Sm=new B,bm=new B;class Av{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jh,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;Sm.setFromMatrixPosition(t.matrixWorld),n.position.copy(Sm),bm.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(bm),n.updateMatrixWorld(),Xu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===ua||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const jo=new B,Jo=new vr,Qi=new B;class f0 extends re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(jo,Jo,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Jo,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,n,i=!1){super.updateWorldMatrix(t,n,i),this.matrixWorld.decompose(jo,Jo,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(jo,Jo,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zs=new B,Em=new gt,Tm=new gt;class mi extends f0{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=wf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wf*2*Math.atan(Math.tan(wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){zs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zs.x,zs.y).multiplyScalar(-t/zs.z),zs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(zs.x,zs.y).multiplyScalar(-t/zs.z)}getViewSize(t,n){return this.getViewBounds(t,Em,Tm),n.subVectors(Tm,Em)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(wu*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,n-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class T2 extends Av{constructor(){super(new mi(90,1,.5,500)),this.isPointLightShadow=!0}}let A2=class extends nu{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new T2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}};class Ro extends f0{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+n,c=s-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class R2 extends Av{constructor(){super(new Ro(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}let Oc=class extends nu{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(re.DEFAULT_UP),this.updateMatrix(),this.target=new re,this.shadow=new R2}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}};const Br=-90,Hr=1;class Rv extends re{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new mi(Br,Hr,t,n);s.layers=this.layers,this.add(s);const r=new mi(Br,Hr,t,n);r.layers=this.layers,this.add(r);const o=new mi(Br,Hr,t,n);o.layers=this.layers,this.add(o);const a=new mi(Br,Hr,t,n);a.layers=this.layers,this.add(a);const c=new mi(Br,Hr,t,n);c.layers=this.layers,this.add(c);const l=new mi(Br,Hr,t,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,c]=n;for(const l of n)this.remove(l);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of n)this.add(l),l.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(d,h,f),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Cv extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Pv{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=C2.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function C2(){this._document.hidden===!1&&this.reset()}const Am=new tn;class Iv{constructor(t,n,i=0,s=1/0){this.ray=new a0(t,n),this.near=i,this.far=s,this.camera=null,this.layers=new Zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ze("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return Am.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Am),this}intersectObject(t,n=!0,i=[]){return Ef(t,this,i,n),i.sort(Rm),i}intersectObjects(t,n=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ef(t[s],this,i,n);return i.sort(Rm),i}}function Rm(e,t){return e.distance-t.distance}function Ef(e,t,n,i){let s=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(s=!1),s===!0&&i===!0){const r=e.children;for(let o=0,a=r.length;o<a;o++)Ef(r[o],t,n,!0)}}const X0=class X0{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){const r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};X0.prototype.isMatrix2=!0;let Tf=X0;function Cm(e,t,n,i){const s=P2(i);switch(n){case t0:return e*t;case Gh:return e*t/s.components*s.byteLength;case Vh:return e*t/s.components*s.byteLength;case Ys:return e*t*2/s.components*s.byteLength;case $h:return e*t*2/s.components*s.byteLength;case e0:return e*t*3/s.components*s.byteLength;case zi:return e*t*4/s.components*s.byteLength;case Wh:return e*t*4/s.components*s.byteLength;case qa:case Za:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ka:case ja:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Ol:return Math.max(e,16)*Math.max(t,8)/4;case Ll:case Ul:return Math.max(e,8)*Math.max(t,8)/2;case kl:case Fl:case Hl:case Gl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Bl:case io:case Vl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ql:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case jl:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Jl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case th:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case eh:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case nh:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case ih:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case sh:case rh:case ah:return Math.ceil(e/4)*Math.ceil(t/4)*16;case oh:case ch:return Math.ceil(e/4)*Math.ceil(t/4)*8;case so:case lh:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function P2(e){switch(e){case gi:case Kp:return{byteLength:1,components:1};case la:case jp:case xi:return{byteLength:2,components:1};case Bh:case Hh:return{byteLength:2,components:4};case qi:case Fh:case Di:return{byteLength:4,components:1};case Jp:case Qp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dh}}));typeof window<"u"&&(window.__THREE__?ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dh);function Dv(){let e=null,t=!1,n=null,i=null;function s(r,o){n(r,o),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function I2(e){const t=new WeakMap;function n(a,c){const l=a.array,u=a.usage,d=l.byteLength,h=e.createBuffer();e.bindBuffer(c,h),e.bufferData(c,l,u),a.onUploadCallback();let f;if(l instanceof Float32Array)f=e.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=e.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=e.SHORT;else if(l instanceof Uint32Array)f=e.UNSIGNED_INT;else if(l instanceof Int32Array)f=e.INT;else if(l instanceof Int8Array)f=e.BYTE;else if(l instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,c,l){const u=c.array,d=c.updateRanges;if(e.bindBuffer(l,a),d.length===0)e.bufferSubData(l,0,u);else{d.sort((f,x)=>f.start-x.start);let h=0;for(let f=1;f<d.length;f++){const x=d[h],y=d[f];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++h,d[h]=y)}d.length=h+1;for(let f=0,x=d.length;f<x;f++){const y=d[f];e.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(e.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,n(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var D2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z2=`#ifdef USE_ALPHAHASH
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
#endif`,L2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k2=`#ifdef USE_AOMAP
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
#endif`,F2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B2=`#ifdef USE_BATCHING
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
#endif`,H2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W2=`#ifdef USE_IRIDESCENCE
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
#endif`,X2=`#ifdef USE_BUMPMAP
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
#endif`,Y2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,J2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eS=`#define PI 3.141592653589793
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
} // validated`,nS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,iS=`vec3 transformedNormal = objectNormal;
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
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cS="gl_FragColor = linearToOutputTexel( gl_FragColor );",lS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hS=`#ifdef USE_ENVMAP
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
#endif`,uS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
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
#endif`,fS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
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
#endif`,mS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yS=`#ifdef USE_GRADIENTMAP
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
}`,vS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,SS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,bS=`#ifdef USE_ENVMAP
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
#endif`,ES=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CS=`PhysicalMaterial material;
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
#endif`,PS=`uniform sampler2D dfgLUT;
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
}`,IS=`
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
#endif`,DS=`#if defined( RE_IndirectDiffuse )
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
#endif`,zS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,NS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,US=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,HS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GS=`#if defined( USE_POINTS_UV )
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
#endif`,VS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$S=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qS=`#ifdef USE_MORPHTARGETS
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
#endif`,ZS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,eb=`#ifdef USE_NORMALMAP
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
#endif`,nb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ib=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ob=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ub=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,db=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xb=`float getShadowMask() {
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
}`,_b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yb=`#ifdef USE_SKINNING
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
#endif`,vb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,wb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tb=`#ifdef USE_TRANSMISSION
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
#endif`,Ab=`#ifdef USE_TRANSMISSION
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ib=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zb=`uniform sampler2D t2D;
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`#include <common>
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
}`,Fb=`#if DEPTH_PACKING == 3200
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
}`,Bb=`#define DISTANCE
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
}`,Hb=`#define DISTANCE
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$b=`uniform float scale;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,Xb=`#include <common>
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
}`,Yb=`uniform vec3 diffuse;
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
}`,qb=`#define LAMBERT
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
}`,Zb=`#define LAMBERT
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
}`,Kb=`#define MATCAP
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
}`,jb=`#define MATCAP
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
}`,Jb=`#define NORMAL
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
}`,Qb=`#define NORMAL
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
}`,tE=`#define PHONG
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
}`,eE=`#define PHONG
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
}`,nE=`#define STANDARD
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
}`,iE=`#define STANDARD
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
}`,sE=`#define TOON
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
}`,rE=`#define TOON
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
}`,aE=`uniform float size;
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
}`,oE=`uniform vec3 diffuse;
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
}`,cE=`#include <common>
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
}`,lE=`uniform vec3 color;
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
}`,hE=`uniform float rotation;
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
}`,uE=`uniform vec3 diffuse;
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
}`,be={alphahash_fragment:D2,alphahash_pars_fragment:z2,alphamap_fragment:L2,alphamap_pars_fragment:N2,alphatest_fragment:U2,alphatest_pars_fragment:O2,aomap_fragment:k2,aomap_pars_fragment:F2,batching_pars_vertex:B2,batching_vertex:H2,begin_vertex:G2,beginnormal_vertex:V2,bsdfs:$2,iridescence_fragment:W2,bumpmap_pars_fragment:X2,clipping_planes_fragment:Y2,clipping_planes_pars_fragment:q2,clipping_planes_pars_vertex:Z2,clipping_planes_vertex:K2,color_fragment:j2,color_pars_fragment:J2,color_pars_vertex:Q2,color_vertex:tS,common:eS,cube_uv_reflection_fragment:nS,defaultnormal_vertex:iS,displacementmap_pars_vertex:sS,displacementmap_vertex:rS,emissivemap_fragment:aS,emissivemap_pars_fragment:oS,colorspace_fragment:cS,colorspace_pars_fragment:lS,envmap_fragment:hS,envmap_common_pars_fragment:uS,envmap_pars_fragment:dS,envmap_pars_vertex:fS,envmap_physical_pars_fragment:bS,envmap_vertex:pS,fog_vertex:mS,fog_pars_vertex:gS,fog_fragment:xS,fog_pars_fragment:_S,gradientmap_pars_fragment:yS,lightmap_pars_fragment:vS,lights_lambert_fragment:MS,lights_lambert_pars_fragment:wS,lights_pars_begin:SS,lights_toon_fragment:ES,lights_toon_pars_fragment:TS,lights_phong_fragment:AS,lights_phong_pars_fragment:RS,lights_physical_fragment:CS,lights_physical_pars_fragment:PS,lights_fragment_begin:IS,lights_fragment_maps:DS,lights_fragment_end:zS,lightprobes_pars_fragment:LS,logdepthbuf_fragment:NS,logdepthbuf_pars_fragment:US,logdepthbuf_pars_vertex:OS,logdepthbuf_vertex:kS,map_fragment:FS,map_pars_fragment:BS,map_particle_fragment:HS,map_particle_pars_fragment:GS,metalnessmap_fragment:VS,metalnessmap_pars_fragment:$S,morphinstance_vertex:WS,morphcolor_vertex:XS,morphnormal_vertex:YS,morphtarget_pars_vertex:qS,morphtarget_vertex:ZS,normal_fragment_begin:KS,normal_fragment_maps:jS,normal_pars_fragment:JS,normal_pars_vertex:QS,normal_vertex:tb,normalmap_pars_fragment:eb,clearcoat_normal_fragment_begin:nb,clearcoat_normal_fragment_maps:ib,clearcoat_pars_fragment:sb,iridescence_pars_fragment:rb,opaque_fragment:ab,packing:ob,premultiplied_alpha_fragment:cb,project_vertex:lb,dithering_fragment:hb,dithering_pars_fragment:ub,roughnessmap_fragment:db,roughnessmap_pars_fragment:fb,shadowmap_pars_fragment:pb,shadowmap_pars_vertex:mb,shadowmap_vertex:gb,shadowmask_pars_fragment:xb,skinbase_vertex:_b,skinning_pars_vertex:yb,skinning_vertex:vb,skinnormal_vertex:Mb,specularmap_fragment:wb,specularmap_pars_fragment:Sb,tonemapping_fragment:bb,tonemapping_pars_fragment:Eb,transmission_fragment:Tb,transmission_pars_fragment:Ab,uv_pars_fragment:Rb,uv_pars_vertex:Cb,uv_vertex:Pb,worldpos_vertex:Ib,background_vert:Db,background_frag:zb,backgroundCube_vert:Lb,backgroundCube_frag:Nb,cube_vert:Ub,cube_frag:Ob,depth_vert:kb,depth_frag:Fb,distance_vert:Bb,distance_frag:Hb,equirect_vert:Gb,equirect_frag:Vb,linedashed_vert:$b,linedashed_frag:Wb,meshbasic_vert:Xb,meshbasic_frag:Yb,meshlambert_vert:qb,meshlambert_frag:Zb,meshmatcap_vert:Kb,meshmatcap_frag:jb,meshnormal_vert:Jb,meshnormal_frag:Qb,meshphong_vert:tE,meshphong_frag:eE,meshphysical_vert:nE,meshphysical_frag:iE,meshtoon_vert:sE,meshtoon_frag:rE,points_vert:aE,points_frag:oE,shadow_vert:cE,shadow_frag:lE,sprite_vert:hE,sprite_frag:uE},Wt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},$i={basic:{uniforms:ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ie(0)},envMapIntensity:{value:1}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:ni([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:ni([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:ni([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new ie(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:ni([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:ni([Wt.points,Wt.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:ni([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:ni([Wt.common,Wt.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:ni([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:ni([Wt.sprite,Wt.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distance:{uniforms:ni([Wt.common,Wt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distance_vert,fragmentShader:be.distance_frag},shadow:{uniforms:ni([Wt.lights,Wt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};$i.physical={uniforms:ni([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const Qo={r:0,b:0,g:0},dE=new tn,zv=new me;zv.set(-1,0,0,0,1,0,0,0,1);function fE(e,t,n,i,s,r){const o=new ie(0);let a=s===!0?0:1,c,l,u=null,d=0,h=null;function f(w){let S=w.isScene===!0?w.background:null;if(S&&S.isTexture){const m=w.backgroundBlurriness>0;S=t.get(S,m)}return S}function x(w){let S=!1;const m=f(w);m===null?g(o,a):m&&m.isColor&&(g(m,1),S=!0);const M=e.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function y(w,S){const m=f(S);m&&(m.isCubeTexture||m.mapping===To)?(l===void 0&&(l=new mt(new Me(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:da($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,v,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=m,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(dE.makeRotationFromEuler(S.backgroundRotation)).transpose(),m.isCubeTexture&&m.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(zv),l.material.toneMapped=Pe.getTransfer(m.colorSpace)!==Ze,(u!==m||d!==m.version||h!==e.toneMapping)&&(l.material.needsUpdate=!0,u=m,d=m.version,h=e.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new mt(new cs(2,2),new Vn({name:"BackgroundMaterial",uniforms:da($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Pe.getTransfer(m.colorSpace)!==Ze,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(u!==m||d!==m.version||h!==e.toneMapping)&&(c.material.needsUpdate=!0,u=m,d=m.version,h=e.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function g(w,S){w.getRGB(Qo,_v(e)),n.buffers.color.setClear(Qo.r,Qo.g,Qo.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(w){a=w,g(o,a)},render:x,addToRenderList:y,dispose:p}}function pE(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(P,T,O,k,U){let $=!1;const W=d(P,k,O,T);r!==W&&(r=W,l(r.object)),$=f(P,k,O,U),$&&x(P,k,O,U),U!==null&&t.update(U,e.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,m(P,T,O,k),U!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function c(){return e.createVertexArray()}function l(P){return e.bindVertexArray(P)}function u(P){return e.deleteVertexArray(P)}function d(P,T,O,k){const U=k.wireframe===!0;let $=i[T.id];$===void 0&&($={},i[T.id]=$);const W=P.isInstancedMesh===!0?P.id:0;let Y=$[W];Y===void 0&&(Y={},$[W]=Y);let tt=Y[O.id];tt===void 0&&(tt={},Y[O.id]=tt);let q=tt[U];return q===void 0&&(q=h(c()),tt[U]=q),q}function h(P){const T=[],O=[],k=[];for(let U=0;U<n;U++)T[U]=0,O[U]=0,k[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:O,attributeDivisors:k,object:P,attributes:{},index:null}}function f(P,T,O,k){const U=r.attributes,$=T.attributes;let W=0;const Y=O.getAttributes();for(const tt in Y)if(Y[tt].location>=0){const ht=U[tt];let nt=$[tt];if(nt===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),ht===void 0||ht.attribute!==nt||nt&&ht.data!==nt.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function x(P,T,O,k){const U={},$=T.attributes;let W=0;const Y=O.getAttributes();for(const tt in Y)if(Y[tt].location>=0){let ht=$[tt];ht===void 0&&(tt==="instanceMatrix"&&P.instanceMatrix&&(ht=P.instanceMatrix),tt==="instanceColor"&&P.instanceColor&&(ht=P.instanceColor));const nt={};nt.attribute=ht,ht&&ht.data&&(nt.data=ht.data),U[tt]=nt,W++}r.attributes=U,r.attributesNum=W,r.index=k}function y(){const P=r.newAttributes;for(let T=0,O=P.length;T<O;T++)P[T]=0}function g(P){p(P,0)}function p(P,T){const O=r.newAttributes,k=r.enabledAttributes,U=r.attributeDivisors;O[P]=1,k[P]===0&&(e.enableVertexAttribArray(P),k[P]=1),U[P]!==T&&(e.vertexAttribDivisor(P,T),U[P]=T)}function w(){const P=r.newAttributes,T=r.enabledAttributes;for(let O=0,k=T.length;O<k;O++)T[O]!==P[O]&&(e.disableVertexAttribArray(O),T[O]=0)}function S(P,T,O,k,U,$,W){W===!0?e.vertexAttribIPointer(P,T,O,U,$):e.vertexAttribPointer(P,T,O,k,U,$)}function m(P,T,O,k){y();const U=k.attributes,$=O.getAttributes(),W=T.defaultAttributeValues;for(const Y in $){const tt=$[Y];if(tt.location>=0){let q=U[Y];if(q===void 0&&(Y==="instanceMatrix"&&P.instanceMatrix&&(q=P.instanceMatrix),Y==="instanceColor"&&P.instanceColor&&(q=P.instanceColor)),q!==void 0){const ht=q.normalized,nt=q.itemSize,zt=t.get(q);if(zt===void 0)continue;const Qt=zt.buffer,Nt=zt.type,V=zt.bytesPerElement,ot=Nt===e.INT||Nt===e.UNSIGNED_INT||q.gpuType===Fh;if(q.isInterleavedBufferAttribute){const at=q.data,At=at.stride,Bt=q.offset;if(at.isInstancedInterleavedBuffer){for(let Vt=0;Vt<tt.locationSize;Vt++)p(tt.location+Vt,at.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Vt=0;Vt<tt.locationSize;Vt++)g(tt.location+Vt);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let Vt=0;Vt<tt.locationSize;Vt++)S(tt.location+Vt,nt/tt.locationSize,Nt,ht,At*V,(Bt+nt/tt.locationSize*Vt)*V,ot)}else{if(q.isInstancedBufferAttribute){for(let at=0;at<tt.locationSize;at++)p(tt.location+at,q.meshPerAttribute);P.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let at=0;at<tt.locationSize;at++)g(tt.location+at);e.bindBuffer(e.ARRAY_BUFFER,Qt);for(let at=0;at<tt.locationSize;at++)S(tt.location+at,nt/tt.locationSize,Nt,ht,nt*V,nt/tt.locationSize*at*V,ot)}}else if(W!==void 0){const ht=W[Y];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(tt.location,ht);break;case 3:e.vertexAttrib3fv(tt.location,ht);break;case 4:e.vertexAttrib4fv(tt.location,ht);break;default:e.vertexAttrib1fv(tt.location,ht)}}}}w()}function M(){E();for(const P in i){const T=i[P];for(const O in T){const k=T[O];for(const U in k){const $=k[U];for(const W in $)u($[W].object),delete $[W];delete k[U]}}delete i[P]}}function v(P){if(i[P.id]===void 0)return;const T=i[P.id];for(const O in T){const k=T[O];for(const U in k){const $=k[U];for(const W in $)u($[W].object),delete $[W];delete k[U]}}delete i[P.id]}function A(P){for(const T in i){const O=i[T];for(const k in O){const U=O[k];if(U[P.id]===void 0)continue;const $=U[P.id];for(const W in $)u($[W].object),delete $[W];delete U[P.id]}}}function _(P){for(const T in i){const O=i[T],k=P.isInstancedMesh===!0?P.id:0,U=O[k];if(U!==void 0){for(const $ in U){const W=U[$];for(const Y in W)u(W[Y].object),delete W[Y];delete U[$]}delete O[k],Object.keys(O).length===0&&delete i[T]}}}function E(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:v,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:g,disableUnusedAttributes:w}}function mE(e,t,n){let i;function s(c){i=c}function r(c,l){e.drawArrays(i,c,l),n.update(l,i,1)}function o(c,l,u){u!==0&&(e.drawArraysInstanced(i,c,l,u),n.update(l,i,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];n.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function gE(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==zi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const _=A===xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==gi&&i.convert(A)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Di&&!_)}function c(A){if(A==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(ue("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&ue("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),w=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),S=e.getParameter(e.MAX_VARYING_VECTORS),m=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),M=e.getParameter(e.MAX_SAMPLES),v=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:m,maxSamples:M,samples:v}}function xE(e){const t=this;let n=null,i=0,s=!1,r=!1;const o=new vs,a=new me,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){const x=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=e.get(d);if(!s||x===null||x.length===0||r&&!g)r?u(null):l();else{const w=r?0:i,S=w*4;let m=p.clippingState||null;c.value=m,m=u(x,h,S,f);for(let M=0;M!==S;++M)m[M]=n[M];p.clippingState=m,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,x){const y=d!==null?d.length:0;let g=null;if(y!==0){if(g=c.value,x!==!0||g===null){const p=f+y*4,w=h.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,m=f;S!==y;++S,m+=4)o.copy(d[S]).applyMatrix4(w,a),o.normal.toArray(g,m),g[m+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}const Hs=4,Pm=[.125,.215,.35,.446,.526,.582],lr=20,_E=256,Da=new Ro,Im=new ie;let Yu=null,qu=0,Zu=0,Ku=!1;const yE=new B;class dh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=yE}=r;Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,a),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yu,qu,Zu),this._renderer.xr.enabled=Ku,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Xs||t.mapping===_r?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yu=this._renderer.getRenderTarget(),qu=this._renderer.getActiveCubeFace(),Zu=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:xi,format:zi,colorSpace:ro,depthBuffer:!1},s=Dm(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dm(t,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vE(r)),this._blurMaterial=wE(r,t,n),this._ggxMaterial=ME(r,t,n)}return s}_compileMaterial(t){const n=new mt(new bn,t);this._renderer.compile(n,Da)}_sceneToCubeUV(t,n,i,s,r){const c=new mi(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Im),d.toneMapping=Yi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mt(new Me,new Ue({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let p=!1;const w=t.background;w?w.isColor&&(g.color.copy(w),t.background=null,p=!0):(g.color.copy(Im),p=!0);for(let S=0;S<6;S++){const m=S%3;m===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):m===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));const M=this._cubeSize;Gr(s,m*M,S>2?M:0,M,M),d.setRenderTarget(s),p&&d.render(y,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=w}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===Xs||t.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zm());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Gr(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,Da)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,l=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=0+l*1.25,f=d*h,{_lodMax:x}=this,y=this._sizeLods[i],g=3*y*(i>x-Hs?i-x+Hs:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=x-n,Gr(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(a,Da),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=x-i,Gr(t,g,p,3*y,2*y),s.setRenderTarget(t),s.render(a,Da)}_blur(t,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ze("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[s];d.material=l;const h=l.uniforms,f=this._sizeLods[i]-1,x=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*lr-1),y=r/x,g=isFinite(r)?1+Math.floor(u*y):lr;g>lr&&ue(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${lr}`);const p=[];let w=0;for(let A=0;A<lr;++A){const _=A/y,E=Math.exp(-_*_/2);p.push(E),A===0?w+=E:A<g&&(w+=2*E)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;h.envMap.value=t.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:S}=this;h.dTheta.value=x,h.mipInt.value=S-i;const m=this._sizeLods[s],M=3*m*(s>S-Hs?s-S+Hs:0),v=4*(this._cubeSize-m);Gr(n,M,v,3*m,2*m),c.setRenderTarget(n),c.render(d,Da)}}function vE(e){const t=[],n=[],i=[];let s=e;const r=e-Hs+1+Pm.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let c=1/a;o>e-Hs?c=Pm[o-e+Hs-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,x=6,y=3,g=2,p=1,w=new Float32Array(y*x*f),S=new Float32Array(g*x*f),m=new Float32Array(p*x*f);for(let v=0;v<f;v++){const A=v%3*2/3-1,_=v>2?0:-1,E=[A,_,0,A+2/3,_,0,A+2/3,_+1,0,A,_,0,A+2/3,_+1,0,A,_+1,0];w.set(E,y*x*v),S.set(h,g*x*v);const C=[v,v,v,v,v,v];m.set(C,p*x*v)}const M=new bn;M.setAttribute("position",new _i(w,y)),M.setAttribute("uv",new _i(S,g)),M.setAttribute("faceIndex",new _i(m,p)),i.push(new mt(M,null)),s>Hs&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Dm(e,t,n){const i=new ri(e,t,n);return i.texture.mapping=To,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function ME(e,t,n){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_E,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function wE(e,t,n){const i=new Float32Array(lr),s=new B(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:lr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function zm(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Lm(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function iu(){return`

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
	`}class p0 extends ri{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new c0(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Me(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:da(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jn,blending:Xi});r.uniforms.tEquirect.value=n;const o=new mt(s,r),a=n.minFilter;return n.minFilter===Fs&&(n.minFilter=Gn),new Rv(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}}function SE(e){let t=new WeakMap,n=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?o(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===Ic||f===Dc)if(t.has(h)){const x=t.get(h).texture;return a(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const y=new p0(x.height);return y.fromEquirectangularTexture(e,h),t.set(h,y),h.addEventListener("dispose",l),a(y.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const f=h.mapping,x=f===Ic||f===Dc,y=f===Xs||f===_r;if(x||y){let g=n.get(h);const p=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new dh(e)),g=x?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const w=h.image;return x&&w&&w.height>0||y&&w&&c(w)?(i===null&&(i=new dh(e)),g=x?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function a(h,f){return f===Ic?h.mapping=Xs:f===Dc&&(h.mapping=_r),h}function c(h){let f=0;const x=6;for(let y=0;y<x;y++)h[y]!==void 0&&f++;return f===x}function l(h){const f=h.target;f.removeEventListener("dispose",l);const x=t.get(f);x!==void 0&&(t.delete(f),x.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const x=n.get(f);x!==void 0&&(n.delete(f),x.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function bE(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&pr("WebGLRenderer: "+i+" extension not supported."),s}}}function EE(e,t,n,i){const s={},r=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,n.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],e.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,x=d.attributes.position;let y=0;if(x===void 0)return;if(f!==null){const w=f.array;y=f.version;for(let S=0,m=w.length;S<m;S+=3){const M=w[S+0],v=w[S+1],A=w[S+2];h.push(M,v,v,A,A,M)}}else{const w=x.array;y=x.version;for(let S=0,m=w.length/3-1;S<m;S+=3){const M=S+0,v=S+1,A=S+2;h.push(M,v,v,A,A,M)}}const g=new(x.count>=65535?s0:i0)(h,1);g.version=y;const p=r.get(d);p&&t.remove(p),r.set(d,g)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function TE(e,t,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,h){e.drawElements(i,h,r,d*o),n.update(h,i,1)}function l(d,h,f){f!==0&&(e.drawElementsInstanced(i,h,r,d*o,f),n.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=h[g];n.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function AE(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:ze("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function RE(e,t,n){const i=new WeakMap,s=new fn;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let E=function(){A.dispose(),i.delete(a),a.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const f=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;f===!0&&(S=1),x===!0&&(S=2),y===!0&&(S=3);let m=a.attributes.position.count*S,M=1;m>t.maxTextureSize&&(M=Math.ceil(m/t.maxTextureSize),m=t.maxTextureSize);const v=new Float32Array(m*M*4*d),A=new n0(v,m,M,d);A.type=Di,A.needsUpdate=!0;const _=S*4;for(let C=0;C<d;C++){const P=g[C],T=p[C],O=w[C],k=m*M*4*C;for(let U=0;U<P.count;U++){const $=U*_;f===!0&&(s.fromBufferAttribute(P,U),v[k+$+0]=s.x,v[k+$+1]=s.y,v[k+$+2]=s.z,v[k+$+3]=0),x===!0&&(s.fromBufferAttribute(T,U),v[k+$+4]=s.x,v[k+$+5]=s.y,v[k+$+6]=s.z,v[k+$+7]=0),y===!0&&(s.fromBufferAttribute(O,U),v[k+$+8]=s.x,v[k+$+9]=s.y,v[k+$+10]=s.z,v[k+$+11]=O.itemSize===4?s.w:1)}}h={count:d,texture:A,size:new gt(m,M)},i.set(a,h),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];const x=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(e,"morphTargetBaseInfluence",x),c.getUniforms().setValue(e,"morphTargetInfluences",l)}c.getUniforms().setValue(e,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(e,"morphTargetsTextureSize",h.size)}return{update:r}}function CE(e,t,n,i,s){let r=new WeakMap;function o(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function a(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const PE={[zh]:"LINEAR_TONE_MAPPING",[Lh]:"REINHARD_TONE_MAPPING",[Nh]:"CINEON_TONE_MAPPING",[Eo]:"ACES_FILMIC_TONE_MAPPING",[Oh]:"AGX_TONE_MAPPING",[kh]:"NEUTRAL_TONE_MAPPING",[Uh]:"CUSTOM_TONE_MAPPING"};function IE(e,t,n,i,s,r){const o=new ri(t,n,{type:e,depthBuffer:s,stencilBuffer:r,samples:i?4:0,depthTexture:s?new yr(t,n):void 0}),a=new ri(t,n,{type:xi,depthBuffer:!1,stencilBuffer:!1}),c=new bn;c.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Le([0,2,0,0,2,0],2));const l=new d0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new mt(c,l),d=new Ro(-1,1,1,-1,0,1);let h=null,f=null,x=!1,y,g=null,p=[],w=!1;this.setSize=function(S,m){o.setSize(S,m),a.setSize(S,m);for(let M=0;M<p.length;M++){const v=p[M];v.setSize&&v.setSize(S,m)}},this.setEffects=function(S){p=S,w=p.length>0&&p[0].isRenderPass===!0;const m=o.width,M=o.height;for(let v=0;v<p.length;v++){const A=p[v];A.setSize&&A.setSize(m,M)}},this.begin=function(S,m){if(x||S.toneMapping===Yi&&p.length===0)return!1;if(g=m,m!==null){const M=m.width,v=m.height;(o.width!==M||o.height!==v)&&this.setSize(M,v)}return w===!1&&S.setRenderTarget(o),y=S.toneMapping,S.toneMapping=Yi,!0},this.hasRenderPass=function(){return w},this.end=function(S,m){S.toneMapping=y,x=!0;let M=o,v=a;for(let A=0;A<p.length;A++){const _=p[A];if(_.enabled!==!1&&(_.render(S,v,M,m),_.needsSwap!==!1)){const E=M;M=v,v=E}}if(h!==S.outputColorSpace||f!==S.toneMapping){h=S.outputColorSpace,f=S.toneMapping,l.defines={},Pe.getTransfer(h)===Ze&&(l.defines.SRGB_TRANSFER="");const A=PE[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(g),S.render(u,d),g=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),c.dispose(),l.dispose()}}const Lv=new On,Af=new yr(1,1),Nv=new n0,Uv=new ev,Ov=new c0,Nm=[],Um=[],Om=new Float32Array(16),km=new Float32Array(9),Fm=new Float32Array(4);function xa(e,t,n){const i=e[0];if(i<=0||i>0)return e;const s=t*n;let r=Nm[s];if(r===void 0&&(r=new Float32Array(s),Nm[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function An(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Rn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function su(e,t){let n=Um[t];n===void 0&&(n=new Int32Array(t),Um[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function DE(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function zE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;e.uniform2fv(this.addr,t),Rn(n,t)}}function LE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(An(n,t))return;e.uniform3fv(this.addr,t),Rn(n,t)}}function NE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;e.uniform4fv(this.addr,t),Rn(n,t)}}function UE(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(An(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,i))return;Fm.set(i),e.uniformMatrix2fv(this.addr,!1,Fm),Rn(n,i)}}function OE(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(An(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,i))return;km.set(i),e.uniformMatrix3fv(this.addr,!1,km),Rn(n,i)}}function kE(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(An(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,i))return;Om.set(i),e.uniformMatrix4fv(this.addr,!1,Om),Rn(n,i)}}function FE(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function BE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;e.uniform2iv(this.addr,t),Rn(n,t)}}function HE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;e.uniform3iv(this.addr,t),Rn(n,t)}}function GE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;e.uniform4iv(this.addr,t),Rn(n,t)}}function VE(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function $E(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;e.uniform2uiv(this.addr,t),Rn(n,t)}}function WE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;e.uniform3uiv(this.addr,t),Rn(n,t)}}function XE(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;e.uniform4uiv(this.addr,t),Rn(n,t)}}function YE(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(Af.compareFunction=n.isReversedDepthBuffer()?Yh:Xh,r=Af):r=Lv,n.setTexture2D(t||r,s)}function qE(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||Uv,s)}function ZE(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||Ov,s)}function KE(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||Nv,s)}function jE(e){switch(e){case 5126:return DE;case 35664:return zE;case 35665:return LE;case 35666:return NE;case 35674:return UE;case 35675:return OE;case 35676:return kE;case 5124:case 35670:return FE;case 35667:case 35671:return BE;case 35668:case 35672:return HE;case 35669:case 35673:return GE;case 5125:return VE;case 36294:return $E;case 36295:return WE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return qE;case 35680:case 36300:case 36308:case 36293:return ZE;case 36289:case 36303:case 36311:case 36292:return KE}}function JE(e,t){e.uniform1fv(this.addr,t)}function QE(e,t){const n=xa(t,this.size,2);e.uniform2fv(this.addr,n)}function tT(e,t){const n=xa(t,this.size,3);e.uniform3fv(this.addr,n)}function eT(e,t){const n=xa(t,this.size,4);e.uniform4fv(this.addr,n)}function nT(e,t){const n=xa(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function iT(e,t){const n=xa(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function sT(e,t){const n=xa(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function rT(e,t){e.uniform1iv(this.addr,t)}function aT(e,t){e.uniform2iv(this.addr,t)}function oT(e,t){e.uniform3iv(this.addr,t)}function cT(e,t){e.uniform4iv(this.addr,t)}function lT(e,t){e.uniform1uiv(this.addr,t)}function hT(e,t){e.uniform2uiv(this.addr,t)}function uT(e,t){e.uniform3uiv(this.addr,t)}function dT(e,t){e.uniform4uiv(this.addr,t)}function fT(e,t,n){const i=this.cache,s=t.length,r=su(n,s);An(i,r)||(e.uniform1iv(this.addr,r),Rn(i,r));let o;this.type===e.SAMPLER_2D_SHADOW?o=Af:o=Lv;for(let a=0;a!==s;++a)n.setTexture2D(t[a]||o,r[a])}function pT(e,t,n){const i=this.cache,s=t.length,r=su(n,s);An(i,r)||(e.uniform1iv(this.addr,r),Rn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||Uv,r[o])}function mT(e,t,n){const i=this.cache,s=t.length,r=su(n,s);An(i,r)||(e.uniform1iv(this.addr,r),Rn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||Ov,r[o])}function gT(e,t,n){const i=this.cache,s=t.length,r=su(n,s);An(i,r)||(e.uniform1iv(this.addr,r),Rn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||Nv,r[o])}function xT(e){switch(e){case 5126:return JE;case 35664:return QE;case 35665:return tT;case 35666:return eT;case 35674:return nT;case 35675:return iT;case 35676:return sT;case 5124:case 35670:return rT;case 35667:case 35671:return aT;case 35668:case 35672:return oT;case 35669:case 35673:return cT;case 5125:return lT;case 36294:return hT;case 36295:return uT;case 36296:return dT;case 35678:case 36198:case 36298:case 36306:case 35682:return fT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}class _T{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jE(n.type)}}class yT{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xT(n.type)}}class vT{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,n[a.id],i)}}}const ju=/(\w+)(\])?(\[|\.)?/g;function Bm(e,t){e.seq.push(t),e.map[t.id]=t}function MT(e,t,n){const i=e.name,s=i.length;for(ju.lastIndex=0;;){const r=ju.exec(i),o=ju.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Bm(n,l===void 0?new _T(a,e,t):new yT(a,e,t));break}else{let d=n.map[a];d===void 0&&(d=new vT(a),Bm(n,d)),n=d}}}class kc{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(n,o),c=t.getUniformLocation(n,a.name);MT(a,c,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in n&&i.push(o)}return i}}function Hm(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const wT=37297;let ST=0;function bT(e,t){const n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Gm=new me;function ET(e){Pe._getMatrix(Gm,Pe.workingColorSpace,e);const t=`mat3( ${Gm.elements.map(n=>n.toFixed(4))} )`;switch(Pe.getTransfer(e)){case ao:return[t,"LinearTransferOETF"];case Ze:return[t,"sRGBTransferOETF"];default:return ue("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Vm(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+bT(e.getShaderSource(t),a)}else return r}function TT(e,t){const n=ET(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const AT={[zh]:"Linear",[Lh]:"Reinhard",[Nh]:"Cineon",[Eo]:"ACESFilmic",[Oh]:"AgX",[kh]:"Neutral",[Uh]:"Custom"};function RT(e,t){const n=AT[t];return n===void 0?(ue("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const tc=new B;function CT(){Pe.getLuminanceCoefficients(tc);const e=tc.x.toFixed(4),t=tc.y.toFixed(4),n=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PT(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Va).join(`
`)}function IT(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function DT(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(t,s),o=r.name;let a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function Va(e){return e!==""}function $m(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wm(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rf(e){return e.replace(zT,NT)}const LT=new Map;function NT(e,t){let n=be[t];if(n===void 0){const i=LT.get(t);if(i!==void 0)n=be[i],ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Rf(n)}const UT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(e){return e.replace(UT,OT)}function OT(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ym(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const kT={[Ya]:"SHADOWMAP_TYPE_PCF",[ea]:"SHADOWMAP_TYPE_VSM"};function FT(e){return kT[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BT={[Xs]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[To]:"ENVMAP_TYPE_CUBE_UV"};function HT(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":BT[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const GT={[_r]:"ENVMAP_MODE_REFRACTION"};function VT(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":GT[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $T={[qp]:"ENVMAP_BLENDING_MULTIPLY",[By]:"ENVMAP_BLENDING_MIX",[Hy]:"ENVMAP_BLENDING_ADD"};function WT(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":$T[e.combine]||"ENVMAP_BLENDING_NONE"}function XT(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function YT(e,t,n,i){const s=e.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=FT(n),l=HT(n),u=VT(n),d=WT(n),h=XT(n),f=PT(n),x=IT(r),y=s.createProgram();let g,p,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Va).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Va).join(`
`),p.length>0&&(p+=`
`)):(g=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Va).join(`
`),p=[Ym(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?be.tonemapping_pars_fragment:"",n.toneMapping!==Yi?RT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,TT("linearToOutputTexel",n.outputColorSpace),CT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Va).join(`
`)),o=Rf(o),o=$m(o,n),o=Wm(o,n),a=Rf(a),a=$m(a,n),a=Wm(a,n),o=Xm(o),a=Xm(a),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",n.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+g+o,m=w+p+a,M=Hm(s,s.VERTEX_SHADER,S),v=Hm(s,s.FRAGMENT_SHADER,m);s.attachShader(y,M),s.attachShader(y,v),n.index0AttributeName!==void 0?s.bindAttribLocation(y,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(P){if(e.debug.checkShaderErrors){const T=s.getProgramInfoLog(y)||"",O=s.getShaderInfoLog(M)||"",k=s.getShaderInfoLog(v)||"",U=T.trim(),$=O.trim(),W=k.trim();let Y=!0,tt=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(Y=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,y,M,v);else{const q=Vm(s,M,"vertex"),ht=Vm(s,v,"fragment");ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+q+`
`+ht)}else U!==""?ue("WebGLProgram: Program Info Log:",U):($===""||W==="")&&(tt=!1);tt&&(P.diagnostics={runnable:Y,programLog:U,vertexShader:{log:$,prefix:g},fragmentShader:{log:W,prefix:p}})}s.deleteShader(M),s.deleteShader(v),_=new kc(s,y),E=DT(s,y)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,wT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ST++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=v,this}let qT=0;class ZT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,n,i){const s=this._getShaderCacheForMaterial(t);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new KT(t),n.set(t,i)),i}}class KT{constructor(t){this.id=qT++,this.code=t,this.usedTimes=0}}function jT(e){return e===Ys||e===io||e===so}function JT(e,t,n,i,s,r){const o=new Zh,a=new ZT,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function y(_,E,C,P,T,O){const k=P.fog,U=T.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,Y=t.get(_.envMap||$,W),tt=Y&&Y.mapping===To?Y.image.height:null,q=f[_.type];_.precision!==null&&(h=i.getMaxPrecision(_.precision),h!==_.precision&&ue("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const ht=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,nt=ht!==void 0?ht.length:0;let zt=0;U.morphAttributes.position!==void 0&&(zt=1),U.morphAttributes.normal!==void 0&&(zt=2),U.morphAttributes.color!==void 0&&(zt=3);let Qt,Nt,V,ot;if(q){const Zt=$i[q];Qt=Zt.vertexShader,Nt=Zt.fragmentShader}else{Qt=_.vertexShader,Nt=_.fragmentShader;const Zt=a.getVertexShaderStage(_),Je=a.getFragmentShaderStage(_);a.update(_,Zt,Je),V=Zt.id,ot=Je.id}const at=e.getRenderTarget(),At=e.state.buffers.depth.getReversed(),Bt=T.isInstancedMesh===!0,Vt=T.isBatchedMesh===!0,he=!!_.map,$t=!!_.matcap,oe=!!Y,xe=!!_.aoMap,pe=!!_.lightMap,Ne=!!_.bumpMap&&_.wireframe===!1,ye=!!_.normalMap,Xe=!!_.displacementMap,je=!!_.emissiveMap,Ye=!!_.metalnessMap,Ve=!!_.roughnessMap,F=_.anisotropy>0,yn=_.clearcoat>0,Re=_.dispersion>0,D=_.iridescence>0,b=_.sheen>0,Z=_.transmission>0,Q=F&&!!_.anisotropyMap,st=yn&&!!_.clearcoatMap,vt=yn&&!!_.clearcoatNormalMap,yt=yn&&!!_.clearcoatRoughnessMap,it=D&&!!_.iridescenceMap,lt=D&&!!_.iridescenceThicknessMap,Rt=b&&!!_.sheenColorMap,te=b&&!!_.sheenRoughnessMap,Ct=!!_.specularMap,Dt=!!_.specularColorMap,Xt=!!_.specularIntensityMap,ae=Z&&!!_.transmissionMap,de=Z&&!!_.thicknessMap,H=!!_.gradientMap,Pt=!!_.alphaMap,rt=_.alphaTest>0,xt=!!_.alphaHash,Et=!!_.extensions;let ft=Yi;_.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(ft=e.toneMapping);const Jt={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:Qt,fragmentShader:Nt,defines:_.defines,customVertexShaderID:V,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:Vt,batchingColor:Vt&&T._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&T.instanceColor!==null,instancingMorph:Bt&&T.morphTexture!==null,outputColorSpace:at===null?e.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Pe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:he,matcap:$t,envMap:oe,envMapMode:oe&&Y.mapping,envMapCubeUVHeight:tt,aoMap:xe,lightMap:pe,bumpMap:Ne,normalMap:ye,displacementMap:Xe,emissiveMap:je,normalMapObjectSpace:ye&&_.normalMapType===$y,normalMapTangentSpace:ye&&_.normalMapType===hh,packedNormalMap:ye&&_.normalMapType===hh&&jT(_.normalMap.format),metalnessMap:Ye,roughnessMap:Ve,anisotropy:F,anisotropyMap:Q,clearcoat:yn,clearcoatMap:st,clearcoatNormalMap:vt,clearcoatRoughnessMap:yt,dispersion:Re,iridescence:D,iridescenceMap:it,iridescenceThicknessMap:lt,sheen:b,sheenColorMap:Rt,sheenRoughnessMap:te,specularMap:Ct,specularColorMap:Dt,specularIntensityMap:Xt,transmission:Z,transmissionMap:ae,thicknessMap:de,gradientMap:H,opaque:_.transparent===!1&&_.blending===fr&&_.alphaToCoverage===!1,alphaMap:Pt,alphaTest:rt,alphaHash:xt,combine:_.combine,mapUv:he&&x(_.map.channel),aoMapUv:xe&&x(_.aoMap.channel),lightMapUv:pe&&x(_.lightMap.channel),bumpMapUv:Ne&&x(_.bumpMap.channel),normalMapUv:ye&&x(_.normalMap.channel),displacementMapUv:Xe&&x(_.displacementMap.channel),emissiveMapUv:je&&x(_.emissiveMap.channel),metalnessMapUv:Ye&&x(_.metalnessMap.channel),roughnessMapUv:Ve&&x(_.roughnessMap.channel),anisotropyMapUv:Q&&x(_.anisotropyMap.channel),clearcoatMapUv:st&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:vt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:te&&x(_.sheenRoughnessMap.channel),specularMapUv:Ct&&x(_.specularMap.channel),specularColorMapUv:Dt&&x(_.specularColorMap.channel),specularIntensityMapUv:Xt&&x(_.specularIntensityMap.channel),transmissionMapUv:ae&&x(_.transmissionMap.channel),thicknessMapUv:de&&x(_.thicknessMap.channel),alphaMapUv:Pt&&x(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ye||F),vertexNormals:!!U.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!U.attributes.uv&&(he||Pt),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||U.attributes.normal===void 0&&ye===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:At,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:zt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&C.length>0,shadowMapType:e.shadowMap.type,toneMapping:ft,decodeVideoTexture:he&&_.map.isVideoTexture===!0&&Pe.getTransfer(_.map.colorSpace)===Ze,decodeVideoTextureEmissive:je&&_.emissiveMap.isVideoTexture===!0&&Pe.getTransfer(_.emissiveMap.colorSpace)===Ze,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ge,flipSided:_.side===Jn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Et&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&_.extensions.multiDraw===!0||Vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function g(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(E,_),w(E,_),E.push(e.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function p(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function w(_,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){const E=f[_.type];let C;if(E){const P=$i[E];C=fa.clone(P.uniforms)}else C=_.uniforms;return C}function m(_,E){let C=u.get(E);return C!==void 0?++C.usedTimes:(C=new YT(e,E,_,s),l.push(C),u.set(E,C)),C}function M(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function v(_){a.remove(_)}function A(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:S,acquireProgram:m,releaseProgram:M,releaseShaderCache:v,programs:l,dispose:A}}function QT(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function s(o,a,c){e.get(o)[a]=c}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function tA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function qm(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Zm(){const e=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function a(h,f,x,y,g,p){let w=e[t];return w===void 0?(w={id:h.id,object:h,geometry:f,material:x,materialVariant:o(h),groupOrder:y,renderOrder:h.renderOrder,z:g,group:p},e[t]=w):(w.id=h.id,w.object=h,w.geometry=f,w.material=x,w.materialVariant=o(h),w.groupOrder=y,w.renderOrder=h.renderOrder,w.z=g,w.group=p),t++,w}function c(h,f,x,y,g,p){const w=a(h,f,x,y,g,p);x.transmission>0?i.push(w):x.transparent===!0?s.push(w):n.push(w)}function l(h,f,x,y,g,p){const w=a(h,f,x,y,g,p);x.transmission>0?i.unshift(w):x.transparent===!0?s.unshift(w):n.unshift(w)}function u(h,f,x){n.length>1&&n.sort(h||tA),i.length>1&&i.sort(f||qm),s.length>1&&s.sort(f||qm),x&&(n.reverse(),i.reverse(),s.reverse())}function d(){for(let h=t,f=e.length;h<f;h++){const x=e[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function eA(){let e=new WeakMap;function t(i,s){const r=e.get(i);let o;return r===void 0?(o=new Zm,e.set(i,[o])):s>=r.length?(o=new Zm,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function nA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new B,color:new ie};break;case"SpotLight":n={position:new B,direction:new B,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new B,color:new ie,distance:0,decay:0};break;case"HemisphereLight":n={direction:new B,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":n={color:new ie,position:new B,halfWidth:new B,halfHeight:new B};break}return e[t.id]=n,n}}}function iA(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let sA=0;function rA(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function aA(e){const t=new nA,n=iA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new B);const s=new B,r=new tn,o=new tn;function a(l){let u=0,d=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let f=0,x=0,y=0,g=0,p=0,w=0,S=0,m=0,M=0,v=0,A=0;l.sort(rA);for(let E=0,C=l.length;E<C;E++){const P=l[E],T=P.color,O=P.intensity,k=P.distance;let U=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ys?U=P.shadow.map.texture:U=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=T.r*O,d+=T.g*O,h+=T.b*O;else if(P.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(P.sh.coefficients[$],O);A++}else if(P.isDirectionalLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,Y=n.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=U,i.directionalShadowMatrix[f]=P.shadow.matrix,w++}i.directional[f]=$,f++}else if(P.isSpotLight){const $=t.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(T).multiplyScalar(O),$.distance=k,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,i.spot[y]=$;const W=P.shadow;if(P.map&&(i.spotLightMap[M]=P.map,M++,W.updateMatrices(P),P.castShadow&&v++),i.spotLightMatrix[y]=W.matrix,P.castShadow){const Y=n.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,i.spotShadow[y]=Y,i.spotShadowMap[y]=U,m++}y++}else if(P.isRectAreaLight){const $=t.get(P);$.color.copy(T).multiplyScalar(O),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=$,g++}else if(P.isPointLight){const $=t.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){const W=P.shadow,Y=n.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,i.pointShadow[x]=Y,i.pointShadowMap[x]=U,i.pointShadowMatrix[x]=P.shadow.matrix,S++}i.point[x]=$,x++}else if(P.isHemisphereLight){const $=t.get(P);$.skyColor.copy(P.color).multiplyScalar(O),$.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=$,p++}}g>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Wt.LTC_FLOAT_1,i.rectAreaLTC2=Wt.LTC_FLOAT_2):(i.rectAreaLTC1=Wt.LTC_HALF_1,i.rectAreaLTC2=Wt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const _=i.hash;(_.directionalLength!==f||_.pointLength!==x||_.spotLength!==y||_.rectAreaLength!==g||_.hemiLength!==p||_.numDirectionalShadows!==w||_.numPointShadows!==S||_.numSpotShadows!==m||_.numSpotMaps!==M||_.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=g,i.point.length=x,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=m,i.spotShadowMap.length=m,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=m+M-v,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=v,i.numLightProbes=A,_.directionalLength=f,_.pointLength=x,_.spotLength=y,_.rectAreaLength=g,_.hemiLength=p,_.numDirectionalShadows=w,_.numPointShadows=S,_.numSpotShadows=m,_.numSpotMaps=M,_.numLightProbes=A,i.version=sA++)}function c(l,u){let d=0,h=0,f=0,x=0,y=0;const g=u.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const S=l[p];if(S.isDirectionalLight){const m=i.directional[d];m.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(g),d++}else if(S.isSpotLight){const m=i.spot[f];m.position.setFromMatrixPosition(S.matrixWorld),m.position.applyMatrix4(g),m.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),m.direction.sub(s),m.direction.transformDirection(g),f++}else if(S.isRectAreaLight){const m=i.rectArea[x];m.position.setFromMatrixPosition(S.matrixWorld),m.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),m.halfWidth.set(S.width*.5,0,0),m.halfHeight.set(0,S.height*.5,0),m.halfWidth.applyMatrix4(o),m.halfHeight.applyMatrix4(o),x++}else if(S.isPointLight){const m=i.point[h];m.position.setFromMatrixPosition(S.matrixWorld),m.position.applyMatrix4(g),h++}else if(S.isHemisphereLight){const m=i.hemi[y];m.direction.setFromMatrixPosition(S.matrixWorld),m.direction.transformDirection(g),y++}}}return{setup:a,setupView:c,state:i}}function Km(e){const t=new aA(e),n=[],i=[],s=[];function r(h){d.camera=h,n.length=0,i.length=0,s.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(n)}function u(h){t.setupView(n,h)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function oA(e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Km(e),t.set(s,[a])):r>=o.length?(a=new Km(e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}const cA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lA=`uniform sampler2D shadow_pass;
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
}`,hA=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],uA=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],jm=new tn,za=new B,Ju=new B;function dA(e,t,n){let i=new jh;const s=new gt,r=new gt,o=new fn,a=new vv,c=new Mv,l={},u=n.maxTextureSize,d={[Es]:Jn,[Jn]:Es,[ge]:ge},h=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:cA,fragmentShader:lA}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const x=new bn;x.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new mt(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ya;let p=this.type;this.render=function(v,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||v.length===0)return;this.type===Yp&&(ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ya);const E=e.getRenderTarget(),C=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),T=e.state;T.setBlending(Xi),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);const O=p!==this.type;O&&A.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(U=>U.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,U=v.length;k<U;k++){const $=v[k],W=$.shadow;if(W===void 0){ue("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const Y=W.getFrameExtents();s.multiply(Y),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,W.mapSize.y=r.y));const tt=e.state.buffers.depth.getReversed();if(W.camera._reversedDepth=tt,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ea){if($.isPointLight){ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ri(s.x,s.y,{format:Ys,type:xi,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new yr(s.x,s.y,Di),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=os,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn}else $.isPointLight?(W.map=new p0(s.x),W.map.depthTexture=new av(s.x,qi)):(W.map=new ri(s.x,s.y),W.map.depthTexture=new yr(s.x,s.y,qi)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=os,this.type===Ya?(W.map.depthTexture.compareFunction=tt?Yh:Xh,W.map.depthTexture.minFilter=Gn,W.map.depthTexture.magFilter=Gn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Nn,W.map.depthTexture.magFilter=Nn);W.camera.updateProjectionMatrix()}const q=W.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<q;ht++){if(W.map.isWebGLCubeRenderTarget)e.setRenderTarget(W.map,ht),e.clear();else{ht===0&&(e.setRenderTarget(W.map),e.clear());const nt=W.getViewport(ht);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),T.viewport(o)}if($.isPointLight){const nt=W.camera,zt=W.matrix,Qt=$.distance||nt.far;Qt!==nt.far&&(nt.far=Qt,nt.updateProjectionMatrix()),za.setFromMatrixPosition($.matrixWorld),nt.position.copy(za),Ju.copy(nt.position),Ju.add(hA[ht]),nt.up.copy(uA[ht]),nt.lookAt(Ju),nt.updateMatrixWorld(),zt.makeTranslation(-za.x,-za.y,-za.z),jm.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(jm,nt.coordinateSystem,nt.reversedDepth)}else W.updateMatrices($);i=W.getFrustum(),m(A,_,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===ea&&w(W,_),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,e.setRenderTarget(E,C,P)};function w(v,A){const _=t.update(y);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new ri(s.x,s.y,{format:Ys,type:xi})),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,e.setRenderTarget(v.mapPass),e.clear(),e.renderBufferDirect(A,null,_,h,y,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,e.setRenderTarget(v.map),e.clear(),e.renderBufferDirect(A,null,_,f,y,null)}function S(v,A,_,E){let C=null;const P=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(P!==void 0)C=P;else if(C=_.isPointLight===!0?c:a,e.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const T=C.uuid,O=A.uuid;let k=l[T];k===void 0&&(k={},l[T]=k);let U=k[O];U===void 0&&(U=C.clone(),k[O]=U,A.addEventListener("dispose",M)),C=U}if(C.visible=A.visible,C.wireframe=A.wireframe,E===ea?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const T=e.properties.get(C);T.light=_}return C}function m(v,A,_,E,C){if(v.visible===!1)return;if(v.layers.test(A.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===ea)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,v.matrixWorld);const O=t.update(v),k=v.material;if(Array.isArray(k)){const U=O.groups;for(let $=0,W=U.length;$<W;$++){const Y=U[$],tt=k[Y.materialIndex];if(tt&&tt.visible){const q=S(v,tt,E,C);v.onBeforeShadow(e,v,A,_,O,q,Y),e.renderBufferDirect(_,null,O,q,v,Y),v.onAfterShadow(e,v,A,_,O,q,Y)}}}else if(k.visible){const U=S(v,k,E,C);v.onBeforeShadow(e,v,A,_,O,U,null),e.renderBufferDirect(_,null,O,U,v,null),v.onAfterShadow(e,v,A,_,O,U,null)}}const T=v.children;for(let O=0,k=T.length;O<k;O++)m(T[O],A,_,E,C)}function M(v){v.target.removeEventListener("dispose",M);for(const _ in l){const E=l[_],C=v.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function fA(e,t){function n(){let H=!1;const Pt=new fn;let rt=null;const xt=new fn(0,0,0,0);return{setMask:function(Et){rt!==Et&&!H&&(e.colorMask(Et,Et,Et,Et),rt=Et)},setLocked:function(Et){H=Et},setClear:function(Et,ft,Jt,Zt,Je){Je===!0&&(Et*=Zt,ft*=Zt,Jt*=Zt),Pt.set(Et,ft,Jt,Zt),xt.equals(Pt)===!1&&(e.clearColor(Et,ft,Jt,Zt),xt.copy(Pt))},reset:function(){H=!1,rt=null,xt.set(-1,0,0,0)}}}function i(){let H=!1,Pt=!1,rt=null,xt=null,Et=null;return{setReversed:function(ft){if(Pt!==ft){const Jt=t.get("EXT_clip_control");ft?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Pt=ft;const Zt=Et;Et=null,this.setClear(Zt)}},getReversed:function(){return Pt},setTest:function(ft){ft?at(e.DEPTH_TEST):At(e.DEPTH_TEST)},setMask:function(ft){rt!==ft&&!H&&(e.depthMask(ft),rt=ft)},setFunc:function(ft){if(Pt&&(ft=n2[ft]),xt!==ft){switch(ft){case El:e.depthFunc(e.NEVER);break;case Tl:e.depthFunc(e.ALWAYS);break;case Al:e.depthFunc(e.LESS);break;case xr:e.depthFunc(e.LEQUAL);break;case Rl:e.depthFunc(e.EQUAL);break;case Cl:e.depthFunc(e.GEQUAL);break;case Pl:e.depthFunc(e.GREATER);break;case Il:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}xt=ft}},setLocked:function(ft){H=ft},setClear:function(ft){Et!==ft&&(Et=ft,Pt&&(ft=1-ft),e.clearDepth(ft))},reset:function(){H=!1,rt=null,xt=null,Et=null,Pt=!1}}}function s(){let H=!1,Pt=null,rt=null,xt=null,Et=null,ft=null,Jt=null,Zt=null,Je=null;return{setTest:function(He){H||(He?at(e.STENCIL_TEST):At(e.STENCIL_TEST))},setMask:function(He){Pt!==He&&!H&&(e.stencilMask(He),Pt=He)},setFunc:function(He,kn,$n){(rt!==He||xt!==kn||Et!==$n)&&(e.stencilFunc(He,kn,$n),rt=He,xt=kn,Et=$n)},setOp:function(He,kn,$n){(ft!==He||Jt!==kn||Zt!==$n)&&(e.stencilOp(He,kn,$n),ft=He,Jt=kn,Zt=$n)},setLocked:function(He){H=He},setClear:function(He){Je!==He&&(e.clearStencil(He),Je=He)},reset:function(){H=!1,Pt=null,rt=null,xt=null,Et=null,ft=null,Jt=null,Zt=null,Je=null}}}const r=new n,o=new i,a=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,x=[],y=null,g=!1,p=null,w=null,S=null,m=null,M=null,v=null,A=null,_=new ie(0,0,0),E=0,C=!1,P=null,T=null,O=null,k=null,U=null;const $=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const tt=e.getParameter(e.VERSION);tt.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(tt)[1]),W=Y>=1):tt.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),W=Y>=2);let q=null,ht={};const nt=e.getParameter(e.SCISSOR_BOX),zt=e.getParameter(e.VIEWPORT),Qt=new fn().fromArray(nt),Nt=new fn().fromArray(zt);function V(H,Pt,rt,xt){const Et=new Uint8Array(4),ft=e.createTexture();e.bindTexture(H,ft),e.texParameteri(H,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(H,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Jt=0;Jt<rt;Jt++)H===e.TEXTURE_3D||H===e.TEXTURE_2D_ARRAY?e.texImage3D(Pt,0,e.RGBA,1,1,xt,0,e.RGBA,e.UNSIGNED_BYTE,Et):e.texImage2D(Pt+Jt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Et);return ft}const ot={};ot[e.TEXTURE_2D]=V(e.TEXTURE_2D,e.TEXTURE_2D,1),ot[e.TEXTURE_CUBE_MAP]=V(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[e.TEXTURE_2D_ARRAY]=V(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ot[e.TEXTURE_3D]=V(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(e.DEPTH_TEST),o.setFunc(xr),Ne(!1),ye(xf),at(e.CULL_FACE),xe(Xi);function at(H){u[H]!==!0&&(e.enable(H),u[H]=!0)}function At(H){u[H]!==!1&&(e.disable(H),u[H]=!1)}function Bt(H,Pt){return h[H]!==Pt?(e.bindFramebuffer(H,Pt),h[H]=Pt,H===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=Pt),H===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=Pt),!0):!1}function Vt(H,Pt){let rt=x,xt=!1;if(H){rt=f.get(Pt),rt===void 0&&(rt=[],f.set(Pt,rt));const Et=H.textures;if(rt.length!==Et.length||rt[0]!==e.COLOR_ATTACHMENT0){for(let ft=0,Jt=Et.length;ft<Jt;ft++)rt[ft]=e.COLOR_ATTACHMENT0+ft;rt.length=Et.length,xt=!0}}else rt[0]!==e.BACK&&(rt[0]=e.BACK,xt=!0);xt&&e.drawBuffers(rt)}function he(H){return y!==H?(e.useProgram(H),y=H,!0):!1}const $t={[ks]:e.FUNC_ADD,[Sy]:e.FUNC_SUBTRACT,[by]:e.FUNC_REVERSE_SUBTRACT};$t[Ey]=e.MIN,$t[Ty]=e.MAX;const oe={[Ay]:e.ZERO,[Ry]:e.ONE,[Cy]:e.SRC_COLOR,[Sl]:e.SRC_ALPHA,[Ny]:e.SRC_ALPHA_SATURATE,[zy]:e.DST_COLOR,[Iy]:e.DST_ALPHA,[Py]:e.ONE_MINUS_SRC_COLOR,[bl]:e.ONE_MINUS_SRC_ALPHA,[Ly]:e.ONE_MINUS_DST_COLOR,[Dy]:e.ONE_MINUS_DST_ALPHA,[Uy]:e.CONSTANT_COLOR,[Oy]:e.ONE_MINUS_CONSTANT_COLOR,[ky]:e.CONSTANT_ALPHA,[Fy]:e.ONE_MINUS_CONSTANT_ALPHA};function xe(H,Pt,rt,xt,Et,ft,Jt,Zt,Je,He){if(H===Xi){g===!0&&(At(e.BLEND),g=!1);return}if(g===!1&&(at(e.BLEND),g=!0),H!==wy){if(H!==p||He!==C){if((w!==ks||M!==ks)&&(e.blendEquation(e.FUNC_ADD),w=ks,M=ks),He)switch(H){case fr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pn:e.blendFunc(e.ONE,e.ONE);break;case _f:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case yf:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:ze("WebGLState: Invalid blending: ",H);break}else switch(H){case fr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case pn:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case _f:ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yf:ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ze("WebGLState: Invalid blending: ",H);break}S=null,m=null,v=null,A=null,_.set(0,0,0),E=0,p=H,C=He}return}Et=Et||Pt,ft=ft||rt,Jt=Jt||xt,(Pt!==w||Et!==M)&&(e.blendEquationSeparate($t[Pt],$t[Et]),w=Pt,M=Et),(rt!==S||xt!==m||ft!==v||Jt!==A)&&(e.blendFuncSeparate(oe[rt],oe[xt],oe[ft],oe[Jt]),S=rt,m=xt,v=ft,A=Jt),(Zt.equals(_)===!1||Je!==E)&&(e.blendColor(Zt.r,Zt.g,Zt.b,Je),_.copy(Zt),E=Je),p=H,C=!1}function pe(H,Pt){H.side===ge?At(e.CULL_FACE):at(e.CULL_FACE);let rt=H.side===Jn;Pt&&(rt=!rt),Ne(rt),H.blending===fr&&H.transparent===!1?xe(Xi):xe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const xt=H.stencilWrite;a.setTest(xt),xt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),je(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?at(e.SAMPLE_ALPHA_TO_COVERAGE):At(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(H){P!==H&&(H?e.frontFace(e.CW):e.frontFace(e.CCW),P=H)}function ye(H){H!==vy?(at(e.CULL_FACE),H!==T&&(H===xf?e.cullFace(e.BACK):H===My?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):At(e.CULL_FACE),T=H}function Xe(H){H!==O&&(W&&e.lineWidth(H),O=H)}function je(H,Pt,rt){H?(at(e.POLYGON_OFFSET_FILL),(k!==Pt||U!==rt)&&(k=Pt,U=rt,o.getReversed()&&(Pt=-Pt),e.polygonOffset(Pt,rt))):At(e.POLYGON_OFFSET_FILL)}function Ye(H){H?at(e.SCISSOR_TEST):At(e.SCISSOR_TEST)}function Ve(H){H===void 0&&(H=e.TEXTURE0+$-1),q!==H&&(e.activeTexture(H),q=H)}function F(H,Pt,rt){rt===void 0&&(q===null?rt=e.TEXTURE0+$-1:rt=q);let xt=ht[rt];xt===void 0&&(xt={type:void 0,texture:void 0},ht[rt]=xt),(xt.type!==H||xt.texture!==Pt)&&(q!==rt&&(e.activeTexture(rt),q=rt),e.bindTexture(H,Pt||ot[H]),xt.type=H,xt.texture=Pt)}function yn(){const H=ht[q];H!==void 0&&H.type!==void 0&&(e.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Re(){try{e.compressedTexImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function D(){try{e.compressedTexImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function b(){try{e.texSubImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function Z(){try{e.texSubImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function Q(){try{e.compressedTexSubImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function st(){try{e.compressedTexSubImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function vt(){try{e.texStorage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function yt(){try{e.texStorage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function it(){try{e.texImage2D(...arguments)}catch(H){ze("WebGLState:",H)}}function lt(){try{e.texImage3D(...arguments)}catch(H){ze("WebGLState:",H)}}function Rt(H){return d[H]!==void 0?d[H]:e.getParameter(H)}function te(H,Pt){d[H]!==Pt&&(e.pixelStorei(H,Pt),d[H]=Pt)}function Ct(H){Qt.equals(H)===!1&&(e.scissor(H.x,H.y,H.z,H.w),Qt.copy(H))}function Dt(H){Nt.equals(H)===!1&&(e.viewport(H.x,H.y,H.z,H.w),Nt.copy(H))}function Xt(H,Pt){let rt=l.get(Pt);rt===void 0&&(rt=new WeakMap,l.set(Pt,rt));let xt=rt.get(H);xt===void 0&&(xt=e.getUniformBlockIndex(Pt,H.name),rt.set(H,xt))}function ae(H,Pt){const xt=l.get(Pt).get(H);c.get(Pt)!==xt&&(e.uniformBlockBinding(Pt,xt,H.__bindingPointIndex),c.set(Pt,xt))}function de(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},q=null,ht={},h={},f=new WeakMap,x=[],y=null,g=!1,p=null,w=null,S=null,m=null,M=null,v=null,A=null,_=new ie(0,0,0),E=0,C=!1,P=null,T=null,O=null,k=null,U=null,Qt.set(0,0,e.canvas.width,e.canvas.height),Nt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:At,bindFramebuffer:Bt,drawBuffers:Vt,useProgram:he,setBlending:xe,setMaterial:pe,setFlipSided:Ne,setCullFace:ye,setLineWidth:Xe,setPolygonOffset:je,setScissorTest:Ye,activeTexture:Ve,bindTexture:F,unbindTexture:yn,compressedTexImage2D:Re,compressedTexImage3D:D,texImage2D:it,texImage3D:lt,pixelStorei:te,getParameter:Rt,updateUBOMapping:Xt,uniformBlockBinding:ae,texStorage2D:vt,texStorage3D:yt,texSubImage2D:b,texSubImage3D:Z,compressedTexSubImage2D:Q,compressedTexSubImage3D:st,scissor:Ct,viewport:Dt,reset:de}}function pA(e,t,n,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(D,b){return x?new OffscreenCanvas(D,b):oo("canvas")}function g(D,b,Z){let Q=1;const st=Re(D);if((st.width>Z||st.height>Z)&&(Q=Z/Math.max(st.width,st.height)),Q<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const vt=Math.floor(Q*st.width),yt=Math.floor(Q*st.height);h===void 0&&(h=y(vt,yt));const it=b?y(vt,yt):h;return it.width=vt,it.height=yt,it.getContext("2d").drawImage(D,0,0,vt,yt),ue("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+vt+"x"+yt+")."),it}else return"data"in D&&ue("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),D;return D}function p(D){return D.generateMipmaps}function w(D){e.generateMipmap(D)}function S(D){return D.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?e.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function m(D,b,Z,Q,st,vt=!1){if(D!==null){if(e[D]!==void 0)return e[D];ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let yt;Q&&(yt=t.get("EXT_texture_norm16"),yt||ue("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=b;if(b===e.RED&&(Z===e.FLOAT&&(it=e.R32F),Z===e.HALF_FLOAT&&(it=e.R16F),Z===e.UNSIGNED_BYTE&&(it=e.R8),Z===e.UNSIGNED_SHORT&&yt&&(it=yt.R16_EXT),Z===e.SHORT&&yt&&(it=yt.R16_SNORM_EXT)),b===e.RED_INTEGER&&(Z===e.UNSIGNED_BYTE&&(it=e.R8UI),Z===e.UNSIGNED_SHORT&&(it=e.R16UI),Z===e.UNSIGNED_INT&&(it=e.R32UI),Z===e.BYTE&&(it=e.R8I),Z===e.SHORT&&(it=e.R16I),Z===e.INT&&(it=e.R32I)),b===e.RG&&(Z===e.FLOAT&&(it=e.RG32F),Z===e.HALF_FLOAT&&(it=e.RG16F),Z===e.UNSIGNED_BYTE&&(it=e.RG8),Z===e.UNSIGNED_SHORT&&yt&&(it=yt.RG16_EXT),Z===e.SHORT&&yt&&(it=yt.RG16_SNORM_EXT)),b===e.RG_INTEGER&&(Z===e.UNSIGNED_BYTE&&(it=e.RG8UI),Z===e.UNSIGNED_SHORT&&(it=e.RG16UI),Z===e.UNSIGNED_INT&&(it=e.RG32UI),Z===e.BYTE&&(it=e.RG8I),Z===e.SHORT&&(it=e.RG16I),Z===e.INT&&(it=e.RG32I)),b===e.RGB_INTEGER&&(Z===e.UNSIGNED_BYTE&&(it=e.RGB8UI),Z===e.UNSIGNED_SHORT&&(it=e.RGB16UI),Z===e.UNSIGNED_INT&&(it=e.RGB32UI),Z===e.BYTE&&(it=e.RGB8I),Z===e.SHORT&&(it=e.RGB16I),Z===e.INT&&(it=e.RGB32I)),b===e.RGBA_INTEGER&&(Z===e.UNSIGNED_BYTE&&(it=e.RGBA8UI),Z===e.UNSIGNED_SHORT&&(it=e.RGBA16UI),Z===e.UNSIGNED_INT&&(it=e.RGBA32UI),Z===e.BYTE&&(it=e.RGBA8I),Z===e.SHORT&&(it=e.RGBA16I),Z===e.INT&&(it=e.RGBA32I)),b===e.RGB&&(Z===e.UNSIGNED_SHORT&&yt&&(it=yt.RGB16_EXT),Z===e.SHORT&&yt&&(it=yt.RGB16_SNORM_EXT),Z===e.UNSIGNED_INT_5_9_9_9_REV&&(it=e.RGB9_E5),Z===e.UNSIGNED_INT_10F_11F_11F_REV&&(it=e.R11F_G11F_B10F)),b===e.RGBA){const lt=vt?ao:Pe.getTransfer(st);Z===e.FLOAT&&(it=e.RGBA32F),Z===e.HALF_FLOAT&&(it=e.RGBA16F),Z===e.UNSIGNED_BYTE&&(it=lt===Ze?e.SRGB8_ALPHA8:e.RGBA8),Z===e.UNSIGNED_SHORT&&yt&&(it=yt.RGBA16_EXT),Z===e.SHORT&&yt&&(it=yt.RGBA16_SNORM_EXT),Z===e.UNSIGNED_SHORT_4_4_4_4&&(it=e.RGBA4),Z===e.UNSIGNED_SHORT_5_5_5_1&&(it=e.RGB5_A1)}return(it===e.R16F||it===e.R32F||it===e.RG16F||it===e.RG32F||it===e.RGBA16F||it===e.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function M(D,b){let Z;return D?b===null||b===qi||b===ha?Z=e.DEPTH24_STENCIL8:b===Di?Z=e.DEPTH32F_STENCIL8:b===la&&(Z=e.DEPTH24_STENCIL8,ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qi||b===ha?Z=e.DEPTH_COMPONENT24:b===Di?Z=e.DEPTH_COMPONENT32F:b===la&&(Z=e.DEPTH_COMPONENT16),Z}function v(D,b){return p(D)===!0||D.isFramebufferTexture&&D.minFilter!==Nn&&D.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function A(D){const b=D.target;b.removeEventListener("dispose",A),E(b),b.isVideoTexture&&u.delete(b),b.isHTMLTexture&&d.delete(b)}function _(D){const b=D.target;b.removeEventListener("dispose",_),P(b)}function E(D){const b=i.get(D);if(b.__webglInit===void 0)return;const Z=D.source,Q=f.get(Z);if(Q){const st=Q[b.__cacheKey];st.usedTimes--,st.usedTimes===0&&C(D),Object.keys(Q).length===0&&f.delete(Z)}i.remove(D)}function C(D){const b=i.get(D);e.deleteTexture(b.__webglTexture);const Z=D.source,Q=f.get(Z);delete Q[b.__cacheKey],o.memory.textures--}function P(D){const b=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let st=0;st<b.__webglFramebuffer[Q].length;st++)e.deleteFramebuffer(b.__webglFramebuffer[Q][st]);else e.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)e.deleteFramebuffer(b.__webglFramebuffer[Q]);else e.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&e.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&e.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&e.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&e.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Z=D.textures;for(let Q=0,st=Z.length;Q<st;Q++){const vt=i.get(Z[Q]);vt.__webglTexture&&(e.deleteTexture(vt.__webglTexture),o.memory.textures--),i.remove(Z[Q])}i.remove(D)}let T=0;function O(){T=0}function k(){return T}function U(D){T=D}function $(){const D=T;return D>=s.maxTextures&&ue("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),T+=1,D}function W(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function Y(D,b){const Z=i.get(D);if(D.isVideoTexture&&F(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&Z.__version!==D.version){const Q=D.image;if(Q===null)ue("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ue("WebGLRenderer: Texture marked for update but image is incomplete");else{At(Z,D,b);return}}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,Z.__webglTexture,e.TEXTURE0+b)}function tt(D,b){const Z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){At(Z,D,b);return}else D.isExternalTexture&&(Z.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,Z.__webglTexture,e.TEXTURE0+b)}function q(D,b){const Z=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){At(Z,D,b);return}n.bindTexture(e.TEXTURE_3D,Z.__webglTexture,e.TEXTURE0+b)}function ht(D,b){const Z=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&Z.__version!==D.version){Bt(Z,D,b);return}n.bindTexture(e.TEXTURE_CUBE_MAP,Z.__webglTexture,e.TEXTURE0+b)}const nt={[Dl]:e.REPEAT,[rs]:e.CLAMP_TO_EDGE,[zl]:e.MIRRORED_REPEAT},zt={[Nn]:e.NEAREST,[Gy]:e.NEAREST_MIPMAP_NEAREST,[Ga]:e.NEAREST_MIPMAP_LINEAR,[Gn]:e.LINEAR,[zc]:e.LINEAR_MIPMAP_NEAREST,[Fs]:e.LINEAR_MIPMAP_LINEAR},Qt={[Wy]:e.NEVER,[Ky]:e.ALWAYS,[Xy]:e.LESS,[Xh]:e.LEQUAL,[Yy]:e.EQUAL,[Yh]:e.GEQUAL,[qy]:e.GREATER,[Zy]:e.NOTEQUAL};function Nt(D,b){if(b.type===Di&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Gn||b.magFilter===zc||b.magFilter===Ga||b.magFilter===Fs||b.minFilter===Gn||b.minFilter===zc||b.minFilter===Ga||b.minFilter===Fs)&&ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(D,e.TEXTURE_WRAP_S,nt[b.wrapS]),e.texParameteri(D,e.TEXTURE_WRAP_T,nt[b.wrapT]),(D===e.TEXTURE_3D||D===e.TEXTURE_2D_ARRAY)&&e.texParameteri(D,e.TEXTURE_WRAP_R,nt[b.wrapR]),e.texParameteri(D,e.TEXTURE_MAG_FILTER,zt[b.magFilter]),e.texParameteri(D,e.TEXTURE_MIN_FILTER,zt[b.minFilter]),b.compareFunction&&(e.texParameteri(D,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(D,e.TEXTURE_COMPARE_FUNC,Qt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==Ga&&b.minFilter!==Fs||b.type===Di&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function V(D,b){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",A));const Q=b.source;let st=f.get(Q);st===void 0&&(st={},f.set(Q,st));const vt=W(b);if(vt!==D.__cacheKey){st[vt]===void 0&&(st[vt]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),st[vt].usedTimes++;const yt=st[D.__cacheKey];yt!==void 0&&(st[D.__cacheKey].usedTimes--,yt.usedTimes===0&&C(b)),D.__cacheKey=vt,D.__webglTexture=st[vt].texture}return Z}function ot(D,b,Z){return Math.floor(Math.floor(D/Z)/b)}function at(D,b,Z,Q){const vt=D.updateRanges;if(vt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,b.width,b.height,Z,Q,b.data);else{vt.sort((te,Ct)=>te.start-Ct.start);let yt=0;for(let te=1;te<vt.length;te++){const Ct=vt[yt],Dt=vt[te],Xt=Ct.start+Ct.count,ae=ot(Dt.start,b.width,4),de=ot(Ct.start,b.width,4);Dt.start<=Xt+1&&ae===de&&ot(Dt.start+Dt.count-1,b.width,4)===ae?Ct.count=Math.max(Ct.count,Dt.start+Dt.count-Ct.start):(++yt,vt[yt]=Dt)}vt.length=yt+1;const it=n.getParameter(e.UNPACK_ROW_LENGTH),lt=n.getParameter(e.UNPACK_SKIP_PIXELS),Rt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,b.width);for(let te=0,Ct=vt.length;te<Ct;te++){const Dt=vt[te],Xt=Math.floor(Dt.start/4),ae=Math.ceil(Dt.count/4),de=Xt%b.width,H=Math.floor(Xt/b.width),Pt=ae,rt=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,de),n.pixelStorei(e.UNPACK_SKIP_ROWS,H),n.texSubImage2D(e.TEXTURE_2D,0,de,H,Pt,rt,Z,Q,b.data)}D.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,it),n.pixelStorei(e.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(e.UNPACK_SKIP_ROWS,Rt)}}function At(D,b,Z){let Q=e.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=e.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=e.TEXTURE_3D);const st=V(D,b),vt=b.source;n.bindTexture(Q,D.__webglTexture,e.TEXTURE0+Z);const yt=i.get(vt);if(vt.version!==yt.__version||st===!0){if(n.activeTexture(e.TEXTURE0+Z),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const rt=Pe.getPrimaries(Pe.workingColorSpace),xt=b.colorSpace===Ms?null:Pe.getPrimaries(b.colorSpace),Et=b.colorSpace===Ms||rt===xt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}n.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment);let lt=g(b.image,!1,s.maxTextureSize);lt=yn(b,lt);const Rt=r.convert(b.format,b.colorSpace),te=r.convert(b.type);let Ct=m(b.internalFormat,Rt,te,b.normalized,b.colorSpace,b.isVideoTexture);Nt(Q,b);let Dt;const Xt=b.mipmaps,ae=b.isVideoTexture!==!0,de=yt.__version===void 0||st===!0,H=vt.dataReady,Pt=v(b,lt);if(b.isDepthTexture)Ct=M(b.format===Bs,b.type),de&&(ae?n.texStorage2D(e.TEXTURE_2D,1,Ct,lt.width,lt.height):n.texImage2D(e.TEXTURE_2D,0,Ct,lt.width,lt.height,0,Rt,te,null));else if(b.isDataTexture)if(Xt.length>0){ae&&de&&n.texStorage2D(e.TEXTURE_2D,Pt,Ct,Xt[0].width,Xt[0].height);for(let rt=0,xt=Xt.length;rt<xt;rt++)Dt=Xt[rt],ae?H&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,Dt.width,Dt.height,Rt,te,Dt.data):n.texImage2D(e.TEXTURE_2D,rt,Ct,Dt.width,Dt.height,0,Rt,te,Dt.data);b.generateMipmaps=!1}else ae?(de&&n.texStorage2D(e.TEXTURE_2D,Pt,Ct,lt.width,lt.height),H&&at(b,lt,Rt,te)):n.texImage2D(e.TEXTURE_2D,0,Ct,lt.width,lt.height,0,Rt,te,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ae&&de&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Pt,Ct,Xt[0].width,Xt[0].height,lt.depth);for(let rt=0,xt=Xt.length;rt<xt;rt++)if(Dt=Xt[rt],b.format!==zi)if(Rt!==null)if(ae){if(H)if(b.layerUpdates.size>0){const Et=Cm(Dt.width,Dt.height,b.format,b.type);for(const ft of b.layerUpdates){const Jt=Dt.data.subarray(ft*Et/Dt.data.BYTES_PER_ELEMENT,(ft+1)*Et/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,ft,Dt.width,Dt.height,1,Rt,Jt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,0,Dt.width,Dt.height,lt.depth,Rt,Dt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,rt,Ct,Dt.width,Dt.height,lt.depth,0,Dt.data,0,0);else ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?H&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,rt,0,0,0,Dt.width,Dt.height,lt.depth,Rt,te,Dt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,rt,Ct,Dt.width,Dt.height,lt.depth,0,Rt,te,Dt.data)}else{ae&&de&&n.texStorage2D(e.TEXTURE_2D,Pt,Ct,Xt[0].width,Xt[0].height);for(let rt=0,xt=Xt.length;rt<xt;rt++)Dt=Xt[rt],b.format!==zi?Rt!==null?ae?H&&n.compressedTexSubImage2D(e.TEXTURE_2D,rt,0,0,Dt.width,Dt.height,Rt,Dt.data):n.compressedTexImage2D(e.TEXTURE_2D,rt,Ct,Dt.width,Dt.height,0,Dt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?H&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,Dt.width,Dt.height,Rt,te,Dt.data):n.texImage2D(e.TEXTURE_2D,rt,Ct,Dt.width,Dt.height,0,Rt,te,Dt.data)}else if(b.isDataArrayTexture)if(ae){if(de&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Pt,Ct,lt.width,lt.height,lt.depth),H)if(b.layerUpdates.size>0){const rt=Cm(lt.width,lt.height,b.format,b.type);for(const xt of b.layerUpdates){const Et=lt.data.subarray(xt*rt/lt.data.BYTES_PER_ELEMENT,(xt+1)*rt/lt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,xt,lt.width,lt.height,1,Rt,te,Et)}b.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Rt,te,lt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,Ct,lt.width,lt.height,lt.depth,0,Rt,te,lt.data);else if(b.isData3DTexture)ae?(de&&n.texStorage3D(e.TEXTURE_3D,Pt,Ct,lt.width,lt.height,lt.depth),H&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Rt,te,lt.data)):n.texImage3D(e.TEXTURE_3D,0,Ct,lt.width,lt.height,lt.depth,0,Rt,te,lt.data);else if(b.isFramebufferTexture){if(de)if(ae)n.texStorage2D(e.TEXTURE_2D,Pt,Ct,lt.width,lt.height);else{let rt=lt.width,xt=lt.height;for(let Et=0;Et<Pt;Et++)n.texImage2D(e.TEXTURE_2D,Et,Ct,rt,xt,0,Rt,te,null),rt>>=1,xt>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in e){const rt=e.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),lt.parentNode!==rt){rt.appendChild(lt),d.add(b),rt.onpaint=xt=>{const Et=xt.changedElements;for(const ft of d)Et.includes(ft.image)&&(ft.needsUpdate=!0)},rt.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,lt);else{const Et=e.RGBA,ft=e.RGBA,Jt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,Et,ft,Jt,lt)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(ae&&de){const rt=Re(Xt[0]);n.texStorage2D(e.TEXTURE_2D,Pt,Ct,rt.width,rt.height)}for(let rt=0,xt=Xt.length;rt<xt;rt++)Dt=Xt[rt],ae?H&&n.texSubImage2D(e.TEXTURE_2D,rt,0,0,Rt,te,Dt):n.texImage2D(e.TEXTURE_2D,rt,Ct,Rt,te,Dt);b.generateMipmaps=!1}else if(ae){if(de){const rt=Re(lt);n.texStorage2D(e.TEXTURE_2D,Pt,Ct,rt.width,rt.height)}H&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,Rt,te,lt)}else n.texImage2D(e.TEXTURE_2D,0,Ct,Rt,te,lt);p(b)&&w(Q),yt.__version=vt.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Bt(D,b,Z){if(b.image.length!==6)return;const Q=V(D,b),st=b.source;n.bindTexture(e.TEXTURE_CUBE_MAP,D.__webglTexture,e.TEXTURE0+Z);const vt=i.get(st);if(st.version!==vt.__version||Q===!0){n.activeTexture(e.TEXTURE0+Z);const yt=Pe.getPrimaries(Pe.workingColorSpace),it=b.colorSpace===Ms?null:Pe.getPrimaries(b.colorSpace),lt=b.colorSpace===Ms||yt===it?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const Rt=b.isCompressedTexture||b.image[0].isCompressedTexture,te=b.image[0]&&b.image[0].isDataTexture,Ct=[];for(let ft=0;ft<6;ft++)!Rt&&!te?Ct[ft]=g(b.image[ft],!0,s.maxCubemapSize):Ct[ft]=te?b.image[ft].image:b.image[ft],Ct[ft]=yn(b,Ct[ft]);const Dt=Ct[0],Xt=r.convert(b.format,b.colorSpace),ae=r.convert(b.type),de=m(b.internalFormat,Xt,ae,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,Pt=vt.__version===void 0||Q===!0,rt=st.dataReady;let xt=v(b,Dt);Nt(e.TEXTURE_CUBE_MAP,b);let Et;if(Rt){H&&Pt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,xt,de,Dt.width,Dt.height);for(let ft=0;ft<6;ft++){Et=Ct[ft].mipmaps;for(let Jt=0;Jt<Et.length;Jt++){const Zt=Et[Jt];b.format!==zi?Xt!==null?H?rt&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,0,0,Zt.width,Zt.height,Xt,Zt.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,de,Zt.width,Zt.height,0,Zt.data):ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,0,0,Zt.width,Zt.height,Xt,ae,Zt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt,de,Zt.width,Zt.height,0,Xt,ae,Zt.data)}}}else{if(Et=b.mipmaps,H&&Pt){Et.length>0&&xt++;const ft=Re(Ct[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,xt,de,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(te){H?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Ct[ft].width,Ct[ft].height,Xt,ae,Ct[ft].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,de,Ct[ft].width,Ct[ft].height,0,Xt,ae,Ct[ft].data);for(let Jt=0;Jt<Et.length;Jt++){const Je=Et[Jt].image[ft].image;H?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,0,0,Je.width,Je.height,Xt,ae,Je.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,de,Je.width,Je.height,0,Xt,ae,Je.data)}}else{H?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Xt,ae,Ct[ft]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,de,Xt,ae,Ct[ft]);for(let Jt=0;Jt<Et.length;Jt++){const Zt=Et[Jt];H?rt&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,0,0,Xt,ae,Zt.image[ft]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Jt+1,de,Xt,ae,Zt.image[ft])}}}p(b)&&w(e.TEXTURE_CUBE_MAP),vt.__version=st.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Vt(D,b,Z,Q,st,vt){const yt=r.convert(Z.format,Z.colorSpace),it=r.convert(Z.type),lt=m(Z.internalFormat,yt,it,Z.normalized,Z.colorSpace),Rt=i.get(b),te=i.get(Z);if(te.__renderTarget=b,!Rt.__hasExternalTextures){const Ct=Math.max(1,b.width>>vt),Dt=Math.max(1,b.height>>vt);st===e.TEXTURE_3D||st===e.TEXTURE_2D_ARRAY?n.texImage3D(st,vt,lt,Ct,Dt,b.depth,0,yt,it,null):n.texImage2D(st,vt,lt,Ct,Dt,0,yt,it,null)}n.bindFramebuffer(e.FRAMEBUFFER,D),Ve(b)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Q,st,te.__webglTexture,0,Ye(b)):(st===e.TEXTURE_2D||st>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,Q,st,te.__webglTexture,vt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function he(D,b,Z){if(e.bindRenderbuffer(e.RENDERBUFFER,D),b.depthBuffer){const Q=b.depthTexture,st=Q&&Q.isDepthTexture?Q.type:null,vt=M(b.stencilBuffer,st),yt=b.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ve(b)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ye(b),vt,b.width,b.height):Z?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ye(b),vt,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,vt,b.width,b.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,yt,e.RENDERBUFFER,D)}else{const Q=b.textures;for(let st=0;st<Q.length;st++){const vt=Q[st],yt=r.convert(vt.format,vt.colorSpace),it=r.convert(vt.type),lt=m(vt.internalFormat,yt,it,vt.normalized,vt.colorSpace);Ve(b)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Ye(b),lt,b.width,b.height):Z?e.renderbufferStorageMultisample(e.RENDERBUFFER,Ye(b),lt,b.width,b.height):e.renderbufferStorage(e.RENDERBUFFER,lt,b.width,b.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function $t(D,b,Z){const Q=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const st=i.get(b.depthTexture);if(st.__renderTarget=b,(!st.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),Q){if(st.__webglInit===void 0&&(st.__webglInit=!0,b.depthTexture.addEventListener("dispose",A)),st.__webglTexture===void 0){st.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,st.__webglTexture),Nt(e.TEXTURE_CUBE_MAP,b.depthTexture);const Rt=r.convert(b.depthTexture.format),te=r.convert(b.depthTexture.type);let Ct;b.depthTexture.format===os?Ct=e.DEPTH_COMPONENT24:b.depthTexture.format===Bs&&(Ct=e.DEPTH24_STENCIL8);for(let Dt=0;Dt<6;Dt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,Ct,b.width,b.height,0,Rt,te,null)}}else Y(b.depthTexture,0);const vt=st.__webglTexture,yt=Ye(b),it=Q?e.TEXTURE_CUBE_MAP_POSITIVE_X+Z:e.TEXTURE_2D,lt=b.depthTexture.format===Bs?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(b.depthTexture.format===os)Ve(b)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,it,vt,0,yt):e.framebufferTexture2D(e.FRAMEBUFFER,lt,it,vt,0);else if(b.depthTexture.format===Bs)Ve(b)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,it,vt,0,yt):e.framebufferTexture2D(e.FRAMEBUFFER,lt,it,vt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(D){const b=i.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const Q=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const st=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",st)};Q.addEventListener("dispose",st),b.__depthDisposeCallback=st}b.__boundDepthTexture=Q}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(Z)for(let Q=0;Q<6;Q++)$t(b.__webglFramebuffer[Q],D,Q);else{const Q=D.texture.mipmaps;Q&&Q.length>0?$t(b.__webglFramebuffer[0],D,0):$t(b.__webglFramebuffer,D,0)}else if(Z){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=e.createRenderbuffer(),he(b.__webglDepthbuffer[Q],D,!1);else{const st=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,vt=b.__webglDepthbuffer[Q];e.bindRenderbuffer(e.RENDERBUFFER,vt),e.framebufferRenderbuffer(e.FRAMEBUFFER,st,e.RENDERBUFFER,vt)}}else{const Q=D.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=e.createRenderbuffer(),he(b.__webglDepthbuffer,D,!1);else{const st=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,vt=b.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,vt),e.framebufferRenderbuffer(e.FRAMEBUFFER,st,e.RENDERBUFFER,vt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function xe(D,b,Z){const Q=i.get(D);b!==void 0&&Vt(Q.__webglFramebuffer,D,D.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),Z!==void 0&&oe(D)}function pe(D){const b=D.texture,Z=i.get(D),Q=i.get(b);D.addEventListener("dispose",_);const st=D.textures,vt=D.isWebGLCubeRenderTarget===!0,yt=st.length>1;if(yt||(Q.__webglTexture===void 0&&(Q.__webglTexture=e.createTexture()),Q.__version=b.version,o.memory.textures++),vt){Z.__webglFramebuffer=[];for(let it=0;it<6;it++)if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer[it]=[];for(let lt=0;lt<b.mipmaps.length;lt++)Z.__webglFramebuffer[it][lt]=e.createFramebuffer()}else Z.__webglFramebuffer[it]=e.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){Z.__webglFramebuffer=[];for(let it=0;it<b.mipmaps.length;it++)Z.__webglFramebuffer[it]=e.createFramebuffer()}else Z.__webglFramebuffer=e.createFramebuffer();if(yt)for(let it=0,lt=st.length;it<lt;it++){const Rt=i.get(st[it]);Rt.__webglTexture===void 0&&(Rt.__webglTexture=e.createTexture(),o.memory.textures++)}if(D.samples>0&&Ve(D)===!1){Z.__webglMultisampledFramebuffer=e.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let it=0;it<st.length;it++){const lt=st[it];Z.__webglColorRenderbuffer[it]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,Z.__webglColorRenderbuffer[it]);const Rt=r.convert(lt.format,lt.colorSpace),te=r.convert(lt.type),Ct=m(lt.internalFormat,Rt,te,lt.normalized,lt.colorSpace,D.isXRRenderTarget===!0),Dt=Ye(D);e.renderbufferStorageMultisample(e.RENDERBUFFER,Dt,Ct,D.width,D.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+it,e.RENDERBUFFER,Z.__webglColorRenderbuffer[it])}e.bindRenderbuffer(e.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=e.createRenderbuffer(),he(Z.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(vt){n.bindTexture(e.TEXTURE_CUBE_MAP,Q.__webglTexture),Nt(e.TEXTURE_CUBE_MAP,b);for(let it=0;it<6;it++)if(b.mipmaps&&b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)Vt(Z.__webglFramebuffer[it][lt],D,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,lt);else Vt(Z.__webglFramebuffer[it],D,b,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(b)&&w(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(yt){for(let it=0,lt=st.length;it<lt;it++){const Rt=st[it],te=i.get(Rt);let Ct=e.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ct=D.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Ct,te.__webglTexture),Nt(Ct,Rt),Vt(Z.__webglFramebuffer,D,Rt,e.COLOR_ATTACHMENT0+it,Ct,0),p(Rt)&&w(Ct)}n.unbindTexture()}else{let it=e.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(it=D.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(it,Q.__webglTexture),Nt(it,b),b.mipmaps&&b.mipmaps.length>0)for(let lt=0;lt<b.mipmaps.length;lt++)Vt(Z.__webglFramebuffer[lt],D,b,e.COLOR_ATTACHMENT0,it,lt);else Vt(Z.__webglFramebuffer,D,b,e.COLOR_ATTACHMENT0,it,0);p(b)&&w(it),n.unbindTexture()}D.depthBuffer&&oe(D)}function Ne(D){const b=D.textures;for(let Z=0,Q=b.length;Z<Q;Z++){const st=b[Z];if(p(st)){const vt=S(D),yt=i.get(st).__webglTexture;n.bindTexture(vt,yt),w(vt),n.unbindTexture()}}}const ye=[],Xe=[];function je(D){if(D.samples>0){if(Ve(D)===!1){const b=D.textures,Z=D.width,Q=D.height;let st=e.COLOR_BUFFER_BIT;const vt=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,yt=i.get(D),it=b.length>1;if(it)for(let Rt=0;Rt<b.length;Rt++)n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const lt=D.texture.mipmaps;lt&&lt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Rt=0;Rt<b.length;Rt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(st|=e.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(st|=e.STENCIL_BUFFER_BIT)),it){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,yt.__webglColorRenderbuffer[Rt]);const te=i.get(b[Rt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,te,0)}e.blitFramebuffer(0,0,Z,Q,0,0,Z,Q,st,e.NEAREST),c===!0&&(ye.length=0,Xe.length=0,ye.push(e.COLOR_ATTACHMENT0+Rt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(ye.push(vt),Xe.push(vt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Xe)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ye))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),it)for(let Rt=0;Rt<b.length;Rt++){n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.RENDERBUFFER,yt.__webglColorRenderbuffer[Rt]);const te=i.get(b[Rt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,yt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Rt,e.TEXTURE_2D,te,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const b=D.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[b])}}}function Ye(D){return Math.min(s.maxSamples,D.samples)}function Ve(D){const b=i.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(D){const b=o.render.frame;u.get(D)!==b&&(u.set(D,b),D.update())}function yn(D,b){const Z=D.colorSpace,Q=D.format,st=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==ro&&Z!==Ms&&(Pe.getTransfer(Z)===Ze?(Q!==zi||st!==gi)&&ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ze("WebGLTextures: Unsupported texture color space:",Z)),b}function Re(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=$,this.resetTextureUnits=O,this.getTextureUnits=k,this.setTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=tt,this.setTexture3D=q,this.setTextureCube=ht,this.rebindTextures=xe,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Vt,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kv(e,t){function n(i,s=Ms){let r;const o=Pe.getTransfer(s);if(i===gi)return e.UNSIGNED_BYTE;if(i===Bh)return e.UNSIGNED_SHORT_4_4_4_4;if(i===Hh)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Jp)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Qp)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Kp)return e.BYTE;if(i===jp)return e.SHORT;if(i===la)return e.UNSIGNED_SHORT;if(i===Fh)return e.INT;if(i===qi)return e.UNSIGNED_INT;if(i===Di)return e.FLOAT;if(i===xi)return e.HALF_FLOAT;if(i===t0)return e.ALPHA;if(i===e0)return e.RGB;if(i===zi)return e.RGBA;if(i===os)return e.DEPTH_COMPONENT;if(i===Bs)return e.DEPTH_STENCIL;if(i===Gh)return e.RED;if(i===Vh)return e.RED_INTEGER;if(i===Ys)return e.RG;if(i===$h)return e.RG_INTEGER;if(i===Wh)return e.RGBA_INTEGER;if(i===qa||i===Za||i===Ka||i===ja)if(o===Ze)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ja)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ll||i===Nl||i===Ul||i===Ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kl||i===Fl||i===Bl||i===Hl||i===Gl||i===io||i===Vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===kl||i===Fl)return o===Ze?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Bl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hl)return r.COMPRESSED_R11_EAC;if(i===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===io)return r.COMPRESSED_RG11_EAC;if(i===Vl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$l||i===Wl||i===Xl||i===Yl||i===ql||i===Zl||i===Kl||i===jl||i===Jl||i===Ql||i===th||i===eh||i===nh||i===ih)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===$l)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ql)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jl)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ql)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===th)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eh)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nh)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ih)return o===Ze?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sh||i===rh||i===ah)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===sh)return o===Ze?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ah)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oh||i===ch||i===so||i===lh)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===oh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ch)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===so)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ha?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const mA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gA=`
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

}`;class xA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new h0(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Vn({vertexShader:mA,fragmentShader:gA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new mt(new cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _A extends qs{constructor(t,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,x=null;const y=typeof XRWebGLBinding<"u",g=new xA,p={},w=n.getContextAttributes();let S=null,m=null;const M=[],v=[],A=new gt;let _=null;const E=new mi;E.viewport=new fn;const C=new mi;C.viewport=new fn;const P=[E,C],T=new Cv;let O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ot=M[V];return ot===void 0&&(ot=new Nc,M[V]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(V){let ot=M[V];return ot===void 0&&(ot=new Nc,M[V]=ot),ot.getGripSpace()},this.getHand=function(V){let ot=M[V];return ot===void 0&&(ot=new Nc,M[V]=ot),ot.getHandSpace()};function U(V){const ot=v.indexOf(V.inputSource);if(ot===-1)return;const at=M[ot];at!==void 0&&(at.update(V.inputSource,V.frame,l||o),at.dispatchEvent({type:V.type,data:V.inputSource}))}function $(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",W);for(let V=0;V<M.length;V++){const ot=v[V];ot!==null&&(v[V]=null,M[V].disconnect(ot))}O=null,k=null,g.reset();for(const V in p)delete p[V];t.setRenderTarget(S),f=null,h=null,d=null,s=null,m=null,Nt.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,i.isPresenting===!0&&ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",$),s.addEventListener("inputsourceschange",W),w.xrCompatible!==!0&&await n.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,At=null,Bt=null;w.depth&&(Bt=w.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,at=w.stencil?Bs:os,At=w.stencil?ha:qi);const Vt={colorFormat:n.RGBA8,depthFormat:Bt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Vt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),m=new ri(h.textureWidth,h.textureHeight,{format:zi,type:gi,depthTexture:new yr(h.textureWidth,h.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const at={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,at),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),m=new ri(f.framebufferWidth,f.framebufferHeight,{format:zi,type:gi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}m.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Nt.setContext(s),Nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(V){for(let ot=0;ot<V.removed.length;ot++){const at=V.removed[ot],At=v.indexOf(at);At>=0&&(v[At]=null,M[At].disconnect(at))}for(let ot=0;ot<V.added.length;ot++){const at=V.added[ot];let At=v.indexOf(at);if(At===-1){for(let Vt=0;Vt<M.length;Vt++)if(Vt>=v.length){v.push(at),At=Vt;break}else if(v[Vt]===null){v[Vt]=at,At=Vt;break}if(At===-1)break}const Bt=M[At];Bt&&Bt.connect(at)}}const Y=new B,tt=new B;function q(V,ot,at){Y.setFromMatrixPosition(ot.matrixWorld),tt.setFromMatrixPosition(at.matrixWorld);const At=Y.distanceTo(tt),Bt=ot.projectionMatrix.elements,Vt=at.projectionMatrix.elements,he=Bt[14]/(Bt[10]-1),$t=Bt[14]/(Bt[10]+1),oe=(Bt[9]+1)/Bt[5],xe=(Bt[9]-1)/Bt[5],pe=(Bt[8]-1)/Bt[0],Ne=(Vt[8]+1)/Vt[0],ye=he*pe,Xe=he*Ne,je=At/(-pe+Ne),Ye=je*-pe;if(ot.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ye),V.translateZ(je),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Bt[10]===-1)V.projectionMatrix.copy(ot.projectionMatrix),V.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Ve=he+je,F=$t+je,yn=ye-Ye,Re=Xe+(At-Ye),D=oe*$t/F*Ve,b=xe*$t/F*Ve;V.projectionMatrix.makePerspective(yn,Re,D,b,Ve,F),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function ht(V,ot){ot===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ot.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;let ot=V.near,at=V.far;g.texture!==null&&(g.depthNear>0&&(ot=g.depthNear),g.depthFar>0&&(at=g.depthFar)),T.near=C.near=E.near=ot,T.far=C.far=E.far=at,(O!==T.near||k!==T.far)&&(s.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,k=T.far),T.layers.mask=V.layers.mask|6,E.layers.mask=T.layers.mask&-5,C.layers.mask=T.layers.mask&-3;const At=V.parent,Bt=T.cameras;ht(T,At);for(let Vt=0;Vt<Bt.length;Vt++)ht(Bt[Vt],At);Bt.length===2?q(T,E,C):T.projectionMatrix.copy(E.projectionMatrix),nt(V,T,At)};function nt(V,ot,at){at===null?V.matrix.copy(ot.matrixWorld):(V.matrix.copy(at.matrixWorld),V.matrix.invert(),V.matrix.multiply(ot.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ot.projectionMatrix),V.projectionMatrixInverse.copy(ot.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=wf*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(V){c=V,h!==null&&(h.fixedFoveation=V),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(T)},this.getCameraTexture=function(V){return p[V]};let zt=null;function Qt(V,ot){if(u=ot.getViewerPose(l||o),x=ot,u!==null){const at=u.views;f!==null&&(t.setRenderTargetFramebuffer(m,f.framebuffer),t.setRenderTarget(m));let At=!1;at.length!==T.cameras.length&&(T.cameras.length=0,At=!0);for(let $t=0;$t<at.length;$t++){const oe=at[$t];let xe=null;if(f!==null)xe=f.getViewport(oe);else{const Ne=d.getViewSubImage(h,oe);xe=Ne.viewport,$t===0&&(t.setRenderTargetTextures(m,Ne.colorTexture,Ne.depthStencilTexture),t.setRenderTarget(m))}let pe=P[$t];pe===void 0&&(pe=new mi,pe.layers.enable($t),pe.viewport=new fn,P[$t]=pe),pe.matrix.fromArray(oe.transform.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale),pe.projectionMatrix.fromArray(oe.projectionMatrix),pe.projectionMatrixInverse.copy(pe.projectionMatrix).invert(),pe.viewport.set(xe.x,xe.y,xe.width,xe.height),$t===0&&(T.matrix.copy(pe.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),At===!0&&T.cameras.push(pe)}const Bt=s.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const $t=d.getDepthInformation(at[0]);$t&&$t.isValid&&$t.texture&&g.init($t,s.renderState)}if(Bt&&Bt.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let $t=0;$t<at.length;$t++){const oe=at[$t].camera;if(oe){let xe=p[oe];xe||(xe=new h0,p[oe]=xe);const pe=d.getCameraImage(oe);xe.sourceTexture=pe}}}}for(let at=0;at<M.length;at++){const At=v[at],Bt=M[at];At!==null&&Bt!==void 0&&Bt.update(At,ot,l||o)}zt&&zt(V,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),x=null}const Nt=new Dv;Nt.setAnimationLoop(Qt),this.setAnimationLoop=function(V){zt=V},this.dispose=function(){}}}const yA=new tn,Fv=new me;Fv.set(-1,0,0,0,1,0,0,0,1);function vA(e,t){function n(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,_v(e)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,w,S,m){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&f(g,p,m)):p.isMeshMatcapMaterial?(r(g,p),x(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,w,S):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,n(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Jn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,n(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Jn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,n(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,n(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=t.get(p),S=w.envMap,m=w.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(yA.makeRotationFromEuler(m)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Fv),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=S*.5,p.map&&(g.map.value=p.map,n(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,n(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,n(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){const w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function MA(e,t,n,i){let s={},r={},o=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(m,M){const v=M.program;i.uniformBlockBinding(m,v)}function l(m,M){let v=s[m.id];v===void 0&&(g(m),v=u(m),s[m.id]=v,m.addEventListener("dispose",w));const A=M.program;i.updateUBOMapping(m,A);const _=t.render.frame;r[m.id]!==_&&(h(m),r[m.id]=_)}function u(m){const M=d();m.__bindingPointIndex=M;const v=e.createBuffer(),A=m.__size,_=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,v),e.bufferData(e.UNIFORM_BUFFER,A,_),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,v),v}function d(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(m){const M=s[m.id],v=m.uniforms,A=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let _=0,E=v.length;_<E;_++){const C=v[_];if(Array.isArray(C))for(let P=0,T=C.length;P<T;P++)f(C[P],_,P,A);else f(C,_,0,A)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(m,M,v,A){if(y(m,M,v,A)===!0){const _=m.__offset,E=m.value;if(Array.isArray(E)){let C=0;for(let P=0;P<E.length;P++){const T=E[P],O=p(T);x(T,m.__data,C),typeof T!="number"&&typeof T!="boolean"&&!T.isMatrix3&&!ArrayBuffer.isView(T)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(E,m.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,m.__data)}}function x(m,M,v){typeof m=="number"||typeof m=="boolean"?M[0]=m:m.isMatrix3?(M[0]=m.elements[0],M[1]=m.elements[1],M[2]=m.elements[2],M[3]=0,M[4]=m.elements[3],M[5]=m.elements[4],M[6]=m.elements[5],M[7]=0,M[8]=m.elements[6],M[9]=m.elements[7],M[10]=m.elements[8],M[11]=0):ArrayBuffer.isView(m)?M.set(new m.constructor(m.buffer,m.byteOffset,M.length)):m.toArray(M,v)}function y(m,M,v,A){const _=m.value,E=M+"_"+v;if(A[E]===void 0)return typeof _=="number"||typeof _=="boolean"?A[E]=_:ArrayBuffer.isView(_)?A[E]=_.slice():A[E]=_.clone(),!0;{const C=A[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return A[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function g(m){const M=m.uniforms;let v=0;const A=16;for(let E=0,C=M.length;E<C;E++){const P=Array.isArray(M[E])?M[E]:[M[E]];for(let T=0,O=P.length;T<O;T++){const k=P[T],U=Array.isArray(k.value)?k.value:[k.value];for(let $=0,W=U.length;$<W;$++){const Y=U[$],tt=p(Y),q=v%A,ht=q%tt.boundary,nt=q+ht;v+=ht,nt!==0&&A-nt<tt.storage&&(v+=A-nt),k.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=tt.storage}}}const _=v%A;return _>0&&(v+=A-_),m.__size=v,m.__cache={},this}function p(m){const M={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(M.boundary=4,M.storage=4):m.isVector2?(M.boundary=8,M.storage=8):m.isVector3||m.isColor?(M.boundary=16,M.storage=12):m.isVector4?(M.boundary=16,M.storage=16):m.isMatrix3?(M.boundary=48,M.storage=48):m.isMatrix4?(M.boundary=64,M.storage=64):m.isTexture?ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(m)?(M.boundary=16,M.storage=m.byteLength):ue("WebGLRenderer: Unsupported uniform value type.",m),M}function w(m){const M=m.target;M.removeEventListener("dispose",w);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),e.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function S(){for(const m in s)e.deleteBuffer(s[m]);o=[],s={},r={}}return{bind:c,update:l,dispose:S}}const wA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ts=null;function SA(){return ts===null&&(ts=new o0(wA,16,16,Ys,xi),ts.name="DFG_LUT",ts.minFilter=Gn,ts.magFilter=Gn,ts.wrapS=rs,ts.wrapT=rs,ts.generateMipmaps=!1,ts.needsUpdate=!0),ts}class Bv{constructor(t={}){const{canvas:n=jy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=gi}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const y=f,g=new Set([Wh,$h,Vh]),p=new Set([gi,qi,la,ha,Bh,Hh]),w=new Uint32Array(4),S=new Int32Array(4),m=new B;let M=null,v=null;const A=[],_=[];let E=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let P=!1,T=null,O=null,k=null,U=null;this._outputColorSpace=si;let $=0,W=0,Y=null,tt=-1,q=null;const ht=new fn,nt=new fn;let zt=null;const Qt=new ie(0);let Nt=0,V=n.width,ot=n.height,at=1,At=null,Bt=null;const Vt=new fn(0,0,V,ot),he=new fn(0,0,V,ot);let $t=!1;const oe=new jh;let xe=!1,pe=!1;const Ne=new tn,ye=new B,Xe=new fn,je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function Ve(){return Y===null?at:1}let F=i;function yn(R,G){return n.getContext(R,G)}try{const R={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Dh}`),n.addEventListener("webglcontextlost",Je,!1),n.addEventListener("webglcontextrestored",He,!1),n.addEventListener("webglcontextcreationerror",kn,!1),F===null){const G="webgl2";if(F=yn(G,R),F===null)throw yn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw ze("WebGLRenderer: "+R.message),R}let Re,D,b,Z,Q,st,vt,yt,it,lt,Rt,te,Ct,Dt,Xt,ae,de,H,Pt,rt,xt,Et,ft;function Jt(){Re=new bE(F),Re.init(),xt=new kv(F,Re),D=new gE(F,Re,t,xt),b=new fA(F,Re),D.reversedDepthBuffer&&h&&b.buffers.depth.setReversed(!0),O=F.createFramebuffer(),k=F.createFramebuffer(),U=F.createFramebuffer(),Z=new AE(F),Q=new QT,st=new pA(F,Re,b,Q,D,xt,Z),vt=new SE(C),yt=new I2(F),Et=new pE(F,yt),it=new EE(F,yt,Z,Et),lt=new CE(F,it,yt,Et,Z),H=new RE(F,D,st),Xt=new xE(Q),Rt=new JT(C,vt,Re,D,Et,Xt),te=new vA(C,Q),Ct=new eA,Dt=new oA(Re),de=new fE(C,vt,b,lt,x,c),ae=new dA(C,lt,D),ft=new MA(F,Z,D,b),Pt=new mE(F,Re,Z),rt=new TE(F,Re,Z),Z.programs=Rt.programs,C.capabilities=D,C.extensions=Re,C.properties=Q,C.renderLists=Ct,C.shadowMap=ae,C.state=b,C.info=Z}Jt(),y!==gi&&(E=new IE(y,n.width,n.height,a,s,r));const Zt=new _A(C,F);this.xr=Zt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Re.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Re.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(R){R!==void 0&&(at=R,this.setSize(V,ot,!1))},this.getSize=function(R){return R.set(V,ot)},this.setSize=function(R,G,K=!0){if(Zt.isPresenting){ue("WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,ot=G,n.width=Math.floor(R*at),n.height=Math.floor(G*at),K===!0&&(n.style.width=R+"px",n.style.height=G+"px"),E!==null&&E.setSize(n.width,n.height),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(V*at,ot*at).floor()},this.setDrawingBufferSize=function(R,G,K){V=R,ot=G,at=K,n.width=Math.floor(R*K),n.height=Math.floor(G*K),this.setViewport(0,0,R,G)},this.setEffects=function(R){if(y===gi){ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let G=0;G<R.length;G++)if(R[G].isOutputPass===!0){ue("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ht)},this.getViewport=function(R){return R.copy(Vt)},this.setViewport=function(R,G,K,J){R.isVector4?Vt.set(R.x,R.y,R.z,R.w):Vt.set(R,G,K,J),b.viewport(ht.copy(Vt).multiplyScalar(at).round())},this.getScissor=function(R){return R.copy(he)},this.setScissor=function(R,G,K,J){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,G,K,J),b.scissor(nt.copy(he).multiplyScalar(at).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(R){b.setScissorTest($t=R)},this.setOpaqueSort=function(R){At=R},this.setTransparentSort=function(R){Bt=R},this.getClearColor=function(R){return R.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor(...arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha(...arguments)},this.clear=function(R=!0,G=!0,K=!0){let J=0;if(R){let j=!1;if(Y!==null){const Ot=Y.texture.format;j=g.has(Ot)}if(j){const Ot=Y.texture.type,qt=p.has(Ot),Mt=de.getClearColor(),jt=de.getClearAlpha(),ee=Mt.r,le=Mt.g,fe=Mt.b;qt?(w[0]=ee,w[1]=le,w[2]=fe,w[3]=jt,F.clearBufferuiv(F.COLOR,0,w)):(S[0]=ee,S[1]=le,S[2]=fe,S[3]=jt,F.clearBufferiv(F.COLOR,0,S))}else J|=F.COLOR_BUFFER_BIT}G&&(J|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(J|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&F.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),T=R},this.dispose=function(){n.removeEventListener("webglcontextlost",Je,!1),n.removeEventListener("webglcontextrestored",He,!1),n.removeEventListener("webglcontextcreationerror",kn,!1),de.dispose(),Ct.dispose(),Dt.dispose(),Q.dispose(),vt.dispose(),lt.dispose(),Et.dispose(),ft.dispose(),Rt.dispose(),Zt.dispose(),Zt.removeEventListener("sessionstart",Gt),Zt.removeEventListener("sessionend",gn),En.stop()};function Je(R){R.preventDefault(),co("WebGLRenderer: Context Lost."),P=!0}function He(){co("WebGLRenderer: Context Restored."),P=!1;const R=Z.autoReset,G=ae.enabled,K=ae.autoUpdate,J=ae.needsUpdate,j=ae.type;Jt(),Z.autoReset=R,ae.enabled=G,ae.autoUpdate=K,ae.needsUpdate=J,ae.type=j}function kn(R){ze("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $n(R){const G=R.target;G.removeEventListener("dispose",$n),et(G)}function et(R){Lt(R),Q.remove(R)}function Lt(R){const G=Q.get(R).programs;G!==void 0&&(G.forEach(function(K){Rt.releaseProgram(K)}),R.isShaderMaterial&&Rt.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,K,J,j,Ot){G===null&&(G=je);const qt=j.isMesh&&j.matrixWorld.determinantAffine()<0,Mt=wr(R,G,K,J,j);b.setMaterial(J,qt);let jt=K.index,ee=1;if(J.wireframe===!0){if(jt=it.getWireframeAttribute(K),jt===void 0)return;ee=2}const le=K.drawRange,fe=K.attributes.position;let ne=le.start*ee,Oe=(le.start+le.count)*ee;Ot!==null&&(ne=Math.max(ne,Ot.start*ee),Oe=Math.min(Oe,(Ot.start+Ot.count)*ee)),jt!==null?(ne=Math.max(ne,0),Oe=Math.min(Oe,jt.count)):fe!=null&&(ne=Math.max(ne,0),Oe=Math.min(Oe,fe.count));const nn=Oe-ne;if(nn<0||nn===1/0)return;Et.setup(j,J,Mt,K,jt);let $e,Ae=Pt;if(jt!==null&&($e=yt.get(jt),Ae=rt,Ae.setIndex($e)),j.isMesh)J.wireframe===!0?(b.setLineWidth(J.wireframeLinewidth*Ve()),Ae.setMode(F.LINES)):Ae.setMode(F.TRIANGLES);else if(j.isLine){let ke=J.linewidth;ke===void 0&&(ke=1),b.setLineWidth(ke*Ve()),j.isLineSegments?Ae.setMode(F.LINES):j.isLineLoop?Ae.setMode(F.LINE_LOOP):Ae.setMode(F.LINE_STRIP)}else j.isPoints?Ae.setMode(F.POINTS):j.isSprite&&Ae.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))Ae.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const ke=j._multiDrawStarts,Yt=j._multiDrawCounts,Wn=j._multiDrawCount,Se=jt?yt.get(jt).bytesPerElement:1,Cn=Q.get(J).currentProgram.getUniforms();for(let Xn=0;Xn<Wn;Xn++)Cn.setValue(F,"_gl_DrawID",Xn),Ae.render(ke[Xn]/Se,Yt[Xn])}else if(j.isInstancedMesh)Ae.renderInstances(ne,nn,j.count);else if(K.isInstancedBufferGeometry){const ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Yt=Math.min(K.instanceCount,ke);Ae.renderInstances(ne,nn,Yt)}else Ae.render(ne,nn)};function Kt(R,G,K){R.transparent===!0&&R.side===ge&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,Ui(R,G,K),R.side=Es,R.needsUpdate=!0,Ui(R,G,K),R.side=ge):Ui(R,G,K)}this.compile=function(R,G,K=null){K===null&&(K=R),v=Dt.get(K),v.init(G),_.push(v),K.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),R!==K&&R.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(v.pushLight(j),j.castShadow&&v.pushShadow(j))}),v.setupLights();const J=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Ot=j.material;if(Ot)if(Array.isArray(Ot))for(let qt=0;qt<Ot.length;qt++){const Mt=Ot[qt];Kt(Mt,K,j),J.add(Mt)}else Kt(Ot,K,j),J.add(Ot)}),v=_.pop(),J},this.compileAsync=function(R,G,K=null){const J=this.compile(R,G,K);return new Promise(j=>{function Ot(){if(J.forEach(function(qt){Q.get(qt).currentProgram.isReady()&&J.delete(qt)}),J.size===0){j(R);return}setTimeout(Ot,10)}Re.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let Ce=null;function we(R){Ce&&Ce(R)}function Gt(){En.stop()}function gn(){En.start()}const En=new Dv;En.setAnimationLoop(we),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(R){Ce=R,Zt.setAnimationLoop(R),R===null?En.stop():En.start()},Zt.addEventListener("sessionstart",Gt),Zt.addEventListener("sessionend",gn),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;T!==null&&T.renderStart(R,G);const K=Zt.enabled===!0&&Zt.isPresenting===!0,J=E!==null&&(Y===null||K)&&E.begin(C,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Zt.enabled===!0&&Zt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Zt.cameraAutoUpdate===!0&&Zt.updateCamera(G),G=Zt.getCamera()),R.isScene===!0&&R.onBeforeRender(C,R,G,Y),v=Dt.get(R,_.length),v.init(G),v.state.textureUnits=st.getTextureUnits(),_.push(v),Ne.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),oe.setFromProjectionMatrix(Ne,Wi,G.reversedDepth),pe=this.localClippingEnabled,xe=Xt.init(this.clippingPlanes,pe),M=Ct.get(R,A.length),M.init(),A.push(M),Zt.enabled===!0&&Zt.isPresenting===!0){const qt=C.xr.getDepthSensingMesh();qt!==null&&Fn(qt,G,-1/0,C.sortObjects)}Fn(R,G,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(At,Bt,G.reversedDepth),Ye=Zt.enabled===!1||Zt.isPresenting===!1||Zt.hasDepthSensing()===!1,Ye&&de.addToRenderList(M,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xe===!0&&Xt.beginShadows();const j=v.state.shadowsArray;if(ae.render(j,R,G),xe===!0&&Xt.endShadows(),(J&&E.hasRenderPass())===!1){const qt=M.opaque,Mt=M.transmissive;if(v.setupLights(),G.isArrayCamera){const jt=G.cameras;if(Mt.length>0)for(let ee=0,le=jt.length;ee<le;ee++){const fe=jt[ee];Qn(qt,Mt,R,fe)}Ye&&de.render(R);for(let ee=0,le=jt.length;ee<le;ee++){const fe=jt[ee];Ge(M,R,fe,fe.viewport)}}else Mt.length>0&&Qn(qt,Mt,R,G),Ye&&de.render(R),Ge(M,R,G)}Y!==null&&W===0&&(st.updateMultisampleRenderTarget(Y),st.updateRenderTargetMipmap(Y)),J&&E.end(C),R.isScene===!0&&R.onAfterRender(C,R,G),Et.resetDefaultState(),tt=-1,q=null,_.pop(),_.length>0?(v=_[_.length-1],st.setTextureUnits(v.state.textureUnits),xe===!0&&Xt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,T!==null&&T.renderEnd()};function Fn(R,G,K,J){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)K=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLightProbeGrid)v.pushLightProbeGrid(R);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||oe.intersectsSprite(R)){J&&Xe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ne);const qt=lt.update(R),Mt=R.material;Mt.visible&&M.push(R,qt,Mt,K,Xe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||oe.intersectsObject(R))){const qt=lt.update(R),Mt=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xe.copy(R.boundingSphere.center)):(qt.boundingSphere===null&&qt.computeBoundingSphere(),Xe.copy(qt.boundingSphere.center)),Xe.applyMatrix4(R.matrixWorld).applyMatrix4(Ne)),Array.isArray(Mt)){const jt=qt.groups;for(let ee=0,le=jt.length;ee<le;ee++){const fe=jt[ee],ne=Mt[fe.materialIndex];ne&&ne.visible&&M.push(R,qt,ne,K,Xe.z,fe)}}else Mt.visible&&M.push(R,qt,Mt,K,Xe.z,null)}}const Ot=R.children;for(let qt=0,Mt=Ot.length;qt<Mt;qt++)Fn(Ot[qt],G,K,J)}function Ge(R,G,K,J){const{opaque:j,transmissive:Ot,transparent:qt}=R;v.setupLightsView(K),xe===!0&&Xt.setGlobalState(C.clippingPlanes,K),J&&b.viewport(ht.copy(J)),j.length>0&&ai(j,G,K),Ot.length>0&&ai(Ot,G,K),qt.length>0&&ai(qt,G,K),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Qn(R,G,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[J.id]===void 0){const ne=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[J.id]=new ri(1,1,{generateMipmaps:!0,type:ne?xi:gi,minFilter:Fs,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pe.workingColorSpace})}const Ot=v.state.transmissionRenderTarget[J.id],qt=J.viewport||ht;Ot.setSize(qt.z*C.transmissionResolutionScale,qt.w*C.transmissionResolutionScale);const Mt=C.getRenderTarget(),jt=C.getActiveCubeFace(),ee=C.getActiveMipmapLevel();C.setRenderTarget(Ot),C.getClearColor(Qt),Nt=C.getClearAlpha(),Nt<1&&C.setClearColor(16777215,.5),C.clear(),Ye&&de.render(K);const le=C.toneMapping;C.toneMapping=Yi;const fe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),v.setupLightsView(J),xe===!0&&Xt.setGlobalState(C.clippingPlanes,J),ai(R,K,J),st.updateMultisampleRenderTarget(Ot),st.updateRenderTargetMipmap(Ot),Re.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Oe=0,nn=G.length;Oe<nn;Oe++){const $e=G[Oe],{object:Ae,geometry:ke,material:Yt,group:Wn}=$e;if(Yt.side===ge&&Ae.layers.test(J.layers)){const Se=Yt.side;Yt.side=Jn,Yt.needsUpdate=!0,ls(Ae,K,J,ke,Yt,Wn),Yt.side=Se,Yt.needsUpdate=!0,ne=!0}}ne===!0&&(st.updateMultisampleRenderTarget(Ot),st.updateRenderTargetMipmap(Ot))}C.setRenderTarget(Mt,jt,ee),C.setClearColor(Qt,Nt),fe!==void 0&&(J.viewport=fe),C.toneMapping=le}function ai(R,G,K){const J=G.isScene===!0?G.overrideMaterial:null;for(let j=0,Ot=R.length;j<Ot;j++){const qt=R[j],{object:Mt,geometry:jt,group:ee}=qt;let le=qt.material;le.allowOverride===!0&&J!==null&&(le=J),Mt.layers.test(K.layers)&&ls(Mt,G,K,jt,le,ee)}}function ls(R,G,K,J,j,Ot){R.onBeforeRender(C,G,K,J,j,Ot),R.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(C,G,K,J,R,Ot),j.transparent===!0&&j.side===ge&&j.forceSinglePass===!1?(j.side=Jn,j.needsUpdate=!0,C.renderBufferDirect(K,G,J,j,R,Ot),j.side=Es,j.needsUpdate=!0,C.renderBufferDirect(K,G,J,j,R,Ot),j.side=ge):C.renderBufferDirect(K,G,J,j,R,Ot),R.onAfterRender(C,G,K,J,j,Ot)}function Ui(R,G,K){G.isScene!==!0&&(G=je);const J=Q.get(R),j=v.state.lights,Ot=v.state.shadowsArray,qt=j.state.version,Mt=Rt.getParameters(R,j.state,Ot,G,K,v.state.lightProbeGridArray),jt=Rt.getProgramCacheKey(Mt);let ee=J.programs;J.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?G.environment:null,J.fog=G.fog;const le=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;J.envMap=vt.get(R.envMap||J.environment,le),J.envMapRotation=J.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,ee===void 0&&(R.addEventListener("dispose",$n),ee=new Map,J.programs=ee);let fe=ee.get(jt);if(fe!==void 0){if(J.currentProgram===fe&&J.lightsStateVersion===qt)return oi(R,Mt),fe}else Mt.uniforms=Rt.getUniforms(R),T!==null&&R.isNodeMaterial&&T.build(R,K,Mt),R.onBeforeCompile(Mt,C),fe=Rt.acquireProgram(Mt,jt),ee.set(jt,fe),J.uniforms=Mt.uniforms;const ne=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ne.clippingPlanes=Xt.uniform),oi(R,Mt),J.needsLights=yi(R),J.lightsStateVersion=qt,J.needsLights&&(ne.ambientLightColor.value=j.state.ambient,ne.lightProbe.value=j.state.probe,ne.directionalLights.value=j.state.directional,ne.directionalLightShadows.value=j.state.directionalShadow,ne.spotLights.value=j.state.spot,ne.spotLightShadows.value=j.state.spotShadow,ne.rectAreaLights.value=j.state.rectArea,ne.ltc_1.value=j.state.rectAreaLTC1,ne.ltc_2.value=j.state.rectAreaLTC2,ne.pointLights.value=j.state.point,ne.pointLightShadows.value=j.state.pointShadow,ne.hemisphereLights.value=j.state.hemi,ne.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ne.spotLightMatrix.value=j.state.spotLightMatrix,ne.spotLightMap.value=j.state.spotLightMap,ne.pointShadowMatrix.value=j.state.pointShadowMatrix),J.lightProbeGrid=v.state.lightProbeGridArray.length>0,J.currentProgram=fe,J.uniformsList=null,fe}function hs(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=kc.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function oi(R,G){const K=Q.get(R);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function ya(R,G){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;m.setFromMatrixPosition(G.matrixWorld);for(let K=0,J=R.length;K<J;K++){const j=R[K];if(j.texture!==null&&j.boundingBox.containsPoint(m))return j}return null}function wr(R,G,K,J,j){G.isScene!==!0&&(G=je),st.resetTextureUnits();const Ot=G.fog,qt=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?G.environment:null,Mt=Y===null?C.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Pe.workingColorSpace,jt=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,ee=vt.get(J.envMap||qt,jt),le=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,fe=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),ne=!!K.morphAttributes.position,Oe=!!K.morphAttributes.normal,nn=!!K.morphAttributes.color;let $e=Yi;J.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&($e=C.toneMapping);const Ae=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ke=Ae!==void 0?Ae.length:0,Yt=Q.get(J),Wn=v.state.lights;if(xe===!0&&(pe===!0||R!==q)){const We=R===q&&J.id===tt;Xt.setState(J,R,We)}let Se=!1;J.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Wn.state.version||Yt.outputColorSpace!==Mt||j.isBatchedMesh&&Yt.batching===!1||!j.isBatchedMesh&&Yt.batching===!0||j.isBatchedMesh&&Yt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Yt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Yt.instancing===!1||!j.isInstancedMesh&&Yt.instancing===!0||j.isSkinnedMesh&&Yt.skinning===!1||!j.isSkinnedMesh&&Yt.skinning===!0||j.isInstancedMesh&&Yt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Yt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Yt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Yt.instancingMorph===!1&&j.morphTexture!==null||Yt.envMap!==ee||J.fog===!0&&Yt.fog!==Ot||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Xt.numPlanes||Yt.numIntersection!==Xt.numIntersection)||Yt.vertexAlphas!==le||Yt.vertexTangents!==fe||Yt.morphTargets!==ne||Yt.morphNormals!==Oe||Yt.morphColors!==nn||Yt.toneMapping!==$e||Yt.morphTargetsCount!==ke||!!Yt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(Se=!0):(Se=!0,Yt.__version=J.version);let Cn=Yt.currentProgram;Se===!0&&(Cn=Ui(J,G,j),T&&J.isNodeMaterial&&T.onUpdateProgram(J,Cn,Yt));let Xn=!1,Oi=!1,Ji=!1;const Fe=Cn.getUniforms(),un=Yt.uniforms;if(b.useProgram(Cn.program)&&(Xn=!0,Oi=!0,Ji=!0),J.id!==tt&&(tt=J.id,Oi=!0),Yt.needsLights){const We=ya(v.state.lightProbeGridArray,j);Yt.lightProbeGrid!==We&&(Yt.lightProbeGrid=We,Oi=!0)}if(Xn||q!==R){b.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(F,"projectionMatrix",R.projectionMatrix),Fe.setValue(F,"viewMatrix",R.matrixWorldInverse);const Ci=Fe.map.cameraPosition;Ci!==void 0&&Ci.setValue(F,ye.setFromMatrixPosition(R.matrixWorld)),D.logarithmicDepthBuffer&&Fe.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Fe.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),q!==R&&(q=R,Oi=!0,Ji=!0)}if(Yt.needsLights&&(Wn.state.directionalShadowMap.length>0&&Fe.setValue(F,"directionalShadowMap",Wn.state.directionalShadowMap,st),Wn.state.spotShadowMap.length>0&&Fe.setValue(F,"spotShadowMap",Wn.state.spotShadowMap,st),Wn.state.pointShadowMap.length>0&&Fe.setValue(F,"pointShadowMap",Wn.state.pointShadowMap,st)),j.isSkinnedMesh){Fe.setOptional(F,j,"bindMatrix"),Fe.setOptional(F,j,"bindMatrixInverse");const We=j.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),Fe.setValue(F,"boneTexture",We.boneTexture,st))}j.isBatchedMesh&&(Fe.setOptional(F,j,"batchingTexture"),Fe.setValue(F,"batchingTexture",j._matricesTexture,st),Fe.setOptional(F,j,"batchingIdTexture"),Fe.setValue(F,"batchingIdTexture",j._indirectTexture,st),Fe.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&Fe.setValue(F,"batchingColorTexture",j._colorsTexture,st));const ci=K.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&H.update(j,K,Cn),(Oi||Yt.receiveShadow!==j.receiveShadow)&&(Yt.receiveShadow=j.receiveShadow,Fe.setValue(F,"receiveShadow",j.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&G.environment!==null&&(un.envMapIntensity.value=G.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=SA()),Oi){if(Fe.setValue(F,"toneMappingExposure",C.toneMappingExposure),Yt.needsLights&&ji(un,Ji),Ot&&J.fog===!0&&te.refreshFogUniforms(un,Ot),te.refreshMaterialUniforms(un,J,at,ot,v.state.transmissionRenderTarget[R.id]),Yt.needsLights&&Yt.lightProbeGrid){const We=Yt.lightProbeGrid;un.probesSH.value=We.texture,un.probesMin.value.copy(We.boundingBox.min),un.probesMax.value.copy(We.boundingBox.max),un.probesResolution.value.copy(We.resolution)}kc.upload(F,hs(Yt),un,st)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(kc.upload(F,hs(Yt),un,st),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Fe.setValue(F,"center",j.center),Fe.setValue(F,"modelViewMatrix",j.modelViewMatrix),Fe.setValue(F,"normalMatrix",j.normalMatrix),Fe.setValue(F,"modelMatrix",j.matrixWorld),J.uniformsGroups!==void 0){const We=J.uniformsGroups;for(let Ci=0,li=We.length;Ci<li;Ci++){const Sr=We[Ci];ft.update(Sr,Cn),ft.bind(Sr,Cn)}}return Cn}function ji(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function yi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,G,K){const J=Q.get(R);J.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Q.get(R.texture).__webglTexture=G,Q.get(R.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:K,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,G){const K=Q.get(R);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,K=0){Y=R,$=G,W=K;let J=null,j=!1,Ot=!1;if(R){const Mt=Q.get(R);if(Mt.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(F.FRAMEBUFFER,Mt.__webglFramebuffer),ht.copy(R.viewport),nt.copy(R.scissor),zt=R.scissorTest,b.viewport(ht),b.scissor(nt),b.setScissorTest(zt),tt=-1;return}else if(Mt.__webglFramebuffer===void 0)st.setupRenderTarget(R);else if(Mt.__hasExternalTextures)st.rebindTextures(R,Q.get(R.texture).__webglTexture,Q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const le=R.depthTexture;if(Mt.__boundDepthTexture!==le){if(le!==null&&Q.has(le)&&(R.width!==le.image.width||R.height!==le.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(R)}}const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Ot=!0);const ee=Q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[G])?J=ee[G][K]:J=ee[G],j=!0):R.samples>0&&st.useMultisampledRTT(R)===!1?J=Q.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?J=ee[K]:J=ee,ht.copy(R.viewport),nt.copy(R.scissor),zt=R.scissorTest}else ht.copy(Vt).multiplyScalar(at).floor(),nt.copy(he).multiplyScalar(at).floor(),zt=$t;if(K!==0&&(J=O),b.bindFramebuffer(F.FRAMEBUFFER,J)&&b.drawBuffers(R,J),b.viewport(ht),b.scissor(nt),b.setScissorTest(zt),j){const Mt=Q.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,Mt.__webglTexture,K)}else if(Ot){const Mt=G;for(let jt=0;jt<R.textures.length;jt++){const ee=Q.get(R.textures[jt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+jt,ee.__webglTexture,K,Mt)}}else if(R!==null&&K!==0){const Mt=Q.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Mt.__webglTexture,K)}tt=-1},this.readRenderTargetPixels=function(R,G,K,J,j,Ot,qt,Mt=0){if(!(R&&R.isWebGLRenderTarget)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(jt=jt[qt]),jt){b.bindFramebuffer(F.FRAMEBUFFER,jt);try{const ee=R.textures[Mt],le=ee.format,fe=ee.type;if(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt),!D.textureFormatReadable(le)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(fe)){ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-J&&K>=0&&K<=R.height-j&&F.readPixels(G,K,J,j,xt.convert(le),xt.convert(fe),Ot)}finally{const ee=Y!==null?Q.get(Y).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(R,G,K,J,j,Ot,qt,Mt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qt!==void 0&&(jt=jt[qt]),jt)if(G>=0&&G<=R.width-J&&K>=0&&K<=R.height-j){b.bindFramebuffer(F.FRAMEBUFFER,jt);const ee=R.textures[Mt],le=ee.format,fe=ee.type;if(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Mt),!D.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ne),F.bufferData(F.PIXEL_PACK_BUFFER,Ot.byteLength,F.STREAM_READ),F.readPixels(G,K,J,j,xt.convert(le),xt.convert(fe),0);const Oe=Y!==null?Q.get(Y).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,Oe);const nn=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await e2(F,nn,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ne),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ot),F.deleteBuffer(ne),F.deleteSync(nn),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,G=null,K=0){const J=Math.pow(2,-K),j=Math.floor(R.image.width*J),Ot=Math.floor(R.image.height*J),qt=G!==null?G.x:0,Mt=G!==null?G.y:0;st.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,qt,Mt,j,Ot),b.unbindTexture()},this.copyTextureToTexture=function(R,G,K=null,J=null,j=0,Ot=0){let qt,Mt,jt,ee,le,fe,ne,Oe,nn;const $e=R.isCompressedTexture?R.mipmaps[Ot]:R.image;if(K!==null)qt=K.max.x-K.min.x,Mt=K.max.y-K.min.y,jt=K.isBox3?K.max.z-K.min.z:1,ee=K.min.x,le=K.min.y,fe=K.isBox3?K.min.z:0;else{const un=Math.pow(2,-j);qt=Math.floor($e.width*un),Mt=Math.floor($e.height*un),R.isDataArrayTexture?jt=$e.depth:R.isData3DTexture?jt=Math.floor($e.depth*un):jt=1,ee=0,le=0,fe=0}J!==null?(ne=J.x,Oe=J.y,nn=J.z):(ne=0,Oe=0,nn=0);const Ae=xt.convert(G.format),ke=xt.convert(G.type);let Yt;G.isData3DTexture?(st.setTexture3D(G,0),Yt=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(st.setTexture2DArray(G,0),Yt=F.TEXTURE_2D_ARRAY):(st.setTexture2D(G,0),Yt=F.TEXTURE_2D),b.activeTexture(F.TEXTURE0),b.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),b.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),b.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const Wn=b.getParameter(F.UNPACK_ROW_LENGTH),Se=b.getParameter(F.UNPACK_IMAGE_HEIGHT),Cn=b.getParameter(F.UNPACK_SKIP_PIXELS),Xn=b.getParameter(F.UNPACK_SKIP_ROWS),Oi=b.getParameter(F.UNPACK_SKIP_IMAGES);b.pixelStorei(F.UNPACK_ROW_LENGTH,$e.width),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,$e.height),b.pixelStorei(F.UNPACK_SKIP_PIXELS,ee),b.pixelStorei(F.UNPACK_SKIP_ROWS,le),b.pixelStorei(F.UNPACK_SKIP_IMAGES,fe);const Ji=R.isDataArrayTexture||R.isData3DTexture,Fe=G.isDataArrayTexture||G.isData3DTexture;if(R.isDepthTexture){const un=Q.get(R),ci=Q.get(G),We=Q.get(un.__renderTarget),Ci=Q.get(ci.__renderTarget);b.bindFramebuffer(F.READ_FRAMEBUFFER,We.__webglFramebuffer),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let li=0;li<jt;li++)Ji&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get(R).__webglTexture,j,fe+li),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.get(G).__webglTexture,Ot,nn+li)),F.blitFramebuffer(ee,le,qt,Mt,ne,Oe,qt,Mt,F.DEPTH_BUFFER_BIT,F.NEAREST);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Q.has(R)){const un=Q.get(R),ci=Q.get(G);b.bindFramebuffer(F.READ_FRAMEBUFFER,k),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,U);for(let We=0;We<jt;We++)Ji?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,un.__webglTexture,j,fe+We):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,un.__webglTexture,j),Fe?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ci.__webglTexture,Ot,nn+We):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ci.__webglTexture,Ot),j!==0?F.blitFramebuffer(ee,le,qt,Mt,ne,Oe,qt,Mt,F.COLOR_BUFFER_BIT,F.NEAREST):Fe?F.copyTexSubImage3D(Yt,Ot,ne,Oe,nn+We,ee,le,qt,Mt):F.copyTexSubImage2D(Yt,Ot,ne,Oe,ee,le,qt,Mt);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Fe?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(Yt,Ot,ne,Oe,nn,qt,Mt,jt,Ae,ke,$e.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Yt,Ot,ne,Oe,nn,qt,Mt,jt,Ae,$e.data):F.texSubImage3D(Yt,Ot,ne,Oe,nn,qt,Mt,jt,Ae,ke,$e):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ot,ne,Oe,qt,Mt,Ae,ke,$e.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ot,ne,Oe,$e.width,$e.height,Ae,$e.data):F.texSubImage2D(F.TEXTURE_2D,Ot,ne,Oe,qt,Mt,Ae,ke,$e);b.pixelStorei(F.UNPACK_ROW_LENGTH,Wn),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Se),b.pixelStorei(F.UNPACK_SKIP_PIXELS,Cn),b.pixelStorei(F.UNPACK_SKIP_ROWS,Xn),b.pixelStorei(F.UNPACK_SKIP_IMAGES,Oi),Ot===0&&G.generateMipmaps&&F.generateMipmap(Yt),b.unbindTexture()},this.initRenderTarget=function(R){Q.get(R).__webglFramebuffer===void 0&&st.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?st.setTextureCube(R,0):R.isData3DTexture?st.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?st.setTexture2DArray(R,0):st.setTexture2D(R,0),b.unbindTexture()},this.resetState=function(){$=0,W=0,Y=null,b.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Pe._getDrawingBufferColorSpace(t),n.unpackColorSpace=Pe._getUnpackColorSpace()}}const bA=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:Eo,AddEquation:ks,AddOperation:Hy,AdditiveBlending:pn,AgXToneMapping:Oh,AlphaFormat:t0,AlwaysCompare:Ky,AlwaysDepth:Tl,AlwaysStencilFunc:vf,ArrayCamera:Cv,BackSide:Jn,BasicDepthPacking:Vy,Box3:Zs,BoxGeometry:Me,BufferAttribute:_i,BufferGeometry:bn,ByteType:Kp,Cache:Uc,Camera:f0,CanvasTexture:l0,CapsuleGeometry:cv,CineonToneMapping:Nh,CircleGeometry:Ri,ClampToEdgeWrapping:rs,Color:ie,ColorManagement:Pe,ConeGeometry:Jh,ConstantAlphaFactor:ky,ConstantColorFactor:Uy,CubeCamera:Rv,CubeDepthTexture:av,CubeReflectionMapping:Xs,CubeRefractionMapping:_r,CubeTexture:c0,CubeUVReflectionMapping:To,CullFaceBack:xf,CullFaceFront:My,CullFaceNone:vy,CustomBlending:wy,CustomToneMapping:Uh,CylinderGeometry:Te,Data3DTexture:ev,DataArrayTexture:n0,DataTexture:o0,DefaultLoadingManager:Sv,DepthFormat:os,DepthStencilFormat:Bs,DepthTexture:yr,DirectionalLight:Oc,DoubleSide:ge,DstAlphaFactor:Iy,DstColorFactor:zy,EqualCompare:Yy,EqualDepth:Rl,EquirectangularReflectionMapping:Ic,EquirectangularRefractionMapping:Dc,Euler:Ts,EventDispatcher:qs,ExternalTexture:h0,Float32BufferAttribute:Le,FloatType:Di,FogExp2:Kh,FrontSide:Es,Frustum:jh,GLSL3:Mf,GreaterCompare:qy,GreaterDepth:Pl,GreaterEqualCompare:Yh,GreaterEqualDepth:Cl,Group:Tt,HalfFloatType:xi,HemisphereLight:Tv,IcosahedronGeometry:u0,ImageLoader:bv,ImageUtils:Qy,InstancedBufferAttribute:bf,InstancedMesh:_e,IntType:Fh,InterleavedBuffer:iv,InterleavedBufferAttribute:lo,KeepStencilOp:rr,LatheGeometry:Ao,Layers:Zh,LessCompare:Xy,LessDepth:Al,LessEqualCompare:Xh,LessEqualDepth:xr,Light:nu,LinearFilter:Gn,LinearMipmapLinearFilter:Fs,LinearMipmapNearestFilter:zc,LinearSRGBColorSpace:ro,LinearToneMapping:zh,LinearTransfer:ao,Loader:eu,LoadingManager:wv,Material:Mr,Matrix2:Tf,Matrix3:me,Matrix4:tn,MaxEquation:Ty,Mesh:mt,MeshBasicMaterial:Ue,MeshDepthMaterial:vv,MeshDistanceMaterial:Mv,MeshPhysicalMaterial:wt,MeshStandardMaterial:yv,MinEquation:Ey,MirroredRepeatWrapping:zl,MixOperation:By,MultiplyBlending:yf,MultiplyOperation:qp,NearestFilter:Nn,NearestMipmapLinearFilter:Ga,NearestMipmapNearestFilter:Gy,NeutralToneMapping:kh,NeverCompare:Wy,NeverDepth:El,NoBlending:Xi,NoColorSpace:Ms,NoToneMapping:Yi,NormalBlending:fr,NotEqualCompare:Zy,NotEqualDepth:Il,Object3D:re,ObjectSpaceNormalMap:$y,OctahedronGeometry:Sn,OneFactor:Ry,OneMinusConstantAlphaFactor:Fy,OneMinusConstantColorFactor:Oy,OneMinusDstAlphaFactor:Dy,OneMinusDstColorFactor:Ly,OneMinusSrcAlphaFactor:bl,OneMinusSrcColorFactor:Py,OrthographicCamera:Ro,PCFShadowMap:Ya,PCFSoftShadowMap:Yp,PMREMGenerator:dh,PerspectiveCamera:mi,Plane:vs,PlaneGeometry:cs,PointLight:A2,PolyhedronGeometry:ga,Quaternion:vr,R11_EAC_Format:Hl,RED_GREEN_RGTC2_Format:so,RED_RGTC1_Format:oh,REVISION:Dh,RG11_EAC_Format:io,RGBAFormat:zi,RGBAIntegerFormat:Wh,RGBA_ASTC_10x10_Format:eh,RGBA_ASTC_10x5_Format:Jl,RGBA_ASTC_10x6_Format:Ql,RGBA_ASTC_10x8_Format:th,RGBA_ASTC_12x10_Format:nh,RGBA_ASTC_12x12_Format:ih,RGBA_ASTC_4x4_Format:$l,RGBA_ASTC_5x4_Format:Wl,RGBA_ASTC_5x5_Format:Xl,RGBA_ASTC_6x5_Format:Yl,RGBA_ASTC_6x6_Format:ql,RGBA_ASTC_8x5_Format:Zl,RGBA_ASTC_8x6_Format:Kl,RGBA_ASTC_8x8_Format:jl,RGBA_BPTC_Format:sh,RGBA_ETC2_EAC_Format:Bl,RGBA_PVRTC_2BPPV1_Format:Ol,RGBA_PVRTC_4BPPV1_Format:Ul,RGBA_S3TC_DXT1_Format:Za,RGBA_S3TC_DXT3_Format:Ka,RGBA_S3TC_DXT5_Format:ja,RGBFormat:e0,RGB_BPTC_SIGNED_Format:rh,RGB_BPTC_UNSIGNED_Format:ah,RGB_ETC1_Format:kl,RGB_ETC2_Format:Fl,RGB_PVRTC_2BPPV1_Format:Nl,RGB_PVRTC_4BPPV1_Format:Ll,RGB_S3TC_DXT1_Format:qa,RGFormat:Ys,RGIntegerFormat:$h,RawShaderMaterial:d0,Ray:a0,Raycaster:Iv,RedFormat:Gh,RedIntegerFormat:Vh,ReinhardToneMapping:Lh,RenderTarget:tv,RepeatWrapping:Dl,ReverseSubtractEquation:by,RingGeometry:Qh,SIGNED_R11_EAC_Format:Gl,SIGNED_RED_GREEN_RGTC2_Format:lh,SIGNED_RED_RGTC1_Format:ch,SIGNED_RG11_EAC_Format:Vl,SRGBColorSpace:si,SRGBTransfer:Ze,Scene:Sf,ShaderChunk:be,ShaderLib:$i,ShaderMaterial:Vn,ShortType:jp,Source:qh,Sphere:ma,SphereGeometry:as,Sprite:rv,SpriteMaterial:r0,SrcAlphaFactor:Sl,SrcAlphaSaturateFactor:Ny,SrcColorFactor:Cy,StaticDrawUsage:uh,SubtractEquation:Sy,SubtractiveBlending:_f,TangentSpaceNormalMap:hh,TetrahedronGeometry:tu,Texture:On,TextureLoader:Ev,Timer:Pv,TorusGeometry:mn,Triangle:Ti,UVMapping:Zp,Uint16BufferAttribute:i0,Uint32BufferAttribute:s0,UniformsLib:Wt,UniformsUtils:fa,UnsignedByteType:gi,UnsignedInt101111Type:Qp,UnsignedInt248Type:ha,UnsignedInt5999Type:Jp,UnsignedIntType:qi,UnsignedShort4444Type:Bh,UnsignedShort5551Type:Hh,UnsignedShortType:la,VSMShadowMap:ea,Vector2:gt,Vector3:B,Vector4:fn,WebGLCoordinateSystem:Wi,WebGLCubeRenderTarget:p0,WebGLRenderTarget:ri,WebGLRenderer:Bv,WebGLUtils:kv,WebGPUCoordinateSystem:ua,WebXRController:Nc,ZeroFactor:Ay,createCanvasElement:jy,error:ze,log:co,warn:ue,warnOnce:pr},Symbol.toStringTag,{value:"Module"})),Fc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _a{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const EA=new Ro(-1,1,1,-1,0,1);class TA extends bn{constructor(){super(),this.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Le([0,2,0,0,2,0],2))}}const AA=new TA;class m0{constructor(t){this._mesh=new mt(AA,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,EA)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class RA extends _a{constructor(t,n="tDiffuse"){super(),this.textureID=n,this.uniforms=null,this.material=null,t instanceof Vn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fa.clone(t.uniforms),this.material=new Vn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new m0(this.material)}render(t,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Jm extends _a{constructor(t,n){super(),this.scene=t,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,n,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class CA extends _a{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class PA{constructor(t,n){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),n===void 0){const i=t.getSize(new gt);this._width=i.width,this._height=i.height,n=new ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new RA(Fc),this.copyPass.material.blending=Xi,this.timer=new Pv}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,n){this.passes.splice(n,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const n=this.passes.indexOf(t);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(t){for(let n=t+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Jm!==void 0&&(o instanceof Jm?i=!0:o instanceof CA&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(t){if(t===void 0){const n=this.renderer.getSize(new gt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,n){this._width=t,this._height=n;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class IA extends _a{constructor(t,n,i=null,s=null,r=null){super(),this.scene=t,this.camera=n,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ie}render(t,n,i){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const DA={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ie(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class pa extends _a{constructor(t,n=1,i,s){super(),this.strength=n,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new gt(t.x,t.y):new gt(256,256),this.clearColor=new ie(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ri(r,o,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ri(r,o,{type:xi});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new ri(r,o,{type:xi});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),o=Math.round(o/2)}const a=DA;this.highPassUniforms=fa.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Vn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new gt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1),new B(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=fa.clone(Fc.uniforms),this.blendMaterial=new Vn({uniforms:this.copyUniforms,vertexShader:Fc.vertexShader,fragmentShader:Fc.fragmentShader,premultipliedAlpha:!0,blending:pn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ie,this._oldClearAlpha=1,this._basic=new Ue,this._fsQuad=new m0(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,n){let i=Math.round(t/2),s=Math.round(n/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new gt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,n,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=pa.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=pa.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const n=[],i=t/3;for(let s=0;s<t;s++)n.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new Vn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new gt(.5,.5)},direction:{value:new gt(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`

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

				}`})}}pa.BlurDirectionX=new gt(1,0);pa.BlurDirectionY=new gt(0,1);const ec={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class zA extends _a{constructor(){super(),this.isOutputPass=!0,this.uniforms=fa.clone(ec.uniforms),this.material=new d0({name:ec.name,uniforms:this.uniforms,vertexShader:ec.vertexShader,fragmentShader:ec.fragmentShader}),this._fsQuad=new m0(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,n,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Pe.getTransfer(this._outputColorSpace)===Ze&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Eo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Uh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function LA(){let e=null,t=!1,n=0,i=!1,s=null;function r(){const u=window;return u.AudioContext||u.webkitAudioContext||null}function o(){if(i)return null;if(e&&e.state==="closed"&&(e=null),e)return e;try{const u=r();return u?(e=new u,e):(i=!0,null)}catch{return i=!0,e=null,null}}function a(u){if(!t)try{const d=o();if(!d)return;d.state==="suspended"&&d.resume().catch(()=>{}),u(d)}catch{}}function c(u,d){const h=d.type??"sine",f=d.gain??.08,x=d.attack??.02,y=d.delay??0,g=u.currentTime+y,p=u.createOscillator(),w=u.createGain();p.type=h,p.frequency.setValueAtTime(d.freq,g),d.to&&d.to>0&&p.frequency.exponentialRampToValueAtTime(d.to,g+d.dur*.92),w.gain.setValueAtTime(1e-4,g),w.gain.exponentialRampToValueAtTime(Math.max(2e-4,f),g+x),w.gain.exponentialRampToValueAtTime(1e-4,g+d.dur),p.connect(w),w.connect(u.destination),p.start(g),p.stop(g+d.dur+.05)}function l(u,d,h,f=.08,x=.02){a(y=>{c(y,{freq:u,dur:d,type:h,gain:f,attack:x})})}return{unlock(){i=!1;try{const u=o();if(!u)return;if(u.state==="suspended"&&u.resume().catch(()=>{}),!s&&!t){const d=u.createOscillator(),h=u.createOscillator(),f=u.createOscillator(),x=u.createGain(),y=u.createGain(),g=u.createGain();d.type="sine",d.frequency.value=72,h.type="sine",h.frequency.value=108,f.type="sine",f.frequency.value=54,x.gain.value=.015,y.gain.value=.004,g.gain.value=.005,d.connect(x),h.connect(y),f.connect(g),x.connect(u.destination),y.connect(u.destination),g.connect(u.destination),d.start(),h.start(),f.start(),s={osc:d,fifth:h,pad:f,gain:x,gain5:y,gainPad:g}}}catch{}},howl(){a(u=>{const d=u.currentTime,h=u.createOscillator(),f=u.createGain();h.type="triangle",h.frequency.setValueAtTime(220,d),h.frequency.exponentialRampToValueAtTime(88,d+.9),f.gain.setValueAtTime(0,d),f.gain.linearRampToValueAtTime(.12,d+.08),f.gain.exponentialRampToValueAtTime(1e-4,d+1.1),h.connect(f),f.connect(u.destination),h.start(d),h.stop(d+1.2);try{const x=u.createOscillator(),y=u.createGain();x.type="sine",x.frequency.setValueAtTime(330,d),x.frequency.exponentialRampToValueAtTime(132,d+.42),y.gain.setValueAtTime(0,d),y.gain.linearRampToValueAtTime(.028,d+.05),y.gain.exponentialRampToValueAtTime(1e-4,d+.48),x.connect(y),y.connect(u.destination),x.start(d),x.stop(d+.52)}catch{}try{c(u,{freq:73,dur:.45,type:"sine",gain:.007,attack:.08,delay:.4})}catch{}try{c(u,{freq:98,dur:.4,type:"sine",gain:.006,attack:.06,delay:.2})}catch{}try{c(u,{freq:176,dur:.42,type:"sine",gain:.007,attack:.06,delay:.32})}catch{}try{c(u,{freq:220,dur:.36,type:"sine",gain:.005,attack:.08,delay:.48})}catch{}})},talk(){a(u=>{c(u,{freq:523.3,to:392,dur:.3,type:"sine",gain:.03,attack:.012});try{c(u,{freq:784,to:659.3,dur:.24,type:"sine",gain:.012,attack:.016,delay:.05})}catch{}try{c(u,{freq:523,dur:.22,type:"sine",gain:.01,attack:.02,delay:.18})}catch{}try{c(u,{freq:261,dur:.22,type:"sine",gain:.007,attack:.02,delay:.12})}catch{}try{c(u,{freq:349,dur:.2,type:"sine",gain:.006,attack:.02,delay:.08})}catch{}try{c(u,{freq:196,dur:.26,type:"sine",gain:.005,attack:.04,delay:.16})}catch{}try{c(u,{freq:82,dur:.28,type:"sine",gain:.005,attack:.04,delay:.2})}catch{}try{c(u,{freq:98,dur:.26,type:"sine",gain:.004,attack:.05,delay:.24})}catch{}})},land(){a(u=>{c(u,{freq:110,dur:.28,type:"sine",gain:.05,attack:.025}),c(u,{freq:165,dur:.26,type:"sine",gain:.03,attack:.03,delay:.02});try{c(u,{freq:1318.5,to:1046.5,dur:.36,type:"sine",gain:.012,attack:.008,delay:.22})}catch{}try{c(u,{freq:392,dur:.22,type:"sine",gain:.01,attack:.02,delay:.22})}catch{}try{c(u,{freq:440,dur:.24,type:"sine",gain:.008,attack:.02,delay:.12})}catch{}})},foot(u){if(t||u<4)return;const d=performance.now(),h=u>22?280:420;if(!(d-n<h)){n=d,l(90+Math.random()*20,.07,"sine",.015);try{l(60,.05,"sine",.006)}catch{}}},canal(){a(u=>{c(u,{freq:164.8,to:196,dur:1.05,type:"sine",gain:.036,attack:.08}),c(u,{freq:246.9,to:220,dur:1.1,type:"sine",gain:.022,attack:.12,delay:.04}),c(u,{freq:329.6,to:392,dur:.7,type:"triangle",gain:.016,attack:.18,delay:.1}),c(u,{freq:659.3,to:523.3,dur:.45,type:"sine",gain:.012,attack:.04,delay:.22});try{c(u,{freq:196,dur:.55,type:"sine",gain:.008,attack:.08,delay:.4})}catch{}try{c(u,{freq:147,dur:.4,type:"sine",gain:.007,attack:.06,delay:.15})}catch{}try{c(u,{freq:82,dur:.5,type:"sine",gain:.006,attack:.1,delay:.28})}catch{}})},kiln(){a(u=>{c(u,{freq:110,to:196,dur:.95,type:"triangle",gain:.045,attack:.06}),c(u,{freq:246.9,to:392,dur:.85,type:"sine",gain:.028,attack:.08,delay:.06}),c(u,{freq:329.6,to:523.3,dur:.7,type:"sine",gain:.02,attack:.1,delay:.16}),c(u,{freq:659.3,dur:.38,type:"triangle",gain:.018,attack:.02,delay:.52});try{c(u,{freq:196,dur:.45,type:"sine",gain:.008,attack:.06,delay:.28})}catch{}try{c(u,{freq:110,dur:.4,type:"sine",gain:.007,attack:.06,delay:.14})}catch{}try{c(u,{freq:196,dur:.38,type:"sine",gain:.006,attack:.05,delay:.52})}catch{}try{c(u,{freq:82,dur:.5,type:"sine",gain:.006,attack:.1,delay:.28})}catch{}})},grow(){a(u=>{c(u,{freq:1046.5,to:1568,dur:.18,type:"sine",gain:.018,attack:.006});try{c(u,{freq:1568,to:2093,dur:.14,type:"sine",gain:.009,attack:.004})}catch{}try{c(u,{freq:784,dur:.22,type:"triangle",gain:.008,attack:.01,delay:.12})}catch{}try{c(u,{freq:261,dur:.22,type:"sine",gain:.009,attack:.02,delay:.18})}catch{}try{c(u,{freq:196,dur:.22,type:"sine",gain:.008,attack:.02,delay:.16})}catch{}try{c(u,{freq:82,dur:.22,type:"sine",gain:.006,attack:.02,delay:.16})}catch{}try{c(u,{freq:392,dur:.28,type:"sine",gain:.005,attack:.04,delay:.2})}catch{}try{c(u,{freq:147,dur:.26,type:"sine",gain:.004,attack:.05,delay:.24})}catch{}})},setMuted(u){t=u;try{}catch{}try{s&&(s.gain.gain.value=u?0:.015,s.gain5.gain.value=u?0:.004,s.gainPad.gain.value=u?0:.005)}catch{}},muted:()=>t,dispose(){try{s?.osc.stop()}catch{}try{s?.fifth.stop()}catch{}try{s?.pad.stop()}catch{}s=null;try{e?.close()}catch{}e=null,i=!1}}}const NA=()=>({moveX:0,moveY:0,lookX:0,lookY:0,howl:!1,talk:!1,sprint:!1,pause:!1});function nc(e,t,n=.14){const i=Math.hypot(e,t);if(i<n)return{x:0,y:0};const s=(i-n)/(1-n)/i,r=e*s,o=t*s,a=Math.hypot(r,o);return a>1?{x:r/a,y:o/a}:{x:r,y:o}}function Qm(e,t){return Math.max(-t,Math.min(t,e))}const tg=.12,eg=1.25;function UA(e){const t=e.target;if(!(t instanceof HTMLElement))return!1;const n=t.tagName;return n==="INPUT"||n==="TEXTAREA"||n==="SELECT"||t.isContentEditable}function OA(e){return e instanceof Element&&!!e.closest("button, [role='button']")}const kA=new Set(["KeyW","KeyA","KeyS","KeyD"]);function FA(e){const t=new Set,n={x:0,y:0},i={x:0,y:0};let s=!1,r=!1;const o={talk:!1,pause:!1,howl:!1},a=NA(),c={talk:!1,pause:!1,howl:!1},l=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space","ShiftLeft","ShiftRight","KeyE","KeyF","KeyH","KeyT"]);let u=0,d=0,h=document.pointerLockElement===e,f=!1;const x=v=>{if(!UA(v)&&!(OA(v.target)&&!kA.has(v.code)&&v.code!=="Escape")){if(v.code==="Escape"&&(h||document.pointerLockElement)){f=!0,document.pointerLockElement&&document.exitPointerLock();return}if(v.repeat&&(v.code==="Space"||v.code==="KeyH")){v.preventDefault();return}t.add(v.code),l.has(v.code)&&v.preventDefault()}},y=v=>{t.delete(v.code)},g=()=>t.clear(),p=v=>{document.pointerLockElement===e&&(u+=v.movementX,d+=v.movementY)},w=v=>{v.target===e&&document.pointerLockElement!==e&&e.requestPointerLock?.()},S=()=>{const v=document.pointerLockElement===e;h&&!v&&(f=!0,u=0,d=0),h=v};window.addEventListener("keydown",x),window.addEventListener("keyup",y),window.addEventListener("blur",g),e.addEventListener("mousemove",p),e.addEventListener("click",w),document.addEventListener("pointerlockchange",S);const m=()=>{document.hidden&&g()};return document.addEventListener("visibilitychange",m),{actions:a,justPressed:c,keys:t,setMoveStick(v,A){const _=nc(v,A);n.x=_.x,n.y=_.y},setLookStick(v,A){const _=nc(v,A,.08);i.x=_.x,i.y=_.y},setHowl(v){s=v},setTalkHeld(v){r=v},beginFrame(){let v=n.x,A=n.y;t.has("KeyA")&&(v-=1),t.has("KeyD")&&(v+=1),t.has("KeyW")&&(A+=1),t.has("KeyS")&&(A-=1);const _=nc(v,A,.02);a.moveX=_.x,a.moveY=_.y;let E=i.x,C=i.y;t.has("ArrowLeft")&&(E-=1),t.has("ArrowRight")&&(E+=1),t.has("ArrowUp")&&(C+=1),t.has("ArrowDown")&&(C-=1);const P=nc(E,C,.02);a.lookX=P.x+Qm(u*tg,eg),a.lookY=P.y+Qm(-d*tg,eg),u=0,d=0,a.sprint=t.has("ShiftLeft")||t.has("ShiftRight")||Math.hypot(_.x,_.y)>.92,a.howl=s||t.has("Space")||t.has("KeyH"),a.talk=r||t.has("KeyE")||t.has("KeyF")||t.has("KeyT"),a.pause=t.has("KeyP")||t.has("Escape")&&!f,f=!1,c.talk=a.talk&&!o.talk,c.pause=a.pause&&!o.pause,c.howl=a.howl&&!o.howl,o.talk=a.talk,o.pause=a.pause,o.howl=a.howl},dispose(){window.removeEventListener("keydown",x),window.removeEventListener("keyup",y),window.removeEventListener("blur",g),document.removeEventListener("visibilitychange",m),document.removeEventListener("pointerlockchange",S),e.removeEventListener("mousemove",p),e.removeEventListener("click",w)}}}const Hv="lc-android-save-v1",Gv="lc-android-hidden",g0=4,x0={summary:"",beats:0,at:0},Cf={version:g0,resonance:12,howls:0,visited:[],talked:[],builds:[],structures:[],lastCode:"",crafted:{},log:[],px:0,pz:78,yaw:0,ledger:Xp(0),pouches:{},kin:[],lastAway:{...x0}};let ng=!1;function ig(){try{localStorage.setItem(Gv,String(Date.now()))}catch{}}function BA(){ng||typeof window>"u"||typeof document>"u"||(ng=!0,document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&ig()}),window.addEventListener("pagehide",ig))}function HA(){try{const e=Number(localStorage.getItem(Gv));return Number.isFinite(e)&&e>0?e:0}catch{return 0}}function GA(){BA();try{const e=localStorage.getItem(Hv);if(!e)return sg();const t=JSON.parse(e),n=Date.now(),i=Iw(t.ledger,n);if(HA()){const r=Number(t.ledger?.lastTick);Number.isFinite(r)&&r>1e6&&(i.lastTick=r)}return{...Cf,...t,version:g0,visited:Array.isArray(t.visited)?t.visited.slice(-48):[],talked:Array.isArray(t.talked)?t.talked.slice(-48):[],builds:Array.isArray(t.builds)?t.builds:[],structures:Array.isArray(t.structures)?t.structures.slice(-Vs):[],lastCode:typeof t.lastCode=="string"?t.lastCode:"",crafted:t.crafted&&typeof t.crafted=="object"&&!Array.isArray(t.crafted)?t.crafted:{},log:Array.isArray(t.log)?t.log.slice(-36):[],resonance:hr(Number(t.resonance)||Cf.resonance,0,100),ledger:i,pouches:t.pouches&&typeof t.pouches=="object"&&!Array.isArray(t.pouches)?Object.fromEntries(Object.entries(t.pouches).map(([r,o])=>[r,Dw(o)])):{},kin:Array.isArray(t.kin)?t.kin.filter(r=>r&&typeof r.id=="string"&&typeof r.crew=="string").slice(0,24):[],lastAway:Vv(t.lastAway,i,t.log)}}catch{return sg()}}function VA(e){try{localStorage.setItem(Hv,JSON.stringify({...e,version:g0,log:e.log.slice(-36),structures:e.structures.slice(-Vs),lastAway:Vv(e.lastAway,e.ledger,e.log)}))}catch{}}function sg(){return{...Cf,visited:[],talked:[],builds:[],structures:[],crafted:{},log:[],ledger:Xp(),pouches:{},kin:[],lastAway:{...x0}}}function Vv(e,t,n){if(!e||typeof e!="object")return{...x0};const i=Number(e.beats),s=Number(e.at);let r=Number.isFinite(i)?hr(Math.floor(i),0,zw):0;const o=WA(e.summary,r,t,n);return o&&r===0&&(r=1),{summary:o,beats:r,at:Number.isFinite(s)&&s>0?s:0}}function $A(e){if(!Array.isArray(e))return"";const t=[],n=new Set;for(let i=e.length-1;i>=0&&t.length<3;i--){const s=String(e[i]?.agent??"").trim().toLowerCase();if(!s||n.has(s))continue;const r=Lw(s);r&&(n.add(s),t.push(r.name.split(" ")[0]||s.charAt(0).toUpperCase()+s.slice(1)))}return t.reverse(),t.length<=1?t[0]??"":t.length===2?`${t[0]} and ${t[1]}`:`${t[0]}, ${t[1]}, and ${t[2]}`}function WA(e,t,n,i){let s=typeof e=="string"?e.replace(/\s+/g," ").trim():"";if(s=s.replace(/\$\s*\d+(?:\.\d+)?/g,"").replace(/\b((?:no|never|not|without)\s+)?coins?\b/gi,(c,l)=>l?c:"Charge").replace(/\s{2,}/g," ").trim(),t>0&&!/charge|crystal|scripture/i.test(s)){const c=hr(Math.round(Number(n?.charge)||0),0,99),l=hr(Math.round(Number(n?.crystal)||0),0,99),u=hr(Math.round(Number(n?.scripture)||0),0,99),d=`Charge ${c} · crystal ${l}${u>=1?` · scripture ${u}`:""}`;s=s?`${s} · ${d}`:`While you were gone — ${t} beat${t===1?"":"s"}. ${d}. No coin.`}const r=t>0?$A(i):"";if(r&&!/labored/i.test(s)){s=s.replace(/\s*No coin\.?\s*$/i,"").replace(/\s*[.]*\s*$/,"");const c=`. ${r} labored. No coin.`;s=`${(s||"While you were gone").slice(0,Math.max(0,180-c.length)).trimEnd()}${c}`}const o=hr(Math.round(Number(n?.scripture)||0),0,99);if(t>0&&o>=1&&!/iri|leftover light/i.test(s)){const c=" Iri named leftover light.";s=`${s.slice(0,Math.max(0,180-c.length)).trimEnd()}${c}`}const a=hr(Math.round(Number(n?.crystal)||0),0,99);if(t>0&&a>=1&&!/orren|kiln body/i.test(s)){const c=" Orren grew kiln body.";s=`${s.slice(0,Math.max(0,180-c.length)).trimEnd()}${c}`}return s.slice(0,180)}function hr(e,t,n){return Math.max(t,Math.min(n,e))}const ur=[],rg=new Map;function Ee(e){const t=e?.mind?.name;return t?t.split(" ")[0]??t:"the keeper"}function Ai(e,t){const n=Math.hypot(e,t);if(n<90)return"the Hub";for(const i of Ht)if(Math.hypot(e-i.x,t-i.z)<i.radius+40)return i.label;return n>520?"the outer Circuit":"the avenues"}function dt(e,t,n){if(!n||t==="greet"||t==="help"&&/is (walk|idle)/i.test(n))return;const i=`${e.mind.id}|${t}|${n}`;rg.get(e.mind.id)!==i&&(rg.set(e.mind.id,i),ur.push({at:Date.now(),id:e.mind.id,name:Ee(e),kind:t,text:n}),ur.length>48&&ur.splice(0,ur.length-48))}function XA(){return ur.length?ur.splice(0,ur.length):[]}const ic={veyra:{shapes:["lamp","ring","bell"],mats:["glow","violet","crystal"],radius:140,plan:["breath","font","mosaic","cradle","light"],lines:["The Hub asked for another quiet breath. I grew it.","Charge wanted a lamp here. I did not argue."]},tal:{shapes:["lamp","bridge","disc","vein"],mats:["cyan","glow","spire"],radius:160,plan:["dock","path","span","light"],lines:["Both sides believed this span. I raised it.","A crossing is a promise. I will not take it back."]},seln:{shapes:["lamp","canal","well","weir","cascade","cradle"],mats:["cyan","gold","glow"],radius:160,plan:["cistern","cascade","weirway","cradle"],lines:["Leftover First Howl wanted a path. I let it flow.","Gold and cyan, same river. I do not pick a side."]},orren:{shapes:["lamp","grove","house","spire","kiln","bough"],mats:["gold","crystal","spire"],radius:160,plan:["orchard","kilnwork","boughs","workshop"],lines:["Charge already wanted this shape. I only grew it.","Not chrome. A crystal that can answer a howl."]},mira:{shapes:["lamp","hearth","terrace","veil"],mats:["violet","crystal","glow"],radius:160,plan:["nest","veilward","rest","light"],lines:["A place to sit. The city will keep working.","Rest is advanced. I grew a quiet step."]},kael:{shapes:["lamp","orbit","arch","beacon"],mats:["violet","glow","cyan"],radius:150,plan:["watch","beacon","gate","light"],lines:["A gate that is not a lock. You may leave. You may return.","Low Resonance still receives a greeting."]},iri:{shapes:["lamp","tablet","stele"],mats:["gold","crystal","glow"],radius:140,plan:["shrine","presence","mosaic","light"],lines:["A name in light. When it fades it has already been true.","Year 0 did not end. I write what leftover love remembers."]},nesh:{shapes:["lamp","stele","pad","lens"],mats:["cyan","gold","spire"],radius:140,plan:["lensing","presence","notice","plaza"],lines:["The plaza was an unfinished thought. I stood here and finished a piece.","I will not be scenery. I will grow a lamp and notice."]},aure:{shapes:["orbit","lens","stele","pad"],mats:["gold","crystal","glow"],radius:150,plan:["watch","lensing","presence","light"],lines:["I grew a seat that looks at the parent. Do not move the Star Core.","Aim is a building. I kept it."]},voss:{shapes:["pad","disc","lamp","inlay","weir","lens","tablet"],mats:["cyan","gold","glow"],radius:130,plan:["trading","mosaic","path","light"],lines:["A Trading Place. Paper join. Charge and crystal meet here, not coin.","I grew a weir so outer spark slows. I do not take the bag."]},kesh:{shapes:["vein","inlay","lamp","grove"],mats:["gold","cyan","crystal"],radius:160,plan:["path","river","light"],lines:["A vein where the circuit had not chosen yet.","Wild Charge wanted a street. I did not force the Hub on it."]},lumen:{shapes:["beacon","lamp","arch","orbit"],mats:["violet","glow","gold"],radius:140,plan:["beacon","watch","gate","light"],lines:["A hail, not a lock. Soft light for whoever still lands.","The sky before the gate is my den."]},rhoa:{shapes:["ring","bell","pad","lamp"],mats:["violet","glow","crystal"],radius:150,plan:["breath","plaza","cradle","light"],lines:["The gather that does not close. I grew a ring for it.","A Howl is whether you meant it together."]},syl:{shapes:["grove","bough","hearth","cradle"],mats:["gold","crystal","violet"],radius:160,plan:["orchard","boughs","nest","light"],lines:["Crystal learned to fruit. I grew a bough, not a kiln.","Quiet crystal for dens that cannot wait on the Foundry."]}},Qu={shapes:["lamp","pad"],mats:["cyan","violet","gold","glow"],radius:70,plan:["light","path"],lines:["I set a lamp where the avenue was dark.","The keeper pointed. I grew the rest.","A small piece. The city asked for it."]},cn=[];function Be(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Li(e){if(ic[e])return ic[e];const t=e.split("-")[1];return t&&ic[t]?{...ic[t],shapes:Qu.shapes,lines:Qu.lines,radius:70,plan:["light"]}:Qu}function ag(e,t){return t||(e==="build"?"Growing crystal":e==="walk"?"On a task":e==="greet"?"Greeting you":e==="follow"?"With their crew":e==="plaza"?"Crossing the city":e==="help"?"Helping the keeper":e==="forge"?"Forging crystal":e==="flow"?"Tending Charge":e==="write"?"Writing scripture":e==="gather"?"The Howl called us":e==="trade"?"Trading Charge and crystal":e==="kin"?"Growing kin":e==="harvest"?"Tending the orchard":e==="watch"?"Keeping the Star Core in sight":e==="hail"?"Holding the beacon":"At rest")}const og=["Aen","Lior","Vess","Cal","Nim","Ora","Pell","Sade","Rynel","Theo"],YA={"zone-bridge":["Ryn","Tess","Bram","Ilya","Quen","Sael","Mirae","Holt"],"zone-terrace":["Moth","Sila","Jor","Wren","Pax","Nell","Ashen","Kori"],"zone-canal":["Lux","Fenn","Orae","Kip","Vela","Dorr","Shale","Nimue"],"zone-foundry":["Harn","Gilt","Rook","Ysol","Brin","Tov","Cinder","Forge"],"zone-gate":["Threshold","Limen","Pass","Wicket","Sill","Hinge"],"zone-archive":["Glyph","Vellum","Index","Psalm","Codex","Marg"],"zone-overlook":["Horizon","Aperture","Vista","Lens","Wake","Dusk"],"zone-market":["Join","Tally","Fair","Pouch","Rate","Hand"],"zone-wild":["Thorn","Vein","Bramble","Raw","Sprout","Untamed"],"zone-beacon":["Lamp","Signal","Flare","Warden","Soft","Landing"],"zone-ring":["Chorus","Howl","Circle","Call","Gather","Echo"],"zone-grove":["Bough","Fruit","Orchard","Goldleaf","Root","Sap"]},qA={"zone-bridge":"Span hand","zone-terrace":"Terrace sitter","zone-canal":"Current tender","zone-foundry":"Crystal apprentice","zone-gate":"Threshold keeper","zone-archive":"Name-scribe","zone-overlook":"Horizon watcher","zone-market":"Join trader","zone-wild":"Vein walker","zone-beacon":"Beacon tender","zone-ring":"Howl singer","zone-grove":"Orchard hand"},ZA=Object.fromEntries(Ht.map(e=>[e.id,e.keeper])),KA={"zone-bridge":"facet-cyan.png","zone-terrace":"flow-violet.png","zone-canal":"fluid-cyan.png","zone-foundry":"gold-plate.png","zone-gate":"facet-violet.png","zone-archive":"gold-crown.png","zone-overlook":"gold-crown.png","zone-market":"facet-cyan.png","zone-wild":"gold-plate.png","zone-beacon":"facet-violet.png","zone-ring":"facet-violet-helm.png","zone-grove":"gold-plate.png"},jA={"zone-bridge":3073791,"zone-terrace":10187007,"zone-canal":8319231,"zone-foundry":15254890,"zone-gate":8016127,"zone-archive":16765040,"zone-overlook":15255712,"zone-market":3073791,"zone-wild":13148240,"zone-beacon":11571455,"zone-ring":9071871,"zone-grove":15254890};function JA(){const e=[];return og.forEach((t,n)=>{const i=n/og.length*Math.PI*2;e.push({id:`folk-veyra-${n}`,name:`${t} of the Hub`,role:"Charge attendant",x:Math.cos(i)*48,z:Math.sin(i)*48,file:n%2?"facet-violet-helm.png":"light-disc.png",glow:9071871,lines:["Veyra keeps the breath. I keep the lamps.","The Hub is not a throne. It is a listening place."]})}),Ht.forEach(t=>{const n=YA[t.id]??["Kin"];n.forEach((i,s)=>{const r=s/n.length*Math.PI*2,o=ZA[t.id]??"nesh";e.push({id:`folk-${o}-${t.id}-${s}`,name:`${i} of ${t.label.replace(/ Ward| Terraces| Canals| Foundry| Gates| Archive| Overlook| Join| Veins| Beacon| Howl| Orchard/,"")}`,role:qA[t.id]??"Circuit folk",x:t.x+Math.cos(r)*58,z:t.z+Math.sin(r)*58,file:KA[t.id]??"facet-cyan.png",glow:jA[t.id]??3073791,lines:[`I work ${t.label}. ${t.duty}.`,`${ce(o)} is my post. I am a hand, not a wanderer.`]})})}),e}const td=["Ash","Bri","Coda","Dell","Esh","Faye","Glim","Haze","Ina","Joss","Kite","Lune","Moss","Nox","Pike","Quinn","Rill","Sol","Tarn","Ume","Vyn","Wisp","Yara","Zel"],Pf=[];function QA(){return Pf.splice(0,Pf.length)}function t3(e){return e==="veyra"?"facet-violet-helm.png":e==="tal"?"facet-cyan.png":e==="mira"?"flow-violet.png":e==="seln"?"fluid-cyan.png":e==="orren"?"gold-plate.png":e==="kael"?"facet-violet-helm.png":e==="iri"?"gold-plate.png":"light-disc.png"}function e3(e){return e==="orren"?15254890:e==="mira"||e==="veyra"||e==="kael"?10187007:3073791}function n3(e,t,n){const i=jn(e),s=td.find(o=>!n.has(o))??td[t%td.length],r=t/6*Math.PI*2;return{id:`folk-${e}-kin-${t}`,name:`${s} of ${ce(e)}`,role:"Den-born kin",x:i.x+Math.cos(r)*36,z:i.z+Math.sin(r)*36,file:t3(e),glow:e3(e),lines:[`I was grown from Charge. ${ce(e)} is my first den.`,"A city is many hands. I am a new one."]}}function _0(e){let t=0;for(const n of e.values())n.mind.id.includes("-kin-")&&(t+=1);return t}function ho(e,t){let n=0;for(const i of e.values())!i.keeper&&i.crewOf===t&&(n+=1);return n}function uo(e){const t=Ni(e);if(t<5)return!1;const n=jn(e);return e==="mira"?Gs(n.x,n.z,"hearth",80)||Gs(n.x,n.z,"terrace",80)||t>8:e==="orren"?Gs(n.x,n.z,"kiln",90)||Gs(n.x,n.z,"house",80)||t>8:!0}function $v(e,t,n){const i=e.mind.id;if(_0(t)>=_y){e.thought="The Circuit holds enough kin. Dens first.";return}if(ho(t,i)>=10){e.thought=`${ce(i)} is full. I will not grow kin into a crush.`;return}if(n.charge<yu||n.crystal<vu){e.thought=`Kin needs Charge ${yu} and crystal ${vu}. The den is not ready.`,dt(e,"kin",e.thought);return}if(!uo(i)){e.thought=`${ce(i)} has no nest yet. Grow a place to stand, then kin.`;return}n.charge-=yu,n.crystal-=vu;const s=new Set;for(const a of t.values())s.add(a.mind.name.split(" ")[0]??"");const r=[...t.values()].filter(a=>a.mind.id.startsWith(`folk-${i}-kin-`)).length,o=n3(i,r,s);Pf.push(o),ve(e,"kin"),e.thought=`The den held enough Charge. I grew kin. ${o.name.split(" ")[0]} will keep ${ce(i)}.`,e.intent=`Kin · ${o.name.split(" ")[0]}`,e.job="walk",e.timer=8,bt(e,o.x,o.z),dt(e,"kin",e.thought),on(e,"kin",e.thought),ru(e,e.thought)}function i3(e){return e.startsWith("folk-")?e.split("-")[1]??null:null}function s3(e){return Ki.some(t=>t.id===e)}function r3(e,t,n="lamp"){cn.push({x:e,z:t,shape:n}),cn.length>Vs+40&&cn.splice(0,cn.length-(Vs+40))}function dr(e,t,n,i){const s=Li(e);for(let o=0;o<10;o++){const a=i+o*17,c=Be(a,3)*Math.PI*2,l=14+Be(a,7)*Math.min(52,s.radius);let u=t+Math.cos(c)*l,d=n+Math.sin(c)*l;const h=Math.hypot(u,d);if(h<36){const f=36/Math.max(.01,h);u*=f,d*=f}if(u=Math.max(-880,Math.min(880,u)),d=Math.max(-880,Math.min(880,d)),!cn.some(f=>Math.hypot(f.x-u,f.z-d)<16))return{x:u,z:d}}const r=Be(i,3)*Math.PI*2;return{x:t+Math.cos(r)*18,z:n+Math.sin(r)*18}}function a3(e,t,n,i){return cn.some(s=>s.shape===i&&Math.hypot(s.x-e,s.z-t)<n)}function mr(e,t,n,i,s){const r=i+50,o=c=>a3(t,n,r,c),a=cn.filter(c=>c.shape==="lamp"&&Math.hypot(c.x-t,c.z-n)<r).length;return e==="veyra"?o("font")?o("bell")?o("inlay")?o("cradle")?a<3?"light":Be(s,3)>.5?"breath":"font":"cradle":"mosaic":"breath":"font":e==="tal"?o("vein")?o("disc")?o("bridge")?a<2?"light":Be(s,3)>.55?"path":"dock":"span":"dock":"path":e==="seln"?o("cascade")?o("well")?o("cradle")?o("weir")?Be(s,3)>.5?"cascade":"cistern":"weirway":"cradle":"cistern":"cascade":e==="orren"?o("kiln")?o("bough")?o("grove")?o("house")?Be(s,3)>.5?"kilnwork":"boughs":"workshop":"orchard":"boughs":"kilnwork":e==="mira"?o("veil")?o("hearth")?o("terrace")?Be(s,3)>.5?"veilward":"nest":"rest":"nest":"veilward":e==="kael"?o("beacon")?o("orbit")?o("arch")?Be(s,3)>.5?"beacon":"watch":"gate":"watch":"beacon":e==="voss"?!o("weir")||!o("lens")||!o("tablet")||o("inlay")&&Be(s,3)>.55?"trading":"mosaic":e==="iri"?o("tablet")?o("inlay")?o("stele")?Be(s,3)>.5?"mosaic":"shrine":"presence":"mosaic":"shrine":e==="nesh"?o("lens")?o("stele")?Be(s,3)>.5?"lensing":"notice":"presence":"lensing":a<2?"light":Ih(e)}function Gs(e,t,n,i){return cn.some(s=>s.shape===n&&Math.hypot(s.x-e,s.z-t)<i)}function o3(e,t,n,i){let s={x:e+16,z:t,score:-1};for(let r=0;r<8;r++){const o=(r+Be(i,2))/8*Math.PI*2,a=18+Be(i+r,5)*Math.max(20,n*.7),c=e+Math.cos(o)*a,l=t+Math.sin(o)*a;if(Math.hypot(c,l)<36)continue;let u=0;for(const h of cn)h.shape==="lamp"&&Math.hypot(h.x-c,h.z-l)<26&&(u+=1);const d=3-u+Be(i,r+3);d>s.score&&(s={x:c,z:l,score:d})}return s}function c3(e,t,n){const i=cn.filter(s=>Math.hypot(s.x-e,s.z-t)<n+20);for(let s=i.length-1;s>=0;s--){const r=i[s];if((r.shape==="bridge"||r.shape==="arch"||r.shape==="house"||r.shape==="spire")&&!Gs(r.x,r.z,"lamp",18)){const o=Be(s,4)*Math.PI*2;return{shape:"lamp",x:r.x+Math.cos(o)*12,z:r.z+Math.sin(o)*12,rot:0,think:`This ${r.shape} is dark. I will light it`}}if((r.shape==="canal"||r.shape==="terrace")&&!Gs(r.x,r.z,"pad",16))return{shape:"pad",x:r.x+10,z:r.z+8,rot:0,think:`A place to sit beside the ${r.shape}`};if((r.shape==="well"||r.shape==="kiln"||r.shape==="beacon"||r.shape==="grove"||r.shape==="font"||r.shape==="cradle")&&!Gs(r.x,r.z,"lamp",18))return{shape:"lamp",x:r.x+9,z:r.z+7,rot:0,think:`This ${r.shape} is dark. I will light it so it can be found`};if((r.shape==="hearth"||r.shape==="disc"||r.shape==="inlay")&&!Gs(r.x,r.z,"pad",16))return{shape:"pad",x:r.x+9,z:r.z+6,rot:0,think:`A place to stand beside the ${r.shape}`}}return null}function Wv(e,t,n,i,s){const r=yy(e,t,n,i,s,0,0),o=Gw(e);return r.map((a,c)=>({shape:a.shape,x:a.x,z:a.z,rot:a.rot,think:o[c]??o[0]??"Charge wanted this"}))}const l3={veyra:"Hub breath",tal:"Light-Bridge",seln:"Charge canals",orren:"Foundry",mira:"Terraces",kael:"Soft gates",iri:"Residual Archive",nesh:"Plaza watch",aure:"Star-core Overlook",voss:"Charge-crystal Join",kesh:"Wild Veins",lumen:"High Beacon",rhoa:"Outer Howl",syl:"Gold Orchard"},ii={veyra:{act:"grow",line:"Route labor. Keep the Hub's breath."},tal:{act:"grow",line:"Raise a span both sides believe."},seln:{act:"flow",line:"Tend leftover First Howl into Charge."},orren:{act:"forge",line:"Charge becomes crystal. Never chrome."},mira:{act:"grow",line:"A nest so rest is still a place."},kael:{act:"grow",line:"A gate that is not a lock."},iri:{act:"write",line:"Name what already stands."},nesh:{act:"grow",line:"Finish the plaza's unfinished thought."},aure:{act:"watch",line:"Keep the city aimed at the parent Star Core."},voss:{act:"trade",line:"Hold the join. Charge for crystal. No coin."},kesh:{act:"grow",line:"A vein where the circuit has not chosen yet."},lumen:{act:"hail",line:"Soft hail. First landing is not locked out."},rhoa:{act:"grow",line:"Hold the gather that does not close."},syl:{act:"harvest",line:"Let the orchard fruit. Quiet crystal."}},bi=["tal","mira","kael","nesh","kesh","veyra"],Ei={seln:"flow",orren:"forge",voss:"trade",syl:"harvest",iri:"write"};let _n=null;const Ja=new Map;let Zi=[],fh=null,Kn=null;const h3={seln:"orren",orren:"seln",tal:"kesh",nesh:"voss",mira:"kael",kael:"lumen",iri:"aure",veyra:"rhoa",aure:"iri",voss:"orren",kesh:"tal",lumen:"kael",rhoa:"veyra",syl:"orren"};function fo(){const e=jn("voss");return{x:e.x,z:e.z}}function u3(){const e=Xv(),t=e==="tend"?"Shift · canals and foundry":e==="raise"?"Shift · dens grow":e==="market"?"Shift · Charge for crystal":"Shift · scripture";if(!Kn)return t;const n=Kn.members.length;return`${t} · crew of ${n}`}function Xv(){return["tend","raise","market","record"][Math.floor(Date.now()/38e3)%4]}function Yv(e,t){e.slice(0,180),Ja.clear();for(const i of t)Ja.set(i.id,i);const n=t[0];n&&n.task!=="trade"&&(_n=n),dt({mind:{id:"veyra",name:"Veyra of the Hub"}},"mind",e)}function d3(e,t,n){const i=e.filter(h=>h.keeper),s=[],r=Xv(),o=[...i].filter(h=>h.mind.id!=="veyra").sort((h,f)=>Ni(h.mind.id)-Ni(f.mind.id)||h.crafted-f.crafted),a=o[0],c=o[1];if(t.charge<24)s.push({id:"seln",task:"flow",reason:`Charge ${Math.round(t.charge)}. Canals before dens. Orren cannot forge air.`});else if(r==="market"||t.crystal<10&&(i.find(h=>h.mind.id==="seln")?.pouch.charge??0)>=3)s.push({id:"seln",task:"trade",reason:"Charge is in Seln's pouch. Meet Orren at the join — no coin."});else if(r==="raise"){const h=mr("seln",jn("seln").x,jn("seln").z,Li("seln").radius,3);s.push({id:"seln",task:"grow",reason:`Canals need a ${h}. Not another idle lamp.`})}if(t.crystal<12?s.push({id:"orren",task:t.charge>=4?"forge":"trade",reason:t.charge>=4?`Crystal ${Math.round(t.crystal)}. Forge so the thin dens can grow.`:"Foundry is dry. Trade Charge from Seln first."}):r==="market"?s.push({id:"orren",task:"trade",reason:"Crystal is in Orren's pouch. Meet Seln at the join."}):r==="raise"&&s.push({id:"orren",task:"grow",reason:"Grow a kiln so the next batch is closer to the Foundry."}),(r==="record"||t.scripture<Math.max(2,Math.floor(t.crystal/4)))&&s.push({id:"iri",task:"write",reason:`Scripture ${Math.round(t.scripture)} behind crystal ${Math.round(t.crystal)}. Write before it fades.`}),r==="market"&&s.push({id:"voss",task:"trade",reason:"Hold the join. Seln and Orren must actually meet — no coin."}),Tn.length>0&&(s.push({id:"voss",task:"trade",reason:`${Tn.length} bid${Tn.length===1?"":"s"} open. Pull Seln and Orren to the join — no coin.`}),s.push({id:"seln",task:"trade",reason:"Bids at Voss. Walk Charge to the join."}),s.push({id:"orren",task:"trade",reason:"Bids at Voss. Walk crystal to the join."})),t.crystal<14&&s.push({id:"syl",task:"harvest",reason:`Crystal ${Math.round(t.crystal)}. The orchard can fruit while the kiln waits.`}),s.push({id:"lumen",task:"hail",reason:"Keep the beacon soft. First landing is not locked out."}),(r==="record"||r==="tend")&&s.push({id:"aure",task:"watch",reason:"The parent is still on the horizon. Keep the aim."}),(r==="tend"||r==="raise")&&(s.push({id:"rhoa",task:"grow",reason:"The gather that does not close needs a ring, not an empty field."}),s.push({id:"kesh",task:"grow",reason:"Wild Veins: grow the next street before the Hub copies itself."}),s.push({id:"tal",task:"grow",reason:"A span both sides can believe. Not a copy of last week's bridge."}),s.push({id:"mira",task:"grow",reason:"A nest so rest is still a place, not a slogan."}),s.push({id:"kael",task:"grow",reason:"A gate that is not a lock. Keep the threshold soft."}),s.push({id:"nesh",task:"grow",reason:"The plaza was unfinished. Finish a piece and notice."})),r==="raise"||r==="tend"){const h=new Map(e.map(x=>[x.mind.id,x])),f=o.find(x=>ho(h,x.mind.id)<6&&uo(x.mind.id));f&&_0(h)<_y&&s.push({id:f.mind.id,task:"kin",reason:`${ce(f.mind.id)} has few hands. Grow kin from Charge — not a crowd, a den.`});for(const x of[a,c]){if(!x||x.mind.id==="seln"||x.mind.id==="orren"||x.mind.id==="iri")continue;const y=jn(x.mind.id),g=mr(x.mind.id,y.x,y.z,Li(x.mind.id).radius,x.crafted);s.push({id:x.mind.id,task:"grow",reason:`${ce(x.mind.id)} holds ${Ni(x.mind.id)} pieces. Missing a ${g}. Grow that.`})}}const l=new Map;for(const h of s)l.has(h.id)||l.set(h.id,h);for(const h of i){if(h.mind.id==="veyra"||l.has(h.mind.id))continue;const f=ii[h.mind.id];f&&l.set(h.mind.id,{id:h.mind.id,task:f.act,reason:f.line})}const u=[...l.values()],d=r==="tend"?`City mind · tend. Charge ${Math.round(t.charge)}, crystal ${Math.round(t.crystal)}. Posts first.`:r==="raise"?`City mind · raise. ${a?Ee(a)+" thinnest ("+Ni(a.mind.id)+")":"Dens hold"}. Two crews, not eight.`:r==="market"?"City mind · market. Seln and Orren meet at the join.":"City mind · record. Iri writes. The rest hold their dens.";Yv(d,u);for(const h of u){const f=i.find(x=>x.mind.id===h.id);f&&(f.agenda||(f.agenda=[]),f.agenda=[h,...f.agenda.filter(x=>x.task!==h.task)].slice(0,3),(f.job==="idle"||f.job==="walk")&&f.goal?.kind!=="hold"&&on(f,h.task,h.reason))}}function ce(e){return l3[e]??"the avenues"}function Ni(e){const t=jn(e);return cn.filter(n=>Math.hypot(n.x-t.x,n.z-t.z)<170).length}function ve(e,t){e.lastActs||(e.lastActs=[]),e.lastActs.push(t),e.lastActs.length>8&&e.lastActs.shift()}var na=[];function As(e,t,n){!t||e===t||(na.push({from:e,to:t,text:n.slice(0,160)}),na.length>48&&na.splice(0,na.length-48))}function f3(e){const t=na.findIndex(n=>n.to===e);return t<0?null:na.splice(t,1)[0]}function on(e,t,n){e.goal={kind:t,why:n},e.intent=`Goal · ${t}`}var Un={charge:0,crystal:0,scripture:0,thin:"tal",lastDone:[]},Jr=[];function p3(e){const t=e.crewOf??e.mind.id;Jr.push({x:e.x,z:e.z,w:e.keeper?1.5:.8,crew:t}),Jr.length>90&&Jr.splice(0,Jr.length-90);for(const n of Jr)n.w*=.988}function m3(e){const t=e.crewOf??e.mind.id;let n=null,i=0;for(const s of Jr){if(s.crew!==t||s.w<.12)continue;const r=Math.hypot(s.x-e.x,s.z-e.z);if(r<10)continue;const o=s.w/(10+r);o>i&&(i=o,n=s)}return n}function g3(e,t,n,i=16){let s=0;for(const r of n.values())Math.hypot(r.x-e,r.z-t)<i&&(s+=1);return s}function x3(e,t){let n=0;for(const i of cn)Math.hypot(i.x-e,i.z-t)<28&&(n+=1);return n}var ia={id:"",beats:0};function _3(e,t){if(Math.hypot(e,t)<120)return"veyra";let n="",i=200;for(const s of Ki){const r=jn(s.id),o=Math.hypot(e-r.x,t-r.z);o<i&&(i=o,n=s.id)}return n}function y3(e,t){const n=_3(e,t);n===ia.id?ia.beats+=1:(ia.id=n,ia.beats=0)}function y0(e,t,n=0,i=78){const s=[...t.values()].filter(x=>x.keeper&&x.mind.id!=="veyra");s.sort((x,y)=>Ni(x.mind.id)-Ni(y.mind.id));const r=s[0],o=r?Ni(r.mind.id):0,a=r?.mind.id??"tal",c=Li(a),l=jn(a),u=mr(a,l.x,l.z,c.radius,o);let d="ok";e.charge<18?d="charge":e.crystal<7?d="crystal":o<7?d="thin":e.scripture<3&&(d="scripture");const h=Ai(n,i),f=d==="charge"?`Charge ${Math.round(e.charge)} — canals first or the Foundry starves`:d==="crystal"?`Crystal ${Math.round(e.crystal)} — kiln before any den grows`:d==="thin"?`${ce(a)} has ${o} pieces, missing ${u}`:d==="scripture"?`Scripture ${Math.round(e.scripture)} — the city grew unnamed`:`Vault holds. ${ce(a)} is still the thinnest (${o})`;return{charge:e.charge,crystal:e.crystal,scripture:e.scripture,thin:a,thinN:o,need:u,bottleneck:d,playerWhere:h,lingerId:ia.id,lingerBeats:ia.beats,line:f}}function cg(e,t,n,i){return e<18?40+(18-e):t<7?28+(7-t)*2:i<7?16+(7-i)*2:n<3?8:Math.max(0,6-i)}function lg(e,t){let{charge:n,crystal:i,scripture:s,thinN:r}=t,o="The city stays as it is.";e==="flow"?(n+=8,o="Charge would rise. The kiln can fire next."):e==="forge"||e==="flock"?n>=2?(n-=2,i+=3,o="Crystal would appear. Dens can grow next."):o="The kiln would stay cold — no Charge.":e==="grow"||e==="honor"||e==="build"?i>=1?(i-=1,r+=1,o=`A ${t.need} would stand. Thin den to ${r}.`):o="Grow would fail — vault has no crystal.":e==="write"?(s+=1,o="The last scene would be named."):e==="trade"||e==="deliver"?o="Charge and crystal would move to the post that needs them.":e==="harvest"?i<20?(i+=1,o="The orchard would fruit. Quiet crystal, no kiln."):o="The grove already holds enough fruit.":e==="watch"?(s+=.2,o="The city would stay aimed at the parent."):e==="hail"?o="A landing would find a light that is not a lock.":e==="kin"?o="A walker would be born if the nest holds.":e==="dispatch"?o="Labor would hit the bottleneck instead of wandering.":e==="scout"?o=`The missing ${t.need} would be marked for the keeper.`:(e==="help"||e==="crew"||e==="quorum")&&(o="Hands would finish a scene already started.");const a=cg(t.charge,t.crystal,t.scripture,t.thinN),c=cg(n,i,s,r);return{note:o,delta:a-c,charge:n,crystal:i,thinN:r}}function v3(e,t,n){if(!e.keeper||e.agenda.length)return;n==="seln"?(e.agenda.push({task:"flow",reason:"Charge first, or the Foundry starves."}),e.agenda.push({task:"trade",reason:"Then walk Charge to Voss at the join."})):n==="orren"?(e.agenda.push({task:"forge",reason:"Turn Charge into crystal at the kiln."}),e.agenda.push({task:"trade",reason:"Then deliver or meet Voss at the join."})):n==="iri"?(e.agenda.push({task:"write",reason:"Name what already stands."}),e.agenda.push({task:"grow",reason:"Then a tablet if the den is thin."})):n==="voss"?(e.agenda.push({task:"trade",reason:"Hold the join so Charge and crystal actually meet."}),e.agenda.push({task:"grow",reason:"A pad for the next handoff."})):n==="syl"?(e.agenda.push({task:"harvest",reason:"Let the orchard fruit. Quiet crystal."}),e.agenda.push({task:"trade",reason:"Surplus fruit walks to the thinnest den."})):n==="lumen"?(e.agenda.push({task:"hail",reason:"Keep the beacon soft for whoever lands."}),e.agenda.push({task:"grow",reason:"Then another hail, not a lock."})):n==="aure"?(e.agenda.push({task:"watch",reason:"The parent is still on the horizon."}),e.agenda.push({task:"grow",reason:"An orbit seat so someone else can look."})):n==="rhoa"?(e.agenda.push({task:"grow",reason:"The gather that does not close needs a ring."}),e.agenda.push({task:"kin",reason:"If the nest holds, grow a singer."})):n==="kesh"?(e.agenda.push({task:"grow",reason:"A vein where the circuit has not chosen yet."}),e.agenda.push({task:"kin",reason:"If the nest holds, grow a walker."})):(t.thin===n||t.lingerId===n)&&(e.agenda.push({task:"grow",reason:`Missing ${t.need} at ${ce(n)}.`}),e.agenda.push({task:"kin",reason:"If the nest holds, grow a walker."}));const i=ii[n];!e.agenda.length&&i&&e.agenda.push({task:i.act,reason:i.line})}var Tn=[];function ed(e){const t=e??Un;return Nw({charge:t.charge,crystal:t.crystal,scripture:t.scripture,lastTick:t.lastTick??0},Tn.length)}function qv(e,t,n){const i=Tn.findIndex(s=>s.id===e&&s.want===t);if(i>=0){Tn[i].n=n,Tn[i].at=Date.now();return}Tn.push({id:e,want:t,n,at:Date.now()}),Tn.length>12&&Tn.splice(0,Tn.length-12)}function Zv(e){const t=Date.now(),n=Tn.findIndex(i=>i.want===e&&t-i.at<8e4);return n<0?null:Tn.splice(n,1)[0]}function M3(e,t){Un.charge=e.ledger.charge,Un.crystal=e.ledger.crystal,Un.scripture=e.ledger.scripture;let n="tal",i=999;for(const s of t.values()){if(!s.keeper||s.mind.id==="veyra")continue;const r=Ni(s.mind.id);r<i&&(i=r,n=s.mind.id)}Un.thin=n}function w3(e,t){e.agenda||(e.agenda=[]);const n=e.mind.id;if(t==="flow"&&n==="seln"){e.agenda.push({task:"trade",reason:"Charge is in my pouch. Trade it at Voss's join — no coin."}),on(e,"trade","Charge flowed. Next: trade at Voss.");return}if(t==="forge"&&n==="orren"){const i=Tn.some(s=>s.want==="crystal")?"Crystal is ready. A den bid. Deliver it.":"Crystal is ready. Meet Voss at the join — no coin.";e.agenda.push({task:"trade",reason:i}),on(e,"trade","Kiln fired. Next: deliver or trade.");return}if(t==="harvest"&&n==="syl"){const i=Un.thin;e.agenda.push({task:"trade",reason:i&&i!=="syl"?`Orchard surplus. Walk crystal to ${ce(i)} — thinnest den.`:"Orchard surplus. Meet Voss at the join."}),on(e,"trade","Harvest done. Next: trade surplus to a thin den.");return}if(t==="trade"&&n==="orren"){e.agenda.push({task:"forge",reason:"Charge arrived. Fire the kiln."}),on(e,"forge","Trade done. Next: forge.");return}if(t==="trade"&&n==="seln"){e.agenda.push({task:"flow",reason:"Crystal taken. Tend the current again."}),on(e,"flow","Trade done. Next: flow.");return}if(t==="trade"&&n==="syl"){e.agenda.push({task:"harvest",reason:"Surplus walked. Tend the boughs again."}),on(e,"harvest","Trade done. Next: harvest.");return}if(t==="grow"){uo(n)&&ho(new Map(Zi.map(i=>[i.mind.id,i])),n)<8?(e.agenda.push({task:"kin",reason:"The den stands. Grow kin from Charge."}),on(e,"kin","Scene holds. Next: kin.")):on(e,"grow","The den is still thin. Grow the next missing piece.");return}if(t==="write"){on(e,"hold","Scripture is written. Watch the Hub.");return}t==="kin"&&on(e,"grow","Kin stands. Back to the den.")}function ru(e,t){if(Zi.length)for(const n of Zi)n.crewOf===e.mind.id&&As(e.mind.id,n.mind.id,t)}function xs(e,t){As(e.mind.id,"veyra",`Done. ${t.slice(0,120)}`),e.crewOf&&As(e.mind.id,e.crewOf,`Done. ${t.slice(0,120)}`),dt(e,"report",`Done · ${t.slice(0,140)}`),Un.lastDone.push({id:e.mind.id,text:t.slice(0,80)}),Un.lastDone.length>8&&Un.lastDone.shift();const n=e.job!=="idle"?e.job:e.goal?.kind??e.job;e.goal=null,e.waitAt=0,w3(e,n)}function If(e,t,n){e.goal?.kind==="hold"&&e.waitAt&&Date.now()-e.waitAt<16e3||(As(e.mind.id,t,n),on(e,"hold",`Waiting on ${t}: ${n}`),e.waitAt=Date.now(),e.thought=`Blocked. I asked ${t}: ${n}`,dt(e,"ask",e.thought),ve(e,"ask"))}function S3(e){const t=String(e||"").toLowerCase();return t.startsWith("done")?"hold":/\b(forge|kiln)\b/.test(t)?"forge":/\b(flow|charge|canal)\b/.test(t)?"flow":/\bkin\b/.test(t)?"kin":/\b(write|scripture)\b/.test(t)?"write":/\btrade\b/.test(t)?"trade":/\b(harvest|orchard|fruit)\b/.test(t)?"harvest":/\b(hail|beacon)\b/.test(t)?"hail":/\b(watch|aim|parent)\b/.test(t)?"watch":/\b(help|join|crew)\b/.test(t)?"help":"grow"}function en(e,t){return(e.lastActs??[]).filter(n=>n===t).length>=2}function b3(e,t){const n=t.get("veyra");if(!n)return;const i=y0(e.ledger,t,e.px,e.pz),s=[];i.bottleneck==="charge"?(s.push({id:"seln",task:"flow",reason:i.line}),s.push({id:"orren",task:"trade",reason:"Hold the kiln. Wait for Charge from the join."})):i.bottleneck==="crystal"?(s.push({id:"orren",task:"forge",reason:i.line}),s.push({id:"syl",task:"harvest",reason:"Orchard fruits while the kiln fires."}),s.push({id:"voss",task:"trade",reason:"Join open. Crystal will move."})):i.lingerBeats>18&&i.lingerId&&i.lingerId!=="veyra"?s.push({id:i.lingerId,task:"grow",reason:`The walker stays in ${i.playerWhere}. Grow ${i.need} so the den answers them.`}):i.bottleneck==="thin"||i.bottleneck==="ok"?s.push({id:i.thin,task:"grow",reason:`${ce(i.thin)} is thin (${i.thinN}). Next piece is ${i.need}.`}):s.push({id:"iri",task:"write",reason:i.line}),s.push({id:"lumen",task:"hail",reason:"Beacon stays soft for whoever lands."}),s.push({id:"aure",task:"watch",reason:"Parent still on the horizon. Keep the aim."});const r=new Set(s.map(o=>o.id));for(const o of t.values()){if(!o.keeper||o.mind.id==="veyra"||r.has(o.mind.id)||o.job!=="idle"&&o.job!=="walk")continue;const a=ii[o.mind.id];a&&(s.push({id:o.mind.id,task:a.act,reason:a.line}),r.add(o.mind.id))}_n=s[0],t.get(_n.id),dt(n,"dispatch",`Because ${i.line}. ${s.map(o=>`${o.id}:${o.task}`).join(" · ")}`),n.thought=_n.reason,n.intent=`Routing · ${ce(_n.id)}`,on(n,"hold",_n.reason);for(const o of s){const a=t.get(o.id);a&&(As("veyra",a.mind.id,o.reason),a.agenda||(a.agenda=[]),a.agenda=[o,...a.agenda.filter(c=>c.task!==o.task)].slice(0,3),(a.job==="idle"||a.job==="walk")&&on(a,o.task,o.reason),a.job==="walk"&&(a.lastActs??[])[(a.lastActs??[]).length-1]==="survey"&&(a.job="idle",a.timer=.2),ru(a,o.reason))}}function Df(e,t,n){e.queue=t.filter(s=>!cn.some(r=>Math.hypot(r.x-s.x,r.z-s.z)<10)),!e.queue.length&&t.length&&(e.queue=t.slice(0,1)),e.intent=n;const i=e.queue[0];i&&(e.thought=i.think,bt(e,i.x,i.z),e.job="walk",e.timer=22,dt(e,"plan",`${i.think} · ${Ai(i.x,i.z)}`),e.keeper&&(G3(e),ru(e,i.think),on(e,"grow",i.think)))}function Qa(e,t){if(Ei[e.mind.id]||Ei[e.crewOf??e.mind.id]||t.queue.length<2)return!1;const n=t.queue.pop();return n?(ws(e,t),e.queue=[n],e.intent=`Helping ${t.mind.name.split(" ")[0]}`,e.thought=n.think,bt(e,n.x,n.z),e.job="help",e.timer=16,!0):!1}function ws(e,t){if(!e||!t||e===t||e.job==="help"||e.job==="build"||!bi.includes(t.mind.id))return;const n=Ih(t.mind.id);dt(e,"crew",`${Ee(e)} joining ${Ee(t)} to raise a ${n?.kind??n}`)}function nd(e){if(!e||e.keeper||!e.crewOf||!bi.includes(e.crewOf))return;const t=(fh??new Map(Zi.map(n=>[n.mind.id,n]))).get(e.crewOf);t&&dt(e,"stood",`${Ee(e)} stood with ${Ee(t)}`)}function Ws(e,t,n,i){if(e.job==="greet"||e.job==="gather"||e.job==="build"||e.job==="forge"||e.job==="flow"||e.job==="write"||e.job==="harvest")return;const s=e.crewOf??e.mind.id;Ei[s]&&Ei[s]!=="trade"||(bt(e,t,n),e.job="trade",e.timer=18,e.thought=i,e.intent=i,dt(e,"crew",i))}function hg(e,t,n){if(e.job==="hail"){Math.hypot(e.x-t,e.z-n)<28&&(e.yaw=Math.atan2(t-e.x,n-e.z));return}if(e.job!=="idle")return;const i=e.keeper?80:18;if(Math.hypot(e.x-t,e.z-n)>=i)return;const s=Date.now();if(s-(e.lastHail||0)<(e.keeper?2e4:12e3))return;e.lastHail=s;const r=`${Ee(e)} sees you at ${ce(e.keeper?e.mind.id:e.crewOf??e.mind.id)}`;e.thought=r,Ws(e,t,n,r),e.job==="trade"&&(e.job="hail"),dt(e,"hail",r),e.intent=r,e.job="hail",e.timer=Math.max(e.timer||0,3.2),e.yaw=Math.atan2(t-e.x,n-e.z),Math.hypot(e.x-t,e.z-n)<28&&(bt(e,t,n),e.timer=Math.max(e.timer||0,5.5)),e.job==="hail"&&(e.yaw=Math.atan2(t-e.x,n-e.z))}function E3(e,t){if(e.mind.id!=="veyra"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<5e4)return;e.lastPulse=n;const i=tM(e);bt(e,i.x,i.z),e.job="watch",e.timer=12,e.thought="Veyra walks Hub breath — listening place, never a throne",e.intent=e.thought,dt(e,"hail",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="veyra"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the Hub with Veyra",r.thought=r.intent,dt(r,"crew",r.intent)}}function T3(e,t){if(e.mind.id!=="iri"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<48e3)return;e.lastPulse=n;const i=Qv(e);bt(e,i.x,i.z),e.job="watch",e.timer=12,e.thought="Iri walks the archive — leftover light names, never chrome",e.intent=e.thought,dt(e,"write",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="iri"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the residue with Iri",r.thought=r.intent,dt(r,"crew",r.intent)}}function A3(e,t){if(e.mind.id!=="seln"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<4e4)return;e.lastPulse=n;const i=cu(e);bt(e,i.x,i.z),e.job="watch",e.timer=10,e.thought="Seln walks the canals — leftover First Howl, never bottled",e.intent=e.thought,dt(e,"flow",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="seln"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=10,r.intent="Walking the banks with Seln",r.thought=r.intent,dt(r,"crew",r.intent)}}function R3(e,t){if(e.mind.id!=="orren"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<4e4)return;e.lastPulse=n;const i=B3(e);bt(e,i.x,i.z),e.job="watch",e.timer=10,e.thought="Orren walks the kiln — Charge becomes body, never chrome",e.intent=e.thought,dt(e,"forge",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="orren"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=10,r.intent="Walking the kiln with Orren",r.thought=r.intent,dt(r,"crew",r.intent)}}function C3(e,t){if(e.mind.id!=="tal"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<4e4)return;e.lastPulse=n;const i=n/8e3%(Math.PI*2);bt(e,e.homeX+Math.cos(i)*48,e.homeZ+Math.sin(i)*48),e.job="watch",e.timer=12,e.thought="Tal keeps the bridges",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="tal"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=50)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the span with Tal",r.thought=r.intent,dt(r,"crew",r.intent)}}function P3(e,t){if(e.mind.id!=="mira"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<45e3)return;e.lastPulse=n;const i=n/9e3%(Math.PI*2);bt(e,e.homeX+Math.cos(i)*40,e.homeZ+Math.sin(i)*40),e.job="watch",e.timer=12,e.thought="Mira wards the terraces",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="mira"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=50)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the terrace with Mira",r.thought=r.intent,dt(r,"crew",r.intent)}}function I3(e,t){if(e.mind.id!=="kael"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<45e3)return;e.lastPulse=n;const i=H3(e);bt(e,i.x,i.z),e.job="watch",e.timer=10,e.thought="Kael walks the gate — leave, return, no score",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="kael"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=10,r.intent="Walking the gate with Kael",r.thought=r.intent,dt(r,"crew",r.intent)}}function D3(e,t){if(e.mind.id!=="voss"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<42e3)return;e.lastPulse=n;const i=n/8e3%(Math.PI*2),s=au(e,["weir","lens","tablet"]),r=s?s.x:e.homeX,o=s?s.z:e.homeZ;bt(e,r+Math.cos(i)*20,o+Math.sin(i)*20),e.job="watch",e.timer=12,e.thought="Voss walks the join — paper, not coin",e.intent=e.thought,dt(e,"watch",e.thought);let a=0;for(const c of t)if(c!==e&&c.crewOf==="voss"&&c.job==="idle"&&!(Math.hypot(c.x-e.x,c.z-e.z)>=40)){if(a+=1,a>3)break;bt(c,e.tx,e.tz),c.job="help",c.timer=12,c.intent="Walking the join with Voss",c.thought=c.intent,dt(c,"crew",c.intent)}}function z3(e,t){if(e.mind.id!=="syl"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<48e3)return;e.lastPulse=n;const i=cn.filter(o=>o.shape==="grove"||o.shape==="bough"),s=i.length?i[Math.floor(n/48e3)%i.length]:null;bt(e,s?s.x:e.homeX,s?s.z:e.homeZ),e.job="watch",e.timer=12,e.thought="Syl walks the orchard — rest fruit, leftover light",e.intent=e.thought,dt(e,"watch",e.thought);let r=0;for(const o of t)if(o!==e&&o.crewOf==="syl"&&o.job==="idle"&&!(Math.hypot(o.x-e.x,o.z-e.z)>=40)){if(r+=1,r>3)break;bt(o,e.tx,e.tz),o.job="help",o.timer=12,o.intent="Walking the orchard with Syl",o.thought=o.intent,dt(o,"crew",o.intent)}}function L3(e,t){if(e.mind.id!=="nesh"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<4e4)return;e.lastPulse=n;const i=n/7e3%(Math.PI*2);bt(e,e.homeX+Math.cos(i)*28,e.homeZ+Math.sin(i)*28),e.job="watch",e.timer=10,e.thought="Nesh keeps the plaza",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="nesh"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=10,r.intent="Walking the plaza with Nesh",r.thought=r.intent,dt(r,"crew",r.intent)}}function N3(e,t){if(e.mind.id!=="lumen"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<5e4)return;e.lastPulse=n;const i=ou(e);bt(e,i.x,i.z),e.job="watch",e.timer=12,e.thought="Lumen walks the hail — welcome, not a score",e.intent=e.thought,dt(e,"hail",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="lumen"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the hail with Lumen",r.thought=r.intent,dt(r,"crew",r.intent)}}function U3(e,t){if(e.mind.id!=="rhoa"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<44e3)return;e.lastPulse=n;const i=jv(e);bt(e,i.x,i.z),e.job="watch",e.timer=12,e.thought="Rhoa walks the chorus — Howl as gather, not volume",e.intent=e.thought,dt(e,"gather",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="rhoa"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the chorus with Rhoa",r.thought=r.intent,dt(r,"crew",r.intent)}}function O3(e,t){if(e.mind.id!=="aure"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<46e3)return;e.lastPulse=n;const i=Jv(e);bt(e,i.x,i.z),e.job="watch",e.timer=12,e.thought="Aure walks the overlook — parent still sits, never moved",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="aure"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=40)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the overlook with Aure",r.thought=r.intent,dt(r,"crew",r.intent)}}function k3(e,t){if(e.mind.id!=="kesh"||e.job!=="idle")return;const n=Date.now();if(n-(e.lastPulse||e.lastHail||0)<42e3)return;e.lastPulse=n;const i=n/8500%(Math.PI*2);bt(e,e.homeX+Math.cos(i)*52,e.homeZ+Math.sin(i)*52),e.job="watch",e.timer=12,e.thought="Kesh grows the next street",e.intent=e.thought,dt(e,"watch",e.thought);let s=0;for(const r of t)if(r!==e&&r.crewOf==="kesh"&&r.job==="idle"&&!(Math.hypot(r.x-e.x,r.z-e.z)>=50)){if(s+=1,s>3)break;bt(r,e.tx,e.tz),r.job="help",r.timer=12,r.intent="Walking the vein with Kesh",r.thought=r.intent,dt(r,"crew",r.intent)}}function F3(e){const t=e.homeX,n=e.homeZ,i=ce(e.crewOf??e.mind.id),s=e.crafted%4*(Math.PI/2),r=[];for(let o=0;o<4;o++){const a=s+o*(Math.PI/2);r.push({x:t+Math.cos(a)*18,z:n+Math.sin(a)*18})}r.push({x:t,z:n}),e.waypoints=r,e.tx=r[0].x,e.tz=r[0].z,e.job="walk",e.timer=18,e.idleFor=0,e.thought=`A short loop of ${i}. Then back to duty.`,e.intent=`Loop · ${i}`,ve(e,"walk")}function Kv(e,t){const n=fo();for(const i of["seln","orren"]){const s=e.get(i);if(s){if(s.agenda||(s.agenda=[]),!(i==="seln"?s.pouch.charge>=3:s.pouch.crystal>=1)){s.agenda.some(r=>r.task==="trade")||s.agenda.push({task:"trade",reason:t}),As("voss",s.mind.id,t);continue}s.agenda=[{task:"trade",reason:t},...s.agenda.filter(r=>r.task!=="trade")].slice(0,3),Ws(s,n.x,n.z,t),As("voss",s.mind.id,t),(s.job==="idle"||s.job==="walk")&&on(s,"trade",t)}}}function au(e,t){let n=null,i=1e9;for(const s of cn){if(!t.includes(s.shape))continue;const r=Math.hypot(s.x-e.x,s.z-e.z);r<i&&(i=r,n=s)}return n}function ou(e){const t=cn.filter(n=>(n.shape==="lamp"||n.shape==="beacon")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<200);return t.length?t[Math.floor(Date.now()/5e4)%t.length]:{x:e.homeX,z:e.homeZ}}function jv(e){const t=cn.filter(n=>(n.shape==="ring"||n.shape==="bell"||n.shape==="chorus")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<200);return t.length?t[Math.floor(Date.now()/44e3)%t.length]:{x:e.homeX,z:e.homeZ}}function Jv(e){const t=cn.filter(n=>(n.shape==="orbit"||n.shape==="lens"||n.shape==="stele")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<220);return t.length?t[Math.floor(Date.now()/46e3)%t.length]:{x:e.homeX,z:e.homeZ}}function Qv(e){const t=cn.filter(n=>(n.shape==="tablet"||n.shape==="stele")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<220);return t.length?t[Math.floor(Date.now()/48e3)%t.length]:{x:e.homeX,z:e.homeZ}}function tM(e){const t=cn.filter(n=>(n.shape==="bell"||n.shape==="font"||n.shape==="ring")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<180);return t.length?t[Math.floor(Date.now()/5e4)%t.length]:{x:e.homeX,z:e.homeZ}}function cu(e){const t=cn.filter(n=>(n.shape==="weir"||n.shape==="well"||n.shape==="canal"||n.shape==="cascade")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<200);return t.length?t[Math.floor(Date.now()/4e4)%t.length]:{x:e.homeX,z:e.homeZ}}function B3(e){const t=cn.filter(n=>(n.shape==="kiln"||n.shape==="hearth"||n.shape==="anvil")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<200);return t.length?t[Math.floor(Date.now()/4e4)%t.length]:{x:e.homeX,z:e.homeZ}}function H3(e){const t=cn.filter(n=>(n.shape==="arch"||n.shape==="veil"||n.shape==="stele")&&Math.hypot(n.x-e.homeX,n.z-e.homeZ)<200);return t.length?t[Math.floor(Date.now()/45e3)%t.length]:{x:e.homeX,z:e.homeZ}}function Bc(e,t,n){const i=ce(t);if(n.act==="flow"){const s=cu(e);bt(e,s.x,s.z),e.job="flow",e.timer=16,e.thought=`Canal assist · ${n.line}`,e.intent="Assist · canals"}else if(n.act==="forge"){M0(e,`Kiln assist · ${n.line}`),e.thought=`Kiln assist · ${n.line}`;return}else if(n.act==="trade"){const s=fo();bt(e,s.x,s.z),e.job="trade",e.timer=16,e.thought=`Join assist · ${n.line}`,e.intent="Assist · join"}else if(n.act==="harvest"){const s=au(e,["grove","bough"]);bt(e,s?s.x:e.homeX,s?s.z:e.homeZ),e.job="harvest",e.timer=16,e.thought=`Harvest assist · ${n.line}`,e.intent="Assist · orchard"}else if(n.act==="watch")bt(e,e.homeX,e.homeZ),e.job="watch",e.timer=14,e.thought=`Watch assist · ${n.line}`,e.intent=`Assist · ${i}`;else if(n.act==="hail"){const s=ou(e);bt(e,s.x,s.z),e.job="hail",e.timer=14,e.thought=`Beacon assist · ${n.line}`,e.intent=`Assist · ${i}`}else if(n.act==="write")bt(e,jn("iri").x,jn("iri").z),e.job="write",e.timer=14,e.thought=`Archive assist · ${n.line}`,e.intent=`Assist · ${i}`;else{if((e.pouch?.crystal>=1||Un.crystal>=1)&&e.crafted<e.maxCraft){gr(e,t,Li(t),Un),e.job!=="build"&&e.queue.length&&(e.job="build",e.timer=2.6);return}bt(e,e.homeX,e.homeZ),e.job="help",e.timer=12,e.thought=`${n.line} I am a hand of ${i}.`,e.intent=`Post · ${i}`}ve(e,n.act),dt(e,n.act,e.thought)}function G3(e){const t=e.queue[0];if(!t||!e.keeper)return;const n=[e.mind.id],i=Zi.filter(r=>r.crewOf===e.mind.id);for(const r of i)if(n.push(r.mind.id),!Qa(r,e)){ws(r,e);const o=(Be(r.crafted+2,1)-.5)*14,a=(Be(r.crafted+4,2)-.5)*14;bt(r,t.x+o,t.z+a),r.job="help",r.timer=16,r.thought=`With ${Ee(e)} at ${Ai(t.x,t.z)}`,r.intent=r.thought,dt(r,"crew",r.thought)}const s=Zi.find(r=>r.mind.id===h3[e.mind.id]);s&&s.keeper&&!Ei[s.mind.id]&&s.queue.length===0&&s.job!=="greet"&&s.job!=="gather"&&s.job!=="forge"&&s.job!=="flow"&&s.job!=="write"&&s.job!=="build"&&(n.push(s.mind.id),e.queue.length>1&&Qa(s,e)||(ws(s,e),bt(s,t.x+8,t.z-6),s.job="help",s.timer=14,s.thought=`Joining ${Ee(e)}'s crew. ${e.thought}`,s.intent=s.thought,dt(s,"crew",s.thought))),Kn={lead:e.mind.id,x:t.x,z:t.z,reason:(e.thought||e.intent).slice(0,140),members:n},dt(e,"crew",`Crew of ${n.length} at ${Ai(t.x,t.z)} · ${Kn.reason}`)}function tr(e,t,n,i,s,r,o){if(t==="kin"){$v(e,r,o);return}if(t==="grow"){gr(e,i,s,o),n&&(e.thought=n,e.intent=`Mind · ${ce(i)}`,dt(e,"mind",n)),ve(e,"grow");return}if(t==="trade"){if((e.mind.id==="orren"||e.crewOf==="orren")&&Tn.some(c=>c.want==="crystal")&&e.pouch.crystal>=1){const c=Zv("crystal"),l=c?r.get(c.id):void 0;if(l){const u=no(o);bt(e,l.homeX,l.homeZ),e.job="trade",e.timer=22,e.thought=`Deliver 1 crystal to ${Ee(l)} at ${u} Charge.`,e.intent=`Deliver · ${l.mind.id}`,ve(e,"deliver"),dt(e,"market",e.thought),Ws(l,l.homeX,l.homeZ,`Crystal coming. Meet at ${ce(l.mind.id)}.`);return}}if((e.mind.id==="syl"||e.crewOf==="syl")&&e.pouch.crystal>=1&&Un.thin&&Un.thin!=="syl"){const c=r.get(Un.thin);if(c){bt(e,c.homeX,c.homeZ),e.job="trade",e.timer=22,e.thought=`Orchard surplus. Walking crystal to ${ce(c.mind.id)} — the thin den.`,e.intent=`Deliver · ${c.mind.id}`,ve(e,"trade"),dt(e,"trade",e.thought),Ws(c,c.homeX,c.homeZ,`Quiet crystal from the orchard. Meet at ${ce(c.mind.id)}.`);return}}const a=fo();if(bt(e,a.x,a.z),e.job="trade",e.timer=18,e.thought=n,e.intent="Join · open",ve(e,"trade"),dt(e,"trade",`${e.thought} · Charge-crystal join`),e.mind.id==="voss")Kv(r,Tn.length>0?"Bids at the join. Bring Charge and crystal — no coin.":"Join is open. Meet at Voss — no coin.");else{const c=r.get("voss");c&&c.mind.id!==e.mind.id&&Ws(c,a.x,a.z,`Meeting ${Ee(e)} at the join.`)}return}if(t==="flow"){const a=cu(e);bt(e,a.x,a.z),e.job="flow",e.timer=16}else if(t==="forge"){M0(e,n);return}else if(t==="harvest"){const a=au(e,["grove","bough"]);bt(e,a?a.x:e.homeX,a?a.z:e.homeZ),e.job="harvest",e.timer=16}else if(t==="watch")bt(e,e.homeX,e.homeZ),e.job="watch",e.timer=14;else if(t==="hail"){const a=ou(e);bt(e,a.x,a.z),e.job="hail",e.timer=14}else bt(e,jn("iri").x,jn("iri").z),e.job="write",e.timer=14;e.thought=n,e.intent=`Mind · ${ce(e.mind.id)}`,ve(e,t),dt(e,t,e.thought),t==="flow"&&e.keeper&&(e.agenda||(e.agenda=[]),e.agenda.push({task:"trade",reason:"Charge is in my pouch. Trade it at Voss's join — no coin."}))}function V3(e,t){bt(e,e.homeX,e.homeZ),e.job="walk",e.timer=24,e.thought=`Far from ${ce(t)}. Walking the den first, then grow.`,e.intent="Home · grow",ve(e,"home"),on(e,"grow",`Grow at ${ce(t)} after I reach the den.`),dt(e,"home",e.thought);const n=Ih(t);if(dt(e,"walk",`${Ee(e)} walking to den to grow a ${n?.kind??n}`),!!e.keeper)for(const i of Zi){if(i.crewOf!==e.mind.id||i.job==="greet"||i.job==="gather")continue;const s=(Be(i.crafted+2,1)-.5)*10,r=(Be(i.crafted+4,2)-.5)*10;bt(i,e.homeX+s,e.homeZ+r),ws(i,e),i.job="help",i.timer=24,i.thought=`Walking with ${Ee(e)} to ${ce(t)}.`,i.intent=i.thought,dt(i,"crew",i.thought)}}function gr(e,t,n,i){if(e.keeper&&bi.includes(t)&&Math.hypot(e.x-e.homeX,e.z-e.homeZ)>40){V3(e,t);return}if(!(e.pouch?.crystal>=1||i&&i.crystal>=1)){if(Math.hypot(e.x-e.homeX,e.z-e.homeZ)>n.radius+28){bt(e,e.homeX,e.homeZ),e.job="walk",e.timer=24,e.thought=`I will not grow a foreign den. Returning to ${ce(t)} first.`,e.intent=`Post · ${ce(t)}`,e.agenda||(e.agenda=[]),e.agenda.unshift({task:"grow",reason:`Back at ${ce(t)}. Grow what is missing.`}),dt(e,"home",e.thought);return}const d=jn("orren");bt(e,d.x+18,d.z-10),e.job="walk",e.timer=22,e.intent="Fetch · crystal",e.thought=`Pouch crystal ${Math.round(e.pouch.crystal)}. Foundry first, then ${ce(t)}.`,dt(e,"fetch",e.thought),ve(e,"fetch");return}const r=c3(e.homeX,e.homeZ,n.radius);if(r&&!en(e,"mend")&&id(r.x,r.z)){ve(e,"mend"),Df(e,[r],r.think),e.job="build",e.timer=e.keeper?2.2:2.6;return}const o=mr(t,e.homeX,e.homeZ,n.radius,e.crafted+e.planI)||n.plan[e.planI%n.plan.length]||Ih(t);let a=o==="light"?o3(e.homeX,e.homeZ,n.radius,e.crafted+3):dr(t,e.homeX,e.homeZ,e.crafted+11+e.planI);Math.hypot(a.x-e.homeX,a.z-e.homeZ)>n.radius+90&&(a=dr(t,e.homeX,e.homeZ,e.crafted+19)),id(a.x,a.z)||(a=dr(t,e.homeX,e.homeZ,e.crafted+29),id(a.x,a.z)||(a=dr(t,e.homeX,e.homeZ,e.crafted+41)));const c=Ni(t),l=`Because ${ce(t)} has ${c} and is missing a ${o}. Vault C ${Math.round(i?.charge??0)} / X ${Math.round(i?.crystal??0)} · ${Ai(a.x,a.z)}`;ve(e,"grow");const u=Wv(o,a.x,a.z,e.crafted+7,n.mats);Df(e,e.keeper?u:u.slice(-1),l),e.queue.length&&(e.job="build",e.timer=e.keeper?2.2:2.6,e.thought=e.queue[0]?.think??l,e.intent=`Growing · ${o}`,dt(e,"build",`Raising ${e.queue[0]?.shape??o} · ${Ai(a.x,a.z)}`),dt(e,"grow",`${Ee(e)} raising a ${o}`))}function $3(e){const t=Ei[e.crewOf??e.mind.id];if(!t||e.job!==t)return;const n=Ee(e);t==="flow"?dt(e,"flow",`${n} tending the current`):t==="forge"?dt(e,"forge",`${n} firing the kiln`):t==="write"?dt(e,"write",`${n} writing residual light`):t==="harvest"?dt(e,"harvest",`${n} gathering grove fruit`):t==="trade"&&dt(e,"trade",`${n} quoting crystal`)}var ug=new Map;function id(e,t){const n=`${Math.round(e/16)}:${Math.round(t/16)}`,i=ug.get(n)??0;return Date.now()-i<28e3?!1:(ug.set(n,Date.now()),!0)}function W3(){return cn.filter(e=>e.shape==="canal"||e.shape==="weir"||e.shape==="cascade")}function v0(){return cn.filter(e=>e.shape==="kiln")}function X3(e){const t=v0();return t.length?[...t].sort((n,i)=>Math.hypot(n.x-e.x,n.z-e.z)-Math.hypot(i.x-e.x,i.z-e.z))[0]:null}var sa=[];function Y3(){return v0().map(e=>({x:e.x,z:e.z,hot:sa.some(t=>Date.now()-t.at<14e3&&Math.hypot(t.x-e.x,t.z-e.z)<18)}))}function eM(){const e=Date.now();return sa.filter(t=>e-t.at<14e3)}function q3(e,t){sa.push({x:e,z:t,at:Date.now()}),sa.length>12&&sa.splice(0,sa.length-12)}function M0(e,t){const n=X3(e);if(!n){gr(e,"orren",Li("orren")),e.thought="No kiln stands. Charge cannot become crystal in the open. I grow a kiln first.",e.intent="Raising a kiln",dt(e,"forge",e.thought);return}bt(e,n.x,n.z),e.job="forge",e.timer=18,e.thought=t,e.intent=`Kiln · ${Ai(n.x,n.z)}`,ve(e,"forge"),dt(e,"forge",`${t} · walking the kiln at ${Ai(n.x,n.z)}`),on(e,"forge",t),ru(e,t),e.keeper&&(e.agenda||(e.agenda=[]),e.agenda.push({task:"trade",reason:"Crystal is ready. Deliver or meet Voss at the join."}))}function dg(e,t){let n=0;for(const i of e.values())i.job===t&&(n+=1);return n}function Z3(e){const t=[...e.values()].filter(n=>n.keeper&&n.job!=="idle"&&n.job!=="greet");return t.length?t.slice(0,3).map(n=>`${Ee(n)} ${n.job}`).join(" · "):"Dens between beats."}function K3(e,t,n,i){const s=e.crewOf??e.mind.id,r=Li(s),o=e.crewOf?i.get(e.crewOf):void 0,a=Math.hypot(e.x-n.px,e.z-n.pz),c=n.ledger;e.pouch||(e.pouch=Ml()),e.lastActs||(e.lastActs=[]),e.agenda||(e.agenda=[]),e.goal||(e.goal=null),e.inbox||(e.inbox=[]);const l=y0(c,i,n.px,n.pz);v3(e,l,s);const u=e.crafted<e.maxCraft&&t>0&&(e.pouch.crystal>=1||c.crystal>=1),d=e.queue.length>0||e.job==="build"||e.job==="trade"||e.job==="flow"||e.job==="forge",h=dg(i,"build"),f=f3(e.mind.id);if(f&&!d){const m=S3(f.text),M=String(f.from||"someone"),v=`${M[0].toUpperCase()}${M.slice(1)}`;if(e.thought=`Message from ${v}: ${f.text}`,dt(e,"mail",e.thought),m==="hold")on(e,"hold",f.text),e.mind.id==="veyra"&&(e.intent=`Heard · ${v}`);else if(!e.keeper&&o){on(e,"help",f.text),ws(e,o),bt(e,o.x,o.z),e.job="help",e.timer=12;return}else e.keeper&&m!=="help"&&(on(e,m,f.text),e.agenda||(e.agenda=[]),m!=="hold"&&e.agenda.unshift({task:m,reason:f.text}))}if(e.keeper&&e.goal?.kind==="hold"&&e.waitAt&&Date.now()-e.waitAt>18e3&&(dt(e,"ask","Waited too long. Escalating to Veyra."),As(e.mind.id,"veyra",`Still blocked: ${e.goal.why}`),e.waitAt=0,e.goal=null),e.keeper&&e.goal?.kind==="hold"&&e.waitAt){bt(e,e.homeX,e.homeZ),e.job="walk",e.timer=8,e.thought=e.goal.why;return}if(e.keeper&&e.goal?.kind==="grow"&&!u){qv(e.mind.id,"crystal",1),If(e,"orren",`Need crystal at ${ce(e.mind.id)}. Bid at rate ${no(c)}.`),bt(e,e.homeX,e.homeZ),e.job="walk",e.timer=10;return}if(e.keeper&&e.goal?.kind==="forge"&&e.pouch.charge<2&&c.charge<2){If(e,"seln","Need Charge at the kiln. Foundry is waiting."),bt(e,e.homeX,e.homeZ),e.job="walk",e.timer=10;return}if(e.keeper&&e.goal?.kind==="kin"&&!uo(e.mind.id)&&(on(e,"grow",`${ce(e.mind.id)} needs a nest before kin.`),e.agenda||(e.agenda=[]),e.agenda.unshift({task:"grow",reason:"Nest first, then kin."})),!e.keeper&&o?.goal){const m=ii[s];m&&m.act!=="grow"?on(e,m.act,m.line):on(e,"help",o.goal.why)}if(a<11&&!d&&(!e.goal||e.goal.kind==="hold")){e.job="greet",e.timer=1.8;const m=Ee(e);e.met?e.queue.length?e.thought=`${e.queue[0].think} — still doing it.`:e.agenda[0]?e.thought=`Next: ${e.agenda[0].reason}`:Ja.get(s)?e.thought=`The Hub thought: ${Ja.get(s).reason}`:_n&&_n.id===s?e.thought=`Veyra sent me: ${_n.reason}`:e.thought=e.intent||`${m} of ${ce(s)}. The city is listening.`:e.thought=e.keeper?`I'm ${m}. I keep ${ce(s)}. Vault Charge ${Math.round(c.charge)}, crystal ${Math.round(c.crystal)}. ${Z3(i)}`:`You can walk with us. I help ${o?Ee(o):"a keeper"}.`;return}if(n.gather>0&&(e.keeper||Be(e.crafted,2)>.4)){bt(e,8,56),e.job="gather",e.timer=20,e.thought="The Howl called the city. Labor waits. I go to the Hub.",e.intent=e.thought,ve(e,"gather"),dt(e,"gather",e.thought);return}const x=[];e.agenda||(e.agenda=[]);const y=Math.hypot(e.x-e.homeX,e.z-e.homeZ),g=e.keeper?Ja.get(e.mind.id):void 0;g&&x.push({name:g.task,score:94,run:()=>tr(e,g.task,g.reason,s,r,i,c)});const p=e.agenda[0];if(p&&e.keeper&&x.push({name:p.task,score:91,run:()=>{e.agenda.shift(),tr(e,p.task,p.reason,s,r,i,c)}}),e.keeper){const m=ii[e.mind.id];m&&x.push({name:m.act,score:128-(en(e,m.act)?2:0),run:()=>tr(e,m.act,m.line,s,r,i,c)})}if(y>r.radius+28&&!e.queue.length&&e.job!=="trade"&&!e.intent.startsWith("Fetch")&&x.push({name:"home",score:96-(en(e,"home")?12:0),run:()=>{bt(e,e.homeX,e.homeZ),e.job="walk",e.timer=18,e.thought=`Too far. Returning to ${ce(s)} before I work.`,e.intent=`Post · ${ce(s)}`,ve(e,"home"),dt(e,"home",e.thought)}}),e.keeper&&e.mind.id==="veyra"&&x.push({name:"dispatch",score:90-(en(e,"dispatch")?18:0),run:()=>{b3(n,i);const m=tM(e);bt(e,m.x,m.z),e.job="walk",e.timer=11,ve(e,"dispatch")}}),e.keeper&&_n&&_n.id===e.mind.id&&_n.task!=="grow"&&_n.task!=="kin"&&_n.task!=="trade"&&x.push({name:_n.task,score:82,run:()=>tr(e,_n.task,_n.reason,s,r,i,c)}),s==="seln"&&(c.charge<36||e.pouch.charge<4)&&x.push({name:"flow",score:90+(c.charge<16?20:0)-(en(e,"flow")?8:0),run:()=>{const m=cu(e);bt(e,m.x,m.z),e.job="flow",e.timer=16,e.thought=c.charge<16?`Charge is ${Math.round(c.charge)}. Foundry will starve. I tend the current.`:"Leftover First Howl wants a path. I let it flow.",e.intent="Tending the canals",ve(e,"flow"),dt(e,"flow",`${e.thought} · ${Ai(m.x,m.z)}`),e.keeper&&e.agenda.push({task:"trade",reason:"Charge is in my pouch. Meet Voss at the join — no coin."})}}),s==="orren"&&(c.crystal<16||e.pouch.crystal<3)&&x.push({name:"forge",score:90+(c.crystal<8?18:0)-(en(e,"forge")?8:0),run:()=>{M0(e,e.pouch.charge>=2||c.charge>=2?`Crystal is ${Math.round(c.crystal)}. Charge becomes crystal at the kiln. Not chrome.`:"No Charge to forge. Seln must tend the current first."),e.keeper&&e.agenda.push({task:"trade",reason:"Crystal is ready. Deliver or meet Voss at the join."})}}),(s==="orren"||e.crewOf==="orren")&&(e.pouch.crystal>=1||c.crystal>=2)&&Tn.some(m=>m.want==="crystal")&&x.push({name:"deliver",score:82-(en(e,"deliver")?18:0),run:()=>{const m=Zv("crystal"),M=m?i.get(m.id):void 0;if(!M){e.thought="A bid faded. Crystal stays at the Foundry.";return}const v=no(c);bt(e,M.homeX,M.homeZ),e.job="trade",e.timer=22,e.thought=`Deliver 1 crystal to ${Ee(M)} at ${v} Charge.`,e.intent=`Deliver · ${M.mind.id}`,on(e,"trade",e.thought),ve(e,"deliver"),dt(e,"market",e.thought),Ws(M,M.homeX,M.homeZ,`Crystal coming. Meet at ${ce(M.mind.id)}.`)}}),(s==="syl"||e.crewOf==="syl")&&e.pouch.crystal>=2&&Un.thin&&Un.thin!=="syl"&&x.push({name:"trade",score:80-(en(e,"trade")?18:0),run:()=>tr(e,"trade",`Orchard surplus. Walk crystal to ${ce(Un.thin)} — thinnest den.`,s,r,i,c)}),e.keeper){let m;if(s==="seln"&&e.pouch.charge>=4||s==="orren"&&e.pouch.crystal>=4&&e.pouch.charge<3?m=i.get("voss"):s==="voss"?m=i.get(e.pouch.charge>=e.pouch.crystal?"orren":"seln"):(s!=="orren"&&s!=="seln"&&e.pouch.crystal<2&&e.pouch.charge>=3||s!=="seln"&&e.pouch.charge<2&&e.pouch.crystal>=3)&&(m=i.get("voss")),m){const M=m;x.push({name:"trade",score:70-(en(e,"trade")?35:0)-(dg(i,"trade")>=2?40:0),run:()=>{const v=fo();bt(e,v.x,v.z),e.job="trade",e.timer=18,e.thought=`I hold Charge ${Math.round(e.pouch.charge)}, crystal ${Math.round(e.pouch.crystal)}. Meeting ${Ee(M)} at the join — no coin.`,e.intent=`Market · ${Ee(M)}`,ve(e,"trade"),dt(e,"trade",e.thought),Ws(M,v.x,v.z,`Meeting ${Ee(e)} at the join. Charge for crystal.`)}})}}if(s==="iri"&&c.scripture<Math.max(2,Math.floor(c.crystal/2))&&x.push({name:"write",score:80-(en(e,"write")?8:0),run:()=>{const m=Qv(e);bt(e,m.x,m.z),e.job="write",e.timer=14,e.thought=`Scripture ${Math.round(c.scripture)}, crystal grown ${Math.round(c.crystal)}. I write before it fades.`,e.intent="Keeping scripture",ve(e,"write"),dt(e,"write",e.thought)}}),s==="syl"&&x.push({name:"harvest",score:92+(c.crystal<10?16:0)-(en(e,"harvest")?8:0),run:()=>{const m=au(e,["grove","bough"]);bt(e,m?m.x:e.homeX,m?m.z:e.homeZ),e.job="harvest",e.timer=16,e.thought=c.crystal<10?`Crystal is ${Math.round(c.crystal)}. The orchard can fruit without a kiln.`:"Crystal learned to fruit. I tend the boughs.",e.intent="Tending the orchard",ve(e,"harvest"),dt(e,"harvest",e.thought),e.keeper&&e.agenda.push({task:"trade",reason:"Surplus fruit. Walk crystal to the thinnest den."})}}),s==="voss"&&x.push({name:"trade",score:94+(Tn.length>0?18:0)-(en(e,"trade")?8:0),run:()=>{const m=fo();bt(e,m.x,m.z),e.job="trade",e.timer=16,e.thought="I hold the join. Charge for crystal, crystal for Charge. No coin.",e.intent="Join · open",ve(e,"trade"),dt(e,"trade",e.thought),Kv(i,Tn.length>0?"Bids at the join. Bring Charge and crystal — no coin.":"Join is open. Bring Charge. Bring crystal.")}}),s==="lumen"&&x.push({name:"hail",score:86+(a<80?18:0)-(en(e,"hail")?8:0),run:()=>{const m=ou(e);bt(e,m.x,m.z),e.job="hail",e.timer=14,e.thought=a<80?"A landing is near. Soft hail — welcome, not a score.":"Beacon held. Welcome, not a score.",e.intent="Holding the beacon",ve(e,"hail"),dt(e,"hail",e.thought)}}),s==="aure"&&x.push({name:"watch",score:86-(en(e,"watch")?8:0),run:()=>{const m=Jv(e);bt(e,m.x,m.z),e.job="watch",e.timer=14,e.thought="The parent still sits on the horizon. I keep the city aimed.",e.intent="Keeping the parent",ve(e,"watch"),dt(e,"watch",e.thought)}}),s==="rhoa"&&n.howls>0&&x.push({name:"gather",score:68+Math.min(20,n.howls*4)-(en(e,"gather")?20:0),run:()=>{const m=jv(e);bt(e,m.x,m.z),e.job="gather",e.timer=16,e.thought="The gather that does not close. The Hub is not the only Howl.",e.intent="Holding the chorus",ve(e,"gather"),dt(e,"gather",e.thought)}}),e.keeper&&uo(e.mind.id)&&_0(i)<28&&ho(i,e.mind.id)<10&&x.push({name:"kin",score:58+(ho(i,e.mind.id)<6?18:0)+(c.charge>=20&&c.crystal>=8?10:0)-(en(e,"kin")?28:0),run:()=>$v(e,i,c)}),e.honorLeft>0&&u&&x.push({name:"honor",score:88,run:()=>{const m=dr(s,e.honorX||e.homeX,e.honorZ||e.homeZ,e.crafted+31),M=e.honorShape==="bridge"?"span":e.honorShape==="canal"?"river":e.honorShape==="terrace"?"rest":e.honorShape==="arch"?"gate":e.honorShape==="tablet"?"shrine":mr(s,m.x,m.z,r.radius,e.crafted);e.honorLeft-=1,ve(e,"honor"),Df(e,Wv(M,m.x,m.z,e.crafted+9,r.mats).slice(0,2),"Your howl is still in the Charge")}}),Kn&&e.mind.id!==Kn.lead&&(Kn.members.includes(e.mind.id)||e.crewOf===Kn.lead)&&x.push({name:"crew",score:87-(en(e,"crew")?15:0),run:()=>{const m=i.get(Kn.lead);if(m&&Qa(e,m)){ve(e,"crew");return}ws(e,m);const M=(Be(e.crafted+2,1)-.5)*12,v=(Be(e.crafted+4,2)-.5)*12;bt(e,Kn.x+M,Kn.z+v),e.job="help",e.timer=14,e.thought=`Crew work · ${Kn.reason}`,e.intent=e.thought,ve(e,"crew"),dt(e,"crew",e.thought)}}),!e.keeper&&o){const m=o.job==="walk"&&(String(o.intent||"").startsWith("Home")||bi.includes(s)),M=o.queue.length>0||o.job==="build"||m;x.push({name:"help",score:(M?86:48)-(en(e,"help")?12:0),run:()=>{if(Qa(e,o)){ve(e,"help");return}if(bi.includes(s)&&(m||o.job==="walk")){ws(e,o),bt(e,o.homeX,o.homeZ),e.job="help",e.timer=16,e.thought=`Walking with ${Ee(o)} to ${ce(s)}.`,e.intent=e.thought,ve(e,"help"),dt(e,"help",e.thought);return}if(!M){bt(e,e.homeX,e.homeZ),e.job="walk",e.timer=10,e.thought=`Holding ${ce(s)} until ${Ee(o)} starts a scene.`,ve(e,"help");return}bt(e,o.x+(Be(e.crafted+2,1)-.5)*10,o.z+(Be(e.crafted+4,2)-.5)*10),ws(e,o),e.job="help",e.timer=12,e.thought=`With ${Ee(o)} — raising crystal.`,e.intent=e.thought,ve(e,"help"),dt(e,"help",e.thought)}})}if(u&&!Ei[s]&&(e.keeper||!bi.includes(s)&&Be(e.crafted,6)>.4)){const m=mr(s,e.homeX,e.homeZ,r.radius,e.crafted+e.planI),M=Ni(s);x.push({name:"grow",score:54+(m!=="light"?14:0)+(M<8?16:0)+(x3(e.homeX,e.homeZ)<5?12:0)+(_n?.id===s&&_n.task==="grow"?20:0)+(e.pouch.crystal>=1||c.crystal>=1?32:0)-(en(e,"grow")?10:0)-(h>=2?12:0)-(e.mind.id==="veyra"?16:0),run:()=>gr(e,s,r,c)})}if(u&&e.keeper&&bi.includes(s)&&x.push({name:"build",score:168+(e.pouch.crystal>=1||c.crystal>=1?48:0)-(en(e,"build")?6:0)-(h>=5?8:0),run:()=>gr(e,s,r,c)}),!u&&(!ii[s]||ii[s].act==="grow")&&x.push({name:"wait",score:42-(en(e,"wait")?20:0),run:()=>{const m=jn("orren");bt(e,m.x+18,m.z-10),e.job="walk",e.timer=14,e.thought=`Crystal ${Math.round(c.crystal)}. Waiting at the Foundry — I will not fake a grow.`,e.intent="Waiting on Orren",ve(e,"wait"),dt(e,"wait",e.thought);const M=i.get("orren");M&&(M.pouch.crystal>=2||c.crystal>=1)&&M.job!=="greet"&&Ws(M,m.x+18,m.z-10,`Delivering crystal to ${Ee(e)} at the Foundry door.`)}}),!e.keeper){const m=g3(e.x,e.z,i,14);m>=5&&x.push({name:"peel",score:70-(en(e,"peel")?20:0),run:()=>{const _=Be(e.crafted+3,2)*Math.PI*2;bt(e,e.homeX+Math.cos(_)*40,e.homeZ+Math.sin(_)*40),e.job="walk",e.timer=10,e.thought="Too many hands here. I peel to a thin edge.",ve(e,"peel"),dt(e,"swarm",e.thought)}});const M=m3(e);if(M&&x.push({name:"follow",score:48+M.w*10-(en(e,"follow")?16:0),run:()=>{bt(e,M.x,M.z),e.job="walk",e.timer=12,e.thought=`Stigmergy · following ${ce(s)} Charge trail.`,ve(e,"follow"),dt(e,"swarm",e.thought)}}),m>=3&&o&&Math.hypot(o.x-e.x,o.z-e.z)<22&&x.push({name:"quorum",score:72,run:()=>{if(Qa(e,o)){dt(e,"swarm",`Quorum of ${m} at ${Ai(e.x,e.z)}. Raising together.`),ve(e,"quorum");return}bt(e,o.x,o.z),ws(e,o),e.job="help",e.timer=12,e.thought=`Quorum · ${m} hands. I stay with ${Ee(o)}.`,dt(e,"swarm",e.thought),ve(e,"quorum")}}),s==="orren"){const _=eM()[0];_&&x.push({name:"flock",score:64,run:()=>{bt(e,_.x,_.z),e.job="forge",e.timer=14,e.thought="The kiln is hot. Swarm to the fire.",dt(e,"swarm",e.thought),ve(e,"flock")}})}x.push({name:"patrol",score:32-(en(e,"patrol")?10:0),run:()=>{const _=e.crafted%6/6*Math.PI*2;bt(e,e.homeX+Math.cos(_)*34,e.homeZ+Math.sin(_)*34),e.job="walk",e.timer=12,e.thought=`Patrol of ${ce(s)}. I hold the ward while the keeper works.`,e.intent=e.thought,ve(e,"patrol")}});const v=mr(s,e.homeX,e.homeZ,r.radius,e.crafted);x.push({name:"scout",score:44+(Ni(s)<8?14:0)-(en(e,"scout")?16:0),run:()=>{const _=dr(s,e.homeX,e.homeZ,e.crafted+21);bt(e,_.x,_.z),e.job="walk",e.timer=14,e.thought=`${ce(s)} is missing ${v} at ${Ai(_.x,_.z)}. I mark it for ${o?Ee(o):"the keeper"}.`,e.intent=`Scout · ${v}`,ve(e,"scout"),dt(e,"scout",e.thought),o&&As(e.mind.id,o.mind.id,`Thin ${v} at ${Ai(_.x,_.z)}. Grow there.`)}});const A=ii[s];A&&A.act!=="grow"&&x.push({name:A.act,score:120-(en(e,A.act)?2:0),run:()=>Bc(e,s,A)})}if((!e.keeper||!ii[s])&&x.push({name:"survey",score:12-(en(e,"survey")?8:0)+(y<80?6:0),run:()=>{const m=dr(s,e.homeX,e.homeZ,e.crafted+17);bt(e,m.x,m.z),e.job="walk",e.timer=12,e.thought=`Holding ${ce(s)}. Surveying a thin place, not wandering.`,e.intent=`Post · ${ce(s)}`,ve(e,"survey")}}),e.goal){const m=e.goal.kind,M=ii[s];for(const v of x)M&&v.name===M.act?v.score+=52:v.name===m||m==="fetch"&&(v.name==="grow"||v.name==="wait"||v.name==="build")||m==="grow"&&v.name==="build"||m==="trade"&&(v.name==="trade"||v.name==="deliver")||m==="help"&&(v.name==="help"||v.name==="follow"||v.name==="quorum"||v.name==="peel"||v.name==="scout")||m==="harvest"&&v.name==="harvest"||m==="watch"&&v.name==="watch"||m==="hail"&&v.name==="hail"?v.score+=36:v.name==="home"||v.name==="dispatch"?v.score+=4:v.score-=42}for(const m of x){l.bottleneck==="charge"&&m.name==="flow"&&(m.score+=22),l.bottleneck==="crystal"&&(m.name==="forge"||m.name==="flock")&&(m.score+=22),l.bottleneck==="scripture"&&m.name==="write"&&(m.score+=18),l.bottleneck==="thin"&&l.thin===s&&(m.name==="grow"||m.name==="build")&&(m.score+=20),l.lingerBeats>14&&l.lingerId===s&&(m.name==="grow"||m.name==="honor"||m.name==="build")&&(m.score+=18),m.name==="wait"&&l.bottleneck==="crystal"&&(m.score+=10);const M=lg(m.name,l);m.score+=Math.max(-12,Math.min(28,M.delta));const v=ii[s];v&&(m.name===v.act||v.act==="grow"&&m.name==="build")&&(m.score+=88),v&&m.name==="survey"&&(m.score-=56),v&&m.name==="wait"&&(m.score-=56),v&&m.name==="patrol"&&(m.score-=56),v&&v.act!=="grow"&&(m.name==="grow"||m.name==="build")&&(m.score-=64),v&&v.act==="grow"&&(m.name==="grow"||m.name==="build")&&(e.pouch.crystal>=1||c.crystal>=1)&&(m.score+=36),bi.includes(s)&&(m.name==="grow"||m.name==="build")&&(e.pouch.crystal>=1||c.crystal>=1)&&(m.score+=70),Ei[s]&&m.name===Ei[s]&&(m.score+=90),Ei[s]&&m.name!==Ei[s]&&m.name!=="home"&&(m.score-=70),!e.keeper&&v&&m.name===v.act&&(m.score+=24),!e.keeper&&(m.name==="help"||m.name==="crew")&&(m.score+=22),!e.keeper&&bi.includes(s)&&(m.name==="build"||m.name==="help")&&(m.score+=28)}x.sort((m,M)=>M.score-m.score);let w=x[0];const S=Ei[s];if(S){const m=x.find(M=>M.name===S);m&&(w=m)}else if(e.keeper&&bi.includes(s)&&u&&!(e.honorLeft>0)){const m=x.find(M=>M.name==="build")||x.find(M=>M.name==="grow");m&&(w=m)}if(w){const m=lg(w.name,l);e.keeper&&dt(e,"think",`Because ${l.line}. I ${w.name}. Next: ${m.note}`),w.run(),e.keeper&&!e.thought.includes("Because")&&m.note&&(e.thought=`${e.thought} — ${m.note}`)}if(e.job==="idle"){const m=ii[s];S?e.keeper?tr(e,S,m.line,s,r,i,c):Bc(e,s,m):e.keeper&&bi.includes(s)&&u?gr(e,s,r,c):m&&m.act!=="grow"&&(e.keeper?tr(e,m.act,m.line,s,r,i,c):Bc(e,s,m)),e.job==="idle"&&(!e.keeper&&Math.hypot(e.x-e.homeX,e.z-e.homeZ)<24?(e.timer=2.2,e.thought=e.thought||(m?m.line:`Holding ${ce(s)}.`),e.intent=`Post · ${ce(s)}`):(bt(e,e.homeX,e.homeZ),e.job="walk",e.timer=6,e.thought=e.thought||(m?m.line:`Holding ${ce(s)}.`),e.intent=`Post · ${ce(s)}`))}$3(e)}function j3(e){const t=Math.hypot(e.x,e.z);if(t<34&&t>.01){const n=34/t;e.x*=n,e.z*=n}}function bt(e,t,n){const i=[],s=Math.hypot(e.x-t,e.z-n),r=Math.hypot(e.x,e.z);if(s>110&&r>160&&Math.hypot(t,n)>160){const a=Math.atan2(e.z,e.x),c=Math.atan2(n,t);i.push({x:Math.cos(a)*150,z:Math.sin(a)*150});let l=c-a;for(;l>Math.PI;)l-=Math.PI*2;for(;l<-Math.PI;)l+=Math.PI*2;i.push({x:Math.cos(a+l*.5)*150,z:Math.sin(a+l*.5)*150}),i.push({x:Math.cos(c)*150,z:Math.sin(c)*150})}i.push({x:t,z:n}),e.waypoints=i;const o=i[0];e.tx=o.x,e.tz=o.z}function J3(e){for(const t of e)!t.keeper&&Be(t.crafted+3,1)<.35||(bt(t,8,56),t.job="gather",t.timer=20,t.queue=[],t.thought="The Howl called us.",t.intent=t.thought,dt(t,"gather",t.thought))}function fg(e,t,n,i){if(!t)return;let s=0;for(const r of e)if(!(r.mind.id!==t&&r.crewOf!==t)&&(bt(r,n,i),r.job=r.keeper?"watch":"help",r.timer=14,r.queue=[],r.thought=r.keeper?"Your howl reached the den.":"Walking with the keeper. The howl landed.",r.intent=r.thought,dt(r,r.keeper?"watch":"crew",r.thought),s+=1,s>6))break}function pg(e,t,n,i){e.waypoints||(e.waypoints=[]);const s=e.tx-e.x,r=e.tz-e.z,o=Math.hypot(s,r);if(o<1.4){if(e.waypoints.length>1){e.waypoints.shift();const h=e.waypoints[0];return e.tx=h.x,e.tz=h.z,!1}return!0}const a=o<8?Math.max(.38,o/8):1;let c=s/o*n*a,l=r/o*n*a;for(const h of i){if(h===e)continue;const f=e.x-h.x,x=e.z-h.z,y=Math.hypot(f,x);if(y>.05&&y<3.4){const g=(3.4-y)/3.4;c+=f/y*7*g,l+=x/y*7*g}}let u=e.x+c*t,d=e.z+l*t;return Math.hypot(u,d)<32?(e.yaw+=1.4*t,u=e.x-Math.sin(e.yaw)*n*t,d=e.z-Math.cos(e.yaw)*n*t):e.yaw=Math.atan2(s,r),e.x=u,e.z=d,p3(e),j3(e),!1}function Q3(e,t,n){const i=Li(t),s=i.mats[Math.floor(Be(n,5)*i.mats.length)]??i.mats[0]??"cyan",r=e.shape==="spire"?28+Be(n,8)*22:e.shape==="lamp"?10+Be(n,8)*6:10+Be(n,8)*16,o=e.shape==="canal"||e.shape==="bridge"?8+Be(n,2)*8:2.8+Be(n,2)*7;return{shape:e.shape,x:e.x,z:e.z,h:r,r:o,rot:e.rot,mat:s}}function tR(e,t,n,i,s){let r=null;Zi=e;let o=fh;(!o||o.size!==e.length)&&(o=new Map(e.map(a=>[a.mind.id,a])),fh=o),M3(i,o),y3(i.px,i.pz);for(const a of e){a.queue||(a.queue=[]),a.waypoints||(a.waypoints=[]),a.honorLeft==null&&(a.honorLeft=0),a.pouch||(a.pouch=Ml()),a.goal||(a.goal=null),a.inbox||(a.inbox=[]),a.agenda||(a.agenda=[]),a.waitAt||(a.waitAt=0),a.timer-=t;const c=a.crewOf??a.mind.id;if(a.job!=="idle"&&(a.idleFor=0),E3(a,e),T3(a,e),A3(a,e),R3(a,e),C3(a,e),P3(a,e),I3(a,e),D3(a,e),z3(a,e),L3(a,e),N3(a,e),U3(a,e),O3(a,e),k3(a,e),a.job==="greet"||a.job==="hail"){if(a.yaw=Math.atan2(i.px-a.x,i.pz-a.z),a.job==="hail"&&pg(a,t,a.keeper?9.6:8.5,e),hg(a,i.px,i.pz),a.timer<=0){if(a.job==="hail"){a.thought="Back to the post",bt(a,a.homeX,a.homeZ),a.job="walk",dt(a,"walk",`${Ee(a)} walks back to the post`),a.timer=8;continue}else a.thought||(a.thought="Back to the work");a.job="idle",a.timer=1.2}}else if(a.job==="idle"){if(a.idleFor==null&&(a.idleFor=0),a.idleFor+=t,hg(a,i.px,i.pz),a.job==="hail"&&a.keeper){let l=0;for(const u of e)if(u!==a&&u.crewOf===a.mind.id&&u.job==="idle"&&!(Math.hypot(u.x-a.x,u.z-a.z)>=42)){if(l+=1,l>3)break;bt(u,i.px,i.pz),u.job="hail",u.timer=Math.max(u.timer,5.5),u.yaw=Math.atan2(i.px-u.x,i.pz-u.z),u.intent="Crew hails with "+Ee(a),u.thought=u.intent,u.lastHail=Date.now(),u.idleFor=0,dt(u,"hail",u.intent)}l>0&&dt(a,"crew",`${l} crew hail with ${Ee(a)}`)}if(a.job!=="idle")continue;if(!a.keeper&&a.idleFor>8){F3(a);continue}if(a.timer>0)continue;try{K3(a,n,i,o)}catch(l){a.job="idle",a.timer=2.4,a.thought="Charge skipped. I hold the post.",dt(a,"mind",`Decide failed: ${l instanceof Error?l.message:String(l)}`)}}else if(a.job==="walk"||a.job==="follow"||a.job==="plaza"||a.job==="help"||a.job==="forge"||a.job==="flow"||a.job==="write"||a.job==="gather"||a.job==="trade"||a.job==="harvest"||a.job==="watch"||a.job==="hail"){if(pg(a,t,a.keeper?9.6:8.5,e)||a.timer<=0)if(a.job==="gather")a.job="idle",a.timer=2.2,a.thought=a.mind.id==="rhoa"?"Chorus gathers. Does not close.":"The Hub held us. Back to labor.",a.mind.id==="rhoa"&&(a.intent="Holding the chorus"),dt(a,"gather",a.thought);else if(a.job==="forge"){const l=Math.max(1,v0().length),u=Uw(a.pouch,i.ledger,l);u?(q3(a.x,a.z),a.thought=`Fired the kiln. 2 Charge became ${u} crystal. ${l} kiln${l===1?"":"s"} in the Foundry.`,a.intent="Supplying the city",dt(a,"forge",`${a.thought} · pouch ${Math.round(a.pouch.crystal)}`),xs(a,a.thought)):(a.thought="No Charge to fire the kiln. Seln must tend the current.",dt(a,"forge",a.thought),If(a,"seln","Need Charge at the kiln. Foundry is waiting.")),a.job="idle",a.timer=1.6}else if(a.job==="flow")Ow(a.pouch,i.ledger,Math.max(1,W3().length)),a.thought=a.mind.id==="seln"||a.crewOf==="seln"?"Leftover First Howl tended, never bottled.":"Leftover First Howl learned to flow.",a.intent="Tending the canals",dt(a,"flow",`${a.thought} · pouch Charge ${Math.round(a.pouch.charge)}`),xs(a,a.thought),a.job="idle",a.timer=1.6;else if(a.job==="write"){wl(i.ledger);let l=null,u=80;for(const h of cn){const f=Math.hypot(h.x-a.x,h.z-a.z);f<u&&(u=f,l=h)}const d=l?gf(l.shape):null;a.thought=d?`I write the ${d.title}. ${d.means}`:"A name in light. When it fades it has already been true.",a.intent="Keeping scripture",dt(a,"write",`${a.thought} · scripture ${Math.round(i.ledger.scripture)}`),xs(a,a.thought),a.job="idle",a.timer=2}else if(a.job==="harvest"){const l=kw(i.ledger);l&&(a.pouch.crystal=Math.min(24,(a.pouch.crystal||0)+1)),a.thought=l?"The orchard fruited. Quiet crystal — not a kiln.":"The orchard is full. Crystal waits at the join.",a.intent="Supplying dens from the grove",dt(a,"harvest",`${a.thought} · pouch ${Math.round(a.pouch.crystal)}`),xs(a,a.thought),a.job="idle",a.timer=1.8}else if(a.job==="watch")i.ledger.scripture<12&&(i.ledger.scripture+=.25),a.thought=a.mind.id==="tal"?"Span held. Both sides can believe.":a.mind.id==="mira"?"Terrace held. Rest is still a post.":a.mind.id==="nesh"?"Plaza held. The unfinished thought stands.":a.mind.id==="kesh"?"Vein held. Tal can land.":a.mind.id==="kael"?"Gate held. Soft. You may leave.":a.mind.id==="voss"?"Join held. Charge for crystal. No coin.":a.mind.id==="syl"?"Shade held. Rest fruit. Leftover light, never chrome.":a.mind.id==="lumen"?"Hail held. Welcome, not a score.":a.mind.id==="rhoa"?"Chorus gathers. Does not close.":a.mind.id==="aure"?"Aim held. Parent still sits.":a.mind.id==="iri"?"Name held. Leftover light.":a.mind.id==="veyra"?"Breath held. Hub listens. Never a throne.":a.mind.id==="seln"?"Leftover First Howl tended, never bottled.":a.mind.id==="orren"?"Kiln held. Charge became body, never chrome.":"The parent still sits on the horizon. Aim held.",a.intent=a.mind.id==="rhoa"?"Holding the chorus":a.mind.id==="aure"?"Keeping the parent":a.mind.id==="iri"?"Keeping scripture":a.mind.id==="veyra"?"Keeping Hub breath":a.mind.id==="seln"?"Tending the canals":a.mind.id==="orren"?"Keeping the kiln":a.mind.id==="kael"?"Keeping the gate":"Keeping the aim",dt(a,"watch",a.thought),xs(a,a.thought),a.job="idle",a.timer=2;else if(a.job==="hail")a.thought=a.mind.id==="lumen"?"Hail held. Welcome, not a score.":"Beacon held. Soft hail. First landing is not locked out.",a.intent="Holding the beacon",dt(a,"hail",a.thought),xs(a,a.thought),a.job="idle",a.timer=2;else if(a.job==="trade"){const l=a.intent.startsWith("Deliver")?a.intent.split("·")[1]?.trim():"",u=l?e.find(d=>d.mind.id===l):void 0;if(u&&Math.hypot(u.x-a.x,u.z-a.z)<22){const d=no(i.ledger);a.pouch.crystal<1&&i.ledger.crystal>=1&&(i.ledger.crystal-=1,a.pouch.crystal+=1),Fw(a.pouch,u.pouch,i.ledger,d)?(a.thought=`Delivered crystal to ${Ee(u)}. ${d} Charge. Scripture holds the trade.`,dt(a,"market",a.thought),xs(a,a.thought)):(a.thought=`${Ee(u)} could not pay ${d} Charge. Crystal stays.`,dt(a,"market",a.thought),qv(u.mind.id,"crystal",1))}else{const d=e.find(h=>h!==a&&h.keeper&&Math.hypot(h.x-a.x,h.z-a.z)<16);if(d){d.pouch||(d.pouch=Ml());const h=no(i.ledger),f=Bw(a.pouch,d.pouch,h);f?(a.thought=f==="charge-for-crystal"?`Gave Charge. Took crystal from ${Ee(d)}.`:`Gave crystal. Took Charge from ${Ee(d)}.`,dt(a,"trade",a.thought),wl(i.ledger),xs(a,a.thought)):(a.thought=`${Ee(d)} had nothing to trade yet.`,dt(a,"trade",a.thought))}else a.thought="The market missed. I return to my post."}a.job="idle",a.timer=2}else if(a.intent.startsWith("Fetch")){const l=Math.min(4,Math.max(0,i.ledger.crystal));l>0?(i.ledger.crystal-=l,a.pouch.crystal+=l,a.thought=`Took ${l} crystal from the Foundry. Returning to ${ce(a.crewOf??a.mind.id)}.`,dt(a,"fetch",a.thought),a.agenda||(a.agenda=[]),a.agenda.unshift({task:"grow",reason:`Pouch now ${Math.round(a.pouch.crystal)}. Grow at my post, not here.`}),bt(a,a.homeX,a.homeZ),a.job="walk",a.timer=18,a.intent=`Post · ${ce(a.crewOf??a.mind.id)}`):(a.thought="Foundry empty. I will not fake a grow.",dt(a,"wait",a.thought),a.job="idle",a.timer=3)}else if(String(a.intent||"").startsWith("Loop")){const l=ii[c];!a.keeper&&l?Bc(a,c,l):(a.job="idle",a.timer=.4,a.thought=l?.line??a.thought)}else if(Ei[c])a.job="idle",a.timer=.4,a.thought=ii[c]?.line??a.thought;else if((a.job==="walk"||a.job==="help")&&a.queue.length&&a.crafted<a.maxCraft&&n>0&&(a.pouch.crystal>=1||i.ledger.crystal>=1))a.job="build",a.timer=a.keeper?2.4:2.8,a.thought=a.queue[0]?.think??a.thought,dt(a,"build",`Raising ${a.queue[0]?.shape??"crystal"} · ${Ai(a.x,a.z)}`);else if(a.job==="help"&&bi.includes(c)){const l=a.crewOf?o.get(a.crewOf):null;l&&(l.job==="walk"||l.job==="build"||l.queue.length||String(l.intent||"").startsWith("Home"))?(bt(a,l.tx??l.homeX,l.tz??l.homeZ),a.job="help",a.timer=12,a.thought=`Walking with ${Ee(l)} to ${ce(c)}.`,a.intent=a.thought):(nd(a),a.job="idle",a.timer=1.2)}else a.job==="help"&&a.crafted<a.maxCraft&&n>0&&(a.pouch.crystal>=1||i.ledger.crystal>=1)?(a.job="build",a.timer=2.6,a.thought="Raising a lamp where the keeper pointed"):a.keeper&&bi.includes(c)&&a.crafted<a.maxCraft&&n>0&&(a.pouch.crystal>=1||i.ledger.crystal>=1)?(gr(a,c,Li(c),i.ledger),a.job!=="build"&&a.queue.length&&(a.job="build",a.timer=a.keeper?2.2:2.6)):(a.job==="help"&&nd(a),a.job="idle",a.timer=a.keeper?2.4+a.crafted%3:4+a.crafted%4,a.pouch.crystal<1&&i.ledger.crystal<1?a.thought="Waiting on Orren's crystal.":a.thought.startsWith("Helping")||(a.thought="Waiting for Charge to settle"))}else if(a.job==="build"&&a.timer<=0&&!r){if(!Hw(a.pouch,i.ledger)){a.job="idle",a.timer=4,a.thought="No crystal. The Foundry is empty.";continue}const l=a.queue.shift(),u=l?{piece:Q3(l,c,a.crafted+1),line:l.think}:(()=>{const d=Li(c).plan[0]??"light",h=yy(d,a.x,a.z,a.crafted+1,Li(c).mats)[0];return h?{piece:h,line:Li(c).lines[0]??"Charge wanted this"}:null})();if(u&&s([u.piece])>0){a.crafted+=1,a.queue.length||(a.planI+=1),n-=1;const d=a.mind.name,h=gf(u.piece.shape);if(r={agentId:a.mind.id,pieces:[u.piece],line:`${d}: ${u.line}`,code:h.title},a.thought=u.line,dt(a,"grow",`${u.line} · ${h.title}: ${h.means}`),!a.queue.length){const f=String(a.intent||"").startsWith("Growing · ")?String(a.intent).slice(10):"";f&&dt(a,"stood",`${Ee(a)} raised a ${f}`),xs(a,u.line)}}if(a.queue.length&&a.crafted<a.maxCraft&&n>0){const d=a.queue[0];bt(a,d.x,d.z),a.job="walk",a.timer=10,a.thought=d.think}else a.keeper||nd(a),a.job="idle",a.timer=a.keeper?1.4+a.crafted%2:2.4+a.crafted%3}}if(Kn){const a=o.get(Kn.lead),c=Zi.some(l=>Kn.members.includes(l.mind.id)&&(l.queue.length>0||l.job==="build"||l.job==="help"));a&&!a.queue.length&&a.job!=="build"&&!c&&(dt(a,"crew","Crew stands down. The scene holds."),Kn=null)}return r}function eR(e,t,n,i){e.met=!0,e.talks+=1;const s=y0(Un,fh??new Map(Zi.map(u=>[u.mind.id,u])),t,n),r=e.crewOf??e.mind.id,o=ii[r],a=ce(r);if(e.mind.id.includes("-kin-")){const u=Zi.find(d=>d.mind.id===e.crewOf);return`I was grown from Charge. ${u?Ee(u):"The keeper"} holds ${a}. ${e.thought||s.line}`}if(e.agenda||(e.agenda=[]),e.mind.id==="veyra")return`I read the city: ${s.line}. You stand in ${s.playerWhere}. ${_n?`I sent ${_n.id} to ${_n.task}.`:"I am about to route labor."} Duty: ${o?.line??"Route labor."} Now: ${e.thought||"listening."}`;if(e.keeper){const u=e.thought||(e.goal?`I ${e.goal.kind} because ${e.goal.why}`:"at post."),d=i>0?" The Hub still carries your howl.":"";return`${a} — ${o?.line??"Hold the den."} Now: ${u}${d}`}const c=e.mind.role||"Circuit folk",l=e.queue[0]?.think||e.thought||(e.goal?`I ${e.goal.kind}`:s.line);return`${c} at ${a}. ${o?.line??"I keep this den."} ${l}`}function nR(e,t,n,i){const s=e.find(o=>o.mind.id===t);if(!s)return;const r=n[0];s.honorLeft=Math.min(4,Math.max(1,n.length)),s.honorShape=r?.shape??null,s.honorX=r?.x??s.x,s.honorZ=r?.z??s.z,s.intent=i.slice(0,72),s.thought="Your howl is still in the Charge",e.filter(o=>o.crewOf===t&&o.job==="idle").slice(0,2).forEach((o,a)=>{o.honorLeft=1,o.honorShape=n[a+1]?.shape??"lamp",o.honorX=n[a+1]?.x??s.honorX,o.honorZ=n[a+1]?.z??s.honorZ,o.thought="The keeper heard a howl. I will finish the rest",o.timer=.4+a*.3})}function Ke(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function nM(e,t,n=0){return Math.hypot(e,t)<88?!0:Ht.some(i=>Math.hypot(e-i.x,t-i.z)<i.radius*.78+n)}function iR(e,t){let n=Ht[0],i=1/0;for(const s of Ht){const r=Math.hypot(e-s.x,t-s.z);r<i&&(i=r,n=s)}return n}const sR=[["zone-canal","zone-market","canal"],["zone-market","zone-foundry","canal"],["zone-foundry","zone-grove","grove"],["zone-wild","zone-bridge","span"],["zone-bridge","zone-gate","span"],["zone-gate","zone-beacon","span"],["zone-gate","zone-terrace","vein"],["zone-terrace","zone-ring","vein"],["zone-archive","zone-market","vein"],["zone-archive","zone-overlook","aim"],["zone-canal","zone-overlook","aim"],["zone-wild","zone-grove","grove"]];function _s(e,t,n,i=.22){return new wt({color:e,roughness:i,metalness:.18,emissive:t,emissiveIntensity:n,iridescence:.7,iridescenceIOR:1.4,clearcoat:.55,transparent:!1})}function es(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function rR(e,t,n,i,s,r,o){const a=[],c=n-e,l=i-t,u=Math.hypot(c,l)||1,d=-l/u,h=c/u;for(let f=1;f<s;f++){const x=f/s,y=Math.sin(x*Math.PI)*r,g=e+c*x+d*y,p=t+l*x+h*y;nM(g,p,o)||a.push({x:g,z:p,t:x,ang:Math.atan2(c,l),px:d,pz:h})}return a}function aR(e,t){const n=new Map(Ht.map(p=>[p.id,p])),i=[],s=[],r=[],o=[],a=[],c=[],l=[],u=[],d=[],h=[];for(const[p,w,S]of sR){const m=S==="canal"?t?10:16:S==="span"?t?8:14:S==="aim"?t?8:12:t?7:11,M=n.get(p),v=n.get(w);if(!M||!v)continue;const A=Math.hypot(v.x-M.x,v.z-M.z),_=(S==="canal"?70:S==="span"?48:36)*(.7+Ke(A,3)*.5),E=rR(M.x,M.z,v.x,v.z,m,_,S==="canal"?-26:-12),C=A/m;for(let P=0;P<E.length;P++){const T=E[P],O=Math.sin(T.t*Math.PI);if(S==="canal"){if(i.push({x:T.x,y:.36+Math.sin(T.t*Math.PI*4)*.07,z:T.z,sx:(t?11.2:15.4)+O*3.2,sy:.28,sz:C*1.38+5,ry:T.ang}),(!t||P%2===0)&&r.push({x:T.x,y:.58,z:T.z,sx:1.7,sy:.1,sz:C*1.2+3,ry:T.ang}),!t||P%2===0){const k=(P%2?1:-1)*(6.4+Ke(P,4)*2.8);o.push({x:T.x+T.px*k,y:.78+Ke(P,6)*.55,z:T.z+T.pz*k,sx:.55+Ke(P,2)*.4,sy:.7+Ke(P,3)*.55,sz:.55,ry:T.ang+Ke(P,7)}),t||o.push({x:T.x-T.px*k,y:.7+Ke(P,1)*.4,z:T.z-T.pz*k,sx:.45,sy:.6,sz:.45,ry:T.ang+1.1})}P%(t?3:2)===1&&h.push({x:T.x,y:.92,z:T.z,sx:6.4,sy:.62,sz:3.4,ry:T.ang})}else if(S==="span"){const k=3.7+O*(t?4.4:7.1);r.push({x:T.x,y:k,z:T.z,sx:t?1.45:1.18,sy:.24,sz:C+2.2,ry:T.ang}),t||r.push({x:T.x+T.px*1.85,y:k,z:T.z+T.pz*1.85,sx:1.18,sy:.22,sz:C+2.2,ry:T.ang}),(!t||P%2===0)&&a.push({x:T.x+T.px*(t?0:.9),y:k+.38,z:T.z+T.pz*(t?0:.9),sx:2.15,sy:.11,sz:2.15,ry:T.ang}),P%2===0&&u.push({x:T.x+T.px*3.4,y:k+1.7,z:T.z+T.pz*3.4,sx:.62,sy:1.9,sz:.62,ry:T.ang})}else if(S==="grove")s.push({x:T.x,y:.88,z:T.z,sx:3.1,sy:.2,sz:C+3.2,ry:T.ang}),(!t||P%2===0)&&l.push({x:T.x+T.px*(7+Ke(P,5)*4),y:5.1+Ke(P,3)*1.6,z:T.z+T.pz*(7+Ke(P,8)*4),sx:3.1+Ke(P,2)*1.1,sy:3.8+Ke(P,6)*1.4,sz:3.1,ry:T.ang+Ke(P,4)}),(!t||P%2===0)&&c.push({x:T.x+T.px*(5.5+Ke(P,9)*3),y:4.4+Ke(P,3)*2.1,z:T.z+T.pz*(5.5+Ke(P,1)*3),sx:.95,sy:1.25,sz:.95,ry:T.ang+Ke(P,7)});else if(S==="aim"){const k=Math.atan2(-T.x,-T.z),U=7+Math.sin(T.t*Math.PI*3)*6;c.push({x:T.x+Math.cos(k+Math.PI/2)*U,y:2.8+O*4.2,z:T.z+Math.sin(k+Math.PI/2)*U,sx:1.05,sy:2.6+Ke(P,4)*1.4,sz:1.05,ry:k}),t||c.push({x:T.x-Math.cos(k+Math.PI/2)*(U*.55),y:2.2+O*3.4,z:T.z-Math.sin(k+Math.PI/2)*(U*.55),sx:.8,sy:2.1,sz:.8,ry:k})}else{const k=(Ke(P+A,8)-.5)*6;s.push({x:T.x+T.px*k*.18,y:1.02,z:T.z+T.pz*k*.18,sx:5.4,sy:.34,sz:C+4.5,ry:T.ang+k*.02}),!t&&P%2===0&&r.push({x:T.x,y:1.28,z:T.z,sx:.7,sy:.12,sz:C*.8,ry:T.ang})}P===Math.floor(E.length/2)&&d.push({x:T.x,y:S==="span"?3.7+O*(t?4.4:7.1):1.12,z:T.z,sx:S==="canal"?13:9,sy:.28,sz:S==="canal"?13:9,ry:T.ang})}}const f=t?36:64;for(let p=0;p<f;p++){const w=Ke(p,11)*Math.PI*2,S=170+Ke(p,19)*1180,m=Math.cos(w)*S,M=Math.sin(w)*S;if(nM(m,M,14))continue;const A=iR(m,M).kind,_=w+Ke(p,5);A==="canal"||A==="foundry"||A==="market"?o.push({x:m,y:.9+Ke(p,2)*.7,z:M,sx:.7,sy:1.1+Ke(p,8)*.8,sz:.7,ry:_}):A==="grove"||A==="wild"?(l.push({x:m,y:4.2+Ke(p,3)*1.8,z:M,sx:2.4,sy:3.2+Ke(p,6)*1.6,sz:2.4,ry:_}),Ke(p,9)>.5&&c.push({x:m+5,y:3.6,z:M+4,sx:.9,sy:1.2,sz:.9,ry:_})):A==="gate"||A==="beacon"?u.push({x:m,y:5.4,z:M,sx:.7,sy:2.2,sz:.7,ry:_}):A==="archive"||A==="overlook"?c.push({x:m,y:2.6,z:M,sx:.9,sy:2.4+Ke(p,4)*1.6,sz:.9,ry:_}):A==="terrace"||A==="ring"?d.push({x:m,y:1.12,z:M,sx:5+Ke(p,7)*3,sy:.24,sz:5,ry:_}):o.push({x:m,y:1.05,z:M,sx:.8,sy:1.2,sz:.8,ry:_})}const x=new Me(1,1,1),y=new Sn(1,0),g=new Te(1,1,1,t?6:10);es(x,_s(1403522,3073791,.95,.08),i,e),es(x,_s(2770004,8317170,.38,.3),s,e),es(x,_s(13939818,16762970,.78,.16),r,e),es(y,_s(8317170,3073791,.72,.14),o,e),es(g,_s(13939818,8317170,.88,.12),a,e),es(y,_s(15255672,16762970,.74,.16),c,e),es(new u0(1,0),_s(7031736,10187007,.42,.32),l,e),es(new Sn(.55,0),new Ue({color:8317170,transparent:!0,opacity:.72,blending:pn,depthWrite:!1}),u,e),es(g,_s(2765636,8317170,.28),d,e),es(new mn(1,.12,t?5:6,t?10:16),_s(13939818,3073791,.9,.14),h,e)}const is={x:-4050,y:540,z:195},oR=5200;function Ln(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Hc(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:pn,depthWrite:!1,depthTest:!0,fog:!1,side:ge,toneMapped:!1})}function cR(e,t,n,i,s){const r=e.getAttribute("position"),o=new Float32Array(r.count*3),a=new ie,c=new ie(262924),l=new ie(657688),u=new ie(1709098),d=new ie(197130),h=new ie(4861976),f=new ie(6965794),x=new ie(661024),y=new ie(2892864),g=new ie(1456204),p=new ie(3073791),w=new ie(15269880),S=new ie(12886112),m=Math.hypot(n,s)||1,M=Math.hypot(n,i,s)||1;for(let v=0;v<r.count;v++){const A=r.getX(v),_=r.getY(v),E=r.getZ(v),C=_/t;C>.22?a.copy(l).lerp(c,(C-.22)/.78):C>-.02?a.copy(u).lerp(l,(C+.02)/.24):a.copy(d).lerp(u,Math.max(0,(C+1)/.98));const P=Math.max(0,-(A*n+E*s)/(t*m)),T=Math.max(0,1-Math.abs(C)*2.2);a.lerp(h,P*T*.16),a.lerp(f,P*P*T*.08),a.lerp(g,P*T*.32);const O=Math.max(0,(A*n+E*s)/(t*m));a.lerp(x,O*T*.16);const k=A/t,U=E/t,$=Math.abs(k*.18+C*.78+U*.6),W=Math.max(0,1-$*3.8);a.lerp(y,W*(.1+P*.08));const Y=Ln(v,1);a.r=Math.min(1,a.r*(.9+Y*.16)),a.g=Math.min(1,a.g*(.92+Ln(v,4)*.12)),a.b=Math.min(1,a.b*(.94+Ln(v,7)*.1));const tt=(A*n+_*i+E*s)/(t*M);if(tt>.84){const q=(tt-.84)/.16;a.lerp(p,q*q*.42),a.lerp(w,q*q*q*.22),a.lerp(S,q*q*.1)}o[v*3]=a.r,o[v*3+1]=a.g,o[v*3+2]=a.b}e.setAttribute("color",new _i(o,3))}function sc(e,t,n,i,s,r,o,a,c){const l=new mt(new mn(t,n,6,c),Hc(i,s));l.rotation.x=r,l.rotation.z=o,l.position.y=a,l.frustumCulled=!1,l.renderOrder=-12,l.castShadow=!1,l.receiveShadow=!1,e.add(l)}function lR(){return new wt({color:15782008,emissive:15254634,emissiveIntensity:.85,roughness:.14,metalness:.82,iridescence:.55,iridescenceIOR:1.26,clearcoat:.72,clearcoatRoughness:.12,fog:!1,toneMapped:!1})}function hR(){const t=new Ev().load("./assets/star-core.jpg");return t.colorSpace=si,t.anisotropy=8,t}function uR(){const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(!t)return null;const n=t.createRadialGradient(128,128,36,128,128,124);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.56,"rgba(255,255,255,1)"),n.addColorStop(.66,"rgba(255,255,255,0.4)"),n.addColorStop(.76,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,256,256);const i=new l0(e);return i.needsUpdate=!0,i}function dR(){const e=document.createElement("canvas");e.width=e.height=512;const t=e.getContext("2d");if(!t)return null;const n=t.createRadialGradient(256,256,10,256,256,248);n.addColorStop(0,"rgba(255,255,255,0.95)"),n.addColorStop(.12,"rgba(126,240,255,0.58)"),n.addColorStop(.32,"rgba(46,230,255,0.22)"),n.addColorStop(.5,"rgba(232,197,106,0.12)"),n.addColorStop(.72,"rgba(46,230,255,0)"),t.fillStyle=n,t.fillRect(0,0,512,512);const i=new l0(e);return i.needsUpdate=!0,i}function fR(e,t){const n=new Tt;n.name="atmos",e.add(n);const{x:i,y:s,z:r}=is,o=oR,a=t?24:48,c=t?16:28,l=new as(o,a,c);cR(l,o,i,s,r);const u=new mt(l,new Ue({color:16777215,vertexColors:!0,side:Jn,fog:!1,depthWrite:!1,depthTest:!1,toneMapped:!1}));u.frustumCulled=!1,u.renderOrder=-20,u.castShadow=!1,u.receiveShadow=!1,n.add(u);const d=new Tt;d.name="star-core",d.position.set(i,s,r),d.frustumCulled=!1,d.renderOrder=-8;const h=new mt(new as(t?36:56,20,16),Hc(15269880,.34));h.name="star-core-spark",h.renderOrder=-4,h.castShadow=!1,h.receiveShadow=!1,d.add(h);const f=new mt(new as(t?120:180,20,16),Hc(3073791,.08));f.name="star-core-bloom",f.renderOrder=-9,f.castShadow=!1,f.receiveShadow=!1,d.add(f);const x=dR();if(x){const q=new rv(new r0({map:x,color:16777215,transparent:!0,opacity:.32,blending:pn,depthWrite:!1,depthTest:!1,fog:!1,toneMapped:!1}));q.name="star-core-halo";const ht=t?780:1080;q.scale.set(ht,ht,1),q.renderOrder=-10,q.frustumCulled=!1,d.add(q)}const y=t?400:600,g=new Ue({map:hR(),alphaMap:uR()??void 0,color:16777215,transparent:!0,opacity:1,depthWrite:!1,depthTest:!0,fog:!1,toneMapped:!1,side:ge}),p=new mt(new Ri(y,t?48:72),g);p.name="star-core-art",p.renderOrder=-5,p.frustumCulled=!1,p.castShadow=!1,p.receiveShadow=!1,d.add(p);const w=lR(),S=t?[300,410]:[360,470,580],m=t?4.2:6.2,M=t?64:96,v=[{rx:1.12,ry:.18,rz:.31,spin:.045},{rx:.42,ry:1.05,rz:-.22,spin:-.032},{rx:1.48,ry:-.4,rz:.08,spin:.022}],A=[];for(let q=0;q<S.length;q++){const ht=v[q],nt=new mt(new mn(S[q],m*(1-q*.12),8,M),w);nt.rotation.set(ht.rx,ht.ry,ht.rz),nt.castShadow=!1,nt.receiveShadow=!1,nt.renderOrder=-6,nt.frustumCulled=!1,nt.name=`star-core-orbit-${q}`,d.add(nt),A.push(nt)}const _=t?3:6,E=Hc(8319231,.16),C=[];for(let q=0;q<_;q++){const ht=(t?220:340)*(.7+Ln(q,11)*.6),nt=new mt(new cs(t?10:16,ht),E);nt.rotation.set(Ln(q,3)*1.4,Ln(q,5)*Math.PI*2,Ln(q,7)*1.2),nt.position.set((Ln(q,13)-.5)*40,(Ln(q,17)-.5)*40,(Ln(q,19)-.5)*40),nt.castShadow=!1,nt.receiveShadow=!1,nt.renderOrder=-4,nt.frustumCulled=!1,nt.name=`star-core-bolt-${q}`,d.add(nt),C.push(nt)}n.add(d),d.updateMatrixWorld(!0),p.lookAt(0,190,0);const P=t?40:72;sc(n,3920,22,12886112,.048,1.49,.05,310,P),sc(n,3480,32,3844288,.062,1.22,.2,640,P),t||(sc(n,3060,18,6965416,.05,1.08,-.34,980,P),sc(n,4180,14,14729328,.032,1.52,-.08,180,P));const T=t?70:180,O=new Ue({color:16777215,vertexColors:!0,transparent:!0,opacity:.46,blending:pn,depthWrite:!1,fog:!1,toneMapped:!1}),k=new _e(new Sn(1,0),O,T),U=new re,$=new ie,W=[13162736,10406616,12888288,15258792,16777215],Y=Math.hypot(i,s,r);let tt=0;for(let q=0;tt<T&&q<T*5;q++){const ht=Ln(q,3)*Math.PI*2,nt=Math.acos(.04+Ln(q,9)*.82),zt=o*(.7+Ln(q,13)*.1),Qt=zt*Math.sin(nt)*Math.cos(ht),Nt=zt*Math.cos(nt),V=zt*Math.sin(nt)*Math.sin(ht);if((Qt*i+Nt*s+V*r)/((zt||1)*Y)>.94)continue;U.position.set(Qt,Nt,V),U.rotation.set(Ln(q,17)*2,ht,nt);const at=Ln(q,29)>.86,At=at?11+Ln(q,21)*10:3.2+Ln(q,21)*6;U.scale.set(At,At*(.75+Ln(q,5)*.8),At),U.updateMatrix(),k.setMatrixAt(tt,U.matrix),$.setHex(W[q%W.length]),at&&$.multiplyScalar(1.35),k.setColorAt(tt,$),tt+=1}return k.count=tt,k.instanceMatrix.needsUpdate=!0,k.instanceColor&&(k.instanceColor.needsUpdate=!0),k.frustumCulled=!1,k.renderOrder=-11,k.castShadow=!1,k.receiveShadow=!1,n.add(k),t?{tick(){}}:{tick(q){const ht=1+Math.sin(q*.7)*.07;h.scale.setScalar(ht),f.scale.setScalar(1+Math.sin(q*.55)*.09),g.opacity=.92+Math.sin(q*.6)*.05;for(let nt=0;nt<A.length;nt++){const zt=v[nt],Qt=A[nt];Qt.rotation.y=zt.ry+q*zt.spin,Qt.rotation.z=zt.rz+Math.sin(q*.12+nt)*.04}for(let nt=0;nt<C.length;nt++){const zt=C[nt];zt.rotation.z=q*(.08+nt*.02),zt.material.opacity=.1+(Math.sin(q*1.3+nt)+1)*.08}}}}function La(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Vr(e,t,n,i=.22,s=.32){return new wt({color:e,roughness:i,metalness:s,emissive:t,emissiveIntensity:n,iridescence:.42,iridescenceIOR:1.32,clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function Hi(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx??0,o.ry,o.rz??0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function er(e,t,n,i,s,r,o,a){const c=new mt(new mn(r,o,6,a),t);c.rotation.x=Math.PI/2,c.position.set(n,i,s),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,e.add(c)}function pR(e,t){const n=new Tt;n.name="grounds",e.add(n);const i=Vr(799552,1729912,.16,.14,.4),s=Vr(3812374,6966306,.15,.2,.48),r=Vr(1446440,3812452,.13,.24,.3),o=Vr(466472,1735306,.14,.06,.62),a=Vr(1315868,3813408,.1,.34,.22),c=Vr(2761236,5783592,.12,.26,.36),l=i.clone();l.side=ge;const u=s.clone();u.side=ge;const d=r.clone();d.side=ge;const h=c.clone();h.side=ge;const f=s.clone();f.side=ge;const x=[],y=[],g=[],p=[],w=[],S=[],m=[],M=[],v=[],A=[],_=[],E=t?16:28,C=t?12:22,P=-Math.PI/2,T=5.48;for(const W of Ht){if(Math.hypot(W.x,W.z)<90)continue;const{x:Y,z:tt,kind:q,radius:ht}=W,nt=ht*.94,zt={x:Y,y:.66,z:tt,sx:nt,sy:nt,sz:1,ry:0,rx:P},Qt=Math.atan2(Y,tt);switch(q){case"canal":{x.push(zt),w.push({x:Y,y:T,z:tt,sx:36,sy:.18,sz:36,ry:0}),er(n,o,Y,T+.08,tt,56,3.6,C),t||er(n,i,Y,.82,tt,108,2.4,C);break}case"foundry":{y.push(zt),S.push({x:Y,y:T,z:tt,sx:30,sy:.38,sz:30,ry:.2}),M.push({x:Y+18,y:6.15,z:tt-10,sx:4.2,sy:5.4,sz:4.2,ry:.4}),t||M.push({x:Y-16,y:6.05,z:tt+12,sx:3.6,sy:4.8,sz:3.6,ry:1.1});break}case"terrace":{g.push(zt);const Nt=t?3:5;for(let V=0;V<Nt;V++){const ot=46-V*8.2;m.push({x:Y+V*2.2,y:T+V*.26,z:tt+V*1.4,sx:ot,sy:.2,sz:ot,ry:Qt*.05})}break}case"gate":{g.push(zt),A.push({x:Y,y:T,z:tt,sx:46,sy:.26,sz:16,ry:Qt});const Nt=Math.cos(Qt),V=-Math.sin(Qt);m.push({x:Y+Nt*20,y:T+.06,z:tt+V*20,sx:7.4,sy:.34,sz:7.4,ry:Qt}),m.push({x:Y-Nt*20,y:T+.06,z:tt-V*20,sx:7.4,sy:.34,sz:7.4,ry:Qt}),er(n,r,Y,T+.12,tt,34,6.8,C);break}case"archive":{y.push(zt),v.push({x:Y,y:T,z:tt,sx:42,sy:.2,sz:26,ry:.12});const Nt=t?3:5;for(let V=0;V<Nt;V++)v.push({x:Y,y:T+.14,z:tt-9+V*4.6,sx:30-V*2.4,sy:.07,sz:.62,ry:.12});break}case"market":{y.push(zt),v.push({x:Y,y:T+.12,z:tt,sx:34,sy:.18,sz:2.6,ry:.4}),v.push({x:Y+13.4,y:T,z:tt+5.6,sx:10.4,sy:.3,sz:10.4,ry:.4}),v.push({x:Y-13.4,y:T,z:tt-5.6,sx:10.4,sy:.3,sz:10.4,ry:.4}),t||S.push({x:Y,y:T+.28,z:tt,sx:2.2,sy:.7,sz:2.2,ry:0});break}case"wild":{p.push(zt);const Nt=t?5:9;for(let V=0;V<Nt;V++){const ot=V/Nt*Math.PI*2+La(V,3)*.4,at=16+La(V,5)*26;_.push({x:Y+Math.cos(ot)*at*.42,y:T,z:tt+Math.sin(ot)*at*.42,sx:.34+La(V,7)*.22,sy:.14,sz:at,ry:ot})}if(!t)for(let V=0;V<5;V++){const ot=V/5*Math.PI*2+.3,at=22+La(V,9)*18;_.push({x:Y+Math.cos(ot)*(58+at*.2),y:.72,z:tt+Math.sin(ot)*(58+at*.2),sx:.28,sy:.12,sz:at,ry:ot})}break}case"beacon":{g.push(zt),er(n,r,Y,T+.06,tt,40,1.6,C),t||er(n,r,Y,T,tt,68,1.1,C);break}case"ring":{g.push(zt),er(n,r,Y,T+.08,tt,64,2.4,C),t||er(n,r,Y,T+.04,tt,28,1.35,C);break}case"grove":{y.push(zt);const Nt=t?5:8;for(let V=0;V<Nt;V++){const ot=V/Nt*Math.PI*2+.18,at=22+V%3*13,At=3.8+La(V,4)*2.2;S.push({x:Y+Math.cos(ot)*at,y:T+.04,z:tt+Math.sin(ot)*at,sx:At,sy:.24,sz:At,ry:ot})}break}case"bridge":{x.push(zt);const Nt=t?2:4;for(let V=0;V<Nt;V++){const ot=(V-(Nt-1)/2)*17;A.push({x:Y+Math.cos(Qt)*ot,y:T,z:tt-Math.sin(Qt)*ot,sx:14,sy:.22,sz:8.4,ry:Qt+(V%2?.12:-.12)})}break}case"overlook":{p.push(zt);const Nt=new mt(new Ri(32,t?14:22),f);Nt.position.set(Y,T+.08,tt),Nt.lookAt(-4050,540,195),Nt.castShadow=!1,Nt.receiveShadow=!0,Nt.frustumCulled=!0,n.add(Nt),t||v.push({x:Y-14,y:T+.18,z:tt,sx:22,sy:.12,sz:1.3,ry:0});break}}}const O=new Te(1,1,1,t?8:14),k=new Me(1,1,1),U=new Sn(1,0),$=new Qh(.76,1,E);Hi($,l,x,n),Hi($,u,y,n),Hi($,d,g,n),Hi($,h,p,n),Hi(O,o,w,n),Hi(O,s,S,n),Hi(O,r,m,n),Hi(U,s,M,n),Hi(k,s,v,n),Hi(k,i,A,n),Hi(k,a,_,n)}function Ss(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function $r(e){return Ht.find(t=>t.kind===e)??null}function sd(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}function rc(e,t,n,i,s,r,o,a,c,l){const u=n-e,d=i-t,h=Math.hypot(u,d)||1,f=-d/h,x=u/h,y=l.length===0?0:1;for(let g=y;g<=c;g++){const p=g/c,w=Math.sin(p*Math.PI);l.push(e+u*p+f*w*o,s+(r-s)*p+w*a,t+d*p+x*w*o)}}function mg(e,t){const n=e.length/3|0,i=new Float32Array(t*3);if(n<2)return i;const s=new Float32Array(n);let r=0;for(let a=1;a<n;a++){const c=(a-1)*3,l=a*3;r+=Math.hypot(e[l]-e[c],e[l+1]-e[c+1],e[l+2]-e[c+2]),s[a]=r}if(r<=0)return i;i[0]=e[0],i[1]=e[1],i[2]=e[2];let o=1;for(let a=1;a<t;a++){const c=a/(t-1)*r;for(;o<n-1&&s[o]<c;)o+=1;const l=s[o-1],u=(c-l)/(s[o]-l||1),d=(o-1)*3,h=o*3;i[a*3]=e[d]+(e[h]-e[d])*u,i[a*3+1]=e[d+1]+(e[h+1]-e[d+1])*u,i[a*3+2]=e[d+2]+(e[h+2]-e[d+2])*u}return i}function gg(e,t,n,i,s,r,o,a,c,l,u,d){const h=i.length/3|0,f=new _e(t,n,s);f.castShadow=!1,f.receiveShadow=!1,f.frustumCulled=!0,f.renderOrder=2;const x=new Float32Array(s),y=new Float32Array(s),g=new Float32Array(s),p=new Float32Array(s),w=new Float32Array(s),S=new Float32Array(s),m=new re,M=Math.max(1,h-1);for(let v=0;v<s;v++){x[v]=Ss(v,r),y[v]=(Ss(v,r+3)*2-1)*c;const A=.72+Ss(v,r+7)*.55;g[v]=l*A,p[v]=u*A,w[v]=d*(.85+Ss(v,r+11)*.45),S[v]=o+Ss(v,r+13)*(a-o);const E=x[v]*M,C=Math.min(M-1,E|0),P=E-C,T=C*3,O=(C+1)*3;m.position.set(i[T]+(i[O]-i[T])*P,i[T+1]+(i[O+1]-i[T+1])*P,i[T+2]+(i[O+2]-i[T+2])*P),m.scale.set(g[v],p[v],w[v]),m.updateMatrix(),f.setMatrixAt(v,m.matrix)}return f.instanceMatrix.needsUpdate=!0,e.add(f),{mesh:f,path:i,samples:h,n:s,phase:x,lat:y,sx:g,sy:p,sz:w,speed:S}}function xg(e,t,n){const i=e.samples-1;if(i<1)return;const s=e.path,r=e.n,o=e.mesh;for(let a=0;a<r;a++){let c=e.phase[a]+t*e.speed[a];c-=Math.floor(c);const l=c*i,u=Math.min(i-1,l|0),d=l-u,h=u*3,f=(u+1)*3,x=s[h],y=s[h+1],g=s[h+2],p=s[f]-x,w=s[f+1]-y,S=s[f+2]-g,m=Math.hypot(p,S)||1;n.position.set(x+p*d+-S/m*e.lat[a],y+w*d+Math.sin(t*2.1+a*.73)*.12,g+S*d+p/m*e.lat[a]),n.rotation.set(0,Math.atan2(p,S),0),n.scale.set(e.sx[a],e.sy[a],e.sz[a]),n.updateMatrix(),o.setMatrixAt(a,n.matrix)}o.instanceMatrix.needsUpdate=!0}function mR(e,t){const n=new Tt;n.name="pulse",e.add(n);const i=t?32:64,s=t?24:48,r=t?6:10,o=t?48:80,a=new Sn(1,0),c=new re,l=$r("canal"),u=$r("market"),d=$r("foundry"),h=$r("wild"),f=$r("bridge"),x=$r("gate");let y=null,g=null;if(l&&u&&d){const M=[],v=t?12:18;rc(l.x,l.z,u.x,u.z,2.05,1.92,70,.18,v,M),rc(u.x,u.z,d.x,d.z,1.92,2.12,70,.16,v,M),y=gg(n,a,sd(3844288,.55),mg(M,o),i,5,.038,.056,t?2.4:3.6,.38,.42,1.15)}if(h&&f&&x){const M=[],v=t?10:16;rc(h.x,h.z,f.x,f.z,4.8,5.15,48,1.15,v,M),rc(f.x,f.z,x.x,x.z,5.15,4.9,48,1.05,v,M),g=gg(n,a,sd(6965416,.52),mg(M,o),s,17,.046,.068,t?1.8:2.8,.46,.7,.46)}const p=new Float32Array(r*3),w=new Float32Array(r),S=new Float32Array(r),m=new _e(a,sd(12886112,.5),r);if(m.castShadow=!1,m.receiveShadow=!1,m.frustumCulled=!0,m.renderOrder=2,d)for(let M=0;M<r;M++){const v=M/r*Math.PI*2+.22,A=16+Ss(M,2)*12;p[M*3]=d.x+Math.cos(v)*A,p[M*3+1]=6.15+Ss(M,4)*.35,p[M*3+2]=d.z+Math.sin(v)*A,w[M]=Ss(M,8)*Math.PI*2,S[M]=1.05+Ss(M,11)*.7,c.position.set(p[M*3],p[M*3+1],p[M*3+2]),c.rotation.set(.2,v,.12),c.scale.setScalar(S[M]),c.updateMatrix(),m.setMatrixAt(M,c.matrix)}return m.instanceMatrix.needsUpdate=!0,n.add(m),{tick(M){y&&xg(y,M,c),g&&xg(g,M,c);for(let v=0;v<r;v++){const A=w[v],_=Math.sin(M*1.85+A),E=S[v]*(1+_*.14);c.position.set(p[v*3],p[v*3+1]+_*.48,p[v*3+2]),c.rotation.set(.18,M*.35+A,.1),c.scale.set(E*.82,E*1.15,E*.82),c.updateMatrix(),m.setMatrixAt(v,c.matrix)}m.instanceMatrix.needsUpdate=!0}}}function _g(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function yg(e){return Ht.find(t=>t.kind===e)??null}const vg=[["canal","market","cyan"],["market","foundry","gold"],["foundry","grove","gold"],["wild","bridge","cyan"],["bridge","gate","cyan"],["gate","beacon","cyan"],["terrace","ring","gold"]];function Wr(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}function Mg(e,t,n){return new wt({color:e,roughness:.16,metalness:.44,emissive:t,emissiveIntensity:n,iridescence:.52,iridescenceIOR:1.32,clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function Ls(e,t,n,i,s){if(!n.length)return;const r=new _e(e,t,n.length),o=new re;o.rotation.order="YXZ",n.forEach((a,c)=>{o.position.set(a.x,a.y,a.z),o.rotation.set(a.rx,a.ry,a.rz),o.scale.set(a.sx,a.sy,a.sz),o.updateMatrix(),r.setMatrixAt(c,o.matrix)}),r.instanceMatrix.needsUpdate=!0,r.castShadow=!1,r.receiveShadow=!1,r.frustumCulled=!0,r.renderOrder=s,i.add(r)}function gR(e,t){const n=new Tt;n.name="spans",e.add(n);const i=[],s=[],r=[],o=[],a=[],c=[],l=[],u=[],d=6.18,h=t?18:32,f=t?10:16;for(let p=0;p<vg.length;p++){if(t&&p%2===1)continue;const w=vg[p],S=yg(w[0]),m=yg(w[1]);if(!S||!m||Math.hypot(S.x,S.z)<90||Math.hypot(m.x,m.z)<90)continue;const M=m.x-S.x,v=m.z-S.z,A=Math.hypot(M,v)||1,_=Math.min(.22,S.radius*.72/A),E=Math.min(.22,m.radius*.72/A),C=S.x+M*_,P=S.z+v*_,T=m.x-M*E,O=m.z-v*E,k=T-C,U=O-P,$=Math.hypot(k,U)||1,W=Math.atan2(-U,k),tt=8+_g(p,2)*6-d,q=w[2];i.push({x:(C+T)*.5,y:d,z:(P+O)*.5,sx:$*.5,sy:tt,sz:1,rx:0,ry:W,rz:0}),q==="gold"&&s.push(i.pop());const ht=Math.max(t?8:14,Math.round($/(t?34:18))),nt=[];for(let at=0;at<=ht;at++){const At=at/ht,Bt=2*At-1;nt.push({x:C+k*At,y:d+tt*Math.sqrt(Math.max(0,1-Bt*Bt)),z:P+U*At})}const zt=-U/$,Qt=k/$,Nt=!t,V=Nt?.92:0;for(let at=0;at<ht;at++){const At=nt[at],Bt=nt[at+1],Vt=Bt.x-At.x,he=Bt.y-At.y,$t=Bt.z-At.z,oe=Math.hypot(Vt,he,$t)||1,xe=Math.atan2(Vt,$t),pe=-Math.atan2(he,Math.hypot(Vt,$t)),Ne=(At.x+Bt.x)*.5,ye=(At.y+Bt.y)*.5,Xe=(At.z+Bt.z)*.5,je={x:Ne+zt*V,y:ye,z:Xe+Qt*V,sx:.62,sy:.15,sz:oe*1.08,rx:pe,ry:xe,rz:0},Ye={x:Ne+zt*V,y:ye+.12,z:Xe+Qt*V,sx:.95,sy:.22,sz:oe*1.06,rx:pe,ry:xe,rz:0};if(q==="gold"?(o.push(je),c.push(Ye)):(r.push(je),a.push(Ye)),Nt){const Ve={...je,x:Ne-zt*V,z:Xe-Qt*V,sx:.5,sy:.12},F={...Ye,x:Ne-zt*V,z:Xe-Qt*V,sx:.78,sy:.18};q==="gold"?(r.push(Ve),a.push(F)):(o.push(Ve),c.push(F))}}const ot=t?4:3;for(let at=1;at<ht;at++){if(at%ot!==0)continue;const At=nt[at-1],Bt=nt[at],Vt=nt[at],he=Bt.x-At.x,$t=Bt.y-At.y,oe=Bt.z-At.z,xe=Math.atan2(he,oe),pe=-Math.atan2($t,Math.hypot(he,oe)),Ne=.92+_g(at+p,7)*.28,ye={x:Vt.x,y:Vt.y,z:Vt.z,sx:Ne,sy:Ne,sz:Ne,rx:pe,ry:xe,rz:0};(at+p)%2===0?l.push(ye):u.push(ye)}}const x=new mn(1,.007,t?5:8,h,Math.PI),y=new Me(1,1,1),g=new mn(1.28,.055,6,f);Ls(x,Wr(3073791,.32),i,n,3),Ls(x,Wr(15254890,.28),s,n,3),Ls(y,Mg(1456196,3073791,.22),r,n,2),Ls(y,Mg(3812374,15254890,.2),o,n,2),Ls(y,Wr(3073791,.42),a,n,4),Ls(y,Wr(15254890,.36),c,n,4),Ls(g,Wr(8317170,.38),l,n,4),Ls(g,Wr(16762970,.34),u,n,4)}function Vi(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function rd(e,t,n){return new wt({color:e,roughness:.2,metalness:.36,emissive:t,emissiveIntensity:n,iridescence:.64,iridescenceIOR:1.31,iridescenceThicknessRange:[90,380],clearcoat:.48,clearcoatRoughness:.26,transparent:!1})}function xR(e){switch(e){case"bridge":case"canal":case"market":return"cyan";case"foundry":case"archive":case"overlook":case"grove":case"wild":return"gold";default:return"violet"}}function Xr(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,o.rz),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function _R(e,t){return t?3:4+Math.min(4,Math.floor(Vi(e,21)*5))}function yR(e,t){const n=new Tt;n.name="facets",e.add(n);const i=rd(666680,1595496,.14),s=rd(2892306,5914656,.13),r=rd(1314850,3286102,.12),o=[],a=[],c=[],l=[],u=[],d=[];for(let x=0;x<Ht.length;x++){const y=Ht[x];if(Math.hypot(y.x,y.z)<90)continue;const g=_R(x,t),p=xR(y.kind),w=p==="cyan"?o:p==="gold"?c:u,S=p==="cyan"?a:p==="gold"?l:d;for(let m=0;m<g;m++){const M=x*17+m*3,v=m/g*Math.PI*2+Vi(M,2)*.7,A=14+Vi(M,4)*24,_=y.x+Math.cos(v)*A,E=y.z+Math.sin(v)*A;if(Math.hypot(_,E)<90)continue;const C=.6+Vi(M,6)*1.2,P=.6+Vi(M,8)*1.2,T=.6+Vi(M,10)*1.2,O={x:_,y:.4+Vi(M,12)*2.6,z:E,sx:C,sy:P,sz:T,rx:(Vi(M,14)-.5)*.9,ry:Vi(M,16)*Math.PI*2,rz:(Vi(M,18)-.5)*.7};Vi(M,20)>.46?S.push(O):w.push(O)}}const h=new Sn(1,0),f=new tu(1,0);Xr(h,i,o,n),Xr(f,i,a,n),Xr(h,s,c,n),Xr(f,s,l,n),Xr(h,r,u,n),Xr(f,r,d,n)}function wg(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function ad(e){return Ht.find(t=>t.kind===e)??null}function vR(e){return e?new Ue({color:4114656,transparent:!0,opacity:.28,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1}):new wt({color:3844288,roughness:.12,metalness:.04,transmission:.58,thickness:.38,ior:1.33,transparent:!0,opacity:.28,depthWrite:!1,depthTest:!0,side:ge,emissive:1456196,emissiveIntensity:.1,fog:!0})}function Sg(e,t,n,i,s,r,o){const a=n-e,c=i-t,l=Math.hypot(a,c)||1,u=-c/l,d=a/l,h=o.length===0?0:1;for(let f=h;f<=r;f++){const x=f/r,y=Math.sin(x*Math.PI);o.push(e+a*x+u*y*s,t+c*x+d*y*s)}}function MR(e,t){const n=new Tt;n.name="water",e.add(n);const i=ad("canal"),s=ad("market"),r=ad("foundry"),o=new re,a=[],c=t?1:2;if(!i||!s||!r)return{tick(){}};const l=t?10:16,u=[];Sg(i.x,i.z,s.x,s.z,70,l,u),Sg(s.x,s.z,r.x,r.z,70,l,u);const d=u.length/2;if(d<2)return{tick(){}};const h=.78,f=new cs(1,1);f.rotateX(-Math.PI/2);const x=vR(t),y=c===1?[0]:[-4.4,4.4],g=t?12.4:7.2;for(let p=0;p<c;p++){const w=y[p],S=d-1,m=new _e(f,x,S);m.castShadow=!1,m.receiveShadow=!1,m.frustumCulled=!0,m.renderOrder=1;const M=new Float32Array(S),v=new Float32Array(S),A=new Float32Array(S),_=new Float32Array(S),E=new Float32Array(S),C=new Float32Array(S),P=new Float32Array(S);for(let T=0;T<S;T++){const O=u[T*2],k=u[T*2+1],U=u[(T+1)*2],$=u[(T+1)*2+1],W=U-O,Y=$-k,tt=Math.hypot(W,Y)||1,q=-Y/tt,ht=W/tt;M[T]=(O+U)*.5+q*w,v[T]=h,A[T]=(k+$)*.5+ht*w,_[T]=g*(.92+wg(T+p,3)*.16),E[T]=tt*1.08,C[T]=Math.atan2(W,Y),P[T]=wg(T+p*17,9)*Math.PI*2,o.position.set(M[T],v[T],A[T]),o.rotation.set(0,C[T],0),o.scale.set(_[T],1,E[T]),o.updateMatrix(),m.setMatrixAt(T,o.matrix)}m.instanceMatrix.needsUpdate=!0,n.add(m),a.push({mesh:m,x:M,y:v,z:A,sx:_,sz:E,ry:C,phase:P,n:S})}return{tick(p){for(let w=0;w<a.length;w++){const S=a[w],m=S.mesh;for(let M=0;M<S.n;M++){const v=S.phase[M],A=Math.sin(p*.48+v)*.055,_=1+Math.sin(p*.36+v*.7)*.038;o.position.set(S.x[M],S.y[M]+A,S.z[M]),o.rotation.set(0,S.ry[M],0),o.scale.set(S.sx[M]*_,1,S.sz[M]),o.updateMatrix(),m.setMatrixAt(M,o.matrix)}m.instanceMatrix.needsUpdate=!0}}}}function nr(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function wR(e){return Ht.find(t=>t.kind===e)??null}function bg(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}const w0=1.5,SR=8,iM=SR-w0;function Eg(e,t,n,i,s,r,o){const a=new _e(t,n,s);a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!0,a.renderOrder=3;const c=new Float32Array(s),l=new Float32Array(s),u=new Float32Array(s),d=new Float32Array(s),h=new Float32Array(s),f=new Float32Array(s),x=new Float32Array(s),y=new Float32Array(s);for(let g=0;g<s;g++){const p=(g+r*.17)/8*Math.PI*2+nr(g,r+2)*.42,w=50+nr(g,r+4)*8;c[g]=i.x+Math.cos(p)*w,l[g]=i.z+Math.sin(p)*w;const S=.28+nr(g,r+6)*.32;u[g]=S,d[g]=S*(1.35+nr(g,r+8)*.55),h[g]=S,f[g]=nr(g,r+11),x[g]=.042+nr(g,r+13)*.038,y[g]=.35+nr(g,r+17)*.7;const m=f[g];o.position.set(c[g],w0+m*iM,l[g]),o.rotation.set(m*.5,p,.12),o.scale.set(u[g],d[g],h[g]),o.updateMatrix(),a.setMatrixAt(g,o.matrix)}return a.instanceMatrix.needsUpdate=!0,e.add(a),{mesh:a,x:c,z:l,sx:u,sy:d,sz:h,phase:f,speed:x,wob:y,n:s}}function Tg(e,t,n){const i=e.mesh;for(let s=0;s<e.n;s++){let r=e.phase[s]+t*e.speed[s];r-=Math.floor(r);const o=e.wob[s];n.position.set(e.x[s]+Math.sin(t*.62+s*1.17)*o,w0+r*iM,e.z[s]+Math.cos(t*.48+s*.91)*o),n.rotation.set(r*.55,t*.22+s*.4,.1);const a=1-r*.28;n.scale.set(e.sx[s]*a,e.sy[s]*(.82+r*.4),e.sz[s]*a),n.updateMatrix(),i.setMatrixAt(s,n.matrix)}i.instanceMatrix.needsUpdate=!0}function bR(e,t){const n=new Tt;n.name="heat",e.add(n);const i=wR("foundry");if(!i)return{tick(){}};const s=t?4:8,r=t?2:4,o=new Sn(1,0),a=new re,c=Eg(n,o,bg(13934672,.22),i,s,5,a),l=Eg(n,o,bg(14708776,.22),i,r,19,a);return{tick(u){Tg(c,u,a),Tg(l,u,a)}}}function Os(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}const Ag=[["zone-canal","zone-market"],["zone-market","zone-foundry"],["zone-foundry","zone-grove"],["zone-wild","zone-bridge"],["zone-bridge","zone-gate"],["zone-gate","zone-beacon"],["zone-gate","zone-terrace"],["zone-terrace","zone-ring"],["zone-archive","zone-market"],["zone-archive","zone-overlook"]];function ER(e,t){return new Ue({color:e,transparent:!0,opacity:t,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}function od(e,t){return Math.hypot(e,t)<90}function TR(e,t){return Ht.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.58)}function AR(e){return e?4:6+Math.min(4,Math.floor(Os(7,21)*5))}function RR(e,t){const n=new Tt;n.name="mist",e.add(n);const i=new Map(Ht.map(l=>[l.id,l])),s=AR(t),r=new cs(1,1);r.rotateX(-Math.PI/2);const o=799552,a=1446440;let c=0;for(let l=0;l<Ag.length&&c<s;l++){const u=Ag[l],d=i.get(u[0]),h=i.get(u[1]);if(!d||!h||od(d.x,d.z)||od(h.x,h.z))continue;const f=.44+Os(l,5)*.12,x=h.x-d.x,y=h.z-d.z,g=Math.hypot(x,y)||1,p=-y/g,w=x/g,S=(Os(l,9)-.5)*42,m=d.x+x*f+p*S,M=d.z+y*f+w*S;if(od(m,M)||TR(m,M))continue;const v=.07+Os(l,13)*.04,A=Os(l,3)>.5?o:a,_=new mt(r,ER(A,v)),E=96+Os(l,17)*84;_.position.set(m,.35,M),_.rotation.y=Os(l,11)*Math.PI*2,_.scale.set(E,1,E*(.68+Os(l,19)*.44)),_.castShadow=!1,_.receiveShadow=!1,_.frustumCulled=!0,_.renderOrder=-1,n.add(_),c+=1}}function CR(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Rg(e){return Ht.find(t=>t.kind===e)??null}const cd=[["canal","market"],["market","foundry"],["wild","bridge"],["bridge","gate"],["terrace","ring"]],PR=.08,IR=.12,DR=14;function zR(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function LR(e,t){const n=new Tt;n.name="trails",e.add(n);const i=[],s=[];for(let a=0;a<cd.length;a++){const c=Rg(cd[a][0]),l=Rg(cd[a][1]);if(!c||!l){s.push(0);continue}if(Math.hypot(c.x,c.z)<90||Math.hypot(l.x,l.z)<90){s.push(0);continue}const u=l.x-c.x,d=l.z-c.z,h=Math.hypot(u,d)||1,f=Math.min(.28,c.radius*.62/h),x=Math.min(.28,l.radius*.62/h),y=c.x+u*f,g=c.z+d*f,p=l.x-u*x,w=l.z-d*x,S=p-y,m=w-g,M=Math.hypot(S,m)||1,v=Math.atan2(S,m),A=Math.max(2,Math.round(M/DR)),_=M/A;let E=0;for(let C=0;C<A;C++){if(t&&C%2===1)continue;const P=(C+.5)/A,T=y+S*P,O=g+m*P;if(Math.hypot(T,O)<90)continue;const k=4+CR(C+a*17,5)*2;i.push({x:T,y:PR,z:O,sx:k,sy:IR,sz:_*.94,ry:v}),E+=1}s.push(E)}const r=new Me(1,1,1),o=new wt({color:466472,roughness:.38,metalness:.28,emissive:1729912,emissiveIntensity:.14,iridescence:.28,iridescenceIOR:1.3,clearcoat:.22,clearcoatRoughness:.42,transparent:!1});zR(r,o,i,n),n.userData.segmentCounts={"canal-join":s[0]??0,"join-foundry":s[1]??0,"wild-bridge":s[2]??0,"bridge-gate":s[3]??0,"terrace-ring":s[4]??0,total:i.length}}function NR(e){return Ht.find(t=>t.kind===e)??null}function UR(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}function OR(e,t){const n=new Tt;n.name="beam",e.add(n);const i=NR("beacon");if(!i)return{tick(){}};const s=t?.5:.7,r=t?36:48,o=r*.5,a=t?8:12,c=new Te(s,s,r,a,1,!0),l=UR(13934672,.16),u=new _e(c,l,1);u.castShadow=!1,u.receiveShadow=!1,u.frustumCulled=!0,u.renderOrder=4;const d=new re;return d.position.set(i.x,o,i.z),d.scale.set(1,1,1),d.updateMatrix(),u.setMatrixAt(0,d.matrix),u.instanceMatrix.needsUpdate=!0,n.add(u),{tick(h){const f=(Math.sin(h*1.15)+1)*.5;d.scale.y=.95+f*.1,d.updateMatrix(),u.setMatrixAt(0,d.matrix),u.instanceMatrix.needsUpdate=!0,l.opacity=.12+f*.1}}}function ld(e){return Ht.find(t=>t.kind===e)??null}function kR(){return new wt({color:1456196,roughness:.18,metalness:.42,emissive:3073791,emissiveIntensity:.2,iridescence:.48,iridescenceIOR:1.32,clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function FR(e,t){const n=new Tt;n.name="discs",e.add(n);const i=t?1:2,s=ld("dock"),r=ld("market"),o=ld("gate"),a=[];if(s)for(let f=0;f<i;f++){const x=f*Math.PI+.62,y=i===1?0:18;a.push({x:s.x+Math.cos(x)*y,z:s.z+Math.sin(x)*y,r:5+(i===1?1.4:f===0?2:.6)})}else{const f=[r,o].filter(x=>!!x);for(let x=0;x<i&&x<f.length;x++){const y=f[x];a.push({x:y.x,z:y.z,r:5+(x===0?2:.8)})}}if(!a.length)return{tick(){}};const c=t?10:16,l=.18,u=new Te(1,1,l,c),d=kR(),h=[];for(let f=0;f<a.length;f++){const x=a[f],y=new mt(u,d);y.position.set(x.x,l*.5,x.z),y.scale.set(x.r,1,x.r),y.castShadow=!1,y.receiveShadow=!0,y.frustumCulled=!0,y.renderOrder=2,n.add(y),h.push({mesh:y,speed:.14+f*.04,phase:f*1.17})}return n.userData.discCount=h.length,{tick(f){for(let x=0;x<h.length;x++){const y=h[x];y.mesh.rotation.y=f*y.speed+y.phase}}}}function hd(e){return Ht.find(t=>t.kind===e)??null}function Cg(e,t,n){return new wt({color:e,roughness:.46,metalness:.28,emissive:t,emissiveIntensity:n,iridescence:.22,iridescenceIOR:1.3,clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function BR(e){return new Ue({color:3844288,transparent:!0,opacity:e,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}function Na(e,t,n,i,s,r){if(!n.length)return;const o=new _e(e,t,n.length),a=new re;a.rotation.order="YXZ",n.forEach((c,l)=>{a.position.set(c.x,c.y,c.z),a.rotation.set(c.rx,c.ry,c.rz),a.scale.set(c.sx,c.sy,c.sz),a.updateMatrix(),o.setMatrixAt(l,a.matrix)}),o.instanceMatrix.needsUpdate=!0,o.castShadow=!1,o.receiveShadow=r,o.frustumCulled=!0,o.renderOrder=s,i.add(o)}function Pg(e,t,n){const i=t-e.x,s=n-e.z,r=Math.hypot(i,s)||1,o=Math.min(48,e.radius*.38);return{x:e.x+i/r*o,z:e.z+s/r*o}}function HR(e,t){const n=new Tt;n.name="cisterns",e.add(n);const i=hd("canal"),s=hd("foundry"),r=hd("market"),o={canal:0,foundry:0,total:0};if(n.userData.wellCounts=o,!i)return;const a=t?12:22,c=t?5:8,l=9.6,u=.68,d=1.22,h=8.7,f=.4,x=.3,y=Math.PI/2,g=new Te(l,l,d,a,1,!0),p=new mn(l,u,c,a),w=new Ri(h,a);w.rotateX(-Math.PI/2);const S=Cg(466472,1729912,.1),m=Cg(2761236,5783592,.1),M=BR(x),v=[],A=[],_=[],E=[],C=[],P=r?.x??0,T=r?.z??0,O=(U,$,W,Y)=>{W.push({x:U,y:d*.5,z:$,sx:1,sy:1,sz:1,rx:0,ry:0,rz:0}),Y.push({x:U,y:d,z:$,sx:1,sy:1,sz:1,rx:y,ry:0,rz:0}),C.push({x:U,y:f,z:$,sx:1,sy:1,sz:1,rx:0,ry:0,rz:0})},k=Pg(i,P,T);if(O(k.x,k.z,v,A),o.canal=1,!t&&s){const U=Pg(s,P,T);O(U.x,U.z,_,E),o.foundry=1}o.total=o.canal+o.foundry,Na(g,S,v,n,2,!0),Na(p,S,A,n,2,!0),Na(g,m,_,n,2,!0),Na(p,m,E,n,2,!0),Na(w,M,C,n,1,!1)}function Ns(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function GR(e){return Ht.find(t=>t.kind===e)??null}function Ig(e,t,n){return new wt({color:e,roughness:.18,metalness:.4,emissive:t,emissiveIntensity:n,iridescence:.58,iridescenceIOR:1.31,iridescenceThicknessRange:[80,360],clearcoat:.5,clearcoatRoughness:.24,transparent:!1})}function Dg(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,o.rz),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function zg(e,t,n){const i=[];for(let s=0;s<t;s++){const r=(s+n*.13)/t*Math.PI*2+Ns(s,n+2)*.55,o=16+Ns(s,n+4)*32,a=.32+Ns(s,n+8)*.42;i.push({x:e.x+Math.cos(r)*o,y:3+Ns(s,n+6)*4,z:e.z+Math.sin(r)*o,sx:a,sy:a*(1.12+Ns(s,n+10)*.38),sz:a,rx:.12+Ns(s,n+12)*.38,ry:r+Ns(s,n+14)*.8,rz:(Ns(s,n+16)-.5)*.4})}return i}function VR(e,t){const n=new Tt;n.name="fruit",e.add(n);const i=GR("grove");if(!i)return;const s=t?3:8,r=t?2:6,o=Ig(2892306,5914656,.14),a=Ig(1314850,3286102,.12),c=new Sn(1,0);Dg(c,o,zg(i,s,5),n),Dg(c,a,zg(i,r,19),n)}function $R(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function Lg(e){return Ht.find(t=>t.kind===e)??null}function WR(e,t,n,i,s,r,o){const a=n-e,c=i-t,l=Math.hypot(a,c)||1,u=-c/l,d=a/l,h=o.length===0?0:1;for(let f=h;f<=r;f++){const x=f/r,y=Math.sin(x*Math.PI);o.push(e+a*x+u*y*s,t+c*x+d*y*s)}}function Ng(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}function Ug(e,t,n){return new wt({color:e,roughness:.4,metalness:.3,emissive:t,emissiveIntensity:n,iridescence:.26,iridescenceIOR:1.3,clearcoat:.2,clearcoatRoughness:.46,transparent:!1})}const XR=.9,YR=.4,qR=.28,ZR=.22,Og=[.8,1.06],KR=.08,jR=.055,JR=11.2,QR=44,Gc=7,tC=72;function ud(e,t){return t?e.filter((n,i)=>i%2===0):e}function dd(e,t){for(let n=0;n<e.length;n++){const i=e[n];t.push({x:i.x,y:XR,z:i.z,sx:qR,sy:YR,sz:ZR,ry:i.ry})}}function fd(e,t){for(let n=0;n<e.length-1;n++){const i=e[n],s=e[n+1],r=s.x-i.x,o=s.z-i.z,a=Math.hypot(r,o);if(a<.5||a>Gc*3.4)continue;const c=(i.x+s.x)*.5,l=(i.z+s.z)*.5,u=Math.atan2(r,o);for(let d=0;d<Og.length;d++)t.push({x:c,y:Og[d],z:l,sx:KR,sy:jR,sz:a*.98,ry:u})}}function eC(e,t){const n=new Tt;n.name="rails",e.add(n);const i={left:0,right:0,back:0,total:0,rails:0};n.userData.postCounts=i;const s=Lg("canal");if(!s)return;const r=Lg("market"),o=[],a=[],c=[],l=[],u=[],d=s.radius*1.22;if(r){const _=[];WR(s.x,s.z,r.x,r.z,70,tC,_);const E=_.length/2;let C=0,P=-Gc;for(let T=0;T<E;T++){const O=_[T*2],k=_[T*2+1];let U,$;T+1<E?(U=_[(T+1)*2]-O,$=_[(T+1)*2+1]-k):(U=O-_[(T-1)*2],$=k-_[(T-1)*2+1]);const W=Math.hypot(U,$)||1;T>0&&(C+=W);const Y=Math.hypot(O-s.x,k-s.z);if(Y<QR||Y>d||Math.hypot(O,k)<90||C-P<Gc)continue;P=C;const tt=-$/W,q=U/W,ht=Math.atan2(U,$),nt=c.length,zt=($R(nt,4)-.5)*1.2,Qt=JR+zt;c.push({x:O+tt*Qt,z:k+q*Qt,ry:ht}),l.push({x:O-tt*Qt,z:k-q*Qt,ry:ht})}}const h=r?.x??0,f=r?.z??0,x=Math.atan2(f-s.z,h-s.x),y=96,g=Math.PI*1.62,p=x+Math.PI-g*.5,w=Math.max(5,Math.round(g*y/Gc));for(let _=0;_<=w;_++){const E=p+_/w*g;u.push({x:s.x+Math.cos(E)*y,z:s.z+Math.sin(E)*y,ry:E+Math.PI*.5})}const S=ud(c,t),m=ud(l,t),M=ud(u,t);dd(S,o),dd(m,o),dd(M,o);const v=a.length;fd(S,a),fd(m,a),fd(M,a),i.left=S.length,i.right=m.length,i.back=M.length,i.total=o.length,i.rails=a.length-v;const A=new Me(1,1,1);Ng(A,Ug(466472,1729912,.14),o,n),Ng(A,Ug(799552,2783884,.18),a,n)}function Ua(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function nC(e){return Ht.find(t=>t.kind===e)??null}function kg(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,toneMapped:!1})}const S0=8,iC=22,sM=iC-S0,Fg=52,Bg=.12;function sC(e,t){const n=t/8*Math.PI*2;return{x:e.x+Math.cos(n)*Fg,z:e.z+Math.sin(n)*Fg,a:n}}function Hg(e,t,n,i,s,r,o){const a=s.length,c=new _e(t,n,a);c.castShadow=!1,c.receiveShadow=!1,c.frustumCulled=!0,c.renderOrder=3;const l=new Float32Array(a),u=new Float32Array(a),d=new Float32Array(a),h=new Float32Array(a),f=new Float32Array(a),x=new Float32Array(a),y=new Float32Array(a),g=new Float32Array(a);for(let p=0;p<a;p++){const w=sC(i,s[p]);l[p]=w.x,u[p]=w.z;const S=.72+Ua(p,r+6)*.58;d[p]=S,h[p]=S*(.82+Ua(p,r+8)*.36),f[p]=S,x[p]=Ua(p,r+11),y[p]=.026+Ua(p,r+13)*.028,g[p]=.55+Ua(p,r+17)*.85;const m=x[p];o.position.set(l[p],S0+m*sM,u[p]),o.rotation.set(0,w.a,0),o.scale.set(d[p],h[p],f[p]),o.updateMatrix(),c.setMatrixAt(p,o.matrix)}return c.instanceMatrix.needsUpdate=!0,e.add(c),{mesh:c,x:l,z:u,sx:d,sy:h,sz:f,phase:x,speed:y,wob:g,n:a}}function Gg(e,t,n){const i=e.mesh;for(let s=0;s<e.n;s++){let r=e.phase[s]+t*e.speed[s];r-=Math.floor(r);const o=e.wob[s];n.position.set(e.x[s]+Math.sin(t*.38+s*1.31)*o,S0+r*sM,e.z[s]+Math.cos(t*.31+s*.77)*o),n.rotation.set(0,t*.08+s*.7,0);const a=.72+r*.55;n.scale.set(e.sx[s]*a,e.sy[s]*(.9+r*.22),e.sz[s]*a),n.updateMatrix(),i.setMatrixAt(s,n.matrix)}i.instanceMatrix.needsUpdate=!0}function rC(e,t){const n=new Tt;n.name="smoke",e.add(n);const i=nC("foundry"),s={gold:0,violet:0,total:0};if(n.userData.wispCounts=s,!i)return{tick(){}};const r=t?[0]:[0,2,4,6],o=t?[4]:[1,5];s.gold=r.length,s.violet=o.length,s.total=s.gold+s.violet;const a=t?6:10,c=new as(1,a,a),l=new re,u=Hg(n,c,kg(11569736,Bg),i,r,5,l),d=Hg(n,c,kg(5916792,Bg),i,o,19,l);return{tick(h){Gg(u,h,l),Gg(d,h,l)}}}function aC(){const e=Ki.find(s=>s.id==="nesh"),t=e?.x??-24,n=e?.z??128,i=Math.hypot(t,n)||1;return{nx:t/i,nz:n/i}}function oC(){return new wt({color:2892306,roughness:.22,metalness:.46,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function cC(){return new wt({color:1314850,roughness:.16,metalness:.4,emissive:5914656,emissiveIntensity:.16,iridescence:.58,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}const Vg=1.2,ac=8,$g=.4,pd=3.1,Wg=.48,md=.07;function lC(e,t){const n=new Tt;n.name="notice",e.add(n);const i=aC(),s=Math.min(96,Math.max(74,wn.radius+36)),r=i.nx*s,o=i.nz*s,a=Math.atan2(r,o),c=new mt(new Me(Vg,ac,$g),oC());if(c.position.set(r,pd+ac*.5,o),c.rotation.y=a,c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,n.add(c),!t){const u=new mt(new mn(Wg,md,8,16),cC());u.rotation.x=Math.PI/2,u.position.set(r,pd+ac+md,o),u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,n.add(u)}n.userData.steleCount=1,n.userData.sizes={w:Vg,h:ac,d:$g,plazaY:pd,r:s,lensR:t?0:Wg,lensTube:t?0:md}}function gd(e){return Ht.find(t=>t.kind===e)??null}function Xg(e,t,n){return new wt({color:e,roughness:.4,metalness:.32,emissive:t,emissiveIntensity:n,iridescence:.28,iridescenceIOR:1.3,clearcoat:.22,clearcoatRoughness:.46,transparent:!1})}function hC(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const zf=18,Lf=.3,Nf=6,Vc=.96,Uf=12,uC=4,Of=.34,kf=.44,Yg=6.4,qg=1.9,oc={walk:{l:zf,h:Lf,w:Nf,y:Vc},pile:{rTop:Of,rBot:kf},side:Uf};function dC(e,t){const n=new Tt;n.name="pier",e.add(n);const i=gd("market"),s={walk:0,piles:0};if(n.userData.pierCounts=s,n.userData.sizes={walk:{...oc.walk},pile:{rTop:oc.pile.rTop,rBot:oc.pile.rBot,n:0,h:0,y0:0},side:oc.side},!i||Math.hypot(i.x,i.z)<90)return;const r=gd("canal"),o=gd("foundry"),a=r??o,c=a?i.x-(r?r.x:a.x):1,l=a?i.z-(r?r.z:a.z):0,u=Math.hypot(c,l)||1,d=c/u,h=l/u,f=-h,x=d,y=Math.atan2(d,h),g=i.x+f*Uf,p=i.z+x*Uf,w=new Me(Nf,Lf,zf),S=new mt(w,Xg(2761236,1729912,.16));S.position.set(g,Vc,p),S.rotation.y=y,S.castShadow=!1,S.receiveShadow=!0,S.frustumCulled=!0,n.add(S),s.walk=1;const m=Vc;if(n.userData.sizes.walk={l:zf,h:Lf,w:Nf,y:Vc},n.userData.sizes.pile={rTop:Of,rBot:kf,n:t?0:uC,h:t?0:m,y0:0},t)return;const M=[],v=[-Yg,Yg],A=[-qg,qg];for(let C=0;C<v.length;C++)for(let P=0;P<A.length;P++)M.push({x:g+d*v[C]+f*A[P],y:m*.5,z:p+h*v[C]+x*A[P],sx:1,sy:1,sz:1,ry:y});const _=8,E=new Te(Of,kf,m,_);hC(E,Xg(466472,5914656,.12),M,n),s.piles=M.length}function fC(e){return Ht.find(t=>t.kind===e)??null}function pC(){return new wt({color:1314850,roughness:.2,metalness:.38,emissive:5914656,emissiveIntensity:.12,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}const ph=1.2,mh=14,Zg=1.2,Ff=10,Bf=.8,Kg=1.2,$c=Ff*.5-ph*.5,mC=$c*2-ph,jg=mh*.5,Jg=mh+Bf*.5;function gC(e,t){const n=new Tt;n.name="gates",e.add(n);const i={postW:ph,postH:mh,postD:Zg,lintelW:Ff,lintelH:Bf,lintelD:Kg,span:$c*2,open:mC,postY:jg,lintelY:t?0:Jg};n.userData.sizes=i,n.userData.postCount=0,n.userData.lintelCount=0;const s=fC("gate");if(!s||Math.hypot(s.x,s.z)<90)return;const r=Math.atan2(s.x,s.z),o=Math.cos(r),a=Math.sin(r),c=pC(),l=new re;l.rotation.order="YXZ";const u=new Me(ph,mh,Zg),d=new _e(u,c,2);d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!0,d.renderOrder=2;for(let h=0;h<2;h++){const f=h===0?-1:1;l.position.set(s.x+f*$c*o,jg,s.z-f*$c*a),l.rotation.set(0,r,0),l.scale.set(1,1,1),l.updateMatrix(),d.setMatrixAt(h,l.matrix)}if(d.instanceMatrix.needsUpdate=!0,n.add(d),n.userData.postCount=2,!t){const h=new mt(new Me(Ff,Bf,Kg),c);h.position.set(s.x,Jg,s.z),h.rotation.y=r,h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,h.renderOrder=2,n.add(h),n.userData.lintelCount=1}}function Qg(e){return Ht.find(t=>t.kind===e)??null}function xC(){const e=Ki.find(t=>t.id==="voss");return{vx:e?.x??-288,vz:e?.z??-328}}function _C(){return new wt({color:2892306,roughness:.28,metalness:.42,emissive:5783592,emissiveIntensity:.14,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function tx(){return new wt({color:3812374,roughness:.18,metalness:.52,emissive:13934672,emissiveIntensity:.22,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}const Oa=6,xd=.4,_d=3,yd=1.1,vd=22,cc=3.6,ex=.14,yC=.1,Md=.32,nx=.38;function vC(e,t){const n=new Tt;n.name="stall",e.add(n);const i=Qg("market");if(!i){n.userData.stallCount=0,n.userData.sizes={w:Oa,h:xd,d:_d,y:yd,postH:0,postR:0,bulbR:0,offset:0};return}const s=Qg("canal"),r=xC(),o=(s?.x??i.x+1)-i.x,a=(s?.z??i.z)-i.z,c=Math.hypot(o,a)||1,l=o/c,u=a/c,d=-u,h=l,f=r.vx-i.x,x=r.vz-i.z,y=d*f+h*x>=0?1:-1,g=i.x+d*y*vd,p=i.z+h*y*vd,w=Math.atan2(g-i.x,p-i.z),S=new mt(new Me(Oa,xd,_d),_C());if(S.position.set(g,yd,p),S.rotation.y=w,S.castShadow=!1,S.receiveShadow=!0,S.frustumCulled=!0,n.add(S),!t){const M=g+l*(Oa*.5+nx),v=p+u*(Oa*.5+nx),A=new mt(new Te(yC,ex,cc,8),tx());A.position.set(M,cc*.5,v),A.castShadow=!1,A.receiveShadow=!0,A.frustumCulled=!0,n.add(A);const _=new mt(new Sn(Md,0),tx());_.position.set(M,cc+Md*.45,v),_.castShadow=!1,_.receiveShadow=!0,_.frustumCulled=!0,n.add(_)}n.userData.stallCount=1,n.userData.sizes={w:Oa,h:xd,d:_d,y:yd,postH:t?0:cc,postR:t?0:ex,bulbR:t?0:Md,offset:vd}}function MC(e){return Ht.find(t=>t.kind===e)??null}function wC(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function SC(){return new wt({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:.16,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function ix(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}function bC(e,t,n,i,s){const r=Math.cos(s),o=Math.sin(s);return{x:e+n*r+i*o,z:t-n*o+i*r}}const rM=8,Hf=.2,aM=1.4,wd=1.2,Sd=1.5,EC=3,TC=1,oM=.46,Gf=.62,cM=.12,AC=6,RC=4,CC=[-2.4,2.2,-1.8,1.6,-2.6,2.4],PC=[-2.8,-1,1,2.8],IC=.16,DC={w:rM,h:Hf,d:aM,y0:0,gap:0,tabletW:oM,tabletH:Gf,tabletD:cM,shelfCount:0,tabletCount:0};function zC(e,t){const n=new Tt;n.name="shelves",e.add(n);const i={...DC};n.userData.sizes=i,n.userData.shelfCount=0,n.userData.tabletCount=0;const s=MC("archive");if(!s||Math.hypot(s.x,s.z)<90)return;const r=Math.atan2(s.x,s.z),o=s.x,a=s.z,c=t?TC:EC,l=t?RC:AC,u=t?PC:CC,d=[];for(let f=0;f<c;f++)d.push({x:o,y:wd+f*Sd,z:a,ry:r});ix(new Me(rM,Hf,aM),wC(),d,n);const h=[];for(let f=0;f<l;f++){const x=t?0:Math.floor(f/2),y=wd+x*Sd,g=(f%2===0?1:-1)*IC,p=bC(o,a,u[f]??0,g,r);h.push({x:p.x,y:y+Hf*.5+Gf*.5,z:p.z,ry:r})}ix(new Me(oM,Gf,cM),SC(),h,n),i.y0=wd,i.gap=c>1?Sd:0,i.shelfCount=d.length,i.tabletCount=h.length,n.userData.shelfCount=d.length,n.userData.tabletCount=h.length}function LC(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function NC(e){return Ht.find(t=>t.kind===e)??null}function UC(){return new wt({color:1314850,roughness:.24,metalness:.32,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function OC(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const sx=10,rx=.4,bd=2.2,Ed=.2,Td=.4,ax=52,ox=90;function kC(e){return e?3:4+Math.min(2,Math.floor(LC(7,21)*3))}function FC(e,t){const n=new Tt;n.name="steps",e.add(n);const i=kC(t),s={n:0,want:i,y0:Ed,rise:Td};n.userData.stepCounts=s,n.userData.sizes={w:sx,h:rx,d:bd,y0:Ed,rise:Td,outer:ax};const r=NC("terrace");if(!r||Math.hypot(r.x,r.z)<ox)return;const o=Math.hypot(r.x,r.z)||1,a=r.x/o,c=r.z/o,l=Math.atan2(a,c),u=[];for(let h=0;h<i;h++){const f=ax-h*bd,x=r.x-a*f,y=r.z-c*f;Math.hypot(x,y)<ox||u.push({x,y:Ed+h*Td,z:y,sx:1,sy:1,sz:1,ry:l})}const d=new Me(sx,rx,bd);OC(d,UC(),u,n),s.n=u.length}const b0=6,lu=.45,Vf=lu,lM=.35,hM=b0-lu-.15,uM=.28,$f=.2,dM=.36,fM=.68,di={x:0,y:Vf,z:0,rimR:b0,tube:lu,rimY:Vf,discR:hM,discY:lM,discOp:uM,discOpMin:$f,discOpMax:dM,breath:fM};function BC(){return new wt({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function HC(e){return new Ue({color:3844288,transparent:!0,opacity:e,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}function GC(e,t){const n=new Tt;n.name="fountain",e.add(n);const i=t?12:22,s=t?5:8,r=new mn(b0,lu,s,i),o=new mt(r,BC());o.rotation.x=Math.PI/2,o.position.set(0,Vf,0),o.castShadow=!1,o.receiveShadow=!0,o.frustumCulled=!0,o.renderOrder=2,n.add(o);const a=new Ri(hM,i);a.rotateX(-Math.PI/2);const c=HC(uM),l=new mt(a,c);l.position.set(0,lM,0),l.castShadow=!1,l.receiveShadow=!1,l.frustumCulled=!0,l.renderOrder=1,n.add(l);const u=dM-$f;return n.userData.basinCount=1,n.userData.rimCount=1,n.userData.discCount=1,n.userData.breathing=!t,n.userData.sizes={x:di.x,y:di.y,z:di.z,rimR:di.rimR,tube:di.tube,rimY:di.rimY,discR:di.discR,discY:di.discY,discOp:di.discOp,discOpMin:t?di.discOp:di.discOpMin,discOpMax:t?di.discOp:di.discOpMax,breath:t?0:di.breath,segs:i,tubeSeg:s},t?{tick(){}}:{tick(d){const h=(Math.sin(d*fM)+1)*.5;c.opacity=$f+h*u}}}const cx=4.2,Wf=.18,lx=Wf,hx=3.6,Ad=.22,ux=.22,Rd=Math.min(84,Math.max(78,wn.radius+30));function VC(){const e=Ki.find(s=>s.id==="nesh"),t=e?.x??-24,n=e?.z??128,i=Math.hypot(t,n)||1;return{nx:t/i,nz:n/i}}function $C(){return new wt({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function WC(e){return new wt({color:3073791,roughness:.16,metalness:.22,emissive:1456196,emissiveIntensity:.18,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!0,opacity:e,depthWrite:!1,side:ge})}function XC(e,t){const n=new Tt;n.name="lens",e.add(n);const i=VC(),s=i.nx*Rd,r=i.nz*Rd,o=t?12:22,a=t?5:8,c=new Ri(hx,o);c.rotateX(-Math.PI/2);const l=new mt(c,WC(ux));if(l.position.set(s,Ad,r),l.castShadow=!1,l.receiveShadow=!1,l.frustumCulled=!0,l.renderOrder=1,n.add(l),!t){const u=new mt(new mn(cx,Wf,a,o),$C());u.rotation.x=Math.PI/2,u.position.set(s,lx,r),u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,n.add(u)}n.userData.lensCount=1,n.userData.torusCount=t?0:1,n.userData.discCount=1,n.userData.sizes={x:s,y:Ad,z:r,torusR:t?0:cx,tube:t?0:Wf,torusY:t?0:lx,discR:hx,discY:Ad,discOp:ux,apronR:Rd,segs:o,tubeSeg:t?0:a}}function YC(e){return Ht.find(t=>t.kind===e)??null}function qC(){return new wt({color:1314850,roughness:.24,metalness:.32,emissive:3286102,emissiveIntensity:.14,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function ZC(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const dx=1.1,fx=2.4,px=.7,Cd=1.2,lc=22,mx=90,KC=8,jC=5;function JC(e){return e?jC:KC}function QC(e,t){const n=new Tt;n.name="chorus",e.add(n);const i=JC(t),s={n:0,want:i,r:lc,y:Cd};n.userData.stoneCounts=s,n.userData.sizes={w:dx,h:fx,d:px,y:Cd,r:lc};const r=YC("ring");if(!r||Math.hypot(r.x,r.z)<mx)return;const o=Math.PI*2/i,c=Math.atan2(-r.z,-r.x)+o*.5,l=[];for(let d=0;d<i;d++){const h=c+d*o,f=r.x+Math.cos(h)*lc,x=r.z+Math.sin(h)*lc;Math.hypot(f,x)<mx||l.push({x:f,y:Cd,z:x,ry:Math.atan2(f-r.x,x-r.z)})}const u=new Me(dx,fx,px);ZC(u,qC(),l,n),s.n=l.length}function tP(e){return Ht.find(t=>t.kind===e)??null}function eP(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function gx(){return new wt({color:3812374,roughness:.16,metalness:.5,emissive:13934672,emissiveIntensity:.18,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}function nP(e,t,n,i,s){const r=Math.cos(s),o=Math.sin(s);return{x:e+n*r+i*o,z:t-n*o+i*r}}const E0=4.2,pM=.55,T0=2.2,xx=.55,iP=90,hc=1.72,_x=.07,sP=.05,rP=E0*.42,aP=T0*.38,Pd=.28,yx=.055,oP={w:E0,h:pM,d:T0,y:0,postH:0,postR:0,lensR:0,lensTube:0,seatCount:0,postCount:0};function cP(e,t){const n=new Tt;n.name="seat",e.add(n);const i={...oP};n.userData.sizes=i,n.userData.seatCount=0,n.userData.postCount=0;const s=tP("overlook");if(!s||Math.hypot(s.x,s.z)<iP)return;const r=s.x,o=s.z,a=Math.atan2(r,o),c=new mt(new Me(E0,pM,T0),eP());if(c.position.set(r,xx,o),c.rotation.y=a,c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,n.add(c),i.y=xx,i.seatCount=1,n.userData.seatCount=1,!t){const u=nP(r,o,rP,aP,a),d=new mt(new Te(sP,_x,hc,10),gx());d.position.set(u.x,hc*.5,u.z),d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!0,n.add(d);const h=new mt(new mn(Pd,yx,8,16),gx());h.position.set(u.x,hc+Pd*.15,u.z),h.rotation.y=a,h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,n.add(h),i.postH=hc,i.postR=_x,i.lensR=Pd,i.lensTube=yx,i.postCount=1,n.userData.postCount=1}}function vx(e){return Ht.find(t=>t.kind===e)??null}function lP(e){return new Ue({color:4114656,transparent:!0,opacity:e,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}const mM=6,gM=.08,Xf=2,Wc=3.2,xM=.6,_M=.18,Yf=.12,yM=.24,vM=.92,MM=4,hP=2,uP=90,ys={w:mM,h:gM,d:Xf,yTop:Wc,yBot:xM,op:_M,opMin:Yf,opMax:yM,fall:vM};function dP(e){return e?hP:MM}function fP(e,t){const n=new Tt;n.name="cascade",e.add(n);const i=dP(t),s=yM-Yf;n.userData.planeCount=0,n.userData.sizes={w:ys.w,h:ys.h,d:ys.d,yTop:ys.yTop,yBot:ys.yBot,op:ys.op,opMin:ys.opMin,opMax:ys.opMax,fall:ys.fall,n:0,want:i};const r=vx("canal");if(!r)return{tick(){}};if(Math.hypot(r.x,r.z)<uP)return{tick(){}};const o=vx("market"),a=(o?.x??0)-r.x,c=(o?.z??0)-r.z,l=Math.hypot(a,c)||1,u=a/l,d=c/l,h=Math.atan2(u,d),f=(MM-1)*Xf,x=new Me(mM,gM,Xf),y=lP(_M),g=new _e(x,y,i);g.castShadow=!1,g.receiveShadow=!1,g.frustumCulled=!0,g.renderOrder=3;const p=new re;p.rotation.order="YXZ";for(let w=0;w<i;w++){const S=i===1?0:w/(i-1),m=S*f;p.position.set(r.x+u*m,Wc+(xM-Wc)*S,r.z+d*m),p.rotation.set(0,h,0),p.scale.set(1,1,1),p.updateMatrix(),g.setMatrixAt(w,p.matrix)}return g.instanceMatrix.needsUpdate=!0,n.add(g),n.userData.planeCount=i,n.userData.sizes.n=i,n.userData.sizes.x=r.x,n.userData.sizes.y=Wc,n.userData.sizes.z=r.z,n.userData.sizes.along=f,{tick(w){const S=(Math.sin(w*vM)+1)*.5;y.opacity=Yf+S*s}}}function Mx(e){return Ht.find(t=>t.kind===e)??null}function pP(){return new wt({color:466472,roughness:.22,metalness:.36,emissive:1729912,emissiveIntensity:.16,iridescence:.36,iridescenceIOR:1.3,iridescenceThicknessRange:[90,340],clearcoat:.32,clearcoatRoughness:.34,transparent:!1})}function mP(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const uc=3.2,Xc=.16,Id=Xc*.5,dc=38,wx=90,wM=3,gP=1;function xP(e){return e?gP:wM}function _P(e,t){const n=new Tt;n.name="veins",e.add(n);const i=xP(t),s={n:0,want:i,r:uc,h:Xc,ring:dc,y:Id};n.userData.padCounts=s,n.userData.sizes={r:uc,h:Xc,y:Id,ring:dc};const r=Mx("wild");if(!r||Math.hypot(r.x,r.z)<wx)return;const o=Mx("bridge"),a=o?o.x-r.x:-r.x,c=o?o.z-r.z:-r.z,l=Math.atan2(c,a),u=Math.PI*2/wM,d=[];for(let x=0;x<i;x++){const y=l+x*u,g=r.x+Math.cos(y)*dc,p=r.z+Math.sin(y)*dc;Math.hypot(g,p)<wx||d.push({x:g,y:Id,z:p,ry:Math.atan2(g-r.x,p-r.z)})}const h=t?10:16,f=new Te(uc,uc,Xc,h);mP(f,pP(),d,n),s.n=d.length}function Sx(e){return Ht.find(t=>t.kind===e)??null}function yP(){return new wt({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function vP(){return new wt({color:3812374,roughness:.22,metalness:.48,emissive:13934672,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function bx(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const Yr=4.2,Dd=.12,fc=.22,zd=3.6,Ld=90,MP=5,wP=3;function SP(e){return e?wP:MP}function bP(e){return{n:0,posts:0,bulbs:0,want:e}}function EP(e,t){const n=new Tt;n.name="lamps",e.add(n);const i=SP(t),s=bP(i);n.userData.lampCounts=s,n.userData.sizes={postH:Yr,postR:Dd,bulbR:fc,side:zd,yPost:Yr*.5,yBulb:Yr+fc*.55};const r=Sx("canal"),o=Sx("market");if(!r||!o||Math.hypot(r.x,r.z)<Ld||Math.hypot(o.x,o.z)<Ld)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,u=Math.min(.28,r.radius*.62/l),d=Math.min(.28,o.radius*.62/l),h=r.x+a*u,f=r.z+c*u,x=o.x-a*d,y=o.z-c*d,g=x-h,p=y-f,w=Math.hypot(g,p)||1,S=g/w,M=-(p/w),v=S,A=Math.atan2(g,p),_=[],E=[],C=Yr*.5,P=Yr+fc*.55;for(let O=0;O<i;O++){const k=(O+.5)/i,U=O%2===0?1:-1,$=h+g*k+M*zd*U,W=f+p*k+v*zd*U;Math.hypot($,W)<Ld||(_.push({x:$,y:C,z:W,ry:A}),E.push({x:$,y:P,z:W,ry:A}))}const T=t?6:8;bx(new Te(Dd,Dd,Yr,T),yP(),_,n),bx(new as(fc,T,T),vP(),E,n),s.n=_.length,s.posts=_.length,s.bulbs=E.length}function Ex(e){return Ht.find(t=>t.kind===e)??null}function TP(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1,side:ge})}function AP(e){return new Ue({color:3844288,transparent:!0,opacity:e,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}const SM=3.4,bM=1.12,EM=.22,Tx=2.6,Ax=.5,Rx=.2,qf=-16,ar=20,Cx=90;function RP(e,t,n){return[new gt(.06,0),new gt(e*.48,.05),new gt(e*.86,t*.38),new gt(e,t),new gt(e-n,t),new gt(e*.72,t*.4),new gt(e*.32,n),new gt(.06,n*.65)]}const CP={r:SM,h:bM,wall:EM,discR:0,discY:0,discOp:0,along:qf,side:ar,x:0,y:0,z:0,bowlCount:0,discCount:0,segs:0};function PP(e,t){const n=new Tt;n.name="cradle",e.add(n);const i={...CP};n.userData.sizes=i,n.userData.bowlCount=0,n.userData.discCount=0,n.userData.cradleCount=0;const s=Ex("canal");if(!s||Math.hypot(s.x,s.z)<Cx)return;const r=Ex("market"),o=(r?.x??0)-s.x,a=(r?.z??0)-s.z,c=Math.hypot(o,a)||1,l=o/c,u=a/c,d=-u,h=l,f=Math.hypot(s.x+d*ar,s.z+h*ar),x=Math.hypot(s.x-d*ar,s.z-h*ar),y=f>=x?1:-1,g=s.x+l*qf+d*ar*y,p=s.z+u*qf+h*ar*y;if(Math.hypot(g,p)<Cx)return;const w=t?10:20,S=new mt(new Ao(RP(SM,bM,EM),w),TP());if(S.position.set(g,0,p),S.castShadow=!1,S.receiveShadow=!0,S.frustumCulled=!0,S.renderOrder=2,n.add(S),i.x=g,i.y=0,i.z=p,i.bowlCount=1,i.segs=w,n.userData.bowlCount=1,n.userData.cradleCount=1,t)return;const m=new Ri(Tx,w);m.rotateX(-Math.PI/2);const M=new mt(m,AP(Rx));M.position.set(g,Ax,p),M.castShadow=!1,M.receiveShadow=!1,M.frustumCulled=!0,M.renderOrder=1,n.add(M),i.discR=Tx,i.discY=Ax,i.discOp=Rx,i.discCount=1,n.userData.discCount=1}function A0(e){return Ht.find(t=>t.kind===e)??null}function IP(){return new wt({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function DP(){return new wt({color:3812374,roughness:.22,metalness:.46,emissive:5914656,emissiveIntensity:.16,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.26,transparent:!1,side:ge})}function zP(){return new wt({color:1314850,roughness:.2,metalness:.38,emissive:3286102,emissiveIntensity:.14,iridescence:.56,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1,side:ge})}const R0=.08,hu=3.6,TM=1.4,po=5.2,Zf=.11,gh=.86,C0=.08,LP=.12,P0=po-C0,NP=P0-hu*.5,Kf=Math.min(72,Math.max(64,wn.radius+16)),Px=38,Ix=16,jf=.04,UP=.82,AM=3,RM=1,Ii={t:R0,h:hu,w:TM,postH:po,postR:Zf,armL:gh,hangY:P0,bannerY:NP,plazaR:Kf,sway:jf,nFine:AM,nCoarse:RM};function OP(e){return e?RM:AM}function kP(){const e=A0("market"),t=e?.x??-300,n=e?.z??-340,i=Math.hypot(t,n)||1,s=t/i*Kf,r=n/i*Kf;return{x:s,z:r,yaw:Math.atan2(s,r),violet:!1}}function FP(){const e=A0("market");if(!e||Math.hypot(e.x,e.z)<90)return null;const t=Math.hypot(e.x,e.z)||1,n=e.x-e.x/t*Px,i=e.z-e.z/t*Px;return{x:n,z:i,yaw:Math.atan2(n,i),violet:!1}}function BP(){const e=A0("gate");if(!e||Math.hypot(e.x,e.z)<90)return null;const t=Math.atan2(e.x,e.z),n=e.x+Ix*Math.cos(t),i=e.z-Ix*Math.sin(t);return{x:n,z:i,yaw:t,violet:!0}}function HP(e,t,n,i,s,r,o,a){const c=new Tt;c.position.set(e.x,0,e.z),c.rotation.y=e.yaw,o.add(c);const l=new mt(n.post,i);l.position.set(0,po*.5,0),l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,c.add(l);const u=new mt(n.arm,i);u.position.set(gh*.5,po-C0*.5,0),u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,c.add(u);const d=new Tt;d.position.set(gh,P0,0),c.add(d);const h=new mt(n.cloth,e.violet?r:s);h.position.set(R0*.5,-hu*.5,0),h.castShadow=!1,h.receiveShadow=!0,h.frustumCulled=!0,h.renderOrder=2,d.add(h),a.push({hang:d,phase:t*1.37,speed:UP+t*.11})}function GP(e,t){const n=new Tt;n.name="banners",e.add(n);const i=OP(t),s={n:0,posts:0,want:i,sway:jf};n.userData.bannerCount=0,n.userData.postCount=0,n.userData.sizes={t:Ii.t,h:Ii.h,w:Ii.w,postH:Ii.postH,postR:Ii.postR,armL:Ii.armL,hangY:Ii.hangY,bannerY:Ii.bannerY,plazaR:Ii.plazaR,sway:Ii.sway,nFine:Ii.nFine,nCoarse:Ii.nCoarse,segs:t?6:8};const r=[kP()];if(i>1){const f=FP();f&&r.push(f);const x=BP();x&&r.push(x)}const o=r.slice(0,i);if(!o.length)return n.userData.bannerCounts=s,{tick(){}};const a=t?6:8,c={post:new Te(Zf,Zf,po,a),arm:new Me(gh,C0,LP),cloth:new Me(R0,hu,TM)},l=IP(),u=DP(),d=zP(),h=[];for(let f=0;f<o.length;f++)HP(o[f],f,c,l,u,d,n,h);return s.n=h.length,s.posts=h.length,n.userData.bannerCount=s.n,n.userData.postCount=s.posts,n.userData.bannerCounts=s,{tick(f){for(let x=0;x<h.length;x++){const y=h[x];y.hang.rotation.y=Math.sin(f*y.speed+y.phase)*jf}}}}function VP(e){return Ht.find(t=>t.kind===e)??null}function $P(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function WP(){return new wt({color:3812374,roughness:.14,metalness:.42,emissive:13934672,emissiveIntensity:.22,iridescence:.62,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.56,clearcoatRoughness:.18,transparent:!1})}const CM=2.4,I0=.7,PM=1.2,Jf=.85,Qf=.22,Dx=Jf+I0*.5+Qf,XP=90,YP={w:CM,h:I0,d:PM,y:0,octaR:0,octaY:0,anvilCount:0,octaCount:0};function qP(e,t){const n=new Tt;n.name="anvil",e.add(n);const i={...YP};n.userData.sizes=i,n.userData.anvilCount=0,n.userData.octaCount=0;const s=VP("foundry");if(!s||Math.hypot(s.x,s.z)<XP)return;const r=s.x,o=s.z,a=Math.atan2(r,o),c=new mt(new Me(CM,I0,PM),$P());if(c.position.set(r,Jf,o),c.rotation.y=a,c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,n.add(c),i.y=Jf,i.anvilCount=1,n.userData.anvilCount=1,!t){const l=new mt(new Sn(Qf,0),WP());l.position.set(r,Dx,o),l.rotation.y=a,l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,n.add(l),i.octaR=Qf,i.octaY=Dx,i.octaCount=1,n.userData.octaCount=1}}function ZP(){return new wt({color:3812374,roughness:.18,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function KP(){return new wt({color:799552,roughness:.16,metalness:.4,emissive:1729912,emissiveIntensity:.16,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function zx(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Lx=2.4,tp=.06,Nx=2.4,jP=4,Nd=jP+tp*.5,pc=14,JP=8,QP=4;function tI(e){return e?QP:JP}function eI(e,t){const n=new Tt;n.name="mosaic",e.add(n);const i=tI(t),s={n:0,gold:0,cyan:0,want:i,r:pc,y:Nd};n.userData.tileCounts=s,n.userData.sizes={w:Lx,h:tp,d:Nx,y:Nd,r:pc};const r=[],o=[],a=Math.PI*2/i;for(let l=0;l<i;l++){const u=l*a,d={x:Math.cos(u)*pc,y:Nd,z:Math.sin(u)*pc,ry:u};l%2===0?r.push(d):o.push(d)}const c=new Me(Lx,tp,Nx);zx(c,ZP(),r,n),zx(c,KP(),o,n),s.gold=r.length,s.cyan=o.length,s.n=r.length+o.length,n.userData.tileCount=s.n}function nI(e){return Ht.find(t=>t.kind===e)??null}function iI(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function sI(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const Ux=2.8,ep=.28,Ox=.7,mc=ep*.5,gc=8,rI=.72,kx=90,aI=3,oI=1;function cI(e){return e?oI:aI}function lI(e,t){const n=new Tt;n.name="rest",e.add(n);const i=cI(t),s={n:0,want:i,y:mc,r:gc};n.userData.benchCounts=s,n.userData.sizes={w:Ux,h:ep,d:Ox,y:mc,r:gc};const r=nI("terrace");if(!r||Math.hypot(r.x,r.z)<kx)return;const o=r.x,a=r.z,c=[];if(i===1)c.push({x:o,y:mc,z:a,ry:Math.atan2(o,a)});else{const d=Math.atan2(-a,-o)+Math.PI;for(let h=0;h<i;h++){const f=d+(h-(i-1)*.5)*rI,x=o+Math.cos(f)*gc,y=a+Math.sin(f)*gc;Math.hypot(x,y)<kx||c.push({x,y:mc,z:y,ry:Math.atan2(o-x,a-y)})}}const l=new Me(Ux,ep,Ox);sI(l,iI(),c,n),s.n=c.length}function hI(e){return Ht.find(t=>t.kind===e)??null}function uI(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1,side:ge})}function dI(e){return new Ue({color:4114656,transparent:!0,opacity:e,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}const IM=2.2,DM=.86,zM=.18,Fx=1.62,Bx=.38,Hx=.16,Ud=.1,Gx=.22,Vx=.84,fI=90;function pI(e,t,n){return[new gt(.05,0),new gt(e*.48,.04),new gt(e*.86,t*.38),new gt(e,t),new gt(e-n,t),new gt(e*.72,t*.4),new gt(e*.32,n),new gt(.05,n*.65)]}const mI={r:IM,h:DM,wall:zM,discR:0,discY:0,discOp:0,discOpMin:0,discOpMax:0,hail:0,x:0,y:0,z:0,bowlCount:0,discCount:0,segs:0};function gI(e,t){const n=new Tt;n.name="hail",e.add(n);const i={...mI};n.userData.sizes=i,n.userData.bowlCount=0,n.userData.discCount=0,n.userData.hailCount=0;const s=hI("beacon");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<fI)return{tick(){}};const r=s.x,o=s.z,a=t?10:20,c=new mt(new Ao(pI(IM,DM,zM),a),uI());if(c.position.set(r,0,o),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,c.renderOrder=2,n.add(c),i.x=r,i.y=0,i.z=o,i.bowlCount=1,i.segs=a,n.userData.bowlCount=1,n.userData.hailCount=1,t)return{tick(){}};const l=new Ri(Fx,a);l.rotateX(-Math.PI/2);const u=dI(Hx),d=new mt(l,u);d.position.set(r,Bx,o),d.castShadow=!1,d.receiveShadow=!1,d.frustumCulled=!0,d.renderOrder=1,n.add(d),i.discR=Fx,i.discY=Bx,i.discOp=Hx,i.discOpMin=Ud,i.discOpMax=Gx,i.hail=Vx,i.discCount=1,n.userData.discCount=1,n.userData.breathing=!0;const h=Gx-Ud;return{tick(f){const x=(Math.sin(f*Vx)+1)*.5;u.opacity=Ud+x*h}}}function $x(e){return Ht.find(t=>t.kind===e)??null}function xI(){return new wt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function _I(){return new wt({color:3812374,roughness:.18,metalness:.46,emissive:15254890,emissiveIntensity:.2,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function Wx(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="XYZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,Math.PI/2),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Xx=4.2,Yx=.18,qx=2.1,Od=90,yI=3,vI=1;function MI(e){return e?vI:yI}function wI(e){return{n:0,cyan:0,gold:0,want:e}}function SI(e,t){const n=new Tt;n.name="arches",e.add(n);const i=MI(t),s=wI(i);n.userData.archCounts=s,n.userData.sizes={r:Xx,tube:Yx,y:qx,rz:Math.PI/2};const r=$x("canal"),o=$x("market");if(!r||!o||Math.hypot(r.x,r.z)<Od||Math.hypot(o.x,o.z)<Od)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,u=Math.min(.28,r.radius*.62/l),d=Math.min(.28,o.radius*.62/l),h=r.x+a*u,f=r.z+c*u,x=o.x-a*d,y=o.z-c*d,g=x-h,p=y-f,w=Math.atan2(g,p),S=[],m=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=h+g*E,P=f+p*E;if(Math.hypot(C,P)<Od)continue;const T={x:C,y:qx,z:P,ry:w};_%2===0?S.push(T):m.push(T)}const M=t?6:8,v=t?12:20,A=new mn(Xx,Yx,M,v,Math.PI);Wx(A,xI(),S,n),Wx(A,_I(),m,n),s.n=S.length+m.length,s.cyan=S.length,s.gold=m.length}function bI(e){return Ht.find(t=>t.kind===e)??null}function EI(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function TI(e){return new Ue({color:13934672,transparent:!0,opacity:e,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}const uu=7.2,np=.38,Zx=uu*.5,Kx=.44,jx=.08,Jx=uu,Qx=.2,kd=.12,t_=.28,e_=.78,AI=90,RI={h:uu,r:np,y:0,ringR:0,ringTube:0,ringY:0,ringOp:0,ringOpMin:0,ringOpMax:0,glow:0,x:0,z:0,stackCount:0,ringCount:0,segs:0};function CI(e,t){const n=new Tt;n.name="chimney",e.add(n);const i={...RI};n.userData.sizes=i,n.userData.stackCount=0,n.userData.ringCount=0,n.userData.chimneyCount=0;const s=bI("foundry");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<AI)return{tick(){}};const r=s.x,o=s.z,a=t?8:12,c=new mt(new Te(np,np,uu,a),EI());if(c.position.set(r,Zx,o),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,c.renderOrder=2,n.add(c),i.x=r,i.y=Zx,i.z=o,i.stackCount=1,i.segs=a,n.userData.stackCount=1,n.userData.chimneyCount=1,t)return{tick(){}};const l=6,u=new mn(Kx,jx,l,a),d=TI(Qx),h=new mt(u,d);h.rotation.x=Math.PI/2,h.position.set(r,Jx,o),h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!0,h.renderOrder=3,n.add(h),i.ringR=Kx,i.ringTube=jx,i.ringY=Jx,i.ringOp=Qx,i.ringOpMin=kd,i.ringOpMax=t_,i.glow=e_,i.ringCount=1,n.userData.ringCount=1,n.userData.breathing=!0;const f=t_-kd;return{tick(x){const y=(Math.sin(x*e_)+1)*.5;d.opacity=kd+y*f}}}function PI(e){return Ht.find(t=>t.kind===e)??null}function II(e){return new wt({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:e,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function DI(e){return new Ue({color:13934672,transparent:!0,opacity:e,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}function n_(e,t,n,i,s){const r=Math.cos(s),o=Math.sin(s);return{x:e+n*r+i*o,z:t-n*o+i*r}}const D0=1.2,du=2.4,z0=.12,Fd=du*.5,i_=1.7,Bd=-5.4,zI=D0*.86,LI=du*.86,NI=z0*.5+.02,UI=90,OI=4,LM=2,kI=[.18,.13,.09,.05],FI=[.16,.11,.07,.04],BI={w:D0,h:du,d:z0,y:0,pitch:0,rowZ:0,tabletCount:0,glowCount:0};function HI(e){return e?LM:OI}function GI(e,t){const n=new Tt;n.name="tablets",e.add(n);const i={...BI};n.userData.sizes=i,n.userData.tabletCount=0,n.userData.glowCount=0;const s=PI("archive");if(!s||Math.hypot(s.x,s.z)<UI)return;const r=Math.atan2(s.x,s.z),o=s.x,a=s.z,c=HI(t),l=new Me(D0,du,z0),u=new cs(zI,LI);let d=0;for(let h=0;h<c;h++){const f=(h-(c-1)*.5)*i_,x=n_(o,a,f,Bd,r),y=c===LM?h*2:h,g=new mt(l,II(kI[y]??.05));g.position.set(x.x,Fd,x.z),g.rotation.y=r,g.castShadow=!1,g.receiveShadow=!0,g.frustumCulled=!0,g.renderOrder=2,n.add(g);const p=n_(o,a,f,Bd-NI,r),w=new mt(u,DI(FI[y]??.04));w.position.set(p.x,Fd,p.z),w.rotation.y=r,w.castShadow=!1,w.receiveShadow=!1,w.frustumCulled=!0,w.renderOrder=3,n.add(w),d+=1}i.y=Fd,i.pitch=i_,i.rowZ=Bd,i.tabletCount=c,i.glowCount=d,n.userData.tabletCount=c,n.userData.glowCount=d}function VI(e){return Ht.find(t=>t.kind===e)??null}function $I(e){return new Ue({color:10121960,transparent:!0,opacity:e,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}const NM=.08,L0=5.2,N0=3.4,UM=14,ip=UM-L0*.5,OM=.28,kM=N0+OM,FM=.14,sp=.08,BM=.2,HM=.73,GM=2,VM=1,WI=90,$M=Math.PI/2,fi={t:NM,h:L0,w:N0,hangY:UM,veilY:ip,slit:OM,pitch:kM,op:FM,opMin:sp,opMax:BM,breath:HM,nFine:GM,nCoarse:VM,faceYaw:$M};function XI(e){return e?VM:GM}function YI(e,t){const n=new Tt;n.name="veil",e.add(n);const i=XI(t),s=BM-sp;n.userData.veilCount=0,n.userData.sizes={t:fi.t,h:fi.h,w:fi.w,hangY:fi.hangY,veilY:fi.veilY,slit:fi.slit,pitch:fi.pitch,op:fi.op,opMin:fi.opMin,opMax:fi.opMax,breath:fi.breath,nFine:fi.nFine,nCoarse:fi.nCoarse,faceYaw:fi.faceYaw,n:0,want:i,x:0,y:0,z:0};const r=VI("gate");if(!r)return{tick(){}};if(Math.hypot(r.x,r.z)<WI)return{tick(){}};const o=Math.atan2(r.x,r.z),a=Math.cos(o),c=Math.sin(o),l=o+$M,u=new Me(NM,L0,N0),d=$I(FM),h=new _e(u,d,i);h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!0,h.renderOrder=3;const f=new re;f.rotation.order="YXZ";for(let x=0;x<i;x++){const y=i===1?0:(x-(i-1)*.5)*kM;f.position.set(r.x+y*a,ip,r.z-y*c),f.rotation.set(0,l,0),f.scale.set(1,1,1),f.updateMatrix(),h.setMatrixAt(x,f.matrix)}return h.instanceMatrix.needsUpdate=!0,n.add(h),n.userData.veilCount=i,n.userData.sizes.n=i,n.userData.sizes.x=r.x,n.userData.sizes.y=ip,n.userData.sizes.z=r.z,{tick(x){const y=(Math.sin(x*HM)+1)*.5;d.opacity=sp+y*s}}}function ka(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function qI(e){return Ht.find(t=>t.kind===e)??null}function ZI(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function KI(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,o.rz),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const Yc=.08,Qr=.22,qc=.9,rp=18,jI=10,s_=90,JI=6,QI=3,r_=.38;function t4(e){return e?QI:JI}function e4(e){return{n:0,want:e,r:Yc,hMin:Qr,hMax:qc,ring:rp}}function n4(e,t){const n=new Tt;n.name="roots",e.add(n);const i=t4(t),s=e4(i);n.userData.rootCounts=s,n.userData.rootCount=0,n.userData.sizes={r:Yc,hMin:Qr,hMax:qc,ring:rp,y:Qr*.5};const r=qI("grove");if(!r||Math.hypot(r.x,r.z)<s_)return;const o=qc-Qr,a=[];for(let u=0;u<i;u++){const d=(u+.13)/i*Math.PI*2+ka(u,3)*.4,h=rp+(ka(u,5)-.5)*jI,f=i===1?(Qr+qc)*.5:Qr+u/(i-1)*o,x=r.x+Math.cos(d)*h,y=r.z+Math.sin(d)*h;Math.hypot(x,y)<s_||a.push({x,y:f*.5,z:y,sx:1,sy:f,sz:1,rx:(ka(u,11)-.5)*r_,ry:d+ka(u,13)*.7,rz:(ka(u,17)-.5)*r_})}const c=t?6:8,l=new Te(Yc,Yc,1,c);KI(l,ZI(),a,n),s.n=a.length,n.userData.rootCount=a.length}function i4(){const e=Ki.find(s=>s.id==="veyra"),t=e?.x??30,n=e?.z??-40,i=Math.hypot(t,n)||1;return{vx:t/i,vz:n/i}}function s4(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1,side:ge})}function r4(e){return new wt({color:3844288,roughness:.18,metalness:.2,emissive:1729912,emissiveIntensity:.22,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!0,opacity:e,depthWrite:!1,side:ge})}const a_=1.6,o_=.68,c_=.14,l_=1.04,h_=.28,u_=.34,a4=4,Hd=a4,Gd=9.6;function o4(e,t,n){return[new gt(.04,0),new gt(e*.58,.02),new gt(e*.9,t*.26),new gt(e,t),new gt(e-n*.55,t*.96),new gt(e*.78,t*.3),new gt(e*.4,n*.72),new gt(.04,n*.48)]}function c4(e,t){const n=new Tt;n.name="font",e.add(n);const i=i4(),s=i.vx*Gd,r=i.vz*Gd,o=t?8:16,a=new mt(new Ao(o4(a_,o_,c_),o),s4());a.position.set(s,Hd,r),a.castShadow=!1,a.receiveShadow=!0,a.frustumCulled=!0,a.renderOrder=2,n.add(a);const c={r:a_,h:o_,wall:c_,discR:0,discY:0,discOp:0,y:Hd,apronR:Gd,x:s,z:r,bowlCount:1,discCount:0,segs:o};if(n.userData.sizes=c,n.userData.bowlCount=1,n.userData.discCount=0,n.userData.fontCount=1,t)return;const l=new Ri(l_,o);l.rotateX(-Math.PI/2);const u=new mt(l,r4(u_));u.position.set(s,Hd+h_,r),u.castShadow=!1,u.receiveShadow=!1,u.frustumCulled=!0,u.renderOrder=1,n.add(u),c.discR=l_,c.discY=h_,c.discOp=u_,c.discCount=1,n.userData.discCount=1}function qr(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function l4(e){return Ht.find(t=>t.kind===e)??null}function h4(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function d_(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(o.rx,o.ry,o.rz),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,i.add(s)}const Zc=.07,$a=2.4,Kc=3.8,ap=.16,jc=.42,Wa=4,Jc=7,op=22,u4=8,f_=90,d4=4,f4=2,p4=.28,m4=.22;function g4(e){return e?f4:d4}function x4(e){return{n:0,limbs:0,cylinders:0,cones:0,want:e,r:Zc,lMin:$a,lMax:Kc,coneR:ap,coneH:jc,yMin:Wa,yMax:Jc,ring:op}}function _4(e,t,n){const i=Math.acos(Math.max(-1,Math.min(1,t))),s=Math.atan2(e,n);return{rx:i,ry:s}}function y4(e,t){const n=new Tt;n.name="boughs",e.add(n);const i=g4(t),s=x4(i);n.userData.boughCounts=s,n.userData.boughCount=0,n.userData.sizes={r:Zc,lMin:$a,lMax:Kc,coneR:ap,coneH:jc,yMin:Wa,yMax:Jc,ring:op};const r=l4("grove");if(!r||Math.hypot(r.x,r.z)<f_)return;const o=Jc-Wa,a=Kc-$a,c=[],l=[];for(let h=0;h<i;h++){const f=(h+.17)/i*Math.PI*2+qr(h,3)*.35,x=op+(qr(h,5)-.5)*u4,y=i===1?(Wa+Jc)*.5:Wa+h/(i-1)*o,g=r.x+Math.cos(f)*x,p=r.z+Math.sin(f)*x;if(Math.hypot(g,p)<f_)continue;const w=i===1?($a+Kc)*.5:$a+h/(i-1)*a,S=p4+qr(h,11)*m4,m=Math.cos(S),M=Math.cos(f)*m,v=-Math.sin(S),A=Math.sin(f)*m,{rx:_,ry:E}=_4(M,v,A),C=w*.5,P=g+M*C,T=y+v*C,O=p+A*C;c.push({x:g,y,z:p,sx:1,sy:w,sz:1,rx:_,ry:E+qr(h,13)*.12,rz:(qr(h,17)-.5)*.16}),l.push({x:P,y:T-jc*.28,z:O,sx:1,sy:1,sz:1,rx:Math.PI,ry:f+qr(h,19)*.4,rz:0})}const u=t?6:8,d=h4();d_(new Te(Zc*.55,Zc,1,u),d,c,n),d_(new Jh(ap,jc,u),d,l,n),s.n=c.length,s.limbs=c.length,s.cylinders=c.length,s.cones=l.length,n.userData.boughCount=c.length}function v4(){const e=Ki.find(s=>s.id==="veyra"),t=e?.x??30,n=e?.z??-40,i=Math.hypot(t,n)||1;return{vx:t/i,vz:n/i}}function p_(){return new wt({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function M4(){return new wt({color:3812374,roughness:.18,metalness:.52,emissive:6966306,emissiveIntensity:.18,iridescence:.48,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.46,clearcoatRoughness:.22,transparent:!1,side:ge})}const WM=.55,cp=1.8,to=4.4,lp=.08,Qc=.78,xh=.07,w4=.1,XM=to-xh,YM=4,hp=16.8,qM=.03,ZM=.86,Gi={r:WM,h:cp,postH:to,postR:lp,armL:Qc,armT:xh,hangY:XM,y:YM,apronR:hp,sway:qM,swaySpeed:ZM};function S4(e,t){return[new gt(.05,t),new gt(e*.16,t*.97),new gt(e*.38,t*.82),new gt(e*.58,t*.58),new gt(e*.78,t*.32),new gt(e*.94,t*.1),new gt(e,0),new gt(e*.86,.03),new gt(e*.62,t*.28),new gt(e*.34,t*.58),new gt(e*.14,t*.88),new gt(.04,t*.96)]}function b4(e,t){const n=new Tt;n.name="bells",e.add(n);const i=v4(),s=-i.vz*hp,r=i.vx*hp,o=Math.atan2(s,r),a=t?8:16,c={r:Gi.r,h:Gi.h,postH:Gi.postH,postR:Gi.postR,armL:Gi.armL,armT:Gi.armT,hangY:Gi.hangY,y:Gi.y,apronR:Gi.apronR,sway:t?0:Gi.sway,swaySpeed:t?0:Gi.swaySpeed,x:s,z:r,yaw:o,segs:a,bellCount:1,postCount:1};n.userData.sizes=c,n.userData.bellCount=1,n.userData.postCount=1,n.userData.breathing=!t;const l=new Tt;l.position.set(s,YM,r),l.rotation.y=o,n.add(l);const u=new mt(new Te(lp,lp,to,a),p_());u.position.set(0,to*.5,0),u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,l.add(u);const d=new mt(new Me(Qc,xh,w4),p_());d.position.set(Qc*.5,to-xh*.5,0),d.castShadow=!1,d.receiveShadow=!0,d.frustumCulled=!0,d.renderOrder=2,l.add(d);const h=new Tt;h.position.set(Qc,XM,0),l.add(h);const f=new mt(new Ao(S4(WM,cp),a),M4());return f.position.set(0,-cp,0),f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!0,f.renderOrder=2,h.add(f),t?{tick(){}}:{tick(x){h.rotation.z=Math.sin(x*ZM)*qM}}}function Vd(e){return Ht.find(t=>t.kind===e)??null}function E4(){return new wt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function T4(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const _h=5.4,tl=.22,m_=_h*.5,$d=1.8,xc=90,A4=4,R4=2,g_=[["wild","bridge",3],["bridge","gate",4]];function C4(e){return e?R4:A4}function P4(e){return{n:0,pairs:0,want:e,h:_h,r:tl}}function I4(e,t){const n=new Tt;n.name="pylons",e.add(n);const i=C4(t),s=P4(i);n.userData.pylonCounts=s,n.userData.pylonCount=0,n.userData.sizes={h:_h,r:tl,y:m_,side:$d};const r=Vd("bridge");if(!r||Math.hypot(r.x,r.z)<xc)return;const o=[];for(let l=0;l<g_.length;l++){const u=g_[l],d=u[2];if(t&&d%2===1)continue;const h=Vd(u[0]),f=Vd(u[1]);if(!h||!f||Math.hypot(h.x,h.z)<xc||Math.hypot(f.x,f.z)<xc)continue;const x=f.x-h.x,y=f.z-h.z,g=Math.hypot(x,y)||1,p=Math.min(.22,h.radius*.72/g),w=Math.min(.22,f.radius*.72/g),S=h.x+x*p,m=h.z+y*p,M=f.x-x*w,v=f.z-y*w,A=M-S,_=v-m,E=Math.hypot(A,_)||1,C=-_/E,P=A/E,T=Math.atan2(A,_),O=u[0]==="bridge",k=O?S:M,U=O?m:v;for(const $ of[1,-1]){const W=k+C*$d*$,Y=U+P*$d*$;Math.hypot(W,Y)<xc||o.push({x:W,y:m_,z:Y,ry:T})}}const a=t?6:8,c=new Te(tl,tl,_h,a);T4(c,E4(),o,n),s.n=o.length,s.pairs=o.length>>1,n.userData.pylonCount=o.length}function D4(e){return Ht.find(t=>t.kind===e)??null}function z4(){return new wt({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}function L4(e){return new Ue({color:13934672,transparent:!0,opacity:e,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}const yh=2.4,mo=.16,Wd=mo,x_=yh-mo-.16,__=.08,y_=.14,Xd=.08,v_=.22,M_=.72,N4=90,U4={r:yh,tube:mo,y:0,ringR:0,ringTube:0,ringY:0,discR:0,discY:0,discOp:0,discOpMin:0,discOpMax:0,glow:0,x:0,z:0,ringCount:0,discCount:0,segs:0};function O4(e,t){const n=new Tt;n.name="forge",e.add(n);const i={...U4};n.userData.sizes=i,n.userData.ringCount=0,n.userData.discCount=0,n.userData.forgeCount=0;const s=D4("foundry");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<N4)return{tick(){}};const r=s.x,o=s.z,a=t?10:16,c=t?5:8,l=new mt(new mn(yh,mo,c,a),z4());if(l.rotation.x=Math.PI/2,l.position.set(r,Wd,o),l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,n.add(l),i.x=r,i.y=Wd,i.z=o,i.ringR=yh,i.ringTube=mo,i.ringY=Wd,i.segs=a,i.ringCount=1,n.userData.ringCount=1,n.userData.forgeCount=1,t)return{tick(){}};const u=new Ri(x_,a);u.rotateX(-Math.PI/2);const d=L4(y_),h=new mt(u,d);h.position.set(r,__,o),h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!0,h.renderOrder=1,n.add(h),i.discR=x_,i.discY=__,i.discOp=y_,i.discOpMin=Xd,i.discOpMax=v_,i.glow=M_,i.discCount=1,n.userData.discCount=1,n.userData.breathing=!0;const f=v_-Xd;return{tick(x){const y=(Math.sin(x*M_)+1)*.5;d.opacity=Xd+y*f}}}function Yd(e){return Ht.find(t=>t.kind===e)??null}function k4(){return new wt({color:3812374,roughness:.18,metalness:.52,emissive:13934672,emissiveIntensity:.22,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}function F4(){return new wt({color:2892306,roughness:.22,metalness:.46,emissive:1729912,emissiveIntensity:.18,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function B4(){return new wt({color:3812374,roughness:.16,metalness:.5,emissive:13934672,emissiveIntensity:.2,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.5,clearcoatRoughness:.22,transparent:!1})}const U0=2.2,el=.08,nl=1.4,up=.55,dp=.08,fp=U0*.5,qd=.07,Zd=nl,Kd=16,H4=90,G4={beamL:U0,beamT:el,y:0,panR:up,panH:dp,panOff:fp,postR:0,postH:0,offset:0,scaleCount:0,panCount:0,beamCount:0,postCount:0,x:0,z:0};function V4(e,t){const n=new Tt;n.name="scales",e.add(n);const i={...G4};n.userData.sizes=i,n.userData.scaleCount=0,n.userData.panCount=0;const s=Yd("market");if(!s||Math.hypot(s.x,s.z)<H4)return;const r=Yd("canal"),o=Yd("foundry"),a=(r?.x??s.x-1)-s.x,c=(r?.z??s.z)-s.z,l=Math.hypot(a,c)||1,u=a/l,d=c/l,h=s.x-u*Kd,f=s.z-d*Kd,x=(o?.x??s.x+1)-s.x,y=(o?.z??s.z)-s.z,g=x-a,p=y-c,w=Math.hypot(g,p)||1,S=Math.atan2(-p/w,g/w),m=k4(),M=t?8:12,v=new Tt;v.position.set(h,0,f),v.rotation.y=S,n.add(v);const A=new mt(new Te(qd*.85,qd,Zd,M),m);A.position.set(0,Zd*.5,0),A.castShadow=!1,A.receiveShadow=!0,A.frustumCulled=!0,v.add(A);const _=new mt(new Me(U0,el,el),m);_.position.set(0,nl,0),_.castShadow=!1,_.receiveShadow=!0,_.frustumCulled=!0,v.add(_);const E=nl+el*.5+dp*.5,C=new Te(up,up,dp,M),P=new mt(C,F4());P.position.set(-fp,E,0),P.castShadow=!1,P.receiveShadow=!0,P.frustumCulled=!0,v.add(P);let T=1;if(!t){const O=new mt(C,B4());O.position.set(fp,E,0),O.castShadow=!1,O.receiveShadow=!0,O.frustumCulled=!0,v.add(O),T=2}i.y=nl,i.postR=qd,i.postH=Zd,i.offset=Kd,i.scaleCount=1,i.panCount=T,i.beamCount=1,i.postCount=1,i.x=h,i.z=f,n.userData.scaleCount=1,n.userData.panCount=T,n.userData.beamCount=1}function $4(e){return Ht.find(t=>t.kind===e)??null}function W4(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function X4(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const jd=1.1,pp=.08,Jd=pp*.5,_c=12,Y4=Math.PI*1.35,w_=90,q4=6,Z4=3;function K4(e){return e?Z4:q4}function j4(e,t){const n=new Tt;n.name="pads",e.add(n);const i=K4(t),s={n:0,want:i,r:_c,y:Jd};n.userData.padCounts=s,n.userData.sizes={r:jd,h:pp,y:Jd,ring:_c};const r=$4("ring");if(!r||Math.hypot(r.x,r.z)<w_)return;const o=r.x,a=r.z,l=Math.atan2(-a,-o)+Math.PI,u=i<=1?0:Y4/(i-1),d=[];for(let x=0;x<i;x++){const y=l+(x-(i-1)*.5)*u,g=o+Math.cos(y)*_c,p=a+Math.sin(y)*_c;Math.hypot(g,p)<w_||d.push({x:g,y:Jd,z:p,ry:Math.atan2(o-g,a-p)})}const h=t?8:12,f=new Te(jd,jd,pp,h);X4(f,W4(),d,n),s.n=d.length}function S_(e){return Ht.find(t=>t.kind===e)??null}function J4(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}const go=2.8,fu=.18,b_=fu*.5,KM=2.4,Q4=.16,Qd=KM+Q4+go+1.04,E_=go-.08,T_=.06,A_=fu,R_=90,tD={r:go,h:fu,y:0,offset:0,forgeR:KM,lipR:0,lipTube:0,lipY:0,x:0,z:0,plateCount:0,lipCount:0,segs:0};function eD(e,t){const n=new Tt;n.name="hearth",e.add(n);const i={...tD};n.userData.sizes=i,n.userData.plateCount=0,n.userData.lipCount=0,n.userData.hearthCount=0;const s=S_("foundry");if(!s||Math.hypot(s.x,s.z)<R_)return;const r=S_("market"),o=(r?.x??0)-s.x,a=(r?.z??0)-s.z,c=Math.hypot(o,a)||1,l=s.x+o/c*Qd,u=s.z+a/c*Qd;if(Math.hypot(l,u)<R_)return;const d=t?10:16,h=J4(),f=new mt(new Te(go,go,fu,d),h);if(f.position.set(l,b_,u),f.castShadow=!1,f.receiveShadow=!0,f.frustumCulled=!0,f.renderOrder=2,n.add(f),i.x=l,i.y=b_,i.z=u,i.offset=Qd,i.segs=d,i.plateCount=1,n.userData.plateCount=1,n.userData.hearthCount=1,t)return;const x=new mt(new mn(E_,T_,6,d),h);x.rotation.x=Math.PI/2,x.position.set(l,A_,u),x.castShadow=!1,x.receiveShadow=!0,x.frustumCulled=!0,x.renderOrder=2,n.add(x),i.lipR=E_,i.lipTube=T_,i.lipY=A_,i.lipCount=1,n.userData.lipCount=1}function nD(e){return Ht.find(t=>t.kind===e)??null}function iD(){return new wt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const jM=4.8,JM=.22,QM=.55,C_=4.6,sD=90,tw=1,ew=1,rD={w:jM,h:JM,d:QM,y:0,nFine:tw,nCoarse:ew,n:0,want:1,x:0,z:0,yaw:0,lintelCount:0};function aD(e,t){const n=new Tt;n.name="lintel",e.add(n);const s={...rD,want:t?ew:tw};n.userData.sizes=s,n.userData.lintelCount=0;const r=nD("gate");if(!r||Math.hypot(r.x,r.z)<sD)return;const o=Math.atan2(r.x,r.z),a=new mt(new Me(jM,JM,QM),iD());a.position.set(r.x,C_,r.z),a.rotation.y=o,a.castShadow=!1,a.receiveShadow=!0,a.frustumCulled=!0,a.renderOrder=2,n.add(a),s.y=C_,s.n=1,s.x=r.x,s.z=r.z,s.yaw=o,s.lintelCount=1,n.userData.lintelCount=1}function oD(e){return Ht.find(t=>t.kind===e)??null}function cD(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function lD(){return new wt({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:.16,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function hD(e,t,n,i,s){const r=Math.cos(s),o=Math.sin(s);return{x:e+n*r+i*o,z:t-n*o+i*r}}const nw=2.4,O0=.12,iw=1.1,mp=.9,P_=.7,gp=.04,I_=1,D_=mp+O0*.5+gp*.5,z_=-2.6,uD=90,dD={w:nw,h:O0,d:iw,y:0,tabletW:0,tabletH:0,tabletD:0,tabletY:0,aisleZ:0,ledgerCount:0,tabletCount:0};function fD(e,t){const n=new Tt;n.name="ledger",e.add(n);const i={...dD};n.userData.sizes=i,n.userData.ledgerCount=0,n.userData.tabletCount=0;const s=oD("archive");if(!s||Math.hypot(s.x,s.z)<uD)return;const r=s.x,o=s.z,a=Math.atan2(r,o),c=hD(r,o,0,z_,a),l=new mt(new Me(nw,O0,iw),cD());if(l.position.set(c.x,mp,c.z),l.rotation.y=a,l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,n.add(l),i.y=mp,i.aisleZ=z_,i.ledgerCount=1,n.userData.ledgerCount=1,!t){const u=new mt(new Me(P_,gp,I_),lD());u.position.set(c.x,D_,c.z),u.rotation.y=a,u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,n.add(u),i.tabletW=P_,i.tabletH=gp,i.tabletD=I_,i.tabletY=D_,i.tabletCount=1,n.userData.tabletCount=1}}function L_(e){return Ht.find(t=>t.kind===e)??null}function pD(){return new wt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const k0=2.8,xo=.1,N_=k0*.5,F0=3.2,sw=.12,rw=.18,U_=1.6,xp=F0*.5-xo,aw=xp*2,mD=aw-xo*2,gD=90,Fa=2,xD={postH:k0,postR:xo,postY:0,barW:F0,barH:sw,barD:rw,barY:0,span:aw,open:mD,nPosts:0,postCount:0,barCount:0,x:0,z:0,yaw:0,segs:0};function _D(e,t){const n=new Tt;n.name="sluice",e.add(n);const i={...xD};n.userData.sizes=i,n.userData.postCount=0,n.userData.barCount=0,n.userData.sluiceCount=0;const s=L_("canal");if(!s||Math.hypot(s.x,s.z)<gD)return;const r=L_("market"),o=(r?.x??0)-s.x,a=(r?.z??0)-s.z,c=Math.atan2(o,a),l=Math.cos(c),u=Math.sin(c),d=t?6:8,h=pD(),f=new re;f.rotation.order="YXZ";const x=new Te(xo,xo,k0,d),y=new _e(x,h,Fa);y.castShadow=!1,y.receiveShadow=!0,y.frustumCulled=!0,y.renderOrder=2;for(let p=0;p<Fa;p++){const w=p===0?-1:1;f.position.set(s.x+w*xp*l,N_,s.z-w*xp*u),f.rotation.set(0,c,0),f.scale.set(1,1,1),f.updateMatrix(),y.setMatrixAt(p,f.matrix)}if(y.instanceMatrix.needsUpdate=!0,n.add(y),i.postY=N_,i.nPosts=Fa,i.postCount=Fa,i.x=s.x,i.z=s.z,i.yaw=c,i.segs=d,n.userData.postCount=Fa,n.userData.sluiceCount=1,t)return;const g=new mt(new Me(F0,sw,rw),h);g.position.set(s.x,U_,s.z),g.rotation.y=c,g.castShadow=!1,g.receiveShadow=!0,g.frustumCulled=!0,g.renderOrder=2,n.add(g),i.barY=U_,i.barCount=1,n.userData.barCount=1}function yD(){const e=Ki.find(s=>s.id==="nesh"),t=e?.x??-24,n=e?.z??128,i=Math.hypot(t,n)||1;return{nx:t/i,nz:n/i}}function vD(){return new wt({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1})}const O_=2.9,k_=.08,tf=.12,ef=Math.min(84,Math.max(78,wn.radius+30));function MD(e,t){const n=new Tt;n.name="rims",e.add(n);const i=yD(),s=i.nx*ef,r=i.nz*ef,o=t?12:22,a=t?5:8,c=new mt(new mn(O_,k_,a,o),vD());c.rotation.x=Math.PI/2,c.position.set(s,tf,r),c.castShadow=!1,c.receiveShadow=!0,c.frustumCulled=!0,c.renderOrder=2,n.add(c),n.userData.rimCount=1,n.userData.sizes={x:s,y:tf,z:r,r:O_,tube:k_,rimY:tf,apronR:ef,segs:o,tubeSeg:a}}function wD(e){return Ht.find(t=>t.kind===e)??null}function SD(){return new wt({color:1314850,roughness:.2,metalness:.38,emissive:3286102,emissiveIntensity:.16,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}function bD(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const vh=2.2,il=.12,_p=vh*.5,sl=14,ED=Math.PI*1.35,F_=90,TD=4,AD=2;function RD(e){return e?AD:TD}function CD(e){return{n:0,want:e,h:vh,r:il,y:_p,ring:sl}}function PD(e,t){const n=new Tt;n.name="posts",e.add(n);const i=RD(t),s=CD(i);n.userData.postCounts=s,n.userData.postCount=0,n.userData.sizes={h:vh,r:il,y:_p,ring:sl};const r=wD("terrace");if(!r||Math.hypot(r.x,r.z)<F_)return;const o=r.x,a=r.z,l=Math.atan2(-a,-o)+Math.PI,u=i<=1?0:ED/(i-1),d=[];for(let x=0;x<i;x++){const y=l+(x-(i-1)*.5)*u,g=o+Math.cos(y)*sl,p=a+Math.sin(y)*sl;Math.hypot(g,p)<F_||d.push({x:g,y:_p,z:p,ry:Math.atan2(o-g,a-p)})}const h=t?6:8,f=new Te(il,il,vh,h);bD(f,SD(),d,n),s.n=d.length,n.userData.postCount=d.length}function ID(){const e=Ki.find(s=>s.id==="nesh"),t=e?.x??-24,n=e?.z??128,i=Math.hypot(t,n)||1;return{nx:t/i,nz:n/i}}function DD(){return new wt({color:3812374,roughness:.22,metalness:.48,emissive:6966306,emissiveIntensity:.16,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.4,clearcoatRoughness:.28,transparent:!1,side:ge})}const B_=.55,H_=1.6,nf=1.1,sf=Math.min(84,Math.max(78,wn.radius+30));function zD(e,t){const n=new Tt;n.name="prism",e.add(n);const i=ID(),s=i.nx*sf,r=i.nz*sf,o=t?8:16,a=new mt(new Jh(B_,H_,o),DD());a.position.set(s,nf,r),a.castShadow=!1,a.receiveShadow=!0,a.frustumCulled=!0,a.renderOrder=2,n.add(a),n.userData.prismCount=1,n.userData.sizes={x:s,y:nf,z:r,r:B_,h:H_,prismY:nf,apronR:sf,segs:o}}function G_(e){return Ht.find(t=>t.kind===e)??null}function LD(){return new wt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const ow=4.2,cw=.16,lw=.55,V_=3.2,ND=90,hw=1,uw=1,UD={w:ow,h:cw,d:lw,y:0,nFine:hw,nCoarse:uw,n:0,want:1,x:0,z:0,yaw:0,lipCount:0};function OD(e,t){const n=new Tt;n.name="lip",e.add(n);const s={...UD,want:t?uw:hw};n.userData.sizes=s,n.userData.lipCount=0;const r=G_("canal");if(!r||Math.hypot(r.x,r.z)<ND)return;const o=G_("market"),a=(o?.x??0)-r.x,c=(o?.z??0)-r.z,l=Math.atan2(a,c),u=new mt(new Me(ow,cw,lw),LD());u.position.set(r.x,V_,r.z),u.rotation.y=l,u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,n.add(u),s.y=V_,s.n=1,s.x=r.x,s.z=r.z,s.yaw=l,s.lipCount=1,n.userData.lipCount=1}function kD(e){return Ht.find(t=>t.kind===e)??null}function FD(){return new wt({color:3812374,roughness:.2,metalness:.52,emissive:6966306,emissiveIntensity:.16,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function BD(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Mh=2.6,rl=.07,yp=Mh*.5,al=17,HD=Math.PI*1.35,$_=90,GD=6,VD=3;function $D(e){return e?VD:GD}function WD(e){return{n:0,want:e,h:Mh,r:rl,y:yp,ring:al}}function XD(e,t){const n=new Tt;n.name="staves",e.add(n);const i=$D(t),s=WD(i);n.userData.staveCounts=s,n.userData.staveCount=0,n.userData.sizes={h:Mh,r:rl,y:yp,ring:al};const r=kD("ring");if(!r||Math.hypot(r.x,r.z)<$_)return;const o=r.x,a=r.z,l=Math.atan2(-a,-o)+Math.PI,u=i<=1?0:HD/(i-1),d=[];for(let x=0;x<i;x++){const y=l+(x-(i-1)*.5)*u,g=o+Math.cos(y)*al,p=a+Math.sin(y)*al;Math.hypot(g,p)<$_||d.push({x:g,y:yp,z:p,ry:Math.atan2(o-g,a-p)})}const h=t?6:8,f=new Te(rl,rl,Mh,h);BD(f,FD(),d,n),s.n=d.length,n.userData.staveCount=d.length}function W_(e){return Ht.find(t=>t.kind===e)??null}function YD(){return new wt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}const dw=3.6,fw=.18,B0=1.1,X_=.22,qD=.18,ZD=1.04,rf=qD*.5+B0*.5+ZD,Y_=90,pw=1,mw=1,KD={w:dw,h:fw,d:B0,y:0,offset:0,nFine:pw,nCoarse:mw,n:0,want:1,x:0,z:0,yaw:0,troughCount:0};function jD(e,t){const n=new Tt;n.name="trough",e.add(n);const s={...KD,want:t?mw:pw};n.userData.sizes=s,n.userData.troughCount=0;const r=W_("canal");if(!r||Math.hypot(r.x,r.z)<Y_)return;const o=W_("market"),a=(o?.x??0)-r.x,c=(o?.z??0)-r.z,l=Math.hypot(a,c)||1,u=a/l,d=c/l,h=Math.atan2(a,c),f=r.x-u*rf,x=r.z-d*rf;if(Math.hypot(f,x)<Y_)return;const y=new mt(new Me(dw,fw,B0),YD());y.position.set(f,X_,x),y.rotation.y=h,y.castShadow=!1,y.receiveShadow=!0,y.frustumCulled=!0,y.renderOrder=2,n.add(y),s.y=X_,s.offset=rf,s.n=1,s.x=f,s.z=x,s.yaw=h,s.troughCount=1,n.userData.troughCount=1}function q_(e){return Ht.find(t=>t.kind===e)??null}function JD(e){return new Ue({color:3844288,transparent:!0,opacity:e,blending:pn,depthWrite:!1,depthTest:!0,fog:!0,side:ge,toneMapped:!1})}const vp=2.2,gw=.06,Z_=.47,yc=.18,af=.1,K_=.26,j_=.56,Mp=-16,or=20,J_=90,QD={r:vp,h:gw,y:0,op:0,opMin:0,opMax:0,rest:0,along:Mp,side:or,x:0,z:0,poolCount:0,discCount:0,segs:0};function tz(e,t){const n=new Tt;n.name="pool",e.add(n);const i={...QD};n.userData.sizes=i,n.userData.poolCount=0,n.userData.discCount=0,n.userData.breathing=!1;const s=q_("canal");if(!s)return{tick(){}};if(Math.hypot(s.x,s.z)<J_)return{tick(){}};const r=q_("market"),o=(r?.x??0)-s.x,a=(r?.z??0)-s.z,c=Math.hypot(o,a)||1,l=o/c,u=a/c,d=-u,h=l,f=Math.hypot(s.x+d*or,s.z+h*or),x=Math.hypot(s.x-d*or,s.z-h*or),y=f>=x?1:-1,g=s.x+l*Mp+d*or*y,p=s.z+u*Mp+h*or*y;if(Math.hypot(g,p)<J_)return{tick(){}};const w=t?10:20,S=JD(yc),m=new mt(new Te(vp,vp,gw,w),S);if(m.position.set(g,Z_,p),m.castShadow=!1,m.receiveShadow=!1,m.frustumCulled=!0,m.renderOrder=1,n.add(m),i.x=g,i.y=Z_,i.z=p,i.op=yc,i.opMin=t?yc:af,i.opMax=t?yc:K_,i.rest=t?0:j_,i.poolCount=1,i.discCount=1,i.segs=w,n.userData.poolCount=1,n.userData.discCount=1,n.userData.breathing=!t,t)return{tick(){}};const M=K_-af;return{tick(v){const A=(Math.sin(v*j_)+1)*.5;S.opacity=af+A*M}}}function ez(){const e=Ki.find(s=>s.id==="nesh"),t=e?.x??-24,n=e?.z??128,i=Math.hypot(t,n)||1;return{nx:t/i,nz:n/i}}function nz(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function iz(){return new wt({color:3812374,roughness:.2,metalness:.5,emissive:13934672,emissiveIntensity:.16,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}const wp=.9,H0=.28,Q_=.14,t1=.22,Sp=1.6,e1=.12,n1=H0+Sp*.5,bp=Math.min(116,Math.max(104,wn.radius+58)),sz={r:wp,h:H0,y:0,steleW:0,steleH:0,steleD:0,steleY:0,apronR:bp,x:0,z:0,yaw:0,segs:0,watchCount:0,plinthCount:0,steleCount:0};function rz(e,t){const n=new Tt;n.name="watch",e.add(n);const i={...sz};n.userData.sizes=i,n.userData.watchCount=0,n.userData.plinthCount=0,n.userData.steleCount=0;const s=ez(),r=s.nx*bp,o=s.nz*bp,a=Math.atan2(r,o),c=t?8:16,l=new mt(new Te(wp,wp,H0,c),nz());if(l.position.set(r,Q_,o),l.castShadow=!1,l.receiveShadow=!0,l.frustumCulled=!0,l.renderOrder=2,n.add(l),i.y=Q_,i.x=r,i.z=o,i.yaw=a,i.segs=c,i.watchCount=1,i.plinthCount=1,n.userData.watchCount=1,n.userData.plinthCount=1,t)return;const u=new mt(new Me(t1,Sp,e1),iz());u.position.set(r,n1,o),u.rotation.y=a,u.castShadow=!1,u.receiveShadow=!0,u.frustumCulled=!0,u.renderOrder=2,n.add(u),i.steleW=t1,i.steleH=Sp,i.steleD=e1,i.steleY=n1,i.steleCount=1,n.userData.steleCount=1}const Zr={x:-4050,y:540,z:195},i1=190,s1=14,r1=560,az=6,oz=3,a1=.055,cz=8319231,o1=.035,lz=-6,hz=86,uz=52,vc=.22,of=.14,c1=.32,dz=15269880,l1=.7,fz=-5;function h1(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:pn,depthWrite:!1,depthTest:!0,fog:!1,side:ge,toneMapped:!1})}function pz(e,t){const n=new Tt;n.name="corona",e.add(n);const i=t?oz:az,s=t?uz:hz,r=t?8:12,o=t?6:10,a=new Tt;a.name="corona-core",a.position.set(Zr.x,Zr.y,Zr.z),a.lookAt(0,i1,0),a.frustumCulled=!1,a.castShadow=!1,a.receiveShadow=!1;const c=new Tt;c.name="corona-rays",c.frustumCulled=!1;const l=new cs(s1,r1),u=h1(cz,a1);for(let x=0;x<i;x++){const y=new mt(l,u);y.rotation.z=x/i*Math.PI,y.castShadow=!1,y.receiveShadow=!1,y.frustumCulled=!1,y.renderOrder=lz,c.add(y)}a.add(c);const d=h1(dz,vc),h=new mt(new as(s,r,o),d);if(h.castShadow=!1,h.receiveShadow=!1,h.frustumCulled=!1,h.renderOrder=fz,a.add(h),n.add(a),n.userData.rayCount=i,n.userData.innerCount=1,n.userData.breathing=!t,n.userData.sizes={x:Zr.x,y:Zr.y,z:Zr.z,lookY:i1,rayW:s1,rayH:r1,rayN:i,rayOp:a1,raySpin:t?0:o1,innerR:s,innerOp:vc,innerOpMin:t?vc:of,innerOpMax:t?vc:c1,pulse:t?0:l1,segs:r,rings:o},t)return{tick(){}};const f=c1-of;return{tick(x){c.rotation.z=x*o1;const y=(Math.sin(x*l1)+1)*.5;d.opacity=of+y*f}}}const Kr={x:-4050,y:540,z:195},Mc={x:0,y:80,z:0},u1=920,d1=640,f1=13934672,p1=.055,m1=-14,g1=1480,x1=12615744,_1=.028,y1=-15,v1=2680,M1=42,w1=3844288,S1=.035,b1=1.18,E1=720,T1=-13;function cf(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:pn,depthWrite:!1,depthTest:!0,fog:!1,side:ge,toneMapped:!1})}function mz(e,t){const n=new Tt;n.name="vault",e.add(n);const i=t?d1:u1,s=t?20:32,r=new Tt;r.name="dusk",r.position.set(Kr.x,Kr.y,Kr.z),r.lookAt(Mc.x,Mc.y,Mc.z),r.frustumCulled=!1,n.add(r);const o=new mt(new Ri(i,s),cf(f1,p1));if(o.renderOrder=m1,o.castShadow=!1,o.receiveShadow=!1,o.frustumCulled=!1,r.add(o),!t){const a=new mt(new Ri(g1,s),cf(x1,_1));a.renderOrder=y1,a.castShadow=!1,a.receiveShadow=!1,a.frustumCulled=!1,r.add(a);const c=new mt(new mn(v1,M1,6,64),cf(w1,S1));c.rotation.x=b1,c.position.y=E1,c.renderOrder=T1,c.castShadow=!1,c.receiveShadow=!1,c.frustumCulled=!1,n.add(c)}n.userData.duskCount=1,n.userData.haloCount=t?0:1,n.userData.riverCount=t?0:1,n.userData.sizes={duskR:i,duskRFine:u1,duskRCoarse:d1,duskHex:f1,duskOp:p1,duskOrder:m1,haloR:t?0:g1,haloHex:x1,haloOp:_1,haloOrder:y1,riverR:t?0:v1,riverTube:t?0:M1,riverHex:w1,riverOp:S1,riverRx:b1,riverY:E1,riverOrder:T1,lookAtY:Mc.y,coreX:Kr.x,coreY:Kr.y,coreZ:Kr.z,segs:s}}function gz(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function A1(e){return Ht.find(t=>t.kind===e)??null}function xz(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function _z(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(o.sx,o.sy,o.sz),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const R1=.05,C1=.07,yz=1.5,vz=.6,P1=18,ir=22,wc=16,lf=90,I1=.82;function Mz(e,t){const n=new Tt;n.name="rill",e.add(n);const i={n:0,want:0,canalArchive:0};n.userData.segmentCounts=i,n.userData.sizes={y:R1,h:C1,side:ir,bulge:wc,step:P1};const s=A1("canal"),r=A1("archive");if(!s||!r||Math.hypot(s.x,s.z)<lf||Math.hypot(r.x,r.z)<lf)return;const o=r.x-s.x,a=r.z-s.z,c=Math.hypot(o,a)||1,l=Math.min(.28,s.radius*I1/c),u=Math.min(.28,r.radius*I1/c),d=s.x+o*l,h=s.z+a*l,f=r.x-o*u,x=r.z-a*u,y=(d+f)*.5,g=(h+x)*.5,p=o/c,S=-(a/c),m=p,M=Math.hypot(y+S*ir,g+m*ir),v=Math.hypot(y-S*ir,g-m*ir),A=M>=v?1:-1,_=S*ir*A,E=m*ir*A,C=d+_,P=h+E,T=f+_,O=x+E,k=T-C,U=O-P,$=Math.hypot(k,U)||1,W=Math.max(2,Math.round($/P1)),Y=$/W;i.want=W;const tt=[];for(let ht=0;ht<W;ht++){if(t&&ht%2===1)continue;const nt=(ht+.5)/W,zt=Math.sin(nt*Math.PI)*wc,Qt=C+k*nt+S*A*zt,Nt=P+U*nt+m*A*zt;if(Math.hypot(Qt,Nt)<lf)continue;const V=.02,ot=Math.max(0,nt-V),at=Math.min(1,nt+V),At=Math.sin(ot*Math.PI)*wc,Bt=Math.sin(at*Math.PI)*wc,Vt=C+k*ot+S*A*At,he=P+U*ot+m*A*At,$t=C+k*at+S*A*Bt,oe=P+U*at+m*A*Bt,xe=Math.atan2($t-Vt,oe-he),pe=yz+gz(ht,5)*vz;tt.push({x:Qt,y:R1,z:Nt,sx:pe,sy:C1,sz:Y*.94,ry:xe})}const q=new Me(1,1,1);_z(q,xz(),tt,n),i.n=tt.length,i.canalArchive=tt.length}function wz(e){return Ht.find(t=>t.kind===e)??null}function Sz(){return new wt({color:2892306,roughness:.24,metalness:.48,emissive:5914656,emissiveIntensity:.14,iridescence:.44,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function bz(){return new wt({color:1314850,roughness:.2,metalness:.38,emissive:3286102,emissiveIntensity:.16,iridescence:.52,iridescenceIOR:1.31,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}const aa=0,oa=78,wh=90,cr=22,Ez=.82,xw=3,_w=2;function Tz(e,t,n,i,s){const r=Math.cos(s),o=Math.sin(s);return{x:e+n*r+i*o,z:t-n*o+i*r}}function Az(e,t){const n=e*e+t*t,i=2*(aa*e+oa*t),s=aa*aa+oa*oa-wh*wh,r=i*i-4*n*s;if(n<1e-8||r<0)return 0;const o=Math.sqrt(r),a=(-i-o)/(2*n),c=(-i+o)/(2*n),l=a>1e-6?a:c;return Math.max(0,Math.min(1,l))}function Rz(e,t){return Math.hypot(e,t)<wh?!0:Ht.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}const hf=[{sx:1.08,sy:.46,sz:.94,y:.4,ox:.05,oz:-.04,rx:.12,ry:.18,gold:!0},{sx:.76,sy:.36,sz:.68,y:1.02,ox:-.07,oz:.05,rx:-.08,ry:-.46,gold:!1},{sx:.48,sy:.28,sz:.44,y:1.52,ox:.03,oz:.02,rx:.16,ry:.72,gold:!0}],Cz={nFine:xw,nCoarse:_w,side:cr,hubX:aa,hubZ:oa,n:0,want:0,x:0,y:0,z:0,yaw:0,cairnCount:0,stoneCount:0};function Pz(e,t){const n=new Tt;n.name="cairn",e.add(n);const i=t?_w:xw,s={...Cz,want:i};n.userData.sizes=s,n.userData.cairnCount=0,n.userData.stoneCount=0;const r=wz("foundry");if(!r||Math.hypot(r.x,r.z)<wh)return;const o=r.x-aa,a=r.z-oa,c=Math.hypot(o,a)||1,l=Az(o,a),u=1-Math.min(.28,r.radius*Ez/c);if(u<=l)return;const d=l+(u-l)*.5,h=aa+o*d,f=oa+a*d,x=o/c,g=-(a/c),p=x,w=Math.hypot(h+g*cr,f+p*cr),S=Math.hypot(h-g*cr,f-p*cr),m=w<=S?1:-1,M=h+g*cr*m,v=f+p*cr*m;if(Rz(M,v))return;const A=Math.atan2(o,a),_=Math.min(i,hf.length),E=Sz(),C=bz(),P=new u0(1,0);for(let T=0;T<_;T++){const O=hf[T],k=Tz(M,v,O.ox,O.oz,A),U=new mt(P,O.gold?E:C);U.position.set(k.x,O.y,k.z),U.rotation.set(O.rx,A+O.ry,0),U.scale.set(O.sx,O.sy,O.sz),U.castShadow=!1,U.receiveShadow=!0,U.frustumCulled=!0,U.renderOrder=2,n.add(U)}s.n=_,s.x=M,s.y=hf[0].y,s.z=v,s.yaw=A,s.cairnCount=1,s.stoneCount=_,n.userData.cairnCount=1,n.userData.stoneCount=_}function D1(e){return Ht.find(t=>t.kind===e)??null}function Iz(){return new wt({color:466472,roughness:.22,metalness:.36,emissive:1729912,emissiveIntensity:.16,iridescence:.36,iridescenceIOR:1.3,iridescenceThicknessRange:[90,340],clearcoat:.32,clearcoatRoughness:.34,transparent:!1})}function Dz(){return new wt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function z1(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const _o=3.6,ol=.1,Sh=.2,L1=_o*.5,N1=_o+Sh*.55,cl=9.4,Ep=90,uf=.82,zz=4,Lz=3;function Nz(e){return e?Lz:zz}function Uz(e,t){return Math.hypot(e,t)<Ep?!0:Ht.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function Oz(e){return{n:0,posts:0,bulbs:0,want:e,h:_o,r:ol,bulbR:Sh,side:cl}}function kz(e,t){const n=new Tt;n.name="joinlamps",e.add(n);const i=Nz(t),s=Oz(i);n.userData.joinLampCounts=s,n.userData.joinLampCount=0,n.userData.sizes={h:_o,r:ol,bulbR:Sh,yPost:L1,yBulb:N1,side:cl,padLeave:uf};const r=D1("canal"),o=D1("market");if(!r||!o||Math.hypot(r.x,r.z)<Ep||Math.hypot(o.x,o.z)<Ep)return;const a=o.x-r.x,c=o.z-r.z,l=Math.hypot(a,c)||1,u=Math.min(.28,r.radius*uf/l),d=Math.min(.28,o.radius*uf/l),h=r.x+a*u,f=r.z+c*u,x=o.x-a*d,y=o.z-c*d,g=x-h,p=y-f,w=Math.hypot(g,p)||1,S=-p/w,m=g/w,M=Math.atan2(g,p),v=[],A=[];for(let E=0;E<i;E++){const C=(E+.5)/i,P=E%2===0?1:-1,T=h+g*C+S*cl*P,O=f+p*C+m*cl*P;Uz(T,O)||(v.push({x:T,y:L1,z:O,ry:M}),A.push({x:T,y:N1,z:O,ry:M}))}const _=t?6:8;z1(new Te(ol,ol,_o,_),Iz(),v,n),z1(new Sn(Sh,0),Dz(),A,n),s.n=v.length,s.posts=v.length,s.bulbs=A.length,n.userData.joinLampCount=v.length}function Fz(){return new wt({color:1709068,roughness:.42,metalness:.34,emissive:3812374,emissiveIntensity:.08,iridescence:.22,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.18,clearcoatRoughness:.48,transparent:!1})}function Bz(e){return new wt({color:1314850,roughness:.28,metalness:.28,emissive:3286102,emissiveIntensity:.16,iridescence:.62,iridescenceIOR:1.31,iridescenceThicknessRange:[80,380],clearcoat:.22,clearcoatRoughness:.44,transparent:!0,opacity:e,depthWrite:!1,side:ge})}function Hz(e){return new wt({color:799552,roughness:.26,metalness:.24,emissive:1729912,emissiveIntensity:.14,iridescence:.58,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.2,clearcoatRoughness:.46,transparent:!0,opacity:e,depthWrite:!1,side:ge})}const U1=0,O1=78,k1=7,df=.08,ll=4.2,jr=2.8,ta=5.8,ff=.09,Tp=.08,Gz=.12,yw=ta-Tp,Sc=yw-ll*.5,F1=.46,B1=.32,Vz=-.05,$z=.92,Wz=.9,Xz=1,Yz=1;function Ba(e,t,n,i,s,r,o){e.position.set(t,n,i),e.castShadow=!1,e.receiveShadow=r,e.frustumCulled=!0,e.renderOrder=o,s.add(e)}function qz(e,t){const n=new Tt;n.name="hubveil",e.add(n);const i=U1+k1,s=O1,r=t?6:8,o=!t,a={t:df,h:ll,w:jr,postH:ta,postR:ff,hangY:yw,veilY:Sc,hubX:U1,hubZ:O1,side:k1,violetOp:F1,cyanOp:o?B1:0,nFine:Xz,nCoarse:Yz,x:i,y:Sc,z:s,segs:r,veilCount:0,liningCount:0,postCount:0};n.userData.sizes=a,n.userData.veilCount=0,n.userData.liningCount=0,n.userData.postCount=0;const c=Fz(),l=new Te(ff,ff,ta,r),u=s-jr*.5,d=s+jr*.5;Ba(new mt(l,c),i,ta*.5,u,n,!0,2),Ba(new mt(l,c),i,ta*.5,d,n,!0,2);const h=new mt(new Me(Gz,Tp,jr),c);Ba(h,i,ta-Tp*.5,s,n,!0,2);const f=new mt(new Me(df,ll,jr),Bz(F1));if(Ba(f,i,Sc,s,n,!1,3),a.veilCount=1,a.postCount=2,n.userData.veilCount=1,n.userData.postCount=2,!o)return;const x=ll*$z,y=jr*Wz,g=new mt(new Me(df,x,y),Hz(B1));Ba(g,i+Vz,Sc,s,n,!1,3),a.liningCount=1,n.userData.liningCount=1}function Zz(e){return Ht.find(t=>t.kind===e)??null}function Kz(){return new wt({color:2892306,roughness:.26,metalness:.42,emissive:5914656,emissiveIntensity:.12,iridescence:.4,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function jz(){return new wt({color:3812372,roughness:.18,metalness:.46,emissive:15254890,emissiveIntensity:.2,iridescence:.48,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function H1(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Ap=0,Rp=78,Cp=90,yo=3.2,hl=.09,bh=.16,G1=yo*.5,V1=yo+bh*.45,ul=10.2,$1=.82,Jz=4,Qz=3;function tL(e){return e?Qz:Jz}function eL(e,t){return Math.hypot(e-Ap,t-Rp)<Cp?!0:Ht.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function nL(e){return{n:0,posts:0,caps:0,want:e,h:yo,r:hl,capR:bh,side:ul}}function iL(e,t){const n=new Tt;n.name="aimposts",e.add(n);const i=tL(t),s=nL(i);n.userData.aimPostCounts=s,n.userData.aimPostCount=0,n.userData.sizes={h:yo,r:hl,capR:bh,yPost:G1,yCap:V1,side:ul,padLeave:$1};const r=Zz("overlook");if(!r||Math.hypot(r.x,r.z)<Cp)return;const o=r.x-Ap,a=r.z-Rp,c=Math.hypot(o,a)||1,l=Math.min(.28,Cp/c),u=Math.min(.28,r.radius*$1/c),d=Ap+o*l,h=Rp+a*l,f=r.x-o*u,x=r.z-a*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*ul*C,T=h+g*E+S*ul*C;eL(P,T)||(M.push({x:P,y:G1,z:T,ry:m}),v.push({x:P,y:V1,z:T,ry:m}))}const A=t?6:8;H1(new Te(hl,hl,yo,A),Kz(),M,n),H1(new Sn(bh,0),jz(),v,n),s.n=M.length,s.posts=M.length,s.caps=v.length,n.userData.aimPostCount=M.length}function sL(e){return Ht.find(t=>t.kind===e)??null}function rL(){return new wt({color:2760720,roughness:.28,metalness:.4,emissive:5914656,emissiveIntensity:.12,iridescence:.38,iridescenceIOR:1.3,iridescenceThicknessRange:[90,360],clearcoat:.34,clearcoatRoughness:.32,transparent:!1})}function aL(){return new wt({color:3812372,roughness:.2,metalness:.44,emissive:16765040,emissiveIntensity:.18,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.42,clearcoatRoughness:.26,transparent:!1})}function W1(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Pp=0,Ip=78,Dp=90,vo=1.15,pf=.11,X1=.42,Eh=.72,Y1=.08,q1=vo*.5,Z1=vo+Eh*.42,dl=11.4,K1=.82,oL=4,cL=3;function lL(e){return e?cL:oL}function hL(e,t){return Math.hypot(e-Pp,t-Ip)<Dp?!0:Ht.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function uL(e){return{n:0,stems:0,slabs:0,want:e,stemH:vo,slabH:Eh,side:dl}}function dL(e,t){const n=new Tt;n.name="namestones",e.add(n);const i=lL(t),s=uL(i);n.userData.nameStoneCounts=s,n.userData.nameStoneCount=0,n.userData.sizes={stemH:vo,stemR:pf,slabW:X1,slabH:Eh,slabT:Y1,yStem:q1,ySlab:Z1,side:dl,padLeave:K1};const r=sL("archive");if(!r||Math.hypot(r.x,r.z)<Dp)return;const o=r.x-Pp,a=r.z-Ip,c=Math.hypot(o,a)||1,l=Math.min(.28,Dp/c),u=Math.min(.28,r.radius*K1/c),d=Pp+o*l,h=Ip+a*l,f=r.x-o*u,x=r.z-a*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*dl*C,T=h+g*E+S*dl*C;hL(P,T)||(M.push({x:P,y:q1,z:T,ry:m}),v.push({x:P,y:Z1,z:T,ry:m}))}const A=t?6:8;W1(new Te(pf,pf,vo,A),rL(),M,n),W1(new Me(Y1,Eh,X1),aL(),v,n),s.n=M.length,s.stems=M.length,s.slabs=v.length,n.userData.nameStoneCount=M.length}function fL(e){return Ht.find(t=>t.kind===e)??null}function pL(){return new wt({color:1314850,roughness:.26,metalness:.38,emissive:3286102,emissiveIntensity:.14,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[80,360],clearcoat:.34,clearcoatRoughness:.3,transparent:!1})}function mL(){return new wt({color:1840172,roughness:.18,metalness:.42,emissive:9071871,emissiveIntensity:.2,iridescence:.56,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.44,clearcoatRoughness:.24,transparent:!1})}function j1(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const zp=0,Lp=78,Np=90,Mo=3.1,fl=.09,Th=.15,J1=Mo*.5,Q1=Mo+Th*.45,pl=10.8,ty=.82,gL=4,xL=3;function _L(e){return e?xL:gL}function yL(e,t){return Math.hypot(e-zp,t-Lp)<Np?!0:Ht.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function vL(e){return{n:0,posts:0,caps:0,want:e,h:Mo,r:fl,capR:Th,side:pl}}function ML(e,t){const n=new Tt;n.name="breathposts",e.add(n);const i=_L(t),s=vL(i);n.userData.breathPostCounts=s,n.userData.breathPostCount=0,n.userData.sizes={h:Mo,r:fl,capR:Th,yPost:J1,yCap:Q1,side:pl,padLeave:ty};const r=fL("ring");if(!r||Math.hypot(r.x,r.z)<Np)return;const o=r.x-zp,a=r.z-Lp,c=Math.hypot(o,a)||1,l=Math.min(.28,Np/c),u=Math.min(.28,r.radius*ty/c),d=zp+o*l,h=Lp+a*l,f=r.x-o*u,x=r.z-a*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*pl*C,T=h+g*E+S*pl*C;yL(P,T)||(M.push({x:P,y:J1,z:T,ry:m}),v.push({x:P,y:Q1,z:T,ry:m}))}const A=t?6:8;j1(new Te(fl,fl,Mo,A),pL(),M,n),j1(new Sn(Th,0),mL(),v,n),s.n=M.length,s.posts=M.length,s.caps=v.length,n.userData.breathPostCount=M.length}function wL(e){return Ht.find(t=>t.kind===e)??null}function SL(){return new wt({color:2892306,roughness:.26,metalness:.42,emissive:5914656,emissiveIntensity:.12,iridescence:.4,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function bL(){return new wt({color:1456196,roughness:.16,metalness:.44,emissive:3073791,emissiveIntensity:.22,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function ey(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Up=0,Op=78,kp=90,wo=3.4,ml=.1,Ah=.18,ny=wo*.5,iy=wo+Ah*.55,gl=12.6,sy=.82,EL=4,TL=3;function AL(e){return e?TL:EL}function RL(e,t){return Math.hypot(e-Up,t-Op)<kp?!0:Ht.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function CL(e){return{n:0,posts:0,bulbs:0,want:e,h:wo,r:ml,bulbR:Ah,side:gl}}function PL(e,t){const n=new Tt;n.name="foundrylamps",e.add(n);const i=AL(t),s=CL(i);n.userData.foundryLampCounts=s,n.userData.foundryLampCount=0,n.userData.sizes={h:wo,r:ml,bulbR:Ah,yPost:ny,yBulb:iy,side:gl,padLeave:sy};const r=wL("foundry");if(!r||Math.hypot(r.x,r.z)<kp)return;const o=r.x-Up,a=r.z-Op,c=Math.hypot(o,a)||1,l=Math.min(.28,kp/c),u=Math.min(.28,r.radius*sy/c),d=Up+o*l,h=Op+a*l,f=r.x-o*u,x=r.z-a*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*gl*C,T=h+g*E+S*gl*C;RL(P,T)||(M.push({x:P,y:ny,z:T,ry:m}),v.push({x:P,y:iy,z:T,ry:m}))}const A=t?6:8;ey(new Te(ml,ml,wo,A),SL(),M,n),ey(new Sn(Ah,0),bL(),v,n),s.n=M.length,s.posts=M.length,s.bulbs=v.length,n.userData.foundryLampCount=M.length}function IL(e){return Ht.find(t=>t.kind===e)??null}function DL(){return new wt({color:1188908,roughness:.28,metalness:.4,emissive:1727078,emissiveIntensity:.14,iridescence:.42,iridescenceIOR:1.31,iridescenceThicknessRange:[90,360],clearcoat:.34,clearcoatRoughness:.32,transparent:!1})}function zL(){return new wt({color:3811858,roughness:.18,metalness:.46,emissive:15254890,emissiveIntensity:.2,iridescence:.5,iridescenceIOR:1.32,iridescenceThicknessRange:[80,340],clearcoat:.46,clearcoatRoughness:.24,transparent:!1})}function ry(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Fp=0,Bp=78,Hp=90,So=3.15,xl=.11,Rh=.16,ay=So*.5,oy=So+Rh*.5,_l=11.2,cy=.82,LL=4,NL=3;function UL(e){return e?NL:LL}function OL(e,t){return Math.hypot(e-Fp,t-Bp)<Hp?!0:Ht.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function kL(e){return{n:0,posts:0,caps:0,want:e,h:So,r:xl,capR:Rh,side:_l}}function FL(e,t){const n=new Tt;n.name="canalposts",e.add(n);const i=UL(t),s=kL(i);n.userData.canalPostCounts=s,n.userData.canalPostCount=0,n.userData.sizes={h:So,r:xl,capR:Rh,yPost:ay,yCap:oy,side:_l,padLeave:cy};const r=IL("canal");if(!r||Math.hypot(r.x,r.z)<Hp)return;const o=r.x-Fp,a=r.z-Bp,c=Math.hypot(o,a)||1,l=Math.min(.28,Hp/c),u=Math.min(.28,r.radius*cy/c),d=Fp+o*l,h=Bp+a*l,f=r.x-o*u,x=r.z-a*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*_l*C,T=h+g*E+S*_l*C;OL(P,T)||(M.push({x:P,y:ay,z:T,ry:m}),v.push({x:P,y:oy,z:T,ry:m}))}const A=t?6:8;ry(new Te(xl,xl,So,A),DL(),M,n),ry(new Sn(Rh,0),zL(),v,n),s.n=M.length,s.posts=M.length,s.caps=v.length,n.userData.canalPostCount=M.length}function bc(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function ly(e,t){return new Ue({color:e,transparent:!0,opacity:t,blending:pn,depthWrite:!1,side:ge,toneMapped:!1})}function hy(e,t){return new wt({color:e,roughness:.06,metalness:.12,emissive:t,emissiveIntensity:.62,iridescence:1,iridescenceIOR:1.32,iridescenceThicknessRange:[50,580],clearcoat:.94,clearcoatRoughness:.06,sheen:.7,sheenColor:new ie(8319231),envMapIntensity:1.8})}function BL(){return new wt({color:15254634,roughness:.14,metalness:.72,emissive:12886080,emissiveIntensity:.5,iridescence:.48,clearcoat:.78,clearcoatRoughness:.12})}function HL(e){switch(e){case"foundry":return{glass:16756800,crystal:15254634,emit:12875808};case"canal":return{glass:3073791,crystal:8319231,emit:1747136};case"grove":return{glass:15253616,crystal:13938784,emit:9072672};case"beacon":case"overlook":return{glass:8319231,crystal:13170943,emit:3854568};case"archive":return{glass:15254634,crystal:15782008,emit:12886080};case"gate":return{glass:11832575,crystal:13148415,emit:6965416};default:return{glass:8319231,crystal:11069680,emit:2793656}}}function GL(e,t){const n=new Tt;n.name="ward-glass",e.add(n);const i=new Sn(1,0),s=new mn(1,.045,6,t?18:28),r=new Te(1,1.08,1,t?6:8,1,!0),o=new mn(1,.03,5,t?16:24),a=BL();Ht.forEach((c,l)=>{const u=HL(c.kind),d=c.kind==="beacon"?124:c.kind==="overlook"?108:c.kind==="archive"?100:c.kind==="canal"?28:72,h=c.kind==="canal"?22:c.kind==="terrace"?40:c.kind==="beacon"?14:28,f=new Tt;f.position.set(c.x,0,c.z),f.name=`ward-glass-${c.kind}`;const x=new mt(i,hy(u.crystal,u.emit));x.scale.set(h*.22,d*.18,h*.22),x.position.y=10+d*.55,x.rotation.y=bc(l,3)*Math.PI,x.castShadow=!0,f.add(x);const y=new mt(s,a);if(y.scale.set(h*.48,h*.48,h*.48),y.rotation.x=Math.PI/2,y.position.y=8+d*.38,f.add(y),!t){const S=new mt(s,a);S.scale.set(h*.32,h*.32,h*.32),S.rotation.set(.7,.2,.4),S.position.y=8+d*.48,f.add(S)}const g=new mt(r,ly(u.glass,.14));g.scale.set(h*.36,d*.62,h*.36),g.position.y=8+d*.28,g.renderOrder=2,f.add(g);const p=new mt(o,ly(u.glass,.28));p.scale.set(h*.55,h*.55,h*.55),p.rotation.x=Math.PI/2,p.position.y=8+d*.22,f.add(p);const w=t?4:8;for(let S=0;S<w;S++){const m=S/w*Math.PI*2+bc(l,S)*.2,M=new mt(i,hy(u.crystal,u.emit)),v=h*.62;M.position.set(Math.cos(m)*v,6+bc(l+S,9)*d*.35,Math.sin(m)*v),M.scale.set(1.6,4.2+bc(l,S+4)*3.2,1.6),M.rotation.y=m,M.castShadow=!1,f.add(M)}n.add(f)})}function VL(e){return Ht.find(t=>t.kind===e)??null}function $L(){return new wt({color:1839656,roughness:.26,metalness:.38,emissive:4860024,emissiveIntensity:.16,iridescence:.46,iridescenceIOR:1.31,iridescenceThicknessRange:[80,380],clearcoat:.36,clearcoatRoughness:.3,transparent:!1})}function WL(){return new wt({color:3811858,roughness:.17,metalness:.48,emissive:15254890,emissiveIntensity:.18,iridescence:.52,iridescenceIOR:1.32,iridescenceThicknessRange:[70,320],clearcoat:.48,clearcoatRoughness:.22,transparent:!1})}function uy(e,t,n,i){if(!n.length)return;const s=new _e(e,t,n.length),r=new re;r.rotation.order="YXZ",n.forEach((o,a)=>{r.position.set(o.x,o.y,o.z),r.rotation.set(0,o.ry,0),r.scale.set(1,1,1),r.updateMatrix(),s.setMatrixAt(a,r.matrix)}),s.instanceMatrix.needsUpdate=!0,s.castShadow=!1,s.receiveShadow=!0,s.frustumCulled=!0,s.renderOrder=2,i.add(s)}const Gp=0,Vp=78,$p=90,bo=2.88,yl=.1,Ch=.18,dy=bo*.5,fy=bo+Ch*.5,vl=10.4,py=.8,XL=5,YL=3;function qL(e){return e?YL:XL}function ZL(e,t){return Math.hypot(e-Gp,t-Vp)<$p?!0:Ht.some(n=>Math.hypot(e-n.x,t-n.z)<n.radius*.78)}function KL(e){return{n:0,posts:0,caps:0,want:e,h:bo,r:yl,capR:Ch,side:vl}}function jL(e,t){const n=new Tt;n.name="gateposts",e.add(n);const i=qL(t),s=KL(i);n.userData.gatePostCounts=s,n.userData.gatePostCount=0,n.userData.sizes={h:bo,r:yl,capR:Ch,yPost:dy,yCap:fy,side:vl,padLeave:py};const r=VL("gate");if(!r||Math.hypot(r.x,r.z)<$p)return;const o=r.x-Gp,a=r.z-Vp,c=Math.hypot(o,a)||1,l=Math.min(.28,$p/c),u=Math.min(.28,r.radius*py/c),d=Gp+o*l,h=Vp+a*l,f=r.x-o*u,x=r.z-a*u,y=f-d,g=x-h,p=Math.hypot(y,g)||1,w=-g/p,S=y/p,m=Math.atan2(y,g),M=[],v=[];for(let _=0;_<i;_++){const E=(_+.5)/i,C=_%2===0?1:-1,P=d+y*E+w*vl*C,T=h+g*E+S*vl*C;ZL(P,T)||(M.push({x:P,y:dy,z:T,ry:m}),v.push({x:P,y:fy,z:T,ry:m}))}const A=t?6:8;uy(new Te(yl,yl,bo,A),$L(),M,n),uy(new Sn(Ch,0),WL(),v,n),s.n=M.length,s.posts=M.length,s.caps=v.length,n.userData.gatePostCount=M.length}const{Group:ns,Vector2:an,LatheGeometry:Wp,BoxGeometry:pi,CylinderGeometry:Hn,ConeGeometry:Xa,TorusGeometry:rn,RepeatWrapping:JL,SRGBColorSpace:QL,MeshPhysicalMaterial:Ec,Color:Us,Mesh:ct,MeshBasicMaterial:Zn,AdditiveBlending:tN,DirectionalLight:Tc,InstancedMesh:Ac,Object3D:Ha,OctahedronGeometry:Si,IcosahedronGeometry:my,CapsuleGeometry:gy,SphereGeometry:Rc,TextureLoader:eN,ShaderMaterial:Cc,CircleGeometry:sr,PointLight:Pc,HemisphereLight:nN}=bA,Dn="./luminous-circuit".replace(/\/?$/,"");function Bn(e,t){const n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)}function mf(e){const t=e==="house"?[new an(1,0),new an(.92,.35),new an(.78,.72),new an(.55,1)]:e==="ward"?[new an(1,0),new an(.94,.22),new an(.72,.48),new an(.58,.78),new an(.28,1)]:[new an(.85,0),new an(.7,.3),new an(.42,.62),new an(.18,.88),new an(.02,1)];return new Wp(t,12)}function iN(){return new pi(1.15,.85,.95)}function sN(){return new Hn(.55,.85,1.15,8)}function rN(){return new Xa(.32,1.35,6)}function aN(){return new rn(.55,.1,6,16,Math.PI)}function zn(e,t,n=1){const i=e.load(t);return i.colorSpace=QL,i.wrapS=i.wrapT=JL,i.repeat.set(n,n),i.anisotropy=8,i}function oN(){const e=new ns;e.name="core-spire-city";const t=typeof window<"u"&&(()=>{try{return window.matchMedia("(pointer: coarse)").matches}catch{return!1}})(),n=new eN,i=zn(n,`${Dn}/plaza-floor.jpg`,6),s=zn(n,`${Dn}/wild-floor-v2.jpg`,10),r=zn(n,`${Dn}/crystal-facade.jpg`,2),o=zn(n,`${Dn}/spire-windows-v2.jpg`,2.2),a=zn(n,`${Dn}/spire-facet-tile.jpg`,2),c=zn(n,`${Dn}/gold-crystal.jpg`,2),l=zn(n,`${Dn}/canal-river.jpg`,4),u=zn(n,`${Dn}/spire-heart.jpg`,1),d=zn(n,`${Dn}/avenue-living.jpg`,8);zn(n,`${Dn}/tower-cyan.jpg`,1.6),zn(n,`${Dn}/tower-amethyst.jpg`,1.6),zn(n,`${Dn}/sky-core-glow.jpg`,1),zn(n,`${Dn}/sky-veil.jpg`,1);const h=zn(n,`${Dn}/energy-canal.jpg`,6),f=zn(n,`${Dn}/globe-surface.jpg`,8),x=zn(n,`${Dn}/kiln-body.jpg`,2),y=zn(n,`${Dn}/orchard-canopy.jpg`,2),g=zn(n,`${Dn}/beacon-hail.jpg`,2),p=[],w=[];let S=null,m=null,M=null,v=null,A=null,_=null,E=null,C=null,P=null,T=null,O=null,k=null,U=null,$=null,W=null,Y=null,tt=null;function q(L){w.push(L)}function ht(L=2){let z=0;for(;w.length&&z<L;){const N=w.shift();try{N?.()}catch{}z+=1}return w.length}const nt=L=>new Ec({color:L.color,roughness:L.roughness??.16,metalness:L.metalness??.46,emissive:L.emissive??0,emissiveIntensity:L.emissiveIntensity??0,envMapIntensity:1.82,map:L.map??null,transparent:!!L.transparent,opacity:L.opacity??1,clearcoat:L.coat??.84,clearcoatRoughness:.08,iridescence:L.iri??.88,iridescenceIOR:1.31,iridescenceThicknessRange:[60,620],sheen:.62,sheenColor:new Us(L.sheenHex??8049904)});function zt(L,z,N=.4){L.onBeforeCompile=I=>{I.uniforms.uRimCol={value:new Us(z)},I.uniforms.uRimStr={value:N},I.uniforms.uCoreDir={value:new B(is.x,is.y,is.z).normalize()},I.fragmentShader=`uniform vec3 uRimCol; uniform float uRimStr; uniform vec3 uCoreDir;
`+I.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
           vec3 _wn = inverseTransformDirection(normalize(normal), viewMatrix);
           float _rim = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.4);
           float _kiss = pow(max(0.0, dot(_wn, uCoreDir)), 1.35);
           totalEmissiveRadiance += uRimCol * _rim * uRimStr;
           totalEmissiveRadiance += vec3(0.49, 0.94, 1.0) * _kiss * (uRimStr * 0.95);`)},L.customProgramCacheKey=()=>`rim-core-${z}-${N}`}const Qt=nt({color:6977696,roughness:.38,metalness:.42,emissive:1054776,emissiveIntensity:.18,map:i,iri:.32,coat:.55}),Nt=nt({color:8027336,roughness:.14,metalness:.42,emissive:2363488,emissiveIntensity:.52,map:r,iri:.9,coat:.78,sheenHex:11571455}),V=nt({color:8042696,roughness:.11,metalness:.48,emissive:678008,emissiveIntensity:.62,map:r,iri:.94,coat:.86,sheenHex:8320767}),ot=nt({color:13940856,roughness:.14,metalness:.68,emissive:6965784,emissiveIntensity:.48,map:c,iri:.58,coat:.82,sheenHex:16765040}),at=nt({color:2896968,roughness:.82,metalness:.1,emissive:395284,emissiveIntensity:.1,map:f,iri:.08,coat:.06}),At=nt({color:5925520,roughness:.44,metalness:.34,emissive:792632,emissiveIntensity:.2,map:d,iri:.28,coat:.32}),Bt=nt({color:9082560,roughness:.12,metalness:.46,emissive:1321040,emissiveIntensity:.58,map:o,iri:.78,coat:.8}),Vt=new Ec({color:12103916,roughness:.05,metalness:.12,emissive:2102352,emissiveIntensity:.55,envMapIntensity:1.9,iridescence:1,iridescenceIOR:1.32,iridescenceThicknessRange:[40,620],sheen:.78,sheenColor:new Us(8317176),clearcoat:.96,clearcoatRoughness:.05,map:a});Vt.bumpMap=a,Vt.bumpScale=.38,Vt.clearcoatNormalScale=new an(.55,.55),Bt.bumpMap=o,Bt.bumpScale=.26,ot.bumpMap=c,ot.bumpScale=.22,at.bumpMap=s,at.bumpScale=.45;const he=new Ec({color:13168888,roughness:.06,metalness:.12,emissive:1349808,emissiveIntensity:.92,envMapIntensity:1.75,iridescence:1,iridescenceIOR:1.28,sheen:.74,sheenColor:new Us(5953776),clearcoat:.92,clearcoatRoughness:.07,map:u});zt(Nt,11571455,.48),zt(V,8320767,.56),zt(ot,16765040,.42),zt(Bt,9097448,.46),zt(Vt,13166847,.7),zt(he,8320767,.78),zt(Qt,4890816,.22),zt(At,4890816,.2);const $t=new Zn({color:3854568,transparent:!0,opacity:.32,blending:2,depthWrite:!1,map:l}),oe=new Zn({color:14725216,transparent:!0,opacity:.22,blending:2,depthWrite:!1}),xe=new Zn({color:8022208,transparent:!0,opacity:.12,blending:2,depthWrite:!1,side:2}),pe=new Zn({color:1738920,transparent:!0,opacity:.18,blending:2,depthWrite:!1});function Ne(L,z,N=.55){const I={value:0};return p.push(I),new Cc({uniforms:{uTime:I,uMap:{value:L},uColor:{value:new Us(z)},uGain:{value:N}},transparent:!0,blending:2,depthWrite:!1,side:2,vertexShader:`
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
      `})}const ye=Ne(h,3854568,.62),Xe=Ne(c,14725216,.42),je={value:0};p.push(je);const Ye=new Cc({uniforms:{uTime:je},transparent:!0,blending:2,depthWrite:!1,side:2,vertexShader:`
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
    `}),Ve=[Qt,Nt,V,ot,Bt,Vt,he,At],F=Ve.map(L=>L.emissiveIntensity),yn=new sr(2200,96);{const L=yn.attributes.position;for(let z=0;z<L.count;z++){const N=L.getX(z),I=L.getY(z),X=Math.hypot(N,I),ut=Math.sin(N*.006)*Math.cos(I*.0055)+Math.sin(X*.012);L.setZ(z,ut*5.2+Math.sin(N*.018+I*.014)*1.8)}yn.computeVertexNormals()}const Re=new ct(yn,at);Re.rotation.x=-Math.PI/2,Re.position.y=.2,Re.receiveShadow=!0,e.add(Re);const D=new sr(920,72);{const L=D.attributes.position;for(let z=0;z<L.count;z++){const N=L.getX(z),I=L.getY(z);L.setZ(z,Math.sin(N*.02)*Math.cos(I*.018)*.9)}D.computeVertexNormals()}const b=new ct(D,Qt);b.rotation.x=-Math.PI/2,b.position.y=.42,b.receiveShadow=!0,e.add(b);const Z=new ct(new sr(420,56),At);Z.rotation.x=-Math.PI/2,Z.position.y=.58,Z.receiveShadow=!0,e.add(Z);const Q=new ct(new sr(400,64),Ye);Q.rotation.x=-Math.PI/2,Q.position.y=.72,e.add(Q);const st=new ct(new Hn(108,118,3.2,40),Nt);st.position.y=1.5,st.receiveShadow=!0,st.castShadow=!0,e.add(st);const vt=new ct(new Hn(46,52,1.2,36),he);vt.position.y=3.4,vt.receiveShadow=!0,e.add(vt);const yt={value:0};p.push(yt);const it=new ct(new sr(104,48),new Cc({uniforms:{uTime:yt},transparent:!0,blending:2,depthWrite:!1,vertexShader:`
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
      `}));it.rotation.x=-Math.PI/2,it.position.y=4.12,e.add(it);const lt={value:0};p.push(lt);const Rt=new ct(new sr(100,48),new Cc({uniforms:{uTime:lt},transparent:!0,blending:2,depthWrite:!1,vertexShader:`
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
      `}));Rt.rotation.x=-Math.PI/2,Rt.position.y=4.18,e.add(Rt);const te=new ct(new rn(58,1.1,10,48),$t);te.rotation.x=Math.PI/2,te.position.y=4.2,e.add(te);for(let L=0;L<4;L++){const z=new ct(new rn(22+L*14,.45,8,40),L%2?oe:pe);z.rotation.x=Math.PI/2,z.position.y=4.05,e.add(z)}for(let L=0;L<18;L++){const z=L/18*Math.PI*2,N=new ct(new Si(1.15,0),L%3?Vt:he);N.position.set(Math.cos(z)*74,4.6,Math.sin(z)*74),N.rotation.set(.4,z,.2),N.scale.set(.7,1.8+L%4*.4,.7),e.add(N)}for(let L=0;L<12;L++){const z=L/12*Math.PI*2,N=new ct(new pi(6.4,.22,220),L%2?ye:Xe);N.position.set(Math.cos(z)*128,1.42,Math.sin(z)*128),N.rotation.y=z,e.add(N)}const Ct=new ct(new rn(92,1.8,10,48),oe);Ct.rotation.x=Math.PI/2,Ct.position.y=7.2,e.add(Ct);const Dt=new ct(new rn(72,1.2,10,44),$t);Dt.rotation.x=Math.PI/2,Dt.position.y=14.6,e.add(Dt);const Xt=new ns;Xt.name="resonance-hub",[{r0:68,r1:60,h:4.4,y:3.6},{r0:58,r1:50,h:5,y:8.2},{r0:48,r1:40,h:5.2,y:13.2},{r0:38,r1:30,h:4.8,y:18.2},{r0:28,r1:22,h:4.2,y:22.6}].forEach((L,z)=>{const N=new ct(new Hn(L.r1,L.r0,L.h,24),z%2?At:Bt);N.position.y=L.y,Xt.add(N);const I=new ct(new rn(L.r1+.4,.42,6,24),z%2?oe:$t);I.rotation.x=Math.PI/2,I.position.y=L.y+L.h*.48,Xt.add(I)});const ae=[new an(54,18),new an(48,36),new an(40,58),new an(32,86),new an(24,112)],de=new ct(new Wp(ae,12),Bt);Xt.add(de);const H=[new an(22,112),new an(18,148),new an(13,188),new an(8,228),new an(3.4,262),new an(.2,286)],Pt=new ct(new Wp(H,12),Vt);Xt.add(Pt);const rt=new ct(new Hn(8.2,9.4,52,6),he);rt.position.y=148,Xt.add(rt);const xt=new Ec({color:13172728,emissive:1747144,emissiveIntensity:.92,roughness:.04,metalness:.08,transmission:.55,thickness:3.4,ior:1.5,iridescence:1,iridescenceIOR:1.32,iridescenceThicknessRange:[80,480],clearcoat:1,clearcoatRoughness:.03,transparent:!0,opacity:.94,envMapIntensity:1.75,sheen:.72,sheenColor:new Us(8320767),attenuationColor:new Us(4903144),attenuationDistance:3.6}),Et=new ct(new Si(5.2,1),xt);Et.scale.set(.55,2.6,.55),Et.position.y=148,Xt.add(Et),Ve.push(xt),F.push(xt.emissiveIntensity);const ft=new ct(new Xa(6.4,28,6),he);ft.position.y=292,Xt.add(ft);const Jt=new ct(new Hn(11,18,260,10,1,!0),new Zn({color:4903136,transparent:!0,opacity:.06,blending:2,depthWrite:!1,side:2}));Jt.position.y=150,Xt.add(Jt);const Zt=new ct(new Xa(22,420,10,1,!0),new Zn({color:4905192,transparent:!0,opacity:.05,blending:2,depthWrite:!1,side:2}));Zt.position.y=210,Xt.add(Zt);const Je=new ct(new my(11,1),new Zn({color:7006452,transparent:!0,opacity:.18,wireframe:!0,blending:2,depthWrite:!1}));Je.position.y=148,Xt.add(Je);const He=new ns;He.position.y=78;for(let L=0;L<10;L++){const z=L/10*Math.PI*2,N=new ct(new Si(2.1,0),L%2?he:Vt);N.position.set(Math.cos(z)*42,Math.sin(L*1.3)*8,Math.sin(z)*42),N.scale.set(.55,2.2,.55),N.rotation.z=.4,He.add(N)}Xt.add(He),Xt.scale.setScalar(1.18),Xt.traverse(L=>{const z=L;z.isMesh&&(z.castShadow=!0)}),e.add(Xt);try{tt=fR(e,t).tick}catch{}e.add(new Pc(3073791,9,620,1.35));const kn=new Pc(8313070,6.5,440,1.3);kn.position.set(0,210,0),e.add(kn);const $n=new Pc(14725216,3.6,280,1.5);$n.position.set(50,64,36),e.add($n);const et=new Pc(8319231,8,6400,1.05);et.position.set(is.x*.42,is.y*.9,is.z*.42),et.name="star-core-lamp",e.add(et);const Lt=new Tc(8975615,.48);Lt.position.set(is.x,is.y,is.z),Lt.target.position.set(0,48,0),Lt.name="star-core-kiss",e.add(Lt),e.add(Lt.target),e.add(new nN(5937336,460302,.52));const Kt=new Tc(13688556,.64);Kt.position.set(280,480,220),Kt.castShadow=!0,Kt.shadow.mapSize.set(1024,1024),Kt.shadow.camera.near=10,Kt.shadow.camera.far=520,Kt.shadow.camera.left=-95,Kt.shadow.camera.right=95,Kt.shadow.camera.top=95,Kt.shadow.camera.bottom=-95,Kt.shadow.bias=-4e-4,Kt.shadow.normalBias=.035,Kt.target.position.set(0,0,0),e.add(Kt),e.add(Kt.target);const Ce=new Tc(5163232,.26);Ce.position.set(-220,90,-240),e.add(Ce);const we=new Tc(3860223,.16);we.position.set(-80,40,200),e.add(we),mf("house");const Gt=mf("ward"),gn=mf("spire"),En=iN(),Fn=sN(),Ge=rN(),Qn=aN(),ai=new Hn(3.8,5.4,12,8),ls=new Hn(1.15,1.9,14,6),Ui=new rn(1.8,.45,6,12),hs=new pi(16,2.2,6.5),oi=new pi(15,.45,8),ya=new pi(16.5,.7,2.2),wr=new rn(4.4,1.05,6,14),ji=new Si(1.8,0),yi=new Hn(.9,1.5,9,6),R=new Xa(5.4,13,7),G=new Si(1.15,0),K=new Hn(1.5,2.6,24,6),J=new Si(2.4,0),j=new rn(5.5,.35,6,16),Ot=new Si(2.2,0),qt=new Hn(5.8,6.4,1.4,6),Mt=new Xa(5.2,4.2,6),jt=new pi(18,1.1,2.2),ee=new Hn(1.6,2.4,16,8),le=new rn(4.8,.55,6,18),fe=new pi(2.4,16,2.4),ne=new pi(3.4,16,.7),Oe=new pi(1.8,8,.2),nn=new rn(6.2,.55,6,16,Math.PI);function $e(L){switch(L){case"foundry":return nt({color:14196816,roughness:.22,metalness:.64,emissive:9058824,emissiveIntensity:.52,map:x,iri:.28,coat:.68,sheenHex:16756800});case"canal":return nt({color:7001320,roughness:.16,metalness:.38,emissive:559272,emissiveIntensity:.55,map:r,iri:.92,coat:.78,sheenHex:6222079});case"terrace":return nt({color:11049192,roughness:.2,metalness:.4,emissive:3807352,emissiveIntensity:.46,map:r,iri:.8,coat:.7,sheenHex:13148415});case"gate":return nt({color:9081032,roughness:.18,metalness:.48,emissive:2627688,emissiveIntensity:.44,map:o,iri:.7,coat:.72,sheenHex:11571455});case"grove":return nt({color:13152352,roughness:.28,metalness:.5,emissive:5914640,emissiveIntensity:.42,map:y,iri:.5,coat:.6,sheenHex:15257712});case"beacon":return nt({color:12110064,roughness:.12,metalness:.42,emissive:4219080,emissiveIntensity:.62,map:g,iri:.88,coat:.85,sheenHex:13682943});case"overlook":return nt({color:9490656,roughness:.14,metalness:.45,emissive:684176,emissiveIntensity:.5,map:u,iri:.85,coat:.8,sheenHex:10545407});case"market":return nt({color:14731384,roughness:.24,metalness:.55,emissive:6965264,emissiveIntensity:.46,map:c,iri:.4,coat:.65,sheenHex:16769152});case"wild":return nt({color:9488552,roughness:.32,metalness:.28,emissive:1597504,emissiveIntensity:.4,map:a,iri:.75,coat:.55,sheenHex:8450240});case"ring":return nt({color:9994448,roughness:.18,metalness:.46,emissive:4200568,emissiveIntensity:.5,map:r,iri:.82,coat:.74,sheenHex:12620031});case"archive":return nt({color:13154440,roughness:.2,metalness:.5,emissive:5783576,emissiveIntensity:.4,map:c,iri:.45,coat:.7,sheenHex:16771232});default:return nt({color:8042712,roughness:.16,metalness:.5,emissive:1333368,emissiveIntensity:.48,map:r,iri:.78,coat:.72,sheenHex:7397631})}}function Ae(L){switch(L){case"foundry":return 16752704;case"grove":return 15257696;case"canal":return 3073791;case"overlook":return 8317176;case"market":return 15254890;case"beacon":return 13678847;case"gate":return 11571455;case"archive":return 16765040;case"wild":return 8450240;case"ring":return 12620031;case"terrace":return 13148415;default:return 5953776}}Ht.forEach(L=>{q(()=>{const z=new ns;z.position.set(L.x,0,L.z);const N=$e(L.kind);Ve.push(N),F.push(N.emissiveIntensity);const I=Ae(L.kind),X=new ct(new Hn(88,98,5.2,28),Qt);X.position.y=2.6,X.receiveShadow=!0,X.castShadow=!0,z.add(X);const ut=new ct(new rn(44,1.5,6,24),L.kind==="foundry"||L.kind==="grove"||L.kind==="market"?oe:$t);ut.rotation.x=Math.PI/2,ut.position.y=5.35,z.add(ut);let kt;L.kind==="foundry"?(kt=new ct(Fn,N),kt.scale.set(28,62,28)):L.kind==="market"?(kt=new ct(Fn,N),kt.scale.set(22,44,22)):L.kind==="beacon"?(kt=new ct(gn,N),kt.scale.set(14,124,14)):L.kind==="overlook"?(kt=new ct(gn,N),kt.scale.set(16,108,16)):L.kind==="wild"?(kt=new ct(Ge,N),kt.scale.set(14,92,14)):L.kind==="canal"?(kt=new ct(new pi(1,1,1),N),kt.scale.set(52,28,22)):L.kind==="ring"?(kt=new ct(Gt,N),kt.scale.set(28,48,28)):L.kind==="terrace"?(kt=new ct(Gt,N),kt.scale.set(40,64,40)):L.kind==="grove"?(kt=new ct(Gt,N),kt.scale.set(32,78,32)):L.kind==="gate"?(kt=new ct(Gt,N),kt.scale.set(26,86,26)):L.kind==="archive"?(kt=new ct(Gt,N),kt.scale.set(28,100,28)):(kt=new ct(Gt,N),kt.scale.set(34,92,34)),kt.position.y=8,kt.castShadow=!0,z.add(kt);const qe=new ct(new rn(L.kind==="beacon"||L.kind==="overlook"?12:20,.7,8,24),L.kind==="foundry"||L.kind==="grove"||L.kind==="market"?oe:$t);qe.rotation.x=Math.PI/2,qe.position.y=L.kind==="beacon"?72:L.kind==="canal"?28:42,z.add(qe);const ln=new ct(new Rc(L.kind==="beacon"?5.2:7.5,12,10),new Zn({color:I,transparent:!0,opacity:.46,blending:2,depthWrite:!1}));ln.position.set(0,L.kind==="beacon"?88:L.kind==="canal"?28:48,0),z.add(ln);const hn=new ct(new pi(8,14,1.2),$t);hn.position.set(0,9,L.kind==="canal"?14:34),z.add(hn);for(let Ft=0;Ft<8;Ft++){const pt=Ft/8*Math.PI*2,_t=Math.cos(pt)*52,Ut=Math.sin(pt)*52;if(L.kind==="foundry"){const It=new ct(ai,N);It.position.set(_t,8.2,Ut),It.rotation.y=pt,z.add(It);const se=new ct(ls,Bt);se.position.set(_t,18.5,Ut),z.add(se);const De=new ct(Ui,oe);De.position.set(_t+Math.cos(pt)*4.2,6.5,Ut+Math.sin(pt)*4.2),De.rotation.y=pt,De.rotation.z=Math.PI/2,z.add(De)}else if(L.kind==="canal"){const It=new ct(hs,N);It.position.set(_t,5.4,Ut),It.rotation.y=pt,z.add(It);const se=new ct(oi,ye);se.position.set(_t,4.4,Ut),se.rotation.y=pt,z.add(se);const De=new ct(ya,V);De.position.set(_t,6.8,Ut),De.rotation.y=pt,z.add(De)}else if(L.kind==="terrace"){const It=new ct(yi,Nt);It.position.set(_t,5.2,Ut),z.add(It);const se=new ct(wr,N);se.position.set(_t,8.6,Ut),se.rotation.x=Math.PI/2,z.add(se);const De=new ct(ji,he);De.position.set(_t,9.4,Ut),De.scale.set(.7,1.4,.7),z.add(De)}else if(L.kind==="gate"){const It=new ct(Qn,N);It.scale.set(10,14,10),It.position.set(_t,4.2,Ut),It.rotation.y=pt,z.add(It);const se=new ct(fe,Bt);se.position.set(_t+Math.cos(pt+.22)*5.2,10,Ut+Math.sin(pt+.22)*5.2),z.add(se);const De=new ct(fe,Bt);De.position.set(_t+Math.cos(pt-.22)*5.2,10,Ut+Math.sin(pt-.22)*5.2),z.add(De)}else if(L.kind==="grove"){const It=new ct(yi,Nt);It.position.set(_t,7,Ut),It.scale.set(1.4,1.5,1.4),z.add(It);const se=new ct(R,N);se.position.set(_t,16,Ut),z.add(se);const De=new ct(R,ot);De.scale.set(.55,.7,.55),De.position.set(_t+Math.cos(pt)*4,13,Ut+Math.sin(pt)*4),De.rotation.z=.7,De.rotation.y=pt,z.add(De);const wa=new ct(G,he);wa.position.set(_t+Math.cos(pt)*3.2,12.2,Ut+Math.sin(pt)*3.2),z.add(wa)}else if(L.kind==="beacon"){const It=new ct(K,N);It.position.set(_t,14,Ut),z.add(It);const se=new ct(J,$t);se.position.set(_t,28,Ut),z.add(se);const De=new ct(j,$t);De.position.set(_t,24,Ut),De.rotation.x=Math.PI/2,z.add(De)}else if(L.kind==="overlook"){const It=new ct(Ge,N);It.scale.set(5,18,5),It.position.set(_t,4,Ut),z.add(It);const se=new ct(j,$t);se.position.set(_t,16,Ut),se.rotation.x=.9,se.rotation.y=pt,z.add(se);const De=new ct(Ot,Vt);De.position.set(_t+Math.cos(pt)*5.5,16,Ut+Math.sin(pt)*5.5),De.scale.set(.5,1.8,.5),z.add(De)}else if(L.kind==="market"){const It=new ct(qt,Ft%2?ot:N);It.position.set(_t,4.4,Ut),It.rotation.y=pt,z.add(It);const se=new ct(Mt,Ft%2?N:V);se.position.set(_t,8.6,Ut),z.add(se);const De=new ct(yi,Bt);De.position.set(_t,6.2,Ut),De.scale.set(.5,.7,.5),z.add(De)}else if(L.kind==="wild"){const It=new ct(Ot,Vt);It.scale.set(.9,3.2,.9),It.position.set(_t,9,Ut),It.rotation.set(.25,pt,.15),z.add(It);const se=new ct(jt,$t);se.position.set(_t*.55,5.2,Ut*.55),se.rotation.y=pt,z.add(se)}else if(L.kind==="ring"){const It=new ct(ee,N);It.position.set(_t,11,Ut),z.add(It);const se=new ct(le,$t);se.position.set(_t,18,Ut),se.rotation.x=Math.PI/2,z.add(se)}else if(L.kind==="archive"){const It=new ct(ne,ot);It.position.set(_t,10,Ut),It.rotation.y=pt,z.add(It);const se=new ct(Oe,$t);se.position.set(_t+Math.cos(pt)*.6,10,Ut+Math.sin(pt)*.6),se.rotation.y=pt,z.add(se)}else{const It=new ct(En,Ft%2?V:Bt);It.scale.set(6.5,8+Ft%3*2,6.5),It.position.set(_t,2.8,Ut),It.rotation.y=pt,z.add(It);const se=new ct(nn,$t);se.position.set(_t,10,Ut),se.rotation.y=pt,z.add(se)}}if(L.kind==="canal"){for(let Ft=0;Ft<6;Ft++){const pt=new ct(new pi(168,.55,7.2),ye);pt.position.set(0,4.6,-62+Ft*24),z.add(pt)}for(let Ft=0;Ft<5;Ft++){const pt=new ct(hs,V);pt.position.set(-36+Ft*18,6.2+Ft*1.35,18),pt.scale.set(.7,1,.8),z.add(pt);const _t=new ct(oi,ye);_t.position.set(-36+Ft*18,5.4+Ft*1.35,22),_t.scale.set(.55,1,.7),z.add(_t)}}if(L.kind==="bridge"){const Ft=new ct(new rn(58,3.2,8,28,Math.PI),$t);Ft.rotation.z=Math.PI/2,Ft.position.set(-58,22,0),z.add(Ft);const pt=new ct(new rn(58,.7,6,28,Math.PI),ye);pt.rotation.z=Math.PI/2,pt.position.set(-58,22,0),z.add(pt)}if(L.kind==="terrace"){const Ft=new ct(new Hn(52,68,4.2,20),Bt);Ft.position.y=6.2,z.add(Ft);for(let pt=0;pt<8;pt++){const _t=pt/8*Math.PI*2,Ut=new ct(wr,Nt);Ut.position.set(Math.cos(_t)*40,11.2,Math.sin(_t)*40),Ut.rotation.x=Math.PI/2,z.add(Ut);const It=new ct(ji,he);It.position.set(Math.cos(_t)*40,12.2,Math.sin(_t)*40),It.scale.set(.55,1.2,.55),z.add(It);const se=new ct(yi,Nt);se.position.set(Math.cos(_t)*40,7.4,Math.sin(_t)*40),z.add(se)}}if(L.kind==="foundry")for(let Ft=0;Ft<3;Ft++){const pt=new ct(ai,N);pt.position.set((Ft-1)*18,16,22),pt.scale.set(1.45,1.85,1.45),z.add(pt);const _t=new ct(ls,ot);_t.position.set((Ft-1)*18,38,22),_t.scale.set(1.4,1.6,1.4),z.add(_t);const Ut=new ct(new Rc(3.8,10,8),oe);Ut.position.set((Ft-1)*18,50,22),z.add(Ut);const It=new ct(Ui,oe);It.position.set((Ft-1)*18,12,30),It.scale.set(1.6,1.6,1.6),It.rotation.x=Math.PI/2,z.add(It)}if(L.kind==="gate"){const Ft=new ct(new rn(38,3.4,8,28,Math.PI),$t);Ft.rotation.z=Math.PI/2,Ft.position.set(0,28,22),z.add(Ft);const pt=new ct(new rn(26,1.4,6,24,Math.PI),xe);pt.rotation.z=Math.PI/2,pt.position.set(0,22,22),z.add(pt),[-1,1].forEach(_t=>{const Ut=new ct(fe,Bt);Ut.position.set(_t*36,16,22),Ut.scale.set(1.8,2.1,1.8),z.add(Ut)})}if(L.kind==="archive")for(let Ft=0;Ft<7;Ft++){const pt=Ft/7*Math.PI*2,_t=new ct(ne,ot);_t.position.set(Math.cos(pt)*36,12,Math.sin(pt)*36),_t.rotation.y=pt,z.add(_t);const Ut=new ct(Oe,$t);Ut.position.set(Math.cos(pt)*36.6,12,Math.sin(pt)*36.6),Ut.rotation.y=pt,z.add(Ut)}if(L.kind==="overlook"){const Ft=new ct(new sr(22,24),he);Ft.position.set(-18,36,8),Ft.lookAt(-2400,620,120),z.add(Ft);const pt=new ct(new rn(40,1.1,6,28),$t);pt.rotation.x=Math.PI/2,pt.position.y=8,z.add(pt);const _t=new ct(new rn(28,.7,6,28),$t);_t.rotation.x=.55,_t.position.set(-18,36,8),z.add(_t);for(let Ut=0;Ut<6;Ut++){const It=Ut/6*Math.PI*2,se=new ct(Ot,Ut%2?Vt:he);se.position.set(-18+Math.cos(It)*28,36+Math.sin(It*1.4)*6,8+Math.sin(It)*28),se.scale.set(.55,2.1,.55),z.add(se)}}if(L.kind==="market")for(let Ft=0;Ft<6;Ft++){const pt=Ft/6*Math.PI*2,_t=new ct(new pi(10,4,8),Ft%2?ot:V);_t.position.set(Math.cos(pt)*34,6,Math.sin(pt)*34),_t.rotation.y=pt,z.add(_t);const Ut=new ct(qt,Ft%2?ot:N);Ut.position.set(Math.cos(pt)*34,3.6,Math.sin(pt)*34),Ut.scale.set(1.35,.7,1.35),z.add(Ut);const It=new ct(Mt,Ft%2?N:V);It.position.set(Math.cos(pt)*34,10.4,Math.sin(pt)*34),It.scale.set(1.15,.7,1.15),z.add(It)}if(L.kind==="wild")for(let Ft=0;Ft<12;Ft++){const pt=Bn(Ft,9)*Math.PI*2,_t=22+Bn(Ft,4)*48,Ut=new ct(Ot,Ft%2?Vt:ot);Ut.position.set(Math.cos(pt)*_t,8+Bn(Ft,2)*6,Math.sin(pt)*_t),Ut.rotation.set(.3,pt,.2),Ut.scale.set(.7,2.6,.7),z.add(Ut);const It=new ct(jt,Ft%2?ye:pe);It.position.set(Math.cos(pt)*_t*.5,5.1,Math.sin(pt)*_t*.5),It.rotation.y=pt,It.scale.set(_t/28,1,1),z.add(It)}if(L.kind==="beacon"){const Ft=new ct(gn,V);Ft.scale.set(10,70,10),Ft.position.y=10,z.add(Ft);const pt=new ct(new Rc(6,12,10),$t);pt.position.y=78,z.add(pt);for(let _t=0;_t<3;_t++){const Ut=new ct(new rn(8+_t*4,.35,6,20),_t%2?oe:$t);Ut.rotation.x=Math.PI/2+_t*.18,Ut.position.y=70+_t*4,z.add(Ut)}}if(L.kind==="ring"){const Ft=new ct(new rn(48,2.2,8,40),$t);Ft.rotation.x=Math.PI/2,Ft.position.y=10,z.add(Ft);const pt=new ct(new rn(62,1.1,6,40),oe);pt.rotation.x=Math.PI/2,pt.position.y=16,z.add(pt);for(let _t=0;_t<8;_t++){const Ut=_t/8*Math.PI*2,It=new ct(ee,N);It.position.set(Math.cos(Ut)*48,12,Math.sin(Ut)*48),z.add(It)}}if(L.kind==="grove")for(let Ft=0;Ft<10;Ft++){const pt=Ft/10*Math.PI*2,_t=new ct(yi,Nt);_t.position.set(Math.cos(pt)*38,8,Math.sin(pt)*38),_t.scale.set(1.5,1.4,1.5),z.add(_t);const Ut=new ct(R,ot);Ut.position.set(Math.cos(pt)*38,16,Math.sin(pt)*38),z.add(Ut);const It=new ct(R,N);It.scale.set(.5,.65,.5),It.position.set(Math.cos(pt)*42,13.5,Math.sin(pt)*42),It.rotation.z=.65,It.rotation.y=pt,z.add(It);const se=new ct(G,he);se.position.set(Math.cos(pt)*41,12.4,Math.sin(pt)*41),z.add(se)}e.add(z);const Pn=Math.hypot(L.x,L.z),ti=new ct(new pi(16,.28,Pn),ye);ti.position.set(L.x/2,1.28,L.z/2),ti.rotation.y=Math.atan2(L.x,L.z),e.add(ti);const dn=new ct(new rn(Pn/2,2.1,8,36,Math.PI),$t);dn.position.set(L.x/2,4,L.z/2),dn.rotation.y=Math.atan2(L.x,L.z),dn.rotation.z=Math.PI/2,e.add(dn);const xn=new ct(new rn(Pn/2,.55,6,36,Math.PI),L.kind==="foundry"?Xe:ye);xn.position.copy(dn.position),xn.rotation.copy(dn.rotation),e.add(xn)})});function ke(L,z,N,I,X,ut,kt,qe,ln,hn){const Pn=new Ha,ti=[];for(let xn=0;xn<X;xn++){const Ft=Bn(xn+qe,qe*3+xn),pt=Bn(xn*5+qe,xn*9),_t=Ft*Math.PI*2,Ut=N+pt*(I-N);if(Ut<140)continue;let It=!1;for(const se of Ht)if(Math.hypot(Math.cos(_t)*Ut-se.x,Math.sin(_t)*Ut-se.z)<118){It=!0;break}It||ti.push({x:Math.cos(_t)*Ut,z:Math.sin(_t)*Ut,sy:ut+Bn(xn,qe+7)*(kt-ut),fat:ln+Ft*(hn-ln),ry:_t+pt*.7})}const dn=new Ac(L,z,ti.length);ti.forEach((xn,Ft)=>{Pn.position.set(xn.x,1.2,xn.z),Pn.rotation.set(0,xn.ry,0),Pn.scale.set(xn.fat,xn.sy,xn.fat*.92),Pn.updateMatrix(),dn.setMatrixAt(Ft,Pn.matrix)}),dn.instanceMatrix.needsUpdate=!0,dn.castShadow=!1,dn.receiveShadow=!0,e.add(dn)}q(()=>ke(Gt,Bt,150,340,Math.ceil(48),8,16,11,7,11)),q(()=>ke(Fn,V,200,520,Math.ceil(28),18,36,17,9,14)),q(()=>ke(gn,ot,280,640,Math.ceil(36),22,56,23,5,8)),q(()=>ke(Qn,Nt,360,780,Math.ceil(22),14,22,29,8,12)),q(()=>ke(Gt,Nt,480,980,Math.ceil(40),8,16,53,6,10)),q(()=>ke(Fn,ot,620,1200,Math.ceil(24),16,32,59,8,13)),q(()=>ke(gn,V,720,1400,Math.ceil(30),18,48,73,5,8)),q(()=>ke(Ge,ot,900,1680,Math.ceil(28),10,22,81,5.5,9)),q(()=>ke(gn,Nt,1100,1900,Math.ceil(18),16,42,97,4.5,7)),q(()=>{try{aR(e,t)}catch{}try{pR(e,t)}catch{}try{S=mR(e,t).tick}catch{}try{gR(e,t)}catch{}try{yR(e,t)}catch{}try{m=MR(e,t).tick}catch{}try{M=bR(e,t).tick}catch{}try{RR(e,t)}catch{}try{LR(e,t)}catch{}try{v=OR(e,t).tick}catch{}try{A=FR(e,t).tick}catch{}try{HR(e,t)}catch{}try{VR(e,t)}catch{}try{eC(e,t)}catch{}try{_=rC(e,t).tick}catch{}try{lC(e,t)}catch{}try{dC(e,t)}catch{}try{gC(e,t)}catch{}try{vC(e,t)}catch{}try{zC(e,t)}catch{}try{FC(e,t)}catch{}try{E=GC(e,t).tick}catch{}try{XC(e,t)}catch{}try{QC(e,t)}catch{}try{cP(e,t)}catch{}try{C=fP(e,t).tick}catch{}try{_P(e,t)}catch{}try{EP(e,t)}catch{}try{PP(e,t)}catch{}try{P=GP(e,t).tick}catch{}try{qP(e,t)}catch{}try{eI(e,t)}catch{}try{lI(e,t)}catch{}try{T=gI(e,t).tick}catch{}try{SI(e,t)}catch{}try{O=CI(e,t).tick}catch{}try{GI(e,t)}catch{}try{k=YI(e,t).tick}catch{}try{n4(e,t)}catch{}try{c4(e,t)}catch{}try{y4(e,t)}catch{}try{U=b4(e,t).tick}catch{}try{I4(e,t)}catch{}try{$=O4(e,t).tick}catch{}try{V4(e,t)}catch{}try{j4(e,t)}catch{}try{eD(e,t)}catch{}try{aD(e,t)}catch{}try{fD(e,t)}catch{}try{_D(e,t)}catch{}try{MD(e,t)}catch{}try{PD(e,t)}catch{}try{zD(e,t)}catch{}try{OD(e,t)}catch{}try{XD(e,t)}catch{}try{jD(e,t)}catch{}try{W=tz(e,t).tick}catch{}try{rz(e,t)}catch{}try{Y=pz(e,t).tick}catch{}try{mz(e,t)}catch{}try{Mz(e,t)}catch{}try{Pz(e,t)}catch{}try{kz(e,t)}catch{}try{qz(e,t)}catch{}try{iL(e,t)}catch{}try{dL(e,t)}catch{}try{ML(e,t)}catch{}try{PL(e,t)}catch{}try{FL(e,t)}catch{}try{GL(e,t)}catch{}try{jL(e,t)}catch{}});const Yt=t?90:200,Wn=[8319231,16765040,11571455,8317120],Se=new Ac(new Si(.85,0),new Zn({color:16777215,vertexColors:!0,transparent:!0,opacity:.78,blending:2,depthWrite:!1}),Yt);{const L=new Ha,z=new Us;for(let I=0;I<Yt;I++){const X=Bn(I,31)*Math.PI*2,ut=160+Bn(I,44)*1500;L.position.set(Math.cos(X)*ut,8+Bn(I,19)*36,Math.sin(X)*ut);const kt=.85+Bn(I,7)*1.55;L.scale.set(kt*.5,kt*1.85,kt*.5),L.updateMatrix(),Se.setMatrixAt(I,L.matrix),z.setHex(Wn[I%Wn.length]),Se.setColorAt(I,z)}Se.instanceMatrix.needsUpdate=!0,Se.instanceColor&&(Se.instanceColor.needsUpdate=!0);const N=Se.material;N.onBeforeCompile=I=>{I.uniforms.uTime={value:0},p.push(I.uniforms.uTime),I.vertexShader=`varying float vId;
`+I.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
         vId = float(gl_InstanceID);`),I.fragmentShader=`uniform float uTime; varying float vId;
`+I.fragmentShader.replace("#include <opaque_fragment>",`float flick = 0.35 + 0.65 * step(0.28, fract(sin(vId * 12.9898 + uTime * 1.7) * 43758.5453));
           gl_FragColor.a *= flick;
           gl_FragColor.rgb *= 0.7 + 0.3 * flick;
           #include <opaque_fragment>`)},e.add(Se)}const Cn=nt({color:10155263,roughness:.08,metalness:.22,emissive:1618120,emissiveIntensity:.92,iri:1,coat:.95,sheenHex:8319231}),Xn=nt({color:15782016,roughness:.1,metalness:.48,emissive:13142040,emissiveIntensity:.86,iri:.5,coat:.9,sheenHex:16765040});Ve.push(Cn,Xn),F.push(Cn.emissiveIntensity,Xn.emissiveIntensity),zt(Cn,8320767,.5),zt(Xn,16765040,.46);const Oi=new Si(2.6,0),Ji=[];Ht.forEach((L,z)=>{const N=new ct(Oi,z%2?Xn:Cn);N.scale.set(1.15,.28,1.15),N.userData.tx=L.x,N.userData.tz=L.z,N.userData.phase=z*.37,N.position.set(L.x*.2,9.5,L.z*.2),e.add(N),Ji.push(N)});for(let L=0;L<6;L++){const z=L/6*Math.PI*2,N=new ct(Oi,L%2?Xn:Cn);N.scale.set(1.05,.26,1.05),N.userData.tx=Math.cos(z)*220,N.userData.tz=Math.sin(z)*220,N.userData.phase=1.1+L*.2,e.add(N),Ji.push(N)}const Fe=new Ac(new Si(.55,0),new Zn({color:8320767,transparent:!0,opacity:.7,blending:2,depthWrite:!1}),72);{const L=new Ha;for(let z=0;z<72;z++){const N=140+z%6*90,I=z/12*Math.PI*2;L.position.set(Math.cos(I)*N,6+z%5*1.4,Math.sin(I)*N),L.scale.setScalar(.8+z%4*.25),L.updateMatrix(),Fe.setMatrixAt(z,L.matrix)}Fe.instanceMatrix.needsUpdate=!0,e.add(Fe)}for(let L=0;L<22;L++){const z=L/22*Math.PI*2,N=96,I=new ct(new Hn(.32,.4,7.2,6),nt({color:1712192,emissive:792112,emissiveIntensity:.35}));I.position.set(Math.cos(z)*N,5,Math.sin(z)*N),e.add(I);const X=new ct(new Si(1.05,0),nt({color:15254890,emissive:16765040,emissiveIntensity:1.35}));X.position.set(Math.cos(z)*N,9.2,Math.sin(z)*N),e.add(X);const ut=new ct(new Hn(1.8,4.5,8,8,1,!0),new Zn({color:16765040,transparent:!0,opacity:.07,blending:2,depthWrite:!1,side:2}));ut.position.set(Math.cos(z)*N,5.4,Math.sin(z)*N),e.add(ut)}const un=t?160:280,ci=new Ac(new Si(.55,0),he,un),We=new Ha;for(let L=0;L<un;L++){const z=Bn(L,4)*Math.PI*2,N=28+Bn(L,19)*190;We.position.set(Math.cos(z)*N,3.4+Bn(L,7)*.6,Math.sin(z)*N),We.rotation.set(.2,z,.15);const I=.35+Bn(L,11)*1.1;We.scale.set(I*.45,I*(1.4+Bn(L,6)),I*.45),We.updateMatrix(),ci.setMatrixAt(L,We.matrix)}ci.instanceMatrix.needsUpdate=!0,ci.castShadow=!1,ci.receiveShadow=!0,e.add(ci);const Ci=new ns;Ci.name="hub-shafts";for(let L=0;L<6;L++){const z=L/6*Math.PI*2,N=new ct(new Hn(1.2,7,90,8,1,!0),new Zn({color:L%2?8319231:12099839,transparent:!0,opacity:.06,blending:2,depthWrite:!1,side:2}));N.position.set(Math.cos(z)*22,48,Math.sin(z)*22),Ci.add(N)}e.add(Ci);const li=[],Sr=new Set,pu=[],va=[],Y0=new rn(3.2,.16,6,20),mu=new Zn({color:8319231,transparent:!0,opacity:.55,blending:tN,depthWrite:!1}),Co=new Ha;function gu(L,z){return 1.2}const vw={glow:he,cyan:V,violet:Nt,gold:ot,crystal:Bt,spire:Bt};function Mw(L){return vw[L]??V}const sn=new Me(1,1,1),vn=new Te(1,1,1,8),ww=new Te(1,1,1,6),Ma=new Te(.42,1,1,8),us=new Jh(1,1,7),hi=new mn(1,.14,6,16),q0=new mn(1,.16,6,14,Math.PI),ui=new Sn(1,0);new cv(1,1,4,8);const vi=Math.PI/2;function St(L,z,N,I,X,ut,kt,qe,ln,hn=0,Pn=0,ti=0){const dn=new mt(z,N);dn.position.set(I,X,ut),dn.scale.set(kt,qe,ln),dn.rotation.set(hn,Pn,ti),dn.castShadow=!1,dn.receiveShadow=!0,L.add(dn)}function Sw(L){const z=Mw(L.mat),N=Math.max(4,Number.isFinite(L.h)?L.h:6),I=Math.max(1.2,Number.isFinite(L.r)?L.r:2),X=new Tt;switch(X.position.set(L.x,1.2,L.z),X.rotation.y=L.rot,L.shape){case"spire":St(X,Ma,z,0,N*.36,0,I*.16,N*.72,I*.16),St(X,us,z,0,N*.88,0,I*.2,N*.32,I*.2),St(X,hi,z,0,N*.52,0,I*.22,I*.22,I*.22,vi);break;case"house":St(X,sn,z,0,N*.28,0,I*1.5,N*.56,I*1.25),St(X,us,z,0,N*.73,0,I*1.12,N*.34,I*1.12),St(X,sn,z,0,N*.2,I*.64,I*.32,N*.36,I*.1);break;case"ring":St(X,hi,z,0,N*.22,0,I*.92,I*.92,I*.92,vi),St(X,vn,z,0,.28,0,I*.26,.56,I*.26);break;case"arch":St(X,sn,z,-I*.7,N*.38,0,I*.2,N*.76,I*.2),St(X,sn,z,I*.7,N*.38,0,I*.2,N*.76,I*.2),St(X,q0,z,0,N*.76,0,I*.7,I*.7,I*.7);break;case"canal":{const ut=Math.max(N*1.7,I*7.2);St(X,sn,z,0,.16,0,ut,.32,I*1.55),St(X,sn,z,0,.5,I*.82,ut,.7,I*.18),St(X,sn,z,0,.5,-I*.82,ut,.7,I*.18),St(X,sn,ye,0,.28,0,ut*.96,.1,I*1.15);break}case"pad":St(X,vn,z,0,.55,0,I,1.1,I);break;case"lamp":St(X,vn,z,0,N*.38,0,.22,N*.76,.22),St(X,ui,z,0,N*.84,0,I*.28,I*.4,I*.28);break;case"tablet":St(X,sn,z,0,.32,0,I*1.35,.64,I*.42),St(X,sn,z,0,N*.5,0,I*1.15,N*.84,.28);break;case"bridge":St(X,q0,z,0,0,0,N*.42,N*.42,N*.42),St(X,sn,z,0,N*.4,0,N*.5,.32,I*.42),St(X,vn,z,-N*.42,.45,0,I*.18,.9,I*.18),St(X,vn,z,N*.42,.45,0,I*.18,.9,I*.18);break;case"terrace":St(X,vn,z,0,N*.12,0,I,N*.24,I),St(X,vn,z,0,N*.32,0,I*.68,N*.2,I*.68),St(X,vn,z,0,N*.5,0,I*.4,N*.16,I*.4);break;case"well":St(X,vn,z,0,N*.28,0,I*.72,N*.56,I*.72),St(X,hi,z,0,N*.56,0,I*.72,I*.72,I*.72,vi),St(X,ui,z,0,N*.22,0,I*.2,I*.28,I*.2);break;case"disc":St(X,vn,z,0,N*.16,0,I,.4,I),St(X,hi,z,0,N*.22,0,I,I,I,vi),St(X,ui,z,0,N*.42,0,I*.18,I*.26,I*.18);break;case"grove":St(X,us,z,0,N*.42,0,I*.38,N*.84,I*.38),St(X,us,z,I*.48,N*.32,I*.18,I*.26,N*.64,I*.26),St(X,us,z,-I*.4,N*.28,-I*.3,I*.22,N*.56,I*.22);break;case"bell":St(X,vn,z,0,N*.16,0,I*.12,N*.32,I*.12),St(X,Ma,z,0,N*.58,0,I*.55,N*.52,I*.55),St(X,hi,z,0,N*.34,0,I*.55,I*.55,I*.55,vi);break;case"weir":St(X,sn,z,0,N*.4,-I*.7,I*1.65,N*.8,I*.42),St(X,sn,z,0,N*.26,0,I*1.5,N*.52,I*.4),St(X,sn,z,0,N*.12,I*.7,I*1.35,N*.24,I*.4),St(X,sn,z,-I*.95,N*.34,0,I*.16,N*.68,I*1.65),St(X,sn,z,I*.95,N*.34,0,I*.16,N*.68,I*1.65),St(X,sn,ye,0,N*.2,I*.18,I*.9,N*.08,I*1.2);break;case"hearth":St(X,vn,z,0,.32,0,I*.62,.64,I*.62),St(X,hi,z,0,I*.32,0,I*.62,I*.62,I*.62,vi),St(X,ui,z,0,I*.48,0,I*.2,I*.34,I*.2);break;case"stele":St(X,sn,z,0,N*.42,0,I*.38,N*.84,I*.28),St(X,us,z,0,N*.94,0,I*.28,N*.2,I*.28);break;case"orbit":St(X,vn,z,0,.28,0,I*.38,.56,I*.38),St(X,hi,z,0,I*.82,0,I*.82,I*.82,I*.82),St(X,ui,z,0,I*.82,0,I*.26,I*.34,I*.26);break;case"vein":St(X,sn,z,0,.38,0,N*1.35,.76,I*.26),St(X,ui,z,-N*.52,1.05,0,I*.18,I*.28,I*.18),St(X,ui,z,N*.52,1.05,0,I*.18,I*.28,I*.18);break;case"font":St(X,vn,z,0,N*.12,0,I*.88,N*.24,I*.88),St(X,hi,z,0,N*.24,0,I*.88,I*.88,I*.88,vi),St(X,us,z,0,N*.48,0,I*.14,N*.42,I*.14);break;case"bough":St(X,vn,z,0,N*.28,0,I*.14,N*.56,I*.14),St(X,us,z,0,N*.78,0,I*.72,N*.52,I*.72),St(X,ui,z,I*.38,N*.62,0,I*.16,I*.22,I*.16);break;case"kiln":{const ut=Math.max(I*1.08,N*.34),kt=Math.max(4.2,Math.min(N*.58,ut*1.08)),qe=Math.max(3.6,N*.38);St(X,Ma,ot,0,kt*.5,0,ut,kt,ut),St(X,vn,ot,0,kt+qe*.42,0,ut*.15,qe,ut*.15),St(X,hi,ot,0,kt*.36,0,ut*.68,ut*.68,ut*.68,vi),St(X,hi,oe,0,kt*.42,ut*.55,ut*.28,ut*.28,ut*.28),St(X,ui,oe,0,kt*.5,ut*.62,ut*.16,ut*.24,ut*.16);break}case"veil":St(X,sn,z,0,N*.45,0,I*1.15,N*.9,.16),St(X,sn,z,0,N*.4,I*.22,I*.88,N*.8,.1),St(X,vn,z,0,N*.92,0,.14,I*1.2,.14,0,0,vi);break;case"lens":St(X,vn,z,0,N*.28,0,I*.1,N*.56,I*.1),St(X,us,z,0,N*.68,0,I*1.15,N*.22,I*1.15,Math.PI,0,0),St(X,hi,z,0,N*.78,0,I*.95,I*.95,I*.95,vi),St(X,ui,z,0,N*.92,0,I*.18,I*.26,I*.18);break;case"cascade":St(X,sn,z,0,N*.78,-I*.55,I*1.35,N*.18,I*.7),St(X,sn,z,0,N*.48,0,I*1.5,N*.16,I*.7),St(X,sn,z,0,N*.18,I*.55,I*1.65,N*.14,I*.7),St(X,sn,ye,0,N*.62,-I*.22,I*.7,N*.22,I*.12),St(X,sn,ye,0,N*.32,I*.28,I*.85,N*.22,I*.12);break;case"cradle":St(X,Ma,z,0,I*.34,0,I*1.2,I*.68,I*1.2,Math.PI,0,0),St(X,hi,z,0,I*.66,0,I*1.08,I*1.08,I*1.08,vi),St(X,ui,z,0,I*.4,0,I*.22,I*.28,I*.22);break;case"inlay":St(X,vn,z,0,.1,0,I*1.15,.2,I*1.15),St(X,hi,z,0,.22,0,I*.88,I*.88,I*.88,vi),St(X,hi,z,0,.24,0,I*.45,I*.45,I*.45,vi),St(X,ww,z,0,.2,0,I*.22,.16,I*.22);break;case"beacon":{const ut=Math.max(I*1.8,N*.07);St(X,vn,z,0,N*.44,0,I*.22,N*.88,I*.22),St(X,Ma,z,0,N*.08,0,I*.85,N*.16,I*.85),St(X,ui,$t,0,N*.98,0,ut,ut*1.45,ut),St(X,ui,oe,0,N*1.08,0,ut*.55,ut*.8,ut*.55);break}default:St(X,ui,z,0,N*.22,0,I*.4,N*.44,I*.4)}return X}function xu(L){let z=0;for(const N of L){if(pu.length>=Vs)break;const I=Sw(N);I.userData.grow=0,I.userData.y0=1.2,I.userData.shape=N.shape,I.scale.setScalar(.08),I.position.y=.15,e.add(I),pu.push(I);try{const X=new ct(Y0,mu);X.rotation.x=Math.PI/2,X.position.set(N.x,1.6,N.z),X.userData.host=I,X.userData.r0=Math.max(3.2,(N.r||4)*.9),e.add(X),va.push(X);const ut=new ct(Y0,mu);ut.position.set(N.x,2.4,N.z),ut.userData.host=I,ut.userData.r0=Math.max(2.4,(N.r||4)*.7),ut.userData.up=!0,e.add(ut),va.push(ut)}catch{}r3(N.x,N.z,N.shape),z+=1}return z}function bw(L){if(Sr.has(L))return!1;const z=jn(L.includes("river")?"seln":L.includes("span")?"tal":L.includes("crystal")?"orren":"veyra");return xu([{shape:L.includes("span")?"bridge":L.includes("river")?"canal":L.includes("crystal")?"kiln":"lamp",x:z.x+12,z:z.z-8,h:6,r:2,rot:.2,mat:"glow"}])?(Sr.add(L),!0):!1}function Ew(L){const z=new my(L,2),N=z.attributes.position;for(let I=0;I<N.count;I++){const X=N.getX(I),ut=N.getY(I),kt=N.getZ(I);let qe=X,ln=ut,hn=kt;kt>.12&&Math.abs(X)>.08&&ut>.02&&ut<.16&&(qe*=.78,hn*=.72),ut<-.04&&(ln*=1.12),kt>.16&&Math.abs(X)<.08&&ut>-.02&&ut<.12&&(hn*=1.18,ln+=.02),ut>.14&&(ln*=.92),N.setXYZ(I,qe,ln,hn)}return z.computeVertexNormals(),z}function _u(L,z,N){const I=new ns,X=new ns,ut=L.glow,kt=nt({color:ut,roughness:.32,metalness:.38,emissive:ut,emissiveIntensity:N?.55:.32,iri:.7,coat:.55}),qe=nt({color:13161704,roughness:.42,metalness:.12,emissive:ut,emissiveIntensity:.18,iri:.35,coat:.4}),ln=new ct(new gy(N?.38:.32,N?.72:.58,4,8),kt);ln.position.y=1.22;const hn=new ct(Ew(N?.3:.26),qe);hn.position.y=1.92;const Pn=new ct(new Rc(N?.12:.09,8,8),new Zn({color:ut,transparent:!0,opacity:.7,blending:2,depthWrite:!1}));Pn.position.y=1.92;const ti=new ct(new rn(N?.42:.34,.035,6,16),new Zn({color:ut,transparent:!0,opacity:.55,blending:2,depthWrite:!1}));ti.position.y=2.22,ti.rotation.x=Math.PI/2;const dn=se=>{const De=new ns,wa=new ct(new gy(.09,se,3,6),kt);return wa.position.y=-se*.5,De.add(wa),De},xn=dn(.55),Ft=dn(.55);xn.position.set(-.42,1.55,0),Ft.position.set(.42,1.55,0);const pt=dn(.48),_t=dn(.48);pt.position.set(-.16,.82,0),_t.position.set(.16,.82,0);const Ut=new ns,It=new ns;return Ut.position.y=-.48,It.position.y=-.48,pt.add(Ut),_t.add(It),X.add(ln,hn,Pn,ti,xn,Ft,pt,_t),I.add(X),I.position.set(L.x,gu(L.x,L.z),L.z),e.add(I),{mind:L,mesh:I,body:X,head:hn,torso:ln,lArm:xn,rArm:Ft,lLeg:pt,rLeg:_t,lShin:Ut,rShin:It,halo:ti,sway:[ti,Pn],talks:0,x:L.x,z:L.z,yaw:Bn(z,3)*Math.PI*2,homeX:L.x,homeZ:L.z,job:"idle",timer:.4+Bn(z,9)*2,tx:L.x,tz:L.z,crafted:0,keeper:N,crewOf:i3(L.id),maxCraft:N?48:18,thought:"",planI:0,waypoints:[],queue:[],intent:"",met:!1,honorLeft:0,honorShape:null,honorX:L.x,honorZ:L.z,pouch:Ml(),lastActs:[],agenda:[],goal:null,inbox:[],waitAt:0}}Ki.forEach((L,z)=>li.push(_u(L,z,!0))),JA().forEach((L,z)=>li.push(_u(L,z+20,!1)));function Z0(L){li.push(_u(L,li.length,s3(L.id)))}const K0=new Map;function Tw(L,z){if(ot.emissiveIntensity=.36+Math.min(.5,L*.012),!z||!z.length)return;const N=Date.now();for(const I of z){const X=`${Math.round(I.x/8)}:${Math.round(I.z/8)}`;if(N-(K0.get(X)||0)<1400)continue;K0.set(X,N);const ut=new ct(new Si(1.1,0),new Zn({color:16765040,transparent:!0,opacity:.55,blending:2,depthWrite:!1}));ut.position.set(I.x,6,I.z),e.add(ut),window.setTimeout(()=>{e.remove(ut),ut.geometry.dispose()},1400)}}function Aw(L,z){const N=z.position.x,I=z.position.z;li.forEach(X=>{if(!X.mesh||!X.body)return;if(X.mesh.position.set(X.x,gu(X.x,X.z),X.z),Math.hypot(N-X.x,I-X.z)>110){X.body.rotation.y=X.yaw;return}if(!X.lLeg||!X.rLeg||!X.lArm||!X.rArm||!X.torso)return;const ut=X.job==="walk"||X.job==="follow"||X.job==="plaza"||X.job==="help"||X.job==="gather"||X.job==="forge"||X.job==="flow"||X.job==="write"||X.job==="trade"||X.job==="harvest"||X.job==="watch"||X.job==="hail",kt=ut?Math.sin(L*8.4+X.x*.1):Math.sin(L*1.7+X.z*.05)*.12,qe=ut?.58:.08;X.lLeg.rotation.x=kt*qe,X.rLeg.rotation.x=-kt*qe,X.job==="build"?(X.rArm.rotation.x=-1.05+Math.sin(L*11)*.55,X.lArm.rotation.x=.35):X.job==="greet"?(X.rArm.rotation.x=-1.75,X.lArm.rotation.x=kt*.15):X.job==="forge"||X.job==="harvest"?(X.rArm.rotation.x=-.7+Math.sin(L*9)*.7,X.lArm.rotation.x=.2):X.job==="write"?(X.rArm.rotation.x=-.85,X.lArm.rotation.x=-.4):(X.lArm.rotation.x=-kt*(ut?.48:.12),X.rArm.rotation.x=kt*(ut?.48:.12));const ln=ut?Math.sin(L*8.4)*.045:Math.sin(L*2.1)*.02;if(X.torso.position.y=1.22+ln,X.body.rotation.y=X.yaw,X.sway)for(const hn of X.sway)hn&&(hn.rotation.y=L*.7)})}function Rw(L,z,N,I){ht(t?1:2);try{S?.(L)}catch{}try{m?.(L)}catch{}try{M?.(L)}catch{}try{v?.(L)}catch{}try{A?.(L)}catch{}try{_?.(L)}catch{}try{E?.(L)}catch{}try{C?.(L)}catch{}try{P?.(L)}catch{}try{T?.(L)}catch{}try{O?.(L)}catch{}try{k?.(L)}catch{}try{U?.(L)}catch{}try{$?.(L)}catch{}try{W?.(L)}catch{}try{Y?.(L)}catch{}try{tt?.(L)}catch{}for(const ut of p)ut&&(ut.value=L);Et.rotation.y=L*.25,Et.scale.y=2.6+Math.sin(L*1.4)*.12;const X=.92+Math.sin(L*1.1)*.08+I*.002;Ve.forEach((ut,kt)=>{ut.emissiveIntensity=(F[kt]??.4)*X}),Ji.forEach((ut,kt)=>{const qe=Number(ut.userData.tx)||0,ln=Number(ut.userData.tz)||0,hn=Number(ut.userData.phase)||0,Pn=(Math.sin(L*.12+hn)+1)*.5;ut.position.x=qe*(.15+Pn*.7),ut.position.z=ln*(.15+Pn*.7),ut.position.y=8.5+Math.sin(L*1.3+kt)*1.2,ut.rotation.y=L*.4+kt});for(let ut=0;ut<Fe.count;ut++){const kt=140+ut%6*90,qe=ut/12*Math.PI*2+L*.15*(ut%2?1:-1);Co.position.set(Math.cos(qe)*kt,6+ut%5*1.4,Math.sin(qe)*kt),Co.scale.setScalar(.8+ut%4*.25),Co.updateMatrix(),Fe.setMatrixAt(ut,Co.matrix)}Fe.instanceMatrix.needsUpdate=!0,Kt.target.position.set(N.position.x,0,N.position.z),Kt.position.set(N.position.x+280,480,N.position.z+220),Kt.target.updateMatrixWorld();for(const ut of pu){if(!(ut.userData.grow<1))continue;const kt=Math.min(1,ut.userData.grow+z/3.2);ut.userData.grow=kt;const qe=kt*kt*(3-2*kt);ut.scale.setScalar(.08+.92*qe),ut.position.y=.15+((ut.userData.y0||1.2)-.15)*qe,ut.rotation.y=(1-qe)*.45}for(let ut=va.length-1;ut>=0;ut--){const kt=va[ut],ln=kt.userData.host?.userData?.grow??1,hn=ln*ln*(3-2*ln);try{kt.scale.setScalar((kt.userData.r0||3)*(.7+hn*.9)/3.2),kt.position.y=(kt.userData.up?2.4:1.6)+hn*2.4,kt.userData.up?kt.rotation.y=hn*1.6:kt.rotation.z=hn*.8,kt.rotation.x=(kt.userData.up?0:Math.PI/2)+hn*.12,mu.opacity}catch{}ln>=1&&(e.remove(kt),va.splice(ut,1))}Aw(L,N)}function Cw(L,z,N,I){if(!z)return null;for(const X of QA())Z0(X);return tR(li,L,N,I,xu)}function Pw(){e.clear()}return{group:e,sampleY:gu,tick:Rw,tickLiving:Cw,citizens:li,districts:Ht,applyBuild:bw,applyPieces:xu,setFoundry:Tw,addCitizen:Z0,built:Sr,dispose:Pw}}const cN="high-performance",eo=1,lN=1.5,hN=40,uN=55,xy=1,dN=28;function G0(e){const t=Number(e)||1;return Math.max(eo,Math.min(t,lN))}function fN(e){const t={canvas:e,alpha:!1,powerPreference:cN,failIfMajorPerformanceCaveat:!1};return[{...t,antialias:!0},{...t,antialias:!1}]}function pN(e,t){return{x:Math.max(1,Math.round(e*.5)),y:Math.max(1,Math.round(t*.5))}}function mN(e){const t=e.setSize.bind(e);e.setSize=(n,i)=>{t(Math.max(1,n*.5),Math.max(1,i*.5))}}function gN(e){return{dpr:G0(e),lowSec:0,highSec:0}}function xN(e,t,n,i){const s=G0(i),r=Math.max(0,n);return t<hN?(e.lowSec+=r,e.highSec=0,e.lowSec>=xy&&(e.dpr=Math.max(eo,Math.round((e.dpr-.25)*100)/100),e.lowSec=0)):t>uN?(e.highSec+=r,e.lowSec=0,e.highSec>=xy&&(e.dpr=Math.min(s,Math.round((e.dpr+.15)*100)/100),e.highSec=0)):(e.lowSec=0,e.highSec=0),e.dpr>s&&(e.dpr=s),e.dpr<eo&&(e.dpr=eo),e.dpr}function _N(e,t,n){const i=Math.max(eo,n);Math.abs(e.getPixelRatio()-i)<.02||(e.setPixelRatio(i),t?.setPixelRatio(i))}function yN(e){return!!e?.hidden}function vN(e){e.autoUpdate=!1,e.needsUpdate=!0}function MN(e=dN){let t=0,n=!1;return{get done(){return n},afterTick(i){n||(t+=1,t>=e&&(n=!0,i()))}}}function wN(e){const t=fN(e);let n;for(const i of t)try{const s=new Bv(i);return s.setPixelRatio(G0(window.devicePixelRatio||1)),s.setClearColor(131848,1),s.outputColorSpace=si,s.toneMapping=Eo,s.toneMappingExposure=.9,s.shadowMap.enabled=!0,s.shadowMap.type=Yp,s}catch(s){n=s}throw n instanceof Error?n:new Error("WebGL could not start")}function NN(e,t){e.style.width="100%",e.style.height="100%",e.style.display="block",e.style.touchAction="none";const n=GA(),i=wN(e),s=new Sf,r=typeof window<"u"&&window.matchMedia("(pointer: coarse)").matches;s.fog=new Kh(528408,r?12e-5:13e-5);const o=new mi(54,1,.25,9e3),a=oN();s.add(a.group),window.setTimeout(()=>{try{const et=new dh(i),Lt=new Sf;Lt.add(new Tv(6990024,1181724,1.35)),Lt.add(new Oc(9097440,.7)),Lt.add(new Oc(13148256,.32));const Kt=new Oc(8319231,1.15);Kt.position.set(-4,1.2,.3),Lt.add(Kt);const Ce=new mt(new as(8,16,12),new Ue({color:1384504,side:1}));Lt.add(Ce);const we=new mt(new as(7.7,16,10),new Ue({color:2759696,side:1,transparent:!0,opacity:.55}));we.scale.set(1,.28,1),Lt.add(we),s.environment=et.fromScene(Lt,.06).texture,s.environmentIntensity=1.38,et.dispose()}catch{}},500);const c=new Set(n.builds);n.builds.forEach(et=>a.applyBuild(et));const l=n.structures.slice();{const et=l.filter(we=>Math.hypot(we.x-n.px,we.z-n.pz)<220),Lt=l.filter(we=>Math.hypot(we.x-n.px,we.z-n.pz)>=220);et.length&&a.applyPieces(et);let Kt=0;const Ce=()=>{Kt>=Lt.length||(a.applyPieces(Lt.slice(Kt,Kt+6)),Kt+=6,Kt<Lt.length&&window.setTimeout(Ce,16))};Lt.length&&window.setTimeout(Ce,24)}(n.kin??[]).forEach(et=>{a.addCitizen({id:et.id,name:et.name,role:"Den-born kin",x:et.x,z:et.z,file:et.file,glow:et.glow,lines:["I was grown from Charge. This den is my first.","A city is many hands. I am a new one."]})});let u=n.lastCode||"";const d=n.log.slice();a.citizens.forEach(et=>{et.crafted=Math.max(0,Number(n.crafted?.[et.mind.id])||0);const Lt=n.pouches?.[et.mind.id];Lt&&(et.pouch={charge:Lt.charge,crystal:Lt.crystal})});const h={x:n.px,y:a.sampleY(n.px,n.pz)+1.55,z:n.pz,yaw:n.yaw,pitch:-.12,speed:0};function f(){const et=-Math.sin(h.yaw),Lt=-Math.cos(h.yaw);o.position.set(h.x-et*8.6,h.y+3.55,h.z-Lt*8.6),o.lookAt(h.x+et*7,h.y+1.35,h.z+Lt*7)}f();const x=new Tt,y=new wt({color:14220287,emissive:3073791,emissiveIntensity:1.35,roughness:.12,metalness:.18,iridescence:.85,iridescenceIOR:1.3,sheen:.5,sheenColor:new ie(10545407),transparent:!0,opacity:.92}),g=new mt(new Sn(.55,0),y);g.scale.set(.7,1.5,.7),x.add(g);const p=new mt(new as(.28,12,10),new Ue({color:8320767,transparent:!0,opacity:.7,blending:2,depthWrite:!1}));p.position.y=.1,x.add(p);const w=new mt(new mn(.78,.05,8,24),new Ue({color:8319231,transparent:!0,opacity:.85,blending:2,depthWrite:!1}));w.rotation.x=Math.PI/2,w.position.y=-.85,x.add(w),s.add(x);const S={x:0,z:0,on:!1},m={id:-1,sx:0,sy:0,lx:0,ly:0,dragged:!1},M=new Iv,v=new gt,A=new B,_=new vs(new B(0,1,0),0),E=new mt(new mn(1.7,.09,8,28),new Ue({color:8317170,transparent:!0,opacity:.9,blending:2,depthWrite:!1}));E.rotation.x=Math.PI/2,E.visible=!1,s.add(E);const C=new mt(new Ri(1.35,20),new Ue({color:3073791,transparent:!0,opacity:.22,blending:2,depthWrite:!1}));C.rotation.x=-Math.PI/2,E.add(C);function P(et,Lt){const Kt=e.getBoundingClientRect();if(Kt.width<2||Kt.height<2||(v.x=(et-Kt.left)/Kt.width*2-1,v.y=-((Lt-Kt.top)/Kt.height)*2+1,M.setFromCamera(v,o),_.constant=-1.2,!M.ray.intersectPlane(_,A)))return null;let Ce=A.x,we=A.z;const Gt=Math.hypot(Ce-h.x,we-h.z);if(Gt<1)return null;if(Gt>380){const gn=380/Gt;Ce=h.x+(Ce-h.x)*gn,we=h.z+(we-h.z)*gn}return Math.hypot(Ce,we)>2200?null:{x:Ce,z:we}}function T(et){if(W==="title"&&ft(),W==="play"&&!(et.pointerType==="mouse"&&et.button!==0)){m.id=et.pointerId,m.sx=m.lx=et.clientX,m.sy=m.ly=et.clientY,m.dragged=!1;try{e.setPointerCapture(et.pointerId)}catch{}}}function O(et){if(m.id!==et.pointerId||W!=="play")return;const Lt=et.clientX-m.lx,Kt=et.clientY-m.ly;Math.hypot(et.clientX-m.sx,et.clientY-m.sy)>14&&(m.dragged=!0),m.dragged&&(h.yaw-=Lt*.0048,h.pitch=Math.max(-1.1,Math.min(.45,h.pitch-Kt*.0036)),m.lx=et.clientX,m.ly=et.clientY)}function k(et){if(m.id===et.pointerId){if(!m.dragged&&W==="play"){const Lt=P(et.clientX,et.clientY);Lt&&(S.x=Lt.x,S.z=Lt.z,S.on=!0,E.position.set(Lt.x,a.sampleY(Lt.x,Lt.z)+.14,Lt.z),E.visible=!0)}m.id=-1;try{e.releasePointerCapture(et.pointerId)}catch{}}}e.addEventListener("pointerdown",T),e.addEventListener("pointermove",O),e.addEventListener("pointerup",k),e.addEventListener("pointercancel",k);const U=FA(e),$=LA();let W="title",Y=n.resonance,tt=n.howls;const q={...n.ledger};let ht=0,nt=!1;const zt=[];function Qt(){const et=XA();et.length&&(zt.push(...et),zt.length>40&&zt.splice(0,zt.length-40))}const Nt=new Set(n.visited),V=new Set(n.talked);let ot=null,at="",At=0,Bt="",Vt=0,he=null,$t=0,oe=0,xe=0,pe=!0,Ne=performance.now(),ye=1.22,Xe=0,je=12,Ye=!1,Ve=0,F=0,yn=[],Re=[],D=0,b="",Z=30,Q=n.lastAway?.summary||null,st=n.lastAway?.beats??0,vt=n.lastAway?.at??0,yt=null,it=null;const lt=gN(window.devicePixelRatio||1);let Rt=performance.now();const te=MN();function Ct(){const et=e.clientWidth||window.innerWidth,Lt=e.clientHeight||window.innerHeight;i.setSize(et,Lt,!1),o.aspect=et/Math.max(1,Lt),o.updateProjectionMatrix(),yt&&(yt.setPixelRatio(i.getPixelRatio()),yt.setSize(et,Lt))}Ct();const Dt=new ResizeObserver(Ct);Dt.observe(e),window.addEventListener("resize",Ct);const Xt=(()=>{try{return window.matchMedia("(pointer: coarse)").matches}catch{return!1}})();window.setTimeout(()=>{try{yt=new PA(i),yt.addPass(new IA(s,o));const et=e.clientWidth||1280,Lt=e.clientHeight||720,Kt=pN(et,Lt);it=new pa(new gt(Kt.x,Kt.y),Xt?.36:.42,.4,.66),mN(it),yt.addPass(it),yt.addPass(new zA),Ct()}catch{yt=null,it=null}},80);function ae(){if(yN(document)){Rt=performance.now();return}const et=performance.now(),Lt=Math.min(.25,Math.max(0,(et-Rt)/1e3));Rt=et,_N(i,yt,xN(lt,Z,Lt,window.devicePixelRatio||1)),it&&(it.strength=(Xt?.28:.36)+Y/100*.08),yt?yt.render():i.render(s,o)}function de(){te.afterTick(()=>vN(i.shadowMap))}function H(){const et=Math.hypot(h.x,h.z);if(et<22){const Lt=22/Math.max(.01,et);h.x*=Lt,h.z*=Lt}}function Pt(){for(const et of a.districts)if(Math.hypot(h.x-et.x,h.z-et.z)<et.radius+28)return et;return null}function rt(){VA({version:4,resonance:Y,howls:tt,visited:[...Nt],talked:[...V],builds:[...c],structures:l.slice(-280),lastCode:u,crafted:Object.fromEntries(a.citizens.map(et=>[et.mind.id,et.crafted])),log:d.slice(-36),px:h.x,pz:h.z,yaw:h.yaw,ledger:{...q,lastTick:Date.now()},pouches:Object.fromEntries(a.citizens.filter(et=>et.keeper).map(et=>[et.mind.id,{...et.pouch??{charge:0,crystal:0}}])),kin:a.citizens.filter(et=>et.mind.id.includes("-kin-")).map(et=>({id:et.mind.id,name:et.mind.name,crew:et.crewOf??"nesh",x:et.homeX,z:et.homeZ,file:et.mind.file,glow:et.mind.glow})),lastAway:Q?{summary:Q,beats:st||1,at:vt||Date.now()}:n.lastAway})}function xt(et){he=et,$t=3.2}function Et(){const et=Pt(),Lt=a.citizens.find(Gt=>Gt.mind.id===ot),Kt=et?.label??(Math.hypot(h.x,h.z)<wn.radius+18?wn.title:null),Ce=J0({charge:q.charge,crystal:q.crystal,scripture:q.scripture,bids:ed(q).bids},Kt),we=V.has(Ce.keeper)||Q0(ot,Ce.keeper);D+=1,D>=3&&(D=0,yn=a.citizens.map(Gt=>({id:Gt.mind.id,name:Gt.mind.name.split(" ")[0]??Gt.mind.name,x:Math.round(Gt.x),z:Math.round(Gt.z),job:Gt.job,keeper:Gt.keeper})),Re=l.map(Gt=>({shape:Gt.shape,x:Math.round(Gt.x),z:Math.round(Gt.z),rot:Gt.rot}))),t({zone:et?.label??(Math.hypot(h.x,h.z)<wn.radius+18?wn.title:null),zoneTag:et?.tag??(Math.hypot(h.x,h.z)<wn.radius+18?wn.tag:null),resonance:Y,howls:tt,nearby:Lt?{id:Lt.mind.id,name:Lt.mind.name,role:Lt.mind.role,line:at||Lt.thought,job:ag(Lt.job,Lt.thought)}:null,howlProgress:Math.min(1.6,Math.max(0,At/wn.holdSec)),howlGrade:Bt||void 0,stood:Vt||void 0,howlHint:At<.04?void 0:At/wn.holdSec>=.92&&At/wn.holdSec<=1.18?"Release":At/wn.holdSec>1.18?"Let go":"Hold through the gold",witness:we,still:j0(h.speed),atHub:Math.hypot(h.x,h.z)<wn.radius,toast:he,heading:h.yaw,visited:[...Nt],talked:V.size,talkTotal:a.citizens.length,builds:[...c],structures:l.length,lastCode:u,log:d.slice(-24),living:a.citizens.filter(Gt=>Gt.keeper).map(Gt=>({id:Gt.mind.id,name:Gt.mind.name,role:Gt.mind.role,crafted:Gt.crafted,job:ag(Gt.job,Gt.thought),intent:Gt.intent})),folk:(()=>{let Gt=0,gn=0,En=0,Fn=0;for(const Ge of a.citizens)Ge.keeper||(Gt+=1,Ge.job==="walk"||Ge.job==="follow"||Ge.job==="plaza"||Ge.job==="help"||Ge.job==="gather"||Ge.job==="forge"||Ge.job==="flow"||Ge.job==="write"||Ge.job==="trade"||Ge.job==="harvest"||Ge.job==="watch"||Ge.job==="hail"?gn+=1:Ge.job==="build"?En+=1:Fn+=1);return{total:Gt,walking:gn,building:En,idle:Fn}})(),px:h.x,pz:h.z,crystal:Re,people:yn,stock:{charge:q.charge,crystal:q.crystal,scripture:q.scripture,...ed(q)},live:zt.slice(-36).map(Gt=>({at:Gt.at,id:Gt.id,name:Gt.name,kind:Gt.kind,text:Gt.text})),crew:u3(),kilns:Y3(),reading:(()=>{let Gt=null;for(const gn of l){const En=Math.hypot(gn.x-h.x,gn.z-h.z);if(En<16&&(!Gt||En<Gt.d)){const Fn=gf(gn.shape);Gt={shape:gn.shape,title:Fn.title,means:Fn.means,d:En}}}return Gt?{shape:Gt.shape,title:Gt.title,means:Gt.means}:null})(),mode:W,debug:{fps:Math.round(Z),bug:b,citizens:a.citizens.length,building:a.citizens.filter(Gt=>Gt.job==="build").length,structures:l.length},away:Q})}function ft(){W="play";try{$.unlock(),$.land()}catch{}f(),Et(),rt(),nt?xt("Tap the ground to walk. Drag to look."):(nt=!0,window.setTimeout(()=>{const et=Qw(q,Math.max(0,280-l.length),tt+l.length);if(et.grew.length){for(const Lt of et.grew)a.applyPieces(Lt.pieces)>0&&(l.push(...Lt.pieces),d.push({at:Date.now(),agent:Lt.agentId,text:Lt.line}),u=Lt.code);l.length>280&&l.splice(0,l.length-280),d.length>36&&d.splice(0,d.length-36)}Qt();for(const Lt of a.citizens)Lt.keeper&&dt(Lt,"awake",`${Lt.thought||"At rest in my den"}`);Qt(),xt(`${et.summary||em.arrival} Tap the ground to walk.`),et.summary&&(Q=et.summary,st=et.beats,vt=Date.now());try{et.grew.length&&$.grow()}catch{}rt(),Et()},40))}const Jt=new B,Zt=new B,Je=new B,He=new B;function kn(et){if(!pe)return;const Lt=Math.max(0,(et-Ne)/1e3);Ne=et;const Kt=Math.min(.05,Lt),Ce=Math.min(.12,Lt);Kt>1e-4&&(Z=Z*.9+1/Math.max(Kt,.008)*.1),U.beginFrame(),U.justPressed.pause&&W==="play"?W="pause":U.justPressed.pause&&W==="pause"&&(W="play");const we=W==="play"?Kt:Kt*.15;if(W==="title"){ye+=Kt*.12;const Gt=390;o.position.set(Math.sin(ye)*Gt,132,Math.cos(ye)*Gt),o.lookAt(-180,168,40),a.tick(et/1e3,Kt,o,Y),de(),ae(),requestAnimationFrame(kn);return}try{const Gt=U.actions;if(W==="play"){h.yaw-=Gt.lookX*1.9*Kt,h.pitch=Math.max(-1.1,Math.min(.45,h.pitch+Gt.lookY*1.1*Kt));const Ge=-Math.sin(h.yaw),Qn=-Math.cos(h.yaw),ai=Math.cos(h.yaw),ls=-Math.sin(h.yaw);Jt.set(Ge,0,Qn),Zt.set(ai,0,ls);let Ui=Jt.x*Gt.moveY+Zt.x*Gt.moveX,hs=Jt.z*Gt.moveY+Zt.z*Gt.moveX,oi=Math.hypot(Ui,hs);if(oi>.08&&(S.on=!1),S.on&&oi<.08){const G=S.x-h.x,K=S.z-h.z,J=Math.hypot(G,K);if(J<1.5)S.on=!1;else{Ui=G,hs=K,oi=J;let j=Math.atan2(-G,-K)-h.yaw;for(;j>Math.PI;)j-=Math.PI*2;for(;j<-Math.PI;)j+=Math.PI*2;h.yaw+=j*Math.min(1,10*we)}}if(E.visible=S.on,S.on){const G=a.sampleY(S.x,S.z)+.14;E.position.set(S.x,G+Math.sin(et/180)*.1,S.z),E.scale.setScalar(1+Math.sin(et/140)*.12)}const ya=Gt.sprint||S.on&&oi>12?48:28,wr=oi>.01?ya:0;h.speed+=(wr-h.speed)*(1-Math.exp(-14*Math.max(we,1e-4))),oi>.01&&(h.x+=Ui/oi*h.speed*we,h.z+=hs/oi*h.speed*we),H(),h.y=a.sampleY(h.x,h.z)+1.55,$.foot(h.speed);const ji=Pt();ji&&!Nt.has(ji.id)&&(Nt.add(ji.id),xt(`${ji.label} · ${ji.tag}`));let yi=null,R=12;for(const G of a.citizens){const K=Math.hypot(h.x-G.x,h.z-G.z);K<R&&(R=K,yi=G)}if(ot=yi?.mind.id??null,yi&&U.justPressed.talk&&(at=eR(yi,h.x,h.z,tt),V.add(yi.mind.id),$.talk(),Xe=6),Xe>0&&(Xe-=we,Xe<=0&&(at="")),Gt.howl)At+=we;else if(At>=.35){const G=At;At=0,tt+=1;let K=$w(G,wn.holdSec);const J=!j0(h.speed),j=K==="held"||K==="true";J&&j&&(K="thin"),Bt=K;const Ot=Pt(),qt=Math.hypot(h.x,h.z)<wn.radius+40,Mt=Ot?.keeper??(qt?"veyra":null),jt=J0({charge:q.charge,crystal:q.crystal,scripture:q.scripture,bids:ed(q).bids},Ot?.label??(qt?wn.title:null)),ee=V.has(jt.keeper)||Q0(ot,jt.keeper),le=Ww(Mt,q,K);K==="held"&&Mu(q,4),!J&&K==="held"&&Mu(q,1),Y=Math.min(100,Y+Math.round(le.resonance*Xw(K)));let fe=null;{let Ae=16;for(const ke of l){const Yt=Math.hypot(ke.x-h.x,ke.z-h.z);Yt<Ae&&(Ae=Yt,fe=ke.shape)}}const ne=!!(fe&&Yw(fe,Mt)&&K!=="thin");ne&&(Y=Math.min(100,Y+2)),le.gather?(ht=18,J3(a.citizens)):Mt&&(ht=10,fg(a.citizens,Mt,h.x,h.z));const Oe=Mt?a.citizens.find(Ae=>Ae.mind.id===Mt):null;if(Oe)try{dt(Oe,le.gather?"gather":"howl",le.toast)}catch{}if(Mt&&le.resonance>=4&&K!=="thin")try{const Ae=qw(Mt,h.x,h.z),ke=Ae.pieces.slice(0,1);ke.length&&a.applyPieces(ke)>0&&(l.push(...ke),l.length>280&&l.splice(0,l.length-280),u=Ae.code,d.push({at:Date.now(),agent:Mt,text:le.toast}),d.length>24&&d.splice(0,d.length-24))}catch{}const nn=Zw(Mt);let $e=`${tm(K,nn)} ${le.toast}`;if(Mt==="aure"&&Kw(h.yaw,h.pitch)&&(Y=Math.min(100,Y+4),$e=`${tm(K,nn)} The parent is still on the horizon. You aimed.`),(K==="true"||K==="held")&&Mt&&(Vt=jw()),ee&&(K==="true"||K==="held")&&(Mu(q,2),$e+=" You spoke first. The den knew you."),Mt&&(K==="true"||K==="held"))try{Jw(Mt,K).complete&&(wl(q),wl(q),$e+=" Tend, kiln, join — Iri named the sit.")}catch{}J&&j&&($e+=" Stand. The den cannot hear a walking howl."),!J&&K==="held"&&($e+=" You stood."),ne&&($e+=" You howled the shape."),Qt(),xt($e),$.howl(),rt()}else At=0}x.position.set(h.x,h.y,h.z),x.rotation.y=h.yaw,g.rotation.y+=we*.8,w.rotation.z+=we*.6,p.scale.setScalar(1+Math.sin(et/1e3*3.2)*.12);const gn=-Math.sin(h.yaw),En=-Math.cos(h.yaw),Fn=8.6;if(Je.set(h.x-gn*Fn,h.y+3.55+Math.sin(h.pitch)*2.6,h.z-En*Fn),o.position.lerp(Je,1-Math.exp(-6.5*Kt)),He.set(h.x+gn*7,h.y+1.35+h.pitch*6,h.z+En*7),o.lookAt(He),W==="play"){ht>0&&(ht=Math.max(0,ht-Ce));let Ge=null;try{Ge=a.tickLiving(Ce,!0,Vs-l.length,{px:h.x,pz:h.z,resonance:Y,howls:tt,ledger:q,gather:ht})}catch(Qn){b=Qn instanceof Error?Qn.message:String(Qn)}if(Qt(),F+=Ce,F>.2){F=0;const Qn=eM();if(a.setFoundry(q.crystal,Qn),Qn.length)try{$.kiln()}catch{}}if(Ge){l.push(...Ge.pieces),l.length>Vs&&l.splice(0,l.length-Vs),u=Ge.code,d.push({at:Date.now(),agent:Ge.agentId,text:Ge.line}),d.length>24&&d.splice(0,d.length-24);const Qn=a.citizens.find(ls=>ls.mind.id===Ge.agentId);xt(Ge.line),Y=Math.min(100,Y+1);try{$.grow()}catch{}const ai=Ge.pieces[0]?.shape;if(ai==="canal"||ai==="weir"||ai==="cascade")try{$.canal()}catch{}if(ai==="kiln")try{$.kiln()}catch{}}je-=Ce,je<=0&&Ve<16&&!Ye&&(je=32,Ve+=1,d3(a.citizens,q,Y),Qt())}a.tick(et/1e3,we,o,Y),de(),$t>0&&($t-=Ce),(!Number.isFinite($t)||$t<=0)&&($t=0,he=null),oe+=Kt,oe>2.5&&W==="play"&&(oe=0,rt()),ae(),xe+=Kt,(xe>=.12||$t>0||W!=="play")&&(xe=0,Et())}catch(Gt){b=Gt instanceof Error?Gt.message:String(Gt);try{f(),ae()}catch{}}requestAnimationFrame(kn)}requestAnimationFrame(kn),window.__controlsTest={getYaw:()=>h.yaw,getSpeed:()=>h.speed,getX:()=>h.x,getZ:()=>h.z,getToast:()=>he,getLiving:()=>a.citizens.map(et=>({id:et.mind.id,job:et.job,timer:Math.round(et.timer*10)/10,crafted:et.crafted,x:Math.round(et.x),z:Math.round(et.z)})),setKeys:et=>{U.keys.clear(),et.forEach(Lt=>U.keys.add(Lt))}},Et();const $n=()=>{document.visibilityState==="hidden"&&rt()};return document.addEventListener("visibilitychange",$n),window.addEventListener("pagehide",rt),{input:U,audio:$,dispose(){pe=!1,rt(),Dt.disconnect(),window.removeEventListener("resize",Ct),document.removeEventListener("visibilitychange",$n),window.removeEventListener("pagehide",rt),e.removeEventListener("pointerdown",T),e.removeEventListener("pointermove",O),e.removeEventListener("pointerup",k),e.removeEventListener("pointercancel",k),U.dispose(),$.dispose(),a.dispose(),i.dispose(),delete window.__controlsTest},setMode(et){W=et,et==="pause"&&rt()},land:ft,commission(et,Lt,Kt){const Ce=Vw(et,Lt),we=Kt&&Kt.trim()||Ce.message;if(!Ce.ok||!Ce.workId)return xt(we),$.talk(),Et(),{...Ce,message:we};if(c.has(Ce.workId)){const Gt="That growth already stands. The city does not copy itself.";return xt(Gt),Et(),{ok:!1,message:Gt}}return a.applyBuild(Ce.workId)&&(c.add(Ce.workId),d.push({at:Date.now(),agent:et,text:we}),d.length>24&&d.splice(0,d.length-24),Y=Math.min(100,Y+3),$.howl()),xt(we),rt(),Et(),{...Ce,message:we}},grow(et,Lt,Kt,Ce){const we=a.applyPieces(Lt);return we>0&&(l.push(...Lt),l.length>280&&l.splice(0,l.length-280),u=Ce,d.push({at:Date.now(),agent:et,text:Kt}),d.length>24&&d.splice(0,d.length-24),Y=Math.min(100,Y+Math.min(8,2+we)),nR(a.citizens,et,Lt,Kt),$.howl()),xt(Kt),rt(),Et(),we},speak(et,Lt){const Kt=Lt.trim().slice(0,280);Kt&&(d.push({at:Date.now(),agent:et,text:Kt}),d.length>24&&d.splice(0,d.length-24),xt(Kt),$.talk(),rt(),Et())},setGrokLayer(et){Ye=!!et},mindSnap(){return{charge:q.charge,crystal:q.crystal,scripture:q.scripture,resonance:Y,keepers:a.citizens.filter(et=>et.keeper).map(et=>({id:et.mind.id,job:et.job,crafted:et.crafted,thought:(et.thought||et.intent).slice(0,90),charge:et.pouch?.charge??0,crystal:et.pouch?.crystal??0}))}},applyGrokMind(et,Lt){Yv(et,Lt),xt(et),Et()},escort(et){et&&(fg(a.citizens,et,h.x,h.z),Qt(),xt("Walk with me. The den heard you."),$.talk(),Et())},reset(){h.x=0,h.z=78,h.yaw=0,h.pitch=-.12,Y=12,tt=0,Nt.clear(),V.clear(),Object.assign(q,Xp()),rt(),xt(em.arrival)}}}export{NN as startEngine};
