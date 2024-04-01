function translateToRussian() {
    const elements = document.querySelectorAll("");
  
    for (const element of elements) {
      const key = element.getAttribute("data-translate");
      const translation = translations[key];
  
      element.textContent = translation;
    }
  }
  
  const translations = {
    "Latest-story": "Последняя история",

  };
  
  translateToRussian();
  