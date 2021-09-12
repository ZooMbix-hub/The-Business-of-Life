
//спойлер в packages__item
const headers = document.querySelectorAll("[data-name='spoiler-title']");

headers.forEach(function(item) {
    item.addEventListener("click", headerClick);
});

function headerClick() {
    this.nextElementSibling.classList.toggle("spoiler-body");
    this.classList.toggle("vector-open")
}

//табы в case__block
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabsBtn__2 = document.querySelectorAll('.tabs__nav-btn__2');
const tabsItems = document.querySelectorAll('.tabs__item');
const tabsItems__2 = document.querySelectorAll('.tabs__item__2')


tabsBtn.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        if ( !currentBtn.classList.contains('active') ) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    })
});
tabsBtn__2.forEach(function (item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);
        if ( !currentBtn.classList.contains('active') ) {
            tabsBtn__2.forEach(function (item) {
                item.classList.remove('active');
            });
            tabsItems__2.forEach(function (item) {
                item.classList.remove('active');
            });
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    })
});
document.querySelector('.tabs__nav-btn').click();
document.querySelector('.tabs__nav-btn__2').click();