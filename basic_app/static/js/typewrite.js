$(function () {
    var bar = $("<span></span>").html(
        "<hr class='my-0' style='height:5px;color:black;'>"
    );
    var links = $(".nav-link");

    links.each(function (index, element) {
        // element == this
        $(element).hover(
            function () {
                $(element).append(bar);
            },
            function () {
                $(element).children().remove();
            }
        );
    });
});

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute("data-type");
        var period = elements[i].getAttribute("data-period");
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};
// var myCarousel = document.querySelector('#myCarousel')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 100000
// })

$(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        rewind:true,
        dots: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            700: {
                items: 2,
            },
            1220: {
                items: 3,
            },
        },
    });
    var owl = $(".owl-carousel");
    owl.owlCarousel();
    // Go to the next item
    $(".owl-next").click(function () {
        owl.trigger("next.owl.carousel");
    });
    // Go to the previous item
    $(".owl-prev").click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger("prev.owl.carousel", [300]);
    });
   
});

