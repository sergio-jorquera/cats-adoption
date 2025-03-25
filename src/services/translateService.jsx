const API_URL = "https://libretranslate.com/translate";

export async function translateText(text, targetLang = "es") {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      q: text,
      source: "auto",
      target: targetLang,
      format: "text",
    }),
  });

  const data = await response.json();
  return data.translatedText;
}
