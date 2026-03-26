document.addEventListener("DOMContentLoaded", async () => {
  const button = document.querySelector("#add-photo");
  button.addEventListener("click", async () => {
    const response = await fetch("https://picsum.photos/480/");
    if (response.ok) {
      const blob = await response.blob();
      const img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      // img.src = "https://picsum.photos/200";
      img.alt = "random photo";
      img.addEventListener("click", async (e) => {
        if (e.altKey) {
          img.remove();
        } else {
          const response = await fetch("https://picsum.photos/480/");
          if (response.ok) {
            const blob = await response.blob();
            img.src = URL.createObjectURL(blob);
          }
        }
      });
      document.querySelector("#gallery").appendChild(img);
    }
  });
});
