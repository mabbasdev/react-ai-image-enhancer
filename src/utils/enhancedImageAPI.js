import axios from "axios";

// IMPROVEMENT SUGGESTION: Move API_KEY to a .env file (VITE_PICWISH_API_KEY) so it isn't exposed publicly in source code.
const API_KEY = 'wx6v55mtppm4doifq';
const BASE_URL = 'https://techhk.aoscdn.com';

export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file);
        console.log("Image Upload Success", taskId);

        const enhancedImageData = await PollForEnhancedImage(taskId);
        console.log("Enhanced Image data:", enhancedImageData);
        return enhancedImageData;

    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY,
            },
        }
    );

    if (!data?.data?.task_id) {
        throw new Error("Failed to upload, try again!");
    }

    return data.data.task_id;
};

const fetchEnhancedImage = async (taskId) => {
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers: {
                "X-API-KEY": API_KEY,
            },
        }
    );

    if (!data?.data?.task_id) {
        throw new Error("Failed to fetch image, Image not found!");
    }
    return data.data;
};

const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);

    if (result.state === 4) {
        console.log("Processing...");
        if (retries >= 20) {
            throw new Error("Max retries reached");
        }
        await new Promise((resolve) => setTimeout(resolve, 2000));
        return PollForEnhancedImage(taskId, retries + 1);
    }

    console.log("Enhanced ImageURL", result);
    return result;
};