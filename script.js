const parentTabs = document.querySelectorAll(".parent-tab");
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

parentTabs.forEach(parentTab => {
  parentTab.addEventListener("click", () => {
    parentTabs.forEach(tab => tab.classList.remove("active")); // Remove active class from all tabs
    parentTab.classList.toggle("active"); // Toggle active class on the clicked tab
  });
});

const testimonials = [
  {
      name: "John Smith",
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      position: "CEO, Company Name",
  },
  {
      name: "John Smith",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      position: "CEO, Company Name",
  },
  {
      name: "Bob Johnson",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      position: "CEO, Company Name",
  },
];

let currentIndex = 0;

function createTestimonialElement(testimonial, index) {
  const div = document.createElement('div');
  div.className = 'testimonial';
  div.innerHTML = `
        <p>${testimonial.text}</p>
        <h3>${testimonial.name}</h3>
        <h2>${testimonial.position}</h2>
  `;
  return div;
}

function updateCarousel() {
  carousel.innerHTML = '';
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
      carousel.appendChild(createTestimonialElement(testimonials[currentIndex], currentIndex));
  } else {
      const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      const nextIndex = (currentIndex + 1) % testimonials.length;

      carousel.appendChild(createTestimonialElement(testimonials[prevIndex], prevIndex));
      const activeTestimonial = createTestimonialElement(testimonials[currentIndex], currentIndex);
      activeTestimonial.classList.add('active');
      carousel.appendChild(activeTestimonial);
      carousel.appendChild(createTestimonialElement(testimonials[nextIndex], nextIndex));
  }
}

function showNext() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateCarousel();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateCarousel();
}

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

// Responsive behavior
function handleResize() {
  updateCarousel();
}

window.addEventListener('resize', handleResize);

// Initial setup
updateCarousel();

function onlyOne(checkbox) {
  document.querySelectorAll('input[name="option"]').forEach((item) => {
      if (item !== checkbox) item.checked = false;
  });
}

function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}