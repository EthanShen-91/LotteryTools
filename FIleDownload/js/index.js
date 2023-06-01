function GetPageData() {
    //$.ajax({
    //    url: 'https://www.toutiao.com/api/pc/list/user/feed?category=my_favorites&app_name=toutiao_web&aid=24&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A18684120AD2D00&cp=642A224D40A03E1',
    //    type: 'get',
    //    datatype: 'json',
    //    useDefaultXhrHeader: false,
    //    success: function (res) {
    //        console.log(res);
    //        $.each(res.data, function (index, obj) {

    //        });

    //    }
    //});


    $.get("https://www.toutiao.com/api/pc/list/user/feed?category=my_favorites&app_name=toutiao_web&aid=24&max_behot_time=0&max_behot_time_tmp=0&tadrequire=true&as=A18684120AD2D00&cp=642A224D40A03E1", {
        dataType: 'JSONP'
    }, function (responseTxt, statusTxt, xhr) {
        if (statusTxt == "success")
            alert("外部内容加载成功！");
        alert(responseTxt);
        if (statusTxt == "error")
            alert("Error: " + xhr.status + ": " + xhr.statusText);
    });
}