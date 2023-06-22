/*  ---------------------------------------------------
    Template Name: Dreams
    Description: Dreams wedding template
    Author: Colorib
    Author URI: https://colorlib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

'use strict';

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
            Portfolio filter
        --------------------*/
    // $(".portfolio__filter li").on("click", function () {
    //   $(".portfolio__filter li").removeClass("active");
    //   $(this).addClass("active");
    // });
    // if ($(".portfolio__gallery").length > 0) {
    //   var containerEl = document.querySelector(".portfolio__gallery");
    //   var mixer = mixitup(containerEl);
    // }
  });

  /*------------------
        Background Set
    --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Masonary
  $(".work__gallery").masonry({
    itemSelector: ".work__item",
    columnWidth: ".grid-sizer",
    gutter: 10,
  });

  /*------------------
		Navigation
	--------------------*/
  // $(".mobile-menu").slicknav({
  //   prependTo: "#mobile-menu-wrap",
  //   allowParentLinks: true,
  // });

  /*------------------
		Hero Slider
	--------------------*/
  $(".hero__slider").owlCarousel({
    loop: true,
    dots: true,
    mouseDrag: false,
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    margin: 0,
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
  });

  var dot = $(".hero__slider .owl-dot");
  dot.each(function () {
    var index = $(this).index() + 1;
    if (index < 10) {
      $(this).html("0").append(index);
    } else {
      $(this).html(index);
    }
  });

  // --------------------------------------------------------
  // counter to work when scrolling to postion for index.html
  // --------------------------------------------------------
  class countUp {
    constructor(el) {
      this.el = el;
      this.setVars();
      this.init();
    }

    setVars() {
      this.number = this.el.querySelectorAll("[data-countup-number]");
      this.observerOptions = {
        root: null,
        rootMargin: "0px 0px",
        threshold: 0,
      };
      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const end = parseFloat(
            entry.target.dataset.countupNumber.replace(/,/g, "")
          );
          const decimals = this.countDecimals(end);
          if (entry.isIntersecting) {
            this.iterateValue(entry.target, end, decimals);
          }
        });
      }, this.observerOptions);
    }

    init() {
      if (this.number.length > 0) {
        this.number.forEach((el) => {
          this.observer.observe(el);
        });
      }
    }

    iterateValue(el, end, decimals) {
      const start = 0;
      const duration = 2500;
      let startTimestamp = null;

      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const elapsedPercent = (timestamp - startTimestamp) / duration;
        const easedProgress = Math.min(this.easeOutQuint(elapsedPercent), 1);
        let interimNumber = Math.abs(easedProgress * (end - start) + start);
        el.innerHTML = this.formatNumber(interimNumber, decimals);
        if (easedProgress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      // requestAnimationFrame returns DOMHighResTimeStamp as a callback (used as timestamp)
      window.requestAnimationFrame(step);
    }

    easeOutQuad(x) {
      return 1 - Math.pow(1 - x, 3);
    }

    easeOutQuint(x) {
      return 1 - Math.pow(1 - x, 5);
    }

    countDecimals(val) {
      if (Math.floor(val) === val) return 0;
      return val.toString().split(".")[1].length || 0;
    }

    formatNumber(val, decimals) {
      return val.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
    }
  }

  // Simplifed version of Viget dynamic modules to attach instances for this demo
  // https://www.viget.com/articles/how-does-viget-javascript/
  // You CAN use this pattern, but it's single purpose right now
  const dataModules = [...document.querySelectorAll('[data-module="countup"]')];

  dataModules.forEach((element) => {
    element.dataset.module.split(" ").forEach(function () {
      new countUp(element);
    });
  });

  // -------------------------------------------------------------------------------
    
})(jQuery);
