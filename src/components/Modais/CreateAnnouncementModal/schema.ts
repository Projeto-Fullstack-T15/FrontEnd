import * as yup from "yup";

export const createAnnouncementSchema = yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required(),
    fuelType: yup.string().required(),
    mileage: yup.number().required(),
    color: yup.string().required(),
    price: yup.number().required(),
    description: yup.string().required(),
    coverImage: yup.string().required(),
    gallery: yup.array(yup.string()).required(),
});