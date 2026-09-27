/* =====================================================
   ORGANELLE INFORMATION
===================================================== */

const organelleData = {

    cellmembrane: {
        title: "Cell Membrane",
        category: "BOUNDARY & TRANSPORT",
        image: "https://i.pinimg.com/originals/ab/55/dd/ab55ddf63b29e685623e5097c119ee79.jpg",

        description:
            "The cell membrane is a thin, flexible boundary that surrounds the cell and separates the internal environment from the outside environment.",

        function:
            "Controls what enters and leaves the cell and helps maintain internal balance.",

        feature:
            "Made mainly of a phospholipid bilayer containing proteins.",

        found:
            "Plant cells and animal cells"
    },


    cytoplasm: {
        title: "Cytoplasm",
        category: "INTERNAL MATRIX",
        image: "https://diak46rl5chc7.cloudfront.net/orgs/84716/post_details/kts21p5gpvgtr2hh/x1500_kts21p5gpvgtr2hh.jpg",

        description:
            "Cytoplasm is the material between the cell membrane and nucleus containing the cytosol and many cellular structures.",

        function:
            "Provides a medium where many metabolic and biochemical reactions occur.",

        feature:
            "Contains cytosol and supports cellular components.",

        found:
            "Plant cells and animal cells"
    },


    nucleus: {
        title: "Nucleus",
        category: "CONTROL CENTER",
        image: "https://cdn.britannica.com/53/116253-050-AC41C0FE/eukaryote-cells-nucleus-nucleoplasm-chromatin-membrane-envelope.jpg",

        description:
            "The nucleus is a membrane-bound organelle that stores most of the cell's genetic material.",

        function:
            "Controls gene expression and coordinates many activities of the cell.",

        feature:
            "Contains DNA organized into chromosomes.",

        found:
            "Plant cells and animal cells"
    },


    cytoskeleton: {
        title: "Cytoskeleton",
        category: "STRUCTURAL SUPPORT",
        image: "https://thumbs.dreamstime.com/z/cytoskeleton-structure-as-complex-dynamic-network-interlinking-protein-filaments-outline-diagram-labeled-educational-cell-233639056.jpg",

        description:
            "The cytoskeleton is a network of protein filaments extending throughout the cytoplasm.",

        function:
            "Maintains cell shape, supports organelles and helps with cellular movement.",

        feature:
            "Made of microtubules, microfilaments and intermediate filaments.",

        found:
            "Plant cells and animal cells"
    },


    centriole: {
        title: "Centriole",
        category: "CELL DIVISION",
        image: "https://4.bp.blogspot.com/-5nV4s0i6Few/U75JhjjF67I/AAAAAAAAAHU/Tl9PoYovvnE/s1600/centriole.jpg",

        description:
            "Centrioles are cylindrical structures made of microtubules and are commonly found in animal cells.",

        function:
            "Help organize microtubules and participate in the formation of the spindle during cell division.",

        feature:
            "Usually occur as a pair inside the centrosome.",

        found:
            "Primarily animal cells"
    },


    mitochondrion: {
        title: "Mitochondrion",
        category: "ENERGY PRODUCTION",
        image: "https://i.pinimg.com/originals/85/b5/71/85b5717994fcfa6f39082323a22870e2.jpg",

        description:
            "Mitochondria are double-membrane organelles responsible for most aerobic cellular respiration.",

        function:
            "Generate ATP, the major energy currency used by cells.",

        feature:
            "Has an outer membrane, inner membrane and folded cristae.",

        found:
            "Plant cells and animal cells"
    },


    endoplasmicreticulum: {
        title: "Endoplasmic Reticulum",
        category: "SYNTHESIS & TRANSPORT",
        image: "https://www.vedantu.com/question-sets/5fb011dd-a715-4612-92af-26acf62a0ab56751384921375060542.png",

        description:
            "The endoplasmic reticulum is an interconnected membrane system extending throughout the cytoplasm.",

        function:
            "Rough ER is involved in protein synthesis while smooth ER is involved in lipid synthesis and other processes.",

        feature:
            "Exists as rough ER with ribosomes and smooth ER without ribosomes.",

        found:
            "Plant cells and animal cells"
    },


    ribosome: {
        title: "Ribosome",
        category: "PROTEIN SYNTHESIS",
        image: "https://thumbs.dreamstime.com/z/ribosome-diagram-251989207.jpg",

        description:
            "Ribosomes are tiny molecular structures made of ribosomal RNA and proteins.",

        function:
            "Read messenger RNA and assemble amino acids into proteins.",

        feature:
            "Can be free in the cytoplasm or attached to rough ER.",

        found:
            "Plant cells and animal cells"
    },


    golgibodies: {
        title: "Golgi Bodies",
        category: "PROCESSING & PACKAGING",
        image: "https://i.pinimg.com/originals/6f/35/6b/6f356b97b7b2ab977a89227caf708a79.jpg",

        description:
            "The Golgi apparatus consists of flattened membrane-bound sacs involved in processing cellular products.",

        function:
            "Modifies, sorts and packages proteins and lipids for transport.",

        feature:
            "Consists of stacked flattened sacs called cisternae.",

        found:
            "Plant cells and animal cells"
    },


    lysosomes: {
        title: "Lysosomes",
        category: "CELLULAR DIGESTION",
        image: "https://cdn4.vectorstock.com/i/1000x1000/33/63/structure-of-lysosomes-infographics-vector-11593363.jpg",

        description:
            "Lysosomes are membrane-bound vesicles containing digestive enzymes.",

        function:
            "Break down cellular waste, damaged organelles and certain foreign materials.",

        feature:
            "Contain hydrolytic enzymes that function in an acidic environment.",

        found:
            "Mainly animal cells"
    },


    vacuole: {
        title: "Vacuole",
        category: "STORAGE",
        image: "https://i.pinimg.com/originals/72/90/ef/7290efd7fdb25451b2192d3d420d83b0.jpg",

        description:
            "Vacuoles are membrane-bound compartments used for storage and maintaining cellular conditions.",

        function:
            "Store water, nutrients, pigments and waste materials.",

        feature:
            "Plant cells typically contain a large central vacuole.",

        found:
            "Plant and animal cells, with major differences in size"
    },


    chloroplast: {
        title: "Chloroplast",
        category: "PHOTOSYNTHESIS",
        image: "https://search-static.byjusweb.com/question-images/toppr_ext/questions/799799_827172_ans_de96573a16244f72ac78c1da73938873.png",

        description:
            "Chloroplasts are green, double-membrane organelles that contain chlorophyll and are responsible for photosynthesis.",

        function:
            "Convert light energy into chemical energy stored in glucose.",

        feature:
            "Contains chlorophyll and internal structures called thylakoids.",

        found:
            "Plant cells and many photosynthetic organisms"
    }

};


