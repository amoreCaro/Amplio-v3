export default function calculator() {
    // ініціалізуємо значення за замовчуванням
    $('.calculator__input-number').each(function() {
        var fieldId = $(this).attr('id');
        var value = $(this).val();
        // Додаємо текст за замовчуванням після значення
        $('#' + fieldId).val(value + ' грн.'); // Текст за замовчуванням
        $('#' + fieldId + '_range').val(value); // синхронізуємо слайдер
    });

    // Синхронізуємо значення текстового поля та слайдера
    $('.calculator__input-number').on('input', function () {
        var fieldId = $(this).attr('id');
        var value = $(this).val();
        // Додаємо текст після значення
        $('#' + fieldId + '_range').val(value);
        $('#' + fieldId).val(value + ' грн.'); // Текст після числа
    });

    // Синхронізуємо значення слайдера та текстового поля
    $('.calculator__slider').on('input', function () {
        var fieldId = $(this).attr('id').replace('_range', '');
        var value = $(this).val();
        // Додаємо текст після значення
        $('#' + fieldId).val(value + ' грн.'); // Текст після числа
        $('#' + fieldId + '_range').val(value);
    });
}
