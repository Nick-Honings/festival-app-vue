module.exports = {

    "Form Displays Warning on name": function (client) {

        client
            .url('http://localhost:8080/register')
            .assert.visible('body')
            .setValue('input[name=username', ['testUser'])
            .assert.not.containsText('#username-input', 'This field can not be empty')
            .end();
    },

    "Form displays Warning on Password" : function (client) {

        client
            .url('http://localhost:8080/register')
            .assert.visible('body')
            .setValue('input[name=password', '123456')
            .assert.containsText('#password-input', 'Password must be at least 6 characters long and contain at least one number, one uppercase character and one lowercase character')
            .setValue('input[name=password', '', client.Keys.BACKSPACE)

            .setValue('input[name=password', '1234N6')
            .assert.containsText('#password-input', 'Password must be at least 6 characters long and contain at least one number, one uppercase character and one lowercase character')
            .setValue('input[name=password', '', client.Keys.BACKSPACE)

            .setValue('input[name=password', '1234n6')
            .assert.containsText('#password-input', 'Password must be at least 6 characters long and contain at least one number, one uppercase character and one lowercase character')
            .setValue('input[name=password', '', client.Keys.BACKSPACE)

            .setValue('input[name=password', '1234Nh')
            .assert.not.containsText('#password-input', 'Password must be at least 6 characters long and contain at least one number, one uppercase character and one lowercase character')
            .setValue('input[name=password', '', client.Keys.BACKSPACE)
            .end();
    },

    "Form warning not matching passwords": function (client) {

        client
            .url('http://localhost:8080/register')
            .assert.visible('body')
            .setValue('input[name=password', '1234Nh')
            .setValue('input[name=confirm-pass', 'abscde')
            .assert.containsText('#confirm-pass-input', 'Passwords do not match!')
            .end();
    },

    "No form warning matching passwords": function (client) {

        client
            .url('http://localhost:8080/register')
            .assert.visible('body')
            .setValue('input[name=password', '1234Nh')
            .setValue('input[name=confirm-pass', '1234Nh')
            .assert.not.containsText('#confirm-pass-input', 'Passwords do not match!')
            .end();
    },

    "Invalid email displays warning": function (client) {

        client
            .url('http://localhost:8080/register')
            .assert.visible('body')
            .setValue('input[name=email', 'nick.honings.gmail.com')
            .assert.containsText('#email-input', 'Not a valid email!')
            .end();
    },

    "Valid email no warning": function (client) {

        client
            .url('http://localhost:8080/register')
            .assert.visible('body')
            .setValue('input[name=email', 'nick.honings@gmail.com')
            .assert.not.containsText('#email-input', 'Not a valid email!')
            .end();
    },

    "Register button not disabled valid input": function (client) {

        client
            .url('http://localhost:8080/register')
            .assert.visible('body')
            .setValue('input[name=username', ['testUser'])
            .setValue('input[name=password', '1234Nh')
            .setValue('input[name=confirm-pass', '1234Nh')
            .setValue('input[name=email', 'nick.honings@gmail.com')
            .assert.elementPresent('#register-btn-enabled')
            .assert.not.elementPresent('#register-btn-disabled')
            .end();

    }
}
