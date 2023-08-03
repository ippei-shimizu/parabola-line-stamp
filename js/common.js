function animateOneText() {
  const oneTextElements = document.querySelectorAll(".one-text");

  function createStaggerAnimation(element) {
    const tl = gsap.timeline();
    tl.to(element, {
      opacity: 1,
      y: "-4rem",
      duration: 0.25,
      ease: "Power1.easeInOut",
    }).to(element, {
      y: "0rem",
      duration: 0.25,
      ease: "Power1.easeInOut",
    });

    return tl;
  }

  const mainTl = gsap.timeline();
  oneTextElements.forEach((element, index) => {
    mainTl.add(createStaggerAnimation(element), index * 0.08);
  });

  return mainTl;
}

window.onload = function () {
  let tl = gsap.timeline();
  const charImg01 = document.querySelector(".char-img-01");
  const charImg02 = document.querySelector(".char-img-02");
  const charImg03 = document.querySelector(".char-img-03");
  const fvMainBg = document.querySelector(".fv__main__bg");
  const userTitle = document.querySelector(".user__title");
  const icon = document.querySelectorAll(".icon");
  const iconAnimation = document.querySelectorAll(".icon-animation");
  const iconAnimationReverse = document.querySelectorAll(
    ".icon-animation-reverse"
  );
  const fvBottomText = document.querySelector(".fv__bottom__text");

  tl.to([charImg01, charImg02], { x: 0, y: 0 })
    .to(charImg03, { x: 0, y: 0 })
    .fromTo(
      fvMainBg,
      { "--pseudo-opacity": 0 },
      {
        scale: 1,
        "--pseudo-opacity": 1,
        ease: "Power1.easeInOut",
        duration: 0.3,
      },
      3
    )
    .add(animateOneText())
    .to(userTitle, { opacity: 1, ease: "Power1.easeInOut", duration: 0.55 })
    .to(
      [icon, iconAnimation, iconAnimation, iconAnimationReverse, fvBottomText],
      {
        opacity: 1,
        ease: "Power1.easeInOut",
        duration: 0.3,
      }
    );

  const scrollUpTexts = document.querySelectorAll(".scrollUpText");
  scrollUpTexts.forEach((scrollUpText, index) => {
    gsap.to(scrollUpText, {
      opacity: 1,
      y: "0rem",
      scrollTrigger: {
        trigger: scrollUpText,
        start: "top center",
        end: "bottom center",
      },
    });
  });

  const arrowBox = document.querySelector(".arrow__box");
  gsap.to(arrowBox, {
    y: 0,
    x: 0,
    opacity: 1,
    ease: "bounce.out",
    duration: 1.4,
    scrollTrigger: {
      trigger: arrowBox,
      start: "top center",
      end: "bottom center",
    },
  });

  const arrowBox02 = document.querySelector(".arrow__box__02");
  gsap.to(arrowBox02, {
    y: 0,
    x: 0,
    opacity: 1,
    ease: "bounce.out",
    duration: 1.4,
    scrollTrigger: {
      trigger: arrowBox02,
      start: "top center",
      end: "bottom center",
    },
  });

  const dlChars = document.querySelectorAll(".dl-img");
  dlChars.forEach((dlChar, index) => {
    gsap.to(dlChar, {
      y: "0%",
      ease: "back.out(1.5)",
      duration: 0.3,
      scrollTrigger: {
        trigger: dlChar,
        start: "top+=100px bottom",
        end: "bottom center",
      },
    });
  });

  const priceChars = document.querySelectorAll(".price__char");
  priceChars.forEach((priceChar, index) => {
    gsap.to(priceChar, {
      x: "0%",
      ease: "back.out(1.5)",
      duration: 0.3,
      scrollTrigger: {
        trigger: priceChar,
        start: "top center",
        end: "bottom center",
      },
    });
  });

  const priceImgOnes = document.querySelectorAll(".price__img__one");
  priceImgOnes.forEach((priceImgOne, index) => {
    gsap.to(priceImgOne, {
      scrollTrigger: {
        trigger: priceImgOne,
        start: "top center",
        end: "bottom center",
        onEnter: function (self) {
          priceOneText();
          self.disable();
        },
      },
    });
  });

  const flowImgOnes = document.querySelectorAll(".flow__img__one");
  flowImgOnes.forEach((flowImgOne, index) => {
    gsap.to(flowImgOne, {
      scrollTrigger: {
        trigger: flowImgOne,
        start: "top center",
        end: "bottom center",
        onEnter: function (self) {
          flowOneText();
          self.disable();
        },
      },
    });
  });

  const footerInner = document.querySelector(".footer__inner");
  gsap.to(footerInner, {
    "--scale-footer": 1,
    ease: "back.out(1.5)",
    duration: 0.4,
    scrollTrigger: {
      trigger: footerInner,
      start: "top center",
      end: "bottom center",
    },
  });

  const footerChar = document.querySelector(".footer__char__box");
  gsap.to(footerChar, {
    y: "0%",
    ease: "back.out(1.5)",
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: footerChar,
      start: "top-=250px bottom",
      end: "bottom center",
    },
  });

  const checkbox = document.querySelector("input[name=mode]");
  checkbox.addEventListener("change", function () {
    trans();
    if (this.checked) {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      switchImages("dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      switchImages("light");
    }
  });

  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };
};

