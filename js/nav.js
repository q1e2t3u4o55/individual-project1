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
            // 設置游標為 default
    //         $(this).css('cursor', 'default');
            // 確保皇冠圖案始終顯示（移除 hover 依賴）
            crownImg.css('display', 'inline'); // 假設初始為 inline 或 block
    //     } else {
    //         // 其他選項恢復正常行為（可選）
    //         $(this).css('pointer-events', 'auto');
    //         $(this).css('cursor', 'pointer');
    //         crownImg.css('display', 'none'); // 其他選項隱藏皇冠（依設計）
        }
    });
});