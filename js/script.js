var link = document.querySelector(".button-connect");

var popup = document.querySelector(".modal-contacts");
var close = document.querySelector(".modal-close__contacts");

var form = document.querySelector(".contacts-form");
var name = document.querySelector("[name=user-name]");
var email = document.querySelector("[name=email]");
var contactsText = document.querySelector("[name=contacts-text]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

try {
    storage = localStorage.getItem("email");
} catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (storage) {
        name.value = storage;
        email.focus();
    } else {
        name.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !contactsText.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", name.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape") {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        } else if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
            mapPopup.classList.remove("modal-error");
        }
    }
});


var mapLink = document.querySelector(".map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close__map");

mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape") {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        } else if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
            mapPopup.classList.remove("modal-error");
        }
    }
});


var slideIndex = 1;

showSlides(slideIndex);

document.getElementById('slider-prev').addEventListener('click', function () {
    showSlides(slideIndex -= 1);
})

document.getElementById('slider-next').addEventListener('click', function () {
    showSlides(slideIndex += 1);
})

document.getElementById('current-slide__1').addEventListener('click', function () {
    showSlides(slideIndex -= 1);
})

document.getElementById('current-slide__2').addEventListener('click', function () {
    showSlides(slideIndex += 1);
})

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-tool__item");
    var dots = document.getElementsByClassName("btn-tool");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



var basketLink = document.querySelector(".btn-buy");

var basketPopup = document.querySelector(".modal-basket");
var basketClose = document.querySelector(".modal-close__basket");
var basketForm = popup.querySelector("form");

var catalogItem = document.querySelectorAll('.catalog-item');
var basketOrder = document.querySelector(".button-order");

try {
    storage = localStorage.getItem("basketOrder");
} catch (err) {
    isStorageSupport = false;
}

try {
    storage = localStorage.getItem("basketClose");
} catch (err) {
    isStorageSupport = false;
}


basketLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.add("modal-show");
    order.focus();
});

basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal-show");
});

for(var i = 0; i < catalogItem.length; i++){
    addEventListener(catalogItem[i].querySelector(".btn-buy"), "click");
}

basketForm.addEventListener("submit", function (evt) {
    if (order) {

    } else {

    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.code === "Escape") {
        evt.preventDefault();
        if (basketPopup.classList.contains("modal-show")) {
            basketPopup.classList.remove("modal-show");
            basketPopup.classList.remove("modal-error");
        } else if (basketPopup.classList.contains("modal-show")) {
            basketPopup.classList.remove("modal-show");
            basketPopup.classList.remove("modal-error");
        }
    }
});