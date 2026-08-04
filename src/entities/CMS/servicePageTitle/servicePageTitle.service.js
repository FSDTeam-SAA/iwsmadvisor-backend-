import { ServicePageTitle } from "./servicePageTitle.model.js";

export const updateTitle = async (id, data) =>
  await ServicePageTitle.findByIdAndUpdate(id, data, { new: true, runValidators: true });
export const deleteTitle = async (id) => await ServicePageTitle.findByIdAndDelete(id);
