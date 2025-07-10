export default async function handler(req, res) {
  const response = await fetch("https://n8n2.grog-pro.ru/webhook/raceorly", {
    method: "POST",
  });
  const data = await response.json();

  res.status(200).json({
    columns: [
      { id: "id", name: "ID", type: "number" },
      { id: "name", name: "Name", type: "string" },
      { id: "article_numbers", name: "Article Numbers", type: "string" },
      { id: "short_text", name: "Short Text", type: "string" },
      { id: "description", name: "Description", type: "string" },
      { id: "feature_1", name: "Feature 1", type: "string" },
      { id: "feature_2", name: "Feature 2", type: "string" },
      { id: "feature_3", name: "Feature 3", type: "string" },
      { id: "feature_4", name: "Feature 4", type: "string" },
      { id: "feature_5", name: "Feature 5", type: "string" },
      { id: "feature_6", name: "Feature 6", type: "string" },
      { id: "feature_7", name: "Feature 7", type: "string" },
      { id: "feature_8", name: "Feature 8", type: "string" },
      { id: "feature_9", name: "Feature 9", type: "string" },
      { id: "feature_10", name: "Feature 10", type: "string" },
      { id: "image_1", name: "Image 1", type: "string" },
      { id: "image_2", name: "Image 2", type: "string" },
      { id: "image_3", name: "Image 3", type: "string" },
      { id: "image_4", name: "Image 4", type: "string" },
      { id: "image_5", name: "Image 5", type: "string" },
      { id: "image_6", name: "Image 6", type: "string" },
      { id: "image_7", name: "Image 7", type: "string" },
      { id: "image_8", name: "Image 8", type: "string" },
      { id: "image_9", name: "Image 9", type: "string" },
      { id: "image_10", name: "Image 10", type: "string" },
      { id: "image_11", name: "Image 11", type: "string" },
      { id: "image_12", name: "Image 12", type: "string" },
      { id: "image_13", name: "Image 13", type: "string" },
      { id: "image_14", name: "Image 14", type: "string" },
      { id: "image_15", name: "Image 15", type: "string" }
    ],
    rows: Array.isArray(data) ? data : [],
    totalCount: Array.isArray(data) ? data.length : 0
  });
}
