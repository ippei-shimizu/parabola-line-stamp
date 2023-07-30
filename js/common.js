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
        duration: 0.55,
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
        duration: 0.55,
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

  const priceChars = document.querySelectorAll(".price__char");
  priceChars.forEach((priceChar, index) => {
    gsap.to(priceChar, {
      x: "0%",
      ease: "back.out(1.5)",
      duration: .3,
      scrollTrigger: {
        trigger: priceChar,
        start: "top center",
        end: "bottom center",
      },
    });
  });

  const priceImgOnes = document.querySelectorAll(".price__img__one");
  priceImgOnes .forEach((priceImgOne, index) => {
    gsap.to(priceImgOne, {
      scrollTrigger: {
        trigger: priceImgOne,
        start: "top center",
        end: "bottom center",
        onEnter: function(self) {
          priceOneText();
          self.disable();
        },
      },
    });
  });
};


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
