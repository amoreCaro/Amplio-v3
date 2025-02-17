export default function calculator() {
    // Ініціалізуємо значення за замовчуванням для кожного input та слайдера
    $('.calculator__input-number').each(function () {
        var fieldId = $(this).attr('id'); // Отримуємо ID для input
        var value = $(this).val();
        // Додаємо текст за замовчуванням після значення
        $('#' + fieldId).val(value + ' грн.'); // Текст за замовчуванням
        $('#' + fieldId + '_range').val(value); // Синхронізуємо слайдер
    });

    // Синхронізуємо значення текстового поля та слайдера
    $('.calculator__input-number').on('input', function () {
        var fieldId = $(this).attr('id'); // Отримуємо ID для input
        var value = $(this).val().replace(' грн.', ''); // Отримуємо значення без "грн."
        // Оновлюємо значення слайдера
        $('#' + fieldId + '_range').val(value);
        // Додаємо текст "грн." після значення в input
        $('#' + fieldId).val(value + ' грн.');
    });

    // Синхронізуємо значення слайдера та текстового поля
    $('.calculator__slider').on('input', function () {
        var fieldId = $(this).attr('id').replace('_range', ''); // Отримуємо ID для відповідного input
        var value = $(this).val();
        // Оновлюємо значення input з текстом "грн."
        $('#' + fieldId).val(value + ' грн.');
        // Синхронізуємо значення слайдера
        $('#' + fieldId + '_range').val(value);
    });
}