function switchImages(mode) {
  const targetClasses = [
    "char-img-01",
    "char-img-02",
    "char-img-03",
    "about__img__01",
    "about__img__02",
    "about__img__03",
    "about__img__04",
    "about__img__05",
    "about__img__06",
    "price__char__01",
    "price__char__02",
    "price__char__03",
    "price__char__04",
    "price__char__05",
    "price__char__06",
    "flow__img__01__min",
    "flow__img__01__max",
    "flow__img__01",
    "flow__img__03",
    "flow__img__04",
    "footer__char",
    "logo__img",
    "contact__title__img",
    "flow__img__one",
    "price__p",
    "price__r",
    "price__i",
    "price__c",
    "price__e",
    "para__char__dark",
    "fuki",
    "dl-img",
    "char__bg__img",
    "dl-qr",
  ];
  targetClasses.forEach((targetClass) => {
    const elements = document.querySelectorAll(`.${targetClass}`);
    elements.forEach((el) => {
      el.classList.add("img-transition");

      let src = el.getAttribute("srcset") || el.getAttribute("src");
      let newSrc;

      if (mode === "dark") {
        if (!src.endsWith("-dark.png")) {
          newSrc = src.replace(".png", "-dark.png");
        }
      } else {
        if (src.endsWith("-dark.png")) {
          newSrc = src.replace("-dark.png", ".png");
        }
      }

      if (newSrc) {
        el.style.opacity = 0;
        setTimeout(() => {
          if (el.getAttribute("srcset")) {
            el.setAttribute("srcset", newSrc);
          } else {
            el.setAttribute("src", newSrc);
          }
          el.style.opacity = 1;
        }, 600);
      }
    });
  });
}

function priceOneText() {
  const priceOneTextElements = document.querySelectorAll(".price__img__one");

  function createStaggerAnimation(element) {
    const tl = gsap.timeline();
    tl.to(element, {
      opacity: 1,
      y: "-4rem",
      duration: 0.25,
      ease: "Power1.easeInOut",
    }).to(element, {
      y: "0rem",
      duration: 0.25,
      ease: "Power1.easeInOut",
    });

    return tl;
  }

  const mainTl = gsap.timeline();
  priceOneTextElements.forEach((element, index) => {
    mainTl.add(createStaggerAnimation(element), index * 0.08);
  });

  return mainTl;
}

function flowOneText() {
  const priceOneTextElements = document.querySelectorAll(".flow__img__one");

  function createStaggerAnimation(element) {
    const tl = gsap.timeline();
    tl.to(element, {
      opacity: 1,
      y: "-4rem",
      duration: 0.25,
      ease: "Power1.easeInOut",
    }).to(element, {
      y: "0rem",
      duration: 0.25,
      ease: "Power1.easeInOut",
    });

    return tl;
  }

  const mainTl = gsap.timeline();
  priceOneTextElements.forEach((element, index) => {
    mainTl.add(createStaggerAnimation(element), index * 0.08);
  });

  return mainTl;
}
