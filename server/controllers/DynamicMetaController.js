const metaTags = {
    "ComputerPage": {
        title: "ComputerLabs | Pabitra Memorial School",
        description: "Learn with ComputerLab at Pabitra Memorial School",
        image: "https://pabitraschool.onrender.com/assets/learning-CV-_t3La.jpg",
        url: "https://pabitraschool.onrender.com/ComputerPage",
    },
    "sports": {
        title: "sports | Pabitra Memorial School",
        description: "Explore the Science Lab at Pabitra Memorial School",
        image: "https://pabitraschool.onrender.com/assets/solving-ecHi7LiK.jpg",
        url: "https://pabitraschool.onrender.com/sports",
    },
};
exports.dynamic_Meta = (req, res) => {

    const {
        page
    } = req.params;
    const meta = metaTags[page] || metaTags["ComputerPage"];
    return res.status(200).json(meta)

}