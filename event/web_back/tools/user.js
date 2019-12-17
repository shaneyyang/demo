// 使用user.js 方便后期维护代码，使用ajax的部分

var user = {
    // 登录
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
    },

    // 登出
    logout: function (options) {
        $.ajax({
            type: 'post',
            url: LOGOUT,
            success: function (res) {
                console.log(res);

                if (res.code === 200) {
                    // 退出成功
                    options.success();

                }
                else {
                    options.fail();
                }
            }
        });
    },

    // 获取用户信息
    getUser: function (options) {
        $.ajax({
            url: GET_USER,
            success: function (res) {
                if (res.code === 200) {
                    options.success(res.data);
                }
            }

        });


    }



};