export default function calculator() {
    // Ініціалізація значень для всіх input та слайдерів
    function initializeInputs() {
        $('.calculator__input-number').each(function () {
            var fieldId = $(this).attr('id'); // Отримуємо ID для input
            var value = $(this).val();
            // Додаємо текст за замовчуванням після значення
            updateInputValue(fieldId, value); // Оновлюємо input з текстом
            $('#' + fieldId + '_range').val(value); // Синхронізуємо слайдер
        });
    }

    // Функція для вибору правильного закінчення слова "місяць"
    function getMonthSuffix(months) {
        // Використовуємо правила для вибору суфікса
        if (months === 24) {
            return 'місяці'; // Для 1 місяця
        } else {
            return 'місяців'; // Для 2-4 місяців
        }
    }

    // Оновлення значення input з додаванням одиниць вимірювання
    function updateInputValue(fieldId, value) {
        if (fieldId === "inputCreditSum") {
            $('#' + fieldId).val(value + ' грн.'); // Для inputCreditSum додаємо "грн."
        } else if (fieldId === "inputTerm") {
            var months = parseInt(value);
            var suffix = getMonthSuffix(months);  // Отримуємо правильне закінчення для місяців
            $('#' + fieldId).val(value + ' ' + suffix); // Оновлюємо значення input з правильним суфіксом
        } else {
            $('#' + fieldId).val(value); // Для інших input просто виводимо число
        }
    }

    // Обробка вводу в текстові поля
    function handleInput() {
        $('.calculator__input-number').on('input', function () {
            var fieldId = $(this).attr('id'); // Отримуємо ID для input
            var value = $(this).val().replace(' грн.', '').replace(' місяців', ''); // Отримуємо значення без "грн." і "місяців"

            // Оновлюємо значення слайдера
            $('#' + fieldId + '_range').val(value);

            // Оновлюємо значення input в залежності від поля
            updateInputValue(fieldId, value);
        });
    }

    // Обробка вводу зі слайдера
    function handleSlider() {
        $('.calculator__slider').on('input', function () {
            var fieldId = $(this).attr('id').replace('_range', ''); // Отримуємо ID для відповідного input
            var value = $(this).val();

            // Оновлюємо значення input в залежності від поля
            updateInputValue(fieldId, value);

            // Синхронізуємо значення слайдера
            $('#' + fieldId + '_range').val(value);
        });
    }

    // Налаштовуємо активний таб за замовчуванням
    function setActiveTab() {
        $(".btn-calculator-tabs").first().addClass("active");
        $(".tabs__list").first().addClass("active");
    }

    // Обробка кліку на кнопки табів
    function handleTabClick() {
        $(".btn-calculator-tabs").on("click", function () {
            const tabsId = $(this).data("calculatorTabTarget");

            // Додаємо клас active до натиснутої кнопки і відповідного контенту
            $(this).addClass("active").siblings().removeClass("active");
            $("#" + tabsId).addClass("active").siblings().removeClass("active");

            // Отримуємо текст кнопки і оновлюємо значення input з id inputTerm
            var buttonText = $(this).text();
            $("#inputTerm").val(buttonText); // Оновлюємо значення в input

            // Оновлюємо слайдер в залежності від значення тексту кнопки
            var slider = $("#" + tabsId + "_range"); // Отримуємо відповідний слайдер по ID
            var value = parseInt(buttonText); // Конвертуємо текст кнопки в число (наприклад "6 місяців" -> 6)

            if (!isNaN(value)) {
                // Перевіряємо діапазон слайдера, щоб не перевищувати межі
                var minValue = slider.attr("min");
                var maxValue = slider.attr("max");

                // Встановлюємо значення слайдера, якщо воно в межах діапазону
                if (value >= minValue && value <= maxValue) {
                    slider.val(value); // Встановлюємо значення слайдера
                } else {
                    console.log("Значення виходить за межі діапазону слайдера");
                }
            }
        });
    }

    // Викликаємо функції
    initializeInputs();
    handleInput();
    handleSlider();
    setActiveTab();
    handleTabClick();
}
