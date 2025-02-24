// export default function accordion() {
//   $(".faq__item").on("click", function() {
//     const $this = $(this);
//     const tabsId = $this.data("tabTarget");

//     // Toggle 'active' class on the clicked FAQ item
//     $this.toggleClass("active").siblings().removeClass("active");

//     // Toggle the content visibility by adding/removing 'active' class
//     $("#" + tabsId).toggleClass("active").siblings().removeClass("active");
//   });
// }
export default function accordion() {
  $(".faq__item").on("click", function() {
    const $this = $(this);
    const tabsId = $this.data("tabTarget");

    // Якщо поточний елемент має клас 'active', то прибираємо у всіх
    if ($this.hasClass("active")) {
      $this.removeClass("active");
      $("#" + tabsId).removeClass("active");
    } else {
      // Якщо поточний елемент не має класу 'active', то прибираємо у всіх і додаємо до цього елемента
      $(".faq__item, .faq__item-content").removeClass("active");
      $this.addClass("active");
      $("#" + tabsId).addClass("active");
    }
  });
}

