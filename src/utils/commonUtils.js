/**
 * 添加神策埋点
 * @param {*} type 
 * @param {*} info 
 */
export function addEventTrack(type, info) {
    try {
        var data = info || {};
        Object.getOwnPropertyNames(data).forEach(function (v) {
            if (data[v] === "" || data[v] === null || data[v] === undefined) {
                delete data[v];
            }
        });
        console.log(`埋点：${type}`, data);
        window.sensors.track(type, data);
    } catch {
        console.log("埋点出错");
    }
}
/**
 * 埋点UUID
 * @returns 
 */
function generateUUID() {
    var d = new Date().getTime();
    var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == "x" ? r : r & 0x3 | 0x8).toString(16);
        }
    );
    return uuid;
}
/**
 * 埋点跟踪id
 * @returns 
 */
function getFlowId() {
    function pad2(n) {
        return n < 10 ? "0" + n : n;
    }
    function pad3(n) {
        if (n < 10) {
            return "00" + n;
        } else if (n >= 10 && n < 100) {
            return "0" + n;
        }
        return n;
    }
    var date = new Date();
    var dateStr =
        date.getFullYear().toString() +
        pad2(date.getMonth() + 1) +
        pad2(date.getDate()) +
        pad2(date.getHours()) +
        pad2(date.getMinutes()) +
        pad2(date.getSeconds()) +
        pad3(date.getMilliseconds());

    return dateStr + generateUUID();
}
/**
 * 神策埋点初始化demo
 * @param {*} trackingServer 
 */
export const initDemo = trackingServer => {
    // 埋点初始化 start
    try {
        sessionStorage.setItem("flowId", getFlowId());
        window.sensors = window["sensorsDataAnalytic201505"];
        window.sensors.init({
            server_url: trackingServer,
            app_js_bridge: true,
            use_client_time: true,
            send_type: "beacon",
            show_log: false,
            heatmap: {
                //default 表示开启，自动采集 $WebClick 事件，可以设置 'not_collect' 表示关闭。
                clickmap: "not_collect",
                //default 表示开启，自动采集 $WebStay 事件，可以设置 'not_collect' 表示关闭。
                scroll_notice_map: "not_collect"
            }
        });
        window.sensors.quick("autoTrack");
        window.sensors.use("PageLeave");
        window.sensors.registerPage({
            td_dialogue_time: new Date(), //TD 报文上报时间
            fund_account: function () {
                //资金账号
                return sessionStorage.getItem("fundid");
            },
            platform_name: "蜻蜓点金", //平台名称
            data_source: "sd", //数据来源
            is_fund_account_login: function () {
                //是否已登录资金账号
                return sessionStorage.getItem("fundid") ? true : false;
            },
            csc_device_id: function () {
                //建投设备ID
                return sessionStorage.getItem("DEVICE_ID") || "";
            },
            // terminal_type: checkClinetModel(), //终端类型
            iport: function () {
                return sessionStorage.getItem("IPORT") || "";
            }, //公网IP端口号
            mac_addr: function () {
                return sessionStorage.getItem("MAC") || "";
            }, //MAC地址
            imei: function () {
                return sessionStorage.getItem("IMEI") || "";
            }, //IMEI
            iccid: function () {
                return sessionStorage.getItem("ICCID") || "";
            }, //ICCID
            imsi: function () {
                return sessionStorage.getItem("IMSI") || "";
            } //IMSI
        });
    } catch (error) {
        console.log("埋点异常" + error);
    }
    // 埋点初始化 end
};
