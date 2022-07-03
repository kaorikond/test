$(function () {
    $("").click(function () {
        // 入力された値を取得
        
        // urlを設定
        var url = "https://zipcloud.ibsnet.co.jp/doc/api";
        // 送るデータを成形する
        var param = { zipcode: zipcode };
        // サーバーと通信(Ajax)
        
        $.ajax({
            type: 'POST', 
            cache: false,
            data: JSON.stringify(params),
            url:  'getAddress',
            dataType: "json"
        })
        .done(function (res) {
            if (res.status != 200) {
                // 通信には成功。APIの結果がエラー
                // エラー内容を表示
                $('#zip_result').html(res.message);
            } else {
                //住所を表示
                $(data.results).each(function (result) {
                    table.appendChild(createRow("都道府県コード", result.prefcode));
                    table.appendChild(createRow("都道府県名", result.address1));
                    table.appendChild(createRow("市区町村名", result.address2));
                    table.appendChild(createRow("町域名", result.address3));
                    table.appendChild(createRow("都道府県名カナ", result.kana1));
                    table.appendChild(createRow("市区町村名カナ", result.kana2));
                    table.appendChild(createRow("町域名カナ", result.kana3));
                });
                dispAddress.appendChild(table);
            }

        })
        .fail(function (error) {
            console.log(error);
            $('#zip_result').html("<p>通信エラーです。時間をおいてお試しください</p>");
        });
    });
});