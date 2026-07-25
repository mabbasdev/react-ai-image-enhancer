import axios from "axios";

const API_KEY = 'wx6v55mtppm4doifq'
const BASE_URL = 'https://techhk.aoscdn.com'
// api/tasks/visual/scale'
export const enhancedImageAPI = async (file) => {
    try {
        const taskId = await uploadImage(file)
        console.log("Image Upload Success", taskId);


        // const enhancedImageData = await fetchEnhancedImage("e63f6e88-02de-45a3-abf0-f0e010a7c4ff")
        const enhancedImageData = await PollForEnhancedImage(taskId)
        console.log("Enhanced Image data:", enhancedImageData);
        return enhancedImageData

    } catch (error) {
        console.log(error.message);
    }
}

const uploadImage = async (file) => {
    // post the image
    const formData = new FormData();
    formData.append("image_file", file)

    const { data } = await axios.post(`${BASE_URL}/api/tasks/visual/scale`,
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
                "X-API-KEY": API_KEY,
            },
        }
    );
    // console.log(data)

    if (!data?.data?.task_id) {
        throw new Error("Failed to upload, try again!")
    }

    return data.data.task_id
}

const fetchEnhancedImage = async (taskId) => {
    // get the enhanced image
    const { data } = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${taskId}`,
        {
            headers: {
                "X-API-KEY": API_KEY,
            },
        }
    );
    // console.log(data.data.image);
    if (!data?.data?.task_id) {
        throw new Error("Failed to fetch image, Image not found!")
    }
    return data.data

}

const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId)

    if (result.state === 4) {
        console.log("Processing...");
        if (retries >= 20) {
            throw new Error("Max retries reached")
        }
        // wait for 2 second
        await new Promise((resolve) => setTimeout(resolve, 2000))

        return PollForEnhancedImage(taskId, retries + 1);
    }
    console.log("Enhanced ImageURL", result);
    return result

}