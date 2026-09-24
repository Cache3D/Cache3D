const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const videos = entry.target.querySelectorAll("video");
    videos.forEach((video) => {
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  });
}, { rootMargin: "120px 0px", threshold: 0.05 });

document.querySelectorAll(".comparison-card").forEach((card) => videoObserver.observe(card));
