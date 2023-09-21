import axios from "axios";

export async function fetchUnsplashPhotos(count = 32) {
  // Unsplash API client ID
  const clientID = "Rs91qqbsaSw52hlHbhXrp3kmSlslpEpxMVd6WkQClCc";

  try {
    const response = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        count,
        client_id: clientID,
      },
    });

    // Map the response data to extract photo URLs
    return response.data.map((photo) => ({
      url: photo.urls.regular,
    }));
  } catch (error) {
    console.error("Error fetching photos from Unsplash:", error);
    return [];
  }
}

export async function searchUnsplashPhotos(query, count = 32) {
  const clientID = "Rs91qqbsaSw52hlHbhXrp3kmSlslpEpxMVd6WkQClCc";

  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        per_page: count,
        client_id: clientID,
      },
    });

    return response.data.results.map((photo) => ({
      url: photo.urls.regular,
    }));
  } catch (error) {
    console.error("Error fetching photos from Unsplash:", error);
    return [];
  }
}