/* =====================================================
   MODAL ELEMENTS
===================================================== */

const modal = document.getElementById("modal");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");

const modalFunction = document.getElementById("modalFunction");
const modalFeature = document.getElementById("modalFeature");
const modalFound = document.getElementById("modalFound");

const modalClose = document.getElementById("modalClose");


/* =====================================================
   OPEN ORGANELLE MODAL
===================================================== */

function openOrganelle(key) {

    const data = organelleData[key];

    if (!data) {
        return;
    }

    modalImage.src = data.image;
    modalImage.alt = data.title;

    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;

    modalDescription.textContent = data.description;

    modalFunction.textContent = data.function;
    modalFeature.textContent = data.feature;
    modalFound.textContent = data.found;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* =====================================================
   CLOSE MODAL
===================================================== */

function closeOrganelleModal() {

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


modalClose.addEventListener("click", closeOrganelleModal);


/* Click outside modal */

modal.addEventListener("click", function(event) {

    if (event.target === modal) {
        closeOrganelleModal();
    }

});


/* ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeOrganelleModal();

        closeMembersModal();

    }

});


/* =====================================================
   ORGANELLE CARDS
===================================================== */

document.querySelectorAll(".organelle-card").forEach(card => {

    card.addEventListener("click", function() {

        const key = card.dataset.organelle;

        openOrganelle(key);

    });

});


/* =====================================================
   SEARCH
===================================================== */

const searchInput =
    document.getElementById("organelleSearch");

searchInput.addEventListener("input", function() {

    const query =
        searchInput.value.toLowerCase().trim();

    document.querySelectorAll(".organelle-card")
        .forEach(card => {

            const name =
                card.dataset.name.toLowerCase();

            if (name.includes(query)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

});


/* =====================================================
   FILTERS
===================================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function() {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.dataset.filter;

        document.querySelectorAll(".organelle-card")
            .forEach(card => {

                const type =
                    card.dataset.type;

                if (
                    filter === "all" ||
                    type === filter ||
                    (filter === "both" && type === "both")
                ) {

                    card.style.display = "";

                } else {

                    card.style.display = "none";

                }

            });

    });

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");

menuToggle.addEventListener("click", function() {

    mainNav.classList.toggle("open");

});


/* Close mobile menu after clicking link */

document.querySelectorAll("#mainNav a")
    .forEach(link => {

        link.addEventListener("click", function() {

            mainNav.classList.remove("open");

        });

    });


/* =====================================================
   MEMBERS MODAL
===================================================== */

const membersBtn =
    document.getElementById("membersBtn");

const membersModal =
    document.getElementById("membersModal");

const membersClose =
    document.getElementById("membersClose");


membersBtn.addEventListener("click", function() {

    membersModal.classList.add("show");

    document.body.style.overflow = "hidden";

});


function closeMembersModal() {

    membersModal.classList.remove("show");

    document.body.style.overflow = "";

}


membersClose.addEventListener(
    "click",
    closeMembersModal
);


membersModal.addEventListener(
    "click",
    function(event) {

        if (event.target === membersModal) {

            closeMembersModal();

        }

    }
);


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");

themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});


/* =====================================================
   BACK TO TOP
===================================================== */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", function() {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", function() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   LEARN MORE - CELL INFORMATION
===================================================== */

document.querySelectorAll(".learn-btn")
    .forEach(button => {

        button.addEventListener("click", function() {

            const type =
                button.dataset.info;

            if (type === "animal") {

                alert(
                    "Animal cells are eukaryotic cells containing a nucleus and membrane-bound organelles. They do not have a cell wall or chloroplasts."
                );

            }

            if (type === "plant") {

                alert(
                    "Plant cells contain a cell wall, chloroplasts and a large central vacuole in addition to common eukaryotic organelles."
                );

            }

        });

    });
