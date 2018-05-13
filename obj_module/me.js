var people = {
    prop : {
        'name' : 'lxf',
        'age' : 18,
        'sex' : 'male',
    },

    now : 23,

    init : function () {
        var myDate = new Date();
        this.now = myDate.getHours();       //获取当前小时数(0-23)
    },

    say_hello : function() {
        if (11 > this.now && this.now > 6) {
            alert('早上好');
            return;
        }

        if (13 > this.now && this.now > 11) {
            alert('中午好');
            return;
        }

        if (18 > this.now && this.now > 13) {
            alert('下午好');
            return;
        }

        if (22 > this.now && this.now > 18) {
            alert('晚上好');
            return;
        }

        if (this.now > 22 || this.now < 6) {
            alert('半夜三更好个锤子');
            return;
        }
    }
};

