import axios from "axios"
type ImgbbResponse = {
  data: {
    url: string;
    display_url: string;
  };
};

export const uploadImageToImgbb = async (imageFile:File): Promise<string> => {
    try{
        const formData = new FormData()
        formData.append('image',imageFile)

        const api= `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`

        const res = await axios.post<ImgbbResponse>(api,formData)

        return res.data.data?.url;
    }
    catch(er){
       console.error("Image upload failed:", er);
       throw er
    }
}