$('.customer-login').on('submit', function (e) {
    e.preventDefault();
    $('.ajax-validate-error').html('');

    if ($(this).valid()) {
        var formData = new FormData($(this)[0]);
        $.ajax({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            url: '/login',
            type: 'POST',
            contentType: false,
            processData: false,
            data: formData,
            beforeSend: function() {
                $('.loader').addClass('active');
            },
            success: function (data) {
                $('.loader').removeClass('active');
                window.location = data;
            },
            error: function (data) {
                grecaptcha.reset();
                $('.loader').removeClass('active');
                var errors = data.responseJSON;
                $('.customer-login .ajax-validate-error').html('');
                $.each(errors.errors, function (index, value) {
                    $('.customer-login .ajax-validate-error').append('<span><div class="error">' + value + '</div></span>');
                });
                }
            });
        }
    });