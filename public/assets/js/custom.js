document.addEventListener("DOMContentLoaded", function () {
    const saved = localStorage.getItem("selectedFaqTab");
    if (!saved) return;

    const { checkboxId } = JSON.parse(saved);

    // Set checkbox state
    const allCheckboxes = document.querySelectorAll('.faqUl .form-check-input');
    allCheckboxes.forEach(cb => cb.checked = false);
    const selectedCheckbox = document.getElementById(checkboxId);
    if (selectedCheckbox) selectedCheckbox.checked = true;

    // Keep checking for the #channels section to appear
    const waitForElement = (selector, maxTries = 20, delay = 200) => {
      return new Promise((resolve, reject) => {
        let tries = 0;

        const check = () => {
          const el = document.querySelector(selector);
          if (el) {
            resolve(el);
          } else if (tries >= maxTries) {
            reject(`Element ${selector} not found`);
          } else {
            tries++;
            setTimeout(check, delay);
          }
        };

        check();
      });
    };

    waitForElement("#channels", 25, 200)
      .then((section) => {
        const yOffset = -50; // adjust for your sticky header
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        console.log("✅ Scrolled to #channels");
        localStorage.removeItem("selectedFaqTab");
      })
      .catch((err) => {
        console.warn("⚠️", err);
      });
  });



document.querySelectorAll('svg[id^="eyeIcon"]').forEach(icon => {
    icon.addEventListener('click', () => {
      const parentDiv = icon.closest('.inputIcon');
      const input = parentDiv.querySelector('input[type="password"], input[type="text"]');
      const eyeLine = icon.querySelector('line');

      const isHidden = input.type === 'password';
      input.type = isHidden ? 'text' : 'password';

      if (eyeLine) {
        eyeLine.style.display = isHidden ? 'block' : 'none';
      }
    });
  });





  document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".form-check-input");
    const serviceItems = document.querySelectorAll(".service-item"); 

    function updateTabsVisibility() {
      const checked = Array.from(checkboxes).filter(cb => cb.checked);
      const activeTabs = checked.map(cb => cb.id.replace("check", "").toLowerCase());

      if (activeTabs.length === 0) {
        // Show all if nothing is checked
        serviceItems.forEach(item => item.style.display = "flex");
      } else {
        // Show only checked tabs
        serviceItems.forEach(item => {
          const tabClass = item.classList[1]; // assumes 2nd class is "channel" / "integrations" / "llm"
          item.style.display = activeTabs.includes(tabClass) ? "flex" : "none";
        });
      }
    }

    // Bind event listeners
    checkboxes.forEach(cb => {
      cb.addEventListener("change", updateTabsVisibility);
    });

    // Initial visibility
    updateTabsVisibility();
  });


gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".visual-tilt-content", 
  {
    scale: 0.6,
    opacity: 0.4,
    transformOrigin: "center center",
  },
  {
    scale: 1,
    opacity: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "#sectionTilt",
      start: "top 95%",
      end: "bottom 90%",
      scrub: true,
      markers: false,
    }
  }
);


