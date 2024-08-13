import Imageone from "../../images/Blog-image.jpg";
import Imagetwo from "../../images/book-image.jpg";
import Imagethree from "../../images/secrets-image.jpg";

const projectData = [
    {
        id:2,
        name: "Blog-webapplication",
        image: Imageone,
        link: process.env.REACT_APP_PROJECT1_URL,
    },

    {
        id:3,
        name: "Book-Notes App",
        image: Imagetwo,
        link: process.env.REACT_APP_PROJECT2_URL
    },

    {
        id:2,
        name: "Secrets App",
        image: Imagethree,
        link: process.env.REACT_APP_PROJECT3_URL
    },
]

const filterData = [
    {
        filterId: 1,
        label: "All"
    },

    {
        filterId: 2,
        label: "Development"
    },

    {
        filterId: 3,
        label: "Design"
    }
]

export { projectData, filterData }