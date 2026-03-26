document.addEventListener("DOMContentLoaded", async () => {
  document.querySelector("#add-photo").addEventListener("click", async () => {
    const res = await fetch("https://picsum.photos/480");
    if (res.ok) {
      const blob = await res.blob();
      const img = document.createElement("img");
      img.src = URL.createObjectURL(blob);
      // img.src = "https://picsum.photos/480";
      img.alt = "Random photo from Picsum";
      img.addEventListener("click", async (e) => {
        if (e.altKey) {
          img.remove();
        } else {
          const res = await fetch("https://picsum.photos/480");
          if (res.ok) {
            const blob = await res.blob();
            img.src = URL.createObjectURL(blob);
          }
        }
      });
      document.querySelector("#gallery").appendChild(img);
    }
  });
});