document.addEventListener("DOMContentLoaded", function () {
  const data = localStorage.getItem("scrollToTab");
  if (!data) return;

  const { accordionId, tabContentId, tabLinkId } = JSON.parse(data);

  const scrollToSection = () => {
    const section = document.getElementById("aiAgentSection");
    if (section) {
      const yOffset = -100; // Adjust this based on your sticky header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const closeOtherAccordions = () => {
    const allAccordions = document.querySelectorAll('.accordion-collapse');
    allAccordions.forEach(accordion => {
      if (accordion.id !== accordionId) {
        accordion.classList.remove('show');
        const button = document.querySelector(`[data-bs-target="#${accordion.id}"]`);
        if (button) {
          button.setAttribute('aria-expanded', 'false');
          button.classList.add('collapsed');
        }

        const instance = bootstrap.Collapse.getInstance(accordion);
        if (instance) instance.hide();
      }
    });
  };

  const activateTabAndScroll = () => {
    const targetAccordion = document.getElementById(accordionId);
    if (!targetAccordion) return;

    const handleTabActivation = () => {
      const tabs = targetAccordion.querySelectorAll('.nav-link');
      tabs.forEach(tab => {
        tab.classList.remove('active');
        const tabPane = document.querySelector(tab.getAttribute('href'));
        if (tabPane) tabPane.classList.remove('show', 'active');
      });

      const triggerEl = document.getElementById(tabLinkId);
      if (triggerEl) {
        triggerEl.classList.add('active');
        const tabPane = document.querySelector(triggerEl.getAttribute('href'));
        if (tabPane) {
          tabPane.classList.add('show', 'active');
          const tab = new bootstrap.Tab(triggerEl);
          tab.show();
        }
      }

      // Scroll AFTER everything is shown
      setTimeout(scrollToSection, 200);
    };

    if (!targetAccordion.classList.contains('show')) {
      const instance = bootstrap.Collapse.getOrCreateInstance(targetAccordion);
      targetAccordion.addEventListener('shown.bs.collapse', function onShown() {
        targetAccordion.removeEventListener('shown.bs.collapse', onShown);
        setTimeout(handleTabActivation, 100);
      }, { once: true });
      instance.show();
    } else {
      setTimeout(() => {
        handleTabActivation();
      }, 100);
    }
  };

  closeOtherAccordions();
  activateTabAndScroll();
  localStorage.removeItem("scrollToTab");
});






  function updateServiceScrollerClass() {
    const el = document.getElementById("serviceScrollerArea");
    if (!el) return;

    if (window.innerWidth > 1024) {
      el.classList.remove("service-scrollerArea");
    } else {
      el.classList.add("service-scrollerArea");
    }
  }

  // Call once on page load
  updateServiceScrollerClass();

  // Listen for screen resizing
  window.addEventListener("resize", updateServiceScrollerClass);


document.querySelectorAll('.customDropdown').forEach(dropdown => {
  dropdown.addEventListener('click', function (e) {
    // e.preventDefault(); // prevent default link action if needed
    // e.stopPropagation(); // stop click from bubbling up

    // Toggle the active class
    this.classList.toggle('active');

    // Close other open dropdowns (optional)
    document.querySelectorAll('.customDropdown').forEach(other => {
      if (other !== this) {
        other.classList.remove('active');
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const dropdownButtons = document.querySelectorAll('.dropdownBtn');

  dropdownButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();

      const dropdownToggle = this.closest('.dropdownToggle');
      const dropdownMenu = dropdownToggle.querySelector('.mobileDropdownUl');

      const isOpen = dropdownMenu.classList.contains('openDropdown');

      // Close all dropdowns
      document.querySelectorAll('.mobileDropdownUl').forEach(menu => {
        menu.classList.remove('openDropdown');
        menu.style.maxHeight = '0px';
      });
      document.querySelectorAll('.dropdownBtn').forEach(btn => {
        btn.classList.remove('open');
      });

      // If not already open, open it
      if (!isOpen) {
        dropdownMenu.classList.add('openDropdown');
        dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px";
        this.classList.add('open');
      }
    });
  });
});


function navigateToTab(sectionId, accordionId, tabContentId, tabLinkId) {
  localStorage.setItem(
    "scrollToTab",
    JSON.stringify({
      accordionId,
      tabContentId,
      tabLinkId,
    })
  );
  window.location.href = "{{ route('front.solutions') }}#aiAgentSection";
}





function openMobileNav(e) {
  if (e) e.preventDefault(); // ✅ Stops the page from jumping

  const mobileMenu = document.getElementById('mobileMenu');
  const hamburger = document.querySelector('.hamBurger');
  const navCross = document.querySelector('.navCross');
  const body = document.body;

  const isOpen = mobileMenu.classList.contains('openMobileMenu');

  if (isOpen) {
    mobileMenu.classList.remove('openMobileMenu');
    hamburger.style.display = 'block';
    navCross.style.display = 'none';
    body.classList.remove('no-scroll');
  } else {
    mobileMenu.classList.add('openMobileMenu');
    hamburger.style.display = 'none';
    navCross.style.display = 'block';
    body.classList.add('no-scroll');
  }
}






// Mega menu for phone: toggle between Resources and Company
function toggleSubMenu(menu) {
  const resourcesMenu = document.getElementById("resources-menu");
  const companyMenu = document.getElementById("company-menu");

  // If "Resources" is clicked
  if (menu === "resources") {
    // Close the company menu if it's open
    if (!companyMenu.classList.contains("hidden")) {
      companyMenu.classList.add("hidden");
      const companyArrow =
        companyMenu.previousElementSibling.querySelector("svg");
      if (companyArrow) {
        companyArrow.classList.remove("rotate-180");
      }
    }

    // Toggle the resources menu
    resourcesMenu.classList.toggle("hidden");
    const resourcesArrow =
      resourcesMenu.previousElementSibling.querySelector("svg");
    if (resourcesArrow) {
      resourcesArrow.classList.toggle("rotate-180");
    }
  }
  // If "Company" is clicked
  else if (menu === "company") {
    // Close the resources menu if it's open
    if (!resourcesMenu.classList.contains("hidden")) {
      resourcesMenu.classList.add("hidden");
      const resourcesArrow =
        resourcesMenu.previousElementSibling.querySelector("svg");
      if (resourcesArrow) {
        resourcesArrow.classList.remove("rotate-180");
      }
    }

    // Toggle the company menu
    companyMenu.classList.toggle("hidden");
    const companyArrow =
      companyMenu.previousElementSibling.querySelector("svg");
    if (companyArrow) {
      companyArrow.classList.toggle("rotate-180");
    }
  }
}

// Close the mobile menu when a mega menu link is clicked
function hideMenuOnLinkClick() {
  const menu = document.getElementById("mobile-menu");

  // Select all links inside the mega menus (Resources and Company)
  const megaMenuLinks = document.querySelectorAll(
    "#resources-menu a, #company-menu a"
  );

  megaMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden"); // Hide the mobile menu when clicking a mega menu link
    });
  });
}

