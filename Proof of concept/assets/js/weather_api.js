window.weatherWidgetConfig = window.weatherWidgetConfig || [];
window.weatherWidgetConfig.push({
    selector: ".weatherWidget",
    apiKey: "TT5ZUWXBXK7DNN9UM4SBR9KW2", //Sign up for your personal key
    location: "Dubai, AE", //Enter an address
    unitGroup: "metric", //"us" or "metric"
    forecastDays: 5, //how many days forecast to show
    title: "Dubai, AE", //optional title to show in the 
    showTitle: true,
    showConditions: true
});

(function () {
    var d = document, s = d.createElement('script');
    s.src = 'https://www.visualcrossing.com/widgets/forecast-simple/weather-forecast-widget-simple.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();