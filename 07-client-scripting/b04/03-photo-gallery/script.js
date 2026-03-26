document.addEventListener("DOMContentLoaded", async () => {
  document.querySelector("#add-photo").addEventListener("click", async () => {
    const res = await fetch("https://picsum.photos/600");
    const data = await res.blob();
    const img = document.createElement("img");
    // img.src = "https://picsum.photos/600";
    img.src = URL.createObjectURL(data);
    img.alt = "Random photo from Picsum";
    img.addEventListener("click", async (e) => {
      if (e.altKey) {
        img.remove();
      } else if (e.metaKey) {
        window.open(img.src, "_blank");
      } else {
        const res = await fetch("https://picsum.photos/600");
        const data = await res.blob();
        img.src = URL.createObjectURL(data);
      }
    });
    document.querySelector("#gallery").appendChild(img);
  });
});
