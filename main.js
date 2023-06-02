$(".navbar .nav-link").click(function () {
    // this 代表當下被點到的.nav-link
    console.log('[導覽列按鈕被點擊了]', this);
    // 取得滑動目標
    // 選當下被點到的按鈕，並從中取得href的值
    // 並存放到變數target裡
    var target = $(this).attr("href");
    console.log("[移動目標]", target);
    // 取得目標的座標
    var position = $(target).offset().top;
    console.log("[移動座標]", position);
    // 設定動畫時間
    var duration = 1000;
    // 取得導覽列高度
    var navbarHeight = $(".navbar").outerHeight();
    console.log("[導覽列高度]", navbarHeight);
    // 先取消再執行滑動動畫
    // .animate(物件{}, 時間)
    $("html,body").stop().animate({
        scrollTop: position - navbarHeight
    }, duration);
});
$("#goBackBtn").click(function () {
    $('body,html').animate({ scrollTop: 0 }, 1000);
});