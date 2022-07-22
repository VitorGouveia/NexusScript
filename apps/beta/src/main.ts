import "./style.css";

window.addEventListener("DOMContentLoaded", () => {
  // send push notifications
  const defaultTitle =
    "Gerencie as suas finanças facilmente - Gestor de finanças pessoal - Organize os seus gastos | Finances";
  const handleWindowBlur = () => {
    document.title = "Come back! We love you";
  };
  const handleWindowFocus = () => {
    // refetch data
    document.title = defaultTitle;
  };
  window.addEventListener("focus", handleWindowFocus);
  window.addEventListener("blur", handleWindowBlur);
});

// function getPWADisplayMode() {
//   const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
//   if (document.referrer.startsWith("android-app://")) {
//     return "twa";
//   } else if (isStandalone) {
//     return "standalone";
//   }
//   return "browser";
// }

// const unreadCount = 24;
// navigator.setAppBadge(unreadCount).catch((error) => {
//   //Do something with the error.
// });

// // Clear the badge
// navigator.clearAppBadge().catch((error) => {
//   // Do something with the error.
// });

// if users ever need to update the PWA
// send them to this URL about://restart
// and then ask them to close and open the app

// reduce app usage when battery is low
// const battery = await navigator.getBattery();
// battery.dischargingTime;
// battery.addEventListener("chargingchange", updateBatteryStatus);
// battery.addEventListener("levelchange", updateBatteryStatus);

// if ("launchQueue" in window && "files" in LaunchParams.prototype) {
//   // The File Handling API is supported.
// }

// check installed PWA
// const relatedApps = await navigator.getInstalledRelatedApps();
// relatedApps.forEach((app) => {
//   console.log(app.id, app.platform, app.url);
// });
