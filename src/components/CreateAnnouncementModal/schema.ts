import * as yup from "yup";

export const createAnnouncementSchema = yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    color: yup.string().required(),
    year: yup.number().required(),
    fuel_type: yup.string().required(),
    mileage: yup.number().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    cover_image: yup.string().url().required(),
});