$(document).ready(function() {
    $('#contactForm').bootstrapValidator({
        message: 'This value is not valid',
        // feedbackIcons: {
        //     valid: 'glyphicon glyphicon-ok',
        //     invalid: 'glyphicon glyphicon-remove',
        //     validating: 'glyphicon glyphicon-refresh'
        // },
        fields: {
            name: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'Please enter your name.'
                    },
                    stringLength: {
                        min: 6,
                        message: 'Your name must be longer than 5 characters...'
                    }
                    // ,
                    // regexp: {
                    //     regexp: /^[a-zA-Z0-9_]+$/,
                    //     message: 'The username can only consist of alphabetical, number and underscore'
                    // }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your email address.'
                    },
                    emailAddress: {
                        message: 'Looks like your input is not a valid email address yet...'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your message.'
                    }
                }
            }
        }
    });
});
