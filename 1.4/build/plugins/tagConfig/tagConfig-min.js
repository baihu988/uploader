KISSY.add("gallery/uploader/1.4/plugins/tagConfig/tagConfig",function(f,k,h){function g(b){g.superclass.constructor.call(this,b)}var i="autoUpload,postData,action,multiple,multipleLen,uploadType,disabled".split(","),j="max,maxSize,allowRepeat,allowExts,required,widthHeight".split(",");f.extend(g,h,{pluginInitializer:function(b){if(!b)return!1;var a=b.get("_oldInput");if(!a)return!1;this.set("uploader",b);this.set("input",a);this.cover()},cover:function(){this._setUploaderConfig();this._setAuthConfig();
return this},_setUploaderConfig:function(){var b=this.get("input"),a,c=this.get("uploader");f.each(i,function(d){if(a=b.attr(d)){switch(d){case "postData":d="data";a=f.JSON.parse(a);break;case "uploadType":d="type";break;case "autoUpload":a="true"==a}c.set(d,a)}})},_setAuthConfig:function(){var b=this.get("input"),a=this.get("uploader").getPlugin("auth");if(!a)return!1;var c,d;f.each(j,function(e){if(c=b.attr(e)){switch(e){case "allowRepeat":c="true"==c;break;case "maxSize":c=Number(c)}a.set(e,c)}(d=
b.attr(e+"-msg"))&&a.msg(e,d)})}},{ATTRS:{pluginId:{value:"tagConfig"},input:{value:""}}});return g},{requires:["node","base"]});