var article = {

    getCate: function (options) {

        $.ajax({
            url: 'http://localhost:8000/admin/category_search',
            success: function (res) {
                if (res.code === 200) {
                    console.log(res);

                    options.success(res);
                }
            }
        });

    },

    addCate: function (options) {

        $.ajax({
            type: 'post',
            url: 'http://localhost:8000/admin/category_add',
            data: $('form').serialize(),
            success: function (res) {
                if (res.code === 200) {
                    console.log(res);
                    // 如果封装第一个函数方法也可行，只是此处用刷新页面比较方便
                    options.success();

                }
            }
        });


    }





}