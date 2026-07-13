(function () {
  function resetCopyState(button) {
    var platform = button.querySelector("span").textContent;
    var label = "Copy " + platform + " ID";

    button.classList.remove("is-copied");
    button.setAttribute("aria-label", label);
    button.setAttribute("title", label);
  }

  function showCopied(button) {
    button.classList.add("is-copied");
    button.setAttribute("aria-label", "Copied");
    button.setAttribute("title", "Copied");
    window.setTimeout(function () { resetCopyState(button); }, 1500);
  }

  function copyFallback(value) {
    var input = document.createElement("textarea");
    input.value = value;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    var copied = document.execCommand("copy");
    document.body.removeChild(input);
    return copied;
  }

  document.querySelectorAll(".author__contact-copy").forEach(function (button) {
    button.addEventListener("click", function () {
      var value = button.getAttribute("data-copy-text");
      if (!value) return;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(value)
          .then(function () { showCopied(button); })
          .catch(function () {
            if (copyFallback(value)) showCopied(button);
          });
      } else if (copyFallback(value)) {
        showCopied(button);
      }
    });
  });
})();
