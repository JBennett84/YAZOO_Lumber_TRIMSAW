var TcHmi;!function(o){let n;!function(n){let c;!function(n){n.Log=function(n,c,...e){switch(n){case"Error":o.Log.errorEx(c,...e);break;case"Warning":o.Log.warnEx(c,...e);break;case"Info":o.Log.infoEx(c,...e);break;case"Debug":default:o.Log.debugEx(c,...e)}}}(c=n.Beckhoff||(n.Beckhoff={})),n.registerFunctionEx("Log","TcHmi.Functions.Beckhoff",c.Log)}(n=o.Functions||(o.Functions={}))}(TcHmi||(TcHmi={}));