// JavaScript Document
(function () {(
  var url = 'https://www.rakuten.ne.jp/gold/asoboze/gallery/parts/spcategories.html';//読み込むiframeのアドレス
  var code = '<iframe src="' + url + '" scrolling="no" frameborder="0"></iframe>';
  document.getElementById("iframe-box").innerHTML = code;
})();
 
(function () {
  function iframeData(e) {
    var iframeValue = e.data;
    if (/iframe/.test(iframeValue)) {
      var iframeHeight = iframeValue.replace(/iframe<*(.*?)>height*/g, '$1');
      iframeHeight = Number(iframeHeight) + 30;
      var iframeBox = document.getElementById("iframe-box").getElementsByTagName("iframe")[0];
      if (iframeBox) {
        iframeBox.setAttribute('style', 'height: ' + iframeHeight + 'px; margin: 0; padding: 0; display: block; width: 100%;');
      }
    }
  }
  window.addEventListener('message', iframeData);
})();