// Call this function when the page loads
document.addEventListener("DOMContentLoaded", hideMenuOnLinkClick);

// Video
document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.querySelector(".play-btn");
  const videoContainer = document.getElementById("videoContainer");
  const closeBtn = document.getElementById("closeBtn");
  const video = document.getElementById("video");
  if (playBtn && videoContainer && closeBtn && video) {
    playBtn.addEventListener("click", function () {
      videoContainer.classList.remove("hidden");
      video.play();
    });
    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      videoContainer.classList.add("hidden");
      video.pause();
      video.currentTime = 0;
    });
  }
});
// FAQ
function toggleAccordion(index) {
  const accordingItems = document.querySelectorAll(".according");
  accordingItems.forEach((item, i) => {
    const content = item.querySelector(".according-content");
    const icon = item.querySelector(".according-header img");

    if (i === index) {
      item.classList.toggle("active");
      if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0";
      }
    } else {
      item.classList.remove("active");
      content.style.maxHeight = "0";
    }
  });
}

AOS.init({
  duration: 600, // Animation duration (1500ms)
  offset: 200, // Offset (200px from the trigger point)
  easing: "ease-in-out", // Easing function
  delay: 100, // Delay before animation starts
  once: false, // Animation happens only once
  mirror: false, // Do not reverse animation when scrolling out of view
  anchorPlacement: "top-center", // Trigger animation when the top of the element hits the center of the viewport
});


// $('.caseStudySlider').owlCarousel({
//   loop:true,
//   margin:10,
//   // nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })

