export default function accordion() {
    $(".support__item").on("click", function() {
      const tabsId = $(this).data("tabTarget");  // Отримуємо значення з data-tab-target
  
      // Додаємо клас active до натиснутого елементу support__item та відповідного контенту
      $(this).addClass("active").siblings().removeClass("active");
  
      // Оновлюємо властивості border-radius для підтримуваного елементу
      $(this).css({
        "border-bottom-left-radius": $(this).hasClass("active") ? "0px" : "",
        "border-bottom-right-radius": $(this).hasClass("active") ? "0px" : ""
      }).siblings().css({
        "border-bottom-left-radius": "",
        "border-bottom-right-radius": ""
      });
  
      $("#" + tabsId).addClass("active").siblings().removeClass("active");
  
      // Оновлюємо клас active для support__item-content
      $(".support__item-content").removeClass("active");
      $("#" + tabsId).addClass("active");  // Додаємо клас active до відповідного support__item-content
    });
  }
  