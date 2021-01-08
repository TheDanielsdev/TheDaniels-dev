$(function () {
    $("#register").validate({
        rules: {
            name: {
                required: true,
                noSpace: true
            },
            email: {
                required: true,
                email: true
            },
            subject: {
                required: true,
                noSpace: true

            },
            message: {
                required: true,
                noSpace: true
            }
        },
        message: {
            name: {
                required: 'please enter name!.'
            },
            email: {
                required: 'please enter email!.',
                email: 'enter valid email'
            }
        }

    })
})

$.validator.addMethod("noSpace", function (value, element) {
    return value == '' || value.trim().length != 0
}, "spaces are not allowed");