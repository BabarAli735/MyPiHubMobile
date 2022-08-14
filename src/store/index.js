import { newRidgeState } from "react-ridge-state";

export const clinicInfoState = newRidgeState({
  name: "Klinik Pakar Kesihatan USIM",
  cover:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPW4MXjqk9PzCj94YZlVDG61fmGhedZGcSg&usqp=CAU",
  doctors: [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhb-32FrxIatoS-BYUW1KYRzHQGb60zy6APg&usqp=CAU",
      name: "Ahmad",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhb-32FrxIatoS-BYUW1KYRzHQGb60zy6APg&usqp=CAU",
      name: "Bashir",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWn6YwC2zNPuZtX5an33mI8_fOXr4jG3KwQ&usqp=CAU",
      name: "John",
    },
  ],
  services: [
    { title: "Nice Work", describe: "Working with better condations" },
    { title: "Nice Work", describe: "Working with better condations" },
    { title: "Nice Work", describe: "Working with better condations" },
  ],
  patientServices: [
    { title: "Wifi", describe: "Good wifi support", link: "Check it here" },
    { title: "On Time", describe: "Good On Time Services" },
  ],
  patientSupports: [
    "Guest Services",
    "International Patient Services",
    "Language & Disability Services",
  ],
  insurences: [{ title: "Wifi", describe: "Good wifi support" }],
  treatments: ["HeadAche", "Lab"],
  location: { address: "", fullAddress: "", phone: "" },
});
