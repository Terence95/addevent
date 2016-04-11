
// 跨浏览器添加事件
var EventUtil = {
    addHandler: function (element,type,handler) {
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        }else{
            element["on"+type] = handler;
        }
    },
    removeHandler: function (element, type, handler) {
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        }else if(element.attachEvent){
            element.attachEvent('on' + type, handler);
        }else{
            element['on'+type] = handler;
        }
    },
    getEvent: function (event) {
        return event ? event : window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    preventDefault: function (event) {
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if(event.stopPropagation){
            event.stopPropagation();
        }else {
            event.cancelBubble = true;
        }
    },
    getCharCode: function(event) {
        if(typeof event.charCode == 'number') {
            return event.charCode;
        }else {
            return event.keyCode;
        }
    },
    getClipboardText: function (event) {
        var clipboardData = (event.clipboardData || window.clipboardData);
        return clipboardData.getData("text");
    },
    
    setClipboardText: function (event) {
        if(event.clipboardData){
            return event.clipboardData.setData("text/plain", value);
        }else if (window.clipboardData) {
            return window.clipboardData.setData("text", value);
        }
    }
}


    

