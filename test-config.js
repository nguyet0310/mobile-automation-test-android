exports.config = {
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000
    },
    maxInstances: 1,
    sync: true,
    specs:[
        // './PlayWithMocha.js'
        './api/click.js'
    ],
    capabilities:[{
        "platformName": "Android",
        "automationName": "UiAutomator2",
        "udid": "3300d3672cca62b9",
        "appPackage": "com.wdiodemoapp",
        "appActivity": ".MainActivity"
    }]
}