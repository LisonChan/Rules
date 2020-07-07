const SSID = $network.wifi.ssid;
const proxywifi = !$persistentStore.read("lkWifiSsids")?["ssid填这里！！！","这是第二个ssid"]:JSON.parse($persistentStore.read("lkWifiSsids"));
let res = proxywifi.some(val => val === SSID);
let lkWifiLast = !$persistentStore.read("lkWifiLast")?"abcdefghijklmnopqrstuvwxyz":$persistentStore.read("lkWifiLast");
if (lkWifiLast!=(!!SSID ? SSID : "cellular")){
    !$persistentStore.write((!!SSID ? SSID : "cellular"), "lkWifiLast")
    if (res) {
        $surge.setOutboundMode("direct");
        notify(1);
    } else {
        $surge.setOutboundMode("rule");
        notify(0);
    }
}

function notify(mode) {
    setTimeout(function () {
        !!mode ? $notification.post("Wi-Fi assistant", "switch to direct mode", `your SSID is ${SSID}`) : $notification.post("Wi-Fi assistant", "switch to proxy mode", `${!!SSID ? "your SSID is " + SSID : "you are using cellular"}`)
    })
}

$done();
