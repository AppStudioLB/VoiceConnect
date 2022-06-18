jQuery(function($){
    var iframe = $('#test'); //해당 iframe요소를 가져와서 변수에 참조시킵니다.
    var iframeSelectEl = iframe[0].contentWindow.document.body.querySelector('.common-gnb a'); // 위에서 참조시킨 iframe요소를 contentWindow로 접근하고 body안에 있는 요소를 변수에 참조시킵니다.
    iframeSelectEl.onfocus = function(){
        //내용
    };
});
