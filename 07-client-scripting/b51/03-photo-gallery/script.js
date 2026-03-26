document.addEventListener("DOMContentLoaded", async () => {
  document.querySelector("#add-photo").addEventListener("click", async (_) => {
    const res = await fetch("https://picsum.photos/480");
    if (res.ok) {
      const data = await res.blob();
      const img = document.createElement("img");
      img.src = URL.createObjectURL(data);
      // img.src = "https://picsum.photos/480"; // doesn't work as the response is cached
      img.alt = "Random photo from Lorem Picsum";
      img.addEventListener("click", async (e) => {
        if (e.altKey) {
          img.parentNode.removeChild(img);
        } else {
          const res = await fetch("https://picsum.photos/480");
          if (res.ok) {
            const data = await res.blob();
            img.src = URL.createObjectURL(data);
          }
        }
      });
      document.querySelector("#gallery").appendChild(img);
    }
  });
});
