module.exports = {

    // 'Go to Google' : function (client) {
    //     client.url('https://www.google.com');
    //     client.assert.visible('body');
    //     client.setValue('input[type=text', ['NightWatch Js', client.Keys.ENTER]);
    //     client.pause(1000);
    //     client.assert.containsText('#search', 'NightWatch.js');
    //     client.waitForElementVisible('body', 2000);
    //     client.click('a[href="https://nightwatchjs.org/"]');
    //     client.assert.title('Nightwatch.js | Node.js powered End-to-End testing framework');
    //     client.saveScreenshot('./tests/screenshots/' + 'test-demo.png');
    //     client.end();
    // }

    'Test Case-1' : function (client) {
        client
            .url('https://www.google.com')
            .assert.visible('body')
            .end();
    }
}
