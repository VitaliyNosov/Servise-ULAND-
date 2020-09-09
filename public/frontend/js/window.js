window.Echo.channel('customer_r')
.listen('CustomerRegistered', function(e) {
    Notification.requestPermission( function(permission) {
        var notification = new Notification('Новий Юзер на сайті', {
            body: 'До нашого сервісу приєднався ще один чоловік! Вітаємо', // content for the alert
            icon: "https://uland.com.ua/public/storage/Avatar/"+e.avatar // optional image url
        });
    });
});