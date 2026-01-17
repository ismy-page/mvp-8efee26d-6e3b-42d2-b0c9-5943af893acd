(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const btn = document.getElementById("ctaButton");
  const out = document.getElementById("ctaResult");
  if (btn && out) {
    btn.addEventListener("click", () => {
      const subject = encodeURIComponent("Commission: Talking Masterpiece");
      const body = encodeURIComponent(
        "Hi — I’d like to commission a talking artwork.\n\nArtwork/idea: \nTimeline: \nUsage (personal/social/install): \nBudget: \n\nThanks!"
      );
      out.textContent = "Opening your email client…";
      window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    });
  }
})();

