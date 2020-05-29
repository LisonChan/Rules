let config = {
    darksky_api: "填这里", //从https://darksky.net/dev/ 上申请key填入即可
    aqicn_api: "填这里", //从http://aqicn.org/data-platform/token/#/ 上申请key填入即可
    huweather_apiKey: "faead3de5f42420098c8132b3924cd09", //和风天气APIkey,可自行前往 https://dev.heweather.com/ 进行获取,推荐自行获取,此key每天只可使用1000次,超了就获取不到数据了
    lat_lon: "填这里", //请填写经纬度,直接从谷歌地图中获取即可
    lang: "zh", //语言,请不要修改
    show: {
        log: 0, //调试日志,0为不开启,1为开启,2为开启精简日志
        icon: true, //是否显示图标信息,不显示会比较精简
        aqi: true, //空气质量以及风速显示,false则不显示
        uv: true, //紫外线显示,false则不显示
        apparent: true, //体感温度显示,false则不显示
        lifestyle: { //此处用于显示各项生活指数，可自行调整顺序，顺序越在前面则显示也会靠前，如果您不想查看某一指数，置为false即可，想看置为true即可
            comf: false, //舒适度指数,
            cw: false, //洗车指数,
            drsg: true, //穿衣指数,
            flu: false, //感冒指数,
            sport: false, //运动指数,
            trav: false, //旅游指数,
            uv: false, //紫外线指数,
            air: false, //空气污染扩散条件指数,
            ac: false, //空调开启指数,
            ag: false, //过敏指数,
            gl: false, //太阳镜指数,
            mu: false, //化妆指数,
            airc: false, //晾晒指数,
            ptfc: false, //交通指数,
            fsh: false, //钓鱼指数,
            spi: false, //防晒指数
        }
    }
}