$('.caseStudySlider').owlCarousel({
    items:4,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:2500,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        768: {
            items: 2
        },
         1024: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
    
})

$('.caseStudySlider2').owlCarousel({
    items:3,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:2500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})


  document.addEventListener('DOMContentLoaded', function () {
    const headerOffset = 110; // Adjust this value to match your header's height

    // Listen for clicks on links in the right column
    document.querySelectorAll('.right-column a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  
const sections = document.querySelectorAll('.scrollerItem');
const navLinks = document.querySelectorAll('.scrollAnchor');

const observerOptions = {
  root: null, // viewport
  threshold: 0.5 // 50% section visible hone par active hoga
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const relatedLink = document.querySelector(`.scrollAnchor[href="#${id}"]`);

    if (entry.isIntersecting) {
      // Remove active from all links
      navLinks.forEach(link => link.classList.remove('active'));
      // Add active to current visible section’s link
      relatedLink.classList.add('active');
    }
  });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
  observer.observe(section);
});

// Smooth scroll on click
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});




// image movement with mouse cursor animation script


// const card = document.querySelector('.tilt-card');
//       const images = card.querySelectorAll('img');
    
//       card.addEventListener('mousemove', (e) => {
//          const rect = card.getBoundingClientRect();
//          const x = e.clientX - rect.left;
//          const y = e.clientY - rect.top;
    
//          const centerX = rect.width / 2;
//          const centerY = rect.height / 2;
    
//          const rotateX = ((y - centerY) / centerY) * 10;
//          const rotateY = ((x - centerX) / centerX) * 10;
    
//          images.forEach((img, i) => {
//           const depthFactor = i === 0 ? 1 : 0.5;
//           img.style.transform = `rotateX(${-rotateX * depthFactor}deg) rotateY(${rotateY * depthFactor}deg) scale3d(1.02, 1.02, 1)`;
//          });
//       });
    
//       card.addEventListener('mouseleave', () => {
//          images.forEach((img) => {
//           img.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
//          });
//       });



//  counter

//   function animateCounter(el, endValue, duration = 2000) {
//     let start = 0;
//     const stepTime = Math.abs(Math.floor(duration / endValue));
//     const counterInterval = setInterval(() => {
//       start++;
//       el.textContent = start;
//       if (start === endValue) clearInterval(counterInterval);
//     }, stepTime);
//   }

//   const counters = document.querySelectorAll('.counterNumber p');

//   const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting && !entry.target.dataset.started) {
//         entry.target.dataset.started = "true";
//         animateCounter(entry.target, parseInt(entry.target.dataset.count));
//       }
//     });
//   }, { threshold: 0.5 });

//   counters.forEach(counter => {
//     observer.observe(counter);
//   });


function removeClassesOnMobile() {
  if (window.innerWidth <= 768) {
    const ids = ['tabScroll1', 'tabScroll2', 'tabScroll3','tabScroll4','tabScroll5'];
    const classesToRemove = ['service-scrollerItemContainer', 'stack-cards__item', 'js-stack-cards__item'];

    ids.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        classesToRemove.forEach(cls => {
          element.classList.remove(cls);
        });
      }
    });
  }
}

window.addEventListener('DOMContentLoaded', removeClassesOnMobile);
window.addEventListener('resize', removeClassesOnMobile); // Optional: handles screen resizing dynamically


function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  const body = document.body;

  const isMenuOpen = !menu.classList.contains("hidden");

  if (isMenuOpen) {
    menu.classList.add("hidden");
    body.classList.remove("no-scroll");
    console.log('Menu closed');
  } else {
    menu.classList.remove("hidden");
    body.classList.add("no-scroll");
    console.log('Menu opened');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuLinks = document.querySelectorAll("#mobile-menu a, #mobile-menu .open-modal-btn");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      toggleMenu(); // Close the menu when any link is clicked
    });
  });
});








