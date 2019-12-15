// 使用user.js 方便后期维护代码，使用ajax的部分

var user = {
    login: function (options) {
        $.ajax({
            type: 'post',
            url: LOGIN,
            data: {
                user_name: options.data.user_name,
                password: options.data.password
            },
            success: function (res) {
                // 根据res.code进行成功失败检测
                if (res.code === 200) {
                    options.success();
                }
                else {
                    options.fail();
                }
            }
        });
    }
};