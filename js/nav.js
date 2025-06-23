$(document).ready(function(){
        $(".overlay").click(function() {
        $('#menu-switch').prop('checked', false);
    });
});

$(document).ready(function() {
    // 獲取當前頁面路徑
    let currentPage = window.location.pathname; // 例如 "works.html"
    // console.log(currentPage);
    // 遍歷導覽列中的所有 <a> 標籤
    $('.nav-links a').each(function() {
        let linkHref = $(this).attr('href'); // 獲取每個 <a> 的 href
        let li = $(this).find('li'); // 獲取內部的 <li>
        let crownImg = li.find('img[src="./img/nav-crown.png"]'); // 獲取皇冠圖片
        // console.log(linkHref);

        // 檢查當前 <a> 是否對應當前頁面
        if (linkHref === "." + currentPage) {
            // 禁用點擊
            console.log(this);
            $(this).css('pointer-events', 'none');
            // 確保皇冠圖案始終顯示（移除 hover 依賴）
            crownImg.css('display', 'inline'); // 假設初始為 inline 或 block
        }
    });
});

//測試
$(document).ready(function() {
    // 獲取當前頁面路徑
    let currentPage = window.location.pathname; // individual-project1/works.html
    let cleanPath = currentPage.substring(20); //works.html
    //console.log(cleanPath);///
    // 遍歷導覽列中的所有 <a> 標籤
    $('.nav-links a').each(function() {
        let linkHref = $(this).attr('href'); // 獲取每個 <a> 的 href
        let li = $(this).find('li'); // 獲取內部的 <li>
        let crownImg = li.find('img[src="./img/nav-crown.png"]'); // 獲取皇冠圖片
        //console.log(linkHref);// ./works.html

        // 檢查當前 <a> 是否對應當前頁面
        if (linkHref === "." + cleanPath) {
            // 禁用點擊
            //console.log(this);
            $(this).css('pointer-events', 'none');
            // 確保皇冠圖案始終顯示（移除 hover 依賴）
            crownImg.css('display', 'inline'); // 假設初始為 inline 或 block
        }
    });
});